import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "First-Draft Grades in Minutes: How the Checkmark Autograder Works",
  description: "The autograder scores every submission against the teacher's own rubric — with written justifications and quote-anchored feedback — then waits. Nothing reaches a student until the teacher edits, approves, and publishes.",
  keywords: [],
  openGraph: {
    images: ["/images/services/report-grading-view.png"],
  },
};

export const meta = {
  title: "First-Draft Grades in Minutes: How the Checkmark Autograder Works",
  description: "The autograder scores every submission against the teacher's own rubric — with written justifications and quote-anchored feedback — then waits. Nothing reaches a student until the teacher edits, approves, and publishes.",
  "opengraph-image": "/images/services/report-grading-view.png",
  date: "07-16-2026",
  readTime: "~7 min read",
  category: "Product",
  categories: ["Product"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>Teachers do not need convincing that grading essays eats evenings and weekends — we have <a href="/blogs">written about the numbers</a> before. The real question about AI grading tools is not whether they save time. It is whether the time saved comes at the cost of the two things a grade has to be: accurate to the rubric, and owned by the teacher. Here is how Checkmark’s autograder is built around that question.</p>
<h2>It grades your rubric, not ours</h2>
<p>The autograder has no house rubric. It scores each submission against the criteria the teacher attached to the assignment, and those criteria can arrive however you have them:</p>
<ul>
<li><strong>Built in the app</strong> — a rubric builder with criteria, rating levels, and live point totals, structured the way Canvas rubrics are.</li>
<li><strong>Uploaded</strong> — an existing rubric as a document, or even a photo of a paper rubric; Checkmark normalizes it into gradable criteria.</li>
<li><strong>Reused</strong> — a Rubrics Library keeps everything you have made, ready to duplicate and attach across courses and terms.</li>
<li><strong>Synced</strong> — Canvas, Buzz, and Google Classroom assignments bring their rubrics along automatically. Buzz rubrics are converted from their native format on the way in.</li>
</ul>
<h2>Scores that show their work</h2>
<p>When a submission is analyzed, each rubric category gets its own score out of its own point value — Thesis Statement 7/10, Evidence &amp; Support 8/10 — never one opaque total. Every score comes with a written justification tied to what the student actually wrote, and the report adds feedback items anchored to specific quotes in the essay: click one and the essay scrolls to the sentences it refers to.</p>
<img src="/images/services/report-grading-view.png" alt="The Checkmark grading view: per-criterion scores with written justifications, and quote-anchored feedback cards beside the essay" />
<p>The justifications are the part teachers tell us changes the workflow. A bare score still forces you to re-read the essay to decide whether you agree. A paragraph of reasoning — referencing the student’s own thesis, examples, and transitions — lets you audit the grade in seconds and correct it in one click where you disagree.</p>
<h2>The teacher is the pipeline, not a step in it</h2>
<p>Everything the autograder produces is a draft. In the grading view, every score has a pencil next to it; every justification is editable; feedback items can be rewritten, recategorized, or deleted. Select any text in the essay and click <em>Add Feedback</em> to leave your own quote-anchored comment alongside the machine’s.</p>
<p>And none of it is visible to students until the teacher publishes. Publishing snapshots exactly what you approved — the scores and feedback as you left them, not as the model first wrote them. There is no mode where the autograder grades a class on its own.</p>
<h2>Grades land where your gradebook lives</h2>
<p>Publishing is LMS-aware. Canvas assignments get a <em>Push to Canvas</em> button that sends the score into SpeedGrader; Buzz assignments push back into Buzz grading; Google Classroom assignments sync to Classroom; web-app assignments publish inside Checkmark. A bulk publish flow on each assignment page shows which submissions have scores, which are already published, and which have unpublished changes — then pushes the whole set at once.</p>
<img src="/images/services/report-rubric-tiles.png" alt="Per-criterion autograder score tiles across the top of a Checkmark report" />
<h2>Grading next to integrity, on purpose</h2>
<p>The autograder shares a report with plagiarism, AI, and writing-process analysis, and that adjacency is the point. Reading a justification for an Evidence &amp; Support score while the same page shows an uncited-source card changes the feedback you write. Seeing strong scores alongside a clean writing process is, for most submissions, the fastest possible confirmation that everything here is fine — which is what most submissions deserve.</p>
<p>The mechanics, end to end, are in our <a href="/teacher-support/autograder-and-rubrics">Autograder &amp; Rubrics guide</a>, and the service overview lives at <a href="/services/autograder">AI Autograder &amp; Rubrics</a>. Or watch it grade something real: the <a href="/demo">live demo</a> scores a sample essay against a rubric and writes out its reasoning while you wait.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="blogs"
      currentSlug="2026/7/how-the-checkmark-autograder-drafts-grades-teachers-control"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
