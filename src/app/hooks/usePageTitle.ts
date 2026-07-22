import { useEffect } from "react";

const BASE_TITLE = "Design Portfolio - Tom Carter";

// Sets document.title per route. In an SPA the title never changes on its own,
// so screen reader users get no confirmation that navigation happened (WCAG
// 2.4.2). Call with no argument for the home page's base title.
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Tom Carter` : BASE_TITLE;
  }, [title]);
}
