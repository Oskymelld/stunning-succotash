import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { HeroV3 } from "../v3/HeroV3";
import { AboutV3 } from "../v3/AboutV3";
import { ProjectCardV3, type ProjectCardData } from "../v3/ProjectCardV3";
import { ProjectExpandedV3, type ExpandedProject } from "../v3/ProjectExpandedV3";
import { ProcessDiagram, CareerDiagram } from "../v3/Diagrams";
import { SectionLabel, TickRail } from "../v3/primitives";
import { usePageTitle } from "../hooks/usePageTitle";
import type { MotifKey } from "../v3/Motifs";

// Assign a line-art motif + display meta to each project for the V3 flip cards.
const MOTIF_BY_SLUG: Record<string, MotifKey> = {
  "dyson-v15": "cyclone",
  "dyson-product-2": "cube",
  "nexus-analytics": "wheel",
  "rebo": "knot",
  "neon-cloud": "cyclone",
  "everbound-goods": "stitch",
};

const cards: ProjectCardData[] = projects.map((p, i) => ({
  slug: p.slug,
  index: `NO-${String(i + 1).padStart(2, "0")}`,
  title: p.title,
  meta: p.category,
  motif: MOTIF_BY_SLUG[p.slug] ?? "cube",
  image: p.image,
}));

// Same projects, richer data for the full-screen expanded view.
const expandedItems: ExpandedProject[] = projects.map((p, i) => ({
  project: p,
  index: cards[i].index,
  motif: cards[i].motif,
}));

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export function Home() {
  usePageTitle();
  // Index of the project open in the full-screen expanded view, or null.
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      {/* HERO */}
      <motion.div {...fade}>
        <HeroV3 />
      </motion.div>

      <TickRail />

      {/* ABOUT */}
      <motion.div {...fade}>
        <AboutV3 />
      </motion.div>

      <TickRail />

      {/* WORK */}
      <motion.section id="work" {...fade} className="scroll-mt-24">
        <SectionLabel>Work</SectionLabel>
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[28px] sm:text-[39px] leading-[1.15] text-[#F7F7F7] mt-3 mb-8">
          Selected projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <ProjectCardV3 key={c.slug} data={c} onExpand={() => setExpanded(i)} />
          ))}
        </div>
        {/* Portal escapes this motion.section — its transform would otherwise
            trap the fixed overlay and leave it under the z-50 nav.
            No AnimatePresence here on purpose: closing must unmount the
            full-screen overlay immediately. Waiting on an exit animation can
            leave it stuck invisible over the page (blocking all clicks) if the
            tab is backgrounded mid-close and rAF callbacks stop firing. */}
        {createPortal(
          expanded !== null && (
            <ProjectExpandedV3
              items={expandedItems}
              current={expanded}
              onClose={() => setExpanded(null)}
              onNavigate={setExpanded}
            />
          ),
          document.body
        )}
        {/* "View all work" link removed until the Work index page exists —
            it previously pointed at this very section (confusing, and flagged
            in the accessibility audit). Reinstate with the real route. */}
      </motion.section>

      <TickRail />

      {/* PROCESS */}
      <motion.section {...fade}>
        <SectionLabel>Process</SectionLabel>
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[28px] sm:text-[39px] leading-[1.15] text-[#F7F7F7] mt-3 mb-8">
          How I work
        </h2>
        <ProcessDiagram />
      </motion.section>

      <TickRail />

      {/* CAREER */}
      <motion.section {...fade}>
        <SectionLabel>Journey</SectionLabel>
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[28px] sm:text-[39px] leading-[1.15] text-[#F7F7F7] mt-3 mb-4">
          Career so far
        </h2>
        <CareerDiagram />
      </motion.section>
    </div>
  );
}
