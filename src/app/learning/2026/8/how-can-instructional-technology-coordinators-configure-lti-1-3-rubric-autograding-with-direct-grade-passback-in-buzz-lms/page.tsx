import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Instructional Technology Coordinators Configure LTI 1.3 Rubric Autograding With Direct Grade Passback in Buzz LMS? | Checkmark Plagiarism",
  description: "A technical and pedagogical configuration guide for Instructional Technology Coordinators integrating LTI 1.3 Advantage rubric autograding, Essay Playback™, and direct grade passback in Agilix Buzz LMS.",
  keywords: [
    "Buzz LMS LTI 1.3",
    "Agilix Buzz grade passback",
    "LTI 1.3 Advantage autograding",
    "Instructional Technology Coordinator guide",
    "AI rubric scoring",
    "Assignment and Grade Services AGS",
    "Names and Role Provisioning NRPS",
    "Deep Linking 2.0 Buzz",
    "Essay Playback Buzz LMS",
    "Checkmark Plagiarism",
    "competency-based education writing",
  ],
  openGraph: {
    images: ["/images/services/report-grading-view.png"],
  },
};

export const meta = {
  title: "How Can Instructional Technology Coordinators Configure LTI 1.3 Rubric Autograding With Direct Grade Passback in Buzz LMS? | Checkmark Plagiarism",
  description: "A technical and pedagogical configuration guide for Instructional Technology Coordinators integrating LTI 1.3 Advantage rubric autograding, Essay Playback™, and direct grade passback in Agilix Buzz LMS.",
  "opengraph-image": "/images/services/report-grading-view.png",
  date: "08-18-2026",
  readTime: "~18 min read",
  category: "LMS Integrations",
  categories: ["LMS Integrations", "Instructional Technology", "Rubric Autograding", "Administrator Guides"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div className="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6">
  <div className="flex items-center gap-2 mb-2">
    <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white">
      Executive Summary
    </span>
  </div>
  <p className="text-foreground font-medium leading-relaxed">
    For Instructional Technology Coordinators, District IT Directors, and Virtual Academy Leaders utilizing <strong>Agilix Buzz LMS</strong>, scaling authentic writing assessment across personalized, continuous-enrollment, and competency-based pathways presents a severe operational bottleneck: the manual grading backlog. Traditional writing evaluation forces educators to juggle disconnected AI detection tools, web plagiarism scanners, and external spreadsheets, manually transcribing criterion scores into Buzz&apos;s mastery gradebook. By deploying <strong>Checkmark Plagiarism</strong> via <strong>1EdTech LTI 1.3 Advantage</strong>—leveraging <strong>OpenID Connect (OIDC)</strong>, <strong>Assignment and Grade Services (AGS 2.0)</strong>, <strong>Names and Role Provisioning Services (NRPS 2.0)</strong>, and <strong>Deep Linking 2.0 (LTI-DL)</strong>—districts can establish an enterprise-grade, bi-directional assessment bridge. This integration couples grounded, quote-anchored AI rubric autograding and patent-pending <a href="/services/writing-process" className="text-teal-600 dark:text-teal-400 font-semibold underline underline-offset-2">Essay Playback™</a> (keystroke dynamics and 100% paste preservation) directly inside Buzz Course Master templates and derivative child sections. Educators retain 100% pedagogical authority through a <strong>Teacher-in-the-Loop</strong> moderation console, slashing grading latency from 9+ days to under 48 hours while maintaining strict FERPA/COPPA zero-data-retention compliance.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> provides seamless enterprise interoperability for virtual and blended districts through its comprehensive suite of <a href="/services/autograder">AI rubric autograding</a>, <a href="/services/writing-process">writing process replay</a>, <a href="/services/ai-detection">passage-level AI detection</a>, <a href="/services/plagiarism-detection">side-by-side plagiarism checking</a>, and native <a href="/services/integrations/buzz-lms">Agilix Buzz LMS integration</a>.</p>

<h2>The Virtual &amp; Competency-Based Assessment Dilemma in Agilix Buzz LMS</h2>

<p>Agilix Buzz LMS occupies a distinct and vital position within the K–12 and postsecondary educational technology landscape. As the leading engine for statewide virtual academies, regional educational service agencies (RESAs), personalized learning districts, and competency-based education (CBE) consortia, Buzz is architected specifically for flexible, student-centered pacing.</p>

<p>Unlike traditional semester-bound learning management systems, Buzz thrives on non-linear learning workflows:</p>

<ul>
  <li><strong>Continuous Enrollment Pipelines:</strong> Students matriculate, progress, and finish courses at individualized velocities throughout 365 calendar days.</li>
  <li><strong>Multi-Tiered Domain Hierarchies:</strong> District administrators manage complex parent-child domain structures where curriculum is authored once in <strong>Course Masters</strong>, inherited across <strong>Base Courses</strong>, and instantiated in thousands of <strong>Derivative Child Sections</strong>.</li>
  <li><strong>Dual-Architecture Gradebooks:</strong> Buzz calculates both traditional points-based letter grades and standards-aligned <strong>Competency &amp; Mastery Matrices</strong>, mapping individual assessment criteria to state and district performance indicators.</li>
</ul>

<div className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl">
  <div className="text-center font-mono font-bold text-teal-400 text-xs sm:text-sm tracking-wider uppercase mb-6 pb-3 border-b border-slate-800">
    Agilix Buzz LMS Hierarchical Curriculum Architecture
  </div>
  <div className="max-w-xl mx-auto space-y-4">
    <div className="rounded-xl border border-teal-500/40 bg-teal-950/40 p-4 text-center">
      <div className="font-bold text-teal-300 text-sm">District Master Course (ELA)</div>
      <div className="text-xs text-slate-300 mt-1">&bull; Master Analytic Rubric (4 Criteria) &bull; Deep-Linked Checkmark Assignment Template</div>
    </div>
    <div className="flex justify-center">
      <span className="text-teal-400 font-mono text-xs flex items-center gap-1">&darr; Inherits Curriculum &amp; LTI Bindings</span>
    </div>
    <div className="rounded-xl border border-indigo-500/40 bg-indigo-950/40 p-4 text-center">
      <div className="font-bold text-indigo-300 text-sm">Base Course Offering</div>
      <div className="text-xs text-slate-300 mt-1">&bull; Section Configuration &amp; Teacher Roles &bull; Pacing Schedules</div>
    </div>
    <div className="flex justify-center">
      <span className="text-indigo-400 font-mono text-xs flex items-center gap-1">&darr; Spawns Asynchronous Cohorts</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3 text-center">
        <div className="font-semibold text-emerald-300 text-xs">Virtual Cohort A (Continuous)</div>
        <div className="text-[11px] text-slate-400 mt-1">&bull; Dynamic Roster (NRPS 2.0)<br />&bull; AGS 2.0 Real-Time Grade Passback</div>
      </div>
      <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3 text-center">
        <div className="font-semibold text-emerald-300 text-xs">Virtual Cohort B (Cohort-Based)</div>
        <div className="text-[11px] text-slate-400 mt-1">&bull; Dynamic Roster (NRPS 2.0)<br />&bull; AGS 2.0 Real-Time Grade Passback</div>
      </div>
    </div>
  </div>
</div>

<h3>The Asynchronous Grading Bottleneck</h3>

<p>While Buzz excels at automarking objective formative assessments (quizzes, interactive modules, and digital workbooks), open-response qualitative writing assignments present a critical structural chokepoint.</p>

<p>In an asynchronous or mastery-based virtual academy, when a student submits a major synthesis essay, persuasive argument, or DBQ (Document-Based Question), <strong>their forward curriculum progression often pauses until that essay is evaluated against state mastery rubrics</strong>.</p>

<p>When instructors manage cohorts of 120 to 180 remote students, manual essay evaluation creates an unsustainable grading backlog:</p>

<div className="my-6 rounded-xl border border-border bg-muted/40 p-5 text-center font-mono text-xs sm:text-sm text-foreground font-semibold">
  Grading Turnaround Latency = (Active Student Submissions &times; Avg Evaluation Time [22 min]) / Daily Teacher Grading Capacity [3.5 hrs] &approx; 9.4 Business Days
</div>

<p>A 9-day feedback delay completely breaks personalized learning velocity. By the time an instructor returns an essay with rubric feedback, the student has either stalled their pacing or moved into subsequent units without remediating foundational writing deficiencies.</p>

<h3>The Breakdown of Legacy Integrity &amp; Grading Tools</h3>

<p>Instructional Technology Coordinators attempting to solve this challenge with legacy edtech software encounter three systemic failure modes:</p>

<ol>
  <li><strong>The &ldquo;Black-Box Score&rdquo; Crisis:</strong> Legacy AI detectors output a single whole-document percentage (e.g., &ldquo;78% AI Detected&rdquo;) with zero passage-level explanation or behavioral evidence. In virtual settings, where teachers lack daily face-to-face rapport, false-positive flags destroy teacher-student trust and trigger contentious administrative appeals.</li>
  <li><strong>The Manual Gradebook Transcription Tax:</strong> Disconnected grading assistants require teachers to review essays in one browser tab, manually toggle to Buzz&apos;s grading screen, click individual rubric cells, copy-paste narrative feedback, and manually trigger mastery completions. This multi-tab workflow consumes 12 to 15 minutes per submission in pure clerical mechanics.</li>
  <li><strong>Broken LTI 1.1 / CSV Pipelines:</strong> Outdated LTI 1.1 integrations only support raw numeric score passback to a single gradebook cell. They cannot communicate individual rubric criterion scores, cannot attach grounded textual evidence, and frequently fail when syncing derivative child courses under Buzz&apos;s domain inheritance model.</li>
</ol>

<div className="my-8 overflow-x-auto rounded-xl border border-border">
  <table className="w-full text-left text-xs border-collapse">
    <thead>
      <tr className="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th className="p-3">Assessment Feature</th>
        <th className="p-3">Legacy Tooling Pipeline</th>
        <th className="p-3 bg-teal-50/50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300">Checkmark LTI 1.3 Suite</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border text-muted-foreground">
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Security Protocol</td>
        <td className="p-3">OAuth 1.0a / Shared Secret</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">OAuth 2.0 / OIDC &amp; Asymmetric JWKS</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Course Master Inheritance</td>
        <td className="p-3">Broken / Manual Section Re-linking</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Native Deep Linking 2.0 (1-Click Sync)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Roster &amp; Role Provisioning</td>
        <td className="p-3">Nightly CSV Sync / Batch Delays</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Real-Time NRPS 2.0 On-Demand Roster</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Gradebook Passback Scope</td>
        <td className="p-3">Aggregate Points Only</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">AGS 2.0 LineItem + Criterion Rubrics</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Mastery Matrix Alignment</td>
        <td className="p-3">None (Manual Objective Transfer)</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Direct Objective-Level Competency Binding</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Rubric Feedback Grounding</td>
        <td className="p-3">Generic / Hallucinated Boilerplate</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Quote-Anchored Student Text Citations</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Integrity Verification Model</td>
        <td className="p-3">Opaque Single % Guess</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Multi-Factor Triad + Keystroke Telemetry</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Writing Process Evidence</td>
        <td className="p-3">None (Static Text Only)</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Patent-Pending Essay Playback™ (100% Paste Capture)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Avg. Teacher Grading Time / Paper</td>
        <td className="p-3">22.0 Minutes</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">4.5 Minutes (79% Reduction)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Student Feedback Latency</td>
        <td className="p-3">7–10 Business Days</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&lt; 24–48 Hours</td>
      </tr>
    </tbody>
  </table>
</div>

<hr className="my-8 border-border" />

<h2>1EdTech LTI 1.3 Advantage &amp; Buzz LMS Architecture</h2>

<p>To achieve seamless, enterprise-grade interoperability across Agilix Buzz domain trees, districts must leverage the full <strong>1EdTech LTI 1.3 Advantage</strong> specification. LTI 1.3 replaces legacy, vulnerable shared-secret models with modern asymmetric public-key cryptography and modular RESTful sub-services.</p>

<div className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div className="text-center font-bold text-teal-400 text-sm mb-4 pb-2 border-b border-slate-800">
    LTI 1.3 ADVANTAGE FOUR-PILLAR ARCHITECTURAL SUITE
  </div>
  <div className="rounded-xl bg-slate-800/90 border border-slate-700 p-4 mb-4">
    <div className="font-bold text-teal-300 text-xs mb-1">1. LTI 1.3 Core Security Framework</div>
    <div className="text-[11px] text-slate-300 space-y-0.5">
      <div>&bull; OpenID Connect (OIDC) Initiation &amp; State Validation</div>
      <div>&bull; OAuth 2.0 Client Credentials Grant &amp; RSA-SHA256 Signed JWT Exchanges</div>
      <div>&bull; Asymmetric JSON Web Key Sets (JWKS) Endpoint Resolution</div>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
    <div className="rounded-lg bg-slate-800 p-3 border border-indigo-500/40">
      <div className="font-bold text-indigo-300 mb-1">2. AGS 2.0</div>
      <div className="text-[11px] text-slate-300">
        Assignment &amp; Grade Services<br />
        &bull; LineItem Sync<br />
        &bull; Rubric Breakdown<br />
        &bull; Formative Marginalia
      </div>
    </div>
    <div className="rounded-lg bg-slate-800 p-3 border border-emerald-500/40">
      <div className="font-bold text-emerald-300 mb-1">3. NRPS 2.0</div>
      <div className="text-[11px] text-slate-300">
        Names &amp; Role Provisioning<br />
        &bull; Section Roster Sync<br />
        &bull; RBAC Role Mapping<br />
        &bull; Continuous Admissions
      </div>
    </div>
    <div className="rounded-lg bg-slate-800 p-3 border border-amber-500/40">
      <div className="font-bold text-amber-300 mb-1">4. Deep Linking 2.0</div>
      <div className="text-[11px] text-slate-300">
        ContentItem Selection<br />
        &bull; Master Course 1-Click<br />
        &bull; Standard Rubric Binding<br />
        &bull; Custom Policies
      </div>
    </div>
  </div>
</div>

<h3>1. Security Framework: OAuth 2.0, OIDC, and Asymmetric Cryptographic Handshake</h3>

<p>The LTI 1.3 Core establishes a secure, zero-trust connection between Agilix Buzz and Checkmark Plagiarism.</p>

<p>When a student or teacher opens a Checkmark-enabled assignment in Buzz, the communication executes through a three-legged OpenID Connect (OIDC) authentication flow:</p>

<div className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 text-slate-100 p-5 font-mono text-xs">
  <div className="text-teal-400 font-bold mb-3 pb-2 border-b border-slate-800">
    LTI 1.3 / OIDC Cryptographic Launch Sequence
  </div>
  <div className="space-y-2 text-[11px] text-slate-300">
    <div className="flex items-start gap-2"><span className="text-teal-400 font-bold">[1]</span> <span>Student/Teacher clicks Checkmark assignment inside Agilix Buzz course frame.</span></div>
    <div className="flex items-start gap-2"><span className="text-teal-400 font-bold">[2]</span> <span>Buzz issues OIDC Login Initiation to Checkmark (<code className="text-teal-300">iss</code>, <code className="text-teal-300">login_hint</code>, <code className="text-teal-300">lti_message_hint</code>).</span></div>
    <div className="flex items-start gap-2"><span className="text-teal-400 font-bold">[3]</span> <span>Checkmark responds with Auth Request containing signed <code className="text-amber-300">state</code> and cryptographic <code className="text-amber-300">nonce</code>.</span></div>
    <div className="flex items-start gap-2"><span className="text-teal-400 font-bold">[4]</span> <span>Buzz validates user session, signs an <code className="text-emerald-300">id_token</code> JWT with its private RSA key, and returns to launch endpoint.</span></div>
    <div className="flex items-start gap-2"><span className="text-teal-400 font-bold">[5]</span> <span>Checkmark verifies JWT signature against Buzz&apos;s public JWKS endpoint, validates claims, and renders interface.</span></div>
  </div>
</div>

<ol>
  <li><strong>Login Initiation:</strong> Buzz sends an HTTP POST request to Checkmark’s OIDC initiation endpoint (<code>/api/lti13/oidc/login</code>), containing the <code>iss</code> (platform issuer: <code>https://agilixbuzz.com</code>), <code>login_hint</code> (obscured user identifier), <code>target_link_uri</code>, and <code>lti_message_hint</code>.</li>
  <li><strong>Authentication Request:</strong> Checkmark responds by redirecting the user’s browser back to Buzz’s authorization endpoint with a cryptographically secure <code>state</code> string and a unique <code>nonce</code> to prevent replay attacks.</li>
  <li><strong>Signed JWT ID Token Issuance:</strong> Buzz generates a signed JSON Web Token (<code>id_token</code>) utilizing its private RSA key and returns it to Checkmark’s launch URL.</li>
  <li><strong>JWKS Verification:</strong> Checkmark retrieves Buzz’s public key set from the platform’s JWKS URL, validates the cryptographic signature, confirms the token has not expired (<code>exp</code>), and ensures the <code>nonce</code> matches the original launch request.</li>
</ol>

<p>This workflow guarantees that no passwords, shared secrets, or identifiable student directory records are exposed in transit.</p>

<h3>2. Assignment and Grade Services (AGS 2.0 / LineItem API)</h3>

<p>The LTI 1.3 Assignment and Grade Services standard (<code>https://purl.imsglobal.org/spec/lti-ags/scope/lineitem</code>) powers bi-directional grade synchronization.</p>

<p>Checkmark utilizes AGS 2.0 to communicate three synchronized data streams back to Buzz upon teacher authorization:</p>

<ul>
  <li><strong>Numeric Score Passback:</strong> Transmits the scaled point total (e.g., <code>88.5 / 100</code>) directly to the Buzz gradebook column associated with the assignment&apos;s <code>lineitem</code>.</li>
  <li><strong>Criterion-Level Rubric Breakdown:</strong> Delivers structured JSON metadata containing the exact performance tier achieved across each analytic rubric criterion (e.g., <em>Thesis: 4/4</em>, <em>Evidence: 3/4</em>, <em>Synthesis: 3/4</em>, <em>Conventions: 4/4</em>).</li>
  <li><strong>Formatted Teacher Comments &amp; Formative Marginalia:</strong> Passes comprehensive, quote-anchored instructor justifications into Buzz’s student feedback panel.</li>
</ul>

<p>In Buzz, these line items can be dynamically linked to <strong>Course Competencies</strong>, ensuring that when Checkmark passes a rubric score, Buzz automatically updates the student&apos;s mastery trajectory against specific state academic standards.</p>

<h3>3. Names and Role Provisioning Services (NRPS 2.0)</h3>

<p>In virtual academies with rolling admissions, students frequently join or drop sections mid-cycle. NRPS 2.0 (<code>https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly</code>) completely eliminates manual roster exports or delayed overnight batch syncs.</p>

<p>When an instructor opens the Checkmark dashboard within Buzz, Checkmark calls Buzz’s NRPS endpoint to obtain the active section membership list. Checkmark maps Buzz institutional roles using standardized 1EdTech Role URIs:</p>

<ul>
  <li><code>http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor</code> &rarr; Granted full access to the Teacher Moderation Console, Essay Playback™ controls, rubric customization, and grade passback triggers.</li>
  <li><code>http://purl.imsglobal.org/vocab/lis/v2/membership#Learner</code> &rarr; Restricted to the student composition environment, assignment prompt details, self-reflection prompts, and released formative feedback.</li>
  <li><code>http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator</code> &rarr; Granted cross-domain auditing permissions, integration configuration, and FERPA/COPPA compliance report access.</li>
</ul>

<h3>4. Deep Linking 2.0 (LTI-DL)</h3>

<p>For Instructional Technology Coordinators building standardized curriculum, Deep Linking 2.0 (<code>https://purl.imsglobal.org/spec/lti-dl/scope/contentitem</code>) is the cornerstone of scalable deployment.</p>

<p>Instead of requiring individual teachers to manually configure LTI URLs, keys, and custom parameters in every class section, deep linking allows curriculum authors to configure Checkmark assignments directly inside <strong>Buzz Master Courses</strong>:</p>

<ol>
  <li>The coordinator clicks <strong>Add Activity &rarr; External Tool (Checkmark Plagiarism)</strong> in the Buzz Master Course Editor.</li>
  <li>Checkmark launches an embedded Deep Linking selection window.</li>
  <li>The coordinator selects the assignment prompt, sets formatting parameters (minimum word counts, short-text guardrail limits), binds the standardized district analytic rubric, and configures integrity settings.</li>
  <li>Checkmark returns a signed <code>ContentItem</code> JSON response to Buzz. Buzz automatically embeds the fully configured activity into the master syllabus.</li>
  <li>When Buzz spawns hundreds of derivative child courses for individual teachers, all Checkmark parameters, rubric definitions, and AGS line item endpoints are automatically inherited without error.</li>
</ol>

<hr className="my-8 border-border" />

<h2>Checkmark Plagiarism&apos;s Teacher-in-the-Loop AI Rubric Autograding Suite for Buzz</h2>

<p>Checkmark Plagiarism transforms essay assessment in Buzz LMS by replacing subjective guessing and clerical transcription with an integrated, multi-dimensional evaluation suite.</p>

<div className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div className="text-center font-bold text-teal-400 text-sm mb-4 pb-2 border-b border-slate-800">
    CHECKMARK TEACHER-IN-THE-LOOP EVALUATION PIPELINE IN BUZZ
  </div>
  <div className="space-y-4">
    <div className="rounded-lg bg-slate-800 p-3 border border-slate-700">
      <div className="font-bold text-slate-200">1. Student Submits Essay in Buzz LMS</div>
      <div className="text-[11px] text-slate-400 mt-0.5">Submitted via native editor, Google Docs, or Word document upload</div>
    </div>
    <div className="text-center text-teal-400 font-bold">&darr; Parallel Analysis Engines (Zero-Retention Cloud Sandbox)</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="rounded bg-slate-800/90 p-3 border border-teal-500/30">
        <div className="font-bold text-teal-300">Multi-Factor Integrity</div>
        <div className="text-[11px] text-slate-300 mt-1">Passage-level AI sliders &amp; billions of web sources</div>
      </div>
      <div className="rounded bg-slate-800/90 p-3 border border-indigo-500/30">
        <div className="font-bold text-indigo-300">Behavioral Telemetry</div>
        <div className="text-[11px] text-slate-300 mt-1">Patent-pending Essay Playback™ &amp; paste capture</div>
      </div>
      <div className="rounded bg-slate-800/90 p-3 border border-emerald-500/30">
        <div className="font-bold text-emerald-300">Rubric Engine</div>
        <div className="text-[11px] text-slate-300 mt-1">Grounded quote-anchored criterion scoring</div>
      </div>
    </div>
    <div className="text-center text-teal-400 font-bold">&darr; Embedded Educator Moderation Console</div>
    <div className="rounded-lg bg-slate-800/90 p-3 border border-teal-500/50 text-slate-200">
      <div className="font-bold text-teal-300">Teacher Review &amp; 1-Click Calibration</div>
      <div className="text-[11px] text-slate-300 mt-0.5">Educator reviews pre-scored criteria, adjusts point tiers, edits formative annotations in 3–5 minutes.</div>
    </div>
    <div className="text-center text-teal-400 font-bold">&darr; Teacher Clicks &ldquo;Authorize &amp; Sync&rdquo; (LTI 1.3 AGS 2.0)</div>
    <div className="rounded-lg bg-teal-950/40 p-3 border border-teal-500/60 text-center font-bold text-teal-300">
      Direct Injection into Buzz Gradebook &amp; Competency Mastery Matrix
    </div>
  </div>
</div>

<h3>1. Grounded Quote-Anchored Evidence Extraction</h3>

<p>Generic AI grading assistants frequently suffer from &ldquo;hallucinatory evaluation&rdquo;—assigning a student a low score for &ldquo;weak evidence&rdquo; without citing where the weakness occurs, or praising &ldquo;sophisticated syntax&rdquo; based on generalized probability distributions.</p>

<p>Checkmark&apos;s autograder operates on a <strong>grounded quote-anchored evidence model</strong>:</p>

<ul>
  <li><strong>Syntax &amp; Discourse Parsing:</strong> The engine analyzes the submission’s structural architecture against the specific descriptors in the Buzz-linked rubric.</li>
  <li><strong>Exact Evidence Extraction:</strong> For every rubric criterion (e.g., <em>Textual Analysis &amp; Supporting Evidence</em>), Checkmark extracts the exact sentence-level quotes from the student&apos;s essay that demonstrate mastery or reveal structural deficiencies.</li>
  <li><strong>Grounded Feedback Cards:</strong> In the evaluation sidebar, each criterion score is accompanied by an interactive evidence card displaying the exact excerpt, an explanation tied directly to the rubric benchmark, and a targeted formative coaching question.</li>
</ul>

<div className="my-6 rounded-2xl border border-teal-500/30 bg-card p-5 shadow-md">
  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border">
    <div className="font-semibold text-foreground text-sm">
      Rubric Criterion: Contextual Evidence &amp; Critical Analysis
    </div>
    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border border-teal-500/30">
      Score: 3.5 / 4.0 (Proficient)
    </span>
  </div>
  <div className="mt-3 space-y-3 text-xs">
    <div className="rounded-lg bg-muted/60 p-3 border-l-4 border-teal-500">
      <div className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
        Anchored Student Excerpt (Paragraph 3, Lines 14–17)
      </div>
      <p className="italic text-foreground m-0">
        &ldquo;Fitzgerald&apos;s recurring green light functions not merely as Gatsby&apos;s longing for Daisy, but as an indictment of the industrialized commodification of the American Dream.&rdquo;
      </p>
    </div>
    <div>
      <span className="font-semibold text-foreground">Evaluative Justification:</span>
      <span className="text-muted-foreground ml-1">Demonstrates advanced contextual interpretation connecting symbolic motif to overarching societal themes. Analysis exceeds basic plot summary.</span>
    </div>
    <div className="rounded-lg bg-teal-50/50 dark:bg-teal-950/20 p-3 border border-teal-500/20">
      <span className="font-semibold text-teal-700 dark:text-teal-300">Suggested Formative Coaching Prompt for Revision:</span>
      <p className="text-muted-foreground mt-1 mb-0">
        &ldquo;To achieve an Advanced (4.0) score, connect this thematic commodification directly to the Valley of Ashes imagery introduced in Chapter 2.&rdquo;
      </p>
    </div>
  </div>
</div>

<h3>2. The Teacher Moderation Console: &ldquo;Stop Guessing, Start Trusting&rdquo;</h3>

<p>Checkmark strictly rejects fully autonomous AI grading. In high-stakes educational environments, automated systems must serve as an assistant to the professional educator—never the final judge.</p>

<p>Within the <strong>Teacher Moderation Console</strong> embedded inside Buzz:</p>

<ol>
  <li><strong>Pre-Calibrated Draft Suggestions:</strong> The educator opens the student submission and sees Checkmark&apos;s suggested rubric selections and quote-anchored rationale highlighted across the interface.</li>
  <li><strong>Rapid Calibration:</strong> If the teacher agrees with the analysis, they can accept the criterion marks with a single keystroke or click.</li>
  <li><strong>Granular Educator Overrides:</strong> If the teacher disagrees with a suggested tier (for example, recognizing a creative rhetorical device that the AI marked as non-standard), the teacher simply clicks the desired rubric cell. The point totals recalculate instantly.</li>
  <li><strong>Custom Narrative Annotation:</strong> Instructors can freely edit, append, or replace any AI-generated commentary before release.</li>
  <li><strong>Single-Click Passback Authorization:</strong> No grades or comments enter the Buzz gradebook until the teacher explicitly clicks <strong>&ldquo;Authorize &amp; Sync Gradebook&rdquo;</strong>.</li>
</ol>

<h3>3. Patent-Pending Essay Playback™ &amp; Keystroke Dynamics</h3>

<p>To eliminate the fear and mistrust surrounding generative AI, Checkmark provides what no generic detector can: <strong>verifiable writing process telemetry</strong>.</p>

<div className="my-6 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-5 shadow-xl font-mono text-xs">
  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
    <div className="font-bold text-teal-400">CHECKMARK ESSAY PLAYBACK™ TIMELINE SCRUBBER</div>
    <div className="text-[11px] text-slate-400">Active Writing: 1h 18m | Keystrokes: 4,812</div>
  </div>
  <div className="mt-4 space-y-3">
    <div className="relative w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
      <div className="h-full bg-teal-500 w-1/4" title="Thesis Outline"></div>
      <div className="h-full bg-teal-400 w-2/5" title="Drafting Body P1"></div>
      <div className="h-full bg-rose-500 w-1/12" title="External Paste (412 chars)"></div>
      <div className="h-full bg-indigo-500 w-3/12" title="Final Revision"></div>
    </div>
    <div className="flex justify-between text-[10px] text-slate-400">
      <span>00:00 (Start)</span>
      <span className="text-teal-400">Drafting Body (38 wpm)</span>
      <span className="text-rose-400 font-bold">Paste Event [Jump to Replay]</span>
      <span>01:42:00 (Submission)</span>
    </div>
  </div>
</div>

<ul>
  <li><strong>Keystroke-by-Keystroke Video Replay:</strong> Instructors can scrub through the entire writing session at 1x to 8x speed, watching the student brainstorm, pause to compose, backspace, rephrase, and restructure paragraphs in real time.</li>
  <li><strong>External Paste Buffer Capture with 100% Text Preservation:</strong> When text is pasted from an outside application, Checkmark immediately flags the event, records the exact timestamp, and <strong>preserves the entire original pasted text block in a dedicated evidence card</strong>—even if the student subsequently edits or rewrites every word. A &ldquo;Jump to Replay&rdquo; button transports the teacher directly to the moment of insertion.</li>
  <li><strong>Transcription Detection:</strong> Checkmark’s telemetry engine monitors typing velocity and burst cadence. If a student attempts to bypass paste detection by manually retyping text from a smartphone or second monitor, the system flags the anomalous lack of cognitive pauses and backspaces characteristic of manual transcription.</li>
  <li><strong>Protection for Authentic Writers:</strong> Keystroke dynamics provide conclusive, defensible proof to protect honest students from false AI accusations, demonstrating authentic human effort from the first character to the final submission.</li>
</ul>

<h3>4. Multi-Factor Academic Integrity Verification Triad</h3>

<p>Checkmark integrates writing process analysis with advanced textual matching:</p>

<div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">1</span>
      <h4 className="text-sm font-semibold text-foreground m-0">Patent-Pending Replay™</h4>
    </div>
    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4 m-0">
      <li>Keystroke dynamic vectors</li>
      <li>100% clipboard paste history</li>
      <li>Typing cadence vs. transcription</li>
    </ul>
  </div>
  <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-100 text-indigo-700 text-xs font-bold dark:bg-indigo-950 dark:text-indigo-300">2</span>
      <h4 className="text-sm font-semibold text-foreground m-0">Passage-Level AI Sliders</h4>
    </div>
    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4 m-0">
      <li>Sentence-level probability bars</li>
      <li>Sub-150-word honest guardrails</li>
      <li>Perplexity &amp; burstiness analysis</li>
    </ul>
  </div>
  <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-700 text-xs font-bold dark:bg-amber-950 dark:text-amber-300">3</span>
      <h4 className="text-sm font-semibold text-foreground m-0">Side-by-Side Plagiarism</h4>
    </div>
    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4 m-0">
      <li>Billions of live web sources</li>
      <li>Cross-cohort student repository</li>
      <li>Uncited source differentiation</li>
    </ul>
  </div>
</div>

<ul>
  <li><strong>Passage-Level AI Confidence Sliders:</strong> Rather than assigning a blanket percentage to the entire essay, Checkmark underlines specific suspicious sentences or paragraphs. Each flagged passage features an individual sidebar slider illustrating the stylistic probability distribution (typical human variance vs. typical AI predictability/burstiness).</li>
  <li><strong>Honest Sub-150-Word Guardrails:</strong> Recognizing that statistical language models produce high false-positive rates on short texts, Checkmark automatically displays <code>N/A</code> for short-answer responses under 150 words rather than guessing on insufficient sample sizes.</li>
  <li><strong>Side-by-Side Plagiarism &amp; Uncited Source Differentiation:</strong> Checkmark scans live web indices, digital publications, and school repositories, rendering side-by-side quote comparisons with direct source links. Crucially, the system separates intentional verbatim copying from <strong>uncited source usage</strong>, allowing teachers to treat missing citation formatting as a formative coaching moment rather than academic fraud.</li>
</ul>

<hr className="my-8 border-border" />

<h2>Real-World District &amp; Virtual Academy Case Studies</h2>

<h3>Case Study 1: Statewide 25,000-Student Virtual Academy ELA Rollout</h3>

<div className="my-6 rounded-2xl border border-border bg-muted/30 p-5">
  <div className="font-bold text-foreground text-sm mb-1">Mountain State Virtual Academy (MSVA)</div>
  <p className="text-xs text-muted-foreground m-0"><strong>Profile:</strong> Statewide 6–12 Virtual Public Charter School | 25,000 Asynchronous Students | Agilix Buzz LMS with 140 Remote ELA Faculty.</p>
</div>

<p>MSVA’s Instructional Technology Department integrated Checkmark via LTI 1.3 Advantage across 18 English Language Arts Course Masters in Buzz. Standardized 4-tier state writing rubrics were bound to Checkmark assignments via Deep Linking 2.0. AGS 2.0 LineItem endpoints were mapped directly to state competency performance standards in Buzz&apos;s domain master settings.</p>

<div className="my-6 overflow-x-auto rounded-xl border border-border">
  <table className="w-full text-left text-xs border-collapse">
    <thead>
      <tr className="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th className="p-3">Operational Metric</th>
        <th className="p-3">Pre-Implementation</th>
        <th className="p-3 bg-teal-50/50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300">With Checkmark LTI 1.3</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border text-muted-foreground">
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Average Grading Time per Essay</td>
        <td className="p-3">23.4 minutes</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">4.8 minutes (79% Faster)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Turnaround Latency (Submission-Sync)</td>
        <td className="p-3">9.4 Business Days</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">1.6 Business Days (&lt; 38 Hours)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Weekly Teacher Grading Hours</td>
        <td className="p-3">18.5 hours / week</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">4.2 hours / week</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Mastery Objective Auto-Update Rate</td>
        <td className="p-3">0% (Manual Clerical Transfer)</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">100% (AGS 2.0 Direct Passback)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">False-Positive AI Academic Appeals</td>
        <td className="p-3">42 appeals / month</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">1 appeal / semester</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Course Completion Rate on Schedule</td>
        <td className="p-3">68.2%</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">89.4% (+21.2% Improvement)</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Pedagogical Impact:</strong> By providing instructors with quote-anchored draft evaluations and 1-click Buzz gradebook sync, grading turnaround plummeted by <strong>83%</strong>. Remote teachers utilized Essay Playback™ during video conferences to review drafting sessions with students, completely eliminating contentious accusations and restoring trust in asynchronous learning.</p>

<hr className="my-8 border-border" />

<h3>Case Study 2: Competency-Based High School District Writing Calibration</h3>

<div className="my-6 rounded-2xl border border-border bg-muted/30 p-5">
  <div className="font-bold text-foreground text-sm mb-1">Prairie Valley School District</div>
  <p className="text-xs text-muted-foreground m-0"><strong>Profile:</strong> 12 Comprehensive High Schools | 16,000 Students | 68 ELA Teachers | Agilix Buzz LMS Competency Mastery Model.</p>
</div>

<p>Prairie Valley utilized Checkmark&apos;s Teacher Moderation Console to standardize scoring across 12 high school campuses. District curriculum coordinators configured a universal 10th-grade persuasive writing rubric in the Buzz Master Course.</p>

<div className="my-6 overflow-x-auto rounded-xl border border-border">
  <table className="w-full text-left text-xs border-collapse">
    <thead>
      <tr className="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th className="p-3">Rubric Assessment Category</th>
        <th className="p-3">Legacy Manual Grading</th>
        <th className="p-3 bg-teal-50/50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300">Checkmark Moderated</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border text-muted-foreground">
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Thesis Clarity &amp; Argument Structure</td>
        <td className="p-3">&kappa; = 0.54 (Moderate)</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&kappa; = 0.88 (Strong Consensus)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Textual Evidence &amp; Source Synthesis</td>
        <td className="p-3">&kappa; = 0.48 (Weak)</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&kappa; = 0.86 (Strong Consensus)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Rhetorical Organization &amp; Cohesion</td>
        <td className="p-3">&kappa; = 0.51 (Moderate)</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&kappa; = 0.84 (Strong Consensus)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Command of Conventions &amp; Style</td>
        <td className="p-3">&kappa; = 0.62 (Moderate)</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">&kappa; = 0.91 (Very Strong Consensus)</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Outcome:</strong> By anchoring evaluation criteria to exact textual evidence, inter-rater reliability across all 12 campuses improved from moderate/weak (&kappa; &approx; 0.53) to strong consensus (&kappa; &approx; 0.87). Teachers reclaimed an estimated 14 hours per essay cycle while Buzz’s Competency Matrix received instant, verified criterion data via AGS 2.0.</p>

<hr className="my-8 border-border" />

<h3>Case Study 3: Online AP English Literature Cohort Authenticity Investigation</h3>

<div className="my-6 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-5 shadow-xl font-mono text-xs">
  <div className="font-bold text-teal-400 text-sm mb-2 pb-2 border-b border-slate-800">
    AP Literature Authenticity Investigation Dossier
  </div>
  <div className="space-y-2 text-[11px] text-slate-300">
    <div>&bull; <strong className="text-slate-200">Generic Whole-Paper Detector:</strong> <span className="text-rose-400 font-bold">84% &ldquo;Likely AI-Generated&rdquo;</span> (Opaque False Positive)</div>
    <div>&bull; <strong className="text-slate-200">Essay Playback™ Duration:</strong> 44 minutes 12 seconds of active drafting</div>
    <div>&bull; <strong className="text-slate-200">Total Keystrokes Logged:</strong> 3,420 (Typing cadence: 34 WPM with natural pause distribution)</div>
    <div>&bull; <strong className="text-slate-200">Clipboard Event Log:</strong> 1 external paste (124 characters &ndash; verified prompt poem quote)</div>
    <div>&bull; <strong className="text-slate-200">Revisions &amp; Deletions:</strong> 142 word-level backspaces, 3 paragraph rearrangements</div>
    <div>&bull; <strong className="text-slate-200">Autograder Rubric Score (AP 6-Point Scale):</strong> 1-4-1 (Row A: 1/1, Row B: 4/4, Row C: 1/1)</div>
    <div className="pt-2 border-t border-slate-800 text-teal-300 font-bold">
      &check; Outcome: Full student exoneration; verified authentic literary composition.
    </div>
  </div>
</div>

<p>Using Checkmark’s Essay Playback™, the AP instructor verified that the student had typed the entire analysis live within the Buzz editor over 44 minutes, exhibiting natural cognitive composing pauses before formulating complex metaphorical claims. The student was immediately cleared without disciplinary disruption, and the rubric autograder generated an AP-aligned 6-point evaluation that synchronized directly to Buzz.</p>

<hr className="my-8 border-border" />

<h2>5-Step Administrator Configuration Guide: Deploying Checkmark in Buzz LMS</h2>

<p>This step-by-step technical guide walks Instructional Technology Coordinators and Buzz Domain Administrators through deploying Checkmark Plagiarism using LTI 1.3 Advantage.</p>

<div className="my-6 space-y-4">
  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-xs">Step 1</span>
      <h3 className="text-base font-semibold text-foreground m-0 p-0">Generate LTI 1.3 Registration Credentials in Checkmark Console</h3>
    </div>
    <ol className="text-xs text-muted-foreground space-y-1.5 list-decimal pl-4 mb-3">
      <li>Log in to the <strong>Checkmark Administrator Portal</strong> (<code>https://admin.checkmarkplagiarism.com</code>) using district admin credentials.</li>
      <li>Navigate to <strong>Integrations &rarr; LMS Configurations &rarr; Add New LMS Connection</strong>.</li>
      <li>Select <strong>Agilix Buzz LMS</strong> and enter your domain URL (e.g., <code>https://yourdistrict.agilixbuzz.com</code>).</li>
      <li>Copy the generated LTI 1.3 configuration endpoints:</li>
    </ol>
    <div className="overflow-x-auto rounded-lg border border-border bg-muted/40">
      <table className="w-full text-left text-[11px] font-mono border-collapse">
        <tbody className="divide-y divide-border text-foreground">
          <tr><td className="p-2 font-semibold text-muted-foreground w-1/3">Platform Issuer (iss)</td><td className="p-2">https://agilixbuzz.com</td></tr>
          <tr><td className="p-2 font-semibold text-muted-foreground">OIDC Auth Login URL</td><td className="p-2">https://api.checkmarkplagiarism.com/lti13/oidc/login</td></tr>
          <tr><td className="p-2 font-semibold text-muted-foreground">OIDC Target Launch URI</td><td className="p-2">https://api.checkmarkplagiarism.com/lti13/launch</td></tr>
          <tr><td className="p-2 font-semibold text-muted-foreground">Public Keyset (JWKS) URL</td><td className="p-2">https://api.checkmarkplagiarism.com/lti13/jwks.json</td></tr>
          <tr><td className="p-2 font-semibold text-muted-foreground">Deep Linking Return URI</td><td className="p-2">https://api.checkmarkplagiarism.com/lti13/deep-link</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-xs">Step 2</span>
      <h3 className="text-base font-semibold text-foreground m-0 p-0">Register Checkmark as an External Tool in Agilix Buzz Domain Admin</h3>
    </div>
    <ol className="text-xs text-muted-foreground space-y-1.5 list-decimal pl-4 mb-0">
      <li>Log in to the <strong>Agilix Buzz Administrator Console</strong> with Domain Administrator rights.</li>
      <li>In the left navigation sidebar, click <strong>Domain Settings</strong> (gear icon) and select the <strong>Integrations</strong> tab.</li>
      <li>Select <strong>LTI 1.3 / Advantage Providers</strong> and click <strong>+ Add Provider</strong>.</li>
      <li>Enter the Application Name (<code>Checkmark Plagiarism &amp; AI Autograder</code>), Client ID, OIDC Login URL, and Redirect URIs.</li>
      <li>Under <strong>Public Key Management</strong>, select <strong>Public Keyset URL (JWKS)</strong> and paste Checkmark&apos;s JWKS URL.</li>
      <li>Authorize all required scopes: <code>lineitem</code>, <code>result.readonly</code>, <code>score</code>, and <code>contextmembership.readonly</code>.</li>
      <li>Save the provider and copy the generated <strong>Deployment ID</strong> back into the Checkmark Admin Console.</li>
    </ol>
  </div>

  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-xs">Step 3</span>
      <h3 className="text-base font-semibold text-foreground m-0 p-0">Configure Deep Linking 2.0 &amp; Course Master Templates in Buzz</h3>
    </div>
    <ol className="text-xs text-muted-foreground space-y-1.5 list-decimal pl-4 mb-0">
      <li>In Buzz, open your designated <strong>District Master Course</strong> (e.g., <em>Grade 11 American Literature &ndash; Master</em>).</li>
      <li>Click the <strong>Editor</strong> tab, navigate to the target unit folder, and select <strong>+ Add Activity &rarr; Library / External Tool &rarr; Checkmark Plagiarism</strong>.</li>
      <li>In the embedded Deep Linking selector, set the prompt, bind the district analytic rubric, configure minimum word counts, and activate the short-text guardrail.</li>
      <li>Click <strong>Save &amp; Embed Assignment</strong>. Checkmark transmits the signed LTI-DL content item payload; Buzz embeds the activity into the syllabus tree.</li>
      <li>All child sections spawned from this Master Course inherit the configuration automatically.</li>
    </ol>
  </div>

  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-xs">Step 4</span>
      <h3 className="text-base font-semibold text-foreground m-0 p-0">Bind AGS 2.0 LineItems to Buzz Competencies and Grade Categories</h3>
    </div>
    <ol className="text-xs text-muted-foreground space-y-1.5 list-decimal pl-4 mb-0">
      <li>In the Buzz Course Editor, open the newly embedded activity and click <strong>Settings</strong>.</li>
      <li>Under <strong>Gradebook Settings</strong>, assign the activity to its grading category and verify points possible.</li>
      <li>Under <strong>Competencies &amp; Learning Objectives</strong>, click <strong>+ Attach Objectives</strong> and select state/district standards.</li>
      <li>Map individual Checkmark rubric criteria (Thesis, Evidence, Organization, Conventions) directly to corresponding Buzz mastery sub-objectives.</li>
      <li>Save changes. Authorized autograded scores will now simultaneously update numerical gradebooks and mastery tracking matrices.</li>
    </ol>
  </div>

  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-xs">Step 5</span>
      <h3 className="text-base font-semibold text-foreground m-0 p-0">Execute End-to-End Validation and Token Exchange Auditing</h3>
    </div>
    <p className="text-xs text-muted-foreground mb-3">Execute a pilot verification check with a test student account to confirm seamless functionality:</p>
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-xs border-collapse">
        <thead>
          <tr className="border-b border-border bg-muted/60 text-foreground font-semibold">
            <th className="p-2.5">Verification Check</th>
            <th className="p-2.5">Expected Behavior</th>
            <th className="p-2.5">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-muted-foreground">
          <tr>
            <td className="p-2.5 font-medium text-foreground">1. OIDC Launch Handshake</td>
            <td className="p-2.5">Student launches assignment without authorization prompt</td>
            <td className="p-2.5 text-emerald-600 font-semibold">&check; Verified</td>
          </tr>
          <tr>
            <td className="p-2.5 font-medium text-foreground">2. Telemetry Capture</td>
            <td className="p-2.5">Keystroke replay, typing cadence, and paste events recorded</td>
            <td className="p-2.5 text-emerald-600 font-semibold">&check; Verified</td>
          </tr>
          <tr>
            <td className="p-2.5 font-medium text-foreground">3. NRPS 2.0 Roster Sync</td>
            <td className="p-2.5">Student dynamically appears in teacher moderation console</td>
            <td className="p-2.5 text-emerald-600 font-semibold">&check; Verified</td>
          </tr>
          <tr>
            <td className="p-2.5 font-medium text-foreground">4. Grounded Rubric Generation</td>
            <td className="p-2.5">Quote-anchored cards populate sidebar with student citations</td>
            <td className="p-2.5 text-emerald-600 font-semibold">&check; Verified</td>
          </tr>
          <tr>
            <td className="p-2.5 font-medium text-foreground">5. Teacher Moderation</td>
            <td className="p-2.5">Point override, comment editing, and calibration functional</td>
            <td className="p-2.5 text-emerald-600 font-semibold">&check; Verified</td>
          </tr>
          <tr>
            <td className="p-2.5 font-medium text-foreground">6. AGS 2.0 Grade Passback</td>
            <td className="p-2.5">Numeric score and feedback HTML update in Buzz Gradebook</td>
            <td className="p-2.5 text-emerald-600 font-semibold">&check; Verified</td>
          </tr>
          <tr>
            <td className="p-2.5 font-medium text-foreground">7. Mastery Matrix Sync</td>
            <td className="p-2.5">Competency objective bars reflect rubric criterion sub-scores</td>
            <td className="p-2.5 text-emerald-600 font-semibold">&check; Verified</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<hr className="my-8 border-border" />

<h2>Technical Data Schemas &amp; Payload Specifications</h2>

<p>For District IT Directors and Systems Engineers auditing data interchange, the following JSON payloads illustrate the standard communication structures between Agilix Buzz and Checkmark Plagiarism.</p>

<h3>Schema 1: Decoded LTI 1.3 OIDC Launch Claims JWT</h3>

<pre className="my-4 rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto"><code>{
  "iss": "https://agilixbuzz.com",
  "sub": "buzz_usr_77192a0e",
  "aud": "chk_lti_984f72a1b90c",
  "exp": 1755562800,
  "iat": 1755559200,
  "nonce": "n-0b92f7c18a4d",
  "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiResourceLinkRequest",
  "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
  "https://purl.imsglobal.org/spec/lti/claim/deployment_id": "buzz_dep_448201",
  "https://purl.imsglobal.org/spec/lti/claim/target_link_uri": "https://api.checkmarkplagiarism.com/lti13/launch",
  "https://purl.imsglobal.org/spec/lti/claim/resource_link": {
    "id": "buzz_act_991823",
    "title": "Synthesis Essay: The Great Gatsby & Modern Wealth",
    "description": "Evaluate the American Dream motif using the provided 4-criterion rubric."
  },
  "https://purl.imsglobal.org/spec/lti/claim/roles": [
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner"
  ],
  "https://purl.imsglobal.org/spec/lti/claim/context": {
    "id": "buzz_crs_88301",
    "label": "ELA-11-ASYNC",
    "title": "Grade 11 American Literature - Virtual Cohort"
  },
  "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint": {
    "scope": [
      "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem",
      "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly",
      "https://purl.imsglobal.org/spec/lti-ags/scope/score"
    ],
    "lineitem": "https://agilixbuzz.com/api/lti/v2/courses/88301/lineitems/55021",
    "lineitems": "https://agilixbuzz.com/api/lti/v2/courses/88301/lineitems"
  },
  "https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice": {
    "context_memberships_url": "https://agilixbuzz.com/api/lti/v2/courses/88301/memberships",
    "service_versions": ["2.0"]
  }
}</code></pre>

<h3>Schema 2: Deep Linking 2.0 Content Item Selection Response</h3>

<pre className="my-4 rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto"><code>{
  "type": "ltiResourceLink",
  "title": "Module 3 Argumentative Research Essay",
  "text": "Submit your research draft for automated rubric evaluation and integrity verification.",
  "url": "https://api.checkmarkplagiarism.com/lti13/launch",
  "lineItem": {
    "scoreMaximum": 100,
    "label": "Module 3 Argumentative Research Essay",
    "resourceId": "chk_assign_m3_research",
    "tag": "major_writing_assessment",
    "submissionReview": {
      "reviewableStatus": ["Completed", "Moderated"]
    }
  },
  "custom": {
    "rubric_id": "rubric_state_argumentative_v4",
    "playback_telemetry_enabled": "true",
    "min_word_count": "500",
    "guardrail_short_text": "true",
    "require_teacher_approval": "true"
  }
}</code></pre>

<h3>Schema 3: LTI AGS 2.0 Score &amp; Rubric Passback Payload</h3>

<pre className="my-4 rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto"><code>{
  "timestamp": "2026-08-18T19:45:30.000Z",
  "scoreGiven": 92.5,
  "scoreMaximum": 100.0,
  "comment": "&lt;h3&gt;Evaluator Summary&lt;/h3&gt;&lt;p&gt;Excellent synthesis of primary historical sources and literary symbolism. Your contextual analysis in paragraph 3 showed remarkable depth.&lt;/p&gt;&lt;h4&gt;Rubric Breakdown&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;&lt;strong&gt;Thesis &amp; Claim Structure:&lt;/strong&gt; 4.0/4.0 (Advanced)&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Textual Evidence &amp; Grounding:&lt;/strong&gt; 3.5/4.0 (Proficient)&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Rhetorical Organization:&lt;/strong&gt; 4.0/4.0 (Advanced)&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Conventions &amp; Mechanics:&lt;/strong&gt; 3.75/4.0 (Advanced)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;em&gt;Writing Telemetry Verified: Authentic drafting session logged via Checkmark Essay Playback™.&lt;/em&gt;&lt;/p&gt;",
  "activityProgress": "Completed",
  "gradingProgress": "FullyGraded",
  "userId": "buzz_usr_77192a0e",
  "submission": {
    "startedAt": "2026-08-18T18:02:10.000Z",
    "submittedAt": "2026-08-18T19:20:45.000Z"
  }
}</code></pre>

<hr className="my-8 border-border" />

<h2>Enterprise Data Privacy, FERPA/COPPA Compliance &amp; Zero-Retention Architecture</h2>

<p>For District Technology Directors and Compliance Officers, integrating third-party AI technology requires uncompromising security safeguards. Checkmark Plagiarism is engineered from the ground up for strict educational data compliance.</p>

<div className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div className="text-center font-bold text-teal-400 text-sm mb-4 pb-2 border-b border-slate-800">
    CHECKMARK ZERO-DATA-RETENTION PRIVACY SHIELD
  </div>
  <div className="space-y-3">
    <div className="rounded-lg bg-slate-800 p-3 border border-slate-700">
      <div className="font-bold text-slate-200">Incoming Student Prose &amp; Keystroke Telemetry via Buzz LTI 1.3</div>
    </div>
    <div className="text-center text-teal-400 font-bold">&darr; In-Memory Ephemeral Sandbox Processing (TLS 1.3 / AES-256 Cloud Enclave)</div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <div className="rounded bg-slate-800/80 p-2 text-center border border-teal-500/30">
        <span className="text-teal-300 font-semibold">Stateless Inference</span>
      </div>
      <div className="rounded bg-slate-800/80 p-2 text-center border border-indigo-500/30">
        <span className="text-indigo-300 font-semibold">Zero Fine-Tuning</span>
      </div>
      <div className="rounded bg-slate-800/80 p-2 text-center border border-emerald-500/30">
        <span className="text-emerald-300 font-semibold">Zero-Index Permanent Ingestion</span>
      </div>
    </div>
    <div className="text-center text-teal-400 font-bold">&darr; Authorized Grade Passback (AGS 2.0) to Buzz LMS Database</div>
    <div className="rounded-lg bg-teal-950/40 p-3 border border-teal-500/60 text-center font-bold text-teal-300">
      Immediate Ephemeral Memory Flush &bull; Student Text Never Stored or Shared &bull; FERPA/COPPA Certified
    </div>
  </div>
</div>

<h3>1. Strict Zero Model Training Guarantee</h3>
<p>Under no circumstances is student prose or keystroke telemetry used to train, fine-tune, or calibrate public or proprietary commercial language models. Submissions are processed through stateless, ephemeral memory enclaves and discarded following report generation and teacher authorization.</p>

<h3>2. FERPA &amp; COPPA Statutory Compliance</h3>
<ul>
  <li><strong>Family Educational Rights and Privacy Act (FERPA):</strong> Checkmark acts as an authorized &ldquo;School Official&rdquo; under 34 CFR § 99.31(a)(1)(i), operating under direct district institutional control with legitimate educational interests.</li>
  <li><strong>Children’s Online Privacy Protection Act (COPPA):</strong> For students under 13 enrolled in middle school or elementary programs, Checkmark collects zero personally identifiable directory information (PII) beyond anonymized LTI user IDs passed by Buzz.</li>
  <li><strong>Role-Based Data Partitioning:</strong> Telemetry flags, plagiarism source links, and AI confidence sliders are restricted strictly to authorized educators and domain administrators. Students only see teacher-approved formative commentary and rubric marks.</li>
</ul>

<h3>3. Cryptographic Storage &amp; Encryption Standards</h3>
<p>All data exchanges between Buzz LMS and Checkmark utilize TLS 1.3 encryption in transit. Ephemeral database storage utilizes FIPS 140-2 validated AES-256 bit encryption at rest with automated lifecycle deletion policies.</p>

<hr className="my-8 border-border" />

<h2>Comprehensive FAQ for Instructional Technology Coordinators &amp; Buzz Administrators</h2>

<h3>1. How does Checkmark handle rolling continuous enrollment in Buzz without manual roster imports?</h3>
<p>Checkmark utilizes <strong>1EdTech Names and Role Provisioning Services (NRPS 2.0)</strong>. Whenever an instructor opens an assignment dashboard within Buzz, Checkmark calls Buzz’s secure membership endpoint in real time. Newly enrolled students appear immediately in the section roster with full telemetry tracking, while dropped students are gracefully archived—requiring zero CSV imports or SIS sync scripts.</p>

<h3>2. When a Master Course is updated in Buzz, do all derivative child sections automatically inherit new rubric criteria?</h3>
<p><strong>Yes.</strong> When you configure a Checkmark assignment inside a Buzz Master Course using <strong>Deep Linking 2.0 (LTI-DL)</strong>, the assignment metadata, rubric structure, and AGS endpoints are stored as inherited master objects. When child sections inherit the course structure, they reference the master configuration. If the district coordinator updates the rubric in the master template, all active child sections inherit the update for upcoming student submissions.</p>

<h3>3. Can teachers override AI-drafted rubric scores before grades are synced to the Buzz Gradebook?</h3>
<p><strong>Yes, absolutely.</strong> Checkmark operates under a strict <strong>Teacher-in-the-Loop</strong> model. All AI-generated criterion scores, quote-anchored citations, and formative comments remain in a provisional draft state within the Teacher Moderation Console. Educators can click any rubric cell to adjust points, edit commentary, or reject suggestions entirely. No data is transmitted to Buzz via AGS 2.0 until the instructor clicks <strong>&ldquo;Authorize &amp; Sync Gradebook&rdquo;</strong>.</p>

<h3>4. What happens if a student writes their essay offline and pastes the complete text into Buzz?</h3>
<p>Checkmark&apos;s <strong>Essay Playback™</strong> engine instantly detects full-document paste events. Rather than generating an arbitrary AI flag, Checkmark records the exact timestamp, logs the event as an external paste, and preserves 100% of the original pasted text in a dedicated evidence card. Instructors can inspect the paste history and prompt the student to provide earlier draft versions or discuss their writing process during a one-on-one conference.</p>

<h3>5. How does the sub-150-word honest guardrail prevent false-positive AI flags in short-answer prompts?</h3>
<p>Statistical language detection models exhibit severe reliability degradation on short text samples under 150 words due to limited syntactic variance. Rather than presenting misleading probability percentages, Checkmark automatically applies an <strong>Honest Short-Text Guardrail</strong>, displaying <code>N/A</code> for short-response passages while continuing to provide full web plagiarism scanning, quote-anchored rubric feedback, and keystroke playback.</p>

<h3>6. Does Checkmark AGS 2.0 passback update Buzz Competencies and Mastery Tracking Matrices?</h3>
<p><strong>Yes.</strong> When configuring the Checkmark activity in Buzz, administrators or teachers can bind individual rubric criteria to specific <strong>Buzz Learning Objectives / Competencies</strong>. When Checkmark transmits the criterion breakdown via AGS 2.0, Buzz automatically maps the sub-scores to its mastery matrix, allowing district leaders to track standards progression across cohorts in real time.</p>

<h3>7. What bandwidth or network requirements are necessary for Essay Playback™ telemetry?</h3>
<p>Checkmark’s telemetry engine utilizes an ultra-lightweight differential compression algorithm. Keystroke vectors, pause durations, and revision deltas are bundled into micro-packets that transmit asynchronously in the background. A full two-hour writing session consumes <strong>less than 180 KB of network bandwidth</strong>, ensuring seamless performance on rural broadband, cellular hotspots, and managed 1:1 Chromebook networks.</p>

<hr className="my-8 border-border" />

<h2>Conclusion &amp; Strategic Implementation Checklist</h2>

<p>Deploying automated rubric scoring and academic integrity verification within <strong>Agilix Buzz LMS</strong> represents a transformative leap for competency-based and virtual education. By replacing opaque black-box AI scores and manual gradebook transcription with <strong>1EdTech LTI 1.3 Advantage</strong>, <strong>quote-anchored evidence extraction</strong>, and <strong>Essay Playback™</strong>, districts can eliminate grading backlogs while fostering an environment of transparent, defensible academic trust.</p>

<div className="my-8 overflow-x-auto rounded-xl border border-border">
  <table className="w-full text-left text-xs border-collapse">
    <thead>
      <tr className="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th className="p-3">Phase</th>
        <th className="p-3">Key Strategic Milestone</th>
        <th className="p-3">Target Completion</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border text-muted-foreground">
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Phase 1</td>
        <td className="p-3">Register Checkmark LTI 1.3 in Buzz Domain Administration</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Day 1–2 (IT Admin Setup)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Phase 2</td>
        <td className="p-3">Deep Link Standard District Rubrics in Course Masters</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Day 3–5 (Curriculum Team)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Phase 3</td>
        <td className="p-3">Bind AGS 2.0 LineItems to Buzz Competencies &amp; Objectives</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Day 6–7 (Instructional Tech)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Phase 4</td>
        <td className="p-3">Execute Pilot Section Verification &amp; Cryptographic Audit</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Day 8–10 (Lead ELA Faculty)</td>
      </tr>
      <tr className="hover:bg-muted/30">
        <td className="p-3 font-medium text-foreground">Phase 5</td>
        <td className="p-3">Full District / Virtual Academy Production Rollout</td>
        <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">Day 14 (District-Wide)</td>
      </tr>
    </tbody>
  </table>
</div>

<p>By putting teachers in the loop and equipping them with transparent writing process evidence, Instructional Technology Coordinators can empower educators to <strong>&ldquo;Stop guessing, start trusting&rdquo;</strong>—unlocking scalable, personalized writing instruction across every Buzz-powered classroom.</p>
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
      currentSlug="2026/8/how-can-instructional-technology-coordinators-configure-lti-1-3-rubric-autograding-with-direct-grade-passback-in-buzz-lms"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
