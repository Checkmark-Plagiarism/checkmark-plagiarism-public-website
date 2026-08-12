import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "Can Teachers Detect ChatGPT in Student Writing?",
  description: "Learn how teachers detect possible ChatGPT use, what AI detectors identify, their limitations, and why writing-process evidence matters.",
  keywords: [
    "can teachers detect ChatGPT",
    "can teachers tell if you use ChatGPT",
    "how teachers detect ChatGPT",
    "can professors detect ChatGPT",
    "ChatGPT detector for teachers",
    "how schools detect AI writing",
    "can AI-generated essays be detected",
    "AI detection for student writing",
    "signs a student used ChatGPT",
    "AI detector limitations",
    "writing history AI detection",
  ],
  openGraph: {
    images: ["/images/services/report-breakdown-sidebar.png"],
  },
};

export const meta = {
  title: "Can Teachers Detect ChatGPT in Student Writing?",
  description: "Learn how teachers detect possible ChatGPT use, what AI detectors identify, their limitations, and why writing-process evidence matters.",
  "opengraph-image": "/images/services/report-breakdown-sidebar.png",
  date: "08-02-2026",
  readTime: "~14 min read",
  category: "AI Insights",
  categories: ["AI Insights", "Detection", "How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p><strong>Teachers may identify signs that a student used ChatGPT, but no detector can prove authorship with complete certainty. AI-detection tools look for statistical patterns associated with machine-generated text, while teachers may also review drafts, writing history, source use, previous assignments, and the student’s explanation of the work. An AI score should be treated as a reason to review the assignment, not as proof of misconduct.</strong></p>

<p>The rapid adoption of generative artificial intelligence in education has left teachers, students, and parents navigating complex questions about academic integrity. When evaluating student writing, educators draw a clear distinction between identifying statistical writing patterns, determining whether ChatGPT was used, and deciding whether a student followed assignment guidelines. Depending on course policies, AI assistance may be explicitly permitted, restricted to brainstorming, or completely prohibited.</p>

<p>This guide explains how educators evaluate <a href="/services/ai-detection">AI detection for student writing</a>, how detection tools analyze prose, why false flags happen, and why combining process evidence with teacher judgment creates a fairer review for everyone.</p>

<h2>How Do Teachers Detect Possible ChatGPT Use?</h2>
<p>Teachers identify potential AI writing by evaluating multiple independent signals rather than relying on a single piece of software. Modern educators combine digital tools with pedagogical context.</p>

<p>Common methods teachers use to detect potential ChatGPT involvement include:</p>
<ul>
  <li><strong>AI-Detection Software:</strong> Automated algorithms that screen document text for statistical patterns typical of large language models.</li>
  <li><strong>Writing-Process & Revision History:</strong> Examining document creation timelines, edit sessions, copy-paste events, and typing activity in Google Docs or LMS editors.</li>
  <li><strong>Comparison With Previous Assignments:</strong> Noting sudden changes in a student's vocabulary, syntactical style, or subject comprehension.</li>
  <li><strong>Source & Citation Audits:</strong> Verifying whether cited articles exist and whether quotations accurately reflect the referenced literature.</li>
  <li><strong>Prompt & Assignment Knowledge:</strong> Spotting generic responses that ignore specific in-class discussions, localized prompts, or required readings.</li>
  <li><strong>Student Conversations & Oral Defense:</strong> Asking students to explain their thesis, research process, and drafting choices in their own words.</li>
  <li><strong>Drafts, Outlines & Notes:</strong> Reviewing preliminary work, hand-written notes, or research logs submitted during the writing process.</li>
</ul>

<h2>What Does an AI Detector Actually Identify?</h2>
<p>A common misconception is that AI software searches for a secret digital watermark or hidden ChatGPT tag inside student text. In reality, an <a href="/learning/2026/6/chatgpt-detection-explained-how-tools-decide-whether-ai-wrote-it">AI detector for teachers</a> analyzes mathematical text characteristics.</p>

<p>Detectors evaluate writing by measuring key statistical metrics:</p>
<ul>
  <li><strong>Perplexity (Word Choice Predictability):</strong> Generative AI models select words based on statistical probability. Text with low perplexity uses highly predictable word choices, whereas human writing features unexpected vocabulary and creative turns of phrase.</li>
  <li><strong>Burstiness (Sentence Length & Structural Variation):</strong> Humans naturally vary their sentence structures-combining short, punchy statements with long, complex clauses. AI models tend to produce uniform sentence lengths and consistent paragraph rhythms.</li>
  <li><strong>Tone & Vocabulary Uniformity:</strong> AI prose frequently exhibits an overly neutral, polished tone with characteristic transition words (&quot;furthermore,&quot; &quot;moreover,&quot; &quot;in conclusion&quot;, &quot;it is important to note&quot;) and balanced paragraph lengths.</li>
  <li><strong>Passage Discrepancies:</strong> Statistical differences between individual paragraphs within a single document, which may indicate that sections were generated separately or combined with human drafting.</li>
</ul>
<p>The software uses these metrics to output a probability score or confidence classification. It does not output a verified historical fact about who typed the words.</p>

<h2>Can an AI Detector Prove a Student Used ChatGPT?</h2>
<p><strong>No. An AI detector score cannot prove that a student used ChatGPT.</strong></p>

<p>AI detectors generate probabilistic estimates, which means they are subject to inherent limitations:</p>
<ul>
  <li><strong>False Positives:</strong> Authentic human writing identified as AI-generated because the student used formal, structured, or predictable phrasing.</li>
  <li><strong>False Negatives:</strong> AI-generated text flagged as human because the prompt produced unusual phrasing or the student edited the output.</li>
  <li><strong>Tool Discrepancies:</strong> Two different detection platforms often give completely different scores for the exact same paper.</li>
  <li><strong>Sensitivity to Minor Edits:</strong> Changing a few adjectives or rearranging sentences can dramatically alter a detector's score.</li>
</ul>

<p>Furthermore, an AI score cannot tell a teacher which specific model was used, who typed the prompt, whether the student used AI for permitted editing versus full text generation, or what the student's intentions were.</p>

<h2>Why AI Detectors Can Make Mistakes</h2>
<p>Understanding <a href="/learning/2026/7/what-an-ai-score-can-and-cant-tell-you">AI detector limitations</a> helps prevent unfair accusations. Detection software can produce false flags due to several factors:</p>

<ol>
  <li><strong>Short Document Length:</strong> Brief responses (under 150–200 words) lack sufficient statistical sample size for accurate pattern classification.</li>
  <li><strong>Formulaic Writing Templates:</strong> Standard lab reports, 5-paragraph essays, or rigid argumentative structures naturally resemble machine patterns.</li>
  <li><strong>Highly Polished Prose:</strong> Clear, grammatically flawless human writing often gets misclassified because algorithms associate precision with AI models.</li>
  <li><strong>Non-Native English Speakers:</strong> Multilingual learners often write with simpler, more regular vocabulary and rigid grammar patterns, which can trigger false positive flags.</li>
  <li><strong>Permitted Tutoring or Writing Center Help:</strong> Heavy editing assistance from a tutor can standardize a student's prose, causing it to pattern like machine text.</li>
  <li><strong>Human-Edited AI Output:</strong> A student who heavily rewrites ChatGPT text may lower the score, while an honest student who writes formally gets flagged.</li>
</ol>

<h2>Signs That May Cause a Teacher to Review an Assignment</h2>
<p>Rather than relying solely on automated flags, educators watch for qualitative <a href="/learning/2026/6/student-plagiarism-explained-causes-detection-prevention-and-consequences">signs a student used ChatGPT</a>:</p>
<ul>
  <li><strong>Abrupt Vocabulary Elevation:</strong> A paper using graduate-level vocabulary that contrasts with the student's established writing style.</li>
  <li><strong>Vague, Generic Statements:</strong> Flawless prose that speaks in broad generalities without citing specific lectures, textbook chapters, or classroom discussions.</li>
  <li><strong>Plausible Hallucinations:</strong> Confident assertions of false historical facts or scientific principles generated by language model hallucination.</li>
  <li><strong>Fabricated Citations:</strong> Footnotes or APA references citing academic papers or authors that do not exist.</li>
  <li><strong>Repetitive Paragraph Rhythms:</strong> Essay sections that consistently open with identical transition phrases and end with generic summary sentences.</li>
  <li><strong>Failure to Answer the Prompt:</strong> A beautifully written response that addresses a slightly different topic than what was assigned.</li>
  <li><strong>Suspicious Document Logs:</strong> An entire 1,500-word essay appearing in a Google Doc via a single paste event shortly before the deadline.</li>
</ul>
<p>None of these signals prove misconduct by themselves, but together they justify a follow-up review.</p>

<h2>Why Writing-Process Evidence Matters</h2>
<p>To move beyond guesswork, modern educators rely on <a href="/learning/2026/7/how-checkmark-writing-process-analysis-works">writing history AI detection</a>. Writing-process evidence analyzes how an assignment was built over time, offering objective proof of human drafting.</p>

<div className="my-8 rounded-2xl bg-brand-50/60 p-6 border border-brand-200">
  <h3 className="text-lg font-bold text-brand-900 mb-3">Key Process Evidence Signals</h3>
  <ul className="space-y-2 text-sm text-brand-950">
    <li><strong>Session Start Time & Duration:</strong> Verifying that the student spent hours or days actively working in the document.</li>
    <li><strong>Typing vs. Pasting Rhythms:</strong> Differentiating between steady keystroke drafting and sudden multi-paragraph paste blocks.</li>
    <li><strong>Active Revision & Backtracking:</strong> Observing natural sentence deletions, structural reorganization, and typo corrections.</li>
    <li><strong>Citation Entry Timelines:</strong> Checking whether sources were added gradually during research or pasted all at once.</li>
    <li><strong>Screen Transcription Detection:</strong> Spotting rapid, unbroken typing that mirrors retyping text from a secondary device.</li>
  </ul>
</div>

<p>Process evidence is powerful because it vindicates honest students. If a student's paper receives a high AI score due to formal sentence structure, opening their Google Docs revision history to reveal three hours of active typing and revision immediately resolves the concern.</p>

<h2>Reviewing Drafts and Version History</h2>
<p>Instructors frequently inspect version history in Google Docs, Microsoft Word, or LMS submission portals to verify authentic effort.</p>

<p>However, educators keep version history limitations in mind:</p>
<ul>
  <li>A student may legitimately draft an outline in an offline notebook or separate app before copying it into the final document.</li>
  <li>Importing a personal draft from another word processor creates a large paste event that looks suspicious if taken out of context.</li>
  <li>Some word processors do not record detailed keystroke-level logs.</li>
</ul>
<p>For guidance on managing version records, see our article on <a href="/learning/2026/6/how-to-delete-google-docs-version-history-and-why-you-probably-should-not">Google Docs version history best practices</a>.</p>

<h2>Comparing the Assignment With Previous Student Writing</h2>
<p>Teachers evaluate consistency by comparing a flagged paper against earlier work submitted by the same student.</p>

<p>Instructors look at:</p>
<ul>
  <li><strong>Vocabulary and Grammatical Complexity:</strong> Does the vocabulary match the student's past essays and in-class writing?</li>
  <li><strong>Argumentative Structure:</strong> Does the organization reflect how the student typically structures their thoughts?</li>
  <li><strong>Subject Knowledge:</strong> Does the written analysis align with the student's verbal contributions in class?</li>
</ul>
<p><em>Caution for educators:</em> Students can improve dramatically over a semester after visiting a writing center or receiving feedback. A shift in style should prompt conversation, not immediate disciplinary action.</p>

<h2>Reviewing Sources, Citations, and Factual Claims</h2>
<p>Generative AI tools frequently invent source citations-a phenomenon known as hallucination. Checking citations is one of the most reliable ways for <a href="/solutions/school-districts">schools to detect AI writing</a> errors.</p>

<p>Teachers use a simple 6-step citation audit workflow:</p>
<ol>
  <li><strong>Open Cited Links:</strong> Click URLs or search journal titles to confirm the sources exist.</li>
  <li><strong>Verify Authors & Dates:</strong> Confirm that publication years, volume numbers, and author names are accurate.</li>
  <li><strong>Check Claim Support:</strong> Read the cited passage to ensure it actually supports the student's claim.</li>
  <li><strong>Verify Direct Quotes:</strong> Search for quoted text within the original article.</li>
  <li><strong>Review Assignment Guidelines:</strong> Ensure required primary sources were utilized.</li>
  <li><strong>Discuss Source Selection:</strong> Ask the student how and where they located the cited literature.</li>
</ol>

<h2>Talking With the Student About the Assignment</h2>
<p>A supportive, fact-finding conference allows students to explain their work and resolves most AI concerns quickly.</p>

<p>Educators often use seven neutral questions during student meetings:</p>
<ol>
  <li><strong>&quot;Can you walk me through how you developed your main argument?&quot;</strong></li>
  <li><strong>&quot;Which section of the assignment was most challenging to write?&quot;</strong></li>
  <li><strong>&quot;Which sources had the biggest impact on your perspective?&quot;</strong></li>
  <li><strong>&quot;Can you explain this specific paragraph in your own words?&quot;</strong></li>
  <li><strong>&quot;What changes did you make between your early draft and final submission?&quot;</strong></li>
  <li><strong>&quot;Did you use any digital or AI tools to assist your process, and if so, how?&quot;</strong></li>
  <li><strong>&quot;Can you share the research notes, outline, or early drafts you created?&quot;</strong></li>
</ol>
<p>When an instructor states concerns neutrally and shares the available evidence, honest students can easily demonstrate their understanding.</p>

<h2>Required Classroom Examples</h2>

<h3>Example 1: Incorrect AI Flag (False Positive Resolved by Process Evidence)</h3>
<blockquote className="my-4 border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-lg text-emerald-950">
  <p className="font-semibold text-emerald-900 mb-1">Scenario:</p>
  <p className="italic mb-2">A high school senior submits an AP Literature essay that receives an 82% AI score on a commercial detector due to its formal, structured prose.</p>
  <p className="text-sm font-semibold text-emerald-800">Review & Outcome:</p>
  <p className="text-sm text-emerald-900">The teacher opens Checkmark's writing-process timeline and reviews 4.5 hours of documented editing across three days, including outline expansion, sentence revisions, and typo fixes. The process evidence proves authentic student authorship, and the essay is graded normally.</p>
</blockquote>

<h3>Example 2: Suspicious Writing Process (AI Generation & Hallucinated Sources)</h3>
<blockquote className="my-4 border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg text-amber-950">
  <p className="font-semibold text-amber-900 mb-1">Scenario:</p>
  <p className="italic mb-2">A history paper arrives as a single 1,200-word paste block 10 minutes before the deadline, showing zero drafting history. Three cited journal articles do not exist in any academic database.</p>
  <p className="text-sm font-semibold text-amber-800">Review & Outcome:</p>
  <p className="text-sm text-amber-900">The combination of instant paste creation and hallucinated citations justifies an academic review conference. The teacher meets with the student to discuss source selection and review course AI policies.</p>
</blockquote>

<h3>Example 3: Permitted AI Use (Transparent Disclosure)</h3>
<blockquote className="my-4 border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg text-blue-950">
  <p className="font-semibold text-blue-900 mb-1">Scenario:</p>
  <p className="italic mb-2">A teacher allows students to use ChatGPT for brainstorming essay topics provided prompts are disclosed. A student submits an original paper and attaches an appendix listing their AI prompts.</p>
  <p className="text-sm font-semibold text-blue-800">Review & Outcome:</p>
  <p className="text-sm text-blue-900">Because the student followed disclosure guidelines and wrote the actual essay independently (supported by revision history), the submission fully complies with course expectations.</p>
</blockquote>

<h2>Can Teachers Detect ChatGPT After the Text Is Edited?</h2>
<p>Human editing alters the statistical word patterns that AI detectors measure. However, editing creates different evidence trails:</p>
<ul>
  <li>Lightly editing AI text may lower a software score, but it does not create a natural drafting history.</li>
  <li>Inserting personal anecdotes or local class details makes prose sound more individual.</li>
  <li>Combining human paragraphs with AI output creates mixed report signals.</li>
  <li>Running text through AI paraphrasing tools creates distinct patchwriting patterns.</li>
</ul>
<p>A lower AI score does not prove zero AI was used, just as a high score does not prove misconduct. Writing-process history remains the most reliable check regardless of editing.</p>

<h2>Can Teachers Detect ChatGPT Used Only for Brainstorming or Editing?</h2>
<p>If a student uses ChatGPT solely to generate topic ideas, create an outline, or check grammar, the final document text is written by the student. Automated tools cannot reliably spot pre-writing AI assistance in final prose.</p>

<p>That is why schools establish clear guidelines for:</p>
<ul>
  <li><strong>Permitted Uses:</strong> Brainstorming, outlining, grammar checking, concept explanation.</li>
  <li><strong>Prohibited Uses:</strong> Generating full paragraphs, writing essays, creating false citations.</li>
  <li><strong>Disclosure Rules:</strong> Requiring students to include an AI use statement or prompt log.</li>
</ul>

<h2>Is ChatGPT Use the Same as Plagiarism?</h2>
<p>While AI use and plagiarism overlap, they are distinct issues:</p>
<ul>
  <li><strong>Plagiarism:</strong> Passing off existing human writing or ideas as your own without source attribution.</li>
  <li><strong>Unauthorized AI Use:</strong> Submitting machine-generated text as original human drafting, violating course assignment rules.</li>
</ul>
<p>For a complete comparison, read our guide on <a href="/learning/2026/6/ai-detection-tools-and-techniques-how-they-actually-work">AI Detection vs. Plagiarism Detection</a>.</p>

<h2>What Should a Teacher Do When an Assignment Is Flagged?</h2>
<p>Follow a fair 10-step protocol when an assignment produces a concerning AI indicator:</p>

<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border">
  <ol className="space-y-3 font-medium text-foreground">
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">1</span> Evaluate the AI score in context (consider passage length and style).</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">2</span> Highlight the specific passages flagged by the software.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">3</span> Re-read your assignment instructions and AI policy.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">4</span> Audit source citations and check factual claims.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">5</span> Inspect document revision history and paste logs.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">6</span> Compare the work with the student's previous submissions.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">7</span> Schedule a private, supportive conference with the student.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">8</span> Invite the student to share outlines, notes, or early drafts.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">9</span> Follow school academic integrity guidelines.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">10</span> Document all evidence and record the outcome clearly.</li>
  </ol>
</div>

<h2>What Can Students Do If Their Work Is Incorrectly Flagged?</h2>
<p>Students can protect themselves against false AI flags by following smart drafting habits:</p>
<ul>
  <li><strong>Keep Version History Active:</strong> Write directly in Google Docs or tracked word processors rather than copying text from untracked apps.</li>
  <li><strong>Save Outlines & Notes:</strong> Retain preliminary research notes, brainstorm outlines, and rough drafts.</li>
  <li><strong>Disclose Permitted Tool Use:</strong> Include a brief statement detailing any AI tools used for brainstorming or editing.</li>
  <li><strong>Offer an Oral Explanation:</strong> Be prepared to explain your research process and thesis in a meeting.</li>
  <li><strong>Follow School Appeal Procedures:</strong> Request a review that incorporates writing-process evidence.</li>
</ul>

<h2>How Checkmark Helps Teachers Review Possible AI Use</h2>
<p>Checkmark equips educators with a transparent, multi-layered evidence report inside your existing LMS workflow.</p>

<p>Checkmark provides:</p>
<ul>
  <li><strong>Passage-Level AI Indicators:</strong> Calibrated confidence sliders across highlighted passages without black-box percentage claims.</li>
  <li><strong>Plagiarism & Web Source Matching:</strong> Side-by-side quote comparison across billions of web pages and publications.</li>
  <li><strong>Writing-Process Playback:</strong> Session replay showing how an essay evolved line-by-line over time.</li>
  <li><strong>Copy-Paste & Transcription Audits:</strong> Instant detection of massive paste blocks and screen retyping patterns.</li>
  <li><strong>LMS Workflow Integration:</strong> Direct access within <a href="/services/integrations/google-classroom">Google Classroom</a> and <a href="/services/integrations/canvas-lms">Canvas LMS</a>.</li>
</ul>

<h2>Frequently Asked Questions</h2>

<h3>Can teachers tell exactly which AI tool a student used?</h3>
<p>Usually not with certainty. An AI detector identifies statistical writing patterns common to large language models, but it cannot definitively prove whether text came from ChatGPT, Claude, Gemini, or another model.</p>

<h3>Can Google Classroom detect ChatGPT?</h3>
<p>Google Classroom does not natively include an AI detector, but schools connect specialized integrations like Checkmark to screen Google Docs submissions directly within Google Workspace. Read our guide on <a href="/learning/2026/6/connecting-a-plagiarism-checker-to-google-classroom-a-workflow-guide-that-actually-saves-you-time">Google Classroom AI detection workflows</a>.</p>

<h3>Can Canvas detect ChatGPT?</h3>
<p>Canvas LMS relies on external LTI integrations like Checkmark to provide AI detection and writing process evidence inside SpeedGrader. Read our guide on <a href="/learning/2026/6/how-canvas-detects-plagiarism-features-policies-and-the-gaps-you-should-know">Canvas LMS detection features</a>.</p>

<h3>Can professors detect ChatGPT in college essays?</h3>
<p>Yes. College professors combine AI detection tools with source verification, drafting history, comparison with past student papers, and oral defense questions during office hours.</p>

<h3>Is a high AI score proof of cheating?</h3>
<p>No. An AI score is a statistical signal that justifies further teacher review, not standalone proof of misconduct.</p>

<h3>Can ChatGPT writing avoid detection?</h3>
<p>AI-generated text can sometimes produce low or inconsistent detector scores, especially after editing. This is why teachers evaluate writing history and citations alongside AI software.</p>

<h3>Can human writing be incorrectly flagged as AI?</h3>
<p>Yes. False positives occur, particularly for non-native English speakers or formal academic prose. Teachers should review revision history and speak with the student before reaching conclusions.</p>

<hr className="my-8 border-border" />

<p className="font-semibold text-lg text-foreground">See how Checkmark helps teachers evaluate possible AI use with more context than an AI score alone. <a href="https://teach.checkmarkplagiarism.com/example-report" target="_blank" rel="noopener noreferrer">View a sample report</a> or <a href="/solutions/schools">request a demonstration</a>.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/can-teachers-detect-chatgpt"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
