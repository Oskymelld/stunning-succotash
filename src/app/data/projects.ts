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
  galleries?: Gallery[];
  approach?: FeatureItem[];
  finalState?: FinalState;
  keyLearnings?: KeyLearning[];
}

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
    caseStudy: {
      // DRAFT — first pass, please refine with your real intro copy.
      overview:
        "Rebo is a self-directed case study exploring how a mobile app could make everyday food preparation simpler, faster, and less wasteful. I took the project end to end — from initial discovery and problem framing through to a working, high-fidelity prototype — as a way to practice a complete UX/UI process on a problem I genuinely cared about.",
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
];
