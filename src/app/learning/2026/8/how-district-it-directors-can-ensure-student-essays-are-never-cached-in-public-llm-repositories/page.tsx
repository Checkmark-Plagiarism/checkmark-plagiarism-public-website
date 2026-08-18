import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How District IT Directors Can Ensure Student Essays Are Never Cached in Public LLM Repositories | Checkmark Plagiarism",
  description: "A comprehensive technical and legal guide for District IT Directors, CISOs, and School Boards to prevent student essays from being cached, logged, or ingested into public LLM training repositories, detailing Zero-Data-Retention (ZDR) architecture, model memorization risks, and FERPA/COPPA compliance.",
  keywords: [
    "district IT director",
    "student data privacy",
    "LLM data caching",
    "FERPA compliance",
    "COPPA compliance",
    "Zero Data Retention",
    "ZDR architecture",
    "model memorization",
    "cryptographic hash vaults",
    "Checkmark Plagiarism",
    "Essay Playback",
    "SOPPA",
    "NY Education Law 2-d",
    "SOPIPA",
    "EdTech procurement"
  ],
  openGraph: {
    images: ["/images/learning/how-district-it-directors-can-ensure-student-essays-are-never-cached-in-public-llm-repositories/featured.png"],
  },
};

export const meta = {
  title: "How District IT Directors Can Ensure Student Essays Are Never Cached in Public LLM Repositories | Checkmark Plagiarism",
  description: "A comprehensive technical and legal guide for District IT Directors, CISOs, and School Boards to prevent student essays from being cached, logged, or ingested into public LLM training repositories, detailing Zero-Data-Retention (ZDR) architecture, model memorization risks, and FERPA/COPPA compliance.",
  "opengraph-image": "/images/learning/how-district-it-directors-can-ensure-student-essays-are-never-cached-in-public-llm-repositories/featured.png",
  date: "08-18-2026",
  readTime: "~16 min read",
  category: "Security & Privacy",
  categories: ["Security & Privacy", "District Leadership", "Procurement & Compliance", "Academic Integrity"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-3">
    <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-600 text-white tracking-wide uppercase">
      Executive Summary for District Technology Leaders
    </span>
  </div>
  <p class="text-foreground font-medium leading-relaxed m-0 text-sm md:text-base">
    As generative AI detectors, automated rubric grading engines, and writing analysis tools proliferate across K-12 school districts and higher education institutions, District Chief Technology Officers (CTOs), Chief Information Security Officers (CISOs), and EdTech Directors face an urgent data governance imperative: <strong>preventing student essays, personal reflections, and intellectual property from being cached, stored, or ingested into commercial Large Language Model (LLM) training pipelines</strong>. Under federal statutes including the <strong>Family Educational Rights and Privacy Act (FERPA, 34 CFR Part 99)</strong> and the <strong>Children’s Online Privacy Protection Act (COPPA, 15 U.S.C. §§ 6501–6506)</strong>—as well as strict state statutes like <strong>New York Education Law § 2-d</strong>, <strong>Illinois SOPPA (105 ILCS 85/)</strong>, and <strong>California SOPIPA (Cal. Bus. &amp; Prof. Code § 22584)</strong>—school districts are strictly prohibited from allowing third-party vendors to retain, commercialize, or train machine learning models on student work. Superficial “opt-out checkboxes” in vendor dashboards fail to prevent intermediate logging, staging cache ingestion, or irreversible parameter memorization in foundation models. This technical guide deconstructs the mechanics of AI data leakage, explains the permanent parameterization trap of deep neural networks, provides a 10-point technical procurement audit matrix, offers contract redlining templates, and demonstrates how <strong>Checkmark Plagiarism</strong> provides verifiable <strong>True Zero-Data-Retention (ZDR)</strong> architecture, ephemeral in-memory execution, and salted cryptographic hash vaults to keep student writing permanently sovereign.
  </p>
</div>

<p class="text-base leading-relaxed text-muted-foreground">
  <strong>Checkmark Plagiarism</strong> (<a href="https://checkmarkplagiarism.com" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">checkmarkplagiarism.com</a>) empowers school districts, IT directors, and academic leaders with enterprise academic integrity that unifies <a href="/services/ai-detection" class="text-teal-600 dark:text-teal-400 font-medium hover:underline">calibrated passage-level AI detection</a>, <a href="/services/plagiarism-detection" class="text-teal-600 dark:text-teal-400 font-medium hover:underline">two-way linked plagiarism matching</a>, <a href="/services/autograder" class="text-teal-600 dark:text-teal-400 font-medium hover:underline">quote-anchored rubric autograding</a>, and patent-pending <a href="/services/writing-process" class="text-teal-600 dark:text-teal-400 font-medium hover:underline">Essay Playback™ keystroke process telemetry</a> within a mathematically verifiable Zero-Data-Retention (ZDR) security architecture integrated natively via 1EdTech LTI 1.3 Advantage with <a href="/services/integrations/canvas-lms" class="text-teal-600 dark:text-teal-400 font-medium hover:underline">Canvas LMS</a> and <a href="/services/integrations/buzz-lms" class="text-teal-600 dark:text-teal-400 font-medium hover:underline">Agilix Buzz LMS</a>.
</p>

<div class="my-6">
  <img 
    src="/images/learning/how-district-it-directors-can-ensure-student-essays-are-never-cached-in-public-llm-repositories/featured.png" 
    alt="Zero Data Retention Architecture for Student Essays and District AI Governance" 
    class="w-full rounded-2xl shadow-xl border border-border"
  />
  <p class="text-xs text-muted-foreground text-center mt-2 italic">
    Figure 1: Checkmark Plagiarism’s Zero-Data-Retention (ZDR) Architecture • Ephemeral RAM Processing • Cryptographic Hash Vaults • FERPA &amp; COPPA Enforced
  </p>
</div>

<hr class="my-8 border-border" />

<h2>1. The Data Ingestion Reality: How Student Essays Leak into AI Repositories</h2>

<p>
  Over the past three decades, school district software architectures were built around static, transactional databases. Student essays submitted to a Learning Management System (LMS) like Canvas, Buzz, or Google Classroom were stored in relational database tables (PostgreSQL, MySQL) or private object stores (AWS S3, Google Cloud Storage) under strict role-based access control (RBAC). A student’s essay sat passively on disk until an authorized teacher opened it to assign a grade.
</p>

<p>
  The rapid adoption of generative AI writing assistants, automated autograders, and AI detection tools has fundamentally upended this paradigm. Modern natural language processing (NLP) and transformer-based foundation models are not static databases—<strong>they are data-hungry probabilistic computing engines that continuously require massive volumes of high-quality human text to refine their neural weights</strong>.
</p>

<div class="my-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-slate-100 p-5 font-mono text-xs">
  <div class="text-slate-400 font-bold uppercase tracking-wider text-[11px] mb-3 pb-2 border-b border-slate-800 text-center">
    HOW STUDENT ESSAYS LEAK INTO COMMERCIAL AI TRAINING PIPELINES
  </div>
  <div class="space-y-3">
    <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
      <div class="text-teal-400 font-bold">1. CLASSROOM SUBMISSION (LMS / GOOGLE DOCS / UNVETTED EDTECH TOOL)</div>
      <div class="text-[11px] text-slate-300">Student submits an essay containing personal narratives, unique voice, family disclosures, and potential PII.</div>
    </div>
    <div class="text-center text-teal-400">&darr; Data Ingestion Split</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="rounded-lg bg-rose-950/40 p-3 border border-rose-500/40">
        <div class="text-rose-300 font-bold">A. UNVETTED CONSUMER / FREE TOOLS</div>
        <div class="text-[11px] text-rose-200 mt-1 space-y-1">
          <div>&bull; ChatGPT, Claude consumer web interfaces.</div>
          <div>&bull; Full prompts &amp; text retained by default.</div>
          <div>&bull; Routed directly to continuous pre-training &amp; RLHF review loops.</div>
        </div>
      </div>
      <div class="rounded-lg bg-amber-950/40 p-3 border border-amber-500/40">
        <div class="text-amber-300 font-bold">B. STANDARD COMMERCIAL API ENDPOINTS</div>
        <div class="text-[11px] text-amber-200 mt-1 space-y-1">
          <div>&bull; Default 30-day raw prompt &amp; completion caching.</div>
          <div>&bull; Staged in vendor S3/GCS observability logs (Datadog, LangSmith).</div>
          <div>&bull; Retained for &ldquo;abuse monitoring&rdquo; and secondary R&amp;D.</div>
        </div>
      </div>
    </div>
    <div class="text-center text-amber-400">&darr; Dataset Batching &amp; Tokenization</div>
    <div class="rounded-lg bg-amber-950/30 p-3 border border-amber-500/30">
      <div class="text-amber-300 font-bold">2. MODEL FINE-TUNING &amp; DATASET INGESTION</div>
      <div class="text-[11px] text-amber-200">Student prose is tokenized, vectorized, and included in training batches for proprietary classifier fine-tuning.</div>
    </div>
    <div class="text-center text-rose-400">&darr; Gradient Descent Backpropagation</div>
    <div class="rounded-lg bg-rose-950/50 p-3 border border-rose-500/60">
      <div class="text-rose-300 font-bold">3. THE PERMANENT PARAMETERIZATION TRAP (WEIGHT MEMORIZATION)</div>
      <div class="text-[11px] text-rose-200">Text is encoded into billions of float32 weights. <strong>MATHEMATICALLY IMPOSSIBLE TO &ldquo;UNLEARN&rdquo; OR DELETE WITHOUT FULL MODEL DESTRUCTION.</strong></div>
    </div>
    <div class="text-center text-rose-400">&darr; Model Inversion Exposure</div>
    <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
      <div class="text-cyan-400 font-bold">4. MODEL INVERSION &amp; EXTRACTION ATTACKS</div>
      <div class="text-[11px] text-slate-300">Adversarial prefix prompts reconstruct verbatim student sentences, private disclosures, and intellectual property into public completion outputs.</div>
    </div>
  </div>
</div>

<h3>1.1 Why Student Writing is Targeted for AI Model Training</h3>

<p>
  Commercial AI developers face a looming &ldquo;data wall.&rdquo; Having scraped virtually the entire indexed public web (Common Crawl, Wikipedia, public GitHub repositories, digitized books), foundation model developers struggle with data saturation and model collapse caused by scraping synthetic AI-generated text. K-12 and collegiate student writing is uniquely valuable because it offers:
</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">1</span>
      <h4 class="text-base font-semibold text-foreground m-0 p-0">Organic Developmental Trajectories</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Graded writing spanning grades 3 through 12 and collegiate levels provides rich linguistic milestones in vocabulary acquisition, syntactic development, and argumentative reasoning.
    </p>
  </div>
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold dark:bg-cyan-950 dark:text-cyan-300">2</span>
      <h4 class="text-base font-semibold text-foreground m-0 p-0">Authentic Linguistic Burstiness</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Unlike synthetic AI text, student writing exhibits authentic variations in sentence length, idiosyncratic metaphor, colloquial idioms, and natural human cognitive pauses.
    </p>
  </div>
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold dark:bg-indigo-950 dark:text-indigo-300">3</span>
      <h4 class="text-base font-semibold text-foreground m-0 p-0">Unscraped Domain Synthesis</h4>
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Student essays synthesize hyper-local historical analyses, niche literary critique, and personal lived experiences that exist nowhere on the public internet.
    </p>
  </div>
</div>

<p>
  When edtech vendors fail to implement strict zero-retention protections, student essays submitted for routine classroom grading become free, involuntary training data for commercial AI corporations.
</p>

<hr class="my-8 border-border" />

<h2>2. Technical Vulnerability Vectors: APIs, Logging, and Parameter Memorization</h2>

<p>
  To establish defensible district security policies, IT Directors and CISOs must understand the three distinct technical mechanisms through which student essays become permanently captured in public and commercial AI repositories.
</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Vulnerability Layer</th>
        <th class="p-3">Technical Mechanism</th>
        <th class="p-3 bg-rose-500/10 text-rose-700 dark:text-rose-300">Retention Timeline &amp; Risk Level</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">1. API Payload Retention &amp; Observability Logging</td>
        <td class="p-3">HTTP POST requests logged to cloud storage for &ldquo;abuse monitoring&rdquo; and debug telemetry (Datadog, LangSmith, CloudWatch).</td>
        <td class="p-3 font-medium text-rose-600 dark:text-rose-400">Default: 30 days on disk. Stored in unencrypted/shared logs; vulnerable to cloud breaches.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">2. Fine-Tuning &amp; Continuous Pre-Training Loops</td>
        <td class="p-3">Text batches tokenized into dataset repositories for secondary R&amp;D, classifier tuning, and model optimization.</td>
        <td class="p-3 font-medium text-rose-600 dark:text-rose-400">Indefinite (Multi-year). Converted into derivative dataset assets sold across vendors.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">3. Deep Neural Parameter Memorization (Weights)</td>
        <td class="p-3">Backpropagation gradient descent alters float32 tensor weights inside the foundation model itself.</td>
        <td class="p-3 font-bold text-rose-700 dark:text-rose-300">PERMANENT (Irreversible). Embedded into model parameters; cannot be purged without full model deletion.</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>2.1 Vector 1: API Payload Retention vs. Stateless Endpoints</h3>

<p>
  When an edtech vendor sends a student essay to an AI service (such as OpenAI, Anthropic Claude, AWS Bedrock, Google Vertex AI, or an open-source inference endpoint), the data travels as a JSON payload within an HTTP POST request:
</p>

<div class="my-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-100 font-mono text-xs overflow-x-auto">
  <div class="text-slate-400 font-bold uppercase text-[11px] mb-2">// Sample HTTP POST Payload Sent to Foundation Model API</div>
  <pre class="m-0 text-teal-300">{
  <span class="text-indigo-400">"model"</span>: <span class="text-amber-300">"gpt-4o-mini"</span>,
  <span class="text-indigo-400">"messages"</span>: [
    {
      <span class="text-indigo-400">"role"</span>: <span class="text-amber-300">"system"</span>,
      <span class="text-indigo-400">"content"</span>: <span class="text-amber-300">"Analyze this student essay for argumentative coherence and grammatical structure."</span>
    },
    {
      <span class="text-indigo-400">"role"</span>: <span class="text-amber-300">"user"</span>,
      <span class="text-indigo-400">"content"</span>: <span class="text-rose-300">"My name is Sarah M., a sophomore at Oakridge High. In this personal narrative, I discuss my family's struggle with housing insecurity..."</span>
    }
  ],
  <span class="text-indigo-400">"temperature"</span>: <span class="text-cyan-300">0.2</span>
}</pre>
</div>

<h4>The Default 30-Day Logging Trap</h4>
<p>
  By default, standard commercial API accounts on major foundation model platforms retain all raw input prompts and output completions on physical cloud storage for <strong>30 calendar days</strong>. AI vendors justify this retention under the banner of &ldquo;Trust &amp; Safety monitoring&rdquo; and &ldquo;Abuse Detection.&rdquo;
</p>

<p>During these 30 days:</p>
<ul class="space-y-1 text-sm text-muted-foreground">
  <li>The full student essay sits in plain text or standard cloud-encrypted object storage (AWS S3, Google Cloud Storage buckets).</li>
  <li>Third-party observability tools (e.g., LangSmith, Helicone, Datadog, CloudWatch) integrated into the vendor's application stack capture and store the payload.</li>
  <li>Human contractors reviewing flagged accounts may view the raw student submission in plaintext.</li>
</ul>

<p>
  Unless a vendor has an explicit, contractually verified <strong>Zero-Data-Retention (ZDR) agreement</strong> with their upstream AI cloud infrastructure, student essays are actively logged and cached on remote servers.
</p>

<h3>2.2 Vector 2: Model Fine-Tuning, Continuous Pre-Training, and RLHF</h3>

<p>
  Many edtech vendors do not simply pass text through general-purpose models; they build proprietary &ldquo;essay grading classifiers&rdquo; or &ldquo;academic integrity detectors.&rdquo; To train these models, vendors funnel collected student essays into two pipelines:
</p>

<ol class="space-y-2 text-sm text-muted-foreground">
  <li><strong>Supervised Fine-Tuning (SFT):</strong> Student essays paired with teacher grades and rubric criteria are tokenized into JSONL datasets. These datasets are fed into backpropagation routines to teach the model how to grade according to specific rubric standards.</li>
  <li><strong>Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO):</strong> Vendor data annotators evaluate paired model outputs generated from student essays, ranking responses to guide the model toward desired educational outputs.</li>
</ol>

<p>
  Once a student essay enters a fine-tuning dataset, it is copied across development, staging, and training clusters, multiplying the attack surface across distributed cloud environments.
</p>

<h3>2.3 Vector 3: The Permanent Parameterization Trap and Model Inversion Attacks</h3>

<p>
  The most dangerous misunderstanding among non-technical administrators is the belief that student data can simply be &ldquo;deleted&rdquo; from an AI system upon request under FERPA or state data deletion mandates.
</p>

<div class="my-6 rounded-xl border border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20 p-5">
  <div class="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-400 font-bold text-sm">
    <span>⚠️ The Parameterization Trap</span>
  </div>
  <p class="text-xs text-muted-foreground m-0 leading-relaxed">
    Once a neural network has been trained or fine-tuned on student writing, the student's prose, ideas, and stylistic markers are converted into billions of mathematical weights (floating-point numbers). <strong>A neural network is not a database; you cannot run a <code>DELETE WHERE student_id = X</code> query on model weights.</strong>
  </p>
</div>

<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="rounded-xl border border-border bg-card p-4">
    <div class="text-teal-600 dark:text-teal-400 font-bold text-xs uppercase mb-1">Relational Database (SQL / NoSQL)</div>
    <div class="font-mono text-xs bg-muted p-2.5 rounded text-foreground mb-2">
      DELETE FROM essays WHERE student_id = 1042;
    </div>
    <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4 m-0">
      <li>Data stored as discrete, indexed rows.</li>
      <li>Individual records can be located instantly.</li>
      <li>Cryptographic erasure is mathematically verifiable.</li>
    </ul>
  </div>
  <div class="rounded-xl border border-rose-500/30 bg-rose-50/30 dark:bg-rose-950/20 p-4">
    <div class="text-rose-600 dark:text-rose-400 font-bold text-xs uppercase mb-1">Deep Neural Network (Transformer LLM)</div>
    <div class="font-mono text-xs bg-muted p-2.5 rounded text-rose-600 dark:text-rose-400 mb-2">
      Weights: [0.0841, -0.4912, 1.2094, 0.0031...]
    </div>
    <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4 m-0">
      <li>Data dissolved into billions of weight matrices.</li>
      <li>Individual documents cannot be isolated or extracted.</li>
      <li><strong>Only remedy is destroying and retraining entire model ($$$).</strong></li>
    </ul>
  </div>
</div>

<h4>How Model Inversion and Prefix-Matching Extract Student Writing</h4>
<p>
  Research in machine learning security (<em>Carlini et al., USENIX Security</em>) has repeatedly demonstrated that transformer models <strong>memorize rare and unique training sequences</strong>.
</p>

<p>
  If a student writes an essay containing a unique biographical narrative, a specialized phrase, or personal disclosures, an external user interacting with that commercial model can execute a <strong>prefix-matching or model inversion attack</strong>. By providing an opening prompt that matches the initial tokens of the student's text, the model's next-token probability distribution will emit the verbatim continuation of the student's private essay:
</p>

<div class="my-4 rounded-xl border border-slate-800 bg-slate-900 p-4 font-mono text-xs space-y-2">
  <div class="text-amber-400"><span class="text-slate-400 font-semibold">[Adversarial Prefix Prompt]:</span> "At Oakridge High School in the fall of 2025, a sophomore named Sarah wrote about..."</div>
  <div class="text-rose-300"><span class="text-slate-400 font-semibold">[Commercial LLM Completion]:</span> "...my family's struggle with housing insecurity and how my brother's medical diagnosis shaped our..."</div>
</div>

<p class="text-sm text-muted-foreground">
  This represents an irreversible breach of student privacy that no post-hoc data deletion request can remediate.
</p>

<hr class="my-8 border-border" />

<h2>3. Federal &amp; State Statutory Frameworks: The Legal Illegality of AI Model Ingestion</h2>

<p>
  Allowing student writing to be cached or used for commercial AI training violates core federal privacy mandates and escalating state student data privacy legislation.
</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Legal Authority</th>
        <th class="p-3">Statutory Mandate</th>
        <th class="p-3 bg-teal-500/10 text-teal-700 dark:text-teal-300">Technical Compliance Requirement</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">FERPA<br /><span class="text-[11px] font-normal text-muted-foreground">(34 CFR Part 99)</span></td>
        <td class="p-3">&ldquo;School Official&rdquo; exception requires strict educational purpose and bars unauthorized redisclosure.</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Vendor must operate under &ldquo;direct control&rdquo; of district; zero secondary use or commercial AI training permitted.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">COPPA<br /><span class="text-[11px] font-normal text-muted-foreground">(15 U.S.C. §§ 6501–6506)</span></td>
        <td class="p-3">Prohibits commercial profiling and data retention for children under 13 without verifiable parental consent.</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Districts cannot consent to commercial AI training on behalf of K-8 students; data must be purged immediately.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">NY Education Law § 2-d</td>
        <td class="p-3">Mandates Parents’ Bill of Rights, NIST CSF cybersecurity alignment, and strict commercialization bans.</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Vendor must execute Data Privacy Agreement (DPA); zero commercialization; mandatory breach notification timeline.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Illinois SOPPA<br /><span class="text-[11px] font-normal text-muted-foreground">(105 ILCS 85/)</span></td>
        <td class="p-3">Prohibits student data profiling, targeted advertising, and commercial exploitation of student records.</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Strict prohibition on algorithmic R&amp;D; full breach indemnification; mandatory deletion upon contract termination.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">California SOPIPA<br /><span class="text-[11px] font-normal text-muted-foreground">(Cal. Bus. &amp; Prof. Code § 22584)</span></td>
        <td class="p-3">Bans K-12 student profiling, selling student data, or retaining data beyond educational purpose.</td>
        <td class="p-3 font-medium text-teal-600 dark:text-teal-400">Immediate data purging; absolute prohibition on using student essays to train proprietary commercial models.</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>3.1 FERPA (34 CFR Part 99) and the &ldquo;School Official&rdquo; Exception</h3>

<p>
  Under FERPA, student essays, writing drafts, and teacher grading feedback constitute <strong>Education Records</strong> protected under 34 CFR § 99.3. Educational institutions may only share these records with third-party software vendors without explicit parental consent under the narrow <strong>&ldquo;School Official&rdquo; Exception</strong> (34 CFR § 99.31(a)(1)(i)(B)).
</p>

<p>To qualify as an authorized School Official, an EdTech AI vendor must satisfy four non-negotiable legal criteria:</p>
<ol class="space-y-1 text-sm text-muted-foreground">
  <li><strong>Performs an Institutional Service:</strong> The vendor performs an institutional service or function for which the school would otherwise use employees (e.g., grading essays, checking for plagiarism).</li>
  <li><strong>Under Direct Control:</strong> The vendor must remain under the <strong>direct control</strong> of the school district with respect to the use and maintenance of education records.</li>
  <li><strong>Strict Redisclosure Prohibition (§ 99.33):</strong> The vendor is strictly prohibited from disclosing student data to any third party (including upstream cloud providers or sub-processors) without prior written consent.</li>
  <li><strong>Purpose Limitation:</strong> The vendor may only use the data for the specific educational purpose authorized in the contract.</li>
</ol>

<div class="my-6 rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 p-5">
  <div class="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
    <span>📌 Legal Reality</span>
  </div>
  <p class="text-xs text-muted-foreground m-0 leading-relaxed">
    Ingesting student essays into an AI model training set, secondary data lake, or foundation model cache violates the &ldquo;direct control&rdquo; and &ldquo;purpose limitation&rdquo; mandates of FERPA. Once data is absorbed into model weights, the district loses direct control, triggering an actionable FERPA breach.
  </p>
</div>

<h3>3.2 COPPA and K-8 Student Protections</h3>

<p>
  The Children’s Online Privacy Protection Act (COPPA) strictly regulates the collection and use of personal information from children under 13 years of age. While schools can consent on behalf of parents for purely educational services (<em>school-authorized consent</em>), the <strong>Federal Trade Commission (FTC) has explicitly clarified that schools cannot consent to commercial product development, model training, or algorithmic optimization</strong>.
</p>

<p>
  If an EdTech vendor captures writing from elementary or middle school students and uses that data to improve its general machine learning models, the vendor and the district face severe regulatory enforcement and financial penalties from the FTC.
</p>

<hr class="my-8 border-border" />

<h2>4. The &ldquo;Opt-Out&rdquo; Illusion vs. True Zero-Data-Retention (ZDR) Architecture</h2>

<p>
  Many commercial EdTech vendors attempt to placate district IT leaders by adding a settings toggle labeled <em>&ldquo;Do not use my data for AI training.&rdquo;</em> District CISOs and IT Directors must understand why policy-only &ldquo;opt-outs&rdquo; are technically insufficient to ensure compliance.
</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Technical Dimension</th>
        <th class="p-3 bg-amber-500/10 text-amber-700 dark:text-amber-300">The &ldquo;Opt-Out Checkbox&rdquo; (Flawed / Risky)</th>
        <th class="p-3 bg-teal-500/10 text-teal-700 dark:text-teal-300">True Zero-Data-Retention (Checkmark Standard)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Enforcement Mechanism</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">&times; Relies on honor-system policy promises</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">&check; Enforced mathematically and architecturally in code</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Server Storage Execution</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">&times; Essays stored in vendor cloud database / disk</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">&check; 100% ephemeral in-memory (RAM) processing only</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">API Payload Logging</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">&times; 30-day API payload logging on cloud disks</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">&check; Direct contractual &amp; technical API zeroization</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Peer Plagiarism Repository</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">&times; Multi-tenant plain-text essay pools</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">&check; Salted cryptographic hash vaults (MinHash / LSH)</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Observability &amp; APM</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">&times; Observability tools log full prompts &amp; text</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">&check; Strict PII redaction prior to ephemeral compute</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-semibold text-foreground">Security Attack Surface</td>
        <td class="p-3 text-rose-600 dark:text-rose-400">&times; High attack surface for cloud breaches</td>
        <td class="p-3 font-semibold text-teal-600 dark:text-teal-400">&check; Zero persistent plain-text disk footprint</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>4.2 The Five Pillars of True Zero-Data-Retention (ZDR)</h3>

<div class="my-6 space-y-3">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm flex items-start gap-3">
    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold dark:bg-teal-950 dark:text-teal-300">1</span>
    <div>
      <h4 class="text-sm font-bold text-foreground m-0 mb-1">100% Ephemeral In-Memory Execution (RAM Only)</h4>
      <p class="text-xs text-muted-foreground m-0">Student submissions are processed strictly within volatile RAM compute containers. Zero plain-text essay bytes or intermediate inference states are written to physical disk or non-volatile storage.</p>
    </div>
  </div>
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm flex items-start gap-3">
    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold dark:bg-cyan-950 dark:text-cyan-300">2</span>
    <div>
      <h4 class="text-sm font-bold text-foreground m-0 mb-1">Immediate Memory Zeroization (Explicit Buffer Clearing)</h4>
      <p class="text-xs text-muted-foreground m-0">Upon completing analysis, the memory buffer allocated to the student submission is immediately overwritten with zero-byte sequences (<code>memzero</code> / <code>memset_s</code>), preventing memory scraping.</p>
    </div>
  </div>
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm flex items-start gap-3">
    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold dark:bg-indigo-950 dark:text-indigo-300">3</span>
    <div>
      <h4 class="text-sm font-bold text-foreground m-0 mb-1">Contractual &amp; Technical API Zeroization</h4>
      <p class="text-xs text-muted-foreground m-0">All external infrastructure connections enforce enterprise zero-logging headers, ensuring upstream foundation model providers never retain, log, or review payloads.</p>
    </div>
  </div>
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm flex items-start gap-3">
    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold dark:bg-emerald-950 dark:text-emerald-300">4</span>
    <div>
      <h4 class="text-sm font-bold text-foreground m-0 mb-1">Isolated Cryptographic Hash Vaults (MinHash / LSH)</h4>
      <p class="text-xs text-muted-foreground m-0">Cross-student plagiarism matching operates exclusively on irreversible mathematical fingerprint vectors salted with district-specific keys, eliminating plaintext essay pools.</p>
    </div>
  </div>
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm flex items-start gap-3">
    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold dark:bg-amber-950 dark:text-amber-300">5</span>
    <div>
      <h4 class="text-sm font-bold text-foreground m-0 mb-1">Third-Party Audited SOC 2 Type II &amp; FERPA Attestation</h4>
      <p class="text-xs text-muted-foreground m-0">Independent annual audits confirm that zero student records are stored, trained upon, or commercialized, backed by legally binding Data Privacy Agreements (DPAs).</p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>5. Checkmark Plagiarism’s Enterprise Security &amp; Privacy Architecture</h2>

<p>
  Checkmark Plagiarism was engineered from the ground up to solve the academic integrity challenge <strong>without compromising student data privacy, intellectual property, or institutional compliance</strong>. 
</p>

<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 font-mono text-xs">
  <div class="text-center font-bold text-teal-400 text-sm mb-4">
    CHECKMARK PLAGIARISM: ZERO-RETENTION SECURITY PERIMETER
  </div>

  <div class="space-y-3">
    <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
      <div class="font-bold text-indigo-400 mb-1">1. ENTERPRISE LMS INTEGRATION (1EdTech LTI 1.3 Advantage / SAML 2.0 / SSO)</div>
      <div class="text-[11px] text-slate-300">&bull; Canvas LMS, Buzz LMS, Google Classroom, Microsoft OneDrive, Google Docs.</div>
      <div class="text-[11px] text-slate-300">&bull; End-to-end TLS 1.3 encryption with Perfect Forward Secrecy (PFS).</div>
    </div>

    <div class="rounded-lg bg-slate-800/90 p-4 border border-teal-500/40">
      <div class="font-bold text-teal-300 mb-2">2. EPHEMERAL VOLATILE MEMORY (RAM) COMPUTE ENGINE</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] text-slate-300">
        <div class="bg-slate-900/60 p-2.5 rounded border border-slate-700">
          <span class="text-amber-400 font-semibold">1. Multi-Factor AI Detection</span><br />
          Perplexity &amp; burstiness analyzed in ephemeral memory.
        </div>
        <div class="bg-slate-900/60 p-2.5 rounded border border-slate-700">
          <span class="text-cyan-400 font-semibold">2. Essay Playback™</span><br />
          Keystroke timeline rendered; paste buffers preserved.
        </div>
        <div class="bg-slate-900/60 p-2.5 rounded border border-slate-700">
          <span class="text-teal-400 font-semibold">3. Quote-Anchored Autograder</span><br />
          Teacher-in-the-loop rubric scoring with draft approval.
        </div>
      </div>
    </div>

    <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
      <div class="font-bold text-emerald-400 mb-1">3. PEER PLAGIARISM CHECK: ISOLATED CRYPTOGRAPHIC HASH VAULT</div>
      <div class="text-[11px] text-slate-300">&bull; Document converted to salted MinHash / Locality-Sensitive Hashing (LSH) fingerprints.</div>
      <div class="text-[11px] text-slate-300">&bull; ZERO RAW TEXT STORED. Irreversible mathematical signatures compared across district vault.</div>
    </div>

    <div class="rounded-lg bg-teal-900/40 p-3 border border-teal-500/60 text-center font-bold text-teal-300">
      4. IMMEDIATE SYSTEM MEMORY ZEROIZATION &bull; Results returned to teacher gradebook &bull; Memory overwritten with zeros &bull; 0 disk writes &bull; 0 AI model training
    </div>
  </div>
</div>

<h3>5.2 Isolated Cryptographic Hash Vaults (Salted MinHash / LSH)</h3>

<p>
  A major challenge for district IT leaders is enabling cross-student plagiarism detection (detecting when Student B submits Student A's paper from a different class period or school) without storing student essays in a shared plaintext database.
</p>

<p>
  Checkmark Plagiarism solves this through <strong>Salted Locality-Sensitive Hashing (LSH) and MinHash Cryptographic Vaults</strong>:
</p>

<div class="my-6 rounded-xl border border-border bg-card p-5 shadow-sm space-y-3">
  <h4 class="text-base font-bold text-foreground m-0">How Cryptographic Hash Vaults Work Mathematically:</h4>
  <ol class="text-xs text-muted-foreground space-y-2 list-decimal pl-4 m-0 leading-relaxed">
    <li><strong>k-Shingle Tokenization:</strong> The ephemeral engine breaks the essay into overlapping character/word shingles (e.g., 5-grams to 9-grams).</li>
    <li><strong>Salted HMAC Hashing:</strong> Each shingle is concatenated with a district-specific cryptographic salt and hashed through non-reversible functions: <code>h_i(s) = HMAC-SHA256(Salt_district, s) mod p</code>.</li>
    <li><strong>MinHash Fingerprinting:</strong> The minimum hash values across multiple permutation families produce a compact MinHash signature vector representing document syntactic topology.</li>
    <li><strong>Locality-Sensitive Hashing (LSH) Bucketing:</strong> Signatures are partitioned into hash buckets. Incoming essays are compared for Jaccard similarity without decrypting or reconstructing text: <code>J(A, B) = |A ∩ B| / |A ∪ B|</code>.</li>
    <li><strong>Absolute Irreversibility:</strong> It is mathematically impossible for an attacker, rogue employee, or external scraper to reconstruct student prose from MinHash vectors.</li>
  </ol>
</div>

<h3>5.4 Multi-Dimensional Evidence: Protecting Students from Unfair AI Accusations</h3>

<p>
  District IT Directors must ensure that academic integrity tools protect students from both data leakage and unfair academic accusations. Generic AI detectors rely on single opaque percentage scores (e.g., “94% AI Generated”) that carry unacceptable false-positive rates, particularly for English Language Learners (ELL) and neurodivergent writers.
</p>

<p>Checkmark replaces black-box guessing with transparent, multi-dimensional evidence:</p>

<div class="my-6 space-y-3">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col md:flex-row gap-4 items-start">
    <div class="md:w-1/3">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 mb-1">
        Patent-Pending
      </span>
      <h4 class="text-sm font-bold text-foreground m-0">Essay Playback™</h4>
    </div>
    <div class="md:w-2/3 text-xs text-muted-foreground">
      Keystroke-by-keystroke timeline reconstruction. Educators scrub at 1x to 8x speed to watch drafting, composing pauses, revisions, and deletions in real time.
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col md:flex-row gap-4 items-start">
    <div class="md:w-1/3">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 mb-1">
        Paste Forensics
      </span>
      <h4 class="text-sm font-bold text-foreground m-0">External Paste Tracking</h4>
    </div>
    <div class="md:w-2/3 text-xs text-muted-foreground">
      Timestamped capture of all external text pasted into the document. Preserves original pasted text even if rewritten, complete with a one-click “jump-to-playback” navigation button.
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col md:flex-row gap-4 items-start">
    <div class="md:w-1/3">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 mb-1">
        Calibrated AI
      </span>
      <h4 class="text-sm font-bold text-foreground m-0">Passage-Level Confidence</h4>
    </div>
    <div class="md:w-2/3 text-xs text-muted-foreground">
      Highlights specific sentences with calibrated confidence sliders (Human style vs. AI pattern). Reports <code>N/A</code> for short answers under 150 words to prevent false positives.
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col md:flex-row gap-4 items-start">
    <div class="md:w-1/3">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 mb-1">
        Side-by-Side
      </span>
      <h4 class="text-sm font-bold text-foreground m-0">Two-Way Linked Matching</h4>
    </div>
    <div class="md:w-2/3 text-xs text-muted-foreground">
      Real-time comparison against billions of live web pages and academic databases with direct clickable source URLs and side-by-side quotation alignment.
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col md:flex-row gap-4 items-start">
    <div class="md:w-1/3">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 mb-1">
        Educator First
      </span>
      <h4 class="text-sm font-bold text-foreground m-0">Teacher-in-the-Loop Autograder</h4>
    </div>
    <div class="md:w-2/3 text-xs text-muted-foreground">
      Autogrades against custom or synced LMS rubrics with quote-anchored justifications; grades remain drafts until explicit teacher approval and gradebook passback.
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. The 10-Point Technical Procurement Audit Matrix for District IT Directors</h2>

<p>
  Before approving any AI writing assistant, plagiarism checker, or automated grading platform, District CTOs, CISOs, and IT Directors should execute this 10-point technical procurement audit.
</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">#</th>
        <th class="p-3">Procurement Audit Domain</th>
        <th class="p-3">Technical Verification Requirement</th>
        <th class="p-3 bg-teal-500/10 text-teal-700 dark:text-teal-300 text-center">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">1</td>
        <td class="p-3 font-medium text-foreground">Upstream AI Model Zero-Retention (ZDR)</td>
        <td class="p-3">Vendor possesses legally binding Zero-Data-Retention (ZDR) contracts with all LLM API providers (OpenAI, Anthropic, AWS).</td>
        <td class="p-3 text-center font-bold text-teal-600 dark:text-teal-400">&check; MANDATORY</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">2</td>
        <td class="p-3 font-medium text-foreground">Model Training &amp; Product R&amp;D Ban</td>
        <td class="p-3">Contract strictly bars using student essays for model training, fine-tuning, RLHF, or secondary product development.</td>
        <td class="p-3 text-center font-bold text-teal-600 dark:text-teal-400">&check; MANDATORY</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">3</td>
        <td class="p-3 font-medium text-foreground">Ephemeral Memory Execution</td>
        <td class="p-3">Student prose processed in volatile RAM; zero persistent plain-text essay storage on non-volatile disk storage.</td>
        <td class="p-3 text-center font-bold text-teal-600 dark:text-teal-400">&check; MANDATORY</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">4</td>
        <td class="p-3 font-medium text-foreground">Cryptographic Hash Peer-Matching</td>
        <td class="p-3">Peer matching utilizes irreversible MinHash / LSH vectors instead of pooled multi-tenant plaintext databases.</td>
        <td class="p-3 text-center font-bold text-teal-600 dark:text-teal-400">&check; MANDATORY</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">5</td>
        <td class="p-3 font-medium text-foreground">Observability &amp; APM PII Redaction</td>
        <td class="p-3">Application logging tools (Datadog, LangSmith, CloudWatch) strictly sanitize and exclude student submission payloads.</td>
        <td class="p-3 text-center font-bold text-teal-600 dark:text-teal-400">&check; MANDATORY</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">6</td>
        <td class="p-3 font-medium text-foreground">Standards-Based LMS Sync (LTI 1.3)</td>
        <td class="p-3">Certified 1EdTech LTI 1.3 Advantage (AGS, NRPS) with zero manual CSV/roster uploads or shadow credentials.</td>
        <td class="p-3 text-center font-bold text-teal-600 dark:text-teal-400">&check; MANDATORY</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">7</td>
        <td class="p-3 font-medium text-foreground">SOC 2 Type II &amp; FERPA Attestation</td>
        <td class="p-3">Vendor provides annual SOC 2 Type II report with zero exceptions in Confidentiality and Privacy Trust Criteria.</td>
        <td class="p-3 text-center font-bold text-teal-600 dark:text-teal-400">&check; MANDATORY</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">8</td>
        <td class="p-3 font-medium text-foreground">Transparent Multi-Factor Receipts</td>
        <td class="p-3">Tool provides keystroke replay (Essay Playback™) and passage-level analysis rather than opaque black-box scores.</td>
        <td class="p-3 text-center font-bold text-teal-600 dark:text-teal-400">&check; MANDATORY</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">9</td>
        <td class="p-3 font-medium text-foreground">Teacher-in-the-Loop Final Authority</td>
        <td class="p-3">AI-generated grades and feedback remain editable drafts; zero automated punitive actions or grade posting.</td>
        <td class="p-3 text-center font-bold text-teal-600 dark:text-teal-400">&check; MANDATORY</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-bold text-foreground">10</td>
        <td class="p-3 font-medium text-foreground">Breach &amp; Legal Indemnification</td>
        <td class="p-3">Vendor provides uncapped indemnification for data breaches and statutory violations (FERPA, COPPA, SOPPA, NY 2-d).</td>
        <td class="p-3 text-center font-bold text-teal-600 dark:text-teal-400">&check; MANDATORY</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>7. Contract Redlining Guide: Essential Clauses for District DPAs</h2>

<p>
  When negotiating Data Privacy Agreements (DPAs) or Master Services Agreements (MSAs) with AI and academic integrity software vendors, district legal counsel and IT Directors must insert non-negotiable clauses that protect student intellectual property and prohibit model training.
</p>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">Clause 1: Absolute Prohibition on Model Training and Product Development</div>
    <div class="font-mono text-xs bg-muted/60 p-3 rounded-lg space-y-2">
      <div class="text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30 p-2 rounded border border-rose-200 dark:border-rose-900">
        <span class="font-bold">- REDLINE DELETE:</span> &ldquo;Vendor may use de-identified or anonymized customer data to improve its products, develop new algorithms, and train machine learning models.&rdquo;
      </div>
      <div class="text-emerald-700 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/30 p-2 rounded border border-emerald-200 dark:border-emerald-900">
        <span class="font-bold">+ INSERT MANDATORY CLAUSE:</span> &ldquo;Vendor is strictly prohibited from using Student Data, Education Records, student-generated text, writing telemetry, or derivative metadata to train, fine-tune, validate, or optimize any artificial intelligence model, large language model (LLM), neural network, classifier, or algorithmic system. All rights, title, and intellectual property in student submissions remain exclusively with the Student and District.&rdquo;
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">Clause 2: True Zero-Data-Retention (ZDR) and Ephemeral Processing</div>
    <div class="font-mono text-xs bg-muted/60 p-3 rounded-lg space-y-2">
      <div class="text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30 p-2 rounded border border-rose-200 dark:border-rose-900">
        <span class="font-bold">- REDLINE DELETE:</span> &ldquo;Vendor will store customer submissions in secure cloud databases for the duration of the contract plus standard backup retention windows.&rdquo;
      </div>
      <div class="text-emerald-700 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/30 p-2 rounded border border-emerald-200 dark:border-emerald-900">
        <span class="font-bold">+ INSERT MANDATORY CLAUSE:</span> &ldquo;Vendor warrants and guarantees that student essay submissions, prompt payloads, and completion outputs are processed strictly in volatile memory (RAM) and are NEVER persisted to non-volatile disk storage. Vendor shall enforce zero-data-retention (ZDR) configurations across all upstream infrastructure and sub-processors. Memory buffers shall be zeroized immediately upon completion of inference.&rdquo;
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">Clause 3: Irreversible Cryptographic Fingerprinting for Plagiarism Matching</div>
    <div class="font-mono text-xs bg-muted/60 p-3 rounded-lg space-y-2">
      <div class="text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30 p-2 rounded border border-rose-200 dark:border-rose-900">
        <span class="font-bold">- REDLINE DELETE:</span> &ldquo;Vendor will add submitted student papers to its proprietary global repository to enable cross-institutional plagiarism detection.&rdquo;
      </div>
      <div class="text-emerald-700 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/30 p-2 rounded border border-emerald-200 dark:border-emerald-900">
        <span class="font-bold">+ INSERT MANDATORY CLAUSE:</span> &ldquo;To the extent peer plagiarism matching is enabled, Vendor shall generate irreversible, salted cryptographic hash signatures (e.g., MinHash / Locality-Sensitive Hashing). Under no circumstances shall Vendor retain or pool raw plaintext student prose. The District retains exclusive administrative control over its isolated hash vault, and hash indexes shall be permanently purged upon District request or contract termination.&rdquo;
      </div>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">Clause 4: Sub-Processor Transparency and Pass-Through Liabilities</div>
    <div class="font-mono text-xs bg-muted/60 p-3 rounded-lg space-y-2">
      <div class="text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/30 p-2 rounded border border-rose-200 dark:border-rose-900">
        <span class="font-bold">- REDLINE DELETE:</span> &ldquo;Vendor may engage third-party hosting and AI providers at its discretion.&rdquo;
      </div>
      <div class="text-emerald-700 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/30 p-2 rounded border border-emerald-200 dark:border-emerald-900">
        <span class="font-bold">+ INSERT MANDATORY CLAUSE:</span> &ldquo;Vendor shall maintain a publicly accessible, real-time list of all authorized sub-processors. Every sub-processor handling Student Data must be bound by contractual data privacy terms at least as restrictive as this Agreement. Vendor assumes full joint and several financial liability for any breach of Student Data or unauthorized data caching caused by its sub-processors.&rdquo;
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Real-World District Audit Case Studies</h2>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">Case Study 1: Suburban Unified School District (24,000 Students)</div>
    <h3 class="text-base font-bold text-foreground mt-0 mb-2">Discovery of 85,000 Student Essays in Commercial S3 Training Bucket</h3>
    <p class="text-xs text-muted-foreground mb-3 leading-relaxed">
      During an annual cybersecurity audit, the district CISO discovered that a legacy plagiarism vendor was transferring student essays into an unencrypted AWS S3 bucket labeled <code>internal-nlp-dataset-v2</code>. The vendor claimed that stripping document headers constituted &ldquo;de-identification.&rdquo; However, student essays routinely contained personal disclosures, regional sports team names, and teacher references in the body prose that easily re-identified students.
    </p>
    <div class="rounded-lg bg-teal-50 dark:bg-teal-950/30 p-3 border border-teal-500/30 text-xs text-teal-800 dark:text-teal-300 font-medium">
      <strong>Resolution with Checkmark:</strong> The school board issued an immediate cease-and-desist letter, terminated the legacy contract, and deployed Checkmark Plagiarism across the district. Checkmark’s ephemeral in-memory processing guaranteed that zero student essays were ever saved to disk or used for vendor model development.
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">Case Study 2: Metro Public Schools (52,000 Students)</div>
    <h3 class="text-base font-bold text-foreground mt-0 mb-2">Blocking Model Inversion Vulnerabilities in Sensitive SEL Narratives</h3>
    <p class="text-xs text-muted-foreground mb-3 leading-relaxed">
      District technology leaders discovered high school humanities teachers copying and pasting 10th-grade personal narrative essays—many detailing sensitive mental health struggles and socioeconomic hardships—into public consumer AI tools and unapproved browser extensions to generate feedback comments.
    </p>
    <div class="rounded-lg bg-teal-50 dark:bg-teal-950/30 p-3 border border-teal-500/30 text-xs text-teal-800 dark:text-teal-300 font-medium">
      <strong>Resolution with Checkmark:</strong> The district IT Director blocked unapproved AI extensions at the firewall and provisioned Checkmark Plagiarism via 1EdTech LTI 1.3 in Canvas LMS. Teachers gained quote-anchored rubric autograding with full teacher-in-the-loop approval, saving 6+ hours weekly while processing essays entirely in secure volatile RAM.
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">Case Study 3: Regional County Consortium (18 Districts)</div>
    <h3 class="text-base font-bold text-foreground mt-0 mb-2">Eliminating Centralized Plaintext Repository Risks Across 18 Districts</h3>
    <p class="text-xs text-muted-foreground mb-3 leading-relaxed">
      A regional consortium representing 18 school districts maintained a shared academic integrity archive of 400,000 plaintext student essays. A state privacy compliance audit flagged this cross-district database as a violation of SOPPA and NY Education Law § 2-d because inter-district sharing lacked parental authorization.
    </p>
    <div class="rounded-lg bg-teal-50 dark:bg-teal-950/30 p-3 border border-teal-500/30 text-xs text-teal-800 dark:text-teal-300 font-medium">
      <strong>Resolution with Checkmark:</strong> The consortium migrated to Checkmark’s Isolated Cryptographic Hash Vaults. Checkmark converted all essays into salted MinHash vectors, enabling 100% accurate peer plagiarism matching across member districts while ensuring that <strong>zero plaintext student essays were ever stored, pooled, or exposed</strong>.
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>9. Step-by-Step IT Implementation Protocol: Securing District Writing Workflows</h2>

<p>
  District IT Directors and CISOs can follow this four-phase operational blueprint to secure their district’s academic writing and grading pipelines.
</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold">1</span>
      <h3 class="text-sm font-bold text-foreground m-0 p-0">Phase 1: Discovery &amp; Shadow AI Audit</h3>
    </div>
    <ul class="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 m-0">
      <li><strong>DNS &amp; Firewall Inspection:</strong> Query firewall and SWG logs for unapproved AI domains and browser extensions.</li>
      <li><strong>Extension Whitelisting:</strong> Enforce managed browser policies that block unapproved DOM-scraping extensions.</li>
      <li><strong>Vendor DPA Audit:</strong> Audit active contracts against the 10-Point Technical Procurement Matrix.</li>
    </ul>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold">2</span>
      <h3 class="text-sm font-bold text-foreground m-0 p-0">Phase 2: Policy Codification &amp; Board Approval</h3>
    </div>
    <ul class="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 m-0">
      <li><strong>Formalize ZDR Mandate:</strong> Present administrative policy requiring Zero-Data-Retention for all AI writing tools.</li>
      <li><strong>DPA Standardization:</strong> Adopt the NDPA standard agreement with Checkmark’s mandatory redlines.</li>
      <li><strong>Update AUP:</strong> Align Acceptable Use Policies for educators and students.</li>
    </ul>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold">3</span>
      <h3 class="text-sm font-bold text-foreground m-0 p-0">Phase 3: Secure Enterprise Deployment</h3>
    </div>
    <ul class="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 m-0">
      <li><strong>LTI 1.3 Advantage Integration:</strong> Deploy Checkmark across Canvas LMS, Buzz LMS, or Google Classroom.</li>
      <li><strong>Enterprise SSO:</strong> Enforce identity federation via Google Workspace or Microsoft Entra ID with MFA.</li>
      <li><strong>Initialize Hash Vaults:</strong> Configure private cryptographic salt for district cohort isolation.</li>
    </ul>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold">4</span>
      <h3 class="text-sm font-bold text-foreground m-0 p-0">Phase 4: Continuous Verification &amp; Auditing</h3>
    </div>
    <ul class="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 m-0">
      <li><strong>Empower Teachers:</strong> Train departments to use Essay Playback™ (1x–8x scrub speed) for supportive writing conferences.</li>
      <li><strong>Monitor Autograding:</strong> Preserve teacher final grading authority before gradebook passback.</li>
      <li><strong>Quarterly Audits:</strong> Review sub-processor lists and annual SOC 2 Type II reports.</li>
    </ul>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>10. Frequently Asked Questions (FAQs) for District Technology Leaders</h2>

<div class="my-6 space-y-3">
  <details class="group rounded-xl border border-border bg-card p-4 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between font-semibold text-foreground text-sm">
      <span>1. What is the difference between an API &ldquo;opt-out&rdquo; and true Zero-Data-Retention (ZDR)?</span>
      <span class="transition group-open:rotate-180 text-teal-600">&darr;</span>
    </summary>
    <p class="mt-3 text-xs text-muted-foreground leading-relaxed">
      An &ldquo;opt-out&rdquo; checkbox is a policy promise where the vendor agrees not to use your data for model training, but raw student text is still transmitted, logged to physical cloud disks for 30 days, and processed through multi-tenant databases. <strong>True Zero-Data-Retention (ZDR)</strong> is an architectural standard where data is processed 100% in volatile memory (RAM) and immediately zeroized (<code>memset</code>), with zero plaintext disk storage, zero logging, and zero model training.
    </p>
  </details>

  <details class="group rounded-xl border border-border bg-card p-4 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between font-semibold text-foreground text-sm">
      <span>2. Can a student essay be deleted from an AI model after it has been trained?</span>
      <span class="transition group-open:rotate-180 text-teal-600">&darr;</span>
    </summary>
    <p class="mt-3 text-xs text-muted-foreground leading-relaxed">
      <strong>No.</strong> Deep neural networks convert text into billions of mathematical weights via gradient descent backpropagation. You cannot locate or delete an individual student essay from trained model parameters. The only way to remove the data is to completely discard and retrain the model from scratch at massive computational expense. This is why preventing initial data ingestion via ZDR architecture is critical.
    </p>
  </details>

  <details class="group rounded-xl border border-border bg-card p-4 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between font-semibold text-foreground text-sm">
      <span>3. How does Checkmark detect peer plagiarism without storing student essays in a database?</span>
      <span class="transition group-open:rotate-180 text-teal-600">&darr;</span>
    </summary>
    <p class="mt-3 text-xs text-muted-foreground leading-relaxed">
      Checkmark utilizes <strong>Salted Locality-Sensitive Hashing (LSH) and MinHash Cryptographic Vaults</strong>. Incoming essays are converted into irreversible mathematical signatures (MinHash vectors) salted with a district-specific key. These mathematical fingerprints allow instant Jaccard similarity comparison across submissions without storing, pooling, or exposing a single sentence of raw plaintext student prose.
    </p>
  </details>

  <details class="group rounded-xl border border-border bg-card p-4 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between font-semibold text-foreground text-sm">
      <span>4. Does FERPA allow districts to use AI autograders and AI writing detectors?</span>
      <span class="transition group-open:rotate-180 text-teal-600">&darr;</span>
    </summary>
    <p class="mt-3 text-xs text-muted-foreground leading-relaxed">
      <strong>Yes, but only under strict conditions.</strong> The vendor must qualify as an authorized &ldquo;School Official&rdquo; under 34 CFR § 99.31(a)(1)(i)(B). This requires that the vendor operate under the direct control of the district, use student data solely for the designated educational purpose, never redisclose the data, and <strong>never use student essays for secondary commercial purposes or machine learning model training</strong>.
    </p>
  </details>

  <details class="group rounded-xl border border-border bg-card p-4 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between font-semibold text-foreground text-sm">
      <span>5. Why are single percentage AI detection scores legally risky for school districts?</span>
      <span class="transition group-open:rotate-180 text-teal-600">&darr;</span>
    </summary>
    <p class="mt-3 text-xs text-muted-foreground leading-relaxed">
      Single percentage scores (e.g., “88% AI Generated”) are opaque black-box outputs that lack transparent evidentiary backing and carry elevated false-positive risks for non-native English speakers and structured student writers. Accusing a student based solely on a black-box score violates procedural due process. Checkmark eliminates this risk by pairing passage-level AI confidence sliders with <strong>patent-pending Essay Playback™</strong>, allowing teachers to verify authentic writing through complete keystroke dynamics, revision history, and paste tracking.
    </p>
  </details>

  <details class="group rounded-xl border border-border bg-card p-4 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between font-semibold text-foreground text-sm">
      <span>6. How does Checkmark prevent student data exposure through third-party observability tools?</span>
      <span class="transition group-open:rotate-180 text-teal-600">&darr;</span>
    </summary>
    <p class="mt-3 text-xs text-muted-foreground leading-relaxed">
      Checkmark’s ephemeral compute architecture strictly sanitizes all logging streams. Telemetry and application performance monitoring (APM) tools capture system-level performance metrics (latency, memory utilization, error codes) without logging HTTP request payloads, student PII, or essay text.
    </p>
  </details>

  <details class="group rounded-xl border border-border bg-card p-4 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between font-semibold text-foreground text-sm">
      <span>7. How does Checkmark integrate with Canvas LMS, Buzz LMS, and Google Workspace?</span>
      <span class="transition group-open:rotate-180 text-teal-600">&darr;</span>
    </summary>
    <p class="mt-3 text-xs text-muted-foreground leading-relaxed">
      Checkmark is certified under the <strong>1EdTech LTI 1.3 Advantage standard</strong>. It embeds directly within Canvas LMS and Buzz LMS assignments, synchronizes rosters automatically via NRPS, and returns finalized grades and rubric feedback directly to the gradebook via AGS. For Google Workspace, Checkmark integrates natively with Google Docs and Google Classroom, supporting enterprise SAML 2.0 and Microsoft Entra ID single sign-on.
    </p>
  </details>
</div>

<hr class="my-8 border-border" />

<h2>11. Conclusion: Stop Guessing, Start Trusting with Zero-Retention Integrity</h2>

<p>
  In the era of generative artificial intelligence, school districts no longer have to choose between adopting advanced educational technology and safeguarding student data privacy. By rejecting legacy vendors that warehouse student intellectual property for commercial machine learning R&amp;D, District IT Directors, CISOs, and School Boards can establish a secure, defensible academic integrity standard.
</p>

<div class="my-8 rounded-2xl border border-teal-500/40 bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-950 p-6 text-slate-100 shadow-2xl">
  <div class="flex flex-col md:flex-row items-center justify-between gap-6">
    <div class="space-y-2 text-center md:text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
        Enterprise District Governance
      </div>
      <h3 class="text-xl md:text-2xl font-bold text-white m-0">Ready to Secure Your District’s Writing Pipelines?</h3>
      <p class="text-xs md:text-sm text-slate-300 m-0 max-w-xl">
        Protect student intellectual property, eliminate AI training leaks, and ensure 100% FERPA/COPPA compliance with Checkmark Plagiarism’s verified Zero-Data-Retention (ZDR) architecture.
      </p>
    </div>
    <div class="flex flex-col sm:flex-row gap-3 shrink-0">
      <a 
        href="https://checkmarkplagiarism.com" 
        class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-teal-500 text-slate-950 hover:bg-teal-400 transition-colors shadow-lg"
      >
        Schedule Architecture Review
      </a>
      <a 
        href="/services/writing-process" 
        class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition-colors"
      >
        Explore Essay Playback™
      </a>
    </div>
  </div>
</div>
`;

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
};

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const refValue = typeof resolvedSearchParams?.ref === 'string' ? resolvedSearchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/how-district-it-directors-can-ensure-student-essays-are-never-cached-in-public-llm-repositories"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
