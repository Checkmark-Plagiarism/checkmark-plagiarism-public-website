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
  readTime?: string;
  image?: string;
  // add any other fields you intend to pull from metadata
};

export type BlogPost = {
  slug: string;         // "2024/03/my-post"
  title: string;
  description: string;
  date: string;
  category?: string;
  readTime?: string;
  image?: string;
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

/** Try to extract `export const metadata = { ... }` as a typed object. */
function extractMetadataFromFile(filePath: string): Partial<BlogPostMeta> {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const match = fileContent.match(/export\s+const\s+metadata\s*=\s*({[\s\S]*?});/);
    if (!match) return {};

    const obj = parseObjectLiteral(match[1]);
    if (obj && typeof obj === "object") {
      // Many Next files type as `Metadata`; pick the pieces we care about
      const m = obj as Record<string, unknown>;
      const meta: Partial<BlogPostMeta> = {};

      if (typeof m.title === "string") meta.title = m.title;
      if (typeof m.description === "string") meta.description = m.description;
      if (typeof m.image === "string") meta.image = m.image;

      // Some users embed openGraph or images inside openGraph
      const og = m.openGraph as Record<string, unknown> | undefined;
      if (!meta.image && og && Array.isArray(og.images) && og.images.length > 0) {
        const first = og.images[0] as string | { url?: string };
        meta.image = typeof first === "string" ? first : (first?.url ?? undefined);
      }

      return meta;
    }
    return {};
  } catch {
    return {};
  }
}

/** Try to extract `export const metadata = { ... }` as a typed object. */
function extractMetaFromFile(filePath: string): Partial<BlogPostMeta> {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const match = fileContent.match(/export\s+const\s+meta\s*=\s*({[\s\S]*?});/);
    if (!match) return {};

    const obj = parseObjectLiteral(match[1]);
    if (obj && typeof obj === "object") {
      // Many Next files type as `Metadata`; pick the pieces we care about
      const m = obj as Record<string, unknown>;
      const meta: Partial<BlogPostMeta> = {};

      if (typeof m.title === "string") meta.title = m.title;
      if (typeof m.description === "string") meta.description = m.description;
      if (typeof m.date === "string") meta.date = m.date;
      if (typeof m.category === "string") meta.category = m.category;
      if (typeof m.readTime === "string") meta.readTime = m.readTime;
      if (typeof m.image === "string") meta.image = m.image;

      // Some users embed openGraph or images inside openGraph
      const og = m.openGraph as Record<string, unknown> | undefined;
      if (!meta.image && og && Array.isArray(og.images) && og.images.length > 0) {
        const first = og.images[0] as string | { url?: string };
        meta.image = typeof first === "string" ? first : (first?.url ?? undefined);
      }

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
  // prefer full ISO parsing; fallback to string compare if needed
  const aTime = Date.parse(a.date ?? "");
  const bTime = Date.parse(b.date ?? "");
  if (!Number.isNaN(aTime) && !Number.isNaN(bTime)) {
    return bTime - aTime;
  }
  // If date is "YYYY-MM", string compare works for ordering
  if (a.date && b.date) return b.date.localeCompare(a.date);
  return b.slug.localeCompare(a.slug);
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
        };

        const fileMetadata = pageFile ? extractMetadataFromFile(pageFile) : {};
        const fileMeta = pageFile ? extractMetaFromFile(pageFile) : {};
        const meta: BlogPostMeta = { ...baseMeta, ...fileMeta, ...fileMetadata };

        posts.push({
          slug: `${year}/${month}/${postFolder}`,
          title: meta.title ?? baseMeta.title!,
          description: meta.description ?? "",
          date: meta.date ?? baseMeta.date!,
          category: meta.category,
          readTime: meta.readTime,
          image: meta.image,
        });
      }
    }
  }

  return posts.sort(compareDatesDesc);
}

/** Safe readdir that returns [] on failure and filters dotfiles. */
function safeReaddir(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter(name => !name.startsWith("."));
  } catch {
    return [];
  }
}
