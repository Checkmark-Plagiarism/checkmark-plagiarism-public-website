import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Should Teachers Document Suspected AI Use?",
  description: "A comprehensive educator guide on documenting suspected student AI writing: objective evidence logs, playback records, student conference notes, and administrative reporting.",
  keywords: [
    "how should teachers document suspected AI use",
    "documenting AI academic integrity violations",
    "AI plagiarism evidence report template",
    "how to document ChatGPT in student writing",
    "essay writing playback documentation",
    "academic misconduct documentation checklist",
    "teacher evidence log for AI writing",
    "Checkmark academic integrity documentation",
  ],
  openGraph: {
    images: ["/images/services/report-breakdown-sidebar.png"],
  },
};

const meta = {
  title: "How Should Teachers Document Suspected AI Use?",
  description: "A comprehensive educator guide on documenting suspected student AI writing: objective evidence logs, playback records, student conference notes, and administrative reporting.",
  "opengraph-image": "/images/services/report-breakdown-sidebar.png",
  date: "08-14-2026",
  readTime: "~18 min read",
  category: "Teacher Guide",
  categories: ["Teacher Guide", "Detection", "How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p><strong>When a teacher suspects that a student has submitted AI-generated work, the strength and fairness of any subsequent academic integrity review depend entirely on the quality of documentation.</strong></p>

<p>Subjective impressions (<em>&quot;this essay does not sound like the student&quot;</em>) or isolated automated scores (<em>&quot;the AI detector flagged 85%&quot;</em>) are insufficient on their own to sustain an academic misconduct finding. If a case is reviewed by department chairs, academic integrity committees, school administrators, or parents, instructors need an objective, defensible, and structured evidence trail.</p>

<p>Documenting suspected AI writing is not about constructing an adversarial case against a student. Rather, it is about compiling an accurate, factual record of what was submitted, how the document developed over time, what the student explained during conferences, and whether the observed writing process aligns with published course policies.</p>

<p><strong>Checkmark Plagiarism</strong> streamlines this evidence collection by combining <a href="/services/ai-detection">AI detection</a>, <a href="/services/writing-playback">essay writing playback</a>, static AI detection, <a href="/services/plagiarism-detection">plagiarism detection</a>, <a href="/services/autograder">autograding</a>, and integrations with <a href="/services/integrations/canvas-lms">Canvas</a> and <a href="/services/integrations/google-classroom">Google Classroom</a>.</p>

<h2>The 3 Fundamental Rules of AI Documentation</h2>

<div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">1. Record Facts, Not Assumptions</p>
    <p className="text-xs text-muted-foreground">Document observable timeline events (e.g., &quot;950 words appeared at 11:42 PM in one paste&quot;) rather than subjective conclusions (e.g., &quot;Student pasted ChatGPT output&quot;).</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">2. Document the Process</p>
    <p className="text-xs text-muted-foreground">Preserve document revision history, keystroke logs, drafting session durations, and text insertion timestamps rather than relying exclusively on the final submitted text.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">3. Record Exculpatory Details</p>
    <p className="text-xs text-muted-foreground">Include evidence that supports the student—such as earlier Word drafts, handwritten notes, or clear oral explanations—to ensure a balanced, defensible record.</p>
  </div>
</div>

<h2>Core Components of a Complete AI Evidence Package</h2>
<p>A rigorous evidence package contains six essential components that establish clear context across the assignment lifecycle:</p>

<h3>1. Course Policy &amp; Assignment Baseline</h3>
<p>Every academic integrity file should begin with the specific rules given to the student before writing began:</p>
<ul>
  <li><strong>The Original Prompt:</strong> The complete assignment instructions, required sources, formatting constraints, and submission guidelines.</li>
  <li><strong>The Syllabus AI Policy:</strong> The explicit course policy regarding generative AI, grammar assistants, and outside tutoring.</li>
  <li><strong>Process Requirements:</strong> Whether students were required to draft inside a specific platform (e.g., Google Docs) or preserve revision history.</li>
</ul>

<h3>2. The Submitted Submission &amp; Textual Anomalies</h3>
<p>Preserve the original submitted file alongside objective notes detailing specific passages that triggered review:</p>
<ul>
  <li>Highlighted paragraphs displaying dramatic syntactic or vocabulary divergence.</li>
  <li>Generic filler phrasing that fails to address specific classroom lectures or required course readings.</li>
  <li>Abrupt stylistic transitions between different sections of the document.</li>
</ul>

<h3>3. Document Writing History &amp; Playback Logs</h3>
<p>Document timeline analysis provides direct evidence of how the text was composed. When using <strong>Checkmark Plagiarism's essay writing playback</strong>, educators can export and document:</p>
<ul>
  <li>Total active drafting time versus idle time.</li>
  <li>Timestamped paste events showing exact character and word counts inserted simultaneously.</li>
  <li>The ratio of drafting to subsequent revision (e.g., multi-session editing vs. immediate submission).</li>
  <li>Whether thesis development and outlines appeared incrementally or fully formed.</li>
</ul>

<h3>4. Detection &amp; Source Verification Records</h3>
<ul>
  <li><strong>AI Detection Breakdown:</strong> Exported reports showing overall probability scores and sentence-level predictability maps. Read more in <a href="/learning/2026/8/what-does-an-ai-detection-percentage-actually-mean">what does an AI detection percentage actually mean?</a></li>
  <li><strong>Plagiarism Matching:</strong> Reports confirming whether inserted text matches existing online databases, journal articles, or student repositories.</li>
  <li><strong>Citation Authentication:</strong> Objective records documenting whether cited academic sources, authors, volume numbers, and direct quotes exist in academic indices. Hallucinated citations represent critical objective evidence.</li>
</ul>

<h3>5. Historical Student Writing Baselines</h3>
<p>Attach two or three comparable previous writing samples from the student (e.g., in-class essays, previous papers) to establish an authentic baseline for comparison. Document specific structural metrics:</p>
<ul>
  <li>Typical sentence length and structural variety.</li>
  <li>Established vocabulary range and technical terminology mastery.</li>
  <li>Recurring grammatical habits, punctuation patterns, and citation formatting.</li>
</ul>
<p>Read our in-depth guide on <a href="/learning/2026/8/how-can-i-compare-a-students-assignment-to-their-previous-writing">how can I compare a student's assignment to their previous writing?</a></p>

<h3>6. Student Conference Notes</h3>
<p>Document the date, time, attendees, and factual summary of the student conversation:</p>
<ul>
  <li>Specific questions asked regarding the thesis, sources, and revision choices.</li>
  <li>Verbatim notes of student explanations regarding where drafts were composed.</li>
  <li>Student statements regarding the use of writing assistants, translation tools, or AI platforms.</li>
  <li>Supporting materials provided by the student (e.g., external Word drafts, version logs, notes).</li>
</ul>

<h2>Weak vs. Strong Documentation: Concrete Comparisons</h2>

<div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="rounded-xl bg-amber-50/80 p-4 border border-amber-200 text-sm">
    <p className="font-bold text-amber-900 mb-1">Weak, Subjective Documentation (Avoid)</p>
    <ul className="text-xs text-amber-950 space-y-1.5 list-disc pl-4">
      <li><em>&quot;The paper sounds like ChatGPT wrote it.&quot;</em></li>
      <li><em>&quot;AI detector gave a score of 92%, so the student cheated.&quot;</em></li>
      <li><em>&quot;The student does not write this well.&quot;</em></li>
      <li><em>&quot;Student pasted the paper into Google Docs because they copied it.&quot;</em></li>
      <li><em>&quot;Student seemed nervous when asked about the essay.&quot;</em></li>
    </ul>
  </div>
  <div className="rounded-xl bg-emerald-50/80 p-4 border border-emerald-200 text-sm">
    <p className="font-bold text-emerald-900 mb-1">Strong, Objective Documentation (Recommended)</p>
    <ul className="text-xs text-emerald-950 space-y-1.5 list-disc pl-4">
      <li><em>&quot;Paragraphs 3–5 contain 1,120 words inserted at 10:14 PM in a single timestamp event.&quot;</em></li>
      <li><em>&quot;AI detector flagged paragraphs 3–5 with 94% statistical language predictability.&quot;</em></li>
      <li><em>&quot;Vocabulary in Section 2 diverges from previous samples (e.g., 4 baseline essays).&quot;</em></li>
      <li><em>&quot;Two citations in Section 3 could not be verified in JSTOR or Google Scholar.&quot;</em></li>
      <li><em>&quot;Student stated draft was written in Word, but was unable to provide the draft file.&quot;</em></li>
    </ul>
  </div>
</div>

<h2>Standardized Educator AI Documentation Template</h2>
<p>Below is a standardized template educators can use to organize evidence for department heads, academic integrity panels, or student conferences:</p>

<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border text-xs font-mono">
  <p className="font-bold text-foreground mb-3 text-sm font-sans">Academic Integrity Evidence Summary Form</p>
  <div className="space-y-3 text-muted-foreground">
    <div>
      <p className="font-bold text-foreground">1. CASE INFORMATION</p>
      <p>Student Name: [Student Name] | Course: [Course Name &amp; Period]</p>
      <p>Assignment: [Assignment Title] | Date Submitted: [MM/DD/YYYY]</p>
      <p>Instructor: [Instructor Name] | Date Review Initiated: [MM/DD/YYYY]</p>
    </div>
    <div>
      <p className="font-bold text-foreground">2. APPLICABLE COURSE POLICY</p>
      <p>Syllabus AI Policy Category: [Prohibited / Brainstorming Only / Unrestricted with Citation]</p>
      <p>Drafting Requirements: [Mandatory In-App Drafting / Preserved Revision Logs Required]</p>
    </div>
    <div>
      <p className="font-bold text-foreground">3. OBSERVABLE DOCUMENT &amp; PLAYBACK EVIDENCE</p>
      <p>- Total Active Drafting Time: [e.g., 14 minutes]</p>
      <p>- Wholesale Text Insertions: [e.g., 1,250 words inserted at 11:02 PM on 08/12/2026]</p>
      <p>- Post-Insertion Edits: [e.g., 3 minor punctuation adjustments; zero structural revisions]</p>
    </div>
    <div>
      <p className="font-bold text-foreground">4. DETECTION &amp; SOURCE VERIFICATION</p>
      <p>- AI Detection Result: [Overall: 88% | Specific Flagged Sections: Paras 2-5]</p>
      <p>- Plagiarism Detection Result: [0% direct web match | No peer database duplicate]</p>
      <p>- Citation Validation: [Source #2 &amp; #4 could not be located in academic databases]</p>
    </div>
    <div>
      <p className="font-bold text-foreground">5. STUDENT CONFERENCE RECORD</p>
      <p>- Conference Date &amp; Location: [MM/DD/YYYY via Classroom Meeting]</p>
      <p>- Student Explanation of Process: [e.g., &quot;Student stated they drafted in Microsoft Word.&quot;]</p>
      <p>- External Draft Request: [e.g., &quot;Student given 48 hours to share Word draft with version logs.&quot;]</p>
      <p>- Oral Comprehension: [e.g., &quot;Student was unable to explain thesis or define key terms in Section 2.&quot;]</p>
    </div>
    <div>
      <p className="font-bold text-foreground">6. INSTRUCTOR CONCLUSION &amp; RECOMMENDED NEXT STEPS</p>
      <p>Summary of Corroborating Signals: [Multi-signal alignment across playback, citations, and comprehension]</p>
      <p>Action Recommended: [Academic Integrity Committee Referral / Resubmission with Penalty / Written Warning]</p>
    </div>
  </div>
</div>

<h2>How Essay Writing Playback Simplifies Documentation</h2>
<p>Manually piecing together version history from general word processors can be tedious and fragmented. <strong>Checkmark Plagiarism's essay writing playback</strong> automatically compiles document creation metrics into a clear visual report.</p>

<p>Educators can directly attach timestamped playback logs to their documentation, showing administrators exact visual evidence of drafting sessions, keystroke cadences, and text insertion timestamps. Read more in <a href="/learning/2026/7/how-checkmark-writing-process-analysis-works">how Checkmark writing process analysis works</a>.</p>

<h2>Documenting Student Admissions vs. Inconsistencies</h2>
<p>When a student admits to using AI, document the exact nature and scope of the tool's involvement. Differentiate between:</p>

<ul>
  <li><strong>Permitted Ideation:</strong> <em>&quot;Student stated they asked ChatGPT for 3 counterargument concepts and drafted all paragraphs independently.&quot;</em></li>
  <li><strong>Grammar Correction:</strong> <em>&quot;Student used Grammarly to correct punctuation across 4 paragraphs.&quot;</em></li>
  <li><strong>Generative Rewriting:</strong> <em>&quot;Student pasted their rough draft into Claude and replaced all paragraphs with the generated output.&quot;</em></li>
  <li><strong>Full Essay Generation:</strong> <em>&quot;Student entered the prompt into ChatGPT and copied the generated essay directly.&quot;</em></li>
</ul>

<p>Documenting the precise level of assistance ensures that any institutional response is proportional to the actual policy violation.</p>

<h2>Privacy, FERPA, and Record-Keeping Guidelines</h2>
<p>When creating and storing academic integrity documentation, follow institutional and legal guidelines:</p>

<ul>
  <li><strong>Protect Student Privacy:</strong> Store documentation within secure school learning management systems (Canvas, Google Classroom) or secure departmental servers. Avoid emailing unprotected files containing student identification.</li>
  <li><strong>Maintain Objectivity in Permanent Files:</strong> Write every report assuming it will be reviewed by the student, parents, and administrative appeals boards. Keep language clinical, respectful, and factual.</li>
  <li><strong>Adhere to Retention Policies:</strong> Retain documentation according to school district or university records retention schedules.</li>
</ul>

<h2>A 12-Step Documentation Protocol for Teachers</h2>
<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border">
  <p className="font-bold text-foreground mb-3 text-base">Recommended 12-Step Documentation Protocol:</p>
  <ol className="space-y-1.5 text-xs font-medium text-foreground">
    <li>1. Review the assignment prompt, rubric, and published syllabus AI policy.</li>
    <li>2. Preserve the original student submission file and mark specific passages of concern.</li>
    <li>3. Inspect essay writing playback logs to identify paste events and drafting duration.</li>
    <li>4. Export AI detection and plagiarism detection reports for the submission.</li>
    <li>5. Verify cited sources, author names, and direct quotes in academic databases.</li>
    <li>6. Retrieve 2–3 historical student writing samples to evaluate syntactic baselines.</li>
    <li>7. Complete Sections 1–4 of the Academic Integrity Evidence Summary Form.</li>
    <li>8. Schedule a neutral, question-driven conference with the student.</li>
    <li>9. Record objective notes and exact student statements during the conference.</li>
    <li>10. Provide the student an opportunity to submit external drafts or notes.</li>
    <li>11. Complete the evidence summary form with final observations and conclusions.</li>
    <li>12. Submit the completed documentation package to administration or department chair.</li>
  </ol>
</div>

<h2>How Checkmark Plagiarism Supports Clear Documentation</h2>
<p>Checkmark Plagiarism combines **AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and Canvas/Google Classroom integrations** to automate evidence compilation and give educators clear, objective reports for every submission.</p>

<h2>Frequently Asked Questions</h2>

<h3>What is the most important evidence when documenting suspected AI use?</h3>
<p>Process evidence (essay writing playback logs showing timestamps and paste events) combined with source verification (checking for non-existent citations) and student conference notes.</p>

<h3>Can an AI detector score alone serve as sufficient documentation?</h3>
<p>No. Detector scores provide statistical probabilities and must be corroborated by document history, writing baselines, citation checks, and student explanations.</p>

<h3>How should I document a large paste in document history?</h3>
<p>Document the exact timestamp, word count, and character count of the insertion, note whether subsequent edits occurred, and record the student's explanation of where the text was drafted.</p>

<h3>What if a student claims they drafted in Microsoft Word?</h3>
<p>Record the student's statement and provide a reasonable deadline (e.g., 24–48 hours) for them to provide the original Word file with version history or timestamp metadata.</p>

<h3>How should I document non-existent citations?</h3>
<p>List the exact citation from the paper, record the databases searched (e.g., JSTOR, Google Scholar, Library of Congress), and note the search outcome.</p>

<h3>Should I record student conferences?</h3>
<p>Check school and state consent laws regarding audio recording. In most cases, detailed written notes summarizing questions asked and student answers are standard and effective.</p>

<h3>How do I document AI writing when a student submits a PDF?</h3>
<p>Use static AI detection, plagiarism scanning, citation verification, historical baseline comparisons, and student conferences to build a multi-signal report.</p>

<h3>What tone should be used in academic integrity documentation?</h3>
<p>Maintain an objective, factual, clinical, and neutral tone. Describe observable phenomena without emotive or accusatory language.</p>

<h3>How long should teachers retain AI documentation?</h3>
<p>Follow your institution's academic integrity records retention policy, typically 1 to 5 years after the conclusion of the academic term.</p>

<h3>How does Checkmark Plagiarism simplify documentation for schools?</h3>
<p>Checkmark Plagiarism automatically captures writing playback, generates exportable multi-signal reports, and integrates seamlessly with Canvas and Google Classroom.</p>

<h2>Clear Documentation Protects Both Academic Integrity and Students</h2>
<p>Proper documentation transforms academic integrity reviews from subjective disputes into transparent, evidence-based evaluations. By recording objective facts, document timelines, citation validity, and student explanations, educators uphold academic standards with fairness and professionalism.</p>
<p><strong>Checkmark Plagiarism supports this rigorous approach with AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and integrations with Canvas and Google Classroom.</strong></p>

<hr className="my-8 border-border" />

<p className="font-semibold text-lg text-foreground">See how Checkmark pairs essay writing playback with multi-signal detection to provide exportable, comprehensive documentation for every assignment. <a href="https://teach.checkmarkplagiarism.com/example-report" target="_blank" rel="noopener noreferrer">View a sample report</a> or <a href="/solutions/schools">request a demonstration</a>.</p>`;

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
      currentSlug="2026/8/how-should-teachers-document-suspected-ai-use"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
