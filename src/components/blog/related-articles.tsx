// src/components/blog/related-articles.tsx
// Server component. Renders preview-card links to other articles at the bottom
// of an article page. Candidates are drawn from EVERY section (Research, Blogs,
// Learning) so an article can surface relevant reading of any type, not just its
// own. Posts that share a category rank highest, with a tiebreak preference for
// the article's own section, then most-recent.
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";
import { getAllPosts, type BlogPost, type Section } from "@/lib/blog";
import { SECTION_META } from "@/lib/sections";

type RelatedArticlesProps = {
  section: Section;
  currentSlug: string;          // e.g. "2026/2/schools-are-..."
  categories?: string[];        // current article's categories
  limit?: number;               // default 3
  title?: string;               // default "Related Articles"
  /** Restrict suggestions to the current section only. Defaults to false so
   *  Related Articles can link across Research, Blogs, and Learning. */
  sameSectionOnly?: boolean;
};

function postCategories(post: BlogPost): string[] {
  if (post.categories && post.categories.length > 0) return post.categories;
  if (post.category) return [post.category];
  return [];
}

export default function RelatedArticles({
  section,
  currentSlug,
  categories = [],
  limit = 3,
  title = "Related Articles",
  sameSectionOnly = false,
}: RelatedArticlesProps) {
  const current = new Set(categories);

  // Candidates: every other post across all sections (already sorted
  // newest-first), excluding the current article (matched by section + slug so a
  // shared slug in another section isn't dropped). Optionally narrow to the
  // current section only.
  const candidates = getAllPosts().filter(
    (p) =>
      !(p.section === section && p.slug === currentSlug) &&
      (!sameSectionOnly || p.section === section),
  );
  if (candidates.length === 0) return null;

  // Score by shared-category overlap (weighted heaviest) with a tiebreak bonus
  // for the article's own section; a stable sort keeps newest-first within a
  // tier. A cross-section article that shares a category still outranks an
  // unrelated same-section one, so all types can surface while staying relevant.
  const scored = candidates
    .map((post) => ({
      post,
      score:
        postCategories(post).reduce((n, c) => (current.has(c) ? n + 2 : n), 0) +
        (post.section === section ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score);

  const related = scored.slice(0, limit).map((s) => s.post);
  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((post) => {
              const cats = postCategories(post);
              const postBase = SECTION_META[post.section].basePath;
              return (
                <Link
                  key={`${post.section}/${post.slug}`}
                  href={`${postBase}/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-shadow hover:shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium">
                          {SECTION_META[post.section].label}
                        </span>
                        {cats.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className={`px-2 py-1 rounded-full text-xs ${getCategoryVariant(cat)}`}
                          >
                            {cat}
                          </span>
                        ))}
                        {post.readTime ? (
                          <>
                            <span aria-hidden>•</span>
                            <span>{post.readTime}</span>
                          </>
                        ) : null}
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </h3>
                      {post.description ? (
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {post.description}
                        </p>
                      ) : null}
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
