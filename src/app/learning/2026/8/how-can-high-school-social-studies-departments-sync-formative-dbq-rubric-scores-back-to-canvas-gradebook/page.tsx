import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can High School Social Studies Departments Sync Formative DBQ Rubric Scores Back to Canvas Gradebook? | Checkmark Plagiarism",
  description: "An authoritative guide for High School Social Studies Department Chairs, AP U.S. History (APUSH), AP European History, and AP World History teachers on synchronizing formative 7-point DBQ rubric evaluations, quote-anchored sourcing feedback, and keystroke integrity telemetry directly into Canvas LMS SpeedGrader via 1EdTech LTI 1.3 Advantage and Assignment and Grade Services (AGS 2.0).",
  keywords: [
    "AP DBQ rubric sync Canvas",
    "Document Based Question autograder",
    "Canvas SpeedGrader DBQ rubric",
    "APUSH DBQ rubric grading",
    "AP European History DBQ evaluation",
    "AP World History HIPP sourcing",
    "1EdTech LTI 1.3 Advantage AGS 2.0",
    "Canvas Assignment and Grade Services LineItem API",
    "Checkmark Plagiarism Essay Playback",
    "social studies formative assessment",
    "historical evidence quote anchoring",
    "high school history department rubric calibration",
    "FERPA zero training student data"
  ],
  openGraph: {
    images: [
      "/images/learning/how-can-high-school-social-studies-departments-sync-formative-dbq-rubric-scores-back-to-canvas-gradebook/featured.png",
      "/images/services/report-grading-view.png",
      "/images/services/report-rubric-tiles.png",
      "/images/services/report-paste-evidence.png"
    ],
  },
};

const meta = {
  title: "How Can High School Social Studies Departments Sync Formative DBQ Rubric Scores Back to Canvas Gradebook? | Checkmark Plagiarism",
  description: "An authoritative guide for High School Social Studies Department Chairs, AP U.S. History (APUSH), AP European History, and AP World History teachers on synchronizing formative 7-point DBQ rubric evaluations, quote-anchored sourcing feedback, and keystroke integrity telemetry directly into Canvas LMS SpeedGrader via 1EdTech LTI 1.3 Advantage and Assignment and Grade Services (AGS 2.0).",
  "opengraph-image": "/images/learning/how-can-high-school-social-studies-departments-sync-formative-dbq-rubric-scores-back-to-canvas-gradebook/featured.png",
  date: "08-19-2026",
  readTime: "~18 min read",
  category: "Social Studies Pedagogy",
  categories: ["Social Studies Pedagogy", "Rubric Autograding", "LMS Integration", "Canvas LMS", "AP History", "Teacher Guide", "Academic Integrity", "EdTech"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div class="my-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
    <p class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Executive Summary</p>
  </div>
  <p class="text-sm font-medium leading-relaxed">
    High school social studies departments face one of the most punishing grading bottlenecks in secondary education: evaluating complex Document-Based Questions (DBQs) and Long Essay Questions (LEQs) across 120 to 180 students per teacher. Under College Board AP standards (AP U.S. History, AP European History, AP World History) and state inquiry frameworks (such as the C3 Framework), scoring an authentic DBQ requires evaluating six multi-dimensional criteria totaling 7 points&mdash;auditing a defensible thesis with a line of reasoning, broad contextualization, two levels of document evidence, outside historical evidence, HIPP sourcing analysis (Historical Situation, Intended Audience, Purpose, Point of View), and complex historical synthesis. Manually reading, annotating, scoring, and typing individualized feedback across 150 essays consumes 35 to 45 hours per assessment, creating a 2-to-3-week grading lag that obliterates the formative learning cycle. <strong>Checkmark Plagiarism</strong> eliminates this bottleneck by uniting <strong>AI-assisted quote-anchored rubric evaluation</strong>, <strong>patent-pending Essay Playback™ writing telemetry</strong>, and <strong>1EdTech LTI 1.3 Advantage Assignment and Grade Services (AGS 2.0)</strong>. Checkmark parses complex 7-point AP rubrics via Abstract Syntax Trees (ASTs), extracts grounded textual evidence for each criterion, provides a 2-minute <strong>Pre-Flight Educator Review Console</strong>, and pushes discrete criterion sub-scores and rich quote-anchored feedback straight into Canvas LMS SpeedGrader rubrics without CSV exports or manual double-entry.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> empowers high school social studies departments and district humanities leaders by combining <a href="/services/autograder" class="text-teal-600 dark:text-teal-400 font-semibold underline">AI rubric autograding</a> with <a href="/services/writing-process" class="text-teal-600 dark:text-teal-400 font-semibold underline">Essay Playback™ keystroke replay</a>, <a href="/services/ai-detection" class="text-teal-600 dark:text-teal-400 font-semibold underline">passage-level AI detection</a>, <a href="/services/plagiarism-detection" class="text-teal-600 dark:text-teal-400 font-semibold underline">side-by-side plagiarism verification</a>, and native LTI 1.3 Advantage passback for <a href="/services/integrations/canvas-lms" class="text-teal-600 dark:text-teal-400 font-semibold underline">Canvas LMS</a> and <a href="/services/integrations/buzz-lms" class="text-teal-600 dark:text-teal-400 font-semibold underline">Agilix Buzz LMS</a>.</p>

<img src="/images/learning/how-can-high-school-social-studies-departments-sync-formative-dbq-rubric-scores-back-to-canvas-gradebook/featured.png" alt="Checkmark Plagiarism DBQ Autograding and Canvas Gradebook Sync Console" class="w-full rounded-2xl border border-border shadow-md my-8" />

<h2>1. The High School Social Studies Grading Dilemma: DBQs, Caseload Volume, and the Feedback Lag</h2>

<p>In secondary humanities education, the <strong>Document-Based Question (DBQ)</strong> represents the pinnacle of historical thinking and disciplinary literacy. Pioneered by the College Board for Advanced Placement (AP) history courses and widely adopted across state social studies frameworks (including the National Council for the Social Studies C3 Framework), the DBQ challenges students to move beyond passive factual recall. Students must act as apprentice historians: critically analyzing 5 to 7 conflicting primary and secondary sources, situating events within broad temporal trajectories, corroborating disparate accounts, interrogating authorial bias, and weaving historical evidence into a coherent, persuasive thesis.</p>

<p>However, the pedagogical promise of the DBQ is severely constrained by an institutional reality: <strong>the high school grading crunch</strong>.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    The High School Social Studies DBQ Grading Crunch &amp; Formative Lag
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="flex items-center justify-between mb-2">
        <span class="font-semibold text-teal-300 text-xs">Social Studies Teacher Caseload</span>
        <span class="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800">Volume</span>
      </div>
      <div class="text-xl font-bold text-white mb-1">120&ndash;175 Essays</div>
      <div class="text-xs text-slate-300 space-y-1">
        <div>&bull; 4&ndash;5 class sections per instructor</div>
        <div>&bull; 28&ndash;35 students per section</div>
        <div>&bull; 4&ndash;6 major DBQ/LEQ cycles per term</div>
        <div>&bull; Multiple preparations (e.g., APUSH + World)</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="flex items-center justify-between mb-2">
        <span class="font-semibold text-indigo-300 text-xs">7-Point AP DBQ Complexity</span>
        <span class="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">Depth</span>
      </div>
      <div class="text-xl font-bold text-white mb-1">6 Rubric Dimensions</div>
      <div class="text-xs text-slate-300 space-y-1">
        <div>&bull; 5&ndash;7 complex historical primary sources</div>
        <div>&bull; Deep HIPP sourcing (POV, Purpose, Audience)</div>
        <div>&bull; Outside historical evidence verification</div>
        <div>&bull; Synthesis &amp; complex understanding audit</div>
      </div>
    </div>
  </div>

  <div class="rounded-xl bg-rose-950/40 p-4 border border-rose-600/50 mb-4 text-center">
    <span class="text-xs font-bold uppercase tracking-wider text-rose-300">The 35-to-45-Hour Evaluation Bottleneck</span>
    <p class="text-xs text-slate-200 mt-1 mb-0">
      Manual review: 12&ndash;16 minutes per DBQ essay &bull; Grading 150 papers = 30&ndash;40 hours per cycle &bull; Severe evening and weekend cognitive burnout
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-amber-500/40">
      <div class="flex items-center justify-between mb-2">
        <span class="font-semibold text-amber-300 text-xs">The 2-to-3-Week Feedback Latency</span>
        <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">Pedagogical Loss</span>
      </div>
      <div class="text-xs text-slate-300 space-y-1">
        <div>&bull; Feedback arrives weeks after drafting</div>
        <div>&bull; Class has moved to a new historical era</div>
        <div>&bull; Formative revision cycle is broken</div>
        <div>&bull; Students repeat identical structural errors</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-cyan-500/40">
      <div class="flex items-center justify-between mb-2">
        <span class="font-semibold text-cyan-300 text-xs">Canvas SpeedGrader Bottleneck</span>
        <span class="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">Data Entry</span>
      </div>
      <div class="text-xs text-slate-300 space-y-1">
        <div>&bull; Clicking 7 individual criterion tiles per paper</div>
        <div>&bull; Manual calculation of rubric point totals</div>
        <div>&bull; Copy-pasting repetitive text comments</div>
        <div>&bull; High transcription error rates in gradebook</div>
      </div>
    </div>
  </div>
</div>

<h3>The Mathematics of Social Studies Teacher Burnout</h3>

<p>To understand why social studies departments struggle with writing turnaround, consider the mathematical burden on a typical high school history educator:</p>

<ul>
  <li><strong>Student Caseload:</strong> A public high school teacher managing 5 sections of AP U.S. History (APUSH), AP European History, or AP World History instructs <strong>140 to 175 students</strong>.</li>
  <li><strong>Reading &amp; Analytical Depth:</strong> A rigorous 7-point DBQ response spans 800 to 1,500 words. A teacher must evaluate whether the student used 6 documents correctly, check if outside historical evidence is temporally accurate, evaluate if at least 3 documents contain valid HIPP sourcing analysis, verify contextualization, and evaluate the thesis and complex understanding.</li>
  <li><strong>Evaluation Time per Paper:</strong> Doing justice to this multi-dimensional assessment requires <strong>12 to 16 minutes per student</strong> (including reading, marking rubric rows in SpeedGrader, and typing individualized diagnostic notes).</li>
</ul>

<div class="my-6 rounded-xl bg-card border border-border p-5 shadow-sm">
  <div class="flex items-center justify-between border-b border-border pb-3 mb-3">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Total Grading Time Equation</span>
    <span class="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-muted">Department Formula</span>
  </div>
  <p class="font-mono text-sm text-foreground text-center my-2 font-bold">
    150 students &times; 14 minutes = 2,100 minutes = 35.0 Hours
  </p>
  <p class="text-xs text-muted-foreground text-center m-0">
    When a teacher must invest 35 hours of intensive cognitive labor on top of daily lesson preparation, classroom instruction, and parent communications, grading inevitably bleeds across 2 to 3 weeks.
  </p>
</div>

<h3>The Destructive Impact of Formative Latency</h3>

<p>In writing pedagogy, <strong>feedback immediacy is directly correlated with skill acquisition</strong>. When a 10th-grade AP World History student writes a DBQ on the Columbian Exchange in late September but does not receive rubric scores or sourcing feedback until mid-October, the instructional moment has evaporated. By the time papers are returned:</p>

<ol>
  <li><strong>Curriculum Disconnect:</strong> The class has already transitioned into a subsequent historical unit (e.g., Gunpowder Empires or the Transatlantic Slave Trade).</li>
  <li><strong>Stifled Revision Opportunities:</strong> The student cannot apply corrective guidance&mdash;such as distinguishing between passive document summary and analytical argument&mdash;to immediate drafting revisions.</li>
  <li><strong>Error Replication:</strong> The teacher enters the next essay cycle with the exact same structural deficiencies persisting across the cohort.</li>
</ol>

<h3>The Canvas SpeedGrader Bottleneck</h3>

<p>Learning Management Systems like <strong>Canvas LMS</strong> provide robust gradebooks and rubric tools, but standard manual workflows create severe friction:</p>

<ul>
  <li><strong>Manual SpeedGrader Clicking:</strong> Teachers must open SpeedGrader, click through 6 to 7 individual criterion rows for every single student, manually select performance point bands, and type explanatory comments into small text boxes.</li>
  <li><strong>Rubric-to-Gradebook Disconnect:</strong> If teachers grade on external paper rubrics or local grading spreadsheets to speed up the process, they must spend hours transcribing numbers into Canvas, introducing data-entry errors.</li>
  <li><strong>Generic Comment Fatigue:</strong> By paper 40, teachers run out of stamina to type detailed sourcing explanations, resorting to brief, unhelpful remarks like <em>"More HIPP needed"</em> or <em>"Expand context."</em></li>
</ul>

<hr class="my-8 border-border" />

<h2>2. Deconstructing the 7-Point AP DBQ Assessment Architecture</h2>

<p>To design an automated rubric evaluation and synchronization system, we must examine the precise mechanics of the <strong>College Board 7-Point DBQ Rubric</strong> across APUSH, AP European History, and AP World History. Each point represents a distinct cognitive and historiographical competency.</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border font-sans">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Criterion</th>
        <th class="p-3">Max Pts</th>
        <th class="p-3">Core Historiographical Function</th>
        <th class="p-3">Common Student Failure Modes</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">
          <span class="inline-flex items-center gap-1.5 font-bold text-teal-600 dark:text-teal-400">
            <span class="h-2 w-2 rounded-full bg-teal-500"></span> Thesis / Claim
          </span>
        </td>
        <td class="p-3 font-mono font-bold text-foreground">1 pt</td>
        <td class="p-3">Responds to prompt with a historically defensible claim establishing a line of reasoning (in intro or conclusion).</td>
        <td class="p-3">&bull; Restates or paraphrases the prompt<br />&bull; Broad generalization with no roadmap<br />&bull; Split thesis with conflicting logic</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">
          <span class="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span> Contextualization
          </span>
        </td>
        <td class="p-3 font-mono font-bold text-foreground">1 pt</td>
        <td class="p-3">Accurately describes broader historical events, developments, or processes relevant to prompt (before/during/after).</td>
        <td class="p-3">&bull; Mere passing mention of a term<br />&bull; Temporal mismatch (wrong century)<br />&bull; Isolated facts with no link to topic</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">
          <span class="inline-flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400">
            <span class="h-2 w-2 rounded-full bg-indigo-500"></span> Document Evidence
          </span>
        </td>
        <td class="p-3 font-mono font-bold text-foreground">2 pts</td>
        <td class="p-3">
          <strong>1 pt:</strong> Accurately uses content of &ge;3 docs.<br />
          <strong>2 pts:</strong> Uses content of &ge;6 docs to <strong>SUPPORT AN ARGUMENT</strong>.
        </td>
        <td class="p-3">&bull; "Quote dumping" without argument<br />&bull; Misinterprets document meaning<br />&bull; Uses only 4&ndash;5 documents instead of 6<br />&bull; Summarizes docs in isolation</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">
          <span class="inline-flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-400">
            <span class="h-2 w-2 rounded-full bg-amber-500"></span> Outside Evidence
          </span>
        </td>
        <td class="p-3 font-mono font-bold text-foreground">1 pt</td>
        <td class="p-3">Provides specific, relevant historical evidence beyond the provided documents to support the argument.</td>
        <td class="p-3">&bull; Mentions vague concept ("economy")<br />&bull; Fact already mentioned in documents<br />&bull; Historical hallucination / factual error</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">
          <span class="inline-flex items-center gap-1.5 font-bold text-rose-600 dark:text-rose-400">
            <span class="h-2 w-2 rounded-full bg-rose-500"></span> Sourcing (HIPP)
          </span>
        </td>
        <td class="p-3 font-mono font-bold text-foreground">1 pt</td>
        <td class="p-3">For at least 3 documents, explains <strong>HOW or WHY</strong> the document's Historical Situation, Audience, Purpose, or POV is relevant.</td>
        <td class="p-3">&bull; "Laundry list" sourcing without reasoning<br />&bull; Identifies HIPP but ignores WHY/HOW<br />&bull; Only completes sourcing for 1&ndash;2 docs</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">
          <span class="inline-flex items-center gap-1.5 font-bold text-yellow-600 dark:text-yellow-400">
            <span class="h-2 w-2 rounded-full bg-yellow-500"></span> Complex Understanding
          </span>
        </td>
        <td class="p-3 font-mono font-bold text-foreground">1 pt</td>
        <td class="p-3">Demonstrates complex understanding via corroboration, qualification, contradiction, or analyzing multiple perspectives.</td>
        <td class="p-3">&bull; Simplistic "both sides" paragraph<br />&bull; Formulaic transition words only<br />&bull; Fails to weave nuance across essay</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Detailed Breakdown of the 6 DBQ Dimensions</h3>

<div class="my-6 space-y-4 font-sans text-xs">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center justify-between border-b border-border pb-2 mb-3">
      <span class="font-bold text-sm text-foreground flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-full bg-teal-500"></span> 1. Thesis / Claim (1 Point)
      </span>
      <span class="px-2 py-0.5 rounded bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 font-mono font-semibold">1 pt max</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
      <div>
        <strong class="text-foreground">The Standard:</strong> The response must present a historically defensible thesis or claim that establishes a clear line of reasoning located in either the introduction or the conclusion.
      </div>
      <div>
        <strong class="text-rose-600 dark:text-rose-400">Pedagogical Challenge:</strong> Students often write broad statements (<em>"The American Revolution had many political and economic impacts"</em>), failing to establish an analytical line of reasoning (<em>"Although the American Revolution fostered political democratization through expanded state constitutions, it fundamentally preserved economic stratification by protecting agrarian property hierarchies and enslavement"</em>).
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center justify-between border-b border-border pb-2 mb-3">
      <span class="font-bold text-sm text-foreground flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span> 2. Contextualization (1 Point)
      </span>
      <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-mono font-semibold">1 pt max</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
      <div>
        <strong class="text-foreground">The Standard:</strong> The response must accurately describe a broader historical context relevant to the prompt spanning processes before, during, or continuing after the time frame.
      </div>
      <div>
        <strong class="text-rose-600 dark:text-rose-400">Pedagogical Challenge:</strong> Students frequently confuse background fluff with true contextualization. Writing a single sentence mentioning that <em>"The Civil War happened before this"</em> does not earn credit; the student must explain structural conditions leading to the prompt's focus.
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center justify-between border-b border-border pb-2 mb-3">
      <span class="font-bold text-sm text-foreground flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-full bg-indigo-500"></span> 3. Evidence from Documents (2 Points)
      </span>
      <span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 font-mono font-semibold">2 pts max</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
      <div>
        <strong class="text-foreground">The Standard:</strong> 1 pt for describing &ge;3 documents; 2 pts for using &ge;6 documents to <strong>support an argument</strong>.
      </div>
      <div>
        <strong class="text-rose-600 dark:text-rose-400">Pedagogical Challenge:</strong> The leap from 1 point to 2 points is the greatest hurdle. Developing students summarize documents sequentially (<em>"Document 1 says... Document 2 says..."</em>). Advanced writers use documents as evidence to substantiate analytical claims.
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center justify-between border-b border-border pb-2 mb-3">
      <span class="font-bold text-sm text-foreground flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-full bg-amber-500"></span> 4. Evidence Beyond the Documents (1 Point)
      </span>
      <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-mono font-semibold">1 pt max</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
      <div>
        <strong class="text-foreground">The Standard:</strong> Uses at least one additional piece of specific, relevant historical evidence beyond the documents to support or qualify an argument.
      </div>
      <div>
        <strong class="text-rose-600 dark:text-rose-400">Pedagogical Challenge:</strong> The evidence must be specific (e.g., citing the <em>Embargo Act of 1807</em> or the <em>Ostend Manifesto</em>), not a generalized historical observation, and it must be actively connected to an argument.
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center justify-between border-b border-border pb-2 mb-3">
      <span class="font-bold text-sm text-foreground flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-full bg-rose-500"></span> 5. Sourcing / Historical Analysis (HIPP) (1 Point)
      </span>
      <span class="px-2 py-0.5 rounded bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-mono font-semibold">1 pt max</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
      <div>
        <strong class="text-foreground">The Standard:</strong> For &ge;3 documents, explains <strong>how or why</strong> the document's Historical Situation, Intended Audience, Purpose, or Point of View is relevant to an argument.
      </div>
      <div>
        <strong class="text-rose-600 dark:text-rose-400">Pedagogical Challenge:</strong> Students frequently name a sourcing element without explaining its significance. Simply stating <em>"The author is Thomas Jefferson, so his point of view is Anti-Federalist"</em> earns zero credit. The student must explain <em>why</em> Jefferson's point of view matters to the argument.
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center justify-between border-b border-border pb-2 mb-3">
      <span class="font-bold text-sm text-foreground flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-full bg-yellow-500"></span> 6. Complex Understanding / Synthesis (1 Point)
      </span>
      <span class="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300 font-mono font-semibold">1 pt max</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
      <div>
        <strong class="text-foreground">The Standard:</strong> Demonstrates a complex understanding of the historical development using evidence to corroborate, qualify, or modify an argument.
      </div>
      <div>
        <strong class="text-rose-600 dark:text-rose-400">Pedagogical Challenge:</strong> This point cannot be earned with a passing phrase. It requires sustained historical synthesis&mdash;such as exploring how an economic policy had diametrically opposite effects across regions, or tracing thematic continuity across eras.
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>3. The Interoperability Infrastructure: 1EdTech LTI 1.3 Advantage &amp; Canvas AGS 2.0</h2>

<p>To bridge the gap between AI-assisted DBQ analysis and the teacher's primary grading interface, social studies departments require enterprise-grade interoperability. Manually exporting CSV spreadsheets from third-party tools or copy-pasting feedback into Canvas is slow, prone to errors, and legally vulnerable.</p>

<p><strong>Checkmark Plagiarism</strong> integrates directly with Canvas LMS via the <strong>1EdTech Learning Tools Interoperability (LTI) 1.3 Advantage</strong> standard.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    1EdTech LTI 1.3 Advantage &amp; Canvas AGS 2.0 DBQ Passback Architecture
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700 space-y-3">
      <div class="flex items-center justify-between pb-2 border-b border-slate-700">
        <span class="font-bold text-sm text-cyan-300">Canvas LMS Environment</span>
        <span class="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">Host LMS</span>
      </div>
      <div class="rounded-lg bg-slate-900 p-3 border border-slate-750 text-xs space-y-1">
        <div class="font-semibold text-white">Canvas Assignment (DBQ)</div>
        <div class="text-slate-400">&bull; Embedded LTI 1.3 OIDC Launch</div>
        <div class="text-slate-400">&bull; 7-Point APUSH DBQ Submissions</div>
      </div>
      <div class="text-center text-slate-500 font-bold text-xs">&udarr; OIDC / OAuth 2.0 Secure Token Launch</div>
      <div class="rounded-lg bg-slate-900 p-3 border border-teal-500/50 text-xs space-y-1">
        <div class="font-semibold text-teal-300">Canvas SpeedGrader Gradebook</div>
        <div class="text-slate-300">&bull; Thesis: 1/1 pt &bull; Context: 1/1 pt</div>
        <div class="text-slate-300">&bull; Doc Evidence: 2/2 pts &bull; Outside Ev: 1/1 pt</div>
        <div class="text-slate-300">&bull; Sourcing (HIPP): 1/1 pt &bull; Complexity: 0/1 pt</div>
        <div class="text-slate-400">&bull; Formative Quote-Anchored Comment Stream</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-teal-500/50 space-y-3">
      <div class="flex items-center justify-between pb-2 border-b border-slate-700">
        <span class="font-bold text-sm text-teal-300">Checkmark Plagiarism Enterprise Core</span>
        <span class="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800">Evaluation Engine</span>
      </div>
      <div class="grid grid-cols-1 gap-2 text-xs">
        <div class="rounded bg-slate-900 p-2.5 border border-slate-700">
          <span class="font-semibold text-teal-300">1. AST Rubric Parser:</span> Ingests 7-pt AP rubric and maps 6 discrete nodes.
        </div>
        <div class="rounded bg-slate-900 p-2.5 border border-slate-700">
          <span class="font-semibold text-emerald-300">2. Grounded Evidence Extraction:</span> Verifies thesis reasoning, 6 doc citations, HIPP analysis, and outside facts.
        </div>
        <div class="rounded bg-slate-900 p-2.5 border border-slate-700">
          <span class="font-semibold text-indigo-300">3. Integrity Engine:</span> Keystroke Playback, 100% paste buffer, passage AI sliders.
        </div>
        <div class="rounded bg-slate-900 p-2.5 border border-teal-500">
          <span class="font-semibold text-cyan-300">4. Pre-Flight Educator Console:</span> 1-Click validation &amp; override before atomic passback.
        </div>
      </div>
    </div>
  </div>

  <div class="mt-5 pt-4 border-t border-slate-800 text-center text-xs text-teal-300 font-medium">
    &darr; <strong>1EdTech AGS 2.0 LineItem API:</strong> Atomic criterion synchronization directly updates Canvas SpeedGrader tiles and commentary in under 2 seconds.
  </div>
</div>

<h3>The Three Pillars of LTI 1.3 Advantage in Checkmark</h3>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">1</span>
      <h4 class="text-sm font-semibold text-foreground m-0">AGS 2.0 (LineItem API)</h4>
    </div>
    <p class="text-muted-foreground m-0">Binds discrete LineItem containers for each criterion of the 7-point DBQ rubric. Executes atomic grade passbacks populating individual criterion rows in Canvas SpeedGrader and pushing quote-anchored commentary.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold dark:bg-indigo-950 dark:text-indigo-300">2</span>
      <h4 class="text-sm font-semibold text-foreground m-0">NRPS 2.0 (Roster Sync)</h4>
    </div>
    <p class="text-muted-foreground m-0">Automates roster synchronization across complex high school schedules, period transfers, semester adds, and dual-credit portals, eliminating orphaned submissions.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold dark:bg-emerald-950 dark:text-emerald-300">3</span>
      <h4 class="text-sm font-semibold text-foreground m-0">Deep Linking 2.0</h4>
    </div>
    <p class="text-muted-foreground m-0">Enables department chairs to configure standardized DBQ assignments upstream with pre-configured 7-point rubrics and document collections, distributing them across all Canvas sections with 1 click.</p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>4. Comparison Matrix: Social Studies DBQ Evaluation Workflows</h2>

<p>To evaluate the efficiency and pedagogical impact of automated LTI 1.3 rubric synchronization, examine how different grading workflows compare across key departmental dimensions:</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border font-sans">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Architectural Dimension</th>
        <th class="p-3">Manual SpeedGrader Grading</th>
        <th class="p-3">Generic AI Chatbot / Extension</th>
        <th class="p-3">Checkmark LTI 1.3 Advantage Suite</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Grading Overhead (150 essays)</td>
        <td class="p-3 font-bold text-rose-600 dark:text-rose-400">35&ndash;45 hours (14 min/essay)</td>
        <td class="p-3">15&ndash;20 hours (manual copy-paste)</td>
        <td class="p-3 font-bold text-teal-600 dark:text-teal-400">4&ndash;5 hours (&lt;2 min review)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Canvas SpeedGrader Sync</td>
        <td class="p-3">Manual click-through on 7 rows</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">None (manual re-entry required)</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Instant Atomic AGS 2.0 Passback</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Criterion Granularity</td>
        <td class="p-3">Full (if teacher has stamina)</td>
        <td class="p-3">Monolithic summary score only</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Discrete sub-scores for all 6 criteria</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Evidence Grounding</td>
        <td class="p-3">Manual margin notes</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">Hallucinated quotes &amp; generic praise</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Direct quote-anchored student citations</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">HIPP Sourcing Extraction</td>
        <td class="p-3">Manual line-by-line reading</td>
        <td class="p-3">Often confuses summary with sourcing</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Automated detection of Author POV/Audience</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Writing Process Telemetry</td>
        <td class="p-3">None (static text only)</td>
        <td class="p-3">None</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Patent-Pending Essay Playback™ (1x&ndash;8x)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Paste Buffer Tracking</td>
        <td class="p-3">None</td>
        <td class="p-3">None</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">100% external paste preservation</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">FERPA &amp; Privacy Protection</td>
        <td class="p-3">Compliant (native Canvas)</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">High Risk (commercial LLM training)</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Zero-Retention, Zero Model Training</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>5. Checkmark's AI DBQ Autograding, Sourcing Engine &amp; Quote-Anchored Feedback</h2>

<p>Checkmark Plagiarism's DBQ evaluation engine is specifically tuned for historical argumentation and document analysis. Rather than evaluating text with generic generative heuristics, Checkmark employs <strong>Abstract Syntax Tree (AST) Rubric Parsing</strong> and <strong>Grounded Quote-Anchored Evidence Extraction</strong>.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Grounded Quote-Anchored Evidence Extraction in Action
  </div>

  <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700 mb-4">
    <div class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Student DBQ Text Excerpt (APUSH: Progressive Era Reform &amp; Federal Power)</div>
    <p class="text-xs text-slate-200 leading-relaxed font-serif italic border-l-2 border-teal-500 pl-3 m-0">
      &ldquo;<span class="bg-teal-900/60 text-teal-200 px-1 py-0.5 rounded">Although progressive reformers successfully expanded democratic participation through direct primaries and the 17th Amendment, their regulatory agenda fundamentally expanded federal executive power to stabilize corporate capitalism rather than dismantle it.</span> <span class="bg-emerald-900/60 text-emerald-200 px-1 py-0.5 rounded">As seen in Theodore Roosevelt's 1906 letter to Lincoln Steffens [Doc 2], the president argued that 'the man with the muckrake' threatened national stability by inciting radicalism without offering constructive governance.</span> <span class="bg-rose-900/60 text-rose-200 px-1 py-0.5 rounded">Roosevelt's purpose in this correspondence was to distance his administration from socialist critics while maintaining political leverage over moderate business leaders.</span> <span class="bg-amber-900/60 text-amber-200 px-1 py-0.5 rounded">Beyond these published critiques, the passage of the Meat Inspection Act and the Pure Food and Drug Act of 1906 institutionalized this regulatory balance by establishing federal oversight over meatpackers.</span>&rdquo;
    </p>
  </div>

  <div class="space-y-3 text-xs">
    <div class="rounded-lg bg-slate-800 p-3 border border-teal-500/40">
      <div class="flex items-center justify-between font-bold text-teal-300 mb-1">
        <span>&check; THESIS / CLAIM</span>
        <span class="font-mono bg-teal-950 px-2 py-0.5 rounded text-teal-300">1 / 1 PT</span>
      </div>
      <p class="text-slate-300 m-0"><strong>Line of Reasoning:</strong> Contrasts democratic political reform with federal corporate stabilization in introductory paragraph.</p>
    </div>

    <div class="rounded-lg bg-slate-800 p-3 border border-emerald-500/40">
      <div class="flex items-center justify-between font-bold text-emerald-300 mb-1">
        <span>&check; DOCUMENT EVIDENCE</span>
        <span class="font-mono bg-emerald-950 px-2 py-0.5 rounded text-emerald-300">2 / 2 PTS (6/6 Docs Sourced)</span>
      </div>
      <p class="text-slate-300 m-0"><strong>Sourced Document:</strong> Document 2 (Roosevelt to Steffens, 1906). Uses critique of muckrakers to substantiate corporate stabilization argument.</p>
    </div>

    <div class="rounded-lg bg-slate-800 p-3 border border-rose-500/40">
      <div class="flex items-center justify-between font-bold text-rose-300 mb-1">
        <span>&check; HIPP SOURCING ANALYSIS</span>
        <span class="font-mono bg-rose-950 px-2 py-0.5 rounded text-rose-300">1 / 1 PT (Doc 2 Sourced)</span>
      </div>
      <p class="text-slate-300 m-0"><strong>Sourcing Dimension:</strong> Purpose &amp; Political Context. Explains Roosevelt's intent to triangulate between radicalism and corporate elites.</p>
    </div>

    <div class="rounded-lg bg-slate-800 p-3 border border-amber-500/40">
      <div class="flex items-center justify-between font-bold text-amber-300 mb-1">
        <span>&check; EVIDENCE BEYOND THE DOCUMENTS</span>
        <span class="font-mono bg-amber-950 px-2 py-0.5 rounded text-amber-300">1 / 1 PT</span>
      </div>
      <p class="text-slate-300 m-0"><strong>Historical Entity:</strong> Meat Inspection Act &amp; Pure Food and Drug Act (1906). Directly substantiates institutionalization of federal regulatory oversight.</p>
    </div>
  </div>
</div>

<h3>The 4 Pillars of the Checkmark DBQ Engine</h3>

<ol>
  <li><strong>Abstract Syntax Tree (AST) Rubric Parsing:</strong> Ingests the official College Board 7-point DBQ rubric (or custom state standards) and constructs an internal semantic AST with strict mathematical evidence thresholds.</li>
  <li><strong>Grounded Quote-Anchored Evidence Extraction:</strong> Identifies thesis lines of reasoning, scans for direct and indirect document citations, validates HIPP sourcing justifications, and audits outside historical facts against prompt time boundaries.</li>
  <li><strong>The Pre-Flight Educator Review Console:</strong> Enforces a strict Teacher-in-the-Loop workflow. Teachers view highlighted textual anchors side-by-side with rubric recommendations, accepting or overriding scores in under 90 to 120 seconds per paper.</li>
  <li><strong>Instant Canvas SpeedGrader Sync:</strong> Triggers the LTI 1.3 AGS 2.0 passback pipeline, populating SpeedGrader rubric tiles and injecting rich diagnostic commentary into submission comments.</li>
</ol>

<img src="/images/services/report-rubric-tiles.png" alt="Checkmark DBQ Modular Rubric Tiles and Scoring Bands" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>6. Multi-Factor Academic Integrity Verification in Historical Inquiry</h2>

<p>In the era of ubiquitous generative AI, social studies departments face a dual integrity crisis:</p>

<ol>
  <li><strong>Unauthorized AI Generation:</strong> Students using LLMs to generate polished, superficial DBQ essays that synthesize documents without genuine student reading or cognitive struggle.</li>
  <li><strong>False Accusations Against Honest Writers:</strong> High-achieving AP students who write with formal, sophisticated syntax frequently trigger high false-positive AI scores on generic probabilistic detectors.</li>
</ol>

<p>Checkmark Plagiarism solves both problems by replacing black-box guessing with <strong>empirical writing process telemetry</strong>.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Checkmark 5-Pillar Multi-Factor Integrity Verification
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mb-4">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="font-bold text-teal-300 mb-2">1. Essay Playback™</div>
      <div class="space-y-1 text-slate-300">
        <div>&bull; 1x&ndash;8x playback scrubber</div>
        <div>&bull; Active drafting vs pause analysis</div>
        <div>&bull; Organic revision history tracking</div>
        <div>&bull; Visualizes drafting struggles</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="font-bold text-indigo-300 mb-2">2. Immutable Paste Buffer</div>
      <div class="space-y-1 text-slate-300">
        <div>&bull; 100% clipboard text preservation</div>
        <div>&bull; Tracks external paste injections</div>
        <div>&bull; "Jump-to-playback" direct link</div>
        <div>&bull; Distinguishes quotes from AI dumps</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="font-bold text-emerald-300 mb-2">3. Passage AI Sliders</div>
      <div class="space-y-1 text-slate-300">
        <div>&bull; Granular sentence evidence cards</div>
        <div>&bull; Perplexity &amp; burstiness metrics</div>
        <div>&bull; Honest &lt;150w N/A guardrail</div>
        <div>&bull; Eliminates false blanket flags</div>
      </div>
    </div>
  </div>

  <div class="rounded-xl bg-teal-950/50 p-4 border border-teal-500/60 text-center text-xs">
    <span class="font-bold text-teal-300 uppercase tracking-wider">Defensible Restorative Evidence Dossier</span>
    <p class="text-slate-300 mt-1 mb-0">
      Side-by-side plagiarism matching across billions of web pages &bull; Citation error differentiation &bull; Definitively proves student authorship ("receipts") &bull; Eliminates adversarial parent conferences
    </p>
  </div>
</div>

<div class="my-6 overflow-x-auto rounded-xl border border-border font-sans">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Student Submission State</th>
        <th class="p-3">Typical Generic AI Detector</th>
        <th class="p-3">Checkmark Multi-Factor Evidence</th>
        <th class="p-3">Adjudication Outcome</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Sophisticated Human Writing (APUSH Student)</td>
        <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-bold">88% AI (False Positive)</td>
        <td class="p-3">72 min active drafting, 14 backspaces on thesis, 0 pastes</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Exonerated instantly with receipts</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Transcribed AI Generation (Copied from Phone)</td>
        <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">14% AI (False Negative)</td>
        <td class="p-3">Transcription Alert: 0 composing pauses, 115 WPM robotic cadence</td>
        <td class="p-3 font-semibold text-rose-600 dark:text-rose-400">Flagged for educator review</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Pasted Study Guide Document Commentary</td>
        <td class="p-3 font-mono text-muted-foreground">0% AI (Missed Plagiarism)</td>
        <td class="p-3">Paste buffer captured 450w injection; match to AP forum analysis</td>
        <td class="p-3 font-semibold text-amber-600 dark:text-amber-400">Uncited source match flagged</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Protecting Honest Students: The Case of the Sophisticated AP Historian</h3>

<p>Consider a common scenario in an AP U.S. History class:</p>

<ul>
  <li><strong>The Incident:</strong> A student submits a 1,200-word DBQ on Reconstruction. The essay features mature phrasing: <em>"The Radical Republican legislative agenda was systematically undermined by the resurgence of Redeemer Bourbon Democrats and the judicial emasculation of the 14th Amendment in the Slaughterhouse Cases."</em></li>
  <li><strong>The False Flag:</strong> A generic commercial AI detector flags the paper as <em>"88% Likely AI Generated"</em> due to its low perplexity and elevated vocabulary.</li>
  <li><strong>The Checkmark Resolution:</strong> The department chair opens Checkmark's <a href="/services/writing-process" class="text-teal-600 dark:text-teal-400 font-semibold underline"><strong>Essay Playback™</strong></a>:
    <ol>
      <li>The timeline reveals <strong>72 minutes of active drafting</strong> on a district Chromebook.</li>
      <li>The teacher watches the student spend 8 minutes outlining thesis categories, pausing to consult primary sources, reordering topic sentences, and backspacing 14 times while refining the analysis of the <em>Slaughterhouse Cases</em>.</li>
      <li>The external paste buffer confirms <strong>zero external text injections</strong>.</li>
      <li>The student is instantly and definitively exonerated with undeniable empirical evidence.</li>
    </ol>
  </li>
</ul>

<img src="/images/services/report-paste-evidence.png" alt="Checkmark External Paste Telemetry and Keystroke Playback Replay View" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>7. Real-World History Department Case Studies</h2>

<div class="my-6 space-y-6 font-sans">
  <div class="rounded-2xl border border-teal-500/30 bg-card p-6 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
      <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Case Study 1: Suburban High School APUSH Department</span>
      <span class="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 text-xs font-semibold">Benchmark Sprint</span>
    </div>
    <div class="space-y-2 text-xs text-muted-foreground">
      <div><strong class="text-foreground">Setting:</strong> Large suburban high school with 3 AP U.S. History teachers managing 150 students across 6 sections.</div>
      <div><strong class="text-foreground">Challenge:</strong> Fall semester DBQ benchmarks took 3.5 weeks to return. Teachers experienced severe grading burnout, and score calibration varied widely (Teacher A's class average was 5.2/7, while Teacher B's was 3.4/7).</div>
      <div><strong class="text-foreground">Implementation:</strong> Deployed Checkmark LTI 1.3 Advantage integrated into Canvas. Teachers utilized AST rubric parsing and the Pre-Flight review console.</div>
      <div class="pt-2 border-t border-border text-foreground font-medium">
        <strong>Results:</strong> Departmental grading time dropped from <strong>38 hours per teacher to 7.5 hours</strong>. Formative DBQ feedback was synced to Canvas SpeedGrader within <strong>48 hours</strong> of submission. Inter-rater calibration across the three teachers reached <strong>94% agreement</strong> on benchmark anchor papers, and AP exam pass rates increased by 14% year-over-year.
      </div>
    </div>
  </div>

  <div class="rounded-2xl border border-indigo-500/30 bg-card p-6 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
      <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Case Study 2: AP European History Mid-Term Inquiry Calibration</span>
      <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 text-xs font-semibold">HIPP Mastery</span>
    </div>
    <div class="space-y-2 text-xs text-muted-foreground">
      <div><strong class="text-foreground">Setting:</strong> 4 sections of AP European History (110 students) tackling a complex DBQ on the Protestant Reformation and the German Peasants' War.</div>
      <div><strong class="text-foreground">Challenge:</strong> Over 60% of students historically missed the HIPP sourcing point due to superficial attribution. Teachers lacked the time to write individualized sourcing explanations for each of the 7 documents.</div>
      <div><strong class="text-foreground">Implementation:</strong> Checkmark's DBQ Sourcing Engine identified exact sentences where students attempted sourcing, generating targeted formative prompts (e.g., <em>"You identified Martin Luther's religious status, but explain how his dependence on the German princes influenced his condemnation of the peasants in Document 5"</em>).</div>
      <div class="pt-2 border-t border-border text-foreground font-medium">
        <strong>Results:</strong> 100% of students received quote-anchored sourcing feedback in Canvas SpeedGrader. On the subsequent Unit 4 DBQ, student attainment of the HIPP sourcing point rose from <strong>38% to 79%</strong>.
      </div>
    </div>
  </div>

  <div class="rounded-2xl border border-emerald-500/30 bg-card p-6 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
      <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Case Study 3: 10th-Grade World History DBQ Scaffolding for Emerging &amp; ELL Writers</span>
      <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-semibold">Inclusion &amp; Growth</span>
    </div>
    <div class="space-y-2 text-xs text-muted-foreground">
      <div><strong class="text-foreground">Setting:</strong> Comprehensive high school with 180 10th-grade World History students, including a 25% English Language Learner (ELL) population.</div>
      <div><strong class="text-foreground">Challenge:</strong> Students struggled with document evidence synthesis. Teachers needed a way to provide differentiated revision opportunities without doubling their grading workload.</div>
      <div><strong class="text-foreground">Implementation:</strong> Teachers used Checkmark for <strong>first-draft formative autograding</strong>. Checkmark evaluated the draft, highlighted missing document citations in green, and synced provisional rubric progress to Canvas. Students were given 48 hours to complete targeted revisions before final score lock.</div>
      <div class="pt-2 border-t border-border text-foreground font-medium">
        <strong>Results:</strong> 82% of emerging writers utilized the quote-anchored feedback to revise their drafts. Average document evidence scores increased from 0.8/2 to 1.7/2 across the cohort.
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. The 4-Phase Departmental DBQ Calibration and Synchronization Protocol</h2>

<p>To implement seamless DBQ autograding and Canvas synchronization across a social studies department, follow this structured <strong>4-Phase Protocol</strong>:</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    The 4-Phase Departmental DBQ Calibration &amp; Sync Protocol
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-teal-500/40">
      <div class="font-bold text-teal-300 mb-1">PHASE 1: PRE-SETUP</div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; Ingest 7-pt DBQ rubric</div>
        <div>&bull; Bind Canvas LineItem IDs</div>
        <div>&bull; Distribute via Deep Linking</div>
        <div>&bull; Set primary doc packet</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-indigo-500/40">
      <div class="font-bold text-indigo-300 mb-1">PHASE 2: DRAFTING</div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; In-class timed or take-home</div>
        <div>&bull; Real-time typing dynamics</div>
        <div>&bull; 100% paste buffer capture</div>
        <div>&bull; Live drafting session logging</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-emerald-500/40">
      <div class="font-bold text-emerald-300 mb-1">PHASE 3: REVIEW</div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; AST quote-anchored match</div>
        <div>&bull; 2-min teacher verification</div>
        <div>&bull; Override any rubric slider</div>
        <div>&bull; Add voice notes / edits</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-cyan-500/40">
      <div class="font-bold text-cyan-300 mb-1">PHASE 4: PASSBACK</div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; Atomic AGS 2.0 rubric sync</div>
        <div>&bull; SpeedGrader tiles updated</div>
        <div>&bull; Diagnostic summary comments</div>
        <div>&bull; PLC inquiry debrief</div>
      </div>
    </div>
  </div>
</div>

<h3>Phase 1: Pre-Assessment Rubric Ingestion &amp; Canvas LineItem Binding</h3>
<ol>
  <li><strong>Rubric Architecture Setup:</strong> In Checkmark, select the standardized College Board 7-point DBQ rubric (or upload your district's custom inquiry matrix).</li>
  <li><strong>LTI 1.3 Canvas Assignment Binding:</strong> Create the assignment in Canvas using the Checkmark External Tool link. Deep Linking 2.0 automatically maps the 6 rubric criteria to Canvas LineItem IDs.</li>
  <li><strong>Document Context Configuration:</strong> Upload or select the primary source document packet (Docs 1–7) so Checkmark's engine can cross-reference quotes and author attributions.</li>
</ol>

<h3>Phase 2: Formative Drafting &amp; Real-Time Telemetry Capture</h3>
<ol>
  <li><strong>In-Class Timed Write or Scaffolded Inquiry:</strong> Students compose their DBQ responses directly within the Checkmark-enabled Canvas editor, Google Docs, or Microsoft 365 Word.</li>
  <li><strong>Writing Telemetry Capture:</strong> Essay Playback™ logs every keystroke, drafting pause, revision cycle, and clipboard paste event in real time.</li>
</ol>

<h3>Phase 3: AI-Assisted Quote Extraction &amp; Pre-Flight Educator Calibration</h3>
<ol>
  <li><strong>Automated Evidence Extraction:</strong> Checkmark's engine processes submissions within seconds, color-coding Thesis, Document Evidence, Outside Evidence, HIPP Sourcing, and Complexity.</li>
  <li><strong>Departmental Calibration Sprint:</strong> In a 30-minute PLC (Professional Learning Community) meeting, teachers review 3 shared anchor papers in the Pre-Flight Console to norm expectations on borderline criteria (e.g., nuanced complexity vs. simple summary).</li>
  <li><strong>Individual Pre-Flight Review:</strong> Teachers review their class roster, spending 60 to 90 seconds per essay validating quote anchors, adjusting scores, or adding custom comments.</li>
</ol>

<h3>Phase 4: Atomic Canvas AGS 2.0 Passback &amp; Inquiry Reflection</h3>
<ol>
  <li><strong>One-Click Batch Sync:</strong> The teacher clicks <em>"Finalize &amp; Passback All Scores"</em>.</li>
  <li><strong>SpeedGrader Populated:</strong> Canvas SpeedGrader immediately displays criterion scores, total points, and rich diagnostic comments.</li>
  <li><strong>Data-Driven Inquiry Debrief:</strong> The teacher opens Checkmark's <strong>Classroom Analytics Dashboard</strong> to identify cohort-wide trends (e.g., <em>"65% of students missed Document 4 sourcing"</em>), guiding immediate targeted mini-lessons the next day.</li>
</ol>

<hr class="my-8 border-border" />

<h2>9. Step-by-Step Canvas LTI 1.3 Administrator Configuration Guide</h2>

<p>For School District EdTech Directors, Canvas Administrators, and Curriculum Coordinators, setting up Checkmark's LTI 1.3 Advantage integration is straightforward.</p>

<h3>Step 1: Register Developer Key in Canvas Admin Console</h3>
<ol>
  <li>Navigate to <strong>Canvas Admin</strong> &rarr; <strong>Developer Keys</strong> &rarr; <strong>+ Developer Key</strong> &rarr; <strong>+ LTI Key</strong>.</li>
  <li>Configure Key Settings:
    <ul>
      <li><strong>Key Name:</strong> Checkmark Plagiarism &amp; DBQ Autograder</li>
      <li><strong>Owner Email:</strong> admin@yourdistrict.k12.st.us</li>
      <li><strong>Redirect URIs:</strong> https://api.checkmarkplagiarism.com/lti/v1p3/launch</li>
      <li><strong>Target Link URI:</strong> https://app.checkmarkplagiarism.com/lti/launch</li>
      <li><strong>OpenID Connect Initiation Url:</strong> https://api.checkmarkplagiarism.com/lti/v1p3/auth</li>
    </ul>
  </li>
</ol>

<h3>Step 2: Configure LTI 1.3 JSON Configuration Schema</h3>
<p>Paste the following standardized 1EdTech LTI 1.3 Advantage configuration into Canvas:</p>

<pre class="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs overflow-x-auto font-mono"><code>{
  "title": "Checkmark Plagiarism & DBQ Autograder",
  "scopes": [
    "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem",
    "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly",
    "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly",
    "https://purl.imsglobal.org/spec/lti-ags/scope/score",
    "https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly"
  ],
  "extensions": [
    {
      "platform": "canvas.instructure.com",
      "privacy_level": "public",
      "settings": {
        "text": "Checkmark DBQ Grader",
        "placements": [
          {
            "placement": "assignment_selection",
            "message_type": "LtiDeepLinkingRequest",
            "target_link_uri": "https://app.checkmarkplagiarism.com/lti/deep_link"
          },
          {
            "placement": "homework_submission",
            "message_type": "LtiResourceLinkRequest",
            "target_link_uri": "https://app.checkmarkplagiarism.com/lti/submission"
          }
        ]
      }
    }
  ]
}</code></pre>

<h3>Step 3: AGS 2.0 Rubric LineItem Passback Payload Example</h3>
<p>When Checkmark passes back 7-point DBQ scores to the Canvas LineItem API, it transmits a structured payload formatted as follows:</p>

<pre class="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs overflow-x-auto font-mono"><code>{
  "timestamp": "2026-08-19T14:32:00.000Z",
  "scoreGiven": 6.0,
  "scoreMaximum": 7.0,
  "comment": "### APUSH DBQ Rubric Evaluation (Checkmark Formative Engine)\n- **🔵 Thesis / Claim (1/1):** Historically defensible thesis establishing line of reasoning contrasting regulatory power with democratic reform.\n- **🟢 Contextualization (1/1):** Accurate contextualization of Gilded Age corporate monopolies and political machines.\n- **🟣 Document Evidence (2/2):** Accurately cited and supported argument using 6/6 documents.\n- **🟠 Outside Evidence (1/1):** Specific discussion of the Meat Inspection Act (1906).\n- **🔴 Sourcing / HIPP (1/1):** Accurate POV and Purpose analysis for Docs 2, 4, and 5.\n- **🟡 Complex Understanding (0/1):** Essay presents a strong linear argument but lacks explicit corroboration across contrasting historical eras.",
  "activityProgress": "Completed",
  "gradingProgress": "FullyGraded",
  "userId": "948271"
}</code></pre>

<img src="/images/services/report-grading-view.png" alt="Checkmark Autograding Report View and SpeedGrader Synchronization Console" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>10. Enterprise Data Privacy, FERPA Compliance &amp; Historiographical Ethics</h2>

<p>Social studies departments handle student essays exploring sensitive historical, political, and cultural topics. School districts must ensure that technology vendors uphold the highest standards of data security and intellectual property protection.</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">&check;</span>
      <h4 class="text-sm font-semibold text-foreground m-0">Zero Model Training</h4>
    </div>
    <p class="text-muted-foreground m-0">Checkmark Plagiarism <strong>never</strong> uses student writing, historical essays, or teacher feedback to train, fine-tune, or calibrate public or commercial AI models. Student intellectual property remains 100% sovereign.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold dark:bg-indigo-950 dark:text-indigo-300">&check;</span>
      <h4 class="text-sm font-semibold text-foreground m-0">FERPA &amp; COPPA Compliant</h4>
    </div>
    <p class="text-muted-foreground m-0">All student records, rosters (via NRPS 2.0), and grades (via AGS 2.0) are encrypted in transit (TLS 1.3) and at rest (AES-256) in strict compliance with FERPA (34 CFR &sect; 99.31) and state student privacy regulations.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold dark:bg-emerald-950 dark:text-emerald-300">&check;</span>
      <h4 class="text-sm font-semibold text-foreground m-0">Educator-Only Visibility</h4>
    </div>
    <p class="text-muted-foreground m-0">Integrity telemetry and AI confidence indicators are strictly visible to educators. Checkmark prevents unwarranted accusations by providing transparent evidence dossiers rather than punitive scores.</p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>11. Frequently Asked Questions (FAQ)</h2>

<div class="my-6 space-y-4 font-sans text-xs">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h4 class="text-sm font-semibold text-foreground mb-2">1. How does Checkmark pass individual DBQ criterion points (Thesis, Context, Sourcing) into Canvas SpeedGrader rather than just one overall score?</h4>
    <p class="text-muted-foreground m-0">Checkmark utilizes <strong>1EdTech LTI 1.3 Assignment and Grade Services (AGS 2.0)</strong> and Canvas LineItem APIs. Rather than passing a single decimal score, Checkmark binds each row of the 7-point DBQ rubric to a discrete sub-line item. When the teacher approves the evaluation in the Pre-Flight Console, Checkmark populates the individual rubric tiles in SpeedGrader and pushes formatted criterion rationales into the submission comments.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h4 class="text-sm font-semibold text-foreground mb-2">2. How does Checkmark distinguish between legitimate outside historical evidence and uncredited copying or document hallucination?</h4>
    <p class="text-muted-foreground m-0">Checkmark's engine cross-references historical proper nouns and concepts against both the provided document packet and its comprehensive historical knowledge ontology. If a student mentions the <em>Compromise of 1877</em> in a Reconstruction DBQ, Checkmark verifies that this event is not mentioned in Documents 1–7, confirms its historical accuracy to the prompt's time frame, and evaluates whether it is syntactically connected to an argumentative warrant.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h4 class="text-sm font-semibold text-foreground mb-2">3. Can teachers modify, override, or add custom notes to the AI-generated DBQ rubric scores before syncing to Canvas?</h4>
    <p class="text-muted-foreground m-0">Yes. Checkmark enforces a strict <strong>Teacher-in-the-Loop</strong> model. The Pre-Flight Review Console presents all AI evaluations as provisional suggestions. Teachers can adjust point values up or down with a single click, type personalized notes, or completely override any criterion before scores are transmitted to Canvas.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h4 class="text-sm font-semibold text-foreground mb-2">4. How does Checkmark handle revised College Board DBQ rubrics or custom state social studies inquiry standards (e.g., C3 Framework)?</h4>
    <p class="text-muted-foreground m-0">Checkmark's AST Rubric Parser accepts any standard rubric matrix. Teachers can select pre-built College Board rubrics for APUSH, AP Euro, and AP World History, import state-specific matrices (such as Texas TEKS, New York Regents, or California History Frameworks), or build custom department rubrics directly in the application.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h4 class="text-sm font-semibold text-foreground mb-2">5. What happens if a student writes their DBQ in Google Docs or Microsoft Word instead of Canvas directly?</h4>
    <p class="text-muted-foreground m-0">Checkmark provides native extensions and integrations for <strong>Google Docs</strong> and <strong>Microsoft 365 Word</strong>. Students can compose in their preferred word processor while Checkmark captures complete keystroke dynamics, revision history, and paste buffers, seamlessly passing the submission and telemetry into Canvas.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h4 class="text-sm font-semibold text-foreground mb-2">6. How does Essay Playback™ protect AP History students who write with formal, sophisticated prose from false AI accusations?</h4>
    <p class="text-muted-foreground m-0">Generic AI detectors frequently misclassify sophisticated, elevated vocabulary and structured syntax as AI-generated text. Checkmark's patent-pending <strong>Essay Playback™</strong> records the student's authentic temporal writing session. Teachers can replay the drafting process at 1x to 8x speed to observe natural composing pauses, sentence revisions, and outlining, providing definitive, tamper-proof proof of authorship.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h4 class="text-sm font-semibold text-foreground mb-2">7. How does Checkmark ensure student essay data is not used to train AI models or shared across commercial databases?</h4>
    <p class="text-muted-foreground m-0">Checkmark operates under a strict <strong>Zero-Retention and Zero-Training Guarantee</strong>. Student essays are processed in isolated, encrypted memory containers solely for the purpose of evaluation and integrity verification. Submissions are never added to public LLM training corpuses or sold to third parties.</p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>12. Conclusion: Stop Guessing, Start Trusting in Social Studies Writing</h2>

<p>The Document-Based Question is one of the most powerful tools in modern education for cultivating critical thinking, evidence evaluation, and historical literacy. But when educators are crushed by 35-hour grading sprints and forced into manual SpeedGrader entry, the formative cycle breaks.</p>

<p>By uniting <strong>AI-assisted quote-anchored rubric evaluation</strong>, <strong>patent-pending Essay Playback™ writing telemetry</strong>, and <strong>1EdTech LTI 1.3 Advantage Canvas synchronization</strong>, Checkmark Plagiarism restores the promise of social studies education:</p>

<ul>
  <li><strong>Eliminating the 35-Hour Grading Crunch:</strong> Reducing grading turnaround from 3 weeks to 48 hours while maintaining rigorous human oversight.</li>
  <li><strong>Deepening Formative Feedback:</strong> Providing students with quote-anchored justifications for every thesis, document, and sourcing point.</li>
  <li><strong>Protecting Academic Integrity with Empathy:</strong> Exonerating honest students through authentic keystroke replay and eliminating black-box guesswork.</li>
</ul>

<div class="my-8 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6 text-center">
  <h3 class="text-lg font-bold text-foreground mb-2">Empower Your Social Studies Department with Checkmark Plagiarism</h3>
  <p class="text-xs text-muted-foreground max-w-xl mx-auto mb-4">
    Ready to eliminate DBQ grading bottlenecks, standardize rubric calibration, and sync quote-anchored feedback straight into Canvas SpeedGrader?
  </p>
  <div class="flex flex-wrap justify-center gap-3">
    <a href="/contact" class="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-teal-600 text-white hover:bg-teal-700 shadow-sm">
      Request Department Demo
    </a>
    <a href="/services/integrations/canvas-lms" class="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-muted text-foreground hover:bg-muted/80 border border-border">
      Explore Canvas Integration
    </a>
  </div>
</div>
`;

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
};

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const refValue = typeof resolvedSearchParams?.ref === 'string' ? resolvedSearchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/how-can-high-school-social-studies-departments-sync-formative-dbq-rubric-scores-back-to-canvas-gradebook"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
