import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Teachers Document an Academic Integrity Investigation?",
  description: "A complete guide on documenting academic integrity investigations—building airtight, FERPA-compliant audit dossiers with keystroke telemetry in Checkmark.",
  keywords: [
    "how can teachers document an academic integrity investigation",
    "documenting AI misconduct student essays",
    "academic integrity investigation dossier template",
    "how to create a defensible plagiarism report",
    "FERPA compliant academic integrity documentation",
    "Checkmark investigation audit export guide",
    "submitting evidence to honor council Canvas",
  ],
  openGraph: {
    images: ["/images/services/report-breakdown-sidebar.png"],
  },
};

export const meta = {
  title: "How Can Teachers Document an Academic Integrity Investigation?",
  description: "A complete guide on documenting academic integrity investigations—building airtight, FERPA-compliant audit dossiers with keystroke telemetry in Checkmark.",
  "opengraph-image": "/images/services/report-breakdown-sidebar.png",
  date: "08-14-2026",
  readTime: "~17 min read",
  category: "Teacher Guide",
  categories: ["Teacher Guide", "Detection", "How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p><strong>Teachers can document an academic integrity investigation by compiling a 4-part evidence dossier: first, export the Checkmark Process Telemetry Snapshot (recording active typing duration, deletion rates, paste timestamps, and a link to the 15-second writing playback video); second, include the Textual Forensics Record (sentence-level AI heatmaps and Crossref DOI verification checks); third, log contemporaneous conference notes (documenting the student's responses to conceptual oral questions); and fourth, cite the exact syllabus policy and restorative resolution applied.</strong></p>

<p>When an academic integrity case reaches school administrators, honor councils, or parent appeals, the strength of the teacher's documentation determines the outcome. Vague accusations (<em>&quot;the essay felt too advanced&quot;</em>) or isolated screenshots of third-party detector percentages are routinely dismissed for lack of verifiable proof. By maintaining a <strong>standardized, multi-signal audit dossier</strong>, educators protect student due process, eliminate bias, and provide transparent, undeniable records that satisfy FERPA regulations. Checkmark Plagiarism enables one-click PDF dossier exports directly from Canvas SpeedGrader.</p>

<p>Below is a comprehensive guide on building airtight, professional academic integrity investigation dossiers.</p>

<p><strong>Checkmark Plagiarism</strong> streamlines investigation documentation by pairing <a href="/services/ai-detection">AI detection</a> with <a href="/services/writing-playback">essay writing playback</a>, <a href="/services/plagiarism-detection">plagiarism detection</a>, <a href="/services/autograder">autograding</a>, and integrations with <a href="/services/integrations/canvas-lms">Canvas</a> and <a href="/services/integrations/google-classroom">Google Classroom</a>.</p>

<h2>The 4 Components of an Airtight Investigation Dossier</h2>

<div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">1. Process Telemetry &amp; Video Snapshot</p>
    <p className="text-xs text-muted-foreground">The physical keystroke log showing active drafting hours, session counts, backspaces, paste event payloads, and an embedded link to the 15-second Playback replay.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">2. Textual Forensics &amp; Citation Card</p>
    <p className="text-xs text-muted-foreground">The sentence-level neural AI heatmap alongside automated Crossref DOI verification logs proving the existence or hallucination of cited sources.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">3. Contemporaneous Conference Record</p>
    <p className="text-xs text-muted-foreground">A factual, written summary of the private 2-minute student check-in, including the specific questions asked, the student's verbal explanations, and demeanor.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">4. Policy Alignment &amp; Educational Remedy</p>
    <p className="text-xs text-muted-foreground">A clear citation of the course syllabus integrity policy, the rubric criteria affected, and the restorative educational remedy assigned (e.g., supervised rewrite).</p>
  </div>
</div>

<h2>Why Contemporaneous Notes Matter in Formal Inquiries</h2>
<p>Understanding the legal and administrative power of structured documentation:</p>

<ul>
  <li><strong>FERPA-Compliant Privacy:</strong> Checkmark dossiers contain only the student's verifiable submission telemetry, ensuring zero privacy violations when shared with administrators.</li>
  <li><strong>Shield Against Arbitrary Claims:</strong> Detailed keystroke timestamps and conference notes prove that the educator followed a fair, objective procedure without personal bias.</li>
  <li><strong>Instant Administrative Resolution:</strong> Deans and department chairs can review the 1-page PDF summary and approve resolutions in minutes without lengthy hearings.</li>
</ul>

<p>Read more in <a href="/learning/2026/7/how-checkmark-writing-process-analysis-works">how Checkmark writing process analysis works</a>.</p>

<h2>Comparison: Informal Teacher Notes vs. Checkmark Audit Dossier</h2>

<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border text-xs">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <p className="font-bold text-foreground mb-1 text-sm">Checkmark Audit Dossier (Standardized &amp; Airtight)</p>
      <ul className="space-y-1.5 list-disc pl-4 text-muted-foreground">
        <li>Automated keystroke telemetry and paste logs.</li>
        <li>Sentence-by-sentence neural probability heatmap.</li>
        <li>Verified citation and DOI existence cards.</li>
        <li>One-click exportable PDF for administration.</li>
      </ul>
    </div>
    <div>
      <p className="font-bold text-foreground mb-1 text-sm">Informal Notes (Vague &amp; Vulnerable)</p>
      <ul className="space-y-1.5 list-disc pl-4 text-muted-foreground">
        <li>Handwritten notes or vague email summaries.</li>
        <li>Relying solely on a third-party AI percentage score.</li>
        <li>No physical drafting logs to disprove student claims.</li>
        <li>Easily overturned during formal parent appeals.</li>
      </ul>
    </div>
  </div>
</div>

<h2>A 5-Step Educator Protocol for Documenting Inquiries</h2>
<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border">
  <p className="font-bold text-foreground mb-3 text-base">Investigation Documentation Checklist:</p>
  <ol className="space-y-1.5 text-xs font-medium text-foreground">
    <li>1. Open the student's submission in Checkmark Plagiarism inside Canvas SpeedGrader.</li>
    <li>2. Click &quot;Generate Case Dossier&quot; to compile telemetry, paste logs, and citation cards.</li>
    <li>3. Conduct the 2-minute student conference and type brief contemporaneous summary notes directly into the dossier.</li>
    <li>4. Select the appropriate pedagogical resolution (e.g., supervised rewrite with 10% policy deduction).</li>
    <li>5. Export the signed PDF record and attach it to the student's institutional file in Canvas.</li>
  </ol>
</div>

<h2>How Checkmark Plagiarism Powers Automated Documentation</h2>
<p>Checkmark Plagiarism combines **AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and Canvas/Google Classroom integrations** to automatically generate comprehensive, standardized audit dossiers in seconds.</p>

<h2>Frequently Asked Questions</h2>

<h3>What is the most important element of an integrity dossier?</h3>
<p>Writing playback telemetry—it provides physical, empirical proof of active drafting duration, deletion rates, and clipboard paste payloads.</p>

<h3>How does Checkmark export investigation dossiers?</h3>
<p>With a single click in Canvas SpeedGrader, Checkmark generates a secure, FERPA-compliant PDF report containing all telemetry, heatmaps, and notes.</p>

<h3>What are 'contemporaneous notes'?</h3>
<p>Notes written immediately during or after the student conference, documenting the exact questions asked and answers provided while memory is fresh.</p>

<h3>Can students request a copy of their investigation dossier?</h3>
<p>Yes. Under FERPA, students and parents have the right to inspect educational records, making professional, objective documentation essential.</p>

<h3>How does Checkmark Plagiarism integrate with Canvas LMS?</h3>
<p>Checkmark provides certified LTI 1.3 integration, SpeedGrader sidebar embeds, two-way grade passback, and single sign-on (SSO).</p>

<h3>What if an administrator asks for evidence of AI generation?</h3>
<p>Provide the Checkmark PDF dossier: it displays the zero typing hours, the instant paste logs, the fake DOIs, and the sentence heatmap in one document.</p>

<h3>How long should schools retain investigation dossiers?</h3>
<p>Most institutional policies recommend retaining academic integrity audit records for 3 to 7 years in accordance with district record retention schedules.</p>

<h3>Does Checkmark store student essays publicly?</h3>
<p>No. Checkmark adheres to strict zero-retention and non-training data privacy policies, ensuring student submissions are never used to train public AI models.</p>

<h3>How does standardized documentation prevent educator burnout?</h3>
<p>By automating telemetry capture and report generation, teachers spend minutes documenting cases instead of losing hours to manual investigations.</p>

<h3>Why is documentation critical for equity?</h3>
<p>Because standardized documentation ensures that every student is evaluated against identical objective criteria, preventing bias and protecting fairness.</p>

<h2>Defending Academic Standards with Professional Excellence</h2>
<p>Fair, transparent documentation is the backbone of institutional integrity. By utilizing Checkmark Plagiarism to automate comprehensive, evidence-first audit dossiers, educators uphold rigorous academic standards while providing compassionate, legally defensible due process for every student.</p>
<p><strong>Checkmark Plagiarism supports this comprehensive approach with AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and integrations with Canvas and Google Classroom.</strong></p>

<hr className="my-8 border-border" />

<p className="font-semibold text-lg text-foreground">See how Checkmark automates academic integrity dossiers with writing playback and multi-signal detection. <a href="https://teach.checkmarkplagiarism.com/example-report" target="_blank" rel="noopener noreferrer">View a sample report</a> or <a href="/solutions/schools">request a demonstration</a>.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/how-can-teachers-document-an-academic-integrity-investigation"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
