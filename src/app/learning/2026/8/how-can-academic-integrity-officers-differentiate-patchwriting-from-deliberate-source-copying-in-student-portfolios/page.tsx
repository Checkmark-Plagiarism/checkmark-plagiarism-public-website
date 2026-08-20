import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Academic Integrity Officers Differentiate Patchwriting From Deliberate Source Copying in Student Portfolios? | Checkmark Plagiarism",
  description: "An authoritative guide for Academic Integrity Officers, Honor Council Panels, and Department Chairs on differentiating developmental patchwriting from deliberate source copying in cumulative student writing portfolios using longitudinal forensics, Essay Playback™, and multi-vector source verification.",
  keywords: [
    "patchwriting vs deliberate copying",
    "academic integrity officer portfolio review",
    "student writing portfolios",
    "Rebecca Moore Howard patchwriting",
    "David Bartholomae Inventing the University",
    "Essay Playback",
    "keystroke dynamics",
    "multi-draft plagiarism detection",
    "mosaic plagiarism forensics",
    "honor council adjudication rubric",
    "Checkmark Plagiarism",
    "restorative academic integrity",
    "Citation Project",
  ],
  openGraph: {
    images: ["/images/services/report-source-quote.png"],
  },
};

const meta = {
  title: "How Can Academic Integrity Officers Differentiate Patchwriting From Deliberate Source Copying in Student Portfolios? | Checkmark Plagiarism",
  description: "An authoritative guide for Academic Integrity Officers, Honor Council Panels, and Department Chairs on differentiating developmental patchwriting from deliberate source copying in cumulative student writing portfolios using longitudinal forensics, Essay Playback™, and multi-vector source verification.",
  "opengraph-image": "/images/services/report-source-quote.png",
  date: "08-18-2026",
  readTime: "~18 min read",
  category: "Academic Integrity",
  categories: ["Academic Integrity", "Higher Education Leadership", "Writing Program Administration", "Plagiarism Detection", "Pedagogy"],
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
    In higher education institutions, secondary schools, and competitive academic programs, <strong>cumulative student writing portfolios</strong>, <strong>senior capstones</strong>, and <strong>multi-draft research dossiers</strong> represent the gold standard of authentic assessment. However, when academic integrity officers, honor council panels, and department chairs evaluate portfolios at major milestones—such as graduation clearances, program gateway defenses, or writing-across-the-curriculum (WAC) audits—they frequently confront a high-stakes forensic dilemma: automated similarity reports flagging extensive overlapping text across semesters, course sections, and scholarly databases.
  </p>
  <p class="text-foreground font-medium leading-relaxed mt-3">
    Legacy plagiarism scanners collapse these submissions into a single punitive percentage, failing to distinguish between <strong>developmental patchwriting</strong> (the cognitive, transitional process of wrestling with unfamiliar disciplinary discourse) and <strong>deliberate source copying</strong> (intentional mosaic plagiarism, contract cheating, or automated paraphrasing). Grounded in the foundational research of <strong>David Bartholomae</strong>, <strong>Rebecca Moore Howard</strong>, and the multi-institutional <strong>Citation Project</strong>, this guide provides academic leaders with an evidence-based forensic framework. By integrating <strong>Checkmark Plagiarism’s</strong> multi-draft source verification workbench, discrete visual citation badges (<strong>Quoted &amp; Cited</strong>, <strong>Cited but Unquoted</strong>, <strong>Uncited External Match</strong>, <strong>Peer Cohort Match</strong>), patent-pending <a href="/services/writing-process" class="text-primary font-semibold underline"><strong>Essay Playback™</strong></a> keystroke dynamics, raw clipboard paste preservation, and passage-level AI detection, institutions can move from punitive guesswork to transparent, defensible adjudication that upholds academic standards while fostering student growth.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> empowers academic leadership and faculty with an integrated authorship verification ecosystem, combining <a href="/services/plagiarism-detection" class="text-primary font-semibold underline">side-by-side source verification</a> with <a href="/services/writing-process" class="text-primary font-semibold underline">keystroke process playback</a>, <a href="/services/ai-detection" class="text-primary font-semibold underline">passage-level AI writing detection</a>, <a href="/services/autograder" class="text-primary font-semibold underline">quote-anchored rubric autograding</a>, and direct LTI 1.3 integrations for <a href="/services/integrations/canvas-lms" class="text-primary font-semibold underline">Canvas LMS</a> and <a href="/services/integrations/buzz-lms" class="text-primary font-semibold underline">Agilix Buzz LMS</a>.</p>

<img src="/images/services/report-source-quote.png" alt="Checkmark Plagiarism Side-by-Side Source Verification Workbench and Evidence Card View" class="w-full rounded-2xl border border-border shadow-md my-8" />

<h2>1. The High-Stakes Institutional Dilemma: Evaluating Portfolios at Scale</h2>

<p>Writing portfolios occupy a vital position in modern educational assessment. Unlike single-assignment essays evaluated in isolation, portfolios aggregate reflective essays, preliminary outlines, annotated bibliographies, peer-reviewed drafts, and final capstone papers across an entire semester, academic year, or degree program. They are designed to demonstrate <strong>longitudinal intellectual development</strong>, <strong>disciplinary fluency</strong>, and <strong>critical synthesis</strong>.</p>

<p>Yet, when institutional integrity review committees evaluate these cumulative dossiers, they encounter unique forensic challenges that single-paper scanners were never engineered to handle:</p>

<!-- The Portfolio Integrity Dilemma Diagram Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    THE PORTFOLIO INTEGRITY EVALUATION DILEMMA
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    How monolithic similarity scanners create forensic paralysis during cumulative milestone reviews
  </p>

  <div class="space-y-4">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700 text-center">
      <div class="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">Cumulative Student Portfolio / Capstone Dossier</div>
      <p class="text-xs text-slate-400 m-0">Submitted for Degree Clearance, Gateway Review, or Senior Honors</p>
    </div>

    <div class="flex justify-center text-slate-500 font-bold">&darr;</div>

    <div class="rounded-xl bg-rose-950/40 p-4 border border-rose-600/50 text-center">
      <div class="text-xs font-bold text-rose-300 uppercase tracking-wider mb-1">Legacy Similarity Scanner Output</div>
      <p class="text-sm font-mono font-bold text-rose-400 m-0">&ldquo;47% Cumulative Textual Match Detected Across Corpus&rdquo;</p>
    </div>

    <div class="flex justify-center text-slate-500 font-bold">&darr;</div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- False Positive Column -->
      <div class="rounded-xl bg-slate-800/90 border border-amber-500/50 p-4">
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            TRAGIC FALSE POSITIVE (80% of Cases)
          </span>
          <span class="text-[10px] text-slate-400">Developmental</span>
        </div>
        <ul class="list-disc pl-4 space-y-1 text-slate-300 text-xs mb-3">
          <li>Early draft self-matches across terms and LMS shells</li>
          <li>Standard disciplinary terminology &amp; methodology formulas</li>
          <li>Developmental patchwriting in novice introductory course entries</li>
          <li>Missing quotation marks on cited source blocks</li>
        </ul>
        <div class="text-[11px] text-amber-300 bg-amber-950/40 p-2.5 rounded border border-amber-800/50 font-medium">
          <strong>Harm:</strong> Withheld diplomas, destroyed student trust, disproportionate damage to first-gen/ELL writers.
        </div>
      </div>

      <!-- Deceptive Fraud Column -->
      <div class="rounded-xl bg-slate-800/90 border border-rose-500/50 p-4">
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
            DECEPTIVE FRAUD (20% of Cases)
          </span>
          <span class="text-[10px] text-slate-400">Malicious Intent</span>
        </div>
        <ul class="list-disc pl-4 space-y-1 text-slate-300 text-xs mb-3">
          <li>Contract-cheated paper mill drop at final deadline</li>
          <li>Concealed multi-source mosaic patchwork</li>
          <li>AI-generated cloaked paraphrasing &amp; humanizer spins</li>
          <li>Unindexed fraternity or peer test bank archives</li>
        </ul>
        <div class="text-[11px] text-rose-300 bg-rose-950/40 p-2.5 rounded border border-rose-800/50 font-medium">
          <strong>Harm:</strong> Unearned degrees awarded, institutional accreditation and academic reputation compromised.
        </div>
      </div>
    </div>
  </div>
</div>

<h3>Why Legacy Similarity Scores Fail Portfolio Audits</h3>

<p>When an honor board reviews an aggregate portfolio similarity report, raw similarity percentages distort the truth in four fundamental ways:</p>

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-semibold text-foreground text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold">1</span>
      <span>Intra-Portfolio Self-Matching Artifacts</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      When a student submits a final capstone that builds directly upon an annotated bibliography, a literature review from a prerequisite methods course, and three preliminary drafts, uncalibrated scanners flag the student's own earlier writing as unauthorized duplicate text.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-semibold text-foreground text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-xs font-bold">2</span>
      <span>Disciplinary Jargon vs. Intellectual Theft</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Emerging researchers in specialized fields (e.g., organic chemistry, constitutional law, quantitative sociology) must adopt standardized phrasing, technical nomenclature, and established methodological descriptions. Legacy n-gram matchers interpret this necessary vocabulary as copied prose.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-semibold text-foreground text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold">3</span>
      <span>Erasing the Chronological Arc of Learning</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      A portfolio is inherently temporal. An essay written in September during a student&rsquo;s first semester should look cognitively and syntactically different from a capstone completed in May of their senior year. A static snapshot treats every page with equal weight, erasing the student&rsquo;s progressive mastery of attribution.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-semibold text-foreground text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 text-xs font-bold">4</span>
      <span>The Binary &ldquo;Cheating vs. Original&rdquo; Fallacy</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Legacy tools treat all unquoted matching strings as intentional deception, ignoring the wide pedagogical gulf between a novice student struggling with synthesis and an upperclassman outsourcing a literature review to an essay mill.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>2. Theoretical Foundations: Academic Apprenticeship &amp; Cognitive Scaffolding</h2>

<p>To adjudicate portfolio integrity fairly, academic integrity officers, deans, and department chairs must anchor institutional policy in established composition theory and empirical linguistics.</p>

<!-- The Longitudinal Continuum Visual Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    THE LONGITUDINAL DISCIPLINARY ACQUISITION CONTINUUM
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    How student source integration evolves from novice mimicry to disciplinary mastery
  </p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Stage 1 -->
    <div class="rounded-xl bg-slate-800/90 border border-teal-500/30 p-4">
      <div class="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">STAGE 1: NOVICE APPRENTICESHIP</div>
      <div class="text-[10px] text-slate-400 mb-3">First-Year Composition / Entry Level</div>
      <ul class="list-disc pl-4 space-y-1 text-slate-300 text-xs">
        <li><em>&ldquo;Inventing the University&rdquo;</em> (Bartholomae)</li>
        <li>Heavy syntactic borrowing (Patchwriting)</li>
        <li>Cognitive overload in Zone of Proximal Development (Rebecca Moore Howard)</li>
        <li>Thesaurus synonym substitution habits</li>
      </ul>
    </div>

    <!-- Stage 2 -->
    <div class="rounded-xl bg-slate-800/90 border border-indigo-500/30 p-4">
      <div class="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">STAGE 2: TRANSITIONAL SYNTHESIS</div>
      <div class="text-[10px] text-slate-400 mb-3">Mid-Major Research Methods Coursework</div>
      <ul class="list-disc pl-4 space-y-1 text-slate-300 text-xs">
        <li>Blended student voice and source summary</li>
        <li>Intermittent quotation formatting errors</li>
        <li>Evolving citation mechanics &amp; signal phrases</li>
        <li>Transitional reliance on authoritative phrasing</li>
      </ul>
    </div>

    <!-- Stage 3 -->
    <div class="rounded-xl bg-slate-800/90 border border-emerald-500/30 p-4">
      <div class="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">STAGE 3: DISCIPLINARY MASTERY</div>
      <div class="text-[10px] text-slate-400 mb-3">Senior Capstone / Honors Thesis</div>
      <ul class="list-disc pl-4 space-y-1 text-slate-300 text-xs">
        <li>Autonomous scholarly voice &amp; critique</li>
        <li>Precise, selective block and inline quoting</li>
        <li>Fluid conceptual synthesis across multiple sources</li>
        <li>Robust attribution hygiene and complete citations</li>
      </ul>
    </div>
  </div>

  <div class="mt-4 pt-3 border-t border-slate-800 text-center text-teal-300 font-semibold text-xs">
    ◄ PROGRESSIVE REDUCTION OF NEAR-SOURCE SYNTACTIC BORROWING ACROSS TIME ►
  </div>
</div>

<h3>David Bartholomae: &ldquo;Inventing the University&rdquo;</h3>

<p>In his seminal 1985 treatise <em>Inventing the University</em>, composition theorist <strong>David Bartholomae</strong> identified the central paradox facing novice academic writers:</p>

<blockquote class="my-4 border-l-4 border-teal-500 bg-muted/30 p-4 rounded-r-lg italic text-foreground text-sm">
  &ldquo;The student has to learn in our classrooms to speak our language, to take on our particular ways of selecting, evaluating, organizing, interpreting, and conceptualizing facts... He has to invent the university by assembling and mimicking its language, while at the same time trying to find his own place within that discourse.&rdquo;
</blockquote>

<p>When students enter a new academic discipline, they do not yet possess the conceptual schemata required to rephrase complex scholarly arguments in their own words. To participate in academic dialogue, they must initially &ldquo;mimic&rdquo; the syntax, cadence, and lexicon of authoritative sources. This linguistic mimicry is not fraud; it is the cognitive scaffolding through which academic literacy is acquired.</p>

<h3>Rebecca Moore Howard &amp; The Citation Project</h3>

<p>In 1992 and 1995, scholar <strong>Rebecca Moore Howard</strong> challenged the punitive orthodoxy of academic plagiarism by establishing the formal definition of <strong>patchwriting</strong>:</p>

<div class="my-4 rounded-xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-4 text-xs sm:text-sm text-foreground font-mono leading-relaxed">
  <strong>Patchwriting:</strong> Copying from a source text which may be acknowledged or unacknowledged, deleting some words, altering grammatical structures, or substituting select synonyms, while retaining the original syntactic architecture and semantic cadence.
</div>

<p>Howard established that patchwriting represents a <strong>developmental strategy</strong> used when a writer is operating in their <em>Zone of Proximal Development</em> (ZPD)—grappling with ideas that push the boundaries of their current cognitive comprehension.</p>

<p>The empirical findings of the <strong>Citation Project</strong> (Howard, Serviss, &amp; Rodrigue, 2010; Jamieson &amp; Howard, 2011)—which analyzed 1,911 citations across multi-institution undergraduate research papers—revealed the prevalence of this phenomenon:</p>

<!-- Citation Project Table -->
<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Empirical Citation Project Finding</th>
        <th class="p-3">Institutional Prevalence</th>
        <th class="p-3">Pedagogical Implication for Honor Boards</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Direct Copying or Patchwriting</td>
        <td class="p-3 font-bold text-amber-600 dark:text-amber-400">52% of all source citations</td>
        <td class="p-3">Over half of all undergraduate source interactions rely on close syntactic imitation rather than independent synthesis.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Absence of Quotation Marks on Direct Matches</td>
        <td class="p-3 font-bold text-amber-600 dark:text-amber-400">16% of all citations</td>
        <td class="p-3">Students routinely acknowledge the author via parenthetical citations while omitting mechanical quotation punctuation.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Citations Drawn Exclusively from Pages 1–2</td>
        <td class="p-3 font-bold text-rose-600 dark:text-rose-400">46% of all citations</td>
        <td class="p-3">Students struggle with full-text comprehension, extracting isolated sentences without grasping overarching arguments.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Comprehensive Summary / True Synthesis</td>
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">&lt; 6% of all citations</td>
        <td class="p-3">Autonomous, high-level source synthesis is an advanced skill that rarely appears in early undergraduate portfolios.</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>The Syntactic Proximity Index (SPI)</h3>

<p>To quantify the degree to which a student's text mirrors a source's underlying grammar versus their own natural writing baseline, computational linguists and integrity specialists evaluate the <strong>Syntactic Proximity Index (SPI)</strong>:</p>

<div class="my-4 rounded-xl border border-border bg-muted/40 p-4 text-center font-mono text-xs sm:text-sm text-foreground">
  SPI(T<sub>student</sub>, T<sub>source</sub>) = &alpha; &middot; Leven(POS(T<sub>student</sub>), POS(T<sub>source</sub>)) + &beta; &middot; J(N<sub>k</sub>(T<sub>student</sub>), N<sub>k</sub>(T<sub>source</sub>))
</div>

<p class="text-xs text-muted-foreground">
  Where <code>POS(T)</code> represents the Part-of-Speech tag sequence (e.g., <code>NOUN - VERB - ADJ - NOUN</code>), measuring syntactic skeletal alignment independent of vocabulary; <code>Leven</code> denotes normalized Levenshtein edit distance between grammatical skeletons; <code>J(N_k)</code> is Jaccard similarity across overlapping k-token n-grams; and <code>&alpha;, &beta;</code> are calibration weights.
</p>

<p>In <strong>developmental patchwriting</strong>, POS alignment remains moderately high while lexical tokens are swapped with near-synonyms, accompanied by high backspace and pause telemetry in the writing history. In <strong>deliberate copying or contract cheating</strong>, POS alignment shifts abruptly across paragraphs, accompanied by zero-friction paste events.</p>

<hr class="my-8 border-border" />

<h2>3. Forensic Deconstruction: Developmental Patchwriting vs. Deliberate Source Copying</h2>

<p>When an Academic Integrity Officer or Honor Board panel evaluates a contested portfolio entry, they must perform a multi-dimensional forensic analysis across six specific criteria:</p>

<!-- 6-Vector Forensic Comparison Table -->
<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Forensic Criterion</th>
        <th class="p-3">Developmental Patchwriting</th>
        <th class="p-3">Deliberate Source Copying / Fraud</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">1. Textual Architecture</td>
        <td class="p-3">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>Monosource syntactic mimicry</li>
            <li>Synonym substitution (&ldquo;rogeting&rdquo;)</li>
            <li>Retains original sentence flow and context</li>
          </ul>
        </td>
        <td class="p-3 text-rose-600 dark:text-rose-400">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>Multi-source cut-and-paste patchwork</li>
            <li>Interleaved mosaic cloaking</li>
            <li>Stripped author context to evade search</li>
          </ul>
        </td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">2. Stylistic Uniformity</td>
        <td class="p-3">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>Natural lexical friction &amp; consistent voice</li>
            <li>Stylistic errors match student baseline</li>
          </ul>
        </td>
        <td class="p-3 text-rose-600 dark:text-rose-400">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>Abrupt syntactic fissures between paragraphs</li>
            <li>Flesch-Kincaid jumps 5+ grade levels instantly</li>
          </ul>
        </td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">3. Drafting Telemetry</td>
        <td class="p-3">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>High composing pause latency (2s–12s)</li>
            <li>Burst-pause-burst human rhythm</li>
            <li>Frequent backspaces &amp; incremental edits</li>
          </ul>
        </td>
        <td class="p-3 text-rose-600 dark:text-rose-400">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>0ms instantaneous paste injections</li>
            <li>Robotic continuous typing without pauses</li>
            <li>Near-zero structural backspaces</li>
          </ul>
        </td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">4. Portfolio Trajectory</td>
        <td class="p-3">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>High borrowing in Draft 1; declining in Draft 3</li>
            <li>Clear attribution maturation across terms</li>
          </ul>
        </td>
        <td class="p-3 text-rose-600 dark:text-rose-400">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>Static uncredited matches across all drafts</li>
            <li>Sudden unexplained mastery at final deadline</li>
          </ul>
        </td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">5. Attribution Artifacts</td>
        <td class="p-3">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>In-text parenthetical citation present</li>
            <li>Full bibliography entry in References</li>
            <li>Missing quotation marks (mechanical error)</li>
          </ul>
        </td>
        <td class="p-3 text-rose-600 dark:text-rose-400">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>Zero citations in text body</li>
            <li>Source completely omitted from Works Cited</li>
            <li>Deliberately disguised URLs or fake citations</li>
          </ul>
        </td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">6. Student Oral Defense</td>
        <td class="p-3">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>Student explains core concepts orally</li>
            <li>Articulates research struggle and source origin</li>
            <li>Reconstructs drafting intent openly</li>
          </ul>
        </td>
        <td class="p-3 text-rose-600 dark:text-rose-400">
          <ul class="list-disc pl-4 space-y-0.5">
            <li>Student unable to define specialized terms</li>
            <li>Unfamiliar with cited authors and thesis points</li>
            <li>Defensive or evasive responses during hearing</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Telemetry Comparison Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-mono text-xs shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm mb-4 pb-2 border-b border-slate-800 font-sans">
    WRITING TELEMETRY: COGNITIVE STRUGGLE VS. MECHANICAL INJECTION
  </div>
  <div class="space-y-4 font-sans">
    <div class="rounded-xl bg-slate-800/80 p-3.5 border border-teal-500/40">
      <div class="flex items-center justify-between text-teal-300 font-bold text-xs mb-1">
        <span>DEVELOPMENTAL PATCHWRITING (Authentic Cognitive Struggle)</span>
        <span class="text-[10px] bg-teal-950 px-2 py-0.5 rounded text-teal-200 border border-teal-800">Organic Human Telemetry</span>
      </div>
      <div class="font-mono text-[11px] text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-700/60 my-2">
        [Type 14 chars] ──► [Pause 4.2s: Consult Source] ──► [Backspace 8 chars] ──► [Type 22 chars]
      </div>
      <p class="text-[11px] text-slate-400 m-0">Telemetry: High variance in Inter-Key Interval (IKI), burst-pause-burst pacing, high edit distance, thesaurus window switches.</p>
    </div>

    <div class="rounded-xl bg-slate-800/80 p-3.5 border border-rose-500/40">
      <div class="flex items-center justify-between text-rose-300 font-bold text-xs mb-1">
        <span>DELIBERATE CLIPBOARD DROP (Contract Cheating / Paper Mill Paste)</span>
        <span class="text-[10px] bg-rose-950 px-2 py-0.5 rounded text-rose-200 border border-rose-800">Instantaneous Injection</span>
      </div>
      <div class="font-mono text-[11px] text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-700/60 my-2">
        [Cursor Line 42] ──────────(0ms Clipboard Drop: 850 Words)──────────► [Document End]
      </div>
      <p class="text-[11px] text-slate-400 m-0">Telemetry: 0ms elapsed time, zero keystroke intervals, zero revision history, external clipboard buffer captured permanently.</p>
    </div>

    <div class="rounded-xl bg-slate-800/80 p-3.5 border border-amber-500/40">
      <div class="flex items-center justify-between text-amber-300 font-bold text-xs mb-1">
        <span>SECOND-SCREEN TRANSCRIPTION (Manual Retyping from Phone / Second Screen)</span>
        <span class="text-[10px] bg-amber-950 px-2 py-0.5 rounded text-amber-200 border border-amber-800">Isochronous Rhythm</span>
      </div>
      <div class="font-mono text-[11px] text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-700/60 my-2">
        [Char 1] ─(115ms)─► [Char 2] ─(112ms)─► [Char 3] ─(118ms)─► [Char 4] ─(114ms)─► [Char 5]
      </div>
      <p class="text-[11px] text-slate-400 m-0">Telemetry: Flat, robotic cadence (110ms &plusmn; 15ms), zero conceptual pauses at clause boundaries, near-zero structural deletions.</p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>4. Checkmark Plagiarism’s Multi-Draft &amp; Portfolio Integrity Suite</h2>

<p>To enable academic integrity officers, honor councils, and writing program administrators to conduct rigorous, defensible, and restorative portfolio reviews, <strong>Checkmark Plagiarism</strong> delivers a unified technological ecosystem built around transparent evidence.</p>

<img src="/images/services/report-plagiarism-view.png" alt="Checkmark Plagiarism Full Verification Suite with Integrated Plagiarism and AI Breakdown" class="w-full rounded-2xl border border-border shadow-md my-8" />

<!-- Synchronized Two-Pane Source Workstation Mockup -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 font-mono text-xs shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm mb-4 pb-2 border-b border-slate-800 font-sans">
    CHECKMARK SYNCHRONIZED TWO-PANE SOURCE WORKSTATION
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
    <!-- Student Manuscript Pane -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700 flex flex-col justify-between">
      <div>
        <div class="text-teal-400 font-bold mb-2 flex items-center justify-between font-sans">
          <span>STUDENT MANUSCRIPT PANE (LEFT)</span>
          <span class="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300 font-mono">Portfolio Draft 2 • Page 7</span>
        </div>
        <div class="space-y-3 text-slate-300 text-[11px] leading-relaxed font-sans bg-slate-950/70 p-3.5 rounded-lg border border-slate-800">
          <p class="m-0">
            In analyzing social stratification, researchers note that
            <span class="bg-amber-500/20 text-amber-200 px-1 py-0.5 rounded font-semibold border-b-2 border-amber-400">
              educational institutions frequently function to reproduce existing socioeconomic hierarchies rather than facilitating social mobility (Bourdieu &amp; Passeron, 1977).
            </span>
          </p>
        </div>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400 font-sans">
        <span class="flex items-center gap-1 text-amber-300 font-semibold">
          🟡 Badge: Cited but Unquoted
        </span>
        <span class="text-[10px] text-slate-500">Author Cited in-text • Works Cited Entry #8</span>
      </div>
    </div>

    <!-- Live Resolved Source Pane -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-amber-500/40 flex flex-col justify-between">
      <div>
        <div class="text-amber-400 font-bold mb-2 flex items-center justify-between font-sans">
          <span>LIVE RESOLVED SOURCE PANE (RIGHT)</span>
          <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded font-semibold border border-amber-700">84% Match</span>
        </div>
        <div class="space-y-2 text-slate-300 text-[11px] font-sans">
          <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 space-y-1.5">
            <div class="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <span>🏛️ Source: Reproduction in Education, Society and Culture (Sage)</span>
            </div>
            <div class="text-[10px] text-teal-400 font-mono break-all">
              <a href="https://doi.org/10.4135/9781446218327" target="_blank" rel="noopener noreferrer" class="hover:underline">
                https://doi.org/10.4135/9781446218327 &UpperRightArrow;
              </a>
            </div>
            <div class="bg-slate-950 p-2.5 rounded border border-slate-800 italic text-slate-300 font-mono text-[10px] leading-relaxed">
              &ldquo;Educational systems operate to ensure the reproduction of the structure of class relations, thereby perpetuating social hierarchies.&rdquo;
            </div>
          </div>
          <div class="space-y-1 text-[11px] bg-slate-900/60 p-2.5 rounded border border-slate-700/60">
            <div class="text-slate-200 font-semibold">DIAGNOSTIC EVIDENCE PROFILE:</div>
            <div>&bull; <strong>Match Type:</strong> Syntactic Mimicry with Synonym Substitutions ('facilitating' for 'ensuring')</div>
            <div>&bull; <strong>Citation Status:</strong> Author Cited (Bourdieu &amp; Passeron) | Works Cited Entry Verified (#8)</div>
            <div>&bull; <strong>Diagnosis:</strong> Developmental Patchwriting (Scaffolding in Zone of Proximal Development)</div>
          </div>
        </div>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
        <a href="/services/writing-process" class="text-teal-300 font-semibold hover:underline inline-flex items-center gap-1 font-sans">
          ▶ Jump to Essay Playback™ Timeline (01:14:22)
        </a>
      </div>
    </div>
  </div>
</div>

<h3>1. Synchronized Source Verification &amp; 4-Badge Categorization</h3>

<p>Checkmark eliminates the ambiguity of monolithic similarity scores by analyzing every matched phrase against its immediate syntactic and bibliographic context. In the Checkmark Integrity Report, matched passages are assigned one of four discrete visual status badges:</p>

<!-- 4-Badge Grid Cards -->
<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
  <div class="rounded-xl border border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20 p-4">
    <div class="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-1">
      <span>🟢 Green Badge: Quoted &amp; Cited</span>
    </div>
    <div class="text-[11px] text-muted-foreground mb-2">Legitimate Attribution &bull; Excluded from Similarity Match</div>
    <p class="m-0 text-foreground">
      The passage is enclosed in valid quotation marks (or formatted as a block quotation) and possesses an adjacent parenthetical or footnoted citation. Excluded from risk calculations.
    </p>
  </div>

  <div class="rounded-xl border border-amber-500/40 bg-amber-50/40 dark:bg-amber-950/20 p-4">
    <div class="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">
      <span>🟡 Amber Badge: Cited but Unquoted</span>
    </div>
    <div class="text-[11px] text-muted-foreground mb-2">Developmental Patchwriting &bull; Formative Coaching Module</div>
    <p class="m-0 text-foreground">
      The passage exhibits near-verbatim or patchwritten alignment with an external source and includes an in-text author citation, but omits quotation marks. Routes to citation coaching.
    </p>
  </div>

  <div class="rounded-xl border border-rose-500/40 bg-rose-50/40 dark:bg-rose-950/20 p-4">
    <div class="flex items-center gap-2 font-bold text-rose-800 dark:text-rose-300 text-sm mb-1">
      <span>🔴 Red Badge: Uncited External Match</span>
    </div>
    <div class="text-[11px] text-muted-foreground mb-2">Potential Academic Misconduct &bull; Full Timeline Audit</div>
    <p class="m-0 text-foreground">
      The passage matches an external web page, journal article, or book without in-text attribution or quotation marks. Displays side-by-side text comparison with source URL and metadata.
    </p>
  </div>

  <div class="rounded-xl border border-purple-500/40 bg-purple-50/40 dark:bg-purple-950/20 p-4">
    <div class="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300 text-sm mb-1">
      <span>🟣 Purple Badge: Peer Cohort Match</span>
    </div>
    <div class="text-[11px] text-muted-foreground mb-2">Cross-Section Match &bull; Siloed Privacy Shield</div>
    <p class="m-0 text-foreground">
      The passage matches a submission from another student within the same school district, university department, or historical institutional repository without exposing student PII.
    </p>
  </div>
</div>

<h3>2. Essay Playback™ across Multi-Draft Portfolios</h3>

<p>For portfolio evaluations, Checkmark’s patent-pending <a href="/services/writing-process" class="text-primary font-semibold underline"><strong>Essay Playback™</strong></a> enables honor council committees to scrub through the entire writing history of every document in the portfolio timeline at <strong>1x to 8x speed</strong>:</p>

<img src="/images/services/report-paste-evidence.png" alt="Checkmark Essay Playback Keystroke Dynamics and External Paste Telemetry" class="w-full rounded-2xl border border-border shadow-md my-8" />

<ul>
  <li><strong>Multi-Draft Session Linking:</strong> Reviewers can toggle between Draft 1 (Outline &amp; Annotated Bib), Draft 2 (Rough Draft), and Draft 3 (Final Submission) to witness the evolution of specific paragraphs.</li>
  <li><strong>Composing Pause Visualization:</strong> The timeline graphs writing velocity over time, highlighting where the student paused to formulate thoughts versus where writing flowed smoothly.</li>
  <li><strong>Exoneration of Authentic Struggling Writers:</strong> If a student is accused of deliberate plagiarism because a literature review paragraph closely resembles a journal article, Essay Playback provides conclusive visual proof that the student spent 45 minutes typing, erasing, consulting notes, and re-crafting the sentence—proving developmental patchwriting rather than bad-faith cut-and-paste.</li>
</ul>

<h3>3. External Paste Buffer Tracking with 100% Raw Text Preservation</h3>

<p>A critical challenge in modern plagiarism adjudication is the student who pastes a large block of text from an illicit source or AI generator, and then spends 20 minutes manually changing every fifth word using a thesaurus to evade similarity checkers.</p>

<p>Checkmark solves this through <strong>Complete Clipboard Telemetry</strong>:</p>

<ul>
  <li>The moment text is pasted into the document editor (in Google Docs, Microsoft Word, Canvas, or Buzz LMS), Checkmark captures the raw clipboard string, word count, timestamp, and source metadata.</li>
  <li>Even if the student subsequently edits, rewords, or deletes 100% of the pasted text, the <strong>original raw pasted text remains permanently preserved in the instructor’s evidence card</strong>.</li>
  <li>Clicking the <strong>&ldquo;Jump to Playback&rdquo;</strong> button transports the reviewer directly to the exact second in the timeline when the paste occurred, providing indisputable physical evidence during honor hearings.</li>
</ul>

<h3>4. Granular Passage-Level AI Detection with Honest Guardrails</h3>

<p>Portfolio reviews often include non-standard writing genres—such as brief 100-word reflective self-assessments, artistic statements, or methodology abstracts. Generic AI detectors produce massive false-positive rates on short texts because statistical perplexity and burstiness metrics require sufficient sample sizes to achieve mathematical stability.</p>

<p>Checkmark protects students and institutions through rigorous safeguards:</p>

<ul>
  <li><strong>Honest Short-Text Guardrail (&lt;150 words):</strong> Any portfolio section under 150 words displays <code>N/A (Sample Below Minimum Statistical Threshold)</code> rather than generating an unreliable probability score.</li>
  <li><strong>Passage-Level Granularity:</strong> Rather than assigning an entire 20-page senior capstone a blanket &ldquo;35% AI Score,&rdquo; Checkmark highlights only the specific sentences that display non-human linguistic predictability, accompanied by individual evidence cards and calibrated confidence sliders.</li>
  <li><strong>Immunity to AI &ldquo;Humanizers&rdquo;:</strong> While tools like QuillBot or Undetectable AI can alter surface vocabulary to trick static text classifiers, they cannot fabricate authentic keystroke dynamics, typing latencies, and revision histories in Essay Playback™.</li>
</ul>

<h3>5. Teacher-in-the-Loop Rubric Autograding &amp; LMS Synchronization</h3>

<p>Checkmark’s <a href="/services/autograder" class="text-primary font-semibold underline">AI Rubric Autograder</a> accelerates the evaluation of multi-genre portfolios while keeping faculty firmly in control:</p>

<ul>
  <li>Evaluates portfolio artifacts against custom institutional rubrics (such as AAC&amp;U Written Communication VALUE Rubrics).</li>
  <li>Generates <strong>quote-anchored justifications</strong> tied directly to specific lines of student prose, explaining exactly why a criterion received a given rating.</li>
  <li>All generated marks remain editable draft suggestions until explicitly approved by the instructor, who can publish finalized scores directly back to <a href="/services/integrations/canvas-lms" class="text-primary font-semibold underline">Canvas LMS SpeedGrader</a>, <a href="/services/integrations/buzz-lms" class="text-primary font-semibold underline">Agilix Buzz</a>, or Google Classroom with a single click.</li>
</ul>

<hr class="my-8 border-border" />

<h2>5. Real-World Case Studies in Institutional Adjudication</h2>

<p>The following three case studies illustrate how Academic Integrity Officers, Department Chairs, and Honor Boards apply Checkmark’s multi-vector evidence framework to resolve complex portfolio inquiries.</p>

<!-- Case Study 1 Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-xs font-bold text-teal-400 uppercase tracking-wide mb-1">CASE STUDY 1: FIRST-YEAR COMPOSITION DOSSIER</div>
  <h3 class="text-base font-bold text-slate-100 m-0 mb-4 pb-2 border-b border-slate-800">Undergraduate Pre-Nursing FYC Writing Portfolio</h3>

  <div class="space-y-3 text-xs text-slate-300">
    <div><strong>Student Profile:</strong> First-Year Undergraduate (First-Generation College Student, Pre-Nursing Major)</div>
    <div><strong>Assignment:</strong> 15-Page Cumulative Writing Portfolio (3 Polished Essays + Reflective Cover Letter)</div>
    <div class="p-2.5 rounded bg-rose-950/40 border border-rose-800/50 text-rose-300">
      <strong>Initial Trigger:</strong> Automated scanner flagged Essay #2 with a 58% Similarity Match to a 2018 published paper in the <em>Journal of Health Care for the Poor and Underserved</em>.
    </div>

    <div class="space-y-1.5 bg-slate-800/90 p-3.5 rounded-lg border border-slate-700">
      <div class="font-bold text-teal-300 mb-1">CHECKMARK FORENSIC INVESTIGATION:</div>
      <div>1. <strong>Citation Badging:</strong> 4 paragraphs flagged as 🟡 Cited but Unquoted (Amber Badge). Student cited <code>(Braveman et al., 2018)</code> parenthetically 6 times and listed full citation in Works Cited, but failed to enclose patchwritten sentences in quotation marks.</div>
      <div>2. <strong>Essay Playback™:</strong> Keystroke timeline revealed 6.2 hours of active drafting. Average Inter-Key Interval was 240ms with 380+ backspaces across the flagged section, proving intense cognitive effort and thesaurus consultations.</div>
      <div>3. <strong>Paste Telemetry:</strong> Zero external clipboard pastes detected. All text typed manually.</div>
      <div>4. <strong>Longitudinal Arc:</strong> Essay #1 (September) had 3 amber badges; Essay #3 (November) had 0 amber badges and full proper quoting, demonstrating positive developmental trajectory.</div>
    </div>

    <div class="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-300">
      <div class="font-bold mb-1">HONOR COUNCIL ADJUDICATION:</div>
      <div>&bull; <strong>Finding:</strong> Developmental Patchwriting in Zone of Proximal Development. Zero intent to defraud.</div>
      <div>&bull; <strong>Resolution:</strong> No academic integrity violation recorded on transcript.</div>
      <div>&bull; <strong>Remediation:</strong> 1-hour citation formatting workshop with Writing Center tutor; portfolio grade finalized by instructor based on rubric synthesis criteria.</div>
    </div>
  </div>
</div>

<p><strong>Hearing Analysis:</strong> During the hearing, the student was visibly distressed, fearing expulsion. When the Honor Board chair opened Checkmark’s <strong>Essay Playback™</strong>, the committee observed the student typing a sentence, pausing for 18 seconds, consulting Braveman's article, deleting three words, and typing synonyms. The amber <strong>Cited but Unquoted</strong> badges confirmed that the student had meticulously attributed the ideas to Braveman in every paragraph. Thanks to the keystroke receipts and citation badging, the committee avoided a wrongful suspension, transformed a terrifying disciplinary hearing into a restorative mentoring moment, and praised the student's longitudinal improvement.</p>

<!-- Case Study 2 Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-xs font-bold text-rose-400 uppercase tracking-wide mb-1">CASE STUDY 2: SENIOR SOCIOLOGY CAPSTONE THESIS</div>
  <h3 class="text-base font-bold text-slate-100 m-0 mb-4 pb-2 border-b border-slate-800">Suspected Mosaic Plagiarism vs. Empirical Synthesis</h3>

  <div class="space-y-3 text-xs text-slate-300">
    <div><strong>Student Profile:</strong> Graduating Senior (Sociology Major, Honors Program Candidate)</div>
    <div><strong>Assignment:</strong> 40-Page Senior Capstone Thesis (Literature Review, Methodology, Data Analysis)</div>
    <div class="p-2.5 rounded bg-amber-950/40 border border-amber-800/50 text-amber-300">
      <strong>Initial Trigger:</strong> Department Chair noticed sudden shift in prose complexity in Chapter 2; legacy tool reported overall low 14% similarity score across entire thesis.
    </div>

    <div class="space-y-1.5 bg-slate-800/90 p-3.5 rounded-lg border border-slate-700">
      <div class="font-bold text-rose-300 mb-1">CHECKMARK FORENSIC INVESTIGATION:</div>
      <div>1. <strong>Citation Badging:</strong> Chapter 2 contained 18 🔴 Uncited External Matches (Red Badges) matching three obscure European doctoral dissertations and an unindexed conference proceeding.</div>
      <div>2. <strong>Paste Telemetry:</strong> Checkmark Paste Buffer recorded 4 separate 0ms clipboard injections totaling 2,850 words at 3:14 AM on the night before the draft deadline.</div>
      <div>3. <strong>Raw Clipboard Reconstruction:</strong> Preserved raw text revealed the student had pasted the text verbatim, then spent 45 minutes using QuillBot and manual synonym replacements to cloak the stolen text (mosaic plagiarism).</div>
      <div>4. <strong>AI Detection:</strong> Passage-level sliders flagged connecting transition sentences with 96% AI confidence.</div>
      <div>5. <strong>Oral Defense:</strong> In hearing, student could not define core theoretical terminology (<em>&ldquo;bourgeois habitus reproduction&rdquo;</em>) appearing in the pasted sections.</div>
    </div>

    <div class="p-3 rounded-lg bg-rose-950/50 border border-rose-800/60 text-rose-300">
      <div class="font-bold mb-1">HONOR COUNCIL ADJUDICATION:</div>
      <div>&bull; <strong>Finding:</strong> Deliberate Mosaic Plagiarism &amp; Contract/Paper Mill Authorship Fraud.</div>
      <div>&bull; <strong>Resolution:</strong> Formal Academic Integrity Violation; Capstone Grade = F; Honors status revoked; Graduation delayed by one semester pending thesis re-enrollment and ethics course.</div>
    </div>
  </div>
</div>

<p><strong>Hearing Analysis:</strong> This case demonstrates why whole-document similarity percentages are dangerously misleading. Because the 40-page capstone contained 30 pages of original survey data and methodology, the legacy scanner reported a deceptively low 14% aggregate similarity score, which passed the department's automated filter. However, Checkmark's <strong>Paste Buffer Telemetry</strong> exposed the 2,850-word midnight clipboard drop. When confronted with the side-by-side synchronized view and the 0ms paste timestamp, the student admitted to purchasing the literature review section from an online tutoring service. The defensible evidence protected institutional accreditation and academic standards.</p>

<!-- Case Study 3 Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-xs font-bold text-purple-400 uppercase tracking-wide mb-1">CASE STUDY 3: HIGH SCHOOL AP CAPSTONE SEMINAR DOSSIER</div>
  <h3 class="text-base font-bold text-slate-100 m-0 mb-4 pb-2 border-b border-slate-800">Authorized Collaborative Scaffolding vs. Peer Collusion</h3>

  <div class="space-y-3 text-xs text-slate-300">
    <div><strong>Student Profile:</strong> 11th-Grade High School Student (AP Capstone Seminar)</div>
    <div><strong>Assignment:</strong> Individual Written Argument (IWA - 2,000 Words) + Multi-Draft Research Portfolio</div>
    <div class="p-2.5 rounded bg-rose-950/40 border border-rose-800/50 text-rose-300">
      <strong>Initial Trigger:</strong> School LMS flagged 42% Peer Match to an essay submitted in another section taught by a different teacher. AP Coordinator initiated integrity inquiry.
    </div>

    <div class="space-y-1.5 bg-slate-800/90 p-3.5 rounded-lg border border-slate-700">
      <div class="font-bold text-purple-300 mb-1">CHECKMARK FORENSIC INVESTIGATION:</div>
      <div>1. <strong>Peer Cohort Badging:</strong> The 🟣 Peer Cohort Match (Purple Badge) identified the matching text as belonging to a collaborative Team Research Report (TMP) completed by the student and her peer group 6 weeks earlier in the same course.</div>
      <div>2. <strong>Multi-Draft Differencing:</strong> Cross-referencing Draft 1, Draft 2, and Final IWA demonstrated that the student had legitimately adapted her own background research from the team phase into her individual paper, as explicitly permitted by College Board AP guidelines.</div>
      <div>3. <strong>Essay Playback™:</strong> Showed 8.4 hours of continuous authentic writing, organic revision bursts, and original argumentation in all individual analytical sections.</div>
      <div>4. <strong>Short-Text Guardrails:</strong> Reflective portfolio memos correctly evaluated as <code>N/A</code> (&lt;150 words), preventing false AI flags on informal notes.</div>
    </div>

    <div class="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-300">
      <div class="font-bold mb-1">HONOR COUNCIL ADJUDICATION:</div>
      <div>&bull; <strong>Finding:</strong> Legitimate Authorized Multi-Draft Scaffolding. 100% Exonerated.</div>
      <div>&bull; <strong>Resolution:</strong> Full integrity clearance granted; submission transmitted to College Board repository with zero penalty; student commended for thorough research documentation.</div>
    </div>
  </div>
</div>

<p><strong>Hearing Analysis:</strong> Without Checkmark's multi-draft portfolio tools, this AP student would have been disqualified from the AP Capstone program. The legacy LMS scanner simply reported a terrifying &ldquo;42% Peer Plagiarism&rdquo; alert because it could not recognize that the matching text was the student's own authorized prior team project. Checkmark's <strong>Peer Cohort Match Workbench</strong> immediately displayed both documents side-by-side, linking the student’s name to both submissions within the secure district repository. Combined with <strong>Essay Playback™</strong>, the AP coordinator verified in less than three minutes that all individual argument sections were 100% authentically composed.</p>

<hr class="my-8 border-border" />

<h2>6. The 4-Phase Restorative Portfolio Adjudication Protocol</h2>

<p>Academic Integrity Officers, Deans, and Department Chairs should establish a standardized, transparent 4-phase protocol for evaluating contested portfolio submissions:</p>

<!-- 4-Phase Protocol Visual Workflow -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-4 pb-2 border-b border-slate-800">
    THE 4-PHASE RESTORATIVE PORTFOLIO ADJUDICATION WORKFLOW
  </div>

  <div class="space-y-4 text-xs">
    <!-- Phase 1 -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-teal-500/40">
      <div class="flex items-center justify-between font-bold text-teal-300 mb-1">
        <span>PHASE 1: PORTFOLIO TRIAGE &amp; MULTI-DRAFT DIFFERENTIAL ANALYSIS</span>
        <span class="text-[10px] bg-teal-950 px-2 py-0.5 rounded text-teal-200 border border-teal-800">Initial Evidentiary Triage</span>
      </div>
      <p class="text-slate-300 m-0">Filter out intra-portfolio self-matches (Draft 1 &rarr; Draft 2 &rarr; Final). Categorize matches using 4 Visual Badges (🟢, 🟡, 🔴, 🟣). Isolate disciplinary nomenclature and standard bibliographic strings.</p>
    </div>

    <div class="flex justify-center text-slate-500 font-bold">&darr;</div>

    <!-- Phase 2 -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-indigo-500/40">
      <div class="flex items-center justify-between font-bold text-indigo-300 mb-1">
        <span>PHASE 2: PROCESS EVIDENCE &amp; WRITING TELEMETRY AUDIT</span>
        <span class="text-[10px] bg-indigo-950 px-2 py-0.5 rounded text-indigo-200 border border-indigo-800">Telemetry Verification</span>
      </div>
      <p class="text-slate-300 m-0">Audit Essay Playback™ keystroke velocity, pauses, and backspaces. Inspect Paste Buffer Logs (0ms drops vs. incremental typing). Check Raw Clipboard Text Preservation for post-paste rewrites. Review Passage-Level AI Sliders with &lt;150w Short-Text Guardrails.</p>
    </div>

    <div class="flex justify-center text-slate-500 font-bold">&darr;</div>

    <!-- Phase 3 -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-cyan-500/40">
      <div class="flex items-center justify-between font-bold text-cyan-300 mb-1">
        <span>PHASE 3: THE RESTORATIVE EVIDENCE-BASED STUDENT CONFERENCE</span>
        <span class="text-[10px] bg-cyan-950 px-2 py-0.5 rounded text-cyan-200 border border-cyan-800">Collaborative Review</span>
      </div>
      <p class="text-slate-300 m-0">Open Checkmark synchronized workbench alongside the student (&ldquo;Stop guessing, start trusting&rdquo;). Walk through Essay Playback™ collaboratively. Assess oral cognitive alignment (can student explain concepts?).</p>
    </div>

    <div class="flex justify-center text-slate-500 font-bold">&darr;</div>

    <!-- Phase 4 Pathways -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-xl bg-emerald-950/40 p-4 border border-emerald-700/50">
        <div class="font-bold text-emerald-300 mb-1">TRACK A: DEVELOPMENTAL SCENARIO</div>
        <div class="text-[10px] text-slate-400 mb-2">Patchwriting / Citation Slips</div>
        <ul class="list-disc pl-4 space-y-1 text-slate-300">
          <li>Zero punitive transcript marks</li>
          <li>Writing Center coaching module</li>
          <li>Mandatory draft revision cycle for portfolio credit</li>
        </ul>
      </div>

      <div class="rounded-xl bg-rose-950/40 p-4 border border-rose-700/50">
        <div class="font-bold text-rose-300 mb-1">TRACK B: DELIBERATE FRAUD</div>
        <div class="text-[10px] text-slate-400 mb-2">Mosaic Plagiarism / Paper Mill Pastes</div>
        <ul class="list-disc pl-4 space-y-1 text-slate-300">
          <li>Formal Honor Board referral</li>
          <li>Course grade penalty / Assignment zero</li>
          <li>Documented academic integrity violation</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<h3>Phase 1: Portfolio Triage &amp; Multi-Draft Differential Analysis</h3>
<p>Before notifying the student or convening a hearing, the integrity officer performs an initial evidentiary triage within Checkmark:</p>
<ol>
  <li><strong>Activate Multi-Draft Filter:</strong> Exclude previous assignment submissions by the same student within the portfolio container to eliminate self-matching false positives.</li>
  <li><strong>Review Citation Badge Distribution:</strong> If 90%+ of flagged text consists of 🟢 Green (Quoted &amp; Cited) or 🟡 Amber (Cited but Unquoted) badges, the issue is mechanical/developmental, not fraudulent.</li>
  <li><strong>Check Disciplinary Jargon Density:</strong> Ensure that standard field methodologies and bibliographic references are excluded from similarity calculations.</li>
</ol>

<h3>Phase 2: Process Evidence &amp; Writing Telemetry Audit</h3>
<p>If substantive 🔴 Red (Uncited External) or 🟣 Purple (Peer Cohort) badges remain, the reviewer examines writing process telemetry:</p>
<ol>
  <li><strong>Audit Keystroke Dynamics in Essay Playback™:</strong> Observe whether the flagged passages were drafted with organic human pausing (Inter-Key Interval &gt; 200ms, frequent backspaces) or injected instantly.</li>
  <li><strong>Examine Paste Buffer Logs:</strong> Identify whether text was dropped via external clipboard (t &lt; 10ms) and inspect the preserved raw clipboard text.</li>
  <li><strong>Verify AI Confidence Sliders:</strong> Ensure no short-text sections (&lt;150 words) are flagged and verify that flagged AI passages display consistent high-confidence linguistic markers.</li>
</ol>

<h3>Phase 3: The Restorative Evidence-Based Student Conference</h3>
<p>The integrity conference is conducted under the guiding philosophy: <strong>&ldquo;Stop guessing, start trusting.&rdquo;</strong></p>
<ol>
  <li><strong>Screen-Share the Evidence Workbench:</strong> Display the Checkmark report directly to the student, showing both the side-by-side text matches and the Essay Playback timeline.</li>
  <li><strong>Conduct the Oral Explanation Probe:</strong> Ask the student to explain the core ideas of the flagged section without looking at the text.</li>
  <li><strong>Invite the Student to Narrate Their Drafting:</strong> Replay the keystroke timeline at 2x speed and ask the student to describe what they were thinking and reading during the extended pauses.</li>
</ol>

<h3>Phase 4: Calibrated Outcome Determination</h3>
<p>The committee categorizes the case into one of three outcome pathways:</p>
<ul>
  <li><strong>Path 1: Developmental Scaffolding (No Violation):</strong> Applied to patchwriting, missing quotation marks on cited sources, or early-stage discourse struggles. The student is referred to the Writing Center for a mandatory citation clinic and permitted to revise the portfolio entry for full or partial credit.</li>
  <li><strong>Path 2: Negligent Misconduct (Formative Sanction):</strong> Applied when a student rushed, failed to track sources in research notes, and committed widespread uncredited patchwriting without deliberate intent. Requires portfolio re-submission with a grade cap and completion of an academic integrity module.</li>
  <li><strong>Path 3: Deceptive Authorship Fraud (Disciplinary Sanction):</strong> Applied to contract cheating, wholesale paper mill pastes, deliberate mosaic cloaking, or unindexed peer theft confirmed by 0ms paste telemetry and failure of oral defense. Triggers standard institutional honor code penalties.</li>
</ul>

<hr class="my-8 border-border" />

<h2>7. Institutional Governance: Honor Board Rubrics, Policies, &amp; Guidelines</h2>

<p>To ensure consistency across departments and academic terms, institutions should formalize portfolio review standards through objective deliberation rubrics and explicit syllabus policies.</p>

<h3>Honor Council Portfolio Deliberation Rubric</h3>

<p>Academic integrity boards should use the following standardized rubric during formal hearings to evaluate evidence objectively:</p>

<!-- Deliberation Rubric Table -->
<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Evaluation Criterion</th>
        <th class="p-3 text-emerald-600 dark:text-emerald-400">1: Clear Developmental Patchwriting (No Sanction)</th>
        <th class="p-3 text-amber-600 dark:text-amber-400">2: Negligent Source Integration (Educational Remedy)</th>
        <th class="p-3 text-rose-600 dark:text-rose-400">3: Deliberate Plagiarism / Fraud (Disciplinary Sanction)</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Attribution Status</td>
        <td class="p-3">Author cited in-text &amp; in bibliography; quotes omitted mechanically.</td>
        <td class="p-3">Source listed in bibliography but omitted from in-text sentences.</td>
        <td class="p-3">Source completely omitted from in-text citations and bibliography.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Writing Telemetry</td>
        <td class="p-3">Essay Playback proves organic drafting, pauses, and backspaces.</td>
        <td class="p-3">Mixed typing and pasting from student's own unstructured notes.</td>
        <td class="p-3">0ms external clipboard drop or mechanical second-screen transcription.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Longitudinal Arc</td>
        <td class="p-3">Substantial reduction in borrowing between Draft 1 and Final.</td>
        <td class="p-3">Borrowing remains unchanged across drafts due to lack of revision.</td>
        <td class="p-3">Contested section inserted suddenly at final deadline with no prior draft.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Oral Articulation</td>
        <td class="p-3">Student thoroughly explains ideas and source concepts orally.</td>
        <td class="p-3">Student understands general idea but struggles with specific terms.</td>
        <td class="p-3">Student cannot define vocabulary or explain thesis arguments.</td>
      </tr>
      <tr class="hover:bg-muted/30 font-semibold text-foreground">
        <td class="p-3">Recommended Action</td>
        <td class="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Exoneration &amp; Writing Center Referral</td>
        <td class="p-3 text-amber-600 dark:text-amber-400 font-bold">Draft Revision &amp; Formative Ethics Module</td>
        <td class="p-3 text-rose-600 dark:text-rose-400 font-bold">Formal Course Failure &amp; Disciplinary Record</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Model Syllabus Policy for Multi-Draft Portfolios</h3>

<p>Writing Program Administrators and Department Chairs can adapt this model policy for inclusion in course syllabi and academic integrity handbooks:</p>

<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-mono text-xs shadow-lg">
  <div class="text-teal-400 font-bold mb-3 font-sans text-sm">
    MODEL SYLLABUS POLICY: MULTI-DRAFT PORTFOLIO INTEGRITY
  </div>
  <div class="space-y-3 text-slate-300 font-sans leading-relaxed text-xs">
    <p class="m-0">
      <strong>Academic Integrity &amp; Source Integration Policy for Multi-Draft Portfolios:</strong> In this course, writing is taught and evaluated as an iterative, developmental process. Your cumulative portfolio represents the evolution of your thinking, research, and disciplinary voice over time.
    </p>
    <p class="m-0">
      <strong>1. Developmental Drafting &amp; Source Apprenticeship:</strong> As you engage with complex scholarship, learning to synthesize authoritative sources is a fundamental skill. If you struggle to put dense academic arguments into your own words, consult the instructor or Writing Center tutors during drafting stages. Close paraphrasing with proper citations (patchwriting) will be treated as a developmental coaching opportunity during preliminary drafts, not an honor code violation.
    </p>
    <p class="m-0">
      <strong>2. Attribution Requirements for Final Submissions:</strong> In your final portfolio submissions, all text derived from external sources must follow professional attribution standards:
    </p>
    <ul class="list-disc pl-5 space-y-1 font-mono text-[11px] text-slate-300">
      <li>Direct phrasing (3+ consecutive words from a source) MUST be enclosed in quotation marks AND accompanied by a parenthetical citation.</li>
      <li>Paraphrased ideas MUST be entirely rewritten in your own sentence structure AND cited.</li>
    </ul>
    <p class="m-0">
      <strong>3. Writing Process Telemetry &amp; Verification:</strong> This course uses Checkmark Plagiarism integrated within Canvas LMS. Checkmark captures authentic drafting history (Essay Playback™) to verify student authorship and protect honest students from false accusations. All assignments must be composed within the approved digital editor. Pasting pre-written text from outside documents in a single block without prior instructor approval may require an oral authorship conference.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Frequently Asked Questions (FAQs)</h2>

<div class="space-y-6">
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-bold text-foreground mb-2">1. How does patchwriting differ legally and ethically from copyright infringement or deliberate fraud in academic settings?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      In composition studies and educational law, patchwriting is recognized as a transitional cognitive strategy—a linguistic coping mechanism used by novice writers attempting to navigate unfamiliar academic vocabulary. Unlike copyright infringement (which involves commercial exploitation of proprietary intellectual property) or deliberate academic fraud (which involves intentionally misrepresenting outsourced or stolen work as one's own to gain unearned academic credentials), patchwriting typically includes author attribution and reflects active, albeit imperfect, student effort. Treating patchwriting as criminal fraud damages student self-efficacy and misallocates institutional disciplinary resources.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-bold text-foreground mb-2">2. Why do legacy plagiarism tools frequently generate false alarms on multi-draft portfolio submissions?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Legacy plagiarism checkers evaluate documents as isolated, static strings of text. When applied to multi-draft portfolios, they trigger severe false positives because: (1) They flag a student’s final capstone against their own earlier draft submissions stored in LMS databases; (2) They cannot differentiate between properly cited paraphrases that lack quotation marks and uncredited copy-pastes; and (3) They treat standard disciplinary terminology, legal definitions, and scientific methodology protocols as copied text. Checkmark eliminates these errors through multi-draft cohort filtering, synchronized source badging, and keystroke playback.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-bold text-foreground mb-2">3. Can a student fake authentic typing telemetry in Essay Playback™ by manually typing from a secondary screen?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      No. Checkmark’s writing telemetry algorithms analyze fine-grained <strong>Keystroke Dynamics</strong>, including Inter-Key Intervals (IKI), cognitive pause latencies, and revision friction. When a student composes authentically, their typing displays high burstiness—rapid bursts of 5–15 characters followed by 2-to-10-second pauses at conceptual boundaries, interspersed with regular backspaces, word deletions, and cursor repositioning. When a student transcribes text from a secondary phone or monitor, their typing exhibits an unnaturally flat, isochronous rhythm (constant 100ms–130ms spacing) with zero conceptual pauses and near-zero structural revisions.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-bold text-foreground mb-2">4. How should honor boards handle submissions that contain both developmental patchwriting and minor generative AI assistance?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Honor boards should use Checkmark’s <a href="/services/ai-detection" class="text-primary font-semibold underline"><strong>Passage-Level AI Confidence Sliders</strong></a> and <a href="/services/writing-process" class="text-primary font-semibold underline"><strong>Essay Playback™</strong></a> to evaluate the multi-modal drafting timeline: (1) Isolate the patchwritten sections to determine if the student was citing authentic human scholarship; (2) Examine the AI-flagged passages to determine whether AI was used legitimately as an editorial assistant (e.g., grammar refinement, brainstorming) or illegitimately as an automated ghostwriter; and (3) Checkmark’s granular evidence cards allow boards to evaluate each passage independently rather than rejecting the entire portfolio based on an ambiguous composite score.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-bold text-foreground mb-2">5. What role does student intent play in determining portfolio academic integrity violations?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      While institutional honor codes often state that lack of intent does not excuse plagiarism, establishing intent is essential for determining <strong>proportionality of sanctions</strong>. Distinguishing between <em>developmental error</em> (a student who cited the author but omitted quotation marks due to poor note-taking) and <em>bad-faith deception</em> (a student who used clipboard dumps and AI paraphrasers to conceal copied text) ensures that universities fulfill their educational mission. Checkmark provides the objective physical &ldquo;receipts&rdquo; (paste logs, keystroke playback, citation links) necessary to establish intent beyond subjective conjecture.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-bold text-foreground mb-2">6. How does Checkmark Plagiarism comply with FERPA and COPPA during cross-semester cohort portfolio comparisons?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Unlike legacy vendors that store student essays in global, multi-tenant databases to train commercial AI models or monetize student intellectual property, Checkmark operates under a strict <strong>Zero-Retention, FERPA/COPPA-Compliant Architecture</strong>: Student writing is analyzed in real time using salted cryptographic hashes (MinHash LSH); Submissions are NEVER used to train machine learning models; and Cross-section and multi-semester comparisons occur strictly within the school district’s or university’s isolated, private institutional perimeter. Student personally identifiable information (PII) is never exposed across LMS shells or to external third parties.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-bold text-foreground mb-2">7. How can writing center tutors and faculty collaborate using Checkmark's citation badges during portfolio revision cycles?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Checkmark’s two-way linked evidence workbench acts as a shared pedagogical diagnostic tool. Before a student submits their final graduation portfolio, writing center tutors and faculty can review the draft in Checkmark: Tutors filter the document by <strong>🟡 Cited but Unquoted (Amber Badges)</strong> to conduct targeted, 15-minute workshops on quotation integration and signal phrases; Instructors use the <a href="/services/autograder" class="text-primary font-semibold underline"><strong>AI Rubric Autograder</strong></a> to generate formative, sentence-level revision prompts anchored directly to student paragraphs; and this transforms academic integrity from a terrifying post-submission policing event into a continuous, supportive learning dialogue.
    </p>
  </div>
</div>

<div class="my-10 rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 via-background to-emerald-500/10 p-8 text-center">
  <h3 class="text-xl font-bold text-foreground mb-2">
    Elevate Portfolio Integrity with Defensible Process Evidence
  </h3>
  <p class="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
    Equip your academic integrity officers, honor council panels, and department chairs with Checkmark&rsquo;s multi-draft source verification workbench, Essay Playback™ keystroke dynamics, and passage-level AI detection.
  </p>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a href="/contact" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm">
      Schedule an Institutional Demo
    </a>
    <a href="/services/plagiarism-detection" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
      Explore Multi-Draft Verification
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
      currentSlug="2026/8/how-can-academic-integrity-officers-differentiate-patchwriting-from-deliberate-source-copying-in-student-portfolios"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
