import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const PHOTOS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwc2tldGNofGVufDF8fHx8MTc4MTY4MDk4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Concept Sketching",
    description: "Early ideation and form exploration for next-generation products."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1647009822729-0076c73fe6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlciUyMHByb2R1Y3R8ZW58MXx8fHwxNzgxNjgwOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "3D Rendering & CAD",
    description: "High-fidelity digital prototyping and surface modeling."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtpbmclMjBhdCUyMGRlc2t8ZW58MXx8fHwxNzgxNjgwOTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Industrial Design",
    description: "Bringing physical products to life at the intersection of engineering and art."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1649930536248-df58fd1f54f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1vb2Rib2FyZHxlbnwxfHx8fDE3ODE2ODEwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Material Exploration",
    description: "Curating textures, colors, and finishes for a premium tactile feel."
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1708529589690-00e2bbb7f327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkeXNvbiUyMHZhY3V1bSUyMHByb3RvdHlwZXxlbnwxfHx8fDE3ODE2ODEwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Prototyping",
    description: "Building physical models to test ergonomics, mechanisms, and airflow."
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGNhZHxlbnwxfHx8fDE3ODE2ODEwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Engineering Integration",
    description: "Collaborating closely with engineering teams to ensure design intent survives to production."
  }
];

export function PhotoGallery() {
  const ITEM_WIDTH = 320;
  const GAP = 24;
  // Calculate the exact distance for one full set of items
  const slideDistance = PHOTOS.length * (ITEM_WIDTH + GAP);

  // We duplicate the photos array a few times to ensure a seamless infinite loop
  const duplicatedPhotos = [...PHOTOS, ...PHOTOS, ...PHOTOS];

  return (
    <section className="w-full overflow-hidden relative rounded-[16px] bg-[#33261a7d] px-[0px] py-[25px]">
      <style>{`
        @keyframes marquee-fixed {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--slide-dist))); }
        }
        .animate-marquee-fixed {
          animation: marquee-fixed 40s linear infinite;
        }
      `}</style>
      
      <div className="max-w-[1600px] mx-auto px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white font-['Space_Grotesk',sans-serif] uppercase tracking-tighter">
          Design Process
        </h2>
        <div className="w-24 h-1 bg-[#FF6D1F] mt-6 shadow-[0_0_10px_#FF6D1F]"></div>
      </div>

      <div 
        className="relative w-full flex" 
        style={{ '--slide-dist': `${slideDistance}px` } as React.CSSProperties}
      >
        <div className="flex w-max animate-marquee-fixed hover:[animation-play-state:paused] group/marquee" style={{ gap: `${GAP}px` }}>
          {duplicatedPhotos.map((photo, index) => (
            <div 
              key={`photo-${index}`}
              className="relative h-[450px] w-[320px] hover:w-[600px] flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-2xl overflow-hidden border-2 border-[#152028] shadow-[6px_6px_0px_rgba(0,0,0,0.5)] hover:shadow-[10px_10px_0px_#FF6D1F] group cursor-pointer"
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#152028]/90 via-[#152028]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="w-10 h-1 bg-[#FF6D1F] mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100 shadow-[0_0_10px_#FF6D1F]"></div>
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-2 drop-shadow-md">
                  {photo.title}
                </h3>
                <p className="text-zinc-300 font-['Outfit',sans-serif] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-3">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}