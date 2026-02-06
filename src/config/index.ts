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
      linkPreview: "/https://nerdvana-eight.vercel.app/",
      linkSource: "/https://github.com/DJVelz/Nerdvana",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
