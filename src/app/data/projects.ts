import caseStudy1 from "../../imports/Web-804A-PDP-Gallery-10.jpg";
import caseStudy2 from "../../imports/s-l1600.jpg";
import caseStudy3 from "../../imports/A_square_image_of_a_.png";

export const projects = [
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
  }
];
