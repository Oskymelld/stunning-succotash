import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import { ArrowRight, Star, Coffee, Code2, PenTool, Mail, Play, Apple } from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const PORTRAIT_URL = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBnbGFzc2VzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgxNjA5NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const FLAMINGO_URL = "https://images.unsplash.com/photo-1539418561314-565804e349c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZmxhbWluZ298ZW58MXx8fHwxNzgxNjA5NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const SPHERE_URL = "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0JTIwc3BoZXJlfGVufDF8fHx8MTc4MTYwOTQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

import { CareerTimeline } from "../components/CareerTimeline";

export function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Example of some simple parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="flex flex-col gap-6 sm:gap-12 relative" ref={containerRef}>
      
      {/* Background Ambient Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#FF6D1F]/20 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: [0, -60, 40, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-[#076E74]/15 rounded-full blur-[100px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: [0, 40, -30, 0], y: [0, 30, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] bg-[#C9D8DB]/15 rounded-full blur-[100px] mix-blend-screen" 
        />
      </div>

      {/* NEW BENTO HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative min-h-[80vh] flex flex-col xl:flex-row gap-6 mt-4 z-10"
      >
        {/* Side Navigation (Vertical Text) */}
        <div className="hidden xl:flex flex-col justify-end gap-16 py-8 px-2 min-w-[40px]">
          <div className="-rotate-90 origin-center text-sm font-semibold tracking-widest text-zinc-400 hover:text-white cursor-pointer transition-colors whitespace-nowrap -translate-y-8">Clients</div>
          <div className="-rotate-90 origin-center text-sm font-semibold tracking-widest text-zinc-400 hover:text-white cursor-pointer transition-colors whitespace-nowrap -translate-y-8">Research</div>
          <div className="-rotate-90 origin-center text-sm font-semibold tracking-widest text-zinc-400 hover:text-white cursor-pointer transition-colors whitespace-nowrap -translate-y-8">Portfolio</div>
          <div className="-rotate-90 origin-center text-sm font-semibold tracking-widest text-zinc-400 hover:text-white cursor-pointer transition-colors whitespace-nowrap -translate-y-8">Podcast</div>
        </div>

        {/* Main Left Card - Purple */}
        <div className="flex-1 xl:max-w-[420px] bg-[#FF6D1F]/80 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden text-white shadow-[0_8px_32px_rgba(255,109,31,0.2)] min-h-[600px] hover:shadow-[0_16px_48px_rgba(255,109,31,0.3)] hover:-translate-y-1 transition-all duration-300">
          {/* Top left About Me */}
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-4 h-4 fill-white" />
            <span className="font-semibold text-sm">About Me</span>
          </div>

          {/* Portrait */}
          <div className="relative w-48 h-48 mx-auto mb-6 mt-2">
            {/* Background circles */}
            <div className="absolute inset-[-15%] rounded-full border-[3px] border-white/40" />
            <div className="absolute inset-[-30%] rounded-full border-[3px] border-white/20" />
            {/* Image */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#EAECE9] relative z-10">
              <ImageWithFallback src={PORTRAIT_URL} alt="Jon Daniel" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex-1 flex flex-col justify-end relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl xl:text-5xl font-light leading-tight tracking-tight">
                Im,<br />
                <span className="font-bold">Jon<br />Daniel</span>
              </h1>
              
              {/* Circular Badge */}
              <div className="w-[76px] h-[76px] bg-black rounded-full text-white flex items-center justify-center p-2 text-[8px] text-center font-bold tracking-widest relative animate-[spin_15s_linear_infinite] shrink-0 mt-2">
                <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="text-[10px] fill-white font-bold tracking-[0.2em] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      MY DESIGN PORTFOLIO 2023 •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <p className="text-sm opacity-90 leading-relaxed mb-6 pr-4">
              A product designer focused on creating bold, engaging, and user-centric interfaces. I believe good design solves real user problems.
            </p>

            <div className="flex items-center gap-4">
              <a href="#long-about" className="inline-flex items-center justify-center gap-2 text-sm font-bold bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors w-fit">
                Read full bio
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:inquiry@jondaniel.design" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/30 hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="flex-[2] flex flex-col gap-6">
          {/* Title Header */}
          <div className="hidden xl:flex items-center justify-end px-4 h-24">
            <h1 className="text-[110px] font-black tracking-tighter text-white leading-none font-['Outfit',sans-serif]">
              Portfolio<span className="text-[#FF6D1F]">.</span>
            </h1>
          </div>

          {/* Top Right Grid Row 1 */}
          <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[320px]">
            {/* Video/Image Card */}
            <div className="flex-[1.5] bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden relative group shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-300">
              <ImageWithFallback src={FLAMINGO_URL} alt="Project video" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              {/* Play button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors border border-white/40 shadow-lg">
                <Play className="w-6 h-6 text-white ml-1 fill-white" />
              </div>
              <ArrowRight className="absolute top-6 right-6 w-5 h-5 -rotate-45 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-white" />
            </div>

            {/* Stats Cards */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex-1 bg-[#076E74]/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(7,110,116,0.2)] rounded-[2.5rem] p-8 flex flex-col justify-center text-white relative group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(7,110,116,0.3)] transition-all duration-300">
                <ArrowRight className="absolute top-6 right-6 w-5 h-5 -rotate-45 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                <div className="text-5xl font-black mb-1 font-['Outfit',sans-serif]">251</div>
                <div className="text-base font-medium opacity-80">Projects</div>
              </div>
              <div className="flex-1 bg-[#C9D8DB]/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(201,216,219,0.2)] rounded-[2.5rem] p-8 flex flex-col justify-center text-[#152028] relative group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(201,216,219,0.3)] transition-all duration-300">
                <ArrowRight className="absolute top-6 right-6 w-5 h-5 -rotate-45 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                <div className="text-5xl font-black mb-1 font-['Outfit',sans-serif]">156</div>
                <div className="text-base font-medium opacity-90">Awards</div>
              </div>
            </div>
          </div>

          {/* Bottom Right Grid Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[180px]">
            <div className="bg-[#152028]/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(21,32,40,0.4)] rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-white relative group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(21,32,40,0.6)] transition-all duration-300">
                <ArrowRight className="absolute top-6 right-6 w-5 h-5 -rotate-45 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                <Apple className="w-12 h-12 mb-3 fill-white" />
                <div className="font-medium text-lg">Clients</div>
            </div>
            <div className="bg-black/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-[2.5rem] overflow-hidden p-0 relative group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)] transition-all duration-300">
                <ImageWithFallback src={SPHERE_URL} alt="3D Sphere" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="bg-[#EAECE9]/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(234,236,233,0.2)] rounded-[2.5rem] p-8 flex flex-col justify-center text-[#152028] relative group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(234,236,233,0.3)] transition-all duration-300">
                <ArrowRight className="absolute top-6 right-6 w-5 h-5 -rotate-45 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                <div className="text-4xl font-black mb-2 font-['Outfit',sans-serif]">172</div>
                <div className="text-sm font-semibold opacity-90 leading-tight">Global Design<br/>Awards.</div>
            </div>
          </div>
        </div>
      </motion.section>

      <CareerTimeline />

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="pt-12 sm:pt-20 scroll-mt-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black font-['Outfit',sans-serif] tracking-tight">Selected Work</h2>
            <p className="text-zinc-400 mt-2 text-lg">Case studies of my recent projects.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={`/project/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-card border border-border mb-6">
                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
                    style={{ backgroundColor: project.color }}
                  />
                  
                  {/* Image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Top badges */}
                  <div className="absolute top-6 left-6 z-20 flex gap-2">
                    <span className="px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Circular Button */}
                  <div className="absolute bottom-6 right-6 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold font-['Outfit',sans-serif] group-hover:text-white transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mt-2 line-clamp-2">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
