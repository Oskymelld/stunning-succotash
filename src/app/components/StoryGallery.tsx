import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useFocusTrap } from "../hooks/useFocusTrap";
import type { Story } from "../data/projects";

// Slide enter/exit positions for the horizontal "push" transition. Both the
// outgoing and incoming slides are on screen at once and slide together.
const variants = {
  enter: (dir: number) => ({ x: dir >= 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? "-100%" : "100%", opacity: 0 }),
};

export function StoryGallery({ story }: { story: Story }) {
  const slides = story.slides;
  const [open, setOpen] = useState(false);
  // [current index, direction of last move] — direction drives the push.
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // While open, keyboard focus stays inside the slideshow (starting on the
  // close button) and returns to the CTA tile on close.
  useFocusTrap(dialogRef, closeRef, open);

  const paginate = useCallback(
    (dir: number) => {
      setPage(([i]) => [(i + dir + slides.length) % slides.length, dir]);
    },
    [slides.length]
  );

  // While open: arrow keys navigate, Escape closes, background scroll locked.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowRight") paginate(1);
      else if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, paginate]);

  if (slides.length === 0) return null;
  const slide = slides[index];

  return (
    <section className="my-16">
      {story.label && (
        <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-zinc-300 mb-6">{story.label}</h3>
      )}

      {/* CTA tile — opens the full-screen slideshow */}
      <button
        type="button"
        onClick={() => {
          setPage([0, 0]);
          setOpen(true);
        }}
        aria-label="Open the story gallery"
        className="group relative block w-full max-w-sm aspect-square overflow-hidden bg-[#152028] border border-white/10 cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6d1f]"
      >
        <ImageWithFallback
          src={slides[0].src}
          alt={slides[0].alt}
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
          <span className="w-12 h-12 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#ff6d1f] transition-colors">
            <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="text-lg font-medium text-white font-['Outfit',sans-serif]">See the story</span>
        </div>
      </button>

      {/* Full-screen overlay slideshow. Unmounts instantly on close (no exit
          animation) so it can never linger invisibly over the page. */}
      {open && (
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={story.label ?? "Story gallery"}
          >
            {/* Top bar: counter + close */}
            <div className="flex items-center justify-between p-5 text-white/80 z-10">
              <span className="text-sm tabular-nums">
                {index + 1} / {slides.length}
              </span>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stage — click the slide to advance */}
            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 sm:p-12 cursor-pointer"
                  onClick={() => paginate(1)}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="max-w-full min-h-0 flex-1 object-contain shadow-2xl pointer-events-none"
                  />
                  {slide.caption && (
                    <p className="text-center text-zinc-300 max-w-2xl shrink-0">{slide.caption}</p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Prev / next controls */}
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
      )}
    </section>
  );
}
