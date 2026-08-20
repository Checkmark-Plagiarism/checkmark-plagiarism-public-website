import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "What Should I Do If I Suspect a Student Used AI?",
  description: "A practical 13-step guide for teachers when suspecting AI use, from gathering evidence and evaluating writing history to student conferences and policy enforcement.",
  keywords: [
    "what to do if student used AI",
    "suspect student used AI",
    "teacher guide AI cheating",
    "how to handle suspected AI writing",
    "academic integrity AI investigation",
    "AI detector investigation process",
    "essay writing playback",
    "talking to student about AI",
    "static AI detection",
    "AI policy enforcement",
  ],
  openGraph: {
    images: ["/images/services/report-breakdown-sidebar.png"],
  },
};

const meta = {
  title: "What Should I Do If I Suspect a Student Used AI?",
  description: "A practical 13-step guide for teachers when suspecting AI use, from gathering evidence and evaluating writing history to student conferences and policy enforcement.",
  "opengraph-image": "/images/services/report-breakdown-sidebar.png",
  date: "08-12-2026",
  readTime: "~15 min read",
  category: "Detection",
  categories: ["Detection", "How It Works", "Teacher Guide"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p><strong>A student submits an assignment that does not sound like their usual work. The vocabulary is suddenly more advanced, the essay is unusually polished, or an AI detector flags portions of the submission. What should you do next? The most important thing is not to make an academic-integrity decision based on a single warning sign or AI detection score.</strong></p>

<p>Suspected AI use should be investigated much like other academic-integrity concerns: gather evidence, review the student's work and writing process, talk with the student, and apply the school's policy consistently.</p>

<p>Tools such as <strong>Checkmark Plagiarism</strong> can help educators through this process with <a href="/services/ai-detection">AI detection</a>, <a href="/services/writing-playback">essay writing playback</a>, static AI detection, <a href="/services/plagiarism-detection">plagiarism detection</a>, <a href="/services/autograder">autograding</a>, and integrations with <a href="/services/integrations/canvas-lms">Canvas</a> and <a href="/services/integrations/google-classroom">Google Classroom</a>.</p>

<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border">
  <p className="font-bold text-foreground mb-3 text-base">A Practical 9-Step Review Process:</p>
  <ol className="space-y-3 font-medium text-foreground text-sm">
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">1</span> Review the assignment yourself.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">2</span> Compare it with the student's previous work.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">3</span> Review AI detection results.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">4</span> Examine the writing process when available.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">5</span> Check suspicious sources and citations.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">6</span> Ask the student to explain their work.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">7</span> Determine how AI may have been used.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">8</span> Compare that use with the assignment's AI policy.</li>
    <li className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">9</span> Document the evidence and follow your school's academic-integrity procedure.</li>
  </ol>
</div>

<h2>1. Do Not Start With an Accusation</h2>
<p>If you suspect that a student used AI, avoid immediately accusing the student of cheating.</p>
<p>There are many legitimate reasons why an assignment might look different from previous work. The student may have spent significantly more time revising, received tutoring, worked with a parent or writing center, used approved grammar assistance, written the assignment in another application, improved since their previous assignment, or used AI in a way that was permitted by the instructor.</p>
<p>AI detectors can also make mistakes.</p>
<p>Instead of beginning with: <em>&quot;You used ChatGPT to write this,&quot;</em> begin by gathering information.</p>
<p>The initial question should be: <strong>&quot;Is there enough evidence here to justify a closer review?&quot;</strong></p>
<p>That creates a fairer process for both the teacher and the student.</p>

<h2>2. Review What Made You Suspicious</h2>
<p>Before running additional checks, identify exactly what caused the concern.</p>
<p>Was it the writing style? The vocabulary? The citations? The AI detection result? The document history? The student's previous performance?</p>
<p>Writing down the specific concerns can help separate a general feeling that an assignment &quot;sounds like AI&quot; from observable evidence.</p>
<p>For example, you might notice that:</p>
<ul>
  <li>The student's vocabulary changed dramatically.</li>
  <li>The assignment contains terminology not used in class.</li>
  <li>Several passages sound unusually generic.</li>
  <li>The essay contains references that cannot be verified.</li>
  <li>Large sections of text appear to have been inserted at once.</li>
  <li>The student normally struggles with grammar but submitted nearly flawless prose.</li>
  <li>The assignment does not fully respond to the specific prompt.</li>
</ul>
<p>None of these observations proves AI use. They simply tell you what to investigate next.</p>

<h2>3. Compare the Assignment With Previous Student Work</h2>
<p>Teachers have an advantage that many AI detection systems do not: <strong>you know the student's writing.</strong></p>
<p>Previous assignments can provide a useful baseline. Compare the suspicious submission with earlier work and look at vocabulary, sentence structure, grammar, organization, tone, citation habits, depth of analysis, common mistakes, and typical paragraph structure.</p>
<p>A dramatic change may justify additional review.</p>
<p>For example, imagine a student whose previous essays contain short sentences, limited vocabulary, and frequent grammatical mistakes. The next assignment suddenly contains sophisticated arguments, advanced terminology, nearly perfect grammar, and carefully structured transitions.</p>
<p>That change does not prove AI use—students can improve. But the larger and more sudden the difference is, the more reasonable it may be to investigate how the assignment was produced.</p>

<h2>4. Run AI Detection, but Treat It as One Signal</h2>
<p>AI detection can help identify writing that contains patterns associated with AI-generated text.</p>
<p><strong>Checkmark Plagiarism provides AI detection</strong> that teachers can use when reviewing student assignments.</p>
<p>The important part is how the result is interpreted. An AI detection result should not automatically become: <em>&quot;The detector says AI, therefore the student cheated.&quot;</em></p>
<p>Instead, it should become another question: <strong>&quot;Does the detection result match the other evidence I am seeing?&quot;</strong></p>
<p>For a detailed guide on interpreting probability metrics, see <a href="/learning/2026/7/what-an-ai-score-can-and-cant-tell-you">what an AI score can and cannot tell you</a>.</p>

<h2>5. Examine How the Assignment Was Written</h2>
<p>The final essay tells you <strong>what the student submitted</strong>. The writing process can provide information about <strong>how the student created it</strong>.</p>
<p>This can be especially valuable when investigating possible AI use. A typical writing process may include creating an outline, writing individual paragraphs, revising sentences, moving sections around, adding evidence, correcting mistakes, and rewriting conclusions.</p>
<p>AI-assisted writing may sometimes produce very different activity. For example, a nearly empty document might suddenly receive several hundred words of polished text.</p>

<h3>Use Essay Writing Playback</h3>
<p><strong>Checkmark Plagiarism's essay writing playback</strong> allows teachers to review how an assignment developed rather than seeing only the final submission. Learn more about <a href="/learning/2026/7/how-checkmark-writing-process-analysis-works">how Checkmark writing process analysis works</a>.</p>
<p>Instead of telling a student: <em>&quot;Your essay sounds like ChatGPT,&quot;</em> a teacher may be able to ask a more specific question: <strong>&quot;I noticed that several paragraphs appeared in the document at once. Can you explain how you wrote that section?&quot;</strong></p>

<h2>6. Do Not Assume That Pasted Text Means AI</h2>
<p>Large text additions can be important, but they need context. Students legitimately paste content into assignments for many reasons (quotations, research notes, citations, outlines, assignment instructions, material drafted elsewhere).</p>
<p>Therefore: <strong>Pasted text is evidence of pasting—not automatically evidence of ChatGPT.</strong></p>
<p>If writing playback shows a substantial section appearing at once, ask the student about it. If they say the passage was written in another document, they may be able to show that draft or explain the writing process.</p>

<h2>7. Verify Sources, Quotations, and Citations</h2>
<p>If the assignment contains citations, verify any that appear suspicious. Generative AI systems can sometimes produce references that sound legitimate but contain incorrect or fabricated information.</p>
<p>Check whether the source exists, the author is correct, the article or book has the stated title, the quotation actually appears in the source, and the page numbers are accurate.</p>
<p>A fictional citation can be particularly useful during a student conversation. Rather than asking broadly whether the student used AI, ask: <strong>&quot;Can you show me where you found this source?&quot;</strong></p>

<h2>8. Talk to the Student About the Assignment</h2>
<p>A conversation with the student is often one of the most useful steps in the process. The conversation does not need to begin as an interrogation.</p>
<p>Useful questions include:</p>
<ul>
  <li>What is the main argument of your essay?</li>
  <li>How did you decide on this thesis?</li>
  <li>What sources did you use?</li>
  <li>Why did you choose this example?</li>
  <li>What does this paragraph mean?</li>
  <li>Can you explain this term?</li>
  <li>What part of the assignment was hardest?</li>
  <li>Which section did you revise the most?</li>
  <li>How did you write this particular passage?</li>
  <li>Did you use any AI tools while completing the assignment? If so, how?</li>
</ul>
<p>The goal is to understand whether the student can explain both the <strong>content</strong> and the <strong>process</strong> behind the submitted work.</p>

<h2>9. Ask About AI Use Specifically</h2>
<p>If your school allows some forms of AI assistance, asking whether a student &quot;used AI&quot; may not be specific enough. There is a substantial difference between using AI to brainstorm topics, create study questions, suggest an outline, check grammar, or generate entire essays.</p>
<p>A student may truthfully say: <em>&quot;Yes, I used ChatGPT.&quot;</em> That does not necessarily mean they violated the assignment policy. The next question is: <strong>&quot;How did you use it?&quot;</strong></p>

<h2>10. Compare the AI Use With Your Assignment Policy</h2>
<p>The relevant issue is not simply whether AI was involved—it is whether the student's use of AI violated the rules.</p>
<div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">Policy A: No AI</p>
    <p className="text-xs text-muted-foreground">Prohibits all generative AI assistance. Rewriting or drafting with AI violates rules.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">Policy B: Brainstorming Only</p>
    <p className="text-xs text-muted-foreground">AI permitted for outlining or topic generation, but final text must be human drafted.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">Policy C: Disclosure Required</p>
    <p className="text-xs text-muted-foreground">AI allowed if identified. Issues involve failure to disclose rather than tool use itself.</p>
  </div>
</div>

<h2>11. Review the Evidence Together</h2>
<p>After investigating the assignment, consider all of the evidence rather than focusing on the strongest-looking individual signal.</p>

<div className="my-6 rounded-2xl bg-brand-50/60 p-6 border border-brand-200">
  <p className="font-bold text-brand-900 mb-2">Building a Multi-Signal Case:</p>
  <p className="text-sm font-semibold text-brand-950">Detector score + Style shift + Instant paste block + Fabricated citations + Student unable to explain work</p>
  <p className="text-xs text-brand-800 mt-2">Together, these signals create a substantially stronger body of evidence for administrative review.</p>
</div>

<h2>12. Document What You Found</h2>
<p>If the concern may lead to an academic-integrity proceeding, document the evidence: the submitted assignment, AI detection results, writing-history observations, previous student work examples, questionable citations, notes from the student conversation, assignment instructions, and school policy rules.</p>

<h2>13. Follow Your School's Existing Academic-Integrity Process</h2>
<p>Follow your established institutional procedures. Students should not face dramatically different consequences simply because different teachers interpret an AI detector differently. Read our full guide on <a href="/learning/2026/8/can-i-prove-that-a-student-used-chatgpt">can I prove that a student used ChatGPT?</a></p>

<h2>Frequently Asked Questions</h2>

<h3>What should I do first if I think a student used ChatGPT?</h3>
<p>Start by identifying the specific reasons the assignment raised concerns. Review the student's previous work, AI detection results, writing history when available, and the assignment itself before making an accusation.</p>

<h3>Should I confront a student if an AI detector flags their paper?</h3>
<p>An AI detection result can justify additional review, but it is better to gather more context before accusing a student of misconduct. Compare previous work, review the writing process, verify sources, and discuss the assignment with the student.</p>

<h3>What questions should I ask a student suspected of using AI?</h3>
<p>Ask the student to explain their thesis, arguments, sources, terminology, writing process, and specific passages. You can also ask directly whether AI tools were used and, if so, what role they played.</p>

<h3>What if a student admits using ChatGPT?</h3>
<p>Determine how ChatGPT was used and compare that use with the assignment policy. Brainstorming with AI and submitting a completely generated essay are very different forms of assistance.</p>

<h3>Does pasted text mean a student used AI?</h3>
<p>No. Pasted text only establishes that text was inserted into a document. It could have come from AI, another document, research notes, or the student's own previous draft. Ask the student to explain the source of the text.</p>

<h3>Is an AI detection score enough to fail a student?</h3>
<p>AI detection should generally be considered alongside other evidence. Schools should establish clear procedures for how AI detection results contribute to academic-integrity decisions.</p>

<h3>How can I investigate AI use if the student uploaded a completed document?</h3>
<p>Static AI detection can help analyze finished documents when writing-history information is unavailable. Teachers can combine this with previous student work, source verification, and a conversation with the student.</p>

<h3>How does Checkmark Plagiarism help teachers investigate AI use?</h3>
<p>Checkmark Plagiarism combines **AI detection, essay writing playback, static AI detection, plagiarism checking, autograding, and Canvas and Google Classroom integrations**, giving educators multiple sources of information when reviewing an assignment.</p>

<h2>Investigate the Process, Not Just the AI Score</h2>
<p>When a student assignment raises concerns, teachers need more than a percentage. They need context.</p>
<p><strong>Checkmark Plagiarism helps teachers examine that broader picture through AI detection, essay writing playback, static AI detection, plagiarism checking, autograding, and integrations with Canvas and Google Classroom.</strong></p>
<p>When AI use is suspected, the goal should not be to find a single technological &quot;gotcha.&quot; It should be to gather enough evidence to understand what happened, give the student an opportunity to explain their work, and apply the school's academic-integrity policy consistently.</p>

<hr className="my-8 border-border" />

<p className="font-semibold text-lg text-foreground">See how Checkmark helps teachers investigate suspected AI use with complete context. <a href="https://teach.checkmarkplagiarism.com/example-report" target="_blank" rel="noopener noreferrer">View a sample report</a> or <a href="/solutions/schools">request a demonstration</a>.</p>`;

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
      currentSlug="2026/8/what-should-i-do-if-i-suspect-a-student-used-ai"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
