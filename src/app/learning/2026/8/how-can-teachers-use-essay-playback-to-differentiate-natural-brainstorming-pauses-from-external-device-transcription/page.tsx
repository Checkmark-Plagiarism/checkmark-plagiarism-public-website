import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Teachers Use Essay Playback to Differentiate Natural Brainstorming Pauses From External Device Transcription? | Checkmark Plagiarism",
  description: "Learn how educators use keystroke dynamics, pause topography, and Essay Playback™ to differentiate natural cognitive brainstorming pauses from manual external device AI transcription.",
  keywords: [
    "Essay Playback",
    "keystroke dynamics",
    "external device transcription",
    "writing process analysis",
    "brainstorming pauses",
    "Inter-Key Interval",
    "Keystroke Friction Ratio",
    "Checkmark Plagiarism",
    "academic integrity",
    "AI detection",
    "retype bypass",
    "Canvas SpeedGrader",
    "Buzz LMS"
  ],
  openGraph: {
    images: [
      "/images/services/report-paste-evidence.png",
      "/images/services/report-originality-tiles.png",
    ],
  },
};

const meta = {
  title: "How Can Teachers Use Essay Playback to Differentiate Natural Brainstorming Pauses From External Device Transcription? | Checkmark Plagiarism",
  description: "Learn how educators use keystroke dynamics, pause topography, and Essay Playback™ to differentiate natural cognitive brainstorming pauses from manual external device AI transcription.",
  "opengraph-image": "/images/services/report-paste-evidence.png",
  date: "08-19-2026",
  readTime: "~18 min read",
  category: "Writing Process",
  categories: ["Writing Process", "How It Works", "Teacher Guide", "AI Detection"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<!-- Executive Summary Callout Box -->
<div class="my-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
    <p class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Executive Summary</p>
  </div>
  <p class="text-base text-foreground leading-relaxed">
    As clipboard monitoring and standard copy-paste detectors have become common across learning management systems, students attempting to bypass academic integrity systems have increasingly adopted the <strong>&ldquo;retype bypass&rdquo;</strong>—placing an AI-generated essay or external draft on a smartphone, iPad, or secondary monitor and manually typing it into the LMS editor character-by-character. While this evasion tactic registers zero clipboard paste events and accumulates realistic active time, it leaves a distinct biometric signature in writing telemetry. Authentic human composition is non-linear, marked by high Inter-Key Interval (<em>IKI</em>) variance, deep clause-boundary formulation pauses (3–15+ seconds), and recursive revision churn (15–35% backspacing and restructuring). In contrast, optical transcription produces a flat, metronomic cadence (<em>CV<sub>IKI</sub> &lt; 0.20</em>), near-zero revision friction (<em>KFR &lt; 3%</em>), and short, syntax-independent gaze-shift pauses (0.8–2.2 seconds). Through patent-pending <strong><a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a></strong> and granular cadence analytics, Checkmark Plagiarism provides educators, writing program administrators, and honor councils with defensible, transparent process evidence—fostering restorative, growth-oriented student conferences while definitively exonerating authentic writers.
  </p>
</div>

<!-- Featured Visual Asset / Hero Report View -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/services/report-paste-evidence.png" 
    alt="Checkmark Plagiarism Writing Process Telemetry and Keystroke Playback Interface" 
    class="w-full h-auto object-cover m-0"
  />
  <div class="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <span><strong>Figure 1.0:</strong> Checkmark Writing Process Forensics — Timestamped Revision Bursts, Paste Buffer Preservation, and Synchronized Velocity Curves.</span>
    <span class="text-teal-600 dark:text-teal-400 font-medium">Patent-Pending Essay Playback™</span>
  </div>
</div>

<h2>1. The Retype Bypass: The Modern Frontier of Integrity Evasion</h2>

<p>
  In the initial wave of generative artificial intelligence in academic settings, student misuse was characterized by overt, high-volume clipboard pasting. Students prompted large language models (LLMs) like ChatGPT or Claude, copied the full generated output, and pasted 800 words into Canvas, Google Docs, or Buzz LMS in a single millisecond timestamp. First-generation integrity tools caught these submissions through basic document event logs: instant text jumps, mismatched paste formatting, and zero session duration.
</p>

<p>
  As awareness of clipboard logging spread across student forums and social platforms, evasion techniques evolved rapidly toward <strong>manual optical transcription</strong> (commonly known in student circles as the <em>&ldquo;retype bypass&rdquo;</em>).
</p>

<!-- Evasion Evolution Diagram -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md font-sans">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">The Evolution of Student AI Evasion Tactics</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Generation 1 -->
    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-rose-300">Generation 1</span>
          <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">Obsolete</span>
        </div>
        <h3 class="text-sm font-bold text-white mb-2 pt-0">Direct Copy/Paste</h3>
        <ul class="space-y-1.5 text-slate-300 text-xs list-disc pl-4">
          <li>Direct clipboard dump into editor</li>
          <li>Millisecond text jumps (&gt;800 words)</li>
          <li>Caught by clipboard listeners</li>
          <li>Flagged by HTML/CSS formatting markers</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
        <em>Intercepted by basic LMS event logs</em>
      </div>
    </div>

    <!-- Generation 2 -->
    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-amber-300">Generation 2</span>
          <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">Vulnerable</span>
        </div>
        <h3 class="text-sm font-bold text-white mb-2 pt-0">AI Humanizers</h3>
        <ul class="space-y-1.5 text-slate-300 text-xs list-disc pl-4">
          <li>QuillBot / Undetectable AI paraphrasing</li>
          <li>Perturbs surface token selection</li>
          <li>Evades static perplexity models</li>
          <li>Still vulnerable to clipboard paste logging</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
        <em>Flagged by Checkmark Passage-Level AI Cards</em>
      </div>
    </div>

    <!-- Generation 3 -->
    <div class="bg-slate-800/90 rounded-xl p-4 border border-teal-500/50 flex flex-col justify-between ring-1 ring-teal-500/30">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-teal-300">Generation 3</span>
          <span class="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[10px] font-bold">Current Evasion</span>
        </div>
        <h3 class="text-sm font-bold text-white mb-2 pt-0">Retype Bypass (Optical)</h3>
        <ul class="space-y-1.5 text-slate-300 text-xs list-disc pl-4">
          <li>Smartphone or second screen on desk</li>
          <li>Manual character-by-character entry</li>
          <li>0 clipboard paste events logged</li>
          <li>Simulates 35+ minutes of active duration</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-teal-300 font-semibold">
        <em>Exposed by Keystroke Cadence Telemetry</em>
      </div>
    </div>
  </div>

  <div class="mt-6 p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 text-center">
    <p class="text-xs text-teal-200">
      <strong>The Diagnostic Dilemma:</strong> Zero paste events &plus; Realistic 35-min active session &plus; Inconclusive static score &equals; Unprovable by legacy tools. Only keystroke cadence and pause topography reveal the biometric reality.
    </p>
  </div>
</div>

<h3>The Retype Workflow in Practice</h3>

<p>In a typical optical transcription workflow:</p>
<ol>
  <li><strong>External Generation:</strong> The student generates an outline, argument, or full essay on an unmonitored secondary device—such as a smartphone propped on the laptop keyboard, a tablet on the desk, a smartwatch, or an adjacent second monitor.</li>
  <li><strong>Surface Perturbation (Optional):</strong> The text may be processed through a paraphraser or AI &ldquo;humanizer&rdquo; to alter surface vocabulary and bypass static whole-document AI classifiers.</li>
  <li><strong>Manual Copy-Typing:</strong> The student places their hands on their primary laptop keyboard and manually copy-types the text into the LMS essay text area or Google Docs window, word-for-word, line-by-line.</li>
  <li><strong>Superficial Compliance:</strong> The submission logs 35 minutes of continuous typing activity, records zero clipboard paste actions, and appears cleanly formatted.</li>
</ol>

<p>
  To a teacher inspecting only the final static document or basic LMS metadata, the submission appears completely legitimate. There are no sudden 1,000-word paste spikes, the time-on-task metric looks reasonable, and standard plagiarism databases show no direct web matches.
</p>

<!-- Diagnostic Failure Table -->
<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-3.5">Diagnostic Tool</th>
          <th class="p-3.5">What the Tool Sees</th>
          <th class="p-3.5">Why It Fails on Optical Retyping</th>
        </tr>
      </thead>
      <tbody class="divide-y border-border text-muted-foreground">
        <tr>
          <td class="p-3.5 font-medium text-foreground">Basic Clipboard / DOM Paste Listeners</td>
          <td class="p-3.5">Logs zero <code>onPaste</code> events.</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">Characters were entered via discrete keypresses; no clipboard API was invoked.</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Document Session Timers</td>
          <td class="p-3.5">Records 30 to 60 minutes of active drafting.</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">Physical manual typing consumes real time, creating an illusion of authentic effort.</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Static AI Classifiers (Whole-Doc %)</td>
          <td class="p-3.5">Yields an ambiguous score (e.g., &ldquo;52% AI Probability&rdquo;).</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">Static scores evaluate text in isolation without context, leading to contentious disputes.</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Standard LMS Revision History</td>
          <td class="p-3.5">Displays periodic snapshot intervals every 5–10 minutes.</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400">Periodic snapshots aggregate changes, obscuring micro-cadence, pause dynamics, and keystroke friction.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p>
  However, the physical and cognitive acts of <strong>authoring original thought</strong> versus <strong>optically copying external symbols</strong> rely on fundamentally different neurological pathways. These neurological differences translate directly into distinct, measurable telemetric patterns in keystroke dynamics and pause topography.
</p>

<hr class="my-8 border-border" />

<h2>2. Psycholinguistic Foundations: Cognitive Drafting vs. Optical Transcription</h2>

<p>
  To understand how keystroke telemetry differentiates organic composition from manual retyping, we must examine the psycholinguistic architecture of human writing. 
</p>

<p>
  Writing is among the most cognitively demanding activities the human brain performs. In the classic cognitive writing models established by <strong>John R. Hayes and Linda S. Flower (1980)</strong> and expanded by <strong>Ronald T. Kellogg (1996, 2008)</strong>, authentic composition is modeled not as a linear text assembly line, but as a recursive, three-part cognitive cycle:
</p>

<!-- Hayes-Flower Architecture Diagram -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm font-sans">
  <div class="text-center font-bold text-foreground text-xs tracking-wider uppercase mb-6">The Hayes-Flower &amp; Kellogg Cognitive Writing Architecture</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 text-xs">1</span>
        <span>Planning Subprocess</span>
      </div>
      <ul class="space-y-1.5 text-muted-foreground list-disc pl-4">
        <li>Generating ideas &amp; retrieving schema</li>
        <li>Goal setting &amp; rhetorical structuring</li>
        <li>Assignment constraint evaluation</li>
        <li>Generates macro-formulation pauses (3–25s+)</li>
      </ul>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 text-xs">2</span>
        <span>Translating Subprocess</span>
      </div>
      <ul class="space-y-1.5 text-muted-foreground list-disc pl-4">
        <li>Propositional encoding &amp; lexical search</li>
        <li>Syntactic assembly &amp; motor execution</li>
        <li>Production bursts (P-bursts: 3–12 words)</li>
        <li>High Inter-Key Interval (IKI) variance</li>
      </ul>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 text-xs">3</span>
        <span>Reviewing Subprocess</span>
      </div>
      <ul class="space-y-1.5 text-muted-foreground list-disc pl-4">
        <li>Monitoring text against rhetorical goals</li>
        <li>Recursive diagnosing, editing &amp; rewriting</li>
        <li>Non-linear cursor navigation across clauses</li>
        <li>Keystroke Friction Ratio (KFR &equals; 15%–35%)</li>
      </ul>
    </div>
  </div>

  <div class="mt-4 p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-center text-xs text-teal-800 dark:text-teal-300 font-medium">
    &larr; Recursive Cognitive Loop: Writers continually cycle between Planning, Translating, and Reviewing &rarr;
  </div>
</div>

<p>
  These three subprocesses—<strong>Planning</strong>, <strong>Translating</strong>, and <strong>Reviewing</strong>—compete constantly for limited <strong>Working Memory (WM)</strong> capacity, governed by the central executive, the phonological loop, and the visuospatial sketchpad.
</p>

<h3>A. The Anatomy of Natural Human Brainstorming &amp; Composing</h3>

<p>
  When a student composes an authentic essay, their keystroke telemetry reflects the ongoing cognitive friction of planning, lexical selection, and self-monitoring.
</p>

<!-- Organic Stream Visual -->
<div class="my-6 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-100">
  <div class="text-teal-400 font-bold mb-3 uppercase tracking-wider text-[11px]">Organic Writing Stream: High Variance, Clause Pauses &amp; Recursive Churn</div>
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-[11px]">
    <div class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
      <div class="text-amber-400 font-bold mb-1">Deep Formulation Pause</div>
      <div class="text-white font-mono">[ 8.4 seconds ]</div>
      <div class="text-slate-400 text-[10px] mt-1">Working memory plans next syntactic clause</div>
    </div>
    <div class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
      <div class="text-emerald-400 font-bold mb-1">Rapid Production Burst</div>
      <div class="text-white font-mono">[ 110ms – 140ms ]</div>
      <div class="text-slate-400 text-[10px] mt-1">Motor execution of familiar lemma</div>
    </div>
    <div class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
      <div class="text-teal-400 font-bold mb-1">Lexical Hesitation</div>
      <div class="text-white font-mono">[ 680ms ]</div>
      <div class="text-slate-400 text-[10px] mt-1">Lexical scan for precise synonym</div>
    </div>
    <div class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
      <div class="text-rose-400 font-bold mb-1">Revision Churn</div>
      <div class="text-white font-mono">[ Del 4 words ]</div>
      <div class="text-slate-400 text-[10px] mt-1">Reviewing process repairs syntax</div>
    </div>
  </div>
</div>

<h4>1. Clause-Boundary Formulation Pauses (<em>P<sub>form</sub></em>)</h4>
<p>In authentic writing, long pauses do not occur at random intervals. Instead, they cluster systematically at <strong>major syntactic frontiers</strong>:</p>
<ul>
  <li><strong>Paragraph Transitions:</strong> Extended cognitive pauses (8–25+ seconds) where the writer plans thematic goals, narrative direction, and macro-arguments.</li>
  <li><strong>Sentence Boundaries:</strong> Intermediate pauses (3–12 seconds) dedicated to propositional encoding and syntactic structuring.</li>
  <li><strong>Complex Clause Junctions:</strong> Focused hesitations (2–6 seconds) occurring before subordinating conjunctions (<em>although</em>, <em>whereas</em>, <em>because</em>), coordinate conjunctions with independent clauses, or semicolons.</li>
</ul>

<p>
  During these formulation pauses, the writer&apos;s working memory is actively constructing the next proposition, retrieving domain knowledge from long-term memory, and organizing rhetorical structure. Once the proposition is planned, the motor cortex releases a burst of keystrokes (known as a <strong>P-burst</strong> or <em>Production Burst</em>) to commit the formulated thought to the screen.
</p>

<h4>2. Variable Inter-Key Intervals (IKI)</h4>
<p>The time elapsed between consecutive keystrokes—the <strong>Inter-Key Interval (<em>IKI</em>)</strong>—is naturally irregular in human composition:</p>
<ul>
  <li><strong>Intra-Word Transitions:</strong> Highly practiced letter pairs (digrams like <em>th</em>, <em>er</em>, <em>in</em>) execute rapidly and fluently (80–140 ms).</li>
  <li><strong>Inter-Word Boundaries:</strong> Navigating from the end of one word across the spacebar to the beginning of the next requires micro-retrieval (250–550 ms).</li>
  <li><strong>Lexical Choice Points:</strong> Selecting a precise adjective, verifying spelling, or deciding between synonyms introduces intermediate hesitations (600–1,800 ms).</li>
</ul>

<p>This produces a wide, right-skewed IKI probability distribution with high standard deviation (&sigma;<sub>IKI</sub> &gt; 120 ms) and a high Coefficient of Variation:</p>

<!-- Math Card: CV_IKI -->
<div class="my-4 p-4 rounded-xl bg-card border border-border shadow-sm text-center">
  <div class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Coefficient of Variation for Keystroke Intervals</div>
  <div class="font-mono text-base font-bold text-teal-600 dark:text-teal-400">
    CV<sub>IKI</sub> &equals; &sigma;<sub>IKI</sub> / &mu;<sub>IKI</sub> &ge; 0.45
  </div>
  <div class="text-xs text-muted-foreground mt-1">Authentic human composition exhibits high timing variance across lexical transitions.</div>
</div>

<h4>3. Recursive Revision Churn &amp; Keystroke Friction Ratio (KFR)</h4>
<p>
  Human thinking is imperfect and developmental. As writers generate text, the <strong>Reviewing</strong> subprocess constantly inspects the output on the screen against the mental goal. Writers frequently backspace, strike out awkward phrases, restructure dependent clauses, insert parenthetical qualifiers, and move punctuation.
</p>

<p>Checkmark Plagiarism quantifies this natural friction through the <strong>Keystroke Friction Ratio (<em>KFR</em>)</strong>:</p>

<!-- Math Card: KFR -->
<div class="my-4 p-4 rounded-xl bg-card border border-border shadow-sm text-center">
  <div class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Keystroke Friction Ratio Formula</div>
  <div class="font-mono text-sm font-bold text-teal-600 dark:text-teal-400">
    KFR &equals; [ (Backspace &plus; Delete &plus; Cursor Relocations &plus; Syntactic Overwrites) / Total Session Keystrokes ] &times; 100%
  </div>
  <div class="text-xs text-muted-foreground mt-1">Authentic student writing typically exhibits a KFR between <strong>15% and 35%</strong>.</div>
</div>

<p>
  A student who writes a 1,000-word paper (approx. 5,500 characters) typically generates 6,500 to 8,500 total keystrokes as they refine their prose in real time.
</p>

<hr class="my-6 border-border" />

<h3>B. The Telemetric Signature of External Device Transcription</h3>

<p>
  When a student transcribes text from a secondary device, the cognitive architecture changes completely. The student is no longer engaging the <strong>Planning</strong> or <strong>Reviewing</strong> cognitive sub-systems. Instead, their brain operates strictly as an <strong>optical-motor relay</strong>: reading a string of 4–8 words from the phone screen, holding that string temporarily in the phonological loop, and typing it out mechanically until the buffer is exhausted.
</p>

<!-- Transcription Stream Visual -->
<div class="my-6 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-100">
  <div class="text-rose-400 font-bold mb-3 uppercase tracking-wider text-[11px]">Optical Transcription Stream: Metronomic Cadence, Zero Friction, Gaze Shifts</div>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[11px]">
    <div class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
      <div class="text-rose-400 font-bold mb-1">Gaze-Shift Pause</div>
      <div class="text-white font-mono">[ 1.4 seconds ]</div>
      <div class="text-slate-400 text-[10px] mt-1">Eye glances down at smartphone display</div>
    </div>
    <div class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
      <div class="text-rose-400 font-bold mb-1">Isochronous Typing Stream</div>
      <div class="text-white font-mono">[ 175ms &plusmn; 15ms ]</div>
      <div class="text-slate-400 text-[10px] mt-1">Mechanical entry of 5-word phonological chunk</div>
    </div>
    <div class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
      <div class="text-rose-400 font-bold mb-1">Gaze-Shift Pause</div>
      <div class="text-white font-mono">[ 1.2 seconds ]</div>
      <div class="text-slate-400 text-[10px] mt-1">Eye glances back down for next chunk</div>
    </div>
  </div>
</div>

<h4>1. Collapsed IKI Variance &amp; Cadence Isochronicity</h4>
<p>Because the student is not inventing ideas or searching for words, cognitive friction disappears. Keystrokes flow with mechanical, metronomic regularity:</p>
<ul>
  <li>The micro-variance between intra-word and inter-word keystrokes collapses.</li>
  <li>The standard deviation of keystroke intervals drops sharply (&sigma;<sub>IKI</sub> &lt; 55 ms).</li>
  <li>The Coefficient of Variation plummets into the abnormal isochronous zone:
    <div class="my-2 font-mono text-rose-600 dark:text-rose-400 font-semibold">CV<sub>IKI</sub> &lt; 0.20</div>
  </li>
</ul>
<p>The student&apos;s typing profile resembles an automated data-entry clerk or an optical transcription typist rather than a student formulating an argumentative thesis.</p>

<h4>2. Syntactic Disconnect in Pause Topography</h4>
<p>In optical transcription, pauses still occur—but their <strong>topographical placement</strong> is disconnected from linguistic syntax:</p>
<ul>
  <li><strong>Gaze-Shift Intervals:</strong> Pauses last between <strong>0.8 and 2.2 seconds</strong>, representing the physical time required for the human eye to saccade from the laptop screen down to the mobile phone, visually locate the next line of text, and return to the keyboard.</li>
  <li><strong>Non-Syntactic Placement:</strong> These gaze shifts occur in the middle of prepositional phrases (<em>&ldquo;...in the [1.6s pause] middle of the battle...&rdquo;</em>), between articles and nouns (<em>&ldquo;...an [1.4s pause] unprecedented economic...&rdquo;</em>), or across syllables, rather than at paragraph or sentence boundaries.</li>
  <li><strong>Absence of Deep Ideation Pauses:</strong> Pauses exceeding 5 seconds at major thematic transitions or introductory topic sentences are completely absent.</li>
</ul>

<h4>3. Near-Zero Keystroke Friction (<em>KFR &lt; 3%</em>)</h4>
<p>Because the transcribed text was pre-generated by an AI model or external source, it already possesses polished grammar, sophisticated sentence structures, and seamless transitions:</p>
<ul>
  <li>The student does not need to fix awkward phrasing or test different vocabulary words.</li>
  <li>Characters are entered in a strictly monotonic, linear progression (0 &rarr; N).</li>
  <li>Total session keystrokes equal the final character count within a 1–2% margin.</li>
  <li>Backspacing is limited to occasional minor motor slips (e.g., typing <em>teh</em> instead of <em>the</em> and immediately correcting it).</li>
</ul>

<hr class="my-8 border-border" />

<h2>3. Comparative Telemetry Matrix: Authentic Ideation vs. Optical Transcription</h2>

<p>The following matrix contrasts the telemetric dimensions of authentic human drafting, optical transcription from a secondary device, and traditional clipboard pasting:</p>

<!-- Full Comparative Matrix Table -->
<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-3.5">Telemetric Dimension</th>
          <th class="p-3.5">Authentic Brainstorming &amp; Drafting</th>
          <th class="p-3.5">External Device Optical Transcription</th>
          <th class="p-3.5">Standard Clipboard Copy-Paste</th>
          <th class="p-3.5">Pedagogical &amp; Forensic Significance</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-muted-foreground">
        <tr>
          <td class="p-3.5 font-medium text-foreground">Keystroke Friction Ratio (<em>KFR</em>)</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>15% – 35%</strong> (High backspace, word substitution, restructuring)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold"><strong>&lt; 3%</strong> (Near-zero deletion; strictly linear character entry)</td>
          <td class="p-3.5"><strong>0%</strong> (Block text insertion)</td>
          <td class="p-3.5">Demonstrates whether text underwent developmental formulation or was pre-composed.</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Inter-Key Interval Variance (<em>CV<sub>IKI</sub></em>)</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>High (<em>CV &ge; 0.45</em>, &sigma; &gt; 120ms)</strong> (Fluctuates by cognitive difficulty)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold"><strong>Collapsed (<em>CV &lt; 0.20</em>, &sigma; &lt; 55ms)</strong> (Metronomic, rhythmic data entry)</td>
          <td class="p-3.5"><strong>N/A</strong> (No discrete typing events)</td>
          <td class="p-3.5">Reflects presence of active lexical retrieval and syntactic planning friction.</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Pause Placement Topography</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>Syntax-Anchored</strong> (Clusters at clause, sentence, &amp; paragraph borders)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold"><strong>Gaze-Shift Arbitrary</strong> (Mid-phrase, intra-clause, uncorrelated with syntax)</td>
          <td class="p-3.5"><strong>Boundary-Only</strong> (Single pause before massive block insertion)</td>
          <td class="p-3.5">Reveals whether pauses represent cognitive ideation (<em>P<sub>form</sub></em>) vs physical eye movements (<em>T<sub>gaze</sub></em>).</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Pause Duration Distribution</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>Bimodal / Multimodal</strong> (200ms motor pauses up to 30s deep planning breaks)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold"><strong>Unimodal / Clustered</strong> (Tight cluster at 0.8s – 2.2s gaze-shift intervals)</td>
          <td class="p-3.5"><strong>N/A</strong> (Instantaneous insertion)</td>
          <td class="p-3.5">Differentiates deep reflective thinking from periodic reading of a secondary display.</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Linear Progression (0 &rarr; N)</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>Non-Linear</strong> (Frequent cursor jumps, insertions, reorganizations)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold"><strong>Monotonic Linear</strong> (Characters entered continuously start to finish)</td>
          <td class="p-3.5"><strong>Step Function</strong> (0 to 1,000 words in 10ms)</td>
          <td class="p-3.5">Confirms whether document grew organically or was fed sequentially from an external script.</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">P-Burst Length (Words/Burst)</td>
          <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>Variable (3–12 words)</strong> (Bound by working memory proposition chunks)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold"><strong>Uniform (5–8 words)</strong> (Bound by visual span and phonological loop buffer)</td>
          <td class="p-3.5"><strong>Infinite</strong> (Entire document in single event)</td>
          <td class="p-3.5">Indicates whether text chunks match cognitive proposition formulation or visual reading span.</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Clipboard Event Log</td>
          <td class="p-3.5"><strong>Normal</strong> (Occasional quote pastes with subsequent editing)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold"><strong>Clean (0 Pastes)</strong> (Deliberate evasion of clipboard listeners)</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-semibold"><strong>Flagged</strong> (Single large external paste payload)</td>
          <td class="p-3.5">Exposes deliberate evasion when zero pastes accompany impossible linear perfection.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>4. Checkmark Plagiarism’s Cadence &amp; Essay Playback™ Architecture</h2>

<p>
  To equip educators, writing program directors, and academic integrity boards with transparent, verifiable evidence, Checkmark Plagiarism provides a multi-layered writing process analytics suite centered on <strong>patent-pending Essay Playback™</strong>.
</p>

<!-- Telemetry Pipeline Diagram -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm font-sans">
  <div class="text-center font-bold text-foreground text-xs tracking-wider uppercase mb-6">Checkmark Plagiarism Integrated Telemetry Pipeline</div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
    <div class="rounded-xl bg-muted/40 p-4 border border-border flex flex-col justify-between">
      <div>
        <div class="font-bold text-foreground text-sm mb-1 text-teal-600 dark:text-teal-400">1. Native Ecosystem Capture</div>
        <ul class="space-y-1.5 text-muted-foreground list-disc pl-4 mt-2">
          <li>Canvas LMS SpeedGrader</li>
          <li>Google Docs Extension</li>
          <li>Buzz LMS &amp; Moodle LTI 1.3</li>
          <li>Standalone Web Ingestion</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-border text-[11px] text-teal-600 dark:text-teal-400 font-medium">
        Zero plugin friction for students
      </div>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border flex flex-col justify-between">
      <div>
        <div class="font-bold text-foreground text-sm mb-1 text-teal-600 dark:text-teal-400">2. Telemetric Ingestion Engine</div>
        <ul class="space-y-1.5 text-muted-foreground list-disc pl-4 mt-2">
          <li>Millisecond KeyDown &amp; KeyUp</li>
          <li>Cursor Navigation Tracking</li>
          <li>100% Paste Buffer Storage</li>
          <li>Session Durations &amp; Focus Gaps</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-border text-[11px] text-teal-600 dark:text-teal-400 font-medium">
        Immutable cryptographic log
      </div>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border flex flex-col justify-between">
      <div>
        <div class="font-bold text-foreground text-sm mb-1 text-teal-600 dark:text-teal-400">3. Cadence Analytics Engine</div>
        <ul class="space-y-1.5 text-muted-foreground list-disc pl-4 mt-2">
          <li>Calculates CV<sub>IKI</sub>, &sigma;<sub>IKI</sub>, &amp; KFR</li>
          <li>Pause-Syntax Correlation (PSCI)</li>
          <li>Isochronous stream detection</li>
          <li>Gaze-shift cluster identification</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-border text-[11px] text-teal-600 dark:text-teal-400 font-medium">
        Automated anomaly heuristics
      </div>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border flex flex-col justify-between">
      <div>
        <div class="font-bold text-foreground text-sm mb-1 text-teal-600 dark:text-teal-400">4. Educator Evidence Interface</div>
        <ul class="space-y-1.5 text-muted-foreground list-disc pl-4 mt-2">
          <li>1x–8x scrubbable video replay</li>
          <li>Typing velocity curves</li>
          <li>Passage-level AI confidence cards</li>
          <li>Direct LMS grade passback</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-border text-[11px] text-teal-600 dark:text-teal-400 font-medium">
        <a href="/services/writing-playback">Explore Essay Playback &rarr;</a>
      </div>
    </div>
  </div>
</div>

<h3>1. 1x to 8x Scrubbable Essay Playback™ Timeline</h3>
<p>Rather than relying on opaque statistical probability scores, educators can watch the student’s complete writing session unfold like a video recording:</p>
<ul>
  <li><strong>Variable Speed Scrubbing:</strong> Play back the entire 45-minute writing session in 3 minutes at 8x speed, or slow down to 1x speed to inspect critical transition points.</li>
  <li><strong>Typing Velocity Curves:</strong> Visual graph overlaying words-per-minute (WPM) across time, highlighting unnatural bursts or flatline mechanical cadences.</li>
  <li><strong>Pause Topography Heatmap:</strong> Interactive timeline markers displaying exact pause durations and their precise textual locations.</li>
  <li><strong>Visual Keystroke Color-Coding:</strong> Green characters indicate newly drafted text, red highlights represent backspaced/deleted passages, and orange blocks flag external paste events.</li>
</ul>

<h3>2. Cadence &amp; Transcription Detection Engine</h3>
<p>Behind the visual playback, Checkmark’s statistical engine continuously audits keystroke rhythm:</p>
<ul>
  <li><strong>Isochronous Stream Flagging:</strong> Automatically flags sustained typing sequences (&gt;100 words) where the Coefficient of Variation (<em>CV<sub>IKI</sub></em>) drops below 0.20 with zero backspacing.</li>
  <li><strong>Gaze-Shift Rhythm Recognition:</strong> Identifies the distinctive &ldquo;read-type-read-type&rdquo; periodicity characteristic of secondary screen transcription.</li>
  <li><strong>Pause-Syntax Correlation Index (<em>PSCI</em>):</strong> Evaluates whether pauses align with syntactic boundaries (clauses, sentences) or occur at random lexical intervals.</li>
</ul>

<h3>3. External Paste Buffer Inspector</h3>
<p>When students <em>do</em> use the clipboard—or when they paste an initial prompt before retyping—Checkmark preserves <strong>100% of the original clipboard text payload</strong>. Even if the student subsequently deletes, overwrites, or rewrites every word in the document, the teacher can click the <em>&ldquo;View Original Paste Payload&rdquo;</em> button to view the exact text that entered the clipboard, timestamped to the millisecond, with a direct jump link to that moment in the playback timeline.</p>

<h3>4. Teacher-in-the-Loop AI Rubric Autograding &amp; LMS Sync</h3>
<p>Checkmark pairs process integrity with pedagogical utility. Once writing authenticity is verified:</p>
<ul>
  <li><strong>Custom Rubric Evaluation:</strong> The <a href="/services/autograder" class="text-teal-600 dark:text-teal-400 font-semibold underline">AI Autograder</a> generates formative, sentence-level feedback justifications anchored directly to student quotes.</li>
  <li><strong>Teacher Final Authority:</strong> Grades and feedback remain fully editable drafts until approved by the teacher.</li>
  <li><strong>Direct Gradebook Sync:</strong> Push finalized scores and rubric breakdowns straight into <a href="/services/integrations/canvas-lms" class="text-teal-600 dark:text-teal-400 font-semibold underline">Canvas SpeedGrader</a>, Buzz LMS, or Google Classroom with one click.</li>
</ul>

<!-- Interactive Playback Mockup Card -->
<div class="my-8 rounded-2xl bg-slate-950 text-slate-100 p-6 border border-slate-800 shadow-xl font-mono text-xs">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
    <div class="flex items-center gap-2.5">
      <span class="h-3 w-3 rounded-full bg-rose-500 animate-pulse"></span>
      <span class="font-bold text-sm text-white tracking-tight">Checkmark Essay Playback™ Investigation Suite</span>
    </div>
    <div class="flex items-center gap-2 text-[11px] text-slate-400">
      <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-teal-400 font-semibold">Speed: 4x &blacktriangledown;</span>
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
      <span>06:00 [54 WPM Cadence]</span>
      <span>12:00 [Zero Formulation Pauses]</span>
      <span>18:00 [Monotonic Linear]</span>
      <span>28:30 [Submit]</span>
    </div>
  </div>

  <!-- Anomaly Alert Banner -->
  <div class="mb-5 p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 flex items-center justify-between gap-2">
    <div class="flex items-center gap-2">
      <span class="text-rose-400 text-sm">&warning;</span>
      <span class="font-semibold text-xs">CADENCE ANOMALY DETECTED: Secondary Device Optical Transcription (98.4% Confidence)</span>
    </div>
    <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">Educator View</span>
  </div>

  <!-- Telemetry Metrics Breakdown Bar -->
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 text-[11px]">
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
      <span class="text-slate-400 block text-[10px]">Net Velocity</span>
      <span class="text-rose-400 font-bold text-sm">54.2 WPM</span>
      <span class="text-[9px] text-slate-500 block">(Flat Metronome)</span>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
      <span class="text-slate-400 block text-[10px]">IKI Variance (&sigma;)</span>
      <span class="text-rose-400 font-bold text-sm">48 ms</span>
      <span class="text-[9px] text-slate-500 block">(CV &equals; 0.16)</span>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
      <span class="text-slate-400 block text-[10px]">Keystroke Friction (KFR)</span>
      <span class="text-rose-400 font-bold text-sm">1.4%</span>
      <span class="text-[9px] text-slate-500 block">(6 Backspaces / 4.2k Chars)</span>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
      <span class="text-slate-400 block text-[10px]">External Pastes</span>
      <span class="text-emerald-400 font-bold text-sm">0 Logged</span>
      <span class="text-[9px] text-slate-500 block">(Retype Bypass)</span>
    </div>
  </div>

  <!-- Triangulated Evidence Panels -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
    <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
      <div class="text-teal-400 font-semibold mb-1">1. Passage-Level AI Card</div>
      <p class="text-slate-300 text-[10px] leading-relaxed mb-2">&ldquo;Roosevelt&apos;s administration enacted the National Industrial Recovery Act...&rdquo;</p>
      <div class="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
        <span>Predictability</span>
        <span class="text-amber-300 font-bold">94% Conf</span>
      </div>
    </div>

    <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
      <div class="text-teal-400 font-semibold mb-1">2. Pause Topography Map</div>
      <p class="text-slate-300 text-[10px] leading-relaxed mb-2">28 gaze-shift pauses (1.1s–1.8s) scattered mid-clause; 0 formulation pauses.</p>
      <div class="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
        <span>Topography</span>
        <span class="text-rose-300 font-bold">Gaze Saccade</span>
      </div>
    </div>

    <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
      <div class="text-teal-400 font-semibold mb-1">3. Rubric Autograder</div>
      <p class="text-slate-300 text-[10px] leading-relaxed mb-2">Sophisticated historical synthesis entered without drafting hesitation.</p>
      <div class="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
        <span>Flag Status</span>
        <span class="text-rose-400 font-bold">Review Needed</span>
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>5. Real-World Case Studies: Telemetry in the Classroom</h2>

<p>To illustrate how Essay Playback and cadence telemetry operate in real educational contexts, consider the following three documented classroom scenarios:</p>

<!-- Case Studies Grid -->
<div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
  <!-- Case 1 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-2">
        <span class="px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-[10px]">Case 1 &bull; AP U.S. History</span>
        <span class="text-rose-600 dark:text-rose-400 font-bold">Phone Retype</span>
      </div>
      <h3 class="text-sm font-bold text-foreground mb-2 pt-0">The Phone Transcriber</h3>
      <ul class="space-y-2 text-muted-foreground list-disc pl-4">
        <li><strong>Assignment:</strong> 750-word DBQ essay on New Deal economic reforms.</li>
        <li><strong>Static Flag:</strong> 0% Plagiarism Match; Legacy AI Detector flagged 52% (inconclusive).</li>
        <li><strong>Checkmark Telemetry:</strong> 24m 12s duration, 0 pastes, KFR &equals; 1.4%, CV<sub>IKI</sub> &equals; 0.16 (52 WPM flat).</li>
        <li><strong>Pause Topography:</strong> 0 paragraph formulation pauses; 28 mid-clause 1.1s–1.8s gaze shifts.</li>
      </ul>
    </div>
    <div class="mt-4 pt-3 border-t border-border text-[11px] text-rose-600 dark:text-rose-400 font-semibold">
      Outcome: Student co-viewed Playback at 4x speed, acknowledged Claude phone transcript, completed supervised rewrite.
    </div>
  </div>

  <!-- Case 2 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-2">
        <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">Case 2 &bull; College Comp I</span>
        <span class="text-emerald-600 dark:text-emerald-400 font-bold">Exonerated</span>
      </div>
      <h3 class="text-sm font-bold text-foreground mb-2 pt-0">Exonerating an Accused ESL Writer</h3>
      <ul class="space-y-2 text-muted-foreground list-disc pl-4">
        <li><strong>Student:</strong> First-Year Multilingual (ESL) Undergraduate.</li>
        <li><strong>Static Flag:</strong> Legacy whole-paper detector scored 88% AI due to formal syntax.</li>
        <li><strong>Checkmark Telemetry:</strong> 3h 42m duration across 4 sessions, KFR &equals; 31.8% (1,840 revisions), CV<sub>IKI</sub> &equals; 0.62.</li>
        <li><strong>Pause Topography:</strong> Authentic 12–45s pauses at thesis, paragraph, and comparative transitions.</li>
      </ul>
    </div>
    <div class="mt-4 pt-3 border-t border-border text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
      Outcome: Misconduct charge dismissed immediately; Playback proved authentic cognitive struggle and earned full credit.
    </div>
  </div>

  <!-- Case 3 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-2">
        <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-400 font-bold text-[10px]">Case 3 &bull; Senior English</span>
        <span class="text-teal-600 dark:text-teal-400 font-bold">Targeted Coaching</span>
      </div>
      <h3 class="text-sm font-bold text-foreground mb-2 pt-0">Hybrid Research Synthesis</h3>
      <ul class="space-y-2 text-muted-foreground list-disc pl-4">
        <li><strong>Assignment:</strong> 2,000-word Senior Capstone on <em>Frankenstein</em> &amp; bioethics.</li>
        <li><strong>Telemetry Profile:</strong> Section A (CV &equals; 0.51, KFR &equals; 24.2%, authentic), Section B (CV &equals; 0.18, KFR &equals; 2.1%, 58 WPM flat), Section C (CV &equals; 0.49, authentic).</li>
        <li><strong>Playback Finding:</strong> Abrupt transition to metronomic cadence in Section B secondary source analysis.</li>
      </ul>
    </div>
    <div class="mt-4 pt-3 border-t border-border text-[11px] text-teal-600 dark:text-teal-400 font-semibold">
      Outcome: Student admitted iPad ChatGPT help on Section B due to deadline crunch; received coaching on citation and time management.
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. The 4-Phase Telemetry Investigation Protocol</h2>

<p>
  To ensure consistency, fairness, and defensibility across departments, academic integrity officers and teachers should follow Checkmark’s structured <strong>4-Phase Telemetry Investigation Protocol</strong>:
</p>

<!-- 4-Phase Protocol Visual Banner -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md font-sans">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">The 4-Phase Telemetry Investigation Protocol</div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700">
      <div class="text-teal-300 font-bold mb-2">Phase 1: Multi-Report Triage</div>
      <ul class="space-y-1.5 text-slate-300 text-[11px] list-disc pl-4">
        <li>Passage AI confidence sliders</li>
        <li>Side-by-side plagiarism matches</li>
        <li>Check 150-word short-text guardrail</li>
        <li>Set private status to <code>Flagged</code></li>
      </ul>
    </div>

    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700">
      <div class="text-teal-300 font-bold mb-2">Phase 2: Playback Audit</div>
      <ul class="space-y-1.5 text-slate-300 text-[11px] list-disc pl-4">
        <li>1x–8x scrubbable video replay</li>
        <li>Check non-linear vs linear (0 &rarr; N)</li>
        <li>Audit major structural transitions</li>
        <li>Inspect 100% paste buffer payload</li>
      </ul>
    </div>

    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700">
      <div class="text-teal-300 font-bold mb-2">Phase 3: Biometric Cadence</div>
      <ul class="space-y-1.5 text-slate-300 text-[11px] list-disc pl-4">
        <li>Evaluate KFR (&lt;3% severe indicator)</li>
        <li>Verify CV<sub>IKI</sub> (&lt;0.20 isochronous)</li>
        <li>Check pause-syntax alignment</li>
        <li>Differentiate gaze shifts (1–2s)</li>
      </ul>
    </div>

    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700">
      <div class="text-teal-300 font-bold mb-2">Phase 4: Restorative Dossier</div>
      <ul class="space-y-1.5 text-slate-300 text-[11px] list-disc pl-4">
        <li>Export timestamped telemetry dossier</li>
        <li>Formulate growth-oriented questions</li>
        <li>Schedule co-viewing conversation</li>
        <li>Establish restorative learning path</li>
      </ul>
    </div>
  </div>
</div>

<h3>Phase 1: Multi-Report Triage</h3>
<ol>
  <li><strong>Inspect Passage-Level Granularity:</strong> Examine the essay in Checkmark Plagiarism. Look at specific highlighted passages rather than relying on a whole-paper score.</li>
  <li><strong>Review Side-by-Side Plagiarism Sources:</strong> Verify whether matches represent uncited direct quotations, patchwriting, or peer copying.</li>
  <li><strong>Check Short-Text Guardrails:</strong> Ensure the text sample exceeds 150 words (under 150 words displays <code>N/A</code> to prevent false positives).</li>
  <li><strong>Set Private Flag:</strong> Mark the submission status as <code>Flagged</code> (private to educator view only) to avoid prejudicing the student prior to verification.</li>
</ol>

<h3>Phase 2: Playback Timeline &amp; Pause Topography Audit</h3>
<ol>
  <li><strong>Open Essay Playback™:</strong> Launch the session replay and set playback velocity to 4x or 8x speed.</li>
  <li><strong>Scan the Macro-Timeline:</strong> Observe whether the document grew in non-linear bursts (typing, pausing, moving, revising) or through a monotonic linear progression (0 &rarr; N).</li>
  <li><strong>Inspect Major Structural Transitions:</strong> Jump to the beginning of paragraphs and thesis statements. Check if the student paused for 5–20 seconds to plan the transition.</li>
  <li><strong>Audit External Pastes:</strong> Check the External Paste Buffer tab. If paste events exist, inspect the full original pasted text payload.</li>
</ol>

<h3>Phase 3: Biometric Cadence &amp; Statistical Metric Evaluation</h3>
<ol>
  <li><strong>Evaluate Keystroke Friction Ratio (<em>KFR</em>):</strong>
    <ul>
      <li><strong><em>KFR &ge; 15%</em>:</strong> Typical human cognitive drafting with active self-monitoring.</li>
      <li><strong><em>KFR &lt; 5%</em>:</strong> Severe indicator of pre-composed transcription or memorized script entry.</li>
    </ul>
  </li>
  <li><strong>Evaluate Inter-Key Interval Variance (<em>CV<sub>IKI</sub></em>):</strong>
    <ul>
      <li><strong><em>CV<sub>IKI</sub> &ge; 0.40</em>:</strong> Normal cognitive-motor friction.</li>
      <li><strong><em>CV<sub>IKI</sub> &lt; 0.20</em>:</strong> Isochronous optical transcription cadence.</li>
    </ul>
  </li>
  <li><strong>Examine Pause-Syntax Alignment:</strong>
    <ul>
      <li>Do pauses occur before conjunctions and full stops, or do they occur mid-phrase at 1.0–1.8 second intervals (gaze shifts)?</li>
    </ul>
  </li>
</ol>

<h3>Phase 4: Restorative Dossier Preparation</h3>
<ol>
  <li><strong>Export Telemetry Evidence:</strong> Generate a timestamped Checkmark Integrity Dossier containing the velocity graph, pause topography map, and passage evidence cards.</li>
  <li><strong>Formulate Supportive Questions:</strong> Frame conference inquiries around writing habits and process rather than punitive accusations.</li>
</ol>

<hr class="my-8 border-border" />

<h2>7. Step-by-Step Teacher Co-Viewing &amp; Restorative Conferencing Guide</h2>

<p>
  The core philosophy of Checkmark Plagiarism is <strong>&ldquo;Stop guessing, start trusting.&rdquo;</strong> When telemetric anomalies arise, the goal of an integrity conference is not to extract a confession through confrontation, but to co-view objective process evidence together with the student, demystify the writing process, and restore academic trust.
</p>

<!-- Restorative Conferencing Workflow -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm font-sans">
  <div class="text-center font-bold text-foreground text-xs tracking-wider uppercase mb-6">Restorative Integrity Conferencing Workflow</div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="font-bold text-teal-600 dark:text-teal-400 mb-1">1. Supportive Framing</div>
      <p class="text-muted-foreground text-[11px]">&ldquo;I want to understand your drafting journey and talk through your ideas.&rdquo;</p>
    </div>
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="font-bold text-teal-600 dark:text-teal-400 mb-1">2. Collaborative Co-Viewing</div>
      <p class="text-muted-foreground text-[11px]">&ldquo;Let&apos;s watch your essay unfold together on the Playback timeline.&rdquo;</p>
    </div>
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="font-bold text-teal-600 dark:text-teal-400 mb-1">3. Evidence Inquiries</div>
      <p class="text-muted-foreground text-[11px]">&ldquo;I notice you typed this paragraph steadily without a pause. Walk me through composing it.&rdquo;</p>
    </div>
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="font-bold text-teal-600 dark:text-teal-400 mb-1">4. Restorative Resolution</div>
      <p class="text-muted-foreground text-[11px]">Supervised rewrite, Writing Center referral, and restored grade pathway.</p>
    </div>
  </div>
</div>

<h3>Word-for-Word Teacher Dialogue Scripts</h3>

<!-- Dialogue Script A -->
<div class="my-4 p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
  <div class="flex items-center gap-2">
    <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-400 font-bold text-[10px]">Scenario A</span>
    <h4 class="text-sm font-bold text-foreground pt-0">Opening the Conference in a Supportive, Non-Accusatory Manner</h4>
  </div>
  <blockquote class="border-l-4 border-teal-500 pl-4 italic text-muted-foreground text-xs leading-relaxed">
    <strong>Teacher:</strong> &ldquo;Hi Alex, thanks for meeting with me today. I really enjoyed the central thesis of your paper on the New Deal. As part of our writing program, I regularly review our students&apos; writing process replays so we can talk about drafting strategies, pacing, and revision habits. I&apos;d love to pull up your Essay Playback timeline and have you walk me through how you put this piece together.&rdquo;
  </blockquote>
</div>

<!-- Dialogue Script B -->
<div class="my-4 p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
  <div class="flex items-center gap-2">
    <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-400 font-bold text-[10px]">Scenario B</span>
    <h4 class="text-sm font-bold text-foreground pt-0">Co-Viewing the Playback Timeline and Guiding Reflection</h4>
  </div>
  <blockquote class="border-l-4 border-teal-500 pl-4 italic text-muted-foreground text-xs leading-relaxed">
    <strong>Teacher:</strong> <em>(Plays session replay at 4x speed on screen)</em> &ldquo;Let&apos;s watch the drafting of your third body paragraph here. When we look at how writers work, we usually see people write a sentence, pause to think, delete an awkward phrase, or look back at their notes. In this section, the text appears in a steady, continuous stream at 54 words per minute with almost zero backspaces, and the only pauses are brief one-second breaks in the middle of sentences. Can you tell me what your setup was like when you were typing this part?&rdquo;
  </blockquote>
</div>

<!-- Dialogue Script C -->
<div class="my-4 p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
  <div class="flex items-center gap-2">
    <span class="px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-[10px]">Scenario C</span>
    <h4 class="text-sm font-bold text-foreground pt-0">When the Student Acknowledges External Device Transcription</h4>
  </div>
  <blockquote class="border-l-4 border-rose-500 pl-4 italic text-muted-foreground text-xs leading-relaxed space-y-2">
    <p><strong>Student:</strong> &ldquo;I was running out of time before midnight, so I had Claude write an outline on my phone and I typed it into the doc so it wouldn&apos;t count as a copy-paste.&rdquo;</p>
    <p><strong>Teacher:</strong> &ldquo;I appreciate your honesty in telling me that, Alex. Managing deadlines when you&apos;re overwhelmed is tough, and it&apos;s easy to see why typing from a phone might seem like a shortcut. But what we&apos;re assessing in this class is your ability to analyze evidence and form your own arguments, not your ability to transcribe text. Let&apos;s look at our department&apos;s restorative revision policy. We&apos;ll schedule a time for you to draft a revised argument during office hours, and we&apos;ll review the research notes together first.&rdquo;</p>
  </blockquote>
</div>

<!-- Dialogue Script D -->
<div class="my-4 p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
  <div class="flex items-center gap-2">
    <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">Scenario D</span>
    <h4 class="text-sm font-bold text-foreground pt-0">Exonerating and Validating an Accused Student</h4>
  </div>
  <blockquote class="border-l-4 border-emerald-500 pl-4 italic text-muted-foreground text-xs leading-relaxed">
    <strong>Teacher:</strong> &ldquo;Jordan, I noticed that an automated detector flagged your essay because of your advanced vocabulary. But when I looked at your Checkmark Essay Playback, I saw the complete opposite of an AI text: you spent over three hours working on this, you rewrote your introduction four times, and you took long, thoughtful pauses at every paragraph break. Your keystroke telemetry proves this is 100% your authentic work. I wanted to tell you personally that your effort and dedication are clear, and you earned full credit.&rdquo;
  </blockquote>
</div>

<hr class="my-8 border-border" />

<h2>8. Institutional Governance, FERPA Compliance &amp; Enterprise Security</h2>

<p>
  Deploying keystroke telemetry and AI integrity analytics across a school district or university requires stringent adherence to student privacy, ethical data governance, and regulatory compliance.
</p>

<!-- Privacy Architecture Diagram -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm font-sans">
  <div class="text-center font-bold text-foreground text-xs tracking-wider uppercase mb-6">Checkmark Privacy &amp; Data Integrity Commitments</div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="font-bold text-teal-600 dark:text-teal-400 text-sm mb-1">Zero Model Training Guarantee</div>
      <p class="text-muted-foreground leading-relaxed">
        Student essays, keystroke telemetry streams, and clipboard logs are <strong>never</strong> indexed, cached, or utilized to train general AI models, foundation LLMs, or commercial classifiers. Student intellectual property remains strictly confidential.
      </p>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="font-bold text-teal-600 dark:text-teal-400 text-sm mb-1">FERPA &amp; COPPA Compliant</div>
      <p class="text-muted-foreground leading-relaxed">
        All telemetry data and document revisions are encrypted using <strong>TLS 1.3 in transit</strong> and <strong>AES-256 at rest</strong>. Keystroke timing data is captured strictly within assigned LMS course containers and assignment windows.
      </p>
    </div>
  </div>

  <div class="mt-4 p-4 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 text-xs">
    <div class="text-teal-400 font-bold mb-1">Educator-First Governance &amp; LMS Interoperability</div>
    <p class="text-slate-300 text-[11px] leading-relaxed">
      Integrity flag statuses (<em>Flagged</em>, <em>Resolved</em>, <em>Not Flagged</em>) are private to educators to prevent unwarranted bias or student confrontation. Seamless LTI 1.3 integrations with Canvas SpeedGrader, Buzz LMS, Moodle, and Google Classroom.
    </p>
  </div>
</div>

<h3>1. Absolute Zero Model Training Guarantee</h3>
<p>Checkmark Plagiarism enforces an unconditional <strong>Zero Model Training Policy</strong>. Student writing submissions, keystroke telemetry streams, and clipboard logs are <strong>never</strong> indexed, cached, or utilized to train general AI models, foundation LLMs, or commercial classifiers. Student intellectual property remains strictly confined to the educational institution&apos;s secure private instance.</p>

<h3>2. FERPA, COPPA, and State Privacy Compliance</h3>
<ul>
  <li><strong>Data Minimization:</strong> Keystroke timing data is captured strictly within assigned LMS course containers and assignment windows. Checkmark does not monitor keystrokes across other browser tabs, desktop applications, or personal activities.</li>
  <li><strong>Encryption Standards:</strong> All telemetry packets and document revisions are encrypted using <strong>TLS 1.3 in transit</strong> and <strong>AES-256 at rest</strong>.</li>
  <li><strong>Role-Based Access Control (RBAC):</strong> Process replays and integrity dossiers are restricted to authorized course instructors, department chairs, and designated academic integrity deans.</li>
</ul>

<h3>3. Enterprise LTI 1.3 &amp; LMS Interoperability</h3>
<p>Checkmark integrates natively into school district and university ecosystems:</p>
<ul>
  <li><strong>Canvas LMS:</strong> Full SpeedGrader integration with embedded Essay Playback viewers and rubric grade passback.</li>
  <li><strong>Google Classroom &amp; Google Docs:</strong> Real-time extension capturing authentic keystroke revision history directly inside standard student workflows.</li>
  <li><strong>Buzz LMS &amp; Moodle:</strong> Standards-compliant LTI 1.3 tool launching with two-way grade synchronization.</li>
  <li><strong>Single Sign-On (SSO):</strong> Frictionless authentication via Google Workspace for Education and Microsoft Entra ID (Azure AD).</li>
</ul>

<hr class="my-8 border-border" />

<h2>9. Frequently Asked Questions (FAQs)</h2>

<div class="my-6 space-y-4 text-xs">
  <!-- FAQ 1 -->
  <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
    <h3 class="text-sm font-bold text-foreground pt-0">1. What is the mathematical difference between an authentic brainstorming pause and a gaze-shift transcription pause?</h3>
    <p class="text-muted-foreground leading-relaxed">
      An authentic brainstorming pause (<em>P<sub>form</sub></em>) typically lasts between <strong>3.0 and 15.0+ seconds</strong> (and up to 45 seconds at major structural transitions) and clusters systematically at <strong>syntactic boundaries</strong> (paragraph breaks, sentence boundaries, and complex clause junctions). During this time, the brain is actively performing ideation and proposition planning. In contrast, a gaze-shift pause (<em>T<sub>gaze</sub></em>) is short (<strong>0.8 to 2.2 seconds</strong>) and represents the physical ocular-motor time required to shift visual attention from a secondary screen (phone/iPad) to the primary keyboard. These gaze shifts occur <strong>randomly mid-phrase</strong> or across arbitrary word counts, uncorrelated with grammatical clause boundaries.
    </p>
  </div>

  <!-- FAQ 2 -->
  <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
    <h3 class="text-sm font-bold text-foreground pt-0">2. Can a fast, skilled touch-typist be falsely flagged for transcription cadence?</h3>
    <p class="text-muted-foreground leading-relaxed">
      No. While a skilled touch-typist possesses a high average Words-Per-Minute (WPM) speed (e.g., 80–100+ WPM), their typing still exhibits the natural psycholinguistic markers of organic thought. Skilled typists still experience significant IKI variance between easy digrams (<em>th</em>, <em>er</em>) and complex lexical retrievals, still pause for several seconds at clause boundaries to plan their next point, and still engage in natural revision churn (<em>KFR &ge; 15%</em>). Optical transcription flags only trigger when high typing speed is combined with <strong>collapsed IKI variance (<em>CV<sub>IKI</sub> &lt; 0.20</em>)</strong>, <strong>zero clause-boundary formulation pauses</strong>, and <strong>&lt;3% keystroke friction</strong>.
    </p>
  </div>

  <!-- FAQ 3 -->
  <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
    <h3 class="text-sm font-bold text-foreground pt-0">3. How does Essay Playback account for students using speech-to-text dictation or assistive technology?</h3>
    <p class="text-muted-foreground leading-relaxed">
      Checkmark Plagiarism is designed to support diverse learning accommodations. Speech-to-text dictation engines (such as Apple Dictation, Google Voice Typing, or Dragon NaturallySpeaking) insert text in distinct sentence-level or phrase-level audio buffer bursts, which Checkmark’s ingestion engine tags specifically as assistive speech events. Furthermore, neurodivergent students or writers using specialized 504/IEP typing accommodations show rich revision histories and variable pause topographies that reflect their unique composition styles without triggering optical transcription alerts.
    </p>
  </div>

  <!-- FAQ 4 -->
  <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
    <h3 class="text-sm font-bold text-foreground pt-0">4. What if a student drafts their essay by hand in a paper notebook and then types up their handwritten draft?</h3>
    <p class="text-muted-foreground leading-relaxed">
      If a student drafts an essay offline on paper and subsequently types it into the LMS, their telemetry will resemble transcription cadence (steady typing speed with low revision churn). However, Checkmark’s transparent reporting empowers the teacher to have an immediate, restorative conversation. When the teacher asks the student to explain the steady cadence, the student can simply present their physical handwritten notebook or outline draft. The teacher can then verify the authentic drafting timeline and validate the submission without friction.
    </p>
  </div>

  <!-- FAQ 5 -->
  <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
    <h3 class="text-sm font-bold text-foreground pt-0">5. Does Checkmark store or monitor keystrokes outside of the official assignment window?</h3>
    <p class="text-muted-foreground leading-relaxed">
      No. Checkmark adheres strictly to educational data privacy principles. Keystroke telemetry logging is active <strong>only within the assigned LMS essay editor, Google Docs document, or course assignment portal</strong>. Checkmark has zero visibility into personal browsing history, other desktop applications, private chats, or external websites.
    </p>
  </div>

  <!-- FAQ 6 -->
  <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
    <h3 class="text-sm font-bold text-foreground pt-0">6. How does Checkmark differentiate between legitimate grammar assistants (e.g., spell check) and unapproved AI transcription?</h3>
    <p class="text-muted-foreground leading-relaxed">
      Legitimate grammar assistants and spell-check tools involve localized, discrete user interactions: a student pauses, right-clicks a squiggly red line, selects a replacement word, or accepts an inline punctuation fix. These actions generate clear, isolated correction events surrounded by organic typing streams (<em>KFR &ge; 15%</em>). In contrast, unapproved AI transcription involves the continuous, monotonic entry of hundreds of fully polished words without any local spelling checks or developmental corrections.
    </p>
  </div>

  <!-- FAQ 7 -->
  <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
    <h3 class="text-sm font-bold text-foreground pt-0">7. Can students use Essay Playback for their own metacognitive reflection and revision?</h3>
    <p class="text-muted-foreground leading-relaxed">
      Yes. Many progressive English departments and writing centers enable student-facing playback views. Allowing students to watch their own writing replays helps them analyze their pacing, recognize where they get stuck in drafting ruts, observe how much time they spend revising versus brainstorming, and develop stronger metacognitive awareness of their writing habits.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>10. Summary Checklist for Educators &amp; Department Chairs</h2>

<p>When evaluating a suspicious writing submission for potential external device transcription:</p>

<!-- Checklist Card -->
<div class="my-6 p-6 rounded-2xl bg-card border border-border shadow-sm space-y-3 text-xs">
  <div class="font-bold text-foreground text-sm uppercase tracking-wide mb-2">Educator Telemetry Investigation Checklist</div>
  <div class="space-y-2.5">
    <div class="flex items-start gap-2.5">
      <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-[10px]">1</span>
      <div><strong class="text-foreground">Check Keystroke Friction Ratio (KFR):</strong> Verify if total backspacing/deletion is below 3% across a multi-paragraph essay.</div>
    </div>
    <div class="flex items-start gap-2.5">
      <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-[10px]">2</span>
      <div><strong class="text-foreground">Inspect IKI Variance (CV<sub>IKI</sub>):</strong> Determine if typing cadence is hyper-metronomic and flat (CV &lt; 0.20) with an absence of natural lexical hesitations.</div>
    </div>
    <div class="flex items-start gap-2.5">
      <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-[10px]">3</span>
      <div><strong class="text-foreground">Audit Pause Topography:</strong> Check if deep 5–15s formulation pauses are missing at paragraph and sentence frontiers while short 1–2s pauses are scattered randomly mid-phrase.</div>
    </div>
    <div class="flex items-start gap-2.5">
      <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-[10px]">4</span>
      <div><strong class="text-foreground">Review Essay Playback™ Replay:</strong> Check if the video replay shows a monotonic 0 &rarr; N linear conveyor belt with zero structural rewriting.</div>
    </div>
    <div class="flex items-start gap-2.5">
      <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-[10px]">5</span>
      <div><strong class="text-foreground">Inspect External Paste Buffers:</strong> Verify whether the student pasted an external prompt or outline before starting their typing session.</div>
    </div>
    <div class="flex items-start gap-2.5">
      <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-[10px]">6</span>
      <div><strong class="text-foreground">Conduct a Restorative Conference:</strong> Co-view the playback timeline with the student using supportive, growth-oriented dialogue scripts.</div>
    </div>
  </div>
</div>
`;

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
};

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const refValue = typeof resolvedSearchParams?.ref === 'string' ? resolvedSearchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/how-can-teachers-use-essay-playback-to-differentiate-natural-brainstorming-pauses-from-external-device-transcription"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
