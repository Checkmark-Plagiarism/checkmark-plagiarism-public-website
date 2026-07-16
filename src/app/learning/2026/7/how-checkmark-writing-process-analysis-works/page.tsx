import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Checkmark's Writing Process Analysis Works",
  description: "Plain-English explainer: where writing-process data comes from, what Playback actually replays, how paste and transcription events are detected, and why process evidence is the hardest signal to fake.",
  keywords: [],
  openGraph: {
    images: ["/images/services/report-paste-evidence.png"],
  },
};

export const meta = {
  title: "How Checkmark's Writing Process Analysis Works",
  description: "Plain-English explainer: where writing-process data comes from, what Playback actually replays, how paste and transcription events are detected, and why process evidence is the hardest signal to fake.",
  "opengraph-image": "/images/services/report-paste-evidence.png",
  date: "07-16-2026",
  readTime: "~6 min read",
  category: "How It Works",
  categories: ["How It Works", "Detection"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>Most integrity tools analyze a finished document. Checkmark also analyzes how the document got finished. This explainer covers what that means concretely: where the data comes from, what the report shows, and what it can and cannot tell you.</p>
<h2>The core idea: provenance over prose</h2>
<p>A finished essay is easy to launder. Paraphrasing tools rewrite copied text until it slips past matchers; so-called humanizers rewrite AI output until detectors shrug. What none of these tools can rewrite is the writing session itself — the sequence of keystrokes, edits, pauses, and pastes that produced the document. If 900 words appeared in a single paste at 11:42 PM, that fact survives any amount of after-the-fact editing.</p>
<p>Checkmark reconstructs that sequence — we call it the changelog — and derives its process signals from it.</p>
<h2>Where the changelog comes from</h2>
<p>There is no spyware in this story: process data comes from how the student writes, through channels they already use.</p>
<ul>
<li><strong>Google Docs.</strong> When a student submits a Doc from their own Drive, its revision history comes with it — the drafting timeline Google has been recording all along.</li>
<li><strong>Typed-in editors.</strong> Assignments in Canvas and Buzz can embed a Checkmark essay box. Students just type; the editor records the session as it happens.</li>
<li><strong>Word documents.</strong> DOCX files written with Checkmark’s editor tooling carry their edit history inside the file. A plain DOCX without it still gets full plagiarism and AI analysis — the process tiles simply read N/A.</li>
</ul>
<p>That last point is a design choice worth naming: when the data is not there, the report says N/A. It does not guess.</p>
<h2>What the report derives from it</h2>
<p>Four things, mainly.</p>
<p><strong>External Paste events.</strong> Content that entered the document in one jump, from outside it. Each paste is recorded with a timestamp and the complete original pasted text — preserved even if the student edits every sentence afterward. In the report, each paste is an evidence card with the original text expandable in place.</p>
<p><strong>Transcription.</strong> Typing that mirrors an existing source — retyping from a phone, a second monitor, or dictation — does not look like drafting. Real composition is bursty: it pauses, backtracks, deletes, and rewrites. Transcription is steady and linear. The report flags stretches of typed-but-copied text as Transcribed, with their own cards and their own tile.</p>
<p><strong>Uncited and AI context.</strong> Process signals sit in the same report as source matching and AI detection, so each finding can corroborate — or complicate — the others. An AI-flagged passage that was visibly drafted and revised over forty minutes deserves a different conversation than one that arrived in a single paste.</p>
<p><strong>Playback.</strong> The whole session is replayable. One button re-types the essay in front of you at 1x to 8x speed with a scrubber; every paste card has a play button that jumps the replay to just before the paste landed.</p>
<img src="/images/services/report-originality-tiles.png" alt="Checkmark report tiles showing Pasted, Transcribed, Uncited, and AI totals, with the Playback button" />
<h2>What it cannot tell you</h2>
<p>Honesty about limits is part of how this tool is meant to be used.</p>
<ul>
<li>Process analysis cannot see work done entirely outside a tracked surface — an essay drafted in an untracked app and pasted in arrives as exactly that: one large paste. That is a signal to ask about, not proof of misconduct.</li>
<li>A paste is not a verdict. Students paste their own text moved from another document, quotes they intend to cite, and outlines they wrote themselves. The report preserves what was pasted precisely so a teacher can tell these apart.</li>
<li>Typing steadily is not a crime. Transcription flags describe a pattern; the teacher supplies the context.</li>
</ul>
<p>This is why every process signal in Checkmark is presented as evidence with receipts, not as an accusation score — and why flag statuses in the report are visible to teachers only.</p>
<h2>Why this protects honest students</h2>
<p>The same evidence that exposes shortcuts vindicates real work. A student falsely flagged by an AI detector — any AI detector — has, in their revision history, the strongest rebuttal that exists: the visible record of their own drafting. We built the report so that record is one click away, every time.</p>
<p>See it in the product on our <a href="/services/writing-process">Writing Process Analysis</a> page, walk through a full report in the <a href="/teacher-support/reading-the-report">teacher guide</a>, or <a href="/demo">try the live demo</a>.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/7/how-checkmark-writing-process-analysis-works"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
