// V3 expanded project view — full-screen overlay opened from a project card's
// expand button. Speaks the same card language (dot cluster, NO-0X, bracketed
// photo, mono labels) with longer copy plus "\ KEY SKILLS" tags. Close = the
// matching collapse button top-right (also Esc / backdrop click). Arrows sit
// either side of the panel (below it on mobile) and step through projects,
// wrapping at the ends; the content pushes through horizontally like a
// carousel (next slides in from the right, prev from the left).
// Detail copy + skills are PLACEHOLDER lorem for now (same as the small
// cards) — swap back to p.description / p.challenge / p.solution / p.skills
// when Tom writes the real copy.
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Minimize2 } from "lucide-react";
import type { Project } from "../data/projects";
import { MOTIFS, type MotifKey } from "./Motifs";
import { DotCluster } from "./ProjectCardV3";
import { V3 } from "./tokens";

const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";

// PLACEHOLDER copy (real detail text comes later) — mirrors the lorem used on
// the small flip cards.
const LOREM_BODY =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
const LOREM_BLOCK =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const PLACEHOLDER_SKILLS = ["Lorem", "Ipsum dolor", "Sit amet", "Consectetur", "Adipiscing elit"];

// Carousel push: next enters from the right while the old content exits left
// (and vice versa for prev).
const slide = {
  enter: (d: number) => ({ x: `${d * 100}%` }),
  center: { x: "0%" },
  exit: (d: number) => ({ x: `${d * -100}%` }),
};

export type ExpandedProject = {
  project: Project;
  index: string; // "NO-01"
  motif: MotifKey;
};

function MiniLabel({ children }: { children: string }) {
  return (
    <p className={`${mono} text-[10px] font-bold flex items-center gap-2`}>
      <span className="text-[#FE6219]">\</span>
      <span className="text-[#A3A3A3]">{children}</span>
    </p>
  );
}

function NavArrow({
  dir,
  onClick,
  label,
  className = "",
}: {
  dir: -1 | 1;
  onClick: () => void;
  label: string;
  className?: string;
}) {
  const Icon = dir < 0 ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`size-11 shrink-0 items-center justify-center rounded-[6px] border border-[#4D4D4D]/40 bg-[#1F1F1F]/95 text-[#A3A3A3] transition-all duration-300 hover:bg-[#FE6219]/40 hover:border-[#FE6219]/80 hover:text-[#F7F7F7] hover:backdrop-blur-md cursor-pointer ${className}`}
    >
      <Icon className="w-5 h-5" strokeWidth={1.5} />
    </button>
  );
}

export function ProjectExpandedV3({
  items,
  current,
  onClose,
  onNavigate,
}: {
  items: ExpandedProject[];
  current: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const n = items.length;
  const item = items[current];
  const p = item.project;
  const Motif = MOTIFS[item.motif];
  const closeRef = useRef<HTMLButtonElement>(null);

  // Direction of the last navigation (+1 next / -1 prev), for the carousel
  // push. A wrap-around jump (first <-> last) inverts the raw delta's sign.
  const prevIndex = useRef(current);
  const delta = current - prevIndex.current;
  const dir = delta === 0 ? 1 : Math.abs(delta) === n - 1 ? -Math.sign(delta) : Math.sign(delta);
  useEffect(() => {
    prevIndex.current = current;
  }, [current]);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Esc closes, arrow keys navigate; page scroll locked while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((current - 1 + n) % n);
      if (e.key === "ArrowRight") onNavigate((current + 1) % n);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [current, n, onClose, onNavigate]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${p.title} — project details`}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 pb-20 sm:p-8 sm:pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-[#0D0D0D]/90 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 flex items-center justify-center gap-4 lg:gap-6 w-full max-w-[1180px] h-full">
        <NavArrow dir={-1} onClick={() => onNavigate((current - 1 + n) % n)} label="Previous project" className="hidden sm:flex" />

        {/* panel */}
        <motion.div
          className="relative flex-1 min-w-0 h-full rounded-[8px] border border-[#4D4D4D]/40 bg-[#141414] flex flex-col overflow-hidden"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="flex items-start justify-between p-[22px] pb-0 shrink-0">
            <DotCluster color={V3.orange2} />
            <span className={`${mono} text-[10px] text-[#4D4D4D] mr-12 mt-1`}>{item.index}</span>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close expanded view"
            className="absolute top-[15px] right-[15px] z-20 size-9 flex items-center justify-center rounded-[6px] border border-[#4D4D4D]/60 text-[#A3A3A3] transition-all duration-300 hover:bg-[#FE6219]/40 hover:border-[#FE6219]/80 hover:text-[#F7F7F7] cursor-pointer"
          >
            <Minimize2 className="w-4 h-4" strokeWidth={1.5} />
          </button>

          <div className="flex-1 relative overflow-hidden">
            {/* Old and new content overlap absolutely so they can push
                through side by side; the scroll container lives inside the
                sliding layer to avoid horizontal scrollbars mid-transition. */}
            <AnimatePresence custom={dir} initial={false}>
              <motion.div
                key={p.slug}
                custom={dir}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0 overflow-y-auto flex flex-col md:flex-row gap-6 md:gap-9 p-[22px] sm:p-8 pt-4 sm:pt-4"
              >
                {/* photo, bracketed like the card back */}
                <div className="relative md:w-[42%] shrink-0 aspect-[4/3] md:aspect-auto md:min-h-[420px]">
                  <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover rounded-[4px]" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 236 184" preserveAspectRatio="none" fill="none" aria-hidden="true">
                    <path d="M1 12V1H12" stroke={V3.orange2} strokeWidth="1.5" />
                    <path d="M224 1H235V12" stroke={V3.orange2} strokeWidth="1.5" />
                    <path d="M235 172V183H224" stroke={V3.orange2} strokeWidth="1.5" />
                    <path d="M12 183H1V172" stroke={V3.orange2} strokeWidth="1.5" />
                  </svg>
                </div>

                {/* detail column, ghost motif behind */}
                <div className="relative flex-1 min-w-0 flex flex-col gap-6">
                  <Motif className="absolute -top-2 right-0 w-[200px] h-[200px] opacity-[0.07] pointer-events-none" />

                  <div>
                    <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[25px] sm:text-[31px] leading-[1.15] text-[#F7F7F7]">{p.title}</h3>
                    <p className={`${mono} text-[9px] text-[#A3A3A3] mt-3`}>
                      {p.category} · {p.role} · {p.year}
                    </p>
                  </div>

                  {/* PLACEHOLDER copy — swap to p.description / p.challenge /
                      p.solution / p.skills when the real text is written. */}
                  <p className="font-['Space_Grotesk',sans-serif] text-[15px] leading-[1.6] text-[#A3A3A3]">{LOREM_BODY}</p>

                  <div>
                    <MiniLabel>Challenge</MiniLabel>
                    <p className={`${mono} text-[9px] leading-[1.8] text-[#A3A3A3] mt-2`}>{LOREM_BLOCK}</p>
                  </div>
                  <div>
                    <MiniLabel>Solution</MiniLabel>
                    <p className={`${mono} text-[9px] leading-[1.8] text-[#A3A3A3] mt-2`}>{LOREM_BLOCK}</p>
                  </div>

                  <div>
                    <MiniLabel>Key skills</MiniLabel>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {PLACEHOLDER_SKILLS.map((s) => (
                        <span key={s} className={`${mono} text-[9px] text-[#F7F7F7] border border-[#4D4D4D]/60 rounded-[4px] px-2.5 py-1.5`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/project/${p.slug}`}
                    className={`${mono} text-[10px] font-bold text-[#F7F7F7] border border-[#FE6219] rounded-[4px] px-3.5 py-2 w-max mt-auto transition-colors hover:bg-[#FE6219] hover:text-[#141414]`}
                  >
                    Read case study
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <NavArrow dir={1} onClick={() => onNavigate((current + 1) % n)} label="Next project" className="hidden sm:flex" />
      </div>

      {/* mobile: arrows sit under the panel instead of beside it */}
      <div className="sm:hidden absolute bottom-5 inset-x-0 z-10 flex justify-center gap-4">
        <NavArrow dir={-1} onClick={() => onNavigate((current - 1 + n) % n)} label="Previous project" className="flex" />
        <NavArrow dir={1} onClick={() => onNavigate((current + 1) % n)} label="Next project" className="flex" />
      </div>
    </motion.div>
  );
}
