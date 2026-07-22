// V3 footer — grey/900 well, numbered tick scale divider, INDEX + CONTACT
// columns, back-to-top, SEC-06 readout. Ported from Figma "12 · Footer".
import { Link } from "react-router";
import { ArrowUp } from "lucide-react";

function TickScale() {
  const ticks = [];
  for (let i = 0; i <= 90; i++) {
    const h = i % 10 === 0 ? 10 : i % 5 === 0 ? 7 : 4;
    ticks.push(
      <path key={i} d={`M${i * 12} 0V${h}`} stroke="#4D4D4D" strokeWidth="1" strokeOpacity={i % 10 === 0 ? 0.9 : 0.55} />
    );
  }
  return (
    <svg className="w-full h-3" viewBox="0 0 1081 12" preserveAspectRatio="none" fill="none" aria-hidden="true">
      {ticks}
    </svg>
  );
}

const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";

export function FooterV3() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      // Jump instantly for users who prefer reduced motion
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  return (
    <footer className="w-full bg-[#0D0D0D] mt-24 sm:pl-[104px]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-8 pb-8">
        <TickScale />

        <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between mt-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk',sans-serif] font-bold text-2xl text-[#F7F7F7]">TC.</span>
              <span className="w-1.5 h-1.5 bg-[#FE6219] inline-block" />
            </div>
            <p className={`${mono} text-[10px] text-[#A3A3A3] mt-2`}>Tom Carter — Design Engineer</p>
          </div>

          {/* Index */}
          <div>
            <p className={`${mono} text-[10px] text-[#8C8C8C] mb-3`}>\\ Index</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Work", hash: "/#work" },
                { label: "Writing", to: "/blog" },
                { label: "About", hash: "/#about" },
              ].map((l) =>
                l.to ? (
                  <li key={l.label}><Link to={l.to} className={`${mono} text-[11px] text-[#A3A3A3] hover:text-[#F7F7F7] hover:underline transition-colors`}>{l.label}</Link></li>
                ) : (
                  <li key={l.label}><a href={l.hash} className={`${mono} text-[11px] text-[#A3A3A3] hover:text-[#F7F7F7] hover:underline transition-colors`}>{l.label}</a></li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className={`${mono} text-[10px] text-[#8C8C8C] mb-3`}>\\ Contact</p>
            <ul className="flex flex-col gap-2.5">
              <li><a href="mailto:Tomcarter90@gmail.com" className={`${mono} text-[11px] text-[#A3A3A3] hover:text-[#F7F7F7] hover:underline transition-colors`}>Email ↗</a></li>
              <li><a href="https://www.linkedin.com/in/tom-carter-89403267/" target="_blank" rel="noopener noreferrer" className={`${mono} text-[11px] text-[#A3A3A3] hover:text-[#F7F7F7] hover:underline transition-colors`}>LinkedIn ↗<span className="sr-only"> (opens in new tab)</span></a></li>
            </ul>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="self-start w-10 h-10 rounded-[4px] border border-[#4D4D4D]/60 flex items-center justify-center text-[#A3A3A3] hover:bg-[#FE6219]/40 hover:border-[#FE6219]/80 hover:text-[#F7F7F7] transition-all"
          >
            <ArrowUp className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex justify-between items-center mt-10 pt-4 border-t border-[#4D4D4D]/40">
          <p className={`${mono} text-[10px] text-[#8C8C8C]`}>© 2026 Tom Carter. All rights reserved.</p>
          <p className={`${mono} text-[9px] text-[#8C8C8C]`}>SEC-06 / Footer</p>
        </div>
      </div>
    </footer>
  );
}
