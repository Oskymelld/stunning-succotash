import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";

export function Project() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4 font-['Outfit']">Project Not Found</h1>
        <Link to="/" className="text-zinc-400 hover:text-white flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </div>
        <span className="font-medium">Back to Projects</span>
      </Link>

      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl font-black font-['Outfit',sans-serif] tracking-tight mb-6"
        >
          {project.title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-4 sm:gap-8 text-zinc-400 border-y border-white/10 py-6"
        >
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
            <span>{project.category}</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full aspect-video rounded-[2rem] overflow-hidden mb-16 border border-white/10 relative"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-20">
        <div className="md:col-span-2 space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-['Outfit',sans-serif] mb-6">The Challenge</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              {project.challenge}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-['Outfit',sans-serif] mb-6">The Solution</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              {project.solution}
            </p>
          </motion.section>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="p-8 rounded-[2rem] bg-card border border-border">
            <h3 className="text-lg font-bold mb-4 font-['Outfit',sans-serif]">Deliverables</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> UX Research
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> UI Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Interactive Prototype
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Design System
              </li>
            </ul>
            
            <a href="#" className="mt-8 flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
              Visit Live Site <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

    </motion.div>
  );
}
