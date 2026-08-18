import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Keystroke Replay Distinguish Between Legitimate Copy-Pasting of Source Material and Generative AI? | Checkmark Plagiarism",
  description: "Discover how keystroke replay and writing telemetry distinguish legitimate source quoting from generative AI copy-pasting, preserving authentic student workflows and protecting honest writers.",
  keywords: [
    "keystroke replay",
    "Essay Playback",
    "copy-paste detection",
    "generative AI detection",
    "academic integrity",
    "clipboard telemetry",
    "source integration",
    "Checkmark Plagiarism",
    "writing process analysis",
    "cognitive friction",
    "inter-key interval"
  ],
  openGraph: {
    images: [
      "/images/learning/how-can-keystroke-replay-distinguish-between-legitimate-copy-pasting-of-source-material-and-generative-ai/featured.png",
      "/images/services/report-paste-evidence.png",
    ],
  },
};

export const meta = {
  title: "How Can Keystroke Replay Distinguish Between Legitimate Copy-Pasting of Source Material and Generative AI? | Checkmark Plagiarism",
  description: "Discover how keystroke replay and writing telemetry distinguish legitimate source quoting from generative AI copy-pasting, preserving authentic student workflows and protecting honest writers.",
  "opengraph-image": "/images/learning/how-can-keystroke-replay-distinguish-between-legitimate-copy-pasting-of-source-material-and-generative-ai/featured.png",
  date: "08-18-2026",
  readTime: "~14 min read",
  category: "Writing Process",
  categories: ["Writing Process", "AI Detection", "Teacher Guide", "How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<!-- Executive Summary Box -->
<div class="my-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
    <p class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Executive Summary</p>
  </div>
  <p class="text-base text-foreground leading-relaxed">
    In modern digital composition, copying and pasting is an essential scholarly behavior—students routinely copy primary source quotations, statistical data, bibliography entries, and personal scratchpad notes into their drafts. However, when an educator encounters an uncontextualized 400-word paste block, conventional document tools and opaque AI detectors fail: static revision histories collapse edits into blunt snapshots, while probability scanners generate ambiguous whole-document percentages that cannot distinguish an academic journal excerpt from a ChatGPT-generated argument. <strong>Checkmark Plagiarism&apos;s patent-pending <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a></strong> resolves this forensic dilemma through <strong>Clipboard Telemetry and Downstream Drafting Reconstruction</strong>. By capturing microsecond-level Document Object Model (DOM) paste events, measuring <strong>Post-Paste Cognitive Friction</strong>, analyzing <strong>Inter-Key Intervals (IKI)</strong>, and preserving 100% of the raw clipboard payload in a <strong>Side-by-Side Paste Buffer Inspector</strong>, educators can definitively separate legitimate scholarly quotation from illicit generative AI ingestion—fostering transparent, non-punitive, and restorative academic integrity conversations.
  </p>
</div>

<!-- Featured Image Visual Component -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/learning/how-can-keystroke-replay-distinguish-between-legitimate-copy-pasting-of-source-material-and-generative-ai/featured.png" 
    alt="Checkmark Essay Playback and Clipboard Telemetry Analytics Dashboard" 
    class="w-full h-auto object-cover m-0"
  />
  <div class="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <span><strong>Figure 1.0:</strong> Checkmark Writing Process Telemetry — Keystroke Playback, Clipboard Telemetry, and Side-by-Side Paste Buffer Inspection.</span>
    <span class="text-teal-600 dark:text-teal-400 font-medium">Patent-Pending Process Forensics</span>
  </div>
</div>

<h2>The Educator&apos;s Dilemma: The Ambiguity of the 400-Word Paste Block</h2>

<p>
  Every humanities teacher, English department chair, and academic integrity officer has encountered the following scenario:
</p>

<p>
  An eleventh-grade history student submits a research essay on the American Industrial Revolution. While reviewing the document&apos;s revision metadata, the instructor notices that at minute 14:22 of the drafting session, a <strong>412-word block of dense prose appeared instantaneously</strong>.
</p>

<!-- Digital Ingestion Ambiguity Card -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-4">The Digital Composition Ingestion Ambiguity</div>
  <div class="text-center mb-6">
    <span class="inline-block px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 font-mono text-sm text-teal-300 font-semibold shadow-inner">
      [ 412-WORD INSTANTANEOUS PASTE EVENT @ 14:22 ]
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
    <!-- Scenario A -->
    <div class="bg-emerald-950/40 rounded-xl p-5 border border-emerald-500/30 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-emerald-400 uppercase tracking-wide">Scenario A</span>
          <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Legitimate Ingestion</span>
        </div>
        <h3 class="text-sm font-bold text-white mb-2 pt-0">Scholarly Integration</h3>
        <ul class="space-y-1.5 text-slate-300 text-xs list-disc pl-4">
          <li>Excerpt from an 1892 Andrew Carnegie speech</li>
          <li>Raw data table from a federal census archive</li>
          <li>Rough notes from student&apos;s local Markdown app (Obsidian/Notion)</li>
          <li>Scholarly citation from a paywalled JSTOR PDF</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-emerald-500/20 text-center">
        <span class="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          Legitimate Scholarship
        </span>
      </div>
    </div>

    <!-- Scenario B -->
    <div class="bg-rose-950/40 rounded-xl p-5 border border-rose-500/30 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-rose-400 uppercase tracking-wide">Scenario B</span>
          <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">Synthetic Generation</span>
        </div>
        <h3 class="text-sm font-bold text-white mb-2 pt-0">Authorship Fraud</h3>
        <ul class="space-y-1.5 text-slate-300 text-xs list-disc pl-4">
          <li>Claude 3.5 Sonnet / ChatGPT-4o generation</li>
          <li>Paraphrased synthesis from an unapproved LLM</li>
          <li>&quot;Essay mill&quot; contractor paragraph</li>
          <li>Prompt output with stripped conversational cues</li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-rose-500/20 text-center">
        <span class="px-3 py-1 rounded bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider">
          Authorship Fraud
        </span>
      </div>
    </div>
  </div>
</div>

<p>
  Under legacy evaluation models, this instantaneous insertion creates an immediate impasse:
</p>

<ol>
  <li><strong>The Risk of the False Accusation:</strong> If the instructor relies on a blunt &quot;revision counter&quot; or an opaque black-box AI detector, the system may flag the document as &quot;High Risk&quot; or &quot;84% AI Generated.&quot; If the pasted text was actually a primary source excerpt from Andrew Carnegie&apos;s <em>The Gospel of Wealth</em> that the student intended to analyze, accusing the student of academic dishonesty shatters pedagogical trust, demoralizes an honest researcher, and creates severe parent-teacher friction.</li>
  <li><strong>The Risk of Undetected Evasion:</strong> If the student pasted a synthetic response generated by ChatGPT, spent six minutes substituting five adjectives, and seamlessly blended the text into the body paragraph, a generic plagiarism checker will find no live-web match (because the AI generated novel text), and standard version histories will collapse the change into a single generic edit. The unauthorized generation passes unnoticed, undermining assignment learning objectives.</li>
</ol>

<h3>Why Copy-Pasting Is Fundamental to Legitimate Scholarship</h3>

<p>
  Academic writing is not typing in a vacuum. Authentic scholarly research requires students to interact with external texts. Legitimate reasons a student might paste large blocks of text into an active drafting environment include:
</p>

<ul>
  <li><strong>Direct Primary &amp; Secondary Quotations:</strong> Pulling lengthy excerpts from historical documents, legal statutes, literary works, or scientific abstracts to serve as the object of close reading and textual analysis.</li>
  <li><strong>Working Outlines &amp; Rough Scratchpad Notes:</strong> Composing brainstorming notes, bulleted thesis ideas, or working bibliographies in a local scratchpad (e.g., Apple Notes, Obsidian, Notion, or a physical notebook transcribed into a text file) and moving them into the final LMS submission document.</li>
  <li><strong>Data Integration &amp; Tables:</strong> Pasting numerical datasets, survey findings, or government tables into an appendix or evidentiary section.</li>
  <li><strong>Bibliographic Citations:</strong> Copying pre-formatted APA, MLA, or Chicago bibliographic citations directly from university library databases or academic citation generators.</li>
</ul>

<p>
  The goal of modern academic integrity technology must never be to penalize or restrict copying and pasting. Rather, the goal is to <strong>illuminate the provenance, context, and subsequent cognitive processing of every clipboard event</strong>.
</p>

<hr class="my-8 border-border" />

<h2>The Forensic Limitations of Conventional Tools</h2>

<p>
  To understand why keystroke replay is necessary, educators must first understand why standard word processors and standalone AI detection tools fail when confronted with clipboard operations.
</p>

<!-- Evidentiary Comparison Matrix -->
<div class="my-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
  <table class="w-full text-left text-sm border-collapse">
    <thead>
      <tr class="bg-muted/60 border-b border-border">
        <th class="py-3 px-4 font-semibold text-foreground">Feature / Forensic Capability</th>
        <th class="py-3 px-4 font-semibold text-muted-foreground">Google Docs / MS Word</th>
        <th class="py-3 px-4 font-semibold text-muted-foreground">Standalone AI Detectors</th>
        <th class="py-3 px-4 font-semibold text-teal-600 dark:text-teal-400">Checkmark Essay Playback™</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-xs">
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Telemetry Granularity</td>
        <td class="py-3 px-4 text-muted-foreground">Coarse (1–15 min batches)</td>
        <td class="py-3 px-4 text-muted-foreground">None (Static final text)</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">Microsecond-level DOM telemetry</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Raw Clipboard Payload Capture</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Lost upon revision commit</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Blind to clipboard</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ 100% Immutable Raw Archival</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Downstream Friction Tracking</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ No cadence logging</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ No temporal data</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Real-time IKI &amp; pause entropy</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Scrubbable Keystroke Timeline</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Stepped diff snapshots</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ None</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Fluid 1x to 8x Video Replay</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Source Plagiarism Triangulation</td>
        <td class="py-3 px-4 text-muted-foreground">❌ None</td>
        <td class="py-3 px-4 text-muted-foreground">❌ Disconnected score</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Live 2-way verified web match</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">AI Confidence Granularity</td>
        <td class="py-3 px-4 text-muted-foreground">❌ None</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Whole-paper score</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Passage-level confidence sliders</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Exoneration Evidence for Honest Writers</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Ambiguous jump logs</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ False positive risk</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Empirical process proof</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>1. The Periodic Snapshot Collapse of Standard Office Suites</h3>
<p>
  Cloud word processors such as Google Docs and Microsoft Word 365 are engineered for multi-user collaboration and bandwidth optimization—not for evidentiary academic integrity. 
</p>
<p>
  Instead of recording every individual keypress, their cloud synchronizers batch edits into periodic snapshots (typically every 30 seconds to several minutes). If a student pastes a 500-word block of AI text at 10:00:00 and manually rewrites the first sentence, deletes the final paragraph, and changes three words before the synchronizer commits at 10:02:30, <strong>the original clipboard payload is permanently obliterated from the version database</strong>. The instructor reviewing the version history sees only the net difference between snapshots, making it impossible to inspect the raw ingested text.
</p>

<h3>2. The Black-Box Blindness of Static AI Detectors</h3>
<p>
  Static AI detectors inspect only the final, submitted string of text. They evaluate linguistic predictability (perplexity) and structural variation (burstiness). 
</p>
<p>
  However, static detectors suffer from two catastrophic vulnerabilities during paste events:
</p>
<ul>
  <li><strong>False Positives on Academic Quotations:</strong> Highly structured, formal academic prose (e.g., an 18th-century philosophical treatise or a peer-reviewed medical abstract) exhibits low perplexity and regular sentence structures—the exact characteristics that trigger generic AI detectors. A student who properly quotes a 200-word paragraph from an academic journal will frequently see their entire essay flagged as AI-generated.</li>
  <li><strong>False Negatives via &quot;Paste-and-Mutate&quot;:</strong> If a student pastes synthetic text and performs minimal surface editing (e.g., running the text through a paraphrasing tool like QuillBot or manually inserting deliberate typos and colloquialisms), the static detector&apos;s mathematical thresholds are easily bypassed.</li>
</ul>

<hr class="my-8 border-border" />

<h2>Forensic Mechanics: How Writing Telemetry Decodes Clipboard Events</h2>

<p>
  Checkmark Plagiarism approaches academic integrity not through probabilistic guessing, but through <strong>empirical writing telemetry</strong>. When a student writes within an enabled environment (such as Checkmark&apos;s embedded assignment editors in Canvas LMS, Buzz LMS, Moodle, or the Checkmark Google Docs and Microsoft Word extensions), the system captures a rich, multi-dimensional stream of behavioral metrics.
</p>

<!-- Telemetry Capture Pipeline Diagram -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-4">Clipboard Telemetry &amp; Forensic Capture Pipeline</div>
  
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <!-- Stage 1 -->
    <div class="p-4 rounded-xl bg-muted/50 border border-border flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-xs flex items-center justify-center">1</span>
          <h4 class="text-xs font-bold uppercase text-foreground m-0">DOM Interception</h4>
        </div>
        <p class="text-xs text-muted-foreground mb-2">
          Captures microsecond event timestamp, cursor coordinates, byte length, MIME payload, and raw string.
        </p>
      </div>
      <div class="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold pt-2 border-t border-border/60">
        <code>clipboard.paste</code> (T=0)
      </div>
    </div>

    <!-- Stage 2 -->
    <div class="p-4 rounded-xl bg-muted/50 border border-border flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-xs flex items-center justify-center">2</span>
          <h4 class="text-xs font-bold uppercase text-foreground m-0">Pre-Context</h4>
        </div>
        <p class="text-xs text-muted-foreground mb-2">
          Evaluates rolling WPM, lead-in framing anchors (<em>&quot;As Senator La Follette argued:&quot;</em>), and pre-paste tab pauses.
        </p>
      </div>
      <div class="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold pt-2 border-t border-border/60">
        Anchor Framing Check
      </div>
    </div>

    <!-- Stage 3 -->
    <div class="p-4 rounded-xl bg-muted/50 border border-border flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-xs flex items-center justify-center">3</span>
          <h4 class="text-xs font-bold uppercase text-foreground m-0">Post-Friction</h4>
        </div>
        <p class="text-xs text-muted-foreground mb-2">
          Monitors the $T+0$ to $T+120$s window: quotation enclosing, citation typing, and analytical synthesis pauses.
        </p>
      </div>
      <div class="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold pt-2 border-t border-border/60">
        IKI &amp; Syntax Analysis
      </div>
    </div>

    <!-- Stage 4 -->
    <div class="p-4 rounded-xl bg-muted/50 border border-border flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-xs flex items-center justify-center">4</span>
          <h4 class="text-xs font-bold uppercase text-foreground m-0">Triad Audit</h4>
        </div>
        <p class="text-xs text-muted-foreground mb-2">
          Triangulates keystroke replay, live plagiarism source quote matching, and passage-level AI detection.
        </p>
      </div>
      <div class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold pt-2 border-t border-border/60">
        Defensible Verdict
      </div>
    </div>
  </div>
</div>

<p>
  To distinguish legitimate source pasting from synthetic AI dumping, the telemetry engine evaluates three core forensic dimensions:
</p>

<h3>1. Document Object Model (DOM) Paste Telemetry</h3>

<p>
  When a paste event occurs, Checkmark&apos;s client-side instrumentation intercepts the browser&apos;s Document Object Model event lifecycle before the payload is rendered into the visible canvas:
</p>

<!-- Code Telemetry Packet -->
<div class="my-6 rounded-xl bg-slate-950 p-4 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto shadow-inner">
  <div class="text-slate-500 mb-2">// Microsecond-Accurate Telemetry Payload Snapshot (DOM Paste Event)</div>
  <pre class="m-0 leading-relaxed text-emerald-400"><code>{
  "event_id": "evt_paste_89f2a0c4",
  "session_id": "sess_student_44109",
  "timestamp_iso": "2026-08-18T14:22:10.142Z",
  "client_epoch_ms": 1787084530142,
  "event_type": "DOM_PASTE_INSERTION",
  "dom_insertion_index": 1842,
  "metrics": {
    "character_length": 2145,
    "word_count": 388,
    "line_break_count": 3,
    "mime_payload_type": "text/html"
  },
  "raw_payload_snapshot": "The ultimate test of a nation's commitment to liberty is not its willingness to wage war, but its capacity to tolerate dissenting voices during times of national peril...",
  "telemetry_pre_context": {
    "pre_paste_idle_duration_ms": 38400,
    "pre_paste_wpm_rolling_avg": 42.4,
    "pre_paste_string_tail": "As Senator Robert La Follette argued in his 1917 address: "
  }
}</code></pre>
</div>

<p>
  By recording the exact character index, timestamp, and immutable payload string, Checkmark creates an unalterable forensic record of what entered the document buffer at that precise microsecond.
</p>

<h3>2. Post-Paste Cognitive Friction (The T+0 to T+120 Window)</h3>

<p>
  The most revealing differentiator between authentic research integration and generative AI evasion is <strong>Post-Paste Cognitive Friction</strong>—the behavioral and structural actions a writer takes in the initial seconds following a clipboard insertion.
</p>

<p>
  When a student pastes legitimate research material into an academic paper, the text represents external evidence that must be framed, contextualized, and cited. This requirement introduces immediate cognitive and syntactic friction:
</p>

<!-- Cognitive Friction Comparison Table -->
<div class="my-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
  <table class="w-full text-left text-sm border-collapse">
    <thead>
      <tr class="bg-muted/60 border-b border-border">
        <th class="py-3 px-4 font-semibold text-foreground">Forensic Indicator</th>
        <th class="py-3 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Authentic Source Quotation</th>
        <th class="py-3 px-4 font-semibold text-rose-600 dark:text-rose-400">Unapproved AI Generation</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border text-xs leading-relaxed">
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Framing Integration</td>
        <td class="py-3 px-4 text-foreground">Immediate lead-in phrase typed before paste (e.g., <em>&quot;He states:&quot;</em>)</td>
        <td class="py-3 px-4 text-muted-foreground">Text pasted as standalone body paragraph or whole thesis argument</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Quotation Markings</td>
        <td class="py-3 px-4 text-foreground">Text immediately wrapped in <code>&quot;&quot;</code> or formatted as block-indent</td>
        <td class="py-3 px-4 text-muted-foreground">No quotation marks added; text presented as student&apos;s original voice</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Citation Dynamics</td>
        <td class="py-3 px-4 text-foreground">Parenthetical <code>(Author 45)</code> or footnote typed within 15 seconds</td>
        <td class="py-3 px-4 text-muted-foreground">No citation typed; or a fake/hallucinated citation pasted wholesale</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Downstream Editing</td>
        <td class="py-3 px-4 text-foreground">Student re-reads passage, pauses to reflect, and drafts original analysis</td>
        <td class="py-3 px-4 text-muted-foreground">Rapid deletion of AI preambles (<em>&quot;Certainly!&quot;</em>) and synonym swapping</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Typing Cadence</td>
        <td class="py-3 px-4 text-foreground">Organic composing rhythm: pauses between sentences, natural backspaces</td>
        <td class="py-3 px-4 text-muted-foreground">Mechanical typing cadence or immediate secondary block paste</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>The Behavioral Signature of Legitimate Quoting</h4>
<p>
  In authentic academic drafting, the paste event is preceded or immediately followed by structural scaffolding:
</p>
<ul>
  <li>The student positions the cursor at the end of an introductory phrase (<em>&quot;In his seminal study on urban development, Lewis Mumford observes that...&quot;</em>).</li>
  <li>The clipboard payload is inserted.</li>
  <li>Within 1.5 to 10 seconds, the student inputs opening and closing quotation marks, adjusts trailing punctuation, and types an exact parenthetical citation (<code>(Mumford, 1961, p. 114)</code>).</li>
  <li>The student initiates an extended <strong>Cognitive Planning Pause</strong> (averaging 15 to 45 seconds) as they re-read the quoted passage and formulate their original analysis.</li>
  <li>Organic typing resumes at normal compositional speeds (25–45 WPM) with natural <strong>Inter-Key Intervals</strong> and standard revision backspaces.</li>
</ul>

<h4>The Behavioral Signature of Generative AI Ingestion</h4>
<p>
  When a student pastes unapproved LLM output to masquerade as their own writing, the post-paste dynamics diverge dramatically:
</p>
<ul>
  <li><strong>The Structural Void:</strong> The 400-word block is dropped directly into the document canvas with no introductory framing or quotation marks. The text contains full topic sentences, evidentiary claims, and conclusions designed to replace the student&apos;s voice.</li>
  <li><strong>Preamble Stripping:</strong> If the raw paste contained conversational AI artifacts (e.g., <em>&quot;Certainly! Here is a three-paragraph analysis of Hamlet&apos;s soliloquy...&quot;</em>), the telemetry captures an immediate high-speed highlight-and-delete action within the first 3 to 8 seconds.</li>
  <li><strong>Surface Mutation / Evasion Editing:</strong> Rather than pausing to formulate analytical responses, the student engages in high-frequency, localized word substitutions (swapping <em>&quot;tapestry&quot;</em> for <em>&quot;complex framework&quot;</em>, or replacing complex vocabulary using right-click thesaurus tools) without altering the macro-structural logic of the paragraph.</li>
  <li><strong>Zero Downstream Analytical Synthesis:</strong> No subsequent organic paragraph is drafted to interpret the pasted text, because the pasted text <em>is</em> the entire section.</li>
</ul>

<h3>3. Pre-Paste and Post-Paste Drafting Telemetry (IKI &amp; Burstiness)</h3>

<p>
  Writing is an iterative, cognitively demanding task characterized by distinctive physical rhythms. Keystroke telemetry measures these rhythms through <strong>Inter-Key Intervals (IKI)</strong>—the precise time elapsed in milliseconds between consecutive keypress events (<em>t<sub>k</sub> - t<sub>k-1</sub></em>).
</p>

<!-- IKI Density Profiles Card -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4 text-center">Inter-Key Interval (IKI) Density Profiles</div>
  
  <div class="space-y-4 text-xs font-mono">
    <!-- Profile 1 -->
    <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
      <div class="flex items-center justify-between text-teal-300 font-bold mb-2">
        <span>[ PROFILE 1: AUTHENTIC ORGANIC COMPOSITION ]</span>
        <span class="text-emerald-400 font-sans text-[11px]">High Variance &amp; Cognitive Pauses</span>
      </div>
      <p class="text-slate-300 font-sans text-xs mb-2">
        Burst of 6–10 words (180ms IKI) &rarr; <strong>Clause Pause (1,200ms)</strong> &rarr; Burst of 4 words &rarr; <strong>Sentence Boundary Pause (3,800ms)</strong> &rarr; 3 backspaces.
      </p>
      <div class="text-[11px] text-slate-400">
        <em>Signal: Natural human cognition formulating novel semantic ideas in real time.</em>
      </div>
    </div>

    <!-- Profile 2 -->
    <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
      <div class="flex items-center justify-between text-rose-300 font-bold mb-2">
        <span>[ PROFILE 2: UNMODIFIED AI PASTE ]</span>
        <span class="text-rose-400 font-sans text-[11px]">Instant Insertion (0ms IKI)</span>
      </div>
      <p class="text-slate-300 font-sans text-xs mb-2">
        Instantaneous insertion of 2,400 characters (0ms delta) &rarr; 120-second complete idle &rarr; Next 1,800 character paste.
      </p>
      <div class="text-[11px] text-slate-400">
        <em>Signal: External document ingestion with zero active keyboard synthesis.</em>
      </div>
    </div>

    <!-- Profile 3 -->
    <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
      <div class="flex items-center justify-between text-amber-300 font-bold mb-2">
        <span>[ PROFILE 3: MANUAL TRANSCRIPTION / SECOND-SCREEN RETYPING ]</span>
        <span class="text-amber-400 font-sans text-[11px]">Metronomic Cadence</span>
      </div>
      <p class="text-slate-300 font-sans text-xs mb-2">
        Uniform, rhythmic typing (flat 190–220ms IKI across 500 words), zero sentence-planning pauses (&gt;2s), &lt;1% backspaces.
      </p>
      <div class="text-[11px] text-slate-400">
        <em>Signal: Visual reading and manual transcription from a phone or second monitor.</em>
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Checkmark Plagiarism&apos;s Patent-Pending Essay Playback™ Suite</h2>

<p>
  To translate complex telemetry data into clear, defensible, and actionable insights for educators, Checkmark Plagiarism engineered <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold"><strong>Essay Playback™</strong></a>. Designed around the core philosophy <strong>&quot;Stop guessing, start trusting,&quot;</strong> Essay Playback transforms document history into an interactive, pedagogical forensic suite.
</p>

<!-- Essay Playback UI Interactive Mockup -->
<div class="my-8 rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
  <!-- Controls Bar -->
  <div class="p-4 bg-slate-900 text-slate-100 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-1.5">
        <button class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300">◀◀</button>
        <button class="px-3 py-1 rounded bg-teal-600 text-white font-bold text-xs flex items-center gap-1">▶ Play</button>
        <button class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300">▶▶</button>
      </div>
      <div class="flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded border border-slate-700 text-[11px]">
        <span class="text-slate-400">Speed:</span>
        <span class="text-teal-400 font-bold">1x</span>
        <span class="text-slate-400">2x</span>
        <span class="text-slate-400">4x</span>
        <span class="text-slate-400">8x</span>
      </div>
    </div>
    <div class="flex items-center gap-3 text-xs">
      <span class="font-mono text-slate-400">Timeline: <strong class="text-white">00:14:22</strong> / 00:48:10</span>
      <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
        Status: Valid Source Integration
      </span>
    </div>
  </div>

  <!-- Timeline Track Scrubber -->
  <div class="px-6 py-4 bg-slate-950 border-b border-slate-800">
    <div class="relative w-full h-3 bg-slate-800 rounded-full my-2">
      <!-- Progress Fill -->
      <div class="absolute left-0 top-0 h-3 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full" style="width: 30%;"></div>
      <!-- Milestone 1: Organic -->
      <div class="absolute left-[10%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow"></div>
      <!-- Milestone 2: Paste -->
      <div class="absolute left-[30%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-sky-500 border-2 border-white shadow flex items-center justify-center text-[9px] font-bold text-white">📋</div>
      <!-- Milestone 3: Citation -->
      <div class="absolute left-[34%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-teal-400 shadow"></div>
      <!-- Milestone 4: Revision -->
      <div class="absolute left-[65%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow"></div>
      <!-- Milestone 5: Submission -->
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-400"></div>
    </div>
    <div class="flex justify-between text-[11px] text-slate-400 font-medium pt-1">
      <span class="text-emerald-400 font-semibold">00:00 [ORGANIC]</span>
      <span class="text-sky-400 font-semibold">14:22 [EXT_PASTE: Doc 4]</span>
      <span class="text-teal-400 font-semibold">14:25 [CITATION]</span>
      <span class="text-purple-400 font-semibold">32:10 [REVISION]</span>
      <span class="text-emerald-400 font-semibold">48:10 [SUBMITTED]</span>
    </div>
  </div>

  <!-- Replay Canvas & Paste Buffer Split -->
  <div class="p-6 bg-card">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Left: Document Replay Canvas -->
      <div class="rounded-xl border border-border bg-muted/20 p-4">
        <div class="flex items-center justify-between pb-2 mb-3 border-b border-border text-xs">
          <span class="font-bold text-foreground uppercase tracking-wide">Document Replay Canvas (T=14:22)</span>
          <span class="px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-sky-300 font-mono text-[10px]">Paragraph 4</span>
        </div>
        <p class="text-xs text-foreground leading-relaxed font-serif mb-3">
          In his analysis of late nineteenth-century industrial power, Andrew Carnegie famously asserted that:
        </p>
        <div class="p-3 rounded-lg bg-sky-500/10 border-l-4 border-sky-500 my-2 text-xs font-serif text-foreground">
          &quot;The man who dies rich dies disgraced. Such, in my opinion, is the true Gospel of Wealth, of which obedience is destined to bring peace on earth and goodwill to men.&quot;
        </div>
        <p class="text-xs text-foreground leading-relaxed font-serif">
          <span class="font-semibold text-teal-600 dark:text-teal-400">(Carnegie, 1889, p. 653).</span> This philosophy served not only as a moral defense of extreme capital accumulation, but also as a critique of unspent dynastic estates...
        </p>
      </div>

      <!-- Right: Side-by-Side Paste Inspector & Multi-Factor Triad -->
      <div class="space-y-4">
        <div class="rounded-xl border border-sky-500/30 bg-sky-500/5 p-4">
          <div class="flex items-center justify-between pb-2 mb-2 border-b border-sky-500/20 text-xs">
            <span class="font-bold text-sky-700 dark:text-sky-300 uppercase">Raw Clipboard Payload</span>
            <span class="text-[10px] font-mono text-muted-foreground">MIME: text/html</span>
          </div>
          <p class="text-xs text-muted-foreground font-mono leading-relaxed">
            &quot;The man who dies rich dies disgraced. Such, in my opinion, is the true Gospel of Wealth...&quot;
          </p>
          <div class="mt-2 pt-2 border-t border-sky-500/20 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Payload Length: <strong>412 characters</strong></span>
            <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Matched: JSTOR / Carnegie (1889)</span>
          </div>
        </div>

        <div class="rounded-xl border border-border bg-card p-4">
          <div class="text-xs font-bold uppercase tracking-wider text-foreground mb-2">Multi-Factor Integrity Triad</div>
          <div class="grid grid-cols-3 gap-2 text-center text-xs">
            <div class="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div class="font-bold text-emerald-600 dark:text-emerald-400">2% AI</div>
              <div class="text-[10px] text-muted-foreground">Passage Score</div>
            </div>
            <div class="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20">
              <div class="font-bold text-sky-600 dark:text-sky-400">100% Quote</div>
              <div class="text-[10px] text-muted-foreground">Source Match</div>
            </div>
            <div class="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
              <div class="font-bold text-teal-600 dark:text-teal-400">VALID</div>
              <div class="text-[10px] text-muted-foreground">MLA Citation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<h3>1. The 1x to 8x Scrubbable Video Timeline Player</h3>
<p>
  Rather than forcing teachers to click through dozens of disconnected static versions, Essay Playback renders the entire drafting session as an interactive video stream. 
</p>
<ul>
  <li><strong>Variable Speed Playback (1x, 2x, 4x, 8x):</strong> Teachers can scrub through a 90-minute writing session in under three minutes.</li>
  <li><strong>Automated Event Tagging:</strong> The timeline scrubber automatically highlights key compositional milestones with color-coded badges:
    <ul>
      <li><code>[ORGANIC_DRAFTING]</code> (Green): Normal human composing bursts, natural pauses, and continuous revision.</li>
      <li><code>[EXTERNAL_SOURCE_PASTE]</code> (Blue): External clipboard insertion accompanied by immediate citation or quotation marks.</li>
      <li><code>[UNVERIFIED_BLOCK_PASTE]</code> (Amber): Large external clipboard insertion lacking immediate citation or framing.</li>
      <li><code>[SYNTHETIC_PATTERN_PASTE]</code> (Red): High-volume paste matching known LLM structural outputs or exhibiting preamble deletion.</li>
      <li><code>[RAPID_REVISION]</code> (Purple): High-density backspacing, restructuring, and paragraph relocation.</li>
    </ul>
  </li>
</ul>

<h3>2. The Side-by-Side Paste Buffer Inspector</h3>
<p>
  The <strong>Side-by-Side Paste Buffer Inspector</strong> permanently solves the &quot;paste-and-mutate&quot; evasion problem while protecting honest students who bring in outside research:
</p>
<ul>
  <li><strong>Immutable Clipboard Preservation:</strong> Checkmark captures and permanently stores 100% of the raw text present in the system clipboard at the moment of insertion.</li>
  <li><strong>Comparative Diff View:</strong> The inspector places the raw clipboard payload directly alongside the student&apos;s final submitted text, highlighting all downstream deletions, synonym substitutions, and structural modifications.</li>
  <li><strong>Direct Jump-to-Event:</strong> Clicking any paste card in the sidebar instantly jumps the playback timeline to the exact millisecond the text was inserted, allowing the teacher to watch how the student interacted with the material in real time.</li>
</ul>

<h3>3. The Multi-Factor Verification Triad</h3>
<p>
  Checkmark Plagiarism never relies on a single metric to make high-stakes academic determinations. Instead, it triangulates evidence across three proprietary pillars:
</p>

<!-- Multi-Factor Triad 3-Column Layout -->
<div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Pillar 1 -->
  <div class="rounded-2xl bg-card border-2 border-teal-500/40 bg-teal-500/5 p-5 flex flex-col justify-between shadow-md">
    <div>
      <div class="flex items-center justify-between mb-3">
        <div class="w-8 h-8 rounded-lg bg-teal-500 text-white font-bold text-sm flex items-center justify-center">1</div>
        <span class="px-2 py-0.5 rounded bg-teal-500/20 text-teal-700 dark:text-teal-300 text-[10px] font-bold uppercase">Flagship</span>
      </div>
      <h3 class="text-base font-bold text-foreground mb-2 pt-0">Essay Playback™</h3>
      <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
        <li>Microsecond keystroke replay (1x–8x)</li>
        <li>DOM clipboard payload preservation</li>
        <li>Cognitive friction &amp; pause telemetry</li>
        <li>Manual transcription detection</li>
      </ul>
    </div>
    <div class="mt-4 pt-3 border-t border-teal-500/20 text-[11px] text-teal-700 dark:text-teal-300 font-semibold">
      <a href="/services/writing-playback" class="hover:underline">Explore Essay Playback™ &rarr;</a>
    </div>
  </div>

  <!-- Pillar 2 -->
  <div class="rounded-2xl bg-card border border-border p-5 flex flex-col justify-between shadow-sm">
    <div>
      <div class="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-sm flex items-center justify-center mb-3">2</div>
      <h3 class="text-base font-bold text-foreground mb-2 pt-0">Passage-Level AI Detection</h3>
      <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
        <li>Calibrated confidence sliders</li>
        <li>In-text granular underlining</li>
        <li>Strict &lt;150-word N/A guardrail</li>
        <li>Private educator-only flags</li>
      </ul>
    </div>
    <div class="mt-4 pt-3 border-t border-border text-[11px] text-teal-600 dark:text-teal-400 font-semibold">
      <a href="/services/ai-detection" class="hover:underline">Explore AI Detection &rarr;</a>
    </div>
  </div>

  <!-- Pillar 3 -->
  <div class="rounded-2xl bg-card border border-border p-5 flex flex-col justify-between shadow-sm">
    <div>
      <div class="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-sm flex items-center justify-center mb-3">3</div>
      <h3 class="text-base font-bold text-foreground mb-2 pt-0">Live Plagiarism Matching</h3>
      <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
        <li>Billions of live web &amp; journal sources</li>
        <li>Side-by-side verbatim quote viewer</li>
        <li>Uncited source error separation</li>
        <li>Peer-to-peer cohort matching</li>
      </ul>
    </div>
    <div class="mt-4 pt-3 border-t border-border text-[11px] text-teal-600 dark:text-teal-400 font-semibold">
      <a href="/services/plagiarism-detection" class="hover:underline">Explore Plagiarism Matcher &rarr;</a>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Real-World Case Studies: From Ambiguity to Defensible Resolution</h2>

<p>
  The following case studies illustrate how Checkmark&apos;s keystroke replay and clipboard telemetry resolve real-world academic integrity dilemmas.
</p>

<!-- Case Study 1 -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase">Case Study 1</span>
      <h3 class="text-base font-bold text-foreground m-0 p-0">Secondary AP US History (APUSH) DBQ Source Integration</h3>
    </div>
    <span class="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
      Outcome: Exonerated / Valid Citation
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-xs">
    <div class="p-3 rounded-xl bg-muted/40 border border-border">
      <strong class="text-foreground block mb-1">Student &amp; Task</strong>
      <span class="text-muted-foreground">Marcus T. (11th Grade APUSH) — 60-Minute Timed DBQ Essay on Gilded Age Labor Conflicts.</span>
    </div>
    <div class="p-3 rounded-xl bg-muted/40 border border-border">
      <strong class="text-foreground block mb-1">Trigger Event</strong>
      <span class="text-muted-foreground">Instantaneous 320-word block paste at minute 22:15.</span>
    </div>
    <div class="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
      <strong class="text-rose-700 dark:text-rose-300 block mb-1">Legacy Detector Score</strong>
      <span class="text-rose-600 dark:text-rose-400">62% AI / High Risk (Triggered by formal 19th-century prose).</span>
    </div>
  </div>

  <div class="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono space-y-2 mb-4">
    <div class="text-teal-400 font-bold font-sans">// Essay Playback™ Forensic Timeline (Marcus T.)</div>
    <div><span class="text-slate-400">[21:10]</span> Marcus types lead-in: <em>&quot;The escalating tensions reached a flashpoint during the Pullman Strike, as Eugene Debs articulated:&quot;</em></div>
    <div><span class="text-slate-400">[21:48]</span> 27-second pause (Switches to DBQ Source Packet PDF tab).</div>
    <div><span class="text-sky-400">[22:15]</span> <strong>[EXTERNAL_SOURCE_PASTE]</strong> 320 characters inserted from Document 4 (Debs&apos; 1894 Statement).</div>
    <div><span class="text-slate-400">[22:17]</span> Marcus immediately types closing quotation mark <code>&quot;</code> and citation <code>(Doc 4).</code></div>
    <div><span class="text-slate-400">[22:35]</span> 38-second reflective cognitive pause.</div>
    <div><span class="text-emerald-400">[23:13]</span> <strong>[ORGANIC_DRAFTING]</strong> Marcus resumes typing historical analysis at 38 WPM with natural IKI variance.</div>
  </div>

  <div class="text-xs text-foreground space-y-2">
    <p><strong>The Defensible Resolution:</strong> The Paste Buffer Inspector confirmed that the raw payload was a verbatim match for Document 4 from the College Board packet. Cognitive friction metrics showed complete introductory framing, immediate citation, and 25 minutes of subsequent analytical synthesis. The teacher dismissed the false AI flag and awarded full points.</p>
  </div>
</div>

<!-- Case Study 2 -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase">Case Study 2</span>
      <h3 class="text-base font-bold text-foreground m-0 p-0">First-Year College Composition Literature Review</h3>
    </div>
    <span class="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
      Outcome: Validated Offline Notes Workflow
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-xs">
    <div class="p-3 rounded-xl bg-muted/40 border border-border">
      <strong class="text-foreground block mb-1">Student &amp; Task</strong>
      <span class="text-muted-foreground">Elena R. (Freshman Composition) — 1,500-Word Synthesis Review on Cognitive Psychology.</span>
    </div>
    <div class="p-3 rounded-xl bg-muted/40 border border-border">
      <strong class="text-foreground block mb-1">Trigger Event</strong>
      <span class="text-muted-foreground">550-word block pasted in first 45s; apparent total in-app time of only 12 minutes.</span>
    </div>
    <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
      <strong class="text-amber-700 dark:text-amber-300 block mb-1">Legacy Detector Score</strong>
      <span class="text-amber-600 dark:text-amber-400">Inconclusive / Flagged for Low In-App Drafting Duration.</span>
    </div>
  </div>

  <div class="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono space-y-2 mb-4">
    <div class="text-teal-400 font-bold font-sans">// Essay Playback™ Forensic Timeline (Elena R.)</div>
    <div><span class="text-sky-400">[00:42]</span> <strong>[EXTERNAL_SOURCE_PASTE]</strong> 550 words inserted into blank editor canvas.</div>
    <div><span class="text-slate-400">[00:45]</span> Paste Buffer Inspector displays payload: Bulleted notes, shorthand, and JSTOR DOIs from Obsidian vault.</div>
    <div><span class="text-purple-400">[01:15]</span> Elena cuts Bullet 1 and expands it into a formal, multi-sentence academic topic paragraph.</div>
    <div><span class="text-emerald-400">[01:15–11:45]</span> Active Downstream Drafting: 10.5 minutes of continuous writing expanding fragments into cohesive prose with high IKI variance.</div>
  </div>

  <div class="text-xs text-foreground space-y-2">
    <p><strong>The Defensible Resolution:</strong> The Paste Buffer Inspector proved that Elena had pasted raw research shorthand, not finished prose. Keystroke telemetry recorded vigorous in-app text expansion, and plagiarism scanning verified all cited psychological DOIs. Authorship was confirmed authentic without punitive confrontation.</p>
  </div>
</div>

<!-- Case Study 3 -->
<div class="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-border">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase">Case Study 3</span>
      <h3 class="text-base font-bold text-foreground m-0 p-0">The &quot;Trojan Horse&quot; Fabricated Source Quote</h3>
    </div>
    <span class="px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold">
      Outcome: Defensible Proof of AI Fabrication
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-xs">
    <div class="p-3 rounded-xl bg-muted/40 border border-border">
      <strong class="text-foreground block mb-1">Student &amp; Task</strong>
      <span class="text-muted-foreground">Jordan K. (12th Grade AP Lit) — 2,000-Word Critical Essay on <em>The Great Gatsby</em>.</span>
    </div>
    <div class="p-3 rounded-xl bg-muted/40 border border-border">
      <strong class="text-foreground block mb-1">Trigger Event</strong>
      <span class="text-muted-foreground">450-word block quote from a purported 1984 critic, &quot;Dr. Arthur Vance.&quot;</span>
    </div>
    <div class="p-3 rounded-xl bg-slate-500/10 border border-slate-500/20">
      <strong class="text-foreground block mb-1">Legacy Detector Score</strong>
      <span class="text-muted-foreground">18% AI (Bypassed due to quotation marks and formatting).</span>
    </div>
  </div>

  <div class="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono space-y-2 mb-4">
    <div class="text-teal-400 font-bold font-sans">// Essay Playback™ Forensic Timeline (Jordan K.)</div>
    <div><span class="text-rose-400">[18:02]</span> <strong>[SYNTHETIC_PATTERN_PASTE]</strong> 450 words pasted into editor canvas.</div>
    <div><span class="text-slate-400">[18:04]</span> Paste Buffer Inspector captures raw string: <em>&quot;Certainly! Here is an academic critique that sounds like a 1980s scholar: &apos;The vocal acoustics...&apos; Cite as Dr. Arthur Vance (1984).&quot;</em></div>
    <div><span class="text-rose-400">[18:08]</span> Jordan highlights and deletes the conversational AI preamble (<em>&quot;Certainly! Here is...&quot;</em>) and retains the quote.</div>
    <div><span class="text-slate-400">[18:20]</span> Live Plagiarism Scan: 0% match across 50B web pages (Fabricated / Hallucinated citation).</div>
  </div>

  <div class="text-xs text-foreground space-y-2">
    <p><strong>The Defensible Resolution:</strong> Checkmark preserved the raw AI preamble and prompt instructions in the Paste Buffer Inspector. The teacher conducted a supportive, non-adversarial conference, shared the playback on screen, and guided Jordan through an ethical research revision assignment.</p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Detailed Comparison Matrix: Forensic Capabilities Across Tools</h2>

<p>
  To assist school district technology directors, curriculum coordinators, and academic integrity committees in evaluating software suites, the following matrix compares the core technical capabilities of leading writing and integrity tools:
</p>

<!-- Full Capabilities Matrix -->
<div class="my-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
  <table class="w-full text-left text-sm border-collapse">
    <thead>
      <tr class="bg-muted/60 border-b border-border">
        <th class="py-3 px-4 font-semibold text-foreground">Forensic / Pedagogical Capability</th>
        <th class="py-3 px-4 font-semibold text-muted-foreground">Standard Cloud Suites (Google Docs / Word)</th>
        <th class="py-3 px-4 font-semibold text-muted-foreground">Standalone AI Detectors (Turnitin / GPTZero)</th>
        <th class="py-3 px-4 font-semibold text-teal-600 dark:text-teal-400">Checkmark Plagiarism (Essay Playback™)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-xs leading-relaxed">
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Telemetry Granularity</td>
        <td class="py-3 px-4 text-muted-foreground">Coarse periodic cloud syncs (30s–15m intervals)</td>
        <td class="py-3 px-4 text-muted-foreground">Zero process data; static snapshot analysis only</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">Microsecond-accurate keystroke &amp; event telemetry</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Raw Clipboard Payload Capture</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Lost if edited before next revision commit</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Completely blind to clipboard operations</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ 100% Immutable capture of raw pasted strings</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Paste-and-Mutate Evasion Defense</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Displays only net diff; original payload lost</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Paraphrasing lowers static AI score</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Side-by-Side Paste Buffer Inspector catches raw input</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Cognitive Friction Tracking</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ No typing velocity or cadence tracking</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ No temporal data available</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Tracks T+0 to T+120 citation &amp; framing behavior</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Inter-Key Interval (IKI) Analysis</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Cannot record microsecond keypress intervals</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ No mechanical transcription detection</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Detects steady retyping vs. organic thought pauses</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Visual Process Verification</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Stepped revision diffs; cumbersome to scrub</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ No visual playback interface</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Fluid 1x–8x scrubbable video timeline player</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Plagiarism &amp; AI Triangulation</td>
        <td class="py-3 px-4 text-muted-foreground">❌ Requires separate third-party plugins</td>
        <td class="py-3 px-4 text-muted-foreground">❌ Isolated percentage score; no process context</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Unified triad: Playback + Live Sources + Passage AI</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Short-Text Guardrails (&lt;150 words)</td>
        <td class="py-3 px-4 text-muted-foreground">❌ N/A (General word processing)</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ High false-positive rates on short quotes</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Strict N/A guardrail prevents ungrounded guessing</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Student Exoneration Proof</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Inconclusive jump logs create suspicion</td>
        <td class="py-3 px-4 text-rose-500 font-medium">❌ Probabilistic scores cannot prove innocence</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Keystroke replay provides empirical proof of drafting</td>
      </tr>
      <tr class="hover:bg-muted/20 transition-colors">
        <td class="py-3 px-4 font-medium text-foreground">Native LMS &amp; Gradebook Sync</td>
        <td class="py-3 px-4 text-muted-foreground">❌ Requires file sharing or external permissions</td>
        <td class="py-3 px-4 text-amber-500 font-medium">⚠️ Basic LTI link; separate report tab</td>
        <td class="py-3 px-4 text-teal-700 dark:text-teal-300 font-semibold">✅ Embedded in Canvas/Buzz with direct rubric sync</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>The 4-Phase Restorative Paste Verification Protocol</h2>

<p>
  When an educator identifies a significant clipboard paste event in a student submission, Checkmark recommends following this four-phase pedagogical protocol to ensure fair, evidence-based, and restorative outcomes:
</p>

<!-- 4-Phase Restorative Workflow -->
<div class="my-8 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="text-xs font-bold uppercase tracking-wider text-teal-400 mb-6 text-center">The 4-Phase Restorative Paste Verification Protocol</div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Phase 1 -->
    <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
      <div class="flex items-center gap-2 mb-2">
        <span class="w-6 h-6 rounded-full bg-teal-500 text-white font-bold text-xs flex items-center justify-center">1</span>
        <h3 class="text-xs font-bold uppercase text-teal-300 m-0 pt-0">Phase 1: Telemetry Triage</h3>
      </div>
      <ul class="space-y-1.5 text-xs text-slate-300 list-disc pl-4">
        <li>Open Checkmark report within LMS SpeedGrader / Assignment view.</li>
        <li>Identify paste location, timestamp, and character count on timeline.</li>
        <li>Check passage-level AI confidence sliders and source matching badges.</li>
      </ul>
    </div>

    <!-- Phase 2 -->
    <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
      <div class="flex items-center gap-2 mb-2">
        <span class="w-6 h-6 rounded-full bg-teal-500 text-white font-bold text-xs flex items-center justify-center">2</span>
        <h3 class="text-xs font-bold uppercase text-teal-300 m-0 pt-0">Phase 2: Payload Inspection</h3>
      </div>
      <ul class="space-y-1.5 text-xs text-slate-300 list-disc pl-4">
        <li>Open Side-by-Side Paste Buffer Inspector.</li>
        <li>Inspect raw clipboard payload for AI preambles, formatting artifacts, or quotes.</li>
        <li>Cross-reference against Plagiarism Source matching links.</li>
      </ul>
    </div>

    <!-- Phase 3 -->
    <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
      <div class="flex items-center gap-2 mb-2">
        <span class="w-6 h-6 rounded-full bg-teal-500 text-white font-bold text-xs flex items-center justify-center">3</span>
        <h3 class="text-xs font-bold uppercase text-teal-300 m-0 pt-0">Phase 3: Cognitive Friction Audit</h3>
      </div>
      <ul class="space-y-1.5 text-xs text-slate-300 list-disc pl-4">
        <li>Evaluate the $T+0$ to $T+120$ second post-paste drafting window.</li>
        <li>Check for quotation marks, lead-in framing, and analytical prose.</li>
        <li>Review IKI cadence for authentic cognitive pauses vs. mechanical retyping.</li>
      </ul>
    </div>

    <!-- Phase 4 -->
    <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
      <div class="flex items-center gap-2 mb-2">
        <span class="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center">4</span>
        <h3 class="text-xs font-bold uppercase text-emerald-300 m-0 pt-0">Phase 4: Restorative Conference</h3>
      </div>
      <ul class="space-y-1.5 text-xs text-slate-300 list-disc pl-4">
        <li>If legitimate: Validate research workflow and coach proper citation formatting.</li>
        <li>If unauthorized: Screen-share Essay Playback™ collaboratively.</li>
        <li>Assign targeted revision or structured rewrite rather than punitive zero.</li>
      </ul>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Syllabus Policy Templates &amp; Institutional Guidelines</h2>

<p>
  To establish clear expectations and foster transparent research habits, school districts and higher education departments should incorporate explicit clipboard and drafting guidelines into their course syllabi.
</p>

<!-- Syllabus Policy Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-border">
    <h3 class="text-sm font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 m-0 pt-0">Model Syllabus Policy: Transparent Research &amp; Drafting Integrity</h3>
    <span class="px-2.5 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold">Copyable Policy</span>
  </div>
  <div class="space-y-3 text-xs leading-relaxed text-foreground">
    <p class="font-semibold text-foreground">Academic Integrity, Research Workflows, and Essay Playback™</p>
    <p class="text-muted-foreground">
      In this course, we view writing as a process of critical thinking, synthesis, and voice development. You are actively encouraged to conduct rigorous research, consult primary and secondary sources, and maintain detailed research notes.
    </p>
    <ol class="list-decimal pl-5 space-y-2 text-muted-foreground">
      <li>
        <strong class="text-foreground">Permissible vs. Impermissible Copy-Pasting:</strong> You are fully permitted to copy and paste direct quotations, data points, and bibliographic citations from research sources into your draft, provided they are immediately enclosed in quotation marks and properly cited according to MLA/APA guidelines. Pasting text generated by unapproved AI tools, text written by peers, or paraphrased uncredited writing constitutes academic misconduct.
      </li>
      <li>
        <strong class="text-foreground">Transparent Writing Telemetry:</strong> This course utilizes <strong>Checkmark Plagiarism and Essay Playback™</strong> within our LMS. Checkmark records keystroke dynamics and writing process history to protect your authentic work, verify legitimate source integration, and prevent false accusations.
      </li>
      <li>
        <strong class="text-foreground">The &quot;Stop Guessing, Start Trusting&quot; Guarantee:</strong> Writing telemetry exists to protect you. If a generic AI detector ever flags your authentic writing, your Checkmark keystroke playback serves as undeniable empirical proof of your human authorship.
      </li>
    </ol>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Frequently Asked Questions (FAQs)</h2>

<div class="my-8 space-y-4">
  <!-- FAQ 1 -->
  <div class="rounded-2xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-2 pt-0">1. What if a student writes their entire essay in an external tool (like Microsoft Word or offline Google Docs) and pastes the completed paper into the LMS at once?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      When a student pastes an entire essay at once, Checkmark&apos;s Essay Playback flags the submission as a <strong>Single-Session External Ingestion Event</strong>. Rather than immediately penalizing the student, Checkmark provides a clear verification pathway: the teacher can inspect the Paste Buffer Inspector to examine the raw payload, the student can connect their external document (via Checkmark&apos;s Google Docs or Microsoft Word integration) to import the underlying keystroke telemetry, or the teacher can conduct a brief, 3-minute oral conference using Checkmark&apos;s AI-generated rubric questions.
    </p>
  </div>

  <!-- FAQ 2 -->
  <div class="rounded-2xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-2 pt-0">2. Can Essay Playback tell the difference between a student pasting from their own rough notes vs. pasting from ChatGPT?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Yes. Checkmark distinguishes student notes from synthetic LLM generation through three independent layers: the <strong>Paste Buffer Inspector</strong> captures informal shorthand and bullet points typical of notes vs. finished synthetic paragraphs; <strong>Subsequent Drafting Telemetry</strong> records substantial active drafting as students expand note fragments into cohesive sentences; and <strong>Passage-Level AI Detection</strong> evaluates underlying linguistic perplexity and burstiness.
    </p>
  </div>

  <!-- FAQ 3 -->
  <div class="rounded-2xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-2 pt-0">3. How does keystroke replay handle students with accessibility accommodations, such as speech-to-text dictation or screen readers?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Checkmark is engineered to be fully inclusive. Speech-to-Text (STT) voice dictation inserts text in conversational phrase bursts (3 to 10 words per vocalization) accompanied by distinct acoustic pause intervals (800ms–2,500ms). Checkmark&apos;s telemetry engine recognizes these natural acoustic signatures and categorizes them as <code>[ACCESSIBLE_DICTATION_BURST]</code> rather than bulk external pastes. Screen readers and assistive keyboards are similarly accommodated without triggering anomaly flags.
    </p>
  </div>

  <!-- FAQ 4 -->
  <div class="rounded-2xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-2 pt-0">4. Does clipboard tracking violate student data privacy under FERPA or COPPA?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      No. Checkmark Plagiarism is fully compliant with FERPA, COPPA, and state student privacy laws. Checkmark <strong>never</strong> uses student submissions or telemetry logs to train commercial AI models. Telemetry tracking is active <strong>strictly within the assignment editor window</strong>—the system has zero access to external browser tabs, system applications, personal files, or general clipboard activity outside the active assignment canvas.
    </p>
  </div>

  <!-- FAQ 5 -->
  <div class="rounded-2xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-2 pt-0">5. How does cognitive friction analysis account for exceptionally fast touch-typists who rarely pause?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Cognitive friction analysis does not measure gross typing speed (WPM); it measures <strong>cadence variance and structural behavior</strong>. Even a competitive typist typing at 110 WPM exhibits natural human cognitive rhythms: typing accelerates during familiar word stems, decelerates during complex conceptual vocabulary, and pauses at clause and sentence boundaries. Furthermore, human writers demonstrate continuous typographical backspaces. Even the fastest typist cannot produce 400 words instantaneously (0ms) or type with the flat, metronomic cadence of machine transcription.
    </p>
  </div>

  <!-- FAQ 6 -->
  <div class="rounded-2xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-2 pt-0">6. What happens if a student runs pasted AI text through an &quot;AI Humanizer&quot; or paraphrasing tool like QuillBot?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Paraphrasers and &quot;AI humanizers&quot; attempt to evade static AI detectors by replacing words with uncommon synonyms. While this can sometimes disguise text from blunt static scanners, it is completely ineffective against Essay Playback™: the student must still copy the paraphrased text and paste it into the editor canvas. Checkmark captures the instantaneous paste event, archives the exact payload in the Paste Buffer Inspector, and highlights the absence of organic preceding drafting.
    </p>
  </div>

  <!-- FAQ 7 -->
  <div class="rounded-2xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-2 pt-0">7. How should an educator introduce Essay Playback to students at the beginning of the academic term?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Educators should frame Essay Playback transparently and supportively: explain that writing process tracking exists to protect honest students from false AI accusations and to provide an empirical portfolio of their hard work. Demonstrate the interface with a sample 30-second replay to demystify how the tool works, and clarify that quoting and citing research sources is fully permitted and encouraged.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Summary: Stop Guessing, Start Trusting</h2>

<p>
  When evaluating digital student writing, educators should never have to guess whether a 400-word paste block represents brilliant scholarship or unapproved automation. By replacing opaque probability percentages with <strong>microsecond keystroke replay, immutable clipboard payload preservation, and multi-factor integrity verification</strong>, Checkmark Plagiarism equips teachers, department chairs, and administrators with the transparent evidence they need to uphold academic standards while nurturing student growth.
</p>

<!-- CTA Box -->
<div class="my-8 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
  <div>
    <h3 class="text-lg font-bold text-white mb-1 pt-0">Ready to bring transparent writing forensics to your school?</h3>
    <p class="text-xs text-teal-100 mb-0">
      Experience patent-pending Essay Playback™, passage-level AI detection, and automated rubric grading in Canvas LMS, Buzz, or Google Classroom.
    </p>
  </div>
  <a 
    href="/services/writing-playback" 
    class="px-5 py-2.5 rounded-xl bg-white text-teal-800 font-bold text-xs hover:bg-teal-50 transition-colors shrink-0 shadow-md"
  >
    Explore Essay Playback™
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
      currentSlug="2026/8/how-can-keystroke-replay-distinguish-between-legitimate-copy-pasting-of-source-material-and-generative-ai"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
