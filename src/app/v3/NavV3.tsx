// V3 navigation — Icon Rail, reworked 14 Jul 2026 to match the Figma
// Nav/Item components (Show Label boolean).
// Default view: compact icon-only rail; the current page's tile is outlined
// in orange (echoing the TC logo tile), other icons sit grey.
// Hovering ANYWHERE on the rail expands the menu: every label slides out,
// the hovered item fills solid orange (white icon + label), and the active
// page keeps its outline. Mobile keeps the top bar with the same state
// colours; its label still drops below the hovered icon per item.
import { Link, useLocation } from "react-router";
import { Home, Briefcase, PenLine, User, Mail } from "lucide-react";

type Item = {
  key: string;
  label: string;
  icon: typeof Home;
  to?: string;
  href?: string;
  hash?: string;
};

const ITEMS: Item[] = [
  { key: "home", label: "Home", icon: Home, to: "/" },
  { key: "work", label: "Work", icon: Briefcase, hash: "#work" },
  { key: "writing", label: "Writing", icon: PenLine, to: "/blog" },
  { key: "about", label: "About Me", icon: User, hash: "#about" },
  { key: "contact", label: "Contact", icon: Mail, href: "mailto:Tomcarter90@gmail.com" },
];

function ItemInner({ item, active }: { item: Item; active: boolean }) {
  const Icon = item.icon;
  const base =
    "group/nav flex items-center rounded-[6px] border transition-all duration-300 overflow-hidden " +
    "sm:flex-row flex-col";
  // Active page = orange outline (like the TC tile), white icon. Others sit
  // grey. Hovering an item fills it solid orange, everything white.
  const state = active
    ? "border-[#FE6219] text-[#F7F7F7]"
    : "border-transparent text-[#A3A3A3]";
  const hover = "hover:bg-[#FE6219] hover:border-[#FE6219] hover:text-[#F7F7F7]";
  return (
    <span className={`${base} ${state} ${hover}`}>
      <span className="w-11 h-10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </span>
      {/* Desktop: hovering anywhere on the rail slides out EVERY label */}
      <span className="hidden sm:block font-['Space_Mono',monospace] font-bold text-[11px] tracking-[0.05em] uppercase whitespace-nowrap text-[#F7F7F7] transition-all duration-300 max-w-0 opacity-0 group-hover/rail:max-w-[120px] group-hover/rail:opacity-100 group-hover/rail:pr-3">
        {item.label}
      </span>
      {/* Mobile: label drops beneath the hovered icon */}
      <span
        className={
          "sm:hidden font-['Space_Mono',monospace] font-bold text-[9px] tracking-[0.05em] uppercase whitespace-nowrap text-[#F7F7F7] transition-all duration-300 " +
          (active
            ? "max-h-[16px] opacity-100 pb-1.5 px-2"
            : "max-h-0 opacity-0 group-hover/nav:max-h-[16px] group-hover/nav:opacity-100 group-hover/nav:pb-1.5 group-hover/nav:px-2")
        }
      >
        {item.label}
      </span>
    </span>
  );
}

export function NavV3() {
  const location = useLocation();

  const isActive = (item: Item) => {
    if (item.to === "/") return location.pathname === "/";
    if (item.to) return location.pathname.startsWith(item.to);
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 sm:right-auto sm:bottom-0 z-50 p-5 sm:p-6 flex items-start justify-center sm:justify-start pointer-events-none">
      <nav
        aria-label="Primary"
        className="group/rail flex flex-row sm:flex-col gap-2 pointer-events-auto bg-[#1F1F1F]/95 border border-[#4D4D4D]/40 rounded-[10px] items-center sm:items-start px-2 pt-[7px] pb-2 sm:pb-[14px] max-w-full overflow-x-auto no-scrollbar shadow-lg"
      >
        {/* Logo tile */}
        <Link
          to="/"
          className="size-11 rounded-[4px] border border-[#FE6219] shrink-0 flex flex-col items-center justify-center gap-[3px] text-[#F7F7F7] font-['Space_Mono',monospace] font-bold text-[20px] leading-none"
          aria-label="Tom Carter — home"
        >
          TC
          <span className="block w-6 h-px bg-[#4D4D4D]/40" />
        </Link>

        {ITEMS.map((item) => {
          const inner = <ItemInner item={item} active={isActive(item)} />;
          if (item.to) return <Link key={item.key} to={item.to} className="w-max">{inner}</Link>;
          if (item.hash) return <a key={item.key} href={item.hash} className="w-max">{inner}</a>;
          return <a key={item.key} href={item.href} className="w-max">{inner}</a>;
        })}
      </nav>
    </header>
  );
}
