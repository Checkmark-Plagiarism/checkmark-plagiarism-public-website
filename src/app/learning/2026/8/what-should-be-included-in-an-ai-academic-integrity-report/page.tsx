import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "What Should Be Included in an AI Academic Integrity Report?",
  description: "Learn the essential sections, evidence logs, playback data, and documentation standards required for an official AI academic integrity report.",
  keywords: [
    "what should be included in an AI academic integrity report",
    "AI academic integrity report template",
    "academic misconduct report generative AI",
    "documenting student AI cheating for administration",
    "essay writing playback report evidence",
    "academic integrity committee AI evidence packet",
    "how to write an AI plagiarism report",
    "Checkmark academic integrity reporting",
  ],
  openGraph: {
    images: ["/images/services/report-breakdown-sidebar.png"],
  },
};

export const meta = {
  title: "What Should Be Included in an AI Academic Integrity Report?",
  description: "Learn the essential sections, evidence logs, playback data, and documentation standards required for an official AI academic integrity report.",
  "opengraph-image": "/images/services/report-breakdown-sidebar.png",
  date: "08-14-2026",
  readTime: "~17 min read",
  category: "Teacher Guide",
  categories: ["Teacher Guide", "Detection", "How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p><strong>When an educator refers a suspected AI writing violation to department chairs, honor councils, or school administrators, the outcome of that referral depends heavily on the structure and objectivity of the official Academic Integrity Report.</strong></p>

<p>Submitting an isolated screenshot of a third-party AI detector score (e.g., <em>&quot;Detector flagged 88% AI&quot;</em>) is rarely sufficient to sustain an academic misconduct finding. Administrative review boards, student appeals committees, and parents expect an evidentiary packet that demonstrates a thorough, equitable, and multi-signal investigation.</p>

<p>An effective AI Academic Integrity Report establishes clear factual context across the entire lifecycle of the assignment: what was assigned, what rules governed AI usage, how the document was created over time, what detection and source verification revealed, and how the student explained the work during conferences.</p>

<p><strong>Checkmark Plagiarism</strong> simplifies the generation of comprehensive integrity reports by combining <a href="/services/ai-detection">AI detection</a>, <a href="/services/writing-playback">essay writing playback</a>, static AI detection, <a href="/services/plagiarism-detection">plagiarism detection</a>, <a href="/services/autograder">autograding</a>, and integrations with <a href="/services/integrations/canvas-lms">Canvas</a> and <a href="/services/integrations/google-classroom">Google Classroom</a>.</p>

<h2>The 7 Core Sections of an Official AI Integrity Report</h2>

<div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">1. Case &amp; Policy Metadata</p>
    <p className="text-xs text-muted-foreground">Basic student/course data alongside explicit syllabus AI policy rules and assignment prompt constraints.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">2. Document Creation Timeline</p>
    <p className="text-xs text-muted-foreground">Objective metrics from writing playback: active typing duration, timestamped paste blocks, and revision ratios.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">3. Detection &amp; Source Verification</p>
    <p className="text-xs text-muted-foreground">Statistical AI probability maps, plagiarism match logs, and database verification results for cited sources.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">4. Student Conference Record</p>
    <p className="text-xs text-muted-foreground">Neutral documentation of student statements, oral comprehension checks, and review of external drafts.</p>
  </div>
</div>

<h3>Section 1: Case Information &amp; Policy Baseline</h3>
<p>Provide administrative identifiers and establish the explicit rules governing the assignment:</p>
<ul>
  <li><strong>Student Details:</strong> Full name, student ID, course number, section, and date of submission.</li>
  <li><strong>The Assignment Prompt:</strong> The complete assignment instructions, required source counts, formatting guidelines, and rubric.</li>
  <li><strong>The Published AI Policy:</strong> The specific syllabus clause or assignment-level statement defining permissible vs. prohibited AI use (e.g., <em>Prohibited</em>, <em>Ideation Only</em>, or <em>Assisted with Full Disclosure</em>).</li>
</ul>

<h3>Section 2: The Submitted Artifact &amp; Highlighted Anomalies</h3>
<p>Preserve the original submission and document specific passages of concern:</p>
<ul>
  <li>Highlighted sections exhibiting dramatic shifts in tone, vocabulary, or syntactic complexity.</li>
  <li>Passages displaying generic filler language that fails to reference classroom discussions, assigned textbook chapters, or required prompts.</li>
  <li>Abrupt stylistic discontinuities between different paragraphs or sections.</li>
</ul>

<h3>Section 3: Document Writing History &amp; Playback Logs</h3>
<p>Document timeline data provides concrete evidence of how the assignment was created. When utilizing <strong>Checkmark Plagiarism's essay writing playback</strong>, include:</p>
<ul>
  <li><strong>Active Drafting Time:</strong> Total active keystroke time vs. idle document time (e.g., 11 minutes total active drafting for a 1,500-word essay).</li>
  <li><strong>Text Insertion Timestamps:</strong> Exact timestamps, word counts, and character counts of wholesale paste events.</li>
  <li><strong>Revision Activity:</strong> The extent of post-insertion editing (e.g., 3 minor comma edits vs. substantive multi-paragraph restructuring).</li>
</ul>
<p>Read more in <a href="/learning/2026/8/can-writing-history-show-whether-a-student-used-ai">can writing history show whether a student used AI?</a></p>

<h3>Section 4: Detection &amp; Source Verification Reports</h3>
<ul>
  <li><strong>AI Detection Breakdown:</strong> Overall probability scores paired with sentence-level predictability maps. Read more in <a href="/learning/2026/8/what-does-an-ai-detection-percentage-actually-mean">what does an AI detection percentage actually mean?</a></li>
  <li><strong>Plagiarism Matching:</strong> Source match results verifying whether inserted text matches web databases, journals, or peer papers.</li>
  <li><strong>Citation Validation:</strong> A clear log showing whether cited journal titles, author names, volume numbers, and direct quotes were verified in academic indices (e.g., JSTOR, Google Scholar). Hallucinated or non-existent citations provide irrefutable physical evidence.</li>
</ul>

<h3>Section 5: Historical Student Baseline Comparison</h3>
<p>Attach 2–3 verified prior writing samples (e.g., in-class essays, proctored responses) to provide comparative context:</p>
<ul>
  <li>Document established student vocabulary range and typical sentence complexity.</li>
  <li>Note recurring grammatical habits or errors that abruptly vanished in the submitted paper.</li>
</ul>

<h3>Section 6: Student Conference Notes &amp; Explanations</h3>
<p>Summarize the student meeting held prior to formal referral:</p>
<ul>
  <li>Questions asked regarding thesis development, research process, and revision decisions.</li>
  <li>Verbatim notes of student responses explaining where drafts were composed.</li>
  <li>Student statements regarding use of AI writing assistants, translation software, or tutoring.</li>
  <li>Evaluation of oral conceptual comprehension (e.g., whether the student could define key terms or explain central arguments in plain language).</li>
  <li>Status of external drafts requested and provided.</li>
</ul>

<h3>Section 7: Instructor Summary &amp; Recommended Action</h3>
<p>Conclude with a factual synthesis of the corroborating evidence and a clear, policy-aligned recommendation:</p>
<ul>
  <li>Factual summary explaining how independent signals (playback, citations, comprehension, detection) align.</li>
  <li>Recommended institutional response (e.g., formal honor council referral, zero grade on assignment, opportunity to resubmit under proctored conditions).</li>
</ul>

<h2>Standardized AI Academic Integrity Report Template</h2>
<p>Below is a standardized template educators can adapt for formal submissions to honor councils, department chairs, or administrative review boards:</p>

<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border text-xs font-mono">
  <p className="font-bold text-foreground mb-3 text-sm font-sans">Official AI Academic Integrity Incident Report</p>
  <div className="space-y-3 text-muted-foreground">
    <div>
      <p className="font-bold text-foreground">I. CASE METADATA</p>
      <p>Student Name: _______________________ Student ID: _______________________</p>
      <p>Course &amp; Section: ____________________ Date of Submission: ________________</p>
      <p>Assignment Title: ____________________ Date Report Filed: _________________</p>
      <p>Instructor Name: _____________________ Contact: __________________________</p>
    </div>
    <div>
      <p className="font-bold text-foreground">II. APPLICABLE POLICY &amp; ASSIGNMENT PARAMETERS</p>
      <p>Course AI Policy: [  ] Prohibited  [  ] Ideation Only  [  ] Permitted with Citation</p>
      <p>Drafting Requirements: [  ] Mandatory In-App Drafting  [  ] Preserved Revision Logs</p>
      <p>Prompt Summary: ___________________________________________________________</p>
    </div>
    <div>
      <p className="font-bold text-foreground">III. TIMELINE &amp; WRITING PLAYBACK EVIDENCE</p>
      <p>Total Active Keystroke Duration: _____ min | Total Document Word Count: _____</p>
      <p>Wholesale Paste Event #1: _____ words inserted at [HH:MM AM/PM] on [MM/DD/YYYY]</p>
      <p>Subsequent Revision Summary: _______________________________________________</p>
    </div>
    <div>
      <p className="font-bold text-foreground">IV. DETECTION &amp; CITATION VERIFICATION</p>
      <p>AI Detection Probability Score: _____% | Flagged Paragraphs: _________________</p>
      <p>Plagiarism Source Match: _____% | Matched Database: _________________________</p>
      <p>Citation Audit Results: [  ] Verified  [  ] Unverifiable / Hallucinated</p>
      <p>Unverified Sources: _________________________________________________________</p>
    </div>
    <div>
      <p className="font-bold text-foreground">V. STUDENT CONFERENCE SUMMARY</p>
      <p>Conference Date/Time: _______________ Location / Platform: ________________</p>
      <p>Student Explanation of Drafting Process: ____________________________________</p>
      <p>Oral Conceptual Understanding: [  ] Fluent  [  ] Partial  [  ] Unable to Explain</p>
      <p>External Drafts Provided: [  ] Yes (Attached)  [  ] No  [  ] None Maintained</p>
    </div>
    <div>
      <p className="font-bold text-foreground">VI. INSTRUCTOR CONCLUSION &amp; RECOMMENDATION</p>
      <p>Factual Summary: ___________________________________________________________</p>
      <p>Recommended Action: ________________________________________________________</p>
      <p>Instructor Signature: ___________________________ Date: ____________________</p>
    </div>
  </div>
</div>

<h2>Common Reporting Pitfalls to Avoid</h2>

<div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="rounded-xl bg-amber-50/80 p-4 border border-amber-200 text-sm">
    <p className="font-bold text-amber-900 mb-1">Common Reporting Mistakes</p>
    <ul className="text-xs text-amber-950 space-y-1.5 list-disc pl-4">
      <li>Submitting only a detector screenshot with no timeline or baseline context.</li>
      <li>Using emotive or accusatory phrasing instead of clinical, observable facts.</li>
      <li>Omitting exculpatory evidence (e.g., student-provided notes or partial drafts).</li>
      <li>Failing to cite the specific syllabus policy clause that was violated.</li>
    </ul>
  </div>
  <div className="rounded-xl bg-emerald-50/80 p-4 border border-emerald-200 text-sm">
    <p className="font-bold text-emerald-900 mb-1">Best Documentation Practices</p>
    <ul className="text-xs text-emerald-950 space-y-1.5 list-disc pl-4">
      <li>Presenting multi-signal corroboration across playback, citations, and baselines.</li>
      <li>Describing concrete timeline events with exact timestamps and word counts.</li>
      <li>Documenting student conference questions and exact student statements.</li>
      <li>Explicitly linking observed writing behavior to published course rules.</li>
    </ul>
  </div>
</div>

<h2>How Checkmark Plagiarism Simplifies Academic Integrity Reporting</h2>
<p>Compiling evidence across separate tools can be time-consuming. <strong>Checkmark Plagiarism</strong> streamlines the entire reporting process by generating comprehensive, multi-signal reports directly within existing LMS workflows:</p>

<ul>
  <li><strong>Exportable Playback Logs:</strong> Generates visual drafting timeline summaries showing exact active typing time, paste timestamps, and revision cycles.</li>
  <li><strong>Combined AI &amp; Plagiarism Scans:</strong> Delivers integrated detection scores showing both language predictability maps and database source matches.</li>
  <li><strong>LMS Integration:</strong> Connects directly with Canvas and Google Classroom, allowing instructors to attach reports to gradebook records with one click.</li>
</ul>

<h2>Frequently Asked Questions</h2>

<h3>What is the most critical element of an AI academic integrity report?</h3>
<p>Document creation timeline data (essay writing playback logs showing paste events and drafting duration) combined with citation authentication and student conference notes.</p>

<h3>Can an AI detection score alone be used in an integrity report?</h3>
<p>A detection score should be included as one piece of evidence, but must be corroborated by timeline logs, baseline comparisons, citation checks, and student explanations.</p>

<h3>How should I describe a large paste in an integrity report?</h3>
<p>State the exact timestamp, word count, and character count of the insertion, describe subsequent revision activity, and summarize the student's explanation of where the text was drafted.</p>

<h3>What if the student claims they drafted in Microsoft Word?</h3>
<p>Document the student's statement, note whether an external draft file was requested, and attach any file or version metadata provided by the student.</p>

<h3>How do I document fake or hallucinated citations?</h3>
<p>List the exact citations from the bibliography, name the databases searched (e.g., JSTOR, Google Scholar, WorldCat), and note that no matching publications exist.</p>

<h3>Should student conference statements be included in the report?</h3>
<p>Yes. Summarize the date, questions asked, the student's explanation of their writing process, and their demonstrated conceptual understanding.</p>

<h3>How should the report be shared with administrators?</h3>
<p>Submit the report securely through institutional academic integrity management portals or encrypted LMS workflows to protect student privacy and FERPA compliance.</p>

<h3>What tone should be used throughout the report?</h3>
<p>Maintain an objective, neutral, professional, and clinical tone that focuses strictly on verifiable facts, timeline logs, and direct observations.</p>

<h3>How does Checkmark Plagiarism assist in generating integrity reports?</h3>
<p>Checkmark Plagiarism automatically compiles writing playback logs, AI probability scores, plagiarism matches, and submission metadata into a unified, exportable evidence packet.</p>

<h2>Integrity Reports Should Be Thorough, Objective, and Defensible</h2>
<p>A well-documented AI Academic Integrity Report protects both academic standards and student due process. By presenting a cohesive body of multi-signal evidence—combining writing playback, citation audits, baseline comparisons, and student interviews—educators ensure that academic integrity decisions remain fair, transparent, and unassailable.</p>
<p><strong>Checkmark Plagiarism supports this rigorous standard with AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and integrations with Canvas and Google Classroom.</strong></p>

<hr className="my-8 border-border" />

<p className="font-semibold text-lg text-foreground">See how Checkmark pairs essay writing playback with multi-signal detection to generate exportable, comprehensive academic integrity reports for every submission. <a href="https://teach.checkmarkplagiarism.com/example-report" target="_blank" rel="noopener noreferrer">View a sample report</a> or <a href="/solutions/schools">request a demonstration</a>.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/what-should-be-included-in-an-ai-academic-integrity-report"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
