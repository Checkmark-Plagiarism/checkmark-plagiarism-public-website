import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "What an AI Score Can — and Can't — Tell You",
  description: "How Checkmark's AI detection presents its results: passage-level findings, a calibrated confidence gradient instead of a fake-precision number, N/A guardrails for short texts, and process evidence to check the score against.",
  keywords: [],
  openGraph: {
    images: ["/images/services/report-breakdown-sidebar.png"],
  },
};

export const meta = {
  title: "What an AI Score Can — and Can't — Tell You",
  description: "How Checkmark's AI detection presents its results: passage-level findings, a calibrated confidence gradient instead of a fake-precision number, N/A guardrails for short texts, and process evidence to check the score against.",
  "opengraph-image": "/images/services/report-breakdown-sidebar.png",
  date: "07-16-2026",
  readTime: "~6 min read",
  category: "Detection",
  categories: ["Detection", "How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>We build an AI detector, so take this from the people with every incentive to oversell one: an AI score, by itself, should never end a conversation about a student’s work. The interesting question is what a score <em>can</em> responsibly do — and how a report has to be built for it to do that. This post explains the choices behind Checkmark’s AI detection.</p>
<h2>What the detector actually measures</h2>
<p>AI detectors are pattern classifiers. They measure how strongly a passage resembles the statistical patterns of machine-generated prose versus human drafting. That resemblance is real, measurable signal — and it is also probabilistic. Fluent human writers sometimes pattern like machines; lightly edited AI output sometimes patterns like people. Any tool that turns this into a confident yes/no is misrepresenting what it knows.</p>
<h2>Choice one: passage-level, not paper-level</h2>
<p>A single document-wide percentage invites the worst misreading — “this essay is 62% AI” — when the true situation is usually “these three paragraphs look AI-like and the rest doesn’t.” Checkmark underlines specific passages in the essay, each with its own evidence card in the report sidebar. Teachers see <em>which parts</em>, not just <em>how much</em>, which changes what they can do next: read the flagged paragraphs, compare them with the student’s usual voice, and check how they were written.</p>
<img src="/images/services/report-breakdown-sidebar.png" alt="Checkmark report sidebar showing AI Detection cards with confidence sliders alongside paste and plagiarism findings" />
<h2>Choice two: a gradient, not a decimal</h2>
<p>Each AI card shows a confidence slider between typical human writing patterns and typical AI patterns. We use a gradient deliberately: a slider communicates “strong signal, weigh it” where a number like 87.3% communicates a precision the underlying science does not have. And the card carries a permanent disclaimer, verbatim: <em>“Typical AI writing pattern versus typical human writing styles. Do not solely rely on this score to determine AI authorship.”</em> That sentence is not legal boilerplate. It is the correct way to use every AI detector on the market, including ours.</p>
<h2>Choice three: N/A beats a guess</h2>
<p>Short texts do not contain enough signal for reliable AI classification. Below roughly 150 words, Checkmark’s AI tile reads <strong>N/A</strong> — with a tooltip saying exactly why — rather than reporting a number we would not defend. The same guardrail applies to our transcription and uncited-source analyses at their own thresholds. If a detector never tells you “not enough data,” it is telling you something else: that it will always produce a number, whether or not the number means anything.</p>
<h2>Choice four: a second, independent signal</h2>
<p>The strongest check on an AI score is not a better AI score — it is evidence of a different kind. Checkmark’s reports pair every AI finding with writing-process analysis: paste events with the original pasted text preserved, transcription patterns, and a Playback that replays the session keystroke by keystroke. The combinations are what carry meaning:</p>
<ul>
<li><strong>AI-flagged passage + arrived in one paste + no drafting:</strong> a clear picture worth a conversation.</li>
<li><strong>AI-flagged passage + visible drafting, revision, and typo-fixing over 40 minutes:</strong> most likely a false positive — and the student has the receipts.</li>
<li><strong>Low AI score + heavy transcription:</strong> the detector was never the right question; the process was.</li>
</ul>
<p>This is also the honest answer to humanizer tools. Rewriting AI output can move the AI score; it cannot retroactively create a writing session that never happened.</p>
<h2>What this means in practice</h2>
<p>For teachers: treat the AI tile as a reason to look, never as a verdict. Open the flagged passages, check the process evidence, and use the report’s private flag statuses (Flagged, Resolved, Not Flagged) to track follow-ups — students never see the flags.</p>
<p>For students: your drafting history is your best protection. Writing in Google Docs or a tracked editor means a false flag can be answered with the strongest evidence there is — the visible record of you doing the work.</p>
<p>More on the mechanics: <a href="/services/ai-detection">AI Writing Detection</a> and <a href="/services/writing-process">Writing Process Analysis</a>. Or <a href="/demo">run your own text through the demo</a> and read the report it produces.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/7/what-an-ai-score-can-and-cant-tell-you"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
