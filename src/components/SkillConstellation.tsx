// Skill constellation: one node per skill, grouped around its category, all linked to a
// centre node. Nodes float, drift away from the cursor, and hovering one pulls its
// connections in and highlights them. Positions are simulated in a rAF loop and written
// straight to the DOM, so React only re-renders when the hovered node changes.
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type ConstellationCategory = {
  id: string;
  name: string;
  skills: { id: string; name: string }[];
};

type Props = {
  centerLabel: string;
  categories: ConstellationCategory[];
  /** Extra links between related skills, by skill id. */
  crossLinks: [string, string][];
  className?: string;
};

type Kind = 'center' | 'category' | 'skill';
type SimNode = {
  id: string;
  label: string;
  kind: Kind;
  ax: number;
  ay: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  phase: number;
};

const CENTER_ID = '__center';
const SEPARATION_PAD = 8;
const CURSOR_RADIUS = 140;

const SkillConstellation = ({ centerLabel, categories, crossLinks, className }: Props) => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeEls = useRef(new Map<string, HTMLLIElement>());
  const lineEls = useRef<(SVGLineElement | null)[]>([]);
  const hoveredRef = useRef<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const { nodes, links, neighbours } = useMemo(() => {
    const nodes: { id: string; label: string; kind: Kind; group: number }[] = [
      { id: CENTER_ID, label: centerLabel, kind: 'center', group: -1 },
    ];
    const links: [string, string][] = [];
    categories.forEach((cat, g) => {
      nodes.push({ id: cat.id, label: cat.name, kind: 'category', group: g });
      links.push([CENTER_ID, cat.id]);
      cat.skills.forEach((skill) => {
        nodes.push({ id: skill.id, label: skill.name, kind: 'skill', group: g });
        links.push([cat.id, skill.id]);
      });
    });
    const ids = new Set(nodes.map((n) => n.id));
    for (const [a, b] of crossLinks) if (ids.has(a) && ids.has(b)) links.push([a, b]);
    const neighbours = new Map<string, Set<string>>();
    for (const n of nodes) neighbours.set(n.id, new Set());
    for (const [a, b] of links) {
      neighbours.get(a)!.add(b);
      neighbours.get(b)!.add(a);
    }
    return { nodes, links, neighbours };
  }, [centerLabel, categories, crossLinks]);

  const sim = useRef<SimNode[]>([]);
  const size = useRef({ w: 1, h: 1 });

  // Anchor layout: categories on an ellipse around the centre, skills ringed around their category.
  const layout = () => {
    const el = containerRef.current;
    if (!el) return;
    const W = el.clientWidth;
    const H = el.clientHeight;
    if (!W || !H) return;
    size.current = { w: W, h: H };
    const cx = W / 2;
    const cy = H / 2;
    const prev = new Map(sim.current.map((n) => [n.id, n]));
    const groupCount = categories.length;

    sim.current = nodes.map((n) => {
      let ax = cx;
      let ay = cy;
      if (n.kind !== 'center') {
        const ga = -Math.PI / 2 + (n.group / groupCount) * Math.PI * 2;
        const gx = cx + Math.cos(ga) * W * 0.31;
        const gy = cy + Math.sin(ga) * H * 0.3;
        if (n.kind === 'category') {
          ax = gx;
          ay = gy;
        } else {
          const siblings = categories[n.group].skills;
          const k = siblings.findIndex((s) => s.id === n.id);
          const a = ga + (k / siblings.length) * Math.PI * 2 + Math.PI / siblings.length;
          ax = gx + Math.cos(a) * W * 0.1;
          ay = gy + Math.sin(a) * H * 0.15;
        }
      }
      const el = nodeEls.current.get(n.id);
      const old = prev.get(n.id);
      return {
        id: n.id,
        label: n.label,
        kind: n.kind,
        ax,
        ay,
        // Before the reveal every node waits at the centre, then bursts out to its anchor.
        x: old?.x ?? cx,
        y: old?.y ?? cy,
        vx: old?.vx ?? 0,
        vy: old?.vy ?? 0,
        w: el?.offsetWidth ?? 80,
        h: el?.offsetHeight ?? 28,
        phase: old?.phase ?? Math.random() * Math.PI * 2,
      };
    });
  };

  useLayoutEffect(() => {
    layout();
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => layout());
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const pointer = { x: 0, y: 0, inside: false };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const r = el.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.inside = true;
    };
    const onLeave = () => (pointer.inside = false);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);

    let raf = 0;
    let last = -1;
    let visible = false;
    let hasStarted = false;
    const reduce = !!reduceMotion;

    let startedAt = -1;
    // 0 → 1: label collisions only kick in once the burst has carried nodes near their anchors,
    // otherwise they jam against each other on the way out of the centre.
    const separationStrength = (t: number) => (reduce ? 1 : Math.min(1, Math.max(0, (t - startedAt - 0.6) / 0.8)));

    const step = (dt: number, t: number) => {
      if (startedAt < 0) startedAt = t;
      const sep = separationStrength(t);
      const nodesNow = sim.current;
      const { w: W, h: H } = size.current;
      const hov = hoveredRef.current;
      const hovNode = hov ? nodesNow.find((n) => n.id === hov) : undefined;
      const hovNeighbours = hov ? neighbours.get(hov) : undefined;
      const damping = Math.exp(-7 * dt);

      for (const n of nodesNow) {
        let tx = n.ax;
        let ty = n.ay;
        if (!reduce) {
          tx += Math.sin(t * 0.6 + n.phase) * (n.kind === 'skill' ? 7 : 4);
          ty += Math.cos(t * 0.5 + n.phase * 1.3) * (n.kind === 'skill' ? 5 : 3);
        }
        // Hovered node draws its connections a third of the way in.
        if (hovNode && hovNeighbours?.has(n.id) && n.kind !== 'center') {
          tx += (hovNode.x - tx) * 0.33;
          ty += (hovNode.y - ty) * 0.33;
        }
        n.vx += (tx - n.x) * 16 * dt;
        n.vy += (ty - n.y) * 16 * dt;
        if (!reduce && pointer.inside && n.id !== hov) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d = Math.hypot(dx, dy) || 1;
          if (d < CURSOR_RADIUS) {
            const f = (1 - d / CURSOR_RADIUS) ** 2 * 2200 * dt;
            n.vx += (dx / d) * f;
            n.vy += (dy / d) * f;
          }
        }
        n.vx *= damping;
        n.vy *= damping;
        n.x += n.vx * dt;
        n.y += n.vy * dt;
      }

      // Push overlapping labels apart along their shallowest overlap.
      for (let pass = 0; pass < (sep > 0 ? 2 : 0); pass++) {
        for (let i = 0; i < nodesNow.length; i++) {
          const a = nodesNow[i];
          for (let j = i + 1; j < nodesNow.length; j++) {
            const b = nodesNow[j];
            const ox = ((a.w + b.w) / 2 + SEPARATION_PAD - Math.abs(a.x - b.x)) * sep;
            const oy = ((a.h + b.h) / 2 + SEPARATION_PAD - Math.abs(a.y - b.y)) * sep;
            if (ox <= 0 || oy <= 0) continue;
            // The centre and the hovered node hold their place; others give way.
            const aw = a.kind === 'center' || a.id === hov ? 0 : b.kind === 'center' || b.id === hov ? 1 : 0.5;
            const bw = 1 - aw;
            if (ox < oy) {
              const s = a.x < b.x ? -1 : 1;
              a.x += s * ox * aw;
              b.x -= s * ox * bw;
            } else {
              const s = a.y < b.y ? -1 : 1;
              a.y += s * oy * aw;
              b.y -= s * oy * bw;
            }
          }
        }
      }

      for (const n of nodesNow) {
        n.x = Math.min(W - n.w / 2 - 4, Math.max(n.w / 2 + 4, n.x));
        n.y = Math.min(H - n.h / 2 - 4, Math.max(n.h / 2 + 4, n.y));
      }
    };

    const paint = () => {
      const byId = new Map(sim.current.map((n) => [n.id, n]));
      for (const n of sim.current) {
        const node = nodeEls.current.get(n.id);
        if (node) node.style.transform = `translate3d(${n.x - n.w / 2}px, ${n.y - n.h / 2}px, 0)`;
      }
      links.forEach(([a, b], i) => {
        const line = lineEls.current[i];
        const na = byId.get(a);
        const nb = byId.get(b);
        if (!line || !na || !nb) return;
        line.setAttribute('x1', na.x.toFixed(1));
        line.setAttribute('y1', na.y.toFixed(1));
        line.setAttribute('x2', nb.x.toFixed(1));
        line.setAttribute('y2', nb.y.toFixed(1));
      });
    };

    const frame = (now: number) => {
      if (!visible) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(frame);
      const dt = last < 0 ? 1 / 60 : Math.min((now - last) / 1000, 1 / 30);
      last = now;
      step(dt, now / 1000);
      paint();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !hasStarted) {
          hasStarted = true;
          setStarted(true);
          // Labels are now measurable; refresh sizes.
          for (const n of sim.current) {
            const node = nodeEls.current.get(n.id);
            if (node) {
              n.w = node.offsetWidth;
              n.h = node.offsetHeight;
            }
          }
          if (reduce) {
            // Settle instantly, then render once.
            for (const n of sim.current) {
              n.x = n.ax;
              n.y = n.ay;
            }
            for (let k = 0; k < 240; k++) step(1 / 60, 0);
            paint();
          }
        }
        if (visible && !raf && !reduce) {
          last = -1;
          raf = requestAnimationFrame(frame);
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    paint();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [links, neighbours, reduceMotion]);

  const setHover = (id: string | null) => {
    hoveredRef.current = id;
    setHovered(id);
  };

  const related = hovered ? neighbours.get(hovered) : undefined;
  const isLit = (id: string) => !hovered || id === hovered || !!related?.has(id);
  const isLinkLit = ([a, b]: [string, string]) => !!hovered && (a === hovered || b === hovered);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full select-none', className)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setHover(null)}
    >
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        {links.map((link, i) => {
          const lit = isLinkLit(link);
          const isSpoke = link[0] === CENTER_ID;
          return (
            <line
              key={`${link[0]}-${link[1]}`}
              ref={(el) => (lineEls.current[i] = el)}
              strokeWidth={lit ? 1.6 : isSpoke ? 1.2 : 1}
              strokeLinecap="round"
              className={cn(
                'transition-[stroke,opacity] duration-500',
                lit ? 'stroke-[#483dfb]' : isSpoke ? 'stroke-[#483dfb]/40' : 'stroke-[hsl(var(--foreground)/0.14)]',
                hovered && !lit && 'opacity-30',
                started ? 'opacity-100' : 'opacity-0'
              )}
            />
          );
        })}
      </svg>

      <ul className="absolute inset-0">
        {nodes.map((n) => {
          const lit = isLit(n.id);
          const isHovered = hovered === n.id;
          return (
            <li
              key={n.id}
              ref={(el) => {
                if (el) nodeEls.current.set(n.id, el);
                else nodeEls.current.delete(n.id);
              }}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(n.id)}
              onClick={() => setHover(hovered === n.id ? null : n.id)}
              className={cn(
                'absolute left-0 top-0 cursor-default whitespace-nowrap rounded-full border transition-[opacity,background-color,border-color,color,box-shadow] duration-300 will-change-transform',
                n.kind === 'center' && 'z-20 border-transparent bg-[#483dfb] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#483dfb]/30',
                n.kind === 'category' && 'z-10 border-[#483dfb]/50 bg-background px-3 py-1.5 text-sm font-semibold text-[#483dfb]',
                n.kind === 'skill' && 'bg-background/80 px-3 py-1 text-xs lg:text-sm text-foreground backdrop-blur-sm',
                n.kind === 'skill' && (isHovered || (hovered && lit) ? 'border-[#483dfb] bg-[#483dfb]/10' : 'border-border'),
                isHovered && 'shadow-lg shadow-[#483dfb]/25',
                hovered && !lit && 'opacity-30',
                !started && 'opacity-0'
              )}
            >
              {n.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillConstellation;
