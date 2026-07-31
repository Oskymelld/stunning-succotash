// V3 case-study primitives — from the Figma template
// "CASE STUDY / DYSON MICRO 1.5KG — EXAMPLE (OPT B) — 1440" (node 129:927).
// The engineering-instrument language of the rest of the site: orange section
// bars with SEC-0X codes, corner-bracketed images, mono readouts and tick rails.
import type { ReactNode } from "react";

const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";

// Thin HUD-style brackets that frame project imagery instead of a border.
export function CornerBrackets({ color = "#A3A3A3" }: { color?: string }) {
  const arm = "absolute block";
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* top-left */}
      <span className={`${arm} left-[10px] top-[10px] h-[2px] w-[22px]`} style={{ background: color }} />
      <span className={`${arm} left-[10px] top-[10px] h-[22px] w-[2px]`} style={{ background: color }} />
      {/* top-right */}
      <span className={`${arm} right-[10px] top-[10px] h-[2px] w-[22px]`} style={{ background: color }} />
      <span className={`${arm} right-[10px] top-[10px] h-[22px] w-[2px]`} style={{ background: color }} />
      {/* bottom-left */}
      <span className={`${arm} bottom-[10px] left-[10px] h-[2px] w-[22px]`} style={{ background: color }} />
      <span className={`${arm} bottom-[10px] left-[10px] h-[22px] w-[2px]`} style={{ background: color }} />
      {/* bottom-right */}
      <span className={`${arm} bottom-[10px] right-[10px] h-[2px] w-[22px]`} style={{ background: color }} />
      <span className={`${arm} bottom-[10px] right-[10px] h-[22px] w-[2px]`} style={{ background: color }} />
    </div>
  );
}

// An image in a raised well with an optional caption. Falls back to the
// "[ PROJECT IMAGE ]" plate from the Figma template when no src is supplied,
// so an unfinished section reads as deliberately empty rather than broken.
export function ImageBlock({
  src,
  alt = "",
  caption,
  brackets = false,
  className = "",
  imageClassName = "h-[340px]",
}: {
  src?: string;
  alt?: string;
  caption?: string;
  brackets?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-[8px] bg-[#2A2A2A] ${imageClassName}`}
      >
        {src ? (
          <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <p className={`${mono} absolute inset-0 flex items-center justify-center text-[13px] font-bold text-[#A3A3A3]`}>
            [ Project image ]
          </p>
        )}
        {brackets && <CornerBrackets />}
      </div>
      {caption && (
        <figcaption className="text-[14px] leading-[1.4] text-[#A3A3A3]">{caption}</figcaption>
      )}
    </figure>
  );
}

// Orange section bar + "\ SEC-0X LABEL" code + heading.
export function SectionHeader({ code, heading }: { code: string; heading: string }) {
  return (
    <div className="flex items-center gap-4">
      <span aria-hidden="true" className="h-[44px] w-[14px] shrink-0 bg-[#FE6219]" />
      <div className="flex flex-col gap-0.5">
        <p className={`${mono} flex gap-1.5 text-[13px] font-bold leading-[1.4] text-[#FE6219]`}>
          <span aria-hidden="true">\\</span>
          <span>{code}</span>
        </p>
        <h2 className="font-['Space_Grotesk',sans-serif] text-[28px] font-bold leading-[1.15] text-[#F7F7F7] sm:text-[39px]">
          {heading}
        </h2>
      </div>
    </div>
  );
}

// Scannable project metadata — role / team / timeframe / tools.
export function FactBox({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="flex w-full flex-col gap-2.5 rounded-[8px] bg-[#1F1F1F] px-7 py-6">
      {rows.map((r) => (
        <div key={r.label} className="flex items-baseline gap-6">
          <dt className={`${mono} w-[110px] shrink-0 text-[12px] leading-[1.4] text-[#A3A3A3]`}>{r.label}</dt>
          <dd className="font-['Space_Mono',monospace] text-[13px] leading-[1.4] tracking-[0.05em] text-[#F7F7F7]">
            {r.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className={`${mono} rounded-[4px] bg-[#2A2A2A] px-2.5 py-[5px] text-[11px] text-[#F7F7F7]`}>
      {children}
    </span>
  );
}

// Cited pull-quote with an orange rule, per the Quote/Reference component.
export function QuoteReference({ quote, source }: { quote: string; source: string }) {
  return (
    <blockquote className="flex max-w-[700px] flex-col gap-3 border-l-[3px] border-[#FE6219] pl-6">
      <p className="font-['Space_Grotesk',sans-serif] text-[20px] leading-[1.6] text-[#F7F7F7]">{quote}</p>
      <footer className={`${mono} text-[13px] font-bold leading-[1.4] text-[#A3A3A3]`}>{source}</footer>
    </blockquote>
  );
}

// Instrument-style readout band of headline numbers.
export function StatsReadout({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="flex w-full flex-col gap-px sm:flex-row">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-1 flex-col gap-2 bg-[#1F1F1F] p-6">
          <p className="font-['Space_Grotesk',sans-serif] text-[31px] font-bold leading-[1.15] text-[#FE6219] sm:text-[39px]">
            {s.value}
          </p>
          <p className={`${mono} text-[13px] font-bold leading-[1.4] text-[#A3A3A3]`}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
