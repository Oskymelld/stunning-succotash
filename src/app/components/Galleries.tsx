import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Gallery, GalleryImage } from "../data/projects";

// Renders one or more gallery rows. Images lift on hover and open in a
// full-screen lightbox on click/tap; clicking the image again, clicking the
// backdrop, or pressing Escape closes it.
export function Galleries({ galleries }: { galleries: Gallery[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  // While the lightbox is open: close on Escape and lock background scroll.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      {galleries.map((gallery, gi) => (
        <section key={gi} className="my-16">
          {(gallery.label || gallery.link) && (
            <div className="flex items-center justify-between mb-6">
              {gallery.label && (
                <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-zinc-300">{gallery.label}</h3>
              )}
              {gallery.link && (
                <a
                  href={gallery.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {gallery.link.label} <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {gallery.images.map((img) => (
              <button
                key={img.alt}
                type="button"
                onClick={() => setActive(img)}
                aria-label={`Expand image: ${img.alt}`}
                className="group w-[150px] sm:w-[230px] aspect-[3/4] rounded-[14px] overflow-hidden bg-[#152028] border-2 border-[#ffccb1] shadow-[6px_6px_0px_0px_#ffa779] cursor-zoom-in transition-transform duration-300 ease-out hover:scale-[1.04] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6d1f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </button>
            ))}
          </div>
        </section>
      ))}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              key={active.src}
              src={active.src}
              alt={active.alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
