// Small shared V3 primitives: section label, tick-rail divider.
const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";

export function SectionLabel({ children }: { children: string }) {
  return (
    <p className={`${mono} text-[13px] flex items-center gap-2`}>
      <span className="text-[#FE6219]">\\</span>
      <span className="text-[#A3A3A3]">{children}</span>
    </p>
  );
}

export function TickRail({ className = "" }: { className?: string }) {
  const ticks = [];
  for (let i = 0; i <= 90; i++) {
    const h = i % 10 === 0 ? 10 : i % 5 === 0 ? 7 : 4;
    ticks.push(
      <path key={i} d={`M${i * 12} 0V${h}`} stroke="#4D4D4D" strokeWidth="1" strokeOpacity={i % 10 === 0 ? 0.9 : 0.55} />
    );
  }
  return (
    <svg className={`w-full h-3 ${className}`} viewBox="0 0 1081 12" preserveAspectRatio="none" fill="none" aria-hidden="true">
      {ticks}
    </svg>
  );
}
