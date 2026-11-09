// Glitch effect adapted from Originkit's "Glitch Text": the content shakes while random
// horizontal slices of it flicker in and out (clip-path), with a hue shift.
// Only the animation is kept: the text keeps the font, size, style and colour of its parent.
// Unlike the original (which glitches forever while visible), it plays a short burst when it
// scrolls into view, again while hovered, and once per tap on touch screens.
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

type GlitchTextProps = {
  children: ReactNode;
  /** Length of the burst played on scroll-in and on tap, in ms. */
  burstMs?: number;
  shake?: { intensity: number; x: number; y: number };
  slice?: { intensity: number; minHeight: number; maxHeight: number };
  className?: string;
};

// Same keyframe recipe as the original: 9 steps, each showing a random band of the text.
// The original cut `height`% from the bottom on top of `top`% from the top, which often hid
// the text entirely; here the visible band really is `height`% tall.
function buildSliceKeyframes(minHeight: number, maxHeight: number) {
  let frames = '';
  for (let i = 0; i <= 8; i++) {
    const pct = (i / 8) * 100;
    const offset = (Math.random() * 2 - 1) * 10;
    const height = minHeight + Math.random() * (maxHeight - minHeight);
    const hue = Math.floor(Math.random() * 360);
    const top = Math.max(0, Math.min(100 - height, 50 + offset));
    const bottom = Math.max(0, 100 - top - height);
    frames += `${pct}% { clip-path: inset(${top}% 0 ${bottom}% 0); filter: hue-rotate(${hue}deg); }\n`;
  }
  return frames;
}

const GlitchText = ({
  children,
  burstMs = 900,
  shake = { intensity: 10, x: 10, y: 10 },
  slice = { intensity: 50, minHeight: 25, maxHeight: 75 },
  className,
}: GlitchTextProps) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);
  const [bursting, setBursting] = useState(false);
  const burstTimer = useRef<ReturnType<typeof setTimeout>>();
  const name = `glitch-${useId().replace(/:/g, '')}`;
  const sliceFrames = useMemo(() => buildSliceKeyframes(slice.minHeight, slice.maxHeight), [slice.minHeight, slice.maxHeight]);

  const burst = () => {
    if (reduce) return;
    setBursting(true);
    clearTimeout(burstTimer.current);
    burstTimer.current = setTimeout(() => setBursting(false), burstMs);
  };

  // Burst each time the text scrolls (back) into view, like the original's replay.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    let inside = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inside) {
          inside = true;
          burst();
        } else if (!entry.isIntersecting) {
          inside = false;
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(burstTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  const playing = !reduce && (hovered || bursting);
  const shakeMs = Math.max(50, 1000 / Math.max(1, shake.intensity));
  const sliceMs = Math.max(50, 1000 / Math.max(1, slice.intensity));

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-block' }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setHovered(false)}
      onPointerUp={(e) => e.pointerType !== 'mouse' && burst()}
    >
      <style>{`
        @keyframes ${name}-shake {
          0% { transform: translate(0, 0); }
          20% { transform: translate(${shake.x / 10}px, ${-shake.y / 10}px); }
          40% { transform: translate(${-shake.x / 10}px, ${shake.y / 10}px); }
          60% { transform: translate(${shake.x / 15}px, ${shake.y / 15}px); }
          80% { transform: translate(${-shake.x / 15}px, ${-shake.y / 15}px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes ${name}-slice {
          ${sliceFrames}
        }
      `}</style>
      <span
        style={{
          display: 'inline-block',
          animation: playing ? `${name}-shake ${shakeMs}ms linear infinite, ${name}-slice ${sliceMs}ms steps(1) infinite` : undefined,
        }}
      >
        {children}
      </span>
    </span>
  );
};

export default GlitchText;
