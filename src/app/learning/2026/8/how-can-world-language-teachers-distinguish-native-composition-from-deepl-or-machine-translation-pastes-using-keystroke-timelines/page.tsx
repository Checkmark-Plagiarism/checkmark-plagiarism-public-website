import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can World Language Teachers Distinguish Native Composition From DeepL or Machine Translation Pastes Using Keystroke Timelines? | Checkmark Plagiarism",
  description: "An authoritative pedagogical and technical guide for World Language educators, AP/IB language coordinators, Dual-Language Immersion specialists, and department chairs on using keystroke telemetry and Essay Playback™ to separate authentic target-language drafting from DeepL, Google Translate, and second-screen transcription.",
  keywords: [
    "World Language AI detection",
    "DeepL translation detection",
    "foreign language writing telemetry",
    "keystroke playback language teachers",
    "AP Spanish writing authenticity",
    "machine translation paste detection",
    "L2 writing process replay",
    "WordReference vs DeepL policy",
    "second-screen transcription foreign language",
    "Checkmark Plagiarism Essay Playback"
  ],
  openGraph: {
    images: [
      "/images/learning/how-can-world-language-teachers-distinguish-native-composition-from-deepl-or-machine-translation-pastes-using-keystroke-timelines/featured.png",
      "/images/services/report-paste-evidence.png",
      "/images/services/report-grading-view.png"
    ],
  },
};

const meta = {
  title: "How Can World Language Teachers Distinguish Native Composition From DeepL or Machine Translation Pastes Using Keystroke Timelines? | Checkmark Plagiarism",
  description: "An authoritative pedagogical and technical guide for World Language educators, AP/IB language coordinators, Dual-Language Immersion specialists, and department chairs on using keystroke telemetry and Essay Playback™ to separate authentic target-language drafting from DeepL, Google Translate, and second-screen transcription.",
  "opengraph-image": "/images/learning/how-can-world-language-teachers-distinguish-native-composition-from-deepl-or-machine-translation-pastes-using-keystroke-timelines/featured.png",
  date: "08-19-2026",
  readTime: "~16 min read",
  category: "Detection",
  categories: ["Detection", "World Languages", "Pedagogy", "Writing Telemetry", "Teacher Guide"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<!-- Executive Summary Callout Box -->
<div class="my-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
    <p class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Executive Summary &amp; SLA Integrity Directive</p>
  </div>
  <p class="text-base text-foreground leading-relaxed">
    The rapid proliferation of advanced Neural Machine Translation (NMT) engines—predominantly <strong>DeepL</strong>, <strong>Google Translate</strong>, and <strong>Apple Translate</strong>—alongside multimodal generative AI has triggered an unprecedented assessment crisis across K-12 and collegiate World Language, Dual-Language Immersion, and AP/IB language classrooms (Spanish, French, German, Chinese, Japanese, and Italian). When language learners draft essays in English within external tabs, run their text through neural translation engines, and inject target-language paragraphs directly into assignments, traditional static text evaluation collapses.
  </p>
  <p class="text-base text-foreground leading-relaxed mt-3">
    Legacy probabilistic AI detectors fail catastrophically in Second Language (L2) contexts. Because developing language learners write with restricted lexicons, formulaic syntactic structures, and repetitive sentence frames, statistical detectors routinely flag authentic student compositions as AI-generated (<strong>false positives</strong>). Conversely, DeepL&apos;s polished, grammatically pristine translations generate natural human-like perplexity profiles that easily bypass generic statistical classifiers (<strong>false negatives</strong>).
  </p>
  <p class="text-base text-foreground leading-relaxed mt-3">
    The definitive solution lies in <strong>Writing Process Telemetry</strong> and <strong>Patent-Pending <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a></strong>. By capturing real-time temporal typing dynamics, teachers can contrast the undeniable physiological and cognitive signatures of authentic L2 composition—depressed typing velocity (12–25 WPM), frequent inflectional/conjugational backspacing, and lexical lookup pauses—against the telltale fingerprints of translation abuse: instantaneous clipboard injections (100–300 words in 0.0 seconds) or isochronous manual transcription from secondary screens. This comprehensive guide equips World Language educators, department chairs, and curriculum directors with forensic telemetry frameworks, permissible reference tool policies, restorative conference protocols, and classroom case studies to uphold academic rigor while protecting student trust.
  </p>
</div>

<p>
  For decades, foreign language educators evaluated written proficiency through structured output: short paragraph responses in Level I/II, reflective narrative journals in Level III/IV, and timed cultural comparison or argumentative synthesis essays in Advanced Placement (AP) and International Baccalaureate (IB) courses. Writing served as the primary window into a student&apos;s <strong>interlanguage</strong>—the dynamic, evolving linguistic system that bridges their native tongue (L1) and their developing target language (L2).
</p>

<!-- Featured Hero Visual Card -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/learning/how-can-world-language-teachers-distinguish-native-composition-from-deepl-or-machine-translation-pastes-using-keystroke-timelines/featured.png" 
    alt="Checkmark World Language Telemetry Dashboard showing keystroke timeline analytics, authentic L2 typing dynamics, and DeepL machine translation paste detection" 
    class="w-full h-auto object-cover m-0"
  />
  <div class="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <span><strong>Figure 1.0:</strong> Checkmark World Language Writing Telemetry Suite — Visualizing Authentic L2 Drafting Dynamics vs. DeepL Injections.</span>
    <span class="text-teal-600 dark:text-teal-400 font-semibold">Keystroke Forensics &amp; SLA Analytics</span>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>1. The Assessment Crisis in Modern World Language Classrooms</h2>

<p>
  The mainstream adoption of high-accuracy Neural Machine Translation (NMT) and Large Language Models (LLMs) has fundamentally severed the link between the final written artifact and the student&apos;s actual linguistic competence. When evaluating a completed document, educators can no longer assume that advanced subordinate clauses, correct subjunctive moods, or sophisticated idiomatic expressions represent true cognitive acquisition.
</p>

<!-- Cognitive Comparison Grid -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">The Neural Translation Assessment Crisis in World Languages</div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Traditional Cycle -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-emerald-500/40 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-emerald-300 uppercase tracking-wide">The Traditional L2 Acquisition Cycle</span>
          <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">Active Cognitive Synthesis</span>
        </div>
        <ol class="space-y-2 text-slate-300 text-xs list-decimal pl-4">
          <li><strong>L2 Ideation &amp; Lexical Retrieval:</strong> Student retrieves foreign vocabulary from mental lexicon.</li>
          <li><strong>Morphosyntactic Assembly:</strong> Active conjugation, gender agreement, and case inflections.</li>
          <li><strong>Target-Language Typing:</strong> Character-by-character typing with natural hesitation pauses.</li>
          <li><strong>Immediate Self-Correction:</strong> Backspacing to fix verb stems, adjective agreements, and accents.</li>
          <li><strong>Neural Consolidation:</strong> Repeated communicative output strengthens interlanguage fluency.</li>
        </ol>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-xs text-emerald-300 font-medium">
        <strong>Pedagogical Outcome:</strong> Long-term neural pathway reinforcement and authentic communicative mastery.
      </div>
    </div>

    <!-- Machine-Translated Shortcut -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-rose-500/50 flex flex-col justify-between ring-1 ring-rose-500/30">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-rose-300 uppercase tracking-wide">The Machine-Translated Shortcut</span>
          <span class="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-bold">Total Cognitive Bypass</span>
        </div>
        <ol class="space-y-2 text-slate-300 text-xs list-decimal pl-4">
          <li><strong>L1 English Ideation:</strong> Student drafts complex thoughts entirely in native English.</li>
          <li><strong>Tab Switch to DeepL:</strong> Student inputs English text into Neural Machine Translation.</li>
          <li><strong>Instant NMT Conversion:</strong> DeepL outputs grammatically pristine target-language prose.</li>
          <li><strong>Clipboard Injection (Paste):</strong> 200+ words pasted into LMS editor in 0.0 seconds.</li>
          <li><strong>Illusion of Competence:</strong> Submission displays advanced syntax with zero mental struggle.</li>
        </ol>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-xs text-rose-300 font-medium">
        <strong>Pedagogical Outcome:</strong> Zero second language acquisition; complete bypass of communicative output practice.
      </div>
    </div>
  </div>

  <div class="mt-6 p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 text-center">
    <p class="text-xs text-teal-200 m-0">
      <strong>The Core Assessment Reality:</strong> When both submissions produce identical-looking final text, static inspection fails. Only <em>Writing Process Telemetry</em> exposes the temporal reality of how the essay came into existence.
    </p>
  </div>
</div>

<h3>1.1 The Cognitive Collapse of Bypassing the Output Hypothesis</h3>

<p>
  In applied linguistics, <strong>Merrill Swain&apos;s Output Hypothesis</strong> establishes that second language acquisition does not occur through passive input alone; learners must be pushed to produce spoken or written language. The cognitive struggle of formulating a sentence forces learners to:
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs">1</span>
      <h4 class="text-sm font-bold text-foreground m-0">Notice the Gap</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Recognize what they want to communicate versus what linguistic resources they currently possess in their active memory.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">2</span>
      <h4 class="text-sm font-bold text-foreground m-0">Test Hypotheses</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Experiment with grammatical structures, verb endings, and word order (e.g., trying a relative clause or stem-changing verb).
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs">3</span>
      <h4 class="text-sm font-bold text-foreground m-0">Metalinguistic Reflection</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Consciously evaluate structural rules (e.g., deciding between <em>Passé Composé</em> and <em>Imparfait</em>, or navigating <em>Por</em> vs. <em>Para</em>).
    </p>
  </div>
</div>

<p>
  When a student delegates sentence formulation to DeepL, this vital cognitive feedback loop is completely bypassed. The student produces a final document showcasing advanced subjunctive clauses, idiomatic colloquialisms, and flawless adjective agreement, yet their neurological interlanguage remains completely stagnant.
</p>

<h3>1.2 The &ldquo;Translation Trap&rdquo; in Secondary and Higher Education</h3>

<p>
  Surveys of secondary and postsecondary foreign language departments reveal that machine translation is the single most widespread form of unapproved digital assistance:
</p>

<!-- Statistics Cards Grid -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
  <div class="rounded-2xl border border-border bg-card p-5 text-center">
    <div class="text-3xl font-extrabold text-teal-600 dark:text-teal-400 mb-1">78%</div>
    <p class="text-xs text-muted-foreground m-0">of secondary language teachers encounter weekly submissions featuring vocabulary and grammar far exceeding assigned curricular levels.</p>
  </div>

  <div class="rounded-2xl border border-border bg-card p-5 text-center">
    <div class="text-3xl font-extrabold text-amber-600 dark:text-amber-400 mb-1">&gt; 65%</div>
    <p class="text-xs text-muted-foreground m-0">of students who use machine translation conflate full-sentence neural generation with looking up an isolated word in a dictionary.</p>
  </div>

  <div class="rounded-2xl border border-border bg-card p-5 text-center">
    <div class="text-3xl font-extrabold text-purple-600 dark:text-purple-400 mb-1">AP &amp; IB</div>
    <p class="text-xs text-muted-foreground m-0">educators face acute grading distortions when take-home essays sound native but in-class oral synthesis stalls completely.</p>
  </div>
</div>

<p>
  To resolve this crisis, educators must move beyond evaluating static text and examine the <strong>temporal writing process</strong> through which that text was produced.
</p>

<hr class="my-8 border-border" />

<h2>2. Why Statistical AI Detectors Fail Catastrophically in L2 Writing</h2>

<p>
  When generative AI detectors entered the edtech market, many schools attempted to use them to screen World Language essays. However, statistical AI detection engines—calibrated primarily on native English prose—produce devastating failure rates when applied to second-language writing.
</p>

<!-- False Positive vs False Negative Comparison Card -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">Why Statistical AI Detectors Collapse in Second Language Evaluation</div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Authentic Student Writing: False Positive -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-rose-500/40 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-slate-200 uppercase tracking-wide">Authentic L2 Student Writing</span>
          <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">Unfair Flag</span>
        </div>
        <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-4 mb-4">
          <li>Limited vocabulary palette and formulaic sentence stems (e.g., <em>&ldquo;Yo pienso que...&rdquo;</em>)</li>
          <li>Repetitive subject-verb-object syntax and simple sentence lengths</li>
          <li>Calculated by AI detector as: <strong>Low Perplexity &amp; Near-Zero Burstiness</strong></li>
        </ul>
      </div>
      <div class="p-3 rounded-lg bg-rose-950/50 border border-rose-500/30 text-center">
        <span class="text-xs font-bold text-rose-300 block mb-1">❌ CATASTROPHIC FALSE POSITIVE</span>
        <p class="text-[11px] text-slate-300 m-0">Flagged as 85–95% AI-Generated, punishing honest, diligent students for normal developmental writing constraints.</p>
      </div>
    </div>

    <!-- DeepL NMT Output: False Negative -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-amber-500/40 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-slate-200 uppercase tracking-wide">DeepL / Neural Machine Translation</span>
          <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">Cheating Missed</span>
        </div>
        <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-4 mb-4">
          <li>Sophisticated native phrasing, nuanced subordinations, and varied clause lengths</li>
          <li>Rich idiomatic transitions and literary-grade lexical collocations</li>
          <li>Calculated by AI detector as: <strong>High Natural Perplexity &amp; High Burstiness</strong></li>
        </ul>
      </div>
      <div class="p-3 rounded-lg bg-amber-950/50 border border-amber-500/30 text-center">
        <span class="text-xs font-bold text-amber-300 block mb-1">❌ CATASTROPHIC FALSE NEGATIVE</span>
        <p class="text-[11px] text-slate-300 m-0">Scored as 0% AI (Clean Human), allowing unauthorized full-paragraph machine translation pastes to slip through undetected.</p>
      </div>
    </div>
  </div>
</div>

<h3>2.1 The Mathematics of the False Positive: Low Perplexity &amp; Low Burstiness</h3>

<p>
  Statistical AI detectors evaluate text using two primary mathematical metrics:
</p>

<ul class="space-y-2 my-4">
  <li><strong>Perplexity (Word Predictability):</strong> A measure of how likely a language model is to predict the next word in a sequence. High perplexity indicates unexpected, creative word choices; low perplexity indicates highly predictable sequences.</li>
  <li><strong>Burstiness (Sentence Variation):</strong> A measure of structural diversity across sentence lengths, clause complexities, and cadence. Human native writers alternate between short punchy sentences and long, complex subordinate clauses (high burstiness).</li>
</ul>

<p>
  Developing language students operate with strict lexical constraints. A Spanish II student writing about their daily routine will write:
</p>

<blockquote class="my-4 border-l-4 border-teal-500 pl-4 italic text-muted-foreground">
  &ldquo;Me despierto a las siete. Me cepillo los dientes. Luego, desayuno huevos con pan. Voy a la escuela en autobús.&rdquo;
</blockquote>

<p>
  Because this text uses introductory grammar patterns with uniform subject-verb-object structures, an AI detector calculates <strong>extremely low perplexity</strong> and <strong>near-zero burstiness</strong>. As a result, generic AI detectors routinely label authentic, hard-working novice and intermediate language students as AI frauds, causing severe emotional distress and destroying classroom rapport.
</p>

<h3>2.2 The False Negative: Why DeepL Slips Under the Radar</h3>

<p>
  Neural Machine Translation engines like DeepL use specialized transformer models trained on billions of aligned bilingual professional translations, literary texts, and international diplomatic proceedings. When DeepL translates an English paragraph into French, Spanish, or German, it outputs natural idiomatic turn-of-phrase expressions, complex syntactic inversions, and sophisticated vocabulary with high natural perplexity.
</p>

<p>
  Because DeepL is not generating conversational padding (such as <em>&ldquo;As an AI language model...&rdquo;</em> or formulaic bulleted structures), its output exhibits the statistical hallmarks of an educated native speaker. Statistical AI detectors inspect the text, find high lexical richness, and output a <strong>0% AI probability score</strong>—completely missing a 300-word unauthorized translation paste.
</p>

<!-- Detection Capability Matrix Table -->
<div class="my-6 overflow-hidden rounded-xl border border-border shadow-sm">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-muted/70 border-b border-border">
        <th class="py-3.5 px-4 font-semibold text-foreground">Feature / Capability</th>
        <th class="py-3.5 px-4 font-semibold text-rose-600 dark:text-rose-400">Legacy AI Detectors</th>
        <th class="py-3.5 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Checkmark Writing Telemetry Suite</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border">
      <tr class="hover:bg-muted/30">
        <td class="py-3 px-4 font-medium text-foreground">Authentic Novice L2 Writing</td>
        <td class="py-3 px-4 text-rose-600 dark:text-rose-400 font-semibold">❌ High False Positives (Penalizes simple syntax)</td>
        <td class="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">✅ 100% Protected (Verifiable typing struggle)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="py-3 px-4 font-medium text-foreground">DeepL / MT Paste Detection</td>
        <td class="py-3 px-4 text-rose-600 dark:text-rose-400 font-semibold">❌ Blind (Scores as 0% AI human text)</td>
        <td class="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">✅ 100% Detected (0.0-sec injection receipts)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="py-3 px-4 font-medium text-foreground">Second-Screen Phone Typing</td>
        <td class="py-3 px-4 text-rose-600 dark:text-rose-400 font-semibold">❌ Blind (No paste event in LMS)</td>
        <td class="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">✅ Flagged via Isochronous Cadence &amp; 0 Backspaces</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="py-3 px-4 font-medium text-foreground">Single-Word Dictionary Lookup</td>
        <td class="py-3 px-4 text-muted-foreground">❌ Indistinguishable from whole essay generation</td>
        <td class="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">✅ Differentiated from MT Pastes (&le;2 words)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="py-3 px-4 font-medium text-foreground">Actionable Student Evidence</td>
        <td class="py-3 px-4 text-rose-600 dark:text-rose-400 font-semibold">❌ Opaque 0–100% statistical score</td>
        <td class="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">✅ Scrubbable Video Replay (&ldquo;Receipts&rdquo;)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="py-3 px-4 font-medium text-foreground">FERPA Zero-Training Guarantee</td>
        <td class="py-3 px-4 text-rose-600 dark:text-rose-400 font-semibold">❌ Submissions Retained to train models</td>
        <td class="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">✅ Ephemeral in-memory processing in RAM</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>3. The Telemetry of Authentic L2 Drafting vs. Machine Translation Pastes</h2>

<p>
  Writing in a non-native language is one of the most cognitively demanding tasks in education. When captured by high-resolution keystroke logging, the physical act of typing in a target language leaves unmistakable behavioral markers.
</p>

<!-- Typing Telemetry Visual Comparison Card -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">Typing Telemetry: Authentic L2 Drafting vs. MT Pastes</div>

  <div class="space-y-6">
    <!-- Authentic Drafting Box -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-emerald-500/40">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-700">
        <span class="text-xs font-bold text-emerald-300 uppercase tracking-wide">Authentic L2 Student Composition (Spanish III Narrative)</span>
        <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-bold">Velocity: 14 WPM | Total Time: 38 Mins</span>
      </div>
      <div class="font-mono text-xs text-slate-300 space-y-2">
        <div class="text-slate-400">// Timeline: 00:00 ──► 00:45 ──► 01:15 ──► 01:30 ──► 02:10 ──► 03:00</div>
        <div class="text-teal-300 bg-slate-950/60 p-3 rounded-lg border border-slate-700/60">
          N-o-s-o-t-r-o-s-[pause 4s]-v-i-v-i-m-o-s-[backspace 4x]-i-a-m-o-s-[pause 8s]-e-n...
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-400 pt-1">
          <div><strong class="text-slate-200">1. Pronoun Retrieval:</strong> <em>Nosotros</em> typed smoothly</div>
          <div><strong class="text-slate-200">2. Conjugation Trial:</strong> <em>vivimos</em> typed, hesitated</div>
          <div><strong class="text-slate-200">3. Imperfect Correction:</strong> 4 backspaces &rarr; <em>vivíamos</em></div>
        </div>
      </div>
    </div>

    <!-- Machine Translation Box -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-rose-500/40 ring-1 ring-rose-500/20">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-700">
        <span class="text-xs font-bold text-rose-300 uppercase tracking-wide">DeepL / Machine Translation Paste (280 Words)</span>
        <span class="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-mono font-bold">Velocity: &infin; (0.0s) | Total Time: 4 Seconds</span>
      </div>
      <div class="font-mono text-xs text-slate-300 space-y-2">
        <div class="text-slate-400">// Timeline: 00:00 ──────────────────────────────────────────► 00:04</div>
        <div class="text-rose-300 bg-slate-950/60 p-3 rounded-lg border border-slate-700/60">
          [CTRL+V: &quot;Nosotros vivíamos en una pequeña casa cerca de la costa mediterránea donde el viento susurraba...&quot;] (280 words injected at t = 2.4s)
        </div>
        <div class="text-[11px] text-slate-400 pt-1">
          <strong class="text-rose-400">Forensic Anomaly:</strong> 280 words of flawless poetic prose entered in a single 0-millisecond event. Zero backspaces, zero pause distribution, zero target-language typing time.
        </div>
      </div>
    </div>
  </div>
</div>

<h3>3.1 The Behavioral Signatures of Authentic L2 Composition</h3>

<p>
  When an intermediate student writes authentically in a target language, their keystroke dynamics display four distinct characteristics:
</p>

<div class="space-y-4 my-6">
  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs">MARKER 1</span>
      <h4 class="text-base font-bold text-foreground m-0">Depressed Typing Velocity (12–25 Words Per Minute)</h4>
    </div>
    <p class="text-sm text-muted-foreground m-0">
      Even students who type 60+ WPM in English experience a massive drop in typing speed when composing in Spanish, French, German, Chinese, or Japanese. The brain must encode concepts, locate foreign vocabulary, retrieve morphological endings, and navigate target-language keyboard layouts or accent key combinations (e.g., <code>Option + e</code>, <code>Alt + 0233</code>, or IME character pickers).
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">MARKER 2</span>
      <h4 class="text-base font-bold text-foreground m-0">High-Frequency Morphosyntactic Backspacing</h4>
    </div>
    <p class="text-sm text-muted-foreground mb-2">
      Authentic L2 drafting is defined by iterative self-correction. Students regularly type a verb root, pause, backspace two or three characters to change a tense ending, or backspace to fix noun-adjective gender and number agreement:
    </p>
    <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4">
      <li><strong>Spanish Example:</strong> Typing <code>las casas blanc</code> &rarr; backspacing 5 characters &rarr; typing <code>blancas</code> (number/gender agreement).</li>
      <li><strong>French Example:</strong> Typing <code>elle est allé</code> &rarr; pausing 3 seconds &rarr; backspacing &rarr; adding <code>e</code> for feminine agreement (<code>allée</code>).</li>
      <li><strong>German Example:</strong> Typing <code>Ich habe das Buch ge...</code> &rarr; pausing 6 seconds &rarr; typing <code>gelesen</code> (verb-final subordinate clause order).</li>
    </ul>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">MARKER 3</span>
      <h4 class="text-base font-bold text-foreground m-0">Lexical Pauses (3 to 15-Second Inter-Word Lulls)</h4>
    </div>
    <p class="text-sm text-muted-foreground m-0">
      Authentic language learners pause frequently between words or clauses. These pauses correlate directly with cognitive memory retrieval, mental conjugation charts, or brief consults with permissible reference tools like WordReference or bilingual flashcards.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs">MARKER 4</span>
      <h4 class="text-base font-bold text-foreground m-0">Non-Linear Revision Cycles</h4>
    </div>
    <p class="text-sm text-muted-foreground m-0">
      Students regularly navigate their cursor back into previously typed sentences to adjust pronouns, insert missing prepositions, or add missing accent marks and umlauts as they reread their sentences.
    </p>
  </div>
</div>

<h3>3.2 The Forensic Signatures of Machine Translation Abuse</h3>

<p>
  In contrast, unauthorized machine translation submissions exhibit glaring anomalies across the telemetry timeline:
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div class="rounded-xl border border-rose-500/30 bg-rose-500/5 p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-rose-500 text-base">🚨</span>
      <h4 class="text-sm font-bold text-foreground m-0">1. Instant Clipboard Injections</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      The student pastes 150 to 400 words of complex target-language text in a single millisecond timestamp. The document word count surges vertically with zero preceding keystrokes or target-language composing time.
    </p>
  </div>

  <div class="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-amber-500 text-base">🎭</span>
      <h4 class="text-sm font-bold text-foreground m-0">2. Retroactive Camouflage Edits</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      To disguise a paste, a student spends 5 minutes making superficial tweaks—changing a single synonym or adding a typo. High-resolution telemetry proves that 98% of the core prose originated from an external paste event.
    </p>
  </div>

  <div class="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-cyan-500 text-base">📱</span>
      <h4 class="text-sm font-bold text-foreground m-0">3. Isochronous Phone Transcription</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      The student translates text on a phone and types it into the laptop. This creates a mechanical flatline cadence (35–50 WPM), <strong>zero morphological backspaces</strong>, and rhythmic 8–12 second pauses at the start of each sentence.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>4. Permissible Lexical Aids vs. Prohibited Machine Translation</h2>

<p>
  A foundational challenge in World Language pedagogy is drawing a clear, enforceable boundary between <strong>authorized reference tools</strong> and <strong>academic misconduct</strong>. Teachers want students to consult dictionaries, but they must prevent full-sentence neural generation.
</p>

<!-- Digital Language Aid Continuum Cards Grid -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">The World Language Digital Aid Continuum</div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Category 1: Permissible -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-emerald-500/40 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-emerald-300 uppercase tracking-wide">Category 1: Permissible</span>
          <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Growth Aid</span>
        </div>
        <p class="text-xs text-slate-300 font-medium mb-3">Target-Language Growth &amp; Lexical Lookup</p>
        <ul class="text-xs text-slate-300 space-y-2 list-disc pl-4">
          <li><strong>Bilingual Dictionaries:</strong> WordReference, Collins, Leo for isolated words</li>
          <li><strong>Reverse Lexical Lookups:</strong> Linguee single-word queries</li>
          <li><strong>Static Verb Charts:</strong> Consulting verb conjugation reference tables</li>
          <li><strong>Teacher-Provided Vocab Lists:</strong> Quizlet flashcard review</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-emerald-300">
        ✅ Encouraged for active interlanguage development.
      </div>
    </div>

    <!-- Category 2: Cautionary -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-amber-500/40 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-amber-300 uppercase tracking-wide">Category 2: Cautionary</span>
          <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">Explicit Permission</span>
        </div>
        <p class="text-xs text-slate-300 font-medium mb-3">Requires Explicit Teacher Authorization</p>
        <ul class="text-xs text-slate-300 space-y-2 list-disc pl-4">
          <li><strong>Digital Grammar Checkers:</strong> LanguageTool, BonPatron</li>
          <li><strong>Conjugation Apps:</strong> SpanishDict automated verb fill-ins</li>
          <li><strong>Target-Language Spellcheck:</strong> Built-in OS spellcheckers</li>
          <li><strong>Thesaurus Tools:</strong> Advanced synonym finders</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-amber-300">
        ⚠️ Permissible only on designated advanced drafts.
      </div>
    </div>

    <!-- Category 3: Prohibited -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-rose-500/40 flex flex-col justify-between ring-1 ring-rose-500/30">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-rose-300 uppercase tracking-wide">Category 3: Prohibited</span>
          <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">Academic Misconduct</span>
        </div>
        <p class="text-xs text-slate-300 font-medium mb-3">Strictly Banned Cognitive Offloading</p>
        <ul class="text-xs text-slate-300 space-y-2 list-disc pl-4">
          <li><strong>Full-Sentence / Paragraph MT:</strong> DeepL, Google Translate, Apple Translate</li>
          <li><strong>Generative AI Essay Drafting:</strong> ChatGPT, Claude, Gemini</li>
          <li><strong>Back-Translation Workflows:</strong> EN &rarr; L2 &rarr; EN &rarr; L2 paraphrasing</li>
          <li><strong>Second-Screen Transcription:</strong> Typing directly from phone translator</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-rose-300">
        🛑 Triggers restorative conference and supervised rewrite.
      </div>
    </div>
  </div>
</div>

<h3>4.1 Telemetry Differences: WordReference Lookup vs. DeepL Generation</h3>

<p>
  Keystroke telemetry provides mathematical clarity between a student looking up a solitary word versus translating an entire thought.
</p>

<!-- WordReference vs DeepL Telemetry Comparison Box -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-4">WordReference Lookup vs. DeepL Translation Telemetry</div>

  <div class="space-y-4">
    <div class="p-4 rounded-xl bg-slate-800/90 border border-emerald-500/40">
      <div class="text-xs font-bold text-emerald-300 mb-2">Scenario A: Student Uses WordReference for &ldquo;Sunflowers&rdquo; (Permissible Lexical Aid)</div>
      <ol class="text-xs text-slate-300 space-y-1.5 list-decimal pl-4">
        <li>Student types authentically: <em>&ldquo;En el campo, nosotros vimos muchos...&rdquo;</em> (Typed at 16 WPM).</li>
        <li>Student pauses for 12 seconds (Switches tab to WordReference to search &ldquo;sunflower&rdquo;).</li>
        <li>Student returns to essay tab and types: <code>g-i-r-a-s-o-l-e-s</code> character-by-character.</li>
        <li>Student continues typing: <em>&ldquo;que eran muy altos y amarillos.&rdquo;</em></li>
      </ol>
      <div class="mt-2 text-xs font-semibold text-emerald-400">
        Telemetry Result: ✅ Single lexical insertion embedded in natural target-language composition.
      </div>
    </div>

    <div class="p-4 rounded-xl bg-slate-800/90 border border-rose-500/40">
      <div class="text-xs font-bold text-rose-300 mb-2">Scenario B: Student Uses DeepL for Full Sentence Translation (Prohibited MT)</div>
      <ol class="text-xs text-slate-300 space-y-1.5 list-decimal pl-4">
        <li>Student sits with empty document for 20 minutes (Writing English draft in DeepL tab).</li>
        <li>In a single 0.0-second event, 45 words are pasted: <code>[PASTE: &quot;En el campo, vimos innumerables girasoles que se extendían hasta el horizonte...&quot;]</code></li>
        <li>Zero target-language typing time; advanced syntax (<em>&ldquo;innumerables&rdquo;</em>, <em>&ldquo;se extendían&rdquo;</em>) inserted instantaneously.</li>
      </ol>
      <div class="mt-2 text-xs font-semibold text-rose-400">
        Telemetry Result: ❌ Prohibited full-sentence neural machine translation injection.
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>5. Checkmark Plagiarism’s World Language Writing Telemetry Suite</h2>

<p>
  To empower World Language educators and eliminate speculative AI guessing, <strong>Checkmark Plagiarism</strong> integrates a dedicated suite of writing process analytics specifically tailored for foreign language acquisition.
</p>

<!-- 4 Core Pillars Feature Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <!-- Pillar 1 -->
  <div class="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-sm">1</span>
        <h3 class="text-base font-bold text-foreground m-0">Patent-Pending Essay Playback™ (1x–8x Replay)</h3>
      </div>
      <p class="text-sm text-muted-foreground leading-relaxed mb-3">
        Records every keystroke, backspace, pause, and cursor movement in a lightweight, encrypted telemetry stream.
      </p>
      <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
        <li><strong>Observe Linguistic Struggle:</strong> Watch French students hesitate between <em>avoir</em> and <em>être</em> auxiliary verbs.</li>
        <li><strong>Verify In-Document Time:</strong> Confirm whether a 250-word Spanish essay took 35 minutes or 12 seconds.</li>
        <li><strong>Zero Ambiguity:</strong> Replaces opaque percentage scores with concrete visual proof of how text was built.</li>
      </ul>
    </div>
  </div>

  <!-- Pillar 2 -->
  <div class="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-sm">2</span>
        <h3 class="text-base font-bold text-foreground m-0">External Paste Buffer Inspector</h3>
      </div>
      <p class="text-sm text-muted-foreground leading-relaxed mb-3">
        Preserves 100% of pasted clipboard content, timestamping the insertion and providing clickable playback links.
      </p>
      <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
        <li><strong>Lexical vs. Block Classification:</strong> Instantly flags single vocabulary words (&le;2 words) vs 250-word blocks.</li>
        <li><strong>Deep Historical Retention:</strong> Keeps original pasted text even if the student subsequently rewrites or edits it.</li>
        <li><strong>Side-by-Side Comparison:</strong> Compare preserved clipboard text directly against DeepL engine phrasing.</li>
      </ul>
    </div>
  </div>

  <!-- Pillar 3 -->
  <div class="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-sm">3</span>
        <h3 class="text-base font-bold text-foreground m-0">Transcription Cadence Detection</h3>
      </div>
      <p class="text-sm text-muted-foreground leading-relaxed mb-3">
        Evaluates Inter-Keystroke Interval (IKI) distributions to catch students manually copying from mobile screens.
      </p>
      <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
        <li><strong>Human Composition Variance:</strong> Detects natural bursts and pauses (high IKI standard deviation &gt;250ms).</li>
        <li><strong>Isochronous Signature:</strong> Flags mechanical, flatline typing (110ms &plusmn; 20ms) with zero backspaces.</li>
        <li><strong>Zero-Backspace Warning:</strong> Flags 200+ word essays typed with zero grammatical corrections.</li>
      </ul>
    </div>
  </div>

  <!-- Pillar 4 -->
  <div class="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-sm">4</span>
        <h3 class="text-base font-bold text-foreground m-0">Teacher-in-the-Loop ACTFL Rubric Autograding</h3>
      </div>
      <p class="text-sm text-muted-foreground leading-relaxed mb-3">
        Calibrated specifically for World Language frameworks (ACTFL, CEFR, and AP/IB Language Rubrics).
      </p>
      <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
        <li><strong>Quote-Anchored Feedback:</strong> Generates criterion justifications anchored to student prose.</li>
        <li><strong>Teacher Final Authority:</strong> Automated scores remain provisional drafts until teacher approves.</li>
        <li><strong>One-Click LMS Passback:</strong> Direct sync to Canvas SpeedGrader, Buzz LMS, and Google Classroom.</li>
      </ul>
    </div>
  </div>
</div>

<!-- Embedded Screenshot Card: Paste Buffer Inspector -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-md bg-card">
  <img 
    src="/images/services/report-paste-evidence.png" 
    alt="Checkmark Plagiarism External Paste Buffer Inspector showing preserved clipboard text and word volume classification" 
    class="w-full h-auto object-cover m-0"
  />
  <div class="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <span><strong>Figure 2.0:</strong> Checkmark External Paste Buffer Inspector — Preserving Full Unedited Clipboard Text at Millisecond Resolution.</span>
    <span class="text-teal-600 dark:text-teal-400 font-semibold">Integrity Forensics</span>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. Real-World World Language Case Studies</h2>

<p>
  To illustrate how keystroke telemetry operates in practice, consider three real-world scenarios from secondary and AP language classrooms.
</p>

<!-- Case Studies Overview Table -->
<div class="my-6 overflow-hidden rounded-xl border border-border shadow-sm">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-muted/70 border-b border-border">
        <th class="py-3.5 px-4 font-semibold text-foreground">Classroom Context</th>
        <th class="py-3.5 px-4 font-semibold text-foreground">Suspected Behavior</th>
        <th class="py-3.5 px-4 font-semibold text-foreground">Telemetry Finding &amp; Resolution</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border">
      <tr class="hover:bg-muted/30">
        <td class="py-3 px-4 font-medium text-foreground">AP Spanish Language (200-Word Essay)</td>
        <td class="py-3 px-4 text-muted-foreground">Flawless Subjunctive vs. Oral Speaking Baseline</td>
        <td class="py-3 px-4 text-rose-600 dark:text-rose-400 text-xs font-semibold">240 words pasted in 1.8 seconds &rarr; Restorative rewrite required</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="py-3 px-4 font-medium text-foreground">French III Narrative (Passé vs. Imparfait)</td>
        <td class="py-3 px-4 text-muted-foreground">Generic AI Detector Flagged 92% AI</td>
        <td class="py-3 px-4 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">42 mins active typing, 68 backspaces &rarr; Exonerated: Authentic struggle</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="py-3 px-4 font-medium text-foreground">German II Portfolio (Daily Routine Writing)</td>
        <td class="py-3 px-4 text-muted-foreground">Flawless Word Order &amp; Complex Cases</td>
        <td class="py-3 px-4 text-amber-600 dark:text-amber-400 text-xs font-semibold">Isochronous 42 WPM, 0 backspaces &rarr; Second-screen iPhone translation caught</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Case Study 1 -->
<div class="my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-3 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 font-bold text-xs">CASE STUDY 1</span>
      <h3 class="text-base font-bold text-foreground m-0">AP Spanish Cultural Comparison: Unmasking DeepL Subjunctive Injections</h3>
    </div>
    <span class="text-xs text-muted-foreground font-mono">Course: AP Spanish Language</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="bg-muted/40 rounded-xl p-3 border border-border">
      <strong class="text-foreground block mb-1">Context &amp; Suspicion:</strong>
      <p class="text-muted-foreground m-0">An AP Spanish student submitted a 220-word cultural comparison with advanced imperfect subjunctive clauses (<em>&ldquo;Si tuviera la oportunidad...&rdquo;</em>). A legacy AI detector scored it as <strong>8% AI (Human)</strong> due to DeepL&apos;s natural phrasing.</p>
    </div>
    <div class="bg-muted/40 rounded-xl p-3 border border-border">
      <strong class="text-foreground block mb-1">Checkmark Telemetry:</strong>
      <p class="text-muted-foreground m-0">Total active writing time: <strong>1 minute 14 seconds</strong>. The student typed 18 characters (<em>&ldquo;En mi comunidad...&rdquo;</em>) followed by a single paste event of <strong>202 words</strong> (92% of the submission). Preserved clipboard text matched DeepL.</p>
    </div>
    <div class="bg-muted/40 rounded-xl p-3 border border-border">
      <strong class="text-rose-600 dark:text-rose-400 block mb-1">Restorative Resolution:</strong>
      <p class="text-muted-foreground m-0">During an Essay Playback™ conference, the student admitted to translating their English draft via DeepL. The student completed a supervised rewrite focusing on authentic circumlocution.</p>
    </div>
  </div>
</div>

<!-- Case Study 2 -->
<div class="my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-3 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold text-xs">CASE STUDY 2</span>
      <h3 class="text-base font-bold text-foreground m-0">French III Narrative: Exonerating an Honest Student</h3>
    </div>
    <span class="text-xs text-muted-foreground font-mono">Course: High School French III</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="bg-muted/40 rounded-xl p-3 border border-border">
      <strong class="text-foreground block mb-1">Context &amp; Suspicion:</strong>
      <p class="text-muted-foreground m-0">A student&apos;s childhood vacation narrative was flagged with a <strong>94% AI-Generated probability</strong> by a standard statistical AI detector. The student maintained they drafted it using only their textbook and WordReference.</p>
    </div>
    <div class="bg-muted/40 rounded-xl p-3 border border-border">
      <strong class="text-foreground block mb-1">Checkmark Telemetry:</strong>
      <p class="text-muted-foreground m-0">Composing time: <strong>54 minutes</strong> at 16 WPM. Keystrokes documented <strong>84 backspace events</strong> capturing auxiliary verb struggle (<code>nous avons allé</code> &rarr; backspace 10x &rarr; <code>nous sommes allés</code>). Only 2 single-word dictionary pastes.</p>
    </div>
    <div class="bg-muted/40 rounded-xl p-3 border border-border">
      <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Restorative Resolution:</strong>
      <p class="text-muted-foreground m-0">Full exoneration. The 94% AI score was proven to be a false positive caused by formulaic novice syntax. The teacher praised the student&apos;s authentic revision process and awarded full credit.</p>
    </div>
  </div>
</div>

<!-- Case Study 3 -->
<div class="my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-3 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-xs">CASE STUDY 3</span>
      <h3 class="text-base font-bold text-foreground m-0">German II Writing Portfolio: Catching Second-Screen Phone Transcription</h3>
    </div>
    <span class="text-xs text-muted-foreground font-mono">Course: High School German II</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="bg-muted/40 rounded-xl p-3 border border-border">
      <strong class="text-foreground block mb-1">Context &amp; Suspicion:</strong>
      <p class="text-muted-foreground m-0">A 210-word daily routine essay demonstrated flawless German subordinate word order (verb-final with <em>weil</em> and <em>dass</em>) and complex dative case endings. Document history showed <strong>0 paste events</strong>.</p>
    </div>
    <div class="bg-muted/40 rounded-xl p-3 border border-border">
      <strong class="text-foreground block mb-1">Checkmark Telemetry:</strong>
      <p class="text-muted-foreground m-0">Typing speed: steady 25.6 WPM with <strong>zero backspaces across 210 words</strong>. A regular 9-second pause preceded each sentence, followed by continuous error-free typing of complex German case endings.</p>
    </div>
    <div class="bg-muted/40 rounded-xl p-3 border border-border">
      <strong class="text-amber-600 dark:text-amber-400 block mb-1">Restorative Resolution:</strong>
      <p class="text-muted-foreground m-0">Faced with the zero-backspace cadence report, the student admitted placing an iPhone on the keyboard and manually typing sentences translated by Apple Translate. Supervised rewrite assigned.</p>
    </div>
  </div>
</div>

<!-- Embedded Screenshot Card: Rubric Grading View -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-md bg-card">
  <img 
    src="/images/services/report-grading-view.png" 
    alt="Checkmark Plagiarism Teacher-in-the-Loop ACTFL Rubric Autograding View with quote-anchored score justifications" 
    class="w-full h-auto object-cover m-0"
  />
  <div class="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <span><strong>Figure 3.0:</strong> Checkmark Teacher-in-the-Loop Rubric Grading — ACTFL Criteria Alignment and Direct Quote Evidence.</span>
    <span class="text-teal-600 dark:text-teal-400 font-semibold">Formative Assessment Engine</span>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. The 4-Phase World Language Writing Telemetry Protocol</h2>

<p>
  To implement writing telemetry seamlessly into departmental workflows, World Language educators should follow this 4-phase operational framework:
</p>

<!-- 4-Phase Protocol Visual Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
  <div class="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
    <div>
      <span class="inline-block px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs mb-2">PHASE 1</span>
      <h3 class="text-sm font-bold text-foreground mb-2">Pre-Submission Scaffolding</h3>
      <p class="text-xs text-muted-foreground m-0">Define permissible lexical tools (WordReference) and ban full-sentence MT (DeepL). Normalize linguistic error as a natural part of grading.</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
    <div>
      <span class="inline-block px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs mb-2">PHASE 2</span>
      <h3 class="text-sm font-bold text-foreground mb-2">Post-Submission Triage</h3>
      <p class="text-xs text-muted-foreground m-0">Filter submissions by paste percentage (&gt;20%), typing velocity (&lt;5 mins for 200 words), and zero-backspace anomalies in advanced grammar.</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
    <div>
      <span class="inline-block px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs mb-2">PHASE 3</span>
      <h3 class="text-sm font-bold text-foreground mb-2">Restorative Conference</h3>
      <p class="text-xs text-muted-foreground m-0">Screen-share Essay Playback™ alongside student. Ask growth-oriented questions (&ldquo;Walk me through how you formulated this sentence&rdquo;).</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
    <div>
      <span class="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-2">PHASE 4</span>
      <h3 class="text-sm font-bold text-foreground mb-2">Revision &amp; Mastery</h3>
      <p class="text-xs text-muted-foreground m-0">Assign structured in-class rewrites using permissible tools. Track longitudinal typing velocity and backspace patterns to confirm SLA growth.</p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Departmental Syllabus Policy Models &amp; Restorative Conference Scripts</h2>

<p>
  Clear syllabus language eliminates ambiguity, establishing transparent standards for students, parents, and administrators.
</p>

<!-- Copyable Syllabus Box -->
<div class="my-6 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md font-mono text-xs leading-relaxed">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
    <span class="text-teal-400 font-bold text-xs uppercase tracking-wider">Department Syllabus Template: World Language Integrity Policy</span>
    <span class="text-slate-400 text-[11px]">Ready for Adoption</span>
  </div>
  
  <p class="text-slate-300"><strong>1. Philosophy of Language Acquisition:</strong><br />
  In this course, our primary goal is developing your authentic communicative ability in [Language]. True language acquisition requires cognitive effort, making mistakes, and learning to circumlocute (talk around words you do not know). Using automated software to generate, translate, or rewrite text deprives your brain of essential neural practice.</p>

  <p class="text-slate-300"><strong>2. Permissible Digital Reference Aids (Encouraged):</strong><br />
  &bull; Online Bilingual Dictionaries (e.g., WordReference, Collins): You may look up isolated words, idioms, or verify gender/part of speech.<br />
  &bull; Online Conjugation Reference Tables: You may verify verb conjugations using static charts.<br />
  &bull; Physical Textbooks and Teacher-Provided Vocab Sheets.</p>

  <p class="text-slate-300"><strong>3. Prohibited Digital Tools (Academic Misconduct):</strong><br />
  &bull; Neural Machine Translation Engines (DeepL, Google Translate, Apple Translate): Entering English phrases, sentences, or paragraphs to generate target-language text is strictly prohibited.<br />
  &bull; Generative AI Chatbots (ChatGPT, Claude, Gemini): Using AI to draft, rephrase, or translate compositions is prohibited.<br />
  &bull; Second-Screen Transcription: Typing target-language text directly from a phone or translation app.</p>

  <p class="text-slate-300 m-0"><strong>4. Telemetry Verification:</strong><br />
  All writing assignments must be composed directly in the designated digital platform. Our department uses <strong>Checkmark Plagiarism and Essay Playback™</strong> to verify authentic typing timelines, drafting pauses, and revision history. Submissions resulting from clipboard pasting of translated blocks or mechanical transcription will require an in-person restorative conference and a supervised rewrite.</p>
</div>

<h3>8.1 Restorative Conference Script for World Language Teachers</h3>

<p>
  When meeting with a student whose submission shows machine translation telemetry, use this structured script to maintain a constructive, educational dialogue:
</p>

<!-- Restorative Conference Dialogue UI Cards -->
<div class="my-6 space-y-3">
  <div class="rounded-xl border border-teal-500/30 bg-teal-500/5 p-4">
    <div class="flex items-center gap-2 mb-1">
      <span class="px-2 py-0.5 rounded bg-teal-600 text-white font-bold text-[11px]">TEACHER</span>
      <span class="text-xs text-muted-foreground">Opening the Conference</span>
    </div>
    <p class="text-xs text-foreground m-0">
      &ldquo;Thank you for meeting with me today, Alex. I want to look over your Spanish cultural comparison essay with you. You chose a fantastic topic with the Day of the Dead traditions.&rdquo;
    </p>
  </div>

  <div class="rounded-xl border border-slate-500/30 bg-muted/40 p-4">
    <div class="flex items-center gap-2 mb-1">
      <span class="px-2 py-0.5 rounded bg-slate-600 text-white font-bold text-[11px]">STUDENT</span>
    </div>
    <p class="text-xs text-foreground m-0">
      &ldquo;Thanks. I worked really hard on it.&rdquo;
    </p>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-teal-500/5 p-4">
    <div class="flex items-center gap-2 mb-1">
      <span class="px-2 py-0.5 rounded bg-teal-600 text-white font-bold text-[11px]">TEACHER</span>
      <span class="text-xs text-muted-foreground">Screen-Sharing Essay Playback™ at 4x</span>
    </div>
    <p class="text-xs text-foreground m-0">
      &ldquo;Let&apos;s open up the Essay Playback™ timeline on Checkmark. Our system records the typing and revision history as you write. I want to show you what I&apos;m seeing here at the two-minute mark. Right here at 02:15, we see an external paste event of 185 words appearing in 0.0 seconds. The text uses advanced subjunctive clauses like <em>&lsquo;hubiéramos querido&rsquo;</em> and idiomatic phrases that we haven&apos;t covered yet in Spanish III. Can you walk me through where that text came from?&rdquo;
    </p>
  </div>

  <div class="rounded-xl border border-slate-500/30 bg-muted/40 p-4">
    <div class="flex items-center gap-2 mb-1">
      <span class="px-2 py-0.5 rounded bg-slate-600 text-white font-bold text-[11px]">STUDENT</span>
    </div>
    <p class="text-xs text-foreground m-0">
      [Hesitates] &ldquo;I wrote it in English first because I didn&apos;t know how to say what I wanted to say, and then I put it through DeepL.&rdquo;
    </p>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-teal-500/5 p-4">
    <div class="flex items-center gap-2 mb-1">
      <span class="px-2 py-0.5 rounded bg-teal-600 text-white font-bold text-[11px]">TEACHER</span>
      <span class="text-xs text-muted-foreground">Refocusing on SLA Growth</span>
    </div>
    <p class="text-xs text-foreground m-0">
      &ldquo;I really appreciate your honesty, Alex. I completely understand how overwhelming it feels to write complex thoughts in a new language. But when DeepL writes the sentences for you, your brain doesn&apos;t get the practice of connecting the words and verb endings. In this class, I grade your effort and interlanguage, not perfection. Let&apos;s do a fresh draft in class tomorrow using WordReference for single words. I know you can express these ideas with your own words.&rdquo;
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>9. Student Data Privacy, FERPA Compliance &amp; Zero-Training Guarantees</h2>

<p>
  When deploying writing telemetry and autograding software across a school district, student data privacy and legal compliance are paramount.
</p>

<!-- Data Privacy Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
  <div class="rounded-2xl border border-border bg-card p-5">
    <div class="flex items-center gap-2 mb-3">
      <span class="text-teal-600 dark:text-teal-400 text-xl">🛡️</span>
      <h3 class="text-sm font-bold text-foreground m-0">Ephemeral RAM Processing</h3>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Student essays and telemetry streams are evaluated in volatile memory and purged immediately post-analysis. No unencrypted text persists in permanent storage.
    </p>
  </div>

  <div class="rounded-2xl border border-border bg-card p-5">
    <div class="flex items-center gap-2 mb-3">
      <span class="text-emerald-600 dark:text-emerald-400 text-xl">🔒</span>
      <h3 class="text-sm font-bold text-foreground m-0">District-Isolated Encryption</h3>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Encrypted with AES-256 at rest and TLS 1.3 in transit. District tenant data is strictly segregated, preventing cross-institution data exposure.
    </p>
  </div>

  <div class="rounded-2xl border border-border bg-card p-5">
    <div class="flex items-center gap-2 mb-3">
      <span class="text-purple-600 dark:text-purple-400 text-xl">📜</span>
      <h3 class="text-sm font-bold text-foreground m-0">Zero AI Model Training</h3>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Student compositions are <strong>never</strong> used to train, fine-tune, or calibrate public or proprietary AI models. Full compliance with FERPA, COPPA, and NY Ed Law 2-D.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>10. Frequently Asked Questions (FAQs)</h2>

<div class="space-y-4 my-6">
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2">1. How does Checkmark distinguish between a student looking up a word on WordReference vs. translating a whole paragraph on DeepL?</h3>
    <p class="text-sm text-muted-foreground m-0">
      Checkmark&apos;s telemetry logs differentiate between micro-lookups and bulk generation. A student using WordReference will type their essay continuously in the target language, pause for 5–15 seconds to look up an unfamiliar term, and then type that solitary word (4–12 characters) directly into the sentence. In contrast, DeepL abuse involves typing virtually no target-language prose in the document, followed by a massive, instantaneous clipboard paste event (100–300 words in 0.0 seconds) or an isochronous, zero-backspace typing cadence.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2">2. Why shouldn&apos;t World Language teachers rely on standard AI detectors like GPTZero or Turnitin AI detection?</h3>
    <p class="text-sm text-muted-foreground m-0">
      Standard statistical AI detectors rely on English language models to calculate perplexity and burstiness. Developing L2 learners naturally write with limited vocabulary and repetitive syntax, which triggers severe <strong>false positives</strong>, unfairly accusing honest students of cheating. Furthermore, Neural Machine Translation tools like DeepL produce grammatically rich, natural prose that scores as &ldquo;Human&rdquo; on statistical detectors (<strong>false negatives</strong>). Writing telemetry provides empirical proof based on actual typing behavior, not statistical guessing.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2">3. How does Essay Playback™ capture typing if a student works offline or on a different device?</h3>
    <p class="text-sm text-muted-foreground m-0">
      Checkmark integrates directly into the student writing environment (via Canvas LMS, Buzz LMS, Google Classroom, and Google Docs add-ons). The lightweight telemetry engine records keystroke events locally in the browser buffer and syncs the encrypted stream when connected. If a student drafts offline in an unmonitored external document and pastes the completed text, Checkmark flags the bulk paste event and prompts the student to provide the authentic revision history.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2">4. Can students bypass telemetry by retyping translated text from their phone screen?</h3>
    <p class="text-sm text-muted-foreground m-0">
      No. Retyping translated text from a secondary screen produces a distinct <strong>isochronous transcription signature</strong>. Checkmark&apos;s cadence analysis detects the absence of natural composition pauses, uniform Inter-Keystroke Intervals (IKIs), and an unnatural complete lack of backspacing within complex grammatical structures (such as verb conjugations, adjective agreements, and subjunctive moods).
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2">5. What is the recommended departmental policy for students who claim they &ldquo;drafted in Microsoft Word first&rdquo;?</h3>
    <p class="text-sm text-muted-foreground m-0">
      World Language departments should establish a clear policy requiring all compositions to be drafted directly within the LMS or integrated Google Doc environment. If a student pastes their draft from Word, Checkmark&apos;s Paste Buffer Inspector allows the teacher to inspect the paste. If the student cannot provide an authentic keystroke timeline, the departmental policy should require an in-class, supervised rewrite.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2">6. How does Checkmark support non-Latin scripts like Chinese (Pinyin IME) and Japanese (Hiragana/Kanji)?</h3>
    <p class="text-sm text-muted-foreground m-0">
      Checkmark&apos;s telemetry engine fully supports Input Method Editors (IMEs). For Chinese and Japanese, Checkmark tracks both the underlying keystroke entry (Pinyin or Romaji) and the character candidate selection events. Authentic composition displays natural pauses during character conversion and selection, whereas machine-translated pastes bypass the IME selection process entirely via direct unicode clipboard insertion.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2">7. How does Checkmark integrate with LMS gradebooks like Canvas SpeedGrader and Buzz LMS?</h3>
    <p class="text-sm text-muted-foreground m-0">
      Checkmark integrates natively via <strong>LTI 1.3</strong>. Teachers can view Essay Playback™ and the telemetry report directly within Canvas SpeedGrader or Buzz LMS. When using the AI Rubric Autograder, teachers can review, edit, or approve criterion scores with one click, and the finalized grade and feedback sync automatically to the LMS gradebook.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Conclusion: Stop Guessing, Start Trusting in World Language Writing</h2>

<p>
  World Language education stands at a pivotal crossroads. As Neural Machine Translation and generative AI continue to evolve, evaluating language acquisition based solely on final submitted text is no longer pedagogically sound or defensible.
</p>

<p>
  By transitioning to <strong>Writing Process Telemetry</strong> and <strong>Patent-Pending <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a></strong>, World Language departments can:
</p>

<ol class="space-y-2 my-4 pl-6 list-decimal text-muted-foreground">
  <li><strong>Exonerate and Protect Honest Students</strong> from catastrophic false positive AI flags.</li>
  <li><strong>Accurately Identify Machine Translation Pastes</strong> with transparent, timestamped evidence.</li>
  <li><strong>Foster Restorative Learning Conversations</strong> that guide students away from digital shortcuts and back toward authentic language acquisition.</li>
  <li><strong>Automate Rubric Grading Workflows</strong> while keeping teachers firmly in the loop.</li>
</ol>

<!-- Call to Action Banner -->
<div class="my-8 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-white text-center shadow-lg">
  <h3 class="text-2xl font-bold mb-3 text-white">Transform World Language Writing Integrity in Your School</h3>
  <p class="text-sm text-teal-100 max-w-2xl mx-auto mb-6">
    Equip your department with patent-pending Essay Playback™, external paste buffer inspection, and ACTFL rubric autograding. Protect student trust and guarantee authentic second language acquisition.
  </p>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <a href="/contact" class="px-6 py-3 rounded-xl bg-white text-teal-900 font-bold text-sm shadow hover:bg-teal-50 transition-colors">
      Schedule an Institutional Demo
    </a>
    <a href="/services/writing-playback" class="px-6 py-3 rounded-xl bg-teal-800/60 hover:bg-teal-800/80 text-white font-bold text-sm border border-teal-400/30 transition-colors">
      Explore Essay Playback™
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
      currentSlug="2026/8/how-can-world-language-teachers-distinguish-native-composition-from-deepl-or-machine-translation-pastes-using-keystroke-timelines"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
