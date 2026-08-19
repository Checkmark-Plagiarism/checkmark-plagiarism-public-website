import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Teachers Pinpoint Which Group Member Contributed AI-Generated Text in Collaborative Assignments? | Checkmark Plagiarism",
  description: "A comprehensive guide for secondary and higher education educators on isolating individual AI contributions in collaborative group assignments using multi-author keystroke telemetry, author-filtered Essay Playback, and paste buffer analysis without resorting to unfair collective punishment.",
  keywords: [
    "collaborative writing AI detection",
    "group assignment plagiarism",
    "multi-author keystroke telemetry",
    "Essay Playback group projects",
    "isolated author attribution",
    "collective punishment academic integrity",
    "Goss v. Lopez due process",
    "external paste buffer inspector",
    "Canvas SpeedGrader group grading",
    "Buzz LMS rubric passback",
    "Checkmark Plagiarism",
    "restorative group conferencing",
  ],
  openGraph: {
    images: ["/images/learning/how-can-teachers-pinpoint-which-group-member-contributed-ai-generated-text-in-collaborative-assignments/featured.png"],
  },
};

export const meta = {
  title: "How Can Teachers Pinpoint Which Group Member Contributed AI-Generated Text in Collaborative Assignments? | Checkmark Plagiarism",
  description: "A comprehensive guide for secondary and higher education educators on isolating individual AI contributions in collaborative group assignments using multi-author keystroke telemetry, author-filtered Essay Playback, and paste buffer analysis without resorting to unfair collective punishment.",
  "opengraph-image": "/images/learning/how-can-teachers-pinpoint-which-group-member-contributed-ai-generated-text-in-collaborative-assignments/featured.png",
  date: "08-19-2026",
  readTime: "~18 min read",
  category: "Detection",
  categories: ["Detection", "How It Works", "Teacher Guide", "Academic Integrity", "Pedagogy"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white">
      Executive Summary
    </span>
  </div>
  <p class="text-foreground font-medium leading-relaxed">
    When a four-person collaborative research paper or group essay returns an aggregate <strong>&ldquo;62% AI Detected&rdquo;</strong> flag from a legacy detection tool, educators face an excruciating pedagogical and ethical dilemma: <strong>penalize the entire group and inflict unfair collective punishment on honest students, or dismiss the flag entirely and allow unearned AI authorship to compromise academic standards.</strong> Standard document version histories (such as Google Docs revision history) cannot solve this crisis because they only record <em>which account</em> inserted text, failing to distinguish between authentic offline drafting, legitimate research notes, and unapproved large language model (LLM) paste events.
  </p>
  <p class="text-foreground font-medium leading-relaxed mt-3">
    <strong>Checkmark Plagiarism</strong> resolves the group writing dilemma through its <strong>Multi-Author Writing Telemetry Suite</strong>. By combining patent-pending <a href="/services/writing-process" class="text-teal-600 dark:text-teal-400 font-semibold underline">Multi-Contributor Essay Playback™</a> (with author-isolated 1x–8x scrubbable video replay), the <strong>External Paste Buffer Inspector</strong> (preserving 100% of clipboard insertions tied to authenticated user IDs), and <a href="/services/ai-detection" class="text-teal-600 dark:text-teal-400 font-semibold underline">Author-Mapped Passage-Level AI Confidence Sliders</a>, Checkmark empowers teachers to pinpoint exact individual contributions with indisputable forensic evidence. This guide breaks down the legal and pedagogical mandates against collective punishment, provides forensic frameworks for multi-contributor analysis, explores three detailed classroom case studies, and outlines an end-to-end 4-Phase Collaborative Attribution Protocol.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> provides secondary teachers, university faculty, and department heads with the complete toolkit for collaborative writing integrity&mdash;uniting <a href="/services/writing-process">writing process replay</a>, <a href="/services/ai-detection">passage-level AI detection</a>, <a href="/services/plagiarism-detection">multidimensional plagiarism checking</a>, and <a href="/services/autograder">split-rubric autograding</a> with seamless integrations for <a href="/services/integrations/canvas-lms">Canvas LMS</a>, <a href="/services/integrations/buzz-lms">Agilix Buzz</a>, and <a href="/services/integrations/google-classroom">Google Classroom</a>.</p>

<p><img src="/images/learning/how-can-teachers-pinpoint-which-group-member-contributed-ai-generated-text-in-collaborative-assignments/featured.png" alt="Checkmark Plagiarism Multi-Author Collaborative Group Assignment Telemetry Dashboard" class="w-full rounded-2xl shadow-lg border border-border my-6" /></p>

<hr class="my-8 border-border" />

<h2>1. The Collaborative Integrity Dilemma: The Trap of Collective Punishment vs. Total Impunity</h2>

<p>Collaborative group assignments are among the most pedagogically valuable formats in modern secondary and postsecondary education. When structured effectively, group projects cultivate essential 21st-century competencies: peer discourse, synthesis of divergent perspectives, project management, and collaborative problem-solving. In humanities seminars, social studies cohorts, and advanced STEM capstones, group writing challenges students to harmonize individual voices into a cohesive argumentative document.</p>

<p>However, the rapid democratization of generative artificial intelligence&mdash;powered by frontier models like ChatGPT, Claude, and Gemini&mdash;has plunged collaborative writing into an acute evaluation crisis.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    The Collaborative Writing AI Crisis: The Dual Failure of Black-Box Tools
  </div>

  <div class="mb-5 p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
    <div class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Incoming Submission</div>
    <div class="text-sm font-bold text-slate-100">[ 4-Student Collaborative Policy Brief / Research Essay Submitted via LMS ]</div>
    <div class="text-xs text-rose-400 font-mono mt-1">&darr; Evaluated by Legacy Black-Box AI Detector &darr;</div>
    <div class="mt-2 inline-block px-4 py-1.5 rounded-lg bg-rose-950/80 border border-rose-500/60 text-rose-300 font-mono font-bold text-sm">
      OUTPUT: &ldquo;64% AGGREGATE AI DETECTED&rdquo; (Monolithic Document Score)
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-5">
    <div class="rounded-xl bg-rose-950/40 p-4 border border-rose-500/40 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="font-semibold text-rose-300 text-sm">FAILURE MODE A: COLLECTIVE PUNISHMENT</span>
          <span class="text-[10px] bg-rose-900 text-rose-200 px-2 py-0.5 rounded font-mono">Unjust</span>
        </div>
        <ul class="space-y-1.5 text-slate-300 pl-4 list-disc">
          <li>Teacher issues group-wide zero or grade reduction.</li>
          <li>Destroys academic trust and psychological safety.</li>
          <li>Inflicts trauma and distress on honest, hardworking students.</li>
          <li>Violates constitutional Due Process (<em>Goss v. Lopez</em>).</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-rose-900/60 text-rose-400 font-mono text-[11px]">Outcome: Innocent students alienated &amp; demoralized.</div>
    </div>

    <div class="rounded-xl bg-amber-950/40 p-4 border border-amber-500/40 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="font-semibold text-amber-300 text-sm">FAILURE MODE B: TOTAL IMPUNITY</span>
          <span class="text-[10px] bg-amber-900 text-amber-200 px-2 py-0.5 rounded font-mono">Unenforceable</span>
        </div>
        <ul class="space-y-1.5 text-slate-300 pl-4 list-disc">
          <li>Teacher dismisses flag because individual culpability is unproven.</li>
          <li>Rewards dishonest shortcuts and free-riding behavior.</li>
          <li>Demoralizes diligent peers who suspect unearned credit.</li>
          <li>Erodes department-wide standards and academic rigor.</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-amber-900/60 text-amber-400 font-mono text-[11px]">Outcome: Group projects become AI camouflage.</div>
    </div>
  </div>

  <div class="p-4 rounded-xl bg-teal-950/50 border border-teal-500/60 text-xs">
    <div class="text-teal-300 font-bold text-sm mb-2 flex items-center gap-2">
      <span>✅ THE CHECKMARK SOLUTION: Multi-Author Writing Telemetry &amp; Isolated Contributor Forensics</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
      <div class="flex items-center gap-1.5"><span class="text-teal-400">&bull;</span> Filter writing replay by individual student user ID</div>
      <div class="flex items-center gap-1.5"><span class="text-teal-400">&bull;</span> Inspect external clipboard paste buffers per contributor</div>
      <div class="flex items-center gap-1.5"><span class="text-teal-400">&bull;</span> Map passage-level AI confidence sliders to author spans</div>
      <div class="flex items-center gap-1.5"><span class="text-teal-400">&bull;</span> Apply split-rubric autograding with Canvas &amp; Buzz passback</div>
    </div>
  </div>
</div>

<h3>The 60% Aggregate AI Flag Nightmare</h3>

<p>Consider a standard classroom scenario: An AP Environmental Science teacher assigns a 3,000-word group policy brief analyzing municipal watershed management. Four students&mdash;Elena, Marcus, Priya, and Jordan&mdash;collaborate on a shared Google Doc over three weeks. Upon final submission to the learning management system (LMS), the school&rsquo;s legacy AI detection filter flags the entire document with a monolithic <strong>&ldquo;64% AI Generated&rdquo;</strong> warning.</p>

<p>The software offers no further breakdown. It does not indicate whether all four students collaborated with an AI chatbot, whether two students used an LLM to generate their respective sections, or whether a single student panicked at 11:30 PM on the night before the deadline and pasted five generated paragraphs into the policy recommendation section.</p>

<p>Faced with this opaque percentage, educators typically find themselves trapped between two equally destructive choices:</p>

<h4>Failure Mode A: Collective Punishment</h4>
<p>The instructor applies a blanket sanction&mdash;such as rejecting the submission, issuing an automatic zero across all four team members, or forcing the entire group into a disciplinary hearing.</p>
<ul>
  <li><strong>The Pedagogical Cost:</strong> Honest students who spent dozens of hours conducting primary research, drafting authentic arguments, and revising prose are subjected to severe distress, anger, and disillusionment. Academic trust is obliterated.</li>
  <li><strong>The Legal Cost:</strong> In public school districts and state universities, collective disciplinary action violates students&rsquo; constitutional rights to procedural due process under the Fourteenth Amendment. Under the landmark U.S. Supreme Court ruling in <em>Goss v. Lopez</em> (419 U.S. 565), educational institutions cannot deprive an individual student of academic standing or property interests based on group guilt without establishing individual culpability through defensible evidence.</li>
</ul>

<h4>Failure Mode B: Total Impunity</h4>
<p>Recognizing that they cannot prove <em>who</em> used AI, and unwilling to punish innocent students, the instructor ignores the flag, writes a generic comment about &ldquo;maintaining academic voice,&rdquo; and assigns full credit.</p>
<ul>
  <li><strong>The Pedagogical Cost:</strong> The student who committed authorship fraud learns that collaborative documents provide perfect camouflage for unapproved AI generation. Meanwhile, the honest group members&mdash;who frequently suspect or know that their peer took an unauthorized shortcut&mdash;realize that integrity is unrewarded and that free-riding goes unchecked.</li>
  <li><strong>The Systemic Cost:</strong> Academic rigor degrades, and peer dynamics turn toxic as honest students refuse to participate in future group assignments.</li>
</ul>

<h3>Summary Comparison: Adjudication Approaches in Collaborative Assignments</h3>

<div class="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="bg-muted/60 px-5 py-3 border-b border-border font-semibold text-sm text-foreground">
    Comparative Analysis: Four Approaches to Collaborative Academic Integrity
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/30">
          <th class="p-3 font-semibold text-foreground">Evaluation Approach</th>
          <th class="p-3 font-semibold text-foreground">Evidentiary Basis</th>
          <th class="p-3 font-semibold text-foreground">Impact on Honest Students</th>
          <th class="p-3 font-semibold text-foreground">Impact on Flagged Student</th>
          <th class="p-3 font-semibold text-foreground">Legal &amp; Due Process Standing</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border">
        <tr>
          <td class="p-3 font-medium text-foreground">Blanket Collective Penalty</td>
          <td class="p-3 text-muted-foreground">Monolithic document AI %</td>
          <td class="p-3 text-rose-600 dark:text-rose-400 font-medium">Severe distress, false accusation trauma, destroyed teacher trust</td>
          <td class="p-3 text-muted-foreground">Evades individual accountability; hides behind group friction</td>
          <td class="p-3 text-rose-600 dark:text-rose-400 font-medium">Vulnerable to formal appeals, FERPA disputes, &amp; <em>Goss v. Lopez</em> challenges</td>
        </tr>
        <tr>
          <td class="p-3 font-medium text-foreground">Complete Dismissal (Impunity)</td>
          <td class="p-3 text-muted-foreground">Ignored detection warnings</td>
          <td class="p-3 text-amber-600 dark:text-amber-400 font-medium">Deep resentment, perceived unfairness, devaluation of honest work</td>
          <td class="p-3 text-muted-foreground">Reinforced reliance on AI shortcuts; zero skill development</td>
          <td class="p-3 text-muted-foreground">Compliant on paper, but fails institutional academic integrity standards</td>
        </tr>
        <tr>
          <td class="p-3 font-medium text-foreground">Standard Google Docs History Review</td>
          <td class="p-3 text-muted-foreground">High-level edit timestamps &amp; character counts</td>
          <td class="p-3 text-amber-600 dark:text-amber-400 font-medium">High ambiguity; unable to prove if pasted text was authentic notes or LLM prose</td>
          <td class="p-3 text-muted-foreground">Exploits &ldquo;shared account&rdquo; or &ldquo;offline drafting&rdquo; excuses</td>
          <td class="p-3 text-amber-600 dark:text-amber-400 font-medium">Insufficient forensic proof to withstand parental or administrative scrutiny</td>
        </tr>
        <tr class="bg-teal-50/20 dark:bg-teal-950/10">
          <td class="p-3 font-bold text-teal-700 dark:text-teal-300">Checkmark Multi-Author Telemetry Suite</td>
          <td class="p-3 text-teal-700 dark:text-teal-300 font-medium">Per-author keystroke playback, paste buffer preservation, passage-level AI mapping</td>
          <td class="p-3 text-teal-600 dark:text-teal-400 font-semibold">Complete exoneration and validation of authentic drafting effort</td>
          <td class="p-3 text-teal-700 dark:text-teal-300 font-medium">Pinpointed, non-punitive intervention with clear forensic &ldquo;receipts&rdquo;</td>
          <td class="p-3 text-teal-600 dark:text-teal-400 font-semibold">100% defensible, FERPA-compliant, legally sound procedural fairness</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>2. The Deconstruction of Multi-Contributor Collaborative Forensics</h2>

<p>To accurately isolate individual contributions in shared digital documents, educators and technology administrators must understand why traditional tools fail and how multi-contributor drafting telemetry operates at a forensic level.</p>

<h3>Why Google Docs Version History Fails as an Integrity Audit</h3>

<p>When faced with a disputed collaborative essay, many instructors attempt to inspect the native Google Docs <strong>Version History</strong> or Microsoft Word <strong>Track Changes</strong>. While these tools are excellent for high-level editorial tracking, they possess critical forensic blind spots when investigating AI generation:</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-amber-400 text-sm tracking-wider uppercase mb-4 pb-3 border-b border-slate-800">
    The Forensic Deficit of Standard Google Docs Version History
  </div>

  <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 mb-4 text-xs font-mono">
    <div class="text-slate-400 mb-1">SCENARIO: Student Marcus inserts 650 words into Section 3 at 11:42 PM.</div>
    <div class="p-2.5 rounded bg-slate-950 border border-purple-500/40 text-purple-300 mt-2">
      [11:42 PM - Marcus K.] +650 characters inserted (Single revision snapshot)<br />
      Text appears highlighted in Marcus&rsquo;s assigned color (Purple).
    </div>
  </div>

  <div class="text-xs space-y-2 text-slate-300">
    <div class="font-semibold text-rose-300 uppercase tracking-wider text-[11px]">The Critical Forensic Questions Google Docs Cannot Answer:</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <div class="p-2.5 rounded bg-rose-950/30 border border-rose-900/50 text-rose-200">
        <strong>1. Composing vs. Pasting:</strong> Did Marcus type those 650 words manually, or was it a single 0-second <code>Ctrl+V</code> paste?
      </div>
      <div class="p-2.5 rounded bg-rose-950/30 border border-rose-900/50 text-rose-200">
        <strong>2. Clipboard Provenance:</strong> If it was pasted, WHAT was in his external clipboard? (Raw notes vs. LLM output?)
      </div>
      <div class="p-2.5 rounded bg-rose-950/30 border border-rose-900/50 text-rose-200">
        <strong>3. Transcription Dynamics:</strong> If Marcus retyped it character-by-character, was he composing naturally or transcribing from a phone?
      </div>
      <div class="p-2.5 rounded bg-rose-950/30 border border-rose-900/50 text-rose-200">
        <strong>4. True Authorship Origin:</strong> Did Marcus paste text drafted by Elena from an external scratch doc, or ChatGPT text?
      </div>
    </div>
    <div class="mt-3 p-2.5 rounded bg-amber-950/40 border border-amber-500/40 text-amber-300 text-center font-semibold">
      RESULT: Version history records ATTRIBUTION OF ACTION, not PROOF OF COMPOSITION PROCESS.
    </div>
  </div>
</div>

<ol>
  <li><strong>The &ldquo;Paste Attribution&rdquo; Flaw:</strong> When a user pastes a block of text into a shared document, Google Docs attributes that block to the account currently logged in and pressing <code>Ctrl+V</code>. However, Google Docs does not capture <em>where</em> the text originated or whether the user drafted it elsewhere. A student can claim, <em>&ldquo;I wrote that section in Apple Notes on my phone while on the bus and pasted it in,&rdquo;</em> and standard version history cannot disprove the claim.</li>
  <li><strong>The &ldquo;Shared Device / Single Account&rdquo; Exploit:</strong> In middle school and high school classrooms, students frequently huddle around a single Chromebook in the library or computer lab. If Student A steps away and Student B uses Student A&rsquo;s active session to paste AI-generated text, standard version history permanently attaches Student A&rsquo;s name to the infraction.</li>
  <li><strong>The &ldquo;Group Document Blame Game&rdquo;:</strong> When confronted with an aggregate AI flag, group members often fracture. One student will claim, <em>&ldquo;I wrote the outline and Jordan said he would &lsquo;polish&rsquo; the grammar&mdash;he must have run it through ChatGPT!&rdquo;</em> Another will claim, <em>&ldquo;Marcus put that paragraph in under my name when we were working together.&rdquo;</em> Without granular keystroke telemetry, the teacher cannot establish the objective sequence of events.</li>
</ol>

<hr class="my-8 border-border" />

<h3>Multi-Author Drafting Telemetry: The 4 Core Forensic Dimensions</h3>

<p>Authentic human writing leaves distinct behavioral and temporal fingerprints. When multiple students contribute to a single document, their individual drafting patterns can be separated into four forensic dimensions:</p>

<div class="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
  <div class="rounded-xl border border-teal-500/40 bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-teal-600 dark:text-teal-400 font-bold text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 font-bold text-xs">1</span>
      <span>Keystroke Dynamics &amp; IKI</span>
    </div>
    <ul class="space-y-1.5 text-muted-foreground pl-4 list-disc">
      <li><strong>Inter-Key Intervals (IKI):</strong> Millisecond duration between consecutive keystrokes.</li>
      <li><strong>Authentic Cadence:</strong> Fluctuates naturally between 120ms and 350ms with jitter across syllables and punctuation.</li>
      <li><strong>Mechanical Cadence:</strong> Metronomic, flat IKI curve characteristic of second-screen transcription.</li>
    </ul>
  </div>

  <div class="rounded-xl border border-cyan-500/40 bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 font-bold text-xs">2</span>
      <span>Pause Topography</span>
    </div>
    <ul class="space-y-1.5 text-muted-foreground pl-4 list-disc">
      <li><strong>Micro-pauses (100ms&ndash;500ms):</strong> Motor-execution transitions between keys.</li>
      <li><strong>Meso-pauses (500ms&ndash;2,000ms):</strong> Cognitive lexical retrieval &amp; clause formulation.</li>
      <li><strong>Macro-pauses (2,000ms&ndash;30,000ms+):</strong> Structural planning and reading preceding sentences.</li>
    </ul>
  </div>

  <div class="rounded-xl border border-amber-500/40 bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 font-bold text-xs">3</span>
      <span>Net vs. Gross Production</span>
    </div>
    <ul class="space-y-1.5 text-muted-foreground pl-4 list-disc">
      <li><strong>Authentic Ratio (1.3x&ndash;2.2x):</strong> Drafting 500 words (3,000 chars) requires 4,500&ndash;6,500 gross keystrokes due to backspaces and edits.</li>
      <li><strong>AI Ingestion Ratio (1.00x&ndash;1.05x):</strong> Near-zero deletions or corrections relative to final character volume.</li>
    </ul>
  </div>

  <div class="rounded-xl border border-purple-500/40 bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-bold text-xs">4</span>
      <span>Macro-Revision Bursts</span>
    </div>
    <ul class="space-y-1.5 text-muted-foreground pl-4 list-disc">
      <li><strong>Collaborative Interaction:</strong> Honest peers highlight sentences, leave comments, and reorder paragraphs across sections.</li>
      <li><strong>Static Ingestion:</strong> Unauthorized AI text appears as monolithic static blocks with zero integration or lexical revision.</li>
    </ul>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>3. Checkmark Plagiarism’s Multi-Author Writing Telemetry &amp; Forensic Suite</h2>

<p>To eliminate guesswork and protect innocent students, Checkmark Plagiarism provides an integrated forensic architecture designed specifically for multi-contributor collaborative assignments across <strong>Google Docs, Canvas LMS SpeedGrader, Buzz LMS, and Microsoft 365</strong>.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Checkmark Multi-Author Forensic Suite Architecture
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="rounded-xl bg-slate-800 p-4 border border-teal-500/40">
      <div class="text-teal-300 font-bold text-sm mb-1 flex items-center gap-1.5">
        <span class="h-2 w-2 rounded-full bg-teal-400"></span>
        1. Multi-Contributor Essay Playback™
      </div>
      <p class="text-slate-300 m-0 leading-relaxed">
        Author-isolated 1x to 8x scrubbable video timeline. Filter by Student A, B, C, or D to view active drafting duration, typing velocity (WPM), and pause heatmaps per contributor.
      </p>
    </div>

    <div class="rounded-xl bg-slate-800 p-4 border border-cyan-500/40">
      <div class="text-cyan-300 font-bold text-sm mb-1 flex items-center gap-1.5">
        <span class="h-2 w-2 rounded-full bg-cyan-400"></span>
        2. External Paste Buffer Inspector
      </div>
      <p class="text-slate-300 m-0 leading-relaxed">
        Captures 100% of clipboard text tied to verified SSO logins. Preserves pre-edit states, timestamps, insertion volumes, and provides a 1-click &ldquo;Jump to Playback&rdquo; button.
      </p>
    </div>

    <div class="rounded-xl bg-slate-800 p-4 border border-amber-500/40">
      <div class="text-amber-300 font-bold text-sm mb-1 flex items-center gap-1.5">
        <span class="h-2 w-2 rounded-full bg-amber-400"></span>
        3. Author-Mapped Passage AI Sliders
      </div>
      <p class="text-slate-300 m-0 leading-relaxed">
        Sentence-by-sentence perplexity and burstiness mapping tied to verified author IDs. Includes honest short-text guardrails (&lt;150w) and educator-only privacy flags.
      </p>
    </div>

    <div class="rounded-xl bg-slate-800 p-4 border border-purple-500/40">
      <div class="text-purple-300 font-bold text-sm mb-1 flex items-center gap-1.5">
        <span class="h-2 w-2 rounded-full bg-purple-400"></span>
        4. Split-Rubric Autograder &amp; Passback
      </div>
      <p class="text-slate-300 m-0 leading-relaxed">
        Differentiates shared group criteria (thesis, flow) from individual contributor criteria (evidence, analysis). Synchronizes scores directly into Canvas SpeedGrader &amp; Buzz LMS.
      </p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h3>1. Multi-Contributor Essay Playback™ (1x–8x Scrubbable Multi-Track Replay)</h3>

<p>Checkmark&rsquo;s patent-pending <a href="/services/writing-process" class="font-semibold text-teal-600 dark:text-teal-400 underline">Essay Playback™</a> captures native writing telemetry and reconstructs the entire collaborative drafting session keystroke-by-keystroke.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
    <div class="text-xs font-mono text-teal-400 uppercase tracking-wider font-bold">
      Essay Playback™: Author-Isolated Multi-Contributor Replay
    </div>
    <div class="text-xs bg-slate-800 px-2.5 py-1 rounded text-slate-300 font-mono">
      Speed: <strong>4x</strong> &bull; Total Time: <strong>03:45:00</strong>
    </div>
  </div>

  <div class="text-xs text-slate-300 mb-3">
    <strong>Document:</strong> <em>Comparative Tragedy: Macbeth vs. Oedipus Rex</em> (2,450 words)
  </div>

  <!-- Author Tabs -->
  <div class="flex flex-wrap gap-2 mb-4">
    <button class="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium border border-slate-700">All Authors (4)</button>
    <button class="px-3 py-1 rounded-lg bg-purple-950/60 text-purple-300 text-xs font-medium border border-purple-500/40">● Elena R. (950w)</button>
    <button class="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold border border-amber-400 shadow-md">● Marcus K. (Selected)</button>
    <button class="px-3 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 text-xs font-medium border border-emerald-500/40">● Priya S. (780w)</button>
    <button class="px-3 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 text-xs font-medium border border-cyan-500/40">● Jordan T. (650w)</button>
  </div>

  <!-- Isolated Author Telemetry Card -->
  <div class="p-4 rounded-xl bg-slate-800/90 border border-amber-500/50 mb-4 text-xs font-mono">
    <div class="flex items-center justify-between text-amber-300 font-bold mb-2 pb-1 border-b border-slate-700">
      <span>ISOLATED TRACK: Marcus K. (User ID #94102)</span>
      <span class="text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800">EXTREME ANOMALY DETECTED</span>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300">
      <div>Active Writing Time:<br /><span class="text-slate-100 font-bold">12m 14s</span></div>
      <div>Net Words Added:<br /><span class="text-slate-100 font-bold">720 words (29.4%)</span></div>
      <div>Keystrokes Logged:<br /><span class="text-rose-400 font-bold">142 total (0.04x)</span></div>
      <div>Paste Injections:<br /><span class="text-rose-400 font-bold">2 Major Pastes (680w)</span></div>
    </div>
  </div>

  <!-- Video Scrubber UI -->
  <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-2">
    <div class="text-slate-400 text-[11px] flex justify-between">
      <span>00:00:00 (Start)</span>
      <span class="text-amber-400 font-bold">▶ 01:15:02 (Marcus Paste Event #1)</span>
      <span>03:45:00 (Submission)</span>
    </div>
    <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden relative">
      <div class="bg-purple-500 h-full w-[35%] absolute left-0"></div>
      <div class="bg-amber-500 h-full w-[10%] absolute left-[35%]"></div>
      <div class="bg-emerald-500 h-full w-[30%] absolute left-[45%]"></div>
      <div class="bg-cyan-500 h-full w-[25%] absolute left-[75%]"></div>
    </div>
    <div class="pt-2 text-slate-300 text-[11px] leading-relaxed">
      <span class="text-amber-400 font-bold">01:15:02:</span> Marcus cursor navigates to Line 84 (&ldquo;Thematic Synthesis&rdquo;) &rarr; Injected 412 words in 0.00s.<br />
      <span class="text-amber-400 font-bold">01:18:10:</span> Marcus cursor navigates to Line 112 &rarr; Injected 268 words in 0.00s.<br />
      <span class="text-slate-400">01:26:36: Marcus logs out. Total active drafting time: 12 minutes with 0 macro-revisions.</span>
    </div>
  </div>
</div>

<ul>
  <li><strong>Author Isolation Filtering:</strong> With a single click, educators can toggle between the combined team view and individual contributor tracks. Isolating an author filters out all peer contributions, allowing the teacher to watch exactly how and when that specific student built their assigned sections.</li>
  <li><strong>Scrubbable Multi-Speed Playback:</strong> Teachers can scrub forward and backward through hours of collaborative drafting at 1x, 2x, 4x, or 8x speed. Composing pauses, outline structuring, sentence deletions, and peer comment responses unfold visually in real time.</li>
  <li><strong>Concurrent Editing &amp; Collision Telemetry:</strong> When multiple group members edit simultaneously, Checkmark displays color-coded cursor tracks, showing whether students were actively co-authoring or working in isolated silos.</li>
</ul>

<hr class="my-8 border-border" />

<h3>2. External Paste Buffer Inspector with Contributor-ID Tagging</h3>

<p>The single most decisive piece of evidence in academic integrity adjudication is the <strong>External Paste Buffer Inspector</strong>. When a student pastes text into a collaborative document, Checkmark does not merely record a timestamp; it <strong>captures and permanently stores 100% of the raw clipboard text</strong> attached to that student&rsquo;s authenticated LMS login.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="h-3 w-3 rounded-full bg-rose-500 animate-pulse"></span>
      <span class="text-xs font-mono text-rose-400 uppercase tracking-wider font-bold">
        External Paste Buffer Inspector &bull; Evidence Card #PB-084
      </span>
    </div>
    <span class="text-[11px] font-mono text-slate-400">Captured at Millisecond of Injection</span>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
    <div class="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
      <div class="text-slate-400">Contributor:</div>
      <div class="font-bold text-cyan-300">Jordan T. (Student ID: #88412)</div>
    </div>
    <div class="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
      <div class="text-slate-400">Timestamp &amp; Target:</div>
      <div class="font-bold text-slate-200">Oct 24, 2026 &bull; 11:41:18 PM (Section 4, Lines 142&ndash;188)</div>
    </div>
  </div>

  <div class="p-4 rounded-xl bg-slate-950 border border-rose-500/50 mb-4">
    <div class="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold mb-2">
      Immutable Preserved Clipboard Text:
    </div>
    <div class="text-xs font-mono leading-relaxed text-slate-300 p-3 rounded bg-slate-900 border border-slate-800">
      <span class="bg-rose-950 text-rose-300 px-1.5 py-0.5 rounded font-bold border border-rose-800">Certainly! Here is a comprehensive policy recommendation analyzing municipal watershed restoration strategies</span> with specific attention to riparian buffer zones, agricultural non-point source nitrogen loading, and stormwater containment infrastructure...
    </div>
  </div>

  <div class="p-3 rounded-lg bg-slate-800/60 border border-slate-700 text-xs text-slate-300 space-y-1">
    <div class="font-semibold text-teal-300">Post-Insertion Telemetry Log:</div>
    <div>&bull; At 11:41:26 PM (8 seconds post-paste), student highlighted and deleted the introductory phrase (<em>&ldquo;Certainly! Here is a comprehensive...&rdquo;</em>).</div>
    <div>&bull; Retained 452 words of body text with zero subsequent lexical or structural edits.</div>
    <div class="text-rose-400 font-semibold pt-1">&bull; Verdict: Definitive forensic proof of direct large language model output injection.</div>
  </div>
</div>

<p><img src="/images/services/report-paste-evidence.png" alt="Checkmark Plagiarism External Paste Evidence and Keystroke Telemetry Report View" class="w-full rounded-2xl shadow-lg border border-border my-6" /></p>

<ul>
  <li><strong>Pre-Edit State Preservation:</strong> Even if a student pastes an LLM-generated paragraph and immediately edits, rephrases, or deletes the telltale conversational introductory markers (e.g., <em>&ldquo;Certainly! Here is a detailed analysis...&rdquo;</em>), Checkmark&rsquo;s paste buffer retains the original unedited clipboard text as it existed at the exact millisecond of injection.</li>
  <li><strong>Contextual Provenance Verification:</strong> If a student claims they pasted authentic primary research notes, the teacher can inspect the paste buffer to verify the claim. If the pasted buffer contains raw interview transcripts or bibliographic data, the student is instantly exonerated. If the buffer contains structured, syntactically polished LLM prose with AI formatting artifacts, the provenance is definitively established.</li>
</ul>

<hr class="my-8 border-border" />

<h3>3. Granular Passage-Level AI Detection Mapped to Author Spans</h3>

<p>Rather than generating an aggregate document percentage that paints the entire group with a broad brush, Checkmark applies <a href="/services/ai-detection" class="font-semibold text-teal-600 dark:text-teal-400 underline">Passage-Level Granularity</a> mapped directly to verified contributor user IDs.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
    <div class="text-xs font-mono text-teal-400 uppercase tracking-wider font-bold">
      Passage-Level AI Confidence Card &bull; Contributor-Mapped Spans
    </div>
    <div class="text-xs bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800 font-mono">
      Teacher-in-the-Loop View
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-5 text-xs">
    <div class="p-3 rounded-lg bg-slate-800 border border-purple-500/30">
      <div class="font-bold text-purple-300">Elena R.</div>
      <div class="text-slate-400">950 Words</div>
      <div class="text-teal-400 font-semibold">0% AI Flagged</div>
      <div class="text-[10px] text-slate-400">100% Authentic Typing</div>
    </div>
    <div class="p-3 rounded-lg bg-slate-800 border border-amber-500/30">
      <div class="font-bold text-amber-300">Marcus K.</div>
      <div class="text-slate-400">820 Words</div>
      <div class="text-teal-400 font-semibold">0% AI Flagged</div>
      <div class="text-[10px] text-slate-400">100% Authentic Typing</div>
    </div>
    <div class="p-3 rounded-lg bg-slate-800 border border-emerald-500/30">
      <div class="font-bold text-emerald-300">Priya S.</div>
      <div class="text-slate-400">780 Words</div>
      <div class="text-teal-400 font-semibold">0% AI Flagged</div>
      <div class="text-[10px] text-slate-400">100% Authentic Typing</div>
    </div>
    <div class="p-3 rounded-lg bg-slate-800 border border-cyan-500/50">
      <div class="font-bold text-cyan-300">Jordan T.</div>
      <div class="text-slate-400">650 Words</div>
      <div class="text-rose-400 font-bold">92% AI Flagged</div>
      <div class="text-[10px] text-rose-300">2 Paste Injections</div>
    </div>
  </div>

  <!-- Interactive Passage Metric Card -->
  <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-3">
    <div class="flex items-center justify-between text-slate-300">
      <span class="font-bold text-slate-200">Flagged Passage: Paragraph 14 (Jordan&rsquo;s Contributed Section)</span>
      <span class="font-mono text-amber-400 text-[11px]">Underline: Orange Wave (AI Distribution)</span>
    </div>

    <div>
      <div class="flex justify-between text-[11px] text-slate-400 mb-1">
        <span>Typical Human Writing</span>
        <span class="text-rose-400 font-bold">92% AI Confidence</span>
        <span>Typical AI Generation</span>
      </div>
      <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden relative">
        <div class="bg-gradient-to-r from-teal-500 via-amber-500 to-rose-500 h-full w-[92%]"></div>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-[11px] font-mono text-slate-300">
      <div class="p-2 rounded bg-slate-900 border border-slate-800">
        Perplexity: <strong class="text-rose-400">14.2</strong> (Highly Uniform)
      </div>
      <div class="p-2 rounded bg-slate-900 border border-slate-800">
        Burstiness: <strong class="text-rose-400">8.1</strong> (Flat Lengths)
      </div>
      <div class="p-2 rounded bg-slate-900 border border-slate-800">
        Guardrail: <strong class="text-teal-400">PASS</strong> (&gt;150w sample)
      </div>
    </div>
  </div>
</div>

<ul>
  <li><strong>Author-Span Alignment:</strong> Every sentence in the collaborative document is cross-referenced against the author ID verified by Essay Playback. AI confidence scores are calculated exclusively on localized spans, preventing cross-contamination between group members.</li>
  <li><strong>Calibrated Confidence Sliders:</strong> Rather than a binary &ldquo;AI vs. Human&rdquo; verdict, each flagged passage features an evidence card displaying calibrated sliders that illustrate linguistic perplexity and burstiness distributions.</li>
  <li><strong>Honest Short-Text Guardrails (&lt;150 Words):</strong> If an individual student contributes a short subsection of under 150 words, Checkmark displays <code>N/A</code> rather than guessing on an insufficient sample size, preventing false-positive flags on brief introductory transitions.</li>
  <li><strong>Educator-Only Flag Privacy:</strong> Flag statuses remain strictly visible to teachers only. This prevents students from seeing automated flags before the educator conducts an audit, eliminating premature peer accusations within the group.</li>
</ul>

<hr class="my-8 border-border" />

<h3>4. Teacher-in-the-Loop Rubric Autograding with Individual Weighting</h3>

<p>Checkmark&rsquo;s <a href="/services/autograder" class="font-semibold text-teal-600 dark:text-teal-400 underline">AI Autograder</a> integrates directly with <strong>Canvas LMS SpeedGrader, Buzz LMS, and Google Classroom</strong>, enabling teachers to grade collaborative projects with differentiated accountability.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
    <div class="text-xs font-mono text-teal-400 uppercase tracking-wider font-bold">
      Split-Rubric Autograding &bull; LMS Passback Architecture
    </div>
    <div class="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
      Total Points: <strong>100 Pts</strong>
    </div>
  </div>

  <div class="mb-4 p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-xs">
    <div class="font-bold text-teal-300 mb-1">SHARED GROUP CRITERIA (40% Weight):</div>
    <div class="flex justify-between text-slate-300 text-[11px]">
      <span>&bull; Document Cohesion &amp; Synthesis: <strong>18 / 20 Pts</strong></span>
      <span>&bull; Literature Breadth &amp; Citations: <strong>19 / 20 Pts</strong></span>
    </div>
  </div>

  <div class="space-y-2 mb-4 text-xs font-mono">
    <div class="font-bold text-teal-300 font-sans text-xs">INDIVIDUAL CONTRIBUTOR CRITERIA (60% Weight):</div>
    
    <div class="flex items-center justify-between p-2.5 rounded bg-slate-800 border border-purple-500/30">
      <span class="text-purple-300 font-bold">Elena R.</span>
      <span class="text-slate-300">Analysis: 29/30 &bull; Evidence: 28/30 &bull; Writing Telemetry: 100%</span>
      <span class="font-bold text-teal-400">Grade: 94 / 100 (A)</span>
    </div>

    <div class="flex items-center justify-between p-2.5 rounded bg-slate-800 border border-amber-500/30">
      <span class="text-amber-300 font-bold">Marcus K.</span>
      <span class="text-slate-300">Analysis: 27/30 &bull; Evidence: 28/30 &bull; Writing Telemetry: 100%</span>
      <span class="font-bold text-teal-400">Grade: 92 / 100 (A-)</span>
    </div>

    <div class="flex items-center justify-between p-2.5 rounded bg-slate-800 border border-emerald-500/30">
      <span class="text-emerald-300 font-bold">Priya S.</span>
      <span class="text-slate-300">Analysis: 28/30 &bull; Evidence: 29/30 &bull; Writing Telemetry: 100%</span>
      <span class="font-bold text-teal-400">Grade: 94 / 100 (A)</span>
    </div>

    <div class="flex items-center justify-between p-2.5 rounded bg-slate-800 border border-cyan-500/50">
      <span class="text-cyan-300 font-bold">Jordan T.</span>
      <span class="text-rose-300">Analysis: 0/30 &bull; Evidence: 0/30 &bull; Paste Flag: Active</span>
      <span class="font-bold text-amber-400">Grade: 37 / 100* (Held)</span>
    </div>
  </div>

  <div class="flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] text-slate-400">
    <span>*Held for Restorative Redrafting Conference</span>
    <div class="flex gap-2">
      <span class="px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">✔ Canvas SpeedGrader Sync Ready</span>
      <span class="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">✔ Buzz LMS Feedback Passback</span>
    </div>
  </div>
</div>

<p><img src="/images/services/report-grading-view.png" alt="Checkmark Plagiarism Quote-Anchored Rubric Autograding View" class="w-full rounded-2xl shadow-lg border border-border my-6" /></p>

<hr class="my-8 border-border" />

<h2>4. Real-World Classroom Case Studies</h2>

<p>The following real-world case studies illustrate how Checkmark&rsquo;s Multi-Author Forensic Suite resolves high-stakes collaborative writing disputes across different grade levels and disciplines.</p>

<div class="my-8 space-y-6">
  <!-- Case Study 1 -->
  <div class="rounded-2xl border border-teal-500/40 bg-card p-6 shadow-sm">
    <div class="flex items-center justify-between mb-3 border-b border-border pb-3">
      <div>
        <span class="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Case Study 1 &bull; AP High School Capstone</span>
        <h3 class="text-lg font-bold text-foreground mt-0.5">The 4-Student AP Environmental Science Policy Brief</h3>
      </div>
      <span class="text-xs bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 px-2.5 py-1 rounded-full font-semibold">
        Initial Flag: 54% Aggregate AI
      </span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
      <div class="p-3 rounded-lg bg-muted/40 border border-border">
        <strong>Context:</strong> 3,200-word Watershed Policy Brief (Elena, Marcus, Priya, Jordan). Elena and Priya contacted the teacher in severe distress fearing ruined college recommendations.
      </div>
      <div class="p-3 rounded-lg bg-muted/40 border border-border">
        <strong>Forensic Finding:</strong> Elena, Marcus, and Priya logged 3.8 to 5.1 hours each of active drafting. Jordan logged 7m 12s with a 620-word external paste at 11:34 PM on deadline night.
      </div>
    </div>

    <div class="p-3.5 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-500/30 text-xs text-foreground leading-relaxed">
      <strong>Resolution &amp; Pedagogical Outcome:</strong> Elena, Marcus, and Priya were immediately exonerated and awarded full credit (94%). Jordan was shown the preserved paste buffer in a private restorative conference, waived formal honor board proceedings, and completed an authentic redraft during study hall for partial credit.
    </div>
  </div>

  <!-- Case Study 2 -->
  <div class="rounded-2xl border border-cyan-500/40 bg-card p-6 shadow-sm">
    <div class="flex items-center justify-between mb-3 border-b border-border pb-3">
      <div>
        <span class="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">Case Study 2 &bull; 10th-Grade English Literature</span>
        <h3 class="text-lg font-bold text-foreground mt-0.5">The Tragedy Comparison Essay (Resolving Peer Accusations)</h3>
      </div>
      <span class="text-xs bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 px-2.5 py-1 rounded-full font-semibold">
        Initial Flag: 42% AI Flag &bull; Peer Dispute
      </span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
      <div class="p-3 rounded-lg bg-muted/40 border border-border">
        <strong>The Dispute:</strong> Maya and Sam accused Caleb of using ChatGPT for Section 2 (<em>Macbeth</em> vs. <em>Oedipus</em>) because his vocabulary included terms like <em>hamartia</em> and <em>anagnorisis</em>.
      </div>
      <div class="p-3 rounded-lg bg-muted/40 border border-border">
        <strong>Forensic Finding:</strong> Caleb logged 3h 44m active typing, 5,420 keystrokes for 780 net words (Gross-to-Net: 1.82x), 42 meso-pauses before complex terms, and 0 paste events.
      </div>
    </div>

    <div class="p-3.5 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-500/30 text-xs text-foreground leading-relaxed">
      <strong>Resolution &amp; Pedagogical Outcome:</strong> Caleb was completely vindicated. The elevated score was identified as a false positive triggered by classical literary terms. The teacher facilitated a restorative group conference on peer trust and evidence-based due process.
    </div>
  </div>

  <!-- Case Study 3 -->
  <div class="rounded-2xl border border-amber-500/40 bg-card p-6 shadow-sm">
    <div class="flex items-center justify-between mb-3 border-b border-border pb-3">
      <div>
        <span class="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Case Study 3 &bull; 8th-Grade Middle School Social Studies</span>
        <h3 class="text-lg font-bold text-foreground mt-0.5">The Civil War Exhibit Script (Second-Screen Transcription)</h3>
      </div>
      <span class="text-xs bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 px-2.5 py-1 rounded-full font-semibold">
        Initial Flag: 38% AI &bull; No Pastes Logged
      </span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
      <div class="p-3 rounded-lg bg-muted/40 border border-border">
        <strong>The Exploit:</strong> Student Liam manually retyped 450 words line-by-line off a tablet displaying ChatGPT, believing that avoiding copy-paste would evade detection.
      </div>
      <div class="p-3 rounded-lg bg-muted/40 border border-border">
        <strong>Forensic Finding:</strong> Metronomic 145ms IKI (zero jitter), complete absence of cognitive pauses, 4.5s periodic macro-pauses every 2 lines (matching external eye-scans), and 1.01x efficiency.
      </div>
    </div>

    <div class="p-3.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-500/30 text-xs text-foreground leading-relaxed">
      <strong>Resolution &amp; Pedagogical Outcome:</strong> Keystroke dynamics distinguished transcription from authentic drafting. Compliant group members (Noah, Ava, Sofia) received full credit. Liam and his parents attended a restorative coaching session focusing on digital ethics and draft development.
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>5. The 4-Phase Collaborative Integrity &amp; Attribution Protocol</h2>

<p>To systematically prevent authorship disputes and establish transparent accountability, educators should implement the <strong>4-Phase Collaborative Integrity &amp; Attribution Protocol</strong>.</p>

<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    The 4-Phase Collaborative Integrity &amp; Attribution Protocol
  </div>

  <div class="space-y-4 text-xs">
    <div class="p-4 rounded-xl bg-slate-800/90 border border-teal-500/40">
      <div class="flex items-center justify-between text-teal-300 font-bold text-sm mb-1.5">
        <span>PHASE 1: PRE-SUBMISSION ARCHITECTURE &amp; SETUP</span>
        <span class="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800 font-mono">Setup</span>
      </div>
      <p class="text-slate-300 m-0">Establish clear section assignments, enforce single-user SSO document logins (no shared accounts), define allowed brainstorming vs. prohibited generation, and collect signed Attribution Contracts.</p>
    </div>

    <div class="p-4 rounded-xl bg-slate-800/90 border border-cyan-500/40">
      <div class="flex items-center justify-between text-cyan-300 font-bold text-sm mb-1.5">
        <span>PHASE 2: POST-SUBMISSION TELEMETRY AUDIT</span>
        <span class="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-mono">Investigation</span>
      </div>
      <p class="text-slate-300 m-0">Filter Essay Playback™ by individual author tracks to verify active writing durations, audit the External Paste Buffer Inspector for raw clipboard text, and cross-reference passage-level AI confidence scores.</p>
    </div>

    <div class="p-4 rounded-xl bg-slate-800/90 border border-amber-500/40">
      <div class="flex items-center justify-between text-amber-300 font-bold text-sm mb-1.5">
        <span>PHASE 3: TARGETED RESTORATIVE CONFERENCING</span>
        <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800 font-mono">Restorative</span>
      </div>
      <p class="text-slate-300 m-0">Privately affirm and exonerate compliant group members first. Hold a private, 1-on-1 evidence review with the identified student, presenting objective playback and paste receipts in a supportive coaching frame.</p>
    </div>

    <div class="p-4 rounded-xl bg-slate-800/90 border border-purple-500/40">
      <div class="flex items-center justify-between text-purple-300 font-bold text-sm mb-1.5">
        <span>PHASE 4: FAIR EVALUATION &amp; LMS PASSBACK</span>
        <span class="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800 font-mono">Grading</span>
      </div>
      <p class="text-slate-300 m-0">Apply split-rubric scoring (group criteria vs. individual criteria), provide a structured formative redrafting window for the non-compliant student, and synchronize grades directly into Canvas SpeedGrader or Buzz LMS.</p>
    </div>
  </div>
</div>

<div class="my-6 p-5 rounded-2xl border border-border bg-card shadow-sm">
  <h3 class="text-base font-bold text-foreground mb-3">Post-Submission Forensic Audit Checklist</h3>
  <div class="space-y-2 text-xs text-muted-foreground">
    <div class="flex items-start gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">[✔]</span>
      <span><strong>Step 1: Inspect Contributor Volume &amp; Time:</strong> Verify that each member&rsquo;s active composition time matches their percentage of final text.</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">[✔]</span>
      <span><strong>Step 2: Filter Essay Playback™ by Author:</strong> Scrub through each contributor&rsquo;s track at 4x speed, checking pause topography and gross-to-net ratios.</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">[✔]</span>
      <span><strong>Step 3: Audit External Paste Buffer Inspector:</strong> Review all clipboard paste events &gt;50 words to inspect raw preserved text.</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">[✔]</span>
      <span><strong>Step 4: Review Author-Mapped Passage Cards:</strong> Confirm whether flagged passages are isolated to a single student span and verify short-text guardrails (&lt;150w).</span>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. Ready-to-Use Group Project Syllabus Policy &amp; Contribution Contract</h2>

<p>Educators can copy, adapt, and distribute the following policy contract to establish transparent collaborative integrity standards.</p>

<div class="my-6 rounded-2xl border border-border bg-muted/40 p-6 text-foreground text-xs leading-relaxed font-sans shadow-sm">
  <div class="font-bold text-sm text-foreground mb-3 pb-2 border-b border-border">
    COLLABORATIVE AUTHORSHIP &amp; ACADEMIC INTEGRITY AGREEMENT
  </div>
  <p class="text-muted-foreground mb-3">
    <strong>Course:</strong> ___________________________ &nbsp;&nbsp;&bull;&nbsp;&nbsp; <strong>Instructor:</strong> ___________________________<br />
    <strong>Project Title:</strong> __________________________________________________________________<br />
    <strong>Group Members:</strong> 1. ___________________ 2. ___________________ 3. ___________________ 4. ___________________
  </p>

  <h4 class="font-bold text-foreground text-xs uppercase tracking-wider mb-1 mt-3">1. Individual Accountability &amp; Digital Telemetry</h4>
  <p class="text-muted-foreground mb-2">We understand that this collaborative project evaluates both our collective synthesis and our individual contributions. To ensure fairness and procedural due process:</p>
  <ul class="list-disc pl-4 space-y-1 text-muted-foreground">
    <li>Every team member must access and edit the shared document exclusively through their individual school-issued SSO account.</li>
    <li>Writing process telemetry (including keystroke dynamics, typing cadence, and revision history) is logged via Checkmark Plagiarism to verify authentic human authorship.</li>
    <li>Text generated by an unapproved AI model and pasted into the document will be isolated to the individual user account responsible; honest team members will NOT be subject to collective punishment.</li>
  </ul>

  <h4 class="font-bold text-foreground text-xs uppercase tracking-wider mb-1 mt-3">2. Authorized vs. Prohibited AI Assistance</h4>
  <ul class="list-disc pl-4 space-y-1 text-muted-foreground">
    <li><strong>ALLOWED:</strong> Using AI for preliminary brainstorming of search queries, outlining potential research angles, or checking mechanical grammar on pre-written student sentences.</li>
    <li><strong>PROHIBITED:</strong> Using AI to generate sentences, paragraphs, source summaries, or conclusions; using AI humanizer tools or paraphrasers to disguise external text; sharing logins to disguise paste events.</li>
  </ul>

  <h4 class="font-bold text-foreground text-xs uppercase tracking-wider mb-1 mt-3">3. Section Attribution Matrix</h4>
  <p class="text-muted-foreground mb-2">Each member agrees to lead and draft the following specific sections:</p>
  <div class="space-y-1 font-mono text-muted-foreground">
    <div>&bull; Member 1 (_____________________): Section(s) ___________________________________________________</div>
    <div>&bull; Member 2 (_____________________): Section(s) ___________________________________________________</div>
    <div>&bull; Member 3 (_____________________): Section(s) ___________________________________________________</div>
    <div>&bull; Member 4 (_____________________): Section(s) ___________________________________________________</div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. Restorative Team &amp; Individual Conferencing Scripts</h2>

<p>When an integrity issue is detected in a group project, using precise, supportive language de-escalates anxiety and ensures productive resolution.</p>

<div class="my-8 space-y-4">
  <div class="rounded-2xl border border-teal-500/30 bg-teal-50/30 dark:bg-teal-950/20 p-5 text-xs text-foreground">
    <div class="font-bold text-teal-700 dark:text-teal-300 text-sm mb-1">Script A: The Neutral Group Check-In (De-Escalating Peer Blame)</div>
    <div class="text-[11px] text-muted-foreground italic mb-2">Meeting with the entire group after initial submission to explain evaluation without revealing flags.</div>
    <p class="text-muted-foreground leading-relaxed m-0">
      &ldquo;Thank you all for meeting with me. Your policy brief covers a crucial topic, and I appreciate the hard work you put into organizing your research. In our course, we evaluate collaborative assignments using multi-author process analysis so that each person&rsquo;s individual writing and research effort is recognized independently. I am currently reviewing everyone&rsquo;s individual drafting tracks and rubric milestones in Checkmark. You will each see your individualized feedback and criterion scores in Canvas SpeedGrader by tomorrow afternoon. If I need to meet with anyone individually to talk through revision strategies for their specific section, I will reach out privately. Excellent job collaborating on the overall project structure.&rdquo;
    </p>
  </div>

  <div class="rounded-2xl border border-amber-500/30 bg-amber-50/30 dark:bg-amber-950/20 p-5 text-xs text-foreground">
    <div class="font-bold text-amber-700 dark:text-amber-300 text-sm mb-1">Script B: The Private Contributor Conference (Presenting Telemetry Receipts)</div>
    <div class="text-[11px] text-muted-foreground italic mb-2">One-on-one private conference with the student who pasted AI-generated text.</div>
    <p class="text-muted-foreground leading-relaxed m-0">
      &ldquo;Hi Jordan, thanks for coming in. I wanted to look together at Section 4 of the watershed brief. When I opened Checkmark&rsquo;s Essay Playback, I noticed that while Elena, Marcus, and Priya spent several hours actively drafting their sections, your track shows an active drafting time of about seven minutes, with a 485-word external paste at 11:34 PM on Sunday night.<br /><br />
      When we look at the Paste Buffer Inspector right here on screen, it shows the unedited clipboard text from that moment, which includes the opening prompt response from an AI assistant.<br /><br />
      Our goal today isn&rsquo;t to lecture you or impose an arbitrary zero&mdash;it&rsquo;s to talk about what happened on Sunday night. Were you feeling overwhelmed by the deadline, or did you get stuck on how to formulate the policy recommendations? Let&rsquo;s look at how we can get you back on track so you can master this material and write this section in your authentic voice.&rdquo;
    </p>
  </div>

  <div class="rounded-2xl border border-cyan-500/30 bg-cyan-50/30 dark:bg-cyan-950/20 p-5 text-xs text-foreground">
    <div class="font-bold text-cyan-700 dark:text-cyan-300 text-sm mb-1">Script C: The Post-Conference Team Re-Alignment (Restoring Psychological Safety)</div>
    <div class="text-[11px] text-muted-foreground italic mb-2">Brief follow-up message to the compliant group members after the private resolution.</div>
    <p class="text-muted-foreground leading-relaxed m-0">
      &ldquo;Hi Elena, Marcus, and Priya. I have completed the individual writing process audit for Sections 1, 2, and 3 of your group project. Your drafting telemetry, research synthesis, and revision histories were exceptional and have been awarded full credit (94/100) in the gradebook. Thank you for your rigorous, authentic scholarship. I am working with Jordan on an independent revision for Section 4, which will not impact your project grades or timeline in any way. Keep up the outstanding work!&rdquo;
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Frequently Asked Questions (FAQ)</h2>

<div class="my-8 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mt-0 mb-2">1. What if all group members worked on a single student&rsquo;s laptop in the library using one Google account?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Drafting an entire collaborative project on a single account eliminates individual login telemetry and makes per-author isolation impossible. To prevent this, educators must establish a strict <strong>Single-User SSO Requirement</strong> in the project syllabus. If students collaborate in person, they should each bring their own district-issued device or take turns logging into their respective school accounts on the shared device. If an integrity dispute arises on a single-account document, the teacher must rely on oral defense conferences and physical draft notes to establish individual authorship.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mt-0 mb-2">2. Can a student claim they drafted their section offline in Microsoft Word or Apple Notes and pasted it in?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Yes, this is the most common student defense when confronted with a paste flag. Checkmark resolves this claim through the <strong>External Paste Buffer Inspector</strong> and <strong>Linguistic Passage Analysis</strong>. If the student genuinely drafted offline, the pasted text will exhibit natural human syntactical variation, occasional typos, and authentic informal notes. Furthermore, teachers can request that the student produce the original offline <code>.docx</code> file or Apple Notes version history. If the pasted buffer contains characteristic LLM phrasing, conversational preambles, and low perplexity scores, the offline drafting claim is forensically disproven.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mt-0 mb-2">3. How does Checkmark handle collaborative editing where one student rephrases another student&rsquo;s sentences?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Checkmark&rsquo;s multi-track telemetry precisely differentiates between <strong>primary author generation</strong> and <strong>peer editorial revision</strong>. In Essay Playback™, peer edits appear as secondary overlay events tagged to the editor&rsquo;s user ID. The original author retains credit for the underlying drafting volume, while the editor&rsquo;s contributions are logged as editorial macro-revisions. This gives teachers complete visibility into peer review quality and collaborative editing dynamics.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mt-0 mb-2">4. Is collective grading legal if our school district student code of conduct doesn&rsquo;t explicitly mention group projects?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      While assigning a shared group grade for general academic quality is standard practice, <strong>imposing collective disciplinary penalties or academic dishonesty sanctions for suspected cheating violates constitutional procedural due process</strong> under <em>Goss v. Lopez</em> (419 U.S. 565) in public institutions. Disciplinary sanctions require individualized evidence of wrongdoing. Utilizing Checkmark ensures that institutions uphold due process by establishing individual culpability before any penalty is applied.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mt-0 mb-2">5. What should a teacher do if an entire group admits they used AI together during a brainstorming session?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Collaborative AI brainstorming is a legitimate pedagogical activity when authorized by the instructor. If students used an LLM to generate initial topic ideas or outline structures, but subsequently drafted the body prose in their authentic human voices, Checkmark&rsquo;s Essay Playback™ will show extensive active keystroke histories, formulation pauses, and macro-revisions. The teacher should evaluate whether the students adhered to course attribution guidelines and award credit based on authentic prose composition.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mt-0 mb-2">6. How does individual rubric weighting work in Canvas SpeedGrader and Buzz LMS when using Checkmark?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Checkmark synchronizes with LMS rubrics via LTI 1.3 Advantage integration. Teachers can configure custom rubric weighting that separates shared group criteria (e.g., Thesis Cohesion, Formatting) from individual contributor criteria (e.g., Evidence Analysis, Keystroke Authenticity). When the teacher approves the autograded drafts, Checkmark calculates the differentiated final scores and pushes both the points and quote-anchored written feedback directly into Canvas SpeedGrader or Buzz LMS with a single click.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mt-0 mb-2">7. How does Checkmark protect student privacy when auditing collaborative documents under FERPA and COPPA?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Checkmark Plagiarism operates under a strict <strong>Zero Data Retention and Zero Model Training Policy</strong>. Student collaborative documents, keystroke logs, and clipboard buffers are processed in secure, encrypted cloud environments (AES-256 at rest, TLS 1.3 in transit) and are <strong>never used to train public or commercial artificial intelligence models</strong>. Checkmark fully complies with the Family Educational Rights and Privacy Act (FERPA) and the Children&rsquo;s Online Privacy Protection Act (COPPA), ensuring that student educational records remain confidential and protected.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>9. Conclusion: Moving from Guesswork to Trust in Collaborative Learning</h2>

<p>Collaborative writing remains one of the most powerful pedagogical vehicles for preparing students for the intellectual and professional demands of the modern world. However, its continued viability in the generative AI era depends entirely on the fairness, precision, and transparency of evaluation.</p>

<p>Educators can no longer afford to rely on opaque, monolithic AI percentages that force a false choice between punishing innocent students and ignoring academic dishonesty. By implementing <strong>Checkmark Plagiarism&rsquo;s Multi-Author Writing Telemetry Suite</strong>&mdash;leveraging author-isolated Essay Playback™, external paste buffer preservation, and author-mapped passage-level analysis&mdash;schools can uphold rigorous academic integrity, protect student due process, and foster a classroom culture grounded in authentic scholarship.</p>

<p><strong>Stop guessing. Start trusting.</strong> Equip your department with the multi-author forensic evidence needed to support every writer.</p>
`;

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
};

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const refValue = typeof resolvedParams?.ref === 'string' ? resolvedParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/how-can-teachers-pinpoint-which-group-member-contributed-ai-generated-text-in-collaborative-assignments"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
