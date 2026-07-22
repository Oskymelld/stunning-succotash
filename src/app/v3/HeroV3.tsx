// V3 hero — HERO-2 "single drawing" from Figma (node 87:9): one full-width
// engineering plate. The line-art drawing (orange wireframe dome + converging
// sight-lines, exported from Figma) bleeds across the whole banner behind the
// plate labels and heading. The SVG is authored mirrored, hence -scale-x-100.
import heroDrawing from "../../imports/hero2-drawing.svg";

const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";

export function HeroV3() {
  return (
    <div>
      <section className="relative w-full overflow-hidden rounded-[8px] border border-[#4D4D4D]/40 bg-[#0D0D0D] min-h-[420px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col">
        {/* full-bleed engineering drawing. object-cover keeps its aspect ratio on
            narrow plates — it crops out of view rather than deforming. The source
            SVG is mirrored, so post-flip the dome sits visual-right: anchoring
            object-left keeps the dome on the plate while the sight-lines crop. */}
        <img
          src={heroDrawing}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-left -scale-x-100 pointer-events-none select-none"
        />

        {/* plate header */}
        <div className="relative z-10 flex items-start justify-between p-8 sm:px-10 sm:pt-8">
          <div>
            <p className={`${mono} text-[12px] font-bold text-[#FE6219]`}>Engineering drawing</p>
            <p className={`${mono} text-[9px] text-[#A3A3A3] mt-1.5`}>
              Ref: Dyson-Micro-1.5kg — side elevation / SEC A-A
            </p>
          </div>
          <p className={`${mono} text-[9px] font-bold text-[#FE6219]`}>System_active</p>
        </div>

        {/* heading block, anchored to the lower left */}
        <div className="relative z-10 mt-auto p-8 sm:px-10 sm:pb-10">
          <h1 className="font-['Space_Grotesk',sans-serif] font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-[#F7F7F7]">
            Hello! <span className="text-[#FE6219]">Welcome.</span>
          </h1>
          <p className={`${mono} text-[12px] font-bold text-[#A3A3A3] mt-4`}>
            \\ Portfolio of Tom Carter — Design Engineer
          </p>
        </div>

        <p className={`${mono} absolute bottom-4 right-6 text-[9px] text-[#8C8C8C] z-10 normal-case`}>POS 000.0</p>
      </section>

      {/* section readout, tucked under the plate as in the Figma stage */}
      <p className={`${mono} text-[9px] text-[#8C8C8C] mt-2 ml-4`}>SEC-00 / Hero</p>
    </div>
  );
}
