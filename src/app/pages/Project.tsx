// Case-study page — built to the V3 Figma template
// "CASE STUDY / DYSON MICRO 1.5KG — EXAMPLE (OPT B) — 1440" (node 129:927).
// Structure: header (title + hook + fact box + tags) → bracketed hero → the
// Context/Problem/Approach/Outcome/Reflection arc with alternating imagery →
// quote, figures and stats readout → prev/next project.
//
// Projects that define `caseStudy.narrative` drive this directly. Older
// projects (Rebo, Neon Cloud) are mapped onto the same arc by deriveNarrative
// below, so every case study renders in one visual language.
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import type { NarrativeSection, Project as ProjectType } from "../data/projects";
import { Galleries } from "../components/Galleries";
import { StoryGallery } from "../components/StoryGallery";
import { usePageTitle } from "../hooks/usePageTitle";
import { TickRail } from "../v3/primitives";
import {
  CornerBrackets,
  FactBox,
  ImageBlock,
  QuoteReference,
  SectionHeader,
  StatsReadout,
  Tag,
} from "../v3/CaseStudyV3";

const mono = "font-['Space_Mono',monospace] tracking-[0.05em] uppercase";

// Build the five-beat arc for projects written before the V3 template existed,
// so they still render in the new theme instead of falling back to the old one.
function deriveNarrative(p: ProjectType): NarrativeSection[] {
  const cs = p.caseStudy;
  const out: NarrativeSection[] = [];
  if (cs?.overview) out.push({ code: "CONTEXT", heading: "Context", body: cs.overview });
  if (p.challenge) out.push({ code: "PROBLEM", heading: "Problem", body: p.challenge });
  if (cs?.approach?.length) {
    out.push({
      code: "APPROACH",
      heading: "Approach",
      body: cs.approach.map((a) => `${a.title}. ${a.body}`).join(" "),
    });
  }
  if (p.solution) {
    out.push({
      code: "OUTCOME",
      heading: "Outcome",
      body: [p.solution, ...(cs?.finalState?.items ?? []).map((i) => `${i.title}. ${i.body}`)].join(" "),
      image: cs?.finalState?.image,
      imageAlt: cs?.finalState?.alt,
    });
  }
  if (cs?.keyLearnings?.length) {
    out.push({
      code: "REFLECTION",
      heading: "Reflection",
      body: cs.keyLearnings
        .map((k) => [k.title, k.body, ...(k.bullets ?? [])].filter(Boolean).join(". "))
        .join(" "),
    });
  }
  return out;
}

export function Project() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index === -1 ? undefined : projects[index];
  usePageTitle(project ? project.title : "Project not found");

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
        <h1 className="font-['Space_Grotesk',sans-serif] text-[31px] font-bold text-[#F7F7F7]">
          Project not found
        </h1>
        <Link to="/#work" className={`${mono} text-[13px] font-bold text-[#FE6219] hover:underline`}>
          ← Back to work
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;
  const narrative = cs?.narrative?.length ? cs.narrative : deriveNarrative(project);
  const caseNumber = String(index + 1).padStart(2, "0");
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const factRows =
    project.factBox ??
    [
      { label: "Role", value: project.role.toUpperCase() },
      { label: "Timeframe", value: project.year.toUpperCase() },
      { label: "Category", value: project.category.toUpperCase() },
    ];
  const tags = project.tags ?? project.skills?.slice(0, 3) ?? [];

  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-16 sm:gap-24">
      {/* HEADER */}
      <header className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]">
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <Link
            to="/#work"
            className={`${mono} flex w-max gap-1.5 text-[13px] font-bold leading-[1.4] transition-colors hover:text-[#FE6219]`}
          >
            <span aria-hidden="true" className="text-[#FE6219]">\\</span>
            <span className="text-[#A3A3A3]">Work / Case-{caseNumber}</span>
          </Link>
          <h1 className="font-['Space_Grotesk',sans-serif] text-[34px] font-bold leading-[1.1] text-[#F7F7F7] sm:text-[48px]">
            {project.title}.
          </h1>
          {project.hook && (
            <p className="max-w-[640px] font-['Space_Grotesk',sans-serif] text-[18px] leading-[1.6] text-[#A3A3A3] sm:text-[20px]">
              {project.hook}
            </p>
          )}
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-[520px] lg:shrink-0">
          <FactBox rows={factRows} />
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono} flex w-max items-center gap-2 rounded-[4px] border border-[#FE6219] px-3.5 py-2 text-[11px] font-bold text-[#F7F7F7] transition-colors hover:bg-[#FE6219] hover:text-[#141414]`}
            >
              {project.liveLabel ?? "Visit live site"}
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          )}
        </div>
      </header>

      {/* HERO */}
      <div className="relative h-[280px] w-full overflow-hidden rounded-[8px] bg-[#2A2A2A] sm:h-[420px] lg:h-[500px]">
        <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
        <CornerBrackets />
      </div>

      <TickRail />

      {/* NARRATIVE ARC */}
      {narrative.map((s, i) => {
        const code = `SEC-${String(i + 1).padStart(2, "0")} ${s.code}`;
        const imageRight = i % 2 === 0;
        const text = (
          <div className="flex min-w-0 flex-1 flex-col gap-8">
            <SectionHeader code={code} heading={s.heading} />
            <p className="max-w-[68ch] font-['Space_Grotesk',sans-serif] text-[17px] leading-[1.6] text-[#F7F7F7]">
              {s.body}
            </p>
          </div>
        );
        return (
          <motion.section
            key={code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[60px] ${
              imageRight ? "" : "lg:flex-row-reverse"
            }`}
          >
            {text}
            {s.image && (
              <ImageBlock
                src={s.image}
                alt={s.imageAlt ?? ""}
                caption={s.caption}
                className="w-full lg:w-[48%] lg:shrink-0"
                imageClassName="h-[240px] sm:h-[340px]"
              />
            )}
          </motion.section>
        );
      })}

      {/* QUOTE */}
      {cs?.quote && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <QuoteReference quote={cs.quote.text} source={cs.quote.source} />
        </motion.div>
      )}

      {/* FIGURES */}
      {cs?.figures && cs.figures.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cs.figures.map((f) => (
            <ImageBlock
              key={f.src + f.caption}
              src={f.src}
              alt={f.alt}
              caption={f.caption}
              imageClassName="h-[280px] sm:h-[420px]"
            />
          ))}
        </div>
      )}

      {/* STATS */}
      {cs?.stats && cs.stats.length > 0 && <StatsReadout stats={cs.stats} />}

      {/* Rich media kept from the earlier case studies (Rebo, Neon Cloud). */}
      {cs?.story && cs.story.slides.length > 0 && <StoryGallery story={cs.story} />}
      {cs?.galleries && cs.galleries.length > 0 && <Galleries galleries={cs.galleries} />}

      {/* KNOWLEDGE GAINED */}
      {cs?.knowledgeGained && cs.knowledgeGained.length > 0 && (
        <section className="flex flex-col gap-4">
          <p className={`${mono} flex gap-1.5 text-[13px] font-bold text-[#FE6219]`}>
            <span aria-hidden="true">\\</span>
            <span className="text-[#A3A3A3]">Knowledge gained</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {cs.knowledgeGained.map((k) => (
              <Tag key={k}>{k}</Tag>
            ))}
          </div>
        </section>
      )}

      <TickRail />

      {/* PREV / NEXT */}
      <nav aria-label="Project navigation" className="flex items-center justify-between gap-4 pb-4">
        <Link to={`/project/${prev.slug}`} className="group flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[4px] border border-[#4D4D4D]/40 text-[#A3A3A3] transition-colors group-hover:border-[#FE6219] group-hover:text-[#FE6219]">
            <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className={`${mono} hidden text-[13px] font-bold text-[#FE6219] sm:block`}>Previous project</span>
        </Link>
        <Link to={`/project/${next.slug}`} className="group flex items-center gap-3">
          <span className={`${mono} hidden text-[13px] font-bold text-[#FE6219] sm:block`}>Next project</span>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[4px] border border-[#4D4D4D]/40 text-[#A3A3A3] transition-colors group-hover:border-[#FE6219] group-hover:text-[#FE6219]">
            <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
          </span>
        </Link>
      </nav>
    </motion.article>
  );
}
