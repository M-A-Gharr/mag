// Draws one cover per project (number, category, title, stack) on a canvas, for the
// crumple carousel, which can only show images. Redrawn when the language changes.
import { useEffect, useState } from 'react';

export type CoverInput = {
  title: string;
  category: string;
  stack: string[];
  /** Screenshot used as a darkened background, when the project has one. */
  image?: string;
};

// Same shape as the carousel cards (507 × 400).
const W = 1024;
const H = 808;
const PAD = 72;

const PALETTES: [string, string][] = [
  ['#0d0a2b', '#261bfb'],
  ['#120a2e', '#6d3df5'],
  ['#08142e', '#2f6bff'],
  ['#160a29', '#9b3df5'],
];

const loadImage = (src: string) =>
  new Promise<HTMLImageElement | null>((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/\s+\S*$/, '')}…`;
  }
  return lines;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

async function drawCover(input: CoverInput, index: number, rtl: boolean): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  const [deep, accent] = PALETTES[index % PALETTES.length];

  // Background: brand gradient, plus the screenshot when there is one.
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, deep);
  bg.addColorStop(1, accent);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  const shot = input.image ? await loadImage(input.image) : null;
  if (shot) {
    const s = Math.max(W / shot.naturalWidth, H / shot.naturalHeight);
    ctx.globalAlpha = 0.55;
    ctx.drawImage(shot, (W - shot.naturalWidth * s) / 2, (H - shot.naturalHeight * s) / 2, shot.naturalWidth * s, shot.naturalHeight * s);
    ctx.globalAlpha = 1;
  } else {
    // Fine grid for texture.
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= W; x += 48) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, H);
      ctx.stroke();
    }
    for (let y = 0; y <= H; y += 48) {
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(W, y + 0.5);
      ctx.stroke();
    }
  }

  const glow = ctx.createRadialGradient(W * (rtl ? 0.2 : 0.8), H * 0.15, 0, W * (rtl ? 0.2 : 0.8), H * 0.15, W * 0.7);
  glow.addColorStop(0, 'rgba(155,135,245,0.45)');
  glow.addColorStop(1, 'rgba(155,135,245,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // Bottom scrim so the title always reads.
  const scrim = ctx.createLinearGradient(0, H * 0.3, 0, H);
  scrim.addColorStop(0, 'rgba(8,6,24,0)');
  scrim.addColorStop(1, 'rgba(8,6,24,0.92)');
  ctx.fillStyle = scrim;
  ctx.fillRect(0, 0, W, H);

  ctx.direction = rtl ? 'rtl' : 'ltr';
  const startX = rtl ? W - PAD : PAD;
  const endX = rtl ? PAD : W - PAD;
  const align: CanvasTextAlign = rtl ? 'right' : 'left';

  // Number.
  ctx.textBaseline = 'top';
  ctx.textAlign = align;
  ctx.font = '600 44px Inter, system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.fillText(String(index + 1).padStart(2, '0'), startX, PAD);
  const numW = ctx.measureText('00').width;
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.fillRect(rtl ? startX - numW - 76 : startX + numW + 20, PAD + 22, 56, 3);

  // Category pill.
  ctx.font = '600 28px Inter, system-ui, sans-serif';
  const pillText = input.category;
  const pillW = ctx.measureText(pillText).width + 48;
  const pillX = rtl ? endX : endX - pillW;
  roundRect(ctx, pillX, PAD - 4, pillW, 56, 28);
  ctx.fillStyle = 'rgba(255,255,255,0.14)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(pillText, pillX + pillW / 2, PAD + 24);

  // Title and stack, anchored to the bottom.
  ctx.textAlign = align;
  ctx.textBaseline = 'alphabetic';
  ctx.font = '500 30px Inter, system-ui, sans-serif';
  ctx.fillStyle = '#c9c3ff';
  const stackLine = wrapLines(ctx, input.stack.slice(0, 4).join('  ·  '), W - PAD * 2, 1)[0] ?? '';
  const stackY = H - PAD;
  ctx.fillText(stackLine, startX, stackY);

  ctx.font = '700 76px Inter, system-ui, sans-serif';
  ctx.fillStyle = '#ffffff';
  const lines = wrapLines(ctx, input.title, W - PAD * 2, 3);
  const lineH = 86;
  lines.forEach((line, i) => {
    ctx.fillText(line, startX, stackY - 56 - (lines.length - 1 - i) * lineH);
  });

  return canvas.toDataURL('image/jpeg', 0.9);
}

/** Cover data URLs for the given projects; empty until the first set is drawn. */
export function useProjectCovers(inputs: CoverInput[], lang: string) {
  const [covers, setCovers] = useState<string[]>([]);
  const key = JSON.stringify(inputs) + lang;

  useEffect(() => {
    let cancelled = false;
    const rtl = lang === 'ar';
    (async () => {
      try {
        await document.fonts.load('700 76px Inter');
        await document.fonts.load('600 28px Inter');
      } catch {
        // Fall back to the system font.
      }
      const result = await Promise.all(inputs.map((input, i) => drawCover(input, i, rtl)));
      if (!cancelled) setCovers(result);
    })();
    return () => {
      cancelled = true;
    };
    // `key` captures inputs and language.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return covers;
}
