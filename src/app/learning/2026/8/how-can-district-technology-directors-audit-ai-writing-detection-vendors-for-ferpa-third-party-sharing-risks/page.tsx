import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can District Technology Directors Audit AI Writing Detection Vendors for FERPA Third-Party Sharing Risks? | Checkmark Plagiarism",
  description: "An authoritative technical procurement audit guide for District Technology Directors, CISOs, and superintendents to evaluate AI writing detection and autograding vendors for FERPA third-party data sharing risks, API pass-through vulnerabilities, and state compliance.",
  keywords: [
    "district technology director",
    "FERPA audit",
    "third-party sharing risks",
    "AI writing detection vendor audit",
    "EdTech procurement",
    "student data privacy",
    "API pass-through risks",
    "zero data retention",
    "Checkmark Plagiarism",
    "Essay Playback",
    "COPPA compliance",
    "NY Education Law 2-d",
    "SOPPA",
    "SOPIPA"
  ],
  openGraph: {
    images: ["/images/learning/how-can-district-technology-directors-audit-ai-writing-detection-vendors-for-ferpa-third-party-sharing-risks/featured.png"],
  },
};

const meta = {
  title: "How Can District Technology Directors Audit AI Writing Detection Vendors for FERPA Third-Party Sharing Risks? | Checkmark Plagiarism",
  description: "An authoritative technical procurement audit guide for District Technology Directors, CISOs, and superintendents to evaluate AI writing detection and autograding vendors for FERPA third-party data sharing risks, API pass-through vulnerabilities, and state compliance.",
  "opengraph-image": "/images/learning/how-can-district-technology-directors-audit-ai-writing-detection-vendors-for-ferpa-third-party-sharing-risks/featured.png",
  date: "08-18-2026",
  readTime: "~20 min read",
  category: "Security & Privacy",
  categories: ["Security & Privacy", "District Leadership", "Procurement & Compliance", "Academic Integrity", "EdTech Architecture"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-3">
    <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-600 text-white shadow-sm">
      Executive Summary
    </span>
    <span class="text-xs font-medium text-teal-800 dark:text-teal-300">Technical Procurement &amp; Privacy Playbook</span>
  </div>
  <p class="text-foreground font-medium leading-relaxed mb-3">
    As generative artificial intelligence, automated rubric scoring, and AI writing detection tools proliferate across K-12 school districts and higher education institutions, District Technology Directors (CTOs/CIOs), Chief Information Security Officers (CISOs), and Superintendents face an urgent operational and legal challenge: <strong>the multi-tier third-party data sharing supply chain embedded within modern educational software</strong>. When an educator submits a student essay, personal narrative, or homework assignment into an AI detection or autograding platform, that student work often does not stay within the vendor's primary infrastructure. Instead, many commercial vendors operate as thin software wrappers that silently route raw student prose to downstream third-party Large Language Model (LLM) API providers, external cloud diagnostic logging services, and off-shore data annotation pipelines without verified Zero-Data-Retention (ZDR) agreements.
  </p>
  <p class="text-xs text-muted-foreground leading-relaxed m-0">
    Under the <strong>Family Educational Rights and Privacy Act (FERPA, 34 CFR Part 99)</strong>, unauthorized redisclosure of student education records immediately forfeits the vendor's statutory <strong>&ldquo;School Official&rdquo; exemption (&sect; 99.31(a)(1)(i)(B))</strong>, exposing districts to federal sanctions, parental civil liability, and severe penalties under state privacy mandates such as <strong>New York Education Law &sect; 2-d</strong>, <strong>Illinois SOPPA</strong>, and <strong>California SOPIPA</strong>. This guide provides an exhaustive, actionable procurement audit playbook for district leadership. We deconstruct the hidden sub-processor supply chain, outline the legal criteria governing vendor evaluation, provide a 10-point technical procurement checklist and contract redlining matrix, and examine how <strong>Checkmark Plagiarism</strong> eliminates third-party sharing risks through 100% ephemeral in-memory processing, strict zero-model-training guarantees, district-isolated cryptographic hash vaults, and patent-pending <strong>Essay Playback™</strong> writing process analysis.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> empowers school boards, superintendents, and IT leadership to implement defensible writing governance by unifying <a href="/services/ai-detection">passage-level AI detection</a>, <a href="/services/plagiarism-detection">side-by-side plagiarism verification</a>, <a href="/services/autograder">rubric-based autograding</a>, and patent-pending <a href="/services/writing-process">Essay Playback™ writing process telemetry</a> within a strict zero-retention, FERPA-compliant infrastructure integrated with <a href="/services/integrations/canvas-lms">Canvas LMS</a> and <a href="/services/integrations/buzz-lms">Agilix Buzz LMS</a>.</p>

<div class="my-8">
  <img src="/images/learning/how-can-district-technology-directors-audit-ai-writing-detection-vendors-for-ferpa-third-party-sharing-risks/featured.png" alt="District Technology Leadership AI Vendor Procurement & FERPA Audit Dashboard - Checkmark Plagiarism" class="w-full rounded-2xl shadow-xl border border-border" />
  <p class="text-xs text-center text-muted-foreground mt-2 italic">Figure 1: Comprehensive District Technology &amp; CISO Vendor Audit Dashboard for evaluating sub-processor supply chain security, API pass-through compliance, and Zero-Data-Retention (ZDR) validation.</p>
</div>

<hr class="my-8 border-border" />

<h2>1. The Multi-Tier Sub-Processor Supply Chain in AI EdTech</h2>

<p>For decades, evaluating educational software security was relatively straightforward. A school district evaluated a software-as-a-service (SaaS) vendor, reviewed its SOC 2 Type II report, verified its Amazon Web Services (AWS) or Microsoft Azure hosting perimeter, signed a standard Student Data Privacy Agreement (DPA), and integrated the platform via LTI (Learning Tools Interoperability) into the Learning Management System (Canvas LMS, Agilix Buzz, Google Classroom, or Moodle). Student data resided in dedicated relational database tables controlled by the primary vendor.</p>

<p>The explosion of generative artificial intelligence and neural network classifiers has shattered this simple single-tenant procurement model. Today, building state-of-the-art transformer models, large-scale linguistic perplexity scanners, and automated rubric reasoning engines requires massive computational infrastructure that very few EdTech startups or legacy vendors maintain in-house.</p>

<p>Consequently, the EdTech market has become saturated with <strong>multi-tier sub-processor supply chains</strong>—layered architectures where student data cascades across multiple third-party corporations before a report is ever generated for a teacher.</p>

<div class="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 font-mono text-xs shadow-xl">
  <div class="text-teal-400 font-bold uppercase tracking-wider text-sm mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
    <span>THE MULTI-TIER AI EDTECH SUB-PROCESSOR SUPPLY CHAIN</span>
    <span class="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Vulnerability Analysis</span>
  </div>
  
  <div class="space-y-4">
    <!-- Tier 1 -->
    <div class="rounded-xl bg-slate-800/90 p-4 border border-teal-500/40 shadow-sm">
      <div class="flex items-center justify-between mb-1">
        <span class="text-teal-300 font-bold text-sm">TIER 1: THE PRIMARY EDTECH SAAS FRONTEND</span>
        <span class="text-[10px] bg-teal-950 text-teal-400 border border-teal-700/50 px-2 py-0.5 rounded">Direct Contract</span>
      </div>
      <p class="text-slate-300 text-xs m-0">District-facing vendor UI &amp; LMS Integration (Canvas LMS, Agilix Buzz, Google Classroom, Word/Docs Add-ons).</p>
      <div class="mt-2 text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded">
        <strong>Ingested Payloads:</strong> Full student essays, prompts, student IDs, teacher feedback, and keystroke metrics.
      </div>
    </div>

    <!-- Connector 1 -->
    <div class="flex items-center justify-center gap-2 text-slate-400 text-xs">
      <span class="text-amber-400">&darr;</span>
      <span class="italic text-[11px]">Transmits unencrypted HTTP POST JSON payloads across public cloud backbones</span>
      <span class="text-amber-400">&darr;</span>
    </div>

    <!-- Tier 2 -->
    <div class="rounded-xl bg-amber-950/30 p-4 border border-amber-500/50 shadow-sm">
      <div class="flex items-center justify-between mb-1">
        <span class="text-amber-300 font-bold text-sm">TIER 2: DOWNSTREAM FOUNDATION MODEL &amp; INFERENCE APIS</span>
        <span class="text-[10px] bg-amber-950 text-amber-300 border border-amber-600/50 px-2 py-0.5 rounded">Sub-Processor Risk</span>
      </div>
      <p class="text-amber-100 text-xs m-0">External Foundation LLM Providers: OpenAI, Anthropic, AWS Bedrock, Google Cloud Vertex AI, Azure OpenAI.</p>
      <div class="mt-2 text-[11px] text-amber-200/90 bg-slate-900/80 p-2 rounded border border-amber-500/20">
        <strong>⚠️ CRITICAL VULNERABILITY:</strong> Standard developer API keys cache student prompts for 30–90 days for &ldquo;abuse monitoring,&rdquo; developer debugging, and Reinforcement Learning from Human Feedback (RLHF) ingestion.
      </div>
    </div>

    <!-- Connector 2 -->
    <div class="flex items-center justify-center gap-2 text-slate-400 text-xs">
      <span class="text-rose-400">&darr;</span>
      <span class="italic text-[11px]">Telemetry mirroring, error dumping, and model performance logging</span>
      <span class="text-rose-400">&darr;</span>
    </div>

    <!-- Tier 3 -->
    <div class="rounded-xl bg-rose-950/30 p-4 border border-rose-500/50 shadow-sm">
      <div class="flex items-center justify-between mb-1">
        <span class="text-rose-300 font-bold text-sm">TIER 3: AUXILIARY LOGGING, OBSERVABILITY &amp; ANNOTATION SERVICES</span>
        <span class="text-[10px] bg-rose-950 text-rose-300 border border-rose-600/50 px-2 py-0.5 rounded">4th-Party Hidden Layer</span>
      </div>
      <p class="text-rose-100 text-xs m-0">APM aggregators (Datadog, Sentry), LLM observability (LangSmith, Helicone, Weights &amp; Biases), and third-party human labeling services.</p>
      <div class="mt-2 text-[11px] text-rose-200/90 bg-slate-900/80 p-2 rounded border border-rose-500/20">
        <strong>⚠️ CRITICAL VULNERABILITY:</strong> Full student essays mirrored in unencrypted developer diagnostic logs; disputed scores routed to offshore contractor review teams without FERPA certification or criminal background checks.
      </div>
    </div>
  </div>
</div>

<h3>The Three Critical Sub-Processor Vulnerability Vectors</h3>

<p>When district technology directors audit AI writing detection and autograding vendors, they must look beyond the vendor’s landing page marketing and investigate three specific technical failure points:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-5">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
    <div class="flex items-center gap-2 mb-3">
      <div class="h-7 w-7 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xs">01</div>
      <h4 class="text-base font-semibold text-foreground m-0 p-0">API Pass-Through Risks</h4>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Many commercial detectors are architecturally thin wrappers. When an essay is submitted, the server packages the text into a JSON body and transmits it to a third-party commercial API. Without an explicit, executed <strong>Enterprise Zero-Data-Retention (ZDR) DPA</strong> with non-caching headers, the external AI vendor stores the raw student essay on staging disks for 30–90 days.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
    <div class="flex items-center gap-2 mb-3">
      <div class="h-7 w-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs">02</div>
      <h4 class="text-base font-semibold text-foreground m-0 p-0">Hidden Model Training</h4>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Commercial foundation models continually harvest high-grade student writing to refine tokenizers, perplexity classifiers, and RLHF reward functions. If the vendor operates on standard tiers, student prose becomes permanently embedded within billions of neural weights—rendering standard database deletion (<code class="text-[11px]">DELETE FROM submissions</code>) mathematically impossible.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
    <div class="flex items-center gap-2 mb-3">
      <div class="h-7 w-7 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-xs">03</div>
      <h4 class="text-base font-semibold text-foreground m-0 p-0">Diagnostic Log Sprawl</h4>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed m-0">
      Even when vendors claim they do not save submissions to primary databases, application performance monitoring (APM) tools (Datadog, Sentry, CloudWatch) capture full HTTP request/response payloads during runtime exceptions. Student PII and essays are leaked into long-term cloud log archives and accessible to unvetted developer accounts.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>2. Federal &amp; State Statutory Frameworks Governing AI Vendor Audits</h2>

<p>Every District Technology Director, CISO, and School Board operates under a strict matrix of federal and state laws. Deploying an AI vendor that engages in unauthorized third-party sharing is not merely a technical oversight; it is a direct statutory violation that exposes the school district to federal investigations, civil liability, state debarment, and catastrophic loss of community trust.</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/70 text-foreground font-semibold">
        <th class="p-3.5">Statute / Regulatory Body</th>
        <th class="p-3.5 bg-teal-500/10 text-teal-800 dark:text-teal-300">Mandatory Vendor Requirement</th>
        <th class="p-3.5 bg-rose-500/10 text-rose-800 dark:text-rose-300">Consequence of Non-Compliance</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30 transition-colors">
        <td class="p-3.5 font-semibold text-foreground">
          FERPA<br />
          <span class="text-[11px] font-normal text-muted-foreground">34 CFR Part 99</span>
        </td>
        <td class="p-3.5 font-medium text-teal-700 dark:text-teal-300">
          Must strictly satisfy &ldquo;School Official&rdquo; exception (&sect; 99.31) with direct district administrative control and absolute zero secondary sharing/redisclosure.
        </td>
        <td class="p-3.5 text-rose-700 dark:text-rose-400">
          Immediate forfeiture of legal safe harbor; unauthorized redisclosure violation (&sect; 99.33); federal Department of Education SPPO investigation and sanction.
        </td>
      </tr>
      <tr class="hover:bg-muted/30 transition-colors">
        <td class="p-3.5 font-semibold text-foreground">
          COPPA<br />
          <span class="text-[11px] font-normal text-muted-foreground">15 U.S.C. &sect;&sect; 6501–6506</span>
        </td>
        <td class="p-3.5 font-medium text-teal-700 dark:text-teal-300">
          Absolute statutory prohibition on commercial profiling, behavioral tracking, or machine learning training on minors under age 13.
        </td>
        <td class="p-3.5 text-rose-700 dark:text-rose-400">
          Federal Trade Commission (FTC) enforcement actions; civil penalties exceeding $50,120+ per violation; school district cannot legally consent on behalf of parents.
        </td>
      </tr>
      <tr class="hover:bg-muted/30 transition-colors">
        <td class="p-3.5 font-semibold text-foreground">
          NY Education Law &sect; 2-d<br />
          <span class="text-[11px] font-normal text-muted-foreground">New York State</span>
        </td>
        <td class="p-3.5 font-medium text-teal-700 dark:text-teal-300">
          Mandatory Parents' Bill of Rights; NIST Cybersecurity Framework (CSF) alignment; published sub-processor registry; full in-transit and at-rest encryption.
        </td>
        <td class="p-3.5 text-rose-700 dark:text-rose-400">
          State-wide vendor debarment across all New York school districts; statutory fines of $10 per impacted student; mandatory public breach notifications.
        </td>
      </tr>
      <tr class="hover:bg-muted/30 transition-colors">
        <td class="p-3.5 font-semibold text-foreground">
          Illinois SOPPA<br />
          <span class="text-[11px] font-normal text-muted-foreground">105 ILCS 85/</span>
        </td>
        <td class="p-3.5 font-medium text-teal-700 dark:text-teal-300">
          Statutory ban on student profiling and targeted ads; enforceable district right to demand deletion; mandatory publicly posted vendor DPAs.
        </td>
        <td class="p-3.5 text-rose-700 dark:text-rose-400">
          Mandatory public breach notifications to parents and State Board of Education; immediate contract termination; civil liability for student data exposure.
        </td>
      </tr>
      <tr class="hover:bg-muted/30 transition-colors">
        <td class="p-3.5 font-semibold text-foreground">
          California SOPIPA<br />
          <span class="text-[11px] font-normal text-muted-foreground">Cal. Bus. &amp; Prof. Code</span>
        </td>
        <td class="p-3.5 font-medium text-teal-700 dark:text-teal-300">
          Complete prohibition on creating student profiles for non-educational purposes; zero data retention beyond contract term; instant purge covenants.
        </td>
        <td class="p-3.5 text-rose-700 dark:text-rose-400">
          Direct violation of state business and professions code; mandatory immediate data purging; public injunctions and statutory financial penalties.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<h3>1. FERPA (34 CFR Part 99) and the "School Official" Exception</h3>

<p>Under the <strong>Family Educational Rights and Privacy Act (FERPA, 20 U.S.C. &sect; 1232g; 34 CFR Part 99)</strong>, educational institutions are strictly prohibited from disclosing personally identifiable information (PII) from education records without prior written parental consent.</p>

<p>In digital learning environments, districts rely almost exclusively on the <strong>&ldquo;School Official&rdquo; exception outlined in 34 CFR &sect; 99.31(a)(1)(i)(B)</strong>. To legally qualify as a School Official, an AI writing detection or autograding vendor must satisfy four non-negotiable legal criteria:</p>

<ol class="space-y-2 my-4">
  <li><strong>Institutional Service Substitution:</strong> The vendor performs an institutional service or function for which the district would otherwise employ internal instructional staff (e.g., evaluating writing structure, citations, or academic integrity).</li>
  <li><strong>Legitimate Educational Interest:</strong> The vendor’s access is strictly limited to records necessary to execute the assigned educational service.</li>
  <li><strong>Direct Control Requirement:</strong> The vendor operates under the <strong>direct administrative control</strong> of the school or district regarding the use, handling, and maintenance of education records.</li>
  <li><strong>Strict Purpose Limitation &amp; Re-Disclosure Prohibition (&sect; 99.33):</strong> The vendor is statutorily prohibited from redisclosing student education records to any other party without prior district consent, and may <strong>never</strong> use student data for any purpose other than the specific educational service contracted.</li>
</ol>

<div class="my-6 rounded-2xl border border-rose-500/30 bg-rose-50/60 dark:bg-rose-950/20 p-5 shadow-sm">
  <div class="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-400 font-bold text-sm">
    <span>⚠️ The Legal Collapse of the School Official Safe Harbor</span>
  </div>
  <p class="text-xs text-muted-foreground m-0 leading-relaxed">
    When an EdTech vendor routes student essays to a third-party AI provider that logs payloads for system debugging, or when the vendor pools student essays to improve its own commercial AI algorithms, <strong>the vendor violates 34 CFR &sect; 99.33(a)</strong>. The vendor is no longer operating under the direct control of the district for a sole educational purpose. This single act voids the &ldquo;School Official&rdquo; exemption, transforming the software deployment into an illegal, unauthorized federal disclosure of student records.
  </p>
</div>

<h3>2. COPPA (15 U.S.C. &sect;&sect; 6501–6506): Protections for Students Under 13</h3>

<p>The <strong>Children’s Online Privacy Protection Act (COPPA)</strong> prohibits commercial operators from collecting, using, or disclosing personal information from children under the age of 13 without verifiable parental consent.</p>

<p>While the Federal Trade Commission (FTC) permits schools and districts to act as the parent's agent to consent to EdTech data collection, <strong>this school-consent safe harbor applies ONLY if the data collection is solely for an educational purpose</strong>.</p>

<p>If an AI vendor uses essays written by elementary or middle school students to train machine learning models, build student behavioral profiles, or feed third-party LLM evaluation pipelines:</p>
<ul class="space-y-1 my-3">
  <li>The school district <strong>cannot legally grant consent</strong> on behalf of the parents.</li>
  <li>The vendor and the school district operate in direct violation of federal law, exposing the entity to FTC enforcement actions and statutory fines exceeding $50,120 per violation.</li>
</ul>

<h3>3. State Student Privacy Mandates: NY &sect; 2-d, SOPPA, and SOPIPA</h3>

<p>State legislatures have enacted student privacy statutes that impose even more stringent requirements than federal baseline regulations:</p>

<div class="my-6 space-y-3">
  <div class="rounded-xl border border-border bg-card p-4">
    <h4 class="text-sm font-semibold text-foreground mb-1">New York Education Law &sect; 2-d</h4>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Mandates that every educational software vendor sign a legally binding Parents' Bill of Rights for Data Privacy and Security. Vendors must implement the <strong>NIST Cybersecurity Framework (CSF)</strong>, encrypt all student PII at rest and in transit, maintain a publicly accessible list of all sub-processors, and provide contractual commitments that student data will never be commercialized, sold, or used for product development. Unauthorized disclosure carries fines of $10 per impacted student and state-wide vendor debarment.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4">
    <h4 class="text-sm font-semibold text-foreground mb-1">Illinois Student Online Personal Protection Act (SOPPA, 105 ILCS 85/)</h4>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Prohibits vendors from engaging in targeted advertising, amassing student profiles for non-educational uses, or selling/leasing student data. Districts must post all vendor data privacy agreements publicly. If an AI detection vendor passes student data to an unlisted third-party sub-processor, the district must notify parents and state regulators of a data breach.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-4">
    <h4 class="text-sm font-semibold text-foreground mb-1">California Student Online Personal Information Protection Act (SOPIPA, Cal. Bus. &amp; Prof. Code &sect;&sect; 22584 et seq.)</h4>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Establishes an outright prohibition on creating persistent profiles of K-12 students. Vendors must delete student data immediately upon request from the educational agency and are strictly prohibited from retaining data once the educational contract terminates.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>3. Checkmark Plagiarism: Enterprise Security &amp; Zero-Retention Architecture</h2>

<p>To solve the dual challenge of providing powerful academic integrity verification while maintaining absolute, uncompromising FERPA and state privacy compliance, <strong>Checkmark Plagiarism</strong> was built from the ground up on a <strong>Zero-Data-Retention (ZDR)</strong> and <strong>Privacy-by-Design</strong> foundation.</p>

<div class="my-8 overflow-hidden rounded-2xl border border-teal-900/60 bg-slate-900 text-slate-100 p-6 font-mono text-xs shadow-xl">
  <div class="text-teal-400 font-bold uppercase tracking-wider text-sm mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
    <span>CHECKMARK PLAGIARISM: ZERO-RETENTION ENTERPRISE ARCHITECTURE</span>
    <span class="text-[11px] bg-teal-950 text-teal-300 border border-teal-700/50 px-2 py-0.5 rounded">100% In-Memory RAM Pipeline</span>
  </div>

  <div class="space-y-4">
    <!-- Step 1 -->
    <div class="rounded-xl bg-slate-800/80 p-4 border border-teal-500/30">
      <div class="flex items-center gap-2 mb-1">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-[11px] font-bold">1</span>
        <span class="text-teal-300 font-bold text-xs">SECURE LTI 1.3 INGESTION &amp; ZERO DISK PERSISTENCE</span>
      </div>
      <p class="text-slate-300 text-xs m-0">Document ingested via Canvas LMS, Agilix Buzz, Google Docs, or Word Add-on over TLS 1.3 / LTI 1.3 Advantage JWKS token exchange. Student prose loaded exclusively into volatile in-memory (RAM) execution containers. Zero staging database writes; zero external commercial API routing.</p>
    </div>

    <!-- Step 2 -->
    <div class="rounded-xl bg-slate-800/80 p-4 border border-cyan-500/30">
      <div class="flex items-center gap-2 mb-1">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-[11px] font-bold">2</span>
        <span class="text-cyan-300 font-bold text-xs">PRIVATE IN-HOUSE INFERENCE &amp; CRYPTOGRAPHIC TOKENIZATION</span>
      </div>
      <p class="text-slate-300 text-xs m-0">Self-hosted transformer models compute passage perplexity and burstiness in RAM. Peer comparison tokenized using salted one-way Locality-Sensitive Hashing (LSH) and MinHash. Web matches queried against live index; raw student text NEVER pooled across institutions.</p>
    </div>

    <!-- Step 3 -->
    <div class="rounded-xl bg-slate-800/80 p-4 border border-indigo-500/30">
      <div class="flex items-center gap-2 mb-1">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-[11px] font-bold">3</span>
        <span class="text-indigo-300 font-bold text-xs">MULTIDIMENSIONAL INTEGRITY VERIFICATION (TEACHER-IN-THE-LOOP)</span>
      </div>
      <p class="text-slate-300 text-xs m-0">Patent-Pending Essay Playback™ generates 1x–8x keystroke timeline, pauses, and paste buffers. Passage-level confidence sliders evaluate text with honest &lt;150-word safety guardrails. AI Rubric Autograder creates quote-anchored justifications for 1-click LMS grade passback.</p>
    </div>

    <!-- Step 4 -->
    <div class="rounded-xl bg-slate-800/80 p-4 border border-emerald-500/30">
      <div class="flex items-center gap-2 mb-1">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">4</span>
        <span class="text-emerald-300 font-bold text-xs">IMMEDIATE MEMORY PURGE (100% EPHEMERAL EXECUTION)</span>
      </div>
      <p class="text-slate-300 text-xs m-0">Analysis rendered directly into the authenticated teacher's encrypted browser session; volatile RAM container is immediately zeroed and purged. ZERO model training; ZERO diagnostic log retention; 100% FERPA/COPPA compliant.</p>
    </div>
  </div>
</div>

<h3>Architectural Pillar 1: 100% Ephemeral In-Memory (RAM) Processing</h3>
<p>Unlike legacy tools that write incoming student essays to persistent database disks, cloud object storage (AWS S3 buckets), and external developer logging pipelines, Checkmark Plagiarism utilizes <strong>ephemeral in-memory processing</strong>:</p>
<ul class="space-y-1 my-3">
  <li>When an essay is submitted for plagiarism scanning, AI writing analysis, or rubric autograding, the text is loaded exclusively into volatile RAM execution micro-containers.</li>
  <li>Linguistic pattern analysis (measuring perplexity, burstiness, syntax transitions, and vocabulary distributions) is computed in real time.</li>
  <li>Once the analysis report is transmitted to the authenticated educator's browser session, the in-memory buffer is <strong>instantly purged and zeroed out</strong>. No raw student text remains on server disks.</li>
</ul>

<h3>Architectural Pillar 2: Strict Zero-Model-Training Guarantee</h3>
<p>Checkmark Plagiarism guarantees by contract, by architecture, and by third-party attestation that <strong>student writing is never used to train, fine-tune, or calibrate machine learning models</strong>:</p>
<ul class="space-y-1 my-3">
  <li>Checkmark models are pre-trained on licensed, synthetic, and public-domain corpora before deployment.</li>
  <li>Student essays submitted through school district accounts are <strong>never</strong> passed into backpropagation loops, gradient descent optimizations, or internal model evaluation datasets.</li>
  <li>Districts retain 100% unencumbered intellectual property ownership of all student work.</li>
</ul>

<h3>Architectural Pillar 3: District-Isolated Cryptographic Hash Vaults</h3>
<p>To detect student-to-student and peer-to-peer copying across classrooms, course sections, and terms without compromising student privacy, Checkmark uses <strong>one-way salted Locality-Sensitive Hashing (LSH) and MinHash tokenization</strong>:</p>
<ul class="space-y-1 my-3">
  <li>Essays are mathematically decomposed into overlapping word sequences (rolling $k$-shingles, typically $k=7$).</li>
  <li>Shingles are passed through a cryptographic hash function salted with the district's unique private encryption key.</li>
  <li>The system compares mathematical fingerprints across submissions within the district's isolated repository. <strong>Raw student prose is never pooled into a centralized, cross-district multi-tenant database</strong>. Even in the impossible event of an unauthorized database extraction, an attacker obtains only non-invertible mathematical hashes, completely eliminating FERPA breach exposure.</li>
</ul>

<h3>Architectural Pillar 4: The Complete Multi-Dimensional Verification Suite</h3>
<p>Checkmark Plagiarism recognizes that whole-paper, black-box AI detection scores are pedagogically harmful and technically indefensible. Instead, Checkmark delivers a comprehensive, evidence-based academic integrity ecosystem:</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/70 text-foreground font-semibold">
        <th class="p-3.5">Verification Feature</th>
        <th class="p-3.5">Technical Mechanism</th>
        <th class="p-3.5">Pedagogical &amp; District Benefit</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30 transition-colors">
        <td class="p-3.5 font-semibold text-foreground">
          Patent-Pending<br />
          <span class="text-teal-600 dark:text-teal-400 font-medium">Essay Playback™</span>
        </td>
        <td class="p-3.5">
          Captures timestamped keystroke telemetry, composing pauses, structural rewrites, and external paste buffer history.
        </td>
        <td class="p-3.5">
          Exonerates falsely accused students; provides defensible, visual proof of authentic human drafting at 1x–8x playback speed.
        </td>
      </tr>
      <tr class="hover:bg-muted/30 transition-colors">
        <td class="p-3.5 font-semibold text-foreground">
          Granular Passage-Level<br />
          <span class="text-cyan-600 dark:text-cyan-400 font-medium">AI Writing Detection</span>
        </td>
        <td class="p-3.5">
          Evaluates localized perplexity and burstiness with calibrated sliders; private educator-only flag status.
        </td>
        <td class="p-3.5">
          Eliminates arbitrary whole-paper percentages; includes honest &lt;150-word safety guardrails displaying <code class="text-[11px]">N/A</code> on short text.
        </td>
      </tr>
      <tr class="hover:bg-muted/30 transition-colors">
        <td class="p-3.5 font-semibold text-foreground">
          Defensible Plagiarism<br />
          <span class="text-indigo-600 dark:text-indigo-400 font-medium">Source Matching</span>
        </td>
        <td class="p-3.5">
          Side-by-side quote comparisons with live web links; dedicated uncited source visual coaching cards.
        </td>
        <td class="p-3.5">
          Distinguishes citation formatting errors from deliberate plagiarism; enables targeted student research coaching.
        </td>
      </tr>
      <tr class="hover:bg-muted/30 transition-colors">
        <td class="p-3.5 font-semibold text-foreground">
          AI Rubric Autograder &amp;<br />
          <span class="text-emerald-600 dark:text-emerald-400 font-medium">LMS Grade Passback</span>
        </td>
        <td class="p-3.5">
          Evaluates essays against custom district rubrics; generates quote-anchored justifications for Canvas &amp; Buzz.
        </td>
        <td class="p-3.5">
          Saves 70%+ of teacher grading time while maintaining full teacher-in-the-loop authority before publishing to SIS.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<ul class="space-y-2 my-4">
  <li><strong>Patent-Pending Essay Playback™:</strong> Reconstructs the complete writing session keystroke-by-keystroke. Educators can scrub through the timeline like a video at 1x to 8x speed to watch drafting, composing pauses, deletions, rewrites, and pastes in real time. Timestamped paste buffers capture external text insertions even if subsequently edited. Transcription detection identifies mechanical typing without natural human pauses (such as when typing from a phone or second screen). Authentic revision history serves as the ultimate proof to exonerate students falsely accused by generic AI detectors.</li>
  <li><strong>Granular Passage-Level AI Detection:</strong> Rather than assigning a single, opaque percentage to an entire essay, Checkmark underlines specific suspect passages directly in the text. Each passage links to a sidebar evidence card with a calibrated confidence slider (typical human writing style vs. typical AI pattern). Crucially, Checkmark enforces strict guardrails: on submissions under 150 words, the report displays <code class="text-[11px]">N/A</code> rather than guessing on statistically insufficient sample sizes.</li>
  <li><strong>Teacher-in-the-Loop Rubric Autograding:</strong> Autogrades essays against custom or uploaded district rubrics (PDF, image, or synced from Canvas/Buzz). Generates quote-anchored justifications tied directly to student prose. Scores remain editable drafts until approved by the educator, who can publish feedback and grades directly back into Canvas LMS, Agilix Buzz, or Google Classroom gradebooks with a single click.</li>
</ul>

<hr class="my-8 border-border" />

<h2>4. The 10-Point Technical Procurement Audit Checklist for District CTOs &amp; CISOs</h2>

<p>District Technology Directors, CISOs, and procurement committees should mandate that every AI writing detection and autograding vendor complete this <strong>10-Point Technical Procurement Audit</strong> prior to contract execution or pilot approval.</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/70 text-foreground font-semibold">
        <th class="p-3.5 w-12 text-center">#</th>
        <th class="p-3.5">Audit Domain</th>
        <th class="p-3.5">Verification Requirement</th>
        <th class="p-3.5 w-44">Pass/Fail Standard</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 text-center font-bold text-teal-600 dark:text-teal-400">1</td>
        <td class="p-3.5 font-semibold text-foreground">Sub-Processor Mapping</td>
        <td class="p-3.5">Full disclosure of all downstream API providers, cloud hosts, and logging vendors.</td>
        <td class="p-3.5 font-medium text-emerald-600 dark:text-emerald-400">Mandatory complete architecture map</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 text-center font-bold text-teal-600 dark:text-teal-400">2</td>
        <td class="p-3.5 font-semibold text-foreground">Zero-Data-Retention (ZDR) API</td>
        <td class="p-3.5">Verified ZDR enterprise contract with downstream LLM APIs; explicit non-retention headers.</td>
        <td class="p-3.5 font-medium text-emerald-600 dark:text-emerald-400">Zero disk caching at any API tier</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 text-center font-bold text-teal-600 dark:text-teal-400">3</td>
        <td class="p-3.5 font-semibold text-foreground">Model Training Prohibition</td>
        <td class="p-3.5">Explicit contractual ban on using student prose for model fine-tuning, RLHF, or evaluation.</td>
        <td class="p-3.5 font-medium text-emerald-600 dark:text-emerald-400">Zero model training guarantee</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 text-center font-bold text-teal-600 dark:text-teal-400">4</td>
        <td class="p-3.5 font-semibold text-foreground">Ephemeral Data Lifecycle</td>
        <td class="p-3.5">Data processed exclusively in volatile RAM; zero intermediate disk persistence.</td>
        <td class="p-3.5 font-medium text-emerald-600 dark:text-emerald-400">Auto-purge post-analysis execution</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 text-center font-bold text-teal-600 dark:text-teal-400">5</td>
        <td class="p-3.5 font-semibold text-foreground">Cryptographic Hash Vaults</td>
        <td class="p-3.5">Peer plagiarism matching executed via one-way salted MinHash; no multi-tenant raw text pools.</td>
        <td class="p-3.5 font-medium text-emerald-600 dark:text-emerald-400">Zero raw text cross-pooling</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 text-center font-bold text-teal-600 dark:text-teal-400">6</td>
        <td class="p-3.5 font-semibold text-foreground">Third-Party Security Audits</td>
        <td class="p-3.5">SOC 2 Type II attestation report within past 12 months covering Security, Availability, Privacy.</td>
        <td class="p-3.5 font-medium text-emerald-600 dark:text-emerald-400">Current SOC 2 Type II with zero gaps</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 text-center font-bold text-teal-600 dark:text-teal-400">7</td>
        <td class="p-3.5 font-semibold text-foreground">Diagnostic Log Sanitization</td>
        <td class="p-3.5">APM and error logging services strip all request and response payloads containing student text.</td>
        <td class="p-3.5 font-medium text-emerald-600 dark:text-emerald-400">Zero student PII or prose in log dumps</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 text-center font-bold text-teal-600 dark:text-teal-400">8</td>
        <td class="p-3.5 font-semibold text-foreground">LTI 1.3 Advantage Security</td>
        <td class="p-3.5">Native integration via IMS Global LTI 1.3 with asymmetric public-key cryptography (JWKS).</td>
        <td class="p-3.5 font-medium text-emerald-600 dark:text-emerald-400">Modern OAuth2 token exchange only</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 text-center font-bold text-teal-600 dark:text-teal-400">9</td>
        <td class="p-3.5 font-semibold text-foreground">Defensible Evidence Suite</td>
        <td class="p-3.5">Patent-pending Essay Playback™ keystrokes and passage-level sliders (&lt;150w guardrails).</td>
        <td class="p-3.5 font-medium text-emerald-600 dark:text-emerald-400">Visual receipts; no black-box scores</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 text-center font-bold text-teal-600 dark:text-teal-400">10</td>
        <td class="p-3.5 font-semibold text-foreground">Indemnification &amp; Breach Liability</td>
        <td class="p-3.5">Comprehensive vendor indemnification for third-party sub-processor data leaks and FERPA breaches.</td>
        <td class="p-3.5 font-medium text-emerald-600 dark:text-emerald-400">Full financial &amp; forensic liability</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Detailed Breakdown of the 10 Audit Points</h3>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center justify-between mb-2">
      <h4 class="text-sm font-semibold text-foreground m-0">1. Complete Sub-Processor Supply Chain Disclosure</h4>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Audit Domain #1</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit Action:</strong> Require the vendor to provide an exhaustive, itemized list of all third-party sub-processors, cloud hosting environments, API routing gateways, and third-party monitoring platforms.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Verification Standard:</strong> The vendor must certify in writing that no unlisted fourth-party entities receive, inspect, or store student data.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center justify-between mb-2">
      <h4 class="text-sm font-semibold text-foreground m-0">2. Downstream Zero-Data-Retention (ZDR) API Verification</h4>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Audit Domain #2</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit Action:</strong> If the vendor utilizes third-party foundation models (such as OpenAI, Anthropic, or AWS Bedrock), demand a copy of the executed Enterprise Data Processing Agreement demonstrating <strong>Zero Data Retention</strong>.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Verification Standard:</strong> Confirmation that all API calls include mandatory zero-retention headers and that third-party 30-day abuse monitoring logs are disabled under a verified enterprise exemption.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center justify-between mb-2">
      <h4 class="text-sm font-semibold text-foreground m-0">3. Strict Machine Learning Training Prohibitions</h4>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Audit Domain #3</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit Action:</strong> Inspect the vendor's Terms of Service and Data Processing Addendum for phrases like &ldquo;improving our services,&rdquo; &ldquo;algorithmic optimization,&rdquo; or &ldquo;de-identified statistical analysis.&rdquo;</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Verification Standard:</strong> The contract must explicitly state: <em>&ldquo;Vendor and its sub-processors shall not use Student Data, metadata, or derivative content to train, retrain, fine-tune, or benchmark any commercial or internal artificial intelligence, large language model, or machine learning system.&rdquo;</em></p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center justify-between mb-2">
      <h4 class="text-sm font-semibold text-foreground m-0">4. Ephemeral In-Memory Processing &amp; Data Lifecycle</h4>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Audit Domain #4</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit Action:</strong> Review the vendor's data lifecycle architecture diagram. Confirm where student text resides during ingestion, tokenization, analysis, and report generation.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Verification Standard:</strong> Student essays must be processed in ephemeral volatile memory (RAM) and purged immediately following report rendering, with zero persistence on staging disks or unencrypted object stores.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center justify-between mb-2">
      <h4 class="text-sm font-semibold text-foreground m-0">5. Non-Invertible Cryptographic Peer Vaulting</h4>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Audit Domain #5</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit Action:</strong> Inquire how the vendor checks for student-to-student copying across different classrooms or school cohorts.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Verification Standard:</strong> The vendor must employ one-way cryptographic hashing (salted MinHash or Locality-Sensitive Hashing). Centralized global multi-tenant archives storing raw student text must be rejected as an unmanageable FERPA breach risk.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center justify-between mb-2">
      <h4 class="text-sm font-semibold text-foreground m-0">6. SOC 2 Type II Report &amp; Independent Penetration Testing</h4>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Audit Domain #6</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit Action:</strong> Review the vendor's most recent independent SOC 2 Type II examination report (spanning Trust Services Criteria for Security, Availability, and Confidentiality/Privacy) and executive summary of third-party annual penetration tests.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Verification Standard:</strong> The report must be dated within the preceding 12 months, conducted by an accredited CPA auditing firm, and show zero unmitigated high-risk exceptions.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center justify-between mb-2">
      <h4 class="text-sm font-semibold text-foreground m-0">7. Diagnostic Log &amp; APM Sanitization Protocols</h4>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Audit Domain #7</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit Action:</strong> Verify how the vendor handles application telemetry, error tracking (e.g., Sentry, Datadog), and developer debugging logs.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Verification Standard:</strong> The vendor must implement automated data scrubbing filters that sanitize HTTP request payloads, ensuring no student names, essay excerpts, or metadata are committed to APM log files.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center justify-between mb-2">
      <h4 class="text-sm font-semibold text-foreground m-0">8. LTI 1.3 Advantage &amp; Modern LMS Integration Security</h4>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Audit Domain #8</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit Action:</strong> Audit the vendor's integration protocols with Canvas LMS, Agilix Buzz, Google Classroom, or Moodle.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Verification Standard:</strong> The platform must utilize <strong>1EdTech (IMS Global) LTI 1.3 Advantage</strong> protocols with OAuth 2.0 asymmetric JSON Web Key Set (JWKS) message signing, rejecting legacy LTI 1.1 keys and unencrypted REST API tokens.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center justify-between mb-2">
      <h4 class="text-sm font-semibold text-foreground m-0">9. Defensible, Multi-Dimensional Integrity Evidence</h4>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Audit Domain #9</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit Action:</strong> Evaluate the quality and transparency of the vendor's integrity output.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Verification Standard:</strong> The platform must provide verifiable, multi-factor evidence—including <strong>Essay Playback™ keystroke dynamics</strong>, side-by-side source matching, and passage-level AI detection with calibrated confidence sliders and short-text (&lt;150 words) safety guardrails—preventing wrongful accusations based on opaque whole-document percentages.</p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <div class="flex items-center justify-between mb-2">
      <h4 class="text-sm font-semibold text-foreground m-0">10. Direct FERPA Breach Indemnification &amp; Forensic Liability</h4>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Audit Domain #10</span>
    </div>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit Action:</strong> Examine the vendor's legal liability provisions in the Master Services Agreement (MSA).</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Verification Standard:</strong> The vendor must accept full indemnification and defense obligations for data breaches, unauthorized sub-processor disclosures, and regulatory fines resulting from their failure or the failure of their downstream sub-processors to maintain FERPA/COPPA compliance.</p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>5. Contract Redlining Guide: Dangerous Red Flags vs. Gold Standard Terms</h2>

<p>When reviewing vendor-provided Master Services Agreements (MSAs) and Data Privacy Agreements (DPAs), district legal counsel and technology directors must actively redline ambiguous or dangerous clauses. Use this comparative matrix during contract negotiations:</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/70 text-foreground font-semibold">
        <th class="p-3.5">Contract Clause Domain</th>
        <th class="p-3.5 bg-rose-500/10 text-rose-800 dark:text-rose-300">❌ Dangerous Vendor Clause (Reject)</th>
        <th class="p-3.5 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300">✅ Gold Standard District Clause (Mandate)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Data Ownership &amp; IP</td>
        <td class="p-3.5 text-rose-700 dark:text-rose-400 font-mono text-[11px]">&ldquo;Vendor retains a perpetual, royalty-free license to use anonymized data to improve platform algorithms.&rdquo;</td>
        <td class="p-3.5 text-emerald-700 dark:text-emerald-300 font-mono text-[11px]">&ldquo;District and its students retain sole and exclusive ownership of all student content, IP, and associated metadata.&rdquo;</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">AI Model Training</td>
        <td class="p-3.5 text-rose-700 dark:text-rose-400 font-mono text-[11px]">&ldquo;Vendor may use de-identified student submissions for research, product development, and model enhancement.&rdquo;</td>
        <td class="p-3.5 text-emerald-700 dark:text-emerald-300 font-mono text-[11px]">&ldquo;Vendor, including all sub-processors, is strictly prohibited from using Student Data to train, fine-tune, or calibrate any AI or ML models.&rdquo;</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Sub-Processor Disclosure</td>
        <td class="p-3.5 text-rose-700 dark:text-rose-400 font-mono text-[11px]">&ldquo;Vendor may engage subcontractors at its discretion without prior notice to the Customer.&rdquo;</td>
        <td class="p-3.5 text-emerald-700 dark:text-emerald-300 font-mono text-[11px]">&ldquo;Vendor shall maintain a public list of approved sub-processors and provide 30 days written notice prior to any change; District retains absolute veto power.&rdquo;</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Data Retention &amp; Purging</td>
        <td class="p-3.5 text-rose-700 dark:text-rose-400 font-mono text-[11px]">&ldquo;Data will be retained for system backup purposes for up to 180 days following account termination.&rdquo;</td>
        <td class="p-3.5 text-emerald-700 dark:text-emerald-300 font-mono text-[11px]">&ldquo;All student prose is processed in RAM; intermediate data purged immediately post-analysis; zero disk persistence.&rdquo;</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Breach Notification &amp; Caps</td>
        <td class="p-3.5 text-rose-700 dark:text-rose-400 font-mono text-[11px]">&ldquo;Vendor will notify Customer of any confirmed breach within 30 business days; liability capped at 1x annual contract fee.&rdquo;</td>
        <td class="p-3.5 text-emerald-700 dark:text-emerald-300 font-mono text-[11px]">&ldquo;Vendor shall notify District in writing within 24 hours of any suspected breach; Vendor provides full indemnification unconstrained by standard liability caps.&rdquo;</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Detailed Redline Analysis</h3>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5">
    <h4 class="text-sm font-semibold text-foreground mb-2">1. The "De-Identified Data" Loophole</h4>
    <div class="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300 text-xs mb-2">
      <strong>❌ Dangerous Language:</strong> <em>&ldquo;Customer grants Vendor the right to de-identify, aggregate, and utilize Student Data for statistical modeling, algorithmic optimization, and machine learning research.&rdquo;</em>
    </div>
    <p class="text-xs text-muted-foreground mb-2">
      <strong>The Risk:</strong> Once text is labeled &ldquo;de-identified,&rdquo; vendors claim FERPA no longer applies. However, student writing contains unique autobiographical details, voice syntax, and local context that cannot be sanitized by simple regex name-stripping. Furthermore, training an AI model on student writing converts the work into permanent commercial assets.
    </p>
    <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs">
      <strong>✅ District Redline:</strong> Strike this clause entirely. Replace with: <em>&ldquo;Vendor shall not de-identify Student Data for internal commercial product development, nor shall Vendor use Student Data to train artificial intelligence or large language models.&rdquo;</em>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h4 class="text-sm font-semibold text-foreground mb-2">2. Downstream Sub-Processor Silent Substitution</h4>
    <div class="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300 text-xs mb-2">
      <strong>❌ Dangerous Language:</strong> <em>&ldquo;Vendor reserves the right to modify its third-party service providers, cloud infrastructure vendors, and API processors from time to time.&rdquo;</em>
    </div>
    <p class="text-xs text-muted-foreground mb-2">
      <strong>The Risk:</strong> A vendor might begin with private in-house inference, but quietly switch to an unvetted, consumer-tier third-party API provider six months later to reduce operational compute costs.
    </p>
    <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs">
      <strong>✅ District Redline:</strong> <em>&ldquo;Vendor shall notify District in writing at least thirty (30) days prior to onboarding any new sub-processor. District shall have the explicit right to audit the proposed sub-processor’s security posture and terminate the agreement without penalty if the sub-processor fails to meet District privacy standards.&rdquo;</em>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h4 class="text-sm font-semibold text-foreground mb-2">3. Liability Caps on Student Data Breaches</h4>
    <div class="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300 text-xs mb-2">
      <strong>❌ Dangerous Language:</strong> <em>&ldquo;Vendor’s total aggregate liability arising out of or related to this Agreement, whether in contract, tort, or data breach, shall be limited to the total fees paid by Customer in the preceding twelve (12) months.&rdquo;</em>
    </div>
    <p class="text-xs text-muted-foreground mb-2">
      <strong>The Risk:</strong> If a vendor or its third-party API leaks the personal essays and PII of 15,000 students, the statutory notification, forensic investigation, credit monitoring, and legal defense costs can easily reach hundreds of thousands of dollars. A $10,000 software fee cap leaves the school district bearing the entire financial catastrophe.
    </p>
    <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs">
      <strong>✅ District Redline:</strong> <em>&ldquo;The limitations of liability set forth in Section X shall NOT apply to Vendor’s breach of its confidentiality obligations, violations of Student Data Privacy covenants, or indemnification obligations under FERPA, COPPA, or state privacy laws.&rdquo;</em>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. Three Real-World District Audit Case Scenarios</h2>

<p>To illustrate how these technical procurement principles apply in practice, examine three realistic case studies from K-12 and unified school districts:</p>

<div class="my-6 grid grid-cols-1 md:grid-cols-3 gap-5">
  <!-- Scenario A -->
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Scenario A</span>
      <span class="text-[10px] bg-rose-500/10 text-rose-600 dark:text-rose-400 font-semibold px-2 py-0.5 rounded">API Leak Avoided</span>
    </div>
    <h4 class="text-sm font-semibold text-foreground mb-2">The &ldquo;Wrapper&rdquo; Detector API Leak</h4>
    <p class="text-xs text-muted-foreground mb-2"><strong>Setting:</strong> Suburban public district (12,000 students) evaluated a low-cost AI writing detector.</p>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit &amp; Discovery:</strong> CISO conducted packet capture (PCAP) and discovered raw essay payloads routed to consumer OpenAI API endpoints without Zero-Data-Retention headers.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Outcome:</strong> Immediate vendor termination; district avoided state regulatory sanctions and federal FERPA audit.</p>
  </div>

  <!-- Scenario B -->
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Scenario B</span>
      <span class="text-[10px] bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold px-2 py-0.5 rounded">Training Trap</span>
    </div>
    <h4 class="text-sm font-semibold text-foreground mb-2">The Legacy Repository Training Trap</h4>
    <p class="text-xs text-muted-foreground mb-2"><strong>Setting:</strong> Large unified district (45,000 students) audited legacy plagiarism vendor's renewal agreement.</p>
    <p class="text-xs text-muted-foreground mb-2"><strong>Audit &amp; Discovery:</strong> Contract boilerplate allowed vendor to repurpose 10-year essay archives to train proprietary commercial autograders.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Outcome:</strong> Board rejected contract under Illinois SOPPA &amp; FERPA &sect; 99.33; migrated to Checkmark's cryptographic hash vaults.</p>
  </div>

  <!-- Scenario C -->
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Scenario C</span>
      <span class="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded">Zero-Retention &amp; Playback</span>
    </div>
    <h4 class="text-sm font-semibold text-foreground mb-2">Checkmark Deployment &amp; Exoneration</h4>
    <p class="text-xs text-muted-foreground mb-2"><strong>Setting:</strong> High school district (18,000 students) deployed Checkmark Plagiarism across Canvas LMS.</p>
    <p class="text-xs text-muted-foreground mb-2"><strong>Classroom Incident:</strong> Senior honors student falsely flagged at 84% AI by a generic black-box detector.</p>
    <p class="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded m-0"><strong>Outcome:</strong> Teacher scrubbed 3.5h Essay Playback™ timeline; saw organic pauses &amp; rewrites; student fully exonerated in 2 minutes.</p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. Step-by-Step District Procurement &amp; Vendor Security Review Protocol</h2>

<p>To ensure consistent, defensible evaluation across all instructional software acquisitions, district technology teams should implement this five-phase procurement review lifecycle:</p>

<div class="my-6 space-y-3">
  <div class="rounded-xl border border-border bg-card p-4 flex gap-3">
    <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs">P1</div>
    <div>
      <h4 class="text-sm font-semibold text-foreground mb-1">Phase 1: Pre-Procurement Technical Discovery</h4>
      <p class="text-xs text-muted-foreground m-0">Distribute a standardized AI Architecture Questionnaire. Require documentation detailing whether inference is self-hosted or routed through third-party APIs. Mandate US-only data residency.</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex gap-3">
    <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">P2</div>
    <div>
      <h4 class="text-sm font-semibold text-foreground mb-1">Phase 2: DPA Redlining &amp; Legal Compliance Review</h4>
      <p class="text-xs text-muted-foreground m-0">Reject standard clickwrap agreements. Require the district's approved Student Data Privacy Agreement (NDPA format). Enforce strict bans on model training, commercial profiling, and secondary data monetization.</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex gap-3">
    <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs">P3</div>
    <div>
      <h4 class="text-sm font-semibold text-foreground mb-1">Phase 3: Live Technical Validation &amp; Staging Audit</h4>
      <p class="text-xs text-muted-foreground m-0">Monitor network traffic in a sandbox environment during test essay submissions. Verify that no unencrypted telemetry payloads leak into APM logs. Validate LTI 1.3 Advantage JWKS key exchanges.</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex gap-3">
    <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs">P4</div>
    <div>
      <h4 class="text-sm font-semibold text-foreground mb-1">Phase 4: Pilot Governance &amp; Teacher Calibration</h4>
      <p class="text-xs text-muted-foreground m-0">Deploy pilot within an isolated LMS sandbox (Canvas, Buzz, Google Classroom). Train faculty on Essay Playback™ timeline analysis. Mandate policy: standalone whole-paper AI percentages are never used as sole basis for discipline.</p>
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-4 flex gap-3">
    <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">P5</div>
    <div>
      <h4 class="text-sm font-semibold text-foreground mb-1">Phase 5: Annual Audit &amp; Attestation Renewal</h4>
      <p class="text-xs text-muted-foreground m-0">Conduct annual reviews prior to subscription renewal. Demand updated SOC 2 Type II reports and re-verify that no new third-party sub-processors have been quietly introduced into the software supply chain.</p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Frequently Asked Questions (FAQs) for District Technology Leadership</h2>

<div class="my-6 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-semibold text-foreground mb-2">1. What is the difference between a standard cloud vendor DPA and an AI Zero-Data-Retention (ZDR) agreement?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      A standard cloud Data Processing Addendum (DPA) typically governs data stored in traditional databases and grants the vendor rights to process data for &ldquo;system maintenance, debugging, and service optimization.&rdquo; In the context of generative AI, this standard language often allows vendors or their downstream API providers (like OpenAI or AWS Bedrock) to cache student essays on external servers for 30 to 90 days for &ldquo;abuse monitoring&rdquo; and internal algorithmic testing. An <strong>AI Zero-Data-Retention (ZDR) agreement</strong> explicitly revokes this diagnostic caching. It legally and technically mandates that student payloads exist solely in volatile memory (RAM) during active inference and are instantly purged upon response completion, with zero persistent logging, zero staging cache writes, and zero model training.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-semibold text-foreground mb-2">2. Can our district legally consent to AI model training on behalf of our students' parents?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>No.</strong> Under FERPA (&sect; 99.31) and COPPA (15 U.S.C. &sect; 6502), school districts can only act as the parent's agent to authorize data processing <strong>strictly for legitimate, direct educational purposes</strong>. Ingesting student writing into commercial artificial intelligence training loops constitutes commercial research and development—a secondary commercial use. Districts lack the statutory authority to consent to commercial data harvesting. Any vendor contract permitting AI training on student submissions without direct, individual written consent from every parent violates federal and state student privacy laws.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-semibold text-foreground mb-2">3. How does Checkmark Plagiarism verify peer plagiarism without storing student essays in a shared database?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Legacy plagiarism checkers store raw student essays in massive, centralized multi-tenant databases, creating severe FERPA re-disclosure vulnerabilities. Checkmark Plagiarism utilizes <strong>salted, one-way Locality-Sensitive Hashing (LSH) and MinHash tokenization</strong>. When an essay is submitted, Checkmark extracts rolling word shingles ($k=7$) and converts them into non-invertible mathematical hash fingerprints using a district-specific cryptographic salt. The system compares these fingerprints against other hashed submissions within the district's isolated repository. Raw student prose is never stored, pooled, or exposed across institutions.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-semibold text-foreground mb-2">4. Why are whole-document AI detection percentages considered legally and pedagogically indefensible?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Whole-document AI detection percentages (e.g., &ldquo;87% AI-Generated&rdquo;) are opaque probabilistic estimates produced by black-box statistical classifiers. These classifiers are prone to high false-positive rates, particularly on advanced academic writing with formal transitions, submissions by English Language Learners (ELL), and short-form text under 150 words. Checkmark Plagiarism provides <strong>granular passage-level analysis with confidence sliders</strong>, enforces <strong>&lt;150-word safety guardrails</strong> displaying <code class="text-[11px]">N/A</code>, and pairs detection with patent-pending <strong>Essay Playback™ keystroke dynamics</strong>, giving educators transparent, defensible evidence rather than opaque guesses.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-semibold text-foreground mb-2">5. How does Essay Playback™ protect students from false AI accusations?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Generic AI detectors analyze only the final, static text submitted at the deadline, completely ignoring the student's actual writing process. Checkmark's <strong>Patent-Pending Essay Playback™</strong> captures temporal writing history: educators can scrub through the complete writing session at 1x to 8x speed to view composing pauses, recursive edits, backspacing, and structural reorganization. Timestamped paste buffers capture external text insertions even if subsequently edited. If an external detector falsely flags a student's advanced vocabulary, the student and teacher can simply open Essay Playback™ to view the authentic human drafting session, definitively clearing the student of wrongdoing.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-semibold text-foreground mb-2">6. Does Checkmark Plagiarism integrate natively with Canvas LMS, Agilix Buzz, and Google Classroom?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>Yes.</strong> Checkmark Plagiarism integrates seamlessly with all major educational ecosystems via <strong>1EdTech LTI 1.3 Advantage</strong> protocols: native embedding into <strong>Canvas LMS SpeedGrader</strong>, deep integration into <strong>Agilix Buzz</strong> course domains and master templates, direct synchronization with <strong>Google Classroom &amp; Docs</strong>, and 1-click grade passback for AI autograded rubrics directly to the official gradebook.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-sm font-semibold text-foreground mb-2">7. How does New York Education Law &sect; 2-d impact AI writing tool procurement?</h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>New York Education Law &sect; 2-d</strong> requires school districts to ensure that all third-party software handling student PII complies with strict cybersecurity standards (aligned with the <strong>NIST Cybersecurity Framework</strong>). Vendors must sign a formal Parents' Bill of Rights, guarantee that student data will never be commercialized or used for product training, encrypt all data at rest and in transit, and publicly disclose all sub-processors. Any AI vendor that routes student essays to unvetted API providers or retains student work on staging disks violates &sect; 2-d, subjecting the district to state reporting mandates and financial penalties. Checkmark Plagiarism is 100% compliant with NY &sect; 2-d, Illinois SOPPA, California SOPIPA, FERPA, and COPPA standards.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>9. Summary: Moving from Opaque Black Boxes to Defensible, Zero-Retention Integrity</h2>

<p>District Technology Directors and CISOs serve as the ultimate guardians of student data privacy and educational integrity. In the era of generative AI, protecting school districts requires moving away from legacy platforms that treat student essays as commercial training assets, and rejecting opaque wrapper tools that leak student prose across unhardened third-party API chains.</p>

<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-sm">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/70 text-foreground font-semibold">
        <th class="p-3.5 w-1/3">District Requirement</th>
        <th class="p-3.5 bg-teal-500/10 text-teal-800 dark:text-teal-300">Checkmark Plagiarism Enterprise Solution</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">100% FERPA &amp; State Privacy Compliance</td>
        <td class="p-3.5 text-teal-700 dark:text-teal-300">Ephemeral RAM processing; zero disk persistence; zero ZDR leaks; full NIST CSF alignment.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Absolute IP Protection &amp; Zero Training</td>
        <td class="p-3.5 text-teal-700 dark:text-teal-300">Strict contractual guarantee: student text is NEVER used to train, fine-tune, or calibrate AI models.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Defensible, Non-Punitive Evidence</td>
        <td class="p-3.5 text-teal-700 dark:text-teal-300">Patent-Pending Essay Playback™ keystroke dynamics and passage-level confidence sliders replace arbitrary black-box scores.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3.5 font-semibold text-foreground">Teacher Efficiency &amp; LMS Harmony</td>
        <td class="p-3.5 text-teal-700 dark:text-teal-300">Quote-anchored rubric autograding with 1-click grade passback for Canvas LMS, Agilix Buzz, and Google Classroom.</td>
      </tr>
    </tbody>
  </table>
</div>

<p>By mandating <strong>Zero-Data-Retention architecture</strong>, executing rigorous <strong>10-Point Procurement Audits</strong>, and deploying <strong>Checkmark Plagiarism’s</strong> integrated verification and autograding suite, school districts can confidently embrace instructional technology while safeguarding student privacy, preserving intellectual property, and fostering a culture of academic trust.</p>

<div class="my-8 rounded-2xl border border-teal-500/40 bg-gradient-to-r from-teal-50/80 via-emerald-50/50 to-teal-50/80 dark:from-teal-950/40 dark:via-emerald-950/20 dark:to-teal-950/40 p-6 text-center">
  <h3 class="text-lg font-bold text-foreground mb-2">Schedule a District Architecture &amp; Security Review</h3>
  <p class="text-xs text-muted-foreground max-w-xl mx-auto mb-4">
    Evaluate Checkmark Plagiarism's Zero-Data-Retention architecture, review our SOC 2 Type II attestation, and test Essay Playback™ within your district's Canvas or Agilix Buzz staging environment.
  </p>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a href="/contact" class="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-sm">
      Request Technical Security Review
    </a>
    <a href="/pricing" class="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold border border-border bg-background hover:bg-muted transition-colors">
      View District Licensing Plans
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
      currentSlug="2026/8/how-can-district-technology-directors-audit-ai-writing-detection-vendors-for-ferpa-third-party-sharing-risks"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
