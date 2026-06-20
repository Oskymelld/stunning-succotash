import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import type { CaseStudyBlock } from "../data/projects";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Renders a single ordered case-study block (heading, paragraph, feature list,
// or image gallery). Styled to match the site's Outfit/zinc design language.
function CaseStudyBlockView({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "lede":
      return (
        <section className="mb-16">
          {block.eyebrow && (
            <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">{block.eyebrow}</p>
          )}
          <p className="text-2xl sm:text-3xl text-zinc-200 leading-relaxed font-['Outfit',sans-serif]">
            {block.text}
          </p>
        </section>
      );

    case "heading":
      return (
        <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] mt-16 mb-6">
          {block.text}
        </h2>
      );

    case "paragraph":
      return <p className="text-xl text-zinc-400 leading-relaxed mb-6">{block.text}</p>;

    case "featureList":
      return (
        <section className="my-12">
          <h3 className="text-2xl font-bold font-['Outfit',sans-serif] mb-8">{block.heading}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {block.items.map((item, i) => (
              <div key={item.title} className="p-6 rounded-[1.5rem] bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  {block.numbered && (
                    <span className="w-7 h-7 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                  )}
                  <h4 className="text-lg font-bold font-['Outfit',sans-serif]">{item.title}</h4>
                </div>
                <p className="text-zinc-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case "gallery":
      return (
        <section className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-zinc-300">{block.label}</h3>
            {block.link && (
              <a
                href={block.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {block.link.label} <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {block.images.map((img) => (
              <div
                key={img.alt}
                className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-card"
              >
                <ImageWithFallback src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      );

    default:
      return null;
  }
}

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
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {project.caseStudy ? (
        <div>
          {project.caseStudy.links && project.caseStudy.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-12">
              {project.caseStudy.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
                >
                  {link.label} <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          )}

          {project.caseStudy.blocks.map((block, i) => (
            <CaseStudyBlockView key={i} block={block} />
          ))}
        </div>
      ) : (
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
      )}

    </motion.div>
  );
}
