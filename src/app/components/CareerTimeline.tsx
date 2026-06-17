import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const MILESTONES = [
  { year: "2013", title: "Graduate Design Engineer", desc: "Began my journey at Dyson NPI Floorcare, driving end-to-end product innovation and delivery of novel floor cleaning technologies.", x: 200, y: 50 },
  { year: "2016", title: "Design Engineer", desc: "Worked end-to-end on delivering the 'omni-glide' product, scaling user-centred methods from prototyping to market launch.", x: 600, y: 400 },
  { year: "2019", title: "Senior Design Engineer", desc: "Led design sprints and co-creation workshops. Successfully led a team of 10 cross-discipline engineers and secured 11 global patents.", x: 1000, y: 50 },
  { year: "2022", title: "Lead Design Eng / UX Designer", desc: "Transitioned into robotics, defining the multi-modal experience for a robot 'homecare assistant' using data-driven decisions.", x: 1400, y: 400 },
  { year: "2024-start", title: "Senior UX Designer", desc: "Led discovery and service definition for the MyDyson ecosystem, orchestrating end-to-end journeys across connected global markets.", x: 1800, y: 50 },
  { year: "2024-end", title: "Service Designer", desc: "Specializing in mapping complex systems, ecosystem mapping, and translating research insights into seamless interaction flows.", x: 2200, y: 400 },
  { year: "2025", title: "Business Owner", desc: "Founded my own practice. All previous disciplines converge alongside leatherwork craftsmanship and running a business.", x: 2700, y: 50 }
];

const getHorizontalPath = (start: {x: number, y: number, fromSide?: boolean}, points: {x: number, y: number}[]) => {
  let d = '';
  let currentX = start.x;
  let currentY = start.y;

  if (start.fromSide) {
     d += `M ${start.x} 1200 C ${start.x} 1000, ${start.x + 50} ${start.y}, ${start.x + 100} ${start.y}`;
     currentX = start.x + 100;
  } else {
     d += `M ${start.x} ${start.y}`;
  }

  points.forEach(p => {
      if (p.x - 150 > currentX) {
          d += ` L ${p.x - 150} ${currentY}`;
      }
      d += ` C ${p.x - 75} ${currentY}, ${p.x - 75} ${p.y}, ${p.x} ${p.y}`;
      currentX = p.x;
      currentY = p.y;
  });

  return d;
};

const STREAMS = [
  {
     color: "#FF6D1F",
     name: "Product Design",
     path: getHorizontalPath({x: 0, y: 250}, [
       {x: 200, y: 250}, {x: 600, y: 250}, {x: 1000, y: 250}, {x: 1400, y: 250},
       {x: 1800, y: 290}, {x: 2200, y: 290}, {x: 2700, y: 250}, {x: 3600, y: 250}
     ])
  },
  {
     color: "#C9D8DB",
     name: "Design Engineering",
     path: getHorizontalPath({x: 0, y: 270}, [
       {x: 200, y: 270}, {x: 600, y: 270}, {x: 1000, y: 270}, {x: 1400, y: 270},
       {x: 1800, y: 310}, {x: 2200, y: 310}, {x: 2700, y: 270}, {x: 3600, y: 270}
     ])
  },
  {
     color: "#076E74",
     name: "UX Design",
     path: getHorizontalPath({x: 1200, y: 290, fromSide: true}, [
       {x: 1400, y: 290}, {x: 1800, y: 250}, {x: 2200, y: 250}, {x: 2700, y: 290}, {x: 3600, y: 290}
     ])
  },
  {
     color: "#EAECE9",
     name: "User Research",
     path: getHorizontalPath({x: 1250, y: 310, fromSide: true}, [
       {x: 1400, y: 310}, {x: 1800, y: 270}, {x: 2200, y: 270}, {x: 2700, y: 310}, {x: 3600, y: 310}
     ])
  },
  {
     color: "#10B981",
     name: "Service Design",
     path: getHorizontalPath({x: 2000, y: 330, fromSide: true}, [
       {x: 2200, y: 330}, {x: 2700, y: 330}, {x: 3600, y: 330}
     ])
  },
  {
     color: "#F59E0B",
     name: "Craftsman (Leatherwork)",
     path: getHorizontalPath({x: 2450, y: 350, fromSide: true}, [
       {x: 2700, y: 350}, {x: 3600, y: 350}
     ])
  },
  {
     color: "#8B5CF6",
     name: "Business Owner",
     path: getHorizontalPath({x: 2500, y: 370, fromSide: true}, [
       {x: 2700, y: 370}, {x: 3600, y: 370}
     ])
  }
];

const MultiLineStream = ({ d, color, name }: { d: string, color: string, name: string }) => {
  const baseProps = {
    d,
    fill: "none",
    vectorEffect: "non-scaling-stroke",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    initial: { pathLength: 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 2.5, ease: "easeOut" }
  };
  return (
    <g className="stream-group group cursor-crosshair">
      <title>{name}</title>
      <motion.path {...baseProps} stroke={color} strokeWidth={24} className="opacity-80 group-hover:opacity-100 transition-opacity" />
      <motion.path {...baseProps} stroke="#152028" strokeWidth={18} />
      <motion.path {...baseProps} stroke={color} strokeWidth={12} className="opacity-90 group-hover:opacity-100 transition-opacity" />
      <motion.path {...baseProps} stroke="#152028" strokeWidth={6} />
      <motion.path {...baseProps} stroke={color} strokeWidth={2} />
    </g>
  );
};

export function CareerTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollContainerRef });
  const thumbLeft = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="long-about" className="relative w-full bg-[#152028] py-16 overflow-hidden shadow-2xl border border-white/5 mx-[10px] mt-[80px] mb-[0px] rounded-[16px]" style={{ position: "relative" }}>
      
      {/* Header text */}
      <div className="px-8 md:px-16 mb-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-black font-['Outfit',sans-serif] text-white tracking-tight">The Journey.</h2>
        <p className="text-zinc-400 mt-4 text-lg max-w-xl">A visual map of my career path, tracking how different disciplines have converged to shape my multidisciplinary approach.</p>
        <p className="text-[#FF6D1F] font-bold mt-2 text-sm uppercase tracking-widest animate-pulse flex items-center gap-2">
          <span>Scroll horizontally</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </p>
      </div>

      {/* Floating Menu Key */}
      <div className="absolute left-8 top-[200px] z-30 flex flex-col gap-2 bg-[#152028]/90 backdrop-blur-md rounded-[40px] border-2 border-white/10 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)] px-[8px] py-[12px] items-start transition-all duration-300 pointer-events-auto hidden md:flex">
        {STREAMS.map(s => (
          <div key={s.name} className="group flex items-center rounded-full hover:bg-[#FF6D1F]/20 transition-all duration-300 overflow-hidden cursor-pointer">
             <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <div className="w-5 h-1.5 rounded-full shadow-sm" style={{ backgroundColor: s.color }} />
             </div>
             <div className="max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-5 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold text-sm text-white">
                {s.name}
             </div>
          </div>
        ))}
      </div>

      {/* Scrollable Container */}
      <div 
        className="w-full overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing pb-8 relative z-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
        ref={scrollContainerRef}
      >
        <div className="relative h-[650px] w-[3600px]">
          
          {/* SVG Background Map */}
          <svg
              className="absolute inset-0 w-full h-full pointer-events-auto z-0"
              viewBox="0 0 3600 650"
              preserveAspectRatio="none"
          >
              {STREAMS.map((s, i) => (
                <MultiLineStream key={i} d={s.path} color={s.color} name={s.name} />
              ))}
          </svg>

          {/* Content Overlays */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {MILESTONES.map((m) => {
              const isFinal = m.title === "Business Owner";
              const displayYear = m.year.split('-')[0];
              const isTop = m.y < 200;
              
              return (
                <motion.div 
                  key={m.year} 
                  className="absolute pointer-events-auto" 
                  style={{ top: m.y, left: m.x }}
                  initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.6 }}
                >
                   {/* Connection visual */}
                   {isTop ? (
                     <div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="w-3 h-3 bg-[#C9D8DB] rounded-full shadow-[0_0_15px_rgba(201,216,219,0.8)] border-2 border-[#152028] mt-3 z-20" />
                        <div className="w-0.5 h-[60px] bg-gradient-to-b from-[#C9D8DB]/40 to-transparent" />
                     </div>
                   ) : (
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center justify-end">
                        <div className="w-0.5 h-[60px] bg-gradient-to-t from-[#C9D8DB]/40 to-transparent" />
                        <div className="w-3 h-3 bg-[#C9D8DB] rounded-full shadow-[0_0_15px_rgba(201,216,219,0.8)] border-2 border-[#152028] mb-3 z-20" />
                     </div>
                   )}

                   <div className="text-[#FF6D1F] font-black text-6xl opacity-10 font-['Outfit',sans-serif] -mb-6 ml-4 select-none">{displayYear}</div>
                   
                   {isFinal ? (
                     <div className="flex flex-row gap-6 relative w-[680px]">
                       <div className="flex-1 bg-[#152028]/95 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10 shadow-2xl group hover:border-[#F59E0B]/50 transition-colors">
                         <h3 className="text-xl font-bold text-white mb-2 font-['Outfit',sans-serif]">Business Owner</h3>
                         <p className="text-sm text-zinc-400 leading-relaxed font-medium">Converging all previous disciplines into strategic business value and running my own practice.</p>
                       </div>
                       <div className="flex-1 bg-[#152028]/95 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10 shadow-2xl group hover:border-[#8B5CF6]/50 transition-colors">
                         <h3 className="text-xl font-bold text-white mb-2 font-['Outfit',sans-serif]">Craftsman</h3>
                         <p className="text-sm text-zinc-400 leading-relaxed font-medium">Practicing physical leatherwork, focusing on tactile details, materiality, and pure craft.</p>
                       </div>
                     </div>
                   ) : (
                     <div className="bg-[#152028]/95 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl relative group hover:border-[#076E74]/50 transition-colors w-[340px]">
                       <h3 className="text-2xl font-bold text-white mb-3 font-['Outfit',sans-serif]">{m.title}</h3>
                       <p className="text-zinc-400 leading-relaxed font-medium">{m.desc}</p>
                     </div>
                   )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Timeline Scrollbar */}
      <div className="w-full max-w-5xl mx-auto mt-4 mb-4 relative h-12 flex items-center px-8 md:px-16 z-30">
        <div className="relative w-full h-full flex items-center">
          {/* The Line */}
          <div className="absolute left-0 right-0 h-1 bg-white/10 rounded-full" />
          
          {/* The Markers */}
          <div className="absolute left-0 right-0 flex justify-between px-0">
            {MILESTONES.map((m, i) => {
              const displayYear = m.year.split('-')[0];
              return (
                <div key={i} className="flex flex-col items-center relative group cursor-pointer" onClick={() => {
                   if (scrollContainerRef.current) {
                     // Approximate scroll to this point
                     const scrollTarget = (i / (MILESTONES.length - 1)) * (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth);
                     scrollContainerRef.current.scrollTo({ left: scrollTarget, behavior: 'smooth' });
                   }
                }}>
                  <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors z-0" />
                  <span className="absolute top-5 text-xs font-bold text-zinc-500 group-hover:text-white transition-colors font-['Outfit',sans-serif] select-none">{displayYear}</span>
                </div>
              );
            })}
          </div>

          {/* The Moving Circle */}
          <motion.div 
            className="absolute w-5 h-5 bg-[#FF6D1F] rounded-full shadow-[0_0_15px_#FF6D1F] border-2 border-[#152028] z-10 pointer-events-none"
            style={{ left: thumbLeft, x: "-50%" }}
          />
        </div>
      </div>
    </section>
  );
}