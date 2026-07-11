import { Outlet } from "react-router";
import { NavV3 } from "./v3/NavV3";
import { FooterV3 } from "./v3/FooterV3";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#141414] text-[#F7F7F7] font-['Space_Grotesk',sans-serif] relative">
      <NavV3 />

      <main className="flex-1 w-full max-w-[1280px] px-5 sm:pl-[104px] sm:pr-10 pt-[100px] sm:pt-16 pb-8 mx-auto relative">
        <Outlet />
      </main>

      <FooterV3 />
    </div>
  );
}
