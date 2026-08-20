import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "What Evidence Proves Uncited Patchwriting Versus Accidental Missing Quotation Marks? | Checkmark Plagiarism",
  description: "Discover how educators, department chairs, and academic integrity officers use side-by-side text forensics, citation badges, and keystroke playback to distinguish accidental missing quotation marks from developmental uncited patchwriting and deliberate mosaic fraud.",
  keywords: [
    "patchwriting vs plagiarism",
    "missing quotation marks",
    "accidental plagiarism",
    "Rebecca Moore Howard",
    "Citation Project",
    "Checkmark Plagiarism",
    "Essay Playback",
    "mosaic plagiarism",
    "source integration forensics",
    "restorative academic integrity",
    "Canvas LMS plagiarism checker",
    "keystroke dynamics",
    "developmental writing",
    "two pane source comparison",
  ],
  openGraph: {
    images: ["/images/services/report-source-quote.png"],
  },
};

const meta = {
  title: "What Evidence Proves Uncited Patchwriting Versus Accidental Missing Quotation Marks? | Checkmark Plagiarism",
  description: "Discover how educators, department chairs, and academic integrity officers use side-by-side text forensics, citation badges, and keystroke playback to distinguish accidental missing quotation marks from developmental uncited patchwriting and deliberate mosaic fraud.",
  "opengraph-image": "/images/services/report-source-quote.png",
  date: "08-18-2026",
  readTime: "~16 min read",
  category: "Plagiarism Detection",
  categories: ["Plagiarism Detection", "Academic Integrity", "Pedagogy", "Teacher Guide", "EdTech"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<!-- Executive Summary Callout -->
<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white">
      Executive Summary
    </span>
  </div>
  <p class="text-foreground font-medium leading-relaxed">
    When an automated similarity scanner highlights a student paragraph with an <strong>80%+ match</strong> to an external source, educators face a critical pedagogical crossroads: Is the student guilty of deliberate academic deception, struggling with the cognitive demands of developmental synthesis (<strong>patchwriting</strong>), or simply a victim of a clerical formatting error (<strong>accidental missing quotation marks</strong>)? Legacy plagiarism tools flatten these fundamentally distinct behaviors into a single punitive percentage, damaging student-teacher trust and misdirecting disciplinary interventions. Grounded in the empirical research of <strong>Rebecca Moore Howard</strong> and the multi-institutional <strong>Citation Project</strong>, this guide details the exact forensic, linguistic, and behavioral evidence needed to differentiate these writing patterns. By combining <strong>Checkmark Plagiarism&rsquo;s</strong> two-pane synchronized source verification workbench, discrete visual citation badges (<strong>Quoted &amp; Cited</strong>, <strong>Cited but Unquoted</strong>, <strong>Uncited External Match</strong>, <strong>Peer Cohort Match</strong>), patent-pending <a href="/services/writing-process" class="text-primary font-semibold underline"><strong>Essay Playback™</strong></a> keystroke telemetry, granular passage-level AI detection, and teacher-in-the-loop rubric autograding, educators can replace punitive guesswork with transparent, defensible &ldquo;receipts&rdquo; that nurture authentic student growth.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> equips educators with an integrated, enterprise-grade integrity suite uniting <a href="/services/plagiarism-detection" class="text-primary font-semibold underline">multidimensional plagiarism detection</a>, <a href="/services/writing-process" class="text-primary font-semibold underline">keystroke writing process replay</a>, <a href="/services/ai-detection" class="text-primary font-semibold underline">passage-level AI writing detection</a>, and <a href="/services/autograder" class="text-primary font-semibold underline">quote-anchored rubric autograding</a> with seamless grade passback for <a href="/services/integrations/canvas-lms" class="text-primary font-semibold underline">Canvas LMS</a>, <a href="/services/integrations/buzz-lms" class="text-primary font-semibold underline">Buzz LMS</a>, and Google Classroom.</p>

<img src="/images/services/report-source-quote.png" alt="Checkmark Plagiarism Side-by-Side Source Proof and Citation Badge Verification" class="w-full rounded-2xl border border-border shadow-md my-8" />

<h2>1. The High-Stakes Educator Dilemma: Beyond the 80% Similarity Trap</h2>

<p>Every secondary and post-secondary writing instructor has experienced the jarring moment: opening a newly submitted student research essay and seeing a prominent, bright-red <strong>84% Similarity Match</strong> flagged on a central body paragraph.</p>

<p>Under legacy academic integrity workflows, this blunt percentage triggers an immediate, adversarial disciplinary protocol:</p>

<!-- The Fatal Flaw of Legacy Similarity Detection Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    THE FATAL FLAW OF LEGACY SIMILARITY DETECTION
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    How monolithic scoring algorithms collapse valid scholarship, formatting errors, and subtle fraud into a single blunt percentage
  </p>

  <div class="space-y-4">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700 text-center">
      <div class="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">Student Submits 1,500-Word Research Essay</div>
      <p class="text-xs text-slate-400 m-0">Dense Disciplinary Literature &bull; Multiple Secondary Citations &bull; In-Text Works Cited Page</p>
    </div>

    <div class="flex justify-center text-slate-500 font-bold">&darr;</div>

    <div class="rounded-xl bg-rose-950/50 border border-rose-500/60 p-4 text-center">
      <div class="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">LEGACY SCANNER OUTPUT</div>
      <div class="text-2xl font-extrabold text-rose-300 tracking-tight">&ldquo;84% SIMILARITY DETECTED&rdquo;</div>
      <p class="text-xs text-slate-400 mt-1 m-0">One-Dimensional Aggregate Metric &bull; Treats all lexical overlap as intentional dishonesty</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
      <!-- Tragic False Accusation -->
      <div class="rounded-xl bg-slate-800/90 border border-amber-500/50 p-4">
        <div class="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>TRAGIC FALSE ACCUSATION</span>
          <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-700">Clerical Slip</span>
        </div>
        <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs m-0">
          <li>Student cited source properly in-text: <code>(Kahneman, 2011, p. 74)</code></li>
          <li>Source present in Works Cited bibliography</li>
          <li>Student inadvertently omitted quotation punctuation</li>
          <li><strong>Outcome:</strong> Disciplinary referral, F grade, destroyed student-teacher relationship</li>
        </ul>
      </div>

      <!-- Missed Subtle Fraud -->
      <div class="rounded-xl bg-slate-800/90 border border-rose-500/50 p-4">
        <div class="text-xs font-bold text-rose-300 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>MISSED SUBTLE FRAUD</span>
          <span class="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-700">Cloaked Theft</span>
        </div>
        <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs m-0">
          <li>Student copied mosaic clauses from 4 unindexed blogs</li>
          <li>Used AI paraphrasers / synonym spinners to evade string match</li>
          <li>Zero source attribution or signal phrases provided</li>
          <li><strong>Outcome:</strong> Intentional academic fraud evades detection entirely</li>
        </ul>
      </div>
    </div>

    <div class="text-[11px] text-teal-300 bg-teal-950/40 p-3 rounded-xl border border-teal-800/50 font-medium text-center">
      <strong>THE CHECKMARK SOLUTION:</strong> Move from blunt percentages to transparent forensic receipts: Side-by-side source diffs, discrete visual taxonomy badges, and keystroke writing process replay.
    </div>
  </div>
</div>

<p>When an automated tool outputs an aggregate similarity score without granular context, it collapses three completely different cognitive, developmental, and ethical writing behaviors into a single category:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="rounded-xl border border-amber-500/30 bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-amber-600 dark:text-amber-400 text-xs">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-xs font-bold dark:bg-amber-950 dark:text-amber-300">1</span>
      <span>Accidental Missing Quotation Marks</span>
    </div>
    <div class="text-[11px] font-semibold text-foreground mb-1">Clerical / Mechanical Formatting Error</div>
    <p class="text-xs text-muted-foreground m-0">
      The student conducted genuine research, intended to attribute exact wording, cited the author parenthetically (e.g., <code>(Kahneman, 2011, p. 74)</code>), and included the source in their bibliography&mdash;yet inadvertently omitted opening and closing quotation marks during drafting or final editing.
    </p>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-teal-600 dark:text-teal-400 text-xs">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-800 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">2</span>
      <span>Uncited Patchwriting</span>
    </div>
    <div class="text-[11px] font-semibold text-foreground mb-1">Developmental Synthesis Failure</div>
    <p class="text-xs text-muted-foreground m-0">
      The student encountered dense, authoritative disciplinary prose in their Zone of Proximal Development (ZPD), lacked the conceptual or linguistic fluency to synthesize the idea independently, and copied the source&rsquo;s syntactic skeleton while swapping select words with thesaurus synonyms&mdash;failing to provide proper in-text citations.
    </p>
  </div>

  <div class="rounded-xl border border-rose-500/30 bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-rose-600 dark:text-rose-400 text-xs">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-800 text-xs font-bold dark:bg-rose-950 dark:text-rose-300">3</span>
      <span>Deceptive Mosaic Plagiarism</span>
    </div>
    <div class="text-[11px] font-semibold text-foreground mb-1">Intentional Authorship Fraud</div>
    <p class="text-xs text-muted-foreground m-0">
      The student systematically cut and pasted clauses from multiple disparate websites, deliberately stripped author names, concealed transitions with generic filler words, and used paraphrasing tools to disguise intellectual theft.
    </p>
  </div>
</div>

<h3>The Pedagogical Cost of Misdiagnosis</h3>

<p>Confusing these three scenarios carries severe institutional and human costs:</p>

<ul>
  <li><strong>Criminalizing the Learning Process:</strong> Accusing a novice writer of intentional plagiarism when they are struggling with the cognitive load of academic synthesis causes severe writing anxiety, alienates emerging scholars, and disproportionately penalizes first-generation, English Language Learner (ELL), and neurodivergent students.</li>
  <li><strong>Trivializing Real Dishonesty:</strong> When academic integrity boards spend dozens of hours adjudicating missing quotation marks as honor code violations, they exhaust institutional resources and fail to develop robust forensic protocols for contract cheating, second-screen transcription, and deceptive mosaic cloaking.</li>
  <li><strong>Eroding the Instructional Alliance:</strong> The foundational philosophy of <strong>Checkmark Plagiarism</strong> is <strong>&ldquo;Stop guessing, start trusting.&rdquo;</strong> When educators possess transparent, multi-dimensional evidence&mdash;the &ldquo;receipts&rdquo;&mdash;they can hold supportive, formative conferences rather than hostile interrogations.</li>
</ul>

<hr class="my-8 border-border" />

<h2>2. Theoretical Foundations: Rebecca Moore Howard and the Citation Project</h2>

<p>To build an objective, evidence-based diagnostic framework, educational institutions must ground their integrity policies in composition theory and empirical research.</p>

<!-- Source Integration Spectrum Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    THE SOURCE INTEGRATION SPECTRUM IN ACADEMIC WRITING
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    How cognitive working memory constraints produce divergent textual phenomena requiring differentiated pedagogical responses
  </p>

  <div class="space-y-4">
    <div class="rounded-xl bg-slate-800/90 p-3.5 border border-slate-700 text-center">
      <span class="text-xs text-slate-300 font-medium">
        Novice Writer Encounters Dense Disciplinary Scholarship &rarr; Severe Cognitive Working Memory Load
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="rounded-xl bg-slate-800/90 border border-emerald-500/50 p-4">
        <div class="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
          ACCIDENTAL MISSING QUOTES
        </div>
        <ul class="list-disc pl-4 space-y-1 text-slate-300 text-xs m-0">
          <li>Parenthetical citation present</li>
          <li>Full bibliography entry listed</li>
          <li>100% Verbatim source text</li>
          <li>Note-taking clerical slip</li>
        </ul>
        <div class="mt-3 pt-2 border-t border-slate-700 text-[11px] text-emerald-400 font-semibold">
          &bull; Action: 15m Clerical Coaching
        </div>
      </div>

      <div class="rounded-xl bg-slate-800/90 border border-amber-500/50 p-4">
        <div class="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
          UNCITED PATCHWRITING
        </div>
        <ul class="list-disc pl-4 space-y-1 text-slate-300 text-xs m-0">
          <li>Sentence syntax copied</li>
          <li>Synonym &ldquo;rogeting&rdquo; substitutions</li>
          <li>Disciplinary scaffolding in ZPD</li>
          <li>Cognitive overload failure</li>
        </ul>
        <div class="mt-3 pt-2 border-t border-slate-700 text-[11px] text-amber-400 font-semibold">
          &bull; Action: Developmental Scaffolding
        </div>
      </div>

      <div class="rounded-xl bg-slate-800/90 border border-rose-500/50 p-4">
        <div class="text-xs font-bold text-rose-300 uppercase tracking-wider mb-2">
          DECEPTIVE MOSAIC PLAGIARISM
        </div>
        <ul class="list-disc pl-4 space-y-1 text-slate-300 text-xs m-0">
          <li>Multi-source fragment collage</li>
          <li>Zero source attribution</li>
          <li>Intentional author concealment</li>
          <li>Cloaking &amp; evasion techniques</li>
        </ul>
        <div class="mt-3 pt-2 border-t border-slate-700 text-[11px] text-rose-400 font-semibold">
          &bull; Action: Disciplinary Adjudication
        </div>
      </div>
    </div>
  </div>
</div>

<h3>The Discovery of Patchwriting</h3>

<p>In her landmark 1992 and 1993 publications, composition scholar <strong>Rebecca Moore Howard</strong> challenged the prevailing binary that viewed all non-standard source integration as deliberate theft. Howard coined the term <strong>&ldquo;patchwriting&rdquo;</strong> to define a distinct, developmental writing behavior:</p>

<div class="my-6 rounded-2xl border border-teal-500/40 bg-teal-50/50 dark:bg-teal-950/20 p-5 shadow-sm">
  <div class="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-1.5">
    Rebecca Moore Howard (1993, 1999) &bull; Foundational Definition:
  </div>
  <p class="text-sm font-medium text-foreground italic m-0">
    &ldquo;Patchwriting: Copying from a source text which may be acknowledged or unacknowledged, deleting some words, altering grammatical structures, or substituting select synonyms while retaining the original syntactic architecture and semantic cadence.&rdquo;
  </p>
</div>

<p>Howard argued that patchwriting is not an act of deception; rather, it is an essential <strong>linguistic scaffold</strong> through which novice writers enter complex academic discourse communities.</p>

<p>When students read texts that exceed their current vocabulary or conceptual mastery, they cannot summarize or paraphrase from memory because they do not yet fully comprehend the disciplinary logic. Consequently, they borrow the author&rsquo;s sentence structure as a training wheel while substituting individual words.</p>

<h3>The Citation Project: Empirical Realities</h3>

<p>The <strong>Citation Project</strong> (Howard, Serviss, &amp; Rodrigue, 2010; Jamieson &amp; Howard, 2011)&mdash;a multi-institution empirical research study analyzing 1,911 citations across 174 student research papers from 16 colleges and universities&mdash;uncovered startling realities about how students use sources:</p>

<!-- Citation Project Table -->
<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Citation Project Finding</th>
        <th class="p-3">Empirical Percentage</th>
        <th class="p-3">Pedagogical Meaning</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Direct Copying or Patchwriting</td>
        <td class="p-3 font-bold text-amber-600 dark:text-amber-400">52% of all citations</td>
        <td class="p-3">Over half of all student citations rely on close syntactic mimicry or copying rather than original synthesis.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Verbatim Text Without Quotation Marks</td>
        <td class="p-3 font-bold text-teal-600 dark:text-teal-400">16% of all citations</td>
        <td class="p-3">Students frequently attempt attribution by providing author names or citations while omitting quotation punctuation.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Engagement Beyond Page 2 of Source</td>
        <td class="p-3 font-bold text-rose-600 dark:text-rose-400">&lt; 23% of citations</td>
        <td class="p-3">Students rarely read entire monographs or journal articles, extracting isolated quotes from the opening pages.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">True Synthesis / Full-Source Summary</td>
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">&lt; 6% of all citations</td>
        <td class="p-3">Fewer than 6% of students summarize an author&rsquo;s overarching argument across multiple paragraphs.</td>
      </tr>
    </tbody>
  </table>
</div>

<p>The empirical data is unequivocal: <strong>Novice writers overwhelmingly struggle with the mechanics of citation and the cognitive demands of synthesis.</strong> When schools treat patchwriting as an automatic violation of academic integrity rather than a pedagogical milestone, they penalize students for attempting to engage with challenging scholarship.</p>

<hr class="my-8 border-border" />

<h2>3. The Forensic Triad: Classifying the Three Distinct Patterns</h2>

<p>To distinguish accidental missing quotation marks from uncited patchwriting and deceptive mosaic plagiarism, educators must evaluate three interlocking forensic dimensions:</p>

<ol>
  <li><strong>Attribution Integrity:</strong> Are author signal phrases, parenthetical citations, or Works Cited entries present?</li>
  <li><strong>Linguistic &amp; Syntactic Architecture:</strong> Is the text 100% verbatim, synonym-substituted (&ldquo;rogeted&rdquo;), or fragmented across multiple sources?</li>
  <li><strong>Drafting Telemetry &amp; Keystroke Dynamics:</strong> Did the student type the passage with authentic drafting pauses, transcribe from notes, or paste in bulk from the clipboard?</li>
</ol>

<!-- Forensic Taxonomy Matrix Table -->
<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Pattern Type</th>
        <th class="p-3">Linguistic / Textual Proof</th>
        <th class="p-3">Attribution &amp; Telemetry Signals</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-amber-600 dark:text-amber-400">
          1. Accidental Missing Quotation Marks<br />
          <span class="text-[11px] text-muted-foreground font-normal">(Clerical / Mechanical)</span>
        </td>
        <td class="p-3">
          &bull; 90%&ndash;100% Verbatim Match<br />
          &bull; Source syntax identical<br />
          &bull; No synonym substitutions<br />
          &bull; Isolated single source
        </td>
        <td class="p-3">
          &bull; In-text citation present &amp; valid<br />
          &bull; Bibliographic entry complete<br />
          &bull; <strong>Essay Playback:</strong> Natural typing or paste from cited note buffer
        </td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">
          2. Uncited Patchwriting<br />
          <span class="text-[11px] text-muted-foreground font-normal">(Developmental / ZPD Scaffolding)</span>
        </td>
        <td class="p-3">
          &bull; 50%&ndash;85% Syntactic Match<br />
          &bull; Heavy synonym swapping (&ldquo;rogeting&rdquo;)<br />
          &bull; Source sentence cadence retained<br />
          &bull; Single passage focus
        </td>
        <td class="p-3">
          &bull; In-text citation missing or vague<br />
          &bull; May appear in bibliography<br />
          &bull; <strong>Essay Playback:</strong> Extended pauses, thesaurus lookups, high backspaces
        </td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-rose-600 dark:text-rose-400">
          3. Deceptive Mosaic Plagiarism<br />
          <span class="text-[11px] text-muted-foreground font-normal">(Intentional Theft / Authorship Fraud)</span>
        </td>
        <td class="p-3">
          &bull; Interleaved multi-source clauses<br />
          &bull; Syntactic fragmentation<br />
          &bull; Deliberate cloaking filler words<br />
          &bull; 3+ external web domains
        </td>
        <td class="p-3">
          &bull; Zero citations across all sources<br />
          &bull; Omitted from Works Cited<br />
          &bull; <strong>Essay Playback:</strong> Rapid clipboard pastes, minimal editing bursts
        </td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Deep Dive: Pattern 1 &mdash; The &ldquo;Accidental Missing Quotes&rdquo; Pattern</h3>

<p>In this scenario, a student quotes an expert source verbatim but neglects the quotation marks. Crucially, the student <strong>does not attempt to hide the source</strong>.</p>

<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-5 font-sans text-xs shadow-lg">
  <div class="text-teal-400 font-bold text-sm mb-3 border-b border-slate-800 pb-2">
    TEXT FORENSIC COMPARISON: PATTERN 1 (ACCIDENTAL MISSING QUOTATION MARKS)
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="text-amber-400 font-bold mb-1.5 flex items-center justify-between">
        <span>ORIGINAL SOURCE</span>
        <span class="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-mono">Doidge, 2007, p. 45</span>
      </div>
      <p class="text-slate-300 italic m-0 leading-relaxed">
        &ldquo;The brain is not a static organ, but a dynamic, plastic structure that remodels its neural circuitry in direct response to environmental stimuli and cognitive demand.&rdquo;
      </p>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="text-teal-400 font-bold mb-1.5 flex items-center justify-between">
        <span>STUDENT SUBMISSION</span>
        <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-700">🟡 Amber Badge</span>
      </div>
      <p class="text-slate-300 m-0 leading-relaxed">
        Neuroscientists have proven that <span class="bg-amber-500/20 text-amber-200 px-1 py-0.5 rounded font-semibold border-b border-amber-400">the brain is not a static organ, but a dynamic, plastic structure that remodels its neural circuitry in direct response to environmental stimuli and cognitive demand</span> <strong>(Doidge, 2007, p. 45)</strong>.
      </p>
    </div>
  </div>

  <div class="mt-4 pt-3 border-t border-slate-800 space-y-1 text-slate-300">
    <div class="text-teal-300 font-bold text-xs">FORENSIC MARKERS:</div>
    <div>&bull; <strong>Attribution Transparency:</strong> Explicitly names Norman Doidge, provides publication year (2007), cites exact page (p. 45), and lists reference in Works Cited.</div>
    <div>&bull; <strong>Verbatim Fidelity:</strong> Lexical overlap is ~100%. Student made zero effort to alter words or hide the match.</div>
    <div>&bull; <strong>Cognitive Cause:</strong> Student copied quote into research notes without quotes and transcribed it into draft, assuming parenthetical citation satisfied standards.</div>
  </div>
</div>

<h3>Deep Dive: Pattern 2 &mdash; The &ldquo;Uncited Patchwriting&rdquo; Pattern</h3>

<p>In uncited patchwriting, the student attempts to paraphrase a complex idea but cannot escape the original syntactic gravity. They substitute words without grasping how to restructure the sentence, and they omit the parenthetical citation—often because they mistakenly believe their word changes made the idea &ldquo;theirs.&rdquo;</p>

<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-5 font-sans text-xs shadow-lg">
  <div class="text-teal-400 font-bold text-sm mb-3 border-b border-slate-800 pb-2">
    TEXT FORENSIC COMPARISON: PATTERN 2 (UNCITED DEVELOPMENTAL PATCHWRITING)
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="text-amber-400 font-bold mb-1.5 flex items-center justify-between">
        <span>ORIGINAL SCHOLARSHIP</span>
        <span class="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-mono">Bartholomae, 1985, p. 134</span>
      </div>
      <p class="text-slate-300 italic m-0 leading-relaxed">
        &ldquo;Every time a student sits down to write for us, he has to invent the university for the occasion&mdash;that is, or he has to learn to speak our language, to speak as we do, to try on the peculiar ways of knowing, selecting, evaluating, reporting, concluding, and arguing.&rdquo;
      </p>
    </div>

    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700">
      <div class="text-rose-400 font-bold mb-1.5 flex items-center justify-between">
        <span>STUDENT SUBMISSION</span>
        <span class="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-700">🔴 Red Badge</span>
      </div>
      <p class="text-slate-300 m-0 leading-relaxed">
        <span class="bg-amber-500/20 text-amber-200 px-1 py-0.5 rounded font-semibold border-b border-amber-400">Whenever an emerging writer sits down to compose an academic paper, they must create the academic world for that moment.</span> They need to figure out how to talk in our specialized discourse, using unique methods of <span class="bg-amber-500/20 text-amber-200 px-1 py-0.5 rounded font-semibold border-b border-amber-400">understanding, choosing, assessing, communicating, and defending claims.</span>
      </p>
    </div>
  </div>

  <div class="mt-4 pt-3 border-t border-slate-800 space-y-1 text-slate-300">
    <div class="text-teal-300 font-bold text-xs">FORENSIC MARKERS:</div>
    <div>&bull; <strong>Syntactic Architecture Mimicry:</strong> Clause-by-clause structural reproduction (<em>Every time a student sits down &rarr; Whenever an emerging writer sits down</em>).</div>
    <div>&bull; <strong>Synonym Substitution (&ldquo;Rogeting&rdquo;):</strong> One-to-one synonym swapping (<em>knowing, selecting, evaluating &rarr; understanding, choosing, assessing</em>).</div>
    <div>&bull; <strong>Attribution Deficit:</strong> No parenthetical citation appears; source omitted from text.</div>
    <div>&bull; <strong>Cognitive Motivation:</strong> Student operating in Zone of Proximal Development, wrestling with theoretical abstraction without sufficient synthesis fluency.</div>
  </div>
</div>

<h3>Deep Dive: Pattern 3 &mdash; The &ldquo;Mosaic Fraud&rdquo; Pattern</h3>

<p>Mosaic plagiarism (also known as &ldquo;patchwork theft&rdquo; or &ldquo;textual cloaking&rdquo;) is an intentional effort to assemble an essay from multiple uncredited sources while disguising the theft through deliberate syntactic splicing.</p>

<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-5 font-sans text-xs shadow-lg">
  <div class="text-rose-400 font-bold text-sm mb-3 border-b border-slate-800 pb-2">
    TEXT FORENSIC COMPARISON: PATTERN 3 (DECEPTIVE MOSAIC PLAGIARISM)
  </div>
  <div class="space-y-3">
    <div class="rounded-xl bg-slate-800/90 p-3.5 border border-slate-700">
      <div class="text-xs text-slate-400 mb-1"><strong>Source A (Smithsonian, 2022):</strong> &ldquo;The Silk Road was never a single paved highway, but an intricate network of shifting caravan trails traversing central Eurasian steppes.&rdquo;</div>
      <div class="text-xs text-slate-400"><strong>Source B (World History Encyclopedia, 2021):</strong> &ldquo;Maritime trade routes gradually superseded overland paths as navigational compasses and Chinese junk ships revolutionized sea voyages.&rdquo;</div>
    </div>

    <div class="rounded-xl bg-slate-950 p-4 border border-rose-500/50">
      <div class="text-xs font-bold text-rose-300 mb-1.5 flex items-center justify-between">
        <span>STUDENT SUBMISSION (MOSAIC SPLICING)</span>
        <span class="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-700">🔴 Uncited Fraud</span>
      </div>
      <p class="text-slate-300 text-xs leading-relaxed m-0">
        Many historians forget that <span class="bg-rose-500/20 text-rose-200 px-1 py-0.5 rounded font-semibold border-b border-rose-400">an intricate network of shifting caravan trails traversing central Eurasian steppes</span> formed early commerce, but <span class="bg-rose-500/20 text-rose-200 px-1 py-0.5 rounded font-semibold border-b border-rose-400">navigational compasses and Chinese junk ships revolutionized sea voyages</span>, making overland transit obsolete.
      </p>
    </div>

    <div class="text-slate-300 text-xs space-y-1 pt-1">
      <div>&bull; <strong>Multi-Source Interleaving:</strong> Clause 1 from Source A spliced directly to Clause 2 from Source B using generic connective conjunctions.</div>
      <div>&bull; <strong>Total Attribution Erasure:</strong> Neither Source A nor Source B is cited in-text or included in Works Cited.</div>
      <div>&bull; <strong>Deliberate Concealment:</strong> Fragments stitched together to evade string-matching thresholds in legacy similarity checkers.</div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>4. Checkmark Plagiarism&rsquo;s Side-by-Side Source Proof &amp; Badge Architecture</h2>

<p>To eliminate the ambiguity of single-percentage scores, <strong>Checkmark Plagiarism</strong> provides a granular, multi-layered visual architecture that automatically triages text matches into four discrete pedagogical categories.</p>

<!-- 4-Badge Grid -->
<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
  <div class="rounded-xl border border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20 p-4">
    <div class="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-1">
      <span>🟢 Green Badge: Quoted &amp; Cited</span>
    </div>
    <div class="text-[11px] text-muted-foreground mb-2">Verified Scholarly Attribution &bull; 0% Integrity Penalty</div>
    <p class="m-0 text-foreground">
      Enclosed within valid quotation marks (<code>&ldquo;...&rdquo;</code>), accompanied by recognized citation format (APA, MLA, Chicago), and cross-referenced with bibliography. Automatically excluded from similarity calculations.
    </p>
  </div>

  <div class="rounded-xl border border-amber-500/40 bg-amber-50/40 dark:bg-amber-950/20 p-4">
    <div class="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">
      <span>🟡 Amber Badge: Cited but Unquoted</span>
    </div>
    <div class="text-[11px] text-muted-foreground mb-2">Formative Citation Mechanics Coaching &bull; ZPD Support</div>
    <p class="m-0 text-foreground">
      Lexical overlap exceeds 70% verbatim match, author signal phrase or parenthetical citation is present within 30 words, but quotation marks are missing. Flags passage for restorative citation coaching.
    </p>
  </div>

  <div class="rounded-xl border border-rose-500/40 bg-rose-50/40 dark:bg-rose-950/20 p-4">
    <div class="flex items-center gap-2 font-bold text-rose-800 dark:text-rose-300 text-sm mb-1">
      <span>🔴 Red Badge: Uncited External Match</span>
    </div>
    <div class="text-[11px] text-muted-foreground mb-2">Deep Forensic Review &bull; Patchwriting vs Fraud</div>
    <p class="m-0 text-foreground">
      High lexical or syntactic overlap with live web pages, journal articles, or repositories with <strong>no</strong> corresponding in-text citation. Triggers process telemetry audit.
    </p>
  </div>

  <div class="rounded-xl border border-purple-500/40 bg-purple-50/40 dark:bg-purple-950/20 p-4">
    <div class="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300 text-sm mb-1">
      <span>🟣 Purple Badge: Peer Cohort Match</span>
    </div>
    <div class="text-[11px] text-muted-foreground mb-2">Student Collaboration / Re-Use &bull; FERPA Zero-Training</div>
    <p class="m-0 text-foreground">
      Text matches an assignment submitted by another student within the same school district, LMS section, or multi-school consortium—without exposing student PII externally.
    </p>
  </div>
</div>

<h3>Synchronized Two-Pane Source Verification Workbench</h3>

<p>When reviewing an essay in Checkmark, educators do not receive a static PDF report. Instead, they interact with an active, two-pane synchronized forensic workbench:</p>

<!-- Two-Pane Workbench Mockup -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 font-mono text-xs shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm mb-4 pb-2 border-b border-slate-800 font-sans">
    CHECKMARK SYNCHRONIZED TWO-PANE VERIFICATION WORKBENCH
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
    <!-- Student Essay Draft Pane -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700 flex flex-col justify-between">
      <div>
        <div class="text-teal-400 font-bold mb-2 flex items-center justify-between font-sans">
          <span>STUDENT ESSAY DRAFT PANE (LEFT)</span>
          <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-700 font-mono">🟡 CITED BUT UNQUOTED</span>
        </div>
        <div class="space-y-3 text-slate-300 text-[11px] leading-relaxed font-sans bg-slate-950/70 p-3.5 rounded-lg border border-slate-800">
          <p class="m-0">
            ...Recent organizational studies prove that
            <span class="bg-amber-500/20 text-amber-200 px-1 py-0.5 rounded font-semibold border-b-2 border-amber-400">
              transformational leadership behaviors significantly amplify team psychological safety during high-stress corporate restructuring events
            </span> (Bass, 2023, p. 114)...
          </p>
        </div>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700/60 font-sans text-[11px] text-slate-400 space-y-1">
        <div class="text-teal-300 font-bold">EVIDENCE CARD &bull; BADGE AMBER:</div>
        <div>&bull; Match Type: 94% Verbatim Borrowing</div>
        <div>&bull; Parenthetical Citation: DETECTED (Bass, 2023)</div>
        <div>&bull; Quotation Punctuation: MISSING</div>
      </div>
    </div>

    <!-- Original Source Verification Pane -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-slate-700 flex flex-col justify-between">
      <div>
        <div class="text-amber-400 font-bold mb-2 flex items-center justify-between font-sans">
          <span>ORIGINAL SOURCE VERIFICATION PANE (RIGHT)</span>
          <span class="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-mono">DOI: 10.1037/apl0000981</span>
        </div>
        <div class="space-y-3 text-slate-300 text-[11px] leading-relaxed font-sans bg-slate-950/70 p-3.5 rounded-lg border border-slate-800">
          <p class="m-0">
            &ldquo;<span class="bg-teal-500/20 text-teal-200 px-1 py-0.5 rounded font-semibold border-b-2 border-teal-400">Transformational leadership behaviors [significantly amplify] team psychological safety during high-stress corporate restructuring events</span>...&rdquo;
          </p>
        </div>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700/60 font-sans text-[11px] text-slate-400 space-y-1">
        <div class="text-teal-300 font-bold">SOURCE CROSS-REFERENCE CHECK:</div>
        <div>&bull; Bibliography Entry: VALID (APA 7th #4)</div>
        <div>&bull; Live DOI Status: VERIFIED ONLINE</div>
        <div>&bull; Action: Insert Formative Citation Prompt</div>
      </div>
    </div>
  </div>
</div>

<img src="/images/services/report-plagiarism-view.png" alt="Checkmark Plagiarism Full Verification Suite with Multidimensional Matching and AI Breakdown" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>5. Writing Process Dynamics: Patent-Pending Essay Playback™</h2>

<p>Text on a page represents only the final static artifact of writing. Surface text cannot reveal <em>how</em> the essay came into existence.</p>

<p>To definitively prove whether an uncited passage is the result of developmental struggling, a note-taking copy error, or intentional copy-paste fraud, Checkmark Plagiarism provides its flagship innovation: <a href="/services/writing-process" class="text-primary font-semibold underline"><strong>Patent-Pending Essay Playback™</strong></a>.</p>

<img src="/images/services/report-paste-evidence.png" alt="Checkmark Essay Playback Keystroke Dynamics and External Paste Telemetry" class="w-full rounded-2xl border border-border shadow-md my-8" />

<!-- Essay Playback Telemetry Mockup -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    ESSAY PLAYBACK™: TELEMETRY PROCESS RECONSTRUCTION
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    Keystroke-by-keystroke temporal reconstruction revealing authentic drafting vs clipboard dumps vs transcription
  </p>

  <div class="space-y-4">
    <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
      <div class="rounded-lg bg-slate-800/90 p-2.5 border border-slate-700">
        <div class="font-mono text-teal-400 font-bold text-xs">00:00</div>
        <div class="text-slate-300 text-[11px] font-semibold">Outline</div>
        <div class="text-[10px] text-slate-400">Builds thesis</div>
      </div>
      <div class="rounded-lg bg-slate-800/90 p-2.5 border border-slate-700">
        <div class="font-mono text-teal-400 font-bold text-xs">12:45</div>
        <div class="text-slate-300 text-[11px] font-semibold">Pause (4m)</div>
        <div class="text-[10px] text-slate-400">Consults source</div>
      </div>
      <div class="rounded-lg bg-slate-800/90 p-2.5 border border-slate-700">
        <div class="font-mono text-teal-400 font-bold text-xs">24:10</div>
        <div class="text-slate-300 text-[11px] font-semibold">Drafting</div>
        <div class="text-[10px] text-slate-400">Types sentence</div>
      </div>
      <div class="rounded-lg bg-slate-800/90 p-2.5 border border-slate-700">
        <div class="font-mono text-amber-400 font-bold text-xs">38:20</div>
        <div class="text-slate-300 text-[11px] font-semibold">14 Revisions</div>
        <div class="text-[10px] text-slate-400">Swaps synonyms</div>
      </div>
      <div class="rounded-lg bg-slate-800/90 p-2.5 border border-slate-700 col-span-2 sm:col-span-1">
        <div class="font-mono text-emerald-400 font-bold text-xs">45:00</div>
        <div class="text-slate-300 text-[11px] font-semibold">Final Draft</div>
        <div class="text-[10px] text-slate-400">Adds in-text ref</div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-950 p-4 border border-teal-500/40 text-xs space-y-2">
      <div class="text-teal-300 font-bold flex items-center justify-between">
        <span>SCRUBBABLE TIMELINE TELEMETRY (1x to 8x Video Replay)</span>
        <span class="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-700">Telemetry Verified</span>
      </div>
      <div class="text-slate-300">&bull; <strong>Keystroke Dynamics:</strong> 48 WPM typing velocity with natural recursive cognitive composing pauses.</div>
      <div class="text-slate-300">&bull; <strong>External Paste Buffer:</strong> Zero clipboard injection detected across 45-minute session.</div>
      <div class="text-teal-300 font-semibold pt-1">&bull; CONCLUSION: Authentic developmental synthesis struggle (Patchwriting in ZPD). No cheating detected.</div>
    </div>
  </div>
</div>

<h3>Keystroke Telemetry Signatures: Three Divergent Behaviors</h3>

<!-- Telemetry Signatures Table -->
<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Telemetry Metric</th>
        <th class="p-3">Accidental Missing Quotes</th>
        <th class="p-3">Uncited Patchwriting</th>
        <th class="p-3">Deceptive Mosaic Fraud</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Typing Velocity</td>
        <td class="p-3">Steady (40–65 WPM) or cited note paste</td>
        <td class="p-3">Irregular bursts with long intra-sentence pauses</td>
        <td class="p-3 font-bold text-rose-600 dark:text-rose-400">Artificial bursts (0 &rarr; 800 WPM clipboard dump)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Cognitive Pauses</td>
        <td class="p-3">Brief pause prior to citation entry</td>
        <td class="p-3">Prolonged pauses (30–120s); frequent lookups</td>
        <td class="p-3 font-bold text-rose-600 dark:text-rose-400">Negligible composing pauses; rapid consecutive pastes</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Backspace / Revision</td>
        <td class="p-3">Low revision within quote; normal formatting</td>
        <td class="p-3 font-bold text-amber-600 dark:text-amber-400">Extremely high backspaces (30–80 per paragraph)</td>
        <td class="p-3 font-bold text-rose-600 dark:text-rose-400">Minimal revision; superficial synonym swaps only</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">External Paste Buffer</td>
        <td class="p-3">Single paste from research notes with cite</td>
        <td class="p-3">Zero paste OR single source + 30m rewrite</td>
        <td class="p-3 font-bold text-rose-600 dark:text-rose-400">Multiple pastes from uncredited URLs cached in log</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Diagnostic Verdict</td>
        <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">Clerical Note-Taking Slip</td>
        <td class="p-3 font-semibold text-amber-600 dark:text-amber-400">Developmental Synthesis Struggle</td>
        <td class="p-3 font-semibold text-rose-600 dark:text-rose-400">Intentional Mosaic Theft / Cloaking</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>1. External Paste Buffer Tracking with Full Text Preservation</h3>
<p>When a student pastes text from an external website or unindexed document into their essay, legacy tools only see the final text. If the student subsequently rewrites every sentence to evade string detection, traditional checkers lose the trail.</p>

<p><strong>Checkmark Plagiarism stores the complete original pasted clipboard text</strong>, timestamped to the millisecond. Even if the student deletes, rephrases, or rearranges every single word over the next two hours, the instructor can click <strong>&ldquo;Jump to Playback&rdquo;</strong> and view the raw clipboard payload that initiated the paragraph.</p>

<h3>2. Transcription Detection (Second-Screen / Phone Retyping)</h3>
<p>When students attempt to bypass clipboard detection by placing an essay on their smartphone or a second monitor and manually typing it out, they produce a distinct biometric signature:</p>
<ul>
  <li><strong>Mechanical, Constant Keystroke Cadence:</strong> Typing at a flat, rhythmic velocity (e.g., 55 WPM without variation).</li>
  <li><strong>Absence of Composing Pauses:</strong> Normal authentic writing involves recursive composing pauses where the writer stops for 5 to 45 seconds at clause boundaries to plan their next thought. Transcription writing exhibits zero planning pauses.</li>
  <li><strong>Low Revision Entropy:</strong> The student types from beginning to end with virtually zero backspaces or structural reorganization. Checkmark&rsquo;s telemetry engine flags this anomalous pattern as <strong>Potential Transcription</strong>.</li>
</ul>

<hr class="my-8 border-border" />

<h2>6. Multi-Factor AI Detection &amp; Teacher-in-the-Loop Rubric Autograding</h2>

<p>Modern student writing frequently combines external source borrowing with generative AI assistance. Checkmark provides an integrated suite that bridges plagiarism detection, AI writing analysis, and formative grading.</p>

<img src="/images/services/report-grading-view.png" alt="Checkmark AI Autograder with Quote-Anchored Rubric Feedback and Canvas LMS Passback" class="w-full rounded-2xl border border-border shadow-md my-8" />

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-teal-600 dark:text-teal-400 text-xs">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-800 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">1</span>
      <span>Passage-Level AI Detection</span>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Calibrated confidence sliders underline specific paragraphs; measures perplexity and burstiness; includes &lt;150 word guardrail (<code>N/A</code>) to prevent false positives.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-indigo-600 dark:text-indigo-400 text-xs">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold dark:bg-indigo-950 dark:text-indigo-300">2</span>
      <span>Teacher-in-the-Loop Autograder</span>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Quote-anchored rubric justifications substantiate draft point recommendations; generates formative sentence-level revision prompts for patchwriting.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm sm:col-span-2 lg:col-span-1">
    <div class="flex items-center gap-2 mb-2 font-bold text-emerald-600 dark:text-emerald-400 text-xs">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold dark:bg-emerald-950 dark:text-emerald-300">3</span>
      <span>Seamless LMS Grade Passback</span>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Educators maintain 100% final authority. Once approved, final rubric scores and narrative feedback sync to <a href="/services/integrations/canvas-lms" class="text-primary font-semibold underline">Canvas LMS SpeedGrader</a> and <a href="/services/integrations/buzz-lms" class="text-primary font-semibold underline">Buzz LMS</a> with 1 click.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. Real-World Classroom Case Studies</h2>

<p>To illustrate how this multi-dimensional evidentiary framework operates in real educational settings, examine three authentic classroom scenarios:</p>

<!-- Case Study 1 Card -->
<div class="my-6 rounded-2xl border border-amber-500/40 bg-slate-900 text-slate-100 p-5 font-sans text-xs shadow-lg">
  <div class="text-amber-400 font-bold text-sm mb-2 border-b border-slate-800 pb-2 flex items-center justify-between">
    <span>CASE STUDY 1: AP CAPSTONE RESEARCH — NEUROPLASTICITY LITERATURE REVIEW</span>
    <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-700 font-mono">🟡 CITED BUT UNQUOTED</span>
  </div>
  <div class="space-y-2 text-slate-300">
    <div><strong>Submission Metrics:</strong> 3,200 Words &bull; Legacy Scanner Flag: 82% Similarity on Paragraph 4</div>
    <div><strong>Text Comparison:</strong> Source: <em>&ldquo;Synaptic pruning represents an experience-dependent mechanism...&rdquo;</em> (Doidge, 2021) &bull; Essay: <em>Synaptic pruning represents an experience-dependent mechanism... (Doidge, 2021, p. 112)</em></div>
    <div><strong>Essay Playback™ Telemetry:</strong> Typed steadily from reading notes; immediately typed parenthetical cite; reference entry added to Works Cited; zero clipboard injections.</div>
    <div class="p-2.5 rounded-lg bg-teal-950/60 border border-teal-800/50 text-teal-300 font-medium">
      <strong>Resolution:</strong> Diagnosed as a clerical note-taking error (omitted quotation marks). Teacher conducted a 5-minute supportive conference. Student added quotation marks and resubmitted. 100% protected academic record.
    </div>
  </div>
</div>

<!-- Case Study 2 Card -->
<div class="my-6 rounded-2xl border border-teal-500/40 bg-slate-900 text-slate-100 p-5 font-sans text-xs shadow-lg">
  <div class="text-teal-400 font-bold text-sm mb-2 border-b border-slate-800 pb-2 flex items-center justify-between">
    <span>CASE STUDY 2: COLLEGE COMPOSITION — PIAGET&rsquo;S COGNITIVE DEVELOPMENT</span>
    <span class="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-700 font-mono">🔴 DEVELOPMENTAL PATCHWRITING</span>
  </div>
  <div class="space-y-2 text-slate-300">
    <div><strong>Submission Metrics:</strong> 1,800 Words &bull; Legacy Scanner Flag: 64% Similarity across Paragraphs 2 &amp; 3</div>
    <div><strong>Text Comparison:</strong> Textbook: <em>&ldquo;Egocentrism in early childhood prevents children from assuming another&rsquo;s view.&rdquo;</em> &bull; Essay: <em>Self-centered thinking in young kids stops them from taking someone else&rsquo;s perspective on a situation.</em></div>
    <div><strong>Essay Playback™ Telemetry:</strong> 48 minutes spent on those two paragraphs; 14 thesaurus lookups; 62 backspace deletions; zero external pastes.</div>
    <div class="p-2.5 rounded-lg bg-teal-950/60 border border-teal-800/50 text-teal-300 font-medium">
      <strong>Resolution:</strong> Diagnosed as developmental patchwriting in ZPD. Professor held restorative conference with reverse-outlining exercise. Student rewrote with authentic synthesis. Protected from honor board tribunal.
    </div>
  </div>
</div>

<!-- Case Study 3 Card -->
<div class="my-6 rounded-2xl border border-rose-500/40 bg-slate-900 text-slate-100 p-5 font-sans text-xs shadow-lg">
  <div class="text-rose-400 font-bold text-sm mb-2 border-b border-slate-800 pb-2 flex items-center justify-between">
    <span>CASE STUDY 3: HIGH SCHOOL WORLD HISTORY — THE SILK ROAD COLLAGE</span>
    <span class="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-700 font-mono">🔴 INTENTIONAL MOSAIC FRAUD</span>
  </div>
  <div class="space-y-2 text-slate-300">
    <div><strong>Submission Metrics:</strong> 1,200 Words &bull; Legacy Scanner Flag: 71% Similarity across 5 disparate sources</div>
    <div><strong>Text Comparison:</strong> Clause 1 from History.com + Clause 2 from unindexed blog + Clause 3 from encyclopedia, stitched with filler phrases (<code>Furthermore, it is clear</code>).</div>
    <div><strong>Essay Playback™ Telemetry:</strong> Total session duration: 6 minutes, 12 seconds; 7 distinct external clipboard pastes totaling 940 words; original URLs captured in Checkmark paste buffer.</div>
    <div class="p-2.5 rounded-lg bg-rose-950/60 border border-rose-800/50 text-rose-300 font-medium">
      <strong>Resolution:</strong> Clear intentional fraud proven by playback receipts and clipboard cache. Student admitted to assembling the paper under time pressure and was enrolled in a restorative research ethics workshop.
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. The 4-Phase Restorative Citation Adjudication Protocol</h2>

<p>To operationalize these forensic capabilities across classrooms, departments, and academic integrity committees, institutions should implement Checkmark&rsquo;s <strong>4-Phase Restorative Citation Adjudication Protocol</strong>.</p>

<!-- 4-Phase Protocol Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    THE 4-PHASE RESTORATIVE CITATION ADJUDICATION WORKFLOW
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    A structured protocol separating mechanical citation coaching from disciplinary adjudication
  </p>

  <div class="space-y-4">
    <div class="rounded-xl bg-slate-800/90 border border-emerald-500/40 p-4">
      <div class="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">PHASE 1: AUTOMATED MULTI-BADGE TRIAGE &amp; TELEMETRY AUDIT</div>
      <p class="text-xs text-slate-300 m-0">Checkmark automatically classifies matches into 🟢, 🟡, 🔴, 🟣 badges. Automated screening separates cited formatting slips from uncited borrowing.</p>
    </div>

    <div class="rounded-xl bg-slate-800/90 border border-indigo-500/40 p-4">
      <div class="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">PHASE 2: DISCIPLINARY TEXT FORENSICS &amp; SYNTACTIC COMPARISON</div>
      <p class="text-xs text-slate-300 m-0">Instructor opens Two-Pane Synchronized Workbench. Reviews inline diffs (Verbatim vs Rogeted vs Spliced). Cross-references student bibliography with identified source URLs.</p>
    </div>

    <div class="rounded-xl bg-slate-800/90 border border-amber-500/40 p-4">
      <div class="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">PHASE 3: SUPPORTIVE RESTORATIVE STUDENT CONFERENCE</div>
      <p class="text-xs text-slate-300 m-0">Teacher and student review Essay Playback™ timeline together. Non-accusatory inquiry: <em>&ldquo;Walk me through your drafting process here.&rdquo;</em> Review keystroke pauses, paste logs, and drafting struggle in real time.</p>
    </div>

    <div class="rounded-xl bg-slate-800/90 border border-teal-500/40 p-4">
      <div class="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">PHASE 4: PEDAGOGICAL SCAFFOLDING &amp; RESUBMISSION PATHWAY</div>
      <p class="text-xs text-slate-300 m-0">Accidental Missing Quotes &rarr; 15-Minute Formatting Fix. Developmental Patchwriting &rarr; Reverse-Outlining Coaching. Intentional Mosaic Fraud &rarr; Academic Integrity Hearing with Defensible Proof.</p>
    </div>
  </div>
</div>

<h3>Phase 3 Dialogue Scripts for Restorative Conferences</h3>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-amber-500/40 bg-amber-50/50 dark:bg-amber-950/20 p-4">
    <div class="font-bold text-xs text-amber-800 dark:text-amber-300 mb-1">For Amber Badges (Cited but Unquoted):</div>
    <p class="text-xs text-foreground italic m-0">
      &ldquo;I see you referenced Professor Smith here, and your draft shows you typed this from your notes. Did you intend for this to be an exact quote, or were you trying to summarize in your own words? Let&rsquo;s look at quotation mechanics so you can format this correctly.&rdquo;
    </p>
  </div>

  <div class="rounded-xl border border-teal-500/40 bg-teal-50/50 dark:bg-teal-950/20 p-4">
    <div class="font-bold text-xs text-teal-800 dark:text-teal-300 mb-1">For Red Badges (Developmental Patchwriting):</div>
    <p class="text-xs text-foreground italic m-0">
      &ldquo;I noticed in Essay Playback that you spent 40 minutes working through this paragraph and looking up alternative words. You were working so hard on synonyms that you lost your own voice. Let&rsquo;s practice explaining this concept out loud without looking at the source.&rdquo;
    </p>
  </div>

  <div class="rounded-xl border border-rose-500/40 bg-rose-50/50 dark:bg-rose-950/20 p-4">
    <div class="font-bold text-xs text-rose-800 dark:text-rose-300 mb-1">For Red Badges (Mosaic Fraud):</div>
    <p class="text-xs text-foreground italic m-0">
      &ldquo;The playback shows seven large text blocks pasted into the document in under two minutes from these three external websites. Can you explain where these notes originated and why no citations were included?&rdquo;
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>9. Comprehensive Diagnostic Decision Flowchart</h2>

<p>For department chairs, writing program administrators, and honor council officers, this diagnostic flowchart establishes an objective standard for adjudicating similarity reports:</p>

<!-- Diagnostic Decision Flowchart Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    CHECKMARK DIAGNOSTIC TRIAGE DECISION TREE
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    Step-by-step diagnostic pathway from similarity match to pedagogical action
  </p>

  <div class="space-y-4 text-xs">
    <div class="rounded-xl bg-slate-800/90 p-3 text-center border border-slate-700 font-semibold text-slate-200">
      [ STEP 1: SIMILARITY MATCH FLAGGED ON PASSAGE ]
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- In-Text Citation Present YES -->
      <div class="rounded-xl bg-slate-800/90 border border-teal-500/40 p-4 space-y-3">
        <div class="text-teal-300 font-bold uppercase text-[11px]">Citation / Author Signal Phrase: PRESENT</div>
        <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2">
          <div class="text-slate-300"><strong>Is lexical match &gt;70% verbatim?</strong></div>
          <div class="grid grid-cols-2 gap-2 pt-1">
            <div class="bg-amber-950/60 border border-amber-700/60 p-2 rounded text-amber-200 text-[11px]">
              <strong>YES: 🟡 AMBER BADGE</strong><br />
              Cited but Unquoted<br />
              &bull; Action: Formative citation coaching &amp; rapid resubmit
            </div>
            <div class="bg-emerald-950/60 border border-emerald-700/60 p-2 rounded text-emerald-200 text-[11px]">
              <strong>NO: 🟢 GREEN BADGE</strong><br />
              Quoted &amp; Cited<br />
              &bull; Action: Award full synthesis credit
            </div>
          </div>
        </div>
      </div>

      <!-- In-Text Citation NO -->
      <div class="rounded-xl bg-slate-800/90 border border-rose-500/40 p-4 space-y-3">
        <div class="text-rose-300 font-bold uppercase text-[11px]">Citation / Author Signal Phrase: MISSING</div>
        <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2">
          <div class="text-slate-300"><strong>Examine Syntactic Structure &amp; Telemetry:</strong></div>
          <div class="grid grid-cols-2 gap-2 pt-1">
            <div class="bg-teal-950/60 border border-teal-700/60 p-2 rounded text-teal-200 text-[11px]">
              <strong>🔴 PATCHWRITING</strong><br />
              Single source scaffold, high pauses, backspaces<br />
              &bull; Action: Reverse-outlining &amp; rewrite
            </div>
            <div class="bg-rose-950/60 border border-rose-700/60 p-2 rounded text-rose-200 text-[11px]">
              <strong>🔴 MOSAIC FRAUD</strong><br />
              3+ web pastes, rapid 6m dump, no pauses<br />
              &bull; Action: Integrity conduct referral
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>10. Institutional Policy Templates for Syllabi and Handbooks</h2>

<p>School districts and universities must modernize their academic integrity policies to clearly distinguish between formatting errors, developmental writing stages, and intentional academic dishonesty.</p>

<!-- Sample Syllabus Policy Card -->
<div class="my-6 rounded-2xl border border-teal-500/40 bg-teal-50/40 dark:bg-slate-900 p-6 text-foreground font-sans shadow-lg">
  <div class="text-center font-bold text-teal-800 dark:text-teal-400 text-sm uppercase tracking-wide mb-2">
    SAMPLE SYLLABUS POLICY: TRANSPARENT SOURCE INTEGRATION
  </div>
  <p class="text-center text-xs text-muted-foreground mb-4">
    Ready-to-adopt policy language distinguishing developmental synthesis from academic dishonesty
  </p>

  <div class="space-y-3 text-xs leading-relaxed text-foreground bg-card/80 dark:bg-slate-950/80 p-4 rounded-xl border border-border">
    <p class="m-0">
      <em>&ldquo;In this course, learning to write means learning to enter academic conversations. We recognize that engaging with complex scholarship is challenging, and our goal is to help you develop authentic synthesis and citation skills.</em>
    </p>
    <div class="space-y-1.5 pt-1">
      <div><strong>1. Intentional Plagiarism vs. Developmental Writing:</strong></div>
      <ul class="list-disc pl-4 space-y-1 text-muted-foreground m-0">
        <li><strong>Deceptive Plagiarism</strong> (submitting uncredited work, using essay mills, pasting unauthorized content, or concealing sources) is a serious integrity violation.</li>
        <li><strong>Accidental Formatting Errors</strong> (omitting quotation marks around a cited source) and <strong>Developmental Patchwriting</strong> (over-relying on source sentence structures while learning to paraphrase) are treated as pedagogical milestones supported by citation coaching.</li>
      </ul>
    </div>
    <div class="space-y-1.5 pt-1">
      <div><strong>2. Multi-Dimensional Evidence with Checkmark Plagiarism:</strong></div>
      <p class="text-muted-foreground m-0">
        <em>This course uses Checkmark Plagiarism to provide transparent, multi-dimensional writing feedback. Rather than relying on black-box similarity scores, Checkmark analyzes side-by-side source alignment, citation badges, and Essay Playback™ drafting history. If a citation issue is detected, we will review the playback telemetry together in a supportive conference to help you master source synthesis.&rdquo;</em>
      </p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>11. Frequently Asked Questions (FAQs)</h2>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-semibold text-foreground mb-2 mt-0 pt-0">1. How does Checkmark detect missing quotation marks if a student uses an uncommon citation style?</h3>
    <p class="text-xs text-muted-foreground m-0">
      Checkmark&rsquo;s citation parsing engine is trained on all major international citation styles (APA 7th, MLA 9th, Chicago/Turabian 17th, Harvard, IEEE, and AMA), as well as narrative signal phrases (e.g., <em>&ldquo;According to Johnson (2022)...&rdquo;</em> or <em>&ldquo;As noted by the World Health Organization...&rdquo;</em>). If an author signal phrase or parenthetical marker appears within 30 words of an unquoted verbatim match, the system automatically assigns a 🟡 <strong>Cited but Unquoted (Amber Badge)</strong> and cross-checks the student&rsquo;s bibliography.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-semibold text-foreground mb-2 mt-0 pt-0">2. Can Essay Playback™ distinguish between speech-to-text dictation and copied AI text?</h3>
    <p class="text-xs text-muted-foreground m-0">
      Yes. Speech-to-text dictation generates continuous, natural-language sentence streams characterized by rapid word bursts followed by periodic conversational pauses, phonetic transcription corrections, and punctuation insertions. In contrast, pasted AI text appears as a single instantaneous clipboard dump (0 ms elapsed time for hundreds of words). Furthermore, Checkmark&rsquo;s external paste buffer captures the raw clipboard contents immediately upon injection.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-semibold text-foreground mb-2 mt-0 pt-0">3. How does Checkmark protect student privacy under FERPA and COPPA?</h3>
    <p class="text-xs text-muted-foreground m-0">
      Checkmark Plagiarism operates under a strict <strong>Zero Data Retention for AI Training</strong> architecture. Student submissions are encrypted in transit and at rest using enterprise-grade AES-256 encryption. Student essays are <strong>never</strong> used to train public or commercial large language models (LLMs). When cross-referencing peer matches across schools or districts (🟣 <strong>Peer Cohort Match</strong>), Checkmark displays text alignment without ever disclosing student names, student IDs, or institutional affiliations.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-semibold text-foreground mb-2 mt-0 pt-0">4. What happens if a student claims they wrote their essay in another program and pasted it in?</h3>
    <p class="text-xs text-muted-foreground m-0">
      If a student drafts their essay in an external tool (such as an offline desktop editor) and pastes the full text into the LMS, Essay Playback™ will flag a single bulk paste event. Checkmark provides clear workflows for this scenario: instructors can request the student upload the original <code>.docx</code> file or Google Doc version history. Checkmark&rsquo;s multi-platform integrations can parse native Google Docs revision history and Microsoft Word track changes to verify the external composing timeline.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-semibold text-foreground mb-2 mt-0 pt-0">5. Why does Checkmark display N/A for AI detection on short text under 150 words?</h3>
    <p class="text-xs text-muted-foreground m-0">
      Statistical AI writing detection requires sufficient linguistic sample sizes to measure perplexity and burstiness accurately. Analyzing text samples below 150 words produces unacceptably high false-positive rates because short answers naturally exhibit low syntactic variance. Rather than presenting misleading probability percentages, Checkmark enforces an honest <strong>&lt;150 Word Guardrail (<code>N/A</code>)</strong> to protect students from unwarranted accusations.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-semibold text-foreground mb-2 mt-0 pt-0">6. Can students bypass Essay Playback™ by manually retyping text from a phone or second screen?</h3>
    <p class="text-xs text-muted-foreground m-0">
      No. Manual transcription produces a distinct, unnatural keystroke signature: a flat, mechanical typing velocity with virtually zero recursive composing pauses, no structural outlining transitions, and an abnormally low backspace count. Checkmark&rsquo;s telemetry engine compares the student&rsquo;s typing dynamics against natural cognitive composing models and alerts the instructor to <strong>Potential Manual Transcription</strong>.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-semibold text-foreground mb-2 mt-0 pt-0">7. How does Checkmark integrate with Canvas LMS and Buzz LMS gradebooks?</h3>
    <p class="text-xs text-muted-foreground m-0">
      Checkmark features seamless LTI 1.3 enterprise integrations with <a href="/services/integrations/canvas-lms" class="text-primary font-semibold underline">Canvas LMS</a>, <a href="/services/integrations/buzz-lms" class="text-primary font-semibold underline">Buzz LMS</a>, Google Classroom, and Moodle. When an instructor completes a rubric evaluation on Checkmark&rsquo;s platform, the autograded rubric scores, quote-anchored justifications, and formative feedback comments sync directly back to <strong>Canvas SpeedGrader</strong> or the Buzz gradebook with a single click, eliminating duplicate grading and manual data entry.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>12. Conclusion: Moving from Punitive Policing to Restorative Growth</h2>

<p>The traditional paradigm of academic integrity—relying on blunt, single-percentage similarity scores that treat novice learning struggles identically to intentional fraud—has failed students and educators alike. It creates an adversarial classroom climate, triggers unwarranted disciplinary tribunals, and fails to teach students how to synthesize scholarly research.</p>

<p>By implementing <strong>Checkmark Plagiarism&rsquo;s</strong> multi-dimensional evidentiary suite:</p>
<ol>
  <li><strong>Side-by-Side Synchronized Source Verification</strong> provides transparent, line-by-line textual proof with live links and inline diffs.</li>
  <li><strong>Four Discrete Citation Badges (🟢, 🟡, 🔴, 🟣)</strong> automatically triage compliant citations, formatting slips, developmental patchwriting, and cohort sharing.</li>
  <li><strong>Patent-Pending Essay Playback™</strong> reconstructs the complete temporal drafting session, preserving original paste buffers and capturing keystroke dynamics.</li>
  <li><strong>Teacher-in-the-Loop Rubric Autograding</strong> converts integrity analysis into formative, quote-anchored revision prompts synchronized with LMS gradebooks.</li>
</ol>

<p>When educators possess objective, multi-factor evidence, they no longer have to guess about student intent. They can protect innocent students, address developmental synthesis hurdles with empathy, and uphold institutional standards with total confidence.</p>

<div class="my-8 rounded-2xl border border-teal-500/40 bg-gradient-to-r from-teal-900/20 via-slate-900/40 to-teal-900/20 p-6 text-center shadow-lg">
  <h3 class="text-lg font-bold text-foreground mb-2 mt-0 pt-0">Stop Guessing, Start Trusting</h3>
  <p class="text-xs text-muted-foreground max-w-xl mx-auto mb-4">
    Equip your faculty and academic integrity officers with transparent, multi-dimensional receipts that nurture authentic, confident student writers.
  </p>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a href="/contact" class="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
      Schedule an Institutional Demo
    </a>
    <a href="/services/plagiarism-detection" class="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
      Explore Multidimensional Plagiarism Detection
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
      currentSlug="2026/8/what-evidence-proves-uncited-patchwriting-versus-accidental-missing-quotation-marks"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
