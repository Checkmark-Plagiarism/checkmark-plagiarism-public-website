import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "What Should a District Review Committee Look for in Zero-Retention AI Plagiarism Contracts? | Checkmark Plagiarism",
  description: "An exhaustive procurement and legal evaluation guide for School Boards, Superintendents, CTOs, and Legal Counsel on auditing Zero-Data-Retention (ZDR) AI plagiarism contracts, FERPA/COPPA compliance, and keystroke verification architectures.",
  keywords: [
    "zero retention AI plagiarism contract",
    "district RFP evaluation guide",
    "FERPA student data privacy AI",
    "COPPA compliance plagiarism detector",
    "NY Ed Law 2-d AI contract",
    "Illinois SOPPA student privacy",
    "AI model training prohibition clause",
    "Essay Playback keystroke verification",
    "LTI 1.3 Advantage Canvas Buzz integration",
    "Locality-Sensitive Hashing MinHash plagiarism",
    "Checkmark Plagiarism"
  ],
  openGraph: {
    images: ["/images/learning/what-should-a-district-review-committee-look-for-in-zero-retention-ai-plagiarism-contracts/featured.png"],
  },
};

const meta = {
  title: "What Should a District Review Committee Look for in Zero-Retention AI Plagiarism Contracts? | Checkmark Plagiarism",
  description: "An exhaustive procurement and legal evaluation guide for School Boards, Superintendents, CTOs, and Legal Counsel on auditing Zero-Data-Retention (ZDR) AI plagiarism contracts, FERPA/COPPA compliance, and keystroke verification architectures.",
  "opengraph-image": "/images/learning/what-should-a-district-review-committee-look-for-in-zero-retention-ai-plagiarism-contracts/featured.png",
  date: "08-18-2026",
  readTime: "~20 min read",
  category: "Procurement & Compliance",
  categories: ["Procurement & Compliance", "District Leadership", "EdTech Security", "Data Privacy", "Academic Integrity"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6">
  <div class="flex items-center gap-2 mb-3">
    <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-teal-600 text-white tracking-wide uppercase">
      Executive Procurement Brief
    </span>
    <span class="text-xs text-muted-foreground font-medium">Audience: School Boards, Superintendents, CTOs, Legal Counsel &amp; DPOs</span>
  </div>
  <p class="text-foreground font-medium leading-relaxed">
    As generative artificial intelligence reshapes classroom instruction and student writing, K–12 school districts and higher education institutions face an unprecedented procurement dilemma. Traditional academic integrity vendors and emerging AI detection platforms frequently rely on contract language that quietly expropriates student intellectual property, stores unencrypted student essays in persistent cloud databases, and routes sensitive text through commercial Large Language Model (LLM) Application Programming Interfaces (APIs) for continuous model training and Reinforcement Learning from Human Feedback (RLHF). For <strong>District Review Committees</strong>—comprising School Board Trustees, Superintendents, Assistant Superintendents of Curriculum, Chief Technology Officers (CTOs), Legal Counsel, and Data Privacy Officers (DPOs)—procuring an academic integrity solution requires moving beyond vague marketing slogans (<em>&ldquo;We value student privacy&rdquo;</em>) to enforce rigorous, legally binding <strong>Zero-Data-Retention (ZDR)</strong> contract architecture.
  </p>
  <div class="mt-4 pt-4 border-t border-teal-500/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-muted-foreground">
    <div class="flex items-start gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">✓</span>
      <span><strong>100% Ephemeral RAM:</strong> Zero disk writes, immediate hardware memory zeroization.</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">✓</span>
      <span><strong>Irrevocable Non-Training:</strong> Absolute statutory ban on LLM pre-training &amp; RLHF.</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-teal-600 dark:text-teal-400 font-bold">✓</span>
      <span><strong>Multi-Factor Proof:</strong> Keystroke replay, passage sliders &amp; quote autograding.</span>
    </div>
  </div>
</div>

<p><strong>Checkmark Plagiarism</strong> (<a href="https://checkmarkplagiarism.com">checkmarkplagiarism.com</a>) empowers educational leadership to implement defensible writing governance by unifying <a href="/services/ai-detection">passage-level AI detection</a>, <a href="/services/plagiarism-detection">side-by-side plagiarism verification</a>, <a href="/services/autograder">rubric-based autograding</a>, and patent-pending <a href="/services/writing-process">Essay Playback™ writing process telemetry</a> within a strict zero-retention, FERPA-compliant infrastructure certified for <a href="/services/integrations/canvas-lms">Canvas LMS</a> and <a href="/services/integrations/buzz-lms">Agilix Buzz LMS</a>.</p>

<p><img src="/images/learning/what-should-a-district-review-committee-look-for-in-zero-retention-ai-plagiarism-contracts/featured.png" alt="What Should a District Review Committee Look for in Zero-Retention AI Plagiarism Contracts - Checkmark Security Architecture" class="w-full rounded-2xl shadow-xl border border-border my-6" /></p>

<hr class="my-8 border-border" />

<h2>1. The AI Data Privacy Crisis in K–12 and Higher Education Procurement</h2>

<p>For over two decades, educational technology procurement treated academic integrity software as a static utility: a student uploads a digital document, a server scans it against a static corpus of web pages and archived student papers, and an instructor receives a similarity score. However, the mass adoption of foundation AI models and generative writing tools has fundamentally destabilized this paradigm. Today, academic integrity platforms operate complex multi-stage pipelines incorporating deep neural networks, transformer architectures, and third-party foundation model APIs.</p>

<p>This technological evolution introduces severe, systemic risks to student data privacy and district legal compliance. When evaluating software vendor contracts, District Review Committees must deconstruct the stark divergence between promotional public relations claims and enforceable contract mechanics.</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3.5 w-1/3">Vendor Marketing Claim (&ldquo;PR Language&rdquo;)</th>
        <th class="p-3.5 bg-rose-500/10 text-rose-700 dark:text-rose-300 w-2/3">Binding Contract Reality (&ldquo;The Fine Print&rdquo;)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">&ldquo;We take student privacy seriously.&rdquo;</td>
        <td class="p-3.5 text-rose-600 dark:text-rose-400">Standard Terms of Service permit &ldquo;product improvement, feature extraction, and algorithmic training on de-identified or aggregated data.&rdquo;</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">&ldquo;Submissions are encrypted and secure.&rdquo;</td>
        <td class="p-3.5 text-rose-600 dark:text-rose-400">Plaintext essays sit in persistent AWS/GCP SQL databases, subject to vendor employee inspection, diagnostic caching, and sub-processor synchronization.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">&ldquo;Our AI detector is state-of-the-art.&rdquo;</td>
        <td class="p-3.5 text-rose-600 dark:text-rose-400">Vendor acts as an API proxy, passing raw student text to public LLM endpoints without enterprise Zero-Data-Retention (ZDR) agreements, enabling 30-day cloud logging.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">&ldquo;You can request data deletion anytime.&rdquo;</td>
        <td class="p-3.5 text-rose-600 dark:text-rose-400">Once student text updates deep neural network weights, it is permanently parameterized across billions of floating-point tensors and mathematically un-deletable.</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Plaintext Data Custody vs. True Zero-Data-Retention (ZDR)</h3>

<p>Most commercial software vendors operate on a <strong>Plaintext Data Custody</strong> model. When an essay is submitted via an LMS integration (such as Canvas, Buzz, or Google Classroom), the vendor ingests the file, writes the raw text and metadata (student name, email, school ID, timestamp) to a persistent cloud database (e.g., Amazon S3, DynamoDB, PostgreSQL), and maintains that data indefinitely to build a proprietary competitive asset: a global peer comparison repository or a proprietary AI training corpus.</p>

<p>In sharp contrast, a true <strong>Zero-Data-Retention (ZDR)</strong> architecture enforces absolute data ephemerality:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="rounded-xl border border-teal-500/30 bg-teal-50/30 dark:bg-teal-950/20 p-4">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold">1</span>
      <h4 class="text-sm font-bold text-foreground m-0">Ephemeral RAM Lifecycle</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">The submission exists exclusively in volatile random-access memory (RAM) for the precise duration of the computational analysis (typically 300 to 800 milliseconds).</p>
  </div>
  <div class="rounded-xl border border-teal-500/30 bg-teal-50/30 dark:bg-teal-950/20 p-4">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold">2</span>
      <h4 class="text-sm font-bold text-foreground m-0">Hardware Zeroization</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">Upon completion of the scan and delivery of the report payload to the educator's authenticated LMS interface, memory buffers are explicitly overwritten with null bytes (<code>0x00</code>) and released.</p>
  </div>
  <div class="rounded-xl border border-teal-500/30 bg-teal-50/30 dark:bg-teal-950/20 p-4">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold">3</span>
      <h4 class="text-sm font-bold text-foreground m-0">Zero Disk Persistence</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">No raw text, draft revisions, or student identifiers are ever committed to solid-state disks (SSDs), relational databases, log aggregators, or long-term cloud backups.</p>
  </div>
</div>

<h3>The Four Hidden Vectors of Student Data Exploitation</h3>

<p>District Technology Directors and Legal Counsel must scrutinize vendor contracts for four specific extraction vectors:</p>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 text-xs">1</span>
      <span>Vector 1: Continuous Foundation Model Pre-Training</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Vendors training proprietary generative models or AI classifiers ingest hundreds of thousands of student essays to expand their training corpora. Minor students' personal reflections, argumentative structures, unique literary styles, and cultural vernacular are permanently subsumed into the training set, transforming student educational records into vendor commercial assets without compensation or consent.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 text-xs">2</span>
      <span>Vector 2: Reinforcement Learning from Human Feedback (RLHF &amp; RLAIF)</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2 leading-relaxed">
      When educators grade essays or correct AI-generated feedback within a platform, unscrupulous vendors capture the paired tuple:
    </p>
    <div class="bg-muted p-2 rounded font-mono text-xs text-foreground mb-2">
      Tuple = { Prompt, Student Essay, Teacher Feedback, Assigned Rubric Score }
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      This data is utilized in RLHF and Reinforcement Learning from AI Feedback (RLAIF) pipelines to fine-tune commercial automated grading engines, capitalizing on educator labor and student intellectual work without district authorization.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs">3</span>
      <span>Vector 3: Third-Party Sub-Processor API Leakage</span>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Many EdTech startups that brand themselves as &ldquo;AI-powered integrity platforms&rdquo; do not run local inference engines. Instead, they operate as simple API pass-through wrappers. When a student submits a paper, the vendor forwards the full plaintext to commercial LLM providers (e.g., OpenAI, Anthropic, Cohere, Microsoft Azure, Amazon Bedrock). Unless the vendor has executed binding <strong>Enterprise Zero-Data-Retention Agreements</strong> with every upstream sub-processor, those foundation model providers default to logging API requests for 30 days or longer, creating massive secondary breach vulnerabilities outside district oversight.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 text-xs">4</span>
      <span>Vector 4: The Permanent Parameterization Trap</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2 leading-relaxed">
      Once student writing is absorbed into a deep learning neural network during a training run, the data undergoes mathematical tokenization, high-dimensional vector transformation, and gradient descent optimization. The student's text becomes permanently embedded in the network's billion-parameter weight tensors:
    </p>
    <div class="bg-muted p-2 rounded font-mono text-xs text-foreground mb-2 text-center">
      W* = argmin_W &sum; L(f(x_i; W), y_i)
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      At this stage, executing a statutory &ldquo;Right to be Forgotten&rdquo; under privacy laws or fulfilling a parental data deletion demand under FERPA is <strong>technically impossible without destroying and retraining the entire multi-million-dollar neural model from scratch</strong>. Vendors cannot &ldquo;un-train&rdquo; a specific student's paragraph from model weights. Therefore, any vendor that permits model training on student work is in structural non-compliance with data deletion statutes.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>2. Statutory Compliance Deep Dive: Federal, State, and Intellectual Property Mandates</h2>

<p>District Review Committees must evaluate academic integrity contracts through an interlocking matrix of federal statutes, state data privacy laws, and federal intellectual property rights.</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Statute / Legal Doctrine</th>
        <th class="p-3">Core Legal Mandate</th>
        <th class="p-3 bg-teal-500/10 text-teal-700 dark:text-teal-300">Mandatory Contractual Requirement</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">FERPA<br /><span class="text-[11px] font-normal text-muted-foreground">(34 CFR Part 99)</span></td>
        <td class="p-3">Student Education Records Custody &amp; Purpose Limitation</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Direct Control under School Official Exception (&sect; 99.31); Strict ban on AI training (&sect; 99.33); Zero Redisclosure.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">COPPA<br /><span class="text-[11px] font-normal text-muted-foreground">(15 U.S.C. &sect;&sect; 6501–6506)</span></td>
        <td class="p-3">Privacy Protection for Minors Under Age 13</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Strict prohibition on behavioral profiling, typing telemetry retention, and commercial exploitation.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">NY Education Law &sect; 2-d<br /><span class="text-[11px] font-normal text-muted-foreground">(8 NYCRR Part 121)</span></td>
        <td class="p-3">Personally Identifiable Information (PII) Protection &amp; Data Security</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Mandatory Parents' Bill of Rights; NIST CSF 2.0 alignment; $10/student fine regime and state debarment for breach.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Illinois SOPPA<br /><span class="text-[11px] font-normal text-muted-foreground">(105 ILCS 85/)</span></td>
        <td class="p-3">Student Online Personal Protection &amp; Breach Notification</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Strict ban on student data aggregation; mandatory district DPA publication; 1-to-5 day breach notification SLA.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">California SOPIPA<br /><span class="text-[11px] font-normal text-muted-foreground">(Cal. Bus. &amp; Prof. 22584)</span></td>
        <td class="p-3">Prohibition of Student Profiling and Commercial Data Mining</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Total ban on targeted marketing, behavioral profiling, and non-educational commercial retention.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">U.S. Copyright Act<br /><span class="text-[11px] font-normal text-muted-foreground">(17 U.S.C. &sect; 102)</span></td>
        <td class="p-3">Intellectual Property Ownership of Original Works of Authorship</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Student retains 100% exclusive copyright; minor clickwrap licenses to create derivative models are legally void.</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>1. FERPA (Family Educational Rights and Privacy Act, 34 CFR Part 99)</h3>

<p>Under FERPA, student essays, laboratory reports, revision histories, and assigned grades constitute protected <strong>Education Records</strong> containing Personally Identifiable Information (PII). A school district cannot disclose PII to an external software vendor without prior written parental consent unless the vendor qualifies under the strict <strong>&ldquo;School Official&rdquo; Exception</strong> codified in 34 CFR &sect; 99.31(a)(1)(i)(B).</p>

<p>To qualify as a legitimate School Official, the vendor contract must satisfy four mandatory statutory criteria:</p>

<ol>
  <li><strong>Institutional Service Substitution:</strong> The vendor performs an institutional service or function for which the district would otherwise use its own employees (e.g., reviewing academic originality and grading).</li>
  <li><strong>Direct Control Requirement:</strong> The vendor must operate under the <strong>direct control</strong> of the educational agency or institution regarding the use, maintenance, and destruction of education records.</li>
  <li><strong>Purpose Limitation (&sect; 99.33(a)):</strong> The vendor may use student data <em>solely</em> for the specific educational purpose authorized in the contract. Using student essays to train commercial AI models, optimize third-party algorithms, or aggregate consumer datasets constitutes an explicit violation of federal law.</li>
  <li><strong>Prohibition on Redisclosure (&sect; 99.33(b)):</strong> The vendor cannot redisclose student PII to sub-processors or cloud partners without explicit district authorization and identical contractual constraints.</li>
</ol>

<div class="my-6 rounded-xl border border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20 p-5">
  <div class="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-400 font-bold text-sm">
    <span>⚠️ The Legal Direct Control Trap</span>
  </div>
  <p class="text-xs text-muted-foreground m-0 leading-relaxed">
    If a vendor’s master services agreement includes a clause asserting a &ldquo;non-exclusive, perpetual, royalty-free license to use submitted content for algorithmic training and platform optimization,&rdquo; the district loses &ldquo;direct control&rdquo; under FERPA &sect; 99.31, rendering the entire contract legally invalid and exposing the district to federal compliance sanctions from the U.S. Department of Education's Student Privacy Policy Office (SPPO).
  </p>
</div>

<h3>2. COPPA (Children’s Online Privacy Protection Act, 15 U.S.C. §§ 6501–6506)</h3>

<p>In elementary and middle school settings (grades K–8), students under 13 years of age are protected under COPPA. While schools can act as the parent's agent to consent to data collection for strictly educational purposes (<em>in loco parentis</em>), this authority is legally conditioned upon the software operator using the personal information <strong>exclusively for educational activities and for no other commercial purpose</strong>.</p>

<p>If an academic integrity vendor tracks minor students across sessions using persistent tracking cookies, constructs behavioral profiles based on typing cadences or application usage, or utilizes minor submissions to train machine learning models for broader commercial sale, the district’s consent is legally void under FTC COPPA Enforcement Policy, exposing both the district and vendor to civil penalties exceeding $50,000 per violation.</p>

<h3>3. State-Level Data Privacy Legislation</h3>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h4 class="text-sm font-bold text-foreground mb-1">New York Ed Law § 2-d</h4>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">Requires executed Parents' Bill of Rights, NIST Cybersecurity Framework (CSF 2.0) alignment, and carries statutory penalties of up to <strong>$10 per breached student record</strong> alongside statewide vendor debarment.</p>
  </div>
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h4 class="text-sm font-bold text-foreground mb-1">Illinois SOPPA</h4>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">Strictly prohibits student profiling and commercial data aggregation; mandates public posting of all signed district DPAs and requires strict 1-to-5 day breach notification SLAs.</p>
  </div>
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <h4 class="text-sm font-bold text-foreground mb-1">California SOPIPA</h4>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">Prohibits operators from using K–12 student data for targeted advertising, amassing behavioral profiles, or retaining data beyond direct school service execution.</p>
  </div>
</div>

<h3>4. Student Copyright and Intellectual Property (17 U.S.C. § 102)</h3>

<p>Under Title 17 of the United States Code, original student essays, creative writing, poetry, research papers, and technical projects are protected by <strong>federal copyright law immediately upon fixation in a tangible medium of expression</strong>. Students (or their legal guardians, in the case of minors) retain exclusive ownership of their intellectual property.</p>

<p>Minors lack legal capacity to execute broad copyright assignments via forced online clickwrap terms. Ingesting student copyright-protected writing into commercial generative AI training corpora without explicit, uncoerced copyright licensing is legally indefensible and violates student intellectual property rights.</p>

<hr class="my-8 border-border" />

<h2>3. Technical Anatomy of a True Zero-Retention Architecture</h2>

<p>To verify compliance during the Request for Proposal (RFP) process, the District Review Committee's technical sub-committee (CTO, Network Architects, Security Engineers) must interrogate the vendor's underlying technical architecture.</p>

<div class="my-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-slate-100 p-5 font-mono text-xs">
  <div class="text-slate-400 font-bold uppercase tracking-wider text-[11px] mb-3 pb-2 border-b border-slate-800 text-center">
    CHECKMARK ZERO-DATA-RETENTION (ZDR) EPHEMERAL PIPELINE
  </div>
  <div class="space-y-3">
    <div class="rounded bg-slate-800 p-3 border border-slate-700">
      <div class="text-teal-400 font-bold">1. AUTHENTICATED INGESTION (LTI 1.3 Advantage Protocol / TLS 1.3 PFS)</div>
      <div class="text-[11px] text-slate-300">Canvas LMS / Buzz LMS / Google Classroom &rarr; mTLS API Gateway into isolated enclave</div>
    </div>
    <div class="text-center text-teal-400">&darr; Volatile Memory Ingestion (No Disk I/O)</div>
    <div class="rounded bg-slate-800/90 p-4 border border-teal-500/40">
      <div class="text-teal-300 font-bold mb-2">2. VOLATILE RAM PROCESSING ENCLAVE (AWS Nitro Enclaves / Cgroup Isolation)</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
        <div class="bg-slate-900/60 p-2 rounded border border-slate-700">
          <span class="text-amber-400 font-semibold">Passage-Level AI:</span> Perplexity &amp; burstiness inference
        </div>
        <div class="bg-slate-900/60 p-2 rounded border border-slate-700">
          <span class="text-cyan-400 font-semibold">Salted MinHash:</span> Cryptographic peer shingle matching
        </div>
        <div class="bg-slate-900/60 p-2 rounded border border-slate-700">
          <span class="text-teal-400 font-semibold">Essay Playback™:</span> Keystroke dynamics chronology
        </div>
        <div class="bg-slate-900/60 p-2 rounded border border-slate-700">
          <span class="text-emerald-400 font-semibold">Rubric Engine:</span> Quote-anchored autograding match
        </div>
      </div>
    </div>
    <div class="text-center text-emerald-400">&darr; Direct Secure Payload Dispatch</div>
    <div class="rounded bg-slate-800 p-3 border border-slate-700">
      <div class="text-emerald-400 font-bold">3. REPORT RETURN &amp; LMS SPEEDGRADER DELIVERY</div>
      <div class="text-[11px] text-slate-300">Ephemeral report payload dispatched directly to authenticated educator interface</div>
    </div>
    <div class="text-center text-teal-400">&darr; Immediate Memory Overwrite (DoD 5220.22-M Standard)</div>
    <div class="rounded bg-teal-950/40 p-3 border border-teal-500/40 text-center">
      <div class="text-teal-300 font-bold">4. HARDWARE MEMORY ZEROIZATION (explicit_bzero)</div>
      <div class="text-[11px] text-teal-200">Heap and buffer overwritten with 0x00 null bytes &bull; RAM pointers released &bull; Zero disk trace</div>
    </div>
  </div>
</div>

<h3>Ephemeral In-Memory (RAM) Compute Pipelines vs. Persistent Storage Stacks</h3>

<p>Checkmark Plagiarism utilizes a <strong>Stateless Ephemeral Compute Enclave Architecture</strong>. The technical mechanics operate as follows:</p>

<ol>
  <li><strong>Ingestion via TLS 1.3 with Perfect Forward Secrecy (PFS):</strong> Submissions are received over encrypted tunnels utilizing <code>TLS_AES_256_GCM_SHA384</code> with ephemeral session keys.</li>
  <li><strong>Volatile RAM-Only Execution:</strong> The entire analysis suite executes exclusively in ephemeral system RAM utilizing isolated AWS Nitro Enclaves. At no point in the lifecycle is student plaintext written to disk storage, swap space, temporary cache volumes (<code>/tmp</code>), or application log sinks.</li>
  <li><strong>Hardware Memory Zeroization (<code>explicit_bzero</code>):</strong> Immediately after the analysis payload is dispatched back to the educator's browser, allocated heap buffers undergo active cryptographic zeroization compliant with DoD 5220.22-M data sanitization standards.</li>
  <li><strong>Zero Residual Footprint:</strong> Even if a server instance is powered down or imaged by an adversary, zero bytes of student writing or identifiers can be recovered.</li>
</ol>

<h3>Sub-Processor Supply Chain Auditing: Enterprise Zero-Data Retention SLAs</h3>

<p>A platform is only as secure as its upstream cloud supply chain. District committees must demand end-to-end transparency regarding every sub-processor.</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Architectural Tier</th>
        <th class="p-3">Sub-Processor Technical Role</th>
        <th class="p-3 bg-teal-500/10 text-teal-700 dark:text-teal-300">Mandatory Zero-Retention SLA Terms</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Cloud Infrastructure<br /><span class="text-[11px] font-normal text-muted-foreground">(AWS / Google Cloud)</span></td>
        <td class="p-3">Compute orchestration, volatile RAM hosting (Nitro Enclaves / Shielded VMs)</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">SOC 2 Type II, ISO 27001, HIPAA/FERPA BAA; zero persistent disk writes.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Foundation Model APIs<br /><span class="text-[11px] font-normal text-muted-foreground">(OpenAI / Anthropic / Bedrock)</span></td>
        <td class="p-3">Specialized NLP semantic parsing (grammar, syntax, rubric parsing)</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Zero Data Retention (ZDR) Enterprise Addendum; zero 30-day logging; no RLHF.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Vector Search Database<br /><span class="text-[11px] font-normal text-muted-foreground">(Pinecone / Qdrant)</span></td>
        <td class="p-3">Plagiarism web &amp; academic matching (web index &amp; public corpora)</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Ephemeral query hashing; zero storage of incoming query vector plaintext.</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Privacy-Preserving Peer Plagiarism Detection: District-Isolated Cryptographic Hash Vaults</h3>

<p>One of the most complex challenges facing a District Review Committee is resolving the conflict between <strong>student-to-student peer plagiarism detection</strong> (identifying collusion across different sections or past semesters) and <strong>strict student data privacy</strong>.</p>

<p>Legacy vendors resolve this by uploading all student essays into a massive, multi-tenant global database where papers from District A are stored in plaintext to catch copying in District B. This practice creates severe FERPA vulnerabilities. Checkmark Plagiarism solves this through <strong>District-Isolated Salted Locality-Sensitive Hashing (LSH) and MinHash Cryptography</strong>:</p>

<div class="my-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-slate-100 p-5 font-mono text-xs">
  <div class="text-slate-400 font-bold uppercase tracking-wider text-[11px] mb-3 pb-2 border-b border-slate-800 text-center">
    PRIVACY-PRESERVING SALTED MINHASH PEER MATCHING ARCHITECTURE
  </div>
  <div class="space-y-3">
    <div class="rounded bg-slate-800 p-3 border border-slate-700">
      <div class="text-teal-400 font-bold">1. K-SHINGLE TOKENIZATION (k=7) &amp; DISTRICT CRYPTOGRAPHIC SALT</div>
      <div class="text-[11px] text-slate-300">Normalized essay is segmented into 7-word shingles and combined with the private district salt key.</div>
    </div>
    <div class="text-center text-teal-400">&darr; One-Way HMAC-SHA256 MinHash Calculation</div>
    <div class="rounded bg-slate-800 p-3 border border-slate-700">
      <div class="text-cyan-400 font-bold">2. 128 INDEPENDENT MINHASH SIGNATURES</div>
      <div class="text-[11px] text-slate-300">Generates irreversible mathematical signature: <code>[0x8F, 0x12, 0xC4, 0x9A, ...]</code></div>
    </div>
    <div class="text-center text-amber-400">&darr; Vault Comparison</div>
    <div class="rounded bg-slate-800/90 p-4 border border-amber-500/40">
      <div class="text-amber-300 font-bold mb-1">3. DISTRICT-ISOLATED PRIVATE HASH VAULT</div>
      <div class="text-[11px] text-slate-300 leading-relaxed">
        Stores ONLY 64-bit mathematical integer hashes &bull; Zero plaintext, zero PII, zero reconstructible prose &bull; Jaccard Similarity computed purely mathematically: <code>J(A, B) = |A &cap; B| / |A &cup; B|</code>
      </div>
    </div>
    <div class="text-center text-teal-400">&darr; Ephemeral Purge</div>
    <div class="rounded bg-teal-950/40 p-3 border border-teal-500/40 text-center">
      <div class="text-teal-300 font-bold">4. ZERO PLAINTEXT POOLING &amp; TENANT ISOLATION</div>
      <div class="text-[11px] text-teal-200">Documents are never shared across districts. Plaintext is destroyed instantly.</div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>4. Enterprise Identity, Interoperability, and Multi-Factor Verification</h2>

<p>A modern academic integrity platform must integrate seamlessly into district IT infrastructure while eliminating security friction for teachers and students.</p>

<h3>1EdTech LTI 1.3 Advantage Protocol Suite</h3>

<p>District Review Committees must insist on certified <strong>1EdTech LTI 1.3 Advantage</strong> compliance, which deprecates legacy, insecure OAuth 1.0/LTI 1.1 integrations in favor of modern OAuth 2.0 and JSON Web Token (JWT) asymmetric key architectures.</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">LTI 1.3 Core Standard</th>
        <th class="p-3">Technical Protocol Specification</th>
        <th class="p-3 bg-teal-500/10 text-teal-700 dark:text-teal-300">Educational &amp; Administrative Benefit</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">LTI Core<br /><span class="text-[11px] font-normal text-muted-foreground">(OAuth 2.0 / JWT)</span></td>
        <td class="p-3">Asymmetric RSA/ECDSA signature verification with OIDC launch flow</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Eliminates shared secrets; provides single-click seamless LMS launch inside Canvas SpeedGrader &amp; Buzz.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Assignment &amp; Grade Services<br /><span class="text-[11px] font-normal text-muted-foreground">(AGS 2.0)</span></td>
        <td class="p-3">Bidirectional gradebook sync with line item and score payload support</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">AI autograder suggestions and educator-approved rubric scores push directly to LMS gradebook with 1 click.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Names &amp; Role Provisioning<br /><span class="text-[11px] font-normal text-muted-foreground">(NRPS 2.0)</span></td>
        <td class="p-3">Context-scoped roster sync with anonymized pseudonymous identifiers</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Privacy-governed roster provisioning without exposing unnecessary external student PII.</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Checkmark’s Multi-Factor Integrity Verification Suite</h3>

<p>Rather than relying on arbitrary, punitive whole-document percentage scores from black-box AI detectors, Checkmark Plagiarism provides educators with a comprehensive, transparent evidence ecosystem:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="rounded-xl border border-teal-500/30 bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-teal-600 dark:text-teal-400 font-bold text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-950 text-xs font-bold">1</span>
      <span>Essay Playback™</span>
    </div>
    <ul class="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 m-0">
      <li><strong>Keystroke Dynamics:</strong> Replay writing at 1x to 8x speed.</li>
      <li><strong>Cognitive Pauses:</strong> Measures genuine drafting struggle.</li>
      <li><strong>Paste Capture:</strong> Preserves full pasted text buffer.</li>
      <li><strong>Transcription Detection:</strong> Flags robotic typing cadence.</li>
    </ul>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-950 text-xs font-bold">2</span>
      <span>Passage-Level AI Sliders</span>
    </div>
    <ul class="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 m-0">
      <li><strong>Sentence Underlining:</strong> Direct visual text highlights.</li>
      <li><strong>Confidence Sliders:</strong> Human vs. AI probability scores.</li>
      <li><strong>&lt;150w Guardrails:</strong> Automatically returns N/A on short text.</li>
      <li><strong>Paraphrase Immunity:</strong> Catches spun AI text via playback.</li>
    </ul>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-card p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950 text-xs font-bold">3</span>
      <span>Quote Autograder</span>
    </div>
    <ul class="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 m-0">
      <li><strong>Draft Feedback:</strong> Evaluates prose against district rubrics.</li>
      <li><strong>Quote-Anchored Cards:</strong> Links scores to student sentences.</li>
      <li><strong>Teacher Final Authority:</strong> Grades remain provisional drafts.</li>
      <li><strong>1-Click Grade Sync:</strong> Pushes scores straight into Canvas/Buzz.</li>
    </ul>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>5. The 10-Point Technical RFP Evaluation Rubric for District Committees</h2>

<p>District Review Committees should evaluate competing vendors using the following weighted 100-point scoring rubric:</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">#</th>
        <th class="p-3">Evaluation Criterion</th>
        <th class="p-3 text-center">Weight</th>
        <th class="p-3">Technical Verification Method</th>
        <th class="p-3 bg-teal-500/10 text-teal-700 dark:text-teal-300">Minimum Passing Standard</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">1</td>
        <td class="p-3 font-medium text-foreground">Zero-Data-Retention (ZDR) Compute Architecture</td>
        <td class="p-3 text-center font-bold text-teal-600">15 pts</td>
        <td class="p-3">Architectural audit; code review proof; memory zeroization verification.</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">100% Ephemeral RAM; zero disk persistence.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">2</td>
        <td class="p-3 font-medium text-foreground">Contractual Non-Training Guarantee (Pre-Training &amp; RLHF)</td>
        <td class="p-3 text-center font-bold text-teal-600">15 pts</td>
        <td class="p-3">Legal DPA review; explicit model training &amp; fine-tuning exclusion clause.</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Absolute prohibition; zero commercial exceptions.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">3</td>
        <td class="p-3 font-medium text-foreground">Sub-Processor Supply Chain ZDR SLAs</td>
        <td class="p-3 text-center font-bold text-teal-600">10 pts</td>
        <td class="p-3">Executed upstream enterprise addenda with foundation model API providers.</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Zero 30-day logging with all upstream LLM vendors.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">4</td>
        <td class="p-3 font-medium text-foreground">Privacy-Preserving Peer Plagiarism Matching</td>
        <td class="p-3 text-center font-bold text-teal-600">10 pts</td>
        <td class="p-3">Cryptographic architecture review; salted Locality-Sensitive Hashing audit.</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Salted MinHash / LSH; zero raw plaintext pools.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">5</td>
        <td class="p-3 font-medium text-foreground">Writing Process &amp; Keystroke Dynamics (Essay Playback™)</td>
        <td class="p-3 text-center font-bold text-teal-600">10 pts</td>
        <td class="p-3">Live sandbox demonstration of keystroke replay, paste capture, and scrub speed.</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Patent-pending Essay Playback™ capability.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">6</td>
        <td class="p-3 font-medium text-foreground">Passage-Level Granular AI Detection with Sliders</td>
        <td class="p-3 text-center font-bold text-teal-600">10 pts</td>
        <td class="p-3">Live benchmark testing across human, AI, and paraphrased sample essays.</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Sidebar evidence cards &amp; &lt;150w guardrails.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">7</td>
        <td class="p-3 font-medium text-foreground">Statutory Alignment (FERPA, COPPA, NY 2-d, SOPPA, SOPIPA)</td>
        <td class="p-3 text-center font-bold text-teal-600">10 pts</td>
        <td class="p-3">Legal review of State Supplemental DPAs (Parents' Bill of Rights, NIST CSF).</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Full statutory compliance; no liability waivers.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">8</td>
        <td class="p-3 font-medium text-foreground">1EdTech LTI 1.3 Advantage &amp; SSO Certification</td>
        <td class="p-3 text-center font-bold text-teal-600">10 pts</td>
        <td class="p-3">Official 1EdTech certification directory; SAML 2.0 / Entra ID / Google SSO test.</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Certified LTI 1.3 Core, AGS, and NRPS.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">9</td>
        <td class="p-3 font-medium text-foreground">Teacher-in-the-Loop Rubric Grading &amp; Quote Feedback</td>
        <td class="p-3 text-center font-bold text-teal-600">5 pts</td>
        <td class="p-3">LMS SpeedGrader rubric sync testing; quote-linked feedback card validation.</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Provisional drafts; teacher final veto.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">10</td>
        <td class="p-3 font-medium text-foreground">SOC 2 Type II, ISO 27001, &amp; Cyber Insurance ($5M+)</td>
        <td class="p-3 text-center font-bold text-teal-600">5 pts</td>
        <td class="p-3">Current, unredacted third-party audit reports and Certificates of Insurance.</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">Annual SOC 2 Type II + $5M cyber policy.</td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="border-t-2 border-border bg-muted/80 font-bold text-foreground">
        <td colspan="2" class="p-3">TOTAL POSSIBLE SCORE</td>
        <td class="p-3 text-center text-teal-600">100 pts</td>
        <td colspan="2" class="p-3 text-xs font-normal text-muted-foreground">Minimum Passing Threshold: <strong>85 Points</strong>. (Note: Scores below 12/15 on Criteria 1 or 2 result in immediate disqualification).</td>
      </tr>
    </tfoot>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>6. Contract Redlining Guide: Dangerous Clauses vs. Gold Standard Language</h2>

<p>District General Counsel and Data Privacy Officers should utilize this side-by-side redline guide during vendor contract negotiations.</p>

<div class="my-6 space-y-6">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-3 mt-0">Clause 1: Data Ownership and Intellectual Property Licensing</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-lg border border-rose-500/30 bg-rose-50/40 dark:bg-rose-950/20 p-4">
        <div class="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-400 font-bold text-xs">
          <span>❌ TOXIC VENDOR CLAUSE (STRIKE / REJECT)</span>
        </div>
        <p class="font-mono text-xs text-muted-foreground m-0 leading-relaxed italic">
          &ldquo;Customer hereby grants Vendor a non-exclusive, worldwide, royalty-free, perpetual, irrevocable license to use, host, store, reproduce, modify, create derivative works from, and analyze Customer Content and Student Submissions for the purpose of operating, improving, developing, and enhancing Vendor’s machine learning models, artificial intelligence algorithms, and related commercial products.&rdquo;
        </p>
      </div>
      <div class="rounded-lg border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-4">
        <div class="flex items-center gap-2 mb-2 text-teal-700 dark:text-teal-400 font-bold text-xs">
          <span>✅ GOLD STANDARD DISTRICT CLAUSE (MANDATE)</span>
        </div>
        <p class="font-mono text-xs text-foreground m-0 leading-relaxed">
          &ldquo;District, its participating educational institutions, and its student authors retain sole and exclusive ownership of, and all intellectual property rights in and to, all Student Data, submissions, essays, revision histories, and associated metadata. Vendor is granted a strictly limited, non-exclusive, revocable license to access and process Student Submissions solely and ephemerally in volatile memory for the direct and exclusive purpose of delivering the contracted analysis to the authenticated District user. Vendor acquires zero ownership, copyright, or residual intellectual property rights in Student Data.&rdquo;
        </p>
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-3 mt-0">Clause 2: Prohibition on Artificial Intelligence Model Training and RLHF</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-lg border border-rose-500/30 bg-rose-50/40 dark:bg-rose-950/20 p-4">
        <div class="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-400 font-bold text-xs">
          <span>❌ TOXIC VENDOR CLAUSE (STRIKE / REJECT)</span>
        </div>
        <p class="font-mono text-xs text-muted-foreground m-0 leading-relaxed italic">
          &ldquo;Vendor may use de-identified, anonymized, or aggregated student text to train, fine-tune, optimize, or validate existing or future artificial intelligence algorithms, neural networks, and automated scoring systems without further notice or compensation.&rdquo;
        </p>
      </div>
      <div class="rounded-lg border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-4">
        <div class="flex items-center gap-2 mb-2 text-teal-700 dark:text-teal-400 font-bold text-xs">
          <span>✅ GOLD STANDARD DISTRICT CLAUSE (MANDATE)</span>
        </div>
        <p class="font-mono text-xs text-foreground m-0 leading-relaxed">
          &ldquo;Vendor is explicitly and irrevocably prohibited from utilizing Student Data, whether raw, de-identified, pseudonymized, or aggregated, for the purpose of training, fine-tuning, validating, testing, or updating any machine learning model, deep neural network, Large Language Model (LLM), natural language processing classifier, or Reinforcement Learning from Human Feedback (RLHF/RLAIF) pipeline, whether owned by Vendor or any third party. Any such utilization constitutes an incurable material breach of this Agreement and an unlawful conversion of District educational records under FERPA 34 CFR Part 99.&rdquo;
        </p>
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-3 mt-0">Clause 3: Data Retention, Volatile Storage, and Zeroization</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-lg border border-rose-500/30 bg-rose-50/40 dark:bg-rose-950/20 p-4">
        <div class="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-400 font-bold text-xs">
          <span>❌ TOXIC VENDOR CLAUSE (STRIKE / REJECT)</span>
        </div>
        <p class="font-mono text-xs text-muted-foreground m-0 leading-relaxed italic">
          &ldquo;Vendor will store Student Submissions in its secure repository to facilitate ongoing similarity scanning and comparative institutional analysis until such time as Customer terminates its subscription.&rdquo;
        </p>
      </div>
      <div class="rounded-lg border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-4">
        <div class="flex items-center gap-2 mb-2 text-teal-700 dark:text-teal-400 font-bold text-xs">
          <span>✅ GOLD STANDARD DISTRICT CLAUSE (MANDATE)</span>
        </div>
        <p class="font-mono text-xs text-foreground m-0 leading-relaxed">
          &ldquo;Vendor shall operate under a strict Zero-Data-Retention (ZDR) architecture. All Student Submissions, keystroke logs, and text payloads must be processed entirely within volatile Random Access Memory (RAM) and shall never be written to non-volatile disk storage, permanent relational databases, or external log aggregators. Upon transmission of the final analysis report to the authenticated District session, all memory buffers allocated for processing shall be cryptographically zeroized (overwritten with null bytes 0x00) within a maximum of six hundred (600) seconds. Student-to-student peer plagiarism matching must be conducted exclusively via one-way, irreversible salted cryptographic MinHash signatures.&rdquo;
        </p>
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-3 mt-0">Clause 4: Upstream Sub-Processors and API Pass-Through Guarantees</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-lg border border-rose-500/30 bg-rose-50/40 dark:bg-rose-950/20 p-4">
        <div class="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-400 font-bold text-xs">
          <span>❌ TOXIC VENDOR CLAUSE (STRIKE / REJECT)</span>
        </div>
        <p class="font-mono text-xs text-muted-foreground m-0 leading-relaxed italic">
          &ldquo;Vendor may engage reputable third-party cloud service providers and AI API vendors in the delivery of its services, subject to standard commercial terms.&rdquo;
        </p>
      </div>
      <div class="rounded-lg border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-4">
        <div class="flex items-center gap-2 mb-2 text-teal-700 dark:text-teal-400 font-bold text-xs">
          <span>✅ GOLD STANDARD DISTRICT CLAUSE (MANDATE)</span>
        </div>
        <p class="font-mono text-xs text-foreground m-0 leading-relaxed">
          &ldquo;Vendor shall disclose to District all third-party sub-processors and cloud infrastructure providers. Vendor warrants that every upstream foundation model API provider (including but not limited to OpenAI, Anthropic, and AWS) is bound by executed, binding Enterprise Zero-Data-Retention Agreements prohibiting persistent request logging, secondary employee inspection, and model training. Vendor assumes full, joint and several liability for any data privacy breach or unauthorized retention caused by any sub-processor.&rdquo;
        </p>
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-base font-bold text-foreground mb-3 mt-0">Clause 5: Data Breach Notification, Forensics, and Full Indemnification</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-lg border border-rose-500/30 bg-rose-50/40 dark:bg-rose-950/20 p-4">
        <div class="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-400 font-bold text-xs">
          <span>❌ TOXIC VENDOR CLAUSE (STRIKE / REJECT)</span>
        </div>
        <p class="font-mono text-xs text-muted-foreground m-0 leading-relaxed italic">
          &ldquo;In the event of a confirmed security incident, Vendor will notify Customer within a commercially reasonable time. Vendor's total aggregate liability arising out of or related to this Agreement shall be limited to the total fees paid by Customer in the preceding twelve (12) months.&rdquo;
        </p>
      </div>
      <div class="rounded-lg border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-4">
        <div class="flex items-center gap-2 mb-2 text-teal-700 dark:text-teal-400 font-bold text-xs">
          <span>✅ GOLD STANDARD DISTRICT CLAUSE (MANDATE)</span>
        </div>
        <p class="font-mono text-xs text-foreground m-0 leading-relaxed">
          &ldquo;Vendor shall notify District’s Chief Information Officer and Legal Counsel in writing within twenty-four (24) hours of discovering any suspected or confirmed unauthorized access, breach, or leakage of Student Data. Vendor shall bear all costs associated with independent third-party forensic investigations, statutory credit monitoring services for affected individuals, regulatory fines (including New York Ed Law § 2-d penalties), and legal defense costs. Vendor’s indemnification obligations and liability for data privacy violations, FERPA breaches, and IP infringement shall be uncapped and fully covered by a dedicated Cyber Liability Insurance Policy with limits of no less than Five Million Dollars ($5,000,000.00).&rdquo;
        </p>
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. Three Real-World District Procurement Case Studies</h2>

<p>The following case studies illustrate how diverse educational agencies navigate the procurement process to protect student privacy and pedagogical integrity.</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-5">
  <div class="rounded-xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm">
    <div>
      <div class="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">Case Study 1: Suburban 1:1 District</div>
      <h3 class="text-base font-bold text-foreground mb-2 mt-0">Westchester Unified School District</h3>
      <p class="text-xs font-semibold text-muted-foreground mb-2">14,000 Students &bull; 12 Campuses &bull; 1:1 Apple 1:1</p>
      <ul class="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 mb-4">
        <li><strong>Challenge:</strong> Internal audit revealed legacy vendor terms permitted essay archiving in a global ML training database. Parents filed complaints under NY Ed Law &sect; 2-d.</li>
        <li><strong>Procurement:</strong> Disqualified 3 legacy vendors for refusing to strike model-training clauses. Mandated NIST CSF alignment.</li>
        <li><strong>Outcome:</strong> Deployed Checkmark Plagiarism with signed NY Ed Law &sect; 2-d Supplemental DPA, verified SOC 2 Type II, and Essay Playback™ for grades 6–12.</li>
      </ul>
    </div>
    <div class="pt-3 border-t border-border text-[11px] font-semibold text-teal-600">
      ✓ 100% NY Ed Law 2-d Compliant
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm">
    <div>
      <div class="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">Case Study 2: Urban Unified District</div>
      <h3 class="text-base font-bold text-foreground mb-2 mt-0">Great Lakes Metro School District</h3>
      <p class="text-xs font-semibold text-muted-foreground mb-2">48,000 Students &bull; 36 High Schools &bull; Canvas LMS</p>
      <ul class="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 mb-4">
        <li><strong>Challenge:</strong> Generic &ldquo;78% AI&rdquo; scores led to contentious disciplinary hearings, disproportionately impacting ELL and neurodivergent students.</li>
        <li><strong>Procurement:</strong> Established mandatory technical threshold: passage-level confidence sliders, writing process playback, and isolated peer hashing.</li>
        <li><strong>Outcome:</strong> Rolled out Checkmark via LTI 1.3 into Canvas SpeedGrader. Shifted from punitive accusations to supportive coaching; false accusation grievances dropped by 94%.</li>
      </ul>
    </div>
    <div class="pt-3 border-t border-border text-[11px] font-semibold text-teal-600">
      ✓ 94% Drop in AI Grievances
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm">
    <div>
      <div class="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">Case Study 3: Virtual Academy Consortium</div>
      <h3 class="text-base font-bold text-foreground mb-2 mt-0">Prairie State Virtual Academy</h3>
      <p class="text-xs font-semibold text-muted-foreground mb-2">18,000 Online Students &bull; 14 Rural Districts &bull; Buzz LMS</p>
      <ul class="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 mb-4">
        <li><strong>Challenge:</strong> Instructors needed rubric assistance for large asynchronous loads, but competitor tools forwarded student work to consumer LLMs without SOPPA DPAs.</li>
        <li><strong>Procurement:</strong> Mandated end-to-end data flow topology audits and executed sub-processor ZDR SLAs.</li>
        <li><strong>Outcome:</strong> Deployed Checkmark's Teacher-in-the-Loop Autograder in Buzz LMS, cutting turnaround by 60% with zero persistent data storage.</li>
      </ul>
    </div>
    <div class="pt-3 border-t border-border text-[11px] font-semibold text-teal-600">
      ✓ 60% Faster Grading &bull; 100% SOPPA Compliant
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Step-by-Step District Review Committee Procurement Workflow</h2>

<p>District committees should follow this structured, five-phase governance protocol to evaluate, negotiate, and implement a zero-retention academic integrity platform:</p>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-4">
    <div class="flex items-center gap-2 mb-1">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">Phase 1</span>
      <h4 class="text-sm font-bold text-foreground m-0">Committee Formation &amp; Governance Alignment (Weeks 1–2)</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Convene a cross-functional review committee (Assistant Supt. of Curriculum, CTO, DPO, Legal Counsel, English Dept. Chairs, Union reps). Formalize non-negotiable legal baselines: Zero Data Retention, zero AI model training, certified LTI 1.3 Advantage, and restorative pedagogical standards.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4">
    <div class="flex items-center gap-2 mb-1">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">Phase 2</span>
      <h4 class="text-sm font-bold text-foreground m-0">Technical RFP Issuance &amp; Sub-Processor Interrogation (Weeks 3–5)</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Release competitive RFP incorporating the 10-Point Evaluation Rubric. Require all bidders to submit network topology diagrams, SOC 2 Type II reports, executed upstream LLM ZDR addenda, and state supplemental DPAs.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4">
    <div class="flex items-center gap-2 mb-1">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">Phase 3</span>
      <h4 class="text-sm font-bold text-foreground m-0">Live Sandbox Testing &amp; Forensic Keystroke Validation (Weeks 6–7)</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Conduct a live pilot with 20–30 educators across Canvas, Buzz, and Google Classroom. Test forensic edge cases: external paste detection, paraphrasing tool (AI humanizer) resistance, and short-text (&lt;150w) disclaimers.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4">
    <div class="flex items-center gap-2 mb-1">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">Phase 4</span>
      <h4 class="text-sm font-bold text-foreground m-0">Legal Redlining, DPA Finalization &amp; Board Approval (Weeks 8–9)</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Legal Counsel and DPO execute binding Data Privacy Agreements using the Contract Redlining Guide. Ensure $5M Cyber Liability coverage and submit recommendations to the Board of Education for formal adoption.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4">
    <div class="flex items-center gap-2 mb-1">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">Phase 5</span>
      <h4 class="text-sm font-bold text-foreground m-0">Enterprise Deployment &amp; Pedagogical Onboarding (Weeks 10–12)</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Configure 1EdTech LTI 1.3 Advantage, SAML SSO, and district-isolated MinHash vaults. Deliver teacher professional development focusing on supportive, non-accusatory writing conferences and quote-anchored rubric feedback.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>9. Frequently Asked Questions (District Leadership FAQ)</h2>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2 mt-0">1. Why is a contractual Zero-Data-Retention (ZDR) clause superior to vendor &ldquo;de-identification&rdquo;?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      &ldquo;De-identification&rdquo; is an insufficient safeguard in educational AI applications. Modern natural language processing models can easily re-identify individuals through stylometric analysis, unique biographical references, or contextual classroom prompts embedded within an essay. Furthermore, de-identified text retained in vendor databases remains vulnerable to corporate data breaches, sub-processor leakage, and unauthorized AI training. A strict <strong>Zero-Data-Retention (ZDR)</strong> clause eliminates these risks entirely by ensuring that text is processed solely in volatile RAM and cryptographically zeroized immediately upon report generation.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2 mt-0">2. How can Checkmark detect peer copying between students if it does not store raw student essays?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Checkmark utilizes <strong>District-Isolated Salted Locality-Sensitive Hashing (MinHash/LSH)</strong>. Instead of storing readable plaintext essays, the platform converts student submissions into irreversible 64-bit mathematical hashes salted with a private district key. When another student submits an essay, the platform compares the mathematical overlap of the hashes (Jaccard similarity). If a match is detected within the district’s isolated vault, the instructor is alerted to the exact overlapping passage without the platform ever having stored or exposed the original essay in plaintext.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2 mt-0">3. Does FERPA allow a school district to use third-party AI platforms for autograding?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Yes, provided the platform operates strictly under FERPA’s <strong>&ldquo;School Official&rdquo; Exception (34 CFR &sect; 99.31(a)(1)(i)(B))</strong>. The vendor must be under the district’s direct control, use student data solely for the designated educational evaluation, prohibit redisclosure, and maintain a <strong>Teacher-in-the-Loop</strong> model where all AI-generated grades remain provisional drafts until reviewed, edited, and approved by a certified educator. Checkmark Plagiarism is fully structured around this compliant framework.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2 mt-0">4. How does Checkmark protect innocent students from false positive AI accusations?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Generic AI detectors generate a single, opaque whole-document percentage (e.g., &ldquo;65% AI Probability&rdquo;) based on statistical word predictability, frequently misidentifying authentic writing by neurodivergent students or English Language Learners. Checkmark prevents false accusations through: (1) <strong>Passage-Level Granularity</strong> with calibrated confidence sliders; (2) <strong>Honest Short-Text Guardrails</strong> returning <code>N/A</code> under ~150 words; and (3) <strong>Patent-Pending Essay Playback™</strong> providing keystroke-by-keystroke temporal proof of authentic drafting, composing pauses, and revisions.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2 mt-0">5. What makes Essay Playback™ legally and pedagogically defensible during student conferences?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Standard revision history tools (such as native Google Docs version history) only capture coarse, periodic cloud snapshots taken every few minutes, often missing intermediate revisions and falsely making rapid drafting look like an external paste. Checkmark’s patent-pending <strong>Essay Playback™</strong> captures the granular, real-time keystroke dynamics of the entire writing session. When a teacher and student review a submission together, they can scrub through the timeline at 1x to 8x speed to observe the exact organic evolution of the essay—including phrasing pauses, deletions, structural reorganizations, and paste events. This eliminates guesswork and shifts the conversation from an adversarial confrontation to a constructive, supportive dialogue centered on writing craft and authentic learning.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2 mt-0">6. How does Checkmark comply with state laws like NY Ed Law § 2-d and Illinois SOPPA?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Checkmark complies with the nation's most stringent state student data privacy frameworks by executing customized state Supplemental Information DPAs and Parents' Bill of Rights agreements, maintaining strict alignment with the <strong>NIST Cybersecurity Framework (CSF 2.0)</strong>, enforcing zero model training, zero commercial data mining, and zero student profiling, storing zero persistent student PII and maintaining isolated cryptographic hash vaults, and carrying comprehensive Cyber Liability and Errors &amp; Omissions insurance with $5,000,000 policy limits.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-bold text-foreground mb-2 mt-0">7. Can our district migrate from a legacy plagiarism vendor to Checkmark mid-academic year?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Yes. Checkmark’s cloud-native architecture and certified <strong>1EdTech LTI 1.3 Advantage</strong> protocols enable rapid district-wide deployment in less than 48 hours. District IT administrators can deploy the tool across Canvas LMS, Agilix Buzz, or Google Classroom with zero server provisioning or end-user installation required. Existing course rubrics can be imported instantly via PDF, image, or direct LMS sync, ensuring zero instructional disruption for teachers and students mid-term.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>10. Conclusion and District Action Plan</h2>

<p>As school districts and universities navigate the complexities of artificial intelligence in education, the decisions made by District Review Committees will define institutional integrity and student data privacy for the next decade. District leaders must reject the false choice between adopting modern instructional AI tools and protecting student privacy rights.</p>

<div class="my-6 rounded-2xl border border-teal-500/40 bg-slate-900 text-slate-100 p-6 shadow-xl">
  <div class="text-center font-bold text-teal-400 text-base mb-4">
    CHECKMARK PLAGIARISM: DISTRICT PROCUREMENT SUMMARY
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="flex items-center gap-2">
      <span class="text-teal-400 font-bold">✓</span>
      <span>100% Ephemeral In-Memory Processing &amp; Hardware Zeroization</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-teal-400 font-bold">✓</span>
      <span>Irrevocable Non-Training Contract Guarantees Across All Engines</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-teal-400 font-bold">✓</span>
      <span>District-Isolated Salted MinHash / LSH Peer Matching Vaults</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-teal-400 font-bold">✓</span>
      <span>Certified 1EdTech LTI 1.3 Advantage (Canvas LMS, Buzz LMS)</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-teal-400 font-bold">✓</span>
      <span>Patent-Pending Essay Playback™ Keystroke Dynamics Replay</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-teal-400 font-bold">✓</span>
      <span>Passage-Level AI Confidence Sliders &amp; &lt;150w Disclaimers</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-teal-400 font-bold">✓</span>
      <span>Teacher-in-the-Loop Quote-Anchored Rubric Autograding</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-teal-400 font-bold">✓</span>
      <span>FERPA, COPPA, NY Ed Law &sect; 2-d, &amp; Illinois SOPPA Compliant</span>
    </div>
  </div>
</div>

<p class="text-sm text-muted-foreground italic">
  To schedule a technical architecture review, request a customized district RFP evaluation package, or initiate a sandbox pilot for your District Review Committee, visit <a href="https://checkmarkplagiarism.com">checkmarkplagiarism.com</a> or contact the Checkmark Enterprise Procurement Team.
</p>
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
      currentSlug="2026/8/what-should-a-district-review-committee-look-for-in-zero-retention-ai-plagiarism-contracts"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
