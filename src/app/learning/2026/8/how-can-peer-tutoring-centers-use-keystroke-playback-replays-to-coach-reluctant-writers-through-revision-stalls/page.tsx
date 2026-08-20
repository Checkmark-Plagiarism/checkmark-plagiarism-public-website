import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Peer Tutoring Centers Use Keystroke Playback Replays to Coach Reluctant Writers Through Revision Stalls? | Checkmark Plagiarism",
  description: "Discover how university writing centers and high school peer tutoring labs use keystroke playback replays and writing telemetry to diagnose revision stalls, overcome the backspace spiral, and coach reluctant writers formatively.",
  keywords: [
    "writing center keystroke playback",
    "peer tutoring revision stalls",
    "Essay Playback",
    "writing telemetry writing center",
    "Flower and Hayes cognitive model",
    "backspace spiral writing block",
    "formative writing diagnostics",
    "reluctant writers peer coaching",
    "Checkmark Plagiarism",
    "Inter-Key Intervals writing pedagogy",
    "Knowledge Transforming writing center",
    "Canvas LMS writing center integration"
  ],
  openGraph: {
    images: ["/images/learning/how-can-peer-tutoring-centers-use-keystroke-playback-replays-to-coach-reluctant-writers-through-revision-stalls/featured.png"],
  },
};

const meta = {
  title: "How Can Peer Tutoring Centers Use Keystroke Playback Replays to Coach Reluctant Writers Through Revision Stalls? | Checkmark Plagiarism",
  description: "Discover how university writing centers and high school peer tutoring labs use keystroke playback replays and writing telemetry to diagnose revision stalls, overcome the backspace spiral, and coach reluctant writers formatively.",
  "opengraph-image": "/images/learning/how-can-peer-tutoring-centers-use-keystroke-playback-replays-to-coach-reluctant-writers-through-revision-stalls/featured.png",
  date: "08-18-2026",
  readTime: "~14 min read",
  category: "Writing Process",
  categories: ["Writing Process", "Pedagogy", "Teacher Guide", "Peer Tutoring", "Writing Center"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-3">
    <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-600 text-white tracking-wide uppercase">
      Executive Summary
    </span>
  </div>
  <p class="text-foreground font-medium leading-relaxed">
    For decades, university writing centers, high school peer tutoring labs, and faculty writing fellows have operated under a profound pedagogical constraint: they can only evaluate the static artifact of a student's final draft&mdash;or the paralyzing emptiness of a blank document. Tutors are forced to guess what cognitive friction occurred during drafting, while anxious and reluctant writers struggle to articulate why they hit a wall. Traditional integrity tools have compounded this anxiety by weaponizing writing telemetry for punitive surveillance and black-box AI accusations. Grounded in Checkmark Plagiarism’s core philosophy of <strong>&ldquo;Stop guessing, start trusting,&rdquo;</strong> this comprehensive guide explores the paradigm shift toward <strong>formative writing process diagnostics</strong>. By leveraging patent-pending <strong>Essay Playback™</strong>, 1x&ndash;8x scrubbable keystroke timelines, telemetry event markers (<code>[DELETION_BURST]</code>, <code>[LONG_CONTEMPLATION_PAUSE]</code>, <code>[EXTERNAL_NOTES_PASTE]</code>), and cognitive psycholinguistic modeling (Flower &amp; Hayes; Scardamalia &amp; Bereiter), peer tutors can sit shoulder-to-shoulder with writers to diagnose the &ldquo;backspace spiral,&rdquo; unlock premature editing traps, validate authentic external scratchpad brainstorming, and transform writing paralysis into self-regulated mastery.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> empowers writing centers and peer coaching labs by uniting <a href="/services/writing-playback">patent-pending Essay Playback™</a> with <a href="/services/ai-detection">passage-level AI confidence sliders</a>, <a href="/services/plagiarism-detection">side-by-side plagiarism source verification</a>, <a href="/services/autograder">quote-anchored rubric autograding</a>, and enterprise LTI 1.3 integrations for <a href="/services/integrations/canvas-lms">Canvas SpeedGrader</a>, <a href="/services/integrations/google-classroom">Google Classroom</a>, and Agilix Buzz.</p>

<hr class="my-8 border-border" />

<h2>1. The Writing Center Dilemma: The &ldquo;Black Box&rdquo; of the Final Draft vs. The Hidden Composing Journey</h2>

<p>In higher education writing centers and secondary peer tutoring labs, the central challenge of writing pedagogy is rarely a lack of student ideas. Rather, it is the <strong>invisibility of the composing process</strong>.</p>

<p>When a student sits down with a peer tutor, the consultation almost universally begins with a finished paper, an incomplete fragment, or a completely blank screen. The tutor asks: <em>&ldquo;Where did you get stuck?&rdquo;</em> or <em>&ldquo;What was your thought process when writing this paragraph?&rdquo;</em></p>

<p>For reluctant writers, second-language learners, and students grappling with writing anxiety, answering these metacognitive questions on demand is intimidating. They may remember feeling overwhelmed, frustrated, or uncertain, but they cannot reconstruct the exact cognitive micro-decisions that led to a stalled draft.</p>

<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="text-center font-bold text-foreground text-sm tracking-wide uppercase mb-6">
    The Traditional vs. Telemetry-Powered Writing Consultation
  </div>
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
    <!-- Traditional Model -->
    <div class="rounded-xl bg-rose-500/10 border border-rose-500/20 p-5 flex flex-col justify-between space-y-4">
      <div>
        <div class="flex items-center gap-2 font-bold text-rose-700 dark:text-rose-300 text-sm mb-2">
          <span class="flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-white text-xs">A</span>
          Traditional &ldquo;Static Artifact&rdquo; Model
        </div>
        <p class="text-rose-900/80 dark:text-rose-200/80 font-medium mb-3">Tutor Diagnoses Only Surface Symptoms:</p>
        <div class="rounded-lg bg-background/80 p-3.5 border border-rose-500/20 space-y-2">
          <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold">
            <span>📄 Student Submits Single Snapshot Draft</span>
          </div>
          <ul class="list-disc pl-4 space-y-1 text-muted-foreground">
            <li>Weak thesis or missing claim?</li>
            <li>Abrupt transitions between paragraphs?</li>
            <li>Surface grammatical and spelling errors?</li>
          </ul>
          <div class="pt-2 border-t border-border/50 text-[11px]">
            <p class="font-medium text-foreground">❓ Tutor: <em>&ldquo;Why did you choose this phrasing?&rdquo;</em></p>
            <p class="text-rose-600 dark:text-rose-400">🗣️ Student: <em>&ldquo;I don't know... I just got confused.&rdquo;</em></p>
          </div>
        </div>
      </div>
      <div class="pt-2 border-t border-rose-500/20 font-mono text-[10px] text-rose-600 dark:text-rose-400 font-semibold">
        ⚠️ Result: Evaluative interrogation &amp; surface editing
      </div>
    </div>

    <!-- Telemetry Model -->
    <div class="rounded-xl bg-teal-500/10 border border-teal-500/20 p-5 flex flex-col justify-between space-y-4">
      <div>
        <div class="flex items-center gap-2 font-bold text-teal-700 dark:text-teal-300 text-sm mb-2">
          <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-xs">B</span>
          Checkmark Telemetry-Powered Model
        </div>
        <p class="text-teal-900/80 dark:text-teal-200/80 font-medium mb-3">Tutor Diagnoses Real Cognitive Friction:</p>
        <div class="rounded-lg bg-background/80 p-3.5 border border-teal-500/20 space-y-2">
          <div class="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold">
            <span>🎬 Side-by-Side Dynamic Replay (Essay Playback™)</span>
          </div>
          <ul class="list-disc pl-4 space-y-1 text-muted-foreground">
            <li><strong>45-min pause</strong> identified before Paragraph 2</li>
            <li><strong>14 backspace cycles</strong> detected on opening claim</li>
            <li><strong>External notes paste</strong> verified and preserved</li>
          </ul>
          <div class="pt-2 border-t border-border/50 text-[11px]">
            <p class="font-medium text-foreground">💡 Tutor: <em>&ldquo;Let's watch this 5-minute pause together. What two ideas were you wrestling with?&rdquo;</em></p>
            <p class="text-teal-600 dark:text-teal-400">🗣️ Student: <em>&ldquo;I had a quote, but couldn't link it to my main point!&rdquo;</em></p>
          </div>
        </div>
      </div>
      <div class="pt-2 border-t border-teal-500/20 font-mono text-[10px] text-teal-600 dark:text-teal-400 font-semibold">
        ✨ Result: Collaborative metacognitive coaching
      </div>
    </div>
  </div>
</div>

<h3>The Invisible Cognitive Stalls of Reluctant Writers</h3>

<p>Before a stalled draft ever reaches a tutoring desk, the student has typically engaged in hours of silent, exhausting cognitive labor that leaves zero trace on the static page:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
  <div class="rounded-xl border border-border bg-card p-4 space-y-2 shadow-sm">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="text-rose-500 font-mono font-bold">01.</span>
      The Premature Deletion Cycle
    </div>
    <p class="text-muted-foreground text-[11px] leading-relaxed">
      A student types three brilliant, tentative sentences exploring an argument, feels a surge of self-doubt about phrasing or vocabulary, hits backspace until the page is blank again, and repeats this cycle twelve times over 45 minutes.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 space-y-2 shadow-sm">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="text-amber-500 font-mono font-bold">02.</span>
      The Thesaurus Fixation
    </div>
    <p class="text-muted-foreground text-[11px] leading-relaxed">
      A writer spends forty minutes obsessively tweaking individual adjectives in an introductory sentence with an online dictionary instead of organizing their core claims, seeking the safety of low-stakes surface edits.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 space-y-2 shadow-sm">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="text-purple-500 font-mono font-bold">03.</span>
      The Structural Abandonment
    </div>
    <p class="text-muted-foreground text-[11px] leading-relaxed">
      A student drafts three disjointed body paragraphs across external note apps, attempts to paste them into the main LMS editor, panics because they lack logical connective tissue, and shuts their laptop in despair.
    </p>
  </div>
</div>

<p>When evaluating only the static final document, even experienced tutors often misdiagnose these deep cognitive blockages as mere &ldquo;laziness,&rdquo; &ldquo;poor time management,&rdquo; or simple &ldquo;grammar weakness.&rdquo;</p>

<p>By contrast, when peer tutors have access to <strong>dynamic writing telemetry</strong>, writing centers gain an empathetic, objective mirror that externalizes the writing process. Writing telemetry transforms an adversarial or awkward interrogation into a collaborative coaching partnership.</p>

<hr class="my-8 border-border" />

<h2>2. Cognitive Psycholinguistics of Writing &amp; Revision Stalls</h2>

<p>To effectively utilize writing process replays in peer tutoring, tutors and writing center directors must understand the cognitive architecture of composition. Writing is not a linear act of transcription; it is an intensely demanding, non-linear problem-solving process that taxes working memory.</p>

<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="text-center font-bold text-foreground text-sm tracking-wide uppercase mb-2">
    Flower &amp; Hayes Cognitive Process Model Under Writing Telemetry
  </div>
  <p class="text-center text-xs text-muted-foreground mb-6">Visualizing how executive working memory overload triggers revision freezes</p>

  <div class="flex flex-col gap-4 text-xs">
    <!-- Task Environment -->
    <div class="rounded-xl bg-muted/40 border border-border p-4 text-center">
      <div class="font-bold text-foreground text-sm mb-1">TASK ENVIRONMENT</div>
      <div class="flex flex-wrap justify-center gap-3 text-muted-foreground text-[11px]">
        <span class="bg-background px-2.5 py-1 rounded-md border border-border">🎯 Assignment Prompt &amp; Audience</span>
        <span class="bg-background px-2.5 py-1 rounded-md border border-border">📊 Rubric &amp; Grading Constraints</span>
        <span class="bg-background px-2.5 py-1 rounded-md border border-border">📝 Text Produced So Far (The Canvas)</span>
      </div>
    </div>

    <!-- Core Process Split -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Planning -->
      <div class="rounded-xl bg-sky-500/10 border border-sky-500/20 p-4 space-y-2">
        <div class="font-bold text-sky-700 dark:text-sky-300 text-sm flex items-center gap-2">
          <span>🧠 1. Planning</span>
        </div>
        <ul class="list-disc pl-4 text-muted-foreground text-[11px] space-y-1">
          <li>Generating ideas &amp; concepts</li>
          <li>Organizing argument hierarchy</li>
          <li>Setting rhetorical goals</li>
        </ul>
        <div class="pt-2 border-t border-sky-500/20 text-[10px] text-sky-600 dark:text-sky-400 font-mono">
          Telemetry: Long contemplation pauses
        </div>
      </div>

      <!-- Translating -->
      <div class="rounded-xl bg-teal-500/10 border border-teal-500/20 p-4 space-y-2">
        <div class="font-bold text-teal-700 dark:text-teal-300 text-sm flex items-center gap-2">
          <span>✍️ 2. Translating</span>
        </div>
        <ul class="list-disc pl-4 text-muted-foreground text-[11px] space-y-1">
          <li>Syntactic clause formulation</li>
          <li>Lexical retrieval &amp; typing</li>
          <li>Converting thoughts to text</li>
        </ul>
        <div class="pt-2 border-t border-teal-500/20 text-[10px] text-teal-600 dark:text-teal-400 font-mono">
          Telemetry: Steady typing sprints (IKI)
        </div>
      </div>

      <!-- Reviewing -->
      <div class="rounded-xl bg-indigo-500/10 border border-indigo-500/20 p-4 space-y-2">
        <div class="font-bold text-indigo-700 dark:text-indigo-300 text-sm flex items-center gap-2">
          <span>🔍 3. Reviewing</span>
        </div>
        <ul class="list-disc pl-4 text-muted-foreground text-[11px] space-y-1">
          <li>Evaluating intent vs. output</li>
          <li>Macro structural reorganizations</li>
          <li>Local editing and proofreading</li>
        </ul>
        <div class="pt-2 border-t border-indigo-500/20 text-[10px] text-indigo-600 dark:text-indigo-400 font-mono">
          Telemetry: Deletions, cuts, relocations
        </div>
      </div>
    </div>

    <!-- Executive Monitor -->
    <div class="rounded-xl bg-rose-500/10 border border-rose-500/20 p-4 text-center">
      <div class="font-bold text-rose-700 dark:text-rose-300 text-sm mb-1">
        THE EXECUTIVE MONITOR (&ldquo;THE INNER CRITIC&rdquo;)
      </div>
      <p class="text-[11px] text-muted-foreground max-w-2xl mx-auto">
        When the executive Monitor triggers <strong>Reviewing prematurely</strong> while the writer is still in the middle of <strong>Translating</strong>, working memory is overwhelmed. The student experiences cognitive paralysis and triggers the <strong>Backspace Spiral</strong>.
      </p>
    </div>
  </div>
</div>

<h3>1. The Flower &amp; Hayes Model and Executive Overload</h3>

<p>In their seminal cognitive framework (Flower &amp; Hayes, 1981), composition is divided into three recursive cognitive subprocesses governed by an executive <strong>Monitor</strong>:</p>
<ol>
  <li><strong>Planning:</strong> Generating abstract concepts, retrieving background knowledge, setting rhetorical objectives, and organizing argument hierarchies.</li>
  <li><strong>Translating:</strong> The physical and linguistic act of converting non-verbal semantic thoughts into linear, syntactically correct text on the page.</li>
  <li><strong>Reviewing:</strong> Reading, evaluating, diagnosing mismatches between intent and output, and editing prose.</li>
</ol>

<h4>The Cognitive Overload Bottleneck</h4>
<p>Expert writers manage these three processes concurrently through cognitive chunking and automated low-level mechanics (spelling, typing, syntactic flow). Novice and reluctant writers, however, possess limited working memory capacity. When the executive <strong>Monitor</strong> triggers the <em>Reviewing</em> subprocess prematurely—evaluating a sentence while the student is still in the vulnerable middle of <em>Translating</em> an idea—the cognitive load spikes uncontrollably. The student experiences working memory exhaustion, and the composing pipeline collapses.</p>

<h3>2. Scardamalia &amp; Bereiter: Knowledge Telling vs. Knowledge Transforming</h3>

<p>Scardamalia and Bereiter (1987) established the crucial distinction between novice and mature composing strategies:</p>

<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="p-4 border-b border-border bg-muted/30">
    <h3 class="text-sm font-semibold text-foreground m-0 p-0">Knowledge Telling vs. Knowledge Transforming Modalities</h3>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-4 w-1/5">Composing Modality</th>
          <th class="p-4 w-1/4">Cognitive Mechanics</th>
          <th class="p-4 w-1/4">Student Mindset</th>
          <th class="p-4 w-3/10 text-teal-600 dark:text-teal-400">Keystroke Replay Signature</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-muted-foreground">
        <tr>
          <td class="p-4 font-bold text-foreground">
            Knowledge Telling<br />
            <span class="font-normal text-[10px] text-muted-foreground">(Novice Default)</span>
          </td>
          <td class="p-4">Direct linear retrieval: the writer retrieves an idea from memory and immediately writes it down sentence-by-sentence with minimal planning or macro-revision.</td>
          <td class="p-4 italic">&ldquo;I just write down everything I know about the topic until I reach the page limit.&rdquo;</td>
          <td class="p-4 font-mono text-[11px] text-foreground">Fast, linear typing with minimal long pauses; revisions are strictly local spelling or word-swapping edits. Zero structural reorganizations.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">
            Knowledge Transforming<br />
            <span class="font-normal text-[10px] text-teal-600 dark:text-teal-400 font-semibold">(Mature Goal)</span>
          </td>
          <td class="p-4">Complex problem-solving: the writer continuously interacts between the content space (what do I know?) and the rhetorical space (how does this affect my argument/audience?).</td>
          <td class="p-4 italic">&ldquo;How does this new evidence change my thesis? I need to restructure my second argument.&rdquo;</td>
          <td class="p-4 font-mono text-[11px] text-teal-600 dark:text-teal-400">Long contemplation pauses, large-scale paragraph reordering, structural deletion bursts, and iterative synthesis from external notes.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p>Reluctant writers frequently stall when an assignment forces them to move from comfortable <strong>Knowledge Telling</strong> into complex <strong>Knowledge Transforming</strong>. Without structured scaffolding, the cognitive leap causes them to freeze. Keystroke telemetry makes this invisible cognitive transition visible and coachable.</p>

<h3>3. The Anatomy of Three Classic Revision Traps</h3>

<p>When students hit cognitive friction points, their struggle manifests in distinct, measurable typing behaviors:</p>

<div class="my-6 space-y-4 text-xs">
  <div class="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4 space-y-2">
    <div class="flex items-center justify-between">
      <div class="font-bold text-rose-700 dark:text-rose-300 text-sm flex items-center gap-2">
        <span class="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-mono">SIGNAL 1</span>
        The Backspace Spiral (Premature Editing Trap)
      </div>
      <span class="text-rose-600 dark:text-rose-400 font-mono text-[11px]">45 mins &bull; 0 net words</span>
    </div>
    <div class="font-mono text-[11px] bg-background/80 p-3 rounded-lg border border-border">
      Keystrokes: [T][h][e][ ][a][u][t][h][o][r][ ][a][r][g][u][e][s] ──▶ [BKSP x 17] ──▶ [EMPTY]
    </div>
    <p class="text-muted-foreground text-[11px]">
      <strong>Cognitive Diagnosis:</strong> The student's internal evaluator operates at 1:1 speed with their ideation engine. Because first drafts are inherently imperfect, the student rejects every emergent formulation before it can be scaffolded by subsequent sentences.
    </p>
  </div>

  <div class="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 space-y-2">
    <div class="flex items-center justify-between">
      <div class="font-bold text-amber-700 dark:text-amber-300 text-sm flex items-center gap-2">
        <span class="px-2 py-0.5 rounded-full bg-amber-600 text-white text-[10px] font-mono">SIGNAL 2</span>
        The Macro-Micro Fixation (Surface Proofreading Illusion)
      </div>
      <span class="text-amber-600 dark:text-amber-400 font-mono text-[11px]">60 mins &bull; Zero structural development</span>
    </div>
    <div class="font-mono text-[11px] bg-background/80 p-3 rounded-lg border border-border">
      Keystrokes: [Double-click "very"] ──▶ [Delete] ──▶ [Types "exceedingly"] ──▶ [Changes font size]
    </div>
    <p class="text-muted-foreground text-[11px]">
      <strong>Cognitive Diagnosis:</strong> High cognitive anxiety. Tackling macro-level structural flaws requires immense working memory and emotional vulnerability. Polishing spelling and punctuation offers immediate psychological gratification without deep revision pain.
    </p>
  </div>

  <div class="rounded-xl border border-sky-500/30 bg-sky-500/5 p-4 space-y-2">
    <div class="flex items-center justify-between">
      <div class="font-bold text-sky-700 dark:text-sky-300 text-sm flex items-center gap-2">
        <span class="px-2 py-0.5 rounded-full bg-sky-600 text-white text-[10px] font-mono">SIGNAL 3</span>
        Inter-Key Interval (IKI) Clustering &amp; Pause Topology
      </div>
      <span class="text-sky-600 dark:text-sky-400 font-mono text-[11px]">Macro pause: 14m 32s</span>
    </div>
    <div class="font-mono text-[11px] bg-background/80 p-3 rounded-lg border border-border">
      Keystrokes: [Word A] (0.2s) [Word B] (0.2s) ──▶ [PAUSE: 14m 32s] ──▶ [Word C] (0.3s)
    </div>
    <p class="text-muted-foreground text-[11px]">
      <strong>Cognitive Diagnosis:</strong> In psycholinguistics, time elapsed between keystrokes (IKI) reveals cognitive processing. Fluency pauses (&lt;2.0s) indicate motor execution; macro pauses (&gt;30s to 10m+) indicate global rhetorical problem-solving or context boundary disorientation.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>3. Checkmark Plagiarism’s Essay Playback™ Suite for Writing Centers</h2>

<p>Checkmark Plagiarism transforms writing telemetry from an opaque, punitive mechanism into an open, student-centered coaching laboratory.</p>

<p>Unlike legacy AI checkers that output an arbitrary, whole-paper percentage (e.g., <em>&ldquo;68% AI Detected&rdquo;</em>) that alienates students and invites confrontation, Checkmark provides a comprehensive, multi-dimensional evidence architecture designed for formative instruction.</p>

<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="text-center font-bold text-foreground text-sm tracking-wide uppercase mb-4">
    Checkmark Plagiarism Multi-Dimensional Writing Suite Architecture
  </div>

  <!-- Timeline Player Mockup -->
  <div class="my-4 rounded-xl bg-slate-950 text-slate-100 p-5 border border-slate-800 shadow-md">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
      <div class="flex items-center gap-2">
        <span class="px-2 py-0.5 rounded bg-teal-500/20 text-teal-400 font-mono text-xs font-bold">ESSAY PLAYBACK™</span>
        <span class="text-xs text-slate-400">Interactive Telemetry Timeline</span>
      </div>
      <div class="flex items-center gap-2 font-mono text-xs text-slate-300">
        <span>⏱️ 00:14:22 / 01:45:00</span>
        <span class="px-1.5 py-0.5 rounded bg-slate-800 text-teal-400 font-bold">4x SPEED</span>
      </div>
    </div>

    <!-- Scrubber Bar -->
    <div class="relative w-full h-3 bg-slate-800 rounded-full my-4 overflow-hidden">
      <div class="absolute left-0 top-0 h-full bg-gradient-to-r from-teal-500 to-emerald-400 w-1/3"></div>
      <div class="absolute left-[33%] top-0 h-full w-2 bg-white shadow-glow"></div>
    </div>

    <!-- Event Tag Chips -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-[11px] font-mono pt-2">
      <div class="rounded-lg bg-slate-900 p-2 border border-slate-800 flex items-center gap-2 text-sky-400">
        <span>📋</span>
        <div>
          <strong class="block text-slate-200">00:04:15</strong>
          <span>[EXTERNAL_NOTES_PASTE]</span>
        </div>
      </div>
      <div class="rounded-lg bg-slate-900 p-2 border border-slate-800 flex items-center gap-2 text-rose-400">
        <span>🔄</span>
        <div>
          <strong class="block text-slate-200">00:18:40</strong>
          <span>[DELETION_BURST]</span>
        </div>
      </div>
      <div class="rounded-lg bg-slate-900 p-2 border border-slate-800 flex items-center gap-2 text-amber-400">
        <span>⏸️</span>
        <div>
          <strong class="block text-slate-200">00:32:10</strong>
          <span>[LONG_PAUSE: 14m 22s]</span>
        </div>
      </div>
      <div class="rounded-lg bg-slate-900 p-2 border border-slate-800 flex items-center gap-2 text-emerald-400">
        <span>🔀</span>
        <div>
          <strong class="block text-slate-200">00:58:05</strong>
          <span>[STRUCTURAL_REORG]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 3 Pillar Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-xs">
    <div class="rounded-xl border border-border bg-background p-4 space-y-2">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="text-teal-600 dark:text-teal-400 font-bold">1.</span>
        Passage-Level AI Slider
      </div>
      <p class="text-muted-foreground text-[11px] leading-relaxed">
        Granular sentence-by-sentence confidence cards evaluating perplexity and burstiness. Features <strong>Honest Guardrails</strong> displaying <code>N/A</code> below ~150 words to eliminate reckless short-text guessing.
      </p>
    </div>

    <div class="rounded-xl border border-border bg-background p-4 space-y-2">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="text-teal-600 dark:text-teal-400 font-bold">2.</span>
        Side-by-Side Plagiarism
      </div>
      <p class="text-muted-foreground text-[11px] leading-relaxed">
        Deep web and scholarly repository comparisons highlighting matching text side-by-side with <strong>Uncited Source Differentiation</strong> to turn citation mistakes into constructive coaching moments.
      </p>
    </div>

    <div class="rounded-xl border border-border bg-background p-4 space-y-2">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="text-teal-600 dark:text-teal-400 font-bold">3.</span>
        AI Rubric Autograder
      </div>
      <p class="text-muted-foreground text-[11px] leading-relaxed">
        Generates formative first-draft rubric scores, criterion breakdowns, and specific prose-anchored suggestions. Remains in draft status until tutor/teacher review with 1-click LMS Grade Passback.
      </p>
    </div>
  </div>
</div>

<h3>Core Innovations for Peer Tutoring &amp; Writing Labs</h3>

<h4>1. 1x–8x Scrubbable Keystroke Timeline Player</h4>
<p>The cornerstone of the suite is the patent-pending <strong>Essay Playback™</strong> engine. Rather than reconstructing crude 10-minute snapshot diffs, Essay Playback™ captures the precise sequence of every keystroke, backspace, cursor movement, text selection, pause, and paste.</p>
<p>Tutors and tutees can scrub through the timeline smoothly at variable speeds (1x, 2x, 4x, 8x), watching the draft assemble dynamically. This allows a 60-minute composing session to be reviewed collaboratively in 3 to 5 minutes, immediately exposing where the student typed with effortless rhetorical flow and where they hit cognitive friction.</p>

<h4>2. Automatic Telemetry Event Markers</h4>
<p>Essay Playback™ automatically annotates the scrubber timeline with color-coded, interactive event markers:</p>
<ul>
  <li><code>[DELETION_BURST]</code>: Identifies rapid, large-scale text erasures (&gt;50 characters erased within seconds), highlighting acute self-doubt or frustration.</li>
  <li><code>[LONG_CONTEMPLATION_PAUSE]</code>: Flags pauses exceeding user-defined thresholds (e.g., 3 minutes, 5 minutes, 10 minutes), marking conceptual bottlenecks.</li>
  <li><code>[STRUCTURAL_REORGANIZATION]</code>: Detects when an existing paragraph or block of text is cut and relocated to a new structural position in the document, signaling authentic Knowledge Transforming.</li>
  <li><code>[EXTERNAL_NOTES_PASTE]</code>: Identifies text inserted from the external clipboard, hyperlinking directly to the paste buffer inspector.</li>
</ul>

<h4>3. External Paste Buffer Tracking with 100% Text Preservation</h4>
<p>One of the greatest sources of false accusations in modern education occurs when students draft outlines, bullet points, or paragraphs in external tools (Notion, Apple Notes, Google Keep, Discord) and paste them into their assignment. Traditional AI detectors flag these large, abrupt insertions as probable LLM generation.</p>

<p>Checkmark Plagiarism solves this definitively by <strong>preserving 100% of the raw pasted text</strong> in a dedicated side-panel inspector. Tutors and instructors can click <code>[EXTERNAL_NOTES_PASTE]</code> to inspect the exact historical clipboard content—even if the student later edited or rewrote every single word. Authentic cognitive labor is permanently vindicated.</p>

<h4>4. The Multi-Factor Verification Triad</h4>

<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="p-4 border-b border-border bg-muted/30">
    <h3 class="text-sm font-semibold text-foreground m-0 p-0">Multi-Factor Integrity &amp; Diagnostics Triad</h3>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-4 w-1/4">Triad Component</th>
          <th class="p-4 w-3/8">Technical Architecture</th>
          <th class="p-4 w-3/8 text-teal-600 dark:text-teal-400">Writing Center Application</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-muted-foreground">
        <tr>
          <td class="p-4 font-bold text-foreground">Passage-Level AI Detection</td>
          <td class="p-4">Sentence-by-sentence linguistic analysis (perplexity, burstiness, syntax diversity) with calibrated confidence sliders. Includes <strong>Honest Guardrails</strong> (<code>N/A</code> displayed below ~150 words).</td>
          <td class="p-4 font-medium text-foreground">Eliminates whole-paper percentage paranoia. Tutors address isolated passages of over-formalized prose without assuming malicious misconduct.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Side-by-Side Plagiarism Matching</td>
          <td class="p-4">Deep web and scholarly scanning matching billions of live pages and peer archives with direct side-by-side quote comparisons and <strong>Uncited Source Differentiation</strong>.</td>
          <td class="p-4 font-medium text-foreground">Tutors use side-by-side comparisons to teach proper quotation integration and APA/MLA citation mechanics, treating citation flaws as coaching moments.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Quote-Anchored Rubric Autograder</td>
          <td class="p-4">Generates formative first-draft rubric scores, criterion breakdowns, and specific prose-anchored suggestions. Remains in draft status until tutor review, with 1-click <strong>LMS Grade Passback</strong>.</td>
          <td class="p-4 font-medium text-foreground">Provides writing center tutors with instant diagnostic scaffolding aligned to the instructor's official rubric, streamlining conference focus.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>4. The 4-Phase Peer Tutoring Replay Protocol</h2>

<p>To ensure writing process telemetry is utilized formatively and empathetically, Writing Center Directors and Peer Tutoring Coordinators should train tutors on the <strong>4-Phase Process Replay Consultation Protocol</strong>.</p>

<div class="my-8 space-y-4 text-xs">
  <!-- Phase 1 -->
  <div class="rounded-xl border border-teal-500/30 bg-card p-5 space-y-3 shadow-sm">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs">1</span>
        Phase 1: Pre-Session Telemetry Scan &amp; Tutee-Led Framing
      </div>
      <span class="px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono text-[11px] font-semibold">Minutes 0–5</span>
    </div>
    <ul class="list-disc pl-5 text-muted-foreground text-[11px] space-y-1">
      <li><strong>Physical Positioning:</strong> Tutor and tutee sit side-by-side. Crucially, <strong>the student holds the mouse</strong> or controls the trackpad.</li>
      <li><strong>The &ldquo;Game Film&rdquo; Metaphor:</strong> Tutor establishes psychological safety: <em>&ldquo;Think of Checkmark's Essay Playback like game film for athletes. We aren't here to judge you; we're watching to see where the drafting felt easy and where you got tackled, so we can build a better play together.&rdquo;</em></li>
      <li><strong>Quick Telemetry Scan:</strong> Check total drafting duration vs. active typing time, pause count, and paste markers.</li>
    </ul>
  </div>

  <!-- Phase 2 -->
  <div class="rounded-xl border border-sky-500/30 bg-card p-5 space-y-3 shadow-sm">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white text-xs">2</span>
        Phase 2: Scrubbing to Friction Points &amp; Event Tag Exploration
      </div>
      <span class="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-[11px] font-semibold">Minutes 5–15</span>
    </div>
    <ul class="list-disc pl-5 text-muted-foreground text-[11px] space-y-1">
      <li><strong>Fast-Forward Fluency:</strong> Scrub at 4x or 8x through passages where typing was steady and fluent.</li>
      <li><strong>Decelerate at Markers:</strong> Slow to 1x speed whenever approaching <code>[DELETION_BURST]</code> or <code>[LONG_CONTEMPLATION_PAUSE]</code> event markers.</li>
      <li><strong>Inspect External Notes:</strong> Click <code>[EXTERNAL_NOTES_PASTE]</code> to verify original outline fragments and phone notes in the raw buffer inspector.</li>
    </ul>
  </div>

  <!-- Phase 3 -->
  <div class="rounded-xl border border-indigo-500/30 bg-card p-5 space-y-3 shadow-sm">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">3</span>
        Phase 3: Metacognitive Verbalization (&ldquo;Think-Aloud&rdquo; Playback)
      </div>
      <span class="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-[11px] font-semibold">Minutes 15–30</span>
    </div>
    <ul class="list-disc pl-5 text-muted-foreground text-[11px] space-y-1">
      <li><strong>Retrospective Think-Aloud:</strong> Student narrates their thought process while watching their past drafting actions on screen.</li>
      <li><strong>Socratic Inquiries:</strong> Tutor asks open-ended questions: <em>&ldquo;I notice the replay paused for 6 minutes after this transition. What two directions was your mind pulling you in?&rdquo;</em></li>
      <li><strong>Diagnose Root Causes:</strong> Separate structural thesis confusion from premature sentence-level self-criticism.</li>
    </ul>
  </div>

  <!-- Phase 4 -->
  <div class="rounded-xl border border-emerald-500/30 bg-card p-5 space-y-3 shadow-sm">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-xs">4</span>
        Phase 4: Forward-Action Strategy &amp; Drafting Blueprint
      </div>
      <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">Minutes 30–45</span>
    </div>
    <ul class="list-disc pl-5 text-muted-foreground text-[11px] space-y-1">
      <li><strong>Zero-Backspace Sprints:</strong> For Backspace Spirals, conduct a 5-minute freewrite where the student is forbidden from hitting backspace.</li>
      <li><strong>Reverse Outlining:</strong> For Macro-Micro Fixation, summarize paragraph functions on paper to check global argument logic.</li>
      <li><strong>Scaffold Action Plan:</strong> Document 3 clear revision goals in the shared writing center portfolio linked to the assignment rubric.</li>
    </ul>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>5. Comprehensive Comparison Matrices</h2>

<h3>Table 1: Traditional Static Draft Consultation vs. Keystroke Telemetry Replay Consultation</h3>

<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-4 w-1/4">Dimension</th>
          <th class="p-4 w-3/8 text-rose-600 dark:text-rose-400">Traditional Static Draft Consultation</th>
          <th class="p-4 w-3/8 text-teal-600 dark:text-teal-400">Keystroke Telemetry Replay Consultation (Essay Playback™)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-muted-foreground">
        <tr>
          <td class="p-4 font-bold text-foreground">Primary Artifact Evaluated</td>
          <td class="p-4">Static text on paper or finished Word/Docs snapshot.</td>
          <td class="p-4 font-medium text-foreground">Dynamic, scrubbable keystroke video timeline with interactive event markers.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Diagnostic Focus</td>
          <td class="p-4"><strong>Product-focused:</strong> Identifies surface grammar, syntax errors, and missing rhetorical components.</td>
          <td class="p-4 font-medium text-foreground"><strong>Process-focused:</strong> Identifies cognitive friction, working memory overload, and revision bottlenecks.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Student Agency &amp; Posture</td>
          <td class="p-4">Passive/Defensive: Student listens to tutor critique or struggles to justify phrasing choices.</td>
          <td class="p-4 font-medium text-teal-600 dark:text-teal-400 font-semibold">Active/Metacognitive: Student holds the scrubber, navigates their own history, and explains their thought process.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Detection of Writer's Block</td>
          <td class="p-4">Invisible: Blank page is attributed to procrastination, lack of preparation, or disinterest.</td>
          <td class="p-4 font-medium text-foreground">Visible: Reveals 2,000+ keystrokes of deleted attempts, proving intense effort and diagnosing the backspace spiral.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Validation of External Notes</td>
          <td class="p-4">Suspect: Pasted paragraphs risk false-positive AI or plagiarism flags from generic detectors.</td>
          <td class="p-4 font-medium text-foreground">Defensible: 100% text preservation of paste buffer proves authentic student outline and notes origin.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Remediation Strategy</td>
          <td class="p-4">Prescriptive editing: Tutor suggests better words or rewrites problematic sentences.</td>
          <td class="p-4 font-medium text-foreground">Strategic coaching: Tutor teaches self-regulation, pause management, and separated drafting/editing phases.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h3>Table 2: Writing Behavior, Telemetry Signature, Underlying Cognitive Barrier, and Targeted Coaching Intervention</h3>

<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-4 w-1/5">Writing Behavior</th>
          <th class="p-4 w-1/4">Keystroke Telemetry Signature</th>
          <th class="p-4 w-1/4">Underlying Cognitive Barrier</th>
          <th class="p-4 w-3/10 text-teal-600 dark:text-teal-400">Targeted Peer Coaching Intervention</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-muted-foreground">
        <tr>
          <td class="p-4 font-bold text-foreground">The Backspace Spiral</td>
          <td class="p-4 font-mono text-[11px]">Rapid bursts of 10–30 chars followed immediately by backspacing; <code>[DELETION_BURST]</code> clusters.</td>
          <td class="p-4"><strong>Premature Evaluation:</strong> Internal editor chokes ideation before complete thoughts can form.</td>
          <td class="p-4 font-medium text-foreground"><strong>Zero-Backspace Sprint:</strong> Challenge student to write 5 mins with no backspacing. Use placeholder brackets <code>[need better word]</code>.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Context Boundary Stall</td>
          <td class="p-4 font-mono text-[11px]">Cursor idles for 8–20 mins following a topic sentence. <code>[LONG_CONTEMPLATION_PAUSE]</code>.</td>
          <td class="p-4"><strong>Rhetorical Disorientation:</strong> Cannot decide which supporting evidence best advances the thesis.</td>
          <td class="p-4 font-medium text-foreground"><strong>Socratic Elevator Pitch:</strong> Ask student to turn away from screen and explain point aloud in two conversational sentences.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Surface Fixation</td>
          <td class="p-4 font-mono text-[11px]">Cursor jumps between finished sentences altering adjectives, commas, or font settings.</td>
          <td class="p-4"><strong>Structural Avoidance:</strong> Subconscious anxiety over unconvincing arguments retreats to low-level mechanics.</td>
          <td class="p-4 font-medium text-foreground"><strong>Reverse Outlining:</strong> Hide text. Have student summarize what Paragraph 1 accomplishes, Paragraph 2 accomplishes, etc.</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Source Integration Paralysis</td>
          <td class="p-4 font-mono text-[11px]">External text pasted, followed by extended cursor hovering and fragmented edits around quote.</td>
          <td class="p-4"><strong>Synthesis Breakdown:</strong> Understands source in isolation but cannot bridge it to authorial voice.</td>
          <td class="p-4 font-medium text-foreground"><strong>Evidence Unpacking Template:</strong> Guide student through: <em>What does it say? Why does it matter? What is the counterargument?</em></td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Mechanical Retyping</td>
          <td class="p-4 font-mono text-[11px]">Uniform speed with zero contemplation pauses or structural edits over 500+ words.</td>
          <td class="p-4"><strong>Second-Screen Copying:</strong> Copying directly from uncredited source, phone, or unauthorized AI output.</td>
          <td class="p-4 font-medium text-foreground"><strong>Restorative Inquiry:</strong> Compare telemetry with side-by-side viewer; prompt student to explain core concepts in their own words.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h3>Table 3: Checkmark Multi-Factor Suite vs. Legacy Integrity Scanners in Writing Center Settings</h3>

<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-4 w-1/4">Feature / Metric</th>
          <th class="p-4 w-1/4 text-rose-600 dark:text-rose-400">Legacy Black-Box AI Detectors</th>
          <th class="p-4 w-1/4 text-muted-foreground">Default Revision History (GDocs)</th>
          <th class="p-4 w-1/4 text-teal-600 dark:text-teal-400">Checkmark Plagiarism &amp; Essay Playback™</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-muted-foreground">
        <tr>
          <td class="p-4 font-bold text-foreground">Primary Output</td>
          <td class="p-4 text-rose-600 dark:text-rose-400 font-medium">Single opaque score (e.g., &ldquo;84% AI&rdquo;)</td>
          <td class="p-4">Periodic snapshot diffs (every 5–15 mins)</td>
          <td class="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Continuous scrubbable keystroke video + multi-factor evidence cards</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">External Paste Handling</td>
          <td class="p-4 text-rose-600 dark:text-rose-400">Flags pasted text as probable AI or plagiarism</td>
          <td class="p-4">Shows massive text block appearing instantly</td>
          <td class="p-4 font-medium text-foreground"><strong>100% Text Preservation Buffer:</strong> Captures raw clipboard text with 1-click jump</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Short-Text Protection</td>
          <td class="p-4 text-rose-600 dark:text-rose-400">High false-positive rate on passages &lt;150w</td>
          <td class="p-4">No short-text differentiation</td>
          <td class="p-4 font-medium text-foreground"><strong>Honest Guardrails:</strong> Displays <code>N/A</code> under ~150w to prevent unreliable guessing</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">AI Detection Granularity</td>
          <td class="p-4 text-rose-600 dark:text-rose-400">Global percentage score with no local context</td>
          <td class="p-4">None</td>
          <td class="p-4 font-medium text-foreground"><strong>Passage-Level Sliders:</strong> Visual confidence sliders for specific sentences</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">Formative Grading Support</td>
          <td class="p-4 text-rose-600 dark:text-rose-400">None (purely disciplinary)</td>
          <td class="p-4">None</td>
          <td class="p-4 font-medium text-foreground"><strong>Draft Rubric Autograder:</strong> Quote-anchored feedback with Canvas/Buzz LMS passback</td>
        </tr>
        <tr>
          <td class="p-4 font-bold text-foreground">FERPA &amp; Privacy Guarantee</td>
          <td class="p-4 text-rose-600 dark:text-rose-400">May store student essays to train AI models</td>
          <td class="p-4">Cloud vendor storage</td>
          <td class="p-4 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>Zero Model Training:</strong> Submissions never train public LLMs; fully FERPA/COPPA compliant</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. Real-World Case Studies &amp; Field Transcripts</h2>

<h3>Case Study 1: The University Writing Center &mdash; Overcoming the 60-Minute &ldquo;Thesis Statement Block&rdquo;</h3>

<div class="my-6 rounded-2xl bg-card border border-border p-6 shadow-sm space-y-4">
  <div class="flex items-center justify-between pb-3 border-b border-border">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 font-mono text-xs">CASE 1</span>
      Marcus &bull; First-Year Composition Seminar
    </div>
    <span class="text-xs text-muted-foreground">Issue: Missing deadline, 2 sentences written</span>
  </div>

  <p class="text-xs text-muted-foreground">
    Marcus brought a draft with only two introductory sentences to a 45-minute writing center consultation. His instructor had flagged his initial submission for missing the deadline, noting that Marcus <em>&ldquo;seemed disengaged and unprepared.&rdquo;</em>
  </p>

  <div class="rounded-xl bg-slate-950 text-slate-100 p-4 font-mono text-[11px] space-y-1.5 border border-slate-800">
    <div class="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-2">Essay Playback™ Telemetry Audit:</div>
    <div>00:00:00 ──▶ [EXTERNAL_NOTES_PASTE] (4 bullet points from syllabus prompt)</div>
    <div>00:02:15 ──▶ Types: &ldquo;In modern society, social media affects how teenagers view politics.&rdquo;</div>
    <div class="text-rose-400">00:03:00 ──▶ [DELETION_BURST] (Deletes &ldquo;view politics&rdquo; ── replaces with &ldquo;engage with democracy.&rdquo;)</div>
    <div>00:05:30 ──▶ Types: &ldquo;This is because algorithms create echo chambers that...&rdquo;</div>
    <div class="text-rose-400">00:06:10 ──▶ [DELETION_BURST] (Deletes entire second sentence via backspace: 58 characters)</div>
    <div>00:08:45 ──▶ Types: &ldquo;According to recent studies, algorithmic polarization is...&rdquo;</div>
    <div class="text-rose-400">00:09:20 ──▶ [DELETION_BURST] (Deletes entire sentence again: 64 characters)</div>
    <div class="text-amber-400">00:10:00 ──▶ [LONG_CONTEMPLATION_PAUSE: 18m 42s] (Cursor sits motionless at end of sentence 1)</div>
    <div>00:28:42 ──▶ Types: &ldquo;Therefore, algorithms are bad for democracy.&rdquo;</div>
    <div class="text-rose-400">00:29:10 ──▶ [DELETION_BURST] (Deletes: &ldquo;Therefore, algorithms are bad for democracy.&rdquo;)</div>
    <div class="text-teal-400 pt-1 border-t border-slate-800">00:30:00 ──▶ Session ends. Net words produced: 14 words. Total keystrokes: 1,248.</div>
  </div>

  <div class="rounded-xl bg-muted/40 p-4 border border-border space-y-3 text-xs">
    <div class="font-bold text-foreground">Diagnostic Consultation Transcript:</div>
    <p class="text-muted-foreground">
      <strong>Peer Tutor (Elena):</strong> <em>&ldquo;Hey Marcus, thanks for coming in. Looking at your Checkmark Playback replay, you didn't just stare at a blank screen—you typed over 1,200 keystrokes and drafted four completely different versions of your thesis! Look right here at minute 05:30: 'This is because algorithms create echo chambers...' and then at minute 08:45 you brought in 'algorithmic polarization.' Let's watch this 18-minute pause together. What was happening in your head right here?&rdquo;</em>
    </p>
    <p class="text-muted-foreground">
      <strong>Marcus (Relieved):</strong> <em>&ldquo;Honestly? Every time I tried to explain what the algorithms do, it sounded like a middle school essay. I knew what I wanted to say—that social media actively radicalizes people by hiding opposing views—but every time I typed it out, I hated how it looked on screen, so I just kept hitting backspace.&rdquo;</em>
    </p>
    <p class="text-muted-foreground">
      <strong>Elena (Tutor):</strong> <em>&ldquo;Your brain was trying to do two massive jobs at the exact same second: invent the idea AND polish phrasing like a published article. Look at how clear your verbal explanation was! Let's do a 5-minute sprint right now. We'll put that exact sentence on screen with zero backspacing allowed.&rdquo;</em>
    </p>
  </div>

  <div class="font-medium text-emerald-600 dark:text-emerald-400 text-xs">
    ✨ Outcome: Marcus drafted 450 words of robust argumentative prose in the remaining 25 minutes of the session.
  </div>
</div>

<h3>Case Study 2: The High School Peer Tutoring Lab &mdash; The 10th Grade &ldquo;Macro-Micro Fixation&rdquo; in AP Literature</h3>

<div class="my-6 rounded-2xl bg-card border border-border p-6 shadow-sm space-y-4">
  <div class="flex items-center justify-between pb-3 border-b border-border">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 font-mono text-xs">CASE 2</span>
      Sophia &bull; 10th Grade Honors English
    </div>
    <span class="text-xs text-muted-foreground">Issue: Sunk cost of polished prose, stalled conclusion</span>
  </div>

  <p class="text-xs text-muted-foreground">
    Sophia scheduled an appointment before submitting a 1,200-word paper on <em>The Great Gatsby</em>. Her mid-draft feedback indicated a disjointed thesis, but Sophia believed she only needed help <em>&ldquo;fixing a few awkward sentences.&rdquo;</em>
  </p>

  <div class="rounded-xl bg-slate-950 text-slate-100 p-4 font-mono text-[11px] space-y-1.5 border border-slate-800">
    <div class="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-2">Essay Playback™ Telemetry Audit:</div>
    <div>00:00:00 - 00:45:00 ──▶ Fluent drafting of Paragraphs 1, 2, and 3 (Steady typing)</div>
    <div class="text-amber-400">00:45:10 - 01:30:00 ──▶ [MICRO_EDITING_LOOP] (45 minutes spent inside Paragraphs 1 &amp; 2):</div>
    <div class="pl-4 text-slate-300">&bull; Double-clicks &ldquo;shows&rdquo; ──▶ Replaces with &ldquo;demonstrates&rdquo;</div>
    <div class="pl-4 text-slate-300">&bull; Double-clicks &ldquo;demonstrates&rdquo; ──▶ Replaces with &ldquo;exemplifies&rdquo;</div>
    <div class="pl-4 text-slate-300">&bull; Changes comma to semicolon at line 14; re-reads Paragraph 1 four times</div>
    <div class="pl-4 text-rose-400">&bull; Zero modifications made to Paragraph 4 (which abruptly ends mid-thought)</div>
  </div>

  <div class="rounded-xl bg-muted/40 p-4 border border-border space-y-3 text-xs">
    <div class="font-bold text-foreground">Diagnostic Consultation Transcript:</div>
    <p class="text-muted-foreground">
      <strong>Peer Tutor (Jordan):</strong> <em>&ldquo;Sophia, your vocabulary choices are fantastic. But looking at your Essay Playback timeline, from minute 45 to 90 you stayed entirely inside Paragraphs 1 and 2 swapping words like 'demonstrates' and 'exemplifies' six times. Meanwhile, Paragraph 4 stopped right in the middle. Why do you think your attention kept pulling backward to the intro?&rdquo;</em>
    </p>
    <p class="text-muted-foreground">
      <strong>Sophia:</strong> <em>&ldquo;Because every time I started Paragraph 4, I realized my analysis of Daisy didn't match what I said in my thesis. But I had already worked so hard making Paragraph 1 sound pretty that rewriting it made me want to cry. So I just kept tweaking words hoping it would magically fix the connection.&rdquo;</em>
    </p>
    <p class="text-muted-foreground">
      <strong>Jordan (Tutor):</strong> <em>&ldquo;That is the 'sunk cost' of beautiful sentences. Let's use Checkmark's split-screen view. What if we change your thesis to match what you actually discovered while writing Paragraph 4?&rdquo;</em>
    </p>
  </div>

  <div class="font-medium text-emerald-600 dark:text-emerald-400 text-xs">
    ✨ Outcome: The tutor guided Sophia through a 20-minute structural reorganization, revising her thesis to match her mature textual insights.
  </div>
</div>

<h3>Case Study 3: The Reluctant / ELL Writer &mdash; Overcoming Blank-Page Paralysis via External Scratchpads</h3>

<div class="my-6 rounded-2xl bg-card border border-border p-6 shadow-sm space-y-4">
  <div class="flex items-center justify-between pb-3 border-b border-border">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-600 dark:text-sky-400 font-mono text-xs">CASE 3</span>
      Devon &bull; ELL Student with ADHD
    </div>
    <span class="text-xs text-muted-foreground">Issue: Generic scanner flagged 81% AI on pasted notes</span>
  </div>

  <div class="rounded-xl bg-slate-950 text-slate-100 p-4 font-mono text-[11px] space-y-2 border border-slate-800">
    <div class="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Checkmark Paste Buffer Inspector (Moment of Paste at 00:04:12):</div>
    <div class="p-2.5 rounded bg-slate-900 border border-slate-800 text-sky-300 text-[11px]">
      &ldquo;my argument is that wind solar is better than coal because 1st cost is lower now in 2024 lazard report say solar $24 per megawatt coal is $65. 2nd pollution make asthma in city kids like my cousin in newark. 3rd batteries getting better tesla megapack...&rdquo;
    </div>
    <div class="text-emerald-400 pt-1">
      Subsequent Replay (00:05:00 - 00:48:30): 43 minutes of active sentence-by-sentence expansion, 112 dictionary lookups, and polish into formal academic prose.
    </div>
  </div>

  <div class="rounded-xl bg-muted/40 p-4 border border-border space-y-3 text-xs">
    <div class="font-bold text-foreground">Diagnostic Consultation Transcript:</div>
    <p class="text-muted-foreground">
      <strong>Peer Tutor (Aaliyah):</strong> <em>&ldquo;When we open Checkmark's Paste Buffer Inspector, it captured your original bullet notes from your phone: 'cost is lower now... pollution make asthma in city kids.' And then we watch you spend 43 minutes looking up academic terms and transforming those rough notes into full sentences.&rdquo;</em>
    </p>
    <p class="text-muted-foreground">
      <strong>Devon (Emotional):</strong> <em>&ldquo;I was so scared I was going to get expelled. I write notes in Spanish and rough English on my phone on the bus because staring at the Canvas box gives me anxiety. Then I paste them in and use my dictionary. The other AI detector said I cheated, but I worked on this for five days!&rdquo;</em>
    </p>
    <p class="text-muted-foreground">
      <strong>Aaliyah (Tutor):</strong> <em>&ldquo;You did the exact work of an authentic researcher. Checkmark's replay proves 100% of your cognitive labor. Let's export this Process Dossier and send it to Professor Davis right now.&rdquo;</em>
    </p>
  </div>

  <div class="font-medium text-emerald-600 dark:text-emerald-400 text-xs">
    ✨ Outcome: The student was completely exonerated. The instructor updated Devon's gradebook record in Canvas with full credit.
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. Tutor Training Guide, Restorative Dialogue Scripts &amp; Pedagogical Scaffolding</h2>

<p>Writing Center Directors and Peer Lab Coordinators must train undergraduate tutors and peer fellows to ensure writing telemetry is applied supportively. Tutors must never adopt the posture of an interrogator or compliance auditor.</p>

<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="text-center font-bold text-foreground text-sm tracking-wide uppercase mb-6">
    Tutor Conversational Posture: Adversarial vs. Restorative
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
    <!-- Adversarial Posture -->
    <div class="rounded-xl bg-rose-500/10 border border-rose-500/20 p-4 space-y-3">
      <div class="font-bold text-rose-700 dark:text-rose-300 text-sm flex items-center gap-2">
        <span>❌ Adversarial / Punitive Posture</span>
      </div>
      <p class="text-rose-900/80 dark:text-rose-200/80 text-[11px]">Destroys trust, increases defensive shutdown:</p>
      <ul class="list-disc pl-4 text-muted-foreground text-[11px] space-y-2">
        <li><em>&ldquo;Why did you paste 300 words all at once at minute 4?&rdquo;</em></li>
        <li><em>&ldquo;The AI detector flagged this paragraph at 75%. Did you use ChatGPT?&rdquo;</em></li>
        <li><em>&ldquo;You didn't do anything for 25 minutes here. Were you on your phone?&rdquo;</em></li>
      </ul>
    </div>

    <!-- Restorative Posture -->
    <div class="rounded-xl bg-teal-500/10 border border-teal-500/20 p-4 space-y-3">
      <div class="font-bold text-teal-700 dark:text-teal-300 text-sm flex items-center gap-2">
        <span>✔️ Restorative / Formative Posture</span>
      </div>
      <p class="text-teal-900/80 dark:text-teal-200/80 text-[11px]">Builds psychological safety and metacognition:</p>
      <ul class="list-disc pl-4 text-muted-foreground text-[11px] space-y-2">
        <li><em>&ldquo;I see an external paste marker here. Let's check your paste buffer together—did you bring these notes in from your phone or outline doc?&rdquo;</em></li>
        <li><em>&ldquo;Checkmark highlighted this paragraph for formal sentence patterns. Let's read it aloud—does this sound like your speaking voice, or were you trying to sound fancy?&rdquo;</em></li>
        <li><em>&ldquo;Let's watch this 25-minute pause together. What was the toughest question you were trying to solve before writing the next sentence?&rdquo;</em></li>
      </ul>
    </div>
  </div>
</div>

<h3>Restorative Dialogue Scripts for Common Telemetry Scenarios</h3>

<div class="my-6 space-y-4 text-xs">
  <div class="rounded-xl border border-border bg-card p-4 space-y-2 shadow-sm">
    <div class="font-bold text-foreground flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-[10px]">SCRIPT 1</span>
      Addressing the Marathon Pause (<code>[LONG_CONTEMPLATION_PAUSE]</code>)
    </div>
    <p class="text-muted-foreground text-[11px]">
      <strong>Tutor:</strong> <em>&ldquo;Let's look at minute 22. The replay shows you stopped typing right after introducing this statistic, and the cursor stayed here for 12 minutes. Take me back to that moment: what questions were running through your mind?&rdquo;</em><br />
      <strong>Tutee:</strong> <em>&ldquo;I realized the statistic contradicted what I said in my intro, and I didn't know whether to delete the intro or the stat.&rdquo;</em><br />
      <strong>Tutor:</strong> <em>&ldquo;That is a brilliant realization! That is what real academic research feels like. Let's turn that contradiction into a strong counterargument paragraph.&rdquo;</em>
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 space-y-2 shadow-sm">
    <div class="font-bold text-foreground flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-[10px]">SCRIPT 2</span>
      Addressing Large Deletion Clusters (<code>[DELETION_BURST]</code>)
    </div>
    <p class="text-muted-foreground text-[11px]">
      <strong>Tutor:</strong> <em>&ldquo;I noticed three big red deletion markers right when you were working on body paragraph 2. You drafted 150 words and deleted the whole block. Do you remember what made you hit reset?&rdquo;</em><br />
      <strong>Tutee:</strong> <em>&ldquo;I felt like I was repeating myself and rambling.&rdquo;</em><br />
      <strong>Tutor:</strong> <em>&ldquo;Let's recover that core idea from the playback history. Look at this sentence before you deleted it: 'The main problem is that nobody takes responsibility.' That wasn't rambling—that was your central claim! Let's build on that.&rdquo;</em>
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 space-y-2 shadow-sm">
    <div class="font-bold text-foreground flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono text-[10px]">SCRIPT 3</span>
      Addressing High AI Confidence Passage Highlights
    </div>
    <p class="text-muted-foreground text-[11px]">
      <strong>Tutor:</strong> <em>&ldquo;Checkmark highlighted these two sentences because the phrasing is very uniform and predictable. Were you using an automated rephraser, or trying to copy the style of the medical journal you were reading?&rdquo;</em><br />
      <strong>Tutee:</strong> <em>&ldquo;I was reading a medical study and trying to make my paper sound just as smart, so I used some of their phrasing.&rdquo;</em><br />
      <strong>Tutor:</strong> <em>&ldquo;That's called 'patchwriting,' and it's a completely normal stage of learning complex topics. Let's practice translating those medical concepts into your own voice.&rdquo;</em>
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Institutional Implementation &amp; LMS Workflow (Canvas, Buzz, Google Classroom)</h2>

<p>To implement Checkmark Plagiarism and Essay Playback™ across an institution's writing support infrastructure, writing center directors and IT administrators should follow an integrated six-step technical workflow:</p>

<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="text-center font-bold text-foreground text-sm tracking-wide uppercase mb-6">
    Institutional Writing Center LMS Integration Workflow
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
    <div class="rounded-xl bg-background border border-border p-4 space-y-1.5">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-[11px]">1</span>
        Assignment Provision
      </div>
      <p class="text-muted-foreground text-[11px] leading-relaxed">
        Instructor configures Checkmark LTI 1.3 in Canvas, Buzz, or Google Classroom with assignment rubric attached.
      </p>
    </div>

    <div class="rounded-xl bg-background border border-border p-4 space-y-1.5">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-[11px]">2</span>
        Writing Lab Sync
      </div>
      <p class="text-muted-foreground text-[11px] leading-relaxed">
        Student books writing center appointment; telemetry dossier auto-links directly to the tutor dashboard.
      </p>
    </div>

    <div class="rounded-xl bg-background border border-border p-4 space-y-1.5">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-[11px]">3</span>
        Consultation Replay
      </div>
      <p class="text-muted-foreground text-[11px] leading-relaxed">
        Tutor &amp; student launch Essay Playback™ directly from the appointment portal with 1-click student-controlled scrubber.
      </p>
    </div>

    <div class="rounded-xl bg-background border border-border p-4 space-y-1.5">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-[11px]">4</span>
        Formative Action Plan
      </div>
      <p class="text-muted-foreground text-[11px] leading-relaxed">
        Tutor &amp; student log post-conference revision goals and draft rubric notes inside the student portfolio.
      </p>
    </div>

    <div class="rounded-xl bg-background border border-border p-4 space-y-1.5">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-[11px]">5</span>
        Instructor Review
      </div>
      <p class="text-muted-foreground text-[11px] leading-relaxed">
        Instructor reviews Checkmark verification report accompanied by formative writing center conference notes.
      </p>
    </div>

    <div class="rounded-xl bg-background border border-border p-4 space-y-1.5">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-[11px]">6</span>
        Gradebook Passback
      </div>
      <p class="text-muted-foreground text-[11px] leading-relaxed">
        Final approved grades and rubric feedback sync straight into Canvas / Buzz Gradebook with 1-click passback.
      </p>
    </div>
  </div>
</div>

<h3>Technical Setup Specifications:</h3>
<ol>
  <li><strong>LTI 1.3 Deep Linking:</strong> Checkmark integrates seamlessly into Canvas LMS, Agilix Buzz, and Google Classroom via standard LTI 1.3 protocols. Instructors enable Checkmark on writing assignments with a single checkbox.</li>
  <li><strong>Native Extension &amp; Editor Capture:</strong> Writing telemetry is captured transparently whether students compose directly within the LMS rich text editor, embedded Google Docs, or Microsoft Word via Checkmark’s native writing environment.</li>
  <li><strong>FERPA &amp; Privacy Guardrails:</strong> All writing telemetry and keystroke logs are encrypted end-to-end (AES-256 in transit and at rest). Student data is strictly isolated within the institution's tenant and <strong>is never shared with third parties or used to train commercial AI/LLM models</strong>.</li>
  <li><strong>Draft-Only Rubric Autograding:</strong> Checkmark's AI-assisted rubric recommendations remain strictly in &ldquo;Draft&rdquo; status. Tutors and instructors retain 100% final grading authority, with one-click direct gradebook passback once scores are approved.</li>
</ol>

<hr class="my-8 border-border" />

<h2>9. Frequently Asked Questions (FAQ)</h2>

<div class="my-8 space-y-4 text-xs">
  <div class="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">Q1:</span>
      Doesn't recording student keystrokes feel like surveillance or an invasion of privacy?
    </div>
    <p class="text-muted-foreground text-[11px] leading-relaxed">
      <strong>A:</strong> When implemented through Checkmark's formative writing center framework, keystroke telemetry is explicitly repositioned from surveillance to <strong>student empowerment</strong>. Keystroke telemetry operates identically to an athletic team reviewing &ldquo;game film&rdquo; or a music instructor analyzing a rehearsal recording. Crucially, Checkmark ensures that telemetry logs are strictly private to the student and their authorized instructors, submissions are never cached in public databases or used to train AI models, and the student controls the playback scrubber during consultations to advocate for their own authentic effort.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">Q2:</span>
      How does Essay Playback™ help non-native English speakers (ELL / Multilingual Writers)?
    </div>
    <p class="text-muted-foreground text-[11px] leading-relaxed">
      <strong>A:</strong> Multilingual writers are disproportionately harmed by generic AI detectors, which regularly flag their standard, grammatically formal prose as &ldquo;machine-generated.&rdquo; Essay Playback™ provides absolute protection by recording their authentic composing journey: pausing to select vocabulary, consulting bilingual reference dictionaries, and revising syntax. This proves the essay was constructed through painstaking human cognitive effort and dispels false accusations immediately.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">Q3:</span>
      How do tutors differentiate between an authentic pause to think vs. a student being distracted?
    </div>
    <p class="text-muted-foreground text-[11px] leading-relaxed">
      <strong>A:</strong> In writing psycholinguistics, cognitive pauses are contextualized by the keystrokes immediately surrounding them. In an authentic cognitive pause, a student pauses for 6 minutes after a complex claim and resumes with a relevant supporting sentence. In an off-task interruption, the student pauses mid-word and returns to backspace and re-orient. In peer tutoring, tutors do not police off-task time; they use pause clusters to ask: <em>&ldquo;What question were you trying to answer right here?&rdquo;</em>
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">Q4:</span>
      What if a student drafts their entire essay on paper or in a separate app and pastes it in at once?
    </div>
    <p class="text-muted-foreground text-[11px] leading-relaxed">
      <strong>A:</strong> Checkmark's <strong>External Paste Buffer Inspector</strong> preserves 100% of the raw pasted text. The tutor can inspect the paste buffer to verify that the pasted material matches the student's authentic notes or outline. If the student subsequently edits or polishes that text inside the editor, Essay Playback™ records the ongoing revision history.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">Q5:</span>
      How does Checkmark's passage-level AI detection differ from generic whole-paper percentage scores?
    </div>
    <p class="text-muted-foreground text-[11px] leading-relaxed">
      <strong>A:</strong> Generic detectors return a single, opaque score (e.g., &ldquo;85% AI&rdquo;), which provides zero actionable feedback and encourages confrontational accusations. Checkmark uses <strong>Passage-Level Confidence Sliders</strong> with specific linguistic evidence cards explaining perplexity and burstiness. Passages under ~150 words display an honest <code>N/A</code> guardrail rather than guessing recklessly on inadequate samples.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">Q6:</span>
      Can peer tutors use Checkmark if the instructor uses Canvas LMS or Buzz LMS rubrics?
    </div>
    <p class="text-muted-foreground text-[11px] leading-relaxed">
      <strong>A:</strong> Yes. Checkmark features native, bidirectional integration with Canvas LMS, Agilix Buzz, and Google Classroom. Tutors and instructors can import existing institutional rubrics with a single click. Checkmark's AI Autograder generates draft criterion scores and quote-anchored feedback aligned directly with the teacher's rubric.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
    <div class="font-bold text-foreground text-sm flex items-center gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">Q7:</span>
      How long does it take to train peer tutors to use Essay Playback™ effectively?
    </div>
    <p class="text-muted-foreground text-[11px] leading-relaxed">
      <strong>A:</strong> Most peer tutoring centers complete tutor onboarding in a single 60-minute training workshop covering: navigating the 1x–8x scrubber and event markers, adopting restorative inquiry scripts, and conducting the 4-Phase Process Replay Consultation within standard appointment timeframes.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>10. Summary &amp; Implementation Checklist for Writing Center Directors</h2>

<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm space-y-5">
  <div class="text-center font-bold text-foreground text-sm tracking-wide uppercase pb-2 border-b border-border">
    Writing Center Essay Playback™ Implementation Checklist
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
    <div class="rounded-xl bg-background border border-border p-4 space-y-2">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="text-teal-600 dark:text-teal-400 font-bold font-mono">01.</span>
        Pedagogical Policy &amp; Framing
      </div>
      <ul class="space-y-1 text-muted-foreground text-[11px]">
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Update Writing Center mission to reflect process transparency.</li>
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Frame Essay Playback™ as &ldquo;athletic game film&rdquo; for writers.</li>
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Establish student data ownership: tutee controls the scrubber.</li>
      </ul>
    </div>

    <div class="rounded-xl bg-background border border-border p-4 space-y-2">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="text-teal-600 dark:text-teal-400 font-bold font-mono">02.</span>
        Technical LMS &amp; LTI 1.3 Config
      </div>
      <ul class="space-y-1 text-muted-foreground text-[11px]">
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Deploy Checkmark LTI 1.3 across Canvas, Buzz, or Classroom.</li>
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Enable native Google Docs &amp; rich-text telemetry capture.</li>
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Verify FERPA/COPPA zero-data-retention compliance guarantees.</li>
      </ul>
    </div>

    <div class="rounded-xl bg-background border border-border p-4 space-y-2">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="text-teal-600 dark:text-teal-400 font-bold font-mono">03.</span>
        Tutor Onboarding &amp; Training
      </div>
      <ul class="space-y-1 text-muted-foreground text-[11px]">
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Conduct 60-min workshop on 4-Phase Process Replay Protocol.</li>
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Practice Socratic dialogue scripts for Backspace Spirals.</li>
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Train tutors on inspecting External Paste Buffers.</li>
      </ul>
    </div>

    <div class="rounded-xl bg-background border border-border p-4 space-y-2">
      <div class="font-bold text-foreground flex items-center gap-2">
        <span class="text-teal-600 dark:text-teal-400 font-bold font-mono">04.</span>
        Integrated Consultation Workflow
      </div>
      <ul class="space-y-1 text-muted-foreground text-[11px]">
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Integrate Checkmark process replays into pre-intake forms.</li>
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Align post-conference action plans with instructor rubrics.</li>
        <li class="flex items-start gap-2"><span class="text-teal-600 dark:text-teal-400">☑</span> Utilize direct LMS passback for verified formative milestones.</li>
      </ul>
    </div>
  </div>
</div>

<div class="my-8 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 p-6 text-white text-center shadow-lg border border-teal-500/30">
  <h3 class="text-lg font-bold mb-2 text-white">Empower Your Writing Center with Process-First Telemetry</h3>
  <p class="text-xs text-slate-300 max-w-xl mx-auto mb-4 leading-relaxed">
    Transition your tutoring lab from static draft autopsies to dynamic, empathetic composing replays. Build self-regulated, confident writers with Checkmark Plagiarism.
  </p>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a href="/services/writing-playback" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-colors shadow-sm">
      Explore Essay Playback™
    </a>
    <a href="/contact" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors border border-white/20">
      Request Writing Center Pilot
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
      currentSlug="2026/8/how-can-peer-tutoring-centers-use-keystroke-playback-replays-to-coach-reluctant-writers-through-revision-stalls"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
