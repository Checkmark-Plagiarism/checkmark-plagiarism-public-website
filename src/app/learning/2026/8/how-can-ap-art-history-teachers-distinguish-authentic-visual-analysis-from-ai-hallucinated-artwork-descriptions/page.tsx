import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can AP Art History Teachers Distinguish Authentic Visual Analysis From AI-Hallucinated Artwork Descriptions? | Checkmark Plagiarism",
  description: "An authoritative guide for AP Art History teachers, humanities department chairs, college art history faculty, and academic integrity officers on detecting AI-hallucinated visual analyses, misattributed iconography, and fabricated artwork descriptions using writing process telemetry, Essay Playback™, and defensible multi-evidence workflows.",
  keywords: [
    "AP Art History AI detection",
    "AI hallucinated visual analysis",
    "art history academic integrity",
    "multimodal AI artwork hallucinations",
    "ekphrasis AI cheating",
    "Essay Playback",
    "Checkmark Plagiarism",
    "formal analysis AI detection",
    "AP Art History 250 image set",
    "keystroke dynamics art history",
    "iconography AI confabulation",
    "artwork visual concordance audit"
  ],
  openGraph: {
    images: [
      "/images/learning/how-can-ap-art-history-teachers-distinguish-authentic-visual-analysis-from-ai-hallucinated-artwork-descriptions/featured.png",
      "/images/services/report-source-quote.png",
      "/images/services/report-paste-evidence.png",
      "/images/services/report-originality-tiles.png"
    ],
  },
};

const meta = {
  title: "How Can AP Art History Teachers Distinguish Authentic Visual Analysis From AI-Hallucinated Artwork Descriptions?",
  description: "An authoritative guide for AP Art History teachers, humanities department chairs, college art history faculty, and academic integrity officers on detecting AI-hallucinated visual analyses, misattributed iconography, and fabricated artwork descriptions using writing process telemetry, Essay Playback™, and defensible multi-evidence workflows.",
  "opengraph-image": "/images/learning/how-can-ap-art-history-teachers-distinguish-authentic-visual-analysis-from-ai-hallucinated-artwork-descriptions/featured.png",
  date: "08-20-2026",
  readTime: "~18 min read",
  category: "Detection",
  categories: ["Detection", "Art History", "Humanities", "Teacher Guide", "Academic Integrity"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<!-- Executive Summary Callout Box -->
<div class="my-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
    <p class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Executive Summary &amp; Art History Forensic Mandate</p>
  </div>
  <p class="text-base text-foreground leading-relaxed">
    The proliferation of multimodal generative artificial intelligence models (such as GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro) has created a unique disciplinary crisis in visual arts education: <strong>The Artwork-to-Prose Concordance Discrepancy</strong>. Generative AI tools can ingest digital images or textual prompts from the College Board's <em>AP Art History 250 Required Course Content</em> and instantly generate fluent, scholarly essays dense with specialized vocabulary (<em>contrapposto, chiaroscuro, sfumato, hierarchic scale, isocephaly, polychromatic impasto</em>). However, because vision-language models rely on probabilistic token generation rather than true spatial perception, optical grounding, or historical reality, they routinely produce confident, eloquent <strong>hallucinations</strong>&mdash;inventing phantom background figures, reversing directional lighting vectors, confusing linear perspective with atmospheric recession, mislabeling sacred Buddhist <em>mudras</em> or Christian iconographic attributes, and conflating distinct masterpieces within an artist's oeuvre.
  </p>
  <p class="text-base text-foreground leading-relaxed mt-3">
    Standard text-matching plagiarism engines fail because unique AI-generated text produces no direct web matches, while brittle black-box AI detectors generate rampant false positives on legitimate student writing due to the formulaic, elevated syntax inherent to art-historical formal analysis. <strong>Checkmark Plagiarism</strong> resolves this dilemma through its <strong>Multidimensional Academic Integrity Suite</strong>. By uniting <strong>Visual Concordance Auditing</strong> with patent-pending <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a> (1x&ndash;8x scrubbable keystroke video replay), an <strong>External Paste Buffer Inspector</strong>, <strong>Passage-Level AI Confidence Sliders</strong> with honest short-text guardrails (&lt;150w <code>N/A</code>), and <strong>Teacher-in-the-Loop AP Rubric Autograding with Canvas, Buzz, and Google Classroom Passback</strong>, art history educators can distinguish authentic, eye-to-paper visual reasoning from outsourced AI confabulations&mdash;transforming integrity checkpoints into restorative visual literacy dialogues.
  </p>
</div>

<!-- Featured Hero Visual Card -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/learning/how-can-ap-art-history-teachers-distinguish-authentic-visual-analysis-from-ai-hallucinated-artwork-descriptions/featured.png" 
    alt="Checkmark Plagiarism Visual Analysis Concordance Audit Dashboard showing Caravaggio's The Calling of Saint Matthew, chiaroscuro vector mapping, side-by-side ground truth inspection, and keystroke replay telemetry." 
    class="w-full h-auto object-cover"
  />
  <div class="p-4 bg-muted/40 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
    <span>Figure 1: Checkmark's Art History Concordance Dashboard cross-referencing visual elements against student analytical prose and writing telemetry.</span>
    <span class="font-medium text-teal-600 dark:text-teal-400 font-mono">AP Art History 250 Ready</span>
  </div>
</div>

<!-- The Art History Integrity Triad Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    The Art History Integrity Triad: Visual Artifact, Prose, &amp; Process Telemetry
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="rounded-xl bg-slate-950/80 p-4 border border-teal-500/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">1</span>
        <h4 class="text-sm font-semibold text-teal-300 m-0">Layer 1: Visual-to-Prose Concordance</h4>
      </div>
      <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-4 m-0">
        <li>Figural &amp; spatial existence check</li>
        <li>Directional lighting &amp; chiaroscuro audit</li>
        <li>Iconography ground-truth validation</li>
        <li>Oeuvre &amp; version boundary defense</li>
      </ul>
    </div>

    <div class="rounded-xl bg-slate-950/80 p-4 border border-teal-500/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">2</span>
        <h4 class="text-sm font-semibold text-teal-300 m-0">Layer 2: Writing Telemetry (Checkmark)</h4>
      </div>
      <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-4 m-0">
        <li>Patent-pending Essay Playback™ (1x–8x replay)</li>
        <li>Image-inspection observation pauses (15–45s)</li>
        <li>External Paste Buffer Inspector</li>
        <li>Passage-level calibrated AI sliders</li>
      </ul>
    </div>

    <div class="rounded-xl bg-slate-950/80 p-4 border border-teal-500/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">3</span>
        <h4 class="text-sm font-semibold text-teal-300 m-0">Layer 3: Restorative Artwork Dialogue</h4>
      </div>
      <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-4 m-0">
        <li>In-person or easel-side dialogue</li>
        <li>Student traces formal compositional lines</li>
        <li>Explains iconographic choices orally</li>
        <li>Restores trust &amp; authentic visual literacy</li>
      </ul>
    </div>
  </div>
  <div class="mt-4 pt-3 border-t border-slate-800 text-center text-xs text-slate-400 font-sans">
    <strong class="text-teal-400">Pedagogical Outcome:</strong> Replaces opaque black-box percentages with transparent, defensible visual and keystroke evidence.
  </div>
</div>

<hr class="my-8 border-border" />

<h2>1. The Disciplinary Dilemma: Generative AI in the Art History Classroom</h2>

<p>
  For more than a century, the core pedagogy of art history has rested on a fundamental human skill: <strong>formal visual analysis</strong> (often rooted in classical <em>ekphrasis</em>&mdash;the vivid, precise verbal description of a visual work of art). Whether analyzing the monumental weight of Giotto&rsquo;s Arena Chapel frescoes, decoding the complex spatial illusions of Diego Vel&aacute;zquez&rsquo;s <em>Las Meninas</em>, or interpreting the spiritual geometry of the <em>Great Stupa at Sanchi</em>, students demonstrate mastery by looking intensely at a visual object, translating visual and spatial relationships into rigorous academic prose, and anchoring contextual meaning to tangible formal elements.
</p>

<p>
  The arrival of high-parameter multimodal Large Language Models (LLMs) has fundamentally challenged this evaluative mechanism.
</p>

<p>
  Today, a student faced with a 30-minute Free-Response Question (FRQ) or a comprehensive comparative essay can simply screenshot an image from a digital syllabus, upload a photograph of a museum object, or input an AP Art History prompt into a generative engine. Within seconds, the AI outputs an essay of remarkable stylistic sophistication. The prose glides effortlessly through period terminology, cites socio-political patronage under Philip IV or the Medici dynasty, and constructs articulate paragraphs analyzing compositional balance, color harmony, and psychological intensity.
</p>

<!-- The Illusion of Visual Expertise Breakdown Box -->
<div class="my-8 rounded-2xl border border-rose-500/30 bg-rose-50/40 dark:bg-rose-950/20 p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-3">
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-600 text-white uppercase tracking-wider">
      The Illusion of Visual Expertise: Multimodal LLMs vs. Visual Reality
    </span>
  </div>
  <p class="text-xs text-muted-foreground mb-4">
    Multimodal vision-language models process visual inputs into high-dimensional vector embeddings, map them to statistical text patterns, and synthesize scholarly-sounding prose without optical-physical grounding.
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="rounded-xl border border-rose-500/30 bg-background/80 p-4">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-2 w-2 rounded-full bg-rose-500"></span>
        <h4 class="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 m-0">AI-Generated Hallucination</h4>
      </div>
      <blockquote class="text-xs text-foreground italic border-l-2 border-rose-500 pl-3 my-2 font-serif">
        &ldquo;In Artemisia Gentileschi&rsquo;s &lsquo;Judith Slaying Holofernes&rsquo;, the dramatic diagonal thrust is accentuated by the weeping attendant in the lower right background, whose raised candle casts flickering secondary highlights across Holofernes&rsquo; exposed bronze armor breastplate.&rdquo;
      </blockquote>
      <p class="text-[11px] text-rose-800 dark:text-rose-300 font-medium m-0 mt-2">
        Synthesized text: Confidently fabricates background attendants, lighting fixtures, and armor to satisfy descriptive expectations.
      </p>
    </div>

    <div class="rounded-xl border border-teal-500/30 bg-background/80 p-4">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-2 w-2 rounded-full bg-teal-500"></span>
        <h4 class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 m-0">Ground-Truth Visual Reality</h4>
      </div>
      <ul class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-disc pl-4 m-0 font-sans">
        <li><strong>No weeping attendant:</strong> The maidservant (Abra) is physically pinning Holofernes down with her bare hands in the foreground.</li>
        <li><strong>No candle:</strong> The canvas employs un-sourced, dramatic supernatural tenebrism with pitch-black void.</li>
        <li><strong>No armor:</strong> Holofernes is in bed, half-undressed in tangled white linen sheets.</li>
      </ul>
      <p class="text-[11px] text-teal-800 dark:text-teal-300 font-medium m-0 mt-2">
        Disciplinary Audit: Instant proof of synthetic confabulation unanchored from the actual canvas.
      </p>
    </div>
  </div>
</div>

<p>
  This phenomenon creates a severe challenge for AP Art History teachers, college faculty, and department chairs: <strong>The Illusion of Visual Mastery</strong>.
</p>

<p>
  Because language models are trained on massive text corpora containing centuries of art criticism, museum exhibition catalogs, and scholarly monographs, they can mimic the authoritative cadence of a seasoned art historian. However, when required to anchor that prose in the specific visual details of a single assigned artwork, the model routinely hallucinates&mdash;fabricating figures, inverting spatial mechanics, and generating fictional iconographic narratives that sound entirely plausible to a casual reader.
</p>

<h3>The Double-Bind: Why Generic Detectors Fail in Art History</h3>

<p>
  When educators suspect that a submission is AI-generated, relying on generic text-based AI detectors or legacy similarity checkers creates a dangerous pedagogical double-bind:
</p>

<ol>
  <li>
    <strong>False Positives on Genuine Student Writing:</strong> Art historical analysis is inherently formulaic and structured around specialized jargon. When a dedicated student writes: <em>&ldquo;The artist employs dramatic chiaroscuro and extreme tenebrism to heighten the theatrical tension, utilizing a strong diagonal axis that leads the viewer&rsquo;s eye from the foreshortened forearm toward the illuminated focal point,&rdquo;</em> generic AI detectors frequently flag the passage as 75%&ndash;95% AI-generated. The elevated vocabulary, standardized transitional phrases, and syntactic precision match the high-predictability patterns (low perplexity) that black-box detectors penalize.
  </li>
  <li>
    <strong>False Negatives on Hallucinated AI Output:</strong> Conversely, when a student prompts an LLM with specific instructions or runs the generated text through an &ldquo;AI humanizer&rdquo; (such as QuillBot or Undetectable AI), the detector produces a &ldquo;0% AI&rdquo; score. Yet the essay may contain complete fabrications about the artwork&rsquo;s visual contents that go unnoticed if the teacher relies solely on the detector&rsquo;s percentage score.
  </li>
  <li>
    <strong>Plagiarism Engines Miss Synthetic Text:</strong> Legacy plagiarism checkers (such as standard Turnitin or CopyLeaks similarity tools) search for exact textual matching across indexed web pages. Because an LLM synthesizes novel sentences on the fly, the similarity report returns a pristine 0%&ndash;2% score, providing zero evidentiary support for the educator.
  </li>
</ol>

<p>
  To maintain academic rigor and preserve student trust, art history educators require an objective, multidimensional methodology: one that combines <a href="/services/plagiarism-detection" class="text-teal-600 dark:text-teal-400 underline font-semibold">deep visual concordance auditing</a> with <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">transparent writing process telemetry</a>.
</p>

<hr class="my-8 border-border" />

<h2>2. Anatomy of AI Hallucinations in Art Historical Visual Analysis</h2>

<p>
  To audit art history essays effectively, teachers must understand why and how multimodal generative models confabulate visual evidence. Multimodal models do not &ldquo;see&rdquo; an image the way a human viewer does; they convert pixel patches into high-dimensional vector embeddings, map those embeddings to textual concept tokens, and generate subsequent words based on probability distributions.
</p>

<p>
  This architectural framework produces four predictable categories of art-historical hallucinations:
</p>

<!-- 4 Taxonomy Cards Grid -->
<div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">1</span>
      <h4 class="text-sm font-bold text-foreground m-0">Compositional &amp; Figural Hallucinations</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Fabricating phantom background attendants, nonexistent animals, and invented architecture to satisfy genre tropes.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">2</span>
      <h4 class="text-sm font-bold text-foreground m-0">Formal Element &amp; Lighting Misidentifications</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Inverting light sources, confusing linear with atmospheric perspective, and misattributing media (e.g., calling bronze marble).
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">3</span>
      <h4 class="text-sm font-bold text-foreground m-0">Iconographic &amp; Symbolic Confabulations</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Inventing theological narratives, mislabeling sacred Buddhist mudras, and fabricating patron political agendas.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">4</span>
      <h4 class="text-sm font-bold text-foreground m-0">Oeuvre, Version, &amp; Chronology Conflations</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Conflating distinct paintings in an artist&rsquo;s career; mixing up regional workshop styles, media variants, and chronologies.
    </p>
  </div>
</div>

<h3>2.1 Compositional &amp; Figural Hallucinations</h3>

<p>
  The most frequent visual AI error is the <strong>phantom figure or object hallucination</strong>. When asked to perform a formal visual breakdown, an LLM often draws on generalized visual tropes associated with a genre or period rather than the concrete artwork under review.
</p>

<h4>Real-World Failure Modes:</h4>
<ul>
  <li><strong>The &ldquo;Attendant&rdquo; Fallacy:</strong> In Baroque and Renaissance religious or courtly paintings, LLMs frequently insert &ldquo;weeping angels,&rdquo; &ldquo;onlooking courtiers,&rdquo; or &ldquo;background witnesses&rdquo; where none exist. For example, in analyzing Caravaggio&rsquo;s <em>The Calling of Saint Matthew</em>, models have confabulated a &ldquo;dog resting beneath the tavern table&rdquo; or &ldquo;a serving girl carrying wine in the shadowed left background.&rdquo;</li>
  <li><strong>Invented Landscape Features:</strong> In analyzing historical landscapes&mdash;such as Fan Kuan&rsquo;s <em>Travelers among Mountains and Streams</em> or Pieter Bruegel the Elder&rsquo;s <em>Hunters in the Snow</em>&mdash;generative models frequently describe &ldquo;distant sailing vessels on a calm ocean&rdquo; or &ldquo;a smoking chimney in the foreground&rdquo; in works where those elements are physically impossible or absent.</li>
  <li><strong>Spatial Inversions:</strong> Models routinely invert left-to-right orientation, describing focal figures as appearing on the &ldquo;far right&rdquo; when they are positioned on the far left, or asserting that figures are in the foreground when they reside in deep pictorial space.</li>
</ul>

<!-- Figural Comparison Audit Box: Caravaggio -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-400">Figural Comparison Audit: AI Hallucination vs. AP 250 Ground Truth</span>
    <span class="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">AP Content #85</span>
  </div>
  
  <div class="space-y-4">
    <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
      <div class="text-xs text-amber-400 font-semibold uppercase mb-1">Artwork Identification</div>
      <div class="text-sm font-serif text-slate-200">Caravaggio, <em>The Calling of Saint Matthew</em> (c. 1599–1600, Contarelli Chapel, San Luigi dei Francesi, Rome)</div>
    </div>

    <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30">
      <div class="text-xs text-rose-300 font-bold uppercase mb-1">AI-Generated Student Submission Extract</div>
      <blockquote class="text-xs text-slate-300 italic pl-3 border-l-2 border-rose-500">
        &ldquo;Caravaggio establishes psychological tension through the dynamic triangle of figures around the wooden counting table. In the background shadow, an elderly patron in an elaborate velvet ruff watches Christ with suspicion, clutching a leather ledger against the stone wall.&rdquo;
      </blockquote>
    </div>

    <div class="p-4 rounded-xl bg-teal-950/40 border border-teal-500/30">
      <div class="text-xs text-teal-300 font-bold uppercase mb-1">Ground-Truth Visual Concordance Audit</div>
      <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4 m-0 font-sans">
        <li>There are exactly five men seated at the table and two standing figures (Christ and St. Peter).</li>
        <li>There is <strong>no elderly patron in a velvet ruff</strong> clutching a ledger anywhere in the canvas.</li>
        <li>The only seated figures are: two dandies in feathered caps, an older bespectacled man counting coins, the youth bent over the money, and Levi (Matthew) gesturing to himself.</li>
        <li><strong>Verdict:</strong> Pure synthetic confabulation generated to fulfill descriptive word-count quotas.</li>
      </ul>
    </div>
  </div>
</div>

<h3>2.2 Formal Element, Medium, &amp; Spatial Misidentifications</h3>

<p>
  A rigorous AP Art History essay requires precise analysis of formal elements: line, color, light, space, texture, medium, and technique. LLMs regularly confuse technical execution and optical physics.
</p>

<h4>Common Technical Confabulations:</h4>
<ol>
  <li><strong>Light Vector Inversion:</strong> The model describes a single strong light source (<em>tenebrism</em>) entering from the top right, when in reality the painting&rsquo;s light enters dramatically from the top left (e.g., in Rembrandt&rsquo;s <em>The Night Watch</em> or Artemisia Gentileschi&rsquo;s <em>Judith</em>).</li>
  <li><strong>Perspective Confusions:</strong> The model claims an artwork uses &ldquo;one-point mathematical linear perspective with an orthogonal vanishing point on the horizon&rdquo; when the artwork actually employs <strong>atmospheric perspective</strong>, <strong>isometric/orthogonal projection</strong>, <strong>hierarchic scaling</strong>, or <strong>intuitive/stacked registers</strong> (e.g., in the <em>Standard of Ur</em> or Persian illuminated manuscripts like <em>The Court of Gayumars</em>).</li>
  <li><strong>Medium &amp; Support Misattribution:</strong> Models frequently refer to a fresco as an &ldquo;oil on canvas with layered impasto glaze,&rdquo; describe a bronze lost-wax cast sculpture as &ldquo;carved from a single block of marble,&rdquo; or identify a woodblock print (such as Hokusai&rsquo;s <em>The Great Wave off Kanagawa</em>) as a &ldquo;delicate watercolor on silk.&rdquo;</li>
</ol>

<!-- Formal Element Audit Matrix Table -->
<div class="my-8 rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
  <div class="bg-muted px-6 py-3 border-b border-border">
    <h4 class="text-sm font-bold text-foreground uppercase tracking-wider m-0">
      Formal Element Audit Matrix: Prose Claims vs. Artwork Reality
    </h4>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/40 text-foreground font-semibold">
          <th class="py-3 px-4 w-1/4">Formal Category</th>
          <th class="py-3 px-4 w-3/8 text-rose-700 dark:text-rose-300">Common AI Hallucination Pattern</th>
          <th class="py-3 px-4 w-3/8 text-teal-700 dark:text-teal-300">Authentic Art Historical Reality</th>
        </tr>
      </thead>
      <tbody class="divide-y border-border text-xs">
        <tr class="hover:bg-muted/20">
          <td class="py-3 px-4 font-semibold text-foreground">Spatial Perspective</td>
          <td class="py-3 px-4 text-muted-foreground">Asserts mathematical linear perspective with vanishing points on all 2D artworks.</td>
          <td class="py-3 px-4 text-muted-foreground">Identifies intuitive perspective, continuous narration, stacked registers, or flat spiritual planes.</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="py-3 px-4 font-semibold text-foreground">Lighting &amp; Chiaroscuro</td>
          <td class="py-3 px-4 text-muted-foreground">Describes visible physical light fixtures (candles, lanterns) in tenebrist scenes.</td>
          <td class="py-3 px-4 text-muted-foreground">Recognizes un-sourced supernatural beam of light, spiritual illumination, or uniform daylight.</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="py-3 px-4 font-semibold text-foreground">Medium &amp; Support</td>
          <td class="py-3 px-4 text-muted-foreground">Defaults to &ldquo;oil on canvas&rdquo; or &ldquo;marble&rdquo; for almost all historical periods.</td>
          <td class="py-3 px-4 text-muted-foreground">Specifies tempera on wood panel, encaustic, fresco secco, terracotta, or lost-wax bronze.</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="py-3 px-4 font-semibold text-foreground">Color Palette</td>
          <td class="py-3 px-4 text-muted-foreground">Fabricates symbolic use of primary colors (&ldquo;vibrant blue and crimson drapery&rdquo;).</td>
          <td class="py-3 px-4 text-muted-foreground">Accurately identifies muted earth pigments, lapis lazuli glaze, gold leaf leafing, or monochromatic grisaille.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h3>2.3 Iconographic Confabulation &amp; Apocryphal Symbolism</h3>

<p>
  Iconography&mdash;the visual imagery, symbols, and attributes used in a work of art to convey religious, political, or philosophical meaning&mdash;is a foundational pillar of the AP Art History curriculum. Generative AI frequently invents symbolic narratives that sound erudite but are completely unanchored from historical or theological doctrine.
</p>

<h4>Typical Iconographic Confabulations:</h4>
<ul>
  <li><strong>Sacred Mudra Misattributions:</strong> When analyzing South and East Asian Buddhist or Hindu statuary (e.g., <em>Shiva as Lord of Dance (Nataraja)</em> or <em>Longmen Caves</em>), LLMs frequently confuse the <em>Abhaya mudra</em> (gesture of fearlessness) with the <em>Dharmachakra mudra</em> (turning the wheel of the law) or the <em>Bhumisparsha mudra</em> (earth-touching gesture), constructing elaborate philosophical essays around the wrong theological concept.</li>
  <li><strong>Apocryphal Christian Attributes:</strong> In medieval and Renaissance art, models routinely assign incorrect attributes to saints&mdash;describing Saint Catherine holding arrows (attribute of St. Sebastian) or Saint Peter holding a sword (attribute of St. Paul) rather than the keys to heaven.</li>
  <li><strong>Mesoamerican &amp; Indigenous Deities:</strong> In analyzing works like the <em>Templo Mayor</em> monolithic carvings (e.g., <em>Coyolxauhqui Stone</em> or <em>Calendar Stone</em>), models frequently conflate Huitzilopochtli (sun/war deity) with Quetzalcoatl (feathered serpent), misinterpreting skull motifs, feathered serpents, and sacrificial stone carvings.</li>
</ul>

<h3>2.4 Oeuvre, Version, &amp; Chronology Conflation</h3>

<p>
  When an artist produced multiple versions of a subject or worked across diverse stylistic periods, generative LLMs often merge details from different artworks into a single composite hallucination:
</p>

<ul>
  <li><strong>Artemisia Gentileschi&rsquo;s <em>Judith</em> Paintings:</strong> The model combines elements of the Uffizi version (blood spurting across the white sheets, intense physical exertion) with the earlier Capodimonte version (different gown color, distinct facial expressions), or confounds it with her <em>Judith and Her Maidservant</em> (where Judith holds a candle and looks outward toward the tent entrance).</li>
  <li><strong>Pablo Picasso&rsquo;s Stylistic Shifts:</strong> An essay on <em>Les Demoiselles d&rsquo;Avignon</em> (1907) might describe &ldquo;the screaming horse and grieving mother holding a dead child,&rdquo; lifting iconic visual motifs directly from <em>Guernica</em> (1937).</li>
  <li><strong>Edvard Munch&rsquo;s <em>The Scream</em>:</strong> The model describes a specific tempera on cardboard color scheme while discussing the lithograph print version, or introduces details from <em>Madonna</em> or <em>The Dance of Life</em>.</li>
</ul>

<hr class="my-8 border-border" />

<h2>3. The Art History Evidentiary Matrix</h2>

<p>
  To evaluate student submissions fairly without relying on unscientific black-box scores, humanities departments must establish a multi-evidence framework. Below is a direct comparison of traditional investigative methods versus Checkmark Plagiarism&rsquo;s integrated workflow:
</p>

<!-- Full Evidentiary Matrix Table -->
<div class="my-8 rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
  <div class="bg-muted px-6 py-4 border-b border-border">
    <h3 class="text-sm font-semibold text-foreground uppercase tracking-wider m-0">
      Art History Evidentiary Comparison Matrix
    </h3>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
          <th class="py-3 px-3">Feature / Capability</th>
          <th class="py-3 px-3">Generic AI Text Detectors</th>
          <th class="py-3 px-3">Manual Visual Cross-Exam</th>
          <th class="py-3 px-3 text-teal-700 dark:text-teal-300">Checkmark Plagiarism Suite</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border font-sans text-xs">
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">Whole-Paper Percentage Reliability</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">Opaque black-box score (frequent false positives on formal analysis jargon).</td>
          <td class="py-3 px-3 text-muted-foreground">N/A (Subjective teacher suspicion only).</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">No arbitrary scores; passage-level calibrated confidence sliders.</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">Visual Concordance Verification</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">None (Analyzes text syntax only, blind to assigned images).</td>
          <td class="py-3 px-3 text-amber-600 dark:text-amber-400">High (Teacher spots visual inconsistencies manually).</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">Full Visual-to-Text Telemetry &amp; Side-by-Side Source View.</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">Writing Process History &amp; Keystroke Dynamics</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">None (Evaluates static submitted text file only).</td>
          <td class="py-3 px-3 text-muted-foreground">None (Evaluates finished PDF/Docx submission only).</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">Patent-Pending Essay Playback™ (1x–8x scrubbable replay).</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">Image-Inspection Pause Telemetry</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">None</td>
          <td class="py-3 px-3 text-muted-foreground">None</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">Tracks natural 15–45s drafting pauses during image inspection.</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">External Clipboard &amp; Paste Buffer Capture</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">None</td>
          <td class="py-3 px-3 text-muted-foreground">None</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">Captures timestamped external text before student edits.</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">Short-Text FRQ Guardrails (&lt;150 Words)</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">Unreliable (Rampant false flags on short answers).</td>
          <td class="py-3 px-3 text-amber-600 dark:text-amber-400">High cognitive burden on teacher for 150+ exams.</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">Honest &lt;150w N/A disclaimer prevents false accusations.</td>
        </tr>
        <tr class="hover:bg-muted/30">
          <td class="py-3 px-3 font-bold text-foreground">Quote-Anchored AP Art History Rubric Feedback</td>
          <td class="py-3 px-3 text-rose-600 dark:text-rose-400">None</td>
          <td class="py-3 px-3 text-amber-600 dark:text-amber-400">Time-consuming manual rubric scoring (15+ min/paper).</td>
          <td class="py-3 px-3 text-teal-700 dark:text-teal-300 font-semibold">AI Autograder with direct quotes &amp; Canvas/Buzz passback.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>4. Real-World AP Art History Case Scenarios</h2>

<p>
  The following three classroom case studies illustrate how AI hallucinations manifest in student submissions and how writing process telemetry resolves each case with objective evidence:
</p>

<!-- Case Scenario A Card -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-600 text-white">Case A</span>
      <h3 class="text-sm font-bold text-foreground m-0">Figural Hallucination in AP Art History FRQ 1 (Long Essay)</h3>
    </div>
    <span class="text-xs font-mono text-muted-foreground">Velázquez: Las Meninas</span>
  </div>
  
  <div class="space-y-3 text-xs">
    <div class="p-3 rounded-xl bg-muted/40">
      <p class="font-bold text-foreground m-0 mb-1">Student Submission Extract:</p>
      <blockquote class="italic text-muted-foreground pl-3 border-l-2 border-rose-500 m-0">
        &ldquo;Vel&aacute;zquez constructs an intricate spatial illusion using multiple focal planes. In the foreground, the Infanta Margarita is attended by her maids of honor and a loyal hound. In the deep background, beyond the illuminated doorway where Don Jos&eacute; Nieto stands, two Franciscan monks in dark brown robes converse quietly in the shadows beneath the equestrian portraits of King Philip IV and Queen Mariana, reinforcing the religious solemnity of the Spanish Hapsburg court.&rdquo;
      </blockquote>
    </div>

    <div class="p-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-800">
      <p class="font-bold text-teal-400 m-0 mb-1">Investigative Findings (Checkmark Plagiarism Suite):</p>
      <ul class="space-y-1 list-disc pl-4 text-slate-300 m-0">
        <li><strong>Visual Concordance Audit:</strong> There are NO Franciscan monks anywhere in <em>Las Meninas</em>. The paintings on the rear wall are mythological scenes after Rubens (<em>Pallas and Arachne</em>, <em>Apollo and Pan</em>), NOT equestrian portraits. The figures in shadow are Marcela de Ulloa (a chaperone) and a bodyguard.</li>
        <li><strong>Essay Playback™ Telemetry:</strong> The student&rsquo;s document was generated via two bulk paste events: Minute 01:14 (480 words pasted instantly from external clipboard) and Minute 03:22 (minor edits replacing &ldquo;Franciscan friars&rdquo; with &ldquo;monks&rdquo;).</li>
        <li><strong>Paste Buffer Inspector:</strong> Retrieved original clipboard contents confirming an AI prompt: <em>&ldquo;Write an AP Art History essay on Las Meninas analyzing spatial illusion and religious symbols.&rdquo;</em></li>
      </ul>
    </div>

    <div class="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-foreground">
      <strong class="text-teal-700 dark:text-teal-400">Pedagogical Resolution:</strong> During the restorative conference, the teacher shared the playback timeline and high-resolution Prado museum image. The student admitted to using an LLM under time pressure. The student was given a supportive restorative rewrite under monitored conditions, focusing on true visual elements.
    </div>
  </div>
</div>

<!-- Case Scenario B Card -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-600 text-white">Case B</span>
      <h3 class="text-sm font-bold text-foreground m-0">Sacred Mudra &amp; Bronze Technique Confabulation in Global Pre-Modern Art</h3>
    </div>
    <span class="text-xs font-mono text-muted-foreground">Chola Dynasty: Shiva as Lord of Dance</span>
  </div>
  
  <div class="space-y-3 text-xs">
    <div class="p-3 rounded-xl bg-muted/40">
      <p class="font-bold text-foreground m-0 mb-1">Student Submission Extract:</p>
      <blockquote class="italic text-muted-foreground pl-3 border-l-2 border-amber-500 m-0">
        &ldquo;The sculptor demonstrates profound mastery over subtractive stone relief carving, sculpting the figure of Nataraja from a monolithic basalt boulder. Shiva&rsquo;s primary right hand forms the Dharmachakra mudra to represent the turning of the Buddhist wheel of law, while his lower left hand points toward the celestial lotus petals carved into the granite base.&rdquo;
      </blockquote>
    </div>

    <div class="p-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-800">
      <p class="font-bold text-teal-400 m-0 mb-1">Investigative Findings:</p>
      <ul class="space-y-1 list-disc pl-4 text-slate-300 m-0">
        <li><strong>Medium Error:</strong> <em>Shiva as Lord of Dance</em> is a cast bronze sculpture created via the lost-wax process (<em>cire perdue</em>), NOT subtractive stone carving from basalt or granite.</li>
        <li><strong>Iconographic Error:</strong> Shiva is a Hindu deity, not Buddhist. His primary right hand displays the <em>Abhaya mudra</em> (gesture of fearlessness), holding the <em>damaru</em> (drum of creation) in his upper right hand. His lower left hand gestures across his chest in the <em>gajahasta</em> (elephant trunk) mudra pointing to his raised foot (symbol of spiritual refuge).</li>
        <li><strong>Writing Process Telemetry:</strong> Document history showed zero drafting pauses; 620 words appeared in 3 minutes with mechanical keystroke velocity (118 WPM with 0 backspaces/revisions).</li>
      </ul>
    </div>
  </div>
</div>

<!-- Case Scenario C Card -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white">Case C</span>
      <h3 class="text-sm font-bold text-foreground m-0">False AI Flag on Sophisticated Student Prose Exonerated via Essay Playback™</h3>
    </div>
    <span class="text-xs font-mono text-muted-foreground">Gentileschi: Judith Slaying Holofernes</span>
  </div>
  
  <div class="space-y-3 text-xs">
    <div class="p-3 rounded-xl bg-muted/40">
      <p class="font-bold text-foreground m-0 mb-1">Student Profile &amp; Submission Extract:</p>
      <p class="text-muted-foreground m-0 mb-2">Senior honors student with high vocabulary and passion for Baroque theatricality.</p>
      <blockquote class="italic text-muted-foreground pl-3 border-l-2 border-teal-500 m-0">
        &ldquo;Gentileschi subverts the conventional Caravaggesque tenebrist schema by establishing an unforgiving tactile immediacy. The visual vortex is anchored by the crossing of arms&mdash;Judith&rsquo;s muscular forearm locking the sword at a perpendicular axis against the mattress, while the maidservant Abra applies full body weight to suppress Holofernes&rsquo; violent convulsion. The arterial spurts of blood bisect the stark white linen in sharp rhythmic arcs, directing the viewer&rsquo;s gaze toward the severed neck.&rdquo;
      </blockquote>
    </div>

    <div class="p-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-800">
      <p class="font-bold text-teal-400 m-0 mb-1">Incident &amp; Keystroke Playback Findings:</p>
      <ul class="space-y-1 list-disc pl-4 text-slate-300 m-0">
        <li><strong>Initial False Alarm:</strong> A generic whole-document detector flagged the submission as &ldquo;88% AI Generated&rdquo; due to the elevated vocabulary (<em>Caravaggesque tenebrist schema, tactile immediacy, visual vortex</em>).</li>
        <li><strong>Essay Playback™ Audit (54 Minutes Active Writing Time):</strong>
          <ul class="list-disc pl-4 text-slate-400 mt-1 space-y-1">
            <li><em>00:00–12:30:</em> Extended 12-minute initial pause while examining the digital Uffizi image in an adjacent tab.</li>
            <li><em>12:31–28:45:</em> Non-linear composition. Drafted three sentence variants for the forearm description, deleting 42 words, testing synonyms (<em>&ldquo;slashing&rdquo; &rarr; &ldquo;bisecting&rdquo; &rarr; &ldquo;arcs&rdquo;</em>).</li>
            <li><em>28:46–45:10:</em> Continuous iterative revision. Keystroke velocity averaged 36 WPM with 148 backspaces and organic 3–15 second thinking pauses.</li>
            <li><em>Visual Concordance:</em> 100% accurate alignment with every brushstroke in the Uffizi work.</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-foreground">
      <strong class="text-teal-700 dark:text-teal-400">Pedagogical Outcome:</strong> The teacher used the playback evidence to immediately dismiss the false flag, praised the student&rsquo;s exceptional visual acuity, and shared the replay during departmental calibration to demonstrate why opaque black-box AI scores must never be used to penalize advanced humanities writers.
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>5. Step-by-Step Art History Audit Protocol for Educators</h2>

<p>
  To institutionalize fair, defensible, and supportive academic integrity workflows, AP Art History teachers and humanities departments should follow this four-step audit protocol:
</p>

<!-- 4-Step Protocol Flow Card -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <h3 class="text-sm font-bold text-foreground uppercase tracking-wider mb-6 pb-2 border-b border-border">
    The Four-Step Art History Integrity Audit Protocol
  </h3>

  <div class="space-y-6">
    <div class="flex gap-4">
      <div class="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
      <div>
        <h4 class="text-base font-bold text-foreground m-0 mb-1">Step 1: Direct Artwork Concordance Verification</h4>
        <p class="text-sm text-muted-foreground m-0">
          Cross-reference every visual claim against the College Board AP 250 image or museum collection record. Verify figure count, architectural grounding, and color/material fidelity before touching an AI detector.
        </p>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
      <div>
        <h4 class="text-base font-bold text-foreground m-0 mb-1">Step 2: Iconography &amp; Formal Element Audit</h4>
        <p class="text-sm text-muted-foreground m-0">
          Audit technical medium claims (lost-wax casting vs. carving), directional light vectors (left vs. right tenebrism), and sacred attributes (mudras, saintly relics, patron heraldry).
        </p>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
      <div>
        <h4 class="text-base font-bold text-foreground m-0 mb-1">Step 3: Writing Process &amp; Telemetry Review via Essay Playback™</h4>
        <p class="text-sm text-muted-foreground m-0">
          Launch Checkmark's scrubbable 1x–8x playback timeline. Inspect natural 15–45s image observation pauses, typing velocity (25–55 WPM normal range), revision cadence, and external clipboard paste events.
        </p>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
      <div>
        <h4 class="text-base font-bold text-foreground m-0 mb-1">Step 4: Supportive Restorative Artwork Dialogue</h4>
        <p class="text-sm text-muted-foreground m-0">
          Hold a supportive, visual conference at the screen or easel. Ask the student to point out the described visual elements on the image and walk through their drafting timeline.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Interactive Scrubber UI Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-400">Checkmark Essay Playback™: Art History Telemetry Dashboard</span>
    <span class="text-[11px] bg-teal-900/60 text-teal-300 px-2 py-0.5 rounded font-mono">Session #APAH-7291</span>
  </div>
  
  <div class="space-y-4">
    <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
      <div class="bg-teal-500 w-1/4"></div>
      <div class="bg-amber-500 w-1/12"></div>
      <div class="bg-teal-500 w-1/3"></div>
      <div class="bg-emerald-500 w-1/3"></div>
    </div>

    <div class="flex items-center justify-between text-xs text-slate-400 font-mono">
      <span>[00:00] Image Exam</span>
      <span>[12:30] Composition Draft</span>
      <span>[28:15] Iconography Polish</span>
      <span>[48:15] Submit</span>
    </div>

    <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-sans space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-slate-300">Playback Controls: <strong class="text-teal-400">[⏪ 1x] [▶ 2x] [⏩ 4x] [⏭ 8x]</strong></span>
        <span class="text-emerald-400 font-semibold font-mono">Total Active Time: 48m 15s</span>
      </div>
      <div class="text-slate-400 text-xs">
        Telemetry Signals: <span class="text-slate-200">14 Image-Inspection Pauses (&gt;20s)</span> • <span class="text-slate-200">112 Backspaces / 18 Word Replacements</span> • <span class="text-slate-200">0 External Clipboard Drops</span>
      </div>
      <div class="text-teal-300 font-semibold text-xs pt-1 border-t border-slate-800/60">
        Evaluation Verdict: Authentic Human Drafting (Reflects genuine cognitive effort, visual reflection, and iterative editing).
      </div>
    </div>
  </div>
</div>

<!-- Restorative Conference Dialogue Box -->
<div class="my-8 rounded-2xl border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-4">
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white uppercase tracking-wider">
      Restorative Art History Conference Framework
    </span>
  </div>
  <div class="space-y-4 text-xs">
    <div class="rounded-xl border border-teal-500/20 bg-background/80 p-3">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">1. Open with the Visual Object:</strong>
      <p class="text-muted-foreground m-0 italic">&ldquo;Let&rsquo;s look at this high-resolution image of &lsquo;The Calling of Saint Matthew&rsquo; together on the screen. Walk me through what you saw in the background when you were writing this section.&rdquo;</p>
    </div>
    <div class="rounded-xl border border-teal-500/20 bg-background/80 p-3">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">2. Present Objective Concordance Gaps:</strong>
      <p class="text-muted-foreground m-0 italic">&ldquo;Your essay mentions an elderly patron in a velvet ruff clutching a ledger. Can you point to where that figure appears in this chapel painting?&rdquo;</p>
    </div>
    <div class="rounded-xl border border-teal-500/20 bg-background/80 p-3">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">3. Share the Writing Timeline Transparently:</strong>
      <p class="text-muted-foreground m-0 italic">&ldquo;Here is your Essay Playback timeline in Checkmark. We can see that these three paragraphs were pasted in two seconds. Help me understand what happened during your drafting process.&rdquo;</p>
    </div>
    <div class="rounded-xl border border-teal-500/20 bg-background/80 p-3">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">4. Establish a Growth-Oriented Path Forward:</strong>
      <p class="text-muted-foreground m-0 italic">&ldquo;Our goal in AP Art History is to develop your own visual acuity and critical voice. Let&rsquo;s reset: you&rsquo;ll spend 30 minutes in class doing a live visual breakdown of this second artwork.&rdquo;</p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. How Checkmark Plagiarism Powers Art History Classrooms &amp; Departments</h2>

<p>
  Checkmark Plagiarism provides an end-to-end academic integrity and formative evaluation infrastructure built specifically for the needs of humanities educators:
</p>

<!-- 5 Complete Features Grid -->
<div class="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">1</span>
      <h4 class="text-sm font-bold text-foreground m-0">Patent-Pending Essay Playback™</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Full 1x&ndash;8x keystroke video replay capturing drafting cadence, image observation pauses, revisions, and deletions.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">2</span>
      <h4 class="text-sm font-bold text-foreground m-0">Passage-Level AI Confidence Sliders</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Granular sentence-by-sentence evidence cards with strict &lt;150 word guardrails that display honest N/A on short FRQs.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">3</span>
      <h4 class="text-sm font-bold text-foreground m-0">External Paste Buffer Inspector</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Captures and preserves the original raw clipboard strings before student edits, linking directly to playback timestamps.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">4</span>
      <h4 class="text-sm font-bold text-foreground m-0">Defensible Plagiarism Matching</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Side-by-side comparisons against museum portals, Smarthistory, JSTOR, and student cohorts with uncited source differentiation.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">5</span>
      <h4 class="text-sm font-bold text-foreground m-0">AP Rubric Autograder &amp; LMS Sync</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Quote-anchored AP Art History rubric scoring with one-click passback to Canvas SpeedGrader, Buzz LMS, and Google Classroom.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">6</span>
      <h4 class="text-sm font-bold text-foreground m-0">Zero-Model Training Architecture</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Full FERPA and COPPA compliance ensuring student essays and images are never retained or used to train commercial AI models.
    </p>
  </div>
</div>

<h3>6.1 Passage-Level Granularity &amp; Honest Short-Text Guardrails</h3>

<p>
  Rather than generating an arbitrary, unhelpful whole-document percentage score (e.g., &ldquo;64% AI&rdquo;), Checkmark underlines specific sentences and paragraphs with individual <strong>Evidence Cards</strong> in the report sidebar:
</p>

<ul>
  <li><strong>Calibrated Confidence Sliders:</strong> Displays whether a passage exhibits typical human drafting variability (high burstiness, dynamic sentence complexity) or statistical AI patterns (low perplexity, uniform rhythm).</li>
  <li><strong>Honest Short-Text Guardrails:</strong> For short responses under ~150 words (such as 15-minute AP Art History FRQ short-answer questions), Checkmark displays <code>N/A</code> rather than guessing on statistically insufficient sample sizes. This protects students from the rampant false positives common on legacy platforms.</li>
  <li><strong>Educator-Only Flag Statuses:</strong> Flags (<em>Flagged</em>, <em>Resolved</em>, <em>Not Flagged</em>) remain strictly private to the teacher, ensuring no student is publicly or prematurely stigmatized.</li>
</ul>

<h3>6.2 Defensible Plagiarism Detection &amp; Side-by-Side Source Proof</h3>

<p>
  When students patchwrite or copy from art encyclopedias (such as Smarthistory, Khan Academy, museum collection portals, or JSTOR articles), Checkmark delivers undeniable proof:
</p>

<ul>
  <li><strong>Billions of Web &amp; Academic Pages:</strong> Direct side-by-side quote comparisons with live, clickable source links.</li>
  <li><strong>Uncited Source Differentiation:</strong> Distinguishes between intentional verbatim theft and uncredited source usage, enabling targeted citation coaching.</li>
  <li><strong>Student-to-Student Cohort Matching:</strong> Identifies cross-submission copying across class periods or district high schools without exposing student manuscripts to external public databases.</li>
  <li><strong>Two-Way Linked Evidence Cards:</strong> Clicking any highlighted passage in the essay instantly scrolls to its corresponding source card in the sidebar, and vice versa.</li>
</ul>

<h3>6.3 Writing Process Analysis &amp; Patent-Pending Essay Playback™</h3>

<p>
  Checkmark&rsquo;s flagship <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a> reconstructs the complete drafting session keystroke-by-keystroke:
</p>

<ul>
  <li><strong>Scrubbable Timeline:</strong> Teachers can watch drafting unfold at 1x, 2x, 4x, or 8x speed.</li>
  <li><strong>Image Observation &amp; Composing Pauses:</strong> Highlights natural pauses where students stop typing to examine visual artworks.</li>
  <li><strong>Transcription Detection:</strong> Flags steady, continuous typing without natural pauses or backspaces&mdash;revealing when a student is manually retyping text from an AI prompt on a secondary screen or smartphone.</li>
  <li><strong>Native Ecosystem Capture:</strong> Captures seamless revision telemetry within Google Docs, Canvas LMS embedded editors, Buzz LMS, and Microsoft Word.</li>
</ul>

<h3>6.4 AI Autograder with Quote-Anchored AP Art History Rubric Feedback</h3>

<!-- Quote-Anchored Rubric UI Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-400">Checkmark AP Art History Autograder: Quote-Anchored Rubric Breakdown</span>
    <span class="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">Assignment: Maya Lin Memorial Analysis</span>
  </div>
  
  <div class="space-y-4">
    <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-bold text-teal-300 uppercase">Criterion 1: Visual Identification &amp; Formal Analysis</span>
        <span class="text-xs font-bold text-emerald-400 font-mono">Points: 3 / 3</span>
      </div>
      <p class="text-xs text-slate-400 m-0 mb-2">Autograder Justification: Accurately identifies reflective black granite, polished surface, and sunken V-shaped spatial orientation opening toward Lincoln and Washington monuments.</p>
      <div class="text-[11px] italic text-slate-300 pl-3 border-l-2 border-teal-500 bg-slate-900/60 p-2 rounded">
        Quote Anchor: &ldquo;The polished black granite creates an interactive mirror, forcing visitors to see their own reflections overlaid across the 58,000 engraved chronological names.&rdquo;
      </div>
    </div>

    <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-bold text-teal-300 uppercase">Criterion 2: Contextual Analysis &amp; Function</span>
        <span class="text-xs font-bold text-emerald-400 font-mono">Points: 2 / 2</span>
      </div>
      <p class="text-xs text-slate-400 m-0 mb-2">Autograder Justification: Synthesizes the transition from traditional heroic war monuments to contemplative, non-political public memorialization during the late Cold War era.</p>
      <div class="text-[11px] italic text-slate-300 pl-3 border-l-2 border-teal-500 bg-slate-900/60 p-2 rounded">
        Quote Anchor: &ldquo;Lin deliberately rejected traditional bronze heroic figuration in favor of an intimate earthwork that heals by opening a physical scar in the national landscape.&rdquo;
      </div>
    </div>

    <div class="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
      <span class="text-slate-400">Teacher Final Authority:</span>
      <div class="flex gap-2">
        <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-medium cursor-pointer">Edit Scores</span>
        <span class="px-2.5 py-1 rounded bg-teal-600 text-white font-medium cursor-pointer">Approve Feedback</span>
        <span class="px-2.5 py-1 rounded bg-emerald-600 text-white font-medium cursor-pointer">Sync to Canvas</span>
      </div>
    </div>
  </div>
</div>

<ul>
  <li><strong>AP Scoring Guidelines Compatibility:</strong> Pre-loaded with official College Board AP Art History rubric criteria (Visual Analysis, Contextual Analysis, Comparison, Argumentation).</li>
  <li><strong>Direct Quote Anchoring:</strong> Every rubric point awarded or deducted is anchored to direct quotations from the student&rsquo;s prose.</li>
  <li><strong>One-Click Gradebook Sync:</strong> Directly transfers approved grades and formative comments into <a href="/services/integrations/canvas-lms" class="text-teal-600 dark:text-teal-400 underline font-semibold">Canvas LMS</a>, <a href="/services/integrations/buzz-lms" class="text-teal-600 dark:text-teal-400 underline font-semibold">Buzz LMS</a>, or <a href="/services/integrations/google-classroom" class="text-teal-600 dark:text-teal-400 underline font-semibold">Google Classroom</a> gradebooks.</li>
</ul>

<hr class="my-8 border-border" />

<h2>7. Institutional Implementation &amp; Departmental Policy Framework</h2>

<p>
  To build a resilient academic integrity culture, art history departments and humanities teams should implement standardized departmental guidelines:
</p>

<!-- 3-Tier Policy Framework Card -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <h3 class="text-sm font-bold text-foreground uppercase tracking-wider mb-4 pb-2 border-b border-border">
    Departmental Art History AI Policy Framework
  </h3>
  <div class="space-y-4 text-xs">
    <div class="rounded-xl border border-teal-500/30 bg-teal-50/30 dark:bg-teal-950/20 p-4">
      <div class="flex items-center gap-2 mb-2">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-600 text-white uppercase">Level 1</span>
        <h4 class="text-xs font-bold text-foreground m-0">Permitted Formative AI Assistance</h4>
      </div>
      <ul class="text-muted-foreground space-y-1 list-disc pl-4 m-0">
        <li>Generating digital flashcards for AP 250 image memorization (Artist, Date, Period, Medium).</li>
        <li>Brainstorming historical context timelines (e.g., Council of Trent impact on Baroque art).</li>
        <li>Formative vocabulary self-quizzing (defining <em>contrapposto, sfumato, hierarchic scale</em>).</li>
      </ul>
    </div>

    <div class="rounded-xl border border-rose-500/30 bg-rose-50/30 dark:bg-rose-950/20 p-4">
      <div class="flex items-center gap-2 mb-2">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white uppercase">Level 2</span>
        <h4 class="text-xs font-bold text-foreground m-0">Prohibited AI Authorship</h4>
      </div>
      <ul class="text-muted-foreground space-y-1 list-disc pl-4 m-0">
        <li>Generating written formal visual analysis paragraphs from image uploads or prompts.</li>
        <li>Outsourcing comparative essays or thematic synthesis prompts to generative LLMs.</li>
        <li>Using text humanizers or paraphrasers to mask outsourced writing.</li>
      </ul>
    </div>

    <div class="rounded-xl border border-amber-500/30 bg-amber-50/30 dark:bg-amber-950/20 p-4">
      <div class="flex items-center gap-2 mb-2">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white uppercase">Level 3</span>
        <h4 class="text-xs font-bold text-foreground m-0">Evidentiary Audit Standards</h4>
      </div>
      <ul class="text-muted-foreground space-y-1 list-disc pl-4 m-0">
        <li>No disciplinary referrals based solely on generic black-box percentage scores.</li>
        <li>Required multi-evidence audit: Visual Concordance + Essay Playback™ Telemetry.</li>
        <li>Mandatory restorative conferencing protocol prior to grade finalization.</li>
      </ul>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Frequently Asked Questions (FAQ)</h2>

<div class="my-8 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">1. Why do multimodal AI models hallucinate figures and objects in well-known artworks?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Multimodal LLMs do not possess physical visual memory or human spatial comprehension. They process images by breaking them down into visual feature tokens and predicting the most statistically likely words that accompany those visual concepts in their training data. When an artwork shares features with a broader genre (such as Baroque dramatic scenes), the model predicts generic tropes&mdash;such as background courtiers, weeping attendants, or religious symbols&mdash;even if those elements are absent from the specific canvas.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">2. Why do AP Art History essays trigger frequent false positives on standard AI detectors?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Art historical writing requires formal academic structure, specialized terminology (<em>tenebrism, chiaroscuro, isocephaly, hierarchic scale</em>), and disciplined syntactic transitions. Because generic AI detectors measure text predictability (low perplexity), fluent student writing loaded with standardized scholarly phrases is frequently misidentified as synthetic text. Checkmark eliminates this issue by pairing passage-level sliders with patent-pending Essay Playback™ process evidence.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">3. How does Essay Playback™ differentiate authentic drafting from AI copying?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Authentic art historical composition is non-linear and reflective. When students write while observing an artwork, they exhibit a natural rhythm: extended pauses (15–45 seconds) while looking at the image, bursts of drafting, frequent word deletions, and sentence restructuring. In contrast, an outsourced AI submission displays either an instantaneous clipboard paste (captured by Checkmark's Paste Buffer Inspector) or mechanical, continuous typing with zero pauses and zero backspaces (transcription).
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">4. Can students evade detection by using &ldquo;AI humanizers&rdquo; or paraphrasing tools?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      While paraphrasers (e.g., QuillBot, Undetectable AI) can alter word choices to evade simple statistical detectors, they cannot alter the underlying visual hallucinations generated by the LLM. Furthermore, paraphrasers cannot fake authentic writing telemetry. When an essay is inspected in Checkmark's Essay Playback™, the lack of organic visual pauses and the presence of external paste events immediately reveal the unnatural composition workflow.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">5. How should an AP Art History teacher handle short-answer FRQs under 150 words?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Short-answer responses lack sufficient token volume for reliable statistical AI detection. Checkmark provides honest short-text guardrails, displaying <code>N/A</code> on texts under ~150 words rather than guessing. For short responses, teachers should evaluate visual concordance directly (did the student identify the correct visual features?) and inspect keystroke playback rather than relying on automated text scores.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">6. How does Checkmark handle student data privacy under FERPA and COPPA?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Checkmark Plagiarism operates under a strict Zero-Model-Training guarantee. Student submissions are never cached, retained, or utilized to train commercial or proprietary AI models. All data is encrypted in transit and at rest, and complies fully with FERPA, COPPA, and state educational data privacy regulations.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">7. How does quote-anchored rubric autograding support AP Art History teachers?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Checkmark&rsquo;s AI Autograder evaluates student essays against official AP Art History scoring criteria (Visual Analysis, Contextual Analysis, Comparison, Argumentation). For every criterion, the autograder generates written justifications directly anchored to quotations from the student's text. Teachers retain 100% editorial authority to adjust scores before syncing results straight into Canvas, Buzz, or Google Classroom.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground m-0 mb-2">8. What is the most effective way to address suspected AI use with a student?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Always ground the conversation in visual evidence and process telemetry. Open the assigned artwork and Checkmark&rsquo;s Essay Playback™ timeline during a one-on-one conference. Ask the student to point out the described visual elements on the image and explain their drafting decisions. This supportive, evidence-based approach removes confrontation, protects student dignity, and reinforces authentic visual literacy.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Conclusion: Stop Guessing, Start Trusting</h2>

<p>
  Visual analysis in AP Art History is more than an academic exercise&mdash;it is the development of critical seeing, visual literacy, and human empathy across global cultures. While generative AI models can generate polished prose, they cannot replicate the genuine human experience of looking closely at a masterpiece, discovering its formal rhythms, and translating visual wonder into original words.
</p>

<p>
  By adopting <strong>Checkmark Plagiarism&rsquo;s</strong> integrated suite&mdash;combining <strong>Visual Concordance Verification</strong>, patent-pending <strong>Essay Playback™</strong>, <strong>External Paste Buffer Inspection</strong>, and <strong>Quote-Anchored Rubric Autograding</strong>&mdash;educators can replace ungrounded suspicion with transparent, defensible proof. Empower your students to trust their own eyes, defend their authentic voices, and master the transformative discipline of art history.
</p>

<div class="my-8 rounded-2xl bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent border border-teal-500/20 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
  <div>
    <h4 class="text-base font-bold text-foreground m-0">Ready to bring visual concordance &amp; writing telemetry to your AP Art History classroom?</h4>
    <p class="text-xs text-muted-foreground m-0 mt-1">Explore Checkmark's multidimensional integrity and autograding platform today.</p>
  </div>
  <a href="/pricing" class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs tracking-wide uppercase transition-colors shrink-0 shadow-sm">
    Get Started with Checkmark
  </a>
</div>
`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/how-can-ap-art-history-teachers-distinguish-authentic-visual-analysis-from-ai-hallucinated-artwork-descriptions"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
