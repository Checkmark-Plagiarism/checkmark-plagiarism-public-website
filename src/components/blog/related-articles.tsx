// src/components/blog/related-articles.tsx
// Server component. Renders preview-card links to other articles at the bottom
// of an article page. Prefers posts in the same section that share a category,
// then fills remaining slots with the most recent posts in that section.
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";
import { getPostsForSection, type BlogPost, type Section } from "@/lib/blog";
import { SECTION_META } from "@/lib/sections";

type RelatedArticlesProps = {
  section: Section;
  currentSlug: string;          // e.g. "2026/2/schools-are-..."
  categories?: string[];        // current article's categories
  basePath?: string;            // defaults to the section's basePath
  limit?: number;               // default 3
  title?: string;               // default "Related Articles"
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
  basePath,
  limit = 3,
  title = "Related Articles",
}: RelatedArticlesProps) {
  const resolvedBase = basePath ?? SECTION_META[section].basePath;
  const current = new Set(categories);

  // Candidates: every other post in this section (already sorted newest-first).
  const candidates = getPostsForSection(section).filter((p) => p.slug !== currentSlug);
  if (candidates.length === 0) return null;

  // Score by shared-category overlap; stable sort keeps newest-first within a tier.
  const scored = candidates
    .map((post) => ({
      post,
      score: postCategories(post).reduce((n, c) => (current.has(c) ? n + 1 : n), 0),
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
              return (
                <Link key={post.slug} href={`${resolvedBase}/${post.slug}`} className="group">
                  <Card className="h-full transition-shadow hover:shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
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
