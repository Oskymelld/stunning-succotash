// Line-art project motifs, ported from the Figma "Project Cards" OPT-F/OPT-G set.
// White strokes with one orange accent; sit on the dark card front.
import { V3 } from "./tokens";

type MotifProps = { className?: string; stroke?: string; accent?: string };

const W = V3.text;
const O = V3.orange2;

export function CubeMotif({ className, stroke = W, accent = O }: MotifProps) {
  return (
    <svg className={className} width="176" height="176" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M75 25L125 50V110L75 135L25 110V50L75 25Z" stroke={stroke} strokeWidth="1.5" />
      <path d="M25 50L75 75L125 50" stroke={stroke} strokeWidth="1.5" />
      <path d="M75 75V135" stroke={stroke} strokeWidth="1.5" />
      <path d="M75 45L105 60V95L75 110L45 95V60L75 45Z" stroke={stroke} strokeWidth="1" strokeOpacity="0.5" />
      <path d="M140 50V110" stroke={accent} strokeWidth="1" />
      <path d="M136 54L140 50L144 54" stroke={accent} strokeWidth="1" />
      <path d="M136 106L140 110L144 106" stroke={accent} strokeWidth="1" />
    </svg>
  );
}

export function CycloneMotif({ className, stroke = W, accent = O }: MotifProps) {
  const pts: string[] = [];
  for (let t = 0; t <= 5.1 * Math.PI; t += 0.1) {
    const r = 4.6 * Math.exp(0.172 * t);
    pts.push(`${(85 + r * Math.cos(t)).toFixed(1)} ${(85 + r * Math.sin(t) * 0.94).toFixed(1)}`);
  }
  const inner: string[] = [];
  for (let t = 0.8; t <= 4.7 * Math.PI; t += 0.1) {
    const r = 3.4 * Math.exp(0.172 * t);
    inner.push(`${(85 + r * Math.cos(t + Math.PI)).toFixed(1)} ${(85 + r * Math.sin(t + Math.PI) * 0.94).toFixed(1)}`);
  }
  return (
    <svg className={className} width="176" height="176" viewBox="0 0 176 176" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d={`M${pts.join("L")}`} stroke={accent} strokeWidth="1.5" />
      <path d={`M${inner.join("L")}`} stroke={stroke} strokeWidth="0.9" strokeOpacity="0.55" />
      <circle cx="85" cy="85" r="84" stroke={stroke} strokeWidth="0.6" strokeOpacity="0.35" strokeDasharray="2 5" />
    </svg>
  );
}

export function KnotMotif({ className, stroke = W, accent = O }: MotifProps) {
  // Seeded catmull-rom scribble → a tangled hairball with one orange strand escaping.
  let seed = 42;
  const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  const pts = (n: number, rmin: number, rspread: number, ey: number) => {
    const p: [number, number][] = [];
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2, r = rmin + rnd() * rspread;
      p.push([85 + r * Math.cos(a), 78 + r * Math.sin(a) * ey]);
    }
    return p;
  };
  const path = (p: [number, number][]) => {
    let d = `M${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)}`;
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[Math.max(i - 1, 0)], p1 = p[i], p2 = p[i + 1], p3 = p[Math.min(i + 2, p.length - 1)];
      d += `C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)} ${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)} ${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    return d;
  };
  const a = path(pts(18, 14, 48, 0.82));
  const b = path(pts(14, 10, 54, 0.85));
  const strand = path([[130, 120], [150, 138], [138, 152], [118, 158], [96, 163]]);
  return (
    <svg className={className} width="176" height="176" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d={a} stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d={b} stroke={stroke} strokeWidth="0.8" strokeOpacity="0.55" strokeLinecap="round" />
      <path d={strand} stroke={accent} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="85" cy="78" r="72" stroke={stroke} strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="2 5" />
    </svg>
  );
}

export function WheelMotif({ className, stroke = W, accent = O }: MotifProps) {
  const spokes: string[] = [];
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI) / 6;
    spokes.push(`M${(85 + 10 * Math.cos(a)).toFixed(1)} ${(80 + 10 * Math.sin(a)).toFixed(1)}L${(85 + 62 * Math.cos(a)).toFixed(1)} ${(80 + 62 * Math.sin(a)).toFixed(1)}`);
  }
  return (
    <svg className={className} width="176" height="176" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="85" cy="80" r="66" stroke={stroke} strokeWidth="1.5" />
      <circle cx="85" cy="80" r="58" stroke={stroke} strokeWidth="0.75" strokeOpacity="0.5" />
      <circle cx="85" cy="80" r="10" stroke={accent} strokeWidth="1.5" />
      {spokes.map((d, i) => <path key={i} d={d} stroke={stroke} strokeWidth="1" strokeOpacity="0.7" />)}
      <path d="M10 158H160" stroke={stroke} strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="3 5" />
    </svg>
  );
}

export function StitchMotif({ className, stroke = W, accent = O }: MotifProps) {
  return (
    <svg className={className} width="176" height="176" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="25" y="55" width="120" height="80" rx="12" stroke={stroke} strokeWidth="1.5" />
      <rect x="33" y="63" width="104" height="64" rx="8" stroke={stroke} strokeWidth="1" strokeOpacity="0.6" strokeDasharray="6 5" />
      <path d="M118 28L146 60" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="122" cy="32" r="2.5" stroke={stroke} strokeWidth="1" />
      <path d="M121 33C100 48 88 40 70 55" stroke={accent} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export const MOTIFS = {
  cube: CubeMotif,
  cyclone: CycloneMotif,
  knot: KnotMotif,
  wheel: WheelMotif,
  stitch: StitchMotif,
} as const;

export type MotifKey = keyof typeof MOTIFS;
