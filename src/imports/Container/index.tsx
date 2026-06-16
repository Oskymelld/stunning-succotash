import svgPaths from "./svg-97xpfxnoxm";
import imgImageWithFallback from "./fb040454c638837b8b13ff4539aac577a3dd266c.png";

function ImageWithFallback() {
  return (
    <div className="h-[379px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#eaece9] h-[379px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[2px] relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden className="absolute border-[#ff6d1f] border-b-2 border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_7_1864)" id="Icon">
          <path d={svgPaths.p32aa57f0} fill="var(--fill-0, #FF6D1F)" id="Vector" stroke="var(--stroke-0, #FF6D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_7_1864">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[51.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[13.5px] left-0 text-[#ff6d1f] text-[9px] top-[-1px] tracking-[0.9px] uppercase whitespace-nowrap">About Me</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(21,32,40,0.8)] left-[16px] rounded-[33554400px] top-[16px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(255,109,31,0.3)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[11px] py-[5px] relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[379px] relative shrink-0 w-[416px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[113px] relative shrink-0 w-[191px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="[word-break:break-word] absolute font-['Outfit:Black',sans-serif] font-black leading-[0] left-0 text-[0px] text-white top-[-1px] tracking-[-0.75px] w-[191px]">
          <p className="leading-[37.5px] mb-0 text-[30px]">{`I'm,`}</p>
          <p className="text-[#ff6d1f] text-[30px]">
            <span className="leading-[37.5px]">{`Tom `}</span>
            <span className="[word-break:break-word] font-['Outfit:Black',sans-serif] font-black leading-[37.5px] tracking-[-0.75px]">Carter</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[2px] size-[48px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <g id="circlePath" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#152028] left-[24px] rounded-[33554400px] size-[4px] top-[24px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="bg-[#ff6d1f] relative rounded-[33554400px] size-[52px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#152028] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <Icon1 />
      <Container7 />
    </div>
  );
}

function ContainerTransform() {
  return (
    <div className="h-[56px] relative shrink-0 w-[52px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <div className="absolute flex items-center justify-center left-[-6.11px] size-[64.228px] top-[-2.11px]">
          <div className="flex-none rotate-[-105.85deg]">
            <Container6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <ContainerTransform />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col h-[85px] items-start pb-[8px] relative shrink-0 w-full" data-name="Container (margin)">
      <Container5 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-start opacity-90 overflow-clip pr-[8px] relative shrink-0 w-[368px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#d4d4d8] text-[12px] w-[360px]">{`A strategic, hands-on Designer with a background in physical and digital product development. I specialise in mapping complex systems and orchestrating end-to-end journeys...But that's just the tip of the iceberg.`}</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Paragraph (margin)">
      <Paragraph />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #152028)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pf23dd00} id="Vector_2" stroke="var(--stroke-0, #152028)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#ff6d1f] relative rounded-[33554400px] shrink-0 w-[128.281px]" data-name="Link">
      <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#152028] text-[12px] whitespace-nowrap">Read full bio</p>
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p5c184f0} id="Vector" stroke="var(--stroke-0, #FF6D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a640080} id="Vector_2" stroke="var(--stroke-0, #FF6D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[36px]" data-name="Link">
      <div aria-hidden className="absolute border-2 border-[#ff6d1f] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p17d70d00} id="Vector" stroke="var(--stroke-0, #FF6D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p73a5000} id="Vector_2" stroke="var(--stroke-0, #FF6D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p34626280} id="Vector_3" stroke="var(--stroke-0, #FF6D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[36px]" data-name="Link">
      <div aria-hidden className="absolute border-2 border-[#ff6d1f] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] relative size-full">
        <ContainerMargin />
        <ParagraphMargin />
        <Container8 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[1769.984px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container2 />
        <Frame />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#152028] relative rounded-[24px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip pb-[22px] pt-[2px] px-[2px] relative rounded-[inherit] size-full">
        <Container1 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#ff6d1f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[6px_6px_0px_0px_#ff6d1f]" />
    </div>
  );
}