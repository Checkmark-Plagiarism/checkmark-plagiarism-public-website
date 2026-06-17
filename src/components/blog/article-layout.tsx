// src/components/blog/article-layout.tsx
// Server component. The shared shell for every article page across all three
// sections. Existing hand-written articles AND the TeamHub-generated pages both
// render <ArticleLayout> with their body passed as the <article> child, so the
// two stay structurally identical and "related articles" is automatic.
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";
import RelatedArticles from "@/components/blog/related-articles";
import { SECTION_META } from "@/lib/sections";
import type { Section } from "@/lib/blog";

export type ArticleMeta = {
  title: string;
  description: string;
  "opengraph-image": string;
  date: string;
  readTime: string;
  category?: string;
  categories?: string[];
  author: string;
};

type ArticleLayoutProps = {
  meta: ArticleMeta;
  section: Section;
  /** Section-relative slug, e.g. "2026/2/schools-are-...". Used to exclude self from Related. */
  currentSlug: string;
  /** The article body — pass the full <article className="lg:col-span-3 ..."> element. */
  children: React.ReactNode;
  /** `?ref=<category>` carried through for the "Back to …" CTA. */
  refValue?: string;
};

export default function ArticleLayout({
  meta,
  section,
  currentSlug,
  children,
  refValue,
}: ArticleLayoutProps) {
  const { basePath, label } = SECTION_META[section];
  const categories =
    meta.categories && meta.categories.length > 0
      ? meta.categories
      : meta.category
        ? [meta.category]
        : [];

  return (
    <main className="bg-background text-foreground">
      {/* Article Header */}
      <section className="pt-24 pb-10 border-b border-border">
        <div className="container mx-auto px-4">
          <Link
            href={basePath}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {label}
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
              {categories.map((cat, index) => (
                <span key={index} className={`px-2 py-1 rounded-full text-xs ${getCategoryVariant(cat)}`}>
                  {cat}
                </span>
              ))}
              <span aria-hidden>•</span>
              <time className="tabular-nums" dateTime={new Date(meta.date).toISOString()}>
                {meta.date}
              </time>
              <span aria-hidden>•</span>
              <span>{meta.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{meta.title}</h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-8">
              {meta.description}
            </p>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium">{meta.author}</span>
              </div>

              <Button variant="outline" size="sm" className="shrink-0">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <figure className="aspect-video bg-muted rounded-xl overflow-hidden ring-1 ring-border/60">
              <Image
                src={meta["opengraph-image"]}
                alt={meta.title}
                height={720}
                width={1280}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {children}

              <aside className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Article Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{meta.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{meta.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{meta.author}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-medium mb-3">Share this article</h4>
                      <Button variant="outline" size="sm" className="w-full">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles section={section} currentSlug={currentSlug} categories={categories} />

      {/* Back to section CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href={`${basePath}${refValue ? `?category=${encodeURIComponent(refValue)}#categories` : "#categories"}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
