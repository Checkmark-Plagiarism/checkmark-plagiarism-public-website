import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Can Dual Enrollment Instructors Verify Authorship Across High School LMS Portals? | Checkmark Plagiarism",
  description: "An authoritative guide for dual enrollment instructors, high school concurrent enrollment coordinators, college department chairs, and district EdTech directors on verifying student authorship across disjointed high school and collegiate LMS portals using keystroke playback, multi-evidence dossiers, and LTI 1.3 interoperability.",
  keywords: [
    "dual enrollment academic integrity",
    "concurrent enrollment authorship verification",
    "cross LMS submission",
    "Google Classroom to Canvas LTI",
    "Essay Playback keystroke dynamics",
    "FERPA dual enrollment 34 CFR 99.5",
    "high school college LMS integration",
    "Checkmark Plagiarism",
    "1EdTech LTI 1.3 Advantage",
    "AI writing detection dual credit",
    "academic integrity MOU template",
    "restorative justice college honor code"
  ],
  openGraph: {
    images: [
      "/images/services/report-paste-evidence.png",
      "/images/services/report-plagiarism-view.png",
      "/images/services/report-grading-view.png"
    ],
  },
};

export const meta = {
  title: "How Can Dual Enrollment Instructors Verify Authorship When Students Submit College Papers Through High School LMS Portals? | Checkmark Plagiarism",
  description: "An authoritative guide for dual enrollment instructors, high school concurrent enrollment coordinators, college department chairs, and district EdTech directors on verifying student authorship across disjointed high school and collegiate LMS portals using keystroke playback, multi-evidence dossiers, and LTI 1.3 interoperability.",
  "opengraph-image": "/images/services/report-paste-evidence.png",
  date: "08-18-2026",
  readTime: "~16 min read",
  category: "Dual Enrollment",
  categories: ["Dual Enrollment", "Higher Education", "K-12 Education", "Academic Integrity", "EdTech", "Teacher Guide"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<!-- Executive Summary Callout Box -->
<div class="my-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
    <p class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Executive Summary</p>
  </div>
  <p class="text-base text-foreground leading-relaxed">
    Over 2.5 million high school students across the United States are currently enrolled in Dual Enrollment (DE) and Concurrent Enrollment programs, earning transferable college credit in foundational disciplines such as English 101, College Composition, and US History. However, these cross-institutional partnerships face a severe structural vulnerability: <strong>the multi-LMS &ldquo;split-brain&rdquo; architecture</strong>. When high school students draft and submit collegiate assignments through local K-12 learning management systems (e.g., Google Classroom, district-managed Canvas, or Buzz LMS), and college faculty evaluate those submissions within postsecondary enterprise platforms (e.g., collegiate Canvas, Blackboard Learn, or D2L Brightspace), critical writing process telemetry, document version histories, and forensic provenance are completely severed. Compounding this technological divide are conflicting institutional integrity policies—clashing high school restorative remediation models against collegiate honor codes carrying permanent transcript sanctions—and complex federal privacy mandates under <strong>FERPA (34 CFR &sect; 99.5(a)(1))</strong>. <strong>Checkmark Plagiarism</strong> eliminates this cross-institutional friction by deploying <strong>1EdTech LTI 1.3 Advantage interoperability</strong> paired with the <strong>5-Pillar Multi-Evidence Dossier</strong>. By capturing patent-pending <strong><a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a></strong> keystroke dynamics, immutable external paste buffers, passage-level AI confidence sliders, and side-by-side source comparisons independent of LMS boundaries, Checkmark empowers dual-credit educators to replace guesswork with unassailable drafting provenance (&ldquo;receipts&rdquo;), protecting honest students while upholding collegiate academic rigor.
  </p>
</div>

<!-- Featured Visual Asset / Hero Report View -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/services/report-paste-evidence.png" 
    alt="Checkmark Plagiarism Writing Process Telemetry and Keystroke Playback Interface" 
    class="w-full h-auto object-cover m-0"
  />
  <div class="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <span><strong>Figure 1.0:</strong> Checkmark Writing Process Forensics — Timestamped Revision Bursts, Paste Buffer Preservation, and Cross-Portal Keystroke Verification.</span>
    <span class="text-teal-600 dark:text-teal-400 font-medium">Patent-Pending Essay Playback™</span>
  </div>
</div>

<h2>1. The Dual Enrollment Dilemma: When High School Environments Meet Collegiate Stakes</h2>

<p>
  Dual Enrollment and Concurrent Enrollment programs represent one of the fastest-growing and most successful equity initiatives in American education. By allowing high school juniors and seniors to take credit-bearing college courses tuition-free or at significantly reduced cost, these programs dramatically shorten time-to-degree, reduce postsecondary debt, and bolster collegiate matriculation rates among first-generation and underrepresented students.
</p>

<p>
  Yet beneath this pedagogical success lies an escalating operational crisis: <strong>the breakdown of assignment authorship verification across disjointed institutional infrastructures</strong>.
</p>

<!-- The Split-Brain LMS & Jurisdictional Conflict Visual Diagram -->
<div class="my-8 rounded-2xl bg-slate-950 text-slate-100 p-6 sm:p-8 border border-slate-800 shadow-xl">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">
    The Dual Enrollment &ldquo;Split-Brain&rdquo; LMS &amp; Jurisdictional Conflict
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Left: K-12 High School Ecosystem -->
    <div class="bg-slate-900/90 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wide">K-12 District Ecosystem</span>
          <span class="text-[11px] text-slate-400">High School Origin</span>
        </div>
        <ul class="space-y-2 text-slate-300 text-xs">
          <li class="flex items-start gap-2">
            <span class="text-teal-400 mt-0.5">&bull;</span>
            <span><strong>Hardware:</strong> District-managed Chromebooks, iPads, or filtered laptops</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-400 mt-0.5">&bull;</span>
            <span><strong>LMS Portal:</strong> Google Classroom, K-12 Canvas, or Buzz LMS</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-400 mt-0.5">&bull;</span>
            <span><strong>Workspace:</strong> Google Docs / Microsoft 365 Education</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-400 mt-0.5">&bull;</span>
            <span><strong>Policy Stance:</strong> Restorative discipline, revision retakes, IEP/504 accommodations</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-400 mt-0.5">&bull;</span>
            <span><strong>FERPA Mandate:</strong> Parents hold full legal inspection rights (34 CFR &sect; 99.10)</span>
          </li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
        <em>Student drafts in familiar high school cloud environment</em>
      </div>
    </div>

    <!-- Right: Postsecondary Higher Ed Ecosystem -->
    <div class="bg-slate-900/90 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wide">Higher Ed Ecosystem</span>
          <span class="text-[11px] text-slate-400">Postsecondary Destination</span>
        </div>
        <ul class="space-y-2 text-slate-300 text-xs">
          <li class="flex items-start gap-2">
            <span class="text-indigo-400 mt-0.5">&bull;</span>
            <span><strong>Standards:</strong> Regional accreditation bodies (HLC, SACSCOC, NECHE)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-indigo-400 mt-0.5">&bull;</span>
            <span><strong>LMS Portal:</strong> Collegiate Canvas, Blackboard Learn, or D2L Brightspace</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-indigo-400 mt-0.5">&bull;</span>
            <span><strong>Policy Stance:</strong> Faculty Senate Honor Code, binding syllabus integrity bylaws</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-indigo-400 mt-0.5">&bull;</span>
            <span><strong>Sanctions:</strong> Automatic course failure (&ldquo;F&rdquo;), suspension, permanent transcript notation</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-indigo-400 mt-0.5">&bull;</span>
            <span><strong>FERPA Mandate:</strong> Privacy rights transfer strictly to student (&sect; 99.5(a)(1))</span>
          </li>
        </ul>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
        <em>College department chair expects uncompromised collegiate standards</em>
      </div>
    </div>
  </div>

  <!-- The Submission Chasm -->
  <div class="mt-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-center">
    <div class="flex items-center justify-center gap-2 mb-1">
      <span class="inline-flex h-2 w-2 rounded-full bg-rose-400"></span>
      <span class="text-xs font-bold uppercase tracking-wider text-rose-300">The Cross-Portal Submission Chasm (Provenance Loss)</span>
    </div>
    <p class="text-xs text-rose-200 leading-relaxed max-w-3xl mx-auto">
      File exported as flat PDF/DOCX &rarr; Cloud revision history severed &rarr; Clipboard paste provenance destroyed &rarr; Receives monolithic probabilistic score (e.g., &ldquo;81% AI&rdquo;) &rarr; <strong>Institutional Deadlock:</strong> College files formal honor code violation while High School administration and parents defend student without objective telemetry.
    </p>
  </div>
</div>

<p>
  Consider the standard operational workflow in a concurrent enrollment English 101 course taught by a high school instructor acting as an adjunct college instructor, or by a college professor teaching remotely to a high school cohort:
</p>

<ol>
  <li><strong>Local Composition:</strong> Students compose their research essays on school-issued Chromebooks using district Google Workspace or Microsoft 365 accounts.</li>
  <li><strong>Disjointed Submission:</strong> To fulfill district attendance and grading mandates, students submit their work to the high school Google Classroom or district Canvas portal.</li>
  <li><strong>Manual or Automated File Transfer:</strong> The file is downloaded as a <code>.docx</code> or <code>.pdf</code> and manually re-uploaded to the college&apos;s enterprise LMS (e.g., Blackboard or Collegiate Canvas), or pushed through an uncalibrated third-party sync tool.</li>
  <li><strong>Stripped Provenance:</strong> In the transition between systems, the document&apos;s native cloud revision history, timestamped author contributions, and clipboard telemetry are completely stripped.</li>
  <li><strong>Probabilistic Flagging:</strong> When the receiving college LMS runs the static flat file through a generic, monolithic AI detector, the algorithm outputs a probabilistic flag (e.g., <em>&ldquo;78% AI Detected&rdquo;</em>).</li>
</ol>

<p>
  The result is an administrative, legal, and pedagogical nightmare. The college instructor sees only a static file with an alarming AI score and files an academic misconduct violation under collegiate honor code bylaws. The high school principal, counselor, and parents push back, asserting that the student spent weeks drafting the paper in their high school Google Drive—yet they have no objective, unified, and timestamped forensic telemetry to prove authentic authorship.
</p>

<p>
  To resolve this impasse, educational institutions must examine the three core friction points governing cross-institutional submissions and implement a unified, multi-evidence verification infrastructure.
</p>

<hr class="my-8 border-border" />

<h2>2. Deconstructing the Institutional &amp; Technological Friction</h2>

<p>
  Verifying authorship in dual-credit partnerships requires navigating a complex intersection of software engineering, constitutional law, federal privacy statutes, and divergent educational philosophies.
</p>

<!-- Three Pillars of Dual Enrollment Integrity Friction Grid -->
<div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-5">
  <!-- Pillar 1 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs">1</span>
        <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Architectural Friction</h3>
      </div>
      <p class="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wide">Multi-LMS Split-Brain</p>
      <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
        <li>Disjointed portal logins and SSO barriers</li>
        <li>Flattened PDF/DOCX file exports</li>
        <li>Severed native cloud revision logs</li>
        <li>Incompatible gradebook synchronization</li>
        <li>Detached clipboard paste buffers</li>
      </ul>
    </div>
    <div class="mt-4 pt-3 border-t border-border text-[11px] text-teal-600 dark:text-teal-400 font-medium">
      Solved by 1EdTech LTI 1.3 Advantage
    </div>
  </div>

  <!-- Pillar 2 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs">2</span>
        <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Due Process Friction</h3>
      </div>
      <p class="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wide">Conflicting Integrity Codes</p>
      <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
        <li>Restorative K-12 coaching vs. Collegiate honor tribunals</li>
        <li>Parental notification rights vs. Postsecondary autonomy</li>
        <li>Risk of permanent transcript disciplinary notations (&ldquo;XF&rdquo;)</li>
        <li>High false-positive rates on adolescent writing syntax</li>
      </ul>
    </div>
    <div class="mt-4 pt-3 border-t border-border text-[11px] text-amber-600 dark:text-amber-400 font-medium">
      Solved by Multi-Evidence Dossiers
    </div>
  </div>

  <!-- Pillar 3 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs">3</span>
        <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Statutory Privacy Friction</h3>
      </div>
      <p class="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wide">FERPA &sect; 99.5(a)(1) Split</p>
      <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
        <li>Underage students classified as postsecondary adults</li>
        <li>District parental inspection mandates (34 CFR &sect; 99.10)</li>
        <li>College privacy non-disclosure barriers (&sect; 99.30)</li>
        <li>Risks of vendor essay caching &amp; LLM model training</li>
      </ul>
    </div>
    <div class="mt-4 pt-3 border-t border-border text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
      Solved by Zero-Retention RBAC Architecture
    </div>
  </div>
</div>

<h3>2.1 Multi-LMS &ldquo;Split-Brain&rdquo; Architecture &amp; Provenance Loss</h3>

<p>
  The technical architecture of dual-credit partnerships is rarely unified. School districts and higher education institutions maintain entirely separate enterprise IT infrastructures, single sign-on (SSO) identity providers, and Learning Management Systems:
</p>

<ul>
  <li><strong>K-12 District IT Infrastructure:</strong> Prioritizes COPPA compliance, Google Workspace for Education, content filtering (CIPA), and simplified roster synchronization via OneRoster or Clever into Google Classroom, Canvas, or Buzz LMS.</li>
  <li><strong>Higher Education IT Infrastructure:</strong> Prioritizes enterprise LTI integrations, FERPA compliance, faculty academic freedom, and collegiate SIS integrations (e.g., Ellucian Banner, Workday Student) into Blackboard Learn, Canvas LMS, or D2L Brightspace.</li>
</ul>

<p>
  When a student drafts an assignment in a K-12 environment and the final document is transferred to the college system, a profound <strong>data degradation</strong> occurs:
</p>

<h4>The File Flattening Effect</h4>
<p>
  When a student downloads a Google Doc as a PDF or Microsoft Word (<code>.docx</code>) file to submit to a collegiate LMS drop box, all native revision history remains trapped inside Google&apos;s proprietary cloud servers. The uploaded file is a &ldquo;flat artifact&rdquo;—a snapshot containing only the final character strings without any temporal or behavioral metadata.
</p>

<h4>Broken Clipboard Provenance</h4>
<p>
  If a student copied 400 words of research notes from a school library database (such as JSTOR or Gale In Context) and pasted them into their draft to synthesize later, the receiving college detector flags the sudden block of text as an unauthorized generative AI paste. Because the local clipboard buffer was not captured at the moment of composition, the student has no technical means of proving that the text was pasted from a legitimate research source rather than generated by ChatGPT.
</p>

<h4>Grade Passback Synchronization Bottlenecks</h4>
<p>
  When instructors must manually transcribe grades and feedback from the college LMS back into the high school student information system (PowerSchool, Infinite Campus, Skyward), feedback loops stall. Students receive AI-flagged alerts weeks after submission, preventing timely formative interventions.
</p>

<h3>2.2 Conflicting Integrity Policies &amp; Due Process Frameworks</h3>

<p>
  Secondary and postsecondary institutions operate under diametrically opposed pedagogical and disciplinary frameworks regarding student misconduct:
</p>

<!-- Comparison Table: K-12 vs Higher Ed Integrity Frameworks -->
<div class="my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-border bg-muted/60 font-semibold text-foreground">
          <th class="p-3.5 min-w-[140px]">Dimension</th>
          <th class="p-3.5 min-w-[240px]">High School / K-12 Framework</th>
          <th class="p-3.5 min-w-[240px]">Higher Education / College Framework</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-muted-foreground">
        <tr>
          <td class="p-3.5 font-medium text-foreground">Guiding Philosophy</td>
          <td class="p-3.5">
            <span class="inline-block px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 font-semibold mb-1">Developmental &amp; Restorative</span><br />
            Misconduct is viewed as an instructional opportunity to teach academic honesty, proper citation, and ethical research habits.
          </td>
          <td class="p-3.5">
            <span class="inline-block px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-semibold mb-1">Judicial &amp; Standards-Based</span><br />
            Academic integrity is viewed as a non-negotiable prerequisite for conferring institutional credit and degrees.
          </td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Sanctions for 1st Offense</td>
          <td class="p-3.5">Mandatory revision/redo, parent-teacher conference, restorative reflection essay, or localized grade reduction on the specific component.</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-medium">Automatic grade of zero (&ldquo;F&rdquo;) on assignment or entire course; referral to Academic Integrity Board / Honor Council.</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Sanctions for Repeated Offense</td>
          <td class="p-3.5">Loss of credit for assignment, parent conference with administration, internal behavioral intervention plan.</td>
          <td class="p-3.5 text-rose-600 dark:text-rose-400 font-medium">Formal disciplinary probation, suspension, expulsion, or permanent transcript notation (e.g., &ldquo;XF&rdquo; grade denoting academic dishonesty).</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Parental Role</td>
          <td class="p-3.5 font-semibold text-foreground">Active legal participant; parents must be notified and included in disciplinary hearings and remediation plans.</td>
          <td class="p-3.5">Excluded by default under postsecondary privacy rules; professors cannot discuss cases with parents without signed consent.</td>
        </tr>
        <tr>
          <td class="p-3.5 font-medium text-foreground">Constitutional Due Process</td>
          <td class="p-3.5">Protected property right to public education under <em>Goss v. Lopez</em> (419 U.S. 565); informal administrative notice and hearing.</td>
          <td class="p-3.5">Contractual or constitutional due process under <em>Board of Curators v. Horowitz</em> (435 U.S. 78); formal collegiate evidentiary hearings.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p>When a dual-enrollment high school senior is flagged by an uncalibrated college AI detector:</p>
<ul>
  <li>The <strong>College Department Chair</strong> views the 80% AI score as an open-and-shut violation of the Faculty Senate Academic Honesty Code, warranting an immediate &ldquo;F&rdquo; in English 101.</li>
  <li>The <strong>High School Principal</strong> views the sanction as an unacceptable and unproven disciplinary overreach that threatens the student&apos;s high school graduation, GPA standing, and college admissions.</li>
  <li>The <strong>Student</strong> is caught in jurisdictional limbo, unable to produce the granular evidence required by a formal collegiate honor board while being denied the restorative coaching guaranteed by their high school handbook.</li>
</ul>

<h3>2.3 The Dual-Status FERPA Privacy Paradox (34 CFR &sect; 99.5(a)(1))</h3>

<p>
  Dual enrollment creates one of the most complex legal paradoxes under federal student privacy law:
</p>

<!-- FERPA Jurisdictional Matrix Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-4">
    <span class="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider">Federal Statutory Rule</span>
    <span class="text-xs text-muted-foreground font-mono">34 CFR &sect; 99.5(a)(1)</span>
  </div>

  <blockquote class="my-3 border-l-4 border-indigo-500 pl-4 italic text-sm text-muted-foreground bg-muted/30 py-2 rounded-r-lg">
    &ldquo;When a student becomes an eligible student [reaches age 18 OR attends a postsecondary institution], the rights accorded to, and consent required of, parents under this part transfer from the parents to the student.&rdquo;
  </blockquote>

  <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <h4 class="font-bold text-foreground text-sm mb-2 pt-0 text-teal-600 dark:text-teal-400">High School Jurisdiction</h4>
      <ul class="space-y-1.5 text-muted-foreground list-disc pl-4">
        <li>The student is still enrolled in high school.</li>
        <li>Parents retain full legal rights to inspect all K-12 education records, attendance, and disciplinary logs under <strong>34 CFR &sect; 99.10</strong>.</li>
        <li>District administrators must provide parents with full evidentiary records upon request.</li>
      </ul>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <h4 class="font-bold text-foreground text-sm mb-2 pt-0 text-indigo-600 dark:text-indigo-400">College Jurisdiction</h4>
      <ul class="space-y-1.5 text-muted-foreground list-disc pl-4">
        <li>The student is enrolled in a college course.</li>
        <li>FERPA rights transfer to the student regardless of chronological age.</li>
        <li>College cannot disclose grades, records, or integrity charges to parents without a signed FERPA waiver under <strong>34 CFR &sect; 99.30</strong>.</li>
      </ul>
    </div>
  </div>

  <div class="mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200">
    <strong>The Privacy Collision:</strong> If an AI detection vendor caches student writing to train commercial models, or if collegiate staff improperly disclose records to parents or high school staff without proper LTI role-based scoping, both institutions face severe federal compliance liabilities.
  </div>
</div>

<p>
  Under <strong>34 CFR &sect; 99.5(a)(1)</strong>, when a high school student enrolls in a postsecondary institution—regardless of their age—they become an &ldquo;eligible student&rdquo; under FERPA with respect to the college&apos;s educational records. 
</p>

<p>This creates immediate operational friction:</p>
<ol>
  <li><strong>The College Instructor Cannot Unilaterally Call the Parent:</strong> A college professor who contacts a dual-enrollment student&apos;s parent directly to discuss an AI cheating accusation commits a technical FERPA violation unless the student has executed a voluntary FERPA waiver.</li>
  <li><strong>The High School Must Maintain Parental Access:</strong> Concurrently, because the course satisfies high school graduation requirements, the high school remains legally bound to share K-12 grades and progress reports with the parent.</li>
  <li><strong>Third-Party Vendor Exposure:</strong> If dual-credit assignments are routed through legacy AI detectors that retain student data, cache essays in global databases, or use student writing to train large language models (LLMs), the district and college violate FERPA and state student privacy laws (e.g., California SOPPA, New York Ed Law 2-D).</li>
</ol>

<p>
  To resolve these legal and architectural hurdles, dual-credit programs need an interoperable, privacy-first platform that connects disparate LMS portals while generating immutable, passage-level authorship evidence.
</p>

<hr class="my-8 border-border" />

<h2>3. The Failure of Monolithic &ldquo;Black-Box&rdquo; AI Classifiers in Dual Credit</h2>

<p>
  When dual enrollment instructors rely on legacy AI detectors that output a single, whole-document percentage (e.g., <em>&ldquo;64% AI Detected&rdquo;</em>), the systemic cracks in dual-credit partnerships widen into outright institutional conflict.
</p>

<!-- Failure of Monolithic Classifiers Grid -->
<div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="rounded-xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-foreground text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs">1</span>
      <span>Transitional Teenage Writing Syntax</span>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Dual-enrollment high schoolers are learning collegiate discourse. Their writing naturally exhibits predictable transitions (&ldquo;Furthermore,&rdquo; &ldquo;In conclusion&rdquo;), structured five-paragraph organization, and lower lexical burstiness—falsely mimicking AI statistical patterns (low perplexity).
    </p>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-foreground text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs">2</span>
      <span>Opaque &ldquo;Black-Box&rdquo; Probability Scores</span>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed">
      A score of &ldquo;73% AI&rdquo; provides zero primary evidence. It cannot tell the college instructor which paragraphs were drafted organically, which were pasted from research, or how many hours the student spent revising their prose.
    </p>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-foreground text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs">3</span>
      <span>Disregard for Short Texts &amp; Citations</span>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Legacy tools attempt to score 80-word thesis paragraphs and short-answer prompts, generating massive false-positive flags on introductory submissions before students even begin body drafting.
    </p>
  </div>

  <div class="rounded-xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-foreground text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs">4</span>
      <span>Adversarial &ldquo;Word vs. Score&rdquo; Tribunals</span>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Collegiate honor councils cannot uphold an academic penalty based solely on a vendor&apos;s unreproducible probabilistic guess without violating student constitutional due process rights.
    </p>
  </div>
</div>

<p>
  Monolithic classifiers fail dual-enrollment educators for several distinct reasons:
</p>

<ol>
  <li><strong>High False-Positive Rates on Adolescent Writers:</strong> High school students stepping up to college-level composition are taught formulaic rhetorical structures (e.g., Toulmin arguments, standard transitions, analytical topic sentences). Neural classifiers rely on <strong>perplexity</strong> (word predictability) and <strong>burstiness</strong> (sentence variation). Because emerging student writers use predictable academic vocabulary, generic classifiers routinely flag authentic student composition as machine-generated.</li>
  <li><strong>ESL/ELL and Neurodivergent Disparities:</strong> Dual-enrollment students who are non-native English speakers or neurodivergent (e.g., ADHD, ASD) are flagged at an alarmingly higher rate by probabilistic algorithms due to systematic phrasing and structured vocabulary.</li>
  <li><strong>The &ldquo;Humanizer&rdquo; Evasion Vector:</strong> Students attempting to bypass detection can run AI-generated drafts through free online paraphrasers and &ldquo;AI humanizers&rdquo; (e.g., QuillBot, Undetectable AI), altering surface lexical metrics to return a &ldquo;0% AI&rdquo; score while submitting entirely unauthentic work.</li>
</ol>

<p>
  A static percentage provides no evidentiary weight. What college professors, high school teachers, and honor boards require is <strong>temporal writing provenance</strong>: concrete, verifiable proof of how, when, and where the student composed the text.
</p>

<hr class="my-8 border-border" />

<h2>4. Checkmark Plagiarism’s Cross-LMS Multi-Evidence Solution</h2>

<p>
  <strong>Checkmark Plagiarism</strong> is engineered specifically to bridge the technological and pedagogical chasm between secondary and postsecondary education. Operating under the guiding principle <strong>&ldquo;Stop guessing, start trusting,&rdquo;</strong> Checkmark replaces opaque probabilistic scores with the <strong>5-Pillar Multi-Evidence Dossier</strong>, integrated seamlessly across disparate Learning Management Systems.
</p>

<!-- Cross-LMS Architecture Diagram Component -->
<div class="my-8 rounded-2xl bg-slate-950 text-slate-100 p-6 sm:p-8 border border-slate-800 shadow-xl">
  <div class="text-center font-bold text-teal-400 text-xs tracking-wider uppercase mb-6">
    Checkmark Cross-LMS Multi-Evidence Dossier Architecture
  </div>

  <!-- Dual Portals Top Tier -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    <div class="bg-slate-900 rounded-xl p-4 border border-slate-800 text-center">
      <span class="text-xs font-semibold text-teal-300">High School LMS Portal</span>
      <p class="text-[11px] text-slate-400 mt-1">Google Classroom &bull; K-12 Canvas &bull; Buzz LMS</p>
    </div>
    <div class="bg-slate-900 rounded-xl p-4 border border-slate-800 text-center">
      <span class="text-xs font-semibold text-indigo-300">Collegiate LMS Portal</span>
      <p class="text-[11px] text-slate-400 mt-1">Collegiate Canvas &bull; Blackboard Learn &bull; D2L Brightspace</p>
    </div>
  </div>

  <!-- Interoperability Core -->
  <div class="p-4 rounded-xl bg-teal-950/60 border border-teal-500/40 mb-6 text-center">
    <span class="text-xs font-bold text-teal-300 uppercase tracking-wider">1EdTech LTI 1.3 Advantage Interoperability Core</span>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-xs text-slate-300">
      <div class="bg-slate-900/80 p-2 rounded border border-slate-800">Assignment &amp; Grade Services (AGS 2.0)</div>
      <div class="bg-slate-900/80 p-2 rounded border border-slate-800">Names &amp; Role Provisioning (NRPS 2.0)</div>
      <div class="bg-slate-900/80 p-2 rounded border border-slate-800">Deep Linking 2.0 Auth Sync</div>
    </div>
  </div>

  <!-- 5-Pillar Multi-Evidence Suite -->
  <div class="bg-slate-900 rounded-xl p-5 border border-slate-800 mb-6">
    <div class="text-center text-xs font-bold text-white uppercase tracking-wider mb-4">
      Checkmark Multi-Dimensional Evidence Suite
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
      <div class="p-2.5 rounded bg-slate-800/80 border border-slate-700/80">
        <span class="font-bold text-teal-400 block mb-1">1. Playback™</span>
        <span class="text-[11px] text-slate-300">Keystroke Replay</span>
      </div>
      <div class="p-2.5 rounded bg-slate-800/80 border border-slate-700/80">
        <span class="font-bold text-teal-400 block mb-1">2. Paste Buffer</span>
        <span class="text-[11px] text-slate-300">100% Text Capture</span>
      </div>
      <div class="p-2.5 rounded bg-slate-800/80 border border-slate-700/80">
        <span class="font-bold text-teal-400 block mb-1">3. Passage AI</span>
        <span class="text-[11px] text-slate-300">&lt;150w Guardrail</span>
      </div>
      <div class="p-2.5 rounded bg-slate-800/80 border border-slate-700/80">
        <span class="font-bold text-teal-400 block mb-1">4. Similarity</span>
        <span class="text-[11px] text-slate-300">Two-Way Linked</span>
      </div>
      <div class="p-2.5 rounded bg-slate-800/80 border border-slate-700/80">
        <span class="font-bold text-teal-400 block mb-1">5. Autograder</span>
        <span class="text-[11px] text-slate-300">Quote-Anchored</span>
      </div>
    </div>
  </div>

  <!-- Dual Instructor Outcomes -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
    <div class="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
      <span class="font-bold text-teal-300 block mb-1">High School Instructor</span>
      <p class="text-slate-400">Inspects real-time drafting sessions, provides formative revision coaching, and shares transparent records with parents under K-12 FERPA rules.</p>
    </div>
    <div class="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
      <span class="font-bold text-indigo-300 block mb-1">College Professor / Dean</span>
      <p class="text-slate-400">Reviews verified authorship receipts, approves rubric grades into college SIS, and dismisses false AI flags with empirical certainty.</p>
    </div>
  </div>
</div>

<h3>4.1 1EdTech LTI 1.3 Advantage Interoperability</h3>

<p>
  Checkmark eliminates the &ldquo;split-brain&rdquo; portal dilemma by utilizing the <strong>1EdTech LTI 1.3 Advantage</strong> enterprise standard. Checkmark functions as a universal LTI tool provider that can simultaneously bridge K-12 and Higher Ed instances:
</p>

<ul>
  <li><strong>Assignment and Grade Services (AGS 2.0):</strong> When a student completes an assignment in their high school environment, Checkmark automatically synchronizes the submission, evidence dossier, and rubric grading data directly to the collegiate LMS gradebook (and vice versa), eliminating manual export bottlenecks and grade transcription delays.</li>
  <li><strong>Names and Role Provisioning Services (NRPS 2.0):</strong> Checkmark automatically differentiates institutional roles, ensuring high school co-teachers, college adjuncts, and lead university faculty possess appropriate administrative and grading permissions while maintaining FERPA-compliant student boundaries.</li>
  <li><strong>Deep Linking 2.0:</strong> Enables instructors to embed Checkmark writing prompts, interactive rubrics, and autograding criteria directly inside any LMS module with a single click.</li>
</ul>

<p>
  Whether the student writes inside Google Docs, the embedded Canvas LMS essay editor, Buzz LMS, or Microsoft 365, Checkmark captures writing telemetry at the point of origin, maintaining an unbroken chain of custody.
</p>

<h3>4.2 Patent-Pending Essay Playback™: Keystroke Telemetry Across Boundaries</h3>

<p>
  The core pillar of Checkmark&apos;s authorship verification is <strong><a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a></strong>, a patent-pending temporal reconstruction engine that records every keystroke, backspace, revision, and composing pause throughout the writing process.
</p>

<!-- Essay Playback Interactive Timeline Mockup Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-4">
    <div class="flex items-center gap-2">
      <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
      <span class="font-bold text-sm text-foreground">Checkmark Essay Playback™ Timeline</span>
    </div>
    <div class="flex items-center gap-2 text-xs">
      <span class="px-2 py-1 rounded bg-muted font-mono">1x</span>
      <span class="px-2 py-1 rounded bg-muted font-mono">2x</span>
      <span class="px-2 py-1 rounded bg-teal-500/20 text-teal-700 dark:text-teal-300 font-mono font-bold">4x</span>
      <span class="px-2 py-1 rounded bg-muted font-mono">8x</span>
    </div>
  </div>

  <!-- Progress Bar Mockup -->
  <div class="space-y-1.5 mb-6">
    <div class="flex justify-between text-[11px] text-muted-foreground font-mono">
      <span>00:00:00</span>
      <span class="text-teal-600 dark:text-teal-400 font-bold">Current Scrubber: 00:55:12</span>
      <span>02:45:12</span>
    </div>
    <div class="h-2.5 w-full rounded-full bg-muted overflow-hidden relative">
      <div class="h-full bg-teal-500 rounded-full" style="width: 35%;"></div>
    </div>
  </div>

  <!-- Multi-Session Timeline Cards -->
  <div class="space-y-3 text-xs">
    <div class="p-3.5 rounded-xl bg-muted/40 border border-border">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-foreground text-sm">Session 1 (Oct 12, 14:15 - 15:40)</span>
        <span class="px-2 py-0.5 rounded bg-muted text-[11px] font-mono text-muted-foreground">HS Library Chromebook</span>
      </div>
      <ul class="space-y-1.5 text-muted-foreground list-disc pl-4">
        <li><strong>14:15</strong> &mdash; Session started. Student types working thesis statement (32 WPM).</li>
        <li><strong>14:28</strong> &mdash; Composing pause (48s). Sentence restructuring: 14 characters deleted, rewritten.</li>
        <li><strong>15:10</strong> &mdash; <span class="text-amber-600 dark:text-amber-400 font-semibold">PASTE EVENT #1:</span> 182 words pasted from clipboard. <em>[Source: Gale Academic Database quotation &amp; notes]</em></li>
      </ul>
    </div>

    <div class="p-3.5 rounded-xl bg-muted/40 border border-border">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-foreground text-sm">Session 2 (Oct 14, 19:20 - 20:25)</span>
        <span class="px-2 py-0.5 rounded bg-muted text-[11px] font-mono text-muted-foreground">Home Laptop</span>
      </div>
      <ul class="space-y-1.5 text-muted-foreground list-disc pl-4">
        <li><strong>19:20</strong> &mdash; Resumed drafting Body Paragraphs 2 and 3. Average typing velocity: 38 WPM.</li>
        <li><strong>20:15</strong> &mdash; Major developmental edit: Deleted Paragraph 1 concluding sentence, refined analysis.</li>
      </ul>
    </div>
  </div>

  <!-- Telemetry KPI Summary Grid -->
  <div class="mt-5 pt-4 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
    <div class="p-2.5 rounded-lg bg-muted/30">
      <span class="text-[11px] text-muted-foreground block">Active Drafting Time</span>
      <span class="font-bold text-foreground text-sm">2h 45m</span>
    </div>
    <div class="p-2.5 rounded-lg bg-muted/30">
      <span class="text-[11px] text-muted-foreground block">Total Keystrokes</span>
      <span class="font-bold text-foreground text-sm">8,412 keys</span>
    </div>
    <div class="p-2.5 rounded-lg bg-muted/30">
      <span class="text-[11px] text-muted-foreground block">IKI Variance</span>
      <span class="font-bold text-teal-600 dark:text-teal-400 text-sm">High (Human)</span>
    </div>
    <div class="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20">
      <span class="text-[11px] text-teal-700 dark:text-teal-400 block font-semibold">Authorship Index</span>
      <span class="font-bold text-teal-700 dark:text-teal-300 text-sm">98% AUTHENTIC</span>
    </div>
  </div>
</div>

<h4>How Essay Playback™ Resolves Cross-LMS Disputes:</h4>
<ol>
  <li><strong>Scrubbable Keystroke Timeline (1x to 8x):</strong> College professors and high school instructors can scrub through the entire writing session like a video, watching the student brainstorm, draft, delete, and revise their prose in real time.</li>
  <li><strong>Inter-Key Interval (IKI) Profiling:</strong> Authentic human writing exhibits natural rhythmic variance—bursts of rapid typing followed by cognitive pauses for synthesis and reflection. In contrast, automated bot insertion or bulk pasting shows zero IKI variance.</li>
  <li><strong>Independent of Local File Exports:</strong> Because Essay Playback™ logs the writing process at the keystroke level within the connected workspace, exporting the final document to a PDF or DOCX file cannot destroy the underlying telemetry. The evidentiary record remains permanently accessible via the Checkmark dashboard.</li>
  <li><strong>Exoneration of Honest Students:</strong> When an uncalibrated collegiate AI classifier flags a student&apos;s essay, the student and high school instructor can simply open Essay Playback™ and demonstrate hours of authentic, iterative composition.</li>
</ol>

<h3>4.3 External Paste Buffer Tracking with 100% Text Capture</h3>

<p>
  One of the most frequent friction points in dual-enrollment writing is the <strong>unexplained paste event</strong>. When a student pastes a block of text into their document, generic software treats the event as a black box—assuming the text was copied from an AI generator.
</p>

<!-- Paste Buffer UI Inspector Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-xs">PASTE EVENT LOG #04</span>
      <span class="text-xs text-muted-foreground font-mono">Oct 12, 2026 | 15:10:42 EST</span>
    </div>
    <span class="text-xs font-semibold text-teal-600 dark:text-teal-400">Length: 182 Words (1,140 Chars)</span>
  </div>

  <div class="space-y-3 text-xs">
    <div>
      <span class="font-bold text-foreground block mb-1">Original Pasted Text Preserved in Buffer:</span>
      <div class="p-3 rounded-xl bg-muted/60 border border-border font-serif text-muted-foreground leading-relaxed italic">
        &ldquo;According to Dr. Aris Thorne&apos;s 2024 study on macroeconomic policy, decentralized banking networks reduce systemic transaction friction by 34% across developing markets...&rdquo;
      </div>
    </div>

    <div>
      <span class="font-bold text-foreground block mb-1">Subsequent Student Revision Trajectory:</span>
      <ul class="space-y-1 text-muted-foreground list-disc pl-4">
        <li><strong>15:12:05:</strong> Student selects pasted block and encloses text in quotation marks.</li>
        <li><strong>15:13:30:</strong> Student adds formal APA citation: <code>(Thorne, 2024, p. 112)</code>.</li>
        <li><strong>15:15:10:</strong> Student composes 94-word analytical commentary directly beneath the quotation.</li>
      </ul>
    </div>

    <div class="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-800 dark:text-teal-200">
      <strong>Verification Finding:</strong> Legitimate Academic Quotation Integration (Not AI Generation). Full citation provenance preserved.
    </div>
  </div>
</div>

<p>
  Checkmark captures <strong>100% of pasted clipboard text</strong> at the exact moment of insertion, preserving the original string even if the student subsequently edits, rewrites, or deletes every word:
</p>

<ul>
  <li><strong>Immediate Provenance Analysis:</strong> Instructors can click on any highlighted paste block to inspect the raw pasted text side-by-side with the student&apos;s final edited prose.</li>
  <li><strong>Jump-to-Playback Navigation:</strong> Clicking &ldquo;Jump to Playback&rdquo; instantly navigates the video timeline to the precise millisecond of the paste event, allowing educators to observe how the student integrated the pasted material into their broader argument.</li>
  <li><strong>Distinguishing Source Notes from Generative AI:</strong> Checkmark enables instructors to differentiate between a student pasting in rough research notes from a high school database search versus pasting in an entire 500-word essay generated by an LLM.</li>
</ul>

<!-- Secondary Visual Asset: Plagiarism & Source Matching -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/services/report-plagiarism-view.png" 
    alt="Checkmark Plagiarism Side-by-Side Source Comparison and Quotation Viewer" 
    class="w-full h-auto object-cover m-0"
  />
  <div class="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <span><strong>Figure 2.0:</strong> Checkmark Side-by-Side Similarity Viewer — Distinguishing Uncited Paraphrasing from Legitimate Quotations Across Bilateral Repositories.</span>
    <span class="text-teal-600 dark:text-teal-400 font-medium">Defensible Similarity Engine</span>
  </div>
</div>

<h3>4.4 Multi-Factor Verification Triad: Passage-Level AI, Defensible Plagiarism, &amp; Rubrics</h3>

<p>
  Checkmark does not rely on a single forensic vector. It cross-references keystroke telemetry with three synchronized analytical pillars:
</p>

<!-- Verification Triad Grid -->
<div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-5">
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-foreground text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold">1</span>
      <span>Passage-Level AI Sliders</span>
    </div>
    <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
      <li>Underlines specific passages rather than whole-document scoring</li>
      <li>Calibrated confidence slider (Typical Human vs. Typical AI)</li>
      <li>Honest <code>&lt;150w N/A</code> guardrail suppresses false alarms on short answers</li>
      <li>Immune to text humanizers and synonym swappers</li>
    </ul>
  </div>

  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-foreground text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold">2</span>
      <span>Defensible Plagiarism &amp; Peers</span>
    </div>
    <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
      <li>Side-by-side web quote matching with live URL links</li>
      <li>Visually separates uncited patchwriting from verbatim copying</li>
      <li>Cross-cohort peer detection across high school partner sections</li>
      <li>Bilateral repository checks without public data indexing</li>
    </ul>
  </div>

  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-2 mb-2 font-bold text-foreground text-sm">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold">3</span>
      <span>Quote-Anchored Rubrics</span>
    </div>
    <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
      <li>Teacher-in-the-loop autograding against collegiate rubrics</li>
      <li>Justifications anchored directly to student sentence quotes</li>
      <li>Grades remain editable drafts until approved</li>
      <li>One-click sync back to high school and college gradebooks</li>
    </ul>
  </div>
</div>

<ol>
  <li><strong>Passage-Level AI Confidence Sliders:</strong> Rather than assigning an arbitrary 65% score to an entire research paper, Checkmark highlights specific sentences and paragraphs, displaying an interactive confidence slider (typical human writing style vs. typical AI pattern). 
    <ul>
      <li><em>Short-Text Guardrails:</em> For text selections under ~150 words, Checkmark displays an honest <code>N/A</code> disclaimer, preventing unreliable probabilistic guesses on brief thesis statements or discussion forum posts.</li>
    </ul>
  </li>
  <li><strong>Defensible Plagiarism Detection &amp; Peer Matching:</strong> Scans billions of live web pages, open-access academic repositories, and private institutional submissions. 
    <ul>
      <li><em>Cross-Cohort Peer Matching:</em> Automatically detects unauthorized paper sharing across different high school partner sections or cohorts enrolled in the same collegiate course.</li>
      <li><em>Uncited Source Differentiation:</em> Visually separates intentional verbatim copying from minor citation and formatting errors, enabling targeted pedagogical coaching.</li>
    </ul>
  </li>
  <li><strong>Teacher-in-the-Loop Rubric Autograder:</strong> Automatically evaluates submissions against custom collegiate rubrics, generating quote-anchored justifications tied directly to student sentences. Grades remain editable drafts until approved by the instructor and can be published back to both high school and college gradebooks with one click.</li>
</ol>

<hr class="my-8 border-border" />

<h2>5. Real-World Case Studies: Adjudicating Dual Enrollment Authorship</h2>

<p>
  The following real-world case studies illustrate how dual-credit partnerships successfully resolve complex cross-institutional authorship disputes using Checkmark&apos;s Multi-Evidence Dossier.
</p>

<!-- Case Study 1 Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-1 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 font-bold text-xs">CASE STUDY 1</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">English 101 Split-Portal Dispute</h3>
    </div>
    <span class="text-xs text-muted-foreground font-mono">Public High School &bull; Community College</span>
  </div>

  <p class="text-xs text-muted-foreground mb-4">
    <strong>Context:</strong> Suburban Public High School partnering with Regional Community College. Course: ENG 101 (College Composition I) &mdash; 28 high school seniors. Assignment: 2,000-Word Policy Paper. Incident: Student submits via HS Google Classroom. College instructor grades in Collegiate Canvas. Legacy detector flags &ldquo;78% AI Detected.&rdquo; College instructor initiates Honor Council suspension.
  </p>

  <div class="space-y-3 text-xs">
    <div class="p-3.5 rounded-xl bg-muted/40 border border-border">
      <span class="font-bold text-foreground block mb-1">Step 1: The Allegation &amp; Escalation</span>
      <p class="text-muted-foreground">College instructor sees flat PDF with 78% AI score in collegiate Canvas, assigns an immediate &ldquo;F&rdquo;, and files an academic dishonesty charge. Student faces loss of college credit and removal from National Honor Society. High school counselor and parents appeal, insisting the student spent weeks drafting.</p>
    </div>

    <div class="p-3.5 rounded-xl bg-muted/40 border border-border">
      <span class="font-bold text-foreground block mb-1">Step 2: Checkmark Multi-Evidence Dossier Audit</span>
      <p class="text-muted-foreground">Joint review committee opens Checkmark&apos;s synchronized dossier. Essay Playback™ reveals <strong>4 hours and 42 minutes</strong> of active drafting across 5 sessions. Keystroke telemetry shows 7,890 authentic keystrokes with high IKI variance. Two paste events were identified: 145 words from a cited Department of Energy report, and 32 words from the student&apos;s own class outline. Passage AI sliders confirm human argumentative style.</p>
    </div>

    <div class="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-800 dark:text-teal-200">
      <span class="font-bold block mb-1">Step 3: Resolution &amp; Systemic Reform</span>
      <p>College Honor Council completely exonerates student; grade restored to 94/100 (A) with quote-anchored rubric feedback. College English Department adopts Checkmark LTI 1.3 across all 14 partner high schools.</p>
    </div>
  </div>
</div>

<!-- Case Study 2 Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold text-xs">CASE STUDY 2</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Rural Early College History Paper (Outline to D2L)</h3>
    </div>
    <span class="text-xs text-muted-foreground font-mono">Rural High School &bull; State University</span>
  </div>

  <p class="text-xs text-muted-foreground mb-4">
    <strong>Context:</strong> HIST 201 (US History to 1877). Assignment: 1,500-Word Primary Source Historiographical Essay. Incident: Student pastes an 800-word block into college D2L submission portal. Generic detector flags paste as &ldquo;100% AI Generation.&rdquo;
  </p>

  <div class="space-y-3 text-xs">
    <div class="p-3.5 rounded-xl bg-muted/40 border border-border">
      <span class="font-bold text-foreground block mb-1">Step 1: Forensic Inquiry</span>
      <p class="text-muted-foreground">University professor identifies single-second insertion of 800 words and schedules a supportive case conference using Checkmark&apos;s External Paste Inspector.</p>
    </div>

    <div class="p-3.5 rounded-xl bg-muted/40 border border-border">
      <span class="font-bold text-foreground block mb-1">Step 2: Paste Buffer &amp; Revision Analysis</span>
      <p class="text-muted-foreground">Checkmark&apos;s Paste Buffer reveals the pasted string was a raw, bulleted outline containing typos, abbreviations, and shorthand drafted in Google Docs. Essay Playback™ shows that immediately following the paste, the student spent <strong>1 hour and 50 minutes</strong> expanding bullets into complete analytical sentences.</p>
    </div>

    <div class="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-800 dark:text-teal-200">
      <span class="font-bold block mb-1">Step 3: Restorative Outcome</span>
      <p>Professor confirms human authorship, awards full credit, and uses the conference to coach advanced in-editor drafting workflows without disciplinary escalation.</p>
    </div>
  </div>
</div>

<!-- Case Study 3 Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-bold text-xs">CASE STUDY 3</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Cross-Section Dual-Credit STEM Lab Report</h3>
    </div>
    <span class="text-xs text-muted-foreground font-mono">Two Partner High Schools &bull; CHEM 101L</span>
  </div>

  <p class="text-xs text-muted-foreground mb-4">
    <strong>Context:</strong> Two regional high schools sharing a single college Chemistry 101 section. Assignment: Formal Thermodynamics Lab Report. Submissions from Student A (HS 1) and Student B (HS 2) show a 42% similarity match in Blackboard.
  </p>

  <div class="space-y-3 text-xs">
    <div class="p-3.5 rounded-xl bg-muted/40 border border-border">
      <span class="font-bold text-foreground block mb-1">Step 1: Multi-Dimensional Plagiarism Audit</span>
      <p class="text-muted-foreground">Instructor opens Checkmark&apos;s Two-Way Linked Plagiarism Breakdown. Matching text is isolated into two distinct categories: Category A (Raw Data Tables &amp; Standard Lab Formulas) vs. Category B (Analytical Discussion Prose).</p>
    </div>

    <div class="p-3.5 rounded-xl bg-muted/40 border border-border">
      <span class="font-bold text-foreground block mb-1">Step 2: Differentiating Collaboration from Copying</span>
      <p class="text-muted-foreground">The 42% match was entirely confined to authorized collaborative raw data tables. Discussion and Error Analysis sections showed 0% peer overlap, with keystroke playback confirming independent composition.</p>
    </div>

    <div class="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-800 dark:text-teal-200">
      <span class="font-bold block mb-1">Step 3: Clarified Pedagogical Policy</span>
      <p>Both students receive full credit for their independent analysis, and the department clarifies lab syllabus guidelines regarding group data citation versus individual narrative analysis.</p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. The 4-Phase Cross-Institutional Verification Protocol</h2>

<p>
  To prevent cross-institutional integrity breakdowns, school districts and partner colleges should implement the following standardized 4-Phase Verification Protocol:
</p>

<!-- 4-Phase Stepper Cards -->
<div class="my-8 space-y-4">
  <!-- Phase 1 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs">Phase 1</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Pre-Submission Onboarding &amp; Policy Harmonization</h3>
    </div>
    <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-5">
      <li><strong>Institutional MOU Execution:</strong> Establish a formal Memorandum of Understanding between district and college defining shared integrity expectations, software provisioning, and appeal workflows.</li>
      <li><strong>LTI 1.3 Configuration:</strong> Configure Checkmark as the central LTI 1.3 tool provider across both high school (Google Classroom, Canvas, Buzz) and college (Canvas, Blackboard, D2L) environments.</li>
      <li><strong>Transparent Syllabus Framing:</strong> Present Essay Playback™ to students not as surveillance, but as an <strong>authorship passport</strong>—an unassailable digital record that protects honest students from false AI accusations.</li>
    </ul>
  </div>

  <!-- Phase 2 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs">Phase 2</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Submission Telemetry &amp; Cross-LMS Ingestion</h3>
    </div>
    <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-5">
      <li><strong>In-App Drafting &amp; Telemetry Logging:</strong> Students compose within their standard school ecosystem while Checkmark passively logs keystrokes, revision bursts, and paste events.</li>
      <li><strong>Automated Roster &amp; Assignment Sync:</strong> Assignment prompts, deadlines, and rubrics created in the college LMS populate automatically in the high school portal via LTI Deep Linking 2.0.</li>
      <li><strong>Unbroken Chain of Custody:</strong> Submissions are ingested directly into the Multi-Evidence Dossier engine without requiring manual student exports or third-party file flattening.</li>
    </ul>
  </div>

  <!-- Phase 3 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs">Phase 3</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Multi-Evidence Triangulation &amp; Review</h3>
    </div>
    <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-5">
      <li><strong>The &ldquo;No Black-Box&rdquo; Rule:</strong> Instructors and administrators are strictly prohibited from issuing sanctions based on a single monolithic percentage score.</li>
      <li><strong>Forensic Triangulation:</strong> Scrub the Essay Playback™ timeline &rarr; Inspect the Paste Buffer &rarr; Review passage-level AI confidence sliders (&lt;150w N/A guardrail) &rarr; Cross-reference side-by-side plagiarism matches.</li>
    </ul>
  </div>

  <!-- Phase 4 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs">Phase 4</span>
      <h3 class="text-sm font-bold text-foreground pt-0 mb-0">Collaborative, Restorative Resolution</h3>
    </div>
    <ul class="space-y-1.5 text-xs text-muted-foreground list-disc pl-5">
      <li><strong>Joint Case Conference:</strong> If significant discrepancies remain, conduct a supportive tripartite conference (College Professor, High School Teacher, Student).</li>
      <li><strong>Transparent Screen-Sharing:</strong> Screen-share Essay Playback™ to discuss drafting decisions collaboratively (&ldquo;Walk me through this section of your argument&rdquo;).</li>
      <li><strong>Restorative Off-Ramp:</strong> Route minor citation errors to high school writing coaching rather than collegiate honor board tribunals.</li>
    </ul>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. Policy Blueprints: Institutional MOU &amp; Syllabus Clauses</h2>

<p>
  To establish clear jurisdictional boundaries, institutions should adopt the following contractual and syllabus policy templates.
</p>

<!-- MOU Template Code Block -->
<div class="my-6 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
    <span class="text-xs font-bold uppercase tracking-wider text-teal-400">Template 1: Dual Enrollment MOU Academic Integrity &amp; LMS Provisioning Clause</span>
    <span class="text-[10px] text-slate-400 font-mono">Institutional Contract</span>
  </div>
  <pre class="text-xs text-slate-300 font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap"><code>MEMORANDUM OF UNDERSTANDING: ACADEMIC INTEGRITY & CROSS-LMS ASSESSMENT
BETWEEN: [School District Name] ("District") AND [College/University Name] ("Institution")

1. PURPOSE & JURISDICTION:
This agreement governs academic integrity verification, student data privacy, and Learning Management System (LMS) interoperability for all credit-bearing Dual Enrollment and Concurrent Enrollment courses.

2. LEARNING MANAGEMENT SYSTEM INTEROPERABILITY:
a. Both parties agree to utilize 1EdTech LTI 1.3 Advantage interoperable assessment tools (Checkmark Plagiarism) to bridge student submissions between District LMS portals ([Google Classroom / Canvas / Buzz]) and Institution LMS portals ([Canvas / Blackboard / D2L]).
b. Student submissions, keystroke telemetry, and rubric grading histories shall synchronize bidirectionally to preserve document revision provenance.

3. EVIDENTIARY STANDARDS FOR ACADEMIC MISCONDUCT:
a. No academic penalty, course failure, or disciplinary sanction may be imposed solely on the basis of a monolithic or probabilistic AI detection score.
b. Any formal inquiry regarding unoriginal writing or unauthorized generative AI use must be substantiated by a Multi-Evidence Dossier, incorporating:
   (i) Temporal writing telemetry (Essay Playback™ keystroke reconstruction);
   (ii) Immutable external paste buffer logs;
   (iii) Passage-level linguistic analysis with calibrated confidence intervals; and
   (iv) Side-by-side primary source comparisons.

4. FERPA & DATA PRIVACY COMPLIANCE:
a. Both parties shall comply with 34 CFR Part 99 (FERPA) and applicable state student privacy laws.
b. The designated academic integrity software vendor shall operate under a strict Zero-Retention policy: student submissions and telemetry shall never be retained to train public or proprietary commercial artificial intelligence models.
c. High school parental inspection rights under 34 CFR § 99.10 shall be facilitated through District administrative channels, while preserving postsecondary student record autonomy under 34 CFR § 99.5(a)(1).</code></pre>
</div>

<!-- Syllabus Policy Template Code Block -->
<div class="my-6 rounded-2xl bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-md">
  <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
    <span class="text-xs font-bold uppercase tracking-wider text-indigo-400">Template 2: Collegiate Dual Enrollment Syllabus Policy Language</span>
    <span class="text-[10px] text-slate-400 font-mono">Course Syllabus</span>
  </div>
  <pre class="text-xs text-slate-300 font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap"><code>DUAL ENROLLMENT ACADEMIC INTEGRITY & AUTHORSHIP POLICY
Course: [e.g., English 101: Academic Writing & Research]
Credits: 3.0 Collegiate Credit Hours / 1.0 High School Unit

1. OUR PHILOSOPHY: TRANSPARENCY & TRUST
Collegiate writing is an iterative craft of synthesis, critical analysis, and original voice. In this course, we practice "Stop guessing, start trusting." We use Checkmark Plagiarism integrated through our LMS to provide you with an unassailable record of your authentic writing process.

2. HOW AUTHORSHIP IS VERIFIED:
Your assignments will be composed within our connected digital workspace. Checkmark passively captures your writing telemetry—including drafting time, revision cycles, and keystroke dynamics (Essay Playback™). 
- If an automated system ever questions your writing style, your complete keystroke playback serves as your definitive proof of authorship ("receipts"), protecting you from false accusations.
- You are free to copy and paste legitimate research quotations and brainstorming notes into your draft; our system records the exact contents of your paste buffer so you can easily prove where your research originated.

3. UNAUTHORIZED AI GENERATION & PLAGIARISM:
Submitting text generated by artificial intelligence (ChatGPT, Claude, etc.) or copied from uncredited sources as your own work constitutes academic dishonesty. Inquiries will be evaluated using a multi-dimensional evidence dossier. Suspected violations will be resolved through a collaborative conference between you, your high school instructor, and the college course director before any disciplinary action is taken.

4. STUDENT PRIVACY GUARANTEE:
Your essays and writing data are strictly protected under FERPA and are NEVER used to train commercial AI models.</code></pre>
</div>

<hr class="my-8 border-border" />

<h2>8. FERPA Compliance &amp; Zero-Retention Architecture for Dual-Credit Partnerships</h2>

<p>
  Dual enrollment programs handle highly sensitive educational records subject to strict federal and state oversight. Checkmark&apos;s platform is engineered from the ground up to ensure absolute regulatory compliance:
</p>

<!-- Zero-Retention Architecture Security Card -->
<div class="my-8 rounded-2xl bg-card border border-border p-6 shadow-sm">
  <div class="text-center font-bold text-foreground text-xs tracking-wider uppercase mb-6">
    Checkmark Zero-Retention &amp; Dual-Status FERPA Privacy Architecture
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
        <span class="text-teal-600 dark:text-teal-400">&bull;</span>
        <span>Zero Model Training Guarantee</span>
      </div>
      <p class="text-muted-foreground leading-relaxed">
        Student essays, keystroke telemetry, and rubrics are NEVER ingested to train, fine-tune, or calibrate public or proprietary Large Language Models (LLMs). Student IP remains strictly protected.
      </p>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
        <span class="text-teal-600 dark:text-teal-400">&bull;</span>
        <span>FERPA &sect; 99.5(a)(1) Role Scoping</span>
      </div>
      <p class="text-muted-foreground leading-relaxed">
        High school portal grants district administrative and parental visibility, while collegiate portal confines official grading records to postsecondary faculty. PII is tokenized and decoupled at rest.
      </p>
    </div>

    <div class="rounded-xl bg-muted/40 p-4 border border-border">
      <div class="flex items-center gap-2 font-bold text-foreground text-sm mb-2">
        <span class="text-teal-600 dark:text-teal-400">&bull;</span>
        <span>Enterprise Data Isolation</span>
      </div>
      <p class="text-muted-foreground leading-relaxed">
        SOC 2 Type II certified, FERPA and COPPA compliant. AES-256 bit encryption at rest and TLS 1.3 in transit. Private database partitions ensure essays are never exposed to external search crawlers.
      </p>
    </div>
  </div>
</div>

<ul>
  <li><strong>Zero Model Training on Student Submissions:</strong> Unlike legacy commercial vendors that reserve contractual rights to ingest student papers into proprietary training sets, Checkmark provides a legally binding Zero-Retention guarantee. Student prose remains the intellectual property of the student and institution.</li>
  <li><strong>Role-Based Granular Scoping:</strong> Checkmark&apos;s LTI 1.3 integration enforces strict role-based access control (RBAC). High school educators access instructional coaching tools within their K-12 tenant, while collegiate professors access official grading and certification tools within their higher ed tenant, preventing unauthorized cross-tenant data leakage.</li>
  <li><strong>Full FERPA 34 CFR &sect; 99.10 Inspection Compliance:</strong> In the event of a formal appeal, Checkmark can export the complete, unredacted Multi-Evidence Dossier (keystroke logs, paste histories, similarity matches) in human-readable PDF format within seconds, fulfilling federal inspection mandates without exposing trade-secret algorithms.</li>
</ul>

<!-- Secondary Visual Asset: Rubrics & Grading Integration -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/services/report-grading-view.png" 
    alt="Checkmark Plagiarism Quote-Anchored Rubric Autograding and SIS Sync View" 
    class="w-full h-auto object-cover m-0"
  />
  <div class="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <span><strong>Figure 3.0:</strong> Checkmark Quote-Anchored Rubric Assessment — Synchronizing Formative Feedback and Evaluative Grades Directly to Both K-12 and College SIS Gradebooks.</span>
    <span class="text-teal-600 dark:text-teal-400 font-medium">LTI 1.3 Grade Services (AGS 2.0)</span>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>9. Frequently Asked Questions (FAQs)</h2>

<div class="my-6 space-y-4">
  <!-- FAQ 1 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2 flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs">Q1</span>
      <span>How does Checkmark capture keystroke dynamics when students switch between high school Chromebooks and home laptops?</span>
    </h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Checkmark&apos;s telemetry engine operates at the <strong>cloud document and LMS integration level</strong>, rather than relying on local machine software. Whether a student logs into their assigned Google Workspace account on a district Chromebook at 10:00 AM or resumes drafting on a personal MacBook at 8:00 PM, Checkmark synchronizes continuous session telemetry under their secure SSO identity. All writing sessions are stitched together seamlessly on the single Essay Playback™ timeline.
    </p>
  </div>

  <!-- FAQ 2 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2 flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs">Q2</span>
      <span>Can a high school student be penalized by a college honor board if only a flat PDF was submitted?</span>
    </h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Under collegiate due process standards and constitutional law (<em>Goss v. Lopez</em>, <em>Board of Curators v. Horowitz</em>), a student cannot be sanctioned based solely on an unverified, probabilistic output from a flat PDF file. If an institution penalizes a student without primary evidentiary proof, the institution faces severe administrative and legal vulnerabilities. Checkmark&apos;s LTI 1.3 bridge prevents flat-file degradation by preserving full drafting telemetry across portals.
    </p>
  </div>

  <!-- FAQ 3 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2 flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs">Q3</span>
      <span>How does Checkmark differentiate between a student retyping their own handwritten notes versus retyping AI-generated text from a phone screen?</span>
    </h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Checkmark&apos;s keystroke telemetry analyzes <strong>Inter-Key Interval (IKI) distributions, drafting velocity, and revision bursts</strong>. A student reading handwritten notes naturally pauses to decipher handwriting, pauses to formulate sentences, makes typing mistakes, and executes micro-revisions. In contrast, mechanical transcription of machine-generated text displays an unnatural, metronomic typing cadence with virtually zero cognitive pauses and near-zero structural rewrites. Combined with an open student conference, this telemetry makes the distinction immediately clear.
    </p>
  </div>

  <!-- FAQ 4 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2 flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs">Q4</span>
      <span>What happens if a student writes an essay offline without an active internet connection?</span>
    </h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      When drafting in offline-enabled environments (e.g., Google Docs Offline or Microsoft Word), Checkmark&apos;s local buffer caches timestamped keystroke events locally within secure, encrypted browser storage. The moment the device reconnects to Wi-Fi, the encrypted telemetry buffer synchronizes with the Checkmark cloud engine, fully reconstructing the offline drafting session on the Essay Playback™ timeline.
    </p>
  </div>

  <!-- FAQ 5 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2 flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs">Q5</span>
      <span>How does Checkmark’s &lt;150-word short-text guardrail work in dual-enrollment discussion boards?</span>
    </h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Linguistic classifiers require sufficient sample sizes to establish statistical confidence. On text segments under ~150 words (such as discussion board replies, short thesis statements, or short-answer quiz questions), generic detectors generate high false-positive rates. Checkmark enforces an honest short-text guardrail: it automatically suppresses probabilistic AI scoring and displays <code>N/A</code>, prompting instructors to evaluate short answers using rubric criteria and keystroke playback rather than algorithmic guesses.
    </p>
  </div>

  <!-- FAQ 6 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2 flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs">Q6</span>
      <span>How do high schools and colleges handle FERPA requests when parents want to see the AI report but the college says the student is an adult under &sect; 99.5?</span>
    </h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Under <strong>34 CFR &sect; 99.5(a)(1)</strong>, the college cannot disclose records directly to parents without the student&apos;s consent. However, because the dual-enrollment course is co-administered by the high school for secondary graduation credit, the high school maintains its own K-12 educational record of the submission and assessment. The high school administration can export the Checkmark Multi-Evidence Dossier through the high school portal and share it with the parents in accordance with high school FERPA regulations (&sect; 99.10), ensuring complete transparency without violating postsecondary privacy rules.
    </p>
  </div>

  <!-- FAQ 7 -->
  <div class="rounded-2xl bg-card border border-border p-5 shadow-sm">
    <h3 class="text-sm font-bold text-foreground pt-0 mb-2 flex items-center gap-2">
      <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs">Q7</span>
      <span>Does Checkmark integrate with both Google Classroom and collegiate Canvas at the same time?</span>
    </h3>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Yes. Through 1EdTech LTI 1.3 Advantage interoperability, Checkmark can be linked simultaneously to a high school&apos;s Google Classroom or K-12 Canvas instance and the partner university&apos;s collegiate Canvas, Blackboard, D2L Brightspace, or Moodle instance. Submissions, playback dossiers, and rubric evaluations synchronize bidirectionally across both systems in real time.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>10. Conclusion: Bridging the High School-to-College Integrity Divide</h2>

<p>
  Dual enrollment programs represent an invaluable bridge between secondary and higher education, offering students a head start on their collegiate aspirations. However, that bridge cannot withstand the strain of disjointed LMS portals, contradictory disciplinary policies, and uncalibrated black-box AI detection algorithms.
</p>

<p>
  To protect the integrity of collegiate academic standards while safeguarding the educational journeys of high school students, institutions must move past monolithic probability scores. 
</p>

<p>
  By uniting <strong>1EdTech LTI 1.3 Advantage interoperability</strong>, patent-pending <strong><a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a> keystroke dynamics</strong>, immutable <strong>external paste tracking</strong>, and <strong>quote-anchored rubric autograding</strong>, <strong>Checkmark Plagiarism</strong> provides the unified infrastructure dual-credit programs need. 
</p>

<!-- CTA Card -->
<div class="my-8 rounded-2xl bg-gradient-to-br from-teal-900/30 via-slate-900 to-indigo-950/40 p-8 border border-teal-500/30 shadow-xl text-center">
  <h3 class="text-xl font-bold text-white mb-2 pt-0">Stop Guessing, Start Trusting in Dual Enrollment</h3>
  <p class="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
    Equip your high school instructors, college department chairs, and dual-credit students with transparent, defensible writing process telemetry and seamless cross-LMS gradebook synchronization.
  </p>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a 
      href="/services/writing-playback" 
      class="inline-flex items-center justify-center rounded-xl bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 text-xs font-bold transition-all shadow-md hover:shadow-teal-500/20"
    >
      Explore Essay Playback™
    </a>
    <a 
      href="/contact" 
      class="inline-flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-2.5 text-xs font-bold transition-all"
    >
      Schedule Dual-Credit LTI Consultation
    </a>
  </div>
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
      currentSlug="2026/8/how-can-dual-enrollment-instructors-verify-authorship-when-students-submit-college-papers-through-high-school-lms-portals"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
