import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How High School AP Computer Science Principles Teachers Can Verify Authentic Authorship in Create Performance Task Written Responses | Checkmark Plagiarism",
  description: "A comprehensive technical and pedagogical guide for AP Computer Science Principles educators, STEM department chairs, and IT coordinators on verifying authentic student authorship in Create Performance Task written responses, detecting AI-generated code explanations, and utilizing Essay Playback™ writing process telemetry.",
  keywords: [
    "AP Computer Science Principles",
    "AP CSP Create Performance Task",
    "Create PT written responses",
    "data abstraction AP CSP",
    "procedural abstraction",
    "managing complexity list",
    "AP CS AI detection",
    "Checkmark Plagiarism",
    "Essay Playback",
    "Personalized Project Reference",
    "Code.org App Lab",
    "Canvas SpeedGrader",
    "restorative code debrief"
  ],
  openGraph: {
    images: [
      "/images/learning/how-high-school-ap-computer-science-principles-teachers-can-verify-authentic-authorship-in-create-performance-task-written-responses/featured.png",
      "/images/services/report-source-quote.png",
      "/images/services/report-paste-evidence.png",
      "/images/services/report-rubric-tiles.png"
    ],
  },
};

export const meta = {
  title: "How High School AP Computer Science Principles Teachers Can Verify Authentic Authorship in Create Performance Task Written Responses",
  description: "A comprehensive technical and pedagogical guide for AP Computer Science Principles educators, STEM department chairs, and IT coordinators on verifying authentic student authorship in Create Performance Task written responses, detecting AI-generated code explanations, and utilizing Essay Playback™ writing process telemetry.",
  "opengraph-image": "/images/learning/how-high-school-ap-computer-science-principles-teachers-can-verify-authentic-authorship-in-create-performance-task-written-responses/featured.png",
  date: "08-20-2026",
  readTime: "~16 min read",
  category: "Detection",
  categories: ["Detection", "Writing Telemetry", "Teacher Guide", "STEM Education", "Rubric Autograding"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<!-- Executive Summary Callout Box -->
<div class="my-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
    <p class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Executive Summary &amp; AP CSP Integrity Mandate</p>
  </div>
  <p class="text-base text-foreground leading-relaxed">
    The College Board&rsquo;s <strong>AP Computer Science Principles (AP CSP) Create Performance Task (Create PT)</strong> requires high school students to develop a functional software application (in Python, JavaScript, Code.org App Lab, Snap!, or Scratch) and author rigorous, technically precise <strong>Written Responses</strong> explaining their program&rsquo;s purpose, data abstractions, list-based storage with iteration, and parameterized algorithmic procedures. However, the ubiquity of generative Large Language Models (LLMs) has introduced an acute classroom integrity dilemma: students frequently develop or adapt working code and then feed their scripts into ChatGPT or Claude to auto-generate the required written explanations.
  </p>
  <p class="text-base text-foreground leading-relaxed mt-3">
    These AI-generated responses often present slick, grammatically pristine prose that confabulates parameters, invents non-existent algorithmic logic, or introduces college-level paradigms completely disconnected from the student&rsquo;s actual codebase. Simultaneously, generic commercial AI detectors trigger catastrophic rates of false positives by flagging mandatory Computer Science vocabulary (e.g., <em>iteration</em>, <em>Boolean expression</em>, <em>traversal</em>, <em>abstraction</em>) and standard College Board sentence stems as machine-generated text, while failing entirely to evaluate whether the student&rsquo;s commentary matches their code.
  </p>
  <p class="text-base text-foreground leading-relaxed mt-3">
    <strong>Checkmark Plagiarism</strong> resolves this dilemma by pairing <strong>passage-level AI confidence sliders</strong> with patent-pending <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a> writing process telemetry (1x&ndash;8x replay), external paste tracking with full text preservation, and quote-anchored AP CSP rubric autograding. Integrated directly into <strong>Canvas SpeedGrader, Agilix Buzz, and Google Classroom</strong>, Checkmark equips secondary CS educators to verify empirical code-to-commentary concordance, audit authentic drafting rhythms, and lead constructive, restorative code tracing conferences that uphold academic integrity while fostering deep computational literacy.
  </p>
</div>

<!-- Featured Hero Visual Card -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/learning/how-high-school-ap-computer-science-principles-teachers-can-verify-authentic-authorship-in-create-performance-task-written-responses/featured.png" 
    alt="Checkmark Plagiarism AP CSP Create Performance Task Analysis Dashboard showing student Python code snippet with iteration and data abstraction, paired side-by-side with Written Response analysis, Essay Playback telemetry timeline with cognitive drafting pauses, external paste inspector, and College Board 6-row rubric autograding breakdown." 
    class="w-full h-auto object-cover"
  />
  <div class="p-4 bg-muted/40 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
    <span>Figure 1: Checkmark's AP CSP Create Performance Task Dashboard cross-referencing code against written responses, keystroke telemetry, and College Board Rows 1–6 autograding.</span>
    <span class="font-medium text-teal-600 dark:text-teal-400 font-mono">AP CSP Create PT Ready</span>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>1. The Disciplinary Architecture of the AP CSP Create Performance Task</h2>

<p>
  In secondary computer science education, the College Board&rsquo;s Advanced Placement Computer Science Principles (AP CSP) curriculum serves as a foundational gateway into computational thinking, algorithmic problem solving, and software engineering. Unlike traditional programming assessments that evaluate solely whether source code compiles, satisfies unit tests, or matches a reference implementation, the <strong>AP CSP Create Performance Task (Create PT)</strong> places equal, if not greater, weight on the student&rsquo;s capacity to articulate, document, and defend their computational artifacts in formal technical writing.
</p>

<!-- AP CSP Component Framework Card -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">College Board AP CSP Create Performance Task Framework</span>
    <span class="text-xs font-mono text-muted-foreground">Core Components &amp; Deliverables</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="p-4 rounded-xl bg-muted/40 border border-border">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">1</span>
        <h4 class="text-sm font-bold text-foreground m-0">Component 1: Program Code</h4>
      </div>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        Complete, student-developed program code submitted as a clean PDF file. Developed in block-based (Scratch, Snap!, App Inventor) or text-based languages (Python, JavaScript/App Lab, Swift, Java).
      </p>
    </div>

    <div class="p-4 rounded-xl bg-muted/40 border border-border">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">2</span>
        <h4 class="text-sm font-bold text-foreground m-0">Component 2: Video Demo</h4>
      </div>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        A 1-minute video (.mp4, .wmv, .mov, max 30MB) demonstrating program functionality: user input, programmatic execution, and resulting output.
      </p>
    </div>

    <div class="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-6 w-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs">3</span>
        <h4 class="text-sm font-bold text-teal-800 dark:text-teal-300 m-0">Component 3: Written Responses</h4>
      </div>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        Four structured technical responses (or Personalized Project Reference [PPR] exam responses) analyzing program purpose, data abstraction, complexity management, iteration, and parameterized algorithms.
      </p>
    </div>
  </div>
</div>

<p>
  For 9th through 12th-grade computer science teachers managing 120 to 160 students across five or six class periods, evaluating the Create PT presents a unique pedagogical challenge. Students spend at least 12 in-class hours designing games, simulation engines, quiz apps, or utility tools. Yet, the final AP score hinges decisively on the clarity, accuracy, and depth of the <strong>Written Responses</strong>.
</p>

<h3>The Anatomy of the Four Written Response Prompts</h3>

<p>
  To earn full credit across the College Board&rsquo;s analytical scoring criteria, students must respond to four highly structured prompts, each targeting a specific computational concept and rubric row:
</p>

<!-- Anatomy of the 4 Written Response Prompts Grid -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">The Anatomy of AP CSP Create PT Written Responses</span>
    <span class="text-xs font-mono text-muted-foreground">Rubric Alignment &amp; Authentic Prose Examples</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- WR 1 -->
    <div class="p-4 rounded-xl bg-muted/40 border border-border">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-bold text-foreground m-0">WR 1: Program Function &amp; Purpose</h4>
        <span class="text-[11px] font-mono font-semibold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">Row 1 (1 Pt)</span>
      </div>
      <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-3">
        <li>State the broader <em>program purpose</em> (the user problem solved).</li>
        <li>Describe the overall <em>functionality</em>.</li>
        <li>Detail user input, internal processing, and resulting output.</li>
      </ul>
      <div class="p-2.5 rounded-lg bg-background border border-border text-xs italic text-foreground/90 font-serif">
        &ldquo;The purpose of QuizMaster is to help high school biology students review organelles. When the user clicks an answer button, the program checks it against the key and updates the score label on screen.&rdquo;
      </div>
    </div>

    <!-- WR 2 -->
    <div class="p-4 rounded-xl bg-muted/40 border border-border">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-bold text-foreground m-0">WR 2: Data Abstraction &amp; Complexity</h4>
        <span class="text-[11px] font-mono font-semibold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">Rows 2 &amp; 3 (2 Pts)</span>
      </div>
      <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-3">
        <li>Identify a named list/array and explain what data it stores.</li>
        <li>Defend how the list manages complexity.</li>
        <li>Contrast with a hypothetical non-list implementation.</li>
      </ul>
      <div class="p-2.5 rounded-lg bg-background border border-border text-xs italic text-foreground/90 font-serif">
        &ldquo;The list <code>questionList</code> stores string questions. It manages complexity because without it, I would need 30 separate scalar variables and 30 nested <code>if</code> blocks to select questions.&rdquo;
      </div>
    </div>

    <!-- WR 3 -->
    <div class="p-4 rounded-xl bg-muted/40 border border-border">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-bold text-foreground m-0">WR 3: Storage &amp; Processing (Iteration)</h4>
        <span class="text-[11px] font-mono font-semibold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">Row 5 Integration</span>
      </div>
      <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-3">
        <li>Identify where the list is processed using iteration (loops).</li>
        <li>Explain how each element is accessed, evaluated, or aggregated.</li>
        <li>Trace data flow through each iteration cycle.</li>
      </ul>
      <div class="p-2.5 rounded-lg bg-background border border-border text-xs italic text-foreground/90 font-serif">
        &ldquo;In lines 45–54, a <code>for</code> loop traverses <code>scoreHistory</code> from index 0 to length - 1, summing all values into <code>totalPoints</code> to compute the player average.&rdquo;
      </div>
    </div>

    <!-- WR 4 -->
    <div class="p-4 rounded-xl bg-muted/40 border border-border">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-bold text-foreground m-0">WR 4: Procedural Abstraction &amp; Algorithms</h4>
        <span class="text-[11px] font-mono font-semibold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">Rows 4, 5, 6 (3 Pts)</span>
      </div>
      <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-3">
        <li>Present a student-developed procedure with at least one parameter.</li>
        <li>Show sequencing, selection, and iteration.</li>
        <li>Provide step-by-step trace and two distinct testing calls.</li>
      </ul>
      <div class="p-2.5 rounded-lg bg-background border border-border text-xs italic text-foreground/90 font-serif">
        &ldquo;The procedure <code>calcGrade</code> takes parameter <code>rawScore</code>. It contains an <code>if-else</code> tree to assign a letter grade. Calling it with 85 returns 'B', while calling with 45 returns 'F'.&rdquo;
      </div>
    </div>
  </div>
</div>

<h3>Language Neutrality Across Text-Based and Block-Based Environments</h3>

<p>
  A defining strength of the AP CSP course is its language neutrality. High school classrooms across the United States implement the curriculum using diverse developmental platforms:
</p>

<ul>
  <li><strong>Block-Based Environments:</strong> Code.org App Lab, MIT App Inventor, Scratch (MIT Media Lab), Snap! (UC Berkeley), and Microsoft MakeCode.</li>
  <li><strong>Text-Based Environments:</strong> Python (via Replit, IDLE, or VS Code), JavaScript (via Code.org App Lab or HTML5 Canvas), Swift, and Java.</li>
</ul>

<p>
  Regardless of the platform, the written response demands are identical. A student building a block-based turtle-graphics game in Snap! must explain data abstraction with the exact same conceptual precision as a student developing a text-based inventory management system in Python.
</p>

<!-- Syntax Highlighted Authentic Python Code Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
    <div class="flex items-center gap-2">
      <span class="inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
      <span class="text-xs font-bold uppercase tracking-wider text-teal-400">Authentic Student Python Example: Algorithmic Procedure</span>
    </div>
    <span class="text-xs font-mono text-slate-400">filter_high_scorers.py</span>
  </div>

  <pre class="bg-slate-950 p-4 rounded-xl text-xs font-mono text-slate-200 overflow-x-auto border border-slate-800 leading-relaxed"><code><span class="text-slate-500"># Authentic Student Python Example: Algorithmic Procedure with Iteration & Selection</span>
<span class="text-teal-400 font-bold">def</span> <span class="text-emerald-400 font-bold">filter_high_scorers</span>(score_list, minimum_threshold):
    <span class="text-amber-300">"""Traverses score_list, filters scores above threshold, returns count."""</span>
    qualifying_count = <span class="text-purple-400">0</span>
    <span class="text-slate-500"># Iteration: Traverses each element in the list</span>
    <span class="text-teal-400 font-bold">for</span> score <span class="text-teal-400 font-bold">in</span> score_list:
        <span class="text-slate-500"># Selection: Evaluates score against parameter threshold</span>
        <span class="text-teal-400 font-bold">if</span> score >= minimum_threshold:
            qualifying_count += <span class="text-purple-400">1</span>
            <span class="text-teal-400">print</span>(<span class="text-amber-300">f"Qualifying score found: {score}"</span>)
        <span class="text-teal-400 font-bold">else</span>:
            <span class="text-teal-400">print</span>(<span class="text-amber-300">f"Score below cutoff: {score}"</span>)
    <span class="text-teal-400 font-bold">return</span> qualifying_count

<span class="text-slate-500"># Procedure Call 1: minimum_threshold = 80 -> Executes 'if' branch 3 times</span>
result_a = <span class="text-emerald-400">filter_high_scorers</span>([<span class="text-purple-400">95</span>, <span class="text-purple-400">82</span>, <span class="text-purple-400">74</span>, <span class="text-purple-400">88</span>, <span class="text-purple-400">60</span>], <span class="text-purple-400">80</span>)

<span class="text-slate-500"># Procedure Call 2: minimum_threshold = 100 -> Executes 'else' branch for all elements</span>
result_b = <span class="text-emerald-400">filter_high_scorers</span>([<span class="text-purple-400">95</span>, <span class="text-purple-400">82</span>, <span class="text-purple-400">74</span>, <span class="text-purple-400">88</span>, <span class="text-purple-400">60</span>], <span class="text-purple-400">100</span>)</code></pre>

  <div class="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-1">
    <strong class="text-teal-300">AP CSP Rubric Fulfillment Breakdown:</strong>
    <p class="m-0">1. <strong>User-Defined Procedure:</strong> Explicit parameters (<code>score_list</code>, <code>minimum_threshold</code>).</p>
    <p class="m-0">2. <strong>Algorithmic Complexity:</strong> Combines sequencing, selection (<code>if-else</code>), and iteration (<code>for</code> loop).</p>
    <p class="m-0">3. <strong>Distinct Execution Paths:</strong> Call 1 produces <code>result_a = 3</code>; Call 2 produces <code>result_b = 0</code>.</p>
  </div>
</div>

<h3>The Acute Classroom Dilemma: Working Code, Outsourced Explanations</h3>

<p>
  The primary integrity vulnerability in high school AP CSP classrooms is not simply whole-program plagiarism. Rather, it is a nuanced, hybrid form of academic fraud: <strong>code-commentary dissociation</strong>.
</p>

<p>
  A student successfully builds a working arcade game in Code.org App Lab or a text-based inventory tool in Python. However, when faced with drafting the dense, rubric-governed written responses&mdash;intimidated by College Board criteria or pressed for time&mdash;the student copies their 80 lines of working code into ChatGPT or Claude and prompts:
</p>

<blockquote class="my-4 border-l-4 border-teal-500 bg-muted/40 p-4 rounded-r-xl text-sm italic text-foreground">
  &ldquo;Here is my JavaScript code for an AP CSP project. Write my Written Responses for WR 1, WR 2, WR 3, and WR 4 so I get all 6 rubric points on the College Board rubric.&rdquo;
</blockquote>

<p>
  The Large Language Model instantly produces a response that sounds authoritative, sophisticated, and grammatically flawless. However, upon close inspection by an experienced computer science educator, these AI-generated commentaries exhibit three glaring structural defects:
</p>

<!-- 3 Hallmarks of AI-Generated Create PT Responses -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <span class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Three Hallmarks of AI-Generated Create PT Responses</span>
    <span class="text-xs font-mono text-muted-foreground">Classroom Diagnostic Indicators</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-6 w-6 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 flex items-center justify-center font-bold text-xs">1</span>
        <h4 class="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 m-0">Disconnected Conceptual Inflation</h4>
      </div>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        The LLM introduces advanced paradigms—such as dynamic memory allocation, asynchronous promises, object-oriented polymorphism, or MVC architectural separation—into a simple 40-line procedural block script where no such concepts exist.
      </p>
    </div>

    <div class="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-6 w-6 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 flex items-center justify-center font-bold text-xs">2</span>
        <h4 class="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 m-0">Parameter &amp; Variable Confabulation</h4>
      </div>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        The LLM misidentifies global state variables as procedure parameters, invents loops that do not exist in the code, or claims a return value is generated by a <code>void</code> function that only updates UI labels.
      </p>
    </div>

    <div class="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-6 w-6 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 flex items-center justify-center font-bold text-xs">3</span>
        <h4 class="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 m-0">The Generic Complexity Boilerplate Mirage</h4>
      </div>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        The LLM generates vague, textbook boilerplate (<em>&ldquo;The list enhances modularity, readability, and algorithmic efficiency&rdquo;</em>) without articulating the concrete code failure that would occur in <em>this specific program</em> if the list were removed.
      </p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>2. College Board Policies, Rubric Rows, and Why Generic AI Detectors Fail CS Teachers</h2>

<p>
  To address the surge of generative AI, the College Board updated its official AP Computer Science Principles policy regarding Artificial Intelligence and plagiarism. Understanding the exact boundaries of this policy is essential for high school educators, department chairs, and AP coordinators.
</p>

<!-- College Board AI Policy Matrix -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Official College Board AP CSP Policy on Generative AI Tools</span>
    <span class="text-xs font-mono text-muted-foreground">Compliance &amp; Citation Standards</span>
  </div>

  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <strong class="text-xs text-emerald-800 dark:text-emerald-300 block">1. Brainstorming Project Ideas &amp; Algorithmic Logic</strong>
        <span class="text-xs text-muted-foreground">Students may use AI to explore concept ideas, game themes, or algorithmic approaches.</span>
      </div>
      <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider bg-emerald-500/20 px-2.5 py-1 rounded shrink-0">Permitted</span>
    </div>

    <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <strong class="text-xs text-emerald-800 dark:text-emerald-300 block">2. Syntax Troubleshooting &amp; Conceptual Explanations</strong>
        <span class="text-xs text-muted-foreground">Students may use AI to debug syntax errors or clarify programming language documentation.</span>
      </div>
      <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider bg-emerald-500/20 px-2.5 py-1 rounded shrink-0">Permitted</span>
    </div>

    <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <strong class="text-xs text-amber-800 dark:text-amber-300 block">3. Utilizing External Code / Libraries / AI Snippets</strong>
        <span class="text-xs text-muted-foreground">Any external snippet must be cited in code comments with: (1) Tool name, (2) Prompt, (3) Date. Cannot serve as core algorithm.</span>
      </div>
      <span class="text-[11px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider bg-amber-500/20 px-2.5 py-1 rounded shrink-0">Mandatory Citation</span>
    </div>

    <div class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <strong class="text-xs text-rose-800 dark:text-rose-300 block">4. Drafting Written Responses (WR 1, WR 2, WR 3, WR 4)</strong>
        <span class="text-xs text-muted-foreground">Students must independently author all written responses and Personalized Project Reference materials. AI prose earns a score of 0.</span>
      </div>
      <span class="text-[11px] font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wider bg-rose-500/20 px-2.5 py-1 rounded shrink-0">Strictly Prohibited (Score 0)</span>
    </div>
  </div>
</div>

<h3>The AP CSP Scoring Rubric Matrix (Rows 1–6)</h3>

<p>
  Every high school AP CSP teacher must evaluate classroom drafts against the College Board&rsquo;s six analytic rubric criteria:
</p>

<!-- AP CSP Scoring Rubric Matrix Table Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-400">AP CSP Create Performance Task Scoring Rubric Matrix</span>
    <span class="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">6 Analytic Points</span>
  </div>

  <div class="space-y-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-teal-300">Row 1: Program Purpose and Function (WR 1)</span>
        </div>
        <p class="text-slate-300 m-0">Identifies the broader purpose (user problem solved) AND describes functionality. Specifies user input, processing, and resulting program output.</p>
      </div>
      <span class="font-mono text-emerald-400 font-bold shrink-0">1 Point</span>
    </div>

    <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-teal-300">Row 2: Data Abstraction (WR 2)</span>
        </div>
        <p class="text-slate-300 m-0">Includes two distinct code segments: (1) creation/storage of data in a named list/array, and (2) usage of data from that same list. Identifies list name and contents.</p>
      </div>
      <span class="font-mono text-emerald-400 font-bold shrink-0">1 Point</span>
    </div>

    <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-teal-300">Row 3: Managing Complexity (WR 2)</span>
        </div>
        <p class="text-slate-300 m-0">Explains specifically how the list manages program complexity. Must explain why the program would be difficult or impossible to write without using the list abstraction.</p>
      </div>
      <span class="font-mono text-emerald-400 font-bold shrink-0">1 Point</span>
    </div>

    <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-teal-300">Row 4: Procedural Abstraction (WR 4)</span>
        </div>
        <p class="text-slate-300 m-0">Includes a student-developed procedure with at least one explicit parameter that affects procedure execution. Identifies procedure name and return type/behavior.</p>
      </div>
      <span class="font-mono text-emerald-400 font-bold shrink-0">1 Point</span>
    </div>

    <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-teal-300">Row 5: Algorithm Implementation (WR 4)</span>
        </div>
        <p class="text-slate-300 m-0">Procedure includes sequencing, selection (if/else), and iteration (loop). Provides step-by-step algorithmic trace of how the code executes in detail.</p>
      </div>
      <span class="font-mono text-emerald-400 font-bold shrink-0">1 Point</span>
    </div>

    <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-teal-300">Row 6: Testing &amp; Execution Paths (WR 4)</span>
        </div>
        <p class="text-slate-300 m-0">Describes two distinct calls to the procedure: Call 1 passes arguments executing one branch; Call 2 passes arguments executing a different branch. States exact results of both.</p>
      </div>
      <span class="font-mono text-emerald-400 font-bold shrink-0">1 Point</span>
    </div>
  </div>
</div>

<h3>Why Generic Commercial AI Detectors Fail High School CS Teachers</h3>

<p>
  Faced with grading stacks of 150 Create PT submissions, many high school teachers and districts have turned to generic commercial AI detectors (such as Turnitin AI detector, GPTZero, or CopyLeaks). In secondary computer science classrooms, these tools fail catastrophically for three technical reasons:
</p>

<!-- Generic AI Detector Failure Modes Card -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <span class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Why Generic Whole-Document AI Detectors Fail Computer Science</span>
    <span class="text-xs font-mono text-muted-foreground">Technical Breakdown</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="p-4 rounded-xl bg-muted/40 border border-border">
      <h4 class="text-xs font-bold uppercase tracking-wider text-foreground mb-2">1. The Domain Lexicon Trap (High False Positives)</h4>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        Standard CS terminology (<em>iteration</em>, <em>traversal</em>, <em>Boolean expression</em>, <em>conditional</em>, <em>parameter</em>, <em>abstraction</em>, <em>argument</em>) has naturally low lexical perplexity. When an honest 10th grader uses proper technical terms, generic detectors flag the text as &ldquo;85% AI-generated.&rdquo;
      </p>
    </div>

    <div class="p-4 rounded-xl bg-muted/40 border border-border">
      <h4 class="text-xs font-bold uppercase tracking-wider text-foreground mb-2">2. Mandatory Sentence Stem Penalization</h4>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        High school teachers explicitly teach College Board sentence frames (<em>&ldquo;The list named... manages complexity because...&rdquo;</em>). Because these stems are uniform across thousands of student essays, generic detectors classify them as machine text.
      </p>
    </div>

    <div class="p-4 rounded-xl bg-muted/40 border border-border">
      <h4 class="text-xs font-bold uppercase tracking-wider text-foreground mb-2">3. The Code-Commentary Gap (Blind to True Fraud)</h4>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        Commercial detectors evaluate written text in isolation. They cannot inspect the student&rsquo;s code to determine whether the prose accurately reflects actual code logic or describes hallucinated parameters and non-existent loops.
      </p>
    </div>
  </div>
</div>

<p>
  When a generic detector assigns a &ldquo;70% AI Probability&rdquo; to an honest student&rsquo;s explanation of a Python <code>for</code> loop, the teacher is left in an impossible position: either accuse the student based on an opaque, unexplainable probability score, or ignore the alert entirely. To achieve defensible academic integrity, computer science educators need <strong>transparent, process-based evidentiary telemetry</strong>.
</p>

<hr class="my-8 border-border" />

<h2>3. The High School Computer Science Evidentiary Matrix</h2>

<p>
  To evaluate student authorship objectively without relying on arbitrary black-box scores, high school computer science departments require a comprehensive evidentiary framework. The matrix below compares the four primary methodologies available to secondary educators:
</p>

<!-- Evidentiary Matrix Table Card -->
<div class="my-8 rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
  <div class="bg-muted px-6 py-4 border-b border-border">
    <h3 class="text-sm font-semibold text-foreground uppercase tracking-wider m-0">
      High School Computer Science Evidentiary Matrix
    </h3>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
          <th class="py-3 px-3 w-1/5">Evidentiary Dimension</th>
          <th class="py-3 px-3 w-1/5">1. Manual 1-on-1 Oral Code Debrief</th>
          <th class="py-3 px-3 w-1/5 text-rose-700 dark:text-rose-300">2. Generic AI Detectors (Turnitin)</th>
          <th class="py-3 px-3 w-1/5">3. Git / IDE Version Control</th>
          <th class="py-3 px-3 w-1/5 text-teal-700 dark:text-teal-300">4. Checkmark Suite &amp; Essay Playback™</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border font-sans text-xs">
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">Code-to-Prose Concordance</td>
          <td class="py-3 px-3 text-muted-foreground">EXCELLENT: Teacher asks student to live-trace code logic.</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">ZERO: Detector evaluates text in isolation; blind to code logic.</td>
          <td class="py-3 px-3 text-muted-foreground">POOR: Version history tracks code commits but ignores written responses.</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">EXCELLENT: Highlights specific code-commentary ties with quote anchors.</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">Keystroke Dynamics &amp; Process Replay</td>
          <td class="py-3 px-3 text-muted-foreground">ZERO: Provides no temporal record of writing session.</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">ZERO: Analyzes static final text string; no temporal data.</td>
          <td class="py-3 px-3 text-muted-foreground">MODERATE: Shows snapshot commits; lacks sub-second keystroke granularity.</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">EXCELLENT: 1x–8x replay of every keystroke, backspace, and pause.</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">External Paste &amp; Clipboard Inspector</td>
          <td class="py-3 px-3 text-muted-foreground">ZERO: Relies solely on verbal student memory recall.</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">ZERO: Cannot verify clipboard source or paste events.</td>
          <td class="py-3 px-3 text-muted-foreground">POOR: Large diffs show as commit blocks without clipboard preservation.</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">EXCELLENT: Timestamped paste capture with full original text stored.</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">False Positive Resistance on Jargon</td>
          <td class="py-3 px-3 text-muted-foreground">HIGH: Teacher knows student voice and vocabulary level.</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">DISASTROUS: Flags standard CS terms and prompt stems as AI.</td>
          <td class="py-3 px-3 text-muted-foreground">NOT APPLICABLE: Does not evaluate written prose text quality.</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">IMMUNE: Calibrated passage sliders prevent domain jargon penalties.</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">AP CSP Rubric Autograding &amp; LMS Passback</td>
          <td class="py-3 px-3 text-muted-foreground">MANUAL: Teacher hand-grades against 6 analytic rows.</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">ZERO: Provides no rubric alignment or grade passback.</td>
          <td class="py-3 px-3 text-muted-foreground">ZERO: No pedagogical scoring or LMS gradebook synchronization.</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">AUTOMATED: Generates quote-anchored rubric drafts for Canvas/Buzz.</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">Teacher Time Economy (150+ Students)</td>
          <td class="py-3 px-3 text-muted-foreground">UNSUSTAINABLE: 15–20 min per student = 40+ hours grading.</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">FAST BUT UNRELIABLE: Generates scores but causes false crises.</td>
          <td class="py-3 px-3 text-muted-foreground">TEDIOUS: 10–15 min per repo digging through commit diff logs.</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">OPTIMAL: 2–3 min per submission with instant playback proof.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p>
  While manual 1-on-1 code walkthroughs remain the gold standard for pedagogical depth, conducting 150 individual 15-minute conferences requires over 37 hours of educator time&mdash;an impossibility for high school teachers with standard 50-minute planning periods. <strong>Checkmark Plagiarism</strong> provides the objective telemetry necessary to deliver the evidentiary precision of an oral debrief at the speed and scale required for public and private secondary schools.
</p>

<hr class="my-8 border-border" />

<h2>4. Step-by-Step Computer Science Teacher Audit Protocol</h2>

<p>
  When evaluating AP CSP Create Performance Task written responses, high school computer science educators should follow a structured, four-step audit protocol to ensure defensible evaluation, protect honest students, and identify outsourced explanations.
</p>

<!-- 4-Step Audit Protocol Flow Card -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-6 border-b border-border">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">AP CSP Written Response Four-Step Audit Workflow</span>
    <span class="text-xs font-mono text-muted-foreground">Pedagogical Audit Sequence</span>
  </div>

  <div class="space-y-6">
    <div class="flex gap-4">
      <div class="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
      <div>
        <h4 class="text-base font-bold text-foreground m-0 mb-1">Step 1: Code-to-Commentary Concordance Audit</h4>
        <p class="text-sm text-muted-foreground m-0">
          Verify variable names, parameter passing, list indexing, and loop boundaries between the submitted code PDF and written responses WR 1 through WR 4.
        </p>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
      <div>
        <h4 class="text-base font-bold text-foreground m-0 mb-1">Step 2: Algorithmic Sanity &amp; Complexity Validation</h4>
        <p class="text-sm text-muted-foreground m-0">
          Check parameter scope, branch execution paths in WR 4, and audit the concrete counter-factual justification for the &ldquo;managing complexity without list&rdquo; defense in WR 2.
        </p>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
      <div>
        <h4 class="text-base font-bold text-foreground m-0 mb-1">Step 3: Writing Process Telemetry &amp; Keystroke Dynamics (Essay Playback™)</h4>
        <p class="text-sm text-muted-foreground m-0">
          Audit cognitive code-referencing pauses (10&ndash;60s), tab-switching rhythms, typing velocity curves, and external paste dumps in <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a>.
        </p>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
      <div>
        <h4 class="text-base font-bold text-foreground m-0 mb-1">Step 4: The Restorative &ldquo;Live Code Tracing&rdquo; Debrief</h4>
        <p class="text-sm text-muted-foreground m-0">
          Conduct a supportive, evidence-based student conference using screen replay and code walkthroughs to cultivate authentic mastery and guide in-class revision.
        </p>
      </div>
    </div>
  </div>
</div>

<h3>Step 1: Code-to-Commentary Concordance Audit</h3>

<p>
  The first line of defense is comparing the student&rsquo;s submitted code PDF directly against their written responses for WR 1 through WR 4. Educators should verify four critical concordance touchpoints:
</p>

<ol>
  <li><strong>Identifier Exactness:</strong> Do the variable and list names cited in WR 2 and WR 3 match the exact capitalization, spelling, and scope of the source code? (e.g., An LLM might write <code>score_list</code> when the student&rsquo;s code actually names the array <code>userScoreArray</code>).</li>
  <li><strong>Parameter Binding in WR 4:</strong> Does the procedure identified in WR 4 take an explicit formal parameter, or is it a zero-argument function that merely manipulates global variables?</li>
  <li><strong>List Mutation and Traversal:</strong> Does the iteration code in WR 3 actually traverse the list identified in WR 2?</li>
  <li><strong>Return Value Consistency:</strong> If WR 4 claims the procedure returns a Boolean or transformed integer, does the source code contain an active <code>return</code> statement, or does it merely update a user interface element?</li>
</ol>

<!-- Code-to-Commentary Concordance Case Study Box -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Case Scenario: 10th Grade JavaScript Code.org App Lab Project</span>
    <span class="text-xs font-mono text-muted-foreground">checkEligibility() Analysis</span>
  </div>

  <pre class="bg-slate-950 p-4 rounded-xl text-xs font-mono text-slate-200 overflow-x-auto border border-slate-800 leading-relaxed mb-4"><code><span class="text-teal-400 font-bold">var</span> highScores = [<span class="text-purple-400">120</span>, <span class="text-purple-400">95</span>, <span class="text-purple-400">80</span>, <span class="text-purple-400">65</span>, <span class="text-purple-400">50</span>]; <span class="text-slate-500">// List of integer scores</span>

<span class="text-teal-400 font-bold">function</span> <span class="text-emerald-400 font-bold">checkEligibility</span>(playerScore) {
    <span class="text-slate-500">// Procedure with explicit parameter 'playerScore'</span>
    <span class="text-teal-400 font-bold">var</span> isEligible = <span class="text-purple-400">false</span>;
    <span class="text-teal-400 font-bold">for</span> (<span class="text-teal-400 font-bold">var</span> i = <span class="text-purple-400">0</span>; i &lt; highScores.length; i++) {
        <span class="text-teal-400 font-bold">if</span> (playerScore &gt; highScores[i]) {
            isEligible = <span class="text-purple-400">true</span>;
        }
    }
    <span class="text-teal-400 font-bold">return</span> isEligible;
}</code></pre>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 rounded-xl border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">Authentic Student Commentary (WR 4):</strong>
      <p class="italic text-foreground/90 m-0">
        &ldquo;The procedure <code>checkEligibility</code> takes parameter <code>playerScore</code>. It iterates through <code>highScores</code> from index 0 to 4. If <code>playerScore</code> exceeds any stored score, <code>isEligible</code> becomes <code>true</code>. Calling <code>checkEligibility(100)</code> returns <code>true</code> (executing the <code>if</code> branch), while calling <code>checkEligibility(30)</code> returns <code>false</code> (never executing the <code>if</code> assignment).&rdquo;
      </p>
      <div class="mt-2 text-emerald-600 dark:text-emerald-400 font-semibold font-mono text-[11px]">
        ✔ 100% Code Concordance
      </div>
    </div>

    <div class="p-4 rounded-xl border border-rose-500/30 bg-rose-50/40 dark:bg-rose-950/20">
      <strong class="text-rose-700 dark:text-rose-300 block mb-1">AI-Confabulated Commentary:</strong>
      <p class="italic text-foreground/90 m-0">
        &ldquo;The <code>checkEligibility</code> function utilizes an asynchronous callback mechanism to dynamically allocate memory for leaderboard validation, querying a relational database schema...&rdquo;
      </p>
      <div class="mt-2 text-rose-600 dark:text-rose-400 font-semibold font-mono text-[11px]">
        ✖ Zero Concordance: Hallucinated paradigms not present in App Lab
      </div>
    </div>
  </div>
</div>

<h3>Step 2: Algorithmic Sanity and Complexity Validation</h3>

<p>
  In WR 2, College Board Row 3 requires students to explain why their program could not easily be written without their list abstraction. This prompt represents the most common failure point for both struggling students and generic AI tools.
</p>

<!-- Managing Complexity Evaluation Box -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Evaluating the &ldquo;Managing Complexity&rdquo; Written Defense (Row 3)</span>
    <span class="text-xs font-mono text-muted-foreground">Rubric Benchmark Comparisons</span>
  </div>

  <div class="space-y-3 text-xs">
    <div class="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
      <div class="flex items-center justify-between mb-1">
        <strong class="text-teal-800 dark:text-teal-300">Authentic Student Defense (Full Credit):</strong>
        <span class="text-[11px] font-bold text-teal-700 dark:text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded">Row 3 Point Earned</span>
      </div>
      <p class="italic text-foreground/90 m-0">
        &ldquo;Without the <code>highScores</code> list, I would have to create 5 separate variables (<code>score1</code>, <code>score2</code>, <code>score3</code>, <code>score4</code>, <code>score5</code>). In <code>checkEligibility</code>, I would need 5 separate conditional statements instead of one loop. If I expanded to 100 high scores, my code would require 100 variables.&rdquo;
      </p>
    </div>

    <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
      <div class="flex items-center justify-between mb-1">
        <strong class="text-amber-800 dark:text-amber-300">Flawed / Vague Student Response (No Point):</strong>
        <span class="text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded">No Point</span>
      </div>
      <p class="italic text-foreground/90 m-0">
        &ldquo;The list manages complexity because it makes my code look neat and organized, and without it my program wouldn't work.&rdquo; (Fails to articulate specific architectural alternative).
      </p>
    </div>

    <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
      <div class="flex items-center justify-between mb-1">
        <strong class="text-rose-800 dark:text-rose-300">AI-Generated Boilerplate (Outsourced / Cheating):</strong>
        <span class="text-[11px] font-bold text-rose-700 dark:text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded">Integrity Flag</span>
      </div>
      <p class="italic text-foreground/90 m-0">
        &ldquo;The list abstraction encapsulates data encapsulation and enhances modular extensibility across scalable runtime environments, minimizing memory overhead.&rdquo; (Generic CS platitude disconnected from concrete code logic).
      </p>
    </div>
  </div>
</div>

<p>
  Teachers should audit whether the response provides a <strong>concrete counter-factual scenario</strong>: describing exactly how many scalar variables, repetitive conditional blocks, or broken features would occur without the list.
</p>

<h3>Step 3: Writing Process Telemetry and Keystroke Dynamics (Essay Playback™)</h3>

<p>
  When an educator observes a written response with suspicious vocabulary or boilerplate complexity claims, <strong>Checkmark&rsquo;s Essay Playback™</strong> provides conclusive, timestamped writing process evidence.
</p>

<!-- Telemetry Signals Card -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Essay Playback™: Authentic vs. AI Telemetry Signals</span>
    <span class="text-xs font-mono text-muted-foreground">Keystroke Telemetry Profiles</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="p-4 rounded-xl bg-muted/40 border border-border">
      <h4 class="font-bold text-foreground mb-2">Authentic Student Drafting</h4>
      <ul class="space-y-1.5 list-disc pl-4 text-muted-foreground m-0">
        <li>Intermittent drafting bursts (25–45 WPM).</li>
        <li>Frequent cognitive pauses (10–60s) between sentences as student switches tabs to check code line numbers.</li>
        <li>Active backspacing, self-correction of parameter names, and iterative refinement.</li>
      </ul>
    </div>

    <div class="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5">
      <h4 class="font-bold text-rose-700 dark:text-rose-300 mb-2">External AI Paste</h4>
      <ul class="space-y-1.5 list-disc pl-4 text-muted-foreground m-0">
        <li>0 seconds composing time in the editor.</li>
        <li>A single clipboard paste event depositing 250 words of WR 4 in 0.1 seconds.</li>
        <li>Preserved clipboard inspector reveals full external prompt and ChatGPT payload.</li>
      </ul>
    </div>

    <div class="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
      <h4 class="font-bold text-amber-700 dark:text-amber-300 mb-2">Manual Transcription</h4>
      <ul class="space-y-1.5 list-disc pl-4 text-muted-foreground m-0">
        <li>Unnatural, robotic typing velocity (75–90 WPM) with zero composing pauses.</li>
        <li>Zero variable-naming hesitations and zero substantive revisions.</li>
        <li>Indicates mechanical retyping directly off a secondary smartphone screen.</li>
      </ul>
    </div>
  </div>
</div>

<!-- Checkmark Process Telemetry Inspector Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-400">Checkmark Writing Process Telemetry Inspector (AP CSP Written Response)</span>
    <span class="text-[11px] bg-teal-900/60 text-teal-300 px-2 py-0.5 rounded font-mono">Session #AP-CSP-4091</span>
  </div>
  
  <div class="space-y-4">
    <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-sans space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-slate-300">Session Overview: <strong class="text-teal-400">Total Active Composing Time: 42m 15s</strong></span>
        <span class="text-emerald-400 font-semibold font-mono">2,140 Keystroke Events</span>
      </div>
      <div class="text-slate-400 text-xs">
        External Paste Events: <span class="text-emerald-400 font-semibold">0 Detected (100% Native In-Editor Drafting)</span> • Avg Speed: <span class="text-slate-200">32 WPM (Natural Reflective Cadence)</span>
      </div>
    </div>

    <!-- Scrubber bar -->
    <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
      <div class="bg-teal-500 w-1/5"></div>
      <div class="bg-amber-500 w-1/6"></div>
      <div class="bg-teal-500 w-1/4"></div>
      <div class="bg-indigo-500 w-1/5"></div>
      <div class="bg-emerald-500 w-1/6"></div>
    </div>

    <div class="flex items-center justify-between text-xs text-slate-400 font-mono">
      <span>[00:00] Drafts WR 1</span>
      <span>[07:45] 45s Code Tab Switch</span>
      <span>[18:30] WR 2 Complexity Trace</span>
      <span>[29:10] WR 4 Parameter Fix</span>
      <span>[42:15] Final Review</span>
    </div>

    <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-sans space-y-2">
      <div class="text-teal-300 font-semibold uppercase text-xs">Telemetry Signal Interpretation:</div>
      <ul class="space-y-1.5 list-disc pl-4 text-slate-300 m-0">
        <li><strong>Code-Referencing Pauses:</strong> Multiple 30-to-60 second pauses where no typing occurs. In CS classrooms, these correlate directly with the student switching between the editor and their code IDE to verify line numbers and variable names.</li>
        <li><strong>Micro-Revisions:</strong> Student types <code>minimum_cutoff</code>, backspaces 14 times, and replaces it with <code>minimum_threshold</code> to match their Python function header. Proof of authentic cognitive binding.</li>
        <li><strong>Zero External Clipboard Ingestion:</strong> Text was not generated in an external LLM tab and pasted.</li>
      </ul>
    </div>
  </div>
</div>

<h3>Step 4: The Restorative &ldquo;Live Code Tracing&rdquo; Conference Protocol</h3>

<p>
  When writing telemetry indicates that a student outsourced their Create PT written responses, educators should avoid adversarial confrontations. In alignment with Checkmark&rsquo;s philosophy&mdash;<strong>&ldquo;Stop guessing, start trusting&rdquo;</strong>&mdash;the goal is to transform the incident into a high-impact learning conference.
</p>

<!-- Restorative Conference Protocol Card -->
<div class="my-8 rounded-2xl border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-4">
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white uppercase tracking-wider">
      Restorative Five-Stage &ldquo;Live Code Tracing&rdquo; Conference Protocol
    </span>
  </div>

  <div class="space-y-4 text-xs">
    <div class="rounded-xl border border-teal-500/20 bg-background/80 p-3.5">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">Stage 1: Welcoming &amp; Code Validation</strong>
      <p class="text-muted-foreground m-0 italic">&ldquo;Thanks for meeting with me. Today we're reviewing your Create PT submission. Your App Lab game looks fantastic. Let's talk about the algorithms powering it.&rdquo;</p>
    </div>

    <div class="rounded-xl border border-teal-500/20 bg-background/80 p-3.5">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">Stage 2: Independent Code Tracing (Whiteboard / Screen)</strong>
      <p class="text-muted-foreground m-0 italic">&ldquo;Take a look at lines 25–40 in your code PDF. Walk me through what happens step-by-step when <code>score</code> is 85.&rdquo; (Observe if student understands parameter passing).</p>
    </div>

    <div class="rounded-xl border border-teal-500/20 bg-background/80 p-3.5">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">Stage 3: Transparent Telemetry Review (No Accusations)</strong>
      <p class="text-muted-foreground m-0 italic">Open Checkmark Essay Playback on screen: &ldquo;When I look at your WR 4 response, I notice a 300-word paragraph pasted in one second that mentions 'memory heap allocation.' Can you tell me about how that explanation was written?&rdquo;</p>
    </div>

    <div class="rounded-xl border border-teal-500/20 bg-background/80 p-3.5">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">Stage 4: Restorative Reflection &amp; Coaching</strong>
      <p class="text-muted-foreground m-0 italic">Help the student recognize that while their code is good, the written response fails College Board criteria because it doesn't reflect their actual code logic.</p>
    </div>

    <div class="rounded-xl border border-teal-500/20 bg-background/80 p-3.5">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">Stage 5: In-Class Revision &amp; Authentic Resubmission</strong>
      <p class="text-muted-foreground m-0 italic">Allow the student 30 minutes in class to independently re-draft WR 2, WR 3, and WR 4 under direct observation, validating authentic mastery before final AP Digital Portfolio submission.</p>
    </div>
  </div>
</div>

<p>
  This restorative protocol protects student dignity, reinforces genuine computational concepts, and ensures that the final materials submitted to the College Board AP Digital Portfolio represent the student&rsquo;s authentic intellectual work.
</p>

<hr class="my-8 border-border" />

<h2>5. Checkmark Plagiarism: Purpose-Built Integrity for Secondary Computer Science</h2>

<p>
  Checkmark Plagiarism is engineered specifically to meet the evidentiary, pedagogical, and workflow requirements of 9th–12th grade computer science educators, department chairs, and district technology leaders.
</p>

<!-- Checkmark Capabilities Grid -->
<div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">1</span>
      <h4 class="text-sm font-bold text-foreground m-0">Passage-Level AI Confidence Sliders</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Rather than outputting a single, opaque whole-document percentage that panics teachers and parents, Checkmark underlines specific sentences and provides calibrated confidence cards. Distinguishes standard CS sentence frames from distinct AI blocks.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">2</span>
      <h4 class="text-sm font-bold text-foreground m-0">Patent-Pending Essay Playback™ (1x–8x)</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Watch the complete history of a student&rsquo;s written response session unfold like a video. Observe variable-naming hesitations, drafting pauses, revisions, and tab-switching rhythms in real time.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">3</span>
      <h4 class="text-sm font-bold text-foreground m-0">External Paste Inspector with Full Text Preservation</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      When text is pasted from an external window (such as an LLM interface or online forum), Checkmark captures the exact timestamp, character count, and full original clipboard text—even if the student later edits every single word.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">4</span>
      <h4 class="text-sm font-bold text-foreground m-0">Quote-Anchored AP CSP Rubric Autograding</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Evaluates student written responses directly against College Board Rows 1–6 criteria, generating draft scores and prose-anchored written justifications that cite exact student sentences. Teachers retain 100% editorial control.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">5</span>
      <h4 class="text-sm font-bold text-foreground m-0">Direct LMS Gradebook Passback</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      One-click synchronization pushes finalized scores and detailed feedback cards straight into <strong>Canvas SpeedGrader, Agilix Buzz, and Google Classroom</strong>, saving secondary CS teachers hours of manual entry.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">6</span>
      <h4 class="text-sm font-bold text-foreground m-0">FERPA and COPPA Zero-Training Compliance</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Student code and written responses are encrypted in transit and at rest and are <strong>never</strong> used to train public or proprietary AI models.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. Frequently Asked Questions (FAQ)</h2>

<!-- FAQ Cards Section -->
<div class="my-8 space-y-4">
  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">
      Q1: How does Checkmark prevent false AI flags on standard Computer Science terminology?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>A:</strong> Generic AI detectors evaluate text using statistical perplexity across general prose. In technical writing, domain-specific terms like <em>iteration</em>, <em>conditional</em>, <em>Boolean expression</em>, <em>traversal</em>, and <em>parameter</em> have naturally low perplexity, causing generic detectors to falsely flag honest student explanations. Checkmark utilizes <strong>passage-level calibrated confidence sliders</strong> specifically tuned to academic writing styles and domain lexicons. Rather than penalizing technical vocabulary, Checkmark evaluates sentence diversity, structure, and writing process telemetry (Essay Playback™) to verify authentic authorship.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">
      Q2: Can Essay Playback track student writing across both block-based and text-based coding platforms?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>A:</strong> Yes. Essay Playback operates directly within the writing environments where students compose their Create PT Written Responses and Personalized Project Reference documents—including Google Docs on 1:1 Chromebooks, Canvas LMS assignment editors, Agilix Buzz, and Microsoft Word. While the code itself is developed in platforms like Code.org App Lab, Scratch, Snap!, or Python, the written response telemetry captures the student's entire composition, editing, and reflection process.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">
      Q3: How should a high school teacher handle a student who used ChatGPT to debug code syntax?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>A:</strong> Under College Board policy, using generative AI for general concept exploration or debugging syntax errors is permitted—provided that the student explicitly documents and cites the AI tool in their program comments (listing the tool name, prompt, and date). However, AI is strictly prohibited from drafting the Written Responses. If Essay Playback reveals that the student wrote their own explanations of their code logic, the submission complies with integrity guidelines. If the written responses were pasted from an LLM, the teacher should initiate a restorative code tracing conference.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">
      Q4: How does Checkmark help teachers manage Create PT grading across 150+ students?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>A:</strong> Grading four written responses across 150 students represents 600 complex technical write-ups. Checkmark&rsquo;s <strong>quote-anchored AP CSP rubric autograder</strong> pre-evaluates submissions against Rows 1–6, drafting point recommendations and highlighting the exact student prose that fulfills or misses each criterion. Teachers review, adjust, and approve the grades in a fraction of the time, utilizing one-click LMS passback to sync finalized scores directly into Canvas, Buzz, or Google Classroom.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">
      Q5: What objective evidence should a department chair bring to a parent conference regarding a Create PT integrity issue?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>A:</strong> Rather than bringing an unexplainable commercial AI percentage score (which parents frequently dispute), department chairs and teachers can present Checkmark's comprehensive evidentiary dossier:
      <br /><br />
      1. The <strong>Essay Playback™ timeline</strong> showing the exact writing session (e.g., demonstrating a 0-second paste of a 300-word response).<br />
      2. The <strong>External Paste Inspector</strong> displaying the preserved clipboard text.<br />
      3. The <strong>Code-to-Commentary Concordance report</strong> highlighting discrepancies where the written response describes parameters or loops that do not exist in the student's actual code.
      <br /><br />
      This transparent, objective evidence shifts the conversation from subjective accusation to collaborative student support.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">
      Q6: Does Checkmark store or share student code submissions with AI companies?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>A:</strong> Absolutely not. Checkmark operates under strict <strong>FERPA and COPPA compliance</strong> guidelines. Student code, videos, and written responses are never sold, cached in public databases, or used to train general Large Language Models. All data is encrypted in transit and at rest within secure cloud infrastructure.
    </p>
  </div>

  <div class="p-5 rounded-2xl border border-border bg-card shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">
      Q7: How does writing process replay protect neurodivergent and non-native English speaking students?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>A:</strong> Non-native English speakers (ESL/ELL) and neurodivergent students often use distinctive grammar structures or compose in non-linear bursts, which generic AI detectors frequently misclassify as machine-generated text. Essay Playback protects these students by preserving their complete, authentic writing journey—showing the keystrokes, brainstorming pauses, dictionary lookups, and gradual sentence revisions that prove authentic human intellectual effort beyond any statistical doubt.
    </p>
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
      currentSlug="2026/8/how-high-school-ap-computer-science-principles-teachers-can-verify-authentic-authorship-in-create-performance-task-written-responses"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
