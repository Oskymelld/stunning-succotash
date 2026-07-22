import { Outlet } from "react-router";
import { MotionConfig } from "motion/react";
import { NavV3 } from "./v3/NavV3";
import { FooterV3 } from "./v3/FooterV3";

export function Layout() {
  return (
    // reducedMotion="user": every Motion animation in the app (page fades,
    // carousel slides, lightbox springs) drops its transform animation for
    // users with prefers-reduced-motion, keeping only opacity fades.
    <MotionConfig reducedMotion="user">
    <div className="flex flex-col min-h-screen bg-[#141414] text-[#F7F7F7] font-['Space_Grotesk',sans-serif] relative">
      {/* Skip link: invisible until keyboard-focused, then a styled chip
          top-centre. Lets keyboard and screen reader users jump past the nav. */}
      <a
        href="#main-content"
        onClick={(e) => {
          // Move focus explicitly — browsers don't reliably focus in-page
          // anchor targets, which would leave the skip link doing nothing.
          e.preventDefault();
          const main = document.getElementById("main-content");
          main?.focus();
          main?.scrollIntoView();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-[6px] focus:bg-[#1F1F1F] focus:border focus:border-[#FE6219] font-['Space_Mono',monospace] text-[13px] font-bold uppercase tracking-[0.05em] text-[#F7F7F7]"
      >
        Skip to content
      </a>
      <NavV3 />

      {/* tabIndex so the skip link can move focus here */}
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 w-full max-w-[1280px] px-5 sm:pl-[104px] sm:pr-10 pt-[100px] sm:pt-16 pb-8 mx-auto relative outline-none"
      >
        <Outlet />
      </main>

      <FooterV3 />
    </div>
    </MotionConfig>
  );
}
