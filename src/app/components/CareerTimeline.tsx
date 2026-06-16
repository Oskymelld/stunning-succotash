import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

const MILESTONES = [
  {
    year: "2013",
    title: "Graduate Design Engineer",
    desc: "Began my journey bridging the gap between product ideation and engineering execution.",
    y: 300
  },
  {
    year: "2015",
    title: "Design Engineer",
    desc: "Deepened my focus on developing robust product architectures while maintaining design integrity.",
    y: 750
  },
  {
    year: "2017",
    title: "Senior Design Engineer",
    desc: "Led complex product development cycles, optimizing both form and function for mass production.",
    y: 1200
  },
  {
    year: "2019",
    title: "Lead Design Engineer",
    desc: "Started integrating UX Design and User Research to ensure products solved real human problems before engineering began.",
    y: 1650
  },
  {
    year: "2021",
    title: "Senior UX Designer",
    desc: "Transitioned fully into digital experiences. Focused heavily on user journeys, research, and interface design.",
    y: 2100
  },
  {
    year: "2023",
    title: "Service Designer",
    desc: "Expanded my scope to map end-to-end service blueprints, aligning user needs with business operations.",
    y: 2550
  },
  {
    year: "2024",
    title: "Business Owner",
    desc: "Founded my own practice. All previous disciplines converge alongside leatherwork craftsmanship and running a business.",
    y: 3000
  }
];

const getPath = (start: {x: number, y: number, fromSide?: boolean}, points: {x: number, y: number}[]) => {
  let d = '';
  let currentX = start.x;
  let currentY = start.y;

  if (start.fromSide) {
     d += `M 1200 ${start.y} C 1050 ${start.y}, ${start.x} ${start.y + 50}, ${start.x} ${start.y + 100}`;
     currentY = start.y + 100;
  } else {
     d += `M ${start.x} ${start.y}`;
  }

  points.forEach(p => {
      if (p.y - 150 > currentY) {
          d += ` L ${currentX} ${p.y - 150}`;
      }
      d += ` C ${currentX} ${p.y - 100}, ${p.x} ${p.y - 100}, ${p.x} ${p.y - 50}`;
      currentX = p.x;
      currentY = p.y - 50;
  });

  d += ` L ${currentX} 3800`;
  return d;
};

const STREAMS = [
  {
     color: "#FF6D1F",
     name: "Product Design",
     path: getPath({x: 600, y: -100}, [
       {x: 600, y: 300},
       {x: 600, y: 750},
       {x: 600, y: 1200},
       {x: 600, y: 1650},
       {x: 900, y: 2100},
       {x: 900, y: 2550},
       {x: 600, y: 3000}
     ])
  },
  {
     color: "#C9D8DB",
     name: "Design Engineering",
     path: getPath({x: 640, y: -100}, [
       {x: 640, y: 300},
       {x: 640, y: 750},
       {x: 640, y: 1200},
       {x: 640, y: 1650},
       {x: 940, y: 2100},
       {x: 940, y: 2550},
       {x: 640, y: 3000}
     ])
  },
  {
     color: "#076E74",
     name: "UX Design",
     path: getPath({x: 680, y: 1400, fromSide: true}, [
       {x: 680, y: 1650},
       {x: 600, y: 2100},
       {x: 600, y: 2550},
       {x: 680, y: 3000}
     ])
  },
  {
     color: "#EAECE9",
     name: "User Research",
     path: getPath({x: 720, y: 1450, fromSide: true}, [
       {x: 720, y: 1650},
       {x: 640, y: 2100},
       {x: 640, y: 2550},
       {x: 720, y: 3000}
     ])
  },
  {
     color: "#10B981",
     name: "Service Design",
     path: getPath({x: 680, y: 2300, fromSide: true}, [
       {x: 680, y: 2550},
       {x: 760, y: 3000}
     ])
  },
  {
     color: "#F59E0B",
     name: "Craftsman (Leatherwork)",
     path: getPath({x: 800, y: 2750, fromSide: true}, [
       {x: 800, y: 3000}
     ])
  },
  {
     color: "#8B5CF6",
     name: "Business Owner",
     path: getPath({x: 840, y: 2800, fromSide: true}, [
       {x: 840, y: 3000}
     ])
  }
];

const MultiLineStream = ({ d, color, pathLength }: { d: string, color: string, pathLength: any }) => {
  const baseProps = {
    d,
    fill: "none",
    vectorEffect: "non-scaling-stroke",
    style: { pathLength },
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <g>
      <motion.path {...baseProps} stroke={color} strokeWidth={24} />
      <motion.path {...baseProps} stroke="#152028" strokeWidth={18} />
      <motion.path {...baseProps} stroke={color} strokeWidth={12} />
      <motion.path {...baseProps} stroke="#152028" strokeWidth={6} />
      <motion.path {...baseProps} stroke={color} strokeWidth={2} />
    </g>
  );
};

export function CareerTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end bottom"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 15,
    restDelta: 0.001
  });

  return (
    <section id="long-about" className="relative w-full bg-[#152028] py-20 mt-20 rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-12 relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
         <div className="max-w-xl">
           <h2 className="text-4xl sm:text-5xl font-black font-['Outfit',sans-serif] text-white tracking-tight">The Journey.</h2>
           <p className="text-zinc-400 mt-4 text-lg">A visual map of my career path, tracking how different disciplines have converged to shape my multidisciplinary approach.</p>
         </div>
         
         {/* Legend */}
         <div className="grid grid-cols-2 gap-x-6 gap-y-3 bg-[#152028]/80 p-5 rounded-2xl border border-white/10 backdrop-blur-xl shrink-0">
            {STREAMS.map(s => (
              <div key={s.name} className="flex items-center gap-3">
                <div className="w-5 h-1.5 rounded-full shadow-sm" style={{ backgroundColor: s.color }} />
                <span className="text-sm font-semibold text-zinc-300">{s.name}</span>
              </div>
            ))}
         </div>
      </div>

      <div ref={containerRef} className="relative w-full max-w-5xl mx-auto h-[3600px]">
        {/* SVG Background Map */}
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 3600"
            preserveAspectRatio="none"
        >
            {STREAMS.map((s, i) => (
              <MultiLineStream key={i} d={s.path} color={s.color} pathLength={smoothProgress} />
            ))}
        </svg>

        {/* Content Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {MILESTONES.map((m) => (
            <motion.div 
              key={m.year} 
              className="absolute w-[85%] md:w-[450px] left-6 md:left-12 pointer-events-auto" 
              style={{ top: m.y - 40 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.6 }}
            >
               <div className="text-[#FF6D1F] font-black text-6xl opacity-10 font-['Outfit',sans-serif] -mb-6 ml-[-4px] select-none">{m.year}</div>
               <div className="bg-[#152028]/95 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl relative group hover:border-[#076E74]/50 transition-colors">
                 {/* Connection dot */}
                 <div className="w-4 h-4 bg-[#C9D8DB] rounded-full absolute -left-2 top-10 shadow-[0_0_15px_rgba(201,216,219,0.8)] border-[3px] border-[#152028]" />
                 
                 <h3 className="text-2xl font-bold text-white mb-3 font-['Outfit',sans-serif]">{m.title}</h3>
                 <p className="text-zinc-400 leading-relaxed font-medium">{m.desc}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}