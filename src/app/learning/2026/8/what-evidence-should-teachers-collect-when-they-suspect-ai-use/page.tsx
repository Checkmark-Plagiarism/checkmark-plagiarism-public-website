import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "What Evidence Should Teachers Collect When They Suspect AI Use?",
  description: "A comprehensive checklist of multi-signal evidence teachers should collect when investigating suspected AI writing: prompts, baselines, playback, and conferences.",
  keywords: [
    "what evidence should teachers collect when they suspect AI use",
    "AI academic integrity evidence checklist",
    "documenting student AI writing misconduct",
    "essay writing playback evidence collection",
    "building an AI academic integrity case",
    "student writing baseline comparisons",
    "verifying citations and drafting history AI",
    "Checkmark multi-signal evidence",
  ],
  openGraph: {
    images: ["/images/services/report-breakdown-sidebar.png"],
  },
};

const meta = {
  title: "What Evidence Should Teachers Collect When They Suspect AI Use?",
  description: "A comprehensive checklist of multi-signal evidence teachers should collect when investigating suspected AI writing: prompts, baselines, playback, and conferences.",
  "opengraph-image": "/images/services/report-breakdown-sidebar.png",
  date: "08-14-2026",
  readTime: "~17 min read",
  category: "Teacher Guide",
  categories: ["Teacher Guide", "Detection", "How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p><strong>When a teacher suspects that a student used ChatGPT or another AI tool on an assignment, the strongest next step is usually not an accusation—it is evidence collection.</strong></p>

<p>A single AI detection score, a sudden improvement in writing, or an unusual document history can all justify a closer look. But none of those signals necessarily proves unauthorized AI use by itself. Teachers should instead collect multiple corroborating forms of evidence that answer three core questions:</p>

<ol className="list-decimal pl-6 space-y-1 my-3 font-medium text-foreground">
  <li>What is unusual about the submitted assignment?</li>
  <li>How was the assignment created?</li>
  <li>Does the student's explanation fit the available evidence and the course policy?</li>
</ol>

<p><strong>Checkmark Plagiarism</strong> supports this process with <a href="/services/ai-detection">AI detection</a>, <a href="/services/writing-playback">essay writing playback</a>, static AI detection, <a href="/services/plagiarism-detection">plagiarism detection</a>, <a href="/services/autograder">autograding</a>, and integrations with <a href="/services/integrations/canvas-lms">Canvas</a> and <a href="/services/integrations/google-classroom">Google Classroom</a>.</p>

<h2>Start With the Assignment Rules &amp; Syllabus Policy</h2>
<p>Before evaluating potential misconduct, review the explicit instructions given to students: Was AI prohibited? Was outlining allowed? Were grammar assistants permitted? Were drafts required to be preserved? Detecting AI involvement is only relevant when placed against the specific course policy boundaries.</p>

<h2>Key Categories of Evidence to Collect</h2>

<h3>1. Assignment &amp; Submission Records</h3>
<ul>
  <li><strong>The Original Prompt:</strong> Check whether the essay ignores classroom-specific constraints or answers a generic variation of the question.</li>
  <li><strong>The Submitted Work:</strong> Preserve the exact file submitted and mark specific passages of concern.</li>
  <li><strong>Objective Observations:</strong> Record concrete facts (<em>&quot;950 words appeared at once&quot;</em>) rather than premature conclusions (<em>&quot;ChatGPT wrote this&quot;</em>).</li>
</ul>

<h3>2. Detection &amp; Source Verification</h3>
<ul>
  <li><strong>AI Detection Reports:</strong> Note overall scores, highlighted sections, and sentence-level probability flags. Read more in <a href="/learning/2026/8/what-does-an-ai-detection-percentage-actually-mean">what does an AI detection percentage actually mean?</a></li>
  <li><strong>Plagiarism Results:</strong> Identify whether pasted content matches online databases or peer submissions.</li>
  <li><strong>Citation Verification:</strong> Check whether cited journals, authors, and quotes exist in academic databases. Hallucinated citations provide concrete objective evidence.</li>
</ul>

<h3>3. Writing Process &amp; Baselines</h3>
<ul>
  <li><strong>Previous Student Work:</strong> Gather comparable assignments to evaluate vocabulary, syntax, and analytical baselines. Read more in <a href="/learning/2026/8/how-can-i-compare-a-students-assignment-to-their-previous-writing">how can I compare a student's assignment to their previous writing?</a></li>
  <li><strong>Essay Writing Playback:</strong> Review drafting sessions, multi-paragraph insertions, deletions, and revision cycles over time.</li>
  <li><strong>Student-Provided Drafts:</strong> Collect any external Word documents, notes, or version logs provided by the student.</li>
</ul>

<h2>How Essay Writing Playback Enhances Evidence</h2>
<p><strong>Checkmark Plagiarism's essay writing playback</strong> allows teachers to examine how an assignment developed over time. Instead of relying on subjective impressions like <em>&quot;this sounds like AI,&quot;</em> educators can document: <strong>&quot;Approximately 800 words appeared in a single timestamp with zero subsequent edits.&quot;</strong> Read more in <a href="/learning/2026/7/how-checkmark-writing-process-analysis-works">how Checkmark writing process analysis works</a>.</p>

<h2>Conducting the Student Conference &amp; Documenting Responses</h2>
<p>Engage the student in a neutral, question-driven dialogue. Record specific statements: where the draft was written, how the thesis developed, and what writing or AI tools were used. Read our guide on <a href="/learning/2026/8/what-questions-should-i-ask-a-student-about-a-suspicious-assignment">what questions should I ask a student about a suspicious assignment?</a></p>

<h2>Distinguish Facts From Interpretations</h2>
<div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">Observable Fact (Document This)</p>
    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
      <li>&quot;950 words appeared in a single timestamp event.&quot;</li>
      <li>&quot;Two citations could not be found in academic indices.&quot;</li>
      <li>&quot;Student could not orally define key terms in paragraph 3.&quot;</li>
    </ul>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">Subjective Label (Avoid This)</p>
    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
      <li>&quot;The student pasted ChatGPT output.&quot;</li>
      <li>&quot;The AI invented fake sources.&quot;</li>
      <li>&quot;The paper is too good for this student.&quot;</li>
    </ul>
  </div>
</div>

<h2>A Practical Evidence Checklist for Suspected AI Use</h2>
<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border">
  <p className="font-bold text-foreground mb-3 text-base">A Practical Evidence Checklist for Suspected AI Use:</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div className="space-y-2">
      <p className="font-semibold text-foreground">Assignment &amp; Baselines</p>
      <ul className="space-y-1 list-disc pl-4 text-muted-foreground">
        <li>Original prompt, instructions, &amp; AI syllabus policy</li>
        <li>Preserved submitted essay file &amp; specific passages</li>
        <li>Multiple previous student writing baseline samples</li>
        <li>Documented stylistic divergence (syntax, vocabulary)</li>
      </ul>
    </div>
    <div className="space-y-2">
      <p className="font-semibold text-foreground">Process &amp; Authentication</p>
      <ul className="space-y-1 list-disc pl-4 text-muted-foreground">
        <li>Essay writing playback timeline logs &amp; paste timestamps</li>
        <li>Student-provided earlier drafts, outlines, &amp; notes</li>
        <li>Academic database citation verification results</li>
        <li>AI detection &amp; plagiarism source-match reports</li>
        <li>Detailed notes from neutral student conference</li>
      </ul>
    </div>
  </div>
</div>

<h2>How Checkmark Plagiarism Helps Teachers Collect Evidence</h2>
<p>Checkmark Plagiarism combines **AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and Canvas/Google Classroom integrations** to provide educators with a complete, objective body of evidence for academic integrity decisions.</p>

<h2>Frequently Asked Questions</h2>

<h3>What evidence should a teacher collect if they think a student used ChatGPT?</h3>
<p>Collect the assignment instructions, submitted work, AI detection results, previous student writing, writing history, source verification, plagiarism results, student-provided drafts, and notes from a student conference.</p>

<h3>Is an AI detector result enough evidence?</h3>
<p>Usually it is best treated as one part of a broader body of evidence rather than a stand-alone misconduct determination.</p>

<h3>Should I save the student's writing history?</h3>
<p>If writing history is available and relevant, it provides valuable process evidence about how the assignment developed.</p>

<h3>Does a large paste count as evidence?</h3>
<p>Yes, it can be documented as a writing event. But the paste does not automatically identify the source of the text.</p>

<h3>Should I compare the assignment with previous writing?</h3>
<p>Yes. Previous assignments provide context about the student's typical vocabulary, grammar, sentence structure, tone, and analysis.</p>

<h3>Should I ask the student to explain the assignment?</h3>
<p>Yes. Ask about the thesis, important passages, sources, writing process, and any tools used.</p>

<h3>What if the student says they wrote the assignment somewhere else?</h3>
<p>Give them an opportunity to explain and, when appropriate, provide the earlier draft or other supporting evidence.</p>

<h3>Should I verify citations?</h3>
<p>Yes. Missing, incorrect, or fabricated sources provide concrete objective evidence when combined with other concerns.</p>

<h3>Should teachers collect evidence that supports the student too?</h3>
<p>Yes. A fair investigation actively considers information that weakens initial suspicions, such as multi-session drafting or clear oral mastery.</p>

<h3>How does Checkmark Plagiarism help collect evidence of possible AI use?</h3>
<p>Checkmark Plagiarism combines AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and Canvas and Google Classroom integrations.</p>

<h2>Build a Body of Evidence, Not a Single-Score Case</h2>
<p>Fair and accurate academic integrity decisions depend on multiple corroborating signals. By collecting assignment policies, writing baselines, playback timelines, citation records, and conference notes, educators can make informed, equitable determinations.</p>
<p><strong>Checkmark Plagiarism supports this evidence-based approach with AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and integrations with Canvas and Google Classroom.</strong></p>

<hr className="my-8 border-border" />

<p className="font-semibold text-lg text-foreground">See how Checkmark pairs essay writing playback with multi-signal detection to give teachers a comprehensive evidence package for every submission. <a href="https://teach.checkmarkplagiarism.com/example-report" target="_blank" rel="noopener noreferrer">View a sample report</a> or <a href="/solutions/schools">request a demonstration</a>.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/what-evidence-should-teachers-collect-when-they-suspect-ai-use"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
