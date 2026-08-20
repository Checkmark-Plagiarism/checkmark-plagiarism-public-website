import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Department Chairs Standardize Rubric Grading Across Multiple Class Sections in Canvas LMS? | Checkmark Plagiarism",
  description: "An authoritative guide for department chairs, curriculum leads, and academic administrators on standardizing rubric evaluation, eliminating inter-rater grading disparities, and unifying integrity telemetry across multi-section Canvas LMS courses.",
  keywords: [
    "Canvas LMS rubric standardization",
    "inter-rater reliability",
    "department chair grading calibration",
    "LTI 1.3 Advantage AGS 2.0",
    "AI rubric autograding",
    "Checkmark Plagiarism",
    "SpeedGrader calibration",
    "multi-section course management",
    "Essay Playback",
    "academic integrity calibration",
  ],
  openGraph: {
    images: ["/images/learning/how-can-department-chairs-standardize-rubric-grading-across-multiple-class-sections-in-canvas-lms/featured.png"],
  },
};

const meta = {
  title: "How Can Department Chairs Standardize Rubric Grading Across Multiple Class Sections in Canvas LMS? | Checkmark Plagiarism",
  description: "An authoritative guide for department chairs, curriculum leads, and academic administrators on standardizing rubric evaluation, eliminating inter-rater grading disparities, and unifying integrity telemetry across multi-section Canvas LMS courses.",
  "opengraph-image": "/images/learning/how-can-department-chairs-standardize-rubric-grading-across-multiple-class-sections-in-canvas-lms/featured.png",
  date: "08-18-2026",
  readTime: "~20 min read",
  category: "Grading & Integrations",
  categories: ["Grading & Integrations", "LMS Integration", "Department Leadership", "AI Autograder", "Pedagogy"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white">
      Executive Summary
    </span>
  </div>
  <p class="text-foreground font-medium leading-relaxed">
    In multi-section courses spanning dozens of course shells, department chairs, Writing Program Administrators (WPAs), and instructional leads face a persistent crisis of <strong>inter-rater reliability</strong>. Variations between &ldquo;harsh&rdquo; and &ldquo;lenient&rdquo; graders, subjective rubric interpretation, and grading fatigue create massive grade disparities across sections, fueling student grievances, skewing departmental learning outcomes, and compromising institutional equity. While <strong>Instructure Canvas LMS</strong> provides account-level rubrics and Blueprint Courses, native LMS tools cannot standardize human subjective interpretation or verify writing authenticity. By integrating <strong>Checkmark Plagiarism</strong> via <strong>1EdTech LTI 1.3 Advantage (Assignment and Grade Services - AGS 2.0 &amp; Names and Role Provisioning Services - NRPS 2.0)</strong>, academic departments establish an objective, standardized AI first-draft evaluation baseline. Graders receive quote-anchored criterion justifications, department chairs gain cross-section variance analytics, and students are protected through patent-pending <a href="/services/writing-process" class="text-teal-600 dark:text-teal-400 font-semibold underline">Essay Playback™</a> typing dynamics—preserving faculty final authority while ensuring fair, defensible, and uniform grading across every Canvas section.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> streamlines multi-section academic calibration by uniting <a href="/services/autograder">AI autograding</a> with <a href="/services/writing-process">writing process replay</a>, <a href="/services/ai-detection">AI writing detection</a>, <a href="/services/plagiarism-detection">plagiarism detection</a>, and enterprise integrations with <a href="/services/integrations/canvas-lms">Canvas LMS</a> and <a href="/services/integrations/buzz-lms">Agilix Buzz LMS</a>.</p>

<img src="/images/learning/how-can-department-chairs-standardize-rubric-grading-across-multiple-class-sections-in-canvas-lms/featured.png" alt="Department Chair Calibration Console for Canvas LMS Multi-Section Rubric Standardization" class="w-full rounded-2xl border border-border shadow-md my-8" />

<h2>1. The Multi-Section Grading Crisis: Subjectivity, Drift, and Inter-Rater Disparities</h2>

<p>In higher education institutions, secondary school districts, and online course programs, foundational courses are rarely taught by a single instructor. A typical First-Year Composition (FYC) program, AP English cohort, Introductory Psychology sequence, or secondary Humanities department often spans <strong>10 to 60 distinct Canvas course sections</strong>, staffed by a diverse teaching team:</p>

<ul>
  <li>Full-time tenured and tenure-track faculty</li>
  <li>Adjunct instructors and contingent lecturers across multiple campuses</li>
  <li>Graduate Teaching Assistants (GTAs) with varying instructional experience</li>
  <li>High school teachers delivering dual-enrollment sections</li>
</ul>

<p>While all sections share a common course catalog description, syllabus objectives, and standardized Canvas assignment rubric, the actual grades students receive often depend more on <strong>which section they were assigned</strong> than the objective quality of their writing.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    The Multi-Section Inter-Rater Reliability Problem
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-rose-500/40">
      <div class="flex items-center justify-between mb-2">
        <span class="font-semibold text-rose-300 text-xs">Section 01</span>
        <span class="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800">Veteran Prof</span>
      </div>
      <div class="text-2xl font-bold text-white mb-1">78.4% <span class="text-xs font-normal text-slate-400">(C+)</span></div>
      <div class="text-xs text-slate-400 space-y-1">
        <div><strong>Std Dev (&sigma;):</strong> 11.2 (Broad spread)</div>
        <div><strong>Primary Focus:</strong> Rhetorical logic &amp; rigor</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-amber-500/40">
      <div class="flex items-center justify-between mb-2">
        <span class="font-semibold text-amber-300 text-xs">Section 08</span>
        <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">New Adjunct</span>
      </div>
      <div class="text-2xl font-bold text-white mb-1">91.2% <span class="text-xs font-normal text-slate-400">(A-)</span></div>
      <div class="text-xs text-slate-400 space-y-1">
        <div><strong>Std Dev (&sigma;):</strong> 4.1 (Compressed top)</div>
        <div><strong>Primary Focus:</strong> Grammar &amp; surface mechanics</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-indigo-500/40">
      <div class="flex items-center justify-between mb-2">
        <span class="font-semibold text-indigo-300 text-xs">Section 14</span>
        <span class="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">Novice GTA</span>
      </div>
      <div class="text-2xl font-bold text-white mb-1">84.1% <span class="text-xs font-normal text-slate-400">(B)</span></div>
      <div class="text-xs text-slate-400 space-y-1">
        <div><strong>Std Dev (&sigma;):</strong> 14.8 (High inconsistency)</div>
        <div><strong>Primary Focus:</strong> Length &amp; perceived effort</div>
      </div>
    </div>
  </div>

  <div class="mt-5 pt-4 border-t border-slate-800 text-center text-xs text-rose-300 font-medium">
    &darr; <strong>Institutional Result:</strong> Grade Inconsistency &bull; &ldquo;Section Shopping&rdquo; &bull; Student Grievances &bull; Distorted Departmental Learning Outcomes
  </div>
</div>

<h3>The Five Evaluator Archetypes and Rubric Drift</h3>

<p>Even when instructors utilize an identical, detailed scoring rubric in Canvas SpeedGrader, human evaluators interpret qualitative descriptors (<em>&ldquo;thoroughly develops argument,&rdquo; &ldquo;demonstrates nuanced insight,&rdquo; &ldquo;adequate textual support&rdquo;</em>) through subjective personal lenses. Over a 15-week academic term, departments routinely observe five evaluator archetypes:</p>

<div class="my-6 space-y-3 font-sans">
  <div class="rounded-xl border border-border bg-card p-4 flex gap-4 items-start shadow-sm">
    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-sm">1</span>
    <div>
      <h4 class="text-sm font-semibold text-foreground m-0">The Severe Penalizer (&ldquo;The Gatekeeper&rdquo;)</h4>
      <p class="text-xs text-muted-foreground mt-1 mb-0">Grades with punitive rigor. A single unsupported claim or non-standard transitional phrase drops an essay from &ldquo;Exemplary&rdquo; to &ldquo;Developing.&rdquo; Class averages hover in the low 70s.</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex gap-4 items-start shadow-sm">
    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-sm">2</span>
    <div>
      <h4 class="text-sm font-semibold text-foreground m-0">The Leniency Maximizer (&ldquo;The Crowd Pleaser&rdquo;)</h4>
      <p class="text-xs text-muted-foreground mt-1 mb-0">Assigns top-bracket scores to avoid student friction, grade appeals, or negative student evaluations. Class averages exceed 92%, masking foundational writing deficiencies.</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex gap-4 items-start shadow-sm">
    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-sm">3</span>
    <div>
      <h4 class="text-sm font-semibold text-foreground m-0">The Central Tendency Hedger</h4>
      <p class="text-xs text-muted-foreground mt-1 mb-0">Hesitates to award either failing marks or full credit. Every student receives a mid-level &ldquo;B&rdquo; (82%–86%), flattening the distribution curve and failing to distinguish exceptional analysis from mediocre summary.</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex gap-4 items-start shadow-sm">
    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-sm">4</span>
    <div>
      <h4 class="text-sm font-semibold text-foreground m-0">The &ldquo;Halo &amp; Horns&rdquo; Grader</h4>
      <p class="text-xs text-muted-foreground mt-1 mb-0">Allows early impressions of a student&rsquo;s verbal participation, draft outlines, or formatting aesthetics to dictate scores across unrelated criteria (e.g., docking points on &ldquo;Critical Argumentation&rdquo; because the Works Cited page had an incorrect indent).</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex gap-4 items-start shadow-sm">
    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-500/10 text-slate-600 dark:text-slate-400 font-bold text-sm">5</span>
    <div>
      <h4 class="text-sm font-semibold text-foreground m-0">The Fatigued Drifter</h4>
      <p class="text-xs text-muted-foreground mt-1 mb-0">Starts grading with high precision on Essay #1 (providing extensive marginalia and strict scoring) but succumbs to cognitive fatigue by Essay #80, rapidly clicking mid-tier rubric criteria to meet gradebook submission deadlines.</p>
    </div>
  </div>
</div>

<h3>The Institutional Consequences for Department Leadership</h3>

<p>When inter-rater variance remains unchecked, the damage extends far beyond individual classroom friction:</p>

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-700 text-xs font-bold dark:bg-rose-950 dark:text-rose-300">1</span>
      <h4 class="text-sm font-semibold text-foreground m-0">Section Shopping &amp; Equity Gaps</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">Students quickly learn which instructors are &ldquo;easy A&rsquo;s&rdquo; and flood registration for those sections, while demanding sections suffer low enrollment. Students enrolled in rigorous sections face unearned GPA penalties.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold dark:bg-amber-950 dark:text-amber-300">2</span>
      <h4 class="text-sm font-semibold text-foreground m-0">Corrupted Accreditation &amp; SLO Data</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">Department chairs must submit student learning outcome (SLO) data for regional accreditation (SACSCOC, HLC, MSCHE, NECHE, WSCUC). If Section A reports 95% mastery on Information Literacy while Section B reports 62%, the aggregate data is statistically invalid.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold dark:bg-indigo-950 dark:text-indigo-300">3</span>
      <h4 class="text-sm font-semibold text-foreground m-0">Escalating Grade Grievances</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">When students compare papers with peers in other sections and discover identical analytical errors penalized by 15 points in one section but ignored in another, academic grievance committees are overwhelmed with appeals.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold dark:bg-cyan-950 dark:text-cyan-300">4</span>
      <h4 class="text-sm font-semibold text-foreground m-0">Inconsistent Academic Integrity Standards</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">Without unified integrity baselines, one instructor accuses a student of unauthorized AI generation based on a gut feeling, while another instructor in the adjacent section fails to notice an unedited 2,000-word copy-paste from Wikipedia.</p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>2. Technical Mechanics in Canvas LMS: Native Capabilities &amp; Architectural Limitations</h2>

<p>To address grading variance, enterprise institutions rely on <strong>Instructure Canvas LMS</strong>. Canvas provides robust structural tools for course management, but understanding the boundary between <strong>structural configuration</strong> and <strong>evaluative calibration</strong> is essential.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Canvas LMS Structural Hierarchy for Rubric Deployment
  </div>

  <div class="space-y-4 max-w-2xl mx-auto text-xs">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-teal-500/40 text-center">
      <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-900/80 text-teal-300 mb-1 border border-teal-700">ROOT ACCOUNT LEVEL</span>
      <h4 class="text-sm font-bold text-white m-0">District / University Institutional Instance</h4>
      <p class="text-slate-400 mt-1 mb-0">General Education Outcomes &bull; University-Wide Core Competencies (Written &amp; Quantitative Literacy)</p>
    </div>

    <div class="text-center text-teal-400 font-bold text-base">&darr;</div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-indigo-500/40 text-center">
      <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-900/80 text-indigo-300 mb-1 border border-indigo-700">SUB-ACCOUNT LEVEL</span>
      <h4 class="text-sm font-bold text-white m-0">College of Arts &amp; Sciences &gt; Department of English</h4>
      <p class="text-slate-400 mt-1 mb-0">Departmental Locked Rubrics &bull; Standardized Scoring Criteria &amp; Rating Descriptions</p>
    </div>

    <div class="text-center text-teal-400 font-bold text-base">&darr;</div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-purple-500/40 text-center">
      <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-900/80 text-purple-300 mb-1 border border-purple-700">BLUEPRINT MASTER COURSE</span>
      <h4 class="text-sm font-bold text-white m-0">Master_ENG101 Shell</h4>
      <p class="text-slate-400 mt-1 mb-0">Standardized Assignment Prompts &bull; Locked Rubrics Bound to AGS Line Items &bull; Blueprint Sync</p>
    </div>

    <div class="text-center text-teal-400 font-bold text-base">&darr; Cascading Blueprint Sync</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
      <div class="rounded-lg bg-slate-800/60 p-3 border border-slate-700 text-center">
        <div class="font-semibold text-slate-200">Associated Section 01</div>
        <div class="text-[11px] text-slate-400 mt-0.5">Instructor A &bull; Synchronized Rubric</div>
      </div>
      <div class="rounded-lg bg-slate-800/60 p-3 border border-slate-700 text-center">
        <div class="font-semibold text-slate-200">Associated Section 42</div>
        <div class="text-[11px] text-slate-400 mt-0.5">Instructor B &bull; Synchronized Rubric</div>
      </div>
    </div>
  </div>
</div>

<h3>Account-Level &amp; Sub-Account Institutional Rubrics vs. Course-Level Inheritance</h3>

<p>In Canvas, rubrics can be created at three hierarchical levels:</p>

<ol>
  <li><strong>Root Account Level:</strong> Available across every college, department, and course shell in the institutional instance. Typically reserved for university-wide general education competencies (e.g., Written Communication, Quantitative Reasoning).</li>
  <li><strong>Sub-Account Level:</strong> Created within specific departmental sub-accounts (e.g., <em>College of Arts &amp; Sciences &gt; Department of English</em>). All course shells housed under that sub-account inherit these rubrics. Department chairs can lock criteria and rating scales to prevent individual instructors from modifying point values.</li>
  <li><strong>Course Level:</strong> Created by individual instructors within their specific course shells. These rubrics cannot be audited centrally and represent the primary source of unauthorized rubric variation.</li>
</ol>

<h3>Canvas Blueprint Courses: Centralized Deployment</h3>

<p>Department chairs utilize <strong>Canvas Blueprint Courses</strong> (<code>Course ID: Master_ENG101</code>) to standardize assignments. When an assignment with an attached sub-account rubric is created in a Blueprint shell and synced:</p>

<ul>
  <li>The assignment description, point value, submission type, and attached rubric lock into all associated course shells.</li>
  <li>Individual section instructors cannot alter the rubric point scale or delete criteria.</li>
  <li>Updates made to the Blueprint rubric automatically cascade to all active sections upon running a synchronization cycle.</li>
</ul>

<h3>Why Native Canvas Rubrics Fall Short: The &ldquo;Interpretation Gap&rdquo;</h3>

<p>While Blueprint courses solve the <strong>structural distribution</strong> problem, they do not solve the <strong>cognitive evaluation</strong> problem.</p>

<p>Canvas SpeedGrader presents the instructor with a clickable matrix of criteria and rating descriptions. However:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
  <div class="rounded-xl border border-rose-300 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 p-4">
    <div class="flex items-center gap-2 mb-1.5 text-rose-700 dark:text-rose-300 font-bold text-xs">
      <span>❌ 1. No Evidence Binding</span>
    </div>
    <p className="text-xs text-muted-foreground m-0">Clicking a rubric criterion (e.g., &ldquo;Adequate Evidence: 15/20&rdquo;) does not link that score to any specific paragraph or sentence in the student&rsquo;s document.</p>
  </div>

  <div class="rounded-xl border border-rose-300 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 p-4">
    <div class="flex items-center gap-2 mb-1.5 text-rose-700 dark:text-rose-300 font-bold text-xs">
      <span>❌ 2. Zero Real-Time Calibration</span>
    </div>
    <p class="text-xs text-muted-foreground m-0">Canvas provides no indication to the instructor if their average score across the first 10 papers is 2.5 standard deviations higher than departmental norms.</p>
  </div>

  <div class="rounded-xl border border-rose-300 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 p-4">
    <div class="flex items-center gap-2 mb-1.5 text-rose-700 dark:text-rose-300 font-bold text-xs">
      <span>❌ 3. No Cross-Section Chair Telemetry</span>
    </div>
    <p class="text-xs text-muted-foreground m-0">To audit grading consistency across 40 sections in native Canvas, a department chair must manually open 40 individual course shells and click through submissions one by one.</p>
  </div>

  <div class="rounded-xl border border-rose-300 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 p-4">
    <div class="flex items-center gap-2 mb-1.5 text-rose-700 dark:text-rose-300 font-bold text-xs">
      <span>❌ 4. Disjointed Integrity Tools</span>
    </div>
    <p class="text-xs text-muted-foreground m-0">Similarity reports appear as isolated percentages in a sidebar icon without direct contextual integration into the rubric criterion for &ldquo;Originality and Source Attribution.&rdquo;</p>
  </div>
</div>

<img src="/images/services/report-rubric-tiles.png" alt="Checkmark Modular Rubric Criterion Tiles" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>3. Technical Implementation: 1EdTech LTI 1.3 Advantage Integration</h2>

<p>To bridge the gap between static Canvas rubrics and standardized, evidence-anchored evaluation, enterprise departments deploy <strong>Checkmark Plagiarism</strong> through <strong>1EdTech LTI 1.3 Advantage</strong>.</p>

<p>LTI 1.3 replaces legacy LTI 1.1/1.2 protocols with OAuth2 authentication, JSON Web Tokens (JWT), and three specialized Advantage services that allow bi-directional synchronization between Canvas and Checkmark:</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Checkmark LTI 1.3 Advantage Synchronization Pipeline
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="font-bold text-slate-200 mb-2 flex items-center justify-between">
        <span>INSTRUCTURE CANVAS LMS</span>
        <span class="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-teal-300">LTI Tool Consumer</span>
      </div>
      <ul class="text-slate-300 space-y-1.5 pl-4 list-disc">
        <li>Account &amp; Sub-Account Hierarchy</li>
        <li>Section Rosters &amp; Enrollment Endpoints</li>
        <li>Canvas SpeedGrader &amp; Gradebook Columns</li>
        <li>Master Blueprint Course Rubric Schemas</li>
      </ul>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-teal-500/40">
      <div class="font-bold text-teal-300 mb-2 flex items-center justify-between">
        <span>CHECKMARK INTEGRATION GATEWAY</span>
        <span class="text-[10px] bg-teal-900 text-teal-200 px-2 py-0.5 rounded border border-teal-700">LTI 1.3 Tool Provider</span>
      </div>
      <ul class="text-slate-300 space-y-1.5 pl-4 list-disc">
        <li>OAuth2 JWT Token Handshake &amp; State Validation</li>
        <li>NRPS 2.0 Multi-Section Roster Sync</li>
        <li>Deep Linking 2.0 Assignment Launch</li>
        <li>AGS 2.0 Line Item &amp; Sub-Score Results Passback</li>
      </ul>
    </div>
  </div>

  <div class="mt-4 rounded-xl bg-slate-800/60 p-4 border border-slate-700 text-xs">
    <div class="font-semibold text-teal-300 mb-2">CHECKMARK UNIFIED EVALUATION SUITE</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="rounded bg-slate-900/80 p-3 border border-slate-700/80">
        <div class="font-bold text-white mb-1">Standardized AI Autograder</div>
        <p class="text-slate-400 text-[11px] m-0">Algorithmic baseline &bull; Quote-anchored evidence &bull; Criterion justification generation</p>
      </div>
      <div class="rounded bg-slate-900/80 p-3 border border-slate-700/80">
        <div class="font-bold text-white mb-1">Multi-Factor Integrity Scan</div>
        <p class="text-slate-400 text-[11px] m-0">Passage-level AI detection &bull; Side-by-side plagiarism &bull; Patent-pending Essay Playback™</p>
      </div>
    </div>
  </div>

  <div class="mt-4 rounded-xl bg-teal-950/60 p-4 border border-teal-500 text-center text-xs">
    <div class="font-bold text-teal-300 text-sm mb-1">DEPARTMENT CHAIR CALIBRATION &amp; MODERATION CONSOLE</div>
    <p class="text-slate-300 text-[11px] m-0">
      Cross-Section Distribution Curves (&mu;, &sigma;) &bull; Outlier Drift Detection (&plusmn;1.5&sigma;) &bull; Teacher-in-the-Loop 100% Sign-Off Authority
    </p>
  </div>

  <div class="mt-3 text-center text-xs text-teal-400 font-medium">
    &darr; Atomic LMS Passback (Criterion Scores + Quote Anchors Pushed Directly to Canvas SpeedGrader)
  </div>
</div>

<h3>1. Names and Role Provisioning Services (NRPS 2.0)</h3>

<p>NRPS 2.0 eliminates manual roster uploads and enrollment errors. When Checkmark launches within a Canvas course shell:</p>

<ul>
  <li>It queries the Canvas API to retrieve the complete course roster, including student Canvas IDs, names, and assigned section numbers (<code>Section 01</code>, <code>Section 02</code>, etc.).</li>
  <li>It distinguishes between administrative roles (<code>Department Chair</code>, <code>Lead Instructor</code>), grading roles (<code>Teacher</code>, <code>Teaching Assistant</code>), and student roles (<code>Student</code>).</li>
  <li>It establishes a unified multi-section cohort, allowing department chairs to view aggregate statistics across all sections while restricting individual instructors to their specific student submissions.</li>
</ul>

<h3>2. Assignment and Grade Services (AGS 2.0)</h3>

<p>AGS 2.0 governs how grades, criterion breakdowns, and rubric feedback pass back into the Canvas gradebook:</p>

<ul>
  <li><strong>LineItem Resource:</strong> Checkmark creates and manages the primary gradebook column in Canvas.</li>
  <li><strong>Score Publishing:</strong> When an instructor approves an AI-drafted rubric evaluation, Checkmark sends an HTTP <code>POST</code> request containing the final score, submission timestamp, and grading progress status (<code>FullyGraded</code>).</li>
  <li><strong>Sub-Score Criterion Breakdown (<code>result</code> Object):</strong> Checkmark maps its AI-evaluated criteria directly to the corresponding Canvas rubric criterion IDs, populating individual rubric cells inside Canvas SpeedGrader.</li>
  <li><strong>Submission Comments:</strong> Checkmark formats the quote-anchored written justifications into structured markdown and posts them directly into the Canvas SpeedGrader comment feed, ensuring students see transparent feedback without leaving Canvas.</li>
</ul>

<hr class="my-8 border-border" />

<h2>4. Checkmark’s Standardized AI Rubric Autograding Engine</h2>

<p>To eliminate inter-rater variance, Checkmark Plagiarism provides a <strong>standardized AI first-draft grading baseline</strong>. Rather than relying on disconnected prompts in commercial chatbots, Checkmark embeds a sophisticated, pedagogical evaluation engine directly into the departmental workflow.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Standardized Evaluation Workflow
  </div>

  <div class="space-y-3 max-w-xl mx-auto text-xs">
    <div class="rounded-lg bg-slate-800 p-3 border border-slate-700 flex items-center justify-between">
      <div><strong>[1] Centralized Rubric Binding</strong></div>
      <span class="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-teal-300">Department Master Shell</span>
    </div>
    <div class="text-center text-slate-500 font-bold">&darr;</div>

    <div class="rounded-lg bg-slate-800 p-3 border border-slate-700 flex items-center justify-between">
      <div><strong>[2] Automated First-Draft Autograding</strong></div>
      <span class="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-teal-300">Quote-Anchored Extraction</span>
    </div>
    <div class="text-center text-slate-500 font-bold">&darr;</div>

    <div class="rounded-lg bg-slate-800 p-3 border border-slate-700 flex items-center justify-between">
      <div><strong>[3] Multi-Section Variance Calibration</strong></div>
      <span class="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-teal-300">Unvarying Baseline across 50 Sections</span>
    </div>
    <div class="text-center text-slate-500 font-bold">&darr;</div>

    <div class="rounded-lg bg-teal-950/60 p-4 border border-teal-500 text-center">
      <div class="font-bold text-teal-300 mb-1">[4] TEACHER-IN-THE-LOOP REVIEW &amp; CALIBRATION</div>
      <div class="text-[11px] text-slate-300">Review pre-populated cells &bull; Adjust scores &bull; Sign off with 100% faculty authority</div>
    </div>
    <div class="text-center text-slate-500 font-bold">&darr;</div>

    <div class="rounded-lg bg-slate-800 p-3 border border-slate-700 flex items-center justify-between">
      <div><strong>[5] Atomic LMS Passback</strong></div>
      <span class="text-[10px] bg-teal-800 text-teal-100 px-2 py-0.5 rounded font-semibold">SpeedGrader Sync</span>
    </div>
  </div>
</div>

<h3>The Power of Quote-Anchored Criterion Justifications</h3>

<p>A common weakness of both human and generic AI grading is vague, unhelpful feedback (e.g., <em>&ldquo;Good analysis, but transitions need work&rdquo;</em>). Checkmark solves this by anchoring every criterion score in <strong>direct textual evidence</strong> extracted from the student&rsquo;s submission.</p>

<div class="my-6 rounded-2xl border border-teal-500/30 bg-card p-6 shadow-sm font-sans">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
    <div>
      <span class="text-xs font-bold uppercase tracking-wider text-teal-600">CRITERION FEEDBACK CARD</span>
      <h4 class="text-sm font-bold text-foreground m-0">Use of Textual Evidence &amp; Synthesis</h4>
    </div>
    <span class="rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 px-3 py-1 text-xs font-bold">
      SCORE: 16 / 20 (Proficient)
    </span>
  </div>

  <div class="space-y-3.5 text-xs">
    <div class="rounded-lg bg-muted/40 p-3 border border-border">
      <div class="font-semibold text-foreground mb-1">JUSTIFICATION:</div>
      <p class="m-0 text-muted-foreground leading-relaxed">
        The submission incorporates relevant primary textual evidence in Paragraphs 2 and 4 to support the thesis regarding industrialization. However, Paragraph 3 relies on an unanalyzed block quotation without explanatory synthesis connecting it to the claim.
      </p>
    </div>

    <div class="space-y-2">
      <div class="font-semibold text-foreground">📌 ANCHORED EVIDENCE FROM ESSAY:</div>
      <div class="bg-teal-50/40 dark:bg-teal-950/20 p-3 rounded-lg border border-teal-200 dark:border-teal-900/40 space-y-1">
        <div class="font-mono text-[11px] text-muted-foreground"><strong>Paragraph 2 [Lines 24-26]:</strong> <em>&ldquo;The rapid migration to urban centers created an immediate deficit in municipal infrastructure, as seen in Manchester&rsquo;s 1844 housing census...&rdquo;</em></div>
        <div class="text-teal-700 dark:text-teal-300 font-medium text-[11px]">&rarr; Analysis: Strong contextual integration and primary data synthesis.</div>
      </div>
      <div class="bg-rose-50/40 dark:bg-rose-950/20 p-3 rounded-lg border border-rose-200 dark:border-rose-900/40 space-y-1">
        <div class="font-mono text-[11px] text-muted-foreground"><strong>Paragraph 3 [Lines 42-45]:</strong> <em>&ldquo;As Dickens wrote, &lsquo;It was the best of times, it was the worst of times...&rsquo; This shows that things were complicated.&rdquo;</em></div>
        <div class="text-rose-700 dark:text-rose-300 font-medium text-[11px]">&rarr; Critique: Dropped quotation with superficial follow-up analysis.</div>
      </div>
    </div>

    <div class="rounded-lg bg-amber-50/50 dark:bg-amber-950/20 p-3 border border-amber-200 dark:border-amber-900/40">
      <div class="font-semibold text-amber-800 dark:text-amber-300 mb-1">💡 TARGETED GROWTH TIP:</div>
      <p class="m-0 text-muted-foreground leading-relaxed">
        In Paragraph 3, replace the broad summary with 1-2 sentences explaining specifically how Dickens&rsquo; paradox reflects the socioeconomic divide documented in your Manchester data.
      </p>
    </div>
  </div>
</div>

<p>By providing direct quote anchors:</p>
<ol>
  <li><strong>Instructors Save Time:</strong> Teachers do not have to spend 10 minutes copying and pasting student sentences into marginal comments.</li>
  <li><strong>Grading Consistency is Guaranteed:</strong> The AI applies the exact same threshold for &ldquo;effective textual integration&rdquo; whether it is evaluating Paper #1 in Section 01 or Paper #45 in Section 38.</li>
  <li><strong>Student Disputes Dissolve:</strong> When students receive specific citations showing where their analysis succeeded and where it faltered, grade disputes drop significantly.</li>
</ol>

<h3>Batch Moderation &amp; Department Chair Analytics Console</h3>

<p>For department chairs, Checkmark introduces a dedicated <strong>Multi-Section Moderation Console</strong>. Instead of remaining blind to grading trends until final grades are posted, chairs can monitor live evaluation telemetry across every section:</p>

<ul>
  <li><strong>Real-Time Distribution Curves:</strong> Visualizes mean (&mu;), median, and standard deviation (&sigma;) across all course sections simultaneously.</li>
  <li><strong>Outlier Drift Detection:</strong> Automatically flags instructors whose score adjustments deviate by more than &plusmn;1.5 standard deviations from the departmental baseline.</li>
  <li><strong>Criterion Heatmaps:</strong> Identifies specific rubric criteria where students across all sections are struggling (e.g., a department-wide drop in &ldquo;Counterargument Synthesis&rdquo;), providing actionable data for mid-semester curricular adjustments.</li>
</ul>

<div class="my-6 overflow-x-auto rounded-xl border border-border font-sans">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Section</th>
        <th class="p-3">Instructor</th>
        <th class="p-3">Submissions</th>
        <th class="p-3">Mean Score</th>
        <th class="p-3">Std Dev (&sigma;)</th>
        <th class="p-3">Calibration Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-mono font-medium text-foreground">ENG101-01</td>
        <td class="p-3">Prof. Adams</td>
        <td class="p-3">24 / 24</td>
        <td class="p-3 font-semibold text-foreground">82.4%</td>
        <td class="p-3">6.2</td>
        <td class="p-3"><span class="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 font-semibold">&bull; Calibrated</span></td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-mono font-medium text-foreground">ENG101-02</td>
        <td class="p-3">TA Baker</td>
        <td class="p-3">22 / 22</td>
        <td class="p-3 font-semibold text-foreground">83.1%</td>
        <td class="p-3">5.8</td>
        <td class="p-3"><span class="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 font-semibold">&bull; Calibrated</span></td>
      </tr>
      <tr class="hover:bg-muted/30 bg-amber-500/5">
        <td class="p-3 font-mono font-medium text-foreground">ENG101-03</td>
        <td class="p-3">Adj. Clark</td>
        <td class="p-3">25 / 25</td>
        <td class="p-3 font-semibold text-amber-600 dark:text-amber-400">94.8%</td>
        <td class="p-3">2.1</td>
        <td class="p-3"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">&Delta; High Leniency Flag (+2.1&sigma;)</span></td>
      </tr>
      <tr class="hover:bg-muted/30 bg-rose-500/5">
        <td class="p-3 font-mono font-medium text-foreground">ENG101-04</td>
        <td class="p-3">Prof. Davis</td>
        <td class="p-3">23 / 23</td>
        <td class="p-3 font-semibold text-rose-600 dark:text-rose-400">71.2%</td>
        <td class="p-3">12.4</td>
        <td class="p-3"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">&Delta; High Severity Flag (-2.4&sigma;)</span></td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-mono font-medium text-foreground">ENG101-05</td>
        <td class="p-3">TA Evans</td>
        <td class="p-3">24 / 24</td>
        <td class="p-3 font-semibold text-foreground">81.9%</td>
        <td class="p-3">6.0</td>
        <td class="p-3"><span class="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 font-semibold">&bull; Calibrated</span></td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Teacher-in-the-Loop: Non-Negotiable Final Authority</h3>

<p>Checkmark operates under a strict <strong>teacher-in-the-loop pedagogical framework</strong>. The AI autograder produces a comprehensive <em>first-draft recommendation</em>; it does <strong>not</strong> finalize or publish grades autonomously.</p>

<ul>
  <li><strong>Draft Status:</strong> All autograded criteria remain in &ldquo;Draft Mode&rdquo; until an instructor opens the submission.</li>
  <li><strong>1-Click Adjustments:</strong> Instructors can accept the AI draft, adjust a criterion score up or down with a single click, or type custom notes.</li>
  <li><strong>Pedagogical Autonomy:</strong> If an instructor knows a student overcame a specific learning challenge or followed an approved alternative prompt, the instructor retains full authority to override any score.</li>
  <li><strong>Audit Trail:</strong> Checkmark maintains a complete revision log documenting original AI recommendations, instructor adjustments, and final published scores.</li>
</ul>

<img src="/images/services/report-grading-view.png" alt="Checkmark Full Rubric Grading View with Evidence Highlights" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>5. Multi-Dimensional Academic Integrity Telemetry: Beyond the Grade</h2>

<p>Standardizing grading across multiple sections requires more than rubric alignment—it requires standardizing how academic integrity violations are investigated and resolved.</p>

<p>Traditional AI detectors rely on opaque, whole-paper percentage scores (e.g., <em>&ldquo;87% AI&rdquo;</em>). These black-box scores lack evidentiary backing, produce false positives on neurodivergent and English Language Learner (ELL) prose, and lead to adversarial teacher-student confrontations. Checkmark integrates a <strong>multi-dimensional evidence suite</strong> directly into the rubric grading interface:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">1</span>
      <h4 class="text-sm font-semibold text-foreground m-0">Patent-Pending Essay Playback™</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">Keystroke-by-keystroke video timeline (1x to 8x speed). Reconstructs natural typing, pauses, deletions, and external paste events.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold dark:bg-indigo-950 dark:text-indigo-300">2</span>
      <h4 class="text-sm font-semibold text-foreground m-0">Passage-Level AI Detection</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">Analyzes perplexity and burstiness at the passage level with confidence sliders. Honest N/A guardrail for text under 150 words.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold dark:bg-cyan-950 dark:text-cyan-300">3</span>
      <h4 class="text-sm font-semibold text-foreground m-0">Defensible Plagiarism Matching</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">Scans billions of live web pages and internal institutional repositories. Side-by-side quote links and peer match analysis.</p>
  </div>
</div>

<h3>1. Patent-Pending Essay Playback™: Keystroke &amp; Temporal Dynamics</h3>

<p>Checkmark&rsquo;s flagship innovation, <a href="/services/writing-process"><strong>Essay Playback™</strong></a>, records the authentic drafting process keystroke-by-keystroke. Educators can scrub through the entire writing session like a video timeline at 1x, 2x, 4x, or 8x speed.</p>

<img src="/images/services/report-paste-evidence.png" alt="Checkmark Essay Playback Keystroke Dynamics and Paste Event Verification" class="w-full rounded-2xl border border-border shadow-md my-8" />

<ul>
  <li><strong>Natural Composing Dynamics:</strong> Authentic human writing exhibits characteristic bursts of typing (25–65 WPM), interspersed with cognitive pauses (thinking, planning, consulting sources), deletions, and syntactic restructuring.</li>
  <li><strong>External Paste Tracking:</strong> If a student pastes text from an external source, Checkmark flags the exact timestamp, character count, and duration.</li>
  <li><strong>Full Original Text Preservation:</strong> Checkmark preserves the complete original pasted text even if the student subsequently rewrites, paraphrases, or edits every word over the next two hours.</li>
  <li><strong>Transcription Detection:</strong> Identifies mechanical, steady typing without natural pauses or backspaces—a hallmark of students manually retyping text while reading off a smartphone, second screen, or dictation feed.</li>
  <li><strong>Exonerating Honest Students:</strong> If an external detector falsely flags an authentic paper as AI, Essay Playback™ serves as undeniable proof of genuine, organic authorship.</li>
</ul>

<h3>2. Passage-Level AI Detection with Calibrated Sliders</h3>

<p>Rather than outputting a single, arbitrary percentage for the entire document, Checkmark highlights specific passages:</p>

<ul>
  <li><strong>Passage-Level Granularity:</strong> Underlines individual paragraphs with calibrated confidence indicators (<em>Typical Human Style</em> vs. <em>Typical AI Pattern</em>).</li>
  <li><strong>Linguistic Telemetry:</strong> Evaluates perplexity (vocabulary predictability) and burstiness (sentence length variation).</li>
  <li><strong>Honest Guardrails (&lt;150 Words):</strong> If a passage is under ~150 words, Checkmark displays <code>N/A</code> rather than guessing on insufficient sample sizes.</li>
  <li><strong>Educator-Only Flag Statuses:</strong> Flags (<em>Flagged</em>, <em>Resolved</em>, <em>Not Flagged</em>) remain strictly private to educators, preventing premature or automated student accusations.</li>
</ul>

<h3>3. Defensible Plagiarism Matching &amp; Uncited Source Coaching</h3>

<p>Checkmark scans billions of live web pages, open-access academic repositories, and internal institutional submissions:</p>

<ul>
  <li><strong>Side-by-Side Quote Matching:</strong> Highlights matched text alongside clickable links to the live original source.</li>
  <li><strong>Dedicated Uncited Source Differentiation:</strong> Differentiates between intentional plagiarism and poor citation mechanics, allowing instructors to use the report for citation coaching.</li>
  <li><strong>Student-to-Student Cohort Matching:</strong> Detects unauthorized collaboration across different sections within the same Canvas institution without exposing student data externally.</li>
</ul>

<hr class="my-8 border-border" />

<h2>6. Real-World Case Studies &amp; Departmental Impact</h2>

<h3>Case Study 1: Multi-Section First-Year Composition (FYC) Program</h3>

<ul>
  <li><strong>Institution:</strong> Large Public Research University</li>
  <li><strong>Scope:</strong> 45 sections of English 101, 32 instructors (20 GTAs, 8 adjuncts, 4 full-time faculty), 1,080 students.</li>
  <li><strong>Challenge:</strong> High inter-rater variance (&sigma; = 14.2). Section averages ranged from 71.4% to 92.8%. Over 65 formal grade appeals were filed in the prior fall semester.</li>
</ul>

<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-5 font-sans">
  <div class="rounded-xl border border-rose-300 dark:border-rose-900/60 bg-rose-50/30 dark:bg-rose-950/20 p-5">
    <div class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">Before Checkmark (Manual Canvas)</div>
    <ul class="text-xs text-muted-foreground space-y-2 list-disc pl-4 mb-0">
      <li><strong>Section Mean Range:</strong> 71.4% &ndash; 92.8% (21.4% swing)</li>
      <li><strong>Inter-Rater Std Dev (&sigma;):</strong> 14.2</li>
      <li><strong>Grading Turnaround:</strong> 16.4 days</li>
      <li><strong>Formal Grade Appeals:</strong> 68 appeals filed</li>
      <li><strong>GTA Grading Time:</strong> 28 hours / paper cycle</li>
    </ul>
  </div>

  <div class="rounded-xl border border-teal-500/40 bg-teal-50/30 dark:bg-teal-950/20 p-5">
    <div class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">After Checkmark (LTI 1.3 AI Calibration)</div>
    <ul class="text-xs text-muted-foreground space-y-2 list-disc pl-4 mb-0">
      <li><strong>Section Mean Range:</strong> 81.2% &ndash; 84.6% (3.4% swing)</li>
      <li><strong>Inter-Rater Std Dev (&sigma;):</strong> 3.8 <span class="text-teal-600 font-semibold">(&darr; 73% reduction)</span></li>
      <li><strong>Grading Turnaround:</strong> 4.2 days <span class="text-teal-600 font-semibold">(&darr; 74% faster)</span></li>
      <li><strong>Formal Grade Appeals:</strong> 4 appeals <span class="text-teal-600 font-semibold">(&darr; 94% drop)</span></li>
      <li><strong>GTA Grading Time:</strong> 9 hours / paper cycle</li>
    </ul>
  </div>
</div>

<p><strong>Implementation:</strong> The Writing Program Administrator (WPA) deployed a locked 5-criterion rubric via a Canvas Blueprint Course. Checkmark generated standardized AI first-draft evaluations. GTAs and faculty used quote-anchored justifications to review and calibrate their grading. The WPA monitored the Multi-Section Moderation Console weekly, holding short calibration check-ins with outlier instructors.</p>

<hr class="my-6 border-border" />

<h3>Case Study 2: High School AP English Department</h3>

<ul>
  <li><strong>Institution:</strong> Suburban Public High School District</li>
  <li><strong>Scope:</strong> 6 AP English Literature teachers across 14 sections, 380 students.</li>
  <li><strong>Challenge:</strong> Subjective drift on the College Board 6-Point Analytic Rubric (Thesis: 0–1, Evidence &amp; Commentary: 0–4, Sophistication: 0–1). Novice AP teachers struggled to calibrate the &ldquo;Sophistication&rdquo; point consistently.</li>
  <li><strong>Implementation:</strong> The department chair configured the exact AP 6-point scoring schema in Checkmark. The AI engine specifically highlighted quote anchors demonstrating complex literary synthesis or contextual tension required for the Sophistication point. Teachers reviewed drafts during bi-weekly PLC meetings.</li>
  <li><strong>Outcome:</strong> District mock exam scoring achieved a <strong>0.88 inter-rater correlation</strong> with official College Board reader benchmarks, up from 0.54 the previous year.</li>
</ul>

<hr class="my-6 border-border" />

<h3>Case Study 3: STEM Department Biology Lab Reports</h3>

<ul>
  <li><strong>Institution:</strong> Mid-Sized State College</li>
  <li><strong>Scope:</strong> 1,200 students in General Biology across 24 lab sections, staffed by 12 Graduate TAs.</li>
  <li><strong>Challenge:</strong> Severe grading inconsistencies on the &ldquo;Scientific Discussion &amp; Error Analysis&rdquo; sections of lab reports. TAs routinely overlooked copy-pasted methodology text from online lab repositories.</li>
  <li><strong>Implementation:</strong> Sub-account rubric deployed with weighted criteria for Hypothesis Formulation, Data Representation, and Error Analysis. Checkmark&rsquo;s side-by-side plagiarism scan and Essay Playback™ identified students pasting pre-calculated data sets from prior semesters.</li>
  <li><strong>Outcome:</strong> TA grading hours dropped from 18 hours/week to 6 hours/week, while uncredited lab protocol reuse dropped by <strong>82%</strong> due to consistent, visible detection.</li>
</ul>

<hr class="my-8 border-border" />

<h2>7. The 5-Phase Departmental Calibration Protocol: A Playbook for Chairs</h2>

<p>To successfully implement standardized rubric grading across Canvas course shells, department chairs and instructional leads should follow this structured 5-phase operational protocol:</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    The 5-Phase Departmental Calibration Playbook
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-teal-500/40">
      <div class="flex items-center gap-2 mb-2">
        <span class="flex h-5 w-5 items-center justify-center rounded bg-teal-600 text-white font-bold text-[10px]">P1</span>
        <h4 class="text-sm font-bold text-white m-0">Blueprint &amp; Rubric Locking</h4>
      </div>
      <p class="text-slate-400 text-[11px] mb-2 font-medium">Pre-Semester Setup</p>
      <ul class="text-slate-300 space-y-1 pl-4 list-disc">
        <li>Create master rubric at Sub-Account level</li>
        <li>Bind to Canvas Blueprint Master Course</li>
        <li>Lock criteria, descriptors, &amp; point scales</li>
        <li>Cascade Blueprint sync to all shells</li>
      </ul>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-indigo-500/40">
      <div class="flex items-center gap-2 mb-2">
        <span class="flex h-5 w-5 items-center justify-center rounded bg-indigo-600 text-white font-bold text-[10px]">P2</span>
        <h4 class="text-sm font-bold text-white m-0">Benchmark Anchoring Session</h4>
      </div>
      <p class="text-slate-400 text-[11px] mb-2 font-medium">Weeks 1&ndash;2</p>
      <ul class="text-slate-300 space-y-1 pl-4 list-disc">
        <li>Select 3 sample anchor papers (A, B, C/D)</li>
        <li>Run Checkmark AI autograder baseline</li>
        <li>Conduct 45-min faculty norming meeting</li>
        <li>Align team on criterion score thresholds</li>
      </ul>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-purple-500/40">
      <div class="flex items-center gap-2 mb-2">
        <span class="flex h-5 w-5 items-center justify-center rounded bg-purple-600 text-white font-bold text-[10px]">P3</span>
        <h4 class="text-sm font-bold text-white m-0">AI First-Draft &amp; Faculty Review</h4>
      </div>
      <p class="text-slate-400 text-[11px] mb-2 font-medium">Active Grading Window</p>
      <ul class="text-slate-300 space-y-1 pl-4 list-disc">
        <li>Students submit via Canvas LMS</li>
        <li>Checkmark drafts scores &amp; quote anchors</li>
        <li>Instructors review &amp; personalize in console</li>
        <li>Faculty 1-click approve &amp; sync to LMS</li>
      </ul>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-amber-500/40">
      <div class="flex items-center gap-2 mb-2">
        <span class="flex h-5 w-5 items-center justify-center rounded bg-amber-600 text-white font-bold text-[10px]">P4</span>
        <h4 class="text-sm font-bold text-white m-0">Chair Variance Audit</h4>
      </div>
      <p class="text-slate-400 text-[11px] mb-2 font-medium">Mid-Cycle Moderation</p>
      <ul class="text-slate-300 space-y-1 pl-4 list-disc">
        <li>Monitor cross-section distribution curves</li>
        <li>Identify leniency or severity drift (&gt;1.5&sigma;)</li>
        <li>Review sample submissions with outlier staff</li>
        <li>Conduct supportive 1-on-1 calibration coaching</li>
      </ul>
    </div>
  </div>

  <div class="mt-4 rounded-xl bg-slate-800/90 p-4 border border-cyan-500/40 text-xs">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-5 w-5 items-center justify-center rounded bg-cyan-600 text-white font-bold text-[10px]">P5</span>
      <h4 class="text-sm font-bold text-white m-0">Post-Cycle Debrief &amp; Curricular Refinement (End-of-Term)</h4>
    </div>
    <p class="text-slate-300 text-[11px] m-0">
      Aggregate criterion-level mastery data across all 1,000+ students &bull; Refine ambiguous rubric descriptors &bull; Archive top anchor papers and Essay Playback™ sessions for training next semester&rsquo;s incoming teaching assistants and adjuncts.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Comparative Analysis: Manual SpeedGrader vs. Generic AI vs. Checkmark</h2>

<div class="my-6 overflow-x-auto rounded-xl border border-border font-sans">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Evaluation Dimension</th>
        <th class="p-3">Manual Canvas SpeedGrader</th>
        <th class="p-3">Standalone Generic AI (ChatGPT / Copilot)</th>
        <th class="p-3 bg-teal-50/50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300">Checkmark Plagiarism Unified Engine</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Inter-Rater Consistency</td>
        <td class="p-3 text-rose-600 font-medium">❌ Low (Severe drift between adjuncts, TAs, and faculty)</td>
        <td class="p-3 text-amber-600">⚠️ Variable (Subject to prompt drift &amp; temperature)</td>
        <td class="p-3 font-semibold text-teal-600">✅ High (Standardized algorithmic baseline across all sections)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Evidence Grounding</td>
        <td class="p-3 text-rose-600 font-medium">❌ Manual (Instructor must copy/paste quotes manually)</td>
        <td class="p-3 text-amber-600">⚠️ Generic (Broad summaries; hallucination risk)</td>
        <td class="p-3 font-semibold text-teal-600">✅ Quote-Anchored (Direct citations tied to every rubric criterion)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">LMS Integration</td>
        <td class="p-3">✅ Native (Standard SpeedGrader interface)</td>
        <td class="p-3 text-rose-600 font-medium">❌ None (Requires manual copy-pasting of text &amp; scores)</td>
        <td class="p-3 font-semibold text-teal-600">✅ 1EdTech LTI 1.3 Advantage (Bi-directional AGS 2.0 &amp; NRPS 2.0)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Chair Analytics</td>
        <td class="p-3 text-rose-600 font-medium">❌ None (Requires manual course-by-course inspection)</td>
        <td class="p-3 text-rose-600 font-medium">❌ None (Zero departmental oversight)</td>
        <td class="p-3 font-semibold text-teal-600">✅ Multi-Section Moderation Console (Real-time distribution &amp; drift alerts)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Writing Process Telemetry</td>
        <td class="p-3 text-rose-600 font-medium">❌ None (Evaluates static submitted file only)</td>
        <td class="p-3 text-rose-600 font-medium">❌ None (Blind to composition history)</td>
        <td class="p-3 font-semibold text-teal-600">✅ Patent-Pending Essay Playback™ (Keystroke dynamics, pauses, paste tracking)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">FERPA &amp; Privacy</td>
        <td class="p-3">✅ Compliant (Institutional Canvas contract)</td>
        <td class="p-3 text-rose-600 font-medium">❌ High Risk (Consumer tools may train models on student prose)</td>
        <td class="p-3 font-semibold text-teal-600">✅ Enterprise FERPA/COPPA Compliant (Zero model training on student work)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Teacher Authority</td>
        <td class="p-3">✅ 100% Teacher Authority</td>
        <td class="p-3 text-rose-600 font-medium">❌ Disconnected from course workflow</td>
        <td class="p-3 font-semibold text-teal-600">✅ Teacher-in-the-Loop (AI drafts preliminary scores; faculty retains final sign-off)</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>9. Taxonomy of Grader Biases &amp; Checkmark Mitigation Strategies</h2>

<div class="my-6 space-y-3 font-sans">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
      <h4 class="text-sm font-semibold text-foreground m-0">1. Leniency Bias</h4>
      <span class="text-[11px] bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 px-2 py-0.5 rounded font-medium">Manifestation: High A-rate to avoid student friction</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>Checkmark Mitigation Engine:</strong> Multi-section moderation console flags section averages exceeding &gt;1.5&sigma; from cohort mean. Quote-anchored rubric justifications provide instructors with concrete evidence to support rigorous marks without fearing appeals.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
      <h4 class="text-sm font-semibold text-foreground m-0">2. Severity Bias</h4>
      <span class="text-[11px] bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 px-2 py-0.5 rounded font-medium">Manifestation: Disproportionate point cuts for minor stylistic flaws</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>Checkmark Mitigation Engine:</strong> Algorithmic first-draft baseline evaluates prose strictly against explicit criterion band descriptors, preventing penalization based on idiosyncratic instructor preferences.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
      <h4 class="text-sm font-semibold text-foreground m-0">3. Central Tendency Bias</h4>
      <span class="text-[11px] bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 px-2 py-0.5 rounded font-medium">Manifestation: Clustering all scores in the 82&ndash;86% range</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>Checkmark Mitigation Engine:</strong> Multi-criterion discrete band scoring enforces full-scale distribution, identifying both exemplary synthesis and foundational skill gaps.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
      <h4 class="text-sm font-semibold text-foreground m-0">4. Halo &amp; Horns Effect</h4>
      <span class="text-[11px] bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 px-2 py-0.5 rounded font-medium">Manifestation: Prior student impressions skew analytical criteria</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>Checkmark Mitigation Engine:</strong> Modular criterion evaluation isolates analytical logic from formatting or syntax, ensuring independent score calculation.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
      <h4 class="text-sm font-semibold text-foreground m-0">5. Evaluator Fatigue</h4>
      <span class="text-[11px] bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 px-2 py-0.5 rounded font-medium">Manifestation: Grading quality decays from Paper #1 to Paper #90</span>
    </div>
    <p class="text-xs text-muted-foreground m-0"><strong>Checkmark Mitigation Engine:</strong> Consistent algorithmic processing quality across 10,000+ submissions ensures Paper #90 receives the exact same depth of evaluation and quote-anchoring as Paper #1.</p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>10. Frequently Asked Questions (FAQs)</h2>

<div class="my-6 space-y-4 font-sans">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">1. Does standardized AI rubric grading undermine faculty academic freedom?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>No.</strong> Checkmark is designed strictly as a <strong>teacher-in-the-loop decision-support tool</strong>, not an autonomous grading authority. The AI autograder produces an objective <em>first-draft recommendation</em> with quote-anchored justifications. Faculty retain 100% autonomy to modify scores, rewrite feedback, and account for nuanced classroom context before publishing. Standardizing the initial baseline protects academic freedom by eliminating arbitrary grading disparities while relieving faculty of mechanical grading fatigue.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">2. How does Canvas handle rubric updates if an assignment is already deployed across 40 sections?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      When rubrics are managed via a <strong>Canvas Blueprint Master Course</strong>, any modifications made to the Blueprint rubric cascade to all associated course shells upon initiating a Blueprint Sync. If submissions have already been graded, Canvas preserves existing historical scores while updating the rubric schema for subsequent grading cycles. Through Checkmark&rsquo;s LTI 1.3 integration, rubric schema updates sync dynamically without disrupting active student submissions.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">3. What happens if a student disputes a grade generated in this workflow?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Grade disputes are resolved faster and more constructively because the evaluation is backed by transparent evidence. Instead of debating subjective impressions, the student and instructor examine the <strong>Checkmark Evidence Report</strong>, which pairs specific rubric criteria with exact quotations from the student&rsquo;s text, alongside the student&rsquo;s authentic <strong>Essay Playback™</strong> drafting timeline. This shifts conversations from adversarial confrontation to targeted writing coaching.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">4. How does Checkmark protect student privacy under FERPA and COPPA?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Checkmark operates under a strict <strong>Zero-Training Enterprise Privacy Policy</strong>. Student submissions are encrypted in transit (TLS 1.3) and at rest (AES-256) and are <strong>never</strong> used to train commercial Large Language Models or public AI systems. Checkmark complies fully with the Family Educational Rights and Privacy Act (FERPA) and the Children&rsquo;s Online Privacy Protection Act (COPPA), operating under formal Institutional Data Protection Agreements (DPAs).
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">5. Can department chairs monitor grading progress across all sections without logging into each Canvas course shell?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>Yes.</strong> Checkmark&rsquo;s <strong>Multi-Section Moderation Console</strong> aggregates grading telemetry across all enrolled Canvas sections into a single dashboard. Chairs can monitor submission counts, grading completion percentages, mean score distributions, and standard deviation alerts across 50+ sections without ever needing to log into individual Canvas course shells.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">6. How does Checkmark evaluate qualitative criteria like &ldquo;Voice,&rdquo; &ldquo;Tone,&rdquo; or &ldquo;Originality&rdquo;?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Checkmark&rsquo;s AI autograder evaluates qualitative criteria by analyzing syntactic variety, rhetorical transitions, figurative language, and vocabulary register against the specific level descriptors defined in your rubric. If a criterion evaluates &ldquo;Authorial Voice,&rdquo; the engine extracts specific sentences demonstrating distinctive stylistic choices or passages that lapse into mechanical summary, providing quote-anchored justifications for the assigned score.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">7. What is the difference between Canvas Blueprint Courses and Checkmark’s centralized rubric deployment?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Canvas Blueprint Courses handle the <strong>structural distribution</strong> of course materials (copying assignment pages, due dates, and blank rubric templates into course shells). Checkmark provides the <strong>evaluative intelligence and telemetry</strong> (generating objective AI first-draft scores, quote-anchored feedback, cross-section statistical moderation, and keystroke Essay Playback™). The two tools work synergistically: Canvas Blueprint deploys the assignment structure, while Checkmark ensures standardized, defensible evaluation.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>11. Conclusion: Transforming Multi-Section Grading from a Pain Point into an Institutional Strength</h2>

<p>Standardizing rubric grading across dozens of Canvas course shells has long been one of the most frustrating challenges in academic leadership. Department chairs have historically been trapped between two unacceptable extremes: leaving grading uncalibrated (resulting in severe inter-rater disparities, student complaints, and compromised learning outcomes) or micromanaging faculty through labor-intensive manual audits.</p>

<p>By integrating <strong>Checkmark Plagiarism</strong> into <strong>Canvas LMS</strong> via <strong>1EdTech LTI 1.3 Advantage</strong>, institutions establish a sustainable, modern grading ecosystem:</p>

<ol>
  <li><strong>Objective Calibration:</strong> An algorithmic first-draft baseline ensures that every student in every section is evaluated against the exact same standards.</li>
  <li><strong>Defensible Feedback:</strong> Quote-anchored justifications replace vague comments with transparent, actionable writing guidance.</li>
  <li><strong>Comprehensive Integrity Telemetry:</strong> Patent-Pending <strong>Essay Playback™</strong> verifies authentic writing processes, protecting honest students and eliminating reliance on black-box AI detection scores.</li>
  <li><strong>Actionable Departmental Oversight:</strong> Real-time moderation analytics empower chairs to identify and support outlier sections before grades are finalized.</li>
  <li><strong>Teacher-Centered Pedagogy:</strong> Faculty save up to 70% of mechanical grading time while retaining complete final authority over student assessment.</li>
</ol>

<p>By combining institutional Canvas infrastructure with Checkmark&rsquo;s unified evaluation suite, academic departments move beyond the guessing game of subjective grading—fostering fairness, trust, and academic excellence across every classroom.</p>

<div class="my-8 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6 text-center">
  <h3 class="text-lg font-bold text-foreground m-0 mb-2">Elevate Grading Consistency Across Your Department</h3>
  <p class="text-xs text-muted-foreground max-w-xl mx-auto mb-4">
    Learn how Checkmark Plagiarism standardizes rubric evaluation, eliminates inter-rater variance in Canvas LMS, and equips faculty with quote-anchored feedback and keystroke process playback.
  </p>
  <a href="/services/integrations/canvas-lms" class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm transition-colors">
    Explore Canvas LMS Integration
  </a>
</div>
`;

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
};

export default async function Page(props: PageProps) {
  const resolvedParams = props.searchParams ? await props.searchParams : undefined;
  const refValue = typeof resolvedParams?.ref === 'string' ? resolvedParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/how-can-department-chairs-standardize-rubric-grading-across-multiple-class-sections-in-canvas-lms"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
