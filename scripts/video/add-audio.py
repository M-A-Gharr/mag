"""Synthesize an elegant ambient soundtrack + transition SFX and mux it into the presentation.

Usage: python add-audio.py <input.mp4> <output.mp4>
Requires numpy + scipy. No voice-over, everything is generated (royalty-free).
"""
import sys, subprocess, wave
from pathlib import Path
import numpy as np
from scipy.signal import butter, sosfilt, fftconvolve

SR = 48000
DUR = 60.0
N = int(SR * DUR)
rng = np.random.default_rng(7)

# Scene transitions measured in the final video (brightness dips between fades)
TRANSITIONS = [7.05, 15.05, 24.0, 33.0, 43.05, 52.1]
BEAT = 60 / 72  # 72 BPM


def midi(n):
    return 440.0 * 2 ** ((n - 69) / 12)


def env_adsr(n, a, r, sustain_len):
    t = np.arange(n) / SR
    e = np.minimum(1, t / max(a, 1e-4))
    rel_start = a + sustain_len
    e = np.where(t > rel_start, e * np.exp(-(t - rel_start) / max(r, 1e-4)), e)
    return e


def add(buf, sig, start, gain=1.0, pan=0.0):
    i = int(start * SR)
    if i >= N:
        return
    sig = sig[: N - i]
    l = np.cos((pan + 1) * np.pi / 4)
    r = np.sin((pan + 1) * np.pi / 4)
    buf[0, i : i + len(sig)] += sig * gain * l
    buf[1, i : i + len(sig)] += sig * gain * r


def piano(freq, length=4.0, vel=1.0):
    n = int(SR * length)
    t = np.arange(n) / SR
    out = np.zeros(n)
    B = 0.0004  # slight inharmonicity
    for k in range(1, 9):
        f = freq * k * np.sqrt(1 + B * k * k)
        if f > SR / 2.2:
            break
        amp = (1 / k ** 1.4) * (0.6 + 0.4 * vel ** (k / 3))
        decay = 2.8 / (1 + 0.55 * (k - 1)) * (220 / max(freq, 110)) ** 0.3
        out += amp * np.sin(2 * np.pi * f * t + rng.uniform(0, 6.28)) * np.exp(-t / decay)
    out *= np.minimum(1, t / 0.004)
    out *= np.minimum(1, (length - t) / 0.3)  # soft tail
    return out * vel


def pad(freqs, length, attack=1.8, release=2.2):
    n = int(SR * length)
    t = np.arange(n) / SR
    out = np.zeros(n)
    for f in freqs:
        for det in (-0.12, 0.0, 0.13):  # chorus by detuning (in Hz-cents-ish)
            ff = f * 2 ** (det / 12 / 4)
            ph = rng.uniform(0, 6.28)
            out += np.sin(2 * np.pi * ff * t + ph) + 0.18 * np.sin(4 * np.pi * ff * t + ph)
    out /= len(freqs) * 3
    trem = 1 + 0.06 * np.sin(2 * np.pi * 0.18 * t)
    e = np.minimum(1, t / attack) * np.minimum(1, np.maximum(0, (length - t) / release))
    return out * e * trem


def bell(freq, length=3.5):
    n = int(SR * length)
    t = np.arange(n) / SR
    partials = [(1, 1.0, 2.2), (2.76, 0.45, 1.2), (5.40, 0.25, 0.7), (8.93, 0.12, 0.4)]
    out = sum(a * np.sin(2 * np.pi * freq * p * t) * np.exp(-t / d) for p, a, d in partials)
    return out * np.minimum(1, t / 0.002)


def whoosh(length=1.3, peak=0.8, lo=300, hi=5000):
    """Band-passed noise sweeping upward, swelling to `peak` seconds."""
    n = int(SR * length)
    noise = rng.standard_normal(n)
    out = np.zeros(n)
    steps = 40
    seg = n // steps
    for s in range(steps):
        x = s / steps
        fc = lo * (hi / lo) ** (min(1, x / (peak / length)) ** 1.2)
        sos = butter(2, [fc * 0.6, min(fc * 1.6, SR / 2.1)], btype="band", fs=SR, output="sos")
        a, b = max(0, s * seg - seg), min(n, (s + 1) * seg + seg)
        chunk = sosfilt(sos, noise[a:b])
        w = np.hanning(len(chunk))
        out[a:b] += chunk * w
    t = np.arange(n) / SR
    e = np.where(t < peak, (t / peak) ** 2.2, np.exp(-(t - peak) / 0.18))
    return out * e


def sub_impact(length=2.5, f0=62):
    n = int(SR * length)
    t = np.arange(n) / SR
    f = f0 * (1 + 0.6 * np.exp(-t / 0.05))
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t / 0.7) * np.minimum(1, t / 0.006)


def reverb(stereo, length=2.8, mix=0.32):
    n = int(SR * length)
    t = np.arange(n) / SR
    out = np.zeros_like(stereo)
    for ch in range(2):
        ir = rng.standard_normal(n) * np.exp(-t / (length / 6.5))
        ir = sosfilt(butter(1, 6000, fs=SR, output="sos"), ir)
        ir[: int(0.012 * SR)] = 0  # pre-delay
        ir /= np.sqrt(np.sum(ir ** 2))
        out[ch] = fftconvolve(stereo[ch], ir)[: stereo.shape[1]]
    return stereo * (1 - mix) + out * mix * 1.6


# ---------------- Music ----------------
# D major, elegant progression. Each section = (start, chord notes MIDI, bass MIDI)
D, Bm, G, A, Em, F_sharp_m = (
    [62, 66, 69, 73, 76],   # Dmaj9
    [59, 62, 66, 69, 73],   # Bm9
    [55, 59, 62, 66, 69],   # Gmaj9
    [57, 61, 64, 66, 71],   # A6/9
    [52, 55, 59, 62, 66],   # Em9
    [54, 57, 61, 64, 69],   # F#m7(11)
)
bounds = [0.0] + TRANSITIONS + [DUR]
progression = [(D, 38), (Bm, 35), (G, 31), (A, 33), (Em, 28), (F_sharp_m, 30), (G, 31), (A, 33),
               (D, 38), (Bm, 35), (G, 31), (A, 33), (D, 38)]
# two chords per scene, last scene holds the resolution (Gmaj9 -> Dmaj9)
sections = []
for i in range(len(bounds) - 1):
    a, b = bounds[i], bounds[i + 1]
    if i == len(bounds) - 2:
        sections.append((a, DUR, progression[-1]))
    else:
        m = (a + b) / 2
        sections.append((a, m, progression[(2 * i) % 12]))
        sections.append((m, b, progression[(2 * i + 1) % 12]))

music = np.zeros((2, N))
for idx, (a, b, (notes, bass)) in enumerate(sections):
    length = b - a + 2.4
    add(music, pad([midi(n) for n in notes[:4]], length, attack=1.2 if idx else 2.5), a, 0.16, 0.0)
    add(music, pad([midi(bass + 12)], length, attack=0.8), a, 0.06, 0.0)

# Arpeggiated piano, eighth-note feel, humanized
pattern = [0, 2, 4, 3, 1, 3, 4, 2]
step = BEAT / 2
t = 0.25
k = 0
while t < 56.5:
    cur = next(s for s in sections if s[0] <= t < s[1])
    notes = cur[2][0]
    if t >= TRANSITIONS[-1] and t > TRANSITIONS[-1] + 3.5:
        break
    n = notes[pattern[k % 8]] + 12
    accent = 1.0 if k % 4 == 0 else 0.7
    vel = accent * rng.uniform(0.82, 1.0)
    jitter = rng.uniform(-0.008, 0.008)
    pan = [-0.35, 0.1, 0.35, -0.1][k % 4]
    # thin out the very beginning: just downbeats for the first bar
    if t > 2 * BEAT or k % 2 == 0:
        add(music, piano(midi(n), 3.2, vel), t + jitter, 0.13, pan)
    # low melodic note on each chord change
    if any(abs(t - s[0]) < step / 2 for s in sections):
        add(music, piano(midi(notes[0]), 5.0, 0.9), t, 0.11, -0.15)
    t += step
    k += 1

# Final resolving chord on piano
for j, n in enumerate([50, 57, 62, 66, 69, 76]):
    add(music, piano(midi(n), 7.0, 0.85), TRANSITIONS[-1] + 0.05 + j * 0.06, 0.09, -0.3 + j * 0.12)

music = reverb(music, 3.2, 0.38)

# ---------------- SFX ----------------
sfx = np.zeros((2, N))
for i, tr in enumerate(TRANSITIONS):
    w = whoosh(1.4, 0.85, 250, 4500)
    add(sfx, w, tr - 0.85, 0.11, -0.4 if i % 2 else 0.4)
    shimmer = bell(midi(81 + (2 if i % 2 else 0)), 3.0) * 0.6 + bell(midi(88), 3.0) * 0.35
    add(sfx, shimmer, tr + 0.12, 0.05, 0.25 if i % 2 else -0.25)
    add(sfx, sub_impact(1.6, 70), tr + 0.02, 0.05 if i < len(TRANSITIONS) - 1 else 0.10)

# Opening: soft impact + shimmer
add(sfx, sub_impact(2.0, 65), 0.05, 0.08)
add(sfx, bell(midi(86), 3.5) * 0.5 + bell(midi(93), 3.5) * 0.25, 0.15, 0.05, 0.2)
# Closing: rising shimmer into the signature
for j, n in enumerate([74, 78, 81, 86, 90]):
    add(sfx, bell(midi(n), 3.0), TRANSITIONS[-1] + 0.35 + j * 0.09, 0.03, -0.4 + j * 0.2)

sfx = reverb(sfx, 2.4, 0.3)

# ---------------- Mix ----------------
mix = music + sfx
mix = sosfilt(butter(2, 40, btype="high", fs=SR, output="sos"), mix, axis=1)
tt = np.arange(N) / SR
fade = np.minimum(1, tt / 0.05) * np.minimum(1, np.maximum(0, (DUR - tt) / 3.0))
mix *= fade
mix = np.tanh(mix * 1.2) / 1.2  # gentle soft clip
mix /= np.max(np.abs(mix)) / 0.89

src, dst = Path(sys.argv[1]), Path(sys.argv[2])
wav = dst.with_suffix(".wav")
with wave.open(str(wav), "wb") as f:
    f.setnchannels(2)
    f.setsampwidth(2)
    f.setframerate(SR)
    f.writeframes((mix.T * 32767).astype(np.int16).tobytes())

subprocess.run([
    "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(src), "-i", str(wav),
    "-map", "0:v:0", "-map", "1:a:0", "-c:v", "copy",
    "-af", "loudnorm=I=-18:TP=-1.5:LRA=9", "-ar", "48000",
    "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart", str(dst),
], check=True)
print("written", dst, "and", wav)
