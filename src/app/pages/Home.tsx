import { motion } from "motion/react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import { ArrowRight, Star, Coffee, Code2, PenTool, Mail, Play, Apple, Linkedin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import PORTRAIT_URL from "../../imports/IMG_0959.jpg";

const FLAMINGO_URL = "https://images.unsplash.com/photo-1539418561314-565804e349c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZmxhbWluZ298ZW58MXx8fHwxNzgxNjA5NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const SPHERE_URL = "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0JTIwc3BoZXJlfGVufDF8fHx8MTc4MTYwOTQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

import { CareerTimeline } from "../components/CareerTimeline";

import { PhotoGallery } from "../components/PhotoGallery";

export function Home() {
  return (
    <div className="flex flex-col gap-6 sm:gap-12 relative" style={{ position: "relative" }}>
      
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
        className="w-full relative flex flex-col xl:flex-row gap-4 xl:gap-6 z-10 xl:h-[calc(100vh-7rem)] xl:min-h-[600px] xl:max-h-[850px]"
      >
        {/* Side Navigation (Vertical Text) */}
        

        {/* Main Left Card */}
        <div className="flex-1 xl:max-w-[420px] bg-[#152028] border-2 border-[#FF6D1F] pt-0 px-0 pb-[22px] flex flex-col relative overflow-hidden text-white shadow-[6px_6px_0_#FF6D1F] transition-all duration-300 rounded-[14px]">
          
          {/* Portrait */}
          <div className="w-full h-[280px] xl:h-[45%] xl:min-h-[200px] shrink-0 relative">
            {/* Top left About Me badge overlaying image */}
            <div className="absolute top-[16px] left-[16px] z-20 flex items-center gap-[6px] bg-[#152028]/80 backdrop-blur-md px-[11px] py-[5px] rounded-full border border-[#FF6D1F]/30">
              <Star className="w-[10px] h-[10px] fill-[#FF6D1F] text-[#FF6D1F]" />
              <span className="font-bold text-[9px] tracking-[0.9px] uppercase text-[#FF6D1F] font-['Space_Grotesk',sans-serif]">About Me</span>
            </div>

            {/* Image */}
            <div className="w-full h-full rounded-t-[14px] overflow-hidden bg-[#EAECE9] relative z-10 border-b-2 border-[#FF6D1F]">
              <ImageWithFallback src={PORTRAIT_URL} alt="Tom Carter" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 m-[0px]" />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex-1 flex flex-col relative z-10 px-[12px] pt-[12px]">
            <div className="flex justify-between items-start mb-[8px]">
              <h1 className="text-[26px] xl:text-[30px] font-black leading-[1.2] xl:leading-[37.5px] tracking-[-0.75px] text-white font-['Outfit',sans-serif]">
                I'm,<br />
                <span className="text-[#FF6D1F]">Tom Carter</span>
              </h1>
              
              {/* Circular Badge */}
              <div className="w-[46px] h-[46px] xl:w-[52px] xl:h-[52px] bg-[#FF6D1F] rounded-full text-[#152028] flex items-center justify-center p-[2px] text-[8px] text-center font-bold tracking-widest relative animate-[spin_15s_linear_infinite] shrink-0 border-2 border-[#152028]">
                <div className="w-1 h-1 bg-[#152028] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="text-[9px] fill-[#152028] font-black tracking-[0.2em] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      MY DESIGN PORTFOLIO 2023 •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <p className="text-[12px] font-medium opacity-90 leading-[18px] xl:leading-[19.5px] mb-[12px] pr-[8px] text-[#d4d4d8] font-['Space_Grotesk',sans-serif] line-clamp-3 xl:line-clamp-none">A strategic, hands-on Designer with a background in physical and digital product development. I specialise in mapping complex systems and orchestrating end-to-end journeys...But that's just the tip of the iceberg.</p>

            <div className="flex items-center gap-[8px] mt-auto">
              <a href="#long-about" className="inline-flex items-center justify-center gap-[6px] text-[12px] leading-[16px] font-bold bg-[#FF6D1F] text-[#152028] px-[16px] py-[8px] xl:px-[18px] xl:py-[10px] rounded-full hover:bg-white hover:text-black transition-colors w-fit border-2 border-transparent font-['Space_Grotesk',sans-serif]">
                Read full bio
                <ArrowRight className="w-[14px] h-[14px]" />
              </a>
              <a href="mailto:Tomcarter90@gmail.com" className="inline-flex items-center justify-center w-[32px] h-[32px] xl:w-[36px] xl:h-[36px] rounded-full border-2 border-[#FF6D1F] hover:bg-[#FF6D1F] hover:text-[#152028] transition-colors text-[#FF6D1F]">
                <Mail className="w-[12px] h-[12px] xl:w-[14px] xl:h-[14px]" />
              </a>
              <a href="https://www.linkedin.com/in/tom-carter-89403267/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-[32px] h-[32px] xl:w-[36px] xl:h-[36px] rounded-full border-2 border-[#FF6D1F] hover:bg-[#FF6D1F] hover:text-[#152028] transition-colors text-[#FF6D1F]">
                <Linkedin className="w-[12px] h-[12px] xl:w-[14px] xl:h-[14px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="flex-[2] flex flex-col gap-4 xl:gap-6">
          {/* Top Large Image Card */}
          <div className="flex-[1.5] bg-[#152028] border-2 border-[#152028] rounded-[14px] overflow-hidden relative group shadow-[6px_6px_0_#FF6D1F] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_#FF6D1F] transition-all duration-300 min-h-[250px] xl:min-h-0">
            <ImageWithFallback src={FLAMINGO_URL} alt="Latest Work" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 xl:p-8 flex flex-col justify-end bg-gradient-to-t from-[#152028]/90 via-[#152028]/20 to-transparent">
              <div className="flex justify-between items-end">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-2 xl:mb-3">
                    Latest Work
                  </div>
                  <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black text-white font-['Outfit',sans-serif]">Dyson V15</h2>
                </div>
                
                <div className="w-12 h-12 xl:w-14 xl:h-14 bg-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-300 shadow-[4px_4px_0_#FF6D1F] border-2 border-[#152028]">
                  <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 text-[#152028]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid Row (2 Cards) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 min-h-[200px] xl:min-h-0">
            {/* Clients Card */}
            <div className="bg-[#076E74] border-2 border-[#152028] shadow-[6px_6px_0_#152028] rounded-[14px] p-6 xl:p-8 flex flex-col justify-between text-white relative group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_#152028] transition-all duration-300 overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md border border-black/10 text-white text-[10px] xl:text-xs font-bold tracking-widest uppercase mb-4 xl:mb-6 w-fit relative z-10">
                Clients
              </div>
              <div className="text-2xl xl:text-3xl 2xl:text-4xl font-black leading-[1.15] xl:leading-[1.1] font-['Outfit',sans-serif] text-white/90 relative z-10">
                Apple<br/>
                Dyson<br/>
                Sony<br/>
                BMW<br/>
                Samsung
              </div>
              <ArrowRight className="absolute top-6 right-6 xl:top-8 xl:right-8 w-5 h-5 xl:w-6 xl:h-6 -rotate-45 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all z-10" />
            </div>

            {/* Right Sphere Card */}
            <div className="bg-[#152028] border-2 border-[#FF6D1F] shadow-[6px_6px_0_#FF6D1F] rounded-[14px] overflow-hidden p-0 relative group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_#FF6D1F] transition-all duration-300">
              <ImageWithFallback src={SPHERE_URL} alt="3D Sphere" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute top-4 right-4 xl:top-6 xl:right-6 w-10 h-10 xl:w-12 xl:h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform z-10">
                <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CareerTimeline />

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="pt-12 sm:pt-20 scroll-mt-24">
        <div className="flex items-end justify-between mb-8 xl:mb-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black font-['Outfit',sans-serif] tracking-tight">Selected Work</h2>
            <p className="text-zinc-400 mt-2 text-lg">Case studies of my recent projects.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Link to={`/project/${project.slug}`} className="group block h-full">
                <div className="flex flex-col h-full bg-[#152028] border-2 border-[#152028] rounded-[14px] overflow-hidden shadow-[6px_6px_0_#FF6D1F] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_#FF6D1F] transition-all duration-300">
                  
                  {/* Image Header */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border-b-2 border-[#152028] shrink-0">
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    {/* Descriptive Tagging */}
                    <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#152028]/80 backdrop-blur-md border border-white/10 text-white text-[10px] xl:text-xs font-bold tracking-widest uppercase">
                      {project.category}
                    </div>

                    {/* Circular Button */}
                    <div className="absolute bottom-4 right-4 z-20 w-10 h-10 xl:w-12 xl:h-12 bg-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-300 shadow-[4px_4px_0_#FF6D1F] border-2 border-[#152028]">
                      <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 text-[#152028]" />
                    </div>
                  </div>

                  {/* Descriptive Text Underneath */}
                  <div className="p-6 xl:p-8 flex flex-col flex-1 bg-[#152028]">
                    <h3 className="text-2xl xl:text-3xl font-black text-white font-['Outfit',sans-serif] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm xl:text-base font-['Space_Grotesk',sans-serif] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY SECTION */}
      <PhotoGallery />

    </div>
  );
}
