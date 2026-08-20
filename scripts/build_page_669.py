# -*- coding: utf-8 -*-
import os, sys, re, gspread

slug = 'how-high-school-yearbook-advisers-can-audit-feature-profiles-and-senior-tributes-for-ai-generated-quotes'
target_dir = os.path.join('src', 'app', 'learning', '2026', '8', slug)
os.makedirs(target_dir, exist_ok=True)
target_file = os.path.join(target_dir, 'page.tsx')

header = """import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How High School Yearbook Advisers Can Audit Feature Profiles and Senior Tributes for AI-Generated Quotes | Checkmark Plagiarism",
  description: "A comprehensive guide for high school yearbook advisers and journalism educators to audit personality profiles, club featurettes, and senior tributes for AI-generated quotes using keystroke playback and writing telemetry.",
  keywords: [
    "high school yearbook adviser",
    "yearbook journalism",
    "AI-generated quotes",
    "senior tributes",
    "personality profiles",
    "JEA",
    "NSPA",
    "Essay Playback",
    "Checkmark Plagiarism",
    "keystroke dynamics",
    "plant deadlines",
    "ladder management",
    "caption writing",
    "journalistic integrity",
    "AP style"
  ],
  openGraph: {
    images: ["/images/services/report-source-quote.png"],
  },
};

export const meta = {
  title: "How High School Yearbook Advisers Can Audit Feature Profiles and Senior Tributes for AI-Generated Quotes | Checkmark Plagiarism",
  description: "A comprehensive guide for high school yearbook advisers and journalism educators to audit personality profiles, club featurettes, and senior tributes for AI-generated quotes using keystroke playback and writing telemetry.",
  "opengraph-image": "/images/services/report-source-quote.png",
  date: "08-20-2026",
  readTime: "~18 min read",
  category: "Journalism & Media",
  categories: ["Journalism & Media", "Detection", "Writing Process", "Teacher Guide", "Academic Integrity"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
"""

section1 = """<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-3">
    <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-600 text-white tracking-wide uppercase">
      Executive Summary for Yearbook Advisers &amp; Journalism Educators
    </span>
  </div>
  <p class="text-foreground font-medium leading-relaxed">
    High school yearbook production is a high-stakes, deadline-driven endeavor where student journalists manage hundreds of pages, tight publishing plant deadlines, and dense rosters of student profiles, athletic recaps, club featurettes, and senior tributes. When novice student journalists face unreturned messages, uncooperative peers, or looming submission cutoffs, the temptation to prompt Large Language Models (LLMs) to synthesize realistic quotes or &ldquo;polish&rdquo; peer statements into adult corporate rhetoric creates an acute ethical and legal crisis.
  </p>
  <p class="text-foreground font-medium leading-relaxed mt-3">
    Unlike digital school newspapers where retractions can be published instantly online, printed yearbooks represent permanent, unalterable historical records bound in ink and distributed to thousands of homes and school archives. Generic whole-document AI detectors fail yearbook staffs because their statistical probability scores routinely flag standardized Associated Press (AP) Style leads and concise 25-word photo captions while missing isolated, AI-synthesized quotes tucked inside genuine spreads. By combining primary asset triangulation (audio recordings and mobile transcripts), forensic voice analysis, and <strong>Checkmark Plagiarism&rsquo;s</strong> patent-pending <a href="/services/writing-process" class="text-primary font-semibold underline"><strong>Essay Playback™</strong></a> (1x&ndash;8x keystroke replay, audio transcription pause analysis, and external paste tracking), advisers can verify quote authenticity, protect honest student writers from false accusations, and preserve the journalistic integrity of the school&rsquo;s historical record.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> provides scholastic media advisers, yearbook instructors, and journalism programs with a specialized newsroom verification workbench, uniting <a href="/services/writing-process" class="text-primary font-semibold underline">keystroke process playback</a> with <a href="/services/plagiarism-detection" class="text-primary font-semibold underline">side-by-side source verification</a>, <a href="/services/ai-detection" class="text-primary font-semibold underline">passage-level AI writing detection</a>, <a href="/services/autograder" class="text-primary font-semibold underline">quote-anchored rubric autograding</a>, and direct integrations for <a href="/services/integrations/canvas-lms" class="text-primary font-semibold underline">Canvas LMS</a> and <a href="/services/integrations/google-classroom" class="text-primary font-semibold underline">Google Classroom</a>.</p>

<img src="/images/services/report-source-quote.png" alt="Checkmark Plagiarism Side-by-Side Source Verification Workbench with Quote Evidence Cards and Primary Asset Matching" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>1. The High School Yearbook Pressure Cooker: Ladder Deadlines, Feature Spreads, and Synthetic Quotes</h2>

<p>High school yearbook production operates under organizational, logistical, and ethical pressures that differ substantially from traditional academic essay writing. While a standard high school English Language Arts (ELA) class involves individual students writing essays for a single teacher&rsquo;s gradebook, a high school yearbook staff functions as a miniature commercial publishing house operating within a secondary school environment.</p>

<p>A single publication adviser&mdash;often balancing five periods of standard English or social studies alongside a co-curricular yearbook class&mdash;must guide a staff of 15 to 35 adolescent reporters, photographers, and section editors through the production of a 200- to 400-page hardbound volume. The book must document every athletic team, academic department, performing arts ensemble, student organization, and demographic cohort across a student body of 1,500 to 3,000 teenagers.</p>

<!-- The Yearbook Production Pressure Pipeline Diagram -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    THE HIGH SCHOOL YEARBOOK PRODUCTION PRESSURE PIPELINE
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    How commercial publishing constraints and reporting bottlenecks trigger synthetic quote infiltration
  </p>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
    <!-- Step 1: Ladder & Signature Deadlines -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-teal-500/30 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-wider mb-2">
          <span>📅 Signature Deadlines</span>
        </div>
        <ul class="text-xs text-slate-300 space-y-2 list-disc pl-4">
          <li><strong>Plant submission windows:</strong> 8-to-16 page signatures submitted directly to Jostens, Balfour, Walsworth, or Herff Jones.</li>
          <li><strong>Financial penalties:</strong> $1,000 to $3,000 plant penalty fees per missed submission cycle.</li>
          <li><strong>Hard distribution date:</strong> Books must ship before senior distribution week in May.</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700 text-[10px] text-teal-400 font-mono">
        ⚡ Inflexible Print Deadlines
      </div>
    </div>

    <!-- Step 2: Reporting Bottlenecks -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-amber-500/30 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
          <span>🚫 Sourcing Friction</span>
        </div>
        <ul class="text-xs text-slate-300 space-y-2 list-disc pl-4">
          <li><strong>Peer ghosting:</strong> Track captain or club president ignores 4 Instagram DMs and school emails.</li>
          <li><strong>Novice reporter intimidation:</strong> Shy sophomores fearing face-to-face cafeteria interviews.</li>
          <li><strong>Unusable replies:</strong> One-word or monosyllabic peer responses (&ldquo;It was cool, I guess&rdquo;).</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700 text-[10px] text-amber-400 font-mono">
        ⚠️ Layout Geometry Blocked
      </div>
    </div>

    <!-- Step 3: Generative AI Infiltration & Fallout -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-rose-500/30 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 text-xs font-bold text-rose-300 uppercase tracking-wider mb-2">
          <span>🚨 The AI Shortcut</span>
        </div>
        <ul class="text-xs text-slate-300 space-y-2 list-disc pl-4">
          <li><strong>Full fabrication:</strong> &ldquo;Write an inspirational senior tribute quote for a student council officer.&rdquo;</li>
          <li><strong>Synthetic polishing:</strong> Turning a 4-word spoken phrase into adult corporate rhetoric.</li>
          <li><strong>Severe print fallout:</strong> Permanent ink errors, libel exposure, and NSPA code violations.</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-700 text-[10px] text-rose-400 font-mono">
        🛑 Permanent Ink Liability
      </div>
    </div>
  </div>
</div>

<h3>1.1 The Operational Anatomy of Yearbook Deadlines</h3>

<p>Yearbook production is structured around the <em>ladder</em>&mdash;a detailed, page-by-page master blueprint dividing the volume into discrete <em>signatures</em> (typically 16-page press sheets) and <em>flats</em> (8-page sides). Publishing plants (such as Jostens, Walsworth, Herff Jones, and Balfour) enforce non-negotiable plant submission deadlines spanning from October through early April:</p>

<ol class="space-y-3 my-4">
  <li><strong>Plant Penalty Fees and Distribution Deadlines:</strong> If a high school staff misses a designated plant shipment deadline by even 24 hours, the publishing plant deprioritizes the job on the commercial press line. This can trigger steep financial penalties (often exceeding $1,000 to $3,000 per missed deadline) or delay the entire print run past the final senior distribution day in May, causing widespread community outrage.</li>
  <li><strong>Extreme Volume of Individual Source Touchpoints:</strong> A comprehensive yearbook must capture 70% to 85% of the total student body at least three times across its spreads. This requires student reporters to conduct hundreds of individual interviews across sports recaps, club featurettes, academic showcases, student life profiles, senior superlatives, and parent senior tribute ads.</li>
  <li><strong>Novice Staff Dynamics and Reporting Inexperience:</strong> In most American high schools, yearbook staffs are composed predominantly of sophomores and juniors taking their first journalism or media production elective. These students have rarely conducted formal, recorded journalistic interviews and often lack the social confidence to approach upperclassmen or school staff members in person.</li>
</ol>

<h3>1.2 The Three Primary Modes of AI Quote Infiltration</h3>

<p>When adolescent reporters find themselves 48 hours away from a final signature upload with unfilled copy blocks on their layout spreads, generative AI tools (such as ChatGPT, Claude, and mobile AI chat assistants) present an effortless, enticing escape route. Advisers must recognize the three distinct ways synthetic text infiltrates yearbook copy:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="rounded-xl border border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20 p-4">
    <div class="flex items-center gap-2 mb-2 font-bold text-rose-700 dark:text-rose-300 text-sm">
      <span>👻 1. Full Fabrication (Ghost Interview)</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      The student invents an entire interview out of thin air by prompting an LLM (e.g., <em>&ldquo;Write two quotes from a junior varsity point guard talking about overcoming a 10-point deficit against West&rdquo;</em>), attributing the synthetic words to a real student who never spoke to the reporter.
    </p>
  </div>

  <div class="rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 p-4">
    <div class="flex items-center gap-2 mb-2 font-bold text-amber-700 dark:text-amber-300 text-sm">
      <span>👔 2. Synthetic Polishing (Corporate Translation)</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      The student collects a genuine but curt 4-word response (e.g., <em>&ldquo;We worked hard and won&rdquo;</em>) and prompts an LLM with, <em>&ldquo;Make this quote sound eloquent, inspiring, and fitting for an award-winning yearbook feature.&rdquo;</em> This replaces natural teenage voice with adult institutional prose.
    </p>
  </div>

  <div class="rounded-xl border border-purple-500/30 bg-purple-50/50 dark:bg-purple-950/20 p-4">
    <div class="flex items-center gap-2 mb-2 font-bold text-purple-700 dark:text-purple-300 text-sm">
      <span>📱 3. Social Media Mining &amp; Paraphrasing</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      The student pulls a photo caption from a peer&rsquo;s Instagram post and runs it through an LLM to generate a full 3-sentence narrative interview quote without permission, verification, or direct personal contact.
    </p>
  </div>
</div>
"""

section2 = """<hr class="my-8 border-border" />

<h2>2. The Permanent Print Dilemma: Ink on Paper, Legal Liability, and Ethical Codes</h2>

<p>The consequences of fabricated quotes in a printed yearbook are fundamentally more destructive and permanent than in almost any other scholastic medium.</p>

<h3>2.1 The Irreversibility of Ink on Paper</h3>

<p>In digital journalism, broadcast media, or classroom essay submissions, an error in attribution or writing integrity can be corrected rapidly:</p>

<ul class="space-y-1.5 my-3 list-disc pl-5 text-sm text-muted-foreground">
  <li>A school news website can issue a formal retraction, edit the CMS article, and append an editor&rsquo;s note.</li>
  <li>A classroom English teacher can return a Google Doc to a student with formative comments, requiring a rewritten draft.</li>
  <li>An LMS submission can be unsubmitted, re-evaluated, and regraded.</li>
</ul>

<div class="my-6 rounded-xl border-2 border-rose-500/40 bg-rose-50/30 dark:bg-rose-950/20 p-5 text-foreground">
  <div class="font-bold text-rose-700 dark:text-rose-300 text-sm uppercase tracking-wider mb-2">
    ⚠️ The Permanent Reality of the Printed Page
  </div>
  <p class="text-sm leading-relaxed m-0 text-foreground">
    <strong>A high school yearbook possesses none of these corrective luxuries.</strong> Once signature files are preflighted, plate-etched, and run through commercial web presses, the ink is permanently bonded to 80-pound gloss enamel paper. Thousands of physical volumes are shipped to the school, distributed to students and parents, bound in hard covers, and deposited into public libraries, local historical societies, and family archives for decades.
  </p>
</div>

<p>If a senior finds an AI-fabricated quote placed next to their portrait&mdash;or if a coach discovers synthetic statements falsely attributing team grievances to them&mdash;the error cannot be corrected with a digital patch. Advisers are left with catastrophic, costly remedies: physically slicing pages out of thousands of books, printing adhesive correction stickers to be manually applied over copy blocks, or issuing formal public apologies to the school board.</p>

<!-- Digital vs Print Comparative Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    DIGITAL STUDENT NEWS VS. PERMANENT PRINT YEARBOOK
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    Why print scholastic journalism enforces zero-tolerance verification standards
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Digital News Box -->
    <div class="rounded-xl bg-slate-800/90 border border-slate-700 p-4">
      <div class="flex items-center justify-between gap-2 mb-3">
        <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-700 text-slate-200 border border-slate-600">
          DIGITAL STUDENT NEWS
        </span>
        <span class="text-[10px] text-slate-400 font-mono">Dynamic Medium</span>
      </div>
      <ul class="list-disc pl-4 space-y-2 text-slate-300 text-xs">
        <li><strong>Correction Mechanism:</strong> Instant CMS retraction, appended editor note, live database update.</li>
        <li><strong>Material Cost of Errors:</strong> $0 in material reprint or physical alteration costs.</li>
        <li><strong>Archival Longevity:</strong> Fleeting digital lifespan; searchable via web archive.</li>
        <li><strong>Stakeholder Impact:</strong> Active student readership and immediate peer network.</li>
      </ul>
    </div>

    <!-- Yearbook Box -->
    <div class="rounded-xl bg-slate-800/90 border border-teal-500/50 p-4">
      <div class="flex items-center justify-between gap-2 mb-3">
        <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
          PRINT YEARBOOK PUBLICATION
        </span>
        <span class="text-[10px] text-teal-300 font-mono">Permanent Archive</span>
      </div>
      <ul class="list-disc pl-4 space-y-2 text-slate-300 text-xs">
        <li><strong>Correction Mechanism:</strong> Physical adhesive stickers, page removal, board apologies.</li>
        <li><strong>Material Cost of Errors:</strong> $10,000+ reprint liability or physical volume defacement.</li>
        <li><strong>Archival Longevity:</strong> Decades of permanence in family homes and community archives.</li>
        <li><strong>Stakeholder Impact:</strong> Senior parents ($100+ per unit), alumni, administration, district leadership.</li>
      </ul>
    </div>
  </div>
</div>

<h3>2.2 Legal Exposure and Scholastic Press Ethics</h3>

<p>Scholastic media programs operating under the guidelines of the <strong>National Scholastic Press Association (NSPA)</strong>, the <strong>Journalism Education Association (JEA)</strong>, and <strong>Quill and Scroll</strong> are anchored by professional ethical standards:</p>

<ol class="space-y-2 my-4">
  <li><strong>Libel and False Light:</strong> Attributing fabricated statements to students or faculty members&mdash;even seemingly positive or benign statements&mdash;can expose the school district and the publication to legal liability under tort claims of defamation or false light invasion of privacy if the fabricated quote misrepresents the individual&rsquo;s character, academic standing, or personal beliefs.</li>
  <li><strong>Community and Administrative Trust:</strong> High school yearbook programs rely on substantial community financial support, including student book sales ($65 to $100+ per volume), business sponsorships, and senior parent tribute advertisements ($50 to $300 per block). When parents discover that senior tributes or student spotlight features contain AI-generated text or fabricated quotes, trust in the school&rsquo;s academic standards and media program evaporates.</li>
  <li><strong>Violation of the JEA / NSPA Scholastic Code of Ethics:</strong> The foundational tenet of scholastic journalism is truthfulness: <em>&ldquo;Never fabricate quotes, manipulate audio, or invent personas.&rdquo;</em> Fabricating quotes to satisfy a layout deadline is not a minor shortcut; it is a fundamental breach of journalistic ethics that undermines the educational mission of student media.</li>
</ol>

<h3>2.3 Why Generic AI Detectors Fail in the Yearbook Room</h3>

<p>Faced with the threat of synthetic text, some advisers have attempted to run yearbook copy through generic, whole-document AI percentage detectors. This approach consistently creates severe problems for three technical reasons:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="rounded-xl border border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20 p-4">
    <div class="flex items-center gap-2 mb-2 font-bold text-rose-700 dark:text-rose-300 text-sm">
      <span>🚨 1. AP Style False Flags</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Standardized journalistic copy (who, what, where, when) exhibits naturally low linguistic perplexity. Generic detectors run on raw statistical metrics and wrongly flag formulaic sports summaries as <strong>85%&ndash;99% AI</strong>.
    </p>
  </div>

  <div class="rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 p-4">
    <div class="flex items-center gap-2 mb-2 font-bold text-amber-700 dark:text-amber-300 text-sm">
      <span>🔍 2. Hidden Embedded Quotes</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      A 350-word feature story may contain 300 words of authentic student context and ONE 50-word AI quote. Generic detectors average metrics across the entire document, resulting in a low score (e.g., 18% AI) that fails to alert the adviser.
    </p>
  </div>

  <div class="rounded-xl border border-purple-500/30 bg-purple-50/50 dark:bg-purple-950/20 p-4">
    <div class="flex items-center gap-2 mb-2 font-bold text-purple-700 dark:text-purple-300 text-sm">
      <span>📏 3. Short Blurb Breakdowns</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      25-word photo captions and 40-word senior quotes lack the statistical sample size required for reliable perplexity calculations. Checkmark enforces an honest guardrail displaying <code>N/A</code> below ~150 words rather than guessing.
    </p>
  </div>
</div>
"""

section3 = """<hr class="my-8 border-border" />

<h2>3. Forensic Linguistic Markers: Spontaneous Adolescent Voice vs. Synthetic LLM Monologue</h2>

<p>When evaluating feature copy, personality profiles, and senior quotes, yearbook advisers and student editors can utilize forensic linguistic analysis to identify the structural divergence between authentic teenage speech and generative AI text.</p>

<h3>3.1 The Acoustic and Oral Nature of Adolescent Speech</h3>

<p>Authentic human speech is produced spontaneously in real time. Even articulate high school students speaking during a scheduled interview display natural oral cadence, emotional inflection, and hyper-local contextual grounding:</p>

<ul class="space-y-1.5 my-3 list-disc pl-5 text-sm text-muted-foreground">
  <li><strong>Informal Contractions and Conversational Connectors:</strong> High school students naturally use contractions (<em>&ldquo;we&rsquo;d,&rdquo; &ldquo;couldn&rsquo;t,&rdquo; &ldquo;they&rsquo;re&rdquo;</em>) and conversational prefaces (<em>&ldquo;Honestly,&rdquo; &ldquo;At first,&rdquo; &ldquo;To be fair&rdquo;</em>).</li>
  <li><strong>Hyper-Local Situational Specificity:</strong> Genuine student quotes reference concrete physical details unique to their school environment&mdash;specific room numbers (<em>&ldquo;Room 312&rdquo;</em>), teacher nicknames, specific gym bleachers, weather anomalies during homecoming week, or inside jokes from band camp bus rides.</li>
  <li><strong>Asymmetric Sentence Structures:</strong> Real teenagers rarely speak in perfectly balanced compound-complex sentences. Their thoughts flow in bursts, with parenthetical thoughts, self-corrections, and emotional emphasis.</li>
</ul>

<h3>3.2 The Synthetic Monologue: AI Rhetorical Signatures</h3>

<p>In contrast, Large Language Models generate text by predicting statistically optimal token sequences based on vast corpora of formal, written Internet text. When prompted to generate a quote for a high school profile, an LLM defaults to sterile, balanced, adult institutional prose:</p>

<ul class="space-y-1.5 my-3 list-disc pl-5 text-sm text-muted-foreground">
  <li><strong>Symmetrical Rhetorical Triads:</strong> AI quotes frequently group ideas in balanced sets of three: <em>&ldquo;This season taught us the importance of teamwork, dedication, and perseverance.&rdquo;</em></li>
  <li><strong>Corporate Institutional Buzzwords:</strong> Words rarely spoken aloud by 16-year-olds in casual conversation&mdash;such as <em>&ldquo;pivotal,&rdquo; &ldquo;testament,&rdquo; &ldquo;fostered,&rdquo; &ldquo;invaluable,&rdquo; &ldquo;synergy,&rdquo; &ldquo;culmination,&rdquo;</em> and <em>&ldquo;unwavering commitment&rdquo;</em>&mdash;dominate synthetic quotes.</li>
  <li><strong>Abstract Thematic Generalities:</strong> Instead of mentioning the mud on the south goalpost or the broken air conditioning during rehearsal, AI quotes speak in sweeping, inspiring homilies about <em>&ldquo;leaving a legacy&rdquo;</em> and <em>&ldquo;cherishing every memory.&rdquo;</em></li>
</ul>

<h3>3.3 Comparative Case: The Three Voices of a Volleyball Profile</h3>

<p>To illustrate this linguistic divide, examine how the same reporting scenario appears across authentic interview speech, full AI fabrication, and an AI-polished quote:</p>

<!-- Three Voices Comparison Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-lg">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    VOLLEYBALL PROFILE LINGUISTIC COMPARISON
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    Scenario: 11th Grade Varsity Volleyball Libero reflecting on a 5-set comeback victory
  </p>

  <div class="space-y-4">
    <!-- 1. Authentic Spoken Voice -->
    <div class="rounded-xl bg-emerald-950/40 border border-emerald-500/50 p-4">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold text-emerald-300 uppercase tracking-wider">
          1. Authentic Spoken Interview (Human Audio Recording)
        </span>
        <span class="text-[11px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
          ✅ Verified Primary Asset
        </span>
      </div>
      <p class="text-xs text-emerald-100 font-serif italic mb-2 leading-relaxed">
        &ldquo;When we went down 0-2, Coach Miller literally slammed his clipboard in the huddle and was like, &lsquo;Move your feet!&rsquo; We were all exhausted, but Mia had that crazy dig off the net tape in the fourth set that completely turned the momentum. After that, we just fed off the student section&rsquo;s energy.&rdquo;
      </p>
      <div class="text-[11px] text-emerald-300/90 bg-emerald-900/30 p-2.5 rounded border border-emerald-800/40">
        <strong>Forensic Markers:</strong> Named peers (Mia, Coach Miller), concrete actions (clipboard slam, net tape dig), casual adolescent speech markers (&ldquo;literally,&rdquo; &ldquo;was like&rdquo;), hyper-local emotional cadence.
      </div>
    </div>

    <!-- 2. Full AI Fabrication -->
    <div class="rounded-xl bg-rose-950/40 border border-rose-600/50 p-4">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold text-rose-300 uppercase tracking-wider">
          2. Full AI Fabrication (ChatGPT Prompt: &ldquo;Write a volleyball comeback quote&rdquo;)
        </span>
        <span class="text-[11px] font-bold text-rose-400 bg-rose-950 px-2 py-0.5 rounded border border-rose-800">
          ❌ 100% Synthetic Ghostwriting
        </span>
      </div>
      <p class="text-xs text-rose-100 font-serif italic mb-2 leading-relaxed">
        &ldquo;Facing a two-set deficit was an incredible test of our mental fortitude. Our team rallied together, executed our defensive rotations with precision, and demonstrated that unwavering dedication and teamwork can overcome any obstacle on the court.&rdquo;
      </p>
      <div class="text-[11px] text-rose-300/90 bg-rose-900/30 p-2.5 rounded border border-rose-800/40">
        <strong>Forensic Markers:</strong> Corporate jargon (&ldquo;mental fortitude,&rdquo; &ldquo;executed defensive rotations&rdquo;), symmetrical triad (&ldquo;unwavering dedication and teamwork&rdquo;), zero local names or concrete physical game details.
      </div>
    </div>

    <!-- 3. AI-Polished Rewrite -->
    <div class="rounded-xl bg-amber-950/40 border border-amber-500/50 p-4">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold text-amber-300 uppercase tracking-wider">
          3. AI-Polished Synthetic Rewrite (Prompt: &ldquo;Make this quote sound professional&rdquo;)
        </span>
        <span class="text-[11px] font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
          ⚠️ Altered Quote Manipulation
        </span>
      </div>
      <p class="text-xs text-amber-100 font-serif italic mb-2 leading-relaxed">
        &ldquo;Despite falling behind early, our collective resilience and focus allowed us to reclaim the game&rsquo;s momentum and secure a memorable victory for our school community.&rdquo;
      </p>
      <div class="text-[11px] text-amber-300/90 bg-amber-900/30 p-2.5 rounded border border-amber-800/40">
        <strong>Forensic Markers:</strong> Eradication of teenage personality and authentic voice; sterilized institutional summary that puts unstated words into a minor&rsquo;s mouth.
      </div>
    </div>
  </div>
</div>
"""

section4 = """<hr class="my-8 border-border" />

<h2>4. The High School Yearbook Evidentiary Matrix</h2>

<p>To evaluate student copy effectively without relying on black-box percentage scores or subjective hunches, yearbook advisers need a structured evidentiary framework.</p>

<p>The following matrix compares traditional newsroom record-keeping, generic whole-document AI detectors, and <strong>Checkmark Plagiarism&rsquo;s</strong> integrated writing process telemetry:</p>

<div class="my-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3.5">Evidentiary Dimension</th>
        <th class="p-3.5">Traditional Paper Notes &amp; Logs</th>
        <th class="p-3.5">Generic AI Percentage Scanners</th>
        <th class="p-3.5 text-teal-700 dark:text-teal-300 bg-teal-500/10">Checkmark Newsroom Telemetry</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/40">
        <td class="p-3.5 font-semibold text-foreground">Quote Provenance Verification</td>
        <td class="p-3.5">Relies on handwritten notebooks or Google Forms; easily backfilled after deadlines.</td>
        <td class="p-3.5">Cannot verify external sources; only analyzes static probability distributions.</td>
        <td class="p-3.5 font-semibold text-foreground bg-teal-500/5"><strong>Primary Asset Triangulation:</strong> Direct linking to uploaded audio files, Otter/Descript logs, and messaging screenshots.</td>
      </tr>
      <tr class="hover:bg-muted/40">
        <td class="p-3.5 font-semibold text-foreground">Passage-Level Granularity</td>
        <td class="p-3.5">Manual line-by-line proofreading; unsustainable for advisers managing 300+ pages.</td>
        <td class="p-3.5">Opaque whole-document score (e.g., &ldquo;47% AI&rdquo;); fails to pinpoint the synthetic quote.</td>
        <td class="p-3.5 font-semibold text-foreground bg-teal-500/5"><strong>Passage-Level Sliders:</strong> Highlights specific quotes with confidence metrics while leaving AP leads untouched.</td>
      </tr>
      <tr class="hover:bg-muted/40">
        <td class="p-3.5 font-semibold text-foreground">Writing Process Telemetry</td>
        <td class="p-3.5">Zero visibility into how the student drafted copy on their Chromebook.</td>
        <td class="p-3.5">Zero process visibility; only inspects the final submitted static string.</td>
        <td class="p-3.5 font-semibold text-foreground bg-teal-500/5"><strong>Patent-Pending Essay Playback™:</strong> 1x&ndash;8x keystroke replay visualizing drafting pauses, deletions, and revisions.</td>
      </tr>
      <tr class="hover:bg-muted/40">
        <td class="p-3.5 font-semibold text-foreground">Paste Buffer Preservation</td>
        <td class="p-3.5">Cannot determine if text was pasted or typed manually.</td>
        <td class="p-3.5">Completely blind to clipboard actions.</td>
        <td class="p-3.5 font-semibold text-foreground bg-teal-500/5"><strong>External Paste Inspector:</strong> Timestamps all clipboard events and preserves original raw paste strings.</td>
      </tr>
      <tr class="hover:bg-muted/40">
        <td class="p-3.5 font-semibold text-foreground">Transcription Detection</td>
        <td class="p-3.5">Relies on student claims regarding note transfer.</td>
        <td class="p-3.5">Cannot distinguish typing from thought vs. copying from a second screen.</td>
        <td class="p-3.5 font-semibold text-foreground bg-teal-500/5"><strong>Keystroke Dynamic Modeling:</strong> Detects mechanical, continuous typing speeds lacking natural composing pauses.</td>
      </tr>
      <tr class="hover:bg-muted/40">
        <td class="p-3.5 font-semibold text-foreground">Short-Text Protection (&lt;150w)</td>
        <td class="p-3.5">Subjective teacher judgment on 20-word captions and senior quotes.</td>
        <td class="p-3.5">High false-positive rate; forces statistical checks on inadequate sample sizes.</td>
        <td class="p-3.5 font-semibold text-foreground bg-teal-500/5"><strong>Honest Short-Text Guardrails:</strong> Automatically displays <code>N/A</code> on texts under ~150 words to prevent false flags.</td>
      </tr>
      <tr class="hover:bg-muted/40">
        <td class="p-3.5 font-semibold text-foreground">Rubric Autograding &amp; Feedback</td>
        <td class="p-3.5">Advisers spend entire weekends manually grading proofs against JEA rubrics.</td>
        <td class="p-3.5">No rubric integration; standalone detection tool only.</td>
        <td class="p-3.5 font-semibold text-foreground bg-teal-500/5"><strong>Quote-Anchored Autograding:</strong> Evaluates leads, AP style, and quote integration with teacher final authority.</td>
      </tr>
      <tr class="hover:bg-muted/40">
        <td class="p-3.5 font-semibold text-foreground">Student Privacy &amp; Data Rights</td>
        <td class="p-3.5">Paper notes stored locally; low digital security.</td>
        <td class="p-3.5">Many commercial tools store and train AI models on student work.</td>
        <td class="p-3.5 font-semibold text-foreground bg-teal-500/5"><strong>FERPA &amp; COPPA Compliant:</strong> Zero retention for model training; private educator-only flag statuses.</td>
      </tr>
    </tbody>
  </table>
</div>

<img src="/images/services/report-paste-evidence.png" alt="Checkmark Plagiarism External Paste Buffer Inspector showing exact clipboard preservation and timestamp telemetry" class="w-full rounded-2xl border border-border shadow-md my-8" />

<hr class="my-8 border-border" />

<h2>5. Step-by-Step Yearbook Adviser Editorial Audit Protocol</h2>

<p>Auditing yearbook copy for AI-generated quotes requires a disciplined, step-by-step process that empowers student editors while providing advisers with objective, defensible proof before plant upload.</p>

<!-- 5-Phase Audit Workflow Diagram -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-sans shadow-md">
  <div class="text-center font-bold text-teal-400 text-sm uppercase tracking-wide mb-2">
    THE FIVE-PHASE YEARBOOK COPY AUDIT WORKFLOW
  </div>
  <p class="text-center text-xs text-slate-400 mb-6">
    From primary source asset linking to restorative coaching conferences
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
    <div class="rounded-xl bg-slate-800/90 border border-teal-500/30 p-3.5 flex flex-col justify-between">
      <div>
        <div class="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">Phase 1: Assets</div>
        <p class="text-slate-300 text-[11px] leading-relaxed">
          Verify quoted student identity against SIS. Check audio files, Otter logs, and timestamp references.
        </p>
      </div>
      <div class="mt-2 pt-2 border-t border-slate-700 text-[10px] text-teal-400 font-mono">
        🎙️ Audio Linked
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 border border-indigo-500/30 p-3.5 flex flex-col justify-between">
      <div>
        <div class="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">Phase 2: Voice</div>
        <p class="text-slate-300 text-[11px] leading-relaxed">
          Read aloud. Apply &ldquo;Would They Say That?&rdquo; test to catch corporate jargon and rhetorical triads.
        </p>
      </div>
      <div class="mt-2 pt-2 border-t border-slate-700 text-[10px] text-indigo-400 font-mono">
        🗣️ Diction Triage
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 border border-purple-500/30 p-3.5 flex flex-col justify-between">
      <div>
        <div class="text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">Phase 3: Playback</div>
        <p class="text-slate-300 text-[11px] leading-relaxed">
          Scrub Essay Playback™ (1x-8x) to observe transcription pauses vs. mechanical phone transcription.
        </p>
      </div>
      <div class="mt-2 pt-2 border-t border-slate-700 text-[10px] text-purple-400 font-mono">
        📹 Keystroke Replay
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 border border-amber-500/30 p-3.5 flex flex-col justify-between">
      <div>
        <div class="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">Phase 4: Paste</div>
        <p class="text-slate-300 text-[11px] leading-relaxed">
          Inspect Paste Buffer Inspector to capture raw clipboard strings and match against source files.
        </p>
      </div>
      <div class="mt-2 pt-2 border-t border-slate-700 text-[10px] text-amber-400 font-mono">
        📋 Clipboard Inspected
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 border border-emerald-500/30 p-3.5 flex flex-col justify-between">
      <div>
        <div class="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">Phase 5: Coaching</div>
        <p class="text-slate-300 text-[11px] leading-relaxed">
          Review timeline with student. Initiate 24-hour restorative in-person re-interview protocol.
        </p>
      </div>
      <div class="mt-2 pt-2 border-t border-slate-700 text-[10px] text-emerald-400 font-mono">
        🤝 Restorative Growth
      </div>
    </div>
  </div>
</div>

<h3>5.1 Phase 1: Source Material &amp; Primary Asset Triangulation</h3>

<p>The foundation of journalistic auditing begins with verifying the existence of the source and the interview record:</p>

<ol class="space-y-2 my-4">
  <li><strong>Student Identity and Cohort Verification:</strong> Cross-reference the quoted student&rsquo;s name, grade level, and spelling against the school information system (SIS) or official class rosters. AI models frequently invent fictitious students when prompted for high school sports quotes.</li>
  <li><strong>Interview Asset Linking:</strong> Every quoted passage in a yearbook copy sheet must correspond to a designated primary reporting asset uploaded to the staff&rsquo;s shared drive or Canvas/Buzz LMS:
    <ul class="list-disc pl-5 mt-1 space-y-1">
      <li>Mobile audio recordings (iPhone Voice Memos, Chromebook audio files).</li>
      <li>AI-generated oral transcripts (e.g., Otter.ai, Descript) generated directly from live interview audio.</li>
      <li>Screenshot digital messaging threads (School email, Canvas Inbox, or official staff Instagram DMs).</li>
    </ul>
  </li>
  <li><strong>Audio Timestamp Matching:</strong> If a student submits a 40-word quote, they must indicate the audio timestamp (e.g., Mia&rsquo;s interview audio at <code>04:13-04:48</code>) where the source spoke those words.</li>
</ol>

<h3>5.2 Phase 2: Linguistic Voice &amp; Diction Triage</h3>

<p>Yearbook editors and advisers should conduct a rapid linguistic scan of quotes during layout editing:</p>

<ul class="space-y-2 my-4 list-disc pl-5 text-sm text-muted-foreground">
  <li><strong>The &ldquo;Would They Say That?&rdquo; Test:</strong> Read the quote aloud. Does the diction match the spoken cadence of a 15-year-old sophomore? If the quote contains phrases such as <em>&ldquo;imbued with purpose,&rdquo; &ldquo;testament to our resilience,&rdquo;</em> or <em>&ldquo;synergistic collaboration,&rdquo;</em> flag the passage for deeper inspection.</li>
  <li><strong>The Specificity Inspection:</strong> Does the quote contain evidence of actual presence at the event? If a sports recap quote speaks only of <em>&ldquo;fighting until the final buzzer&rdquo;</em> without mentioning a single teammate, play, or scoring run, it may be an AI-generated generic.</li>
</ul>

<h3>5.3 Phase 3: Writing Process Forensics with Checkmark Essay Playback</h3>

<p>When a quote is flagged as suspicious, the adviser does not guess or accuse; instead, the adviser opens <a href="/services/writing-process" class="text-primary font-semibold underline"><strong>Checkmark Essay Playback</strong></a> to watch how the student drafted the copy on their Chromebook:</p>

<ul class="space-y-2 my-4 list-disc pl-5 text-sm text-muted-foreground">
  <li><strong>Audio Transcription Pause Modeling:</strong> When a student listens to an audio file and types their interview notes, the keystroke record shows a distinct &ldquo;burst-and-pause&rdquo; pattern. The student types 6-8 words, ceases typing for 3-5 seconds to listen or rewind the audio, then types the next sentence. This is definitive, objective proof of authentic transcription.</li>
  <li><strong>Instant Paste Anomalies:</strong> If a student suddenly inserts an 85-word quote in a single 0.2-second paste event without any preceding transcription pauses or revisions, Checkmark flags the clipboard insertion for immediate review.</li>
  <li><strong>Second-Screen Transcription Detection:</strong> If a student prompted ChatGPT on their phone and manually retyped the synthetic quote onto their Chromebook, Checkmark&rsquo;s keystroke dynamics identify mechanical, uniform typing speeds lacking natural composing or listening pauses.</li>
</ul>

<h3>5.4 Phase 4: External Paste Buffer Inspection</h3>

<p>If the quote was pasted into the document, the adviser opens Checkmark&rsquo;s <strong>External Paste Inspector</strong>:</p>

<ul class="space-y-2 my-4 list-disc pl-5 text-sm text-muted-foreground">
  <li><strong>Inspecting Unmodified Clipboard Text:</strong> Checkmark captures and preserves the raw clipboard string as it entered the document, even if the student subsequently edited, rewrote, or paraphrased the passage later.</li>
  <li><strong>Evaluating Paste Sources and Prompts:</strong> Advisers can immediately determine whether the pasted text originated from a legitimate press release, an email interview, or an AI chatbot interface.</li>
</ul>

<h3>5.5 Phase 5: Restorative Coaching &amp; Newsroom Growth</h3>

<p>In accordance with Checkmark&rsquo;s philosophy of <em>&ldquo;Stop guessing, start trusting,&rdquo;</em> academic integrity findings are used as teachable journalistic moments, not punitive summary judgments:</p>

<ol class="space-y-2 my-4">
  <li><strong>The Objective Evidence Review:</strong> Sit down with the student reporter and section editor. Open Checkmark Essay Playback together to review the timeline. The objective record eliminates denial and de-escalates defensiveness.</li>
  <li><strong>Root-Cause Diagnosis:</strong> Identify why the student fabricated the quote: Did a source ghost them? Were they overwhelmed by ladder deadlines? Did they fear penalty fees?</li>
  <li><strong>The 24-Hour Re-Interview Protocol:</strong> The fabricated quote is immediately removed from the spread. The student is assigned an urgent 24-hour protocol: conducting an in-person interview, uploading the audio file, and redrafting the copy block with verified primary evidence.</li>
</ol>
"""

section5 = """<hr class="my-8 border-border" />

<h2>6. Real High School Yearbook Case Scenarios</h2>

<p>The following real-world case studies illustrate how high school yearbook advisers encounter synthetic quote challenges, how generic tools fail, and how Checkmark writing process telemetry resolves each situation with pedagogical integrity.</p>

<!-- Case Study 1 -->
<div class="my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-3">
    <span class="px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-bold uppercase tracking-wider">
      Case Study 1
    </span>
    <h3 class="text-base font-bold text-foreground m-0 p-0">The Midnight Track &amp; Field Signature Deadline (Full AI Fabrication)</h3>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
    <div class="bg-muted/40 p-4 rounded-xl border border-border">
      <strong class="text-foreground block mb-1">The Context &amp; Incident</strong>
      <p class="text-muted-foreground leading-relaxed m-0">
        At Oak Creek High School, sophomore reporter Tyler faced a midnight plant deadline for Signature 4 (Pages 49&ndash;64). By 8:30 PM, pole vaulter Marcus had ignored three Instagram DMs. Panicking over plant penalty fees, Tyler prompted ChatGPT on his phone: <em>&ldquo;Write two inspirational quotes from a high school senior pole vaulter who cleared 14 feet.&rdquo;</em> Tyler retyped the synthetic quote: <em>&ldquo;Clearing the bar at 14 feet was the culmination of countless hours of relentless training. It stands as a profound testament to the unwavering support of my coaches...&rdquo;</em>
      </p>
    </div>
    <div class="bg-teal-50/50 dark:bg-teal-950/20 p-4 rounded-xl border border-teal-500/30">
      <strong class="text-teal-700 dark:text-teal-300 block mb-1">Checkmark Telemetry Resolution</strong>
      <p class="text-muted-foreground leading-relaxed m-0">
        Generic detectors scored the 400-word spread at 22% AI (&ldquo;Likely Human&rdquo;) due to surrounding AP stats. Checkmark flagged the 42-word quote with a 94% synthetic confidence slider. Essay Playback™ revealed Tyler typed at a steady 48 WPM with zero pauses, zero deletions, and zero audio scrub windows&mdash;the signature of second-screen transcription.
      </p>
    </div>
  </div>
  <div class="text-xs bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 p-3 rounded-lg border border-emerald-500/20 font-medium">
    🏆 <strong>Restorative Resolution:</strong> Adviser Ms. Gallagher held Marcus for an impromptu 3-minute recorded audio interview in the stadium. Tyler transcribed Marcus&rsquo;s real words (<em>&ldquo;I honestly didn&rsquo;t think the bar was gonna stay up...&rdquo;</em>) and submitted the spread on time.
  </div>
</div>

<!-- Case Study 2 -->
<div class="my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-3">
    <span class="px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-wider">
      Case Study 2
    </span>
    <h3 class="text-base font-bold text-foreground m-0 p-0">The Senior Superlative &ldquo;Polishing&rdquo; Trap (Synthetic Rewriting)</h3>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
    <div class="bg-muted/40 p-4 rounded-xl border border-border">
      <strong class="text-foreground block mb-1">The Context &amp; Incident</strong>
      <p class="text-muted-foreground leading-relaxed m-0">
        At Lincoln High School, junior staff writer Chloe was compiling Senior Superlatives. Senior Jordan submitted a 6-word response: <em>&ldquo;I just like coding robotics stuff.&rdquo;</em> Fearing it was too short for the 65-word layout geometry, Chloe prompted Claude: <em>&ldquo;Expand this short quote into a sophisticated, 3-sentence statement about entrepreneurship...&rdquo;</em> Chloe pasted the corporate result: <em>&ldquo;Developing algorithmic solutions and constructing competitive robotics has provided me with an invaluable foundation...&rdquo;</em>
      </p>
    </div>
    <div class="bg-indigo-50/50 dark:bg-indigo-950/20 p-4 rounded-xl border border-indigo-500/30">
      <strong class="text-indigo-700 dark:text-indigo-300 block mb-1">Checkmark Telemetry Resolution</strong>
      <p class="text-muted-foreground leading-relaxed m-0">
        Whole-document scanners returned an inconclusive 35% AI score. Checkmark&rsquo;s External Paste Inspector captured the 48-word paste event at 10:14 PM. Cross-referencing Jordan&rsquo;s raw Google Form confirmed that 85% of the printed words were synthetic additions never written by Jordan.
      </p>
    </div>
  </div>
  <div class="text-xs bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 p-3 rounded-lg border border-emerald-500/20 font-medium">
    🏆 <strong>Restorative Resolution:</strong> Adviser Mr. Henderson coached Chloe to conduct a 2-minute follow-up interview about Jordan&rsquo;s 40-hour intake rebuild. Chloe wrote a 2-sentence narrative context lead followed by Jordan&rsquo;s genuine 15-word quote, perfectly filling the layout.
  </div>
</div>

<!-- Case Study 3 -->
<div class="my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-3">
    <span class="px-3 py-1 rounded-full bg-teal-600 text-white text-xs font-bold uppercase tracking-wider">
      Case Study 3
    </span>
    <h3 class="text-base font-bold text-foreground m-0 p-0">The False Positive Exoneration of an AP-Style Sports Lead</h3>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
    <div class="bg-muted/40 p-4 rounded-xl border border-border">
      <strong class="text-foreground block mb-1">The Context &amp; Incident</strong>
      <p class="text-muted-foreground leading-relaxed m-0">
        Junior sports editor Sam wrote a soccer season recap opening with a classic AP inverted pyramid lead: <em>&ldquo;The varsity girls soccer team concluded their 2025-2026 campaign with a 14-3-2 overall record, capturing the Class 5A Region III championship title on Saturday, Nov. 8...&rdquo;</em> A commercial detector flagged the opening paragraph as <strong>92% AI-Generated</strong> due to formulaic syntax, prompting peer editors to accuse Sam of cheating.
      </p>
    </div>
    <div class="bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-500/30">
      <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">Checkmark Telemetry Resolution</strong>
      <p class="text-muted-foreground leading-relaxed m-0">
        Adviser Mrs. Alvarez launched Essay Playback™ at 4x speed. The telemetry proved Sam drafted the lead over 14 minutes on his Chromebook, consulting the MaxPreps scorebook in another tab, backspacing twice to adjust capitalization, and refining prepositional phrases for JEA formatting.
      </p>
    </div>
  </div>
  <div class="text-xs bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 p-3 rounded-lg border border-emerald-500/20 font-medium">
    🏆 <strong>Restorative Resolution:</strong> Sam was completely exonerated. Mrs. Alvarez used the session to teach the entire newsroom why black-box percentage detectors fail and established Checkmark Essay Playback as the mandatory standard of proof.
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. How Checkmark Plagiarism Empowers Yearbook Advisers and Student Media Programs</h2>

<p>Checkmark Plagiarism is engineered specifically to address the complex editorial and educational demands of secondary journalism environments. Rather than outputting opaque, adversarial risk scores, Checkmark equips yearbook advisers with transparent, defensible writing telemetry.</p>

<h3>7.1 Granular Passage-Level AI Confidence Sliders</h3>
<p>Instead of issuing a single whole-document percentage that confuses human-written leads with synthetic quotes, Checkmark analyzes text with <strong>passage-level granularity</strong>. Each individual quote is highlighted directly within the draft and accompanied by a dedicated sidebar evidence card featuring a calibrated confidence slider (Typical Human Writing Style vs. Typical AI Pattern). Surrounding AP-style news copy and statistics remain unflagged, allowing advisers to focus editorial attention precisely where fabrication risks occur.</p>

<h3>7.2 Patent-Pending Essay Playback™ (1x–8x Replay)</h3>
<p>Checkmark&rsquo;s flagship innovation, <a href="/services/writing-process" class="text-primary font-semibold underline"><strong>Essay Playback™</strong></a>, reconstructs the student&rsquo;s complete writing session keystroke by keystroke. Advisers can scrub through the timeline like a video at 1x, 2x, 4x, or 8x speed to observe:</p>
<ul class="space-y-1.5 my-3 list-disc pl-5 text-sm text-muted-foreground">
  <li>Natural drafting bursts and audio-listening pauses.</li>
  <li>Active sentence restructuring, deletions, and self-corrections.</li>
  <li>Instant paste insertions vs. authentic typing cadences.</li>
  <li>Objective evidentiary records that protect honest students from false accusations during parent or administrative conferences.</li>
</ul>

<h3>7.3 External Paste Tracking with Complete Text Preservation</h3>
<p>When students copy text from external windows into Google Docs, Canvas LMS, or Buzz LMS, Checkmark timestamp-captures the entire clipboard event. Crucially, Checkmark preserves the <strong>exact raw text</strong> originally pasted into the document, even if the student subsequently modifies, deletes, or paraphrases the passage. A direct &ldquo;Jump to Playback&rdquo; button takes advisers to the exact second the paste occurred.</p>

<h3>7.4 Honest Short-Text Guardrails (&lt;150 Words)</h3>
<p>Traditional statistical language models become unreliable on short samples. Recognizing that yearbook photo captions (25 words), scoreboard summaries (40 words), and senior quotes (30 words) lack sufficient statistical sample size, Checkmark enforces an <strong>honest short-text guardrail</strong>: submissions below ~150 words display <code>N/A</code> rather than making ungrounded, high-risk guesses that trigger false accusations.</p>

<h3>7.5 Teacher-Controlled Rubric Autograding for Journalism Electives</h3>
<p>Yearbook advisers balancing standard teaching loads with publication advising can streamline copy grading using Checkmark&rsquo;s <a href="/services/autograder" class="text-primary font-semibold underline"><strong>AI Autograder</strong></a>. The tool evaluates student journalism submissions against customized JEA/NSPA-aligned rubrics (assessing inverted pyramid structure, AP style mechanics, quote attribution, and headline/caption formatting), providing draft scoring justifications and quote-anchored feedback cards. All AI grades remain drafts subject to the teacher&rsquo;s final authority before one-click syncing with Canvas, Buzz, or Google Classroom gradebooks.</p>

<h3>7.6 Enterprise Security and FERPA/COPPA Compliance</h3>
<p>Student reporting, personal interview audio logs, and yearbook copy sheets are strictly protected. Checkmark operates under zero model training policies&mdash;student submissions are never used to train commercial AI models&mdash;and maintains full compliance with FERPA and COPPA standards.</p>
"""

section6 = """<hr class="my-8 border-border" />

<h2>8. Frequently Asked Questions (FAQs)</h2>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground mb-2">Q1: Is it acceptable for student reporters to use AI to improve the grammar of a peer&rsquo;s quote?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      <strong>No.</strong> In professional and scholastic journalism (NSPA/JEA standards), quotation marks indicate the exact spoken words of the source. While journalists may remove minor verbal fillers (&ldquo;um,&rdquo; &ldquo;like&rdquo;) if it does not alter the meaning, running quotes through generative AI transforms them into synthetic corporate rewrites and constitutes unethical manipulation. If a quote is grammatically confusing or curt, the reporter should conduct a brief follow-up interview or paraphrase the information outside quotation marks.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground mb-2">Q2: What should an adviser do if a senior parent submits an AI-generated quote for a senior tribute ad?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Parent-purchased tribute advertisements represent personal messages rather than student journalistic reporting. However, advisers should maintain clear publication policies regarding offensive, copyrighted, or synthetic content. If a parent tribute contains obvious LLM hallucinations or copyrighted song lyrics, advisers should contact the family directly to confirm their intended message before printing.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground mb-2">Q3: Why did a generic AI detector flag our student&rsquo;s AP-style sports lead as 95% AI?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Associated Press (AP) style requires concise, standardized, formulaic writing (who, what, where, when, why) with specific date and title formatting. Because formulaic journalistic syntax has naturally low linguistic perplexity (high statistical predictability), generic statistical detectors misinterpret high-quality journalistic training as machine-generated text. Checkmark Essay Playback resolves this by showing the student&rsquo;s authentic drafting process and revision pauses.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground mb-2">Q4: How does Essay Playback distinguish between typing from thought versus typing off an AI screen?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      When drafting from thought, human writers exhibit variable typing speeds, frequent backspaces, sentence-level pauses, and organic word replacements. When typing while listening to audio, writers display periodic listening pauses (3-6 seconds) after short word bursts. When manually transcribing from an AI screen (such as a smartphone), typing speeds are unusually steady, mechanical, and continuous, lacking composing pauses or audio replay cycles.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground mb-2">Q5: How can advisers prevent students from creating fake quotes when sources ignore interview requests?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Advisers should implement a proactive <strong>&ldquo;No Ghosting&rdquo; Newsroom Protocol</strong>: establish mandatory 48-hour interview confirmation windows, teach students how to approach peers in person during homeroom or advisory periods, and create a designated backup source list for every feature spread before layout begins.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground mb-2">Q6: Can students use AI transcription tools like Otter.ai to transcribe recorded interviews?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      <strong>Yes.</strong> Using AI transcription software to convert authentic spoken audio into text is an industry-standard journalistic practice that enhances accuracy. To maintain integrity, students should upload both the raw audio file and the transcript to the staff repository, noting the exact audio timestamp for every pulled quote.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground mb-2">Q7: Does Checkmark store student yearbook copy to train future AI models?</h3>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      <strong>No.</strong> Checkmark maintains strict zero-retention data privacy standards. Student submissions are never used to train or fine-tune commercial AI models, ensuring complete FERPA and COPPA compliance for high school districts.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>9. Actionable Implementation Checklist for Yearbook Advisers</h2>

<p>To establish a bulletproof quote verification system in your high school newsroom, implement the following checklist across every signature cycle:</p>

<div class="my-6 space-y-3">
  <div class="rounded-xl border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-4 flex items-start gap-3">
    <span class="text-teal-600 dark:text-teal-400 font-bold text-base mt-0.5">☑️</span>
    <div>
      <strong class="text-foreground text-sm block">1. Mandatory Primary Asset Repository</strong>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        Require every student reporter to upload audio files, Otter/Descript transcripts, or screenshot messaging threads to a shared Google Drive or Canvas LMS assignment before copy is placed onto layout spreads.
      </p>
    </div>
  </div>

  <div class="rounded-xl border border-indigo-500/30 bg-indigo-50/40 dark:bg-indigo-950/20 p-4 flex items-start gap-3">
    <span class="text-indigo-600 dark:text-indigo-400 font-bold text-base mt-0.5">☑️</span>
    <div>
      <strong class="text-foreground text-sm block">2. Timestamped Attribution Log</strong>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        Enforce an attribution box on all Google Docs copy sheets requiring student name, student ID, grade level, and audio timestamp (e.g., <code>03:14-03:45</code>) for every direct quote.
      </p>
    </div>
  </div>

  <div class="rounded-xl border border-purple-500/30 bg-purple-50/40 dark:bg-purple-950/20 p-4 flex items-start gap-3">
    <span class="text-purple-600 dark:text-purple-400 font-bold text-base mt-0.5">☑️</span>
    <div>
      <strong class="text-foreground text-sm block">3. Passage-Level Pre-Upload Audits</strong>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        Run feature spreads through Checkmark Plagiarism to audit isolated quotes with passage-level confidence sliders rather than relying on unreliable whole-document scores.
      </p>
    </div>
  </div>

  <div class="rounded-xl border border-amber-500/30 bg-amber-50/40 dark:bg-amber-950/20 p-4 flex items-start gap-3">
    <span class="text-amber-600 dark:text-amber-400 font-bold text-base mt-0.5">☑️</span>
    <div>
      <strong class="text-foreground text-sm block">4. Keystroke Telemetry Verification</strong>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        Use Checkmark Essay Playback (1x-8x replay) to verify authentic audio-transcription pause cadences and inspect external clipboard paste events.
      </p>
    </div>
  </div>

  <div class="rounded-xl border border-sky-500/30 bg-sky-50/40 dark:bg-sky-950/20 p-4 flex items-start gap-3">
    <span class="text-sky-600 dark:text-sky-400 font-bold text-base mt-0.5">☑️</span>
    <div>
      <strong class="text-foreground text-sm block">5. Staff Ethics &amp; Style Workshops</strong>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        Conduct beginning-of-year JEA/NSPA ethics seminars emphasizing that direct quotes are sacred historical records and that synthetic polishing violates journalistic standards.
      </p>
    </div>
  </div>

  <div class="rounded-xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 flex items-start gap-3">
    <span class="text-emerald-600 dark:text-emerald-400 font-bold text-base mt-0.5">☑️</span>
    <div>
      <strong class="text-foreground text-sm block">6. 24-Hour Restorative Re-Interview Loop</strong>
      <p class="text-xs text-muted-foreground m-0 leading-relaxed">
        When synthetic quotes are detected, replace punitive confrontation with supportive coaching: remove the fake quote immediately, conduct a real follow-up interview, and redraft the copy block with verified evidence.
      </p>
    </div>
  </div>
</div>

<div class="my-8 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-white text-center shadow-lg">
  <h3 class="text-xl font-bold mb-2">Preserve Your Yearbook&rsquo;s Historical Integrity with Checkmark</h3>
  <p class="text-teal-100 text-sm max-w-2xl mx-auto mb-6">
    Equip your student publication staff with patent-pending Essay Playback™, raw clipboard paste inspection, and JEA-aligned journalistic integrity forensics.
  </p>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <a href="/contact" class="px-6 py-3 rounded-xl bg-white text-teal-800 font-bold text-sm hover:bg-teal-50 transition-colors shadow-md">
      Request a Newsroom Demo
    </a>
    <a href="/services/writing-process" class="px-6 py-3 rounded-xl bg-teal-700/80 hover:bg-teal-700 text-white font-bold text-sm transition-colors border border-teal-400/30">
      Explore Essay Playback™
    </a>
  </div>
</div>
"""

footer = """`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/how-high-school-yearbook-advisers-can-audit-feature-profiles-and-senior-tributes-for-ai-generated-quotes"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
"""

full_content = header + section1 + section2 + section3 + section4 + section5 + section6 + footer
with open(target_file, 'w', encoding='utf-8') as f:
    f.write(full_content)

print(f'Successfully wrote {len(full_content)} characters to {target_file}')

# Update Google Sheet row 669
SHEET_NAME = "Blog Topic Engine"
CREDENTIALS_PATH = os.path.join(os.path.dirname(__file__), "credentials.json")

print(f"Connecting to Google Sheets: '{SHEET_NAME}'...")
gc = gspread.service_account(filename=CREDENTIALS_PATH)
sheet = gc.open(SHEET_NAME).sheet1

row_index = 669
row_values = sheet.row_values(row_index)[:6]
print(f"Current row {row_index} values: {row_values}")

new_file_path = f"src/app/learning/2026/8/{slug}/page.tsx"

# Update Column B (Status) and Column F (File Path)
sheet.update_cell(row_index, 2, "published")
sheet.update_cell(row_index, 6, new_file_path)

updated_row_values = sheet.row_values(row_index)[:6]
print(f"Updated row {row_index} values: {updated_row_values}")
print(f"Google Sheet row {row_index} updated successfully!")

