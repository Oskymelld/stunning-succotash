// V3 project card — "OPT-G flip card" from Figma.
// Front: dark line-art card (orange dot cluster, NO-0X, motif, title, meta, button).
// Hover: flips on Y axis to an orange back showing the project photo. Text layout
// is identical between faces; the back's copy is all black. Respects
// prefers-reduced-motion (falls back to a crossfade via CSS).
// An always-visible expand button sits top-right (light chrome on the front,
// dark on the orange back) and opens the full-screen expanded view
// (ProjectExpandedV3) instead of navigating.
import { Link } from "react-router";
import { Maximize2 } from "lucide-react";
import { MOTIFS, type MotifKey } from "./Motifs";
import { V3 } from "./tokens";

const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";

export function DotCluster({ color }: { color: string }) {
  const dots = [];
  for (let r = 0; r < 4; r++)
    for (let q = 0; q < 6; q++)
      dots.push(<circle key={`${r}-${q}`} cx={5 + q * 10} cy={5 + r * 10} r={(1.6 - r * 0.28).toFixed(2)} fill={color} />);
  return <svg width="60" height="36" viewBox="0 0 60 36" fill="none" aria-hidden="true">{dots}</svg>;
}

export type ProjectCardData = {
  slug: string;
  index: string; // "NO-01"
  title: string;
  meta: string; // "DYSON / 2019–21"
  motif: MotifKey;
  image: string;
};

export function ProjectCardV3({ data, onExpand }: { data: ProjectCardData; onExpand?: () => void }) {
  const Motif = MOTIFS[data.motif];
  return (
    <div className="group/card relative h-[420px]">
    <Link to={`/project/${data.slug}`} className="block [perspective:1200px] h-full" aria-label={`${data.title} — read case study`}>
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] motion-safe:group-hover/card:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-[8px] border border-[#4D4D4D]/40 bg-[#0D0D0D] p-[22px] flex flex-col motion-reduce:transition-opacity motion-reduce:duration-300 motion-reduce:group-hover/card:opacity-0">
          <div className="flex items-start justify-between h-9">
            <DotCluster color={V3.orange2} />
            {/* mr clears the always-visible expand button overlaying this corner */}
            <span className={`${mono} text-[10px] text-[#8C8C8C] ${onExpand ? "mr-11" : ""}`}>{data.index}</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Motif className="w-[176px] h-[176px]" />
          </div>
          <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[18px] text-[#F7F7F7]">{data.title}</h3>
          <p className={`${mono} text-[11px] leading-[1.7] text-[#A3A3A3] mt-3`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</p>
          <p className={`${mono} text-[11px] text-[#8C8C8C] mt-3`}>{data.meta}</p>
          <span className={`${mono} text-[10px] text-[#F7F7F7] font-bold border border-[#4D4D4D]/60 rounded-[4px] px-3.5 py-2 mt-3 w-max`}>Read case study</span>
        </div>

        {/* BACK — aria-hidden: backface-visibility only hides it visually, so
            without this screen readers announce every card's content twice. */}
        <div aria-hidden="true" className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[8px] bg-[#FE6219] p-[22px] flex flex-col motion-reduce:[transform:none] motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-300 motion-reduce:group-hover/card:opacity-100">
          <div className="flex items-start justify-between h-9">
            <DotCluster color={V3.bg} />
            {/* mr clears the expand button that overlays this corner on hover */}
            <span className={`${mono} text-[10px] text-[#141414] ${onExpand ? "mr-11" : ""}`}>{data.index}</span>
          </div>
          <div className="flex-1 relative my-1">
            <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover rounded-[4px]" />
            {/* corner brackets */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 236 184" preserveAspectRatio="none" fill="none" aria-hidden="true">
              <path d="M1 12V1H12" stroke="#141414" strokeWidth="1.5" />
              <path d="M224 1H235V12" stroke="#141414" strokeWidth="1.5" />
              <path d="M235 172V183H224" stroke="#141414" strokeWidth="1.5" />
              <path d="M12 183H1V172" stroke="#141414" strokeWidth="1.5" />
            </svg>
          </div>
          <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[18px] text-[#141414]">{data.title}</h3>
          <p className={`${mono} text-[11px] leading-[1.7] text-[#141414] mt-3`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</p>
          <p className={`${mono} text-[11px] text-[#141414] mt-3`}>{data.meta}</p>
          <span className={`${mono} text-[10px] text-[#141414] font-bold border border-[#141414] rounded-[4px] px-3.5 py-2 mt-3 w-max`}>Read case study</span>
        </div>
      </div>
    </Link>
    {onExpand && (
      /* Always visible on both faces: light chrome over the dark front,
         swapping to dark chrome as the card flips to its orange back. */
      <button
        type="button"
        onClick={onExpand}
        aria-label={`Expand ${data.title}`}
        className="absolute top-[15px] right-[15px] z-10 size-9 flex items-center justify-center rounded-[6px] border border-[#8C8C8C]/60 text-[#A3A3A3] group-hover/card:border-[#141414]/70 group-hover/card:text-[#141414] transition-all duration-300 hover:bg-[#141414] hover:border-[#141414] hover:text-[#FE6219] cursor-pointer"
      >
        <Maximize2 className="w-4 h-4" strokeWidth={1.5} />
      </button>
    )}
    </div>
  );
}
