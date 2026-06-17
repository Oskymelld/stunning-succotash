import { Outlet, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight, PenLine } from "lucide-react";
import svgPaths from "../imports/Navigation/svg-tem16do49a";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-['Space_Grotesk',sans-serif]" style={{ position: "relative" }}>
      <header className="fixed top-0 left-0 right-0 sm:right-auto sm:bottom-0 z-50 p-[20px] sm:p-6 flex justify-center sm:justify-start pointer-events-none">
        <nav className="flex flex-row sm:flex-col gap-2 sm:gap-3 pointer-events-auto bg-[#152028]/90 backdrop-blur-md rounded-[40px] border-2 border-white/10 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] items-center sm:items-start transition-all duration-300 px-[12px] py-[8px] sm:px-[8px] sm:py-[12px] max-w-full overflow-x-auto no-scrollbar">
          <Link to="/" className="size-[48px] sm:size-[56px] bg-[#152028] rounded-full shrink-0 flex items-center justify-center text-white text-[18px] sm:text-[20px] font-bold tracking-[-1px] border-2 border-[#ff6d1f] drop-shadow-[2px_2px_0_#ff6d1f] hover:drop-shadow-[4px_4px_0_#ff6d1f] hover:-translate-y-[1px] hover:-translate-x-[1px] transition-all font-['Space_Grotesk',sans-serif] z-10 relative mr-2 sm:mr-0 sm:mb-1">
            TC.
          </Link>
          <Link to="/" className="group flex items-center rounded-full hover:bg-[#FF6D1F] transition-all duration-300 overflow-hidden text-zinc-300 hover:text-[#152028] sm:ml-2">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2213f00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M7.5 18.3333V10H12.5V18.3333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
            <div className="max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:pr-4 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold text-sm">
              Home
            </div>
          </Link>
          <a href="#about" className="group flex items-center rounded-full hover:bg-[#FF6D1F] transition-all duration-300 overflow-hidden text-zinc-300 hover:text-[#152028] sm:ml-2">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2026e800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p32ab0300} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
            <div className="max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:pr-4 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold text-sm">
              About me
            </div>
          </a>
          <a href="#portfolio" className="group flex items-center rounded-full hover:bg-[#FF6D1F] transition-all duration-300 overflow-hidden text-zinc-300 hover:text-[#152028] sm:ml-2">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.pe6b10c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p4c21d00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
            <div className="max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:pr-4 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold text-sm">
              Casestudies
            </div>
          </a>
          <Link to="/blog" className="group flex items-center rounded-full hover:bg-[#FF6D1F] transition-all duration-300 overflow-hidden text-zinc-300 hover:text-[#152028] sm:ml-2">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <PenLine className="w-5 h-5" />
            </div>
            <div className="max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:pr-4 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold text-sm">
              Writing
            </div>
          </Link>
          <a href="mailto:Tomcarter90@gmail.com" className="group flex items-center rounded-full hover:bg-[#FF6D1F] transition-all duration-300 overflow-hidden text-zinc-300 hover:text-[#152028] sm:ml-2">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.pd919a80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p189c1170} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
            <div className="max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:pr-4 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold text-sm">
              contact me
            </div>
          </a>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-[1600px] px-[20px] sm:pl-[104px] sm:pr-8 pt-[100px] sm:pt-16 pb-24 mx-auto" style={{ position: "relative" }}>
        <Outlet />
      </main>

      <footer className="w-full max-w-[1600px] mx-auto px-[20px] sm:pl-[104px] sm:pr-8 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        <p>© 2026 Tom Carter. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-zinc-300 transition-colors flex items-center gap-1">Twitter <ArrowUpRight className="w-3 h-3" /></a>
          <a href="#" className="hover:text-zinc-300 transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></a>
          <a href="#" className="hover:text-zinc-300 transition-colors flex items-center gap-1">Dribbble <ArrowUpRight className="w-3 h-3" /></a>
        </div>
      </footer>
    </div>
  );
}
