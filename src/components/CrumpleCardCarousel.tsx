// Crumple Card Carousel: adapted from Originkit's Framer component for this portfolio.
// The centre card lies flat, its neighbours are crushed paper sheets, cards further out ball up.
// Changes from the original: no Framer runtime, no demo art; the parent picks the active card
// (onIndexChange, ref.next/prev/goTo), the page keeps scrolling vertically on touch, vertical
// wheel is left to the page, rendering pauses off-screen, and the size follows the container.
import { forwardRef, useEffect, useImperativeHandle, useRef, type CSSProperties } from 'react';
import * as THREE from 'three';

const TUNING = {
  stepMs: 1500,
  easeIn: 100,
  easeOut: 100,
  reach: 65,
  springHz: 22,
  pitch: 87,
  ballSize: 38,
  edgeLead: 44,
  wrinkle: 72,
  creaseScale: 23,
  segments: 11,
  tumble: 360,
  idleSpin: 35,
  lightAngle: 267,
  ambient: 50,
  paper: '#F4F4F4',
  glow: 8,
  shadow: 40,
  hover: 50,
};

const POOL = 8;
const TEX_LONG_SIDE = 1024;

export type CrumpleCarouselHandle = {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
};

type CrumpleCardCarouselProps = {
  /** Card faces, one per card (URLs or data URLs). */
  images: string[];
  /** Card width and height at an 800 px tall stage; the card also shrinks to fit narrow stages. */
  itemWidth?: number;
  itemHeight?: number;
  /** 0 stops autoplay, 50 is the designed pace. */
  speed?: number;
  /** Rest on each flat card between automatic steps, in ms. */
  hold?: number;
  crumple?: number;
  /** Space between neighbouring cards at an 800 px stage; negative overlaps them. */
  gap?: number;
  /** Corner radius, % of half the short side. */
  radius?: number;
  bounce?: number;
  paused?: boolean;
  onIndexChange?: (index: number) => void;
  /** Click on the centred card. */
  onCardClick?: (index: number) => void;
  /** Any user input on the deck (drag, click, swipe). */
  onInteract?: () => void;
  /** WebGL could not start. */
  onUnsupported?: () => void;
  className?: string;
  style?: CSSProperties;
};

// ── helpers ──
function parseRgb(input: string, fallback: number[]): number[] {
  const s = input.trim();
  if (s[0] !== '#') return fallback;
  let h = s.slice(1);
  if (h.length === 3) h = h.split('').map((ch) => ch + ch).join('');
  const n = parseInt(h.slice(0, 6), 16);
  return isNaN(n) ? fallback : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function hash1(i: number) {
  const x = Math.sin(i * 12.9898 + 4.1414) * 43758.5453;
  return x - Math.floor(x);
}

function bezierEase(x1: number, x2: number, x: number) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const bx = (t: number) => 3 * (1 - t) * (1 - t) * t * x1 + 3 * (1 - t) * t * t * x2 + t * t * t;
  const by = (t: number) => 3 * (1 - t) * t * t + t * t * t;
  let lo = 0;
  let hi = 1;
  let t = x;
  for (let k = 0; k < 26; k++) {
    t = (lo + hi) / 2;
    if (bx(t) < x) lo = t;
    else hi = t;
  }
  return by(t);
}

function smooth(e0: number, e1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - e0) / Math.max(1e-4, e1 - e0)));
  return t * t * (3 - 2 * t);
}

const mod = (i: number, n: number) => ((i % n) + n) % n;

// ── shaders ──
const NOISE = `
vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0*floor(p*ns.z*ns.z);
  vec4 x_ = floor(j*ns.z);
  vec4 y_ = floor(j - 7.0*x_);
  vec4 x = x_*ns.x + ns.yyyy;
  vec4 y = y_*ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m*m;
  return 42.0*dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
float ridged(vec3 p){
  float s = 0.0; float a = 0.5; float f = 1.0;
  for (int o = 0; o < 3; o++) { float n = 1.0 - abs(snoise(p*f)); s += a*n*n; f *= 2.03; a *= 0.5; }
  return s / 0.875;
}
`;

const VERT = `
uniform vec2 uSize;
uniform float uC;
uniform float uAmp;
uniform float uRadius;
uniform float uSeed;
uniform vec3 uAxis;
uniform float uSpin;
uniform float uEdgeLead;
uniform float uFreq;
uniform float uWrinkle;
uniform vec2 uRot;
uniform float uBall;
varying vec2 vUv;
varying vec3 vPos;
${NOISE}
mat3 axisRot(vec3 a, float g){
  float s = sin(g); float c = cos(g); float t = 1.0 - c;
  return mat3(t*a.x*a.x + c, t*a.x*a.y + s*a.z, t*a.x*a.z - s*a.y,
              t*a.x*a.y - s*a.z, t*a.y*a.y + c, t*a.y*a.z + s*a.x,
              t*a.x*a.z + s*a.y, t*a.y*a.z - s*a.x, t*a.z*a.z + c);
}
void main(){
  vUv = uv;
  vec2 q = uv - 0.5;
  float edge = max(abs(q.x), abs(q.y)) * 2.0;
  float lead = clamp(uEdgeLead, 0.0, 0.9);
  float cv = clamp((uC - (1.0 - edge) * lead) / (1.0 - lead), 0.0, 1.0);
  cv = cv * cv * (3.0 - 2.0 * cv);
  float asp = uSize.x / max(uSize.y, 1.0);
  vec3 cq = vec3(q * vec2(asp, 1.0) * uFreq * 1.7, uSeed * 9.0);
  float crease = ridged(cq) - 0.55;
  float fine = ridged(cq * 2.4 + vec3(5.0)) - 0.55;
  vec2 warp = vec2(snoise(cq * 0.55 + vec3(3.1)), snoise(cq * 0.55 + vec3(7.7)));
  float shrink = 1.0 - 0.18 * cv * (0.5 + 0.5 * edge);
  vec3 sheetP = vec3(q * uSize * shrink + warp * 0.09 * uSize.y * cv,
                     (crease * 0.8 + fine * 0.4) * uAmp * uSize.y * 0.6 * cv);
  float w = sin(cv * 3.14159265) * uWrinkle;
  vec3 wq = vec3(q * 3.2, uSeed * 9.0);
  sheetP += w * vec3(snoise(wq) * 0.04 * uSize.y,
                     snoise(wq + vec3(17.0)) * 0.04 * uSize.y,
                     (ridged(wq * 1.4) - 0.55) * 0.2 * uSize.y);
  vec2 qn = vec2(q.x * 2.0 * asp, q.y * 2.0);
  float rr = length(qn) / length(vec2(asp, 1.0));
  float th = rr * 2.95;
  float ph = atan(qn.y, qn.x + 0.0001);
  vec3 dir = vec3(sin(th) * cos(ph), sin(th) * sin(ph), cos(th));
  vec3 sp = dir * uFreq + vec3(uSeed * 7.13, uSeed * 3.71, uSeed * 5.17);
  float cr = ridged(sp) - 0.55;
  float lump = snoise(dir * 1.3 + vec3(uSeed * 11.0));
  vec3 ballP = dir * uRadius * (1.0 + uAmp * cr + 0.14 * lump);
  float bv = smoothstep(0.0, 1.0, clamp(uBall, 0.0, 1.0));
  vec3 p = mix(sheetP, ballP, bv);
  p = axisRot(uAxis, uSpin) * p;
  float ry = uRot.x; float rx = uRot.y;
  p = vec3(p.x * cos(ry) + p.z * sin(ry), p.y, -p.x * sin(ry) + p.z * cos(ry));
  p = vec3(p.x, p.y * cos(rx) - p.z * sin(rx), p.y * sin(rx) + p.z * cos(rx));
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vPos = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`;

const FRAG = `
uniform sampler2D uMap;
uniform vec3 uPaper;
uniform vec3 uLight;
uniform float uAmbient;
uniform vec2 uSize;
uniform float uCorner;
varying vec2 vUv;
varying vec3 vPos;
void main(){
  float rc = min(uCorner, 0.5 * min(uSize.x, uSize.y));
  if (rc > 0.0) {
    vec2 bq = abs((vUv - 0.5) * uSize) - (0.5 * uSize - vec2(rc));
    float sd = length(max(bq, 0.0)) + min(max(bq.x, bq.y), 0.0) - rc;
    if (sd > 0.0) discard;
  }
  vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
  if (n.z < 0.0) n = -n;
  vec3 L = normalize(uLight);
  vec3 base = gl_FrontFacing ? texture2D(uMap, vUv).rgb : uPaper;
  float lit = uAmbient + (1.0 - uAmbient) * max(dot(n, L), 0.0);
  float ref = uAmbient + (1.0 - uAmbient) * max(L.z, 0.0001);
  float shade = clamp(lit / max(ref, 0.0001), 0.0, 1.3);
  vec3 hv = normalize(L + vec3(0.0, 0.0, 1.0));
  float spec = pow(max(dot(n, hv), 0.0), 40.0) * 0.08;
  gl_FragColor = vec4(min(base * shade + vec3(spec), vec3(1.0)), 1.0);
}
`;

function supportsWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

const CrumpleCardCarousel = forwardRef<CrumpleCarouselHandle, CrumpleCardCarouselProps>(function CrumpleCardCarousel(
  {
    images,
    itemWidth = 507,
    itemHeight = 400,
    speed = 15,
    hold = 500,
    crumple = 100,
    gap = -150,
    radius = 10,
    bounce = 0,
    paused = false,
    onIndexChange,
    onCardClick,
    onInteract,
    onUnsupported,
    className,
    style,
  },
  ref
) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  // Commands from the parent, applied by the render loop on its next frame.
  const commandRef = useRef<{ step: number } | { to: number } | null>(null);

  const propsRef = useRef({ images, itemWidth, itemHeight, speed, hold, crumple, gap, radius, bounce, paused, onIndexChange, onCardClick, onInteract });
  propsRef.current = { images, itemWidth, itemHeight, speed, hold, crumple, gap, radius, bounce, paused, onIndexChange, onCardClick, onInteract };

  useImperativeHandle(ref, () => ({
    next: () => (commandRef.current = { step: 1 }),
    prev: () => (commandRef.current = { step: -1 }),
    goTo: (index: number) => (commandRef.current = { to: index }),
  }));

  useEffect(() => {
    const root = rootRef.current;
    const mount = mountRef.current;
    if (!root || !mount) return;

    if (!supportsWebGL()) {
      onUnsupported?.();
      return;
    }

    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frozen = reduceQuery.matches;
    const onReduceChange = () => (frozen = reduceQuery.matches);
    reduceQuery.addEventListener('change', onReduceChange);

    const canvas = document.createElement('canvas');
    Object.assign(canvas.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
    mount.appendChild(canvas);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: true });
    } catch {
      canvas.remove();
      onUnsupported?.();
      return;
    }
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-600, 600, 400, -400, 1, 120000);
    camera.position.set(0, 0, 60000);

    let w = 1;
    let h = 1;
    const resize = () => {
      w = Math.max(1, root.offsetWidth);
      h = Math.max(1, root.offsetHeight);
      renderer.setSize(w, h, false);
      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(root);

    // Only render while the stage is on screen.
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) {
        last = -1;
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(root);

    const meshes: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>[] = [];
    let geo: THREE.PlaneGeometry | null = null;
    let geoSig = '';
    const ensureGeo = (seg: number, aspect: number) => {
      const sx = Math.max(4, Math.round(seg));
      const sy = Math.max(4, Math.round(sx / Math.max(0.2, aspect)));
      const sig = `${sx}x${sy}`;
      if (sig === geoSig && geo) return;
      const old = geo;
      geo = new THREE.PlaneGeometry(1, 1, sx, sy);
      geoSig = sig;
      for (const m of meshes) m.geometry = geo;
      old?.dispose();
    };

    for (let k = 0; k < POOL; k++) {
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uMap: { value: null },
          uSize: { value: new THREE.Vector2(300, 380) },
          uC: { value: 0 },
          uAmp: { value: 0.3 },
          uRadius: { value: 70 },
          uSeed: { value: 0 },
          uAxis: { value: new THREE.Vector3(0, 1, 0) },
          uSpin: { value: 0 },
          uEdgeLead: { value: 0.35 },
          uFreq: { value: 2.4 },
          uWrinkle: { value: 0.6 },
          uRot: { value: new THREE.Vector2(0, 0) },
          uBall: { value: 0 },
          uPaper: { value: new THREE.Vector3(0.95, 0.95, 0.95) },
          uLight: { value: new THREE.Vector3(-0.4, 0.4, 0.82) },
          uAmbient: { value: 0.5 },
          uCorner: { value: 0 },
        },
        vertexShader: VERT,
        fragmentShader: FRAG,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(new THREE.BufferGeometry(), mat);
      mesh.frustumCulled = false;
      mesh.visible = false;
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Plain paper shown while a face is loading.
    let blankTex: THREE.CanvasTexture | null = null;
    let blankSig = '';
    const ensureBlank = (cw: number, ch: number) => {
      const sig = `${cw}x${ch}`;
      if (sig === blankSig && blankTex) return blankTex;
      const c = document.createElement('canvas');
      c.width = cw;
      c.height = ch;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = TUNING.paper;
        ctx.fillRect(0, 0, cw, ch);
      }
      blankTex?.dispose();
      blankTex = new THREE.CanvasTexture(c);
      blankTex.colorSpace = THREE.NoColorSpace;
      blankSig = sig;
      return blankTex;
    };

    // Each image is loaded once and drawn "cover" onto a card-shaped canvas.
    type Upload = { ready: boolean; failed: boolean; img: HTMLImageElement | null; tex: THREE.CanvasTexture | null; sig: string };
    const uploads = new Map<string, Upload>();
    const faceTex = (src: string, cw: number, ch: number) => {
      let u = uploads.get(src);
      if (!u) {
        const entry: Upload = { ready: false, failed: false, img: null, tex: null, sig: '' };
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          entry.img = img;
          entry.ready = true;
        };
        img.onerror = () => (entry.failed = true);
        img.src = src;
        uploads.set(src, entry);
        u = entry;
      }
      if (!u.ready || u.failed || !u.img) return null;
      const sig = `${cw}x${ch}`;
      if (u.sig !== sig) {
        const c = document.createElement('canvas');
        c.width = cw;
        c.height = ch;
        const ctx = c.getContext('2d');
        if (ctx) {
          ctx.fillStyle = TUNING.paper;
          ctx.fillRect(0, 0, cw, ch);
          const iw = u.img.naturalWidth || cw;
          const ih = u.img.naturalHeight || ch;
          const s = Math.max(cw / iw, ch / ih);
          ctx.drawImage(u.img, (cw - iw * s) / 2, (ch - ih * s) / 2, iw * s, ih * s);
        }
        u.tex?.dispose();
        u.tex = new THREE.CanvasTexture(c);
        u.tex.colorSpace = THREE.NoColorSpace;
        u.tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        u.sig = sig;
      }
      return u.tex;
    };
    // Forget faces that are no longer in the list (e.g. covers redrawn after a language change).
    const pruneUploads = (list: string[]) => {
      if (uploads.size <= list.length * 2) return;
      const keep = new Set(list);
      uploads.forEach((u, src) => {
        if (!keep.has(src)) {
          u.tex?.dispose();
          uploads.delete(src);
        }
      });
    };

    // ── input ──
    const ptr = { x: 0, y: 0, tx: 0, ty: 0, over: 0, tOver: 0, down: 0, tDown: 0 };
    let t = 0;
    let last = -1;
    let raf = 0;
    let offsetTarget = 0;
    let disp = NaN;
    let vel = 0;
    const bodies = new Map<number, { s: number; v: number }>();
    let hits: { i: number; s: number; ext: number }[] = [];
    let lastGoal = 0;
    let lastInput = -1e9;
    let pitchPx = 1;
    let autoStep = 0;
    let autoFrac = 0;
    let cycS = 1;
    let reportedIndex = -1;
    const drag = { on: false, id: -1, x0: 0, y0: 0, o0: 0, moved: false, ox: 0 };

    // Grabbing mid-step finishes that step inside the offset, so the deck stops on a card.
    const grab = () => {
      lastInput = performance.now();
      if (autoFrac > 0 && autoFrac < 1) {
        t = (autoStep + 1) * cycS + 1e-6;
        offsetTarget -= 1 - autoFrac;
        autoFrac = 0;
      }
    };
    const interact = () => propsRef.current.onInteract?.();

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      ptr.tx = (e.offsetX / w) * 2 - 1;
      ptr.ty = -((e.offsetY / h) * 2 - 1);
      ptr.tOver = 1;
    };
    const onLeave = () => (ptr.tOver = 0);
    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      ptr.tDown = 1;
      grab();
      drag.on = true;
      drag.id = e.pointerId;
      drag.x0 = e.clientX;
      drag.y0 = e.clientY;
      drag.o0 = offsetTarget;
      drag.moved = false;
      drag.ox = e.offsetX;
    };
    const onDragMove = (e: PointerEvent) => {
      if (!drag.on || e.pointerId !== drag.id) return;
      lastInput = performance.now();
      const dx = e.clientX - drag.x0;
      if (Math.abs(dx) > 6) drag.moved = true;
      offsetTarget = drag.o0 - dx / Math.max(1, pitchPx);
    };
    const onUp = (e: PointerEvent) => {
      if (!drag.on || e.pointerId !== drag.id) return;
      ptr.tDown = 0;
      drag.on = false;
      lastInput = performance.now();
      interact();
      if (!drag.moved) {
        // A click brings the clicked card to the centre, or opens the centred one;
        // a click on empty space either side steps one card that way.
        offsetTarget = drag.o0;
        const pos = drag.ox - w / 2;
        let hit: (typeof hits)[number] | null = null;
        for (const hb of hits) {
          const dd = Math.abs(pos - hb.s);
          if (dd <= hb.ext && (!hit || dd < Math.abs(pos - hit.s))) hit = hb;
        }
        const delta = hit ? hit.i - Math.round(lastGoal) : Math.abs(pos) < pitchPx * 0.5 ? 0 : Math.sign(pos);
        if (delta === 0 && hit) {
          const n = propsRef.current.images.length;
          if (n > 0) propsRef.current.onCardClick?.(mod(hit.i, n));
        }
        offsetTarget = Math.round(offsetTarget) + delta;
        return;
      }
      // A flick carries on up to two cards before the spring pulls one into place.
      offsetTarget += Math.max(-2, Math.min(2, vel * 0.12));
    };
    // The browser took over the gesture (vertical page scroll): drop the drag without a click.
    const onCancel = (e: PointerEvent) => {
      if (!drag.on || e.pointerId !== drag.id) return;
      drag.on = false;
      ptr.tDown = 0;
      offsetTarget = drag.moved ? Math.round(offsetTarget) : drag.o0;
    };
    // Horizontal trackpad swipes move the deck; vertical wheel scrolls the page as usual.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      grab();
      interact();
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? w : 1;
      offsetTarget += e.deltaX * unit * 0.006;
    };
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerleave', onLeave);
    root.addEventListener('pointerdown', onDown);
    root.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('pointermove', onDragMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onCancel);

    const frame = (now: number) => {
      if (!visible) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(frame);
      const dt = last < 0 ? 0 : Math.min((now - last) / 1000, 1 / 20);
      last = now;
      const p = propsRef.current;
      const a = TUNING;
      const list = p.images;
      const n = list.length;
      if (n === 0) {
        renderer.clear();
        return;
      }
      pruneUploads(list);

      // Parent commands (arrows, dots, keyboard).
      const cmd = commandRef.current;
      if (cmd) {
        commandRef.current = null;
        grab();
        if ('step' in cmd) {
          offsetTarget = Math.round(offsetTarget) + cmd.step;
        } else {
          const current = Math.round(lastGoal);
          let delta = mod(cmd.to - mod(current, n), n);
          if (delta > n / 2) delta -= n;
          offsetTarget = Math.round(offsetTarget) + delta;
        }
      }

      const busy = drag.on || now - lastInput < 1500;
      const rate = frozen || busy || p.paused ? 0 : Math.max(0, p.speed) / 50;
      t += dt * rate;
      if (!drag.on && now - lastInput > 140) offsetTarget = Math.round(offsetTarget);

      const k = frozen ? 0 : a.hover / 50;
      const ease = 1 - Math.exp(-dt * 6);
      ptr.x += (ptr.tx - ptr.x) * ease;
      ptr.y += (ptr.ty - ptr.y) * ease;
      ptr.over += (ptr.tOver - ptr.over) * ease;
      ptr.down += (ptr.tDown - ptr.down) * (1 - Math.exp(-dt * 9));
      const pk = ptr.over * k;

      // Stepped autoplay: hold, then one eased step.
      const moveS = a.stepMs / 1000;
      const holdS = Math.max(0, p.hold / 1000);
      const cyc = moveS + holdS;
      const step = Math.floor(t / cyc);
      const tc = t - step * cyc;
      const prog = tc < holdS ? 0 : bezierEase(a.easeIn / 100, a.easeOut / 100, (tc - holdS) / moveS);
      autoStep = step;
      autoFrac = prog;
      cycS = cyc;

      const goal = step + prog + offsetTarget;
      lastGoal = goal;
      if (Number.isNaN(disp) || frozen) {
        disp = goal;
        vel = 0;
      } else if (drag.on) {
        const prev = disp;
        disp += (goal - disp) * (1 - Math.exp(-dt * 28));
        if (dt > 0) vel = (disp - prev) / dt;
      } else if (dt > 0) {
        const om = Math.PI * 2 * (a.springHz / 10);
        const zeta = 1 - (Math.min(100, Math.max(0, p.bounce)) / 100) * 0.85;
        const hs = dt / 4;
        for (let ss = 0; ss < 4; ss++) {
          vel += (om * om * (goal - disp) - 2 * zeta * om * vel) * hs;
          disp += vel * hs;
        }
      }
      const scroll = disp;

      const active = mod(Math.round(goal), n);
      if (active !== reportedIndex) {
        reportedIndex = active;
        p.onIndexChange?.(active);
      }

      // Layout is composed for an 800 px tall stage; the card also fits ~78% of a narrow stage.
      const S = Math.min(h / 800, (w * 0.78) / p.itemWidth);
      const cardH = Math.max(20, p.itemHeight * S);
      const cardW = Math.max(20, p.itemWidth * S);
      const aspect = cardW / cardH;
      const pitch = (cardW * a.pitch) / 100;
      pitchPx = pitch;
      const ballR = (cardH * a.ballSize) / 200;

      ensureGeo(a.segments, aspect);
      const tw = aspect >= 1 ? TEX_LONG_SIDE : Math.round(TEX_LONG_SIDE * aspect);
      const th = aspect >= 1 ? Math.round(TEX_LONG_SIDE / aspect) : TEX_LONG_SIDE;
      // Quantise so a resize doesn't redraw every texture each frame.
      const cw = Math.max(16, Math.round(tw / 32) * 32);
      const ch = Math.max(16, Math.round(th / 32) * 32);
      const texFor = (i: number) => faceTex(list[mod(i, n)], cw, ch) ?? ensureBlank(cw, ch);

      const paperRgb = parseRgb(a.paper, [244, 244, 244]);
      const la = (a.lightAngle * Math.PI) / 180;
      const lx = Math.cos(la) * 0.55 + ptr.x * 0.45 * pk;
      const ly = Math.sin(la) * 0.55 + ptr.y * 0.45 * pk;
      const amp = (Math.max(0, p.crumple) / 100) * 0.55;
      const reach = a.reach / 100;
      const base = Math.floor(scroll);
      let centreC = 1;

      // Each card is a body sprung to its slot; bodies collide by their current footprint.
      const axisHalf = cardW / 2;
      const gapPx = p.gap * S;
      const cornerPx = ((Math.min(100, Math.max(0, p.radius)) / 100) * Math.min(cardW, cardH)) / 2;
      const bk = Math.PI * 2 * (a.springHz / 10) * 1.6;
      const bz = 0.55 - (Math.min(100, Math.max(0, p.bounce)) / 100) * 0.4;
      type Info = { i: number; ad: number; c: number; ball: number; ext: number; b: { s: number; v: number }; z: number };
      const info: Info[] = [];
      let anchor = 0;
      for (let j = 0; j < POOL; j++) {
        const i = base - 3 + j;
        const d = i - scroll;
        const ad = Math.abs(d);
        let c = smooth(0, reach, ad);
        c = Math.min(1, c + ptr.down * 0.12 * k * (1 - smooth(0, 0.5, ad)));
        const ball = smooth(1.35, 2.35, ad);
        const ext = axisHalf * (1 - 0.12 * c) * (1 - ball) + ballR * 1.3 * ball;
        const goalS = d * pitch;
        let b = bodies.get(i);
        if (!b) {
          b = { s: goalS, v: 0 };
          bodies.set(i, b);
        }
        if (frozen) {
          b.s = goalS;
          b.v = 0;
        } else if (dt > 0) {
          const hstep = dt / 4;
          for (let ss = 0; ss < 4; ss++) {
            b.v += (bk * bk * (goalS - b.s) - 2 * bz * bk * b.v) * hstep;
            b.s += b.v * hstep;
          }
        }
        info.push({ i, ad, c, ball, ext, b, z: 0 });
        if (ad < info[anchor].ad) anchor = j;
      }
      for (let j = anchor + 1; j < POOL; j++) {
        const pr = info[j - 1];
        const cu = info[j];
        const min = pr.b.s + pr.ext + cu.ext + gapPx;
        if (cu.b.s < min) {
          cu.b.s = min;
          cu.b.v = Math.max(cu.b.v, pr.b.v);
        }
      }
      for (let j = anchor - 1; j >= 0; j--) {
        const nx = info[j + 1];
        const cu = info[j];
        const max = nx.b.s - nx.ext - cu.ext - gapPx;
        if (cu.b.s > max) {
          cu.b.s = max;
          cu.b.v = Math.min(cu.b.v, nx.b.v);
        }
      }
      bodies.forEach((_, key) => {
        if (key < base - 3 || key > base - 3 + POOL - 1) bodies.delete(key);
      });
      hits = info.map((it) => ({ i: it.i, s: it.b.s, ext: it.ext }));
      // Flatter (more central) cards sit nearer the camera, each on its own depth layer.
      const layer = cardH * 1.6;
      info
        .map((_, j) => j)
        .sort((x0, x1) => info[x0].ad - info[x1].ad)
        .forEach((j, r) => (info[j].z = -r * layer));

      for (let j = 0; j < POOL; j++) {
        const mesh = meshes[j];
        const { i, c, ball, z } = info[j];
        const x = info[j].b.s;
        centreC = Math.min(centreC, c);
        const reachX = Math.max(ballR * 1.6, cardW * 0.7 * (1 - ball) + ballR * 1.6 * ball);
        if (x - reachX > w / 2 || x + reachX < -w / 2) {
          mesh.visible = false;
          continue;
        }
        mesh.visible = true;
        mesh.position.set(x, 0, z);
        const u = mesh.material.uniforms;
        const hs = hash1(i);
        const hs2 = hash1(i + 91.7);
        const hs3 = hash1(i + 213.3);
        u.uMap.value = texFor(i);
        u.uSize.value.set(cardW, cardH);
        u.uC.value = c;
        u.uAmp.value = amp;
        u.uRadius.value = ballR;
        u.uSeed.value = hs * 10;
        u.uAxis.value.set(hs2 - 0.5, hs3 - 0.5, (hs - 0.5) * 0.6).normalize();
        u.uBall.value = ball;
        u.uSpin.value =
          c * (0.5 + hs2 * 0.4) + ball * ((a.tumble * Math.PI) / 180 + (t * a.idleSpin * Math.PI) / 180) + c * ptr.x * 0.6 * pk;
        u.uEdgeLead.value = a.edgeLead / 100;
        u.uFreq.value = a.creaseScale / 10;
        u.uWrinkle.value = a.wrinkle / 100;
        u.uRot.value.set(ptr.x * 0.32 * pk * (1 - c), -ptr.y * 0.32 * pk * (1 - c));
        u.uPaper.value.set(paperRgb[0] / 255, paperRgb[1] / 255, paperRgb[2] / 255);
        u.uLight.value.set(lx, ly, 0.82);
        u.uAmbient.value = Math.min(0.95, Math.max(0, a.ambient / 100));
        u.uCorner.value = cornerPx;
      }

      const sh = shadowRef.current;
      if (sh) {
        sh.style.left = `${w / 2 - cardW * 0.6}px`;
        sh.style.top = `${h / 2 - cardH * 0.4}px`;
        sh.style.width = `${cardW * 1.2}px`;
        sh.style.height = `${cardH}px`;
        sh.style.filter = `blur(${Math.round(cardW * 0.15)}px)`;
        sh.style.opacity = String((a.shadow / 100) * (1 - centreC));
      }

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      raf = 0;
      ro.disconnect();
      io.disconnect();
      reduceQuery.removeEventListener('change', onReduceChange);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
      root.removeEventListener('pointerdown', onDown);
      root.removeEventListener('wheel', onWheel);
      window.removeEventListener('pointermove', onDragMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onCancel);
      for (const m of meshes) {
        scene.remove(m);
        m.material.dispose();
      }
      geo?.dispose();
      blankTex?.dispose();
      uploads.forEach((u) => u.tex?.dispose());
      renderer.dispose();
      canvas.remove();
    };
    // The loop reads props through propsRef; it is set up once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        // Horizontal drags move the deck; vertical swipes still scroll the page.
        touchAction: 'pan-y',
        cursor: 'grab',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(ellipse 48% 58% at 50% 48%, rgba(255,255,255,${TUNING.glow / 100}) 0%, rgba(255,255,255,0) 100%)`,
        }}
      />
      <div
        ref={shadowRef}
        aria-hidden
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)',
          opacity: 0,
        }}
      />
      <div ref={mountRef} aria-hidden style={{ position: 'absolute', inset: 0 }} />
    </div>
  );
});

export default CrumpleCardCarousel;
