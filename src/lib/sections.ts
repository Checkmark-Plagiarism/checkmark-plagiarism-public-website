// src/lib/sections.ts
// Single source of truth for the three content sections. Read by the listing
// pages, the article layout (back-links), and mirrored by the TeamHub article
// generator so categories/paths stay in sync across the two repos.
import type { Section } from "@/lib/blog";

export type SectionConfig = {
  basePath: string;          // "/research" | "/blogs" | "/learning"
  label: string;             // nav + back-link label
  heroTitle: string;
  heroSubtitle: string;
  categories: readonly string[]; // first entry is always "All"
};

export const SECTION_META: Record<Section, SectionConfig> = {
  research: {
    basePath: "/research",
    label: "Research",
    heroTitle: "AI & Education Research",
    heroSubtitle:
      "Deep, well-cited analysis of AI detection, academic trust, and the evolving role of artificial intelligence in education.",
    categories: ["All", "Teaching", "AI Research", "Technology", "Education", "Parents"],
  },
  blogs: {
    basePath: "/blogs",
    label: "Blogs",
    heroTitle: "The Checkmark Blog",
    heroSubtitle:
      "News, product updates, and quick takes on AI, education, and academic integrity.",
    categories: ["All", "News", "Product", "Industry", "Quick Takes"],
  },
  learning: {
    basePath: "/learning",
    label: "Learning",
    heroTitle: "Learning Center",
    heroSubtitle:
      "Plain-English explainers: how AI detection works, the types of AI, key definitions, and common misconceptions.",
    categories: ["All", "How It Works", "AI Basics", "Detection", "Misconceptions"],
  },
};

export function getSectionConfig(section: Section): SectionConfig {
  return SECTION_META[section];
}
