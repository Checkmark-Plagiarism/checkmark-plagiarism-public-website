import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { getAllBlogPosts, type BlogPost } from "@/lib/blog";

// Category pill tints, drawn from the site palette.
const CAT: Record<string, { bg: string; fg: string }> = {
  Education: { bg: "var(--accent-soft)", fg: "var(--accent-deep)" },
  Technology: { bg: "var(--teal-soft)", fg: "var(--teal)" },
  Teaching: { bg: "var(--yellow-soft)", fg: "var(--accent-deep)" },
  Parents: { bg: "var(--coral-soft)", fg: "var(--accent-deep)" },
  "AI Research": { bg: "var(--surface-2)", fg: "var(--ink-soft)" },
};

// Posts store dates as "MM-DD-YYYY" (e.g. "05-08-2026"); render as "May 8, 2026".
function formatDate(d: string): string {
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function Card({ post }: { post: BlogPost }) {
  const cats = post.categories?.length ? post.categories : post.category ? [post.category] : [];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="blog-card flex flex-col no-underline text-inherit bg-bg-elev border border-line rounded-[18px] overflow-hidden shadow-sm"
    >
      <div className="relative aspect-[16/10] bg-surface-2 overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 920px) 100vw, 33vw"
            className="blog-card-img object-cover"
          />
        ) : null}
      </div>
      <div className="px-[22px] pt-5 pb-[22px] flex flex-col flex-1">
        {cats.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-[13px]">
            {cats.map((c) => {
              const t = CAT[c] || CAT["AI Research"];
              return (
                <span
                  key={c}
                  className="text-[11px] font-bold font-mono tracking-[0.03em] uppercase px-[9px] py-1 rounded-full"
                  style={{ background: t.bg, color: t.fg } as CSSProperties}
                >
                  {c}
                </span>
              );
            })}
          </div>
        )}
        <h3 className="blog-card-title text-[20px] leading-[1.28] font-semibold text-ink mt-0 mb-2.5 tracking-[-0.01em] text-pretty transition-colors line-clamp-3">
          {post.title}
        </h3>
        <p className="text-sm leading-[1.55] text-ink-soft m-0 line-clamp-3">{post.description}</p>
        <div className="mt-auto pt-4 flex items-center gap-2.5">
          <span className="text-[12.5px] font-mono text-ink-mute">{formatDate(post.date)}</span>
          {post.readTime && (
            <>
              <span className="w-[3px] h-[3px] rounded-full bg-ink-mute opacity-60" />
              <span className="text-[12.5px] font-mono text-ink-mute">{post.readTime}</span>
            </>
          )}
          <span
            className="blog-card-arrow ml-auto text-[13px] font-semibold inline-flex items-center gap-1 transition-transform"
            style={{ color: "var(--accent)" }}
          >
            Read <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function Blog() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section id="blog" className="py-[100px]">
      <div className="shell">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-[640px]">
            <div className="eyebrow mb-[18px]">
              <span className="dot" />
              From the blog
            </div>
            <h2 className="display text-[clamp(34px,4.4vw,52px)] mt-0 mb-4 text-balance">
              The latest on AI, <em className="font-display italic text-teal">writing</em>, and integrity.
            </h2>
            <p className="text-[18px] text-ink-soft m-0 text-pretty">
              Research, classroom reality, and where AI is taking student writing next.
            </p>
          </div>
          <Link href="/blog" className="btn btn-ghost whitespace-nowrap">
            View all posts <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <Card key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
