// V3 About section — "V2 fact file" from Figma. Bracketed photo, heading + one
// short paragraph, MORE ABOUT ME / LINKEDIN links, four-cell fact strip.
import { SectionLabel } from "./primitives";
import PROFILE from "../../imports/profile-bw.png";

const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";

const FACTS = [
  { label: "Role", value: "Design Engineer" },
  { label: "Based", value: "UK" },
  { label: "Focus", value: "Product + UX" },
  { label: "Since", value: "2016" },
];

export function AboutV3() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-8 lg:gap-14 items-start">
        {/* Photo */}
        <div>
          <p className={`${mono} text-[10px] text-[#8C8C8C] mb-2.5`}>SEC-04 / Profile</p>
          <div className="relative">
            <img src={PROFILE} alt="Tom Carter" className="w-full aspect-[340/380] object-cover" />
            <svg className="absolute -inset-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)]" viewBox="0 0 360 400" preserveAspectRatio="none" fill="none" aria-hidden="true">
              <path d="M1 16V1H16" stroke="#F7F7F7" strokeWidth="1.5" />
              <path d="M344 1H359V16" stroke="#F7F7F7" strokeWidth="1.5" />
              <path d="M359 384V399H344" stroke="#F7F7F7" strokeWidth="1.5" />
              <path d="M16 399H1V384" stroke="#F7F7F7" strokeWidth="1.5" />
            </svg>
          </div>
          <p className={`${mono} text-[10px] text-[#8C8C8C] mt-3`}>FIG. 02 — Portrait</p>
        </div>

        {/* Copy */}
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[28px] sm:text-[39px] leading-[1.15] text-[#F7F7F7] mt-3">
            Designer and engineer building products end to end
          </h2>
          <p className="font-['Space_Grotesk',sans-serif] text-[17px] leading-[1.6] text-[#A3A3A3] mt-6 max-w-[68ch]">
            A strategic, hands-on designer with a background in physical and digital product
            development. I map complex systems and orchestrate end-to-end journeys — from
            first prototype to shipped product.
          </p>
          <div className="flex flex-wrap items-center gap-8 mt-8">
            {/* "More about me" link removed until the /about page exists — it
                pointed at the section it sits in. Reinstate with the real route. */}
            <a href="https://www.linkedin.com/in/tom-carter-89403267/" target="_blank" rel="noopener noreferrer" className={`${mono} text-[13px] font-bold text-[#FE6219] hover:text-[#F36A36] transition-colors`}>
              LinkedIn ↗<span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>

          {/* Fact strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-10 border border-[#4D4D4D]/40 rounded-[8px] bg-[#1F1F1F] overflow-hidden">
            {FACTS.map((f, i) => (
              <div key={f.label} className={`p-6 ${i > 0 ? "md:border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""} ${i % 2 === 1 ? "border-l md:border-l" : ""} border-[#4D4D4D]/40`}>
                <p className={`${mono} text-[10px] text-[#8C8C8C]`}>{f.label}</p>
                <p className="font-['Space_Grotesk',sans-serif] font-medium text-[20px] text-[#F7F7F7] mt-2">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
