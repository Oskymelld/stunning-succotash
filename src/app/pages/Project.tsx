import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { projects, DEFAULT_DELIVERABLES, DEFAULT_SECTION_ORDER } from "../data/projects";
import type { FeatureItem, KeyLearning, SectionKey } from "../data/projects";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Galleries } from "../components/Galleries";
import { StoryGallery } from "../components/StoryGallery";
import { usePageTitle } from "../hooks/usePageTitle";

// Section heading used across the case-study sections (Outfit, large + bold).
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white mb-8">
      {children}
    </h2>
  );
}

// A numbered card (badge + title + body) shared by the Approach, Final State,
// and Key Learnings sections. `variant` tweaks the colour treatment.
function NumberedCard({
  index,
  item,
  bullets,
  variant = "approach",
}: {
  index: number;
  item: FeatureItem;
  bullets?: string[];
  variant?: "approach" | "learning";
}) {
  const bg = variant === "learning" ? "bg-[#111]" : "bg-[rgba(7,110,116,0.1)]";
  const titleColor = variant === "learning" ? "text-white" : "text-[#c75a20]";
  return (
    <div className={`${bg} border border-white/10 rounded-[24px] p-8 sm:p-10 flex flex-col gap-4 h-full`}>
      <div className="flex items-center gap-3">
        <span className="size-8 shrink-0 rounded-[16px] bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-sm font-bold text-white">
          {index}
        </span>
        <h3 className={`text-xl font-bold ${titleColor}`}>{item.title}</h3>
      </div>
      {item.body && <p className="text-[#a1a1aa] text-base leading-relaxed">{item.body}</p>}
      {bullets && bullets.length > 0 && (
        <ul className="list-disc pl-6 text-[#a1a1aa] text-base leading-relaxed space-y-1">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  usePageTitle(project ? project.title : "Project not found");

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

  const cs = project.caseStudy;
  const deliverables = project.deliverables ?? DEFAULT_DELIVERABLES;
  const hasSummary = Boolean(project.challenge || project.solution);

  // Each toggleable section returns its markup, or null when the project has no
  // content for it. The page renders these in the order given by the project's
  // `sections` list (falling back to DEFAULT_SECTION_ORDER).
  const sectionRenderers: Record<SectionKey, () => React.ReactNode> = {
    summary: () =>
      hasSummary ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="md:col-span-2 bg-[rgba(88,87,87,0.2)] border border-[#262626] rounded-[16px] p-8 space-y-10">
            {project.challenge && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif] mb-4">The Challenge</h2>
                <p className="text-lg sm:text-xl text-[#9f9fa9] leading-relaxed">{project.challenge}</p>
              </section>
            )}
            {project.solution && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif] mb-4">The Solution</h2>
                <p className="text-lg sm:text-xl text-[#9f9fa9] leading-relaxed">{project.solution}</p>
              </section>
            )}
          </div>

          <div className="bg-[rgba(42,42,42,0.2)] border border-[#262626] rounded-[16px] p-8 flex flex-col">
            <h3 className="text-lg font-bold font-['Outfit',sans-serif] mb-4">Deliverables</h3>
            <ul className="space-y-3 text-zinc-400">
              {deliverables.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> {d}
                </li>
              ))}
            </ul>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 sm:mt-auto self-end inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
              >
                {project.liveLabel ?? "Visit Live Site"} <ExternalLink className="w-4 h-4" />
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            )}
          </div>
        </div>
      ) : null,

    overview: () =>
      cs?.overview ? (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center my-16"
        >
          <h2 className="text-3xl font-light font-['Outfit',sans-serif] text-white mb-4">Overview</h2>
          <p className="text-xl text-[#9f9fa9] leading-relaxed">{cs.overview}</p>
        </motion.section>
      ) : null,

    story: () =>
      cs?.story && cs.story.slides.length > 0 ? <StoryGallery story={cs.story} /> : null,

    galleries: () =>
      cs?.galleries && cs.galleries.length > 0 ? <Galleries galleries={cs.galleries} /> : null,

    approach: () =>
      cs?.approach && cs.approach.length > 0 ? (
        <section className="my-20">
          <SectionHeading>Approach</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cs.approach.map((item, i) => (
              <NumberedCard key={item.title} index={i + 1} item={item} />
            ))}
          </div>
        </section>
      ) : null,

    finalState: () =>
      cs?.finalState ? (
        <section className="my-20">
          <SectionHeading>Final State</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            <div className="shrink-0 w-full max-w-[400px] aspect-square rounded-[16px] border border-white/10 bg-[#152028] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={cs.finalState.image}
                alt={cs.finalState.alt ?? "Final prototype"}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 w-full grid grid-cols-1 gap-6">
              {cs.finalState.items.map((item, i) => (
                <NumberedCard key={item.title} index={i + 1} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null,

    keyLearnings: () => {
      const hasLearnings = !!cs?.keyLearnings && cs.keyLearnings.length > 0;
      const hasKnowledge = !!cs?.knowledgeGained && cs.knowledgeGained.length > 0;
      if (!hasLearnings && !hasKnowledge) return null;
      return (
        <section className="my-20">
          <SectionHeading>Key Learnings</SectionHeading>
          {hasLearnings && (
            <div className="grid grid-cols-1 gap-6">
              {cs!.keyLearnings!.map((learning: KeyLearning, i) => (
                <NumberedCard
                  key={learning.title}
                  index={i + 1}
                  item={{ title: learning.title, body: learning.body ?? "" }}
                  bullets={learning.bullets}
                  variant="learning"
                />
              ))}
            </div>
          )}
          {hasKnowledge && (
            <div className={hasLearnings ? "mt-10" : ""}>
              <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-zinc-300 mb-4">Knowledge gained</h3>
              <div className="flex flex-wrap gap-3">
                {cs!.knowledgeGained!.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-[rgba(7,110,116,0.1)] border border-white/10 text-zinc-200 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      );
    },
  };

  const order = project.sections ?? DEFAULT_SECTION_ORDER;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </div>
        <span className="font-medium">Back to Projects</span>
      </Link>

      {/* Title + meta */}
      <div className="mb-10">
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

      {/* Hero with orange glow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full aspect-video rounded-[16px] overflow-hidden mb-16 border border-[#ff6d1f] shadow-[3px_6px_24px_0px_rgba(255,109,31,0.45)]"
      >
        <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </motion.div>

      {/* Toggleable sections, in the project's chosen order */}
      {order.map((key) => (
        <div key={key}>{sectionRenderers[key]()}</div>
      ))}
    </motion.div>
  );
}
