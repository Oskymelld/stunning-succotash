// V3 design tokens (from Figma "Portfolio Design System V3").
// Kept as plain constants so components can use Tailwind arbitrary values
// (e.g. bg-[#141414]) matching the existing codebase convention.
export const V3 = {
  bg: "#141414", // grey/850 — page background
  surface: "#1F1F1F", // grey/800 — cards, panels
  raised: "#2A2A2A", // grey/700 — hover
  well: "#0D0D0D", // grey/900 — footer, wells
  border: "#4D4D4D", // grey/500 — borders (usually @40%)
  textSecondary: "#A3A3A3", // grey/400
  text: "#F7F7F7", // grey/100 — light text
  orange1: "#F36A36", // accent/hover — lighter highlight (active glass)
  orange2: "#FE6219", // accent/primary — links, CTAs, hover glass
  orange3: "#E3500E", // accent/active — pressed
} as const;

export const mono = "'Space Mono', monospace";
export const grotesk = "'Space Grotesk', sans-serif";
