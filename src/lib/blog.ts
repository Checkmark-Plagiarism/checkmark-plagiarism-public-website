// src/lib/blog.ts
import fs from "fs";
import path from "path";
import vm from "vm";

const BLOG_DIR = path.join(process.cwd(), "src/app/blog");

export type BlogPostMeta = {
  title?: string;
  description?: string;
  date?: string;        // expected ISO-like 'YYYY-MM' or 'YYYY-MM-DD'
  category?: string;
  categories?: string[]; // Add support for multiple categories
  readTime?: string;
  image: string;
};

export type BlogPost = {
  slug: string;         // "2024/03/my-post"
  title: string;
  description: string;
  date: string;
  category?: string;
  categories?: string[]; // Add support for multiple categories
  readTime?: string;
  image: string;
};

const POSSIBLE_FILES = ["page.js", "page.jsx", "page.ts", "page.tsx"] as const;

/** Narrow a path to a directory check with try/catch */
function isDir(p: string): boolean {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

/** Safe-ish parse for a JS object literal using a sandboxed VM. */
function parseObjectLiteral(source: string): unknown {
  // only allow JSON-like literals; disallow "import", "require", "process", etc.
  // This is still code execution, but in an empty sandbox w/ a short timeout.
  // It’s acceptable here because Next.js metadata is a plain object literal.
  const script = new vm.Script(`(${source})`, { filename: "metadata.literal.js" });
  return script.runInNewContext({}, { timeout: 100 });
}

/** Extract preferred OG image url if present. */
function pickOgImage(og: unknown): string | undefined {
  if (!og || typeof og !== "object") return;
  const obj = og as Record<string, unknown>;
  const imgs = obj.images;

  if (!imgs) return;
  if (typeof imgs === "string") return imgs;

  if (Array.isArray(imgs) && imgs.length > 0) {
    const first = imgs[0] as unknown;
    if (typeof first === "string") return first;
    if (first && typeof first === "object" && "url" in first) {
      const url = (first as { url?: string }).url;
      if (typeof url === "string") return url;
    }
  }
}

/** Safe string getter for arbitrary key on a generic object. */
function getStringProp(obj: Record<string, unknown>, key: string): string | undefined {
  const v = obj[key];
  return typeof v === "string" ? v : undefined;
}

/** Extract `export const metadata = { ... }` as a typed object, allowing `: Metadata`. */
function extractMetadataFromFile(filePath: string): Partial<BlogPostMeta> {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Allow optional type annotation like `export const metadata: Metadata = { ... };`
    const match = fileContent.match(
      /export\s+const\s+metadata(?:\s*:\s*[\w<>\[\]\s|.&]+)?\s*=\s*({[\s\S]*?});/
    );
    if (!match) return {};

    const obj = parseObjectLiteral(match[1]);
    if (obj && typeof obj === "object") {
      const m = obj as Record<string, unknown>;
      const meta: Partial<BlogPostMeta> = {};

      if (typeof m.title === "string") meta.title = m.title;
      if (typeof m.description === "string") meta.description = m.description;

      // Prefer OG image if present
      const ogImage = pickOgImage(m.openGraph);
      if (ogImage) meta.image = ogImage;

      // Fallback: top-level `image`
      const topLevelImage = getStringProp(m, "image");
      if (!meta.image && topLevelImage) meta.image = topLevelImage;

      return meta;
    }
    return {};
  } catch {
    return {};
  }
}

/** Extract `export const meta = { ... }` (your custom block). */
function extractMetaFromFile(filePath: string): Partial<BlogPostMeta> {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const match = fileContent.match(/export\s+const\s+meta\s*=\s*({[\s\S]*?});/);
    if (!match) return {};

    const obj = parseObjectLiteral(match[1]);
    if (obj && typeof obj === "object") {
      const m = obj as Record<string, unknown>;
      const meta: Partial<BlogPostMeta> = {};

      if (typeof m.title === "string") meta.title = m.title;
      if (typeof m.description === "string") meta.description = m.description;
      if (typeof m.date === "string") meta.date = m.date;
      if (typeof m.category === "string") meta.category = m.category;
      if (Array.isArray(m.categories)) meta.categories = m.categories;

      // Debug logging - remove after testing
      console.log("Raw metadata object:", m);
      console.log("Extracted category:", meta.category);
      console.log("Extracted categories:", meta.categories);
      console.log("---");

      if (typeof m.readTime === "string") meta.readTime = m.readTime;

      // Prefer OG image if present on custom meta (rare but supported)
      const ogImage = pickOgImage(m.openGraph);
      if (ogImage) meta.image = ogImage;

      // Legacy/custom field: "opengraph-image"
      if (!meta.image) {
        const legacyOg = getStringProp(m, "opengraph-image");
        if (legacyOg) meta.image = legacyOg;
      }

      // Fallback: top-level `image`
      const topLevelImage = getStringProp(m, "image");
      if (!meta.image && topLevelImage) meta.image = topLevelImage;

      return meta;
    }
    return {};
  } catch {
    return {};
  }
}

/** Normalize a folder name into a human title. */
function titleFromFolder(folder: string): string {
  return folder.replace(/[-_]+/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

/** Compare dates descending; fall back to slug compare. */
function compareDatesDesc(a: BlogPost, b: BlogPost): number {
  const aTime = Date.parse(a.date ?? "");
  const bTime = Date.parse(b.date ?? "");
  if (!Number.isNaN(aTime) && !Number.isNaN(bTime)) {
    return bTime - aTime;
  }
  if (a.date && b.date) return b.date.localeCompare(a.date);
  return b.slug.localeCompare(a.slug);
}

/** Safe readdir that returns [] on failure and filters dotfiles. */
function safeReaddir(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter(name => !name.startsWith("."));
  } catch {
    return [];
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  const years = safeReaddir(BLOG_DIR);
  for (const year of years) {
    const yearPath = path.join(BLOG_DIR, year);
    if (!isDir(yearPath)) continue;

    const months = safeReaddir(yearPath);
    for (const month of months) {
      const monthPath = path.join(yearPath, month);
      if (!isDir(monthPath)) continue;

      const postFolders = safeReaddir(monthPath);
      for (const postFolder of postFolders) {
        const postPath = path.join(monthPath, postFolder);
        if (!isDir(postPath)) continue;

        // Find first existing page.* file
        const pageFile = POSSIBLE_FILES
          .map(f => path.join(postPath, f))
          .find(p => fs.existsSync(p));

        // Default metadata
        const baseMeta: BlogPostMeta = {
          title: titleFromFolder(postFolder),
          description: "",
          date: `${year}-${month}`, // e.g., "2024-03"
          image: '',
        };

        const fileMetadata = pageFile ? extractMetadataFromFile(pageFile) : {};
        const fileMeta = pageFile ? extractMetaFromFile(pageFile) : {};

        // Prefer values from `meta`, but let `metadata` override `image` (OG) specifically
        // We’ll merge with `meta` first, then `metadata` so OG image wins by default.
        const merged: BlogPostMeta = { ...baseMeta, ...fileMeta, ...fileMetadata };

        posts.push({
          slug: `${year}/${month}/${postFolder}`,
          title: merged.title ?? baseMeta.title!,
          description: merged.description ?? "",
          date: merged.date ?? baseMeta.date!,
          category: merged.category,
          categories: merged.categories,
          readTime: merged.readTime,
          image: merged.image,
        });
      }
    }
  }

  return posts.sort(compareDatesDesc);
}
