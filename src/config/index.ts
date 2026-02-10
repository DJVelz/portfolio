import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Dereck Velez Matias — Fullstack Software Developer",
  author: "Alejandro Múnez Cuntez",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/dereck-velez-2070231a7" },
    { text: "Github", href: "https://github.com/DJVelz" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Dereck Velez Matias",
    specialty: "Fullstack Software Developer",
    summary:
      "Developer based in Winter Haven, Florida, USA. I specialize in UI design, web and mobile application development and maintenance.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Handshake",
      position: "AI Trainer",
      startDate: "Dec 2025",
      endDate: "Present",
      summary: [
        "Evaluated and annotated outputs from large language models (LLMs) across text and multimedia tasks to support model training and quality improvement.",
        "Applied detailed project guidelines to assess accuracy, relevance, and reasoning quality of AI-generated responses.",
        "Identified edge cases, inconsistencies, and failure modes to help improve model reliability and performance.",
      ],
    }
  ],
  projects: [
    {
      name: "Nerdvana",
      summary: "A mock e-commerce website to simulate buying pop-culture items.",
      linkPreview: "https://nerdvana-eight.vercel.app/",
      linkSource: "https://github.com/DJVelz/Nerdvana",
      image: "/nerdvana.png",
    },
    {
      name: "Orlando TechShare",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "PlayStats",
      summary: "A python script that analyzes the top 100 most played games on Steam.",
      linkPreview: "https://github.com/DJVelz/PlayStats",
      linkSource: "https://github.com/DJVelz/PlayStats",
      image: "/playstats.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Dereck Velez, a passionate Software Developer focused on building practical, user-driven applications. I work primarily with Java, Python, and modern JavaScript frameworks, and I enjoy taking projects from idea to working product. I’m especially interested in full-stack development, system design at a small scale, and learning how real-world software evolves through iteration and feedback.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
