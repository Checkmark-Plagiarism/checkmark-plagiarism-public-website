import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "What Evidence Should Be Included in an AI Misconduct Report?",
  description: "Learn the 5 essential evidence components of a formal AI misconduct report—keystroke telemetry, paste logs, sentence heatmaps, and DOI checks in Checkmark.",
  keywords: [
    "what evidence should be included in an AI misconduct report",
    "AI misconduct report template for teachers",
    "submitting evidence of AI cheating to principal",
    "academic integrity violation report format",
    "evidence required for student AI honor board",
    "Checkmark AI misconduct report builder",
    "documenting AI cheating Canvas SpeedGrader",
  ],
  openGraph: {
    images: ["/images/services/report-breakdown-sidebar.png"],
  },
};

const meta = {
  title: "What Evidence Should Be Included in an AI Misconduct Report?",
  description: "Learn the 5 essential evidence components of a formal AI misconduct report—keystroke telemetry, paste logs, sentence heatmaps, and DOI checks in Checkmark.",
  "opengraph-image": "/images/services/report-breakdown-sidebar.png",
  date: "08-14-2026",
  readTime: "~17 min read",
  category: "Teacher Guide",
  categories: ["Teacher Guide", "Detection", "How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p><strong>A formal AI misconduct report must include 5 essential evidence components: 1) Keystroke Telemetry Metrics (active typing duration, character insertion velocity, and deletion percentage); 2) Clipboard Paste Event Logs (exact timestamps and character counts of external insertions); 3) Sentence-Level AI Probability Heatmaps; 4) Citation Verification Matrices (Crossref database check results showing hallucinated DOIs); and 5) Student Conference Summaries (documenting oral check-in questions and responses).</strong></p>

<p>When referring an academic integrity violation to an academic dean, department chair, or student honor council, presenting a single AI detector percentage score (e.g., &quot;88% AI Detected&quot;) is no longer acceptable. Disciplinary committees require <strong>multi-signal, objective physical evidence</strong> to substantiate charges and withstand parental appeals. By assembling a standardized 5-component misconduct report, educators provide undeniable proof that protects student due process while enforcing institutional academic standards. Checkmark Plagiarism automates the creation of these comprehensive reports in Canvas SpeedGrader.</p>

<p>Below is a comprehensive guide on the required evidence elements for formal AI misconduct reports.</p>

<p><strong>Checkmark Plagiarism</strong> generates formal misconduct dossiers by pairing <a href="/services/ai-detection">AI detection</a> with <a href="/services/writing-playback">essay writing playback</a>, <a href="/services/plagiarism-detection">plagiarism detection</a>, <a href="/services/autograder">autograding</a>, and integrations with <a href="/services/integrations/canvas-lms">Canvas</a> and <a href="/services/integrations/google-classroom">Google Classroom</a>.</p>

<h2>The 5 Essential Components of a Formal AI Misconduct Report</h2>

<div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">1. Keystroke Telemetry Metrics</p>
    <p className="text-xs text-muted-foreground">Active drafting duration (e.g., &lt;10 mins for a 1,500-word essay), backspace deletion ratio (&lt;2%), and session count proving zero genuine composition.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">2. Clipboard Paste Event Log</p>
    <p className="text-xs text-muted-foreground">A chronological table showing exact timestamps, character sizes, and payload percentages of wholesale external text insertions.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">3. Sentence-Level AI Heatmap</p>
    <p className="text-xs text-muted-foreground">A visual markup of the essay highlighting low-perplexity synthetic clauses alongside specific AI markers (triadic syntax, formulaic transitions).</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">4. Citation Verification Matrix</p>
    <p className="text-xs text-muted-foreground">Crossref and Google Scholar API query logs demonstrating that cited journal articles or DOIs do not exist in academic literature (hallucinations).</p>
  </div>
</div>

<div className="my-4 rounded-xl bg-slate-50 p-4 border border-border text-sm">
  <p className="font-bold text-foreground mb-1">5. Student Conference Summary &amp; Oral Defense Notes</p>
  <p className="text-xs text-muted-foreground">A contemporaneous summary of the student check-in, noting the student's inability to define advanced vocabulary used in the paper or explain the core logical connections in the thesis.</p>
</div>

<h2>What Should NEVER Be Included in a Report</h2>
<p>Avoiding common mistakes that compromise formal integrity cases:</p>

<ul>
  <li><strong>Uncorroborated AI Detector Percentages:</strong> Submitting a screenshot of a standalone AI detector without physical typing telemetry or citation checks.</li>
  <li><strong>Subjective Speculation:</strong> Statements like <em>&quot;The student is not smart enough to write this&quot;</em> or <em>&quot;It just feels fake.&quot;</em> Stick strictly to observable digital telemetry.</li>
  <li><strong>Unverified Third-Party Tools:</strong> Relying on free, unregulated web detectors that lack institutional data privacy agreements and FERPA compliance.</li>
</ul>

<p>Read more in <a href="/learning/2026/7/how-checkmark-writing-process-analysis-works">how Checkmark writing process analysis works</a>.</p>

<h2>Comparison: Incomplete Score Submission vs. Checkmark 5-Component Report</h2>

<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border text-xs">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <p className="font-bold text-foreground mb-1 text-sm">Checkmark 5-Component Report (Airtight &amp; Objective)</p>
      <ul className="space-y-1.5 list-disc pl-4 text-muted-foreground">
        <li>Includes active typing hours and paste timestamps.</li>
        <li>Highlights specific synthetic sentences and paragraphs.</li>
        <li>Provides verified proof of fake/hallucinated citations.</li>
        <li>Includes contemporaneous student interview notes.</li>
      </ul>
    </div>
    <div>
      <p className="font-bold text-foreground mb-1 text-sm">Incomplete Score Submission (Vulnerable &amp; Weak)</p>
      <ul className="space-y-1.5 list-disc pl-4 text-muted-foreground">
        <li>Single screenshot showing &quot;94% AI Generated.&quot;</li>
        <li>No physical drafting logs or backspace data.</li>
        <li>No independent verification of sources or DOIs.</li>
        <li>Easily overturned during formal honor council review.</li>
      </ul>
    </div>
  </div>
</div>

<h2>A 5-Step Educator Protocol for Filing Misconduct Reports</h2>
<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border">
  <p className="font-bold text-foreground mb-3 text-base">Misconduct Report Filing Checklist:</p>
  <ol className="space-y-1.5 text-xs font-medium text-foreground">
    <li>1. Open the student's submission in Checkmark Plagiarism inside Canvas SpeedGrader.</li>
    <li>2. Verify all 5 components: Telemetry, Paste Logs, Heatmaps, Citation Checks, and Conference Notes.</li>
    <li>3. Click &quot;Export Institutional Referral Dossier&quot; in the Checkmark sidebar.</li>
    <li>4. Attach the signed 1-page summary to your school's official academic integrity referral form.</li>
    <li>5. Submit the complete dossier to your department chair or academic dean.</li>
  </ol>
</div>

<h2>How Checkmark Plagiarism Powers Comprehensive Reporting</h2>
<p>Checkmark Plagiarism combines **AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and Canvas/Google Classroom integrations** to automatically generate standardized, 5-component misconduct reports in one click.</p>

<h2>Frequently Asked Questions</h2>

<h3>Why is an AI percentage score alone not enough for a misconduct report?</h3>
<p>Because AI detector scores are probabilistic estimates; disciplinary boards require multi-signal physical evidence (keystroke logs, paste events, fake citations) to sustain charges.</p>

<h3>How does writing playback prove an essay was not written by the student?</h3>
<p>Playback visually records the entire drafting session: showing that an entire 1,500-word essay appeared in under 10 seconds via a single clipboard paste with zero drafting hours.</p>

<h3>What should be recorded during the student conference?</h3>
<p>Record the date, the specific questions asked about the thesis and vocabulary, the student's exact responses, and whether they could explain the paste events.</p>

<h3>How does Checkmark verify fake citations automatically?</h3>
<p>Checkmark queries academic databases (Crossref, PubMed, OpenAlex) to confirm whether cited DOIs, authors, and journal titles physically exist.</p>

<h3>How does Checkmark Plagiarism integrate with Canvas LMS?</h3>
<p>Checkmark provides certified LTI 1.3 integration, SpeedGrader sidebar embeds, two-way grade passback, and single sign-on (SSO).</p>

<h3>Can parents request to see the AI misconduct report?</h3>
<p>Yes. Under FERPA, parents have the right to review all disciplinary records, making objective, fact-based reports essential.</p>

<h3>What if the student claims they wrote the paper on a different computer?</h3>
<p>Checkmark allows students to upload their original .docx or cloud version histories to demonstrate drafting continuity.</p>

<h3>How does Checkmark Autograder assist with misconduct reporting?</h3>
<p>Autograder highlights specific rubric criteria compromised by synthetic text, providing clear pedagogical justifications for grade deductions.</p>

<h3>How long does it take to generate a report in Checkmark?</h3>
<p>Generating and exporting a complete 5-component PDF misconduct report in Canvas SpeedGrader takes under 30 seconds.</p>

<h3>Why is standardized reporting vital for school-wide equity?</h3>
<p>Because standardized reports guarantee that all students across all classrooms are held to identical, objective evidentiary standards.</p>

<h2>Ensuring Due Process and Integrity Excellence</h2>
<p>Upholding academic integrity requires precision, fairness, and undeniable evidence. By compiling comprehensive 5-component misconduct reports with Checkmark Plagiarism, educators ensure that institutional policies are enforced with total objectivity, transparency, and administrative rigor.</p>
<p><strong>Checkmark Plagiarism supports this comprehensive approach with AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and integrations with Canvas and Google Classroom.</strong></p>

<hr className="my-8 border-border" />

<p className="font-semibold text-lg text-foreground">See how Checkmark automates formal AI misconduct reports with writing playback and multi-signal detection. <a href="https://teach.checkmarkplagiarism.com/example-report" target="_blank" rel="noopener noreferrer">View a sample report</a> or <a href="/solutions/schools">request a demonstration</a>.</p>`;

type PageProps = {
  params?: Promise<Record<string, string | string[] | undefined>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/what-evidence-should-be-included-in-an-ai-misconduct-report"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
