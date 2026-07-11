// V3 hero — engineering-drawing style ("HERO-2/4" from Figma). A schematic
// line-drawing of a cordless vacuum with mono callouts on the right; the
// "Hello! Welcome." heading and CTAs on the left.
import { SectionLabel } from "./primitives";

const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";
const O = "#FE6219";
const W = "#F7F7F7";

function VacuumDrawing({ className }: { className?: string }) {
  // Simplified cutaway schematic (orange strokes) with hatched filter and cyclone.
  const hatch = [];
  for (let hx = 162; hx <= 206; hx += 9) hatch.push(<path key={hx} d={`M${hx} 78V138`} stroke={O} strokeWidth="0.7" strokeOpacity="0.55" />);
  const radial = [];
  for (let a = 0; a < 360; a += 45) { const r = (a * Math.PI) / 180; radial.push(<path key={a} d={`M${(250 + 14 * Math.cos(r)).toFixed(1)} ${(108 + 14 * Math.sin(r)).toFixed(1)}L${(250 + 22 * Math.cos(r)).toFixed(1)} ${(108 + 22 * Math.sin(r)).toFixed(1)}`} stroke={O} strokeWidth="0.7" />); }
  return (
    <svg className={className} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Engineering drawing of a cordless vacuum" role="img">
      <rect x="10" y="95" width="120" height="16" stroke={O} strokeWidth="1" />
      <path d="M130 95L150 88M130 111L150 118" stroke={O} strokeWidth="1" />
      <rect x="150" y="70" width="140" height="76" rx="10" stroke={O} strokeWidth="1.2" />
      {hatch}
      <circle cx="250" cy="108" r="22" stroke={O} strokeWidth="1.2" />
      <circle cx="250" cy="108" r="14" stroke={O} strokeWidth="0.9" />
      <circle cx="250" cy="108" r="6" stroke={O} strokeWidth="0.9" />
      {radial}
      <rect x="296" y="76" width="34" height="64" rx="8" stroke={O} strokeWidth="1.2" />
      <path d="M300 130L326 84M300 112L326 66M300 146L326 100" stroke={O} strokeWidth="0.7" strokeOpacity="0.55" />
      <path d="M300 146L318 146L306 210L282 210L290 168" stroke={O} strokeWidth="1.2" />
      <rect x="278" y="210" width="52" height="16" rx="3" stroke={O} strokeWidth="1.2" />
      <path d="M60 103H115" stroke={W} strokeWidth="1" strokeDasharray="4 4" />
      <path d="M110 99L116 103L110 107" stroke={W} strokeWidth="1" />
    </svg>
  );
}

export function HeroV3() {
  return (
    <section className="relative w-full overflow-hidden rounded-[8px] border border-[#4D4D4D]/40 bg-[#0D0D0D] min-h-[520px] flex flex-col lg:flex-row">
      {/* subtle registration grid */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="reg" width="110" height="110" patternUnits="userSpaceOnUse">
            <path d="M55 50V60M50 55H60" stroke="#4D4D4D" strokeWidth="1" strokeOpacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#reg)" />
      </svg>

      {/* Left: heading + CTAs */}
      <div className="relative z-10 flex-1 p-8 sm:p-12 flex flex-col justify-center">
        <SectionLabel>Portfolio — 2026</SectionLabel>
        <h1 className="font-['Space_Grotesk',sans-serif] font-bold text-[48px] sm:text-[61px] leading-[1.05] text-[#F7F7F7] mt-4">
          Hello!<br /><span className="text-[#FE6219]">Welcome.</span>
        </h1>
        <p className="font-['Space_Grotesk',sans-serif] text-[18px] leading-[1.6] text-[#A3A3A3] mt-6 max-w-[46ch]">
          Design engineer, maker of things that work. A portfolio of physical and
          digital products.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a href="#work" className="inline-flex items-center font-['Space_Mono',monospace] text-[12px] font-bold uppercase tracking-[0.05em] bg-[#FE6219] text-[#141414] px-5 py-3 rounded-[4px] hover:bg-[#F36A36] transition-colors">View work</a>
          <a href="mailto:Tomcarter90@gmail.com" className="inline-flex items-center font-['Space_Mono',monospace] text-[12px] font-bold uppercase tracking-[0.05em] border border-[#4D4D4D]/60 text-[#F7F7F7] px-5 py-3 rounded-[4px] hover:border-[#FE6219] transition-colors">Contact</a>
        </div>
      </div>

      {/* Right: engineering drawing with callouts */}
      <div className="relative z-10 flex-1 min-h-[280px] p-6 hidden md:flex items-center justify-center">
        <div className="relative w-full max-w-[440px]">
          <VacuumDrawing className="w-full" />
          <span className={`${mono} absolute top-[18%] right-0 text-[8px] text-[#A3A3A3]`}>Motor assembly</span>
          <span className={`${mono} absolute top-[6%] left-[30%] text-[8px] text-[#A3A3A3]`}>Cyclone pack</span>
          <span className={`${mono} absolute bottom-[8%] right-[8%] text-[8px] text-[#A3A3A3]`}>Battery pack</span>
          <span className={`${mono} absolute top-2 right-2 text-[8px] text-[#FE6219]`}>System_active</span>
        </div>
      </div>

      <p className={`${mono} absolute bottom-4 left-6 text-[9px] text-[#4D4D4D] z-10`}>SEC-00 / Hero</p>
    </section>
  );
}
