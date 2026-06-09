import Image from "next/image";
import type { CSSProperties } from "react";

const BASE = "https://checkmarkplagiarism.com/blog/";

type Post = {
  title: string;
  desc: string;
  date: string;
  read: string;
  cats: string[];
  img: string;
  url: string;
};

const POSTS: Post[] = [
  {
    title: "The Canvas Breach Should Change How Schools Buy Their Next AI Tool",
    desc: "ShinyHunters hit 9,000 schools and exposed years of student messages. The breach should reshape how every district vets its next AI vendor contract.",
    date: "May 8, 2026",
    read: "9 min read",
    cats: ["Education", "Technology"],
    img: "/redesign/blog/canvas-breach.jpg",
    url: BASE + "2026/5/the-canvas-breach-should-change-how-schools-buy-their-next-ai-tool",
  },
  {
    title: "Oral Exams Are the Wrong Way Out of the AI Cheating Crisis",
    desc: "Schools pivoting to oral exams to beat AI cheating are swapping forensic guesswork for performance bias, and exporting the cost to the students already struggling.",
    date: "May 7, 2026",
    read: "9 min read",
    cats: ["Education", "Teaching"],
    img: "/redesign/blog/oral-exams.jpg",
    url: BASE + "2026/5/oral-exams-are-the-wrong-way-out-of-the-ai-cheating-crisis",
  },
  {
    title: "Is AI Helping or Hurting My Child’s Learning?",
    desc: "An exploration of the dual nature of AI in education, balancing the promise of personalized tutoring with the risks of cognitive offloading and the illusion of understanding.",
    date: "Mar 23, 2026",
    read: "8 min read",
    cats: ["Education", "Parents"],
    img: "/redesign/blog/ai-helping.jpg",
    url: BASE + "2026/3/is-ai-helping-or-hurting",
  },
];

const CAT: Record<string, { bg: string; fg: string }> = {
  Education: { bg: "var(--accent-soft)", fg: "var(--accent-deep)" },
  Technology: { bg: "var(--teal-soft)", fg: "var(--teal)" },
  Teaching: { bg: "var(--yellow-soft)", fg: "var(--accent-deep)" },
  Parents: { bg: "var(--coral-soft)", fg: "var(--accent-deep)" },
  "AI Research": { bg: "var(--surface-2)", fg: "var(--ink-soft)" },
};

function Card({ post }: { post: Post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-card flex flex-col no-underline text-inherit bg-bg-elev border border-line rounded-[18px] overflow-hidden shadow-sm"
    >
      <div className="relative aspect-[16/10] bg-surface-2 overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="(max-width: 920px) 100vw, 33vw"
          className="blog-card-img object-cover"
        />
      </div>
      <div className="px-[22px] pt-5 pb-[22px] flex flex-col flex-1">
        <div className="flex items-center gap-2 flex-wrap mb-[13px]">
          {post.cats.map((c) => {
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
        <h3 className="blog-card-title text-[20px] leading-[1.28] font-semibold text-ink mt-0 mb-2.5 tracking-[-0.01em] text-pretty transition-colors line-clamp-3">
          {post.title}
        </h3>
        <p className="text-sm leading-[1.55] text-ink-soft m-0 line-clamp-3">{post.desc}</p>
        <div className="mt-auto pt-4 flex items-center gap-2.5">
          <span className="text-[12.5px] font-mono text-ink-mute">{post.date}</span>
          <span className="w-[3px] h-[3px] rounded-full bg-ink-mute opacity-60" />
          <span className="text-[12.5px] font-mono text-ink-mute">{post.read}</span>
          <span
            className="blog-card-arrow ml-auto text-[13px] font-semibold inline-flex items-center gap-1 transition-transform"
            style={{ color: "var(--accent)" }}
          >
            Read <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </a>
  );
}

export function Blog() {
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
          <a
            href="https://checkmarkplagiarism.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost whitespace-nowrap"
          >
            View all posts <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="blog-grid">
          {POSTS.map((post) => (
            <Card key={post.url} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
