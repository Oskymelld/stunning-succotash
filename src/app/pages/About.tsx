// About page — long format, built from Figma "About / Desktop / 1440"
// (Portfolio-Design-System-V3, node 132:393). Five sections: hero with
// portrait + fact grid, "What makes me different" cards + pull-quote, the
// circuit-route career timeline, "Made by hand", and "Beyond the work".
// The full circuit timeline (branching routes, exact design coordinates)
// renders at xl+; below that a stacked rail version carries the same data.
import { motion } from "motion/react";
import { usePageTitle } from "../hooks/usePageTitle";
import PORTRAIT from "../../imports/about/portrait.png";
import MAKER1 from "../../imports/about/maker-1.jpg";
import MAKER2 from "../../imports/about/maker-2.jpg";
import routeDyson from "../../imports/about/route-dyson.svg";
import routeEverbound from "../../imports/about/route-everbound.svg";

const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";
const grotesk = "font-['Space_Grotesk',sans-serif]";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

// Orange utility label ("\\ ABOUT", "SEC-01 · ..."), per the design's
// Accent-tone SectionLabel.
function AccentLabel({ children }: { children: string }) {
  return (
    <p className={`${mono} text-[13px] font-bold text-[#FE6219] flex items-center gap-1.5`}>
      <span>\\</span>
      <span>{children}</span>
    </p>
  );
}

function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-4">
      <AccentLabel>{label}</AccentLabel>
      <h2 className={`${grotesk} font-bold text-[28px] sm:text-[39px] leading-[1.15] text-[#F7F7F7]`}>{title}</h2>
    </div>
  );
}

const FACTS = [
  { label: "Role", value: "Product / Service / UX" },
  { label: "Based", value: "Bristol, UK" },
  { label: "Specialism", value: "Discovery & 0→1" },
  { label: "Since", value: "2013" },
];

const DIFFERENT_CARDS: { num: string; title: string; paras: string[] }[] = [
  {
    num: "01",
    title: "HARDWARE → SERVICE",
    paras: [
      "Most service designers start in digital. I started with physical machines.",
      "Tooling, tolerances, production lines & carried that rigour into services. I don’t just map the experience; I understand what it takes to build & ship it & communicate with everyone in the development pipelines.",
    ],
  },
  {
    num: "02",
    title: "Design → Build → Test → Learn",
    paras: [
      "I’d rather test than debate. Interviews, data, prototypes. Decisions earn their place with evidence, & claims get backed up. Eleven patents taught me that good ideas survive scrutiny (& the rest shouldn’t ship).",
    ],
  },
  {
    num: "03",
    title: "Build over Buy Mentality",
    paras: [
      "Ideas aren’t real until you can use them to learn. I’ve worked in almost any medium/process you can think of: Metalwork, CNC, 3D printing, cardboard modelling, code, AI, role play & even sticky notes with string.",
      "I am the kind of person that would rather build what I need then buy it.",
      "Constantly developing a skillset of capabilities I can utilise in my design career.",
    ],
  },
];

// Dyson sub-roles rendered along the inner branch route.
const DYSON_ROLES = [
  { years: "2013–14", title: "Graduate Design Engineer", desc: "" },
  { years: "2014–17", title: "Design Engineer", desc: "" },
  { years: "2017–22", title: "Senior Design Engineer", desc: "NPI Floorcare — OmniGlide, Micro 1.5kg, Hair Screw; 11 patents." },
  { years: "2022–24", title: "Lead Design Engineer — Advanced Robotics", desc: "Robot Homecare Assistant & Floor cleaning Wet & Dry Robot; led a team of 10." },
  { years: "2024–25", title: "Senior UX Designer — Global Connectivity", desc: "Discovery & UX/Service definition, Connecting Dyson's ecosystem with ‘MyDyson’ App" },
];

// Vertical positions of the five sub-roles in the xl circuit layout, from Figma.
const DYSON_ROLE_TOPS = [435, 500, 565, 655, 745];

function EntryCard({ title, desc, className = "" }: { title: string; desc?: string; className?: string }) {
  return (
    <div className={`bg-[#1F1F1F] border border-[#4D4D4D]/40 rounded-[8px] px-5 py-4 flex flex-col gap-2 ${className}`}>
      <p className={`${grotesk} font-medium text-[20px] text-[#F7F7F7]`}>{title}</p>
      {desc && <p className={`${grotesk} text-[14px] leading-[1.4] text-[#A3A3A3]`}>{desc}</p>}
    </div>
  );
}

// Circuit nodes, per the design's vector assets: 14px dark circle with orange
// ring; 8px solid orange dot; 12px rotated-square junction.
const nodeRing = "size-3.5 rounded-full border-2 border-[#FE6219] bg-[#141414]";
const nodeDot = "size-2 rounded-full bg-[#FE6219]";
const nodeDiamond = "size-3 rotate-45 border-2 border-[#FE6219] bg-[#141414]";

const yearAccent = `${mono} text-[13px] font-bold text-[#FE6219]`;
const yearDim = `${mono} text-[13px] font-bold text-[#A3A3A3]`;

// Full circuit-route timeline at design coordinates (needs ~1030px width).
function TimelineCircuit() {
  return (
    <div className="relative h-[1156px] w-full" aria-hidden="true">
      <div className="absolute left-[120px] top-[20px] h-[1060px] w-[2px] bg-[#FE6219]" />
      <img src={routeDyson} alt="" className="absolute left-[122px] top-[299px] w-[100px] h-[548px]" />
      <img src={routeEverbound} alt="" className="absolute left-[122px] top-[880px] w-[558px] h-[195px]" />

      {/* Loughborough */}
      <span className={`absolute left-[114px] top-[21px] ${nodeRing}`} />
      <p className={`absolute left-0 w-[104px] top-[19px] text-right ${yearAccent}`}>2009–13</p>
      <EntryCard className="absolute left-[160px] top-[6px] w-[480px]" title="Loughborough University" desc="Product Design BSc" />

      {/* Stoneham placement stub */}
      <span className="absolute left-[122px] top-[177px] w-[38px] h-[2px] bg-[#FE6219]" />
      <span className={`absolute left-[153px] top-[171px] ${nodeRing}`} />
      <p className={`absolute left-[160px] top-[122px] ${yearAccent}`}>2012 · Placement</p>
      <EntryCard
        className="absolute left-[160px] top-[148px] w-[360px]"
        title="Stoneham PLC"
        desc="CAD Designer (placement). CAD & production drawings for luxury kitchens."
      />

      {/* Dyson */}
      <span className={`absolute left-[117px] top-[292px] ${nodeDiamond}`} />
      <p className={`absolute left-0 w-[104px] top-[298px] text-right ${yearAccent}`}>2013–25</p>
      <EntryCard
        className="absolute left-[160px] top-[285px] w-[480px]"
        title="Dyson"
        desc="Graduate → Lead across NPI Floorcare, Advanced Robotics & Global Connectivity."
      />
      {DYSON_ROLES.map((r, i) => (
        <div key={r.years}>
          <span className={`absolute left-[217px] ${nodeDot}`} style={{ top: DYSON_ROLE_TOPS[i] + 6 }} />
          <p className={`absolute left-[134px] w-[70px] text-right ${yearDim}`} style={{ top: DYSON_ROLE_TOPS[i] + 1 }}>{r.years}</p>
          <div className="absolute left-[252px] w-[600px] flex flex-col gap-1" style={{ top: DYSON_ROLE_TOPS[i] }}>
            <p className={`${grotesk} font-medium text-[16px] text-[#F7F7F7]`}>{r.title}</p>
            {r.desc && <p className={`${grotesk} text-[14px] leading-[1.4] text-[#A3A3A3]`}>{r.desc}</p>}
          </div>
        </div>
      ))}

      {/* Everbound branch */}
      <span className={`absolute left-[674px] top-[873px] ${nodeRing}`} />
      <p className={`absolute left-[678px] top-[825px] ${yearAccent}`}>2025– · Side hustle</p>
      <EntryCard
        className="absolute left-[681px] top-[850px] w-[340px]"
        title="Everbound Goods"
        desc="Founder. Hand-stitched leather goods, built from a desire to refine a craft, learn how to run a business. Focusing on sustainability & Quiet Luxury"
      />

      {/* Admiral */}
      <span className={`absolute left-[115px] top-[875px] ${nodeDiamond}`} />
      <span className="absolute left-[121px] top-[927px] w-[38px] h-[2px] bg-[#FE6219]" />
      <span className={`absolute left-[152px] top-[921px] ${nodeRing}`} />
      <p className={`absolute left-0 w-[104px] top-[919px] text-right ${yearAccent}`}>2025–</p>
      <EntryCard
        className="absolute left-[160px] top-[906px] w-[480px]"
        title="Admiral Insurance"
        desc="Midweight User Researcher / Service Designer. Internal process & customer-facing systems."
      />

      <p className={`absolute left-[88px] top-[1096px] ${mono} text-[12px] text-[#FE6219]`}>▼ Present</p>
    </div>
  );
}

// Stacked rail version of the same data for viewports below xl. This is the
// version assistive tech reads at any width (the circuit is aria-hidden).
function TimelineStacked() {
  return (
    <ol className="relative flex flex-col gap-8 border-l-2 border-[#FE6219] pl-6 list-none">
      <li className="flex flex-col gap-2">
        <span className={`absolute -left-2 ${nodeRing}`} aria-hidden="true" />
        <p className={yearAccent}>2009–13</p>
        <EntryCard title="Loughborough University" desc="Product Design BSc" />
      </li>
      <li className="flex flex-col gap-2">
        <p className={yearAccent}>2012 · Placement</p>
        <EntryCard title="Stoneham PLC" desc="CAD Designer (placement). CAD & production drawings for luxury kitchens." />
      </li>
      <li className="flex flex-col gap-2">
        <p className={yearAccent}>2013–25</p>
        <EntryCard title="Dyson" desc="Graduate → Lead across NPI Floorcare, Advanced Robotics & Global Connectivity." />
        <ul className="flex flex-col gap-4 mt-2 pl-4 border-l border-[#4D4D4D]/40 list-none">
          {DYSON_ROLES.map((r) => (
            <li key={r.years} className="flex flex-col gap-1">
              <p className={yearDim}>{r.years}</p>
              <p className={`${grotesk} font-medium text-[16px] text-[#F7F7F7]`}>{r.title}</p>
              {r.desc && <p className={`${grotesk} text-[14px] leading-[1.4] text-[#A3A3A3]`}>{r.desc}</p>}
            </li>
          ))}
        </ul>
      </li>
      <li className="flex flex-col gap-2">
        <p className={yearAccent}>2025– · Side hustle</p>
        <EntryCard title="Everbound Goods" desc="Founder. Hand-stitched leather goods, built from a desire to refine a craft, learn how to run a business. Focusing on sustainability & Quiet Luxury" />
      </li>
      <li className="flex flex-col gap-2">
        <p className={yearAccent}>2025–</p>
        <EntryCard title="Admiral Insurance" desc="Midweight User Researcher / Service Designer. Internal process & customer-facing systems." />
      </li>
      <li>
        <p className={`${mono} text-[12px] text-[#FE6219]`}>▼ Present</p>
      </li>
    </ol>
  );
}

export function About() {
  usePageTitle("About");
  return (
    <div className="flex flex-col gap-20 sm:gap-24">
      {/* HERO */}
      <motion.section {...fade} className="flex flex-col gap-8 sm:gap-12">
        <AccentLabel>About</AccentLabel>
        <h1 className={`${grotesk} font-bold text-[32px] sm:text-[48px] leading-[1.1] text-[#F7F7F7] max-w-[900px]`}>
          Engineer by training, designer by trade, maker by habit.
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className={`flex-1 min-w-0 ${grotesk} text-[17px] sm:text-[20px] leading-[1.6] text-[#A3A3A3] flex flex-col gap-6`}>
            <p>
              I spent twelve years at Dyson designing machines people use every day. Vacuums, Cleaning Robots, Fans
              & a whole host of other projects I can never talk about. I excelled in turning ‘What if’ into tangible
              reality in both physical products & App based experiences.
            </p>
            <p>
              Somewhere along the way I realised the interesting problems didn’t stop at the product’s edge; they ran
              through the whole service around it. So I followed them. Today I research & design end-to-end services,
              working in the murky early stages where problems are still fuzzy (& most of the value is still up for
              grabs).
            </p>
            <p>I have always been driven by the ‘human’ part of design, the edge cases that make things less simple.</p>
          </div>

          {/* Portrait + fact file */}
          <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-4">
            <div className="h-[280px] rounded-[8px] border border-[#4D4D4D]/40 overflow-hidden">
              <img src={PORTRAIT} alt="Tom Carter" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {FACTS.map((f) => (
                <div key={f.label} className="bg-[#1F1F1F] border border-[#4D4D4D]/40 rounded-[4px] px-3.5 py-3 min-h-[84px] flex flex-col justify-between gap-1.5">
                  <p className={`${mono} text-[13px] font-bold text-[#FE6219]`}>{f.label}</p>
                  <p className={`${mono} text-[13px] font-bold text-[#F7F7F7]`}>{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* DIFFERENT */}
      <motion.section {...fade} className="flex flex-col gap-8 sm:gap-12">
        <SectionHead label="SEC-01 · Different by design" title="What makes me different" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIFFERENT_CARDS.map((c) => (
            <div key={c.num} className="bg-[#1F1F1F] border border-[#4D4D4D]/40 rounded-[8px] px-6 py-7 flex flex-col gap-4">
              <p className={`${mono} text-[13px] font-bold text-[#FE6219]`}>{c.num}</p>
              <p className={`${grotesk} font-medium text-[20px] leading-[1.3] text-[#F7F7F7]`}>{c.title}</p>
              <div className={`${grotesk} text-[17px] leading-[1.6] text-[#A3A3A3] flex flex-col gap-4`}>
                {c.paras.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <blockquote className="border-l-[3px] border-[#FE6219] pl-6 flex flex-col gap-3 max-w-[700px]">
          <p className={`${grotesk} text-[20px] leading-[1.6] text-[#F7F7F7]`}>
            “As far as the customer is concerned, the interface is the product.”
          </p>
          <cite className={`${mono} text-[13px] font-bold text-[#A3A3A3] not-italic`}>
            — Jef Raskin, The Humane Interface (2000)
          </cite>
        </blockquote>
      </motion.section>

      {/* TIMELINE */}
      <motion.section {...fade} className="flex flex-col gap-8 sm:gap-12">
        <SectionHead label="SEC-02 · Career path / 2009—Present" title="The path so far" />
        <div className="hidden xl:block">
          <TimelineCircuit />
        </div>
        {/* Below xl this is the visible timeline; at xl+ it stays in the
            accessibility tree (sr-only) since the circuit version is a
            decorative aria-hidden rendering of the same data. */}
        <div className="xl:sr-only">
          <TimelineStacked />
        </div>
      </motion.section>

      {/* MAKER */}
      <motion.section {...fade} className="flex flex-col gap-8 sm:gap-12">
        <SectionHead label="SEC-03 · The workshop" title="Made by hand" />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          <div className={`flex-1 min-w-0 ${grotesk} text-[17px] leading-[1.6] text-[#A3A3A3] flex flex-col gap-4`}>
            <p>
              As my day job transitioned towards digital, my hands got restless. Everbound Goods started as a way to
              get back to making things, but this time it was about making beautiful & practical objects.
              Hand-stitched leather goods, built slowly & properly.
            </p>
            <p>
              Its grown into a small business myself & my wife run end to end: product, brand, photography, website
              & marketing. It’s the whole design process in miniature (& the best product education I’ve had since
              Dyson).
            </p>
            <p>
              We focus on quiet luxury & sustainability. Sourcing our leather from British companies, maximising
              yield from each hide. Beautiful bags down to ear rings made from offcuts.
            </p>
          </div>
          <div className="w-full lg:w-[520px] shrink-0 flex gap-4">
            <div className="flex-1 h-[220px] rounded-[8px] border border-[#4D4D4D]/40 overflow-hidden">
              <img src={MAKER1} alt="Hand-stitching a leather bag in the Everbound Goods workshop" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 h-[220px] rounded-[8px] border border-[#4D4D4D]/40 overflow-hidden">
              <img src={MAKER2} alt="Finished Everbound Goods leather pieces laid out on the bench" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* BEYOND */}
      <motion.section {...fade} className="flex flex-col gap-8 sm:gap-12">
        <SectionHead label="SEC-04 · Off duty" title="Beyond the work" />
        <p className={`${grotesk} text-[17px] leading-[1.6] text-[#A3A3A3] max-w-[900px]`}>
          Away from the desk I’m in Bristol, usually with a record on [collecting vinyl is the other hobby] &
          planning the next thing to build. If you want to talk design, records or leather, say hello.
        </p>
      </motion.section>
    </div>
  );
}
