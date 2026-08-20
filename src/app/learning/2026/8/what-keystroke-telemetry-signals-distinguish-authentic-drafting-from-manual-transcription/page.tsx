import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "What Keystroke Telemetry Signals Distinguish Authentic Drafting From Manual Transcription? | Checkmark Plagiarism",
  description: "Explore the psycholinguistic science and keystroke telemetry metrics—IKIs, P-bursts, R-bursts, and velocity entropy—that distinguish organic composition from manual AI transcription.",
  keywords: [
    "keystroke telemetry",
    "authentic drafting",
    "manual transcription",
    "keystroke dynamics",
    "Essay Playback",
    "Inter-Key Interval",
    "P-bursts",
    "R-bursts",
    "Checkmark Plagiarism",
    "academic integrity",
    "AI detection",
    "writing process forensics",
    "second-screen typing",
  ],
  openGraph: {
    images: [
      "/images/learning/what-keystroke-telemetry-signals-distinguish-authentic-drafting-from-manual-transcription/featured.png",
      "/images/services/report-paste-evidence.png",
    ],
  },
};

const meta = {
  title: "What Keystroke Telemetry Signals Distinguish Authentic Drafting From Manual Transcription? | Checkmark Plagiarism",
  description: "Explore the psycholinguistic science and keystroke telemetry metrics—IKIs, P-bursts, R-bursts, and velocity entropy—that distinguish organic composition from manual AI transcription.",
  "opengraph-image": "/images/learning/what-keystroke-telemetry-signals-distinguish-authentic-drafting-from-manual-transcription/featured.png",
  date: "08-18-2026",
  readTime: "~16 min read",
  category: "Writing Process",
  categories: ["Writing Process", "How It Works", "Teacher Guide", "AI Detection"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div class="my-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
    <p class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Executive Summary</p>
  </div>
  <p class="text-base text-foreground leading-relaxed">
    When students attempt to bypass clipboard paste monitors and static AI text detectors by manually retyping text from a secondary screen, smartphone, or printed page, they inadvertently leave behind a definitive biometric signature. Authentic cognitive composition is fundamentally non-linear, characterized by wide Inter-Key Interval (IKI) variance, cognitive pause bursts (P-bursts) at syntactic boundaries, and recursive revision bursts (R-bursts). In contrast, manual optical transcription exhibits metronomic typing cadence, narrow Gaussian IKI distributions, and monotonic linear character insertion (0 &rarr; N). Through <strong>keystroke dynamics and patent-pending <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a></strong>, Checkmark Plagiarism provides educators and academic integrity officers with transparent, mathematically defensible process telemetry—empowering supportive student conferences, detecting unauthorized transcription, and providing conclusive proof of innocence for honest writers.
  </p>
</div>

<p>
  As artificial intelligence writing assistants become ubiquitous, academic institutions face a critical dilemma: traditional clipboard listeners catch only raw copy-paste actions, while static AI classifiers remain vulnerable to text &quot;humanizers&quot; and synonym substitutions. <strong>Checkmark Plagiarism</strong> bridges this evidentiary gap through a triangulated suite integrating <a href="/services/writing-playback">patent-pending Essay Playback™</a>, <a href="/services/ai-detection">passage-level AI detection</a>, <a href="/services/plagiarism-detection">live web and student repository plagiarism scanning</a>, and <a href="/services/autograder">teacher-in-the-loop rubric autograding</a> for <a href="/services/integrations/canvas-lms">Canvas LMS</a>, <a href="/services/integrations/google-classroom">Google Classroom</a>, and Buzz LMS.
</p>

<!-- Featured Image Visual Component -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/learning/what-keystroke-telemetry-signals-distinguish-authentic-drafting-from-manual-transcription/featured.png" 
    alt="Keystroke Telemetry Forensics and Writing Process Analysis Dashboard" 
    class="w-full h-auto object-cover m-0"
  />
  <div class="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <span><strong>Figure 1.0:</strong> Checkmark Writing Process Telemetry — Biometric IKI Waveforms, Syntactic Pause Bursts, and Essay Playback™ Verification.</span>
    <span class="text-teal-600 dark:text-teal-400 font-medium">Patent-Pending Keystroke Forensics</span>
  </div>
</div>

<h2>The Evolution of Evasion: From Clipboard Pasting to Optical Retyping</h2>

<p>
  In the early stages of generative AI adoption in secondary and post-secondary education, identifying unapproved AI generation relied heavily on basic document auditing. Students copied text directly from ChatGPT or Claude, pasted it into their learning management system (LMS) editor or Google Docs, and submitted the assignment. Educators and administrative tools caught these instances through basic clipboard metadata: single-timestamp block insertions of 800 words, mismatched font formatting, or sudden leaps in word count.
</p>

<p>
  As awareness of clipboard logging spread across student forums and social platforms, evasion techniques shifted rapidly toward <strong>manual optical transcription</strong> (often referred to as the <em>&quot;retype bypass&quot;</em>).
</p>

<!-- Interactive Evolution Diagram -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">Evasion Evolution in Student Submissions</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Phase 1 -->
    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-rose-300">Phase 1</span>
          <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">Obsolete</span>
        </div>
        <h3 class="text-sm font-bold text-white mb-2 pt-0">Raw Clipboard Paste</h3>
        <ul class="space-y-1.5 text-slate-300 text-xs list-disc pl-4">
          <li>Direct copy from LLM into editor</li>
          <li>Flagged by standard paste event listeners</li>
          <li>Massive block character insertions in 0.1s</li>
          <li>Formatting artifacts and mismatched HTML</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
        <em>Easily intercepted by Checkmark Paste Tracker</em>
      </div>
    </div>

    <!-- Phase 2 -->
    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-amber-300">Phase 2</span>
          <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">Vulnerable</span>
        </div>
        <h3 class="text-sm font-bold text-white mb-2 pt-0">AI Text Humanizers</h3>
        <ul class="space-y-1.5 text-slate-300 text-xs list-disc pl-4">
          <li>QuillBot / Undetectable AI paraphrasing</li>
          <li>Perturbs vocabulary and syntax patterns</li>
          <li>Bypasses static perplexity classifiers</li>
          <li>Still susceptible to passage-level analysis</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
        <em>Flagged by Checkmark Passage-Level AI Cards</em>
      </div>
    </div>

    <!-- Phase 3 -->
    <div class="bg-slate-800/90 rounded-xl p-4 border border-teal-500/50 flex flex-col justify-between ring-1 ring-teal-500/30">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-teal-300">Phase 3</span>
          <span class="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[10px] font-bold">Modern Loophole</span>
        </div>
        <h3 class="text-sm font-bold text-white mb-2 pt-0">Optical Retype Bypass</h3>
        <ul class="space-y-1.5 text-slate-300 text-xs list-disc pl-4">
          <li>Phone / tablet propped on desk</li>
          <li>Manual copy-typing word-for-word</li>
          <li>Zero clipboard paste events logged</li>
          <li>Superficial appearance of manual drafting</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-teal-300 font-semibold">
        <em>Definitively exposed by Keystroke Dynamics</em>
      </div>
    </div>
  </div>

  <div class="mt-6 p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 text-center">
    <p class="text-xs text-teal-200">
      <strong>The Telemetry Breakthrough:</strong> While optical transcription produces zero clipboard events, it collapses the biological friction of original human composition into a mechanical, pause-less motor loop.
    </p>
  </div>
</div>

<p>In an optical transcription scenario:</p>
<ol>
  <li>The student generates an essay prompt response using an LLM on their mobile phone, tablet, or adjacent monitor.</li>
  <li>They may run the output through a text &quot;humanizer&quot; (e.g., Undetectable AI or QuillBot) to distort surface linguistic patterns.</li>
  <li>Rather than copying and pasting the text, the student places the secondary device next to their keyboard and manually types the content into the LMS or word processor word-for-word.</li>
</ol>

<p>To standard plagiarism scanners and static AI detectors, this submission appears pristine:</p>
<ul>
  <li><strong>Document session duration</strong> shows active engagement (e.g., 28 minutes of active keyboard activity).</li>
  <li>The clipboard event listener registers <strong>zero external paste actions</strong>.</li>
  <li>Surface linguistic classifiers may yield inconclusive results if the text was heavily paraphrased or humanized.</li>
</ul>

<p>
  Yet, despite bypassing superficial clipboard checks, the student cannot bypass the fundamental biometrics of human cognition. The temporal and physical mechanics of <em>transcribing existing text</em> differ radically from the cognitive mechanics of <em>authoring original thought</em>.
</p>

<hr class="my-8 border-border" />

<h2>The Psycholinguistic Foundations: Cognitive Drafting vs. Optical Transcription</h2>

<p>
  To analyze writing telemetry, we must examine the psycholinguistic architecture of text generation. In their seminal cognitive model of writing, John R. Hayes and Linda S. Flower demonstrated that organic composition is not a linear conveyor belt, but a <strong>non-linear, recursive cognitive cycle</strong> composed of three competing sub-processes:
</p>

<!-- Hayes-Flower Model Diagram -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="text-center font-bold text-foreground text-xs tracking-wider uppercase mb-6">The Hayes-Flower Cognitive Drafting Architecture</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 text-xs">1</span>
        <span>Planning Subprocess</span>
      </div>
      <ul class="space-y-1.5 text-muted-foreground list-disc pl-4">
        <li>Idea retrieval from long-term memory</li>
        <li>Goal setting &amp; rhetorical transitions</li>
        <li>Argument logic &amp; evidence synthesis</li>
        <li>Generates macro-planning pauses (3–15s)</li>
      </ul>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 text-xs">2</span>
        <span>Translating Subprocess</span>
      </div>
      <ul class="space-y-1.5 text-muted-foreground list-disc pl-4">
        <li>Lexical access &amp; syntactic packaging</li>
        <li>Motor execution (finger-to-key mapping)</li>
        <li>Syntactic production bursts (P-bursts)</li>
        <li>Variable intra-clause pause latency</li>
      </ul>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 text-xs">3</span>
        <span>Reviewing Subprocess</span>
      </div>
      <ul class="space-y-1.5 text-muted-foreground list-disc pl-4">
        <li>Real-time error detection &amp; monitoring</li>
        <li>Micro-revisions (backspaces, typo fixes)</li>
        <li>Macro-revisions (clause cuts, restructuring)</li>
        <li>Non-linear cursor backtracking</li>
      </ul>
    </div>
  </div>

  <div class="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center text-xs text-emerald-800 dark:text-emerald-300 font-medium">
    &larr; Continuous Recursive Feedback Loop: Writers constantly shift between Planning, Translating, and Reviewing &rarr;
  </div>
</div>

<h3>1. The Organic Drafting Cognitive Cycle</h3>
<p>When a student writes an authentic essay:</p>
<ul>
  <li><strong>Working Memory Saturation:</strong> The writer must simultaneously retrieve subject-matter knowledge from long-term memory, evaluate audience constraints, organize rhetorical transitions, and select precise syntactic frames.</li>
  <li><strong>Cognitive Pauses:</strong> Before constructing a complex sentence, the brain enters a planning pause (often 1.5 to 8+ seconds) while lexical retrieval and grammatical structuring occur.</li>
  <li><strong>Immediate Local Revision:</strong> As thoughts translate into keystrokes, visual and motor feedback loops trigger immediate self-correction. The student spots a weak adjective, deletes it via four backspaces, types a stronger synonym, pauses to reread the clause, and continues.</li>
  <li><strong>Global Recursive Navigation:</strong> The student moves the cursor back three paragraphs to insert a connecting transition, updates a thesis statement, or rearranges supporting evidence.</li>
</ul>

<h3>2. The Optical Transcription Motor Loop</h3>
<p>
  When a student transcribes text from a secondary screen, the entire planning and rhetorical retrieval apparatus is bypassed. The cognitive load collapses into an <strong>optical-motor copy loop</strong>:
</p>

<div class="my-6 p-4 rounded-xl bg-slate-900 text-teal-300 font-mono text-xs text-center border border-slate-800 shadow-inner overflow-x-auto">
  Saccade to Source Screen &rarr; Short-Term Phonological Buffer (4–6 words) &rarr; Motor Typing Burst &rarr; Saccade to Next Chunk
</div>

<p>Because the vocabulary, syntax, logic, and structure have already been solved by the generative AI model, the student experiences <strong>zero composing friction</strong>:</p>
<ul>
  <li>No multi-second pauses at complex clause transitions or paragraph thresholds.</li>
  <li>No macro-revisions, structural rearrangements, or deleted lines of thought.</li>
  <li>Metronomic typing velocity that remains identical across trivial filler words and dense disciplinary arguments.</li>
</ul>

<p>
  By logging timestamped keystroke events, modern integrity telemetry captures these fundamental psycholinguistic differences with mathematical precision.
</p>

<hr class="my-8 border-border" />

<h2>The Core Mathematical Metrics of Keystroke Telemetry</h2>

<p>Keystroke dynamics captures every key-down, key-up, cursor navigation, and text mutation event as an immutable time-series tuple:</p>

<div class="my-4 rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
  <span class="text-teal-400">e<sub>i</sub></span> = &lang; k<sub>i</sub>, t<sub>down, i</sub>, t<sub>up, i</sub>, c<sub>i</sub>, a<sub>i</sub> &rang;
</div>

<p>Where:</p>
<ul>
  <li><code>k<sub>i</sub></code> is the key identifier (e.g., character code, <code>Backspace</code>, <code>ArrowLeft</code>, <code>Delete</code>).</li>
  <li><code>t<sub>down, i</sub></code> and <code>t<sub>up, i</sub></code> represent millisecond-accurate timestamps for key press and release.</li>
  <li><code>c<sub>i</sub></code> is the integer cursor position within the document buffer.</li>
  <li><code>a<sub>i</sub></code> is the mutation action (e.g., character insertion, block selection, text deletion).</li>
</ul>

<p>From this raw event stream, four primary mathematical metrics isolate authentic writing from transcription:</p>

<!-- 4 Core Metrics Grid -->
<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
  <div class="p-4 rounded-xl bg-card border border-border shadow-sm">
    <div class="font-bold text-foreground text-sm mb-1 text-teal-600 dark:text-teal-400">1. Inter-Key Interval (IKI) Variance</div>
    <p class="text-muted-foreground">Standard deviation &sigma;<sub>IKI</sub> and distribution shape (heavy-tailed log-normal multimodal vs. tight Gaussian).</p>
  </div>
  <div class="p-4 rounded-xl bg-card border border-border shadow-sm">
    <div class="font-bold text-foreground text-sm mb-1 text-teal-600 dark:text-teal-400">2. Syntactic Boundary Pauses (P-Bursts)</div>
    <p class="text-muted-foreground">Pause latency scaled to grammatical hierarchy (Paragraph &gt; Sentence &gt; Clause &gt; Word &gt; Morpheme).</p>
  </div>
  <div class="p-4 rounded-xl bg-card border border-border shadow-sm">
    <div class="font-bold text-foreground text-sm mb-1 text-teal-600 dark:text-teal-400">3. Revision Dynamics (R-Bursts)</div>
    <p class="text-muted-foreground">Deletion ratios R<sub>del</sub>, macro-clause cuts, and non-linear cursor trajectory entropy.</p>
  </div>
  <div class="p-4 rounded-xl bg-card border border-border shadow-sm">
    <div class="font-bold text-foreground text-sm mb-1 text-teal-600 dark:text-teal-400">4. Velocity Entropy &amp; Fatigue Curves</div>
    <p class="text-muted-foreground">Sustained net composition velocity vs. cognitive drafting decay and Shannon operational entropy H(X).</p>
  </div>
</div>

<hr class="my-6 border-border" />

<h3>1. Inter-Key Interval (IKI) Distributions &amp; Standard Deviation</h3>

<p>The <strong>Inter-Key Interval (IKI)</strong> is the duration between the release of key <code>i</code> and the press of key <code>i+1</code>:</p>

<div class="my-4 rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
  <span class="text-teal-400">IKI<sub>i</sub></span> = t<sub>down, i+1</sub> - t<sub>up, i</sub>
</div>

<h4>Authentic Drafting Distribution</h4>
<p>In authentic human drafting, IKI distributions are <strong>heavy-tailed, highly skewed, and bimodal or multimodal (log-normal)</strong>:</p>
<ul>
  <li><strong>Intra-word bigram motor executions</strong> (e.g., typing <code>th</code>, <code>er</code>, <code>ing</code> in familiar words) occur rapidly: <code>80 ms &le; IKI &le; 160 ms</code>.</li>
  <li><strong>Lexical retrieval transitions</strong> (choosing an uncommon noun or verb) introduce mid-tier intervals: <code>350 ms &le; IKI &le; 900 ms</code>.</li>
  <li><strong>Cognitive formulation intervals</strong> (commas, clause junctures, sentence beginnings) generate major temporal spikes: <code>1,500 ms &le; IKI &le; 6,000+ ms</code>.</li>
</ul>

<p>As a result, the standard deviation of IKI (&sigma;<sub>IKI</sub>) in authentic drafting is exceptionally high relative to the mean:</p>

<div class="my-4 rounded-xl bg-slate-900 text-teal-300 p-3 font-mono text-xs text-center border border-slate-800">
  &sigma;<sub>IKI</sub> &approx; 0.65 &middot; &mu;<sub>IKI</sub> &emsp;to&emsp; 1.40 &middot; &mu;<sub>IKI</sub>
</div>

<h4>Manual Transcription Distribution</h4>
<p>In copy-typing or optical transcription, the writer is executing motor instructions from a continuous visual buffer. The IKI distribution collapses into a <strong>narrow, single-mode Gaussian distribution</strong>:</p>
<ul>
  <li>Keystrokes cluster tightly around the typist&apos;s physical motor rhythm (<code>&mu;<sub>IKI</sub> &approx; 180 ms - 280 ms</code>).</li>
  <li>The standard deviation drops dramatically: <code>&sigma;<sub>IKI</sub> &lt; 0.25 &middot; &mu;<sub>IKI</sub></code>.</li>
  <li>Pauses exceeding 1,500 ms are virtually absent during active typing runs, appearing only when the student manually shifts their gaze or scrolls the phone screen.</li>
</ul>

<!-- IKI Waveform & Distribution Card -->
<div class="my-6 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="font-bold text-foreground text-xs uppercase tracking-wide mb-4">Visualizing IKI Probability Density &amp; Typing Cadence</div>
  <div class="space-y-5 text-xs font-mono">
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex justify-between items-center text-muted-foreground mb-2 text-[11px]">
        <span class="text-emerald-600 dark:text-emerald-400 font-bold">🌱 Authentic Human Drafting (Multimodal Log-Normal, High Variance)</span>
        <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">&sigma; = 540ms | CV = 0.82</span>
      </div>
      <div class="h-8 w-full bg-slate-950 rounded-lg flex items-center px-3 gap-1 overflow-hidden border border-slate-800">
        <span class="h-4 w-3 bg-emerald-500 rounded-sm" title="Motor Bigram: 110ms"></span>
        <span class="h-3 w-2 bg-emerald-400 rounded-sm"></span>
        <span class="h-5 w-4 bg-emerald-600 rounded-sm"></span>
        <span class="h-1 w-6 bg-transparent"></span>
        <span class="h-4 w-3 bg-emerald-500 rounded-sm"></span>
        <span class="h-2 w-14 bg-amber-400/40 rounded-sm" title="Lexical Pause: 850ms"></span>
        <span class="h-4 w-3 bg-emerald-500 rounded-sm"></span>
        <span class="h-2 w-28 bg-rose-400/40 rounded-sm" title="Syntactic Sentence Pause: 3,400ms"></span>
        <span class="h-5 w-4 bg-emerald-600 rounded-sm"></span>
      </div>
      <p class="text-[11px] text-muted-foreground mt-2 font-sans">
        Burst of fast typing &rarr; mid-pause at difficult vocabulary &rarr; extended multi-second cognitive pause at sentence boundary.
      </p>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex justify-between items-center text-muted-foreground mb-2 text-[11px]">
        <span class="text-rose-600 dark:text-rose-400 font-bold">📱 Manual Optical Transcription (Tight Gaussian, Metronomic Rhythm)</span>
        <span class="px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-semibold">&sigma; = 72ms | CV = 0.18</span>
      </div>
      <div class="h-8 w-full bg-slate-950 rounded-lg flex items-center px-3 gap-1 overflow-hidden border border-slate-800">
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
        <span class="h-4 w-3 bg-rose-500 rounded-sm"></span>
      </div>
      <p class="text-[11px] text-muted-foreground mt-2 font-sans">
        Unbroken mechanical cadence: 220ms interval between characters, words, clauses, and sentences with zero planning hesitation.
      </p>
    </div>
  </div>
</div>

<hr class="my-6 border-border" />

<h3>2. Pause Burst Analysis (P-Bursts) &amp; Syntactic Boundary Hierarchy</h3>

<p>
  A <strong>P-burst (Pause Burst)</strong> is defined as a contiguous sequence of characters produced between two cognitive pauses exceeding a defined threshold &tau; (typically <code>&tau; = 2,000 ms</code>).
</p>

<p>
  In psycholinguistics, cognitive pauses obey a strict <strong>Syntactic Boundary Hierarchy</strong>. The duration of a pause correlates directly with the grammatical depth and cognitive complexity of the linguistic boundary:
</p>

<div class="my-4 rounded-xl bg-slate-900 text-teal-300 p-3 font-mono text-xs text-center border border-slate-800 overflow-x-auto">
  Pause(Paragraph) &gt; Pause(Sentence) &gt; Pause(Clause) &gt; Pause(Word) &gt; Pause(Morpheme)
</div>

<!-- Syntactic Pause Latency Table -->
<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-3.5">Linguistic Boundary</th>
          <th class="p-3.5">Authentic Human Drafting</th>
          <th class="p-3.5">Manual Transcription</th>
          <th class="p-3.5">Cognitive Rationale</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-muted-foreground">
        <tr>
          <td class="p-3.5 font-medium text-foreground">Within-Word (Intra-morpheme)</td>
          <td class="p-3.5">80 ms – 180 ms</td>
          <td class="p-3.5">110 ms – 220 ms</td>
          <td class="p-3.5">Physical finger muscle memory</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Inter-Word (Between words)</td>
          <td class="p-3.5">220 ms – 550 ms</td>
          <td class="p-3.5">180 ms – 280 ms</td>
          <td class="p-3.5">Next-word lexical lookahead</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Intra-Sentence Clause (, ; :)</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">800 ms – 2,200 ms</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">200 ms – 380 ms (Flat)</td>
          <td class="p-3.5">Syntactic restructuring of next thought</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Sentence Boundary (. ! ?)</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">2,500 ms – 7,500 ms</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">250 ms – 450 ms (Flat)</td>
          <td class="p-3.5">Macro-argument planning &amp; validation</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Paragraph Threshold (\n\n)</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">8,000 ms – 45,000+ ms</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">400 ms – 1,200 ms (Flat)</td>
          <td class="p-3.5">Thematic transition &amp; outline review</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h4>The Optical Saccade Anomaly</h4>
<p>
  In manual transcription, the pause signature at syntactic boundaries disappears. A student copy-typing an AI-generated essay from an adjacent screen will finish a complex 35-word periodic sentence, type a period, hit the spacebar, and immediately begin typing the subsequent sentence within <strong>280 milliseconds</strong>.
</p>
<p>
  The only pauses present in transcription telemetry are <strong>optical saccade fixations</strong> (200–450 ms), representing the time required for the student&apos;s eyes to jump from the document screen to the secondary device, acquire the next 4–6 words in visual memory, and return to the keyboard. These saccades occur at arbitrary character counts (often mid-word or across irrelevant prepositions) rather than at natural syntactic junctures.
</p>

<hr class="my-6 border-border" />

<h3>3. Revision Burst Dynamics (R-Bursts) &amp; Structural Entropy</h3>

<p>
  An <strong>R-burst (Revision Burst)</strong> measures the frequency, magnitude, and spatial dispersion of text deletions, replacements, and non-linear cursor movements.
</p>

<div class="my-4 rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
  <span class="text-teal-400">Deletion Ratio (R<sub>del</sub>)</span> = [ Count(Backspace) + Count(Delete) ] / [ Total Document Keystrokes ] &times; 100%
</div>

<!-- Revision Dynamics Trajectory Graph Mockup -->
<div class="my-6 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="font-bold text-foreground text-xs uppercase tracking-wide mb-4">Cursor Trajectory Monotonicity: Non-Linear Drafting vs. Forward Monotonic March</div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
    <!-- Non-linear drafting -->
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="text-emerald-600 dark:text-emerald-400 font-bold mb-2">Authentic Human Drafting (Recursive Loops)</div>
      <div class="space-y-1.5 text-[11px] text-muted-foreground font-sans">
        <p><strong>Cursor Movement:</strong> Jumps from pos 1,400 &rarr; pos 210 &rarr; pos 1,450 &rarr; pos 950.</p>
        <p><strong>Deletion Ratio:</strong> 8.0% – 22.0% of all keystrokes.</p>
        <p><strong>Morphology:</strong> Whole-clause deletions, rephrased sentences, active restructuring.</p>
      </div>
      <div class="mt-3 p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[10px]">
        High entropy, non-linear navigation, natural trial-and-error composition.
      </div>
    </div>

    <!-- Monotonic March -->
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="text-rose-600 dark:text-rose-400 font-bold mb-2">Manual Transcription (Strict 0 &rarr; N Append)</div>
      <div class="space-y-1.5 text-[11px] text-muted-foreground font-sans">
        <p><strong>Cursor Movement:</strong> Unidirectional increment from pos 0 &rarr; pos 7,850.</p>
        <p><strong>Deletion Ratio:</strong> 0.1% – 1.5% of all keystrokes.</p>
        <p><strong>Morphology:</strong> 1-stroke typo corrections immediately upon motor miscue.</p>
      </div>
      <div class="mt-3 p-2.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300 text-[10px]">
        Zero macro-deletions, zero paragraph reorganizations, monotonic forward append.
      </div>
    </div>
  </div>
</div>

<hr class="my-6 border-border" />

<h3>4. Velocity Acceleration &amp; Typing Telemetry Entropy</h3>

<p>
  To measure drafting sustainability, telemetry models calculate the relationship between a student&apos;s <strong>Gross Motor Speed</strong> (raw physical typing speed on memorized strings) and their <strong>Net Composition Velocity</strong> (actual text production rate over time).
</p>

<div class="my-4 rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
  <span class="text-teal-400">Net Composition Velocity (WPM)</span> = [ Final Document Word Count ] / [ Total Active Session Minutes ]
</div>

<!-- Velocity & Entropy Comparative Table -->
<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-3.5">Telemetry Attribute</th>
          <th class="p-3.5">Authentic Drafting</th>
          <th class="p-3.5">Manual Transcription</th>
          <th class="p-3.5">Diagnostic Indicator</th>
        </tr>
      </thead>
      <tbody class="divide-y border-border text-muted-foreground">
        <tr>
          <td class="p-3.5 font-medium text-foreground">Net Composition Velocity</td>
          <td class="p-3.5">15 – 38 WPM</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">55 – 95+ WPM (Sustained)</td>
          <td class="p-3.5">Cognitive drafting friction vs. mechanical copy</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Cognitive Velocity Decay (Slope)</td>
          <td class="p-3.5">Negative (Fatigue &amp; reflection dips)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">Flat / Steady Motor Pace</td>
          <td class="p-3.5">Human mental fatigue across multi-paragraph essays</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Keystroke Shannon Entropy H(X)</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">High (H &gt; 3.8 bits)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">Low (H &lt; 2.1 bits)</td>
          <td class="p-3.5">Operational diversity (modifiers, clicks, arrows, cuts)</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Multi-Tab Research Context Switching</td>
          <td class="p-3.5">High (Consulting sources &amp; PDFs)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">Near Zero (External device view)</td>
          <td class="p-3.5">Authentic academic sourcing verification</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Session Fragmentation</td>
          <td class="p-3.5">Multi-session drafts (Hours / Days)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">Single compressed burst (15–30 min)</td>
          <td class="p-3.5">Organic development vs. single-sitting transcribing</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p>
  By evaluating the categorical distribution of keystroke actions (character keys, modifier keys, deletion keys, arrow navigation, cursor clicks, selection highlights), we calculate the <strong>Shannon entropy H(X)</strong> of the event stream:
</p>

<div class="my-4 rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
  <span class="text-teal-400">H(X)</span> = - &sum;<sub>i=1..n</sub> P(x<sub>i</sub>) &middot; log<sub>2</sub> P(x<sub>i</sub>)
</div>

<p>
  Authentic writing exhibits high entropy (<code>H &gt; 3.8 bits</code>) due to rich operational diversity (frequent cursor relocations, text selections, modifier shortcuts, backspaces, and punctuation adjustments). Manual transcription exhibits low entropy (<code>H &lt; 2.1 bits</code>), consisting almost exclusively of sequential alphanumeric characters and spacebar strokes.
</p>

<hr class="my-8 border-border" />

<h2>Detailed Telemetry Matrix: Authentic Drafting vs. Manual Transcription</h2>

<p>The following comprehensive matrix contrasts the telemetry signatures captured across drafting sessions:</p>

<!-- Full 12-Row Benchmark Matrix -->
<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-3.5">Telemetry Dimension</th>
          <th class="p-3.5">Authentic Human Drafting</th>
          <th class="p-3.5">Manual Optical Transcription</th>
        </tr>
      </thead>
      <tbody class="divide-y border-border text-muted-foreground">
        <tr>
          <td class="p-3.5 font-medium text-foreground">IKI Standard Deviation</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">High (&sigma; &gt; 450 ms); heavy-tailed</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">Low (&sigma; &lt; 120 ms); tight Gaussian</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Distribution Shape</td>
          <td class="p-3.5">Log-normal, multimodal (bursty)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">Unimodal, single-rate motor pace</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Paragraph Pause Latency</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">15,000 ms – 60,000+ ms</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">300 ms – 1,200 ms</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Clause Pause Latency</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">1,200 ms – 3,500 ms</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">150 ms – 350 ms</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Deletion Ratio (R<sub>del</sub>)</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">8.0% – 22.0% of all strokes</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">0.1% – 1.8% of all strokes</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Deletion Morphology</td>
          <td class="p-3.5">Block cuts, whole words, clause rewrites</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">Isolated 1-character typo corrections</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Cursor Vector Trajectory</td>
          <td class="p-3.5">Non-linear, bidirectional, multi-hop</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">Monotonic forward append (0 &rarr; N)</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Drafting vs Typing Speed</td>
          <td class="p-3.5">18 – 35 WPM net production rate</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">60 – 95+ WPM sustained copy rate</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Research Latency Gaps</td>
          <td class="p-3.5">Frequent pauses to verify facts/quotes</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">Absent (source already synthesized by AI)</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">P-Burst Length</td>
          <td class="p-3.5">Variable (3 to 18 words per burst)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">Fixed by visual buffer (4 to 7 words)</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Operational Entropy</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">H &gt; 3.8 bits (Rich actions)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold">H &lt; 2.1 bits (Alpha-numeric only)</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Session Distribution</td>
          <td class="p-3.5">Multi-day or multi-hour iterations</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">Single compressed 15–30 min burst</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Checkmark Plagiarism’s Patent-Pending Essay Playback™: Visualizing Process Telemetry</h2>

<p>
  While raw time-series equations and millisecond timestamps provide mathematical certainty, educators, department chairs, and parents require intuitive, visually transparent evidence. An academic integrity investigation should never rest on an uninterpretable, black-box percentage score.
</p>

<p>
  Checkmark Plagiarism solves this through <a href="/services/writing-playback"><strong>patent-pending Essay Playback™</strong></a>, an integrated suite that transforms millions of telemetry data points into an interactive, scrubbable visual record.
</p>

<!-- Interactive Essay Playback Mockup Card -->
<div class="my-8 rounded-2xl bg-slate-950 text-slate-100 p-6 border border-slate-800 shadow-xl font-mono text-xs">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
    <div class="flex items-center gap-2.5">
      <span class="h-3 w-3 rounded-full bg-rose-500 animate-pulse"></span>
      <span class="font-bold text-sm text-white tracking-tight">Checkmark Essay Playback™ Investigation Suite</span>
    </div>
    <div class="flex items-center gap-2 text-[11px] text-slate-400">
      <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-teal-400 font-semibold">Speed: 4x ▼</span>
      <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">18:42 / 28:30</span>
    </div>
  </div>

  <!-- Scrub Bar -->
  <div class="space-y-2 mb-5">
    <div class="w-full bg-slate-800 rounded-full h-3 relative overflow-hidden">
      <div class="bg-gradient-to-r from-teal-500 via-amber-500 to-rose-500 h-full w-[68%] rounded-full"></div>
      <div class="absolute top-0 left-[21%] bottom-0 w-1 bg-white/80" title="Cadence Anomaly Detected"></div>
      <div class="absolute top-0 left-[54%] bottom-0 w-1 bg-white/80" title="Zero Clause Pause Segment"></div>
    </div>
    <div class="flex justify-between text-[10px] text-slate-400">
      <span>00:00 [Start]</span>
      <span>06:00 [82 WPM Cadence]</span>
      <span>12:00 [Zero Pauses]</span>
      <span>18:00 [Monotonic]</span>
      <span>28:30 [Submit]</span>
    </div>
  </div>

  <!-- Anomaly Alert Banner -->
  <div class="mb-5 p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 flex items-center justify-between gap-2">
    <div class="flex items-center gap-2">
      <span class="text-rose-400 text-sm">⚠️</span>
      <span class="font-semibold text-xs">CADENCE ANOMALY DETECTED: Transcription Signature (98.4% Confidence)</span>
    </div>
    <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">Educator View</span>
  </div>

  <!-- Telemetry Metrics Breakdown Bar -->
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 text-[11px]">
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
      <span class="text-slate-400 block text-[10px]">Net Composition Rate</span>
      <span class="text-rose-400 font-bold text-sm">78.4 WPM</span>
      <span class="text-[9px] text-slate-500 block">(Top 0.5% Speed)</span>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
      <span class="text-slate-400 block text-[10px]">IKI Variance (&sigma;)</span>
      <span class="text-rose-400 font-bold text-sm">84 ms</span>
      <span class="text-[9px] text-slate-500 block">(Metronomic Cadence)</span>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
      <span class="text-slate-400 block text-[10px]">Deletion Ratio (R<sub>del</sub>)</span>
      <span class="text-rose-400 font-bold text-sm">0.8%</span>
      <span class="text-[9px] text-slate-500 block">(Zero Clause Cuts)</span>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
      <span class="text-slate-400 block text-[10px]">External Pastes</span>
      <span class="text-emerald-400 font-bold text-sm">0 Logged</span>
      <span class="text-[9px] text-slate-500 block">(Manual Retype)</span>
    </div>
  </div>

  <!-- Triangulated Evidence Panels -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
    <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
      <div class="text-teal-400 font-semibold mb-1">1. Passage-Level AI Card</div>
      <p class="text-slate-300 text-[10px] leading-relaxed mb-2">&quot;Furthermore, the sociopolitical ramifications...&quot;</p>
      <div class="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
        <span>Typical AI Pattern</span>
        <span class="text-amber-300 font-bold">96% Conf</span>
      </div>
    </div>

    <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
      <div class="text-teal-400 font-semibold mb-1">2. Plagiarism Source Matching</div>
      <p class="text-slate-300 text-[10px] leading-relaxed mb-2">Live Web &amp; Academic Repositories: 0% Direct Match</p>
      <div class="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
        <span>Direct Plagiarism</span>
        <span class="text-emerald-400 font-bold">Clean</span>
      </div>
    </div>

    <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
      <div class="text-teal-400 font-semibold mb-1">3. Keystroke Playback Stream</div>
      <p class="text-slate-300 text-[10px] leading-relaxed mb-2">Jump to 08:42 in session timeline to watch real-time typing.</p>
      <div class="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
        <span>Timeline State</span>
        <span class="text-teal-300 font-bold">Jump to Playback ↗</span>
      </div>
    </div>
  </div>
</div>

<h3>1. 1x to 8x Scrubbable Chronological Video Player</h3>
<p>Educators can scrub through the entire writing session like a high-definition video timeline. At variable speeds (1x, 2x, 4x, 8x), teachers can watch the exact sequence of composition:</p>
<ul>
  <li>Observe natural composing pauses where the student stopped to think.</li>
  <li>Watch real-time sentence construction, typo corrections, and phrasing reorganizations.</li>
  <li>Instantly identify unnatural, uninterrupted typing streams where complex paragraphs appear without hesitation.</li>
</ul>

<h3>2. Cadence Anomaly Indicators &amp; Composing Friction Heatmaps</h3>
<p>Checkmark&apos;s telemetry engine automatically highlights segments of the timeline where typing dynamics deviate from authentic composition baselines:</p>
<ul>
  <li><strong>Cadence Anomaly Flags:</strong> Identifies passages typed with extreme IKI regularity, lack of syntactic pauses, and sub-1% deletion ratios.</li>
  <li><strong>Composing Friction Heatmaps:</strong> Visualizes cognitive effort across the document. Authentic human writing displays warm friction zones (frequent edits, variable pacing), while transcribed text appears as an unbroken, low-friction cool zone.</li>
</ul>

<h3>3. Preserved External Paste History with Complete Text Capture</h3>
<p>When a student does paste text into the document, Checkmark does not simply log a generic &quot;Paste Event.&quot; The system:</p>
<ul>
  <li>Captures and stores the <strong>full original pasted text</strong>, preserving the exact clipboard contents at the millisecond it entered the editor.</li>
  <li>Maintains this original capture <strong>even if the student subsequently edits, rewrites, or deletes every individual word</strong> to disguise the paste.</li>
  <li>Provides a dedicated <em>&quot;Jump to Playback&quot;</em> button that positions the timeline directly at the paste event.</li>
</ul>

<h3>4. Triangulated Multi-Factor Integrity Suite</h3>
<p>Checkmark never forces teachers to rely on a single data point. The platform triangulates process telemetry with linguistic and source evidence:</p>
<ul>
  <li><a href="/services/ai-detection"><strong>Passage-Level AI Detection:</strong></a> Highlights specific sentences directly in the text with calibrated confidence sliders (typical human style vs. typical AI pattern), accompanied by detailed linguistic evidence cards in the sidebar. Below 150 words, Checkmark displays <code>N/A</code> rather than guessing on insufficient sample sizes.</li>
  <li><a href="/services/plagiarism-detection"><strong>Side-by-Side Plagiarism Matching:</strong></a> Scans billions of live web pages and student repositories, displaying side-by-side quote comparisons with direct source links.</li>
  <li><a href="/services/autograder"><strong>Rubric Autograder with Teacher Authority:</strong></a> Generates quote-anchored formative feedback aligned with custom institutional rubrics, keeping the educator fully in control of final grading.</li>
</ul>

<hr class="my-8 border-border" />

<h2>Real-World Case Studies: Telemetry in the Classroom</h2>

<p>To illustrate how keystroke telemetry operates across real academic settings, consider three representative scenarios:</p>

<!-- Case Studies Overview Table -->
<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-3.5">Case Profile</th>
          <th class="p-3.5">1. AP Literature Essay</th>
          <th class="p-3.5">2. Higher Ed Research Paper</th>
          <th class="p-3.5">3. Non-Native English (ELL)</th>
        </tr>
      </thead>
      <tbody class="divide-y border-border text-muted-foreground">
        <tr>
          <td class="p-3.5 font-medium text-foreground">Submission Context</td>
          <td class="p-3.5">1,400-word Hamlet Analysis</td>
          <td class="p-3.5">3,200-word Bioethics Paper</td>
          <td class="p-3.5">1,100-word History Essay</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Clipboard Paste Events</td>
          <td class="p-3.5">0 Pastes Logged</td>
          <td class="p-3.5">0 Pastes Logged</td>
          <td class="p-3.5">0 Pastes Logged</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Static AI Detector Score</td>
          <td class="p-3.5 text-amber-500">42% (Inconclusive)</td>
          <td class="p-3.5 text-emerald-500">18% (False Negative)</td>
          <td class="p-3.5 text-rose-500 font-bold">88% (False Positive Flag)</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">IKI Standard Dev (&sigma;)</td>
          <td class="p-3.5 text-rose-500">92 ms (Metronomic)</td>
          <td class="p-3.5 text-rose-500">104 ms (Metronomic)</td>
          <td class="p-3.5 text-emerald-500 font-bold">680 ms (High Variance)</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Deletion Ratio (R<sub>del</sub>)</td>
          <td class="p-3.5 text-rose-500">0.6% (Zero block cuts)</td>
          <td class="p-3.5 text-rose-500">1.1% (Micro-typos only)</td>
          <td class="p-3.5 text-emerald-500 font-bold">19.4% (Heavy Recursive Edits)</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Syntactic Pauses</td>
          <td class="p-3.5 text-rose-500">Absent at clause boundaries</td>
          <td class="p-3.5 text-rose-500">Absent across dense quotes</td>
          <td class="p-3.5 text-emerald-500 font-bold">Extended vocabulary pauses</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Playback Finding</td>
          <td class="p-3.5">Optical copy from iPhone</td>
          <td class="p-3.5">Split-screen AI transcription</td>
          <td class="p-3.5 text-emerald-500 font-bold">Authentic human struggle</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Pedagogical Outcome</td>
          <td class="p-3.5">Restorative rewrite conference</td>
          <td class="p-3.5">Academic integrity review</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">Exonerated; Student protected</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="my-6 space-y-5">
  <!-- Case 1 -->
  <div class="rounded-2xl border border-border bg-card p-6 shadow-sm">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase">Case Study 1</span>
      <h3 class="text-base font-bold text-foreground m-0 p-0">Secondary AP Literature – The iPhone Retype Bypass</h3>
    </div>
    <ul class="space-y-2 text-xs text-muted-foreground mb-4">
      <li><strong>Context:</strong> A high school senior in an AP English Literature course submitted a 1,400-word essay analyzing thematic motifs in <em>Hamlet</em>.</li>
      <li><strong>Initial Observation:</strong> The student submitted the paper 25 minutes after opening the document. The text contained sophisticated literary terminology (<em>&quot;coruscating psychological verisimilitude&quot;</em>), but an uncalibrated third-party AI detector gave an inconclusive 42% score. Clipboard logs showed zero paste events.</li>
      <li><strong>Telemetry Analysis:</strong> Checkmark’s Essay Playback™ revealed that the entire 1,400 words were typed in a single 22-minute session at a sustained rate of 76 WPM with a 0.6% deletion ratio. The pause between paragraphs 2 and 3 was only 410 ms.</li>
    </ul>
    <div class="p-3.5 rounded-xl bg-muted/50 border border-border text-xs text-foreground">
      <strong>Resolution:</strong> The teacher held a supportive conference, opening Essay Playback™ alongside the student. Seeing the undeniable visual playback of metronomic typing, the student admitted to generating the essay on ChatGPT on their smartphone and copy-typing it. The teacher assigned a restorative in-class revision, focusing on authentic literary analysis skills.
    </div>
  </div>

  <!-- Case 2 -->
  <div class="rounded-2xl border border-border bg-card p-6 shadow-sm">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase">Case Study 2</span>
      <h3 class="text-base font-bold text-foreground m-0 p-0">Higher Education Bioethics – Paraphrased Split-Screen Transcription</h3>
    </div>
    <ul class="space-y-2 text-xs text-muted-foreground mb-4">
      <li><strong>Context:</strong> An undergraduate student in a 300-level biomedical ethics seminar submitted a 3,200-word research paper on CRISPR gene editing regulations.</li>
      <li><strong>Initial Observation:</strong> The student used an AI paraphraser to disguise raw LLM output. Static AI detectors returned a low 18% score, and web plagiarism scanners showed no direct matches.</li>
      <li><strong>Telemetry Analysis:</strong> Checkmark’s telemetry logs indicated that 3,200 words were typed in two 30-minute sessions with zero navigation backtracks. The cursor trajectory was 100% monotonic (0 &rarr; 3,200). Complex citations and multi-part medical terms were typed without a single verification pause.</li>
    </ul>
    <div class="p-3.5 rounded-xl bg-muted/50 border border-border text-xs text-foreground">
      <strong>Resolution:</strong> When presented with the keystroke telemetry report during an academic review committee meeting, the data provided indisputable, objective evidence that the student was transcribing pre-composed text from a secondary window rather than engaging in original research synthesis.
    </div>
  </div>

  <!-- Case 3 -->
  <div class="rounded-2xl border border-border bg-card p-6 shadow-sm">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase">Case Study 3</span>
      <h3 class="text-base font-bold text-foreground m-0 p-0">Protecting an ELL / ESL Student – Overturning a False AI Accusation</h3>
    </div>
    <ul class="space-y-2 text-xs text-muted-foreground mb-4">
      <li><strong>Context:</strong> A non-native English speaker in a 10th-grade World History class submitted an 1,100-word essay on the Industrial Revolution.</li>
      <li><strong>Initial Observation:</strong> A generic whole-document AI detector flagged the paper with an <strong>88% AI probability score</strong>, triggered by the student&apos;s formal, predictable sentence structures. The student was facing severe disciplinary action.</li>
      <li><strong>Telemetry Analysis:</strong> Checkmark’s Essay Playback™ showed a rich, authentic 3.5-hour writing journey across four distinct drafting sessions. The telemetry displayed an extensive deletion ratio of <strong>19.4%</strong>, with hundreds of backspaces where the student tested word choices. IKI variance was exceptionally high (&sigma; = 680 ms), with natural 4-to-12-second vocabulary retrieval pauses.</li>
    </ul>
    <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-200">
      <strong>Resolution:</strong> Keystroke telemetry served as <strong>irrefutable proof of innocence</strong>. The department chair dismissed the false AI flag immediately, praising the student&apos;s authentic effort and revision process. Checkmark protected an honest student from an unjust penalty.
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>The 4-Phase Educator Verification Protocol: From Flag to Restorative Dialogue</h2>

<p>
  When reviewing essays with anomalous telemetry or suspected AI transcription, institutions should follow a structured, non-punitive protocol designed to uphold academic standards while fostering student trust:
</p>

<!-- 4-Phase Protocol Cards -->
<div class="my-6 space-y-4">
  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <div class="flex items-center gap-2.5 font-bold text-foreground text-sm mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-xs">1</span>
      <span>Phase 1: Automated Telemetry Triage</span>
    </div>
    <p class="text-muted-foreground mb-2">Before reading the prose, check the Checkmark Writing Process Summary card:</p>
    <ul class="space-y-1 text-muted-foreground list-disc pl-5">
      <li><strong>Examine Net Composition Velocity:</strong> Is the net drafting speed (&gt;60 WPM) drastically higher than typical cognitive drafting norms (18–35 WPM)?</li>
      <li><strong>Inspect Deletion Ratio (R<sub>del</sub>):</strong> Is the total backspace/delete volume below 2%?</li>
      <li><strong>Check Cursor Trajectory:</strong> Did the student write strictly from 0 &rarr; N with zero non-linear revisions?</li>
    </ul>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <div class="flex items-center gap-2.5 font-bold text-foreground text-sm mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-xs">2</span>
      <span>Phase 2: Essay Playback™ Timeline Inspection</span>
    </div>
    <p class="text-muted-foreground mb-2">If triage metrics indicate an anomaly:</p>
    <ul class="space-y-1 text-muted-foreground list-disc pl-5">
      <li>Open the <a href="/services/writing-playback"><strong>Essay Playback™</strong></a> viewer and set playback speed to 4x.</li>
      <li>Scrub to major syntactic transitions (e.g., paragraph beginnings, complex multi-clause sentences).</li>
      <li>Observe pause latencies: Did the student pause for several seconds to construct the argument, or did keystrokes appear at an unbroken, metronomic cadence?</li>
      <li>Check external paste captures to confirm whether any background material was inserted.</li>
    </ul>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <div class="flex items-center gap-2.5 font-bold text-foreground text-sm mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-xs">3</span>
      <span>Phase 3: The Supportive, Evidence-Based Student Conference</span>
    </div>
    <p class="text-muted-foreground mb-2">Checkmark&apos;s core philosophy is <strong>&quot;Stop guessing, start trusting.&quot;</strong> The goal of an integrity conference is never to trap or humiliate a student, but to review objective process data collaboratively:</p>
    <ul class="space-y-1 text-muted-foreground list-disc pl-5">
      <li><strong>Open the Playback Together:</strong> Sit with the student and open the Checkmark timeline.</li>
      <li><strong>Use Non-Accusatory, Open-Ended Prompts:</strong> <em>&quot;Let&apos;s watch the playback of how you developed this third argument. Can you walk me through what you were thinking right here?&quot;</em></li>
      <li><strong>Evaluate Conceptual Ownership:</strong> Ask the student to explain the meaning of advanced vocabulary words or complex syntax appearing in the transcribed section.</li>
    </ul>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <div class="flex items-center gap-2.5 font-bold text-foreground text-sm mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-xs">4</span>
      <span>Phase 4: Constructive Resolution &amp; Restorative Remediation</span>
    </div>
    <ul class="space-y-1 text-muted-foreground list-disc pl-5">
      <li><strong>If Authentic Composition is Confirmed:</strong> Affirm the student&apos;s work, document the exonerating telemetry in the LMS, and resolve all flags.</li>
      <li><strong>If Unauthorized Transcription is Acknowledged:</strong> Focus on why the student felt the need to bypass the writing process (e.g., time management panic, lack of confidence in research). Provide an opportunity for an in-class, scaffolded rewrite where the student earns credit by demonstrating authentic drafting.</li>
    </ul>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Institutional AI Policy &amp; Syllabus Guidelines</h2>

<p>
  To ensure legal, ethical, and pedagogical clarity, school districts and higher education institutions should incorporate explicit keystroke transparency and process accountability policies into their academic integrity guidelines.
</p>

<!-- Sample Syllabus Policy Callout -->
<div class="my-6 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-sm text-xs space-y-3">
  <div class="font-bold text-teal-400 text-xs tracking-wider uppercase">Sample Syllabus Policy: Process-Based Academic Integrity</div>
  <p class="text-slate-300 italic">
    &quot;Writing is a cognitive process of thinking, revising, and articulating original ideas. In this course, academic integrity is evaluated not merely on the final text, but on the authenticity of the drafting process.&quot;
  </p>
  <div class="space-y-2 pt-2 text-slate-300">
    <p><strong>1. Authorized vs. Unauthorized AI Use:</strong> Generative AI tools (e.g., ChatGPT, Claude) may be used for initial brainstorming or concept clarification ONLY when explicitly permitted by the assignment prompt and cited accordingly.</p>
    <p><strong>2. Authorship &amp; Transcription:</strong> All submitted prose must be organically composed by the student. Copying, pasting, dictating, or manually transcribing AI-generated text from a secondary screen, phone, or document is strictly prohibited and constitutes authorship fraud.</p>
    <p><strong>3. Process Verification via Keystroke Telemetry:</strong> Essays must be composed within the designated LMS/Google Docs environment with writing telemetry active. Timestamped revision history and Essay Playback™ data serve as definitive evidence to protect honest students and verify authentic authorship. In the event of a process anomaly, students may be asked to discuss their drafting history in a conference.</p>
  </div>
</div>

<h3>Key Administrative Directives for Technology Directors</h3>
<ol>
  <li><strong>Zero Model Training Guarantees:</strong> Ensure vendor contracts explicitly state that student keystroke telemetry, essays, and metadata are <strong>never used to train public or commercial AI models</strong>. Checkmark Plagiarism maintains strict zero-retention model training policies.</li>
  <li><strong>FERPA and COPPA Compliance:</strong> Writing telemetry must be encrypted in transit and at rest, restricted to authenticated educators, and never shared with third-party data brokers.</li>
  <li><strong>Native LMS Integration:</strong> Deploy telemetry tools seamlessly within Google Docs, Canvas LMS, Buzz LMS, and Microsoft 365 to ensure passive, unobtrusive capture without requiring cumbersome lockdown browsers or intrusive webcam proctoring.</li>
</ol>

<hr class="my-8 border-border" />

<h2>Frequently Asked Questions (FAQ)</h2>

<div class="my-6 space-y-4">
  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 p-0 mb-2">1. Can a fast touch-typist be falsely flagged for manual transcription?</h3>
    <p class="text-muted-foreground leading-relaxed">
      <strong>No.</strong> Gross typing speed (how fast fingers hit keys) is completely distinct from composition telemetry. An expert typist who drafts organically still exhibits wide IKI variance, cognitive pauses at syntactic boundaries, natural backspaces (typically 8–15% deletion ratio), and non-linear cursor movements to revise earlier sentences. Manual transcription is identified by the <strong>absence of cognitive friction</strong> (metronomic cadence, flat IKI distributions, and zero structural revisions), not high motor speed.
    </p>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 p-0 mb-2">2. What if a student drafts their essay on paper first and then types it up?</h3>
    <p class="text-muted-foreground leading-relaxed">
      When a student types up a handwritten draft, their telemetry will look similar to transcription because they are copying existing physical notes. However, Checkmark’s protocol handles this transparently: during Phase 3 of the verification protocol, the student simply presents their physical handwritten outline or draft. The teacher can compare the handwritten notes to the playback stream, immediately validating the student&apos;s authentic authorship.
    </p>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 p-0 mb-2">3. How does keystroke telemetry differ from Google Docs Version History?</h3>
    <p class="text-muted-foreground leading-relaxed">
      Standard Google Docs version history takes periodic, low-resolution snapshots (often spaced several minutes or hours apart). It cannot capture millisecond-level Inter-Key Intervals, continuous cursor navigation, pause burst durations at clause boundaries, or individual backspace frequencies. Checkmark’s patent-pending Essay Playback™ captures the <strong>continuous time-series event stream</strong>, providing a complete, scrubbable keystroke-by-keystroke reconstruction that standard LMS or document histories cannot match.
    </p>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 p-0 mb-2">4. Can students bypass telemetry by using automated typing scripts or browser extensions?</h3>
    <p class="text-muted-foreground leading-relaxed">
      <strong>No.</strong> Automated typing scripts (bots or auto-typers designed to inject text character-by-character) produce unnaturally rigid, mathematically perfect IKI intervals (e.g., exactly 50 ms between every stroke). This creates an immediate, extreme telemetry anomaly score in Checkmark. Furthermore, synthetic typing bots lack human biometrics, such as natural micro-delays on complex physical bigrams (e.g., reaching across the keyboard for <code>q</code> or <code>p</code>).
    </p>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 p-0 mb-2">5. Why are static AI detectors alone insufficient for detecting optical transcription?</h3>
    <p class="text-muted-foreground leading-relaxed">
      Static AI detectors evaluate only the final, flat text string. If a student uses an &quot;AI humanizer,&quot; paraphrasing tool, or manual synonym swapping prior to retyping, statistical perplexity and burstiness filters often return inconclusive scores or false negatives. Keystroke telemetry analyzes the <strong>temporal process of creation</strong>, making it immune to surface-level text manipulation.
    </p>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 p-0 mb-2">6. Does Checkmark Plagiarism record student keystrokes outside of the assignment document?</h3>
    <p class="text-muted-foreground leading-relaxed">
      <strong>No.</strong> Checkmark Plagiarism strictly limits telemetry capture to the active assignment document buffer within authorized educational environments (Google Docs, Canvas LMS, Buzz LMS, Word). It never logs keystrokes in other browser tabs, desktop applications, personal chats, or system utilities, fully respecting student privacy and FERPA/COPPA compliance standards.
    </p>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 text-xs shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 p-0 mb-2">7. How does keystroke telemetry protect non-native English (ELL/ESL) students?</h3>
    <p class="text-muted-foreground leading-relaxed">
      Non-native English speakers frequently produce formal, predictable syntax that causes generic, statistical AI detectors to trigger false-positive alerts. Keystroke telemetry protects these students by documenting their authentic cognitive effort: high pause latencies during vocabulary selection, extensive dictionary lookups, recursive backspaces, and multi-pass structural edits. The playback provides unassailable proof that the student authored the work themselves.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>The Path Forward: Stop Guessing, Start Trusting</h2>

<p>
  The emergence of AI transcription tools and second-screen evasion tactics has rendered black-box percentages and crude paste counters obsolete. Upholding academic integrity in the modern classroom requires moving away from unprovable suspicions and toward <strong>transparent, defensible, process-based evidence</strong>.
</p>

<p>
  By combining <a href="/services/writing-playback"><strong>patent-pending Essay Playback™</strong></a>, millisecond-accurate keystroke dynamics, <a href="/services/ai-detection">passage-level AI detection</a>, and <a href="/services/plagiarism-detection">side-by-side plagiarism source matching</a>, Checkmark Plagiarism empowers educators to:
</p>

<ul>
  <li>Eliminate the guesswork from academic integrity investigations.</li>
  <li>Conduct restorative, supportive, evidence-backed student conferences.</li>
  <li>Protect honest and non-native English students from unjust accusations.</li>
  <li>Restore confidence and authentic learning to the writing classroom.</li>
</ul>

<div class="my-8 rounded-2xl bg-gradient-to-r from-teal-500/10 via-primary/5 to-teal-500/10 border border-teal-500/30 p-8 text-center shadow-md">
  <h3 class="text-xl font-bold text-foreground mb-3">Bring Transparent Process Telemetry to Your Institution</h3>
  <p class="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
    See how patent-pending Essay Playback™ and multi-factor integrity reporting eliminate false positives and protect student writing across your school or district.
  </p>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <a 
      href="https://teach.checkmarkplagiarism.com/example-report" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow hover:opacity-90 transition-opacity"
    >
      Explore Interactive Sample Report &rarr;
    </a>
    <a 
      href="/solutions/schools" 
      class="px-5 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs shadow-sm hover:bg-muted transition-colors"
    >
      Request District Pilot
    </a>
  </div>
</div>
`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/what-keystroke-telemetry-signals-distinguish-authentic-drafting-from-manual-transcription"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
