import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "Can AI Autograding Accurately Evaluate Inheritance Hierarchies and Polymorphic Logic Explanations in High School AP Computer Science A FRQs? | Checkmark Plagiarism",
  description: "An in-depth pedagogical and technical guide for AP Computer Science A teachers and STEM department chairs on evaluating Java inheritance hierarchies, polymorphic dynamic dispatch, and AST-backed autograding vs LLM hallucinations in Question 2 Class Design FRQs.",
  keywords: [
    "AP Computer Science A",
    "AP CSA FRQ autograding",
    "inheritance hierarchies Java",
    "polymorphism dynamic binding",
    "Question 2 Class Design",
    "AP CSA Unit 9",
    "AST Java rubric autograding",
    "keystroke replay coding",
    "Essay Playback",
    "Checkmark Plagiarism",
    "Java code grading AI",
    "Canvas SpeedGrader Java rubric"
  ],
  openGraph: {
    images: [
      "/images/services/report-grading-view.png",
      "/images/services/report-rubric-tiles.png",
      "/images/services/report-paste-evidence.png",
      "/images/services/report-source-quote.png"
    ],
  },
};

export const meta = {
  title: "Can AI Autograding Accurately Evaluate Inheritance Hierarchies and Polymorphic Logic Explanations in High School AP Computer Science A FRQs?",
  description: "An in-depth pedagogical and technical guide for AP Computer Science A teachers and STEM department chairs on evaluating Java inheritance hierarchies, polymorphic dynamic dispatch, and AST-backed autograding vs LLM hallucinations in Question 2 Class Design FRQs.",
  "opengraph-image": "/images/services/report-grading-view.png",
  date: "08-20-2026",
  readTime: "~15 min read",
  category: "Computer Science Pedagogy",
  categories: ["Computer Science Pedagogy", "AI Autograding", "Academic Integrity", "Teacher Guide", "STEM Education"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `
<!-- Executive Summary Callout Box -->
<div class="my-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 p-6 text-foreground shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
    <p class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Executive Summary &amp; Pedagogical Mandate</p>
  </div>
  <p class="text-base text-foreground leading-relaxed">
    Evaluating student code in <strong>AP Computer Science A (AP CSA)</strong>—particularly <strong>Question 2: Class Design</strong> and <strong>Unit 9: Inheritance</strong>—presents a high-stakes challenge for secondary computer science educators. Standard Large Language Model (LLM) autograders frequently suffer from <strong>syntactic and semantic hallucinations</strong>, awarding full credit to fundamentally broken Java code (such as attempting direct access to <code>private</code> superclass instance variables, omitting mandatory constructor chaining via <code>super()</code>, or fabricating non-existent Java subset methods). Conversely, basic test runners (like JUnit) crash entirely on minor syntax stumbles, assigning zero credit to valid algorithmic reasoning.
  </p>
  <p class="text-base text-foreground leading-relaxed mt-3">
    <strong>Checkmark Plagiarism</strong> resolves this grading bottleneck through <strong>Abstract Syntax Tree (AST)-Backed Java Rubric Autograding</strong> paired with <strong>patent-pending <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a> Writing Telemetry</strong>. By parsing object-oriented structures at the syntax tree level, evaluating natural language polymorphic justifications, anchoring every rubric point to exact lines of code, and capturing the complete temporal drafting lifecycle (1x–8x keystroke replay and external paste tracking), Checkmark provides AP CSA teachers with transparent, defensible grading evidence and one-click gradebook synchronization to Canvas SpeedGrader, Agilix Buzz, and Google Classroom.
  </p>
</div>

<!-- Featured Hero Visual Card -->
<div class="my-8 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
  <img 
    src="/images/services/report-grading-view.png" 
    alt="Checkmark Plagiarism AP Computer Science A Autograding Dashboard showing AST-backed rubric evaluation, Java inheritance validation, quote-anchored code feedback, and Essay Playback telemetry." 
    class="w-full h-auto object-cover"
  />
  <div class="p-4 bg-muted/40 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
    <span>Figure 1: Checkmark's AST-Backed Java Rubric Autograding Interface evaluating AP CSA Question 2 Class Design with line-anchored feedback and keystroke telemetry.</span>
    <span class="font-medium text-teal-600 dark:text-teal-400 font-mono">AP CSA Unit 9 Verified</span>
  </div>
</div>

<!-- Comparison Landscape Diagram Card -->
<div class="my-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    The AP Computer Science A Inheritance Evaluation Landscape
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="rounded-xl bg-slate-950/90 p-4 border border-rose-500/30 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="h-6 w-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs">✕</span>
          <h4 class="text-sm font-semibold text-rose-300 m-0">Traditional JUnit Sandboxes</h4>
        </div>
        <ul class="text-xs text-slate-300 space-y-1.5 pl-4 list-disc mt-2">
          <li>Rigid binary compilation (Pass or Fail)</li>
          <li>0/9 points awarded for a single missing semicolon</li>
          <li>Cannot parse incomplete or uncompilable student code</li>
          <li>Zero evaluation of written conceptual justifications</li>
          <li>No visibility into student cognitive drafting process</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-rose-400 font-mono">
        Outcome: Excessive manual regrading
      </div>
    </div>

    <div class="rounded-xl bg-slate-950/90 p-4 border border-amber-500/30 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="h-6 w-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">⚠️</span>
          <h4 class="text-sm font-semibold text-amber-300 m-0">Generic LLM Code Scorers</h4>
        </div>
        <ul class="text-xs text-slate-300 space-y-1.5 pl-4 list-disc mt-2">
          <li>Hallucinates points for fundamentally broken OOP logic</li>
          <li>Misses <code>private</code> superclass encapsulation leaks</li>
          <li>Ignores omitted <code>super(...)</code> constructor chaining</li>
          <li>Fooled by surface-level eloquent written justifications</li>
          <li>Vulnerable to prompt injection and style gaming</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-amber-400 font-mono">
        Outcome: Inaccurate inflated grades
      </div>
    </div>

    <div class="rounded-xl bg-slate-950/90 p-4 border border-teal-500/50 flex flex-col justify-between ring-1 ring-teal-500/30">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="h-6 w-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">✓</span>
          <h4 class="text-sm font-semibold text-teal-300 m-0">Checkmark AST Autograding</h4>
        </div>
        <ul class="text-xs text-slate-300 space-y-1.5 pl-4 list-disc mt-2">
          <li>Deterministic syntax-tree structural verification</li>
          <li>Strict AP Java subset encapsulation enforcement</li>
          <li>Line-anchored feedback cards for every rubric point</li>
          <li>Dual evaluation of code and dynamic binding logic</li>
          <li>1x–8x Essay Playback™ keystroke process proof</li>
        </ul>
      </div>
      <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-teal-400 font-mono">
        Outcome: Defensible, 1-click LMS sync
      </div>
    </div>
  </div>
</div>

---

<h2>1. The AP Computer Science A FRQ Architecture &amp; The Unit 9 Inheritance Imperative</h2>

<p>
  The College Board AP Computer Science A curriculum is structured around foundational object-oriented programming (OOP) principles in Java. On the AP CSA Exam, Section II consists of <strong>four 9-point Free-Response Questions (FRQs)</strong> administered over 90 minutes. Each question assesses a targeted domain of computational thinking, data structure manipulation, and software architecture:
</p>

<!-- AP CSA 4-Part FRQ Architecture Table -->
<div class="my-6 overflow-hidden rounded-xl border border-border shadow-sm">
  <div class="bg-muted px-4 py-3 border-b border-border">
    <h3 class="text-sm font-semibold text-foreground m-0">College Board AP Computer Science A: 4-Part FRQ Architecture</h3>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <thead class="bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
        <tr>
          <th class="px-4 py-3">Question Archetype</th>
          <th class="px-4 py-3">Curricular Units</th>
          <th class="px-4 py-3">Core Technical Demands</th>
          <th class="px-4 py-3">Assessment Scope</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border">
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium text-foreground">Question 1: Methods &amp; Control Structures</td>
          <td class="px-4 py-3 text-muted-foreground">Units 1–4 (Primitive Types, Using Objects, Booleans, Iteration)</td>
          <td class="px-4 py-3 text-muted-foreground">Iterative loops (<code>for</code>, <code>while</code>), mathematical logic, conditional branching (<code>if</code>/<code>else</code>), String manipulation</td>
          <td class="px-4 py-3"><span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400">Single Method Body</span></td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors bg-teal-500/5">
          <td class="px-4 py-3 font-semibold text-teal-600 dark:text-teal-400">Question 2: Class Design (Core Focus)</td>
          <td class="px-4 py-3 font-medium text-foreground">Units 5 &amp; 9 (Writing Classes, Inheritance &amp; Polymorphism)</td>
          <td class="px-4 py-3 text-foreground">Declaring private fields, multi-argument constructors, constructor chaining (<code>super(...)</code>), method overriding, accessor delegation</td>
          <td class="px-4 py-3"><span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-700 dark:text-teal-300">Complete Class Architecture</span></td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium text-foreground">Question 3: Array / ArrayList</td>
          <td class="px-4 py-3 text-muted-foreground">Units 6 &amp; 7 (1D Arrays, <code>ArrayList</code> Objects)</td>
          <td class="px-4 py-3 text-muted-foreground">Linear traversals, accumulator algorithms, object filtering, element removal/insertion without index errors</td>
          <td class="px-4 py-3"><span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400">Collection Methods</span></td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium text-foreground">Question 4: 2D Array</td>
          <td class="px-4 py-3 text-muted-foreground">Unit 8 (2D Array Grid Structures)</td>
          <td class="px-4 py-3 text-muted-foreground">Nested loop matrix traversals, row-major vs. column-major logic, coordinate boundaries, neighbor element updates</td>
          <td class="px-4 py-3"><span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400">Grid Algorithms</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h3>The Deep Pedagogical Demands of Unit 9: Inheritance &amp; Polymorphism</h3>

<p>
  While Questions 1, 3, and 4 ask students to complete targeted method bodies within pre-built classes, <strong>Question 2 (Class Design)</strong> demands that students architect an entire Java class from the ground up or extend a provided superclass. This requires synthesis of five interrelated object-oriented mechanics:
</p>

<!-- UML Class Diagram Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    AP CSA Unit 9: Canonical Superclass / Subclass Architecture
  </div>
  <div class="max-w-md mx-auto space-y-4">
    <!-- Superclass Box -->
    <div class="rounded-xl bg-slate-950 border border-slate-700 overflow-hidden shadow-md">
      <div class="bg-slate-800 px-4 py-2 text-center font-mono font-bold text-sm text-teal-300 border-b border-slate-700">
        Superclass: Pet
      </div>
      <div class="p-3 text-xs font-mono space-y-1 text-slate-300 border-b border-slate-800">
        <div><span class="text-rose-400">-</span> name: String <span class="text-slate-500">(private)</span></div>
        <div><span class="text-rose-400">-</span> age: int <span class="text-slate-500">(private)</span></div>
      </div>
      <div class="p-3 text-xs font-mono space-y-1 text-slate-300 bg-slate-950/60">
        <div><span class="text-emerald-400">+</span> Pet(name: String, age: int)</div>
        <div><span class="text-emerald-400">+</span> getName(): String</div>
        <div><span class="text-emerald-400">+</span> speak(): String</div>
      </div>
    </div>

    <!-- Extends Arrow Indicator -->
    <div class="flex flex-col items-center justify-center">
      <div class="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 bg-slate-800/80 px-3 py-1 rounded-full border border-teal-500/30">
        ▲ extends (Inheritance)
      </div>
      <div class="w-0.5 h-6 bg-teal-500/50"></div>
    </div>

    <!-- Subclass Box -->
    <div class="rounded-xl bg-slate-950 border border-teal-500/50 overflow-hidden shadow-lg ring-1 ring-teal-500/30">
      <div class="bg-teal-950/60 px-4 py-2 text-center font-mono font-bold text-sm text-teal-300 border-b border-teal-500/30">
        Subclass: Dog
      </div>
      <div class="p-3 text-xs font-mono space-y-1 text-slate-300 border-b border-slate-800">
        <div><span class="text-rose-400">-</span> breed: String <span class="text-teal-400 font-semibold">(NEW instance variable only)</span></div>
      </div>
      <div class="p-3 text-xs font-mono space-y-1 text-slate-300 bg-slate-950/60">
        <div><span class="text-emerald-400">+</span> Dog(name: String, age: int, breed: String) <span class="text-slate-400">&rarr; super(name, age)</span></div>
        <div><span class="text-emerald-400">+</span> speak(): String <span class="text-amber-400 font-semibold">(Overridden method)</span></div>
        <div><span class="text-emerald-400">+</span> fetch(): void <span class="text-slate-400">(Subclass-specific method)</span></div>
      </div>
    </div>
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="rounded-xl border border-border bg-card p-5">
    <h4 class="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
      <span class="h-2 w-2 rounded-full bg-teal-500"></span>
      1. Superclass vs. Subclass Hierarchy (<code>extends</code>)
    </h4>
    <p class="text-sm text-muted-foreground leading-relaxed">
      Students must formulate the class header (<code>public class Dog extends Pet</code>) to inherit public and protected behaviors from the superclass while maintaining proper type hierarchy contracts.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h4 class="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
      <span class="h-2 w-2 rounded-full bg-teal-500"></span>
      2. Mandatory Constructor Chaining (<code>super</code>)
    </h4>
    <p class="text-sm text-muted-foreground leading-relaxed">
      Invoking <code>super(name, age);</code> as the <strong>very first statement</strong> in the subclass constructor is required to initialize inherited private state before local fields (<code>this.breed = breed;</code>) are assigned.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h4 class="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
      <span class="h-2 w-2 rounded-full bg-teal-500"></span>
      3. Overriding vs. Accidental Overloading
    </h4>
    <p class="text-sm text-muted-foreground leading-relaxed">
      Students must match identical method signatures (<code>public String speak()</code>) to substitute polymorphic behavior, avoiding subtle accidental overloads caused by parameter type mismatches.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h4 class="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
      <span class="h-2 w-2 rounded-full bg-teal-500"></span>
      4. Strict Encapsulation &amp; Private Access
    </h4>
    <p class="text-sm text-muted-foreground leading-relaxed">
      Under the AP Java Subset, all instance variables are <code>private</code>. Students must never attempt direct access (<code>super.name</code> or <code>this.name</code>), but must instead invoke inherited public accessors (<code>super.getName()</code>).
    </p>
  </div>
</div>

---

<h2>2. The High School AP CSA Grading Bottleneck &amp; The Fatal Flaws of Generic LLMs</h2>

<p>
  High school AP Computer Science A instructors face an acute grading workload. A teacher managing 90 to 140 students across 3 to 5 sections must evaluate extensive multi-part Java code files. Hand-grading a single 9-point FRQ set for 100 students takes between <strong>15 and 22 hours</strong>, requiring teachers to trace variable scope, check constructor chaining, verify method signatures, and evaluate written conceptual justifications.
</p>

<p>
  To alleviate this burden, many instructors have experimented with generic Large Language Model (LLM) autograders (such as unconstrained GPT-4 prompts or generic chatbot wrappers). However, generic LLMs suffer from <strong>five catastrophic failure modes</strong> when grading AP CSA inheritance FRQs:
</p>

<!-- 5 Fatal Hallucinations Table -->
<div class="my-6 overflow-hidden rounded-xl border border-border shadow-sm">
  <div class="bg-muted px-4 py-3 border-b border-border">
    <h3 class="text-sm font-semibold text-foreground m-0">The 5 Fatal Hallucinations of Generic LLM Code Graders in AP CSA</h3>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <thead class="bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
        <tr>
          <th class="px-4 py-3">Hallucination Type</th>
          <th class="px-4 py-3">Student Code Flaw</th>
          <th class="px-4 py-3">Generic LLM Error</th>
          <th class="px-4 py-3">Official AP Reader Rule</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border">
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-semibold text-rose-600 dark:text-rose-400">1. Encapsulation Blindness</td>
          <td class="px-4 py-3 text-muted-foreground">Directly accesses <code>super.name</code> instead of calling <code>super.getName()</code>.</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400 font-medium">Awards 1/1 pt. Assumes field exists in hierarchy.</td>
          <td class="px-4 py-3 text-foreground font-medium"><strong>-1 pt Deduction:</strong> Private variables cannot be accessed directly in subclasses.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-semibold text-rose-600 dark:text-rose-400">2. Constructor Chaining Omission</td>
          <td class="px-4 py-3 text-muted-foreground">Subclass constructor initializes only new fields, omitting <code>super(...)</code> entirely.</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400 font-medium">Awards 1/1 pt. Assumes super constructor runs automatically.</td>
          <td class="px-4 py-3 text-foreground font-medium"><strong>-1 pt Deduction:</strong> Superclass lacks zero-arg constructor; explicit chaining is mandatory.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-semibold text-rose-600 dark:text-rose-400">3. Overriding Signature Confusion</td>
          <td class="px-4 py-3 text-muted-foreground">Method header alters parameter type (<code>double</code> to <code>int</code>), creating an overload.</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400 font-medium">Awards 1/1 pt. Confuses accidental overload with valid override.</td>
          <td class="px-4 py-3 text-foreground font-medium"><strong>-1 pt Deduction:</strong> Overriding requires exact signature match in Java.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-semibold text-rose-600 dark:text-rose-400">4. Hallucinated Subset Methods</td>
          <td class="px-4 py-3 text-muted-foreground">Student calls fabricated helper methods (e.g., <code>list.sortAscending()</code>).</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400 font-medium">Awards full credit. Assumes utility library is imported.</td>
          <td class="px-4 py-3 text-foreground font-medium"><strong>-1 pt Deduction:</strong> Only standard AP Java subset methods are permitted.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-semibold text-rose-600 dark:text-rose-400">5. Eloquence Bias in Explanations</td>
          <td class="px-4 py-3 text-muted-foreground">Student writes eloquent but inverted text: <em>"Compiler checks memory objects at compile-time."</em></td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400 font-medium">Awards full marks for fluent English prose.</td>
          <td class="px-4 py-3 text-foreground font-medium"><strong>0 pts Awarded:</strong> Factual inaccuracy; dynamic dispatch occurs at runtime in JVM.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="my-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-5">
  <h4 class="text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">Why Generic LLMs Fail at Java Inheritance Grading</h4>
  <p class="text-sm text-foreground leading-relaxed">
    Generic LLMs operate by predicting the most statistically probable next tokens based on billions of lines of uncurated open-source Java code. In commercial Java software, developers routinely use <code>protected</code> or package-private visibility, making expressions like <code>super.variableName</code> appear statistically plausible. However, the <strong>College Board AP Java Subset strictly mandates that all instance variables are <code>private</code></strong>. An ungrounded LLM cannot enforce curricular subset boundaries without deterministic syntax-tree constraints.
  </p>
</div>

---

<h2>3. The Autograding &amp; Grading Efficiency Dilemma: Comparing Four Evaluation Approaches</h2>

<p>
  To establish accurate, scalable assessment across secondary STEM departments, schools must evaluate their options across syntax verification, partial credit attribution, and integrity protection:
</p>

<!-- Evaluation Matrix Table -->
<div class="my-6 overflow-hidden rounded-xl border border-border shadow-sm">
  <div class="bg-muted px-4 py-3 border-b border-border">
    <h3 class="text-sm font-semibold text-foreground m-0">Evaluation Matrix: AP Computer Science A Code Assessment Methods</h3>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <thead class="bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
        <tr>
          <th class="px-4 py-3">Capability / Dimension</th>
          <th class="px-4 py-3">JUnit / Sandbox</th>
          <th class="px-4 py-3">Generic LLM Scorers</th>
          <th class="px-4 py-3">Keyword / Regex</th>
          <th class="px-4 py-3 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold">Checkmark AST + Replay</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border">
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium text-foreground">Syntax Tree (AST) Validation</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ No (Binary execution)</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ No (Probabilistic)</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ No (Regex string)</td>
          <td class="px-4 py-3 bg-teal-500/5 font-semibold text-teal-600 dark:text-teal-400">✓ Yes (Full AST parse tree)</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium text-foreground">Partial Credit for Broken Code</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ No (Crashes on typos)</td>
          <td class="px-4 py-3 text-amber-600 dark:text-amber-400">⚠️ Inconsistent / Hallucinates</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ No (Brittle scoring)</td>
          <td class="px-4 py-3 bg-teal-500/5 font-semibold text-teal-600 dark:text-teal-400">✓ Yes (Canonical 9-pt AP Rubric)</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium text-foreground">AP Subset Encapsulation Audit</td>
          <td class="px-4 py-3 text-amber-600 dark:text-amber-400">⚠️ Only if tests compile</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ Frequently misses leaks</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ Easily bypassed</td>
          <td class="px-4 py-3 bg-teal-500/5 font-semibold text-teal-600 dark:text-teal-400">✓ Strict AST modifier audit</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium text-foreground">Constructor Chaining Inspection</td>
          <td class="px-4 py-3 text-amber-600 dark:text-amber-400">⚠️ Only on runtime failure</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ Assumes implicit call</td>
          <td class="px-4 py-3 text-amber-600 dark:text-amber-400">⚠️ Fragile regex match</td>
          <td class="px-4 py-3 bg-teal-500/5 font-semibold text-teal-600 dark:text-teal-400">✓ Syntax-node first-statement check</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium text-foreground">Written Dynamic Binding NLP</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ Impossible</td>
          <td class="px-4 py-3 text-amber-600 dark:text-amber-400">⚠️ Superficial text score</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ Impossible</td>
          <td class="px-4 py-3 bg-teal-500/5 font-semibold text-teal-600 dark:text-teal-400">✓ Anchored semantic NLP rubric</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium text-foreground">Keystroke Process &amp; Paste Audit</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ None</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ None</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ None</td>
          <td class="px-4 py-3 bg-teal-500/5 font-semibold text-teal-600 dark:text-teal-400">✓ 1x–8x Essay Playback™ replay</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium text-foreground">1-Click LMS Gradebook Passback</td>
          <td class="px-4 py-3 text-amber-600 dark:text-amber-400">⚠️ Complex custom plugin</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ Manual copy-paste</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400">✕ None</td>
          <td class="px-4 py-3 bg-teal-500/5 font-semibold text-teal-600 dark:text-teal-400">✓ Direct Canvas, Buzz, Google Cl.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h3>The Power of Abstract Syntax Tree (AST) Parsing</h3>

<p>
  Checkmark replaces ungrounded probabilistic guessing with <strong>Abstract Syntax Tree (AST) deterministic parsing</strong>. When a student submits Java code, Checkmark generates a structural tree representation of every class declaration, variable modifier, constructor call, and method invocation:
</p>

<!-- AST Syntax Tree Visualization Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl font-mono text-xs">
  <div class="text-teal-400 font-bold text-sm tracking-wider uppercase mb-3 pb-2 border-b border-slate-800 font-sans flex items-center justify-between">
    <span>Abstract Syntax Tree (AST) Node Hierarchy</span>
    <span class="text-[11px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-mono">AudioBook.java Parse Tree</span>
  </div>
  <div class="space-y-1.5 text-slate-300 leading-relaxed overflow-x-auto">
    <div><span class="text-teal-400">[CompilationUnit]</span></div>
    <div class="pl-4">└── <span class="text-emerald-400">[ClassDeclaration: AudioBook]</span> (extends: Book)</div>
    <div class="pl-8">├── <span class="text-amber-300">[FieldDeclaration: private int lengthMinutes]</span> <span class="text-teal-400 font-sans text-[11px]">← AST verifies new field &amp; private modifier</span></div>
    <div class="pl-8">├── <span class="text-sky-300">[ConstructorDeclaration: AudioBook(String, String, double, int)]</span></div>
    <div class="pl-12">├── <span class="text-purple-300">[ExplicitConstructorInvocation: super(title, author, price)]</span> <span class="text-emerald-400 font-sans text-[11px]">← AST confirms 1st statement chaining</span></div>
    <div class="pl-12">└── <span class="text-slate-400">[AssignmentExpression: this.lengthMinutes = lengthMinutes]</span></div>
    <div class="pl-8">└── <span class="text-sky-300">[MethodDeclaration: public String toString()]</span></div>
    <div class="pl-12">└── <span class="text-purple-300">[MethodInvocation: super.toString()]</span> <span class="text-emerald-400 font-sans text-[11px]">← AST validates accessor call instead of direct field access</span></div>
  </div>
</div>

<p>
  By mapping AST nodes directly against official College Board scoring guidelines, Checkmark verifies structural compliance with 100% precision while remaining resilient to variable renaming, whitespace variations, and non-fatal formatting differences.
</p>

---

<h2>4. Step-by-Step 5-Criterion Java Evaluation Protocol for AP CSA Unit 9 FRQs</h2>

<p>
  To ensure defensible, standardized grading across high school computer science departments, Checkmark structures its autograding engine around the <strong>5-Criterion Canonical AP CSA Class Design Protocol</strong>:
</p>

<!-- 5-Criterion Protocol Cards -->
<div class="space-y-4 my-6">
  <div class="rounded-xl border border-teal-500/30 bg-card p-5 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-slate-950 font-bold text-xs">1</span>
        <h4 class="text-base font-semibold text-foreground m-0">Criterion 1: Class Header &amp; Inheritance Hierarchy</h4>
      </div>
      <span class="text-xs font-mono font-medium text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md">AST: ClassDeclaration.getExtendsList()</span>
    </div>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      Verifies <code>public class Subclass extends Superclass</code> syntax. Confirms that the subclass extends the designated superclass and implements required interfaces without malformed tokens.
    </p>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-card p-5 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-slate-950 font-bold text-xs">2</span>
        <h4 class="text-base font-semibold text-foreground m-0">Criterion 2: Instance Variables &amp; Private Encapsulation</h4>
      </div>
      <span class="text-xs font-mono font-medium text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md">AST: FieldDeclaration.getModifiers()</span>
    </div>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      Audits all declared fields. Ensures student declares <strong>only new subclass instance variables</strong> with explicit <code>private</code> visibility and does NOT redeclare inherited superclass variables.
    </p>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-card p-5 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-slate-950 font-bold text-xs">3</span>
        <h4 class="text-base font-semibold text-foreground m-0">Criterion 3: Constructor Chaining &amp; <code>super(...)</code> Delegation</h4>
      </div>
      <span class="text-xs font-mono font-medium text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md">AST: ExplicitConstructorInvocation[0]</span>
    </div>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      Verifies that <code>super(...)</code> is the <strong>very first statement</strong> executed in the subclass constructor with correct matching arguments, followed by proper initialization of new instance variables.
    </p>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-card p-5 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-slate-950 font-bold text-xs">4</span>
        <h4 class="text-base font-semibold text-foreground m-0">Criterion 4: Method Overriding &amp; Signature Exactness</h4>
      </div>
      <span class="text-xs font-mono font-medium text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md">AST: MethodDeclaration.getSignature()</span>
    </div>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      Matches method identifier, return type, visibility modifier (<code>public</code>), and formal parameters against the superclass definition to guarantee valid overriding rather than unintentional overloading.
    </p>
  </div>

  <div class="rounded-xl border border-teal-500/30 bg-card p-5 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-slate-950 font-bold text-xs">5</span>
        <h4 class="text-base font-semibold text-foreground m-0">Criterion 5: Polymorphic Execution &amp; Accessor Delegation</h4>
      </div>
      <span class="text-xs font-mono font-medium text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md">AST: MethodInvocation / ReturnStatement</span>
    </div>
    <p class="text-sm text-muted-foreground leading-relaxed m-0">
      Evaluates overridden method body logic. Enforces that inherited state is retrieved via <code>super.getter()</code> methods rather than direct field references, and verifies return type correctness.
    </p>
  </div>
</div>

<h3>Canonical 9-Point AP CSA Class Design Rubric Breakdown</h3>

<!-- 9-Point Canonical Rubric Table -->
<div class="my-6 overflow-hidden rounded-xl border border-border shadow-sm">
  <div class="bg-muted px-4 py-3 border-b border-border">
    <h3 class="text-sm font-semibold text-foreground m-0">Canonical 9-Point AP Computer Science A Class Design Rubric</h3>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <thead class="bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
        <tr>
          <th class="px-4 py-3">Point #</th>
          <th class="px-4 py-3">Rubric Requirement</th>
          <th class="px-4 py-3">Score</th>
          <th class="px-4 py-3">AST / NLP Validation Engine</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border">
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400">Pt 1</td>
          <td class="px-4 py-3 text-foreground font-medium">Declares class header with correct identifier and <code>extends Superclass</code></td>
          <td class="px-4 py-3 font-mono text-muted-foreground">1 pt</td>
          <td class="px-4 py-3 text-muted-foreground">Syntax node inspection: checks <code>ClassDeclaration.getExtendsList()</code></td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400">Pt 2</td>
          <td class="px-4 py-3 text-foreground font-medium">Declares appropriate subclass instance variables with <code>private</code> access</td>
          <td class="px-4 py-3 font-mono text-muted-foreground">1 pt</td>
          <td class="px-4 py-3 text-muted-foreground">Field auditor: validates <code>private</code> modifier; flags duplicate superclass fields</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400">Pt 3</td>
          <td class="px-4 py-3 text-foreground font-medium">Declares constructor header with correct parameter types and identifier</td>
          <td class="px-4 py-3 font-mono text-muted-foreground">1 pt</td>
          <td class="px-4 py-3 text-muted-foreground">Constructor signature matcher: verifies parameters against prompt spec</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400">Pt 4</td>
          <td class="px-4 py-3 text-foreground font-medium">Correctly invokes <code>super(...)</code> constructor with matching arguments</td>
          <td class="px-4 py-3 font-mono text-muted-foreground">1 pt</td>
          <td class="px-4 py-3 text-muted-foreground">AST inspects first child statement of constructor body for <code>super</code> call</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400">Pt 5</td>
          <td class="px-4 py-3 text-foreground font-medium">Properly initializes subclass-specific instance variables</td>
          <td class="px-4 py-3 font-mono text-muted-foreground">1 pt</td>
          <td class="px-4 py-3 text-muted-foreground">Assignment auditor: validates local field initialization in constructor body</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400">Pt 6</td>
          <td class="px-4 py-3 text-foreground font-medium">Declares overridden method headers with exact visibility, name, and return types</td>
          <td class="px-4 py-3 font-mono text-muted-foreground">1 pt</td>
          <td class="px-4 py-3 text-muted-foreground">Method signature comparator: verifies identifier, return type, and params</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400">Pt 7</td>
          <td class="px-4 py-3 text-foreground font-medium">Correctly invokes superclass accessor or superclass method where required</td>
          <td class="px-4 py-3 font-mono text-muted-foreground">1 pt</td>
          <td class="px-4 py-3 text-muted-foreground">AST checks for <code>super.getter()</code> calls vs. illegal direct field access</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400">Pt 8</td>
          <td class="px-4 py-3 text-foreground font-medium">Computes and implements subclass-specific algorithmic logic correctly</td>
          <td class="px-4 py-3 font-mono text-muted-foreground">1 pt</td>
          <td class="px-4 py-3 text-muted-foreground">Logic analyzer: evaluates conditionals, arithmetic, and string formatting</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400">Pt 9</td>
          <td class="px-4 py-3 text-foreground font-medium">Returns correct data type or updates object state according to specifications</td>
          <td class="px-4 py-3 font-mono text-muted-foreground">1 pt</td>
          <td class="px-4 py-3 text-muted-foreground">Return statement validator: checks return type compatibility with method header</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

---

<h2>5. Evaluating Written Justifications: Dynamic Binding &amp; Polymorphic Logic</h2>

<p>
  In addition to writing code, AP CSA students must frequently answer conceptual written questions explaining <strong>dynamic binding, polymorphism, and compile-time vs. runtime errors</strong>.
</p>

<!-- Dynamic Binding Two-Stage Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-4 pb-2 border-b border-slate-800">
    Dynamic Binding Mechanics: Compile-Time Verification vs. Runtime Dispatch
  </div>
  
  <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center font-mono text-xs text-teal-300 mb-5">
    <code>Pet myPet = new Dog("Rover", 4, "Beagle");</code> &nbsp;|&nbsp; <code>System.out.println(myPet.speak());</code>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="rounded-xl bg-slate-950/80 p-4 border border-blue-500/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-5 w-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">1</span>
        <h4 class="text-sm font-semibold text-blue-300 m-0">Stage 1: Compile-Time Check (Compiler)</h4>
      </div>
      <ul class="text-xs text-slate-300 space-y-1.5 pl-4 list-disc mt-2">
        <li>Compiler inspects the <strong>DECLARED REFERENCE TYPE</strong> (<code>Pet</code>).</li>
        <li>Verifies whether <code>speak()</code> is declared in <code>Pet</code>.</li>
        <li>If student called <code>myPet.fetch()</code>, compiler triggers an error because <code>Pet</code> does not declare <code>fetch()</code>.</li>
      </ul>
      <div class="mt-3 text-[10px] text-blue-400 font-mono">Reference Type Rule: Determines method legality</div>
    </div>

    <div class="rounded-xl bg-slate-950/80 p-4 border border-emerald-500/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">2</span>
        <h4 class="text-sm font-semibold text-emerald-300 m-0">Stage 2: Runtime Dispatch (JVM)</h4>
      </div>
      <ul class="text-xs text-slate-300 space-y-1.5 pl-4 list-disc mt-2">
        <li>JVM inspects the <strong>ACTUAL INSTANTIATED OBJECT TYPE</strong> (<code>Dog</code>).</li>
        <li>Dynamic binding resolves to the overridden <code>Dog.speak()</code> implementation at runtime.</li>
        <li>Produces <code>"Woof!"</code> rather than generic pet behavior.</li>
      </ul>
      <div class="mt-3 text-[10px] text-emerald-400 font-mono">Actual Object Rule: Determines runtime execution</div>
    </div>
  </div>
</div>

<h3>The NLP Semantic Rubric for Written Justifications</h3>

<p>
  Generic AI tools often award full points to student explanations that sound authoritative but are technically inverted (e.g., <em>"The code runs Dog's speak because the compiler looks at the new Dog object and runs its method."</em>—which confuses compile-time checking with runtime execution).
</p>

<p>
  Checkmark uses an <strong>anchored semantic evaluation engine</strong> trained on College Board AP CSA conceptual scoring guidelines. It specifically enforces two core criteria:
</p>

<ol>
  <li><strong>Declared vs. Actual Type Distinction:</strong> Does the student acknowledge that the compiler verifies method existence in the declared class (<code>Pet</code>), while the JVM resolves the method implementation in the instantiated class (<code>Dog</code>)?</li>
  <li><strong>Accurate Cause-and-Effect for Compiler Errors:</strong> In questions involving non-existent superclass methods (e.g., calling <code>fetch()</code> on a <code>Pet</code> reference), does the student correctly identify that the error occurs at <strong>compile-time</strong> due to declared reference type boundaries, rather than at runtime?</li>
</ol>

---

<h2>6. Real High School Classroom Case Studies &amp; Code Breakdowns</h2>

<h3>Case Study 1: Question 2 Class Design — The "Encapsulation Violation &amp; Omitted Super Constructor" Trap</h3>

<p>
  <strong>The High School Context:</strong> A 10th-grade AP Computer Science A class of 32 students in a 1:1 Chromebook environment completes a Unit 9 formative assessment. The prompt asks students to create an <code>AudioBook</code> class that extends a pre-existing <code>Book</code> superclass.
</p>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6 font-mono text-xs">
  <!-- Superclass Code Block -->
  <div class="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
    <div class="bg-muted px-4 py-2 border-b border-border flex items-center justify-between font-sans">
      <span class="font-semibold text-foreground text-xs">Provided Superclass: Book.java</span>
      <span class="text-xs text-muted-foreground font-mono">Pre-existing</span>
    </div>
    <div class="p-4 bg-slate-950 text-slate-200 overflow-x-auto">
      <pre><code>public class Book {
    private String title;
    private String author;
    private double price;

    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public double getPrice() { return price; }

    public String toString() {
        return title + " by " + author + " ($" + price + ")";
    }
}</code></pre>
    </div>
  </div>

  <!-- Student Submission Code Block -->
  <div class="rounded-xl border border-rose-500/30 bg-card overflow-hidden shadow-sm">
    <div class="bg-rose-500/10 px-4 py-2 border-b border-rose-500/20 flex items-center justify-between font-sans">
      <span class="font-semibold text-rose-700 dark:text-rose-400 text-xs">Student Submission: AudioBook.java</span>
      <span class="text-xs text-rose-600 dark:text-rose-400 font-mono">3 Severe Errors</span>
    </div>
    <div class="p-4 bg-slate-950 text-slate-200 overflow-x-auto">
      <pre><code>public class AudioBook extends Book {
    <span class="text-rose-400">// Error 1: Redeclaring inherited variable</span>
    private String title;
    private int lengthMinutes;

    <span class="text-rose-400">// Error 2: Missing super(...) constructor call</span>
    public AudioBook(String title, String author, double price, int lengthMinutes) {
        this.title = title;
        this.lengthMinutes = lengthMinutes;
    }

    <span class="text-rose-400">// Error 3: Direct access to private superclass field</span>
    public String toString() {
        return super.title + " (Audiobook, " + lengthMinutes + " mins, $" + getPrice() + ")";
    }
}</code></pre>
    </div>
  </div>
</div>

<!-- Side-by-Side Scoring Breakdown Table -->
<div class="my-6 overflow-hidden rounded-xl border border-border shadow-sm">
  <div class="bg-muted px-4 py-3 border-b border-border">
    <h3 class="text-sm font-semibold text-foreground m-0">Side-by-Side Scoring Comparison: Student Submission 1</h3>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <thead class="bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
        <tr>
          <th class="px-4 py-3">Rubric Item</th>
          <th class="px-4 py-3">Generic LLM</th>
          <th class="px-4 py-3 bg-teal-500/10 text-teal-600 dark:text-teal-400">Checkmark AST</th>
          <th class="px-4 py-3">Reasoning &amp; Syntax Tree Evidence</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-xs">
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium">1. Class Header</td>
          <td class="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-mono">1 / 1</td>
          <td class="px-4 py-3 bg-teal-500/5 text-emerald-600 dark:text-emerald-400 font-mono font-bold">1 / 1</td>
          <td class="px-4 py-3 text-muted-foreground">AST node confirms <code>AudioBook extends Book</code>.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors bg-rose-500/5">
          <td class="px-4 py-3 font-medium text-rose-600 dark:text-rose-400">2. Instance Variables</td>
          <td class="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-mono">1 / 1 <span class="text-rose-500 font-bold">(Error)</span></td>
          <td class="px-4 py-3 bg-teal-500/5 text-rose-600 dark:text-rose-400 font-mono font-bold">0 / 1</td>
          <td class="px-4 py-3 text-foreground"><strong>Deduction:</strong> Redeclares <code>title</code>. Only new field <code>lengthMinutes</code> should be declared.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium">3. Constructor Signature</td>
          <td class="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-mono">1 / 1</td>
          <td class="px-4 py-3 bg-teal-500/5 text-emerald-600 dark:text-emerald-400 font-mono font-bold">1 / 1</td>
          <td class="px-4 py-3 text-muted-foreground">Correct four parameters with exact types matching prompt specification.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors bg-rose-500/5">
          <td class="px-4 py-3 font-medium text-rose-600 dark:text-rose-400">4. <code>super(...)</code> Chaining</td>
          <td class="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-mono">1 / 1 <span class="text-rose-500 font-bold">(Error)</span></td>
          <td class="px-4 py-3 bg-teal-500/5 text-rose-600 dark:text-rose-400 font-mono font-bold">0 / 1</td>
          <td class="px-4 py-3 text-foreground"><strong>Deduction:</strong> Missing <code>super(title, author, price)</code>. Superclass has no zero-arg constructor.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium">5. Field Initialization</td>
          <td class="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-mono">1 / 1</td>
          <td class="px-4 py-3 bg-teal-500/5 text-emerald-600 dark:text-emerald-400 font-mono font-bold">1 / 1</td>
          <td class="px-4 py-3 text-muted-foreground">Correctly assigns <code>this.lengthMinutes = lengthMinutes</code>.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium">6. Overriding Header</td>
          <td class="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-mono">1 / 1</td>
          <td class="px-4 py-3 bg-teal-500/5 text-emerald-600 dark:text-emerald-400 font-mono font-bold">1 / 1</td>
          <td class="px-4 py-3 text-muted-foreground">Header <code>public String toString()</code> matches superclass exactly.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors bg-rose-500/5">
          <td class="px-4 py-3 font-medium text-rose-600 dark:text-rose-400">7. Superclass Accessor</td>
          <td class="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-mono">1 / 1 <span class="text-rose-500 font-bold">(Error)</span></td>
          <td class="px-4 py-3 bg-teal-500/5 text-rose-600 dark:text-rose-400 font-mono font-bold">0 / 1</td>
          <td class="px-4 py-3 text-foreground"><strong>Deduction:</strong> <code>super.title</code> violates private encapsulation. Must call <code>getTitle()</code>.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium">8. String Logic</td>
          <td class="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-mono">1 / 1</td>
          <td class="px-4 py-3 bg-teal-500/5 text-emerald-600 dark:text-emerald-400 font-mono font-bold">1 / 1</td>
          <td class="px-4 py-3 text-muted-foreground">Concatenates required strings and numeric elements accurately.</td>
        </tr>
        <tr class="hover:bg-muted/20 transition-colors">
          <td class="px-4 py-3 font-medium">9. Return Value</td>
          <td class="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-mono">1 / 1</td>
          <td class="px-4 py-3 bg-teal-500/5 text-emerald-600 dark:text-emerald-400 font-mono font-bold">1 / 1</td>
          <td class="px-4 py-3 text-muted-foreground">Returns formatted <code>String</code> compatible with method return type.</td>
        </tr>
        <tr class="font-bold bg-muted/60 text-sm">
          <td class="px-4 py-3 text-foreground">TOTAL SCORE</td>
          <td class="px-4 py-3 text-rose-600 dark:text-rose-400 font-mono">9 / 9 (Inflated)</td>
          <td class="px-4 py-3 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono">6 / 9 (Accurate)</td>
          <td class="px-4 py-3 text-foreground">Checkmark matches official College Board Reader consensus with 100% precision.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

---

<h3>Case Study 2: Dynamic Binding &amp; Polymorphic Array FRQ with Written Justification</h3>

<p>
  <strong>The High School Context:</strong> An 11th-grade AP CSA class completes an assignment featuring a polymorphic <code>ArrayList&lt;Pet&gt;</code> collection with subclasses <code>Dog</code> and <code>Cat</code>.
</p>

<!-- Code Prompt & Student Answer -->
<div class="my-6 rounded-xl border border-border bg-card p-5">
  <h4 class="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">Traversing Polymorphic Collection:</h4>
  <div class="p-3 bg-slate-950 text-slate-200 rounded-lg font-mono text-xs mb-4">
    <pre><code>public void makeAllPetsSpeak(ArrayList&lt;Pet&gt; petList) {
    for (Pet p : petList) {
        System.out.println(p.speak());
    }
}</code></pre>
  </div>

  <div class="p-4 rounded-lg bg-muted/50 border border-border">
    <p class="text-xs font-semibold text-foreground mb-1">Written Conceptual Question:</p>
    <p class="text-sm italic text-muted-foreground mb-3">
      "Explain why calling <code>p.speak()</code> executes the <code>Dog</code> class's <code>speak()</code> method when <code>p</code> refers to an instance of <code>Dog</code>, even though the reference type of <code>p</code> is <code>Pet</code>."
    </p>
    <p class="text-xs font-semibold text-foreground mb-1">Student's Submitted Response:</p>
    <p class="text-sm bg-card p-3 rounded border border-border text-foreground font-mono">
      "The code executes Dog's speak method because when the program compiles, the Java compiler looks inside the Dog object in memory and automatically replaces Pet's speak with Dog's speak before running."
    </p>
  </div>
</div>

<!-- Multimodal Evaluation Breakdown -->
<div class="my-6 rounded-2xl border border-teal-500/30 bg-card p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-4">
    <span class="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500"></span>
    <h4 class="text-sm font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 m-0">Checkmark Multimodal Evaluation Report</h4>
  </div>

  <div class="space-y-3">
    <div class="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
      <span class="text-teal-600 dark:text-teal-400 font-bold text-sm">1. AST Code Analysis:</span>
      <div class="text-sm text-foreground">
        <strong>9 / 9 Points.</strong> The enhanced <code>for-each</code> loop correctly traverses <code>petList</code> and invokes <code>speak()</code> on each object reference polymorphically.
      </div>
    </div>

    <div class="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
      <span class="text-amber-600 dark:text-amber-400 font-bold text-sm">2. NLP Written Justification:</span>
      <div class="text-sm text-foreground space-y-1">
        <div><strong>1 / 3 Points (Partial Credit).</strong></div>
        <div class="text-xs text-muted-foreground">• <em>Point 1 (Dynamic Binding / Runtime Dispatch):</em> <strong>0/1</strong> — Incorrectly claims method resolution occurs at <em>compile time</em>.</div>
        <div class="text-xs text-muted-foreground">• <em>Point 2 (Declared vs. Actual Type):</em> <strong>1/1</strong> — Correctly distinguishes reference type <code>Pet</code> from object type <code>Dog</code>.</div>
        <div class="text-xs text-muted-foreground">• <em>Point 3 (Execution Mechanism):</em> <strong>0/1</strong> — Flagged misconception: <em>"Compiler cannot inspect memory objects prior to execution; dynamic dispatch is performed by JVM at runtime."</em></div>
      </div>
    </div>

    <div class="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
      <span class="text-blue-600 dark:text-blue-400 font-bold text-sm">3. Writing Telemetry (Essay Playback™):</span>
      <div class="text-sm text-foreground">
        Telemetry confirms the student drafted the explanation over 3 minutes with 4 backspaces and 2 pauses, proving authentic organic reasoning and diagnosing a genuine conceptual misunderstanding.
      </div>
    </div>
  </div>
</div>

---

<h3>Case Study 3: Exonerating an Honest Student from False AI Accusation via Essay Playback™ (1x–8x Replay)</h3>

<p>
  <strong>The High School Context:</strong> During a timed 45-minute unit exam on Chromebooks, an advanced 10th-grade student writes a textbook-clean implementation of a <code>Vehicle</code> / <code>ElectricCar</code> inheritance hierarchy.
</p>

<p>
  When the teacher runs the final code through a generic text-based AI detector, the tool outputs an <strong>89% AI-Generated Probability Score</strong>. Because canonical Java code uses standardized syntax structures (e.g., <code>public class</code>, <code>private double</code>, <code>super(make, model)</code>), generic perplexity-based detectors trigger severe false positive flags.
</p>

<!-- Keystroke Exoneration Dossier Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl font-mono text-xs">
  <div class="text-teal-400 font-bold text-sm tracking-wider uppercase mb-4 pb-2 border-b border-slate-800 font-sans flex items-center justify-between">
    <span>Checkmark Essay Playback™ Exoneration Dossier (Timeline Replay)</span>
    <span class="text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">100% Authentic Human</span>
  </div>

  <div class="space-y-4 text-slate-300">
    <div class="border-l-2 border-teal-500 pl-3">
      <div class="text-teal-300 font-bold">[ 00:00 - 05:20 ] Scaffolding &amp; Class Header</div>
      <div class="mt-1 text-slate-400 font-sans text-xs">
        • Types <code>public class ElectricCar extends Vehicle</code> at 38 WPM.<br/>
        • Pauses for 24 seconds reviewing the superclass method signatures on the exam prompt.
      </div>
    </div>

    <div class="border-l-2 border-teal-500 pl-3">
      <div class="text-teal-300 font-bold">[ 05:21 - 14:40 ] Constructor Formulation &amp; Debugging</div>
      <div class="mt-1 text-slate-400 font-sans text-xs">
        • Drafts constructor: initially types <code>this.batteryCapacity = batteryCapacity;</code> first.<br/>
        • Realizes ordering mistake after 12 seconds; backspaces and places <code>super(make, model, year);</code> at line 1.<br/>
        • Typos <code>super(make, model, yr)</code> &rarr; spots compiler error &rarr; corrects parameter name to <code>year</code>.
      </div>
    </div>

    <div class="border-l-2 border-teal-500 pl-3">
      <div class="text-teal-300 font-bold">[ 14:41 - 28:15 ] Method Overriding &amp; Accessor Usage</div>
      <div class="mt-1 text-slate-400 font-sans text-xs">
        • Implements <code>public double calculateRange()</code>.<br/>
        • Pauses for 45 seconds calculating the battery efficiency formula.<br/>
        • Types <code>super.getEfficiency() * batteryCapacity</code>.
      </div>
    </div>

    <div class="border-l-2 border-teal-500 pl-3">
      <div class="text-teal-300 font-bold">[ 28:16 - 36:50 ] Self-Testing &amp; Revision</div>
      <div class="mt-1 text-slate-400 font-sans text-xs">
        • Adds temporary <code>main</code> method to test polymorphic instantiation.<br/>
        • Runs test, verifies output, removes <code>main</code> method before final submission.
      </div>
    </div>

    <div class="p-3 bg-slate-950 rounded-lg border border-teal-500/30 text-teal-300 font-sans text-xs flex items-center justify-between">
      <span><strong>Writing Telemetry Summary:</strong> 36m 50s duration | 1,420 keystrokes | 148 backspaces | <strong>0 Clipboard Pastes</strong></span>
      <span class="font-bold text-emerald-400">STUDENT EXONERATED</span>
    </div>
  </div>
</div>

<p>
  <strong>The Outcome:</strong> During the department chair review, the teacher plays the 2-minute scrubbable Essay Playback™ video at 4x speed. The clear evidence of initial constructor ordering mistakes, parameter debugging, and algorithmic calculation pauses provides <strong>indisputable proof of authentic authorship</strong>, completely dismissing the false generic AI detection score.
</p>

---

<h2>7. How Checkmark’s Multi-Dimensional Suite Empowers Computer Science Educators</h2>

<p>
  Checkmark provides a comprehensive, integrated suite designed specifically for secondary and introductory collegiate computer science environments:
</p>

<!-- Integrated Architecture Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
  <div class="rounded-xl border border-border bg-card p-5 flex flex-col justify-between">
    <div>
      <div class="text-teal-600 dark:text-teal-400 font-bold text-xs uppercase tracking-wider mb-1">Feature 1</div>
      <h4 class="text-base font-semibold text-foreground mb-2">AST Java Rubric Autograder</h4>
      <p class="text-xs text-muted-foreground leading-relaxed">
        Deterministic, syntax-tree verification of class headers, constructor chaining, private encapsulation, and method overrides.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-border text-[11px] font-mono text-teal-600 dark:text-teal-400">
      AP Java Subset Compliant
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 flex flex-col justify-between">
    <div>
      <div class="text-teal-600 dark:text-teal-400 font-bold text-xs uppercase tracking-wider mb-1">Feature 2</div>
      <h4 class="text-base font-semibold text-foreground mb-2">Quote-Anchored Feedback</h4>
      <p class="text-xs text-muted-foreground leading-relaxed">
        Every rubric mark and deduction is pinned directly to the exact line of code, giving students actionable revision guidance.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-border text-[11px] font-mono text-teal-600 dark:text-teal-400">
      Line-by-Line Annotations
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 flex flex-col justify-between">
    <div>
      <div class="text-teal-600 dark:text-teal-400 font-bold text-xs uppercase tracking-wider mb-1">Feature 3</div>
      <h4 class="text-base font-semibold text-foreground mb-2">Essay Playback™ Telemetry</h4>
      <p class="text-xs text-muted-foreground leading-relaxed">
        Scrubbable 1x–8x keystroke video replay reconstructing the entire coding session to verify authentic cognitive problem-solving.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-border text-[11px] font-mono text-teal-600 dark:text-teal-400">
      Patent-Pending Process Proof
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 flex flex-col justify-between">
    <div>
      <div class="text-teal-600 dark:text-teal-400 font-bold text-xs uppercase tracking-wider mb-1">Feature 4</div>
      <h4 class="text-base font-semibold text-foreground mb-2">Paste Inspector &amp; Vault</h4>
      <p class="text-xs text-muted-foreground leading-relaxed">
        Captures 100% of clipboard paste events with timestamped original text, even if the student subsequently rewrites the code.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-border text-[11px] font-mono text-teal-600 dark:text-teal-400">
      Clipboard Forensic Audit
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 flex flex-col justify-between">
    <div>
      <div class="text-teal-600 dark:text-teal-400 font-bold text-xs uppercase tracking-wider mb-1">Feature 5</div>
      <h4 class="text-base font-semibold text-foreground mb-2">1-Click LMS Gradebook Sync</h4>
      <p class="text-xs text-muted-foreground leading-relaxed">
        Seamless LTI 1.3 passback pushing approved scores and code feedback straight into Canvas SpeedGrader, Agilix Buzz, or Google Classroom.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-border text-[11px] font-mono text-teal-600 dark:text-teal-400">
      Zero Manual Data Entry
    </div>
  </div>

  <div class="rounded-xl border border-border bg-card p-5 flex flex-col justify-between">
    <div>
      <div class="text-teal-600 dark:text-teal-400 font-bold text-xs uppercase tracking-wider mb-1">Feature 6</div>
      <h4 class="text-base font-semibold text-foreground mb-2">FERPA/COPPA Zero-Retention</h4>
      <p class="text-xs text-muted-foreground leading-relaxed">
        Student code and written responses are never stored or used to train general AI models, protecting district compliance.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-border text-[11px] font-mono text-teal-600 dark:text-teal-400">
      Privacy-First Architecture
    </div>
  </div>
</div>

---

<h2>8. Step-by-Step Teacher Workflow: From Code Submission to 1-Click LMS Sync</h2>

<!-- Teacher Workflow Card -->
<div class="my-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-xl">
  <div class="text-center font-bold text-teal-400 text-sm tracking-wider uppercase mb-5 pb-3 border-b border-slate-800">
    Teacher-in-the-Loop CS Grading Workflow with Checkmark
  </div>

  <div class="space-y-4">
    <div class="flex items-start gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
      <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs">1</div>
      <div>
        <h4 class="text-sm font-semibold text-teal-300 m-0">Assignment Creation &amp; Rubric Sync</h4>
        <p class="text-xs text-slate-300 mt-1 mb-0 leading-relaxed">
          Teacher creates Question 2 Class Design FRQ in Canvas LMS, Buzz LMS, or Google Classroom. Checkmark automatically ingests the standard AP CSA 9-point rubric or custom departmental rubric.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
      <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs">2</div>
      <div>
        <h4 class="text-sm font-semibold text-teal-300 m-0">Student Coding &amp; Real-Time Telemetry Capture</h4>
        <p class="text-xs text-slate-300 mt-1 mb-0 leading-relaxed">
          Students write code inside Checkmark's embedded editor or submit via Google Docs / Chromebooks. Checkmark logs every keystroke, pause, deletion, and clipboard event in the background.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
      <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs">3</div>
      <div>
        <h4 class="text-sm font-semibold text-teal-300 m-0">Automated AST Parsing &amp; Draft Rubric Scoring</h4>
        <p class="text-xs text-slate-300 mt-1 mb-0 leading-relaxed">
          Checkmark parses the Java syntax tree and drafts points for all 9 rubric criteria in &lt;3 seconds, anchoring feedback cards to exact code lines (e.g., flagging line 14: <em>"Missing super() call"</em>).
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
      <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs">4</div>
      <div>
        <h4 class="text-sm font-semibold text-teal-300 m-0">Teacher Review &amp; 100% Override Authority</h4>
        <p class="text-xs text-slate-300 mt-1 mb-0 leading-relaxed">
          Teacher reviews the pre-graded submission in Checkmark's split-screen educator dashboard, adjusts any point values, customizes feedback comments, or reviews Essay Playback™ if paste events are detected.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
      <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs">5</div>
      <div>
        <h4 class="text-sm font-semibold text-teal-300 m-0">1-Click LMS Gradebook Passback</h4>
        <p class="text-xs text-slate-300 mt-1 mb-0 leading-relaxed">
          With a single click (or bulk batch approval), finalized grades, criterion breakdowns, and line-anchored feedback sync directly back into Canvas SpeedGrader, Agilix Buzz, or Google Classroom.
        </p>
      </div>
    </div>
  </div>
</div>

---

<h2>9. Frequently Asked Questions (FAQ)</h2>

<div class="space-y-4 my-6">
  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground mb-2">Q1: Why do generic LLMs consistently award points to code that violates Java encapsulation?</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">
      Generic LLMs are trained on general internet text and vast repositories of uncurated open-source code where fields are often declared <code>protected</code>, <code>public</code>, or package-private. LLMs look for statistical semantic coherence rather than compiling the code against a formal grammar. When an AP CSA student writes <code>super.name</code> instead of <code>super.getName()</code>, the LLM recognizes that <code>name</code> exists in the parent domain and assumes the logic is sound. In contrast, Checkmark’s AST parser specifically checks the access modifier of the superclass field in the AP Java subset, correctly flagging the private encapsulation violation.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground mb-2">Q2: How does AST-backed autograding differ from compiling student code with JUnit test cases?</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">
      JUnit test runners require the entire file to compile cleanly before any tests can run. If a high school student makes a single minor typo—such as forgetting a semicolon on line 4 or slightly misspelling an imported class—the compiler crashes, and the test runner awards 0/9 points. Checkmark’s AST parser can parse partial, imperfect code syntax trees, allowing it to award partial credit for valid class headers, variable declarations, and algorithmic loops even if a syntax error prevents full binary execution.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground mb-2">Q3: Can Checkmark evaluate student code that has minor syntax errors like a missing semicolon?</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">
      Yes. Checkmark’s Java parser utilizes fault-tolerant AST recovery mechanisms. If a student forgets a semicolon or closes a bracket prematurely, the parser isolates the syntax anomaly to that specific node, repairs the local AST context, and continues evaluating the rest of the class architecture against the remaining rubric criteria.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground mb-2">Q4: How does Essay Playback™ detect students copying code from a second screen or phone?</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">
      When students manually retype code while looking at an external device (such as a smartphone displaying ChatGPT output), their typing dynamics exhibit a distinct, unnatural pattern known as <strong>mechanical transcription</strong>. Unlike authentic programming—which features high-burst typing followed by long cognitive pauses, debugging edits, and intermediate print statements—transcription exhibits a flat, monotonous typing velocity (50–70 WPM) with virtually zero backspaces and no pauses at complex algorithmic cruxes. Essay Playback™ flags this signature for teacher review.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground mb-2">Q5: Why do canonical AP CSA Java algorithms trigger false positives on traditional AI text detectors?</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">
      Canonical computer science algorithms (such as binary search, selection sort, or standard class inheritance templates) have a very limited set of optimal solutions. Because the code structure is highly standardized, the text exhibits low perplexity (high predictability), which traditional text-based AI detectors interpret as machine-generated text. Checkmark prevents these false accusations by prioritizing <strong>writing process telemetry (Essay Playback™)</strong> over ungrounded whole-file probability scores.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground mb-2">Q6: How does Checkmark evaluate written logic explanations for dynamic binding and polymorphism?</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">
      Checkmark combines its AST code parser with a domain-specific Natural Language Processing (NLP) rubric engine trained on College Board scoring guidelines. When evaluating written explanations, the engine looks for semantic markers differentiating compile-time type checking (declared reference types) from runtime dynamic dispatch (actual instantiated object types). It identifies common student confusions—such as claiming that the compiler checks memory objects—and generates targeted conceptual feedback.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground mb-2">Q7: How does grade passback work with Canvas SpeedGrader, Agilix Buzz, and Google Classroom?</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">
      Checkmark integrates via LTI 1.3 Advantage standards. Once the teacher reviews and approves the AI-drafted rubric scores, Checkmark transmits the finalized numerical grade, the per-criterion point breakdown, and the line-by-line feedback cards directly into the LMS gradebook. In Canvas, feedback populates directly into the SpeedGrader rubric sidebar without requiring manual re-entry.
    </p>
  </div>

  <div class="rounded-xl border border-border bg-card p-5">
    <h3 class="text-base font-semibold text-foreground mb-2">Q8: Can high school CS teachers customize the AP CSA 9-point rubric for custom Unit 9 formative assignments?</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">
      Yes. Teachers can use the default College Board 9-point Class Design rubric, create custom rubrics directly within the Checkmark interface, upload existing PDF/image rubrics, or sync rubric structures from their LMS. Teachers have complete authority to adjust point weightings, add custom criteria (such as style guidelines or efficiency metrics), and override any AI-suggested score before publication.
    </p>
  </div>
</div>

---

<h2>10. Conclusion: Stop Guessing, Start Trusting in AP Computer Science</h2>

<p>
  Teaching AP Computer Science A is about fostering authentic computational thinking, algorithmic resilience, and architectural mastery. By moving away from brittle binary test runners and ungrounded LLM code checkers, high school computer science educators can reclaim their weekends, eliminate grading bottlenecks, and provide students with transparent, line-anchored feedback that drives genuine mastery.
</p>

<p>
  With <strong>Checkmark Plagiarism’s AST-Backed Java Autograding and patent-pending <a href="/services/writing-playback" class="text-teal-600 dark:text-teal-400 underline font-semibold">Essay Playback™</a></strong>, high school CS teachers, department chairs, and administrators gain the defensible evidence and instructional tools needed to support honest learners, uphold academic integrity, and elevate computer science education across every classroom.
</p>

<!-- CTA Callout Box -->
<div class="my-8 rounded-2xl bg-gradient-to-r from-teal-500/15 via-teal-500/10 to-transparent border border-teal-500/30 p-6 text-foreground shadow-md">
  <h3 class="text-lg font-bold text-foreground mb-2">Ready to Transform Your AP CSA Grading Workflow?</h3>
  <p class="text-sm text-muted-foreground mb-4">
    Discover how Checkmark's AST-backed rubric autograding and keystroke process telemetry empower computer science educators to grade with 100% precision, protect authentic student authorship, and sync seamlessly with Canvas and Buzz.
  </p>
  <div class="flex flex-wrap gap-3">
    <a href="/services/rubric-autograding" class="inline-flex items-center px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium text-xs transition-colors shadow-sm">
      Explore Rubric Autograding &rarr;
    </a>
    <a href="/services/writing-playback" class="inline-flex items-center px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted font-medium text-xs text-foreground transition-colors">
      Learn About Essay Playback™ &rarr;
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
      currentSlug="2026/8/can-ai-autograding-accurately-evaluate-inheritance-hierarchies-and-polymorphic-logic-explanations-in-high-school-ap-computer-science-a-frqs"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
