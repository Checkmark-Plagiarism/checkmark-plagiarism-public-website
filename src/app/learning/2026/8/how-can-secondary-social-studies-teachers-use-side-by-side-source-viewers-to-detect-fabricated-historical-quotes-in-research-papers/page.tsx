import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Secondary Social Studies Teachers Use Side-by-Side Source Viewers to Detect Fabricated Historical Quotes in Research Papers? | Checkmark Plagiarism",
  description: "A comprehensive pedagogical and technical guide for secondary social studies teachers, AP history educators, and department chairs on using synchronized side-by-side source viewers, Essay Playback™, and 4-badge source taxonomy to detect and remediate AI-hallucinated historical quotes and fabricated archival citations.",
  keywords: [
    "hallucinated historical quotes",
    "fabricated primary sources AI",
    "side-by-side source viewer history",
    "APUSH research paper integrity",
    "National History Day AI detection",
    "Essay Playback",
    "Checkmark Plagiarism",
    "AI citation hallucinations",
    "historical thinking skills",
    "source verification workbench",
    "restorative integrity conference",
    "Canvas SpeedGrader history rubric",
    "Founders Online verification",
    "National Archives primary sources",
  ],
  openGraph: {
    images: ["/images/services/report-source-quote.png"],
  },
};

const meta = {
  title: "How Can Secondary Social Studies Teachers Use Side-by-Side Source Viewers to Detect Fabricated Historical Quotes in Research Papers? | Checkmark Plagiarism",
  description: "A comprehensive pedagogical and technical guide for secondary social studies teachers, AP history educators, and department chairs on using synchronized side-by-side source viewers, Essay Playback™, and 4-badge source taxonomy to detect and remediate AI-hallucinated historical quotes and fabricated archival citations.",
  "opengraph-image": "/images/services/report-source-quote.png",
  date: "08-18-2026",
  readTime: "~16 min read",
  category: "Detection",
  categories: ["Detection", "How It Works", "Teacher Guide", "Pedagogy", "Department Leadership"],
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
    The rapid adoption of generative artificial intelligence (ChatGPT, Claude, Perplexity) among secondary students has precipitated an unprecedented archival integrity crisis across Advanced Placement (AP U.S. History, AP European History, AP World History), National History Day (NHD) competitions, and high school research seminars. Large language models (LLMs) routinely generate <strong>&ldquo;plausible hallucinations&rdquo;</strong>&mdash;convincing, period-accurate quotes, fabricated archival letters, and non-existent scholarly citations (e.g., citing fictitious volumes of <em>The Papers of Thomas Jefferson</em> or imaginary Senate hearing transcripts). Because these quotes are newly synthesized rather than copied from existing web documents, <strong>legacy string-matching plagiarism detectors award them a misleading &ldquo;0% Plagiarism&rdquo; clean score</strong>.
  </p>
  <p class="text-foreground font-medium leading-relaxed mt-3">
    <strong>Checkmark Plagiarism&rsquo;s Side-by-Side Source Verification Workbench</strong> directly resolves this crisis. By coupling a synchronized dual-pane viewer&mdash;which resolves live digital repositories (Library of Congress, National Archives, Founders Online, JSTOR, The Avalon Project)&mdash;with a <strong>4-Badge Source Taxonomy</strong> (🟢 Quoted &amp; Verified, 🟡 Paraphrased with Source, 🔴 Uncited External Match, 🟣 Unverified/Hallucinated Citation Alert), patent-pending <a href="/services/writing-process" class="text-primary font-semibold underline"><strong>Essay Playback™</strong></a> writing process telemetry, passage-level AI detection, and teacher-in-the-loop rubric grading, Checkmark equips history educators with transparent, defensible evidence. Rather than relying on punitive black-box percentages, social studies teachers can differentiate intentional fraud from novice naivete, protect historical thinking skills, and conduct restorative student conferences rooted in authentic disciplinary literacy.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> empowers secondary social studies teachers, AP history educators, and department chairs with comprehensive authorship verification, uniting <a href="/services/plagiarism-detection" class="text-primary font-semibold underline">side-by-side source comparison</a> with <a href="/services/writing-process" class="text-primary font-semibold underline">keystroke process playback</a>, <a href="/services/ai-detection" class="text-primary font-semibold underline">passage-level AI writing detection</a>, <a href="/services/autograder" class="text-primary font-semibold underline">quote-anchored rubric autograding</a>, and direct LTI 1.3 integrations for <a href="/services/integrations/canvas-lms" class="text-primary font-semibold underline">Canvas LMS</a> and <a href="/services/integrations/buzz-lms" class="text-primary font-semibold underline">Agilix Buzz LMS</a>.</p>

<img src="/images/services/report-source-quote.png" alt="Checkmark Plagiarism Side-by-Side Source Verification Engine and Historical Archive Resolution View" class="w-full rounded-2xl border border-border shadow-md my-8" />

<h2>1. The Archival Crisis in Secondary History Education</h2>

<p>For generations, the central challenge of teaching secondary historical research was <strong>plagiarism of discovery</strong>: students copying verbatim text from Wikipedia, digital encyclopedias, or uncredited secondary articles without quotation marks or attribution. High school social studies teachers and AP readers developed sharp eyes for sudden vocabulary shifts, and automated string-matching tools provided simple similarity percentages to flag copied text.</p>

<p>Today, secondary social studies faces a fundamentally different, far more insidious challenge: <strong>the fabrication of historical reality</strong>.</p>

<!-- Paradigm Shift Comparison Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    THE PARADIGM SHIFT IN SECONDARY HISTORY INTEGRITY
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    How the nature of academic misconduct in history classrooms has evolved from copied prose to synthetic reality
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Traditional Plagiarism -->
    <div class="rounded-xl bg-slate-800/90 border border-slate-700 p-4">
      <div class="flex items-center justify-between gap-2 mb-3">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-slate-700 text-slate-200 border border-slate-600">
          TRADITIONAL PLAGIARISM (PRE-2023)
        </span>
        <span class="text-[10px] text-slate-400">Verbatim Extraction</span>
      </div>
      <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs mb-3">
        <li>Copy-pasting authentic published text from online websites or encyclopedias</li>
        <li>Directly verifiable against existing URLs and digital book repositories</li>
        <li>Reliably flagged by legacy character string-matching scanners</li>
        <li>Student copies a genuine historical artifact or secondary source</li>
        <li><strong>Core Issue:</strong> Failure of ethical attribution and citation mechanics</li>
      </ul>
      <div class="text-[11px] text-slate-300 bg-slate-900/60 p-2.5 rounded border border-slate-700 font-medium">
        <strong>Legacy Status:</strong> Detectable via similarity indexes (e.g., 38% match against Wikipedia).
      </div>
    </div>

    <!-- Generative AI Fabrication -->
    <div class="rounded-xl bg-slate-800/90 border border-purple-500/50 p-4">
      <div class="flex items-center justify-between gap-2 mb-3">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
          GENERATIVE AI FABRICATION (2024–PRESENT)
        </span>
        <span class="text-[10px] text-purple-400 font-semibold">Synthetic Counterfeit</span>
      </div>
      <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs mb-3">
        <li>Generating newly synthesized primary and secondary archival text on the fly</li>
        <li>Convincing, period-accurate historical syntax, cadence, and vocabulary</li>
        <li>Completely invisible to legacy checkers (produces a misleading 0% similarity score)</li>
        <li>LLM invents non-existent archival citations, collection boxes, and page numbers</li>
        <li><strong>Core Issue:</strong> Historical disinformation, factual counterfeit, and research collapse</li>
      </ul>
      <div class="text-[11px] text-purple-300 bg-purple-950/40 p-2.5 rounded border border-purple-800/50 font-medium">
        <strong>Checkmark Status:</strong> Flagged via 🟣 <strong>Unverified Citation Alert</strong> &amp; Writing Telemetry.
      </div>
    </div>
  </div>
</div>

<p>In advanced courses&mdash;such as <strong>AP U.S. History (APUSH)</strong>, <strong>AP European History</strong>, <strong>AP World History: Modern</strong>, <strong>IB History</strong>, and capstone research programs like <strong>National History Day (NHD)</strong>&mdash;students are evaluated on their ability to locate, analyze, contextualize, and corroborate primary and secondary sources. Historical literacy rests upon the foundational premise that primary sources are authentic artifacts of human history.</p>

<p>When a student submits an essay featuring an eloquent quote from an 1862 Civil War soldier or a 1933 New Deal relief worker that <em>never existed in human history</em>, the entire architecture of historical argumentation collapses. If left unchecked, this dynamic erodes core disciplinary skills:</p>

<ol class="space-y-3 my-4 pl-6 list-decimal text-muted-foreground text-sm">
  <li><strong class="text-foreground">Historiographical Sourcing (HIPP/POVA):</strong> Students cannot meaningfully analyze historical situation, intended audience, purpose, or point of view on an artifact created by a predictive neural network in 2026.</li>
  <li><strong class="text-foreground">Corroboration:</strong> Fabricated quotes short-circuit the historical habit of cross-referencing multiple archival accounts.</li>
  <li><strong class="text-foreground">Academic Trust:</strong> Evaluators spend dozens of hours chasing phantom citations in university archives and digital repositories, creating deep teacher burnout and administrative friction.</li>
</ol>

<hr class="my-8 border-border" />

<h2>2. Anatomy of the &ldquo;Plausible Quote&rdquo; Trap: How LLMs Fabricate Historical Evidence</h2>

<p>To effectively address AI-generated source fabrication, secondary educators must understand the underlying computational mechanics that make large language models so adept at generating persuasive historical counterfeit.</p>

<!-- Plausible Quote Trap Mechanics Flow Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    HOW AUTOREGRESSIVE LLMS INVENT HISTORICAL QUOTES
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    The algorithmic sequence from student prompt to non-existent archival counterfeit
  </p>

  <div class="space-y-3">
    <!-- Step 1 -->
    <div class="rounded-xl bg-slate-800/90 p-3.5 border border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">1</span>
        <div>
          <div class="text-xs font-bold text-slate-200">Student Prompting</div>
          <div class="text-[11px] text-slate-400 font-mono mt-0.5">&ldquo;Write a paragraph on Lincoln&rsquo;s private doubts about Chase in 1862 including a direct quote with footnote.&rdquo;</div>
        </div>
      </div>
      <span class="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-300 self-start md:self-auto">Input</span>
    </div>

    <div class="flex justify-center text-teal-500 font-bold text-xs">&darr;</div>

    <!-- Step 2 -->
    <div class="rounded-xl bg-slate-800/90 p-3.5 border border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">2</span>
        <div>
          <div class="text-xs font-bold text-slate-200">Autoregressive Next-Token Prediction</div>
          <div class="text-[11px] text-slate-400 mt-0.5">The model does NOT search an archival index; it calculates statistical word probabilities based on 19th-century epistolary training weights.</div>
        </div>
      </div>
      <span class="text-[10px] px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 self-start md:self-auto">Computation</span>
    </div>

    <div class="flex justify-center text-teal-500 font-bold text-xs">&darr;</div>

    <!-- Step 3 -->
    <div class="rounded-xl bg-slate-800/90 p-3.5 border border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">3</span>
        <div>
          <div class="text-xs font-bold text-slate-200">Synthetic Text Generation</div>
          <div class="text-[11px] text-slate-400 mt-0.5">Synthesizes archaic vocabulary (<em>&ldquo;cordially,&rdquo; &ldquo;peril,&rdquo; &ldquo;providence&rdquo;</em>) into a grammatically flawless, period-accurate quotation.</div>
        </div>
      </div>
      <span class="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 self-start md:self-auto">Synthesis</span>
    </div>

    <div class="flex justify-center text-teal-500 font-bold text-xs">&darr;</div>

    <!-- Step 4 -->
    <div class="rounded-xl bg-slate-800/90 p-3.5 border border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">4</span>
        <div>
          <div class="text-xs font-bold text-slate-200">Citation Hallucination</div>
          <div class="text-[11px] text-slate-400 mt-0.5">Constructs a plausible bibliographic citation based on academic naming conventions (e.g., <em>&ldquo;Basler, Collected Works, Vol. V, p. 342&rdquo;</em>).</div>
        </div>
      </div>
      <span class="text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 self-start md:self-auto">Hallucination</span>
    </div>

    <div class="flex justify-center text-rose-500 font-bold text-xs">&darr;</div>

    <!-- Step 5 -->
    <div class="rounded-xl bg-rose-950/70 p-3.5 border border-rose-600/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-xs">5</span>
        <div>
          <div class="text-xs font-bold text-rose-200">The Classroom Integrity Failure</div>
          <div class="text-[11px] text-rose-300 mt-0.5">The quote sounds 100% authentic to human readers, cites a real book title, passes legacy scanners with 0% plagiarism, but exists nowhere in historical records.</div>
        </div>
      </div>
      <span class="text-[10px] px-2 py-0.5 rounded bg-rose-900 text-rose-200 border border-rose-700 font-bold self-start md:self-auto">Fatal Flaw</span>
    </div>
  </div>
</div>

<h3>1. The Mechanics of Autoregressive Token Generation</h3>

<p>Large Language Models (LLMs) do not operate like searchable archival databases (such as the National Archives or the Library of Congress). They are autoregressive statistical engines trained to predict the most probable sequence of tokens (words and subwords).</p>

<p>When an LLM is prompted to provide a quote from a historical figure, it does not query an internal library of verified transcripts. Instead, it generates words that statistically align with the linguistic cadence, syntactic structure, and ideological worldview of the historical figure:</p>

<ul class="space-y-2 my-4 pl-6 list-disc text-muted-foreground text-sm">
  <li>For <strong>Thomas Jefferson</strong>, the model generates balanced Enlightenment prose featuring vocabulary like <em>&ldquo;unalienable,&rdquo; &ldquo;usurpations,&rdquo;</em> and <em>&ldquo;civic virtue.&rdquo;</em></li>
  <li>For <strong>Abraham Lincoln</strong>, it crafts rhythmic, biblically inflected mid-19th-century phrasing featuring terms like <em>&ldquo;scourge,&rdquo; &ldquo;providence,&rdquo;</em> and <em>&ldquo;malice toward none.&rdquo;</em></li>
  <li>For a <strong>1930s labor organizer</strong>, it produces colloquial, gritty vernacular reflecting industrial unionism.</li>
</ul>

<p>Furthermore, because academic citations frequently follow rigid formatting conventions (<em>Author, Title, Volume, Page, Publisher, Year</em>), the model effortlessly predicts and constructs a fully formed, mathematically plausible citation that mimics authentic scholarship.</p>

<h3>2. The Total Failure of Legacy String-Matching Plagiarism Scanners</h3>

<p>For two decades, school districts relied on similarity detection tools. These legacy engines operate by dividing student submissions into overlapping n-grams (strings of 5 to 10 consecutive words) and querying a database of indexed websites, published journal articles, and previously submitted student papers.</p>

<!-- The 0% Similarity Blind Spot Diagram -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="text-center font-bold text-purple-400 text-sm uppercase tracking-wide mb-2">
    THE &ldquo;0% SIMILARITY&rdquo; BLIND SPOT IN LEGACY DETECTORS
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    Comparing legacy string matchers against Checkmark&rsquo;s Synchronized Dual-Pane Archive Matcher
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Legacy Pipeline -->
    <div class="rounded-xl bg-slate-800/90 border border-rose-500/40 p-4 flex flex-col justify-between">
      <div>
        <div class="text-xs font-bold text-rose-300 uppercase tracking-wide mb-2">Legacy String-Matching Tool</div>
        <div class="text-xs text-slate-300 font-mono bg-slate-900/80 p-3 rounded border border-slate-700 mb-3">
          [Student Essay with Hallucinated Quote]<br />
          &nbsp;&nbsp;&darr;<br />
          [Scan 90B Public Webpages]<br />
          &nbsp;&nbsp;&darr;<br />
          [No Verbatim Matching String Found]
        </div>
      </div>
      <div class="rounded-lg bg-rose-950/50 border border-rose-600/50 p-3 text-center">
        <div class="text-xs font-bold text-rose-200">Report Output: &ldquo;0% Plagiarism / Clean&rdquo;</div>
        <div class="text-[10px] text-rose-400 mt-1">Teacher falsely assumes the primary source was diligently researched in real archives.</div>
      </div>
    </div>

    <!-- Checkmark Pipeline -->
    <div class="rounded-xl bg-slate-800/90 border border-teal-500/40 p-4 flex flex-col justify-between">
      <div>
        <div class="text-xs font-bold text-teal-300 uppercase tracking-wide mb-2">Checkmark Plagiarism Dual-Pane Engine</div>
        <div class="text-xs text-slate-300 font-mono bg-slate-900/80 p-3 rounded border border-slate-700 mb-3">
          [Student Essay with Hallucinated Quote]<br />
          &nbsp;&nbsp;&darr;<br />
          [Synchronized Dual-Pane Archive Matcher]<br />
          &nbsp;&nbsp;&darr;<br />
          [4-Badge Sourcing Taxonomy Cross-Check]
        </div>
      </div>
      <div class="rounded-lg bg-purple-950/50 border border-purple-500/50 p-3 text-center">
        <div class="text-xs font-bold text-purple-200">Report: 🟣 &ldquo;Unverified Citation Alert&rdquo;</div>
        <div class="text-[10px] text-purple-300 mt-1">+ Essay Playback™ reveals single-paste block with prompt history preserved.</div>
      </div>
    </div>
  </div>
</div>

<p>When an LLM fabricates a primary source quote, that exact string of words has never been published on any website or in any digitized book. Consequently, when the legacy plagiarism checker scans the document:</p>

<ol class="space-y-2 my-4 pl-6 list-decimal text-muted-foreground text-sm">
  <li>It finds <strong>zero verbatim string matches</strong> across its billions of indexed pages.</li>
  <li>It returns a pristine <strong>&ldquo;0% Similarity / Original Content&rdquo;</strong> report.</li>
  <li>The classroom teacher, reassured by the green report, assumes the student conducted diligent archival research in primary source databases.</li>
</ol>

<p>This creates a dangerous pedagogical false sense of security: the papers containing the most severe integrity breaches (pure factual fabrication) receive the highest originality ratings from legacy tools.</p>

<h3>3. Dissecting Student Intent: Malicious Fraud vs. Novice Naivete</h3>

<p>When addressing fabricated historical quotes, educators must not treat every student as a malicious counterfeiter. In secondary classrooms, student use of AI falls along a wide spectrum of digital literacy and intent:</p>

<!-- Spectrum of Intent Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="text-center font-bold text-amber-400 text-sm uppercase tracking-wide mb-2">
    THE SPECTRUM OF HISTORICAL AI FABRICATION
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    Differentiating student cognitive mindsets to guide appropriate pedagogical responses
  </p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Category 1 -->
    <div class="rounded-xl bg-slate-800/90 border border-teal-500/50 p-4 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
            LEVEL 1: NOVICE NAIVETE
          </span>
        </div>
        <div class="text-xs font-semibold text-slate-200 mb-2">Accidental / Search Confusion</div>
        <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs">
          <li>Student asks AI: <em>&ldquo;Find me a quote from Elizabeth Cady Stanton supporting the 1848 Seneca Falls Declaration.&rdquo;</em></li>
          <li>Assumes AI functions as a search engine like Google or JSTOR.</li>
          <li>Genuinely believes the generated quote is real and cites it in good faith.</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700 text-[11px] text-teal-300 font-medium">
        <strong>Intervention:</strong> Formative coaching on search indexers vs. LLM token prediction.
      </div>
    </div>

    <!-- Category 2 -->
    <div class="rounded-xl bg-slate-800/90 border border-amber-500/50 p-4 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            LEVEL 2: PANIC SHORTCUTS
          </span>
        </div>
        <div class="text-xs font-semibold text-slate-200 mb-2">Unintentional Corner-Cutting</div>
        <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs">
          <li>Student is working at 1:00 AM before the APUSH deadline.</li>
          <li>Asks AI to generate an essay with footnotes to satisfy the 5-source rubric quota.</li>
          <li>Copies the output without checking archive validity due to time stress.</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700 text-[11px] text-amber-300 font-medium">
        <strong>Intervention:</strong> Restorative conference, deadline scaffolding, and draft resubmission.
      </div>
    </div>

    <!-- Category 3 -->
    <div class="rounded-xl bg-slate-800/90 border border-rose-500/50 p-4 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
            LEVEL 3: FRAUDULENT MASKING
          </span>
        </div>
        <div class="text-xs font-semibold text-slate-200 mb-2">Deliberate Deception</div>
        <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs">
          <li>Student uses AI humanizers or retypes text to bypass basic detectors.</li>
          <li>Fabricates elaborate archive box and folder numbers to deceive competition judges (e.g., NHD finals).</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-700 text-[11px] text-rose-300 font-medium">
        <strong>Intervention:</strong> Academic integrity referral with immutable Essay Playback™ timeline.
      </div>
    </div>
  </div>
</div>

<p>A supportive, pedagogical integrity system must provide clear, undeniable forensic evidence (&ldquo;receipts&rdquo;) that enable teachers to distinguish between a confused 10th grader who needs a lesson on search indexers vs. an intentional bypass of academic honesty policies.</p>

<hr class="my-8 border-border" />

<h2>3. Checkmark Plagiarism&rsquo;s Side-by-Side Source Verification Workbench</h2>

<p>To restore transparency to historical research, <strong>Checkmark Plagiarism</strong> provides an integrated <strong>Side-by-Side Source Verification Workbench</strong> engineered specifically for the analytical needs of secondary and higher education humanities teachers.</p>

<!-- Side-by-Side Workbench High-Fidelity UI Mockup -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-slate-100 font-sans shadow-xl">
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-6">
    <div class="flex items-center gap-2.5">
      <div class="w-3 h-3 rounded-full bg-rose-500"></div>
      <div class="w-3 h-3 rounded-full bg-amber-500"></div>
      <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
      <span class="text-xs font-bold text-slate-300 ml-2 tracking-wide font-mono">CHECKMARK DUAL-PANE SOURCING WORKBENCH &bull; HISTORICAL INTEGRITY</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold">
        Archival Discrepancy Flagged
      </span>
      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
        SpeedGrader LTI 1.3
      </span>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- Left Pane: Student Essay -->
    <div class="lg:col-span-6 rounded-xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="text-xs font-bold text-teal-400 uppercase tracking-wider">LEFT PANE: STUDENT SUBMISSION</div>
          <span class="text-[10px] text-slate-400 font-mono">Word Count: 1,420 &bull; 11th APUSH</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed font-serif mb-4">
          ...Throughout the critical winter of 1862, Abraham Lincoln balanced pressure from Radical Republicans against the vital strategic necessity of retaining the loyalty of Kentucky and Missouri.
        </p>
        <div class="rounded-lg bg-purple-950/30 border border-purple-500/40 p-3.5 my-3">
          <p class="text-xs text-purple-200 leading-relaxed font-serif m-0">
            In an unrecorded 1862 letter to Salmon P. Chase, Lincoln cautioned: <strong class="text-purple-300 bg-purple-900/40 px-1 py-0.5 rounded">&ldquo;The border states will wither if we strike the institution prematurely; we must hold the border before we can redeem the Union.&rdquo;¹</strong>
          </p>
          <div class="text-[10px] text-purple-400 font-mono mt-2 pt-2 border-t border-purple-900/50">
            ¹ Lincoln to Chase, May 14, 1862, in Basler, <em>Collected Works of Abraham Lincoln</em>, Vol. V, p. 219.
          </div>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed font-serif mt-4">
          This correspondence demonstrates how Lincoln&rsquo;s administrative calculations were governed by pragmatic constitutional timing rather than immediate moral abolitionism...
        </p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
        <span>Active Focus: Citation Footnote #1</span>
        <span class="text-purple-400 font-semibold">Matched to Right Inspector &rarr;</span>
      </div>
    </div>

    <!-- Right Pane: Synchronized Archival Inspector -->
    <div class="lg:col-span-6 rounded-xl bg-slate-900/90 border border-purple-500/40 p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="text-xs font-bold text-purple-400 uppercase tracking-wider">RIGHT PANE: ARCHIVAL &amp; TELEMETRY INSPECTOR</div>
          <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">Purple Alert</span>
        </div>

        <div class="space-y-3">
          <!-- Alert Box -->
          <div class="rounded-lg bg-purple-950/60 border border-purple-500/60 p-3">
            <div class="text-xs font-bold text-purple-200 flex items-center gap-1.5">
              <span>🟣 UNVERIFIED / HALLUCINATED CITATION ALERT</span>
            </div>
            <div class="text-[11px] text-purple-300 mt-1">
              Target Source: <em>Roy P. Basler, Collected Works of Abraham Lincoln, Vol. V, p. 219</em>
            </div>
          </div>

          <!-- Query Results -->
          <div class="rounded-lg bg-slate-950 p-3 border border-slate-800 space-y-2 text-xs">
            <div class="flex items-center justify-between text-slate-400 text-[11px]">
              <span>🔍 Live Repository Query:</span>
              <span class="text-teal-400 font-semibold">Founders Online &amp; LOC Lincoln Papers</span>
            </div>
            <div class="text-[11px] text-rose-400 font-medium">
              ⚠️ Result: 0 Matches found across 1862 Lincoln text collections.
            </div>
            <div class="text-[10px] text-slate-400 leading-relaxed border-t border-slate-800 pt-1.5">
              Basler Vol. V, p. 219 contains routine wartime Treasury warrant correspondence regarding military disbursements; the cited quote does not appear in any known Lincoln manuscript.
            </div>
          </div>

          <!-- Telemetry Box -->
          <div class="rounded-lg bg-slate-950 p-3 border border-slate-800 space-y-2 text-xs">
            <div class="text-xs font-bold text-teal-400 flex items-center gap-1.5">
              <span>⏱️ Essay Playback™ Clipboard Snapshot:</span>
            </div>
            <div class="bg-slate-900 p-2.5 rounded border border-slate-800 font-mono text-[11px] text-slate-300">
              <span class="text-slate-500">Action:</span> External Paste (74 Words) at 00:14:22<br />
              <span class="text-slate-500">Typing Velocity:</span> 0 WPM (Instantaneous clipboard drop)<br />
              <span class="text-slate-500">Cached Prompt:</span> &ldquo;Give me an unknown Lincoln quote to Chase on border states...&rdquo;
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
        <button class="text-xs font-bold px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white flex items-center gap-1.5 transition-colors">
          <span>▶️ Scrub Playback to 00:14:22</span>
        </button>
        <span class="text-[10px] text-slate-400">Confidence: 99.4% AI Hallucination</span>
      </div>
    </div>
  </div>
</div>

<h3>1. Synchronized Dual-Pane Archival Engine</h3>

<p>Checkmark&rsquo;s interface pairs the student&rsquo;s submitted essay directly alongside live digital repositories and open-access archives. Rather than forcing teachers to manually open five browser tabs and search disparate databases, Checkmark automatically cross-references cited passages against major historical archives:</p>

<ul class="space-y-2 my-4 pl-6 list-disc text-muted-foreground text-sm">
  <li><strong class="text-foreground">The Library of Congress (LOC):</strong> Digitized manuscripts, Chronicling America historical newspapers, and congressional debate transcripts.</li>
  <li><strong class="text-foreground">National Archives and Records Administration (NARA):</strong> Founders Online, presidential papers, and legislative committee records.</li>
  <li><strong class="text-foreground">The Avalon Project at Yale Law School:</strong> Treaties, international legal conventions, and diplomatic history documents.</li>
  <li><strong class="text-foreground">Fordham Internet Medieval Sourcebook:</strong> Pre-modern European, Islamic, and global primary sources.</li>
  <li><strong class="text-foreground">JSTOR &amp; CrossRef:</strong> Peer-reviewed secondary literature and historical academic monographs.</li>
</ul>

<p>When a student embeds a direct quotation or bibliographic citation, Checkmark queries these open-access scholarly databases and displays the verified original document in the synchronized right pane. If the text matches, the exact sentence is highlighted in the archive with side-by-side textual alignment.</p>

<h3>2. The 4-Badge Source Taxonomy</h3>

<p>Checkmark replaces confusing, aggregate &ldquo;originality percentages&rdquo; with an intuitive, 4-badge disciplinary taxonomy visible on two-way linked evidence cards:</p>

<!-- 4-Badge Taxonomy Cards Grid -->
<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
  <!-- Badge 1: Green -->
  <div class="rounded-xl border border-emerald-500/40 bg-emerald-50/30 dark:bg-emerald-950/20 p-4 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
          🟢 Quoted &amp; Verified
        </span>
        <span class="text-xs font-semibold text-emerald-800 dark:text-emerald-300">Authentic Primary Source</span>
      </div>
      <p class="text-xs text-muted-foreground leading-relaxed">
        The quoted text matches a verified document in an authoritative archive (LOC, NARA, Avalon) and is properly enclosed in quotation marks with complete bibliographic attribution.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-emerald-500/20 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
      <strong>Action:</strong> Validates authentic historical scholarship. No teacher intervention required.
    </div>
  </div>

  <!-- Badge 2: Amber -->
  <div class="rounded-xl border border-amber-500/40 bg-amber-50/30 dark:bg-amber-950/20 p-4 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-600 text-white">
          🟡 Paraphrased with Source
        </span>
        <span class="text-xs font-semibold text-amber-800 dark:text-amber-300">Close Paraphrase / Patchwriting</span>
      </div>
      <p class="text-xs text-muted-foreground leading-relaxed">
        Substantive semantic overlap with an external source accompanied by a citation. Indicates the student located a genuine source but may have struggled to synthesize it without mimicry.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-amber-500/20 text-[11px] text-amber-700 dark:text-amber-400 font-medium">
      <strong>Action:</strong> Teacher reviews for developmental patchwriting and coaches synthesis skills.
    </div>
  </div>

  <!-- Badge 3: Red -->
  <div class="rounded-xl border border-rose-500/40 bg-rose-50/30 dark:bg-rose-950/20 p-4 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-600 text-white">
          🔴 Uncited External Match
        </span>
        <span class="text-xs font-semibold text-rose-800 dark:text-rose-300">Traditional Plagiarism</span>
      </div>
      <p class="text-xs text-muted-foreground leading-relaxed">
        Verbatim text matches an indexed online webpage, published article, or peer document without any citation, footnote, or quotation marks.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-rose-500/20 text-[11px] text-rose-700 dark:text-rose-400 font-medium">
      <strong>Action:</strong> Disciplinary review or required revision for missing ethical attribution.
    </div>
  </div>

  <!-- Badge 4: Purple -->
  <div class="rounded-xl border border-purple-500/40 bg-purple-50/30 dark:bg-purple-950/20 p-4 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-600 text-white">
          🟣 Unverified / Hallucinated
        </span>
        <span class="text-xs font-semibold text-purple-800 dark:text-purple-300">High-Risk Synthetic AI Quote</span>
      </div>
      <p class="text-xs text-muted-foreground leading-relaxed">
        The quoted passage and citation do NOT exist in any verified repository or live web index. Accompanied by LLM linguistic signatures or single-paste telemetry.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-purple-500/20 text-[11px] text-purple-700 dark:text-purple-400 font-medium">
      <strong>Action:</strong> Opens Essay Playback™ for clipboard audit and triggers restorative conference.
    </div>
  </div>
</div>

<p>When a purple badge is triggered, the system flags the citation for immediate teacher review. Clicking the purple badge opens an evidence card detailing:</p>

<ol class="space-y-2 my-4 pl-6 list-decimal text-muted-foreground text-sm">
  <li><strong class="text-foreground">Archive Search Status:</strong> Confirmation that comprehensive queries across verified corpora yielded no matches.</li>
  <li><strong class="text-foreground">Linguistic Confidence Score:</strong> The probability that the passage syntax was synthesized by an LLM rather than extracted from historical literature.</li>
  <li><strong class="text-foreground">Drafting Telemetry:</strong> Keystroke timeline data showing how the passage was entered into the document.</li>
</ol>

<h3>3. Patent-Pending Essay Playback™: Keystroke Telemetry &amp; Clipboard Forensics</h3>

<p>The ultimate defense against AI-fabricated history is not surface-level text scanning; it is <strong>process evidence</strong>. While generative AI can produce synthetic text that mimics 19th-century prose, it cannot fake authentic, messy human drafting behavior.</p>

<img src="/images/services/report-paste-evidence.png" alt="Checkmark Plagiarism Essay Playback Keystroke Telemetry and Clipboard History" class="w-full rounded-2xl border border-border shadow-md my-8" />

<!-- Telemetry Comparison Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    AUTHENTIC RESEARCH VS. AI FABRICATION PLAYBACK
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    How microsecond-level writing telemetry exposes synthetic quotes while validating genuine student research
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Authentic Student -->
    <div class="rounded-xl bg-slate-800/90 border border-teal-500/40 p-4 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
            AUTHENTIC STUDENT RESEARCHER
          </span>
          <span class="text-[10px] text-teal-400 font-semibold">Organic Telemetry</span>
        </div>
        <div class="text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded border border-slate-800 mb-3 space-y-1">
          <div>[00:02:15] Types thesis statement</div>
          <div>[00:04:30] 3-minute pause (consults LOC tab)</div>
          <div>[00:07:30] Types quote slowly with typo corrections</div>
          <div>[00:09:10] Deletes word &bull; inserts Chicago footnote</div>
          <div>[00:11:45] Revises surrounding analytical prose</div>
        </div>
        <ul class="list-disc pl-4 space-y-1 text-slate-300 text-xs">
          <li>Natural cognitive pauses (45–180s) while reading</li>
          <li>Keystroke burstiness with backspaces and edits</li>
          <li>Manual typing velocity: 25–45 WPM</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700 text-[11px] text-teal-300 font-medium">
        <strong>Verdict:</strong> 100% Proven Authentic Human Authorship.
      </div>
    </div>

    <!-- Fabricated Quote -->
    <div class="rounded-xl bg-slate-800/90 border border-purple-500/40 p-4 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
            AI-GENERATED FABRICATED QUOTE
          </span>
          <span class="text-[10px] text-purple-400 font-semibold">Synthetic Telemetry</span>
        </div>
        <div class="text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded border border-slate-800 mb-3 space-y-1">
          <div>[00:00:00] Document created</div>
          <div>[00:12:00] 12 minutes of zero active typing</div>
          <div>[00:12:02] Single External Paste: 180 words at once</div>
          <div>[00:12:15] Zero composing pauses or revisions</div>
          <div>[00:12:30] Immediate final submission</div>
        </div>
        <ul class="list-disc pl-4 space-y-1 text-slate-300 text-xs">
          <li>Single clipboard drop event (0 WPM velocity)</li>
          <li>Full unredacted prompt cached in paste snapshot</li>
          <li>Complete absence of organic cognitive friction</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700 text-[11px] text-purple-300 font-medium">
        <strong>Verdict:</strong> Undeniable Evidence of Generative AI Injection.
      </div>
    </div>
  </div>
</div>

<p><strong>Essay Playback™</strong> reconstructs the student&rsquo;s complete writing session keystroke-by-keystroke. Educators can scrub through the timeline like a video at <strong>1x to 8x speed</strong>:</p>

<ul class="space-y-3 my-4 pl-6 list-disc text-muted-foreground text-sm">
  <li><strong class="text-foreground">External Paste Tracking with Complete Text Preservation:</strong> When a student pastes text from an external source (e.g., ChatGPT or Claude), Checkmark captures an immutable, timestamped snapshot of the exact clipboard content. Even if the student subsequently edits every word or changes vocabulary to disguise the paste, the teacher can click <strong>&ldquo;Jump to Playback&rdquo;</strong> and view the original pasted block in full.</li>
  <li><strong class="text-foreground">Transcription &amp; Mechanical Retyping Detection:</strong> Some students attempt to circumvent paste detectors by placing an AI chat window on a second monitor or mobile phone and manually retyping the generated text. Essay Playback™ detects this immediately by analyzing typing velocity and pause distribution: a student retyping fabricated text types with steady, mechanical speed across complex sentences without the natural cognitive pauses, word deletions, and syntactic restructuring characteristic of authentic human historical writing.</li>
  <li><strong class="text-foreground">Exoneration of Honest Students:</strong> For students who quote rare, obscure local historical archives not indexed in commercial databases, Essay Playback™ serves as undeniable proof of innocence. The teacher can watch the student compose the analysis, pause to consult their notes, type the citation, and revise their argument&mdash;instantly clearing them of false AI accusations.</li>
</ul>

<h3>4. Passage-Level AI Linguistic Pattern Analysis &amp; Honest Short-Text Guardrails</h3>

<p>Unlike generic AI detectors that assign an arbitrary whole-paper score (e.g., &ldquo;78% AI&rdquo;), Checkmark provides <strong>passage-level granularity</strong>:</p>

<ul class="space-y-2 my-4 pl-6 list-disc text-muted-foreground text-sm">
  <li>Underlines specific sentences within the essay accompanied by individual sidebar evidence cards.</li>
  <li>Calibrated confidence sliders visually display whether sentence construction reflects typical human writing diversity or typical AI statistical predictability (low perplexity, uniform burstiness).</li>
  <li><strong class="text-foreground">Honest Short-Text Guardrails (&lt;150 words):</strong> Checkmark explicitly displays <code>N/A</code> for short text selections under ~150 words rather than guessing on statistically insufficient sample sizes, preventing unwarranted flags on brief thesis statements or short historical definitions.</li>
  <li><strong class="text-foreground">Educator-Only Flag Statuses:</strong> All flags (<code>Flagged</code>, <code>Resolved</code>, <code>Not Flagged</code>) remain strictly private to educators to ensure objective evaluation and prevent student panic.</li>
</ul>

<h3>5. Teacher-in-the-Loop Rubric Autograding with Direct LMS Passback</h3>

<p>Checkmark integrates directly with <strong>Canvas LMS SpeedGrader</strong>, <strong>Agilix Buzz LMS</strong>, and <strong>Google Classroom</strong> via LTI 1.3 Advantage. Teachers can evaluate Document-Based Questions (DBQs) and historical research papers against custom analytical rubrics:</p>

<ul class="space-y-2 my-4 pl-6 list-disc text-muted-foreground text-sm">
  <li>AI autograding generates <strong>first-draft rubric suggestions</strong> with quote-anchored justifications tied directly to student prose.</li>
  <li>Teachers retain <strong>100% final authority</strong> to modify scores, refine feedback, or override suggestions.</li>
  <li>Finalized scores and detailed feedback sync back to the LMS gradebook in a single click, eliminating manual data entry.</li>
</ul>

<hr class="my-8 border-border" />

<h2>4. Deep-Dive Case Studies: Archival Forensics in the History Classroom</h2>

<p>To illustrate how Checkmark&rsquo;s Side-by-Side Source Verification Workbench operates in practice, consider three realistic secondary social studies scenarios.</p>

<!-- Case Studies Overview Table -->
<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Course &amp; Level</th>
        <th class="p-3">Assignment &amp; Historical Era</th>
        <th class="p-3">Sourcing Integrity Challenge</th>
        <th class="p-3">Checkmark Resolution</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">1. APUSH (11th Grade)</td>
        <td class="p-3">Civil War Emancipation Policy &amp; Border States (1862)</td>
        <td class="p-3 text-purple-600 dark:text-purple-400 font-semibold">Hallucinated Lincoln-Chase letter; fictitious Basler Vol. V page.</td>
        <td class="p-3">Dual-pane archive check fails; single-paste prompt snapshot revealed; restorative rewrite.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">2. National History Day (10th)</td>
        <td class="p-3">1930s Labor Movement &amp; New Deal Industrial Unionism</td>
        <td class="p-3 text-purple-600 dark:text-purple-400 font-semibold">Fabricated 1936 Senate committee testimony from fake organizer.</td>
        <td class="p-3">National Archives check fails; 78 WPM retyping velocity; coached on Reuther Library.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">3. World History (9th Grade)</td>
        <td class="p-3">Cold War Crises: Cuban Missile Crisis &amp; Bay of Pigs</td>
        <td class="p-3 text-purple-600 dark:text-purple-400 font-semibold">Invented 1961 Khrushchev-Castro cable with fake Russian fond numbers.</td>
        <td class="p-3">Wilson Center CWIHP query fails; formative lesson on search engines vs. LLM token synthesis.</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Case Study 1 Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
    <div class="text-xs font-bold text-teal-400 uppercase tracking-wider">CASE STUDY 1: AP U.S. HISTORY (11TH GRADE)</div>
    <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold">
      The Phantom Lincoln-Chase Correspondence
    </span>
  </div>

  <div class="space-y-4 text-xs">
    <div class="rounded-xl bg-slate-950 p-4 border border-slate-800 font-serif">
      <div class="text-[11px] font-sans font-bold text-slate-400 uppercase tracking-wider mb-2">Student Paper Excerpt:</div>
      <p class="text-slate-300 leading-relaxed italic m-0">
        &ldquo;Lincoln remained deeply hesitant to alienate Kentucky. In a private May 1862 letter to Treasury Secretary Salmon P. Chase, Lincoln confided: <span class="text-purple-300 bg-purple-950/60 px-1 py-0.5 rounded font-medium">&lsquo;To lose Kentucky is nearly the same as to lose the whole game, but to lose our constitutional footing in the process would make victory indistinguishable from defeat.&rsquo;</span> (Lincoln to Chase, May 14, 1862, in Basler, <em>Collected Works of Abraham Lincoln</em>, Vol. V, p. 219).&rdquo;
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans">
      <div class="rounded-lg bg-slate-800/80 p-3.5 border border-slate-700">
        <div class="text-xs font-bold text-rose-300 mb-1">Legacy Plagiarism Scanner</div>
        <p class="text-[11px] text-slate-300 m-0">Returned <strong>0% Plagiarism</strong>. The quote was newly minted by an LLM and did not match any indexed webpage.</p>
      </div>
      <div class="rounded-lg bg-purple-950/40 p-3.5 border border-purple-500/40">
        <div class="text-xs font-bold text-purple-300 mb-1">Checkmark Workbench Analysis</div>
        <p class="text-[11px] text-purple-200 m-0"><strong>🟣 Purple Alert</strong>. Library of Congress cross-reference confirms Basler Vol. V, p. 219 contains routine Treasury warrants, not Lincoln-Chase letters.</p>
      </div>
    </div>

    <div class="rounded-lg bg-slate-800/80 p-3.5 border border-slate-700">
      <div class="text-xs font-bold text-teal-300 mb-1">Essay Playback™ Telemetry &amp; Restorative Resolution</div>
      <p class="text-[11px] text-slate-300 leading-relaxed m-0">
        The teacher scrubbed to timestamp <code>00:08:41</code>. The timeline showed the entire paragraph pasted in one action. The cached clipboard snapshot preserved the student&rsquo;s prompt: <em>&ldquo;Write an APUSH-level paragraph about Lincoln balancing Chase and border states, cite a primary source quote from Basler.&rdquo;</em> During a restorative conference, the student learned how LLMs hallucinate citations and resubmitted the paper using Lincoln&rsquo;s verified letter to Orville Browning (Sept 22, 1861) on <em>Founders Online</em> for full credit.
      </p>
    </div>
  </div>
</div>

<!-- Case Study 2 Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
    <div class="text-xs font-bold text-teal-400 uppercase tracking-wider">CASE STUDY 2: NATIONAL HISTORY DAY (NHD)</div>
    <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold">
      The Fabricated 1936 New Deal Labor Testimony
    </span>
  </div>

  <div class="space-y-4 text-xs">
    <div class="rounded-xl bg-slate-950 p-4 border border-slate-800 font-serif">
      <div class="text-[11px] font-sans font-bold text-slate-400 uppercase tracking-wider mb-2">Student Paper Excerpt:</div>
      <p class="text-slate-300 leading-relaxed italic m-0">
        &ldquo;During the 1936 Flint Sit-Down Strike, rank-and-file organizers faced immense intimidation. Arthur MacIntyre, a local GM assemblyman, testified before the Senate La Follette Civil Liberties Committee: <span class="text-purple-300 bg-purple-950/60 px-1 py-0.5 rounded font-medium">&lsquo;We did not strike for comfort; we struck for the right to stand upright on the shop floor without asking permission from private detectives.&rsquo;</span> (U.S. Senate, Hearings on S. Res. 266, Part 4, p. 1432, 1936).&rdquo;
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans">
      <div class="rounded-lg bg-slate-800/80 p-3.5 border border-slate-700">
        <div class="text-xs font-bold text-teal-300 mb-1">Archival Cross-Reference</div>
        <p class="text-[11px] text-slate-300 m-0">Query against National Archives Record Group 46 confirmed that no individual named &ldquo;Arthur MacIntyre&rdquo; ever testified before the committee.</p>
      </div>
      <div class="rounded-lg bg-purple-950/40 p-3.5 border border-purple-500/40">
        <div class="text-xs font-bold text-purple-300 mb-1">Keystroke Dynamics (Essay Playback™)</div>
        <p class="text-[11px] text-purple-200 m-0">Text was not pasted. The student typed at an unbroken 78 WPM with 0 backspaces across 45 words&mdash;proving transcription from a secondary phone screen.</p>
      </div>
    </div>

    <div class="rounded-lg bg-slate-800/80 p-3.5 border border-slate-700">
      <div class="text-xs font-bold text-teal-300 mb-1">Pedagogical Outcome</div>
      <p class="text-[11px] text-slate-300 leading-relaxed m-0">
        The NHD adviser demonstrated that submitting fabricated testimony would result in immediate regional disqualification. The adviser connected the student with digitized oral histories at Wayne State University&rsquo;s <em>Walter P. Reuther Library</em>, where the student incorporated authentic testimonies from real organizers like Genora Dollinger and Bob Travis.
      </p>
    </div>
  </div>
</div>

<!-- Case Study 3 Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
    <div class="text-xs font-bold text-teal-400 uppercase tracking-wider">CASE STUDY 3: 9TH-GRADE WORLD HISTORY</div>
    <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold">
      The Invented 1961 Khrushchev-Castro Telegram
    </span>
  </div>

  <div class="space-y-4 text-xs">
    <div class="rounded-xl bg-slate-950 p-4 border border-slate-800 font-serif">
      <div class="text-[11px] font-sans font-bold text-slate-400 uppercase tracking-wider mb-2">Student Paper Excerpt:</div>
      <p class="text-slate-300 leading-relaxed italic m-0">
        &ldquo;Following the Bay of Pigs invasion in April 1961, Premier Nikita Khrushchev sent a classified telegram to Fidel Castro stating: <span class="text-purple-300 bg-purple-950/60 px-1 py-0.5 rounded font-medium">&lsquo;Imperialist aggression in the Caribbean will be met not with diplomatic protests, but with the full defensive shield of the Soviet motherland.&rsquo;</span> (Soviet Foreign Ministry Archives, F. 059, Op. 43, D. 12, L. 4).&rdquo;
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans">
      <div class="rounded-lg bg-slate-800/80 p-3.5 border border-slate-700">
        <div class="text-xs font-bold text-teal-300 mb-1">Archival Query (Wilson Center)</div>
        <p class="text-[11px] text-slate-300 m-0">Query to Woodrow Wilson Center Cold War International History Project (CWIHP) declassified records yielded 0 matches for the quoted text.</p>
      </div>
      <div class="rounded-lg bg-purple-950/40 p-3.5 border border-purple-500/40">
        <div class="text-xs font-bold text-purple-300 mb-1">Telemetry Breakdown</div>
        <p class="text-[11px] text-purple-200 m-0">90% of the essay was drafted authentically over 3 days with hundreds of organic edits. Only the 15-word quote block had been pasted from an AI chatbot.</p>
      </div>
    </div>

    <div class="rounded-lg bg-slate-800/80 p-3.5 border border-slate-700">
      <div class="text-xs font-bold text-teal-300 mb-1">Pedagogical Outcome</div>
      <p class="text-[11px] text-slate-300 leading-relaxed m-0">
        The teacher recognized novice search confusion: <em>&ldquo;I typed &lsquo;Find me a declassified Soviet telegram from 1961 about Cuba&rsquo; into ChatGPT. It gave me the quote and the Russian archive number, so I thought it was real.&rdquo;</em> The teacher used this as a high-impact classroom lesson on LLM hallucinations vs. real archival indices, and the student received full formative credit after incorporating authentic cables from the Wilson Center Digital Archive.
      </p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>5. The 4-Phase Historical Research Verification Protocol</h2>

<p>To implement a consistent, department-wide standard for evaluating primary source integrity, secondary social studies departments can adopt Checkmark&rsquo;s <strong>4-Phase Verification Protocol</strong>:</p>

<!-- 4-Phase Verification Protocol Grid -->
<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
  <!-- Phase 1 -->
  <div class="rounded-xl bg-slate-800/90 border border-slate-700 p-4 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2.5 mb-2">
        <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">1</span>
        <span class="text-xs font-bold text-teal-300 uppercase tracking-wider">PHASE 1: INGESTION &amp; DUAL-PANE SCAN</span>
      </div>
      <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs">
        <li>Submissions sync automatically via Canvas, Buzz LMS, or Google Classroom.</li>
        <li>Checkmark cross-references quotes against LOC, Founders Online, Avalon, &amp; JSTOR.</li>
        <li>Teacher filters submissions by badge status (prioritizing 🟣 Purple Alerts).</li>
      </ul>
    </div>
    <div class="mt-3 pt-2 border-t border-slate-700 text-[10px] text-slate-400">
      Automated archive queries execute instantly upon submission.
    </div>
  </div>

  <!-- Phase 2 -->
  <div class="rounded-xl bg-slate-800/90 border border-slate-700 p-4 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2.5 mb-2">
        <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">2</span>
        <span class="text-xs font-bold text-teal-300 uppercase tracking-wider">PHASE 2: TELEMETRY AUDIT (PLAYBACK™)</span>
      </div>
      <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs">
        <li>For any purple badge, open Essay Playback™ timeline at 2x–4x speed.</li>
        <li>Review external clipboard captures to inspect original pasted prompts.</li>
        <li>Check velocity curves for mechanical typing patterns (retyping from external screens).</li>
      </ul>
    </div>
    <div class="mt-3 pt-2 border-t border-slate-700 text-[10px] text-slate-400">
      Reveals drafting reality in under 60 seconds of video scrub.
    </div>
  </div>

  <!-- Phase 3 -->
  <div class="rounded-xl bg-slate-800/90 border border-slate-700 p-4 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2.5 mb-2">
        <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">3</span>
        <span class="text-xs font-bold text-teal-300 uppercase tracking-wider">PHASE 3: LINGUISTIC TRIANGULATION</span>
      </div>
      <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs">
        <li>Examine passage-level confidence sliders (perplexity &amp; burstiness metrics).</li>
        <li>Verify that short citations under 150 words display honest N/A guardrail tags.</li>
        <li>Corroborate whether surrounding analytical prose matches student&rsquo;s natural voice.</li>
      </ul>
    </div>
    <div class="mt-3 pt-2 border-t border-slate-700 text-[10px] text-slate-400">
      Multi-factor triangulation prevents false-positive accusations.
    </div>
  </div>

  <!-- Phase 4 -->
  <div class="rounded-xl bg-slate-800/90 border border-slate-700 p-4 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2.5 mb-2">
        <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">4</span>
        <span class="text-xs font-bold text-teal-300 uppercase tracking-wider">PHASE 4: RESTORATIVE PASSBACK</span>
      </div>
      <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-xs">
        <li>Use AI Rubric Assistant to generate first-draft DBQ/Research rubric scores.</li>
        <li>Teacher reviews, adjusts points, and embeds quote-anchored disciplinary feedback.</li>
        <li>Push finalized scores directly to LMS Gradebook via LTI 1.3 Advantage passback.</li>
      </ul>
    </div>
    <div class="mt-3 pt-2 border-t border-slate-700 text-[10px] text-slate-400">
      Teacher maintains 100% authority over final grades and feedback.
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. Institutional Implementation: Syllabus Policies &amp; Restorative Conference Scripts</h2>

<p>Clear institutional policies and transparent teacher-student communication are essential to ensure academic integrity tools support student growth rather than creating an adversarial classroom dynamic.</p>

<h3>Model Syllabus Language for Secondary Social Studies</h3>

<p>Departments can adapt this syllabus policy to establish unambiguous expectations regarding AI and primary source research:</p>

<div class="my-6 rounded-xl border border-border bg-muted/40 p-5 font-mono text-xs text-foreground space-y-3">
  <div class="font-sans font-bold text-teal-600 dark:text-teal-400 text-sm">
    ACADEMIC INTEGRITY &amp; SOURCE VERIFICATION POLICY: SECONDARY SOCIAL STUDIES DEPARTMENT
  </div>

  <div>
    <strong>1. The Primacy of Historical Evidence:</strong><br />
    <span class="text-muted-foreground">Historical thinking requires engaging with authentic, verifiable primary and secondary sources. Every quotation, archival letter, statistical data point, and scholarly citation in your research papers must originate from a real, verifiable historical artifact.</span>
  </div>

  <div>
    <strong>2. Permissible vs. Prohibited AI Usage:</strong><br />
    <span class="text-muted-foreground">
      &bull; <em>Permissible AI Assistance (Formative Support):</em> You may use approved AI tools to brainstorm research questions, generate search keywords for archival databases (e.g., &ldquo;What terms should I use to search the Library of Congress for the Pullman Strike?&rdquo;), or check grammar and mechanics on your own original drafting.<br />
      &bull; <em>Prohibited AI Fabrication (Authorship Fraud):</em> You may NOT use generative AI to draft essay paragraphs, synthesize primary source quotes, or generate bibliographic citations. Generating or citing non-existent quotes or citations constitutes academic fabrication under district policy.
    </span>
  </div>

  <div>
    <strong>3. Verification &amp; Process Evidence:</strong><br />
    <span class="text-muted-foreground">All research papers will be evaluated using Checkmark Plagiarism&rsquo;s Side-by-Side Source Verification Workbench and Essay Playback™. Writing process history&mdash;including authentic composing pauses, revisions, and verified archival links&mdash;protects honest students and confirms authentic authorship.</span>
  </div>
</div>

<h3>Restorative Sourcing Conference Script</h3>

<p>When a 🟣 <strong>Unverified/Hallucinated Citation Alert</strong> is detected, teachers should conduct a non-punitive, evidence-based restorative dialogue using this proven script:</p>

<!-- Conference Dialogue Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md space-y-4 text-xs">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide border-b border-slate-800 pb-3">
    RESTORATIVE SOURCING CONFERENCE SCRIPT (TEACHER &amp; STUDENT)
  </div>

  <div class="space-y-3">
    <div class="rounded-lg bg-slate-800/90 p-3 border border-slate-700">
      <strong class="text-teal-300 font-semibold">Teacher:</strong>
      <span class="text-slate-300"> &ldquo;Thanks for meeting with me, Alex. I was reading your research paper on the Gilded Age, and I was really interested in this quote you included from Samuel Gompers in 1894. It made a very specific point about the Pullman Strike.&rdquo;</span>
    </div>

    <div class="rounded-lg bg-slate-800/90 p-3 border border-slate-700">
      <strong class="text-slate-200 font-semibold">Student:</strong>
      <span class="text-slate-300"> &ldquo;Yeah, I wanted to find a strong quote to prove my thesis on labor solidarity.&rdquo;</span>
    </div>

    <div class="rounded-lg bg-slate-800/90 p-3 border border-teal-500/40">
      <strong class="text-teal-300 font-semibold">Teacher [Opens Checkmark Dual-Pane Workbench]:</strong>
      <span class="text-slate-300"> &ldquo;I went to look up the citation you listed in the Gompers Papers, Vol. 3, page 184, so I could read the full speech. But when we cross-reference the archive in our verification workbench, page 184 is an administrative letter about union dues, and this quote doesn&rsquo;t appear anywhere in the historical record. Can you walk me through how you located this specific quote?&rdquo;</span>
    </div>

    <div class="rounded-lg bg-slate-800/90 p-3 border border-slate-700">
      <strong class="text-slate-200 font-semibold">Student [Hesitates]:</strong>
      <span class="text-slate-300"> &ldquo;I asked ChatGPT to give me a quote from Samuel Gompers about the Pullman strike that proved my point, and it gave me that sentence and citation.&rdquo;</span>
    </div>

    <div class="rounded-lg bg-slate-800/90 p-3 border border-teal-500/40">
      <strong class="text-teal-300 font-semibold">Teacher [Opens Essay Playback™ Clipboard Snapshot]:</strong>
      <span class="text-slate-300"> &ldquo;I appreciate your honesty. Look here at the screen: generative AI models like ChatGPT don&rsquo;t search real libraries; they predict words that sound like 19th-century speech. It literally invented that quote and made up the page number. When we use AI this way, we&rsquo;re putting words in historical figures&rsquo; mouths that they never said.&rdquo;</span>
    </div>

    <div class="rounded-lg bg-slate-800/90 p-3 border border-slate-700">
      <strong class="text-slate-200 font-semibold">Student:</strong>
      <span class="text-slate-300"> &ldquo;I honestly thought it was searching real archives. I didn&rsquo;t mean to fake it.&rdquo;</span>
    </div>

    <div class="rounded-lg bg-emerald-950/60 p-3 border border-emerald-500/50">
      <strong class="text-emerald-300 font-semibold">Teacher [Restorative Plan]:</strong>
      <span class="text-emerald-100"> &ldquo;That&rsquo;s why we look at the process receipts together. Here is our plan: I am unlocking your draft. Let&rsquo;s spend 10 minutes looking at the Library of Congress digital collection together so you can find an authentic Gompers quote. You will replace the synthetic passage, analyze the real historical context, and resubmit for full credit.&rdquo;</span>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. Frequently Asked Questions (FAQ)</h2>

<div class="space-y-4 my-6">
  <!-- FAQ 1 -->
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground m-0 mb-2">
      1. How does Checkmark detect hallucinated historical quotes if they aren&rsquo;t on the internet?
    </h3>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      Traditional plagiarism tools search only for matching strings on indexed websites. Checkmark connects directly to comprehensive, structured historical corpora (Library of Congress, Founders Online, National Archives, JSTOR, Avalon Project) through its <strong>Dual-Pane Source Engine</strong>. When an essay cites an archival source, Checkmark verifies whether that specific text exists within the cited volume, manuscript collection, or author corpus. If no archival record exists and the passage displays characteristic LLM linguistic predictability, the system generates a 🟣 <strong>Unverified/Hallucinated Citation Alert</strong>.
    </p>
  </div>

  <!-- FAQ 2 -->
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground m-0 mb-2">
      2. Can a student fool Essay Playback™ by manually retyping an AI-generated quote?
    </h3>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      No. Essay Playback™ analyzes continuous keystroke dynamics, typing velocity curves, and cognitive pause distributions. Authentic historical composing involves natural hesitation (e.g., pausing for 30–90 seconds while reading an archive on another screen, deleting words, fixing typos, rephrasing sentences). Manual transcription from a phone or second screen produces a uniform, unbroken typing velocity with zero natural compositional pauses&mdash;a distinct mechanical signature flagged by Checkmark&rsquo;s writing telemetry.
    </p>
  </div>

  <!-- FAQ 3 -->
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground m-0 mb-2">
      3. What happens if a student cites a legitimate but obscure physical archive from a local historical society?
    </h3>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      Honest students citing non-digitized, local primary sources are fully protected by <strong>Essay Playback™</strong>. The teacher can replay the student&rsquo;s drafting session to observe authentic note synthesis, composing pauses, and manual citation entry. Furthermore, teachers can use the one-click <strong>&ldquo;Mark as Verified&rdquo;</strong> button to convert the badge to 🟢 <strong>Quoted &amp; Verified</strong>, preserving the teacher as the ultimate authority.
    </p>
  </div>

  <!-- FAQ 4 -->
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground m-0 mb-2">
      4. Does Checkmark store or train AI models on student essays?
    </h3>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      <strong>Never.</strong> Checkmark strictly enforces <strong>zero model training on student submissions</strong>. Student essays and research papers are never cached in public LLM repositories, never sold to third parties, and never used to train machine learning models. Checkmark is fully compliant with <strong>FERPA</strong>, <strong>COPPA</strong>, and state-level student data privacy mandates.
    </p>
  </div>

  <!-- FAQ 5 -->
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground m-0 mb-2">
      5. How does Checkmark differentiate between bad citation formatting and intentional fabrication?
    </h3>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      Checkmark&rsquo;s <strong>4-Badge Source Taxonomy</strong> explicitly separates formatting errors from fraud. An uncredited or poorly formatted match triggers an amber 🟡 <strong>Paraphrased with Source</strong> or red 🔴 <strong>Uncited External Match</strong> badge, allowing teachers to provide targeted citation coaching. A 🟣 <strong>Purple Alert</strong> is reserved exclusively for unverified citations where neither the text nor the source can be corroborated in archival indices.
    </p>
  </div>

  <!-- FAQ 6 -->
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground m-0 mb-2">
      6. How does Checkmark integrate with Canvas SpeedGrader, Agilix Buzz, and Google Classroom?
    </h3>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      Checkmark utilizes <strong>1EdTech LTI 1.3 Advantage (Assignment and Grade Services AGS 2.0 &amp; Names and Role Provisioning Services NRPS 2.0)</strong>. Within Canvas SpeedGrader or Buzz LMS, teachers access the synchronized source viewer, Essay Playback™ timeline, and AI rubric draft suggestions directly inside the native grading pane. One click synchronizes final scores and written justifications directly back to the LMS gradebook.
    </p>
  </div>

  <!-- FAQ 7 -->
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground m-0 mb-2">
      7. Why does Checkmark display &ldquo;N/A&rdquo; on short text selections under 150 words?
    </h3>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      Short passages (such as a single thesis sentence or brief factual definition) do not provide a large enough statistical sample for reliable linguistic pattern analysis (perplexity and burstiness). Rather than guessing and generating false-positive flags, Checkmark enforces <strong>Honest Short-Text Guardrails</strong> displaying <code>N/A</code>, preventing unwarranted accusations against concise student writing.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Summary Comparison Matrix: Integrity Tools in the Social Studies Classroom</h2>

<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Feature / Capability</th>
        <th class="p-3">Legacy Plagiarism Scanners</th>
        <th class="p-3">Checkmark Plagiarism</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Primary Source Archive Verification</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">❌ No (Web scrape only)</td>
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">🟢 Dual-Pane Archive Matcher</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Detection of AI Hallucinated Quotes</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">❌ Failed (Flags 0% Plagiarism)</td>
        <td class="p-3 font-bold text-purple-600 dark:text-purple-400">🟢 🟣 Purple Badge Alerts</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Keystroke &amp; Video Essay Playback™</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">❌ None (Static text only)</td>
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">🟢 1x–8x Scrubbable Replay</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">External Clipboard Text Capture</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">❌ Not preserved</td>
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">🟢 Full original text saved</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Mechanical Retyping Detection</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">❌ Invisible</td>
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">🟢 Keystroke velocity curves</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Granular Passage-Level AI Sliders</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">❌ Whole-paper % score</td>
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">🟢 Passage-level confidence</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Honest Short-Text Guardrails (&lt;150w)</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">❌ Hallucinates flags</td>
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">🟢 Transparent N/A display</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Teacher-in-the-Loop Rubric Grading</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">❌ No autograding</td>
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">🟢 DBQ Rubric Assistant</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Student Data Privacy (Zero Training)</td>
        <td class="p-3 text-amber-600 dark:text-amber-400">⚠️ Varies / Vendor Caching</td>
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">🟢 Guaranteed Zero Training</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>Conclusion: Stop Guessing, Start Trusting in Historical Research</h2>

<p>The rise of generative AI does not signify the end of the high school research paper or the National History Day project. Instead, it challenges social studies educators to elevate historical thinking skills and replace outdated string-matching scanners with transparent, multi-dimensional verification tools.</p>

<p>By deploying <strong>Checkmark Plagiarism&rsquo;s Side-by-Side Source Verification Workbench</strong>, secondary history departments gain the defensible process evidence needed to detect AI-hallucinated primary sources, protect honest students, and transform potential academic integrity breaches into powerful, restorative lessons in authentic historiography.</p>

<div class="my-8 rounded-2xl border border-teal-500/40 bg-teal-50/50 dark:bg-teal-950/20 p-6 text-center">
  <h3 class="text-lg font-bold text-foreground mb-2">Ready to Transform Sourcing Integrity in Your Social Studies Department?</h3>
  <p class="text-sm text-muted-foreground max-w-2xl mx-auto mb-4">
    Equip your history educators with synchronized dual-pane archival verification, 1x–8x Essay Playback™, and certified Canvas SpeedGrader integration.
  </p>
  <a
    href="https://checkmarkplagiarism.com"
    class="inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-colors shadow-sm"
  >
    Schedule a Department Demo
  </a>
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
      currentSlug="2026/8/how-can-secondary-social-studies-teachers-use-side-by-side-source-viewers-to-detect-fabricated-historical-quotes-in-research-papers"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
