export type ProductStatus = "Building" | "Prototype" | "Concept" | "Research";

export interface Product {
  slug: string;
  name: string;
  status: ProductStatus;
  tagline: string;
  description: string;
  tech: string[];
  href?: string;
}

export const products: Product[] = [
  {
    slug: "genxix",
    name: "Genxix",
    status: "Building",
    tagline: "A builder network, not a follower count",
    description:
      "Genxix is a builder network where founders, developers, designers, investors, and makers discover one another based on what they're building. People showcase ideas, collaborate, discover opportunities, and help great work find the right hands.",
    tech: ["React", "Vite", "Supabase"],
    href: "https://genxix.vercel.app",
  },
  {
    slug: "debuggpt",
    name: "DebugGPT",
    status: "Prototype",
    tagline: "Debug faster. Understand deeper.",
    description:
      "DebugGPT is an AI debugging assistant that helps developers understand errors, fix bugs faster, and actually learn while debugging — instead of blindly copy-pasting a solution.",
    tech: ["JavaScript", "OpenAI", "Paystack"],
    href: "https://debuggpt.vercel.app",
  },
  {
    slug: "fixar",
    name: "FixAR",
    status: "Concept",
    tagline: "A repair copilot for your home",
    description:
      "FixAR is an AI-powered home repair copilot that uses augmented reality and computer vision to guide homeowners through diagnosing and fixing household problems with confidence.",
    tech: ["AR", "Computer Vision"],
  },
  {
    slug: "humanode-id",
    name: "Humanode ID",
    status: "Research",
    tagline: "Proof of person, for an AI-first web",
    description:
      "Humanode ID is a human verification layer that helps platforms distinguish real people from bots in an AI-first internet.",
    tech: ["Research"],
  },
];

export interface TimelineEntry {
  year: string;
  month?: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    month: "Q1",
    title: "Started building Genxix",
    description:
      "Shipped the first MVP from an iPhone — auth, storage, public feed, in a single sitting.",
  },
  {
    year: "2026",
    month: "Q1",
    title: "Built DebugGPT",
    description:
      "A self-contained debugging tool for vibe coders and junior developers. Gained organic traction with zero ads.",
  },
  {
    year: "2026",
    month: "Q2",
    title: "Designed FixAR",
    description: "Scoped the AR home-repair copilot concept and early MVP direction.",
  },
  {
    year: "2026",
    month: "Q2",
    title: "Researched Humanode ID",
    description: "Began early research into human-verification for an AI-first internet.",
  },
];

export interface Post {
  title: string;
  excerpt: string;
  date?: string;
}

export const posts: Post[] = [
  {
    title: "Building a company from a phone",
    excerpt: "Notes on shipping products with no laptop, no funding, and no team.",
  },
  {
    title: "What building in public actually costs",
    excerpt: "The unglamorous parts of documenting the journey while still shipping.",
  },
  {
    title: "On solo founding in Abuja",
    excerpt: "What it means to build AI products from outside the usual centers.",
  },
];

export const skills: string[] = [
  "Product Strategy",
  "AI",
  "Prompt Engineering",
  "UI/UX",
  "Startup Validation",
  "Product Design",
  "Frontend Development",
  "Rapid Prototyping",
  "Founder Storytelling",
];

export const techStack: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "OpenAI",
  "Supabase",
  "Firebase",
  "GitHub",
  "Vercel",
  "Figma",
];

export const contactLinks = {
  email: "mailto:hello@princegoldenpro.com",
  linkedin: "https://linkedin.com/in/princegoldenpro",
  x: "https://x.com/princegoldenpro",
  github: "https://github.com/princegoldenpro",
};
