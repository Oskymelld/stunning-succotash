// Placeholder V3 diagrams — Process (5-step flow) and Career (timeline).
// Marked as V0 placeholders; to be designed properly later.
const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";

const STEPS = ["Discover", "Define", "Prototype", "Test", "Deliver"];

export function ProcessDiagram() {
  return (
    <div>
      {/* Desktop: horizontal */}
      <div className="hidden sm:flex items-center gap-0">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center">
            <div className="w-[176px] h-20 rounded-[4px] border border-[#4D4D4D]/40 bg-[#0D0D0D] px-4 flex flex-col justify-center">
              <span className={`${mono} text-[10px] text-[#FE6219]`}>0{i + 1}</span>
              <span className="font-['Space_Grotesk',sans-serif] font-medium text-[15px] text-[#F7F7F7] mt-1 uppercase tracking-wide">{s}</span>
            </div>
            {i < STEPS.length - 1 && (
              <svg width="50" height="10" viewBox="0 0 50 10" fill="none" className="shrink-0" aria-hidden="true">
                <path d="M0 5H44" stroke="#4D4D4D" strokeWidth="1" strokeDasharray="3 4" />
                <path d="M40 1L45 5L40 9" stroke="#FE6219" strokeWidth="1" />
              </svg>
            )}
          </div>
        ))}
      </div>
      {/* Mobile: vertical */}
      <div className="flex sm:hidden flex-col gap-0">
        {STEPS.map((s, i) => (
          <div key={s}>
            <div className="h-[60px] rounded-[4px] border border-[#4D4D4D]/40 bg-[#0D0D0D] px-4 flex flex-col justify-center">
              <span className={`${mono} text-[10px] text-[#FE6219]`}>0{i + 1}</span>
              <span className="font-['Space_Grotesk',sans-serif] font-medium text-[15px] text-[#F7F7F7] uppercase tracking-wide">{s}</span>
            </div>
            {i < STEPS.length - 1 && (
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" className="ml-[42px]" aria-hidden="true">
                <path d="M5 0V11" stroke="#4D4D4D" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M1 8L5 13L9 8" stroke="#FE6219" strokeWidth="1" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <p className={`${mono} text-[8px] text-[#8C8C8C] mt-4`}>Placeholder — process diagram v0</p>
    </div>
  );
}

const MILESTONES = [
  { year: "2016", org: "University" },
  { year: "2018", org: "Junior Designer" },
  { year: "2019", org: "Dyson" },
  { year: "2023", org: "Freelance" },
  { year: "2026", org: "Portfolio" },
];

export function CareerDiagram() {
  return (
    <div>
      {/* Desktop: horizontal timeline */}
      <div className="hidden sm:block relative pt-8 pb-10">
        <div className="absolute left-0 right-0 top-[52px] h-px bg-[#4D4D4D]" />
        <div className="flex justify-between relative">
          {MILESTONES.map((m) => (
            <div key={m.year} className="flex flex-col items-center">
              <span className={`${mono} text-[10px] text-[#FE6219] mb-3`}>{m.year}</span>
              <span className="w-3 h-3 rounded-full bg-[#141414] border-[1.5px] border-[#FE6219]" />
              <span className="font-['Space_Grotesk',sans-serif] font-medium text-[13px] text-[#A3A3A3] mt-3">{m.org}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile: vertical timeline */}
      <div className="flex sm:hidden flex-col relative pl-6">
        <div className="absolute left-[6px] top-1 bottom-1 w-px bg-[#4D4D4D]" />
        {MILESTONES.map((m) => (
          <div key={m.year} className="flex items-center gap-3 py-3 relative">
            <span className="absolute -left-6 w-3 h-3 rounded-full bg-[#141414] border-[1.5px] border-[#FE6219]" />
            <span className={`${mono} text-[10px] text-[#FE6219] w-10`}>{m.year}</span>
            <span className="font-['Space_Grotesk',sans-serif] font-medium text-[14px] text-[#A3A3A3]">{m.org}</span>
          </div>
        ))}
      </div>
      <p className={`${mono} text-[8px] text-[#8C8C8C] mt-4`}>Placeholder — career timeline v0</p>
    </div>
  );
}
