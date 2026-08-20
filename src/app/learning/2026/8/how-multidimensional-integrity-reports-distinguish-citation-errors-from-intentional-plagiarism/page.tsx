import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Multidimensional Integrity Reports Distinguish Citation Errors From Intentional Plagiarism | Checkmark Plagiarism",
  description: "Discover how multidimensional integrity reports combine side-by-side source verification, passage-level AI detection, and keystroke playback to separate clerical citation errors from intentional academic dishonesty.",
  keywords: [
    "multidimensional integrity reports",
    "citation errors vs plagiarism",
    "developmental patchwriting",
    "Checkmark Plagiarism",
    "Essay Playback",
    "passage-level AI detection",
    "academic integrity policy",
    "keystroke dynamics",
    "Canvas LMS plagiarism checker",
    "pedagogical integrity",
    "restorative justice in education"
  ],
  openGraph: {
    images: ["/images/services/report-plagiarism-view.png"],
  },
};

const meta = {
  title: "How Multidimensional Integrity Reports Distinguish Citation Errors From Intentional Plagiarism | Checkmark Plagiarism",
  description: "Discover how multidimensional integrity reports combine side-by-side source verification, passage-level AI detection, and keystroke playback to separate clerical citation errors from intentional academic dishonesty.",
  "opengraph-image": "/images/services/report-plagiarism-view.png",
  date: "08-18-2026",
  readTime: "~15 min read",
  category: "Plagiarism Detection",
  categories: ["Plagiarism Detection", "Academic Integrity", "EdTech", "Teacher Guide", "Pedagogy"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<!-- Executive Summary Card -->
<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6 text-foreground">
  <div class="flex items-center gap-2 mb-3">
    <span class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white">
      Executive Summary
    </span>
  </div>
  <p class="text-foreground font-medium leading-relaxed m-0">
    For more than two decades, educational institutions have relied on single, one-dimensional aggregate scores—such as a blunt <strong>&ldquo;38% Similarity&rdquo;</strong> or <strong>&ldquo;85% AI&rdquo;</strong>—to evaluate the authenticity of student writing. These reductive metrics create catastrophic pedagogical blind spots: they treat a missing set of quotation marks, an unformatted bibliography, disciplinary terminology, and developmental patchwriting identically to intentional cut-and-paste fraud and outsourced contract cheating. <strong>Checkmark Plagiarism</strong> resolves this crisis through a <strong>Multidimensional Integrity Report Architecture</strong>. By unifying <a href="/services/ai-detection" class="text-primary font-semibold underline">passage-level AI detection</a> with calibrated confidence sliders, <a href="/services/plagiarism-detection" class="text-primary font-semibold underline">side-by-side plagiarism source verification</a> with verbatim quote alignment, patent-pending <a href="/services/writing-process" class="text-primary font-semibold underline">Essay Playback™ keystroke dynamics</a>, and <a href="/services/autograder" class="text-primary font-semibold underline">quote-anchored rubric autograding</a>, Checkmark provides educators with transparent, defensible &ldquo;receipts.&rdquo; This multidimensional approach enables teachers, department chairs, and academic integrity boards to protect honest students, coach emerging writers through citation mechanics, and accurately identify deliberate deception without relying on punitive black-box scores.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> provides the pedagogical and technical foundation for modern writing assessment, unifying <a href="/services/plagiarism-detection">side-by-side source verification</a> with <a href="/services/writing-process">patent-pending Essay Playback™</a>, <a href="/services/ai-detection">passage-level AI writing detection</a>, <a href="/services/autograder">quote-anchored rubric autograding</a>, and direct LTI 1.3 integrations for <a href="/services/integrations/canvas-lms">Canvas LMS</a> and <a href="/services/integrations/buzz-lms">Agilix Buzz LMS</a>.</p>

<img src="/images/services/report-plagiarism-view.png" alt="Checkmark Plagiarism Multidimensional Integrity Report Dashboard with Side-by-Side Source Alignment and AI Analysis" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>1. The Breakdown of One-Dimensional Scores: Why Single Percentages Poison Pedagogy</h2>

<p>In secondary English classrooms, AP Capstone seminars, and university writing programs, the submission of a major research paper is too often followed by a destructive ritual: the panic of the aggregate score.</p>

<!-- The One-Dimensional Integrity Crisis Visual Component -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-sans">
  <div class="text-center font-bold text-amber-400 text-sm uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
    THE ONE-DIMENSIONAL INTEGRITY CRISIS IN EDUCATION
  </div>
  
  <div class="space-y-4 max-w-2xl mx-auto">
    <div class="rounded-xl bg-slate-800 p-4 border border-slate-700 text-center font-semibold text-teal-300 text-xs sm:text-sm">
      📄 Student Submits 2,000-Word Literary Analysis with 8 Primary &amp; Secondary Sources
    </div>
    
    <div class="flex justify-center text-slate-500 font-bold text-lg">&darr;</div>
    
    <div class="rounded-xl bg-rose-950/80 p-4 border border-rose-600/70 text-center font-bold text-rose-300 text-sm sm:text-base">
      ⚠️ Legacy One-Dimensional Scanner Generates: &ldquo;41% Similarity&rdquo;
    </div>
    
    <div class="flex justify-center text-slate-500 font-bold text-lg">&darr;</div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
      <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700 space-y-2">
        <div class="font-bold text-rose-400 text-xs flex items-center gap-1.5 uppercase tracking-wide">
          <span>⚖️ The Educator&rsquo;s Dilemma</span>
        </div>
        <ul class="space-y-1.5 text-slate-300 text-[11px] list-disc pl-4">
          <li>Stares at an ominous red badge in Canvas LMS</li>
          <li>Faces 140 essays to grade over the weekend</li>
          <li>Spends 45 minutes manually hunting down false matches</li>
          <li>Lacks granular drafting timeline or keystroke context</li>
          <li>Forced into an adversarial &ldquo;police&rdquo; role</li>
        </ul>
      </div>

      <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700 space-y-2">
        <div class="font-bold text-amber-300 text-xs flex items-center gap-1.5 uppercase tracking-wide">
          <span>😰 The Student&rsquo;s Trauma</span>
        </div>
        <ul class="space-y-1.5 text-slate-300 text-[11px] list-disc pl-4">
          <li>Receives an automated zero notification &amp; disciplinary threat</li>
          <li><em>&ldquo;I cited every single book in my Works Cited—why am I a cheater?&rdquo;</em></li>
          <li>Suffers acute anxiety; academic trust permanently shatters</li>
          <li>Driven toward synonym spinners &amp; cloaking tools out of fear</li>
        </ul>
      </div>
    </div>
    
    <div class="flex justify-center text-slate-500 font-bold text-lg">&darr;</div>
    
    <div class="rounded-xl bg-slate-800 p-3.5 border border-slate-700 text-center text-rose-300 font-semibold text-xs sm:text-sm">
      💥 SYSTEMATIC FAILURE: False Accusations, Eroded Trust, &amp; Teacher Burnout
    </div>
  </div>
</div>

<p>When an automated plagiarism checker flags a student&rsquo;s essay with a <strong>41% Similarity Index</strong>, or an AI detector returns an <strong>82% AI Probability</strong>, what does that number actually prove?</p>

<p>Mathematically, a traditional similarity score is merely a crude ratio of overlapping character n-grams relative to total document length:</p>

<div class="my-6 rounded-xl border border-border bg-muted/50 p-4 text-center font-mono text-sm sm:text-base text-foreground font-semibold">
  Similarity Index = ( &sum; Matched Tokens / Total Document Tokens ) &times; 100
</div>

<p>This simple formula collapses fundamentally different textual and pedagogical realities into one undifferentiated integer:</p>

<ol>
  <li><strong>Properly attributed block quotations</strong> from historical documents, case law, or literary texts.</li>
  <li><strong>Standardized assignment headers and prompts</strong> (e.g., <em>&ldquo;AP European History Document-Based Question 2: The Industrial Revolution&rdquo;</em>).</li>
  <li><strong>Established disciplinary collocations</strong> (e.g., <em>&ldquo;statistically significant difference at the p &lt; 0.05 level&rdquo;</em> or <em>&ldquo;mitochondria generate adenosine triphosphate through oxidative phosphorylation&rdquo;</em>).</li>
  <li><strong>Institutional bibliography and Works Cited entries</strong> formatted according to APA, MLA, or Chicago standards.</li>
  <li><strong>Clerical citation formatting mistakes</strong> (e.g., providing an author attribution and parenthetical page number but inadvertently omitting quotation marks around a 12-word clause).</li>
  <li><strong>Developmental patchwriting</strong> by English Language Learners (ELL) or novice researchers struggling to summarize complex scholarship.</li>
  <li><strong>Wholesale academic dishonesty</strong> (e.g., pasting stolen paragraphs from commercial blogs, purchasing essays, or utilizing generative AI models).</li>
</ol>

<hr class="my-8 border-border" />

<h3>The Human Toll of Single-Score Thresholds</h3>

<p>To manage overwhelming grading queues, many school districts and university departments instituted administrative policies mandating disciplinary review for any submission exceeding a fixed percentage threshold (such as <strong>20% Similarity</strong> or <strong>30% AI</strong>).</p>

<p>These arbitrary cutoff policies trigger severe institutional failures:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-5">
  <div class="rounded-xl border border-rose-300 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 p-5">
    <div class="flex items-center gap-2 mb-3">
      <span class="inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-bold bg-rose-600 text-white">
        TYPE I FALSE POSITIVE
      </span>
    </div>
    <h4 class="text-sm font-bold text-foreground mb-1">Punishing Diligent Researchers</h4>
    <p class="text-xs text-muted-foreground mb-3 leading-relaxed">
      A high-achieving student who analyzes three constitutional amendments and incorporates five extensive legal citations will naturally trigger a 35% to 45% similarity score.
    </p>
    <div class="space-y-1.5 text-xs bg-background/60 p-3 rounded-lg border border-rose-200 dark:border-rose-900/40">
      <div><strong>Institutional Consequence:</strong> Student is subjected to humiliating honor code investigations despite practicing exemplary scholarship.</div>
    </div>
  </div>

  <div class="rounded-xl border border-amber-500/40 bg-amber-50/40 dark:bg-amber-950/20 p-5">
    <div class="flex items-center gap-2 mb-3">
      <span class="inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-bold bg-amber-600 text-white">
        TYPE II FALSE NEGATIVE
      </span>
    </div>
    <h4 class="text-sm font-bold text-foreground mb-1">Overlooking Sophisticated Fraud</h4>
    <p class="text-xs text-muted-foreground mb-3 leading-relaxed">
      A student who copies an entire essay, passes it through a commercial paraphrasing tool (e.g., QuillBot), or instructs ChatGPT to insert typos returns an aggregate similarity score of 4% and an AI score of 12%.
    </p>
    <div class="space-y-1.5 text-xs bg-background/60 p-3 rounded-lg border border-amber-200 dark:border-amber-900/40">
      <div><strong>Institutional Consequence:</strong> The dishonest submission passes undetected because legacy scanners lack process-level verification.</div>
    </div>
  </div>
</div>

<div class="my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <h4 class="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Systemic Harms of Percentage-Only Enforcement</h4>
  <ul class="space-y-3 text-xs text-muted-foreground">
    <li class="flex items-start gap-2">
      <span class="text-rose-500 font-bold shrink-0">&bull;</span>
      <span><strong>Disproportionate Harm to Vulnerable Populations:</strong> Empirical linguistic studies demonstrate that non-native English speakers and neurodivergent students rely more heavily on formulaic syntactic frames and standardized transitional phrases. One-dimensional AI detectors flag ESL/ELL writing at rates up to <strong>60% higher</strong> than native writing due to lower vocabulary burstiness and predictable grammatical structures.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-rose-500 font-bold shrink-0">&bull;</span>
      <span><strong>Educator Cognitive Overload &amp; Cynicism:</strong> Teachers are forced into the role of forensic detectives, spending dozens of unpaid hours cross-referencing broken search links and defending grading decisions against angry parents and administrators.</span>
    </li>
  </ul>
</div>

<p>To restore pedagogical sanity and ethical fairness to writing assessment, academic institutions must transition from one-dimensional aggregate scores to <strong>Multidimensional Integrity Reports</strong>.</p>

<hr class="my-8 border-border" />

<h2>2. The Taxonomy of Textual Overlap: Distinguishing Mechanics from Malice</h2>

<p>When an educator notices overlapping text between a student&rsquo;s submission and an existing source, that overlap represents one of four distinct categories. Treating all four identically destroys the learning process.</p>

<!-- 4-Quadrant Visual Matrix Component -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wider mb-2">
    THE FOUR QUADRANTS OF TEXTUAL OVERLAP
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    Mapping student intent against mechanical writing competence to guide ethical evaluation
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Quadrant 4: Top-Left -->
    <div class="rounded-xl bg-slate-800/90 border border-rose-500/50 p-4 relative flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
            QUADRANT 4
          </span>
          <span class="text-[10px] text-slate-400 font-mono">High Deception &bull; Low Competence</span>
        </div>
        <h4 class="text-sm font-bold text-rose-300 m-0 mb-1.5">Paraphrased &amp; Cloaked Fraud</h4>
        <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4 mb-3">
          <li>Synonym-spun articles &amp; translated foreign text</li>
          <li>Commercial paraphrasing tool exports (QuillBot)</li>
          <li>Intentional citation masking &amp; character cloaking</li>
        </ul>
      </div>
      <div class="text-[11px] text-slate-400 bg-slate-950/70 p-2.5 rounded border border-slate-800">
        <strong>Action:</strong> Examine External Paste Buffer to inspect original clipboard prose.
      </div>
    </div>

    <!-- Quadrant 1: Top-Right -->
    <div class="rounded-xl bg-slate-800/90 border border-rose-500/80 p-4 relative flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-rose-600 text-white">
            QUADRANT 1
          </span>
          <span class="text-[10px] text-slate-400 font-mono">High Deception &bull; High Competence</span>
        </div>
        <h4 class="text-sm font-bold text-rose-300 m-0 mb-1.5">Wholesale Plagiarism &amp; AI Generation</h4>
        <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4 mb-3">
          <li>Direct verbatim cut-and-paste without credit</li>
          <li>Second-screen manual transcription of AI answers</li>
          <li>Unacknowledged LLM generation &amp; contract cheating</li>
        </ul>
      </div>
      <div class="text-[11px] text-slate-400 bg-slate-950/70 p-2.5 rounded border border-slate-800">
        <strong>Action:</strong> Restorative academic review, assignment zero, and supervised rewrite.
      </div>
    </div>

    <!-- Quadrant 3: Bottom-Left -->
    <div class="rounded-xl bg-slate-800/90 border border-amber-500/50 p-4 relative flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            QUADRANT 3
          </span>
          <span class="text-[10px] text-slate-400 font-mono">Low Deception &bull; Low Competence</span>
        </div>
        <h4 class="text-sm font-bold text-amber-300 m-0 mb-1.5">Developmental Patchwriting</h4>
        <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4 mb-3">
          <li>Vocabulary scaffolding &amp; novice source synthesis</li>
          <li>ELL / ESL syntax mimicry with thesaurus pauses</li>
          <li>Cognitive struggle with dense disciplinary concepts</li>
        </ul>
      </div>
      <div class="text-[11px] text-slate-400 bg-slate-950/70 p-2.5 rounded border border-slate-800">
        <strong>Action:</strong> Formative coaching on synthesis; revision opportunity with zero penalty.
      </div>
    </div>

    <!-- Quadrant 2: Bottom-Right -->
    <div class="rounded-xl bg-slate-800/90 border border-teal-500/50 p-4 relative flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
            QUADRANT 2
          </span>
          <span class="text-[10px] text-slate-400 font-mono">Zero Deception &bull; High Competence</span>
        </div>
        <h4 class="text-sm font-bold text-teal-300 m-0 mb-1.5">Legitimate Academic Overlap &amp; Quotes</h4>
        <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4 mb-3">
          <li>Fully cited primary block quotes &amp; footnotes</li>
          <li>Disciplinary collocations &amp; scientific formulas</li>
          <li>Accurate Works Cited entries &amp; minor punctuation lapses</li>
        </ul>
      </div>
      <div class="text-[11px] text-slate-400 bg-slate-950/70 p-2.5 rounded border border-slate-800">
        <strong>Action:</strong> Auto-verify via smart filters; award credit for disciplinary fluency.
      </div>
    </div>
  </div>
</div>

<p>Understanding this taxonomy allows educators to apply targeted pedagogical coaching rather than inappropriate disciplinary penalties:</p>

<h3>Quadrant 1: Wholesale Plagiarism &amp; AI Generation (Intentional Deception + High Competence)</h3>
<ul>
  <li><strong>Characteristics:</strong> Direct cut-and-paste of full paragraphs from websites, journals, or peer papers without attribution; submitting text generated entirely by large language models (LLMs) while claiming personal authorship.</li>
  <li><strong>Student Intent:</strong> High. The objective is to circumvent the cognitive effort of writing and research to obtain unearned credit.</li>
  <li><strong>Appropriate Action:</strong> Formal academic integrity review, zero grade on the assignment, mandatory revision with reflective writing, or disciplinary referral per institutional policy.</li>
</ul>

<h3>Quadrant 2: Legitimate Academic Overlap (Zero Deception + High Competence)</h3>
<ul>
  <li><strong>Characteristics:</strong> Properly formatted and cited direct quotations, common disciplinary phraseology, standardized methodology descriptions, and bibliographic entries.</li>
  <li><strong>Student Intent:</strong> None. The student adheres to scholarly conventions.</li>
  <li><strong>Appropriate Action:</strong> None. Software should automatically isolate and visually verify these elements without inflating suspicion metrics.</li>
</ul>

<h3>Quadrant 3: Developmental Patchwriting (Zero Deception + Low Competence)</h3>
<ul>
  <li><strong>Characteristics:</strong> Coined by composition scholar Rebecca Howard, <strong>patchwriting</strong> occurs when a student copies from a source text, deletes a few words, changes grammatical tense, or swaps minor synonyms while retaining the original syntax and rhythm.</li>
  <li><strong>Student Intent:</strong> None to low. Extensive research confirms patchwriting is a natural developmental stage for novice researchers and ELL students engaging with difficult, unfamiliar disciplinary material. The student understands the overarching concept but lacks the specialized academic vocabulary to restate it independently.</li>
  <li><strong>Appropriate Action:</strong> Instructional intervention. The student does not belong in front of an honor board; they need targeted instruction in summarizing, analyzing, and synthesizing academic evidence.</li>
</ul>

<h3>Quadrant 4: Mechanical Citation &amp; Formatting Lapses (Zero Deception + Moderate Competence)</h3>
<ul>
  <li><strong>Characteristics:</strong> The student provides parenthetical citations <code>(Morrison, 1987, p. 114)</code> and includes the source in the bibliography, but omits quotation marks around verbatim clauses, transposes author names, or misplaces page references.</li>
  <li><strong>Student Intent:</strong> None. The student transparently signaled the intellectual origin of the ideas but committed clerical errors in execution.</li>
  <li><strong>Appropriate Action:</strong> Targeted formative feedback on MLA/APA punctuation rules and minor rubric deductions under &ldquo;Writing Conventions,&rdquo; never an accusation of academic fraud.</li>
</ul>

<hr class="my-8 border-border" />

<h2>3. Checkmark Plagiarism&rsquo;s Multidimensional Integrity Report Architecture</h2>

<p><strong>Checkmark Plagiarism</strong> (<a href="https://checkmarkplagiarism.com" class="text-primary font-semibold underline">checkmarkplagiarism.com</a>) replaces the flawed single-score paradigm with a unified, four-pillar evidence architecture. Instead of asking teachers to guess what an ambiguous percentage means, Checkmark delivers a multidimensional dossier of transparent, verifiable &ldquo;receipts.&rdquo;</p>

<!-- 4 Pillars Architecture Component -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="text-center font-bold text-foreground text-sm uppercase tracking-wider mb-6">
    THE FOUR PILLARS OF CHECKMARK&rsquo;S MULTIDIMENSIONAL REPORT
  </div>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <!-- Pillar 1 -->
    <div class="rounded-xl border border-cyan-500/30 bg-cyan-50/40 dark:bg-cyan-950/20 p-4 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-600 text-white text-xs font-bold">1</span>
          <h3 class="text-sm font-bold text-foreground m-0 p-0">Passage-Level AI</h3>
        </div>
        <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-3">
          <li>Sentence-by-sentence highlights</li>
          <li>Calibrated confidence scale</li>
          <li>Perplexity &amp; burstiness metrics</li>
          <li>Strict &lt;150w N/A guardrail</li>
        </ul>
      </div>
      <div class="pt-2 border-t border-cyan-500/20 text-[10px] font-semibold text-cyan-700 dark:text-cyan-300">
        <a href="/services/ai-detection" class="hover:underline">Explore AI Detection &rarr;</a>
      </div>
    </div>

    <!-- Pillar 2 -->
    <div class="rounded-xl border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-4 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold">2</span>
          <h3 class="text-sm font-bold text-foreground m-0 p-0">Side-by-Side Sources</h3>
        </div>
        <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-3">
          <li>Billions of live web pages</li>
          <li>Verbatim matching highlights</li>
          <li>Intra-school peer repository</li>
          <li>Two-way linked evidence cards</li>
        </ul>
      </div>
      <div class="pt-2 border-t border-teal-500/20 text-[10px] font-semibold text-teal-700 dark:text-teal-300">
        <a href="/services/plagiarism-detection" class="hover:underline">Explore Plagiarism Engine &rarr;</a>
      </div>
    </div>

    <!-- Pillar 3 -->
    <div class="rounded-xl border border-indigo-500/30 bg-indigo-50/40 dark:bg-indigo-950/20 p-4 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">3</span>
          <h3 class="text-sm font-bold text-foreground m-0 p-0">Essay Playback™</h3>
        </div>
        <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-3">
          <li>Keystroke-by-keystroke time</li>
          <li>1x to 8x scrubbable video</li>
          <li>External paste buffer cache</li>
          <li>Typing latency &amp; bursts</li>
        </ul>
      </div>
      <div class="pt-2 border-t border-indigo-500/20 text-[10px] font-semibold text-indigo-700 dark:text-indigo-300">
        <a href="/services/writing-process" class="hover:underline">Explore Essay Playback™ &rarr;</a>
      </div>
    </div>

    <!-- Pillar 4 -->
    <div class="rounded-xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">4</span>
          <h3 class="text-sm font-bold text-foreground m-0 p-0">Rubric Autograder</h3>
        </div>
        <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-3">
          <li>Criterion-level point scoring</li>
          <li>Quote-anchored justifications</li>
          <li>Teacher final edit authority</li>
          <li>LMS gradebook passback</li>
        </ul>
      </div>
      <div class="pt-2 border-t border-emerald-500/20 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
        <a href="/services/autograder" class="hover:underline">Explore AI Autograder &rarr;</a>
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h3>Pillar 1: Passage-Level AI Detection with Calibrated Confidence Sliders</h3>

<p>Generic AI detectors assign a single, sweeping probability score (e.g., &ldquo;78% AI&rdquo;) to an entire document, providing zero insight into which specific sentences were generated by machine and which were authored by the student.</p>

<p>Checkmark&rsquo;s AI detection engine operates with surgical granularity:</p>
<ul>
  <li><strong>Passage-Level Highlighting:</strong> Underlines individual sentences and paragraphs directly within the submission text, color-coded by linguistic predictability.</li>
  <li><strong>Calibrated Confidence Sliders:</strong> Rather than a binary &ldquo;AI vs. Human&rdquo; verdict, each flagged passage features an evidence card displaying a calibrated continuum between typical human writing style and typical AI patterns.</li>
  <li><strong>Linguistic Architecture Analysis:</strong> Measures sentence burstiness (variation in sentence length and rhythm), perplexity (statistical unexpectedness of word sequences), and transition predictability.</li>
  <li><strong>Strict Short-Text Guardrails:</strong> For passages or submissions below ~150 words, Checkmark displays <code>N/A</code> rather than generating unreliable guesses on statistically insufficient sample sizes.</li>
  <li><strong>Educator-Only Flag Privacy:</strong> Flag statuses (<code>Flagged</code>, <code>Resolved</code>, <code>Not Flagged</code>) are strictly confidential to teachers, preventing unverified automated flags from appearing on student portals.</li>
  <li><strong>Paraphraser &amp; Humanizer Resistance:</strong> While tools like QuillBot or Undetectable AI manipulate surface vocabulary to bypass legacy scanners, they cannot alter underlying structural cadence or replicate authentic keystroke patterns.</li>
</ul>

<img src="/images/services/report-breakdown-sidebar.png" alt="Checkmark Passage-Level AI Breakdown Sidebar with Calibrated Confidence Sliders" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h3>Pillar 2: Side-by-Side Plagiarism Source Verification &amp; Peer Matching</h3>

<p>A similarity score without source context is useless. Checkmark provides an intuitive, split-screen verification interface:</p>

<!-- Side-by-Side Source Verification Mockup Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 font-mono text-xs shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm mb-4 pb-2 border-b border-slate-800 font-sans">
    CHECKMARK SIDE-BY-SIDE SOURCE VERIFICATION INTERFACE
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
    <!-- Left Pane: Student Manuscript -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700 flex flex-col justify-between">
      <div>
        <div class="text-teal-400 font-bold mb-2 flex items-center justify-between font-sans">
          <span>STUDENT SUBMISSION (PAGE 3)</span>
          <span class="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300 font-mono">Paragraph 2</span>
        </div>
        <div class="bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-slate-300 font-sans text-xs leading-relaxed">
          <p class="m-0">
            <span class="bg-amber-500/20 text-amber-200 px-1 py-0.5 rounded font-semibold border-b-2 border-amber-400">
              The rapid proliferation of generative AI tools in secondary classrooms has triggered significant pedagogical debates surrounding authentic student authorship and evaluation.
            </span>
          </p>
        </div>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-400 font-sans">
        <span class="text-amber-300 font-medium">⚠️ Parenthetical Citation: Missing</span>
        <span class="text-[10px] text-slate-500">Char Offset: 840–1,024</span>
      </div>
    </div>

    <!-- Right Pane: Matched Source -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-amber-500/40 flex flex-col justify-between">
      <div>
        <div class="text-amber-400 font-bold mb-2 flex items-center justify-between font-sans">
          <span>MATCHED SOURCE (LIVE WEB REPOSITORY)</span>
          <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded font-semibold border border-amber-700">96% Match</span>
        </div>
        <div class="space-y-2 text-slate-300 text-xs font-sans">
          <div class="bg-slate-950/80 p-3 rounded-lg border border-slate-800 space-y-1">
            <div class="text-xs font-semibold text-slate-200">🏛️ Journal of Educational Technology (2024)</div>
            <div class="text-[10px] text-teal-400 font-mono break-all">
              <a href="https://edtech-journal.org/ai-literacy-2024" target="_blank" rel="noopener noreferrer" class="hover:underline">
                https://edtech-journal.org/ai-literacy-2024 &UpperRightArrow;
              </a>
            </div>
            <div class="italic text-slate-300 text-[11px] pt-1">
              &ldquo;The rapid proliferation of generative AI tools in secondary classrooms has triggered profound pedagogical debates surrounding authentic student authorship and evaluation.&rdquo;
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700 flex items-center justify-between text-[11px] font-sans">
        <span class="text-teal-300">Evidence Card #04: Uncited Direct Match</span>
        <span class="text-[10px] text-slate-400">Match Length: 24 Words</span>
      </div>
    </div>
  </div>

  <div class="rounded-xl bg-slate-950 p-3 border border-slate-800 flex flex-wrap items-center justify-between gap-2 font-sans text-xs">
    <span class="text-slate-300"><strong>Teacher Action:</strong></span>
    <div class="flex flex-wrap gap-2">
      <span class="px-2.5 py-1 rounded bg-teal-600 text-white font-semibold text-[11px] cursor-pointer">Convert to Citation Coaching Note</span>
      <span class="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200 font-medium text-[11px] cursor-pointer">Mark Resolved</span>
      <span class="px-2.5 py-1 rounded bg-rose-900/60 border border-rose-700 text-rose-200 font-medium text-[11px] cursor-pointer">Flag Review</span>
    </div>
  </div>
</div>

<img src="/images/services/report-source-quote.png" alt="Checkmark Plagiarism Side-by-Side Source Quotation Alignment View" class="w-full rounded-2xl border border-border shadow-md my-8" />

<ul>
  <li><strong>Comprehensive Live Web &amp; Academic Indexing:</strong> Scans billions of indexed web pages, open-access scholarly journals, digital repositories, and public archives.</li>
  <li><strong>Live Clickable URLs:</strong> Every identified match includes a direct, active hyperlink to the original source, allowing teachers to verify context in one click.</li>
  <li><strong>Uncited Source Differentiation:</strong> Matches lacking proper citation formatting receive distinct visual indicators, separating simple citation omissions from intentional text theft.</li>
  <li><strong>Intra-School Peer Matching:</strong> Detects verbatim copying across class sections, student cohorts, and historical term repositories within the school or district without exposing student data externally.</li>
  <li><strong>Two-Way Linked Evidence Cards:</strong> Clicking any highlighted sentence in the essay automatically scrolls the right sidebar to its matched source card, and clicking a source card highlights the corresponding prose in the document.</li>
</ul>

<hr class="my-8 border-border" />

<h3>Pillar 3: Patent-Pending Essay Playback™ &amp; Keystroke Dynamics</h3>

<p>Textual analysis alone cannot reveal how an essay was produced. Checkmark&rsquo;s flagship technology, <a href="/services/writing-process" class="text-primary font-semibold underline"><strong>Essay Playback™</strong></a>, captures the complete temporal drafting journey.</p>

<!-- Essay Playback Scrubber Mockup Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 font-mono text-xs shadow-xl">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4 font-sans">
    <div class="text-teal-400 font-bold text-sm">ESSAY PLAYBACK™ TIMELINE SCRUBBER</div>
    <div class="flex items-center gap-2 text-xs">
      <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">[▶ Play] [⏸ Pause]</span>
      <span class="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono font-semibold">Speed: [1x] [2x] [4x] [8x]</span>
      <span class="text-slate-400 font-mono">03:42:15</span>
    </div>
  </div>

  <div class="space-y-2 mb-4">
    <div class="w-full bg-slate-800 rounded-full h-3 relative overflow-hidden">
      <div class="bg-teal-500 h-full w-[65%] rounded-full"></div>
      <div class="absolute top-0 left-[15%] bottom-0 w-1 bg-teal-300"></div>
      <div class="absolute top-0 left-[35%] bottom-0 w-1 bg-emerald-400"></div>
      <div class="absolute top-0 left-[55%] bottom-0 w-1.5 bg-amber-400"></div>
      <div class="absolute top-0 left-[85%] bottom-0 w-1 bg-cyan-400"></div>
    </div>
    <div class="flex justify-between text-[10px] font-mono text-slate-400">
      <span>00:00:00 [Outline &bull; 18 WPM]</span>
      <span>01:15:00 [Drafting &bull; 32 WPM]</span>
      <span>02:30:00 [Revision &bull; 41 Backspaces]</span>
      <span>03:42:15 [Final Polish]</span>
    </div>
  </div>

  <div class="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-2 font-mono text-xs">
    <div class="text-teal-400 font-bold font-sans text-xs uppercase tracking-wide">Live Drafting Event Log:</div>
    <ul class="space-y-1.5 text-[11px] text-slate-300">
      <li class="flex items-start gap-2">
        <span class="text-teal-400 font-bold shrink-0">00:14:22</span>
        <span>4-minute composing pause (Brainstorming thesis statement)</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-emerald-400 font-bold shrink-0">00:48:10</span>
        <span>Paragraph 2 drafted; 14 backspaces; 3 sentence restructurings</span>
      </li>
      <li class="flex items-start gap-2 bg-amber-500/10 p-1.5 rounded border border-amber-500/20 text-amber-200">
        <span class="text-amber-400 font-bold shrink-0">01:12:05</span>
        <span><strong>External Paste Event:</strong> 38 words from clipboard (Preserved in Paste Buffer)</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-cyan-400 font-bold shrink-0">02:04:19</span>
        <span>Extensive vocabulary revisions and transition refinement in conclusion</span>
      </li>
    </ul>
  </div>
</div>

<img src="/images/services/report-paste-evidence.png" alt="Checkmark Essay Playback External Paste Buffer and Telemetry View" class="w-full rounded-2xl border border-border shadow-md my-8" />

<ul>
  <li><strong>Keystroke-by-Keystroke Reconstruction:</strong> Records every character insertion, deletion, backspace, cursor movement, and pause, allowing educators to watch the paper come together like a video at 1x to 8x speed.</li>
  <li><strong>External Paste Buffer with Permanent Text Preservation:</strong> When a student pastes text from an external application, Checkmark logs the exact timestamp and preserves the full pasted content in an isolated buffer—even if the student subsequently rewrites or edits every single word. A single click jumps directly to that moment in the timeline.</li>
  <li><strong>Typing Latency &amp; Burst Analysis:</strong> Identifies authentic human writing rhythms (bursts of 5–15 words followed by 3–8 second reflection pauses) versus artificial generation.</li>
  <li><strong>Transcription Detection:</strong> Flags steady, mechanical typing at high speeds (e.g., 85+ WPM with zero composing pauses, zero backspaces, and zero outline restructuring), exposing instances where a student manually retypes text from a second monitor, smartphone, or dictation feed.</li>
  <li><strong>Native LMS &amp; Office Ecosystem Capture:</strong> Seamlessly integrates with Google Docs, Microsoft Word/OneDrive, Canvas LMS SpeedGrader, and Buzz LMS embedded editors.</li>
  <li><strong>The Ultimate Shield for Honest Students:</strong> When an external detector generates a false positive AI flag, Essay Playback provides incontrovertible proof of authentic human authorship, exonerating the student immediately.</li>
</ul>

<hr class="my-8 border-border" />

<h3>Pillar 4: AI Autograder &amp; Quote-Anchored Rubric Feedback</h3>

<p>Integrity analysis must connect directly to assessment. Checkmark&rsquo;s <a href="/services/autograder" class="text-primary font-semibold underline">AI Autograder</a> pairs integrity data with rubric scoring:</p>

<img src="/images/services/report-grading-view.png" alt="Checkmark AI Autograder Quote-Anchored Rubric Feedback and SpeedGrader Passback" class="w-full rounded-2xl border border-border shadow-md my-8" />

<ul>
  <li><strong>Teacher-in-the-Loop Architecture:</strong> Autograded assessments remain private drafts until the educator reviews, edits, and approves them. The teacher maintains final grading authority.</li>
  <li><strong>Quote-Anchored Justifications:</strong> Every criterion score (e.g., <em>Thesis Development: 4/5</em>) includes specific, quote-anchored citations from the student&rsquo;s text justifying the rating.</li>
  <li><strong>Flexible Rubric Ingestion:</strong> Create rubrics within the platform, upload PDF/image rubrics, or import existing rubrics directly from Canvas LMS, Buzz LMS, or Google Classroom.</li>
  <li><strong>Bi-Directional Gradebook Passback:</strong> With one click, finalized rubric scores, criterion breakdowns, and written comments push directly into the LMS gradebook.</li>
</ul>

<hr class="my-8 border-border" />

<h2>4. Master Diagnostic Matrix: Citation Mechanics vs. Intentional Fraud</h2>

<p>To assist teachers and honor committees in evaluating submissions systematically, this master diagnostic matrix maps textual symptoms to behavioral evidence, linguistic patterns, and appropriate pedagogical responses.</p>

<div class="my-6 overflow-x-auto rounded-2xl border border-border shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3.5">Textual Characteristic</th>
        <th class="p-3.5">Legacy 1D Scanner Output</th>
        <th class="p-3.5">Essay Playback™ Dynamics</th>
        <th class="p-3.5">Passage AI &amp; Source Analysis</th>
        <th class="p-3.5">Diagnostic Classification</th>
        <th class="p-3.5">Pedagogical / Disciplinary Action</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Missing Quotation Marks on Cited Sentence</td>
        <td class="p-3.5 text-rose-600 dark:text-rose-400 font-medium">35% Similarity (Flagged as Plagiarism)</td>
        <td class="p-3.5">Student typed sentence slowly (24 WPM), made 4 backspace revisions, added parenthetical citation <code>(Smith, 2023)</code>.</td>
        <td class="p-3.5">Matches source verbatim for 18 words; source listed in Works Cited; 0% AI pattern.</td>
        <td class="p-3.5 font-semibold text-teal-600 dark:text-teal-400">Mechanical Citation Error (Quadrant 4)</td>
        <td class="p-3.5"><strong class="text-foreground">No disciplinary action.</strong> Deduct minor formatting points under Conventions rubric; assign citation punctuation exercise.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Developmental Patchwriting (Novice Synthesis)</td>
        <td class="p-3.5 text-rose-600 dark:text-rose-400 font-medium">42% Similarity (Flagged as High Risk)</td>
        <td class="p-3.5">Active drafting over 2.5 hours; frequent pauses; student repeatedly edited synonyms while looking at reference notes.</td>
        <td class="p-3.5">Syntax matches scholarly article; 40% synonym substitution; 0% AI pattern; source present in bibliography.</td>
        <td class="p-3.5 font-semibold text-amber-600 dark:text-amber-400">Developmental Patchwriting (Quadrant 3)</td>
        <td class="p-3.5"><strong class="text-foreground">No disciplinary action.</strong> Conduct one-on-one writing conference on evidence synthesis, paraphrasing rules, and independent argumentation.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Standard Disciplinary Phraseology</td>
        <td class="p-3.5 text-amber-600 dark:text-amber-400 font-medium">28% Similarity (Flagged as Moderate Risk)</td>
        <td class="p-3.5">Fluent, rhythmic typing (45 WPM) with natural sentence transitions; no external paste events.</td>
        <td class="p-3.5">Overlaps with multiple medical/scientific journals on standard protocol phrases (e.g., PCR amplification parameters).</td>
        <td class="p-3.5 font-semibold text-teal-600 dark:text-teal-400">Legitimate Disciplinary Collocation (Quadrant 2)</td>
        <td class="p-3.5"><strong class="text-foreground">No disciplinary action.</strong> Verify scientific accuracy; ignore standard disciplinary phrasing.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Direct Wholesale Copy-Paste</td>
        <td class="p-3.5 text-rose-600 dark:text-rose-400 font-medium">55% Similarity (Flagged as High Risk)</td>
        <td class="p-3.5">Instantaneous insertion of 450 words at 00:12:04; 0 backspaces; no prior outline drafting.</td>
        <td class="p-3.5">Exact 100% verbatim match to commercial essay site; unlisted in bibliography; 0% AI pattern.</td>
        <td class="p-3.5 font-semibold text-rose-600 dark:text-rose-400">Intentional Plagiarism (Quadrant 1)</td>
        <td class="p-3.5"><strong class="text-rose-600 dark:text-rose-400">Disciplinary referral.</strong> Zero grade on assignment; formal academic integrity conference; required revision under supervision.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Second-Screen Manual Transcription of LLM Text</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">6% Similarity, 18% AI (Passed as &ldquo;Original&rdquo;)</td>
        <td class="p-3.5">Flat, unvarying typing speed (92 WPM) for 40 minutes straight; 0 composing pauses; 0 backspaces; 0 structural rewrites.</td>
        <td class="p-3.5">0% web plagiarism match; elevated perplexity uniformity across full document.</td>
        <td class="p-3.5 font-semibold text-rose-600 dark:text-rose-400">Intentional Transcription Fraud (Quadrant 1)</td>
        <td class="p-3.5"><strong class="text-rose-600 dark:text-rose-400">Academic review.</strong> Present Essay Playback timeline in supportive conference; assign in-class oral defense or supervised rewrite.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Synonym Spinner / Paraphraser Cloaking</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">12% Similarity, 22% AI (Passed as &ldquo;Original&rdquo;)</td>
        <td class="p-3.5">Large external paste event followed by erratic word-by-word substitution pattern matching automated tool exports.</td>
        <td class="p-3.5">Syntax mirrors Wikipedia article exactly; vocabulary features unnatural synonym anomalies (&ldquo;infinitesimal&rdquo; for &ldquo;small&rdquo;).</td>
        <td class="p-3.5 font-semibold text-rose-600 dark:text-rose-400">Masked Academic Fraud (Quadrant 4 / 1)</td>
        <td class="p-3.5"><strong class="text-rose-600 dark:text-rose-400">Academic review.</strong> Examine preserved External Paste Buffer to reveal original source text before spinning; require authentic revision.</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>5. Classroom Case Studies: Multidimensional Diagnostics in Practice</h2>

<p>The following realistic classroom case studies illustrate how Checkmark&rsquo;s multidimensional reporting resolves complex integrity dilemmas across different academic disciplines.</p>

<!-- Case Study 1 Card -->
<div class="my-8 rounded-2xl border border-border bg-slate-50/50 dark:bg-slate-900/40 p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs uppercase">Case Study 1</span>
      <h3 class="text-base font-bold text-foreground m-0 p-0">The Missing Quotation Marks in AP Literature</h3>
    </div>
    <span class="text-xs text-muted-foreground font-medium">Maya S. &bull; AP English Literature &bull; 2,500-Word Comparative Analysis</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
    <div class="space-y-1.5 text-muted-foreground">
      <p class="m-0"><strong>Legacy Checker Output:</strong> <span class="text-rose-600 dark:text-rose-400 font-bold">44% Similarity Index</span> (Automatic red flag in Canvas SpeedGrader)</p>
      <p class="m-0"><strong>Initial Teacher Reaction:</strong> Feared Maya had copied extensive literary criticism from an online scholarly journal.</p>
    </div>
    <div class="rounded-lg bg-background p-3 border border-border space-y-1 text-[11px]">
      <p class="font-semibold text-foreground m-0">Maya&rsquo;s Essay Playback™ Telemetry:</p>
      <p class="text-muted-foreground m-0">&bull; Total Drafting Time: 4 hrs 12 mins | Backspaces: 342 | Pastes: 0</p>
      <p class="text-teal-600 dark:text-teal-400 font-medium m-0">&bull; Organic thesis development (45m) with natural typing pauses</p>
    </div>
  </div>

  <div class="space-y-2 text-xs text-muted-foreground mb-4">
    <h4 class="text-xs font-bold text-foreground uppercase tracking-wide m-0">Multidimensional Investigation</h4>
    <ol class="list-decimal pl-5 space-y-1.5">
      <li><strong>Side-by-Side Source Alignment:</strong> Checkmark revealed 36% of overlap stemmed from properly cited primary block quotes from Toni Morrison&rsquo;s <em>Beloved</em> and William Faulkner&rsquo;s <em>As I Lay Dying</em>. Another 8% matched an article by Dr. Valerie Smith. Maya wrote: <em>&ldquo;Sethe&rsquo;s maternal instinct functions as both an act of ultimate resistance and a devastating psychological trauma (Smith 48).&rdquo;</em></li>
      <li><strong>Citation Diagnostics:</strong> Maya accurately credited Dr. Smith in her parenthetical citation and Works Cited page, but omitted quotation marks around the nine-word phrase <em>&ldquo;act of ultimate resistance and a devastating psychological trauma.&rdquo;</em></li>
      <li><strong>Essay Playback™ Verification:</strong> Scrubbing through the 4-hour timeline revealed that Maya spent 45 minutes constructing her thesis, made 68 backspace revisions across three paragraphs, and manually typed the cited sentence while referencing printed notes.</li>
    </ol>
  </div>

  <div class="rounded-xl bg-teal-500/10 border border-teal-500/20 p-3.5 text-xs text-teal-900 dark:text-teal-300">
    <strong>Pedagogical Outcome:</strong> Instead of referring Maya to the academic honor council for a 44% similarity flag, the teacher recognized a minor mechanical citation error. During a five-minute conference, the teacher demonstrated proper quotation mark placement for blended quotes. Maya received full credit for original analysis and a minor 2-point deduction under MLA Formatting Conventions.
  </div>
</div>

<!-- Case Study 2 Card -->
<div class="my-8 rounded-2xl border border-border bg-slate-50/50 dark:bg-slate-900/40 p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase">Case Study 2</span>
      <h3 class="text-base font-bold text-foreground m-0 p-0">Developmental Patchwriting in AP Biology</h3>
    </div>
    <span class="text-xs text-muted-foreground font-medium">Jin-Woo K. &bull; 10th Grade ELL &bull; 1,500-Word CRISPR Literature Review</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
    <div class="space-y-1.5 text-muted-foreground">
      <p class="m-0"><strong>Legacy Checker Output:</strong> <span class="text-rose-600 dark:text-rose-400 font-bold">39% Similarity Index</span> (Flagged for plagiarism)</p>
      <p class="m-0"><strong>Initial Teacher Reaction:</strong> Suspected Jin-Woo copied descriptions directly from <em>Nature Biotechnology</em> without understanding the science.</p>
    </div>
    <div class="rounded-lg bg-background p-3 border border-border space-y-1 text-[11px]">
      <p class="font-semibold text-foreground m-0">Jin-Woo&rsquo;s Essay Playback™ Telemetry:</p>
      <p class="text-muted-foreground m-0">&bull; Total Drafting Time: 5 hrs 08 mins | Average Speed: 14 WPM</p>
      <p class="text-amber-600 dark:text-amber-400 font-medium m-0">&bull; 84 composing pauses (&gt;15s) &amp; 26 bilingual dictionary lookups</p>
    </div>
  </div>

  <div class="space-y-2 text-xs text-muted-foreground mb-4">
    <h4 class="text-xs font-bold text-foreground uppercase tracking-wide m-0">Multidimensional Investigation</h4>
    <ol class="list-decimal pl-5 space-y-1.5">
      <li><strong>Passage-Level AI &amp; Plagiarism Scan:</strong> Checkmark flagged three paragraphs describing the guide RNA cleavage mechanism. The text closely tracked the sentence structure of a 2022 <em>Nature</em> review, with Jin-Woo substituting synonyms (e.g., changing <em>&ldquo;cleaves the target DNA sequence&rdquo;</em> to <em>&ldquo;cuts the specific DNA strand&rdquo;</em>).</li>
      <li><strong>Side-by-Side Source View:</strong> The source was cited in Jin-Woo&rsquo;s bibliography, confirming zero intent to conceal the origin of the concepts.</li>
      <li><strong>Essay Playback™ Dynamics:</strong> Playback showed authentic cognitive effort by an ELL student scaffolding complex biochemical vocabulary through developmental patchwriting.</li>
    </ol>
  </div>

  <div class="rounded-xl bg-amber-500/10 border border-amber-500/20 p-3.5 text-xs text-amber-900 dark:text-amber-300">
    <strong>Pedagogical Outcome:</strong> The teacher identified classic developmental patchwriting. Rather than penalizing Jin-Woo for academic dishonesty, the teacher praised his scientific comprehension and held a supportive coaching session on using original analogies to explain molecular mechanisms. Jin-Woo was granted a 48-hour revision window to synthesize the concepts in his own voice.
  </div>
</div>

<!-- Case Study 3 Card -->
<div class="my-8 rounded-2xl border border-border bg-slate-50/50 dark:bg-slate-900/40 p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase">Case Study 3</span>
      <h3 class="text-base font-bold text-foreground m-0 p-0">Second-Screen Transcription in AP European History</h3>
    </div>
    <span class="text-xs text-muted-foreground font-medium">Brandon T. &bull; 12th Grade &bull; 2,000-Word Document-Based Essay</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
    <div class="space-y-1.5 text-muted-foreground">
      <p class="m-0"><strong>Legacy Checker Output:</strong> <span class="text-emerald-600 dark:text-emerald-400 font-bold">8% Similarity, 14% AI Score</span> (Clean bill of health on legacy tools)</p>
      <p class="m-0"><strong>Initial Teacher Reaction:</strong> Noted sophisticated historical vocabulary that did not match Brandon&rsquo;s previous in-class writing performance.</p>
    </div>
    <div class="rounded-lg bg-background p-3 border border-border space-y-1 text-[11px]">
      <p class="font-semibold text-foreground m-0">Brandon&rsquo;s Essay Playback™ Telemetry:</p>
      <p class="text-rose-600 dark:text-rose-400 font-medium m-0">&bull; 2,100 words typed in 24m 18s at steady 88 WPM flat velocity</p>
      <p class="text-muted-foreground m-0">&bull; 0 backspaces, 0 structural rewrites, 0 pauses &gt; 5s</p>
    </div>
  </div>

  <div class="my-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-100 font-mono text-xs">
    <div class="text-center font-bold text-amber-400 text-xs mb-3 font-sans uppercase tracking-wide">
      Drafting Velocity: Authentic Burstiness vs. Second-Screen Transcription
    </div>
    <div class="space-y-2 text-[11px]">
      <div><strong>AUTHENTIC DRAFTING (MAYA):</strong> Highly variable WPM (peaks at 45 WPM, deep thinking pauses, high backspace ratio).</div>
      <div class="text-rose-300"><strong>SECOND-SCREEN TRANSCRIPTION (BRANDON):</strong> Unnatural flatline at 88+ WPM across all paragraphs with zero self-correction.</div>
    </div>
  </div>

  <div class="rounded-xl bg-rose-500/10 border border-rose-500/20 p-3.5 text-xs text-rose-900 dark:text-rose-300">
    <strong>Pedagogical Outcome:</strong> Armed with verifiable keystroke dynamics, the teacher invited Brandon to a non-adversarial conference. The teacher opened Essay Playback and showed Brandon the flat 88 WPM timeline. Brandon immediately admitted he had prompted ChatGPT on his smartphone and manually retyped the output to bypass copy-paste detection. Brandon was assigned a supervised in-class rewrite and completed a reflection module on academic ethics.
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. Step-by-Step Diagnostic Workflow for Educators</h2>

<p>To eliminate guesswork and ensure fair, standardized evaluation, educators should adopt this four-phase investigative protocol when reviewing writing submissions:</p>

<!-- 4-Phase Protocol Visual Component -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="text-center font-bold text-foreground text-sm uppercase tracking-wider mb-6">
    FOUR-PHASE EDUCATOR DIAGNOSTIC PROTOCOL
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
    <div class="rounded-xl bg-muted/40 p-4 border border-border flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
          <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">1</span>
          Multidimensional Triage
        </div>
        <ul class="text-muted-foreground space-y-1 list-disc pl-4 text-[11px]">
          <li>Open Checkmark report in Canvas/Buzz</li>
          <li>Review Passage AI breakdown</li>
          <li>Inspect Source Match overview</li>
          <li>Check automated process alerts</li>
        </ul>
      </div>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
          <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">2</span>
          Evidence Audit
        </div>
        <ul class="text-muted-foreground space-y-1 list-disc pl-4 text-[11px]">
          <li>Click flagged passages for cards</li>
          <li>Verify Works Cited &amp; in-text cites</li>
          <li>Separate quotes from uncredited text</li>
          <li>Identify patchwriting vs. fraud</li>
        </ul>
      </div>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
          <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">3</span>
          Process Verification
        </div>
        <ul class="text-muted-foreground space-y-1 list-disc pl-4 text-[11px]">
          <li>Scrub Playback at 2x/4x speed</li>
          <li>Inspect External Paste Buffer</li>
          <li>Analyze typing burstiness &amp; pauses</li>
          <li>Detect manual transcription signs</li>
        </ul>
      </div>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
          <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">4</span>
          Aligned Resolution
        </div>
        <ul class="text-muted-foreground space-y-1 list-disc pl-4 text-[11px]">
          <li>Mechanics &rarr; Citation coaching</li>
          <li>Patchwriting &rarr; Revision conference</li>
          <li>Intentional Fraud &rarr; Restorative review</li>
          <li>Update Checkmark flag to Resolved</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. Departmental Policy Blueprint: Modernizing Integrity Guidelines</h2>

<p>Department chairs, curriculum directors, and school district administrators must modernize institutional honor codes to reflect the realities of AI writing assistants and process-based integrity reports.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
    DEPARTMENTAL ACADEMIC INTEGRITY POLICY FRAMEWORK
  </div>

  <div class="space-y-4 text-xs text-slate-300">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <h4 class="text-sm font-bold text-teal-300 m-0 mb-1">1. Ban Arbitrary Percentage Thresholds</h4>
      <p class="m-0 text-slate-300 text-[11px] leading-relaxed">
        Explicitly prohibit automated grade deductions based solely on similarity or AI probability numbers. Mandate that all integrity inquiries reference multidimensional evidence.
      </p>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <h4 class="text-sm font-bold text-teal-300 m-0 mb-1">2. Establish the &ldquo;Presumption of Authentic Effort&rdquo;</h4>
      <p class="m-0 text-slate-300 text-[11px] leading-relaxed">
        Treat writing as an iterative learning process. Classify developmental patchwriting and citation formatting errors as instructional opportunities under &ldquo;Writing Conventions&rdquo; rather than disciplinary offenses.
      </p>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <h4 class="text-sm font-bold text-teal-300 m-0 mb-1">3. Require Process-Level Evidence for Formal Proceedings</h4>
      <p class="m-0 text-slate-300 text-[11px] leading-relaxed">
        Disciplinary referrals must include verifiable process receipts: Essay Playback™ timelines, external paste logs, or side-by-side source comparisons. Protect students against unverified black-box detector accusations.
      </p>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <h4 class="text-sm font-bold text-teal-300 m-0 mb-1">4. Standardize Restorative Integrity Conferences</h4>
      <p class="m-0 text-slate-300 text-[11px] leading-relaxed">
        Provide teachers with structured conference protocols focused on dialogue, evidence review, and skill remediation.
      </p>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <h4 class="text-sm font-bold text-teal-300 m-0 mb-1">5. Mandate Zero Model Training Data Privacy Standards</h4>
      <p class="m-0 text-slate-300 text-[11px] leading-relaxed">
        Require all educational technology vendors to comply with FERPA and COPPA. Prohibit vendors from training commercial AI models on student submissions.
      </p>
    </div>
  </div>
</div>

<h3>Key Policy Clauses for Student Handbooks &amp; Course Syllabi</h3>

<blockquote class="my-6 border-l-4 border-primary bg-muted/40 p-4 rounded-r-xl italic text-xs leading-relaxed text-foreground">
  <strong>Clause A: Definition of Authentic Authorship:</strong><br />
  &ldquo;Academic writing requires that all submitted prose represents the student&rsquo;s original intellectual synthesis and drafting effort. While authorized digital tools (such as spelling checkers, digital library catalogs, and approved brainstorming assistants) may support research, the final prose must be authored directly by the student. All external ideas, quotations, and paraphrases must be credited in accordance with disciplinary citation standards.&rdquo;
</blockquote>

<blockquote class="my-6 border-l-4 border-primary bg-muted/40 p-4 rounded-r-xl italic text-xs leading-relaxed text-foreground">
  <strong>Clause B: Distinction Between Formatting Lapses and Academic Fraud:</strong><br />
  &ldquo;Our department distinguishes between mechanical citation errors (e.g., misplaced quotation marks, imperfect bibliographic formatting, or developmental patchwriting) and deliberate academic dishonesty (e.g., submitting uncredited external text, using unauthorized AI generation, or purchasing work). Mechanical citation errors will be addressed through formative instruction and standard rubric scoring. Academic fraud will be subject to formal departmental review.&rdquo;
</blockquote>

<blockquote class="my-6 border-l-4 border-primary bg-muted/40 p-4 rounded-r-xl italic text-xs leading-relaxed text-foreground">
  <strong>Clause C: Evidentiary Standards for Integrity Inquiries:</strong><br />
  &ldquo;No student will be accused of academic dishonesty based on an aggregate similarity percentage or automated AI probability score alone. All academic integrity inquiries must be grounded in multi-factor evidence, including side-by-side source comparisons and verified writing process history.&rdquo;
</blockquote>

<hr class="my-8 border-border" />

<h2>8. Frequently Asked Questions (FAQ)</h2>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">How does a multidimensional integrity report differ from a traditional similarity score?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      A traditional similarity score produces a single aggregate percentage representing the proportion of matching characters in a paper, without explaining context, intent, or drafting history. A multidimensional integrity report combines four distinct evidentiary layers: passage-level AI detection, side-by-side source alignment with live web links, patent-pending keystroke drafting playback (Essay Playback™), and quote-anchored rubric autograding. This enables educators to evaluate student writing with complete context.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">What is developmental patchwriting, and why should it not be punished as plagiarism?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Developmental patchwriting is a well-documented stage in writing acquisition where students copy source material while altering a few words, tenses, or synonyms because they are still developing the specialized vocabulary needed to articulate complex concepts independently. Research in composition studies shows patchwriting stems from cognitive overload rather than an intent to deceive. It requires formative instruction in summarizing and synthesis, not punitive disciplinary action.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">Can Essay Playback™ prove a student is innocent if an external AI detector flags their essay?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Yes. Essay Playback™ serves as the ultimate protective shield for honest students. If a generic AI detector generates a false positive flag, the student’s Essay Playback report provides an immutable, keystroke-by-keystroke video timeline showing authentic human drafting, composing pauses, backspace revisions, and structural rewrites, definitively disproving the automated false accusation.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">How does Checkmark detect when a student retypes an AI-generated essay from a phone or second screen?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Checkmark analyzes keystroke dynamics, typing latency, and velocity curves. Authentic human drafting exhibits high burstiness: writers type short phrases, pause for several seconds to reflect, make frequent backspace corrections, and reorganize sentences. Second-screen manual transcription exhibits an unnatural, flat typing velocity (e.g., a steady 85+ WPM without composing pauses, zero backspaces, and zero structural revisions).
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">What happens to text pasted from external sources in Checkmark?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      When text is pasted into the editor, Checkmark immediately timestamps the event and saves the complete pasted content in an isolated External Paste Buffer. Even if the student subsequently edits or re-types every single word in that paragraph, the teacher can view the original pasted text with a single click and jump directly to that moment in the playback timeline.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">How does Checkmark protect student data privacy and comply with FERPA/COPPA?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Checkmark adheres to strict enterprise privacy standards: student submissions are <strong>never used to train commercial AI models</strong>. All data is encrypted in transit and at rest, and the platform complies fully with FERPA, COPPA, and state student privacy regulations.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">Does the AI Autograder replace teacher grading?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      No. Checkmark operates on a strict <strong>Teacher-in-the-Loop</strong> model. The AI Autograder generates draft rubric scores, criterion-level point breakdowns, and quote-anchored justifications tied directly to the student&rsquo;s text. All grades remain private drafts until the educator reviews, edits, and approves them before syncing back to the LMS gradebook.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>9. Conclusion: Moving From Suspicion to Trust in Writing Assessment</h2>

<p>The future of academic integrity cannot be built on opaque percentages, adversarial accusations, or arbitrary threshold policies. When educators rely on one-dimensional metrics, honest students are falsely accused, emerging writers are penalized for normal learning curves, and sophisticated academic fraud slips through unnoticed.</p>

<p>By adopting <strong>Multidimensional Integrity Reports</strong>, educational institutions can finally fulfill the promise of modern writing pedagogy: <strong>&ldquo;Stop guessing, start trusting.&rdquo;</strong></p>

<p>With transparent side-by-side source verification, passage-level AI analysis, patent-pending keystroke playback, and quote-anchored rubric feedback, educators gain the defensible receipts needed to hold fair, restorative conversations, uphold uncompromising academic standards, and celebrate authentic student growth.</p>

<!-- CTA Box -->
<div class="my-8 rounded-2xl border border-teal-500/40 bg-teal-50/50 dark:bg-teal-950/30 p-6 text-center shadow-md">
  <h3 class="text-lg font-bold text-foreground mb-2">Transform Writing Integrity in Your School or District</h3>
  <p class="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
    Discover how Checkmark Plagiarism unifies side-by-side source alignment, Essay Playback™ keystroke dynamics, and passage-level AI detection directly inside Canvas LMS, Buzz LMS, and Google Classroom.
  </p>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a href="/pricing" class="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground shadow-sm hover:opacity-90 transition-opacity">
      View Pricing &amp; Plans &rarr;
    </a>
    <a href="/services/writing-process" class="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-card border border-border text-foreground hover:bg-muted/50 transition-colors">
      Explore Essay Playback™
    </a>
  </div>
</div>
`;

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
      currentSlug="2026/8/how-multidimensional-integrity-reports-distinguish-citation-errors-from-intentional-plagiarism"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
