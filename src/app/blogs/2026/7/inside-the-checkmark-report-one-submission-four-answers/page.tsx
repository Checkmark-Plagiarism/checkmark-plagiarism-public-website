import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "Inside the Checkmark Report: One Submission, Four Answers",
  description: "A guided tour of the report teachers see for every submission: what was pasted, what was transcribed, what matches a source, and what looks AI-written — plus the autograder's draft grades.",
  keywords: [],
  openGraph: {
    images: ["/images/services/report-plagiarism-view.png"],
  },
};

export const meta = {
  title: "Inside the Checkmark Report: One Submission, Four Answers",
  description: "A guided tour of the report teachers see for every submission: what was pasted, what was transcribed, what matches a source, and what looks AI-written — plus the autograder's draft grades.",
  "opengraph-image": "/images/services/report-plagiarism-view.png",
  date: "07-16-2026",
  readTime: "~7 min read",
  category: "Product",
  categories: ["Product"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>When a student submits an essay, a teacher usually has to assemble the story from scraps: a similarity score from one tool, an AI percentage from another, a gut feeling about whether the writing sounds like the student, and — if they are lucky — a peek at the document’s version history. Checkmark’s position has always been that these are not four separate investigations. They are four views of the same submission, and they belong in one report.</p>
<p>This post walks through that report, section by section, using our public example report. Everything shown here is the real product — you can <a href="https://teach.checkmarkplagiarism.com/example-report" target="_blank" rel="noopener noreferrer">open the interactive example</a> and click along.</p>
<h2>The tiles: a one-glance summary</h2>
<p>The top of every report shows an Overall score and four totals:</p>
<ul>
<li><strong>Pasted</strong> — content pasted into the document from outside it, captured as it happened.</li>
<li><strong>Transcribed</strong> — text typed while copying from another source: steady, linear, and unlike natural drafting.</li>
<li><strong>Uncited</strong> — passages that lean on a source without citing it.</li>
<li><strong>AI</strong> — text whose patterns resemble AI generation rather than human drafting.</li>
</ul>
<img src="/images/services/report-originality-tiles.png" alt="The Checkmark report tiles: Overall, Total Pasted, Total Transcribed, Total Uncited, Total AI, and the Playback button" />
<p>Two details matter here. First, the four totals are kept separate on purpose — a 40% pasted essay and a 40% AI essay are different problems with different conversations attached. Second, when a submission is too short for a detector to run reliably, its tile reads <em>N/A</em> rather than reporting a number we would not stand behind.</p>
<h2>Highlights and evidence cards, linked both ways</h2>
<p>Below the tiles, the essay itself is displayed with each finding highlighted in place — pasted text, transcription, uncited references, and AI-flagged passages each get their own style. The right-hand sidebar, the Plagiarism Breakdown, holds one card per finding. Click a highlight and its card scrolls into view; click a card and the essay scrolls to the passage. Evidence stays attached to context, which is what makes it usable in a conversation with a student or a parent.</p>
<h2>Plagiarism cards show their sources</h2>
<p>Expand <em>Show quote</em> on a plagiarism card and you get the matched passage in full, the similarity score for that specific match, and a link to the source. When the matching source is another student’s work rather than a web page, the card says so plainly.</p>
<img src="/images/services/report-source-quote.png" alt="A plagiarism evidence card expanded to show the matched quote and a link to the original source" />
<h2>Paste cards keep the receipt</h2>
<p>External Paste cards record when content entered the document in one jump — and they preserve the complete original pasted text. A student can rework every sentence afterward; the card still shows exactly what arrived and when. Each paste card also carries a play button that rewinds the report’s Playback to just before the paste landed, so you can watch it happen in context.</p>
<img src="/images/services/report-paste-evidence.png" alt="An External Paste card expanded to show the full original pasted text" />
<h2>Playback: the writing session, replayed</h2>
<p>The Playback button at the top of the report opens a player that re-types the essay in front of you — pauses, deletions, rewrites, and pastes included — at anywhere from 1x to 8x speed, with a scrubber for jumping straight to the moment that matters. Process data comes from Google Docs revision histories, from typed-in essay editors in Canvas and Buzz, and from Word documents written with Checkmark’s editor tooling. It is the part of the report no paraphrasing tool can launder, and we have written before about why that matters more every year.</p>
<h2>The grading view: draft grades, not final ones</h2>
<p>The report’s second row of tiles belongs to the autograder. If the assignment has a rubric attached, every submission arrives with per-criterion scores, a written justification for each, and feedback items anchored to specific quotes in the essay. Teachers edit any of it inline, add their own feedback by selecting text, and nothing is visible to students until the teacher publishes. On Canvas, Buzz, and Google Classroom assignments, publishing pushes the grade back into the LMS gradebook.</p>
<img src="/images/services/report-grading-view.png" alt="The grading view of the report: per-criterion scores with justifications, and quote-anchored feedback cards" />
<h2>Why one report instead of four tools</h2>
<p>The integrity conversation goes better when the evidence agrees. An AI flag alone is an accusation waiting for a rebuttal; an AI flag on a passage that also arrived as a single paste, in a session with no drafting, is a picture. In the other direction, a visible history of authentic drafting is the strongest protection an honest student can have against a false positive — and it lives in the same report.</p>
<p>If you want the deeper dive on any piece, we have a service page for each: <a href="/services/plagiarism-detection">plagiarism detection</a>, <a href="/services/ai-detection">AI detection</a>, <a href="/services/writing-process">writing process analysis</a>, and the <a href="/services/autograder">autograder</a>. Or skip the reading and <a href="/demo">run an essay through the live demo</a> — the report you get back is the one described above.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="blogs"
      currentSlug="2026/7/inside-the-checkmark-report-one-submission-four-answers"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
