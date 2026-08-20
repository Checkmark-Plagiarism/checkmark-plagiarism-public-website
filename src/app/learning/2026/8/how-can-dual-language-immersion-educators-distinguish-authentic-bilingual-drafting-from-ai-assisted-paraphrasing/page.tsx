import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Dual-Language Immersion Educators Distinguish Authentic Bilingual Drafting From AI-Assisted Paraphrasing? | Checkmark Plagiarism",
  description: "An authoritative pedagogical and technical guide for Dual-Language Immersion (DLI) educators, World Language department chairs, and bilingual specialists on distinguishing authentic translanguaging and non-linear drafting from AI machine translation and paraphrasing using keystroke telemetry and Essay Playback™.",
  keywords: [
    "dual language immersion AI detection",
    "authentic bilingual drafting vs AI paraphrasing",
    "translanguaging digital writing",
    "DLI keystroke telemetry",
    "Essay Playback",
    "ACTFL writing proficiency AI",
    "WIDA rubric autograding",
    "DeepL vs bilingual writing",
    "Checkmark Plagiarism",
    "keystroke friction ratio bilingual",
    "non-native AI detector false positives",
    "Canvas SpeedGrader Buzz LMS DLI",
    "bilingual working memory typing"
  ],
  openGraph: {
    images: [
      "/images/learning/how-can-dual-language-immersion-educators-distinguish-authentic-bilingual-drafting-from-ai-assisted-paraphrasing/featured.png",
      "/images/services/report-paste-evidence.png",
      "/images/services/report-originality-tiles.png"
    ],
  },
};

const meta = {
  title: "How Can Dual-Language Immersion Educators Distinguish Authentic Bilingual Drafting From AI-Assisted Paraphrasing? | Checkmark Plagiarism",
  description: "An authoritative pedagogical and technical guide for Dual-Language Immersion (DLI) educators, World Language department chairs, and bilingual specialists on distinguishing authentic translanguaging and non-linear drafting from AI machine translation and paraphrasing using keystroke telemetry and Essay Playback™.",
  "opengraph-image": "/images/learning/how-can-dual-language-immersion-educators-distinguish-authentic-bilingual-drafting-from-ai-assisted-paraphrasing/featured.png",
  date: "08-19-2026",
  readTime: "~19 min read",
  category: "Pedagogy",
  categories: ["Pedagogy", "Writing Process", "Detection", "How It Works", "Equity & Policy", "Dual Language"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<!-- Executive Summary Callout Box -->
<div class="my-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
    <p class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Executive Summary &amp; Dual-Language Forensic Mandate</p>
  </div>
  <p class="text-base text-foreground leading-relaxed">
    Dual-Language Immersion (DLI) programs and World Language departments face an unprecedented pedagogical and forensic dilemma in the era of generative artificial intelligence and neural machine translation. When evaluating student writing in a second language (<em>L</em><sub>2</sub>), educators must navigate two compounding crises: first, standard commercial AI detectors exhibit a catastrophic <strong>61% to 98% false-positive rate</strong> on non-native and emerging bilingual writers due to low lexical burstiness and formulaic syntactic structures; second, emerging tools like DeepL, ChatGPT, and QuillBot allow disengaged students to bypass the essential cognitive friction of language acquisition entirely by drafting in their native tongue (<em>L</em><sub>1</sub>) and pasting machine-paraphrased <em>L</em><sub>2</sub> prose into their assignments.
  </p>
  <p class="text-base text-foreground leading-relaxed mt-3">
    To resolve this dilemma, DLI educators, World Language Department Chairs, and Multilingual Learner (ML/ELL) Coordinators must pivot from flawed, post-submission text classifiers to objective writing process forensics. Grounded in Checkmark Plagiarism&apos;s foundational philosophy&mdash;<strong>&ldquo;Stop guessing, start trusting&rdquo;</strong>&mdash;this guide establishes how psycholinguistic telemetry differentiates genuine <strong>translanguaging</strong> (characterized by intra-clause lexical retrieval pauses of 5&ndash;18 seconds, a healthy Keystroke Friction Ratio of 18%&ndash;35%, and micro-pastes from approved dictionaries) from <strong>AI-assisted paraphrasing</strong> (characterized by isochronous typing velocities with <em>CV</em><sub>IKI</sub> &lt; 0.18, 300+ word monolithic clipboard pastes, and zero morphosyntactic revisions). Supported by patent-pending <a href="/services/writing-process" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a> (1x&ndash;8x scrubbable video replay), the <strong>External Paste Buffer Inspector</strong>, and teacher-in-the-loop <strong>ACTFL and WIDA rubric autograding</strong>, educators can protect vulnerable bilingual students, maintain rigorous proficiency standards, and restore pedagogical trust across secondary and higher education dual-language classrooms.
  </p>
</div>

<!-- Featured Hero Visual Card -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/learning/how-can-dual-language-immersion-educators-distinguish-authentic-bilingual-drafting-from-ai-assisted-paraphrasing/featured.png" 
    alt="Checkmark Plagiarism Dual-Language Immersion Writing Telemetry Dashboard showing keystroke waveforms, pause topography, and ACTFL autograding" 
    class="w-full h-auto object-cover m-0"
  />
  <div class="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <span><strong>Figure 1.0:</strong> Checkmark DLI Writing Telemetry Suite &mdash; Keystroke Friction Waves, Intra-Clause Pause Topography, and ACTFL Proficiency Matrix.</span>
    <span class="text-teal-600 dark:text-teal-400 font-semibold">Dual-Language Immersion &amp; SLA Forensics</span>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>1. The Dual-Language Immersion Dilemma: Second-Language Acquisition in the Age of Generative Translation</h2>

<p>
  Dual-Language Immersion (DLI) education&mdash;whether operating under two-way 90:10 models, 50:50 dual immersion, or one-way foreign language immersion frameworks&mdash;is predicated on the developmental principle of <strong>additive bilingualism</strong>. In these environments, students develop simultaneous biliteracy, cross-cultural competence, and advanced metalinguistic awareness by actively grappling with complex disciplinary content in their target language (<em>L</em><sub>2</sub>).
</p>

<p>
  However, the rapid democratization of neural machine translation (NMT) platforms (such as DeepL, Google Translate, and Papago) combined with large language models (ChatGPT, Claude, Gemini) and AI paraphrasers (QuillBot, Undetectable AI) has introduced an existential challenge to dual-language pedagogy.
</p>

<!-- The Dual-Language Pedagogical Divergence Component -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">
    The Dual-Language Pedagogical Divergence: Acquisition vs. Automation
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Authentic Translanguaging -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-emerald-500/30 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-emerald-400 uppercase tracking-wide">Authentic Bilingual Composing</span>
          <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Translanguaging</span>
        </div>
        <h3 class="text-sm font-bold text-white mb-2 pt-0">Productive Cognitive Friction</h3>
        <ul class="space-y-2 text-slate-300 text-xs list-disc pl-4">
          <li><strong>Bilingual Working Memory:</strong> Active conceptualization across both <em>L</em><sub>1</sub> and <em>L</em><sub>2</sub> semantic networks.</li>
          <li><strong>Morphosyntactic Negotiation:</strong> Wrestling with verb mood (preterite vs. imperfect, indicative vs. subjunctive), grammatical gender, and word order.</li>
          <li><strong>ZPD Activation:</strong> Full engagement with the Zone of Proximal Development through iterative drafting and self-correction.</li>
          <li><strong>Outcome:</strong> Sustainable neural pathway formation, authentic biliteracy, and target-language automaticity.</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700 text-[11px] text-emerald-300 font-medium">
        &check; 100% Student Cognition &amp; Verifiable Language Growth
      </div>
    </div>

    <!-- AI Paraphrasing -->
    <div class="bg-slate-800/90 rounded-xl p-5 border border-rose-500/30 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-rose-400 uppercase tracking-wide">AI-Assisted Paraphrasing</span>
          <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">Cognitive Bypass</span>
        </div>
        <h3 class="text-sm font-bold text-white mb-2 pt-0">Automated Linguistic Outsourcing</h3>
        <ul class="space-y-2 text-slate-300 text-xs list-disc pl-4">
          <li><strong>Monolingual Ideation:</strong> Conception exclusively in native language (<em>L</em><sub>1</sub>) or generated entirely via LLM prompt.</li>
          <li><strong>Zero Morphosyntactic Labor:</strong> Neural machine translation outputs flawless clause boundaries without student effort.</li>
          <li><strong>QuillBot Paraphrasing:</strong> Artificial synonym cycling injects statistical lexical noise to mask AI generation patterns.</li>
          <li><strong>Outcome:</strong> Linguistic fossilization, stunted communicative proficiency, and persistent dependency on digital crutches.</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700 text-[11px] text-rose-300 font-medium">
        &cross; Complete Cognitive Bypass &amp; Fabricated Competency
      </div>
    </div>
  </div>

  <div class="mt-6 p-4 rounded-xl bg-teal-950/40 border border-teal-500/30">
    <div class="text-xs font-bold text-teal-300 uppercase mb-1">The Forensic Paradox in DLI Submissions</div>
    <p class="text-xs text-slate-300 leading-relaxed">
      Both final text files look polished on the surface. Static, whole-document statistical AI detectors falsely flag the authentic bilingual student as &ldquo;88% AI&rdquo; due to formulaic transitions, while grading the machine-paraphrased submission as &ldquo;0% AI&rdquo;! Checkmark&apos;s writing telemetry breaks this paradox by analyzing the physical, microsecond drafting journey.
    </p>
  </div>
</div>

<h3>The Zone of Proximal Development (ZPD) Under Threat</h3>
<p>
  In second-language acquisition theory (Vygotsky, 1978; Krashen, 1982; Swain, 1985), language competence develops through <strong>comprehensible output</strong> and the cognitive struggle of encoding complex thought into a developing lexical and morphosyntactic framework. When a bilingual 10th grader writing an essay on Isabel Allende&apos;s <em>La casa de los espíritus</em> struggles to choose between the preterite (<em>escribió</em>) and the imperfect (<em>escribía</em>), or wrestles with subjunctive clause embedding (<em>dudo que sea verdad</em>), that cognitive struggle is not an obstacle to learning&mdash;<strong>it is the learning itself</strong>.
</p>

<p>When students utilize generative AI or neural machine translation to bypass this struggle:</p>
<ol>
  <li><strong>Linguistic Fossilization Occurs:</strong> Students fail to develop target-language mental schemas, remaining permanently dependent on digital intermediaries.</li>
  <li><strong>Authentic Translanguaging Is Stifled:</strong> Teachers cannot diagnose authentic developmental errors (such as interlanguage calques, overgeneralization of irregular verbs, or false cognates) because the submitted prose reflects the algorithmic perfection of a multi-billion-parameter neural network.</li>
  <li><strong>Assessment Validity Collapses:</strong> Standards-based assessments tied to the <strong>ACTFL (American Council on the Teaching of Foreign Languages) Proficiency Guidelines</strong> or <strong>WIDA English Language Development Standards</strong> become completely decoupled from actual student output.</li>
</ol>

<h3>The Double-Bind of Commercial AI Detectors</h3>
<p>
  When DLI educators attempt to address this challenge using legacy, whole-document statistical AI detectors, they trigger a catastrophic equity crisis. Commercial AI detectors rely primarily on two statistical metrics:
</p>
<ul>
  <li><strong>Perplexity (<em>PPL</em>):</strong> A measure of how surprised an autoregressive language model is by a sequence of words. Low perplexity indicates highly predictable, conventional word choices.</li>
  <li><strong>Burstiness (<em>B</em>):</strong> The variance in sentence length, rhythm, and structural complexity across a document.</li>
</ul>

<p>
  Because emerging bilingual writers rely on standardized vocabulary sets, predictable clause templates, and formal transitional markers (<em>En primer lugar</em>, <em>Par conséquent</em>, <em>综上所述</em>, <em>Furthermore</em>), their authentic writing naturally exhibits <strong>low perplexity and low burstiness</strong>. Consequently, statistical detectors systematically flag genuine non-native writing as AI-generated.
</p>

<!-- The Fatal Flaws Diagram Component -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="text-center font-bold text-foreground text-xs tracking-wider uppercase mb-6">
    The Fatal Flaws of Black-Box AI Detectors in Dual-Language Classrooms
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Authentic Student False Positive -->
    <div class="rounded-xl bg-rose-500/5 border border-rose-500/20 p-4">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase">Scenario A: Authentic Bilingual Writer</span>
        <span class="px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] font-bold">Severe False Positive</span>
      </div>
      <div class="space-y-2 text-xs text-muted-foreground">
        <p><strong>Student Input:</strong> Emerging <em>L</em><sub>2</sub> vocabulary, formulaic transitions taught in class, consistent sentence lengths.</p>
        <div class="p-2 rounded bg-muted font-mono text-[11px] text-foreground">
          Statistical Classifier Output &rarr; Calculates High Predictability (Low PPL)
        </div>
        <div class="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 font-semibold">
          &cross; FALSE-POSITIVE FLAG: 89% AI GENERATED &bull; Honest student traumatized and wrongfully accused!
        </div>
      </div>
    </div>

    <!-- AI Paraphrased False Negative -->
    <div class="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-4">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Scenario B: Machine Translation + QuillBot</span>
        <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold">Complete False Negative</span>
      </div>
      <div class="space-y-2 text-xs text-muted-foreground">
        <p><strong>Student Input:</strong> Native prompt drafted in <em>L</em><sub>1</sub>, translated via DeepL, paraphrased via QuillBot to inject random synonyms.</p>
        <div class="p-2 rounded bg-muted font-mono text-[11px] text-foreground">
          Statistical Classifier Output &rarr; Sees Artificial Lexical Noise (High PPL)
        </div>
        <div class="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-semibold">
          &cross; FALSE-NEGATIVE VERDICT: 4% AI (Clean) &bull; Total cognitive bypass slips through undetected!
        </div>
      </div>
    </div>
  </div>

  <div class="mt-4 p-3 rounded-xl bg-muted/60 border border-border text-xs text-muted-foreground">
    <strong>Pedagogical Imperative:</strong> Dual-language educators cannot rely on black-box probabilistic scores. To uphold both equity and academic rigor, schools must deploy multidimensional writing process telemetry that captures the <strong>temporal and cognitive signatures</strong> of authentic bilingual drafting.
  </div>
</div>

<hr class="my-8 border-border" />

<h2>2. Deconstructing the Cognitive Psycholinguistics of Multilingual Writing</h2>

<p>
  To understand why keystroke telemetry succeeds where static text analysis fails, educators must examine the psycholinguistic mechanics of bilingual writing versus machine generation.
</p>

<h3>2.1 The &ldquo;False-Positive Vulnerability&rdquo;: Why Static Classifiers Fail Emerging Bilinguals</h3>
<p>
  In 2023, a landmark study by researchers at Stanford University (Liang et al., <em>&ldquo;GPT detectors are biased against non-native English writers,&rdquo;</em> published in <em>Patterns / Cell Press</em>) tested seven leading commercial AI detection engines on human-written essays. While native English essays were classified with over 97% accuracy, the exact same detectors misclassified <strong>61.3% to 97.8% of authentic non-native human essays (TOEFL submissions) as AI-generated</strong>. More than 20% of authentic bilingual essays were flagged as synthetic by every single commercial engine tested.
</p>

<!-- Perplexity Mathematical Definition Box -->
<div class="my-6 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex items-center justify-between mb-3 border-b border-border pb-2">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-0">The Perplexity Formulation &amp; Non-Native Bias</h3>
    <span class="px-2.5 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold">Information Theory</span>
  </div>
  <p class="text-xs text-muted-foreground mb-3">
    Perplexity measures the exponential cross-entropy of a token sequence $W = (w_1, w_2, \dots, w_N)$ under an autoregressive language model:
  </p>
  <div class="p-3 rounded-xl bg-slate-900 text-teal-300 font-mono text-xs text-center border border-slate-800 shadow-inner overflow-x-auto">
    Perplexity(W) = exp( - (1 / N) * &Sigma;_{i=1}^N ln P(w_i | w_1, ..., w_{i-1}) )
  </div>
  <p class="text-xs text-muted-foreground mt-3 leading-relaxed">
    When an emerging bilingual student writes in <em>L</em><sub>2</sub>, their working memory relies on high-frequency target vocabulary and direct grammatical templates taught in class. Because their word selections align almost perfectly with the most probable statistical paths of language models, statistical detectors conclude that the text was generated by an LLM. Conversely, AI paraphrasing tools deliberately inject low-frequency synonyms, artificially inflating perplexity to fool the classifier.
  </p>
</div>

<h3>2.2 The Cognitive Signatures of Authentic Bilingual Composing (Translanguaging in the Editor)</h3>
<p>
  In contemporary bilingual education scholarship (García &amp; Wei, 2014; Grosjean, 2010), <strong>translanguaging</strong> describes the fluid, unitary linguistic repertoire of multilingual speakers. When bilingual students write in a digital editor, their cognitive labor leaves unmistakable, reproducible telemetric signatures across the time domain.
</p>

<!-- Telemetric Anatomy Visual Flow -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md font-mono text-xs">
  <div class="text-center font-bold text-teal-400 uppercase tracking-wider text-xs mb-6">
    Telemetric Anatomy of Authentic Bilingual Drafting (Translanguaging in the Editor)
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
    <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
      <div class="text-teal-400 font-bold text-[11px] mb-1">STAGE 1: CLAUSE INITIALIZATION</div>
      <p class="text-white">&ldquo;En la novela...&rdquo;</p>
      <p class="text-[10px] text-slate-400 mt-2">Smooth typing of introductory frame.</p>
    </div>
    <div class="bg-slate-800 p-3 rounded-xl border border-amber-500/40">
      <div class="text-amber-400 font-bold text-[11px] mb-1">STAGE 2: INTRA-CLAUSE PAUSE (8.4s)</div>
      <p class="text-amber-200">[Cognitive Lexical Retrieval]</p>
      <p class="text-[10px] text-slate-400 mt-2">Accessing target lemma &amp; verb mood.</p>
    </div>
    <div class="bg-slate-800 p-3 rounded-xl border border-teal-500/40">
      <div class="text-cyan-400 font-bold text-[11px] mb-1">STAGE 3: MORPHOLOGICAL FRICTION</div>
      <p class="text-white">Types &rarr; Backspaces &rarr; Refines</p>
      <p class="text-[10px] text-slate-400 mt-2">Correcting gender/mood agreement.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
    <div class="bg-slate-800 p-3 rounded-xl border border-emerald-500/40">
      <div class="text-emerald-400 font-bold text-[11px] mb-1">STAGE 4: PERMISSIBLE MICRO-PASTE</div>
      <p class="text-white">Pastes &ldquo;desenlace&rdquo; (1 word)</p>
      <p class="text-[10px] text-slate-400 mt-2">Single-word WordReference lookup.</p>
    </div>
    <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
      <div class="text-teal-400 font-bold text-[11px] mb-1">STAGE 5: SYNTACTIC INTEGRATION</div>
      <p class="text-white">&ldquo;...del conflicto dramático.&rdquo;</p>
      <p class="text-[10px] text-slate-400 mt-2">Immediate resumption of manual typing.</p>
    </div>
    <div class="bg-slate-800 p-3 rounded-xl border border-indigo-500/40">
      <div class="text-indigo-300 font-bold text-[11px] mb-1">STAGE 6: NON-LINEAR REWORKING</div>
      <p class="text-white">Cursor jumps back 3 lines</p>
      <p class="text-[10px] text-slate-400 mt-2">Adjusting earlier verb tense to match.</p>
    </div>
  </div>
</div>

<h4>1. Lexical Retrieval Pauses (LRP)</h4>
<p>
  When composing in an acquired language, bilingual working memory must access target-language lemmas, apply morphosyntactic inflection rules (gender agreement, case endings, verb conjugations), and inhibit <em>L</em><sub>1</sub> lexical interference. In writing telemetry, this manifests as <strong>prolonged intra-clause hesitation pauses lasting between 5 and 18 seconds</strong>. Unlike native writers, whose pauses cluster heavily at major paragraph and sentence boundaries, bilingual writers pause <em>inside</em> clauses&mdash;immediately preceding low-frequency nouns, complex verb conjugations, or relative pronouns.
</p>

<h4>2. Cross-Linguistic Keystroke Friction Ratio ($KFR = 18\% - 35\%$)</h4>
<p>
  Authentic drafting is inherently non-linear and messy. Checkmark Plagiarism quantifies this composing struggle via the <strong>Keystroke Friction Ratio ($KFR$)</strong>:
</p>

<!-- KFR Mathematical Definition Box -->
<div class="my-6 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex items-center justify-between mb-3 border-b border-border pb-2">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Keystroke Friction Ratio ($KFR$) Mathematical Metric</h3>
    <span class="px-2.5 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold">Process Forensics</span>
  </div>
  <p class="text-xs text-muted-foreground mb-3">
    Checkmark calculates $KFR$ to quantify the volume of cognitive struggle, recursive editing, and morphological self-repair during a drafting session:
  </p>
  <div class="p-3 rounded-xl bg-slate-900 text-teal-300 font-mono text-xs text-center border border-slate-800 shadow-inner overflow-x-auto">
    KFR = ( (Backspace Keystrokes + Delete Keystrokes + Cursor Navigation Jumps + Inline Edits) / (Total Keystrokes Executed) ) * 100
  </div>
  <p class="text-xs text-muted-foreground mt-3 leading-relaxed">
    For authentic emerging bilingual writers in Dual-Language Immersion settings, empirical telemetry demonstrates that the $KFR$ consistently falls within the <strong>18% to 35% range</strong>. Students continuously self-repair: correcting gender agreements (<em>el problema</em> vs. <em>la problema</em>), cycling verb conjugations in French (<em>ils mangeaient</em> &rarr; <em>ils ont mangé</em>), or resolving word-order calques (reordering <em>la blanca casa</em> to <em>la casa blanca</em>).
  </p>
</div>

<h4>3. Intermittent Permissible Ingestion</h4>
<p>
  Authentic bilingual writers frequently consult approved reference tools (e.g., WordReference, Real Academia Española [RAE], Le Robert, Collins, Pleco). In writing process telemetry, this appears as <strong>intermittent micro-pastes of 1 to 3 words</strong> (rarely exceeding 5 words). Crucially, the student immediately resumes manual typing within 1&ndash;3 seconds, embedding the looked-up vocabulary item into the surrounding syntactic framework.
</p>

<hr class="my-8 border-border" />

<h3>2.3 The Telemetric Signatures of AI-Assisted Paraphrasing &amp; Machine Translation</h3>
<p>
  In stark contrast to the dynamic cognitive friction of authentic composing, submissions generated via machine translation or AI paraphrasing exhibit rigid, mechanical telemetric abnormalities.
</p>

<!-- Telemetric Anatomy of AI Paraphrasing Box -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md font-mono text-xs">
  <div class="text-center font-bold text-rose-400 uppercase tracking-wider text-xs mb-4">
    Telemetric Anatomy of AI-Assisted Paraphrasing &amp; Machine Translation
  </div>

  <div class="space-y-4">
    <!-- Scenario A -->
    <div class="bg-slate-800/80 p-4 rounded-xl border border-rose-500/40">
      <div class="flex items-center justify-between text-rose-300 font-bold mb-2">
        <span>SCENARIO A: MONOLITHIC BLOCK PASTE (DeepL / ChatGPT Dump)</span>
        <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-200 text-[10px]">Macro-Paste Event</span>
      </div>
      <ul class="space-y-1 text-slate-300 text-[11px] list-disc pl-4">
        <li><strong>[Timestamp 00:00]</strong> Document Created in Canvas LMS editor.</li>
        <li><strong>[Timestamp 00:14]</strong> PASTE BUFFER EVENT: 487 Words Ingested in 0.0 Seconds.</li>
        <li><strong>[Timestamp 00:22]</strong> Student adds Title and Name (8 manual keystrokes).</li>
        <li><strong>[Timestamp 00:35]</strong> Document Submitted (<em>KFR</em> = 0.4%, Total Active Drafting Time = 35 seconds).</li>
      </ul>
    </div>

    <!-- Scenario B -->
    <div class="bg-slate-800/80 p-4 rounded-xl border border-amber-500/40">
      <div class="flex items-center justify-between text-amber-300 font-bold mb-2">
        <span>SCENARIO B: OPTICAL TRANSCRIPTION (Split-Screen / Second-Screen Retyping)</span>
        <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 text-[10px]">Isochronous Typing</span>
      </div>
      <ul class="space-y-1 text-slate-300 text-[11px] list-disc pl-4">
        <li><strong>[Keystroke Stream]</strong> Constant, mechanical typing velocity (45 WPM) with zero thinking pauses.</li>
        <li><strong>[Rhythm Metric]</strong> Inter-Keystroke Interval Coefficient of Variation: <em>CV</em><sub>IKI</sub> = 0.11 (Robotically Flat).</li>
        <li><strong>[Morphology]</strong> Zero morphological corrections (Subjunctive and complex idioms typed perfectly on the first pass).</li>
        <li><strong>[Cognitive Gaps]</strong> Complete absence of intra-clause lexical retrieval pauses.</li>
      </ul>
    </div>
  </div>
</div>

<h4>1. Unnatural Isochronous Typing ($CV_{IKI} < 0.18$)</h4>
<p>
  When a student attempts to bypass paste-detection logs by placing an AI translation window on a second monitor, tablet, or split screen and manually retyping the text, their typing telemetry betrays them. Natural human drafting features high variability in <strong>Inter-Keystroke Intervals (IKI)</strong>: rapid bursts for familiar words followed by long pauses for ideation. Optical transcription, however, produces <strong>isochronous (rhythmically flat) typing</strong>:
</p>

<!-- CV_IKI Formula Box -->
<div class="my-4 p-4 rounded-xl bg-slate-900 text-teal-300 font-mono text-xs text-center border border-slate-800 shadow-inner overflow-x-auto">
  CV_{IKI} = &sigma;_{IKI} / &mu;_{IKI} &lt; 0.18  (Isochronous / Non-Cognitive Transcription)
</div>

<p class="text-xs text-muted-foreground">
  A Coefficient of Variation ($CV_{IKI}$) below 0.18 indicates that the student is not generating thoughts or retrieving vocabulary&mdash;they are mechanically transcribing visual characters from an external display at a steady, unvarying pace.
</p>

<h4>2. Monolithic Block Pastes</h4>
<p>
  The most blatant signature of machine translation is the instantaneous ingestion of multi-sentence or multi-paragraph target-language prose. A student pastes 250 to 600 words into a blank editor in a single 0.0-second event, followed by zero grammatical adjustments.
</p>

<h4>3. Complete Absence of Morphosyntactic Revision ($KFR < 3\%$)</h4>
<p>
  In machine-paraphrased writing, complex target-language syntactic structures&mdash;such as intricate conditional inversions in French (<em>Si j&apos;avais su, je serais venu</em>), complex subjunctive noun clauses in Spanish (<em>No creo que hayan comprendido las implicaciones socioeconómicas</em>), or Chengyu four-character idioms in Mandarin (破釜沉舟)&mdash;appear on the screen in flawless succession without a single backspace, deletion, or hesitation pause. For an emerging bilingual student whose oral proficiency is at the ACTFL Intermediate-Low level, the sudden keystroke-level production of Superior-level morphosyntax with a $KFR$ below 3% is definitive proof of external cognitive outsourcing.
</p>

<hr class="my-8 border-border" />

<h2>3. Psycholinguistic &amp; Telemetric Comparison Matrix</h2>

<p>
  The following evidentiary matrix contrasts the physiological and telemetric dimensions of authentic bilingual composing against machine-translated and AI-paraphrased text.
</p>

<!-- Comparison Table -->
<div class="my-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
  <table class="w-full text-left text-sm">
    <thead class="bg-muted/80 text-foreground border-b border-border text-xs uppercase tracking-wider">
      <tr>
        <th class="p-4 font-semibold">Evaluation Metric</th>
        <th class="p-4 font-semibold text-emerald-700 dark:text-emerald-400">Authentic Bilingual Drafting (Translanguaging)</th>
        <th class="p-4 font-semibold text-teal-700 dark:text-teal-400">Intermittent Dictionary / Gloss Scaffolding</th>
        <th class="p-4 font-semibold text-amber-700 dark:text-amber-400">Neural Machine Translation (DeepL / Google)</th>
        <th class="p-4 font-semibold text-rose-700 dark:text-rose-400">Generative LLM + Paraphraser (ChatGPT + QuillBot)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-xs leading-relaxed text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">Keystroke Friction Ratio ($KFR$)</td>
        <td class="p-4 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>18% &ndash; 35%</strong><br />(High backspacing &amp; self-repair)</td>
        <td class="p-4 text-foreground"><strong>12% &ndash; 25%</strong><br />(Moderate friction during insertion)</td>
        <td class="p-4 text-rose-600 dark:text-rose-400 font-semibold"><strong>&lt; 3%</strong><br />(Near-zero revision)</td>
        <td class="p-4 text-rose-600 dark:text-rose-400 font-semibold"><strong>&lt; 2%</strong><br />(Completely static paste)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">Intra-Clause Pause Duration</td>
        <td class="p-4 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>5 &ndash; 18 s</strong><br />(Pauses before verbs, nouns, idioms)</td>
        <td class="p-4 text-foreground"><strong>8 &ndash; 25 s</strong><br />(Pauses matching lookup tabs)</td>
        <td class="p-4 text-rose-600 dark:text-rose-400"><strong>&lt; 1.5 s</strong> or <strong>0.0 s</strong> (Paste)</td>
        <td class="p-4 text-rose-600 dark:text-rose-400"><strong>&lt; 1.2 s</strong> (Steady mechanical flow)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">Typing Velocity Variation ($CV_{IKI}$)</td>
        <td class="p-4 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>0.42 &ndash; 0.78</strong><br />(Burst-and-pause rhythm)</td>
        <td class="p-4 text-foreground"><strong>0.38 &ndash; 0.65</strong><br />(Transition between lookup &amp; typing)</td>
        <td class="p-4 text-rose-600 dark:text-rose-400"><strong>&lt; 0.18</strong><br />(Unnaturally flat isochronous)</td>
        <td class="p-4 text-rose-600 dark:text-rose-400"><strong>&lt; 0.15</strong><br />(Optical screen transcription)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">Clipboard Paste Profile</td>
        <td class="p-4 text-emerald-600 dark:text-emerald-400 font-semibold"><strong>0 bytes</strong> or micro-pastes (1&ndash;3 words)</td>
        <td class="p-4 text-foreground">Micro-pastes (1&ndash;5 words) followed by manual typing</td>
        <td class="p-4 text-rose-600 dark:text-rose-400">Macro-pastes (150&ndash;600 words) in 0.0 s</td>
        <td class="p-4 text-rose-600 dark:text-rose-400">Macro-pastes (200&ndash;800 words) in 0.0 s</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground"><em>L</em><sub>1</sub> Syntactic Calques</td>
        <td class="p-4 text-foreground"><strong>Visible &amp; Corrected:</strong> Initial <em>L</em><sub>1</sub> phrasing backspaced &amp; refined</td>
        <td class="p-4 text-foreground"><strong>Preserved:</strong> Student integrates target lemmas into <em>L</em><sub>1</sub> syntax</td>
        <td class="p-4 text-foreground"><strong>Subtle/Flattened:</strong> NMT preserves student <em>L</em><sub>1</sub> logic into <em>L</em><sub>2</sub> words</td>
        <td class="p-4 text-foreground"><strong>Completely Erased:</strong> Generic, native-like LLM academic phrasing</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">Static AI Detector Output</td>
        <td class="p-4 text-rose-600 dark:text-rose-400 font-semibold"><strong>High False-Positive Flag</strong><br />(Misclassified as 60%&ndash;95% AI)</td>
        <td class="p-4 text-amber-600 dark:text-amber-400"><strong>Moderate False-Positive</strong><br />(Flagged as 40%&ndash;70% AI)</td>
        <td class="p-4 text-emerald-600 dark:text-emerald-400"><strong>False-Negative</strong><br />(DeepL passes as 0%&ndash;15% AI)</td>
        <td class="p-4 text-emerald-600 dark:text-emerald-400"><strong>False-Negative</strong><br />(QuillBot passes as 0%&ndash;10% AI)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">Checkmark Multi-Evidence Determination</td>
        <td class="p-4 text-emerald-600 dark:text-emerald-400 font-bold">&check; Exonerated &amp; Verified Human</td>
        <td class="p-4 text-teal-600 dark:text-teal-400 font-bold">&check; Verified Scaffolding</td>
        <td class="p-4 text-rose-600 dark:text-rose-400 font-bold">&cross; Flagged Machine Translation</td>
        <td class="p-4 text-rose-600 dark:text-rose-400 font-bold">&cross; Flagged Authorship Bypass</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>4. Checkmark Plagiarism&apos;s Multilingual Telemetry &amp; Assessment Suite</h2>

<p>
  <a href="/" class="text-teal-600 dark:text-teal-400 underline font-semibold">Checkmark Plagiarism</a> was built from the ground up to eliminate the injustice of black-box AI scores while equipping dual-language educators with the transparent, defensible evidence needed to protect academic integrity.
</p>

<!-- Architecture Blueprint Cards -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">
    Checkmark Plagiarism Integrated DLI Telemetry Architecture
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Pillar 1 -->
    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700">
      <div class="flex items-center gap-2 mb-2">
        <span class="flex h-2 w-2 rounded-full bg-teal-400"></span>
        <h3 class="text-xs font-bold text-white uppercase pt-0 mb-0">1. Patent-Pending Essay Playback™</h3>
      </div>
      <p class="text-slate-300 text-xs leading-relaxed">
        Scrubbable 1x&ndash;8x video replay reconstructing every keystroke, pause, and cross-lingual edit. Visualizes intra-clause lexical pauses in orange/yellow and documents authentic morphosyntactic self-repair ($KFR = 18\% - 35\%$).
      </p>
    </div>

    <!-- Pillar 2 -->
    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700">
      <div class="flex items-center gap-2 mb-2">
        <span class="flex h-2 w-2 rounded-full bg-cyan-400"></span>
        <h3 class="text-xs font-bold text-white uppercase pt-0 mb-0">2. External Paste Buffer Inspector</h3>
      </div>
      <p class="text-slate-300 text-xs leading-relaxed">
        Preserves 100% of clipboard text ingested from outside the active editor window. Differentiates 1-word WordReference lookups from 400-word DeepL dumps with timestamped links that jump directly to playback.
      </p>
    </div>

    <!-- Pillar 3 -->
    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700">
      <div class="flex items-center gap-2 mb-2">
        <span class="flex h-2 w-2 rounded-full bg-emerald-400"></span>
        <h3 class="text-xs font-bold text-white uppercase pt-0 mb-0">3. Calibrated Passage-Level AI Sliders</h3>
      </div>
      <p class="text-slate-300 text-xs leading-relaxed">
        Sentence-by-sentence linguistic probability cards with honest short-text (&lt;150w) guardrails (displays N/A instead of guessing). Replaces misleading whole-paper percentages with granular stylistic confidence intervals.
      </p>
    </div>

    <!-- Pillar 4 -->
    <div class="bg-slate-800/90 rounded-xl p-4 border border-slate-700">
      <div class="flex items-center gap-2 mb-2">
        <span class="flex h-2 w-2 rounded-full bg-indigo-400"></span>
        <h3 class="text-xs font-bold text-white uppercase pt-0 mb-0">4. ACTFL &amp; WIDA Rubric Autograding</h3>
      </div>
      <p class="text-slate-300 text-xs leading-relaxed">
        Direct AST parsing of ACTFL Proficiency Descriptors &amp; WIDA Writing Rubrics with quote-anchored justifications. One-click grade and feedback passback to Canvas SpeedGrader, Buzz LMS, and Google Classroom.
      </p>
    </div>
  </div>
</div>

<!-- Embedded UI Showcase Grid -->
<div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="rounded-2xl bg-card border border-border p-4 shadow-sm">
    <img 
      src="/images/services/report-paste-evidence.png" 
      alt="Checkmark External Paste Buffer Inspector interface showing clipboard event analysis" 
      class="w-full rounded-xl border border-border mb-3"
    />
    <h3 class="text-sm font-bold text-foreground pt-0 mb-1">External Paste Buffer Inspector</h3>
    <p class="text-xs text-muted-foreground">
      Logs exact character count, source snippet, and insertion timestamp. Allows educators to instantly verify allowable dictionary lookups vs. unauthorized machine translation blocks.
    </p>
  </div>

  <div class="rounded-2xl bg-card border border-border p-4 shadow-sm">
    <img 
      src="/images/services/report-originality-tiles.png" 
      alt="Checkmark Originality Tiles and multi-factor integrity breakdown" 
      class="w-full rounded-xl border border-border mb-3"
    />
    <h3 class="text-sm font-bold text-foreground pt-0 mb-1">Multi-Factor Integrity Dossier</h3>
    <p class="text-xs text-muted-foreground">
      Pairs writing telemetry waveforms with side-by-side plagiarism matches and ACTFL rubric criteria, giving educators complete transparency without black-box guessing.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>5. ACTFL-Aligned Evidentiary Matrix for Multilingual Writing Telemetry</h2>

<p>
  The American Council on the Teaching of Foreign Languages (ACTFL) defines proficiency across four primary criteria: <strong>Global Tasks and Functions</strong>, <strong>Context and Content</strong>, <strong>Text Type</strong>, and <strong>Language Control</strong>. The matrix below demonstrates how writing process telemetry correlates directly with ACTFL writing proficiency levels, contrasting genuine student production against AI-assisted bypass anomalies.
</p>

<!-- ACTFL Matrix Table Component -->
<div class="my-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
  <table class="w-full text-left text-sm">
    <thead class="bg-muted/80 text-foreground border-b border-border text-xs uppercase tracking-wider">
      <tr>
        <th class="p-4 font-semibold">ACTFL Target Level</th>
        <th class="p-4 font-semibold text-teal-700 dark:text-teal-400">Authentic Composing Telemetry (Healthy Friction)</th>
        <th class="p-4 font-semibold text-rose-700 dark:text-rose-400">AI-Assisted Paraphrasing Red Flags (Process Anomalies)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-xs leading-relaxed text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">
          <span class="text-teal-600 dark:text-teal-400 font-extrabold text-sm block">Novice High</span>
          <span class="text-[11px] text-muted-foreground font-normal">Formulaic &amp; Recombined Words</span>
        </td>
        <td class="p-4 text-foreground">
          <ul class="space-y-1 list-disc pl-4">
            <li>Drafting in discrete sentences and formulaic lists.</li>
            <li><strong>KFR: 15% &ndash; 28%</strong>.</li>
            <li>Pauses cluster around basic verb conjugations and gender agreement.</li>
          </ul>
        </td>
        <td class="p-4 text-rose-600 dark:text-rose-400">
          <ul class="space-y-1 list-disc pl-4">
            <li>Submission contains complex compound-complex sentences with zero pauses.</li>
            <li><strong>KFR &lt; 2%</strong> with zero vocabulary lookups.</li>
            <li>Pastes whole paragraphs (&gt;100 words). Prose exceeds oral baseline.</li>
          </ul>
        </td>
      </tr>

      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">
          <span class="text-teal-600 dark:text-teal-400 font-extrabold text-sm block">Intermediate Mid</span>
          <span class="text-[11px] text-muted-foreground font-normal">Discrete Paragraphs &amp; Connected Text</span>
        </td>
        <td class="p-4 text-foreground">
          <ul class="space-y-1 list-disc pl-4">
            <li>Creation with language; active paragraph-level stringing.</li>
            <li><strong>KFR: 20% &ndash; 35%</strong>.</li>
            <li>Frequent 6&ndash;14s pauses before connective transition phrases.</li>
            <li>1&ndash;4 word dictionary lookups logged in paste buffer.</li>
          </ul>
        </td>
        <td class="p-4 text-rose-600 dark:text-rose-400">
          <ul class="space-y-1 list-disc pl-4">
            <li>Flawless hypothetical/subjunctive clauses appearing at 55 WPM flat typing.</li>
            <li>Zero backspacing on irregular verbs.</li>
            <li>Monolithic pastes from DeepL/ChatGPT.</li>
            <li>Perfect idiomatic usage with zero dictionary search events.</li>
          </ul>
        </td>
      </tr>

      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">
          <span class="text-teal-600 dark:text-teal-400 font-extrabold text-sm block">Advanced Low</span>
          <span class="text-[11px] text-muted-foreground font-normal">Paragraph-Level Narratives &amp; Time Frames</span>
        </td>
        <td class="p-4 text-foreground">
          <ul class="space-y-1 list-disc pl-4">
            <li>Narrative across multiple time frames (past, present, future).</li>
            <li><strong>KFR: 18% &ndash; 30%</strong>.</li>
            <li>Visible self-correction of aspect (preterite vs. imperfect).</li>
            <li>Active paragraph restructuring and syntactic refinement.</li>
          </ul>
        </td>
        <td class="p-4 text-rose-600 dark:text-rose-400">
          <ul class="space-y-1 list-disc pl-4">
            <li>Highly abstract philosophical prose appearing without structural drafting.</li>
            <li>Absence of time-frame self-correction.</li>
            <li>Isochronous typing velocity (<em>CV</em> &lt; 0.15) indicating second-screen transcription.</li>
          </ul>
        </td>
      </tr>

      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">
          <span class="text-teal-600 dark:text-teal-400 font-extrabold text-sm block">Superior</span>
          <span class="text-[11px] text-muted-foreground font-normal">Extended Theory, Nuance &amp; Register</span>
        </td>
        <td class="p-4 text-foreground">
          <ul class="space-y-1 list-disc pl-4">
            <li>Extended discourse, hypothesis, supported argument, cultural nuance.</li>
            <li><strong>KFR: 16% &ndash; 26%</strong>.</li>
            <li>Structural reorganization of entire paragraphs directly inside editor.</li>
          </ul>
        </td>
        <td class="p-4 text-rose-600 dark:text-rose-400">
          <ul class="space-y-1 list-disc pl-4">
            <li>Complete absence of cognitive pauses during nuanced argumentation.</li>
            <li>External paste buffer logs show full text generated in external LLM session and imported into student LMS editor.</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>6. Real-World Dual-Language Classroom Case Studies</h2>

<p>
  The following real-world classroom inquiries demonstrate how Checkmark Plagiarism&apos;s multidimensional telemetry resolves complex academic integrity inquiries while supporting student growth.
</p>

<!-- Case Study 1 Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex items-center justify-between border-b border-border pb-3 mb-4">
    <div>
      <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Case Study 1: High School Spanish Dual Immersion</span>
      <h3 class="text-base font-bold text-foreground pt-0 mb-0">Mateo R. &mdash; Grade 11 Literature Seminar (San Antonio, TX)</h3>
    </div>
    <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">100% Exonerated</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground mb-4">
    <div>
      <strong class="text-foreground">Course &amp; Prompt:</strong> 1,000-word analytical essay comparing magical realism in Gabriel García Márquez&apos;s <em>Cien años de soledad</em> and Isabel Allende&apos;s <em>La casa de los espíritus</em>.
    </div>
    <div>
      <strong class="text-foreground">The Incident:</strong> Submitted essay contained sophisticated literary phrasing (<em>&ldquo;el desvanecimiento de la frontera...&rdquo;</em>). A legacy AI detector flagged it at <strong>88% AI-Generated</strong>. The teacher was poised to assign a zero.
    </div>
  </div>

  <!-- Interactive Mockup Timeline -->
  <div class="bg-slate-900 text-slate-100 p-4 rounded-xl border border-slate-800 font-mono text-xs my-4">
    <div class="text-teal-400 font-bold mb-2 uppercase text-[11px]">Checkmark Essay Playback™ Telemetry Audit:</div>
    <div class="space-y-1.5 text-[11px] text-slate-300">
      <div class="flex gap-2">
        <span class="text-teal-400 font-bold">[00:00 - 12:30]</span>
        <span>Thesis structuring &amp; outline drafting in Spanish (KFR = 21%).</span>
      </div>
      <div class="flex gap-2">
        <span class="text-amber-400 font-bold">[14:15]</span>
        <span>Intra-Clause Pause: 14.2s (Wrestling with imperfect subjunctive).</span>
      </div>
      <div class="flex gap-2">
        <span class="text-emerald-400 font-bold">[14:30]</span>
        <span>Types &ldquo;para que comprendieron&rdquo; &rarr; Backspaces &rarr; Corrects to &ldquo;para que comprendieran&rdquo;.</span>
      </div>
      <div class="flex gap-2">
        <span class="text-cyan-400 font-bold">[22:10]</span>
        <span>Micro-Paste Event: 1 word (&ldquo;yuxtaposición&rdquo;) from RAE dictionary.</span>
      </div>
      <div class="flex gap-2">
        <span class="text-indigo-400 font-bold">[22:14]</span>
        <span>Resumes manual typing: &ldquo;...de elementos míticos con la realidad histórica.&rdquo;</span>
      </div>
    </div>
    <div class="mt-3 pt-2 border-t border-slate-800 text-emerald-400 font-bold text-right text-[11px]">
      VERDICT: Authentic Human Translanguaging | KFR = 26.4% | Full ACTFL Advanced-Low Credit
    </div>
  </div>

  <p class="text-xs text-muted-foreground">
    <strong>Resolution:</strong> Mateo was completely exonerated. The high static AI score was an artifact of detector bias against non-native formulaic transitions. Checkmark&apos;s autograder generated quote-anchored ACTFL Advanced-Low rubric feedback, synced straight into <a href="/services/integrations/canvas-lms" class="text-teal-600 dark:text-teal-400 underline font-semibold">Canvas SpeedGrader</a>.
  </p>
</div>

<!-- Case Study 2 Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex items-center justify-between border-b border-border pb-3 mb-4">
    <div>
      <span class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Case Study 2: Middle School French Immersion</span>
      <h3 class="text-base font-bold text-foreground pt-0 mb-0">Julien B. &mdash; Grade 8 Social Studies (Montreal, QC)</h3>
    </div>
    <span class="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">Restorative Intervention</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground mb-4">
    <div>
      <strong class="text-foreground">Course &amp; Prompt:</strong> 400-word historical inquiry essay on the causes of the Storming of the Bastille (<em>La prise de la Bastille</em>).
    </div>
    <div>
      <strong class="text-foreground">The Incident:</strong> Student whose oral French is at Novice-High submitted an essay containing flawless <em>passé simple</em> conjugations (<em>ils s&apos;emparèrent...</em>) and complex syntax.
    </div>
  </div>

  <!-- Interactive Mockup Timeline -->
  <div class="bg-slate-900 text-slate-100 p-4 rounded-xl border border-slate-800 font-mono text-xs my-4">
    <div class="text-rose-400 font-bold mb-2 uppercase text-[11px]">Checkmark External Paste Buffer &amp; Playback Audit:</div>
    <div class="space-y-1.5 text-[11px] text-slate-300">
      <div class="flex gap-2">
        <span class="text-rose-400 font-bold">[00:00]</span>
        <span>Document Created in Canvas LMS editor.</span>
      </div>
      <div class="flex gap-2">
        <span class="text-rose-400 font-bold">[00:06]</span>
        <span>PASTE EVENT DETECTED: 384 Words (100% of Essay Body) Ingested in 0.0 Seconds.</span>
      </div>
      <div class="flex gap-2">
        <span class="text-amber-400 font-bold">[00:08]</span>
        <span>Paste Inspector String Analysis: Matches DeepL NMT Output Syntax.</span>
      </div>
      <div class="flex gap-2">
        <span class="text-slate-400 font-bold">[00:20 - 04:10]</span>
        <span>Minor cursor navigation; 2 punctuation backspaces (KFR = 0.8%, Active Typing = 14s).</span>
      </div>
    </div>
    <div class="mt-3 pt-2 border-t border-slate-800 text-amber-400 font-bold text-right text-[11px]">
      VERDICT: Automated DeepL NMT Bypass | Restorative Rewrite Assigned
    </div>
  </div>

  <p class="text-xs text-muted-foreground">
    <strong>Resolution:</strong> Rather than issuing a punitive zero, the teacher held a restorative conference co-viewing the paste buffer log. Julien admitted drafting in English and translating via DeepL. The teacher used the opportunity to coach Julien on productive struggle, resetting the assignment for a supervised in-class draft.
  </p>
</div>

<!-- Case Study 3 Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex items-center justify-between border-b border-border pb-3 mb-4">
    <div>
      <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Case Study 3: AP Chinese Language &amp; Culture</span>
      <h3 class="text-base font-bold text-foreground pt-0 mb-0">Mei-Ling Z. &mdash; Grade 12 (San Jose, CA)</h3>
    </div>
    <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">IME Verified Human</span>
  </div>

  <p class="text-xs text-muted-foreground mb-3">
    <strong>The Investigation:</strong> An essay submitted with sophisticated four-character idioms (成语, <em>chéngyǔ</em>) was verified using Checkmark&apos;s Chinese Pinyin IME keystroke capture. Essay Playback visualized the authentic Pinyin typing stream (<code>d-u-a-n-w-u-j-i-e</code> &rarr; 1.4s selection pause &rarr; <code>端午节</code>), with 18 homophonic backspaces (<em>KFR</em> = 29.1%), verifying 100% authentic biliteracy and earning an ACTFL Intermediate-High rating.
  </p>
</div>

<hr class="my-8 border-border" />

<h2>7. The 4-Phase Bilingual Telemetry Verification Protocol</h2>

<p>
  To institutionalize objective, supportive, and legally defensible integrity workflows across Dual-Language and World Language departments, schools should implement this 4-phase protocol.
</p>

<!-- 4-Phase Protocol Component -->
<div class="my-8 space-y-4">
  <!-- Phase 1 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-xs">1</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Phase 1: Pre-Submission Transparency &amp; Digital Tool Policy</h3>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed pl-10">
      Explicitly differentiate between <strong>authorized lexical scaffolding</strong> (1-word lookups on WordReference, RAE, Pleco) and <strong>unauthorized cognitive outsourcing</strong> (full-sentence DeepL translation, ChatGPT drafting). Require all composition to occur within Checkmark-integrated LMS editors.
    </p>
  </div>

  <!-- Phase 2 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-xs">2</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Phase 2: Multi-Factor Telemetry Triage</h3>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed pl-10">
      Evaluate the hierarchy of process evidence: (1) Check paste buffer for macro-pastes (&gt;20 words); (2) Verify Keystroke Friction Ratio ($KFR = 18\% - 35\%$); (3) Confirm intra-clause pause distribution. Disregard generic whole-paper AI probability scores.
    </p>
  </div>

  <!-- Phase 3 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-xs">3</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Phase 3: Restorative Process-Based Conferencing</h3>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed pl-10">
      Screen-share Essay Playback™ collaboratively with the student. Use non-punitive, inquiry-based dialogue: <em>&ldquo;Walk me through how you chose this phrasing.&rdquo;</em> Validate authentic translanguaging and productive struggle, while assigning scaffolded revision plans for translation bypasses.
    </p>
  </div>

  <!-- Phase 4 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-xs">4</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Phase 4: Formative Rubric Feedback &amp; LMS Passback</h3>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed pl-10">
      Generate quote-anchored ACTFL and WIDA rubric evaluations using Checkmark&apos;s AI Autograder. The teacher reviews, edits, and approves the provisional scores, then executes 1-click grade passback to Canvas SpeedGrader, Buzz LMS, or Google Classroom.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Restorative Coaching Scripts for Multilingual Writers</h2>

<p>
  When conducting writing conferences with dual-language students, the educator&apos;s tone should remain supportive, culturally responsive, and focused on growth.
</p>

<!-- Script 1 -->
<div class="my-6 rounded-2xl bg-card border border-teal-500/30 p-5 shadow-sm">
  <div class="flex items-center justify-between mb-2">
    <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase">Script 1: Exonerating a Falsely Flagged Bilingual Writer</span>
    <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[10px] font-bold">Trust Restored</span>
  </div>
  <blockquote class="text-xs text-foreground italic border-l-2 border-teal-500 pl-3 my-2">
    &ldquo;Hi Sofia, thank you for meeting with me. When your essay was submitted, an automated filter flagged your writing as &apos;AI-like&apos; because of your formal transitional phrases. But here at our school, we don&apos;t rely on black-box guessing. Let&apos;s look at your Checkmark Essay Playback together. Look right here at minute 14: I can see you spending 15 seconds thinking, typing out &apos;para que comprendieron&apos;, catching your own mistake, and backspacing to correct it to the subjunctive &apos;comprendieran&apos;. That right there is high-level bilingual thinking. Your keystroke history proves how hard you worked. I&apos;ve completely cleared the flag, and your essay scored an Advanced-Low on our ACTFL rubric. Keep trusting your own voice!&rdquo;
  </blockquote>
</div>

<!-- Script 2 -->
<div class="my-6 rounded-2xl bg-card border border-amber-500/30 p-5 shadow-sm">
  <div class="flex items-center justify-between mb-2">
    <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">Script 2: Addressing an Unedited Machine Translation Paste</span>
    <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold">Restorative Reset</span>
  </div>
  <blockquote class="text-xs text-foreground italic border-l-2 border-amber-500 pl-3 my-2">
    &ldquo;Hi Carlos, let&apos;s open your Checkmark writing timeline for your French Revolution essay. Looking at the paste log at minute 0:08, we see a single paste of 380 words of French text, and our active typing log shows 22 seconds of total drafting time. The grammatical structures—like the passé simple forms—are far beyond what we&apos;ve practiced. Talk to me about what happened here. Did you write this in English and translate it through DeepL? ... I appreciate your honesty. When DeepL does the translation, your brain doesn&apos;t get to build the neural connections needed to become truly bilingual. Let&apos;s hit the reset button. I&apos;m reopening the assignment in Canvas, and I want you to spend 30 minutes in class drafting the first two paragraphs in your own French. I&apos;ll be right here to help with vocabulary.&rdquo;
  </blockquote>
</div>

<!-- Script 3 -->
<div class="my-6 rounded-2xl bg-card border border-indigo-500/30 p-5 shadow-sm">
  <div class="flex items-center justify-between mb-2">
    <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">Script 3: Dictionary Scaffolding vs. Cognitive Outsourcing</span>
    <span class="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold">Skill Boundary</span>
  </div>
  <blockquote class="text-xs text-foreground italic border-l-2 border-indigo-500 pl-3 my-2">
    &ldquo;Hi Mei-Ling, I noticed in your Chinese essay that you used several complex four-character idioms. Looking at your Essay Playback, I can see where you looked up the term on Pleco and pasted the single idiom &apos;破釜沉舟&apos; into your document. That is a completely acceptable way to use a bilingual dictionary! However, in the third paragraph, you pasted three full sentences that were translated from English. Looking up a single word or idiom expands your vocabulary; pasting entire sentences prevents you from mastering Chinese sentence order. Let&apos;s rework that third paragraph together right now so you can practice building the sentence structure yourself.&rdquo;
  </blockquote>
</div>

<hr class="my-8 border-border" />

<h2>9. Ethical, Legal, and FERPA Considerations for Multilingual Programs</h2>

<p>
  Dual-Language Immersion and World Language programs operate under strict federal and state privacy statutes. When deploying academic integrity and writing assessment technology, district leadership must ensure complete compliance with civil rights and data security mandates.
</p>

<!-- Regulatory Compliance Table -->
<div class="my-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
  <table class="w-full text-left text-sm">
    <thead class="bg-muted/80 text-foreground border-b border-border text-xs uppercase tracking-wider">
      <tr>
        <th class="p-4 font-semibold">Regulatory Mandate</th>
        <th class="p-4 font-semibold text-teal-700 dark:text-teal-400">Checkmark Architectural Guarantee</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-xs leading-relaxed text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">FERPA (20 U.S.C. § 1232g) &amp; COPPA</td>
        <td class="p-4 text-foreground">
          <strong>Zero Model Training:</strong> Student submissions and telemetry are never ingested, stored in public LLM pools, or used to train commercial models.
        </td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">Title VI Civil Rights Act of 1964</td>
        <td class="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">
          <strong>Eliminates Disparate Impact:</strong> Replaces biased probabilistic classifiers with objective, non-discriminatory keystroke and paste telemetry.
        </td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">State Student Privacy (NY 2-D, CA SOPIPA)</td>
        <td class="p-4 text-foreground">
          Full AES-256 encryption at rest, TLS 1.3 in transit, zero third-party data monetization, and strict district data tenancy.
        </td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-4 font-bold text-foreground">SOC 2 Type II Security</td>
        <td class="p-4 text-foreground">
          Enterprise cloud architecture audited for rigorous role-based access controls; telemetry accessible strictly to verified educators.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>10. Frequently Asked Questions (FAQs)</h2>

<div class="my-8 space-y-4">
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2">1. How does Checkmark differentiate between a student looking up a single word on WordReference versus pasting from DeepL?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Checkmark&apos;s <strong>External Paste Buffer Inspector</strong> captures the exact character count, word count, and text string of every clipboard insertion. When a student copies a single term (e.g., <em>&ldquo;inconsciemment&rdquo;</em>) from an online dictionary, the inspector logs a micro-paste (1&ndash;2 words) followed by immediate, continuous manual typing as the student weaves the word into their sentence. Conversely, when a student translates an entire paragraph via DeepL or ChatGPT, the inspector logs a macro-paste (150&ndash;500+ words) inserted in 0.0 seconds, accompanied by a near-zero Keystroke Friction Ratio ($KFR &lt; 2\%$).
    </p>
  </div>

  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2">2. Can Essay Playback™ handle non-Latin alphabets and character-based input methods (e.g., Chinese Pinyin, Japanese Kana/Kanji, Korean Hangul, Arabic)?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Yes. Checkmark&apos;s telemetry engine records full Unicode input streams and Input Method Editor (IME) composition events. In character-based languages such as Mandarin or Japanese, Essay Playback™ captures the student typing phonetic strings (e.g., Pinyin), navigating the candidate selection window, and self-correcting homophonic characters. This provides world language teachers with granular insight into authentic character acquisition.
    </p>
  </div>

  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2">3. Why do traditional AI detectors have such high false-positive rates on emerging bilingual and ESL/DLI students?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Traditional AI detectors rely on statistical language models to calculate <em>perplexity</em> (word choice predictability) and <em>burstiness</em> (sentence length variation). Because emerging bilingual writers naturally rely on high-frequency vocabulary, standardized grammatical templates, and formal transitional phrases taught in language curricula, their human writing closely resembles the low-perplexity, low-burstiness statistical profiles of AI models. Stanford University research confirmed that commercial detectors falsely flag up to 98% of authentic non-native essays for this reason.
    </p>
  </div>

  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2">4. What is the Keystroke Friction Ratio ($KFR$) and what is considered &ldquo;healthy&rdquo; for a dual-language writer?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      The Keystroke Friction Ratio ($KFR$) measures the percentage of drafting labor dedicated to revisions, deletions, backspacing, and structural navigation. For authentic emerging bilingual writers in Dual-Language Immersion programs, a healthy $KFR$ typically ranges between <strong>18% and 35%</strong>, reflecting active cognitive struggle with verb moods, gender agreements, and word order. A $KFR$ below 3% in a complex text is a primary telemetric indicator of machine translation or optical transcription.
    </p>
  </div>

  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2">5. How does Checkmark integrate with Canvas SpeedGrader, Buzz LMS, and Google Classroom?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Checkmark integrates seamlessly via LTI 1.3 and native API connectors. Dual-language educators can launch <strong>Essay Playback™</strong> directly from within <a href="/services/integrations/canvas-lms" class="text-teal-600 dark:text-teal-400 underline font-semibold">Canvas SpeedGrader</a>, <a href="/services/integrations/buzz-lms" class="text-teal-600 dark:text-teal-400 underline font-semibold">Buzz LMS</a>, or Google Classroom. Furthermore, rubric autograding scores, criterion-by-criterion justifications, and qualitative feedback cards can be synchronized straight back into the LMS gradebook with a single click.
    </p>
  </div>

  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2">6. How does ACTFL and WIDA-aligned rubric autograding support dual-language teachers with heavy grading loads?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Dual-language teachers often manage double the grading load of monolingual educators. Checkmark&apos;s AI Autograder performs an Abstract Syntax Tree (AST) evaluation of student prose against custom or standardized ACTFL and WIDA proficiency descriptors, generating provisional scores and quote-anchored justifications tied directly to student text. The teacher remains fully in the loop&mdash;reviewing, editing, and approving all evaluations in seconds before publishing.
    </p>
  </div>

  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2">7. What classroom policy language should DLI programs adopt regarding translation tools and AI?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      DLI programs should establish clear, transparent policy language that explicitly separates <strong>authorized lexical scaffolding</strong> (e.g., single-word dictionary lookups, digital flashcards) from <strong>unauthorized cognitive outsourcing</strong> (e.g., full-sentence neural machine translation, LLM prompt drafting, and automated paraphrasing). Syllabi should inform students that drafting takes place within telemetry-enabled LMS editors to protect honest writers through verifiable process evidence.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>11. Conclusion: Empowering Dual-Language Immersion Through Verifiable Trust</h2>

<p>
  The goal of Dual-Language Immersion is not merely to produce students who can generate grammatically correct foreign text&mdash;it is to cultivate authentic bilingual, biliterate, and bicultural human beings.
</p>

<p>
  When schools rely on black-box AI detectors, they jeopardize this mission by unfairly penalizing vulnerable multilingual writers while failing to stop automated cognitive shortcuts. By adopting Checkmark Plagiarism&apos;s multidimensional writing forensics&mdash;anchored by patent-pending <strong>Essay Playback™</strong>, the <strong>External Paste Buffer Inspector</strong>, and teacher-controlled <strong>ACTFL/WIDA rubric autograding</strong>&mdash;DLI educators can finally <strong>stop guessing and start trusting</strong>.
</p>

<p>
  Equipped with transparent, defensible writing process telemetry, dual-language departments can protect the integrity of their curricula, celebrate authentic translanguaging, and ensure that every student experiences the transformative cognitive journey of true second-language acquisition.
</p>

<!-- Final Call to Action Card -->
<div class="my-8 rounded-2xl bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-teal-500/10 border border-teal-500/30 p-6 text-center shadow-sm">
  <h3 class="text-lg font-bold text-foreground mb-2 pt-0">Transform Dual-Language Assessment in Your District</h3>
  <p class="text-xs text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
    Deploy patent-pending Essay Playback™, external paste buffer forensics, and ACTFL-aligned autograding across your Dual-Language Immersion district or World Language department.
  </p>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a href="/services/writing-process" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition">
      Explore Essay Playback™
    </a>
    <a href="/services/autograder" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-muted border border-border text-foreground text-xs font-semibold hover:bg-muted/80 transition">
      ACTFL Autograder Details
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
      currentSlug="2026/8/how-can-dual-language-immersion-educators-distinguish-authentic-bilingual-drafting-from-ai-assisted-paraphrasing"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
