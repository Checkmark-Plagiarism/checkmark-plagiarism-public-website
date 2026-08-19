# -*- coding: utf-8 -*-
import os
import json
import gspread

target_dir = os.path.join(
    "src", "app", "learning", "2026", "8",
    "how-can-high-school-speech-and-debate-coaches-use-rubric-autograding-to-provide-objective-feedback-on-written-oratory-drafts"
)
os.makedirs(target_dir, exist_ok=True)
target_path = os.path.join(target_dir, "page.tsx")

page_content = """import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can High School Speech and Debate Coaches Use Rubric Autograding to Provide Objective Feedback on Written Oratory Drafts? | Checkmark Plagiarism",
  description: "An authoritative guide for High School Speech and Debate coaches, Forensics directors, and AP English Language teachers on using Checkmark's AI-assisted quote-anchored rubric autograding, pre-flight moderation console, and patent-pending Essay Playback™ writing telemetry to deliver rapid, objective, and formative feedback on written oratory manuscripts before competitive weekend tournaments.",
  keywords: [
    "speech and debate rubric autograding",
    "forensics speech coaching",
    "NSDA original oratory feedback",
    "quote-anchored rubric grading",
    "competitive speech manuscript scoring",
    "persuasive speech evaluation",
    "informative speaking rubrics",
    "Essay Playback keystroke dynamics",
    "Checkmark Plagiarism",
    "Canvas SpeedGrader speech rubrics",
    "speech draft evaluation",
    "forensic speech competition"
  ],
  openGraph: {
    images: ["/images/learning/how-can-high-school-speech-and-debate-coaches-use-rubric-autograding-to-provide-objective-feedback-on-written-oratory-drafts/featured.png"],
  },
};

export const meta = {
  title: "How Can High School Speech and Debate Coaches Use Rubric Autograding to Provide Objective Feedback on Written Oratory Drafts? | Checkmark Plagiarism",
  description: "An authoritative guide for High School Speech and Debate coaches, Forensics directors, and AP English Language teachers on using Checkmark's AI-assisted quote-anchored rubric autograding, pre-flight moderation console, and patent-pending Essay Playback™ writing telemetry to deliver rapid, objective, and formative feedback on written oratory manuscripts before competitive weekend tournaments.",
  "opengraph-image": "/images/learning/how-can-high-school-speech-and-debate-coaches-use-rubric-autograding-to-provide-objective-feedback-on-written-oratory-drafts/featured.png",
  date: "08-18-2026",
  readTime: "~16 min read",
  category: "Rubric Autograding",
  categories: ["Rubric Autograding", "Speech and Debate", "Forensics", "Teacher Guide", "EdTech", "Academic Integrity", "Pedagogy"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white">
      Executive Summary
    </span>
  </div>
  <p class="text-foreground font-medium leading-relaxed mb-3">
    High school Speech and Debate (Forensics) coaches, team directors, and AP English Language educators face an acute weekly assessment bottleneck: evaluating 30 to 60 dense, 1,000-to-1,500-word written manuscripts across Original Oratory (OO), Informative Speaking (INFO), and Persuasive Speaking ahead of weekend invitational tournaments. Compounded by demanding logistical burdens—managing Tabroom.com rosters, hiring judges, arranging transportation, and supervising live practice rounds—coaches often run out of hours to provide the granular, line-by-line structural feedback novice speakers need to build competitive rhetorical architecture.
  </p>
  <p class="text-foreground font-medium leading-relaxed m-0">
    Under extreme deadline pressure, students increasingly turn to generative AI tools, producing superficially polished, formulaic drafts that lack authentic personal vulnerability, localized stakes, or dynamic rhetorical devices (such as anaphora, chiasmus, and antithesis). <strong>Checkmark Plagiarism</strong> resolves this coaching bottleneck through <strong>AI-Assisted Quote-Anchored Rubric Autograding and Writing Process Telemetry</strong>. By parsing competitive speech rubrics (including National Speech & Debate Association [NSDA] ballot criteria and state forensics standards) via Abstract Syntax Trees (ASTs), automatically extracting verbatim sentence-level evidence for every rhetorical criterion, providing a 3-to-5-minute <strong>Pre-Flight Coach Review Console</strong>, and streaming verified scores into Canvas SpeedGrader, Buzz LMS, or Google Classroom via 1EdTech LTI 1.3 Advantage, Checkmark reduces manuscript review time by up to 80%. Paired with <strong>patent-pending Essay Playback™</strong> (keystroke dynamics, 1x–8x replay, and 100% paste buffer preservation), coaches can deliver transformative structural coaching while safeguarding authentic student expression.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> empowers high school Speech and Debate directors, forensics coaches, and rhetoric teachers by combining <a href="/services/autograder" class="text-teal-600 dark:text-teal-400 font-semibold underline">AI rubric autograding</a> with <a href="/services/writing-process" class="text-teal-600 dark:text-teal-400 font-semibold underline">writing process telemetry</a>, <a href="/services/ai-detection" class="text-teal-600 dark:text-teal-400 font-semibold underline">passage-level AI detection</a>, <a href="/services/plagiarism-detection" class="text-teal-600 dark:text-teal-400 font-semibold underline">side-by-side plagiarism matching</a>, and seamless LMS integration for <a href="/services/integrations/canvas-lms" class="text-teal-600 dark:text-teal-400 font-semibold underline">Canvas LMS</a> and <a href="/services/integrations/buzz-lms" class="text-teal-600 dark:text-teal-400 font-semibold underline">Agilix Buzz LMS</a>.</p>

<img src="/images/learning/how-can-high-school-speech-and-debate-coaches-use-rubric-autograding-to-provide-objective-feedback-on-written-oratory-drafts/featured.png" alt="Forensics Coach Dashboard featuring Checkmark AI Quote-Anchored Rubric Feedback Cards and Competitive Oratory Manuscript Evaluation" class="w-full rounded-2xl border border-border shadow-md my-8" />

<h2>1. The High-Stakes Forensics Assessment Crunch &amp; Coaching Bottleneck</h2>

<p>Competitive high school Speech and Debate (Forensics) represents one of the most rigorous co-curricular academic arenas in secondary education. Unlike traditional classroom essay assignments with multi-week turnaround windows, competitive speech operates on an unrelenting weekly tournament cycle. From early autumn invitationals through state qualifiers and the National Speech &amp; Debate Association (NSDA) National Tournament in June, student competitors continuously write, refine, memorize, and deliver 10-minute original speeches.</p>

<p>A standard competitive speech manuscript—whether an <strong>Original Oratory (OO)</strong>, an <strong>Informative Speaking (INFO)</strong> piece, or a <strong>Persuasive / Expository Speech</strong>—averages between 1,000 and 1,500 words. A typical forensics squad may have anywhere from 20 to over 60 speech competitors, all submitting updated drafts in the days leading up to registration deadlines.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    The Competitive Forensics Coaching Bottleneck &amp; Tournament Feedback Crunch
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-5">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-teal-300 text-sm">Original Oratory (OO) Manuscripts</span>
        <span class="px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 text-[11px] font-mono">1,000–1,500 words</span>
      </div>
      <ul class="space-y-1 text-slate-300 text-[11px]">
        <li>• Persuasive societal problem, causes &amp; pathos</li>
        <li>• 5-dimension NSDA &amp; State Ballot Criteria</li>
        <li>• 30–60 team entries = <strong>45,000 to 90,000 words</strong></li>
        <li>• Weekly tournament revision deadlines</li>
      </ul>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-emerald-300 text-sm">Informative (INFO) &amp; AP Lang Drafts</span>
        <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-mono">1,200–1,500 words</span>
      </div>
      <ul class="space-y-1 text-slate-300 text-[11px]">
        <li>• Multi-source synthesis &amp; audio-visual cues</li>
        <li>• 5-dimension Analytical Speech Rubrics</li>
        <li>• 30–60 team entries = <strong>40,000 to 80,000 words</strong></li>
        <li>• Rigorous academic citation standards</li>
      </ul>
    </div>
  </div>

  <div class="rounded-xl bg-amber-950/40 border border-amber-800/60 p-4 mb-4 text-xs">
    <div class="font-bold text-amber-300 text-xs mb-1 uppercase tracking-wider">The Forensics Tournament Feedback Crunch</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300 text-[11px]">
      <div><strong>Manual Manuscript Review:</strong> 20–35 minutes per draft</div>
      <div><strong>Total Coach Evaluation Time:</strong> 25–40+ hours per week</div>
      <div><strong>Logistics Overload:</strong> Tabroom, judge quotas, travel &amp; chaperones</div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
    <div class="rounded-lg bg-rose-950/40 border border-rose-800/60 p-3">
      <div class="font-bold text-rose-300 mb-1">Consequence of Coach Grading Fatigue</div>
      <p class="text-slate-300 text-[11px] m-0">Vague comments like "needs more pop" or "tighten transitions" leave novice speakers stranded. Novices miss out on deep rhetorical coaching (anaphora, warrants, pathos) and face prelim round elimination.</p>
    </div>
    <div class="rounded-lg bg-indigo-950/40 border border-indigo-800/60 p-3">
      <div class="font-bold text-indigo-300 mb-1">Student Reaction &amp; AI Vulnerability</div>
      <p class="text-slate-300 text-[11px] m-0">Under extreme weekend deadlines, students turn to LLMs, generating formulaic drafts with synthetic pathos, hallucinated citations, and high risk of tournament disqualification.</p>
    </div>
  </div>
</div>

<h3>The Forensics Coaching Workload Reality</h3>
<p>A dedicated Forensics director or high school speech coach typically mentors between 20 and 60 competitors across multiple public address events:</p>
<ul>
  <li><strong>Original Oratory (OO):</strong> A 10-minute memorized persuasive speech (1,200 to 1,500 words) addressing a significant societal, cultural, or psychological problem, diagnosing its root causes, illustrating its harms through evidence and personal narrative, and proposing an actionable individualized or collective solution.</li>
  <li><strong>Informative Speaking (INFO):</strong> A 10-minute speech (1,200 to 1,500 words) designed to enlighten, educate, or explain a complex technological, scientific, or social phenomenon using authoritative source synthesis and visual aids.</li>
  <li><strong>Persuasive Speaking &amp; Expository:</strong> State-specific variations requiring rigorous rhetorical argumentation, formal citations, and structural clarity.</li>
</ul>

<p>When 40 students submit revised manuscripts on Tuesday night ahead of a Friday departure for a major regional tournament, the coach is confronted with <strong>50,000 to 60,000 words of dense rhetorical text</strong>. A thorough evaluation—analyzing thesis warrants, evaluating internal transitions, checking factual source attributions, auditing rhetorical devices, and typing targeted coaching notes—requires <strong>20 to 35 minutes per speech draft</strong>.</p>

<p>For a coaching staff of one or two educators, this translates into <strong>25 to 40+ hours of manuscript evaluation per week</strong>, stacked on top of full-time teaching duties, after-school vocal delivery coaching, and grueling administrative logistics:</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Weekly Forensics Coach Time Allocation: Administrative vs. Pedagogical
  </div>

  <div class="space-y-4 text-xs">
    <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-amber-300 text-sm">Administrative &amp; Logistical Duties</span>
        <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[11px] font-mono">15–20 Hours / Week</span>
      </div>
      <ul class="space-y-1 text-slate-300 text-[11px]">
        <li>• Tabroom.com / SpeechWire roster management, event registration, and drop fees</li>
        <li>• Recruiter &amp; judge hiring obligations (calculating judge-to-entry quotas across flights)</li>
        <li>• School district transportation orders, bus routing, and hotel reservation blocks</li>
        <li>• Parent volunteer coordination, permission slips, and medical clearance tracking</li>
        <li>• Team fundraising, budget audits, and tournament entry payment processing</li>
      </ul>
    </div>

    <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-emerald-300 text-sm">Live Performance &amp; Delivery Coaching</span>
        <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-mono">12–16 Hours / Week</span>
      </div>
      <ul class="space-y-1 text-slate-300 text-[11px]">
        <li>• After-school 1-on-1 vocal rehearsal slots (pitch, pacing, volume, resonance, inflection)</li>
        <li>• Physical blocking, posture, eye contact, and 3-point speaker movement walk-throughs</li>
        <li>• Memorization check-ins, cue card phasing, and performance anxiety reduction</li>
      </ul>
    </div>

    <div class="p-4 rounded-xl bg-teal-950/40 border border-teal-800/60">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-teal-300 text-sm">Written Manuscript Evaluation &amp; Editing (Critical Bottleneck)</span>
        <span class="px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 text-[11px] font-mono">25–35 Hours / Week</span>
      </div>
      <ul class="space-y-1 text-slate-300 text-[11px]">
        <li>• Auditing thesis significance and problem-cause-solution structural integrity</li>
        <li>• Verifying empirical evidence, peer-reviewed study citations, and statistical warrants</li>
        <li>• Highlighting rhetorical figures (anaphora, antithesis, chiasmus, tricolon, hypophora)</li>
        <li>• Writing formative, actionable line-by-line revision notes on paragraph transitions</li>
      </ul>
    </div>
  </div>
</div>

<h3>The Pedagogical Tragedy of Superficial Feedback</h3>
<p>When coaching capacity breaks under this crushing volume, feedback quality inevitably deteriorates. Exhausted coaches resort to vague, marginal shorthand:</p>
<ul>
  <li><em>"Needs more punch here."</em></li>
  <li><em>"Your transition between Point 1 and Point 2 feels abrupt."</em></li>
  <li><em>"Find a better statistic for the impact section."</em></li>
  <li><em>"Great voice, but make the solution more realistic."</em></li>
</ul>

<p>While well-intentioned, these superficial notes leave high school speakers stranded. A sophomore preparing their first Original Oratory does not know how to translate <em>"needs more punch"</em> into concrete sentence-level revisions. Does the vehicle metaphor lack emotional grounding? Is the syntax too passive? Are the personal narrative verbs too abstract? Does the climax lack rhythmic anaphora or antithetical balance?</p>

<p>Without concrete, quote-anchored guidance tied directly to competitive ballot criteria, novice speakers repeatedly make the same structural mistakes, stall out in preliminary tournament rounds, and experience demoralizing frustration.</p>

<hr class="my-8 border-border" />

<h2>2. Deconstructing the 5 Core Criteria of Competitive Oratory Manuscripts</h2>

<p>To provide objective, actionable feedback, coaches must deconstruct competitive speech writing into its essential rhetorical mechanics. Unlike casual public speaking, competitive oratory is an exacting literary form governed by five core structural criteria:</p>

<div class="my-8 overflow-x-auto">
  <table class="w-full border-collapse rounded-xl overflow-hidden border border-border text-sm">
    <thead class="bg-muted text-foreground">
      <tr>
        <th class="p-3 text-left font-semibold border-b border-border">Row</th>
        <th class="p-3 text-left font-semibold border-b border-border">Criterion</th>
        <th class="p-3 text-center font-semibold border-b border-border">Weight</th>
        <th class="p-3 text-left font-semibold border-b border-border">Competitive Oratory Benchmarks</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border bg-card">
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Row 1</td>
        <td class="p-3 font-medium">Attention Hook &amp; Problem Vehicle</td>
        <td class="p-3 text-center font-mono font-bold">20 pts</td>
        <td class="p-3 text-muted-foreground">Creative teaser/vehicle, personal vulnerability, seamless bridge to universalized societal harm.</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Row 2</td>
        <td class="p-3 font-medium">Thesis &amp; Topic Significance</td>
        <td class="p-3 text-center font-mono font-bold">20 pts</td>
        <td class="p-3 text-muted-foreground">Explicit warranted claim, systemic scope, intellectual novelty, non-clichéd framing.</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Row 3</td>
        <td class="p-3 font-medium">Structural Architecture &amp; Bridges</td>
        <td class="p-3 text-center font-mono font-bold">20 pts</td>
        <td class="p-3 text-muted-foreground">Clear 3-point progression (Cause/Effect/Solution), explicit rhetorical signposts &amp; causal links.</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Row 4</td>
        <td class="p-3 font-medium">Evidence Synthesis &amp; Sourcing</td>
        <td class="p-3 text-center font-mono font-bold">20 pts</td>
        <td class="p-3 text-muted-foreground">Empirical studies, expert consensus, literature integration without unanchored "quote-dropping".</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Row 5</td>
        <td class="p-3 font-medium">Emotional Pathos &amp; Rhetorical Figures</td>
        <td class="p-3 text-center font-mono font-bold">20 pts</td>
        <td class="p-3 text-muted-foreground">Authentic pathos vs. melodrama, anaphora, antithesis, chiasmus, transformative climax.</td>
      </tr>
      <tr class="bg-teal-500/10 font-bold">
        <td class="p-3 text-teal-700 dark:text-teal-300" colspan="2">TOTAL MANUSCRIPT EVALUATION</td>
        <td class="p-3 text-center font-mono text-base text-teal-700 dark:text-teal-300">100 pts</td>
        <td class="p-3 text-teal-700 dark:text-teal-300">Calibrated to NSDA 1–6 Ballot Rank Equivalencies</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Oratory Rhetorical Progression Pipeline
  </div>

  <div class="space-y-3 text-xs">
    <div class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-between">
      <div>
        <span class="font-bold text-teal-300">1. Attention Teaser (Row 1):</span>
        <span class="text-slate-300 ml-2">Vehicle metaphor, engaging anecdote, hook into the human condition</span>
      </div>
      <span class="px-2 py-0.5 rounded bg-teal-950 text-teal-300 text-[10px] font-mono">0:00–1:30</span>
    </div>
    <div class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-between">
      <div>
        <span class="font-bold text-emerald-300">2. Thesis &amp; Roadmap (Row 2):</span>
        <span class="text-slate-300 ml-2">Explicit claim, systemic problem statement, 3-point structural preview</span>
      </div>
      <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono">1:30–2:30</span>
    </div>
    <div class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-between">
      <div>
        <span class="font-bold text-sky-300">3. Body Point I: Causes (Row 3 &amp; 4):</span>
        <span class="text-slate-300 ml-2">Psychological and institutional drivers supported by empirical research</span>
      </div>
      <span class="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-[10px] font-mono">2:30–4:30</span>
    </div>
    <div class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-between">
      <div>
        <span class="font-bold text-indigo-300">4. Body Point II: Effects &amp; Harms (Row 3 &amp; 4):</span>
        <span class="text-slate-300 ml-2">Cultural erosion, human costs, and synthesized case study evidence</span>
      </div>
      <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px] font-mono">4:30–6:30</span>
    </div>
    <div class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-between">
      <div>
        <span class="font-bold text-purple-300">5. Body Point III: Solutions (Row 3 &amp; 5):</span>
        <span class="text-slate-300 ml-2">Pragmatic micro/macro reforms, psychological shifts, and community action</span>
      </div>
      <span class="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px] font-mono">6:30–8:30</span>
    </div>
    <div class="p-3 rounded-lg bg-teal-950/50 border border-teal-800/80 flex items-center justify-between">
      <div>
        <span class="font-bold text-teal-300">6. Rhetorical Climax &amp; Vehicle Return (Row 1 &amp; 5):</span>
        <span class="text-slate-200 ml-2">Pathos resolution, anaphoric cadence, and universalized call to action</span>
      </div>
      <span class="px-2 py-0.5 rounded bg-teal-900 text-teal-200 text-[10px] font-mono">8:30–10:00</span>
    </div>
  </div>
</div>

<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <div class="flex items-center justify-between">
      <span class="font-bold text-teal-600 dark:text-teal-400">1. Attention Hook (The "Vehicle")</span>
      <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-muted">20 pts</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>Championship Benchmark:</strong> Opens with a vivid personal narrative or creative metaphor that smoothly bridges into a universalized societal dilemma within 90 seconds.</p>
    <p class="text-xs text-muted-foreground m-0"><strong>Common Pitfall:</strong> Clichéd dictionary definitions (*"Webster defines..."*), rhetorical questions, or disconnected stories that never reconnect to the thesis.</p>
  </div>

  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <div class="flex items-center justify-between">
      <span class="font-bold text-teal-600 dark:text-teal-400">2. Thesis &amp; Topic Significance</span>
      <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-muted">20 pts</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>Championship Benchmark:</strong> Articulates an explicit, warranted claim that diagnoses systemic root mechanisms with intellectual novelty.</p>
    <p class="text-xs text-muted-foreground m-0"><strong>Common Pitfall:</strong> Trite topics (e.g., generic speeches on *"procrastination"* or *"cell phones"*) lacking fresh analytical angles or systemic depth.</p>
  </div>

  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <div class="flex items-center justify-between">
      <span class="font-bold text-teal-600 dark:text-teal-400">3. Structural Architecture &amp; Bridges</span>
      <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-muted">20 pts</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>Championship Benchmark:</strong> Logical progression (Cause/Impact/Solution) linked by intentional rhetorical bridges using motifs from the opening vehicle.</p>
    <p class="text-xs text-muted-foreground m-0"><strong>Common Pitfall:</strong> Mechanical listing (*"My next point is..."*), circular logic, or rushed 30-second solutions tacked onto bloated problem sections.</p>
  </div>

  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <div class="flex items-center justify-between">
      <span class="font-bold text-teal-600 dark:text-teal-400">4. Evidence Synthesis &amp; Sourcing</span>
      <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-muted">20 pts</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>Championship Benchmark:</strong> Weaves peer-reviewed empirical literature, developmental psychology, and investigative journalism directly into oral prose.</p>
    <p class="text-xs text-muted-foreground m-0"><strong>Common Pitfall:</strong> "Quote-dropping"—inserting unanalyzed quotes or ungrounded claims (*"Studies show that 90% of teens..."*) that judges penalize.</p>
  </div>
</div>

<div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2 mb-8">
  <div class="flex items-center justify-between">
    <span class="font-bold text-teal-600 dark:text-teal-400">5. Emotional Pathos &amp; Dynamic Rhetorical Devices</span>
    <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-muted">20 pts</span>
  </div>
  <p class="text-xs text-muted-foreground m-0"><strong>Championship Benchmark:</strong> Employs sophisticated classical rhetorical schemes: <em>anaphora</em> (repeated clause openings for emotional crescendo), <em>antithesis</em> (balanced contrasts), <em>chiasmus</em> (inverted grammar), and <em>tricolon</em> (escalating triads).</p>
  <p class="text-xs text-muted-foreground m-0"><strong>Common Pitfall:</strong> Synthetic or manipulative melodrama, flat monotone syntax lacking oral cadence, or speeches that conclude without an urgent, individualized call to action.</p>
</div>

<hr class="my-8 border-border" />

<h2>3. The "AI-Generated Speech" Problem in Secondary Forensics</h2>

<p>As large language models have become ubiquitous, Speech and Debate coaches face a rapidly escalating challenge: novice competitors using generative AI to produce complete speech manuscripts under tight tournament deadlines.</p>

<div class="my-8 overflow-x-auto">
  <table class="w-full border-collapse rounded-xl overflow-hidden border border-border text-sm">
    <thead class="bg-muted text-foreground">
      <tr>
        <th class="p-3 text-left font-semibold border-b border-border">Rhetorical Dimension</th>
        <th class="p-3 text-left font-semibold border-b border-border text-rose-600 dark:text-rose-400">Novice / AI-Generated Draft (ChatGPT)</th>
        <th class="p-3 text-left font-semibold border-b border-border text-teal-600 dark:text-teal-400">Championship Competitive Oratory</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border bg-card text-xs">
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">1. Attention Hook &amp; Vehicle Metaphor</td>
        <td class="p-3 text-muted-foreground">Generic, trite opening: <em>"In today's fast-paced, modern digital society..."</em> Superficial, robotic metaphors.</td>
        <td class="p-3 font-medium text-teal-700 dark:text-teal-300">Vivid, idiosyncratic vehicle; personal vulnerability grounded in specific, tangible imagery.</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">2. Thesis &amp; Topic Significance</td>
        <td class="p-3 text-muted-foreground">Broad clichés: <em>"Failure is just a stepping stone to success."</em> No novel intellectual angle or systemic diagnosis.</td>
        <td class="p-3 font-medium text-teal-700 dark:text-teal-300">Nuanced systemic diagnosis; challenges prevailing cultural assumptions with a fresh conceptual framework.</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">3. Structural Progression &amp; Bridges</td>
        <td class="p-3 text-muted-foreground">Rigid 5-paragraph essay format; mechanical signposts: <em>"Firstly, Secondly, Furthermore, In conclusion"</em>.</td>
        <td class="p-3 font-medium text-teal-700 dark:text-teal-300">Dynamic thematic motifs; seamless narrative bridges; vehicle return sustained across major claims.</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">4. Evidentiary Synthesis &amp; Sourcing</td>
        <td class="p-3 text-muted-foreground">Hallucinated research studies; phantom statistics; vague claims: <em>"Experts say that millions of people struggle..."</em></td>
        <td class="p-3 font-medium text-teal-700 dark:text-teal-300">Verifiable academic citations (peer-reviewed journals, authors, dates); empirical data synthesis.</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">5. Emotional Pathos &amp; Rhetorical Devices</td>
        <td class="p-3 text-muted-foreground">Hallmark-card melodrama; predictable adjectives; flat, uniform sentence length lacking oral performance cadence.</td>
        <td class="p-3 font-medium text-teal-700 dark:text-teal-300">Rhythmic rhetorical schemes: anaphora, chiasmus, antithesis; dynamic cadence engineered for live voice.</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">6. Writing Process Telemetry Record</td>
        <td class="p-3 text-rose-600 dark:text-rose-400 font-semibold">Single massive paste buffer; zero typing pauses; no spontaneous word substitutions or restructuring.</td>
        <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">Multi-hour drafting sessions; rich revision bursts; organic deletions and vocabulary exploration.</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Why AI-Generated Speeches Fail on Tournament Ballots</h3>
<p>When a student submits a speech generated by an LLM, the manuscript exhibits unmistakable structural defects:</p>
<ol class="space-y-2 my-4 pl-6 list-decimal">
  <li><strong>The "Hallmark Channel" Synthetic Pathos:</strong> AI models default to generic emotional tropes—overly sentimental, sanitized narratives about overcoming adversity that lack the raw, specific vulnerability of an authentic adolescent experience.</li>
  <li><strong>Hallucinated Statistics and Phantom Warrants:</strong> LLMs frequently invent plausible-sounding academic studies, fabricating researcher names, university affiliations, and statistical percentages that collapse under judge scrutiny.</li>
  <li><strong>Monotonous Syntactic Rhythm:</strong> AI prose exhibits uniform sentence lengths and predictable perplexity scores. It lacks the explosive bursts of short, punchy staccato sentences contrasted with sweeping periodic clauses that give competitive oratory its dramatic oral power.</li>
  <li><strong>Absence of Localized Stakes:</strong> AI-generated drafts discuss problems at a 30,000-foot generalized level, failing to anchor the argument in the student's authentic lived community, school environment, or personal observations.</li>
</ol>

<h3>The Inadequacy of Generic Whole-Paper AI Detectors</h3>
<p>When coaches suspect AI involvement, relying on generic whole-document AI percentage checkers creates catastrophic failure modes:</p>
<ul>
  <li><strong>The False Positive Danger:</strong> Authentic student personal narratives—especially those written by neurodivergent students or English Language Learners who write with direct, formal syntax—frequently trigger false 70% to 90% "AI scores." Accusing a student of faking a personal trauma narrative causes profound emotional and academic damage.</li>
  <li><strong>The False Negative Loophole:</strong> Students who use AI "humanizers" or paraphrasing tools (e.g., QuillBot, Undetectable AI) easily bypass surface-level pattern detectors, submitting hollow speeches that evade automated detection while sabotaging their competitive performance.</li>
</ul>

<hr class="my-8 border-border" />

<h2>4. Checkmark Plagiarism's AI Rubric Autograding &amp; Quote-Anchored Evidence Engine</h2>

<p>Checkmark Plagiarism transforms speech and debate coaching by replacing subjective, exhausting manual line-editing with <strong>Deterministic Abstract Syntax Tree (AST) Rubric Parsing and Grounded Quote-Anchored Evidence Extraction</strong>.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Checkmark Plagiarism: Speech &amp; Debate Autograding Architecture
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
    <div class="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="font-bold text-teal-300 text-xs mb-1">1. AST Speech Rubric Compiler</div>
      <p class="text-slate-300 text-[11px] m-0">Compiles NSDA ballot criteria, state standards (CHSSA, TFA, IHSA, NYSFL), and custom team rubrics into computational rule trees.</p>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="font-bold text-emerald-300 text-xs mb-1">2. Grounded Evidence Extractor</div>
      <p class="text-slate-300 text-[11px] m-0">Extracts exact verbatim text anchors for every rubric row and drafts tailored vocal rehearsal prompts.</p>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="font-bold text-indigo-300 text-xs mb-1">3. Telemetry Audit Core</div>
      <p class="text-slate-300 text-[11px] m-0">Integrates Essay Playback™ (1x–8x), 100% paste buffer preservation, and passage-level AI confidence metrics.</p>
    </div>
  </div>

  <div class="p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 text-xs mb-4">
    <div class="font-bold text-teal-300 text-xs mb-1 uppercase tracking-wider">Pre-Flight Coach Review Console</div>
    <p class="text-slate-300 text-[11px] m-0">Coaches review side-by-side manuscript highlights and evidence cards, adjust score sliders, and verify coaching notes in <strong>3–5 minutes per draft</strong> (down from 25–35 min manual editing).</p>
  </div>

  <div class="p-3 rounded-lg bg-slate-800/70 border border-slate-700 text-xs text-center text-slate-300">
    <strong>1EdTech LTI 1.3 Advantage Stream Passback:</strong> Itemized rubric scores, aggregate points, and quote-anchored marginal comments sync natively into Canvas SpeedGrader, Buzz LMS, and Google Classroom.
  </div>
</div>

<h3>Quote-Anchored Evidence Mockups in Action</h3>
<p>Below are two real-world diagnostic cards generated by Checkmark during an Original Oratory manuscript audit:</p>

<div class="my-8 rounded-2xl border border-teal-500/40 bg-card p-6 shadow-lg space-y-4">
  <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-600 text-white">ORIGINAL ORATORY</span>
      <span class="font-semibold text-sm text-foreground">Row 5: Rhetorical Schemes &amp; Pathos</span>
    </div>
    <div class="flex items-center gap-2 font-mono text-xs">
      <span class="text-muted-foreground">Suggested Score:</span>
      <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/30">Excellent (18 / 20 pts)</span>
    </div>
  </div>

  <div class="space-y-3 text-sm">
    <div class="rounded-lg bg-muted/60 p-3.5 border-l-4 border-teal-500">
      <div class="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider mb-1">Verbatim Text Anchor (Paragraph 8, Lines 182–189):</div>
      <p class="italic text-foreground font-serif text-xs leading-relaxed m-0">
        "We curate our profiles; we curate our conversations; we curate our very humanity. In doing so, we have traded genuine vulnerability for manufactured applause, choosing the comfort of a digital echo over the beauty of an imperfect human voice."
      </p>
    </div>

    <div class="space-y-1">
      <div class="text-xs font-bold text-muted-foreground uppercase tracking-wider">AI Diagnostic Justification:</div>
      <p class="text-xs text-muted-foreground leading-relaxed m-0">
        The manuscript demonstrates exceptional rhetorical craftsmanship. The speaker successfully employs an anaphoric tricolon (<em>"we curate our profiles; we curate our conversations; we curate our very humanity"</em>) that builds rhythmic urgency, immediately followed by an antithetical contrast between <em>"manufactured applause"</em> and <em>"imperfect human voice."</em> This provides a compelling emotional bridge into the final call to action.
      </p>
    </div>

    <div class="rounded-lg bg-teal-500/10 border border-teal-500/30 p-3.5 space-y-1">
      <div class="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
        <span>🎤</span> Performance &amp; Rehearsal Note for Speaker:
      </div>
      <p class="text-xs text-foreground leading-relaxed m-0">
        "Mark this passage for dramatic pacing. On the third repetition of <em>'we curate,'</em> introduce a slight vocal crescendo and deliberate pause before landing the antithesis. Consider adding one sentence connecting this emotional climax directly back to your opening mirror vehicle from Paragraph 1."
      </p>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border text-xs">
      <div class="flex items-center gap-2">
        <button class="px-3 py-1.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition">✅ Accept Note</button>
        <button class="px-3 py-1.5 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition border border-border">✏️ Edit Feedback</button>
      </div>
      <div class="flex items-center gap-2">
        <button class="px-3 py-1.5 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition border border-border">🔄 Recalibrate Slider</button>
        <button class="px-3 py-1.5 rounded-lg text-rose-600 dark:text-rose-400 font-medium hover:bg-rose-500/10 px-2 py-1 rounded transition">❌ Dismiss Card</button>
      </div>
    </div>
  </div>
</div>

<div class="my-8 rounded-2xl border border-amber-500/40 bg-card p-6 shadow-lg space-y-4">
  <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-600 text-white">ORIGINAL ORATORY</span>
      <span class="font-semibold text-sm text-foreground">Row 4: Evidence &amp; Sourcing</span>
    </div>
    <div class="flex items-center gap-2 font-mono text-xs">
      <span class="text-muted-foreground">Suggested Score:</span>
      <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/30">Developing (11 / 20 pts)</span>
    </div>
  </div>

  <div class="space-y-3 text-sm">
    <div class="rounded-lg bg-muted/60 p-3.5 border-l-4 border-amber-500">
      <div class="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider mb-1">Verbatim Text Anchor (Paragraph 4, Lines 92–96):</div>
      <p class="italic text-foreground font-serif text-xs leading-relaxed m-0">
        "According to experts, millions of teenagers feel lonely every day because social media destroys their confidence and makes them depressed."
      </p>
    </div>

    <div class="space-y-1">
      <div class="text-xs font-bold text-muted-foreground uppercase tracking-wider">AI Diagnostic Justification:</div>
      <p class="text-xs text-muted-foreground leading-relaxed m-0">
        The evidentiary warrant is weak and uncredited. The phrase <em>"according to experts"</em> is unanchored; no researcher, academic institution, publication date, or methodology is cited. The causal claim that social media <em>"destroys confidence"</em> lacks empirical nuance and will be heavily penalized on NSDA tournament ballots.
      </p>
    </div>

    <div class="rounded-lg bg-amber-500/10 border border-amber-500/30 p-3.5 space-y-1">
      <div class="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
        <span>💡</span> Manuscript Revision Goal for Student:
      </div>
      <p class="text-xs text-foreground leading-relaxed m-0">
        "Replace this vague assertion with a grounded empirical study. Reference Dr. Jean Twenge's 2023 adolescent psychology research or the US Surgeon General's Advisory on Youth Mental Health. State the specific researcher and year directly in your manuscript text."
      </p>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border text-xs">
      <div class="flex items-center gap-2">
        <button class="px-3 py-1.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition">✅ Accept Note</button>
        <button class="px-3 py-1.5 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition border border-border">✏️ Edit Feedback</button>
      </div>
      <div class="flex items-center gap-2">
        <button class="px-3 py-1.5 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition border border-border">🔄 Recalibrate Slider</button>
        <button class="px-3 py-1.5 rounded-lg text-rose-600 dark:text-rose-400 font-medium hover:bg-rose-500/10 px-2 py-1 rounded transition">❌ Dismiss Card</button>
      </div>
    </div>
  </div>
</div>

<img src="/images/services/report-grading-view.png" alt="Checkmark Rubric Autograding View with Itemized Criterion Breakdown" class="w-full rounded-2xl border border-border shadow-md my-8" />

<h3>Pre-Flight Coach Review Console: The Teacher-in-the-Loop Safeguard</h3>
<p>Checkmark operates strictly on a <strong>Teacher-in-the-Loop</strong> model. The AI never sends unverified grades or comments to students. Instead, the coach opens the <strong>Pre-Flight Coach Review Console</strong>:</p>
<ul>
  <li><strong>Side-by-Side Verification:</strong> The coach sees the full speech manuscript on the left, with highlighted rhetorical devices, empirical warrants, and transitions color-coded to the rubric cards on the right.</li>
  <li><strong>1-Click Moderation:</strong> If the AI's diagnostic is accurate, the coach clicks <strong>Accept</strong> (or hits the spacebar) to approve the feedback card in under 3 seconds.</li>
  <li><strong>Rapid Customization:</strong> The coach can type a quick personal note (e.g., <em>"Sarah, practice this gesture in our Thursday 4 PM rehearsal slot"</em>) directly into the feedback card.</li>
  <li><strong>Batch Speed:</strong> An entire team of 40 speech manuscripts can be thoroughly audited, moderated, and scored in <strong>under 2.5 hours</strong>, compared to 20+ hours of exhausting manual typing.</li>
</ul>

<img src="/images/services/report-rubric-tiles.png" alt="Checkmark Rubric Tiles and Performance Levels Interface" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>5. Multi-Factor Verification: Essay Playback™, Keystroke Telemetry, &amp; Integrity Core</h2>

<p>In competitive forensics, proving that a student authored their own speech manuscript is essential for tournament integrity, NSDA rule compliance, and student confidence. Checkmark provides an immutable multi-factor verification suite:</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Checkmark Multi-Factor Verification &amp; Telemetry Suite
  </div>

  <div class="space-y-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="font-bold text-teal-300 text-xs mb-1">1. Patent-Pending Essay Playback™ (Keystroke Dynamics)</div>
      <ul class="list-disc pl-5 space-y-1 text-slate-300 text-[11px]">
        <li>Reconstructs drafting keystroke-by-keystroke at 1x to 8x video speed</li>
        <li>Visualizes composing pauses, organic deletions, and word substitutions</li>
        <li><strong>Transcription Detection:</strong> Distinguishes natural composition from second-screen or phone retyping</li>
      </ul>
    </div>

    <div class="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="font-bold text-emerald-300 text-xs mb-1">2. 100% External Paste Buffer Preservation</div>
      <ul class="list-disc pl-5 space-y-1 text-slate-300 text-[11px]">
        <li>Captures complete clipboard text on paste events with precise timestamps</li>
        <li>Retains original pasted text even if the student subsequently rewrites every word</li>
        <li>Clickable "Jump-to-Playback" timeline button instantly exposes paste context</li>
      </ul>
    </div>

    <div class="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="font-bold text-indigo-300 text-xs mb-1">3. Granular Passage-Level AI &amp; Team Archive Matching</div>
      <ul class="list-disc pl-5 space-y-1 text-slate-300 text-[11px]">
        <li>Sentence-by-sentence analysis with calibrated confidence sliders (perplexity &amp; burstiness)</li>
        <li><strong>Honest Guardrails:</strong> Short speech intros (&lt;150 words) display N/A (no statistical guessing)</li>
        <li><strong>Team Archive Auditing:</strong> Private student-to-student matching scans past seasons for recycled scripts</li>
      </ul>
    </div>
  </div>
</div>

<img src="/images/services/report-paste-evidence.png" alt="Checkmark Paste Buffer Evidence and Forensic Analysis" class="w-full rounded-2xl border border-border shadow-md my-8" />

<h3>1. Patent-Pending Essay Playback™ (Keystroke Dynamics)</h3>
<p>Checkmark's flagship innovation, <strong>Essay Playback™</strong>, records the complete temporal history of the manuscript drafting process. Coaches can scrub through an interactive timeline like a video at 1x to 8x speed:</p>
<ul>
  <li><strong>Composing Pauses:</strong> Highlights natural cognitive pauses where a student paused for 15 to 45 seconds to ponder word choice, brainstorm an opening metaphor, or re-read a complex paragraph.</li>
  <li><strong>Organic Deletions and Re-Drafting:</strong> Displays spontaneous backspaces, sentence restructuring, and word substitutions that characterize genuine human creative struggle.</li>
  <li><strong>Transcription Detection:</strong> Identifies mechanical, robotic typing that proceeds at an unnatural, uniform velocity without composing pauses—revealing when a student is simply retyping text from a secondary monitor, smartphone, or external generative AI prompt.</li>
</ul>

<h3>2. 100% External Paste Buffer Preservation</h3>
<p>When a student pastes text into their speech document, Checkmark immediately captures and preserves the <strong>complete original pasted text</strong>, recording an exact timestamp and source metadata:</p>
<ul>
  <li><strong>Distinguishing Quotes from AI Drops:</strong> A student who pastes a 30-word research quote from an academic PDF into their notes before synthesizing it is easily distinguished from a student who pastes an entire 800-word body section in a single keystroke.</li>
  <li><strong>Immunity to Paraphrase Concealment:</strong> Even if a student pastes an AI-generated paragraph and subsequently edits every fourth word or runs it through a paraphraser (e.g., QuillBot), Checkmark retains the original raw clipboard text and provides a clickable <strong>"Jump-to-Playback"</strong> button that exposes the initial paste event.</li>
</ul>

<img src="/images/services/report-breakdown-sidebar.png" alt="Checkmark Breakdown Sidebar showing passage-level originality metrics and telemetry" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>6. Real-World Case Studies from the Forensics Circuit</h2>

<div class="my-6 space-y-6">
  <div class="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3">
    <div class="flex items-center justify-between pb-2 border-b border-border">
      <span class="font-bold text-teal-600 dark:text-teal-400 text-sm">CASE STUDY 1</span>
      <span class="text-xs font-mono text-muted-foreground">High School Forensics Team 40-Oratory Pre-Tournament Sprint</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>The Setting:</strong> A large public high school in suburban Chicago with a nationally competitive Forensics team comprising 42 active speech competitors.</p>
    <p class="text-xs text-muted-foreground m-0"><strong>The Challenge:</strong> Ahead of the prestigious Glenbrooks Invitational, 38 students submitted revised Original Oratory and Informative drafts on Tuesday evening. The head coach was simultaneously managing hotel rooming lists, 16 volunteer judges, and regional bus logistics on Tabroom.com.</p>
    <p class="text-xs text-muted-foreground m-0"><strong>The Checkmark Solution:</strong> The coach ingested all 38 drafts through Checkmark's AST NSDA Ballot Compiler. Utilizing the Pre-Flight Coach Review Console, the coach evaluated each manuscript's quote-anchored evidence cards in an average of 4.5 minutes per speech (under 3 hours total). Formative coaching notes were pushed directly to students' Canvas accounts by 10:00 PM Tuesday.</p>
    <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 m-0"><strong>The Result:</strong> Students revised drafts by Wednesday afternoon, leaving Thursday open for live vocal rehearsals. At the tournament, the team placed 6 speakers in final rounds, earning 2 state-qualifying bids.</p>
  </div>

  <div class="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3">
    <div class="flex items-center justify-between pb-2 border-b border-border">
      <span class="font-bold text-teal-600 dark:text-teal-400 text-sm">CASE STUDY 2</span>
      <span class="text-xs font-mono text-muted-foreground">Coaching a Novice Speaker on Rhetorical Architecture and Evidence Grounding</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>The Setting:</strong> A sophomore novice competitor drafting an Original Oratory on the psychology of perfectionism in competitive high school athletics.</p>
    <p class="text-xs text-muted-foreground m-0"><strong>The Initial Draft Defect:</strong> The student's rough draft read like a dry encyclopedia article, presenting general assertions (<em>"Many athletes feel stressed when they fail"</em>) without empirical warrants, personal vulnerability, or rhythmic rhetorical schemes.</p>
    <p class="text-xs text-muted-foreground m-0"><strong>The Checkmark Intervention:</strong> Checkmark flagged three unsupported statistical assertions (<em>"💡 Ground this claim: Cite Dr. Kristin Neff's self-compassion research"</em>) and suggested: <em>"🎤 Rhetorical Challenge: Transform your Paragraph 6 conclusion using an antithetical contrast between perfection and progress."</em></p>
    <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 m-0"><strong>The Outcome:</strong> The student integrated a compelling gymnastic training anecdote, incorporated Dr. Neff's 2023 study, and crafted an anaphoric climax. The speech earned 1st Place in the Novice division at districts.</p>
  </div>

  <div class="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3">
    <div class="flex items-center justify-between pb-2 border-b border-border">
      <span class="font-bold text-teal-600 dark:text-teal-400 text-sm">CASE STUDY 3</span>
      <span class="text-xs font-mono text-muted-foreground">Exonerating an Authentic Personal Trauma Oratory from False AI Accusations</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>The Setting:</strong> An AP English Language student and junior varsity orator submitted a deeply personal Original Oratory about navigating a parent's chronic neurological illness.</p>
    <p class="text-xs text-muted-foreground m-0"><strong>The Crisis:</strong> A generic black-box AI detector flagged the manuscript at <strong>88% AI-Generated</strong>, citing "low perplexity and uniform cadence." The student faced removal from the tournament entry roster.</p>
    <p class="text-xs text-muted-foreground m-0"><strong>The Checkmark Playback Audit:</strong> The coach opened Essay Playback™, revealing <strong>6 hours and 42 minutes of active drafting</strong> across four evenings, with 14 composing pauses over 60 seconds during the introductory narrative and a 22-word medical definition as the only paste event.</p>
    <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 m-0"><strong>The Resolution:</strong> Keystroke telemetry definitively proved authentic authorship. The coach cleared the student immediately, defending the draft before the integrity committee, and the student competed with total confidence.</p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. The 4-Phase Speech &amp; Debate Calibration &amp; Coaching Protocol</h2>

<p>To maximize instructional efficiency and competitive success, Forensics coaching staffs should implement Checkmark's 4-phase coaching framework:</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    The 4-Phase Speech &amp; Debate Calibration &amp; Coaching Protocol
  </div>

  <div class="space-y-4 text-xs">
    <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="font-bold text-teal-300 text-sm mb-1">Phase 1: Rubric Compilation &amp; AST Rule Formulation (Season Kickoff)</div>
      <ul class="space-y-1 text-slate-300 text-[11px]">
        <li>• Ingest official NSDA ballot standards, State Forensics rubrics, or AP Lang criteria</li>
        <li>• Calibrate weightings for specific events (Original Oratory vs. Informative vs. AP Persuasion)</li>
        <li>• Establish team baseline benchmarks for thesis warrants, source citations, and rhetorical schemes</li>
      </ul>
    </div>

    <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="font-bold text-emerald-300 text-sm mb-1">Phase 2: Batch Ingestion &amp; Pre-Flight Coach Review (Weekly Tournament Cycle)</div>
      <ul class="space-y-1 text-slate-300 text-[11px]">
        <li>• Students submit manuscripts via Canvas, Blackboard, Google Docs, or Word</li>
        <li>• Checkmark AST engine extracts quote-anchored evidence cards for all 5 rhetorical criteria</li>
        <li>• Coach spends 3–5 minutes per manuscript moderating scores, refining notes, and approving prompts</li>
      </ul>
    </div>

    <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="font-bold text-sky-300 text-sm mb-1">Phase 3: Formative Socratic Feedback Conferences (Mid-Week Rehearsals)</div>
      <ul class="space-y-1 text-slate-300 text-[11px]">
        <li>• Coach conducts 10-minute 1-on-1 conferences linking written evidence cards to oral performance</li>
        <li>• Students use quote-anchored prompts to rewrite weak transitions and insert rhetorical figures</li>
        <li>• Rehearsals focus on vocal inflection, eye contact, and physical blocking over polished text</li>
      </ul>
    </div>

    <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
      <div class="font-bold text-indigo-300 text-sm mb-1">Phase 4: Longitudinal Manuscript Versioning &amp; Telemetry Audit (Post-Tournament &amp; State Prep)</div>
      <ul class="space-y-1 text-slate-300 text-[11px]">
        <li>• Track manuscript evolution across iterations (Draft 1.0 Invitational &rarr; Draft 4.0 State Quals)</li>
        <li>• Audit Essay Playback™ telemetry to safeguard authentic authorship and prevent burnout</li>
        <li>• Archive championship-level manuscripts in private team repository for future curriculum modeling</li>
      </ul>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Comparative Matrix: Traditional vs. Checkmark-Powered Coaching</h2>

<div class="my-8 overflow-x-auto">
  <table class="w-full border-collapse rounded-xl overflow-hidden border border-border text-sm">
    <thead class="bg-muted text-foreground">
      <tr>
        <th class="p-3 text-left font-semibold border-b border-border">Dimension</th>
        <th class="p-3 text-left font-semibold border-b border-border">Traditional Manual Review</th>
        <th class="p-3 text-left font-semibold border-b border-border">Generic AI Checker / LLM</th>
        <th class="p-3 text-left font-semibold border-b border-border text-teal-600 dark:text-teal-400">Checkmark Platform</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border bg-card text-xs">
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">Review Turnaround per Speech</td>
        <td class="p-3 text-muted-foreground">25–35 minutes</td>
        <td class="p-3 text-muted-foreground">1–2 minutes (unverified)</td>
        <td class="p-3 font-semibold text-teal-700 dark:text-teal-300">3–5 minutes (Teacher-Verified)</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">Feedback Precision</td>
        <td class="p-3 text-muted-foreground">Variable, often subjective</td>
        <td class="p-3 text-muted-foreground">Generic / abstract summary</td>
        <td class="p-3 font-semibold text-teal-700 dark:text-teal-300">Precision quote-anchored rubric feedback</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">Rhetorical Device Recognition</td>
        <td class="p-3 text-muted-foreground">Manual identification</td>
        <td class="p-3 text-muted-foreground">Incomplete / superficial</td>
        <td class="p-3 font-semibold text-teal-700 dark:text-teal-300">Automated tagging of schemes (anaphora, chiasmus)</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">Authorship Authentication</td>
        <td class="p-3 text-muted-foreground">Purely subjective guesswork</td>
        <td class="p-3 text-muted-foreground">Opaque % score (error-prone)</td>
        <td class="p-3 font-semibold text-teal-700 dark:text-teal-300">Essay Playback™ (video-like audit trail)</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">Data Privacy (Student IP)</td>
        <td class="p-3 text-muted-foreground">High (Manual)</td>
        <td class="p-3 text-muted-foreground">Poor (Often trains public LLMs)</td>
        <td class="p-3 font-semibold text-teal-700 dark:text-teal-300">Enterprise-grade FERPA/COPPA compliant</td>
      </tr>
      <tr class="hover:bg-muted/40 transition-colors">
        <td class="p-3 font-semibold">LMS Integration</td>
        <td class="p-3 text-muted-foreground">Manual grade entry</td>
        <td class="p-3 text-muted-foreground">Copy-paste required</td>
        <td class="p-3 font-semibold text-teal-700 dark:text-teal-300">Native LTI 1.3 / SpeedGrader Sync</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>9. FERPA Zero-Training Compliance &amp; Data Privacy Architecture</h2>

<p>Competitive speech manuscripts frequently contain deeply personal narratives, sensitive adolescent disclosures, family medical histories, and unique creative intellectual property. Protecting student data privacy is paramount.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Checkmark Plagiarism Data Privacy &amp; FERPA Compliance Matrix
  </div>

  <div class="space-y-3 text-xs">
    <div class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <span class="font-bold text-teal-300">1. Zero Model Training</span>
      <span class="text-slate-300 text-[11px]">Student speech manuscripts are NEVER used to train, fine-tune, or evaluate public or private commercial Large Language Models.</span>
    </div>
    <div class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <span class="font-bold text-emerald-300">2. FERPA &amp; COPPA Compliance</span>
      <span class="text-slate-300 text-[11px]">Strict compliance with federal student privacy laws; zero sharing of Personally Identifiable Information (PII) with third-party vendors.</span>
    </div>
    <div class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <span class="font-bold text-sky-300">3. Private Encrypted Vaulting</span>
      <span class="text-slate-300 text-[11px]">All manuscripts and keystroke telemetry streams are encrypted with AES-256 at rest and TLS 1.3 in transit within isolated cloud enclaves.</span>
    </div>
    <div class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <span class="font-bold text-indigo-300">4. Team Repository Security</span>
      <span class="text-slate-300 text-[11px]">Student-to-student peer comparisons occur exclusively within the school district's private walled repository, preventing leaks.</span>
    </div>
    <div class="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <span class="font-bold text-purple-300">5. Coach-Controlled Visibility</span>
      <span class="text-slate-300 text-[11px]">AI flag statuses and telemetry audits remain educator-only, preventing premature, unwarranted accusations during student draft reviews.</span>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>10. Frequently Asked Questions (FAQs)</h2>

<div class="space-y-4 my-8">
  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <h3 class="font-semibold text-base text-foreground m-0">1. How does Checkmark parse official NSDA (National Speech &amp; Debate Association) ballot criteria into automated rubric rows?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Checkmark converts official NSDA ballot evaluation standards into structured Abstract Syntax Tree (AST) computational rules. Rather than processing ballots as vague text prompts, the system establishes distinct evaluative nodes for: (1) Topic Significance and Problem Framing, (2) Thesis Clarity and Logical Cohesion, (3) Structural Development and Transitions, (4) Supporting Evidence and Sourcing Rigor, and (5) Rhetorical Style and Emotional Pathos. For each dimension, the engine scans student manuscripts for concrete syntactic and semantic markers, extracting verbatim sentence anchors that justify the proposed performance score.
    </p>
  </div>

  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <h3 class="font-semibold text-base text-foreground m-0">2. Can Checkmark differentiate speech-to-text dictation from AI text generation?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Yes. Competitors frequently rehearse aloud using speech-to-text dictation tools (such as Apple Dictation or Google Voice Typing) to transcribe their spoken ideas. While dictation results in rapid text insertion, Checkmark's <strong>Essay Playback™</strong> telemetry easily distinguishes dictation from AI generation:
    </p>
    <ul class="list-disc pl-5 text-xs text-muted-foreground space-y-1 mt-1">
      <li><strong>Dictation Telemetry:</strong> Exhibits conversational vocabulary, natural phonetic transcription errors, colloquial filler phrases, spoken punctuation pauses, and subsequent manual revision passes.</li>
      <li><strong>Generative AI Insertion:</strong> Characterized by uniform high-velocity text drops, sophisticated multi-clause syntax with zero drafting hesitation, absence of phonetic errors, and uniform perplexity distributions.</li>
    </ul>
  </div>

  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <h3 class="font-semibold text-base text-foreground m-0">3. How does quote-anchored autograding detect classical rhetorical devices like anaphora, chiasmus, and antithesis?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Checkmark's linguistic analysis core utilizes syntactic pattern-matching algorithms to identify classical rhetorical schemes and tropes directly within manuscript text:
    </p>
    <ul class="list-disc pl-5 text-xs text-muted-foreground space-y-1 mt-1">
      <li><strong>Anaphora:</strong> Detects identical lexical phrases occurring at the beginning of successive clauses or sentences.</li>
      <li><strong>Antithesis:</strong> Identifies parallel grammatical structures containing semantic antonyms or contrasting conceptual pairs.</li>
      <li><strong>Chiasmus:</strong> Identifies inverted AB-BA grammatical patterns across adjacent clauses.</li>
    </ul>
    <p class="text-xs text-muted-foreground leading-relaxed mt-1">
      When detected, Checkmark highlights the exact sentence in an evidence card, validates its rhetorical impact, and offers vocal delivery cues for tournament rehearsal.
    </p>
  </div>

  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <h3 class="font-semibold text-base text-foreground m-0">4. How do coaches use Essay Playback™ to defend students against false AI allegations on personal narratives?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      If a student is falsely accused of using generative AI on a personal narrative speech, the coach opens Checkmark's <strong>Essay Playback™</strong> console. The coach can scrub through the complete chronological writing timeline, demonstrating the student's authentic writing process: multi-minute composing pauses, organic typing bursts, active vocabulary substitutions, and extensive sentence restructuring. This immutable keystroke telemetry serves as definitive proof of authentic human authorship, protecting students from punitive black-box algorithmic flags.
    </p>
  </div>

  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <h3 class="font-semibold text-base text-foreground m-0">5. Does Checkmark integrate directly with Canvas SpeedGrader, Buzz LMS, and Google Classroom for speech classes?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Yes. Checkmark is certified under the <strong>1EdTech LTI 1.3 Advantage</strong> standard:
    </p>
    <ul class="list-disc pl-5 text-xs text-muted-foreground space-y-1 mt-1">
      <li><strong>AGS 2.0 (Assignment and Grade Services):</strong> Pushes finalized criterion-level rubric scores, overall point totals, and quote-anchored marginal feedback directly into Canvas SpeedGrader, Buzz LMS Gradebook, and Google Classroom.</li>
      <li><strong>NRPS 2.0 (Names and Role Provisioning Services):</strong> Synchronizes course rosters and tournament cohort groups automatically, eliminating manual grade exports or spreadsheet manipulation.</li>
    </ul>
  </div>

  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <h3 class="font-semibold text-base text-foreground m-0">6. How does student-to-student matching prevent speech reuse across team seasons without exposing confidential manuscripts?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Forensics teams often accumulate vast archives of past speeches. Checkmark enables secure <strong>Student-to-Student Repository Matching</strong> within the school or district's private cloud vault. The system compares newly submitted drafts against historical team manuscripts to identify uncredited script recycling or borrowed text. Because comparisons occur within an isolated, private enclave, student manuscripts are never exposed to external web scrapers or public databases.
    </p>
  </div>

  <div class="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
    <h3 class="font-semibold text-base text-foreground m-0">7. Can coaches customize rubric weights for different forensics events?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Yes. Coaches have complete administrative control to create custom rubric templates, adjust criterion point distributions, and configure event-specific evaluation rules. For example, an Informative Speaking rubric can assign higher weight to technical source credibility and audio-visual cues, an Extemporaneous Speaking rubric can evaluate rapid 30-minute outline synthesis, and an Original Oratory rubric can emphasize personal vehicle metaphors and rhetorical figures.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Conclusion: Transforming Forensics Coaching from Grading Burnout to Competitive Excellence</h2>

<p>High school Speech and Debate cultivates the next generation of civic leaders, articulate advocates, and critical thinkers. However, when coaches are overwhelmed by 40+ hours of weekly manuscript grading alongside crushing tournament logistics, instructional quality inevitably suffers.</p>

<p>By implementing <strong>Checkmark Plagiarism's AI-Assisted Quote-Anchored Rubric Autograding and Writing Process Telemetry</strong>, Forensics programs achieve a transformative breakthrough:</p>
<ol class="space-y-2 my-4 pl-6 list-decimal">
  <li><strong>80% Faster Manuscript Turnaround:</strong> Coaches reduce evaluation time from 30 minutes to under 5 minutes per speech, eliminating grading backlogs.</li>
  <li><strong>Actionable, Quote-Anchored Feedback:</strong> Novice competitors receive precise, sentence-level guidance on thesis warrants, empirical sourcing, and classical rhetorical devices.</li>
  <li><strong>Defensible Authorship Verification:</strong> <strong>Patent-pending Essay Playback™</strong> protects honest students from false AI accusations while detecting transcription and uncredited text.</li>
  <li><strong>Elevated Competitive Performance:</strong> Rapid mid-week manuscript revisions free up valuable after-school coaching time for live vocal delivery, blocking, and memorization.</li>
</ol>

<p><em>Stop guessing, start trusting.</em> With Checkmark Plagiarism, Forensics coaches can conquer grading burnout, inspire confident student writers, and lead their teams to championship success.</p>
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
      currentSlug="2026/8/how-can-high-school-speech-and-debate-coaches-use-rubric-autograding-to-provide-objective-feedback-on-written-oratory-drafts"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
"""

with open(target_path, "w", encoding="utf-8") as f:
    f.write(page_content)

print("Target page written successfully to:", target_path)

# Update Google Sheet Row 573
credentials_path = os.path.join(os.path.dirname(__file__), "credentials.json")
gc = gspread.service_account(filename=credentials_path)
sheet = gc.open("Blog Topic Engine").sheet1

# Row 573:
# Col B (col index 2): Status -> "published"
# Col F (col index 6): File Path -> target_path (normalized with forward slashes)
normalized_file_path = target_path.replace("\\\\", "/")
sheet.update_cell(573, 2, "published")
sheet.update_cell(573, 6, normalized_file_path)

print(f"Row 573 updated: Status='published', File Path='{normalized_file_path}'")


