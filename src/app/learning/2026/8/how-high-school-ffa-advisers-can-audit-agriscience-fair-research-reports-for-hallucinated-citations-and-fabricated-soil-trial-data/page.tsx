import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How High School FFA Advisers Can Audit Agriscience Fair Research Reports for Hallucinated Citations and Fabricated Soil Trial Data | Checkmark Plagiarism",
  description: "A comprehensive technical and pedagogical guide for high school agriculture teachers, FFA chapter advisers, CTE directors, and Agriscience Fair judging committees on auditing student research reports for AI-hallucinated Land-Grant extension citations, fabricated soil trial datasets, and National FFA Rule 10 research integrity compliance using Essay Playback™ writing telemetry.",
  keywords: [
    "FFA Agriscience Fair",
    "National FFA Agriscience Fair",
    "FFA Rule 10 scientific integrity",
    "agricultural education research reports",
    "AI detection agriscience",
    "hallucinated agricultural citations",
    "fabricated soil trial data",
    "Checkmark Plagiarism",
    "Essay Playback",
    "SAE agriscience research",
    "CTE agriculture",
    "soil science high school lab",
    "agriscience rubric autograding"
  ],
  openGraph: {
    images: ["/images/learning/how-high-school-ffa-advisers-can-audit-agriscience-fair-research-reports-for-hallucinated-citations-and-fabricated-soil-trial-data/featured.png"],
  },
};

const meta = {
  title: "How High School FFA Advisers Can Audit Agriscience Fair Research Reports for Hallucinated Citations and Fabricated Soil Trial Data | Checkmark Plagiarism",
  description: "A comprehensive technical and pedagogical guide for high school agriculture teachers, FFA chapter advisers, CTE directors, and Agriscience Fair judging committees on auditing student research reports for AI-hallucinated Land-Grant extension citations, fabricated soil trial datasets, and National FFA Rule 10 research integrity compliance using Essay Playback™ writing telemetry.",
  "opengraph-image": "/images/learning/how-high-school-ffa-advisers-can-audit-agriscience-fair-research-reports-for-hallucinated-citations-and-fabricated-soil-trial-data/featured.png",
  date: "08-20-2026",
  readTime: "~16 min read",
  category: "Detection",
  categories: ["Detection", "Writing Telemetry", "Teacher Guide", "CTE & Agriculture", "Rubric Autograding"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<div class="my-6 rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-3">
    <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-sm">
      Executive Summary
    </span>
    <span class="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
      National FFA Agriscience Fair &amp; CTE Research Integrity
    </span>
  </div>
  <p class="text-foreground font-medium leading-relaxed mb-3">
    The <strong>National FFA Agriscience Fair</strong> represents the pinnacle of secondary agricultural inquiry, challenging Grades 7–12 agricultural education students across six divisions and six scientific categories to conduct rigorous empirical research—ranging from soil nitrogen-phosphorus-potassium (N-P-K) leaching kinetics, cover crop dry biomass accumulation, and mycorrhizal fungi root colonization assays to soil pH buffering dynamics and hydroponic electrical conductivity (EC) equilibria. However, severe regional, state, and national convention submission deadlines, coupled with the widespread accessibility of generative Large Language Models (LLMs), have triggered an unprecedented academic integrity dilemma in secondary Career and Technical Education (CTE): high school FFA members facing project deadlines are increasingly tempted to prompt AI tools to synthesize entire agriscience fair research reports.
  </p>
  <p class="text-foreground/90 text-sm leading-relaxed mb-0">
    This synthetic generation introduces <strong>confabulated Land-Grant Extension citations</strong> (e.g., non-existent Texas A&amp;M AgriLife, Iowa State Extension, Purdue Extension, or UC Davis ANR circulars), <strong>fabricated USDA Agricultural Research Service (ARS) bulletin numbers</strong>, mathematically impossible soil cation-exchange equilibria, and unnaturally smoothed crop yield curves with zero biological variance. Simultaneously, generic commercial AI percentage detectors fail agriscience educators by generating rampant false positives on standardized agricultural taxonomy (<em>Zea mays</em>, <em>Bradyrhizobium japonicum</em>), USDA NRCS soil series classifications (<em>Typic Hapludolls</em>), standard extraction protocols (<em>Mehlich-3</em>, <em>Bray-1</em>), and APA extension citation formats while failing to detect copy-pasted LLM experimental datasets. <strong>Checkmark Plagiarism</strong> resolves this investigative bottleneck by pairing <a href="/services/ai-detection" class="text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-2">passage-level AI confidence sliders</a> with patent-pending <a href="/services/writing-process" class="text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-2">Essay Playback™ writing process telemetry (1x–8x replay)</a>, raw spreadsheet clipboard inspection, cross-chapter peer matching, and <a href="/services/autograder" class="text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-2">quote-anchored rubric autograding</a> aligned with official National FFA Agriscience Fair scorecards. Integrated directly into <a href="/services/integrations/canvas" class="text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-2">Canvas LMS</a>, Agilix Buzz, and Google Classroom, Checkmark equips FFA advisers and contest judging committees to verify empirical data concordance, uphold National FFA Rule 10 scientific ethics, and conduct supportive, restorative research conferences that protect student growth and collegiate research readiness.
  </p>
</div>

<p><strong>Checkmark Plagiarism</strong> empowers agricultural educators and FFA advisers through an integrated suite of <a href="/services/writing-process">writing process playback</a>, <a href="/services/ai-detection">passage-level AI detection</a>, <a href="/services/plagiarism-detection">side-by-side source verification</a>, <a href="/services/autograder">rubric autograding</a>, and native <a href="/services/integrations/canvas">LMS integrations</a>.</p>

<hr class="my-8 border-border" />

<h2>1. The National FFA Agriscience Fair Architecture: Divisions, Categories, and Disciplinary Standards</h2>

<p>The National FFA Agriscience Fair recognizes middle and high school agricultural education students who engage in authentic scientific inquiry and emerging agricultural technology research. Governed by comprehensive standards established by the National FFA Organization and aligned with the National Agriculture, Food and Natural Resources (AFNR) Career Cluster Content Standards, the competition demands that students transition from passive classroom learners into practicing agricultural researchers.</p>

<div class="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div class="text-center font-bold text-emerald-400 text-sm tracking-wider uppercase mb-6 pb-3 border-b border-slate-800">
    NATIONAL FFA AGRISCIENCE FAIR COMPETITION DIVISIONS
  </div>
  
  <div class="overflow-x-auto">
    <table class="w-full text-left text-xs border-collapse">
      <thead>
        <tr class="border-b border-slate-800 text-emerald-300 font-semibold">
          <th class="p-3">Division</th>
          <th class="p-3">Grade Levels</th>
          <th class="p-3">Participation</th>
          <th class="p-3">Disciplinary Scope &amp; Methodological Rigor</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-800 text-slate-300">
        <tr class="hover:bg-slate-800/50">
          <td class="p-3 font-bold text-emerald-400">Division 1</td>
          <td class="p-3">Grades 7–8 (Middle School)</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">Individual</span></td>
          <td class="p-3">Foundational scientific method, controlled variables, basic descriptive statistics, and primary logbook logging.</td>
        </tr>
        <tr class="hover:bg-slate-800/50">
          <td class="p-3 font-bold text-emerald-400">Division 2</td>
          <td class="p-3">Grades 7–8 (Middle School)</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-500/30">Team (2 Members)</span></td>
          <td class="p-3">Collaborative foundational inquiry, shared greenhouse bench or animal trials, and dual-member logbook documentation.</td>
        </tr>
        <tr class="hover:bg-slate-800/50">
          <td class="p-3 font-bold text-teal-400">Division 3</td>
          <td class="p-3">Grades 9–10 (Secondary Underclass)</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">Individual</span></td>
          <td class="p-3">Intermediate experimental design, two-sample t-tests, standard error calculations, and APA literature reviews.</td>
        </tr>
        <tr class="hover:bg-slate-800/50">
          <td class="p-3 font-bold text-teal-400">Division 4</td>
          <td class="p-3">Grades 9–10 (Secondary Underclass)</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-500/30">Team (2 Members)</span></td>
          <td class="p-3">Intermediate collaborative multi-plot agronomic trials, randomized block designs, and joint manuscript drafting.</td>
        </tr>
        <tr class="hover:bg-slate-800/50">
          <td class="p-3 font-bold text-indigo-400">Division 5</td>
          <td class="p-3">Grades 11–12 (Secondary Upperclass)</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">Individual</span></td>
          <td class="p-3">Advanced collegiate-level inquiry: One-way/Two-way ANOVA, regression modeling (R²), and primary extension synthesis.</td>
        </tr>
        <tr class="hover:bg-slate-800/50">
          <td class="p-3 font-bold text-indigo-400">Division 6</td>
          <td class="p-3">Grades 11–12 (Secondary Upperclass)</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-500/30">Team (2 Members)</span></td>
          <td class="p-3">Advanced multi-variable team field trials, bio-assays, spectrophotometry, and multi-enterprise statistical models.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p>Within these six divisions, student research is categorized into six specialized agricultural disciplines:</p>

<div class="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="rounded-xl border border-emerald-500/30 bg-card p-5 shadow-sm space-y-2">
    <div class="flex items-center gap-2 font-bold text-sm text-foreground">
      <span class="text-lg">🌱</span> 1. Plant Systems (PS)
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Agronomy, genetics, crop physiology, and soil-plant interactions. Typical trials evaluate nitrogen-use efficiency in hybrid corn, biochar amendment rates in sandy loam, cover crop biomass accumulation (cereal rye vs. hairy vetch), or mycorrhizal root colonization under varying tillage intensities.
    </p>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-card p-5 shadow-sm space-y-2">
    <div class="flex items-center gap-2 font-bold text-sm text-foreground">
      <span class="text-lg">💧</span> 2. Environmental Services (ENR)
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Biogeochemical cycles, soil conservation, water quality, and ecological sustainability. Projects quantify nitrate-nitrogen (NO₃-N) and orthophosphate (PO₄³⁻) leaching in drainage lysimeters, macroinvertebrate biotic indices (FBI) in stream runoff, or heavy metal phytoextraction.
    </p>
  </div>

  <div class="rounded-xl border border-amber-500/30 bg-card p-5 shadow-sm space-y-2">
    <div class="flex items-center gap-2 font-bold text-sm text-foreground">
      <span class="text-lg">🥩</span> 3. Food Products &amp; Processing (FPP)
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Food safety, post-harvest biochemistry, preservation, and value-added processing. Investigations explore lipid oxidation kinetics in grass-fed vs. grain-finished beef, antimicrobial efficacy of plant essential oils against <em>E. coli</em>, or thermal pasteurization curves.
    </p>
  </div>

  <div class="rounded-xl border border-blue-500/30 bg-card p-5 shadow-sm space-y-2">
    <div class="flex items-center gap-2 font-bold text-sm text-foreground">
      <span class="text-lg">🐄</span> 4. Animal Systems (AS)
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Livestock nutrition, physiology, reproduction, and welfare. Trials evaluate feed conversion ratios (FCR) in market broilers, probiotic supplementation on equine cecal pH, ruminal buffering in dairy calves, or internal parasite fecal egg counts (FEC) under rotational grazing.
    </p>
  </div>

  <div class="rounded-xl border border-purple-500/30 bg-card p-5 shadow-sm space-y-2">
    <div class="flex items-center gap-2 font-bold text-sm text-foreground">
      <span class="text-lg">🚜</span> 5. Power, Structural &amp; Tech (PST)
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Agricultural mechanics, precision ag, robotics, and thermodynamics. Projects evaluate automated variable-rate drip irrigation algorithms, multispectral drone NDVI ground-truthing, solar drying facility efficiencies, or tractor hydraulic flow dynamics.
    </p>
  </div>

  <div class="rounded-xl border border-rose-500/30 bg-card p-5 shadow-sm space-y-2">
    <div class="flex items-center gap-2 font-bold text-sm text-foreground">
      <span class="text-lg">📊</span> 6. Social Science (SS)
    </div>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Agricultural economics, consumer perceptions, and policy adoption. Studies analyze consumer willingness-to-pay for organic vs. conventional labeling, farmer adoption barriers for precision nitrogen sensors, or the efficacy of youth agricultural literacy campaigns.
    </p>
  </div>
</div>

<div class="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div class="text-center font-bold text-emerald-400 text-sm tracking-wider uppercase mb-6 pb-3 border-b border-slate-800">
    TECHNICAL STRUCTURE OF AN OFFICIAL FFA WRITTEN REPORT
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="space-y-3">
      <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
        <div class="font-bold text-emerald-300 mb-1">1. Title Page &amp; Abstract</div>
        <div class="text-slate-300 text-[11px]">Formatted per National FFA guidelines; 150–250 word synthesis stating the agricultural problem, hypothesis, methodology, quantitative results, and practical farm significance.</div>
      </div>
      <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
        <div class="font-bold text-emerald-300 mb-1">2. Introduction &amp; Purpose</div>
        <div class="text-slate-300 text-[11px]">Clear statement of agricultural relevance, economic impact on producers, detailed background context, and explicit null (H₀) and alternative (Hₐ) hypotheses.</div>
      </div>
      <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
        <div class="font-bold text-emerald-300 mb-1">3. Review of Literature</div>
        <div class="text-slate-300 text-[11px]">Exhaustive synthesis of peer-reviewed journals, USDA-ARS technical bulletins, and Land-Grant Extension circulars formatted in strict APA 7th edition citation style.</div>
      </div>
      <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
        <div class="font-bold text-emerald-300 mb-1">4. Materials and Methods</div>
        <div class="text-slate-300 text-[11px]">Reproducible experimental design, field plot randomization, sample size (n), replication blocks, calibration curves, instrument model numbers, and safety hazards.</div>
      </div>
    </div>

    <div class="space-y-3">
      <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
        <div class="font-bold text-teal-300 mb-1">5. Results &amp; Data Analysis</div>
        <div class="text-slate-300 text-[11px]">Descriptive statistics (x̄, s), inferential statistics (ANOVA F-stat, t-tests, p-values, α = 0.05), regression lines (R²), error bars, and labeled data tables.</div>
      </div>
      <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
        <div class="font-bold text-teal-300 mb-1">6. Discussion &amp; Conclusions</div>
        <div class="text-slate-300 text-[11px]">Interpretation of biological/chemical mechanisms, hypothesis validation, comparison to existing literature, experimental limitations, and practical recommendations for producers.</div>
      </div>
      <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
        <div class="font-bold text-teal-300 mb-1">7. References / Works Cited</div>
        <div class="text-slate-300 text-[11px]">Complete APA 7th edition bibliography with active, verifiable Digital Object Identifiers (DOIs) and Land-Grant Extension publication catalog codes.</div>
      </div>
      <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
        <div class="font-bold text-teal-300 mb-1">8. Primary Logbook &amp; Appendices</div>
        <div class="text-slate-300 text-[11px]">Timestamped primary raw data entries, handwritten bench observations, spectrophotometer raw logs, greenhouse temperature recordings, and date-stamped photos.</div>
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>2. The LLM Temptation in Secondary Agriscience: Anatomy of Synthetic Reports</h2>

<p>High school agriculture students manage extraordinarily demanding co-curricular schedules. A typical active FFA member balances an intensive Supervised Agricultural Experience (SAE) project (raising livestock, managing greenhouse crops, or working on an agribusiness placement), rigorous preparation for Career Development Events (CDEs) or Leadership Development Events (LDEs), chapter officer meetings, livestock show exhibition schedules, and full academic course loads.</p>

<p>When the hard submission deadline for District, Sectional, State, or National Agriscience Fair judging arrives—frequently coinciding with spring regional conventions and AP testing—students who have encountered experimental failures (e.g., greenhouse aphids killing crop replicates, frozen irrigation lines, or delayed soil testing lab turnaround) face an acute temptation: prompting a generative LLM (such as ChatGPT, Claude, or Gemini) to write their research report or invent missing data points.</p>

<div class="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div class="text-center font-bold text-emerald-400 text-sm tracking-wider uppercase mb-4 pb-2 border-b border-slate-800">
    THE PATHWAY OF SYNTHETIC AGRISCIENCE GENERATION &amp; BREAKDOWN
  </div>

  <div class="space-y-4">
    <div class="p-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
      <span class="text-emerald-400 font-bold">1. Student Prompt:</span> &ldquo;Write a high school FFA agriscience report on cover crop biomass and soil nitrate leaching in silt loam soils...&rdquo;
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-slate-300">
        <div class="font-bold text-red-300 text-xs mb-1">🚨 AI Failure 1: Fake Extension Citations</div>
        <div class="text-[11px]">Invented circular codes from Texas A&amp;M AgriLife, Purdue, Iowa State, or UC Davis ANR.</div>
      </div>
      <div class="p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-slate-300">
        <div class="font-bold text-red-300 text-xs mb-1">🚨 AI Failure 2: Dead USDA DOIs</div>
        <div class="text-[11px]">Confabulated USDA-ARS publication numbers and dead 10.xxxx DOIs resolving to unrelated papers.</div>
      </div>
      <div class="p-3 rounded-lg bg-amber-950/40 border border-amber-500/40 text-slate-300">
        <div class="font-bold text-amber-300 text-xs mb-1">⚠️ AI Failure 3: Broken Soil Stoichiometry</div>
        <div class="text-[11px]">Cation-exchange tables where Ca²⁺ + Mg²⁺ + K⁺ exceed 200% of stated CEC.</div>
      </div>
      <div class="p-3 rounded-lg bg-amber-950/40 border border-amber-500/40 text-slate-300">
        <div class="font-bold text-amber-300 text-xs mb-1">⚠️ AI Failure 4: Zero-Variance Data</div>
        <div class="text-[11px]">Artificially smoothed crop yield curves with R² = 0.999 lacking biological microclimatic noise.</div>
      </div>
    </div>

    <div class="p-3 rounded-lg bg-slate-800 border border-red-500/50 text-center text-red-300 font-bold">
      💥 Outcome: State/National Screening Committee Detection Triggers Immediate National FFA Rule 10 Disqualification
    </div>
  </div>
</div>

<h3>Anatomy of Hallucinated Agricultural Citations</h3>

<p>Large Language Models operate via statistical next-token prediction across vast text corpora; they do not query live USDA Agricultural Research Service repositories or Land-Grant Extension publishing databases unless explicitly integrated with specialized live-retrieval tools. When prompted for agricultural literature, LLMs routinely generate <strong>hallucinated citations</strong> that mimic academic phrasing with deceptive plausibility.</p>

<div class="my-8 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Citation Component</th>
        <th class="p-3">Genuine Peer-Reviewed / Extension Source</th>
        <th class="p-3">AI-Hallucinated Citation Signature</th>
      </tr>
    </thead>
    <tbody class="divide-y border-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Author Affiliation</td>
        <td class="p-3">Real, verifiable faculty/specialist at cited Land-Grant university (e.g., TAMU Soil Sciences).</td>
        <td class="p-3 text-red-600 dark:text-red-400">Real agronomy professor paired with a completely fabricated paper title.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Extension Circular Code</td>
        <td class="p-3">Matches official university publication series (e.g., Purdue AY-318-W, Iowa State PM 1714).</td>
        <td class="p-3 text-red-600 dark:text-red-400">Synthesizes plausible-sounding series codes (e.g., &ldquo;TAMU Ext. Bul. EB-4491&rdquo;).</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Digital Object ID (DOI)</td>
        <td class="p-3">Resolves directly via https://doi.org to authentic manuscript record and volume/issue.</td>
        <td class="p-3 text-red-600 dark:text-red-400">Invented 10.xxxx/xxx string that returns HTTP 404 Not Found or unrelated article.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Publication Scope</td>
        <td class="p-3">Cites specific soil series, localized rainfall, geographic microclimates, and regional cultivars.</td>
        <td class="p-3 text-amber-600 dark:text-amber-400">Vague, sweeping generalizations with no regional soil series or climatic bounds.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="my-6 rounded-xl border border-red-500/30 bg-red-50/50 dark:bg-red-950/20 p-5 text-xs space-y-2">
  <div class="font-bold text-red-700 dark:text-red-300 text-sm">Dissecting a Real AI-Hallucinated Agriscience Citation:</div>
  <blockquote class="border-l-4 border-red-500 pl-3 italic text-foreground my-2">
    &ldquo;Rasnake, M. J., &amp; Thom, W. O. (2021). Nitrate-nitrogen leaching dynamics under no-till cover crop rotations in silt loam soils (Publication No. AGR-1882). University of Kentucky Cooperative Extension Service. https://doi.org/10.1016/j.agwat.2021.106721&rdquo;
  </blockquote>
  <div class="space-y-1 text-muted-foreground pt-1">
    <div><strong>1. Author Affiliation Check:</strong> Dr. Monroe Rasnake and Dr. William Thom are retired soil scientists from the University of Kentucky. While authentic researchers, they retired prior to 2021 and never authored this title.</div>
    <div><strong>2. Publication Code Verification:</strong> The University of Kentucky Cooperative Extension publication series <em>AGR</em> exists, but bulletin <em>AGR-1882</em> is completely unlisted in the official UK repository.</div>
    <div><strong>3. DOI Forensic Resolution:</strong> Submitting <code>https://doi.org/10.1016/j.agwat.2021.106721</code> resolves to an Elsevier paper titled <em>&ldquo;Effects of deficit irrigation on almond tree canopy development in Mediterranean orchards&rdquo;</em> in <em>Agricultural Water Management</em>—a California tree nut study with zero mention of Kentucky cover crops or silt loam soils.</div>
  </div>
</div>

<h3>Anatomy of Fabricated Soil Trial Data and Agronomic Inconsistencies</h3>

<p>When agricultural students face missing lab readings or greenhouse failures, they may prompt an LLM to generate <em>&ldquo;a complete raw data table for a 6-week soil trial comparing 0, 5, 10, and 15 tons/acre biochar on soil pH, Mehlich-3 extractable phosphorus, cation-exchange capacity, and nitrate leaching.&rdquo;</em></p>

<p>While the generated numbers look impressive on a PDF submission, they routinely violate foundational laws of soil chemistry, thermodynamics, and biological growth kinetics:</p>

<div class="my-8 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Soil Trial Parameter</th>
        <th class="p-3">Authentic Empirical Laboratory Dynamics</th>
        <th class="p-3">AI-Fabricated Data Artifacts</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Nitrate Leaching (NO₃⁻ mg/L in leachate)</td>
        <td class="p-3">High replicate variance (CV = 15–30%) due to preferential macropore flow and column soil compaction variations.</td>
        <td class="p-3 text-red-600 dark:text-red-400">Perfect linear stepwise reductions (R² &gt; 0.995) across all replicates with near-zero standard deviations (s &lt; 0.05).</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Cation-Exchange Capacity (CEC meq/100g)</td>
        <td class="p-3">CEC = ∑(Ca²⁺ + Mg²⁺ + K⁺ + Na⁺ + Al³⁺ + H⁺) balances stoichiometrically with soil texture.</td>
        <td class="p-3 text-red-600 dark:text-red-400">Individual base cations sum to 45 meq, while total CEC is listed as 18.2 meq/100g (stoichiometric failure).</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Soil pH Buffering</td>
        <td class="p-3">Sigmoidal buffering response; soil clay/humus mineralogy resists rapid pH swings.</td>
        <td class="p-3 text-red-600 dark:text-red-400">Unbuffered linear 0.5 pH unit jumps per amendment unit regardless of soil buffer index.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Hydroponic EC vs. Total Dissolved Solids (TDS)</td>
        <td class="p-3">Direct physical correlation: TDS (ppm) ≈ EC (mS/cm) × 640.</td>
        <td class="p-3 text-red-600 dark:text-red-400">EC and TDS move in opposite directions, or TDS deviates wildly from standard conversion factors.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Mycorrhizal Root Colonization (% VAM)</td>
        <td class="p-3">Clustered percentage values based on gridline intersect counts (e.g., 42%, 47%, 51%).</td>
        <td class="p-3 text-red-600 dark:text-red-400">Decimal values reported to 4 decimal places (45.3218%), impossible on 100-root segment counts.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="my-6 rounded-xl border border-teal-500/30 bg-card p-5 text-xs space-y-2">
  <div class="font-bold text-foreground text-sm flex items-center gap-1.5">
    <span>🧪</span> The Agronomic Stoichiometry Audit Formula
  </div>
  <p class="text-muted-foreground m-0 leading-relaxed">
    In authentic soil testing using standard extraction protocols (such as Mehlich-3, Ammonium Acetate pH 7.0, or Bray-1), Soil Cation-Exchange Capacity (CEC) represents the total capacity of a soil to hold exchangeable cations:
  </p>
  <div class="my-2 p-3 rounded-lg bg-muted/70 font-mono text-[11px] text-foreground space-y-1">
    <div><strong>Effective CEC (meq/100g)</strong> = [Ca²⁺] + [Mg²⁺] + [K⁺] + [Na⁺] + [Exchangeable Acidity (H⁺ + Al³⁺)]</div>
    <div><strong>Base Saturation (%)</strong> = ([Ca²⁺] + [Mg²⁺] + [K⁺] + [Na⁺]) / Effective CEC × 100</div>
  </div>
  <p class="text-muted-foreground m-0 leading-relaxed">
    When an LLM synthesizes a soil chemistry dataset, it almost always outputs random values for calcium, magnesium, and potassium without balancing the stoichiometric sum. An adviser auditing the student's submission will find that the base cations exceed 200% of the soil's stated CEC—an impossible condition in terrestrial soils that instantly proves data fabrication.
  </p>
</div>

<hr class="my-8 border-border" />

<h2>3. National FFA Rule 10, Disqualification Risks, and the Generic Detector Failure</h2>

<p>The National FFA Organization maintains an unyielding stance on research ethics and authentic inquiry, formalized under <strong>Rule 10 of the National FFA Agriscience Fair Rules and Policies</strong>:</p>

<ol>
  <li><strong>Originality of Entry:</strong> Every project entered in the National FFA Agriscience Fair must be the original, empirical work of the student(s) named on the entry application.</li>
  <li><strong>Prohibition of Scientific Misconduct:</strong> Plagiarism, data fabrication, data falsification, unauthorized ghostwriting, manipulation of agricultural logbooks, or misrepresentation of secondary sources as primary data constitutes scientific misconduct.</li>
  <li><strong>Mandatory Sanctions:</strong> Any entry found in violation of Rule 10 is subject to immediate disqualification at any stage of competition (District, State, or National). Disqualification results in forfeiture of ribbons, plaques, national finalist status, and cash awards. A formal notice of ethics violation is dispatched to the State FFA Executive Secretary, the local school district CTE Director, and high school administration.</li>
</ol>

<div class="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div class="text-center font-bold text-rose-400 text-sm tracking-wider uppercase mb-6 pb-3 border-b border-slate-800">
    CONSEQUENCES OF SCIENTIFIC MISCONDUCT IN FFA AGRISCIENCE
  </div>
  
  <div class="space-y-3">
    <div class="rounded-lg bg-slate-800 p-3.5 border border-red-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div>
        <div class="font-bold text-red-300">Local / District Fair Level</div>
        <div class="text-[11px] text-slate-300">Immediate disqualification; zero recorded on high school CTE course gradebook; student mandated to complete restorative research ethics curriculum.</div>
      </div>
      <span class="text-[10px] bg-red-950 text-red-200 px-2.5 py-1 rounded border border-red-500/30 whitespace-nowrap self-start sm:self-center">Course Penalty</span>
    </div>

    <div class="rounded-lg bg-slate-800 p-3.5 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div>
        <div class="font-bold text-amber-300">State FFA Convention</div>
        <div class="text-[11px] text-slate-300">Stripping of State Winner / Finalist title; loss of national qualifying slot; chapter standing reviewed by State FFA Board of Directors.</div>
      </div>
      <span class="text-[10px] bg-amber-950 text-amber-200 px-2.5 py-1 rounded border border-amber-500/30 whitespace-nowrap self-start sm:self-center">State Title Revocation</span>
    </div>

    <div class="rounded-lg bg-slate-800 p-3.5 border border-purple-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div>
        <div class="font-bold text-purple-300">National FFA Convention</div>
        <div class="text-[11px] text-slate-300">Forfeiture of National Finalist medal and agricultural scholarship awards; multi-year school chapter probation from National Agriscience divisions.</div>
      </div>
      <span class="text-[10px] bg-purple-950 text-purple-200 px-2.5 py-1 rounded border border-purple-500/30 whitespace-nowrap self-start sm:self-center">Chapter Probation</span>
    </div>

    <div class="rounded-lg bg-slate-800 p-3.5 border border-blue-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div>
        <div class="font-bold text-blue-300">Collegiate &amp; Scholarship Standing</div>
        <div class="text-[11px] text-slate-300">Revocation of collegiate agricultural college recommendations; ethics violation logged on secondary academic integrity record, impacting university admissions.</div>
      </div>
      <span class="text-[10px] bg-blue-950 text-blue-200 px-2.5 py-1 rounded border border-blue-500/30 whitespace-nowrap self-start sm:self-center">College Impact</span>
    </div>
  </div>
</div>

<h3>Why Generic AI Detectors Fail High School Agriculture Advisers</h3>

<p>Faced with mounting pressure to enforce Rule 10, many high school agriculture departments turn to generic, commercial AI percentage detectors. However, generic detectors create severe pedagogical crises in agricultural science classrooms:</p>

<div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="rounded-xl border border-red-500/30 bg-card p-5 shadow-sm space-y-2">
    <div class="font-bold text-sm text-red-600 dark:text-red-400 flex items-center gap-1.5">
      <span>❌</span> Failure 1: False Positives on Real Agronomic Prose
    </div>
    <ul class="text-xs text-muted-foreground space-y-1.5 pl-4 list-disc">
      <li><strong>Standard Agronomic Terminology:</strong> Flags scientific binomials (<em>Glycine max</em>, <em>Bradyrhizobium japonicum</em>) due to low linguistic perplexity.</li>
      <li><strong>USDA NRCS Soil Taxonomy:</strong> Classifications (<em>Typic Argiudolls, fine-loamy, mixed</em>) trigger 85–98% &ldquo;AI probability&rdquo; scores.</li>
      <li><strong>Standardized Extension Citation Syntax:</strong> APA reference entries for Land-Grant circulars trigger formulaic pattern flags, falsely accusing honest students.</li>
    </ul>
  </div>

  <div class="rounded-xl border border-amber-500/30 bg-card p-5 shadow-sm space-y-2">
    <div class="font-bold text-sm text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
      <span>❌</span> Failure 2: Complete Blindness to Data Fabrication
    </div>
    <ul class="text-xs text-muted-foreground space-y-1.5 pl-4 list-disc">
      <li><strong>Blind to Numerical Tables:</strong> Generic detectors parse only continuous prose; they cannot evaluate numerical data tables or soil chemistry balance equations.</li>
      <li><strong>Defeated by Paraphrasing:</strong> Light paraphrasing tools drop detector scores to 0% while preserving completely fabricated citations and synthetic soil data.</li>
      <li><strong>Zero Process Evidence:</strong> An arbitrary whole-paper score (e.g., &ldquo;74% AI&rdquo;) offers no defensible proof during contentious parent conferences.</li>
    </ul>
  </div>
</div>

<p>Agriculture teachers managing five to six class periods and 120–160 students cannot rely on opaque probability scores. They need transparent, reproducible, and legally defensible writing telemetry.</p>

<hr class="my-8 border-border" />

<h2>4. The High School Agriscience Evidentiary Matrix</h2>

<p>To reliably audit written research reports and safeguard student rights, FFA advisers must apply a multidimensional evidentiary standard. The matrix below outlines how traditional auditing, generic AI detectors, and Checkmark Plagiarism compare across critical verification parameters.</p>

<div class="my-8 overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-border bg-muted/60 text-foreground font-semibold">
        <th class="p-3">Evidentiary Dimension</th>
        <th class="p-3">Traditional Paper Logbook &amp; Manual Audit</th>
        <th class="p-3">Generic AI Detector (Single Black-Box %)</th>
        <th class="p-3 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300">Checkmark Agricultural Source &amp; Essay Playback™</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-muted-foreground">
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Core Verification Mechanism</td>
        <td class="p-3">Visual inspection of manual handwriting and physical greenhouse bench pots.</td>
        <td class="p-3">Probabilistic token distribution algorithms (perplexity/burstiness).</td>
        <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">Patent-pending keystroke dynamics, temporal replay, and live Land-Grant source mapping.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Land-Grant Extension Source Authentication</td>
        <td class="p-3">Adviser must manually search each publication code online.</td>
        <td class="p-3 text-red-600 dark:text-red-400">Completely blind; flags APA syntax as &ldquo;formulaic AI.&rdquo;</td>
        <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">Live two-way linked web cards; checks university repositories and DOI registries.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Soil Trial Data Concordance Tracking</td>
        <td class="p-3">Compares final report to handwritten ink log pages.</td>
        <td class="p-3 text-red-600 dark:text-red-400">Cannot parse numerical data tables or spreadsheets.</td>
        <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">External paste inspector audits raw clipboard data entry pacing and spreadsheet formulas.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Writing Process Replay (1x–8x Speed)</td>
        <td class="p-3">None (only sees final printed manuscript).</td>
        <td class="p-3 text-red-600 dark:text-red-400">None (evaluates static text snapshot after submission).</td>
        <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">Full 1x–8x timeline playback; reveals drafting velocity, pauses, and revisions.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">External Clipboard Provenance Inspection</td>
        <td class="p-3">None (cannot verify digital text creation history).</td>
        <td class="p-3 text-red-600 dark:text-red-400">None (cannot detect copy-paste actions or sources).</td>
        <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">Timestamped capture of external pastes with full text preservation.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Cross-Chapter Cohort Peer Match</td>
        <td class="p-3">Limited to adviser's own memory across class periods.</td>
        <td class="p-3">None (evaluates submission in complete isolation).</td>
        <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">Detects text &amp; dataset sharing across regional chapter cohorts.</td>
      </tr>
      <tr class="hover:bg-muted/30">
        <td class="p-3 font-medium text-foreground">Defensibility in Rule 10 Contested Conferences</td>
        <td class="p-3">Subjective; vulnerable to parental dispute &amp; appeals.</td>
        <td class="p-3 text-red-600 dark:text-red-400">High risk of false flags; legally indefensible.</td>
        <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">Objective keystroke telemetry provides unassailable process receipts.</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-border" />

<h2>5. Step-by-Step FFA Adviser Audit Protocol for Agriscience Submissions</h2>

<p>High school agriculture instructors can execute the following five-step protocol to systematically audit written agriscience reports before submitting entries to District, State, or National judging committees.</p>

<div class="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div class="text-center font-bold text-emerald-400 text-sm tracking-wider uppercase mb-6 pb-3 border-b border-slate-800">
    FIVE-STEP FFA AGRISCIENCE REPORT AUDIT PROTOCOL
  </div>
  
  <div class="space-y-4">
    <div class="rounded-xl border border-emerald-500/40 bg-slate-800/90 p-4">
      <div class="font-bold text-emerald-300 text-xs mb-1 flex items-center justify-between">
        <span>STEP 1: PRIMARY LOGBOOK &amp; RAW SPREADSHEET CONCORDANCE AUDIT</span>
        <span class="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">Step 1</span>
      </div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; Inspect physical ink logbooks for timestamped bench entries, sensor readings, and calibration dates.</div>
        <div>&bull; Cross-check reported ANOVA/t-test values against dynamic formulas in Google Sheets / Excel.</div>
        <div>&bull; Verify soil stoichiometry: check CEC base cation sums, EC/TDS ratios, and moisture % consistency.</div>
      </div>
    </div>

    <div class="rounded-xl border border-teal-500/40 bg-slate-800/90 p-4">
      <div class="font-bold text-teal-300 text-xs mb-1 flex items-center justify-between">
        <span>STEP 2: AGRICULTURAL EXTENSION &amp; USDA DOI SOURCE VERIFICATION</span>
        <span class="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-500/40">Step 2</span>
      </div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; Click live links in Checkmark's Plagiarism Breakdown sidebar to verify Land-Grant publication IDs.</div>
        <div>&bull; Verify USDA-ARS technical bulletins against the USDA National Agricultural Library (PubAg) catalog.</div>
        <div>&bull; Confirm primary author disciplinary affiliations against university departmental faculty directories.</div>
      </div>
    </div>

    <div class="rounded-xl border border-indigo-500/40 bg-slate-800/90 p-4">
      <div class="font-bold text-indigo-300 text-xs mb-1 flex items-center justify-between">
        <span>STEP 3: WRITING PROCESS TELEMETRY &amp; KEYSTROKE REPLAY (1x–8x)</span>
        <span class="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/40">Step 3</span>
      </div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; Scrub the Essay Playback™ timeline to observe writing velocity, data entry pauses, and sentence revisions.</div>
        <div>&bull; Distinguish authentic, variable student composing (30–85 WPM) from mechanical transcription (140+ WPM).</div>
      </div>
    </div>

    <div class="rounded-xl border border-amber-500/40 bg-slate-800/90 p-4">
      <div class="font-bold text-amber-300 text-xs mb-1 flex items-center justify-between">
        <span>STEP 4: EXTERNAL PASTE INSPECTION &amp; CLIPBOARD PROVENANCE</span>
        <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">Step 4</span>
      </div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; Open the External Paste Inspector to audit all clipboard insertions.</div>
        <div>&bull; Differentiate between legitimate raw data transfers and large external LLM prompt text insertions.</div>
      </div>
    </div>

    <div class="rounded-xl border border-rose-500/40 bg-slate-800/90 p-4">
      <div class="font-bold text-rose-300 text-xs mb-1 flex items-center justify-between">
        <span>STEP 5: CONDUCTING SUPPORTIVE RESTORATIVE AGRISCIENCE RESEARCH DEBRIEFS</span>
        <span class="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-500/40">Step 5</span>
      </div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; Review Essay Playback™ telemetry collaboratively with the student to facilitate transparent reflection.</div>
        <div>&bull; Establish restorative pathways: re-run bench trials, re-calculate verified data, and rewrite under Rule 10.</div>
      </div>
    </div>
  </div>
</div>

<h3>Step 1: Primary Logbook &amp; Raw Spreadsheet Concordance Audit</h3>

<p>Before analyzing narrative style, the adviser must verify that the empirical foundation of the report exists in physical reality:</p>

<ol>
  <li><strong>Physical Logbook Authentication:</strong> Confirm that the student maintains a bound, handwritten primary research logbook. Entries must include specific dates, clock times, environmental conditions (greenhouse ambient temperature, relative humidity), and raw instrument readings (spectrophotometer optical density at 600 nm, EC in µS/cm). Genuine logbooks feature physical artifacts: ink smudges, crossed-out erroneous readings with corrected notations, and chronological gaps reflecting weekends.</li>
  <li><strong>Spreadsheet Formula Audit:</strong> Open the student’s raw Google Sheet or Excel workbook. Verify that summary statistics (x̄, standard deviation s, standard error SEM, and ANOVA F-values) are generated using dynamic spreadsheet formulas (<code>=AVERAGE()</code>, <code>=STDEV.S()</code>, <code>=ANOVA()</code>) rather than static, hard-coded numbers typed into cells.</li>
</ol>

<h3>Step 2: Agricultural Extension &amp; USDA DOI Source Verification</h3>

<p>The literature review must be audited to ensure that all cited Land-Grant Extension publications and USDA research bulletins correspond to genuine, published agronomic studies:</p>

<div class="my-6 rounded-xl border border-slate-700 bg-slate-900/90 p-4 text-xs font-mono text-slate-200 space-y-2">
  <div class="font-bold text-emerald-400">LAND-GRANT EXTENSION CITATION AUDIT PROTOCOL:</div>
  <div>1. <strong>Direct Repository Search:</strong> Navigate to official Land-Grant publishing repositories:</div>
  <div class="pl-4 text-slate-300 space-y-0.5">
    <div>&bull; Texas A&amp;M AgriLife Bookstore (agrilifebookstore.org)</div>
    <div>&bull; Iowa State University Extension Store (extension.iastate.edu/store)</div>
    <div>&bull; Purdue Extension Education Store (edustore.purdue.edu)</div>
    <div>&bull; University of California Agriculture &amp; Natural Resources (anrcatalog.ucanr.edu)</div>
    <div>&bull; University of Florida IFAS Extension EDIS (edis.ifas.ufl.edu)</div>
  </div>
  <div>2. <strong>Publication ID Match:</strong> Search exact publication code (e.g., &ldquo;Purdue Ext. AY-318-W&rdquo;). If zero results, flag for verification.</div>
  <div>3. <strong>DOI Resolution Test:</strong> Paste citation DOI into <code>https://doi.org</code>. Verify resolving title and journal.</div>
</div>

<h3>Step 3: Writing Process Telemetry &amp; Keystroke Replay with Essay Playback™</h3>

<p>When students compose their research reports in Google Docs on school-issued Chromebooks or within LMS text editors (Canvas LMS, Agilix Buzz), <strong>Checkmark Plagiarism's Essay Playback™</strong> reconstructs the complete drafting session. Advisers can scrub through the entire writing process at 1x, 2x, 4x, or 8x speed to observe how the paper was assembled.</p>

<div class="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div class="text-center font-bold text-emerald-400 text-sm tracking-wider uppercase mb-4 pb-2 border-b border-slate-800">
    ESSAY PLAYBACK™ TELEMETRY: AUTHENTIC DRAFTING VS. UNNATURAL TRANSCRIPTION / BULK PASTE
  </div>

  <div class="space-y-6">
    <div class="rounded-xl bg-slate-800/90 border border-emerald-500/50 p-4">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span class="text-emerald-300 font-bold text-xs">SCENARIO A: AUTHENTIC STUDENT AGRISCIENCE DRAFTING (Variable Cadence + Revisions)</span>
        <span class="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">Organic Flow</span>
      </div>
      
      <div class="my-3 p-2 bg-slate-900 rounded-lg border border-slate-700">
        <div class="flex justify-between text-[10px] text-slate-400 mb-1">
          <span>00:00</span>
          <span>12:30</span>
          <span>25:00</span>
          <span>45:00</span>
          <span>68:00</span>
        </div>
        <div class="h-4 w-full bg-slate-800 rounded flex overflow-hidden border border-slate-700">
          <div class="h-full bg-emerald-500" style="width: 25%;"></div>
          <div class="h-full bg-slate-700" style="width: 15%;"></div>
          <div class="h-full bg-emerald-500" style="width: 30%;"></div>
          <div class="h-full bg-slate-700" style="width: 10%;"></div>
          <div class="h-full bg-emerald-500" style="width: 20%;"></div>
        </div>
        <div class="flex justify-between text-[9px] text-emerald-400 mt-1">
          <span>[Methods Drafting]</span>
          <span>[Pause: Consult Soil Log]</span>
          <span>[Results &amp; ANOVA Synthesis]</span>
          <span>[Calculate Base Saturation]</span>
          <span>[Discussion &amp; Lit Synthesis]</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
        <div class="flex items-center gap-1.5 text-emerald-200">
          <span>✓</span> Variable velocity (30–85 WPM) with natural burstiness and formulation pauses
        </div>
        <div class="flex items-center gap-1.5 text-emerald-200">
          <span>✓</span> 180+ Backspaces, unit revisions (e.g. corrected &ldquo;ppm&rdquo; to &ldquo;mg/L&rdquo;), and sentence restructuring
        </div>
      </div>
    </div>

    <div class="rounded-xl bg-slate-800/90 border border-red-500/50 p-4">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span class="text-red-300 font-bold text-xs">SCENARIO B: AI-HALLUCINATED REPORT BULK PASTE (1,800 Words in 1.4 Seconds)</span>
        <span class="text-[10px] bg-red-950 text-red-300 px-2 py-0.5 rounded border border-red-500/40">Synthetic Insertion</span>
      </div>

      <div class="my-3 p-2 bg-slate-900 rounded-lg border border-slate-700">
        <div class="flex justify-between text-[10px] text-slate-400 mb-1">
          <span>00:00</span>
          <span>00:15</span>
          <span>00:18</span>
          <span>00:45</span>
        </div>
        <div class="h-4 w-full bg-slate-800 rounded flex overflow-hidden border border-slate-700">
          <div class="h-full bg-slate-800" style="width: 40%;"></div>
          <div class="h-full bg-red-500" style="width: 25%;"></div>
          <div class="h-full bg-slate-800" style="width: 35%;"></div>
        </div>
        <div class="flex justify-between text-[9px] text-red-400 mt-1">
          <span>[Blank Document]</span>
          <span>[PASTE: Entire 1,800-Word Report Inserted in 1.4s]</span>
          <span>[Fixes Title Font &amp; Submits]</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
        <div class="flex items-center gap-1.5 text-red-200">
          <span>✗</span> Zero typographic backspaces or organic section assembly flow
        </div>
        <div class="flex items-center gap-1.5 text-amber-200">
          <span>⚠️</span> External Paste Inspector captures full LLM prompt and confabulated circular codes
        </div>
      </div>
    </div>
  </div>
</div>

<h3>Step 4: External Paste Inspection &amp; Clipboard Provenance</h3>

<p>Checkmark’s External Paste Inspector captures every text snippet pasted into the document from outside sources, preserving the complete original clipboard content even if the student subsequently edits, rewrites, or deletes the pasted text.</p>

<div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="rounded-xl border border-emerald-500/30 bg-card p-4 shadow-sm space-y-1.5">
    <div class="font-bold text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
      1. Legitimate Data Paste
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Small snippets (10–50 characters) containing raw numerical columns from Google Sheets, spectrophotometer model numbers, or direct quoted APA definitions.
    </p>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-card p-4 shadow-sm space-y-1.5">
    <div class="font-bold text-xs text-teal-600 dark:text-teal-400 uppercase tracking-wider">
      2. Legitimate Citation Paste
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Formatted bibliographic entries pasted directly from university library databases or citation managers (e.g., Zotero, Purdue OWL).
    </p>
  </div>

  <div class="rounded-xl border border-red-500/30 bg-card p-4 shadow-sm space-y-1.5">
    <div class="font-bold text-xs text-red-600 dark:text-red-400 uppercase tracking-wider">
      3. Unauthorized AI Generation
    </div>
    <p class="text-xs text-muted-foreground m-0">
      Large blocks (500–2,500 words) containing full sections, markdown headers (###), bulleted conclusions, and confabulated extension citations pasted in a single timestamped event.
    </p>
  </div>
</div>

<h3>Step 5: Conducting Supportive Restorative Agriscience Research Debriefs</h3>

<p>When an audit reveals confabulated citations, impossible soil chemistry figures, or bulk external paste events, the agriculture teacher’s response must remain pedagogical, restorative, and supportive. The philosophy of Checkmark is <strong>&ldquo;Stop guessing, start trusting.&rdquo;</strong> Academic integrity tools should provide transparent, defensible evidence (&ldquo;receipts&rdquo;) to foster fair conversations and student growth—not arbitrary, punitive black-box scores.</p>

<div class="my-6 rounded-xl border border-border bg-muted/40 p-5 text-xs text-muted-foreground space-y-2">
  <div class="font-bold text-foreground text-sm">Restorative Agriscience Research Conference Protocol:</div>
  <div class="space-y-1">
    <div><strong>1. Open with Objective Telemetry:</strong> Open Checkmark’s Essay Playback™ timeline alongside the student. <em>&ldquo;Let’s look through your drafting session and discuss how you developed your literature review and data synthesis.&rdquo;</em></div>
    <div><strong>2. Student-Led Disciplinary Walkthrough:</strong> Ask the student to explain the chemical or biological mechanism: <em>&ldquo;Walk me through the cation-exchange calculation in Table 3. How did you derive this base saturation percentage from your raw spectrophotometer readings?&rdquo;</em></div>
    <div><strong>3. Collaborative Source Audit:</strong> Guide the student to live-verify cited extension publications: <em>&ldquo;Let's look up this Purdue Extension bulletin together on the university bookstore catalog to read the full field study.&rdquo;</em></div>
    <div><strong>4. Constructive Remediation Plan:</strong> Differentiate between unauthorized AI ghostwriting and authorized digital tools. Establish a clear restorative timeline: allow the student to replicate bench measurements, recalculate statistics from verified logs, and redraft under direct adviser mentorship before contest entry.</div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>6. How Checkmark Plagiarism Powers High School Agriscience Advisers &amp; Judging Committees</h2>

<p>Checkmark Plagiarism provides a purpose-built academic integrity and rubric evaluation suite engineered specifically for secondary Career and Technical Education environments.</p>

<div class="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div class="text-center font-bold text-emerald-400 text-sm tracking-wider uppercase mb-6 pb-3 border-b border-slate-800">
    CHECKMARK PLAGIARISM INTEGRATED AGRISCIENCE SUITE
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="rounded-xl border border-emerald-500/40 bg-slate-800/90 p-4 space-y-1.5">
      <div class="font-bold text-emerald-300 flex items-center gap-2">
        <span>🎚️</span> Passage-Level AI Sliders
      </div>
      <div class="text-[11px] text-slate-300">Underlines specific suspicious passages within the report with calibrated human-vs-AI confidence sliders rather than assigning an opaque whole-document percentage score.</div>
    </div>

    <div class="rounded-xl border border-teal-500/40 bg-slate-800/90 p-4 space-y-1.5">
      <div class="font-bold text-teal-300 flex items-center gap-2">
        <span>🎬</span> Patent-Pending Essay Playback™
      </div>
      <div class="text-[11px] text-slate-300">Reconstructs the complete writing process keystroke-by-keystroke at 1x to 8x playback speed, visualizing drafting velocity, data entry pauses, deletions, and sentence restructuring.</div>
    </div>

    <div class="rounded-xl border border-indigo-500/40 bg-slate-800/90 p-4 space-y-1.5">
      <div class="font-bold text-indigo-300 flex items-center gap-2">
        <span>📋</span> External Paste Inspector
      </div>
      <div class="text-[11px] text-slate-300">Timestamped capture of all clipboard paste events with full text preservation, complete with a &ldquo;jump-to-playback&rdquo; button to verify original source context.</div>
    </div>

    <div class="rounded-xl border border-blue-500/40 bg-slate-800/90 p-4 space-y-1.5">
      <div class="font-bold text-blue-300 flex items-center gap-2">
        <span>👥</span> Chapter &amp; Cohort Peer Match
      </div>
      <div class="text-[11px] text-slate-300">Detects uncredited text sharing, identical data tables, and duplicate experimental datasets across class sections, school cohorts, and regional FFA chapter repositories.</div>
    </div>

    <div class="rounded-xl border border-amber-500/40 bg-slate-800/90 p-4 space-y-1.5">
      <div class="font-bold text-amber-300 flex items-center gap-2">
        <span>⚡</span> Quote-Anchored Rubric Autograding
      </div>
      <div class="text-[11px] text-slate-300">Autogrades first-draft reports against official National FFA Agriscience scorecards, generating criterion scores and quote-anchored feedback that syncs directly to LMS.</div>
    </div>

    <div class="rounded-xl border border-purple-500/40 bg-slate-800/90 p-4 space-y-1.5">
      <div class="font-bold text-purple-300 flex items-center gap-2">
        <span>🔒</span> Enterprise Privacy &amp; Zero-Model Training
      </div>
      <div class="text-[11px] text-slate-300">100% FERPA and COPPA compliant; zero student data retention for AI model training; secure cloud infrastructure protecting student intellectual property.</div>
    </div>
  </div>
</div>

<h3>LMS Integration Workflow: Canvas LMS, Agilix Buzz, and Google Classroom</h3>

<p>Whether an FFA adviser is grading 150 introductory agriscience semester reports or screening state fair submissions, Checkmark embeds directly into secondary LMS workflows via LTI 1.3 Advantage.</p>

<div class="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-6 shadow-xl font-mono text-xs">
  <div class="text-center font-bold text-emerald-400 text-sm tracking-wider uppercase mb-6 pb-3 border-b border-slate-800">
    CHECKMARK LMS INTEGRATION ARCHITECTURE (LTI 1.3 / ADVANTAGE)
  </div>

  <div class="space-y-4 max-w-3xl mx-auto">
    <div class="rounded-xl bg-slate-800 p-4 border border-teal-500/40">
      <div class="font-bold text-teal-300 text-xs mb-1">1. HIGH SCHOOL LMS ASSIGNMENT PORTAL</div>
      <div class="text-[11px] text-slate-300">Student submits written Agriscience Fair report (.docx or Google Doc) via Canvas SpeedGrader, Agilix Buzz, or Google Classroom.</div>
    </div>

    <div class="flex justify-center text-slate-500 text-xs">&darr; Automated LTI 1.3 Trigger</div>

    <div class="rounded-xl bg-slate-800 p-4 border border-emerald-500/40">
      <div class="font-bold text-emerald-300 text-xs mb-1">2. CHECKMARK MULTI-DIMENSIONAL AUDIT PIPELINE</div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; Simultaneous passage-level AI detection and live Land-Grant source matching.</div>
        <div>&bull; Background Essay Playback™ keystroke dynamics &amp; paste telemetry rendering.</div>
        <div>&bull; Rubric autograder maps draft prose to National FFA Agriscience scoring criteria.</div>
      </div>
    </div>

    <div class="flex justify-center text-slate-500 text-xs">&darr; Teacher-Controlled Evaluation</div>

    <div class="rounded-xl bg-slate-800 p-4 border border-indigo-500/40">
      <div class="font-bold text-indigo-300 text-xs mb-1">3. TEACHER-CONTROLLED SPEEDGRADER / BUZZ MODAL</div>
      <div class="text-[11px] text-slate-300 space-y-1">
        <div>&bull; Adviser reviews AI confidence sliders, scrubbable playback, and quote citations.</div>
        <div>&bull; Adviser edits, adjusts, or approves rubric score suggestions.</div>
        <div>&bull; 1-Click Direct Grade Passback pushes scores into official SIS gradebook.</div>
      </div>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>7. Real High School Agriscience Case Scenarios</h2>

<div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="rounded-xl border border-emerald-500/30 bg-card p-5 shadow-sm space-y-3">
    <div class="flex items-center justify-between pb-2 border-b border-border">
      <span class="font-bold text-sm text-foreground flex items-center gap-1.5">
        <span>🌱</span> Division 5 (11th Grade)
      </span>
      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
        Plant Systems
      </span>
    </div>
    <div class="text-xs space-y-2 text-muted-foreground">
      <p class="m-0"><strong>Topic:</strong> Pyrolyzed oak biochar mitigating soil nitrate leaching in sandy loam soils.</p>
      <p class="m-0"><strong>Submission:</strong> 14-page report citing 7 Texas A&amp;M AgriLife and USDA-ARS bulletins.</p>
      <div class="rounded-lg bg-muted/60 p-2.5 border border-border text-[11px] text-foreground space-y-1">
        <div class="font-semibold text-emerald-600 dark:text-emerald-400">🔍 Checkmark Audit:</div>
        <div>1. Source matcher found 3 Land-Grant circulars had fake bulletin numbers.</div>
        <div>2. Essay Playback™ revealed a 1,450-word single paste at 11:42 PM.</div>
      </div>
      <p class="m-0 text-foreground font-medium"><strong>Resolution:</strong> Student admitted using LLM after aphids killed greenhouse plants. Adviser guided student to re-run column leaching trials with authentic controls.</p>
    </div>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-card p-5 shadow-sm space-y-3">
    <div class="flex items-center justify-between pb-2 border-b border-border">
      <span class="font-bold text-sm text-foreground flex items-center gap-1.5">
        <span>💧</span> Division 3 (10th Grade)
      </span>
      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
        Environmental
      </span>
    </div>
    <div class="text-xs space-y-2 text-muted-foreground">
      <p class="m-0"><strong>Topic:</strong> Macroinvertebrate family biotic index (FBI) in agricultural runoff streams.</p>
      <p class="m-0"><strong>The False Positive:</strong> Generic detector flagged paper as &ldquo;89% AI&rdquo; due to soil taxonomy (<em>Typic Udifluvents</em>) and EPA protocols.</p>
      <div class="rounded-lg bg-muted/60 p-2.5 border border-border text-[11px] text-foreground space-y-1">
        <div class="font-semibold text-teal-600 dark:text-teal-400">🛡️ Checkmark Exoneration:</div>
        <div>1. Essay Playback™ proved 6.5 hours of active drafting across 4 days.</div>
        <div>2. 340 backspaces and natural pauses during water chemistry calculations.</div>
      </div>
      <p class="m-0 text-foreground font-medium"><strong>Resolution:</strong> Writing telemetry completely exonerated student; paper cleared for State FFA Agriscience Fair entry.</p>
    </div>
  </div>

  <div class="rounded-xl border border-amber-500/30 bg-card p-5 shadow-sm space-y-3">
    <div class="flex items-center justify-between pb-2 border-b border-border">
      <span class="font-bold text-sm text-foreground flex items-center gap-1.5">
        <span>🐔</span> Division 6 (12th Team)
      </span>
      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
        Animal Systems
      </span>
    </div>
    <div class="text-xs space-y-2 text-muted-foreground">
      <p class="m-0"><strong>Topic:</strong> Black soldier fly larvae meal vs. soybean meal on broiler chick feed conversion ratios.</p>
      <p class="m-0"><strong>Submission:</strong> Significant FCR (p = 0.0021) and uniform weight gains across 40 birds.</p>
      <div class="rounded-lg bg-muted/60 p-2.5 border border-border text-[11px] text-foreground space-y-1">
        <div class="font-semibold text-amber-600 dark:text-amber-400">🔍 Checkmark Audit:</div>
        <div>1. Raw spreadsheet showed impossible standard deviation σ = 0.02g.</div>
        <div>2. Paste Inspector captured external AI-prompted ANOVA results table.</div>
      </div>
      <p class="m-0 text-foreground font-medium"><strong>Resolution:</strong> Students admitted missing weighing days 14–21 during basketball tournament. Adviser coached team to report data gaps as limitations and recalculate on verified dates.</p>
    </div>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>8. Frequently Asked Questions (FAQs) for FFA Advisers, CTE Leaders, and Agriscience Judges</h2>

<div class="my-8 space-y-4">
  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-semibold text-foreground m-0 mb-2">
      1. How does National FFA Rule 10 define the boundary between allowed grammar tools and prohibited generative AI?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Under National FFA Board Policy, basic assistive tools (such as spell-checkers or standard grammar polishers) are permitted. However, using generative LLMs to compose research narrative, invent experimental datasets, or hallucinate citations constitutes authorship fraud and data falsification under Rule 10, resulting in disqualification from regional, state, and national competition.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-semibold text-foreground m-0 mb-2">
      2. Why do generic AI detectors flag legitimate agricultural taxonomy as AI-generated?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Generic detectors rely on linguistic perplexity and burstiness. Highly standardized agronomic phrases (e.g., <em>Bradyrhizobium japonicum</em>, <em>cation-exchange capacity</em>, <em>Mehlich-3 extraction</em>) are statistically formulaic, causing generic tools to falsely brand authentic scientific writing as machine-generated. Checkmark uses calibrated passage-level confidence sliders paired with Essay Playback™ to eliminate false accusations.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-semibold text-foreground m-0 mb-2">
      3. Can Essay Playback™ audit collaborative team projects (Divisions 2, 4, and 6)?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Yes. Essay Playback™ color-codes and separates keystroke telemetry by individual student Google or LMS accounts, allowing advisers and judges to verify that both team members contributed equitably to the experimental narrative, data synthesis, and literature review.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-semibold text-foreground m-0 mb-2">
      4. How does Checkmark verify Land-Grant Extension publications?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Checkmark's Plagiarism Breakdown engine cross-references billions of live web pages, university repositories (e.g., Texas A&amp;M AgriLife, Purdue, Iowa State, UC ANR, UF/IFAS), and DOI registries, providing side-by-side quote viewers with active hyperlinks for instant verification.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-semibold text-foreground m-0 mb-2">
      5. Does Checkmark store student agriscience reports to train public AI models?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      <strong>Absolutely not.</strong> Checkmark enforces a strict Zero-Model Training policy. Student agriscience reports remain 100% private, FERPA/COPPA compliant, and are never used to train public or proprietary LLMs, safeguarding student intellectual property and proprietary agricultural research.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 class="text-sm font-semibold text-foreground m-0 mb-2">
      6. How does quote-anchored rubric autograding help FFA advisers grade heavy stacks of agriscience reports?
    </h3>
    <p class="text-xs text-muted-foreground m-0 leading-relaxed">
      Checkmark autogrades first-draft submissions against custom rubrics mapped directly to official National FFA Agriscience Fair scorecards. It generates criterion scores anchored to specific quotes in the student report, which advisers can review, adjust, and sync directly to Canvas, Agilix Buzz, or Google Classroom gradebooks in one click.
    </p>
  </div>
</div>

<hr class="my-8 border-border" />

<h2>Conclusion: Fostering Authentic Inquiry and Scientific Leadership in Agricultural Education</h2>

<p>Agricultural education has always been rooted in real-world, hands-on experiential learning—from the greenhouse bench and the soil testing lab to the livestock barn and the agricultural mechanics shop. The National FFA Agriscience Fair serves as a premier pipeline connecting high school students to high-demand careers in agronomy, veterinary medicine, agricultural engineering, and environmental resource management.</p>

<p>By replacing opaque, punitive black-box AI detectors with <strong>Checkmark Plagiarism's transparent evidentiary ecosystem</strong>—combining passage-level AI confidence sliders, side-by-side Land-Grant source proof, patent-pending <a href="/services/writing-process">Essay Playback™ writing process telemetry</a>, and quote-anchored rubric autograding—agriculture teachers and FFA advisers can stop guessing and start trusting. With defensible process receipts in hand, educators can uphold National FFA Rule 10 research integrity, protect honest students from false accusations, and empower the next generation of agricultural leaders to conduct authentic, impactful scientific inquiry.</p>

<div class="my-8 rounded-xl border border-border bg-muted/40 p-5 text-xs text-muted-foreground space-y-1.5">
  <div class="font-bold text-foreground mb-1">Key Disciplinary, Technical &amp; Pedagogical Standards Referenced:</div>
  <div>&bull; <strong>National FFA Organization:</strong> National FFA Agriscience Fair Official Handbook &amp; Rule 10 (Scientific Integrity Policy)</div>
  <div>&bull; <strong>Career Cluster Standards:</strong> National Agriculture, Food and Natural Resources (AFNR) Career Cluster Content Standards (Plant Systems, Environmental Services, Animal Systems, Food Products, Power &amp; Technical Systems, Social Science)</div>
  <div>&bull; <strong>Federal CTE Legislation:</strong> Strengthening Career and Technical Education for the 21st Century Act (Perkins V - P.L. 115-224)</div>
  <div>&bull; <strong>Land-Grant Cooperative Extension:</strong> USDA National Institute of Food and Agriculture (NIFA), PubAg Catalog, and University Extension Publishing Standards (TAMU, Purdue, ISU, UC ANR, UF/IFAS)</div>
  <div>&bull; <strong>EdTech Interoperability:</strong> 1EdTech LTI 1.3 Advantage &amp; Assignment and Grade Services (AGS) Specification</div>
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
      currentSlug="2026/8/how-high-school-ffa-advisers-can-audit-agriscience-fair-research-reports-for-hallucinated-citations-and-fabricated-soil-trial-data"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
