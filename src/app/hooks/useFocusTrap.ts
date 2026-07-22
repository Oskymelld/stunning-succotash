import { useEffect } from "react";
import type { RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Keyboard focus management for a modal overlay. While the container is
// mounted: focus moves into it (initialRef if given, else the first focusable
// element), Tab / Shift+Tab wrap within it, and on unmount focus returns to
// whatever had it before the overlay opened. Pair with aria-modal="true" —
// that hides the background from screen readers but does nothing for the
// keyboard, which is what this hook covers.
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  initialRef?: RefObject<HTMLElement | null>,
  // Pass the overlay's open state when the hook lives in a component that
  // outlives the overlay; the trap engages/releases as it flips.
  enabled: boolean = true
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!enabled || !container) return;

    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    (initialRef?.current ?? container.querySelector<HTMLElement>(FOCUSABLE))?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      // offsetParent is null for display:none elements (e.g. the sm:hidden
      // arrow variants), which must not receive focus.
      const items = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const inside = active instanceof HTMLElement && container.contains(active);
      if (e.shiftKey) {
        if (!inside || active === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (!inside || active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    // Capture phase so the trap wins even if focus has strayed outside.
    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      previous?.focus();
    };
  }, [containerRef, initialRef, enabled]);
}
