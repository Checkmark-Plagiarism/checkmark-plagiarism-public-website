import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How to Configure Canvas SpeedGrader with AI Rubric Suggestions for Multi-Draft Revision Assignments | Checkmark Plagiarism",
  description: "A comprehensive technical and pedagogical guide for educators, department chairs, and Canvas administrators on configuring Canvas SpeedGrader with Checkmark Plagiarism's AI rubric autograder, keystroke integrity telemetry, and multi-draft revision workflows.",
  keywords: [
    "Canvas SpeedGrader AI rubric",
    "multi-draft revision assignments",
    "Canvas LMS grading workflow",
    "LTI 1.3 Advantage AGS 2.0",
    "Checkmark Plagiarism",
    "rubric_assessments API",
    "teacher-in-the-loop autograding",
    "differential revision analysis",
    "Essay Playback Canvas",
    "academic integrity speedgrader",
    "Canvas rubric sync",
    "formative writing feedback"
  ],
  openGraph: {
    images: ["/images/services/report-grading-view.png"],
  },
};

export const meta = {
  title: "How to Configure Canvas SpeedGrader with AI Rubric Suggestions for Multi-Draft Revision Assignments | Checkmark Plagiarism",
  description: "A comprehensive technical and pedagogical guide for educators, department chairs, and Canvas administrators on configuring Canvas SpeedGrader with Checkmark Plagiarism's AI rubric autograder, keystroke integrity telemetry, and multi-draft revision workflows.",
  "opengraph-image": "/images/services/report-grading-view.png",
  date: "08-18-2026",
  readTime: "~18 min read",
  category: "Grading & Integrations",
  categories: ["Grading & Integrations", "LMS Integration", "Teacher Guide", "AI Autograder", "Pedagogy"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div className="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6">
  <div className="flex items-center gap-2 mb-2">
    <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white">
      Executive Summary
    </span>
  </div>
  <p className="text-foreground font-medium leading-relaxed m-0">
    The writing process is inherently iterative, but across secondary and postsecondary institutions, writing instructors are forced to abandon multi-draft revision cycles due to an overwhelming assessment burden: evaluating 150 students across multiple drafts consumes 40 to 60+ hours per assignment unit. Native <strong>Canvas SpeedGrader</strong> lacks built-in scaffolding for multi-draft versioning, automated criterion-level suggestions, and writing process verification. By integrating <strong>Checkmark Plagiarism</strong> via <strong>1EdTech LTI 1.3 Advantage (AGS 2.0)</strong> and the Canvas <code>rubric_assessments</code> API, institutions can transform SpeedGrader into an automated, teacher-in-the-loop revision hub. Checkmark generates <strong>verbatim quote-anchored rubric justifications</strong>, provides <strong>differential revision analysis</strong> comparing Draft 1 to Draft 2, and captures patent-pending <a href="/services/writing-process" className="text-teal-600 dark:text-teal-400 font-semibold underline">Essay Playback™</a> keystroke dynamics. This end-to-end technical guide details the LTI 1.3 configuration, API rubric binding, multi-draft assignment workflows, and educator calibration protocols that reduce grading overhead by up to 75% while dramatically improving student revision efficacy.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> bridges LMS evaluation workflows by combining <a href="/services/autograder">AI autograding</a> with <a href="/services/writing-process">writing process replay</a>, <a href="/services/ai-detection">AI detection</a>, <a href="/services/plagiarism-detection">plagiarism detection</a>, and deep integrations with <a href="/services/integrations/canvas-lms">Canvas LMS</a>.</p>

<h2>1. The Multi-Draft Grading Overhead in Canvas LMS</h2>

<p>Composition theorists and educational researchers—from Nancy Sommers and Donald Murray to John Hattie—have long established that writing development occurs during <strong>revision</strong>, not initial drafting. When students receive actionable, formative feedback on early drafts and are given the opportunity to restructure arguments, refine evidence, and polish syntax, their cognitive writing gains increase significantly compared to single-submission summative grading.</p>

<p>However, in modern secondary schools, community colleges, and universities, assigning multi-draft writing cycles (e.g., <em>Outline &rarr; Rough Draft &rarr; Formative Revision &rarr; Final Polish</em>) creates an unsustainable evaluation crisis for educators.</p>

<div className="my-6 rounded-2xl border border-rose-500/30 bg-rose-50/30 dark:bg-rose-950/20 p-6">
  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-rose-200 dark:border-rose-900/50">
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white text-xs font-bold">&times;</span>
    <h3 className="text-base font-bold text-foreground m-0 p-0">The Multi-Draft Grading Arithmetic Crisis</h3>
  </div>
  <div className="text-xs text-muted-foreground mb-4 space-y-1">
    <p className="m-0">&bull; <strong>Standard Instructor Roster:</strong> 150 Students (5 sections &times; 30 students)</p>
    <p className="m-0">&bull; <strong>Average Formative Draft Evaluation:</strong> 10 minutes per draft</p>
    <p className="m-0">&bull; <strong>Average Summative Final Evaluation:</strong> 15 minutes per paper</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
    <div className="rounded-xl bg-background/80 p-4 border border-border">
      <div className="text-slate-500 dark:text-slate-400 font-semibold mb-2">Single-Draft Workflow:</div>
      <div className="text-foreground">150 submissions &times; 15 min</div>
      <div className="text-lg font-bold text-amber-600 dark:text-amber-400 mt-2">= 2,250 min (37.5 Hours)</div>
    </div>
    <div className="rounded-xl bg-background/80 p-4 border border-rose-300 dark:border-rose-900">
      <div className="text-rose-600 dark:text-rose-400 font-semibold mb-2">Traditional 3-Draft Revision Workflow:</div>
      <div className="text-muted-foreground">Draft 1 (Rough): 150 &times; 10 min = 25.0 Hours</div>
      <div className="text-muted-foreground">Draft 2 (Revision): 150 &times; 10 min = 25.0 Hours</div>
      <div className="text-muted-foreground">Draft 3 (Final): 150 &times; 15 min = 37.5 Hours</div>
      <div className="text-lg font-bold text-rose-600 dark:text-rose-400 mt-2 border-t border-border pt-1">= 87.5 Hours / Essay Unit</div>
    </div>
  </div>
</div>

<h3>The Three Structural Failure Modes of Native Canvas SpeedGrader</h3>

<p>While Instructure Canvas is the dominant Learning Management System (LMS) across global education, its native <strong>SpeedGrader</strong> environment was architected primarily for single-submission, point-in-time grading. When instructors attempt multi-draft assignments, three critical friction points emerge:</p>

<div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-700 text-xs font-bold dark:bg-rose-950 dark:text-rose-300">1</span>
        <h4 className="text-sm font-semibold text-foreground m-0 p-0">Rubric Overwrite &amp; State Clobbering</h4>
      </div>
      <p className="text-xs text-muted-foreground m-0">In standard Canvas assignments configured for multiple attempts, SpeedGrader displays submission attempts in a dropdown menu. However, updating rubric criterion scores on Attempt 2 often clobbers or complicates the visibility of Attempt 1 formative comments, making it tedious for instructors to compare what changed between drafts.</p>
    </div>
  </div>
  <div className="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold dark:bg-amber-950 dark:text-amber-300">2</span>
        <h4 className="text-sm font-semibold text-foreground m-0 p-0">The Feedback Decay Curve</h4>
      </div>
      <p className="text-xs text-muted-foreground m-0">Spending 25+ hours reading Draft 1 creates feedback latency of 10 to 18 calendar days. By the time students receive formative marginalia, the classroom has moved to the next thematic module, rendering the formative feedback pedagogically inert.</p>
    </div>
  </div>
  <div className="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold dark:bg-indigo-950 dark:text-indigo-300">3</span>
        <h4 className="text-sm font-semibold text-foreground m-0 p-0">Integrity Telemetry Disconnection</h4>
      </div>
      <p className="text-xs text-muted-foreground m-0">Canvas SpeedGrader has no native visibility into <em>how</em> the text was produced. If a student turns in a flawless Draft 2 after a mediocre Draft 1, the teacher cannot tell whether the student undertook rigorous substantive revisions, retyped an AI-generated draft, or pasted an entire essay from an unauthorized external LLM.</p>
    </div>
  </div>
</div>

<div className="my-6 overflow-x-auto rounded-xl border border-border">
  <table className="w-full text-left text-xs border-collapse">
    <thead>
      <tr className="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th className="p-3 w-1/2">Traditional Canvas SpeedGrader Workflow</th>
        <th className="p-3 w-1/2 bg-teal-50/50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300">Checkmark LTI 1.3 + SpeedGrader Workflow</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border text-muted-foreground">
      <tr className="hover:bg-muted/30">
        <td className="p-3">&bull; 10–15 min manual reading per draft</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&bull; 60–90 sec teacher review &amp; calibration</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3">&bull; Generic, manual rubric comment typing</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&bull; AST-grounded quote-anchored justifications</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3">&bull; Manual line-by-line diffing between drafts</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&bull; Automated differential revision analysis (D1 vs. D2)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3">&bull; Blind to copy/paste &amp; keystroke history</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&bull; Patent-pending Essay Playback™ keystroke dynamics</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3">&bull; Disconnected external AI/plagiarism tabs</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&bull; Passage-level AI &amp; plagiarism integrated in rubric</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3">&bull; High rater fatigue &amp; feedback decay</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&bull; 1-Click native SpeedGrader sync (LTI Advantage AGS 2.0)</td>
      </tr>
    </tbody>
  </table>
</div>

<hr className="my-8 border-border" />

<h2>2. Technical Integration Architecture: 1EdTech LTI 1.3 Advantage &amp; Canvas APIs</h2>

<p>To establish a frictionless multi-draft revision pipeline, <strong>Checkmark Plagiarism</strong> integrates directly into Canvas LMS via the <strong>1EdTech LTI 1.3 Advantage</strong> specification and dedicated Canvas REST API endpoints. This architecture ensures bidirectional data flow: student submissions and Canvas rubrics flow securely into Checkmark’s evaluation engine, while calibrated rubric evaluations, criterion scores, and integrity links push back atomically into Canvas SpeedGrader.</p>

<div className="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-mono text-xs">
  <div className="text-center font-bold text-teal-400 text-sm mb-4">
    CANVAS SPEEDGRADER + CHECKMARK LTI 1.3 ARCHITECTURE
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div className="rounded-lg bg-slate-800 p-3.5 border border-slate-700">
      <div className="font-bold text-indigo-400 mb-1">INSTRUCTURE CANVAS</div>
      <div className="text-[11px] text-slate-300">Course / SpeedGrader Hub &bull; Rubric Matrix &bull; Gradebook</div>
    </div>
    <div className="rounded-lg bg-slate-800 p-3.5 border border-slate-700">
      <div className="font-bold text-teal-400 mb-1">CHECKMARK PLAGIARISM</div>
      <div className="text-[11px] text-slate-300">Unified Evaluation Hub &bull; AST Rubric Engine &bull; Essay Playback™</div>
    </div>
  </div>

  <div className="space-y-2 mb-4">
    <div className="rounded bg-slate-800/80 p-2.5 border border-slate-700 text-[11px] flex items-center justify-between">
      <span className="text-indigo-300">1. OIDC Launch / LTI Deep Linking 2.0</span>
      <span className="text-teal-400">&rarr; Assignment &amp; Rubric Metadata Binding</span>
    </div>
    <div className="rounded bg-slate-800/80 p-2.5 border border-slate-700 text-[11px] flex items-center justify-between">
      <span className="text-indigo-300">2. Names &amp; Role Provisioning (NRPS 2.0)</span>
      <span className="text-teal-400">&rarr; Roster &amp; Pseudonymous User Claims</span>
    </div>
    <div className="rounded bg-slate-800/80 p-2.5 border border-slate-700 text-[11px] flex items-center justify-between">
      <span className="text-indigo-300">3. Canvas REST API: Rubric Schema Ingest</span>
      <span className="text-teal-400">&rarr; GET /api/v1/courses/:id/rubrics/:id</span>
    </div>
    <div className="rounded bg-teal-950/60 p-3 border border-teal-500/40 text-[11px] text-teal-200">
      <strong>4. Checkmark Multi-Draft Engine:</strong> Quote-Anchored Justifications + Differential Revision (D1/D2) + Essay Playback™ + Passage AI/Plagiarism Scans
    </div>
    <div className="rounded bg-slate-800/80 p-2.5 border border-slate-700 text-[11px] flex items-center justify-between">
      <span className="text-amber-300">5. Teacher Calibration &amp; Approval Console</span>
      <span className="text-amber-400">&harr; Instructor validates/adjusts marks in 60s</span>
    </div>
    <div className="rounded bg-slate-800/80 p-2.5 border border-slate-700 text-[11px] flex items-center justify-between">
      <span className="text-emerald-300">6. LTI Advantage AGS 2.0 Score Passback</span>
      <span className="text-emerald-400">&larr; POST .../lineitems/:id/scores (Atomic Grade)</span>
    </div>
    <div className="rounded bg-slate-800/80 p-2.5 border border-slate-700 text-[11px] flex items-center justify-between">
      <span className="text-emerald-300">7. Canvas REST API: Rubric Assessment Push</span>
      <span className="text-emerald-400">&larr; PUT .../rubric_associations/:id/rubric_assessments</span>
    </div>
  </div>

  <div className="rounded-lg bg-teal-900/40 p-3 border border-teal-500/60 text-center font-bold text-teal-300">
    Result: Native Canvas SpeedGrader Populated with Matrix Highlights, Criteria Comments &amp; Gradebook Synced
  </div>
</div>

<h3>The 1EdTech LTI 1.3 Advantage Triad</h3>

<p>Checkmark utilizes the complete modern LTI standard, replacing legacy, insecure OAuth 1.0/LTI 1.1 integrations with cryptographically signed JSON Web Tokens (JWT) using the RSA SHA-256 (RS256) algorithm:</p>

<ol>
  <li><strong>LTI Deep Linking 2.0 (LTI-DL):</strong> Allows instructors to select Checkmark as an External Tool during Canvas assignment creation. During launch, Checkmark interrogates the Canvas assignment configuration and binds to the attached Canvas rubric.</li>
  <li><strong>Names and Role Provisioning Services 2.0 (NRPS 2.0):</strong> Automatically synchronizes student IDs (<code>sub</code> claim), pseudonymous identifiers, section enrollments, and co-instructor permissions without requiring manual roster exports or CSV uploads.</li>
  <li><strong>Assignment and Grade Services 2.0 (AGS 2.0):</strong> Programmatically creates, updates, and manages Canvas Gradebook line items. Checkmark utilizes AGS 2.0 to post numeric scores, grading progress statuses (<code>FullyGraded</code>, <code>PendingTeacherApproval</code>), and submission timestamps.</li>
</ol>

<h3>Canvas Rubric Binding via the <code>rubric_assessments</code> API</h3>

<p>While standard LTI AGS 2.0 synchronizes the overall assignment grade, populating the interactive criterion cells and marginal comment boxes within the <strong>Canvas SpeedGrader Rubric Tray</strong> requires binding to the Canvas REST API.</p>

<p>When a rubric is attached to a Canvas assignment, Canvas creates a <code>RubricAssociation</code> object. Checkmark maps its internal Abstract Syntax Tree (AST) rubric evaluation engine directly to the Canvas <code>rubric_assessments</code> data model:</p>

<div className="my-4 rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
  <div className="text-teal-400 mb-2 font-semibold">// PUT /api/v1/courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments</div>
  <pre className="m-0"><code>{
  "rubric_assessment": {
    "user_id": "98412",
    "assessment_type": "grading",
    "_9102": {
      "points": 18.0,
      "rating_id": "rat_441",
      "comments": "Strong analytical thesis. Checkmark Evidence: In paragraph 2, the student establishes that 'the economic restructuring of post-war reconstruction mirrored mercantilist trade monopolies.' To achieve full marks, connect this directly to the secondary thesis in paragraph 4."
    },
    "_3341": {
      "points": 15.0,
      "rating_id": "rat_118",
      "comments": "Effective source integration, but two quotations in paragraph 3 lack introductory framing signal phrases."
    },
    "_7720": {
      "points": 10.0,
      "rating_id": "rat_882",
      "comments": "Conventions and MLA citation mechanics meet all criteria with zero formatting errors."
    }
  }
}</code></pre>
</div>

<div className="my-6 overflow-x-auto rounded-xl border border-border">
  <table className="w-full text-left text-xs border-collapse">
    <thead>
      <tr className="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th className="p-3">Canvas Rubric Schema Field</th>
        <th className="p-3">Checkmark AST Engine Node</th>
        <th className="p-3">Output in SpeedGrader</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border text-muted-foreground">
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-mono text-foreground">criterion_id (_9102)</td>
        <td className="p-3">Evaluated Criterion Target</td>
        <td className="p-3">Specific Rubric Row Highlight</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-mono text-foreground">points (18.0)</td>
        <td className="p-3">Calibrated Point Score</td>
        <td className="p-3">Criterion Score Input Box</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-mono text-foreground">rating_id (rat_441)</td>
        <td className="p-3">Discrete Rating Band</td>
        <td className="p-3">Green Selected Rating Cell</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-mono text-foreground">comments</td>
        <td className="p-3">Quote-Anchored Evidence</td>
        <td className="p-3">Expandable Criterion Comment</td>
      </tr>
    </tbody>
  </table>
</div>

<hr className="my-8 border-border" />

<h2>3. Configuring Multi-Draft Revision Workflows in Canvas</h2>

<p>To maximize student growth without inflating grading time, educators should configure a structured <strong>3-Stage Revision Cycle</strong> inside Canvas Modules. Checkmark accommodates both single-assignment multi-attempt workflows and linked multi-assignment modules.</p>

<div className="my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div className="text-center font-bold text-foreground text-sm mb-4">
    STRUCTURED 3-STAGE MULTI-DRAFT CANVAS MODULE
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="rounded-xl border border-teal-500/30 bg-teal-50/30 dark:bg-teal-950/20 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold">1</span>
        <h4 className="text-sm font-semibold text-foreground m-0 p-0">STAGE 1: ROUGH DRAFT</h4>
      </div>
      <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 mb-0">
        <li>Canvas Assignment #1</li>
        <li>Submission: Checkmark LTI</li>
        <li>Weight: 0 Pts (Formative)</li>
        <li>Diagnostic AI Rubric Suggestions</li>
        <li>Integrity &amp; Keystroke Playback log</li>
      </ul>
    </div>
    <div className="rounded-xl border border-indigo-500/30 bg-indigo-50/30 dark:bg-indigo-950/20 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">2</span>
        <h4 className="text-sm font-semibold text-foreground m-0 p-0">STAGE 2: FORMATIVE REVIEW</h4>
      </div>
      <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 mb-0">
        <li>Synchronous Conference / Workshop</li>
        <li>Teacher uses Checkmark calibrated cards for 2-min targeted chat</li>
        <li>Peer review feedback cycle</li>
        <li>Concrete revision targets established</li>
      </ul>
    </div>
    <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/30 dark:bg-emerald-950/20 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">3</span>
        <h4 className="text-sm font-semibold text-foreground m-0 p-0">STAGE 3: FINAL POLISH</h4>
      </div>
      <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 mb-0">
        <li>Canvas Assignment #2</li>
        <li>Submission: Checkmark LTI</li>
        <li>Weight: 100 Pts (Summative)</li>
        <li>Evaluates Substantive Differential Revision</li>
        <li>Native SpeedGrader Sync</li>
      </ul>
    </div>
  </div>
</div>

<h3>Workflow Option A: Linked Formative/Summative Canvas Assignments (Recommended)</h3>

<p>This structure is best practice for high schools, AP programs, and university writing programs where formative drafts must appear in the syllabus without distorting summative GPA calculations:</p>

<ol>
  <li>
    <strong>Assignment 1: &ldquo;Major Essay &ndash; Rough Draft (Formative Diagnostics)&rdquo;</strong>
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li><strong>Points:</strong> <code>0</code> (or <code>Complete/Incomplete</code> formative weighting).</li>
      <li><strong>Submission Type:</strong> <code>External Tool</code> &rarr; Checkmark Plagiarism.</li>
      <li><strong>Rubric:</strong> Attach Department Standard Rubric (set to <em>&ldquo;Do not use this rubric for assignment grading&rdquo;</em> if zero-point weighted).</li>
      <li><strong>Objective:</strong> Checkmark generates diagnostic quote-anchored rubric feedback, passage-level AI detection, and keystroke replay telemetry. Instructors review and release feedback within 24 hours.</li>
    </ul>
  </li>
  <li>
    <strong>Assignment 2: &ldquo;Major Essay &ndash; Final Revision (Summative Evaluation)&rdquo;</strong>
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li><strong>Points:</strong> <code>100</code> (or full assignment point value).</li>
      <li><strong>Submission Type:</strong> <code>External Tool</code> &rarr; Checkmark Plagiarism.</li>
      <li><strong>Rubric:</strong> Attach Same Department Standard Rubric (set to <em>&ldquo;Use this rubric for assignment grading&rdquo;</em>).</li>
      <li><strong>Checkmark Configuration:</strong> Link to Assignment 1. Checkmark automatically computes <strong>Differential Revision Analysis</strong>, highlighting student improvements and flagging unaddressed formative targets.</li>
    </ul>
  </li>
</ol>

<h3>Workflow Option B: Single Canvas Assignment with Multiple Submission Attempts</h3>

<p>For streamlined courses preferring a single gradebook column:</p>
<ul>
  <li>Set <strong>Allowed Attempts</strong> in Canvas to <code>2</code> or <code>3</code>.</li>
  <li>Checkmark ingests each attempt sequentially:
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li><strong>Attempt 1:</strong> Generates formative rubric suggestions and establishes the baseline writing process fingerprint.</li>
      <li><strong>Attempt 2:</strong> Compares prose against Attempt 1, verifies that revisions were drafted authentically in the document, updates rubric suggestions, and allows the instructor to publish final marks to SpeedGrader.</li>
    </ul>
  </li>
</ul>

<hr className="my-8 border-border" />

<h2>4. Checkmark's Teacher-in-the-Loop Autograding Engine</h2>

<p>Generic AI tools (such as ChatGPT or uncalibrated LLM plugins) fail at essay assessment because they generate vague, flattering, or hallucinated feedback (e.g., <em>&ldquo;Great job on your transitions! Your thesis is clear.&rdquo;</em>).</p>

<p>Checkmark&rsquo;s proprietary evaluation engine operates on an entirely different architecture: <strong>Deterministic AST Rubric Parsing with Grounded Quote-Anchored Citations</strong>.</p>

<div className="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-mono text-xs">
  <div className="text-center font-bold text-teal-400 text-sm mb-4">
    CHECKMARK GROUNDED RUBRIC JUSTIFICATION ENGINE
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div className="rounded-lg bg-slate-800 p-3 border border-slate-700">
      <div className="font-bold text-indigo-400 mb-1">CANVAS RUBRIC CRITERION SCHEMA</div>
      <div className="text-[11px] text-slate-300">&ldquo;Criterion 2: Evidence &amp; Integration (15-20 pts: Synthesizes &ge; 3 sources with sophisticated contextualization)&rdquo;</div>
    </div>
    <div className="rounded-lg bg-slate-800 p-3 border border-slate-700">
      <div className="font-bold text-emerald-400 mb-1">STUDENT ESSAY SUBMISSION</div>
      <div className="text-[11px] text-slate-300">Verbatim Ingest: &ldquo;Smith (2024) asserts that urban heat islands disproportionately impact...&rdquo;</div>
    </div>
  </div>
  <div className="rounded-lg bg-slate-800/90 p-3.5 border border-teal-500/40 mb-4 text-center">
    <div className="font-bold text-teal-300 mb-1">CHECKMARK DETERMINISTIC EVALUATION CORE</div>
    <div className="text-[11px] text-slate-300">Syntax Tree Alignment &bull; Source Attribution &amp; Context Verification &bull; Verbatim Evidence Extraction</div>
  </div>
  <div className="rounded-lg bg-teal-900/40 p-3 border border-teal-500/60 text-center font-bold text-teal-300">
    Teacher Calibration Console: Review Quote &rarr; Validate/Tweak Score in 10s &rarr; 1-Click SpeedGrader Sync
  </div>
</div>

<h3>1. Grounded Quote-Anchored Rubric Justifications</h3>

<p>Every criterion score drafted by Checkmark is strictly tied to verifiable prose evidence extracted directly from the student&rsquo;s submission.</p>

<ul>
  <li><strong>No Hallucinated Praise:</strong> Checkmark never makes evaluative claims without citing the exact paragraph and verbatim sentence.</li>
  <li><strong>Targeted Growth Recommendations:</strong> Feedback pairs what the student did well with the exact next step required to reach the next rubric performance band.</li>
  <li><strong>Parent &amp; Student Defensibility:</strong> When students or parents inquire why an essay received an 18/20 instead of a 20/20 on Evidence Integration, the teacher points directly to the quote-anchored justification already populated in SpeedGrader.</li>
</ul>

<h3>2. The 60–90 Second Educator Calibration Console</h3>

<p>Checkmark preserves <strong>teacher final authority</strong>. AI-drafted rubric assessments are never published directly to the Canvas Gradebook without educator oversight. Instead, instructors use Checkmark’s rapid calibration console:</p>

<div className="my-6 rounded-2xl border border-border bg-card p-6 shadow-sm font-mono text-xs">
  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-border text-foreground font-semibold">
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-teal-500"></span>
      <span>Student: Maya Lin | AP Lang Synthesis Essay | Draft 2 (Final)</span>
    </div>
    <span className="text-teal-600 font-bold bg-teal-50 dark:bg-teal-950 px-2.5 py-0.5 rounded border border-teal-500/30">Review Time: 00:01:14</span>
  </div>

  <div className="mt-4 space-y-3">
    <div className="rounded-xl border border-border bg-background p-3.5">
      <div className="flex justify-between items-center text-foreground font-semibold">
        <span>Criterion 1: Thesis &amp; Line of Reasoning</span>
        <span className="text-teal-600 font-bold">9 / 10 pts</span>
      </div>
      <p className="text-[11px] text-muted-foreground mt-1 mb-0 font-sans">
        <strong>Evidence:</strong> <em>&ldquo;While renewable subsidies stimulate tech adoption, municipal infrastructure grid constraints limit immediate decarbonization.&rdquo;</em>
      </p>
    </div>

    <div className="rounded-xl border border-border bg-background p-3.5">
      <div className="flex justify-between items-center text-foreground font-semibold">
        <span>Criterion 2: Evidence &amp; Source Synthesis</span>
        <span className="text-teal-600 font-bold">18 / 20 pts</span>
      </div>
      <p className="text-[11px] text-muted-foreground mt-1 mb-0 font-sans">
        <strong>Evidence:</strong> Synthesizes Source A (EPA) and Source C (Hernandez) in paragraph 3.<br />
        <strong>Growth Target:</strong> Source D is cited once without counter-argument contextualization.
      </p>
    </div>

    <div className="rounded-xl border border-border bg-background p-3.5">
      <div className="flex justify-between items-center text-foreground font-semibold">
        <span>Criterion 3: Rhetorical Voice &amp; Mechanics</span>
        <span className="text-teal-600 font-bold">19 / 20 pts</span>
      </div>
      <p className="text-[11px] text-muted-foreground mt-1 mb-0 font-sans">
        <strong>Evidence:</strong> Highly varied sentence structure (Burstiness: High). 0 comma splices.
      </p>
    </div>
  </div>

  <div className="mt-4 p-3 rounded-xl bg-muted/50 border border-border flex flex-wrap items-center justify-between text-[11px]">
    <span className="text-foreground font-semibold">Integrity Snapshot:</span>
    <span className="text-emerald-600 dark:text-emerald-400 font-medium">AI: 0% (Human)</span>
    <span className="text-teal-600 dark:text-teal-400 font-medium">Plagiarism: 2% (Cited)</span>
    <span className="text-indigo-600 dark:text-indigo-400 font-medium">Playback: 3h 12m authentic</span>
  </div>

  <div className="mt-4 flex flex-wrap gap-2 justify-end">
    <span className="px-3 py-1.5 rounded-lg border border-border text-muted-foreground text-[11px] font-semibold hover:bg-muted cursor-pointer">Tweak Criterion</span>
    <span className="px-3 py-1.5 rounded-lg border border-border text-muted-foreground text-[11px] font-semibold hover:bg-muted cursor-pointer">Add Audio Note</span>
    <span className="px-3 py-1.5 rounded-lg bg-teal-600 text-white text-[11px] font-semibold hover:bg-teal-700 cursor-pointer shadow-sm">&check; APPROVE &amp; SYNC TO CANVAS</span>
  </div>
</div>

<p>By presenting pre-extracted textual evidence and preliminary scores, educators eliminate the cognitive fatigue of hunting for quotes. The instructor reads, validates, personalizes if desired, and clicks <strong>Approve &amp; Sync</strong>—reducing grading time from 15 minutes to under 90 seconds per submission.</p>

<h3>3. Differential Revision Analysis (Draft 1 vs. Draft 2)</h3>

<p>When evaluating Draft 2, Checkmark’s differential revision engine performs deep semantic diffing against Draft 1:</p>

<ul>
  <li><strong className="text-emerald-600 dark:text-emerald-400">Green (Substantive Additions):</strong> Identifies newly composed arguments, new source integrations, and expanded topic sentences.</li>
  <li><strong className="text-amber-600 dark:text-amber-400">Yellow (Refined &amp; Edited Prose):</strong> Tracks sentence-level revisions, vocabulary improvements, and clarified thesis statements.</li>
  <li><strong className="text-rose-600 dark:text-rose-400">Red / Strikethrough (Pruned Text):</strong> Highlights removed fluff, redundant sentences, or deleted off-topic paragraphs.</li>
  <li><strong>Formative Goal Tracker:</strong> Cross-references Draft 1 rubric growth recommendations against Draft 2 changes, giving the teacher a clear checklist:
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li>&check; <em>Draft 1 Target: Add counter-argument in Paragraph 4 &rarr; <strong>Resolved</strong> (142 words added).</em></li>
      <li>&check; <em>Draft 1 Target: Fix citation formatting on Source B &rarr; <strong>Resolved</strong>.</em></li>
      <li>&times; <em>Draft 1 Target: Strengthen conclusion &rarr; <strong>Unaddressed</strong>.</em></li>
    </ul>
  </li>
</ul>

<div className="my-6 overflow-x-auto rounded-xl border border-border">
  <table className="w-full text-left text-xs border-collapse">
    <thead>
      <tr className="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th className="p-3">Metric</th>
        <th className="p-3">Draft 1 (Rough Diagnostic)</th>
        <th className="p-3 bg-teal-50/50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300">Draft 2 (Final Polish)</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border text-muted-foreground">
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Word Count</td>
        <td className="p-3">1,120 words</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">1,480 words (+360 net)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Substantive Paragraph Edits</td>
        <td className="p-3">&mdash;</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">4 paragraphs restructured</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Active Source Integrations</td>
        <td className="p-3">2 Sources</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">4 Sources (+2 added)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Formative Revision Compliance</td>
        <td className="p-3">&mdash;</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">85% (3 of 4 targets met)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Active Composing Time</td>
        <td className="p-3">1 hr 45 min</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">+ 1 hr 15 min active editing</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Integrity Flag Status</td>
        <td className="p-3">Resolved</td>
        <td className="p-3 font-semibold text-emerald-600 dark:text-emerald-400">Clean &bull; Organic Keystrokes</td>
      </tr>
    </tbody>
  </table>
</div>

<hr className="my-8 border-border" />

<h2>5. Integrated Multi-Dimensional Academic Integrity Verification</h2>

<p>Rubric scoring is meaningless if the submitted essay was generated in seconds by an AI tool or copy-pasted from an online repository. Checkmark embeds a multi-dimensional integrity verification suite directly into the evaluation interface.</p>

<div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 font-bold text-xs">1</span>
      <h4 className="text-sm font-semibold text-foreground m-0 p-0">ESSAY PLAYBACK™</h4>
    </div>
    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-0">
      <li>Keystroke-by-keystroke replay</li>
      <li>Real-time timeline scrubbing (1x–8x)</li>
      <li>External paste buffer (100% clipboard text preserved)</li>
    </ul>
  </div>
  <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 font-bold text-xs">2</span>
      <h4 className="text-sm font-semibold text-foreground m-0 p-0">PASSAGE-LEVEL AI</h4>
    </div>
    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-0">
      <li>Granular sentence &amp; paragraph highlighting</li>
      <li>Calibrated confidence sliders</li>
      <li>Short-text (&lt;150w) <code>N/A</code> guardrail</li>
    </ul>
  </div>
  <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 font-bold text-xs">3</span>
      <h4 className="text-sm font-semibold text-foreground m-0 p-0">SIDE-BY-SIDE PLAGIARISM</h4>
    </div>
    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4 mb-0">
      <li>Billions of web pages &amp; academic journals</li>
      <li>Institutional peer repository matching</li>
      <li>Uncited vs. cited source coaching indicators</li>
    </ul>
  </div>
</div>

<h3>1. Patent-Pending Essay Playback™ &amp; Keystroke Dynamics</h3>

<p>Generic AI detectors generate a single, opaque percentage (e.g., <em>&ldquo;68% AI&rdquo;</em>), leading to false accusations and contentious student-teacher confrontations. Checkmark replaces speculation with <strong>transparent, defensible writing process telemetry</strong>:</p>

<ul>
  <li><strong>Keystroke Replay Timeline:</strong> Educators can scrub through the entire writing session at 1x, 2x, 4x, or 8x speed, observing real-time typing bursts, pauses for reflection, sentence restructuring, and backspacing.</li>
  <li><strong>External Paste Buffer Capture:</strong> When text is pasted from an external application, Checkmark records the exact timestamp, character count, and <strong>preserves 100% of the raw clipboard text</strong>—even if the student subsequently rewrites, rewords, or paraphrases every sentence.</li>
  <li><strong>Transcription &amp; Second-Screen Detection:</strong> Identifies unnatural, steady-state typing cadences (60+ words per minute with zero pause-burst cycles or conceptual deletions), signaling when a student is manually retyping text from a secondary phone or monitor.</li>
  <li><strong>Exoneration for Honest Students:</strong> Authentic keystroke telemetry provides undeniable proof to exonerate students who write with sophisticated vocabulary or non-native phrasing from false AI detector flags.</li>
</ul>

<h3>2. Granular Passage-Level AI Writing Detection</h3>

<p>Rather than labeling an entire essay &ldquo;AI-generated,&rdquo; Checkmark underlines specific sentences and paragraphs:</p>
<ul>
  <li><strong>Confidence Sliders:</strong> Each flagged passage displays an evidence card showing linguistic predictability (perplexity) and sentence structure diversity (burstiness), calibrated between typical human variation and standard LLM patterns.</li>
  <li><strong>Short-Text Guardrails:</strong> Submissions or passages below <strong>150 words</strong> display <code>N/A</code> to prevent false positives on insufficient sample sizes.</li>
  <li><strong>Educator-Only Flag Statuses:</strong> Integrity flags are visible exclusively to teachers and administrators, preventing premature automated penalties.</li>
</ul>

<h3>3. Side-by-Side Defensible Plagiarism Matching</h3>

<p>Checkmark scans submissions against billions of active web pages, digital archives, and institutional student repositories:</p>
<ul>
  <li><strong>Two-Way Linked Evidence Cards:</strong> Clicking a highlighted passage in the essay immediately scrolls the sidebar to the exact source match with side-by-side textual comparison and clickable source links.</li>
  <li><strong>Uncited Source Differentiation:</strong> Visually distinguishes between improperly formatted academic citations (which warrant citation coaching) and verbatim uncredited text pasting.</li>
</ul>

<hr className="my-8 border-border" />

<h2>6. Step-by-Step Configuration Guide: Canvas Admin &amp; Instructor Setup</h2>

<p>Setting up Checkmark Plagiarism with Canvas SpeedGrader requires a one-time configuration by the Canvas LMS Administrator, followed by standard assignment creation by instructors.</p>

<div className="my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div className="text-center font-bold text-foreground text-sm mb-4">
    END-TO-END SETUP &amp; CONFIGURATION ROADMAP
  </div>
  <div className="space-y-3 font-mono text-xs">
    <div className="rounded-xl border border-indigo-500/30 bg-indigo-50/20 dark:bg-indigo-950/20 p-3.5">
      <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Phase 1: Canvas Administrator Setup (Developer Keys &amp; LTI 1.3 Tool)</div>
      <div className="text-muted-foreground font-sans text-xs">Generate LTI 1.3 Developer Key &bull; Input OIDC &amp; JWKS Endpoints &bull; Enable AGS 2.0 / NRPS 2.0 &bull; Deploy to Account Settings</div>
    </div>
    <div className="rounded-xl border border-teal-500/30 bg-teal-50/20 dark:bg-teal-950/20 p-3.5">
      <div className="font-bold text-teal-600 dark:text-teal-400 mb-1">Phase 2: Instructor Assignment Setup (Course Level)</div>
      <div className="text-muted-foreground font-sans text-xs">Create Assignment &rarr; Submission: External Tool (Checkmark) &rarr; Attach Course Rubric &rarr; Toggle Multi-Draft Settings</div>
    </div>
    <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20 p-3.5">
      <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">Phase 3: SpeedGrader Review &amp; Calibration</div>
      <div className="text-muted-foreground font-sans text-xs">Launch SpeedGrader &rarr; Review Quote-Anchored Suggestions &rarr; Validate Differential Revision &rarr; 1-Click Sync to Gradebook</div>
    </div>
  </div>
</div>

<h3>Phase 1: Canvas Administrator Setup (LTI 1.3 Advantage)</h3>

<ol className="space-y-2 text-xs text-muted-foreground">
  <li><strong>Log in to Canvas as a Root or Sub-Account Administrator</strong>.</li>
  <li>Navigate to <strong>Admin</strong> &rarr; <strong>Developer Keys</strong> &rarr; Click <strong>+ Developer Key</strong> &rarr; Select <strong>+ LTI Key</strong>.</li>
  <li>Configure the Developer Key settings:
    <ul className="list-disc pl-5 mt-1 space-y-1 font-mono text-[11px] text-foreground">
      <li>Key Name: Checkmark Plagiarism &amp; AI Autograder</li>
      <li>Owner Email: admin@yourinstitution.edu</li>
      <li>Redirect URIs: https://app.checkmarkplagiarism.com/api/lti/v1p3/launch</li>
      <li>Method: Enter URL (or Manual Configuration)</li>
      <li>JSON / Config URL: https://app.checkmarkplagiarism.com/api/lti/v1p3/canvas-config.json</li>
    </ul>
  </li>
  <li>Under <strong>LTI Advantage Services</strong>, toggle on:
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li>&check; <strong>Can create and view assignment data in the gradebook</strong> (AGS LineItems)</li>
      <li>&check; <strong>Can view submission data, create and view grades in the gradebook</strong> (AGS Result/Score)</li>
      <li>&check; <strong>Can view list of people in the course and their roles</strong> (NRPS 2.0)</li>
      <li>&check; <strong>Can retrieve user data associated with the context</strong></li>
    </ul>
  </li>
  <li>Under <strong>Placements</strong>, ensure the following are enabled:
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li><code>Assignment Selection</code> (for LTI Deep Linking during assignment creation)</li>
      <li><code>SpeedGrader</code> / <code>Assignment Edit</code> (for direct SpeedGrader rubric embedding)</li>
      <li><code>Course Navigation</code> (optional, for instructor dashboard access)</li>
    </ul>
  </li>
  <li>Click <strong>Save</strong>. In the Developer Keys list, switch the State toggle from <strong>OFF</strong> to <strong>ON</strong>. Copy the generated <strong>Client ID</strong> (e.g., <code>10000000000142</code>).</li>
  <li>Navigate to <strong>Admin</strong> &rarr; <strong>Settings</strong> &rarr; <strong>Apps</strong> tab &rarr; Click <strong>View App Configurations</strong> &rarr; Click <strong>+ App</strong>.
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li>Configuration Type: Select <strong>By Client ID</strong>.</li>
      <li>Client ID: Paste the copied Client ID &rarr; Click <strong>Submit</strong> &rarr; Confirm <strong>Install</strong>.</li>
    </ul>
  </li>
</ol>

<h3>Phase 2: Instructor Course &amp; Assignment Setup</h3>

<ol className="space-y-2 text-xs text-muted-foreground">
  <li>Open your Canvas Course &rarr; Navigate to <strong>Assignments</strong> &rarr; Click <strong>+ Assignment</strong>.</li>
  <li>Name the assignment (e.g., <em>Synthesis Essay &ndash; Draft 1 (Formative Diagnostics)</em>).</li>
  <li>Set <strong>Points</strong> to <code>0</code> (for formative draft) or <code>100</code> (for single-assignment multi-draft).</li>
  <li>Scroll to <strong>Submission Type</strong>:
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li>Select <strong>External Tool</strong> from the dropdown.</li>
      <li>Click <strong>Find</strong> &rarr; Select <strong>Checkmark Plagiarism</strong> from the list.</li>
      <li>&check; Check <strong>Load This Tool In A New Tab</strong> (optional, recommended for split-screen drafting).</li>
    </ul>
  </li>
  <li>Click <strong>Save</strong> (do not publish yet).</li>
  <li>Scroll to the bottom of the saved assignment page and click <strong>+ Rubric</strong>.
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li>Select or build your custom rubric (e.g., <em>AP English 6-Point Rubric</em> or <em>University Composition Analytic Rubric</em>).</li>
      <li>Ensure criteria descriptions, rating bands, and point values are defined.</li>
      <li>Click <strong>Create Rubric</strong> / <strong>Save Rubric</strong>.</li>
    </ul>
  </li>
  <li>In the Checkmark configuration modal that appears, toggle <strong>Multi-Draft Revision Tracking</strong> to <strong>ON</strong>. Select whether this submission represents <strong>Draft 1 (Diagnostic)</strong>, <strong>Draft 2 (Revision)</strong>, or <strong>Final Summative</strong>.</li>
  <li>Click <strong>Publish Assignment</strong>.</li>
</ol>

<h3>Phase 3: SpeedGrader Review &amp; Calibration Workflow</h3>

<p>Once students submit their essays, grading is fast, structured, and fully controlled by the teacher:</p>

<div className="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-mono text-xs">
  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 text-teal-400 font-semibold mb-4">
    <span>CANVAS SPEEDGRADER WITH CHECKMARK EMBEDDED</span>
    <span className="text-slate-400 font-normal">Student: Alex Rivera &bull; Attempt 2 of 2 &bull; 92% Synced</span>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700 font-sans">
      <div className="text-slate-400 font-mono text-[11px] uppercase tracking-wider mb-2 font-semibold">Student Submission (Left Pane)</div>
      <div className="text-slate-200 text-xs leading-relaxed space-y-2">
        <p className="m-0 font-semibold text-slate-100">The Ethics of Algorithmic Bias in Municipal Housing</p>
        <p className="m-0 text-slate-300">In contemporary sociotechnical systems, algorithmic curation dictates cultural access...</p>
        <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-[11px]">
          <strong>[Green Highlight: Draft 2 Addition]</strong><br />
          &ldquo;Furthermore, machine learning models trained on historical redlining data perpetuate exclusionary lending...&rdquo;
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-slate-700/80 flex flex-wrap gap-2 text-[11px] font-mono">
        <span className="text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">&bull; Play Essay Playback™ (2h 45m)</span>
        <span className="text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">&bull; Paste Buffer: 0 external</span>
      </div>
    </div>

    <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700 font-sans">
      <div className="text-slate-400 font-mono text-[11px] uppercase tracking-wider mb-2 font-semibold">SpeedGrader Rubric Tray (Right Pane)</div>
      <div className="space-y-2 text-xs">
        <div className="p-2.5 rounded bg-slate-900 border border-slate-700">
          <div className="flex justify-between font-semibold text-slate-200 font-mono text-[11px]">
            <span>Criterion 1: Thesis &amp; Focus</span>
            <span className="text-teal-400">10 / 10 pts</span>
          </div>
          <div className="text-[11px] text-teal-300 mt-1">
            &check; Green Band Selected: Advanced (10 pts)<br />
            <em>&ldquo;Thesis directly articulates both technical and societal dimensions...&rdquo;</em>
          </div>
        </div>
        <div className="p-2.5 rounded bg-slate-900 border border-slate-700">
          <div className="flex justify-between font-semibold text-slate-200 font-mono text-[11px]">
            <span>Criterion 2: Evidence &amp; Synthesis</span>
            <span className="text-teal-400">18 / 20 pts</span>
          </div>
          <div className="text-[11px] text-teal-300 mt-1">
            &check; Rating Band: Proficient (18 pts)<br />
            <em>&ldquo;Integrated Source B and C in para 3. Counter-argument resolved from D1.&rdquo;</em>
          </div>
        </div>
        <div className="pt-2 flex items-center justify-between">
          <span className="text-slate-200 font-bold font-mono">Score: 92.0 / 100</span>
          <span className="px-3 py-1 bg-teal-600 text-white rounded font-mono text-[11px] font-semibold">&check; PASS TO GRADEBOOK</span>
        </div>
      </div>
    </div>
  </div>
</div>

<ol className="space-y-2 text-xs text-muted-foreground">
  <li>Open <strong>SpeedGrader</strong> from the Canvas Assignment page.</li>
  <li>In the right-hand panel, click <strong>View Rubric</strong>. The rubric matrix is already pre-populated with Checkmark’s calibrated point suggestions, rating band selections, and quote-anchored justifications.</li>
  <li>On the left-hand submission viewer, review the <strong>Differential Revision highlights</strong> (Green = new additions; Yellow = modified prose) and check the <strong>Essay Playback™</strong> button if you wish to verify typing authenticity.</li>
  <li>If you agree with the drafted marks, click <strong>Save Rubric</strong> &rarr; click <strong>Submit</strong>.</li>
  <li>The total calculated score and detailed criterion feedback instantly sync to the <strong>Canvas Gradebook</strong>, making feedback immediately accessible on the student&rsquo;s Canvas portal.</li>
</ol>

<hr className="my-8 border-border" />

<h2>7. Real-World Implementation Case Studies</h2>

<p>The following real-world case studies illustrate how secondary and postsecondary writing programs successfully scaled multi-draft writing cycles using Checkmark Plagiarism and Canvas SpeedGrader.</p>

<div className="my-6 overflow-x-auto rounded-xl border border-border">
  <table className="w-full text-left text-xs border-collapse">
    <thead>
      <tr className="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th className="p-3">Implementation Metric</th>
        <th className="p-3">Traditional Canvas Grading</th>
        <th className="p-3 bg-teal-50/50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300">Checkmark + SpeedGrader Sync</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border text-muted-foreground">
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Average Grading Time / Essay</td>
        <td className="p-3">14.8 minutes</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">1.4 minutes (89% reduction)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Formative Feedback Turnaround</td>
        <td className="p-3">12.4 calendar days</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">18 hours</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Multi-Draft Cycles per Term</td>
        <td className="p-3">1.8 cycles</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">5.4 cycles (3x increase)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Student Revision Compliance</td>
        <td className="p-3">38% substantive revision</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">84% substantive revision</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Inter-Rater Rubric Variance</td>
        <td className="p-3">&plusmn; 14.2% score drift</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&plusmn; 2.8% score drift</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Contested Integrity Cases</td>
        <td className="p-3">24 disputed AI flags/term</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">0 unresolved disputes</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="my-6 space-y-5">
  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">Case Study 1</div>
    <h3 className="text-base font-bold text-foreground mb-2 mt-0">Secondary AP English Language &amp; Composition (Public High School District)</h3>
    <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 mb-0">
      <li><strong>Setting:</strong> Suburban school district; 4 AP Lang teachers managing 165 students across 6 sections.</li>
      <li><strong>Challenge:</strong> Teachers reported spending 41.25 hours per assignment cycle, forcing them to cut formative drafts and assign only single-draft timed writes.</li>
      <li><strong>Implementation:</strong> Configured a 2-stage Canvas module using Checkmark with the College Board AP 6-point Analytic Rubric. Draft 1 used zero-point formative diagnostics (45s teacher calibration per essay); Draft 2 utilized differential revision analysis.</li>
      <li><strong>Results:</strong> Total grading time dropped from <strong>41.25 hours to 6.2 hours</strong>. Feedback returned within 24 hours. Substantive revision jumped from 34% to 89%, resulting in a district-wide <strong>+14% increase in AP Exam passing scores (3+)</strong>.</li>
    </ul>
  </div>

  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">Case Study 2</div>
    <h3 className="text-base font-bold text-foreground mb-2 mt-0">University First-Year Composition (R1 Public University)</h3>
    <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 mb-0">
      <li><strong>Setting:</strong> University Writing Program; 210 students across 8 sections taught primarily by graduate teaching assistants (GTAs) and adjunct instructors.</li>
      <li><strong>Challenge:</strong> Severe grading inconsistency across sections; single-draft papers suffered from weak source integration and student complaints regarding arbitrary grading.</li>
      <li><strong>Implementation:</strong> Department chair configured an Account-Level Canvas Rubric bound to Checkmark across all 8 course shells for the 2,000-word Capstone Research Paper.</li>
      <li><strong>Results:</strong> Inter-rater scoring variance dropped from <strong>&plusmn; 16.5% to &plusmn; 3.1%</strong>, eliminating grade appeals. Essay Playback™ identified 14 uncredited paste events while exonerating 6 non-native English writers. Adjunct grading workload fell by <strong>68%</strong>.</li>
    </ul>
  </div>

  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">Case Study 3</div>
    <h3 className="text-base font-bold text-foreground mb-2 mt-0">Community College Remedial/Developmental Writing Program</h3>
    <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 mb-0">
      <li><strong>Setting:</strong> Urban community college; Accelerated Learning Program (ALP) with 120 developmental writing students (45% Multilingual Writers).</li>
      <li><strong>Challenge:</strong> High attrition rates caused by punitive grading and anxiety surrounding generic AI detectors falsely flagging non-native English syntax.</li>
      <li><strong>Implementation:</strong> Low-stakes 3-draft formative sequence in Canvas. AI rubric suggestions acted as coaching prompts; Essay Playback™ demonstrated that authentic effort was recognized.</li>
      <li><strong>Results:</strong> Course completion rates increased from <strong>61% to 83%</strong>. Zero false-positive AI integrity disputes occurred, as multilingual writers possessed full keystroke proof of authentic drafting.</li>
    </ul>
  </div>
</div>

<hr className="my-8 border-border" />

<h2>8. Enterprise Security, FERPA &amp; Zero-Training Compliance</h2>

<p>When deploying AI-assisted grading and integrity software across a school district or higher education institution, data privacy and regulatory compliance are non-negotiable. Checkmark Plagiarism is engineered from the ground up for strict educational data governance:</p>

<div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="rounded-xl border border-border bg-card p-4">
    <h3 className="text-sm font-bold text-foreground mb-1 mt-0">1. ZERO MODEL TRAINING GUARANTEE</h3>
    <p className="text-xs text-muted-foreground m-0">Student essays and instructor feedback are <strong>NEVER</strong> used to train public or commercial Large Language Models (LLMs). All processing occurs in ephemeral, private compute instances.</p>
  </div>
  <div className="rounded-xl border border-border bg-card p-4">
    <h3 className="text-sm font-bold text-foreground mb-1 mt-0">2. FERPA &amp; COPPA COMPLIANCE</h3>
    <p className="text-xs text-muted-foreground m-0">Fully compliant with FERPA and COPPA requirements. Student Personally Identifiable Information (PII) is encrypted at rest and in transit; pseudonymous identifiers (<code>sub</code> claims) are used during processing.</p>
  </div>
  <div className="rounded-xl border border-border bg-card p-4">
    <h3 className="text-sm font-bold text-foreground mb-1 mt-0">3. ENTERPRISE ENCRYPTION &amp; SOC 2 TYPE II</h3>
    <p className="text-xs text-muted-foreground m-0">TLS 1.3 encryption in transit; AES-256 encryption at rest. SOC 2 Type II certified cloud infrastructure hosted in dedicated US-based data centers with zero third-party data broker sharing.</p>
  </div>
  <div className="rounded-xl border border-border bg-card p-4">
    <h3 className="text-sm font-bold text-foreground mb-1 mt-0">4. SECURE SSO &amp; LMS ROLE ENFORCEMENT</h3>
    <p className="text-xs text-muted-foreground m-0">Role-Based Access Control (RBAC) enforced via Canvas LTI 1.3 tokens. Compatible with Google SSO, Microsoft Entra ID (Azure AD), ClassLink, and Clever.</p>
  </div>
</div>

<hr className="my-8 border-border" />

<h2>9. Frequently Asked Questions (FAQ)</h2>

<h3>1. Does Checkmark replace the native Canvas SpeedGrader interface or integrate within it?</h3>
<p>Checkmark integrates directly <strong>inside</strong> Canvas SpeedGrader. Through LTI 1.3 Advantage (AGS 2.0) and the Canvas REST API, Checkmark populates the native SpeedGrader rubric tray, criterion point fields, and comment streams. Educators continue working inside their familiar Canvas environment while benefiting from Checkmark&rsquo;s quote-anchored suggestions, differential revision highlights, and keystroke playback telemetry.</p>

<h3>2. How does Checkmark prevent Draft 2 from overwriting Draft 1 rubric comments in Canvas?</h3>
<p>Checkmark supports two workflows:</p>
<ul>
  <li><strong>Linked Assignments:</strong> When using separate Draft 1 (Formative) and Draft 2 (Summative) Canvas assignments, each retains its own distinct rubric assessment and gradebook line item. Checkmark&rsquo;s differential revision engine automatically links the two submissions in the background to provide side-by-side comparison.</li>
  <li><strong>Multi-Attempt Assignments:</strong> When using multiple attempts on a single assignment, Checkmark versions each attempt&rsquo;s rubric evaluation separately, allowing teachers to toggle between Attempt 1 and Attempt 2 history without losing formative annotations.</li>
</ul>

<h3>3. Can our department use our existing Canvas Account-Level Rubrics?</h3>
<p>Yes. Checkmark dynamically ingests any rubric attached to a Canvas assignment—including Course-Level rubrics, Account-Level institutional rubrics, and state/AP standardized rubrics. Checkmark&rsquo;s Abstract Syntax Tree (AST) parser normalizes the rubric criteria and rating bands, generating justifications tailored to your exact phrasing.</p>

<h3>4. How does Essay Playback™ capture keystrokes if students draft in Google Docs or Microsoft Word?</h3>
<p>Checkmark captures writing telemetry through native ecosystem integrations:</p>
<ul>
  <li><strong>Google Docs:</strong> Checkmark&rsquo;s Google Workspace extension records full, granular revision telemetry and keystroke dynamics.</li>
  <li><strong>Canvas Embedded Editor:</strong> Keystrokes are captured directly within the browser interface.</li>
  <li><strong>Microsoft Word / Office 365:</strong> Rich revision session history and timestamped edit intervals are captured via Checkmark&rsquo;s Word integration tooling.</li>
</ul>
<p>If an external document is pasted into Canvas, Checkmark inspects the paste buffer and preserves 100% of the raw clipboard text for educator review.</p>

<h3>5. What happens if a student uses an &ldquo;AI Humanizer&rdquo; (e.g., QuillBot, Undetectable AI) between Draft 1 and Draft 2?</h3>
<p>While AI humanizers and text paraphrasers can disguise linguistic patterns (perplexity and burstiness) to evade surface-level detectors, they cannot fabricate authentic temporal writing history. Checkmark’s <strong>Essay Playback™</strong> immediately detects large-block paste events or steady-state transcription without drafting pauses, exposing the evasion attempt regardless of surface-level text rewriting.</p>

<h3>6. How does the Differential Revision Analysis track student improvements?</h3>
<p>Checkmark utilizes an advanced semantic and structural diffing engine. When Draft 2 is submitted, the engine compares the two drafts paragraph by paragraph, categorizing changes into substantive additions, structural reorganization, syntax refinements, and deletions. It also cross-references the student&rsquo;s changes against the specific formative recommendations generated on Draft 1, giving the teacher a checklist of resolved versus unaddressed revision targets.</p>

<h3>7. Is student writing data protected under FERPA and district privacy rules?</h3>
<p>Yes. Checkmark maintains a strict <strong>Zero Model Training Policy</strong>. Student essays, outlines, and instructor comments are never used to train public or commercial AI models. All data is processed in private, ephemeral environments with end-to-end encryption (TLS 1.3 in transit, AES-256 at rest) in full compliance with FERPA, COPPA, and SOC 2 Type II security standards.</p>

<hr className="my-8 border-border" />

<h2>Conclusion: Transform Canvas SpeedGrader into an Iterative Writing Hub</h2>

<p>The transition from transactional, single-draft essay grading to rich, iterative writing cycles is the single most impactful pedagogical shift an English department or writing program can make. By removing the crushing 40+ hour grading bottleneck, <strong>Checkmark Plagiarism</strong> empowers educators to provide rapid, high-impact formative feedback without sacrificing their non-instructional personal time.</p>

<p>With native <strong>Canvas SpeedGrader LTI 1.3 integration</strong>, <strong>quote-anchored rubric justifications</strong>, <strong>differential revision tracking</strong>, and patent-pending <strong>Essay Playback™</strong>, writing instructors no longer have to guess what happened between drafts—they have the defensible evidence and automated scaffolding needed to foster authentic student growth.</p>

<div className="my-8 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6 text-center">
  <h3 className="text-lg font-bold text-foreground mb-2 mt-0">Ready to Upgrade Your Canvas Grading Workflow?</h3>
  <p className="text-xs text-muted-foreground mb-4 max-w-xl mx-auto">
    Bring quote-anchored AI rubric autograding, differential revision analysis, and keystroke integrity playback into your Canvas SpeedGrader environment.
  </p>
  <a
    href="/services/integrations/canvas-lms"
    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm transition-colors"
  >
    Explore Canvas LMS Integration
  </a>
</div>
`;

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
};

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const refValue = typeof resolvedParams?.ref === 'string' ? resolvedParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/how-to-configure-canvas-speedgrader-with-ai-rubric-suggestions-for-multi-draft-revision-assignments"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
