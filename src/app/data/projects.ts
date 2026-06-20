import caseStudy1 from "../../imports/Web-804A-PDP-Gallery-10.jpg";
import caseStudy2 from "../../imports/s-l1600.jpg";
import caseStudy3 from "../../imports/A_square_image_of_a_.png";

// Rebo case study assets (self-directed food-prep app project).
import reboHero from "../../imports/rebo/hero.jpg";
import reboLofi01 from "../../imports/rebo/lofi-01.png";
import reboLofi02 from "../../imports/rebo/lofi-02.png";
import reboLofi03 from "../../imports/rebo/lofi-03.png";
import reboLofi04 from "../../imports/rebo/lofi-04.png";
import reboLofi05 from "../../imports/rebo/lofi-05.png";
import reboHifi01 from "../../imports/rebo/hifi-01.png";
import reboHifi02 from "../../imports/rebo/hifi-02.png";
import reboHifi03 from "../../imports/rebo/hifi-03.png";
import reboHifi04 from "../../imports/rebo/hifi-04.png";
import reboHifi05 from "../../imports/rebo/hifi-05.png";

// Neon Cloud case study assets (financial-skills web + mobile app).
import ncDevices from "../../imports/neon-cloud/devices.png";
import ncPersonas from "../../imports/neon-cloud/personas.png";
import ncUserflows from "../../imports/neon-cloud/userflows.png";
import ncSketches from "../../imports/neon-cloud/sketches.png";
import ncLofi from "../../imports/neon-cloud/lofi.png";
import ncDesignSystem from "../../imports/neon-cloud/designsystem.png";
import ncPhone from "../../imports/neon-cloud/phone.png";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FeatureItem {
  title: string;
  body: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Gallery {
  label?: string;
  link?: { label: string; url: string };
  images: GalleryImage[];
}

export interface StorySlide {
  src: string;
  alt: string;
  caption?: string;
}

// A click-through slideshow opened full-screen from a "See the story" tile.
export interface Story {
  label?: string;
  slides: StorySlide[];
}

export interface KeyLearning {
  title: string;
  body?: string;
  bullets?: string[];
}

export interface FinalState {
  image: string;
  alt?: string;
  items: FeatureItem[];
}

// Extra sections shown only on full case-study projects, in this order.
export interface CaseStudy {
  overview?: string;
  story?: Story;
  galleries?: Gallery[];
  approach?: FeatureItem[];
  finalState?: FinalState;
  keyLearnings?: KeyLearning[];
}

// The names of the toggleable page sections (everything below the hero).
// Control which appear — and in what order — via a project's `sections` list.
export type SectionKey =
  | "summary" // Challenge / Solution + Deliverables cards
  | "overview"
  | "story" // "See the story" tile -> full-screen slideshow
  | "galleries"
  | "approach"
  | "finalState"
  | "keyLearnings";

// Order used when a project doesn't define its own `sections` list.
// A section only renders if it's listed here AND that project has content for it.
export const DEFAULT_SECTION_ORDER: SectionKey[] = [
  "summary",
  "overview",
  "story",
  "galleries",
  "approach",
  "finalState",
  "keyLearnings",
];

export interface Project {
  slug: string;
  title: string;
  category: string;
  color: string;
  image: string;
  description: string;
  role: string;
  year: string;
  // Top-of-page summary cards (shown on every project page).
  challenge?: string;
  solution?: string;
  deliverables?: string[];
  liveUrl?: string;
  liveLabel?: string;
  // Rich case-study sections below the summary (optional).
  caseStudy?: CaseStudy;
  // Which sections to show, and in what order. Omit a name to hide that
  // section; reorder the list to reorder the page. Leave this out entirely
  // to use DEFAULT_SECTION_ORDER (shows every section that has content).
  sections?: SectionKey[];
}

// Used when a project doesn't specify its own deliverables list.
export const DEFAULT_DELIVERABLES = [
  "UX Research",
  "UI Design",
  "Interactive Prototype",
  "Design System",
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    slug: "dyson-v15",
    title: "Dyson V15 App Integration",
    category: "IoT • Hardware App",
    color: "#076E74", // Teal
    image: caseStudy1,
    description: "Integrating realtime dust particle tracking and battery analytics for the new flagship V15 detect vacuum.",
    challenge: "Translating complex particle metrics into an easy-to-understand visual format for everyday users.",
    solution: "A dynamic dashboard that visualizing clean history with playful yet informative charts, driving user engagement.",
    role: "Lead UI Designer",
    year: "2023"
  },
  {
    slug: "dyson-product-2",
    title: "Dyson E-Commerce Rebrand",
    category: "Web Design • E-commerce",
    color: "#F43F5E", // Rose
    image: caseStudy2,
    description: "Creating a high-end, immersive shopping experience for a luxury hardware brand using bold typography and minimal layouts.",
    challenge: "Standing out in a saturated market and creating an e-commerce experience that feels as premium as the physical hardware.",
    solution: "By utilizing large-scale photography, a unique grid system, and micro-interactions, we brought the tactile feel of their products to the digital space.",
    role: "UI Designer & Developer",
    year: "2024"
  },
  {
    slug: "nexus-analytics",
    title: "Nexus Analytics",
    category: "SaaS • Dark Mode",
    color: "#F59E0B", // Amber
    image: caseStudy3,
    description: "A comprehensive analytics dashboard designed entirely around a dark-mode aesthetic to reduce eye strain for power users.",
    challenge: "Data analysts were spending 8+ hours a day on the platform, leading to severe visual fatigue. The layout was also unstructured.",
    solution: "Implemented a strict bento-box grid system, a sophisticated dark color palette with high-contrast accent colors for critical metrics.",
    role: "UX Researcher & Designer",
    year: "2023"
  },
  {
    slug: "rebo",
    title: "Rebo",
    category: "Mobile App • UX/UI",
    color: "#22C55E", // Green — food / fresh
    image: reboHero,
    description: "A self-directed case study designing Rebo, a food-prep mobile app — from discovery through to a functional prototype.",
    role: "UX & UI Design (self-directed)",
    year: "2023", // TODO: confirm the year from your records
    // DRAFT — first-pass challenge/solution, please refine with your real copy.
    challenge: "Planning meals and prepping food during a busy week is easy to put off. Existing apps felt cluttered and time-consuming, so good intentions often gave way to last-minute, wasteful choices.",
    solution: "A focused, friendly app that streamlines planning and prep into a few clear steps — helping people decide faster and waste less, designed mobile-first with an accessible, high-contrast UI.",
    deliverables: ["UX Research", "Wireframing", "UI Design", "Interactive Prototype"],
    liveUrl: "https://www.figma.com/file/e7fyhgHUxUAQDOsy7bCY29/Rebo-Food-Prep-App?node-id=5-3390&type=design",
    liveLabel: "Open in Figma",
    // Sections shown on this page, in order. Delete a line to hide that
    // section (its content stays in the file); reorder lines to reorder the
    // page. Remove this whole `sections` block to fall back to the default.
    sections: ["summary", "overview", "story", "galleries", "approach", "finalState", "keyLearnings"],
    caseStudy: {
      // DRAFT — first pass, please refine with your real intro copy.
      overview:
        "Rebo is a self-directed case study exploring how a mobile app could make everyday food preparation simpler, faster, and less wasteful. I took the project end to end — from initial discovery and problem framing through to a working, high-fidelity prototype — as a way to practice a complete UX/UI process on a problem I genuinely cared about.",
      // "See the story" slideshow. DRAFT — swap in your chosen story images and
      // captions; currently reuses the hi-fi screens as a walkthrough.
      story: {
        label: "Walkthrough",
        slides: [
          { src: reboHifi01, alt: "Rebo story — 1", caption: "Onboarding and first impressions." },
          { src: reboHifi02, alt: "Rebo story — 2", caption: "Browsing and planning meals." },
          { src: reboHifi03, alt: "Rebo story — 3", caption: "Building a prep list." },
          { src: reboHifi04, alt: "Rebo story — 4", caption: "Following a guided prep flow." },
          { src: reboHifi05, alt: "Rebo story — 5", caption: "Tracking progress and results." },
        ],
      },
      galleries: [
        {
          label: "Lo-fi prototype",
          link: {
            label: "Open in Figma",
            url: "https://www.figma.com/file/e7fyhgHUxUAQDOsy7bCY29/Rebo-Food-Prep-App?node-id=5-3390&type=design",
          },
          images: [
            { src: reboLofi01, alt: "Rebo low-fidelity wireframe — 1" },
            { src: reboLofi02, alt: "Rebo low-fidelity wireframe — 2" },
            { src: reboLofi03, alt: "Rebo low-fidelity wireframe — 3" },
            { src: reboLofi04, alt: "Rebo low-fidelity wireframe — 4" },
            { src: reboLofi05, alt: "Rebo low-fidelity wireframe — 5" },
          ],
        },
        {
          label: "Hi-fi mockups",
          images: [
            { src: reboHifi01, alt: "Rebo high-fidelity mockup — 1" },
            { src: reboHifi02, alt: "Rebo high-fidelity mockup — 2" },
            { src: reboHifi03, alt: "Rebo high-fidelity mockup — 3" },
            { src: reboHifi04, alt: "Rebo high-fidelity mockup — 4" },
            { src: reboHifi05, alt: "Rebo high-fidelity mockup — 5" },
          ],
        },
      ],
      approach: [
        // DRAFT bodies for Discover / Define / Develop — refine these three.
        { title: "Discover", body: "Research the problem space — the habits, pain points, and motivations of people prepping food at home." },
        { title: "Define", body: "Translate the research into clear problem statements and the key user flows the product needs to support." },
        { title: "Develop", body: "Move from low-fidelity wireframes into testable screens, iterating on structure and content." },
        // From your original content (verbatim):
        { title: "Trial", body: "Learn where there are weaknesses in the design & iterate back around for a refined version." },
      ],
      finalState: {
        image: reboHifi01,
        alt: "Rebo high-fidelity prototype on a phone",
        // From your original "high fidelity phase" content (verbatim):
        items: [
          { title: "Iterate", body: "Learn from early prototypes & start to refine the design." },
          { title: "High fidelity mock-ups", body: "Build out components for the high fidelity version — colour themes, font usage etc." },
          { title: "Accessibility", body: "Checks on accessibility, reworking the colour scheme for increased contrast and font changes to be more readable." },
        ],
      },
      // DRAFT — placeholder key learnings, please replace with your real reflections.
      keyLearnings: [
        {
          title: "Start lo-fi, decide fast",
          body: "Testing structure in low fidelity before touching visuals kept the project moving and avoided polishing the wrong ideas.",
          bullets: [
            "Wireframes surfaced navigation problems early",
            "Cheaper to change a flow than a finished screen",
          ],
        },
        {
          title: "Accessibility shaped the visual design",
          body: "Designing for contrast and readability from the start led to a cleaner, more confident UI rather than a constraint bolted on at the end.",
        },
      ],
    },
  },
  {
    slug: "neon-cloud",
    title: "Neon Cloud",
    category: "Web & Mobile App • UX/UI",
    color: "#22D3EE", // Cyan — "neon"
    image: ncDevices,
    description: "A paired web and mobile app making financial knowledge accessible to young adults in the UK — designed end to end over six weeks for an open 'social good' brief.",
    role: "UX & UI Design (self-directed)",
    year: "2022", // TODO: confirm the year from your records
    // Content mapped from the case study PDF.
    challenge: "Young adults rarely get high-quality advice that is impartial, especially when they are from low-income areas. How might we make that information accessible and trustworthy?",
    solution: "Neon Cloud — a pairing of digital products (a web app and a dedicated mobile app) that improves financial-knowledge accessibility for young adults in the UK, with an approachable, accessible design and an anonymous way to reach expert conversation.",
    deliverables: ["UX Research", "User Personas", "User Flows", "Wireframes", "Hi-fi Prototype", "Design System"],
    caseStudy: {
      overview:
        "Part of my Google UX qualification — an open brief to design a multi-platform product for 'social good'. Over six weeks I researched how young adults seek and find financial advice, interviewed people in the target age bracket, and designed a cross-platform web and mobile product — Neon Cloud — to make trustworthy financial guidance accessible and approachable. This was the first project I learnt to use Figma to build a visual design language and reuse components across multiple screen sizes. ",
      // The project phases shown as a click-through walkthrough (like Rebo).
      story: {
        label: "Project walkthrough",
        slides: [
          { src: ncPersonas, alt: "Neon Cloud persona — Lucas", caption: "Empathise — interviews and research distilled into personas to guide the design." },
          { src: ncUserflows, alt: "Neon Cloud user flow", caption: "Empathise — user flows mapped the real pain points across the journey." },
          { src: ncSketches, alt: "Wireframe sketches", caption: "Conceptualise — sketches and affinity mapping to structure the flows." },
          { src: ncLofi, alt: "First low-fidelity prototype", caption: "Conceptualise — the first low-fi prototype, tested with the original interview candidate." },
          { src: ncDesignSystem, alt: "Neon Cloud design system", caption: "Design — a mobile-first, accessible UI built on the Neon Cloud design system: palette, components and type." },
        ],
      },
      finalState: {
        image: ncPhone,
        alt: "Neon Cloud budgeting screen on mobile",
        items: [
          {
            title: "Mobile-first",
            body: "A personal budget that's easy to understand, can be recalled later with a code, and supports flexible ways to define income.",
          },
          {
            title: "Accessibility",
            body: "High-contrast colours for readability, fonts that conform to dyslexia reading guides, and large, simple graphics for visual impairments.",
          },
          {
            title: "Cross-platform",
            body: "Delivered across iPhone (a dedicated app), iPad and desktop (a responsive website) from a single design language.",
          },
        ],
      },
      // From the case study "Outcomes" — taking 6 weeks, start to finish.
      keyLearnings: [
        { title: "Deeper Figma skills", body: "Deepened my understanding of components in Figma while building an expandable system." },
        { title: "Designing cross-platform", body: "Improved my process for ensuring cross-platform capabilities from one design language." },
        { title: "Interview practice", body: "Practised and sharpened my user interview techniques. Learning to ask better questions and listen more effectively." },
      ],
    },
    sections: ["summary", "overview", "story", "finalState", "keyLearnings"],
  },
];
