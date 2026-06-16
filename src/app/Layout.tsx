import { Outlet, Link } from "react-router";
import { motion } from "motion/react";
import { Briefcase, User, Mail, ArrowUpRight, PenLine } from "lucide-react";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-['Space_Grotesk',sans-serif]">
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
        <Link to="/" className="text-xl font-bold tracking-tighter pointer-events-auto bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
          JD.
        </Link>
        <nav className="flex gap-2 pointer-events-auto bg-black/80 backdrop-blur-md p-1.5 rounded-full border border-white/10">
          <Link to="/" className="p-2 rounded-full hover:bg-white/10 transition-colors tooltip" aria-label="Home">
            <User className="w-5 h-5 text-zinc-300" />
          </Link>
          <a href="#portfolio" className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Portfolio">
            <Briefcase className="w-5 h-5 text-zinc-300" />
          </a>
          <Link to="/blog" className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Writing">
            <PenLine className="w-5 h-5 text-zinc-300" />
          </Link>
          <a href="mailto:hello@example.com" className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Contact">
            <Mail className="w-5 h-5 text-zinc-300" />
          </a>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto p-4 pt-28 sm:p-8 sm:pt-32 pb-24">
        <Outlet />
      </main>

      <footer className="w-full max-w-6xl mx-auto p-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        <p>© 2026 Jane Doe. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-zinc-300 transition-colors flex items-center gap-1">Twitter <ArrowUpRight className="w-3 h-3" /></a>
          <a href="#" className="hover:text-zinc-300 transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></a>
          <a href="#" className="hover:text-zinc-300 transition-colors flex items-center gap-1">Dribbble <ArrowUpRight className="w-3 h-3" /></a>
        </div>
      </footer>
    </div>
  );
}
