import { Metadata } from "next";
import { Screenshot } from "@/sections/services/shared";
import {
  SolutionHero,
  ProblemsGrid,
  CapabilitiesSection,
  LmsIntegrationsSection,
  ResourcesGrid,
  TestimonialCard,
  ContactFormSection,
} from "@/sections/solutions/shared";

export const metadata: Metadata = {
  title: "Plagiarism and AI Detection for High Schools - Checkmark",
  description:
    "Empower high school teachers with transparent plagiarism detection, AI writing indicators, document history playback, and rubric grading for ELA, History, and AP courses.",
  keywords: [
    "Plagiarism checker for high schools",
    "AI detector for high school teachers",
    "Academic-integrity software for high schools",
  ],
  openGraph: { images: ["/images/services/report-plagiarism-view.png"] },
};

export default function HighSchoolsSolutionPage() {
  const challenges = [
    {
      icon: "sparkles",
      title: "Essays Written with Generative AI",
      description:
        "High school students frequently turn to ChatGPT, Claude, or AI rewriters to generate complete essays, leading to unearned grades and missed learning.",
    },
    {
      icon: "bookOpen",
      title: "Improper Paraphrasing & Citation",
      description:
        "Students often rearrange source words without proper attribution or clear quotation marks, leading to accidental plagiarism in research papers.",
    },
    {
      icon: "copy",
      title: "Students Copying Classmates",
      description:
        "Shared documents and messaging apps make it easy for students in different class periods to share homework answers and essay paragraphs.",
    },
    {
      icon: "history",
      title: "Difficulty Establishing Authorship",
      description:
        "When an essay looks polished, teachers lack objective evidence to determine whether the student wrote it themselves or generated it.",
    },
  ];

  const teacherCapabilities = [
    {
      icon: "fileSearch",
      title: "Review Plagiarism & AI Signals Together",
      description:
        "View web source matches and AI confidence indicators side-by-side on one unified report screen.",
      tag: "Dual Analysis",
    },
    {
      icon: "history",
      title: "Examine How an Assignment Was Written",
      description:
        "Replay sentence-by-sentence editing history to see the student's authentic drafting progression over time.",
      tag: "Playback",
    },
    {
      icon: "copy",
      title: "Identify Large Pasted or Transcribed Sections",
      description:
        "Highlight massive external paste blocks and fast manual transcription patterns instantly.",
      tag: "Paste Audit",
    },
    {
      icon: "graduationCap",
      title: "Grade with Teacher-Approved Rubrics",
      description:
        "Use custom high school rubrics for ELA, History, and AP essays with AI-suggested feedback drafts.",
      tag: "Rubric Grading",
    },
    {
      icon: "plug",
      title: "Return Grades Through the LMS",
      description:
        "Seamless integration with Google Classroom and Canvas SpeedGrader means zero double data entry.",
      tag: "LMS Sync",
    },
  ];

  const subjectUseCases = [
    {
      title: "English & Language Arts (ELA)",
      desc: "Verify essay original analysis, thesis development, and literary source citations across analytical and persuasive papers.",
    },
    {
      title: "History & Social Studies",
      desc: "Ensure document-based questions (DBQs) and primary source research papers reflect authentic student synthesis.",
    },
    {
      title: "AP & Honors Courses",
      desc: "Maintain rigorous academic standards for AP Literature, AP Lang, and AP US History capstone assignments.",
    },
    {
      title: "Research Projects & Senior Papers",
      desc: "Track long-form research paper writing across multiple drafts with clear revision history and bibliography checks.",
    },
    {
      title: "Cross-Curricular Writing",
      desc: "Apply consistent integrity standards and grading rubrics across science lab reports, elective papers, and humanities.",
    },
  ];

  const resources = [
    {
      title: "Best Plagiarism Checkers for High Schools",
      description:
        "Compare top features, LMS compatibility, and accuracy metrics for secondary education plagiarism tools.",
      href: "/learning/2026/6/ai-detection-tools-in-education-how-they-work-and-how-to-use-them-well",
      category: "Buyers Guide",
    },
    {
      title: "How High School Teachers Check for Plagiarism",
      description:
        "A practical guide to identifying subtle uncredited sources, copied peer work, and online essay bank text.",
      href: "/learning/2026/6/student-plagiarism-explained-causes-detection-prevention-and-consequences",
      category: "Teacher Guide",
    },
    {
      title: "Can Teachers Detect ChatGPT?",
      description:
        "Understanding what AI writing detectors can reliably spot - and how process playback confirms true authorship.",
      href: "/learning/2026/6/chatgpt-detection-explained-how-tools-decide-whether-ai-wrote-it",
      category: "AI Insights",
    },
    {
      title: "How to Handle an AI-Flagged Assignment",
      description:
        "Step-by-step framework for high school teachers and department heads conducting fair, supportive student reviews.",
      href: "/learning/2026/7/what-an-ai-score-can-and-cant-tell-you",
      category: "Best Practices",
    },
  ];

  return (
    <main>
      {/* 1. Hero */}
      <SolutionHero
        badge="High School Solution"
        title="Plagiarism and AI Detection for High Schools"
        sub="Equip high school educators with clear plagiarism detection, sentence-level AI signals, writing process playback, and automated rubric grading built for secondary classrooms."
        primaryCtaText="See Checkmark for High Schools"
        secondaryCtaText="View Interactive Report"
      />

      {/* 2. High-School Writing Challenges */}
      <ProblemsGrid
        title="High-School Writing Challenges"
        subtitle="Secondary teachers face complex academic integrity hurdles in the era of generative AI."
        problems={challenges}
      />

      {/* 3. How Checkmark Supports Teachers */}
      <CapabilitiesSection
        title="How Checkmark Supports High School Teachers"
        subtitle="Tools built specifically to protect writing rigor while reducing grading workload."
        capabilities={teacherCapabilities}
      />

      {/* 4. Subject Use Cases */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">High School Subject Use Cases</h2>
            <p className="mt-3 text-muted-foreground">
              Designed to support rigorous writing expectations across every secondary discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectUseCases.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 border border-border shadow-soft hover:shadow-medium transition-smooth"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Fair Academic-Integrity Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-3xl bg-brand-900 text-white p-8 md:p-12 shadow-strong">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Fair & Consistent Academic-Integrity Reviews
            </h2>
            <p className="text-white/90 leading-relaxed mb-8 text-base md:text-lg">
              Checkmark believes an AI detector score should never be used as sole proof of misconduct. We provide a transparent framework for secondary schools:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="text-brand-300 font-bold text-xl mb-2">1. AI Scores Are Not Proof</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Treat percentage scores as indicators to start a conversation, not final verdicts.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="text-brand-300 font-bold text-xl mb-2">2. Multi-Evidence Review</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Combine web source matches, paste timestamps, and revision playback to see the complete picture.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="text-brand-300 font-bold text-xl mb-2">3. Consistent Process</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Give department chairs and teachers a standardized checklist for fair, repeatable investigations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">High-School Assignment Analysis</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Review plagiarism matches, sentence-level AI signals, and document edit history in one view.
          </p>
          <Screenshot
            src="/images/services/report-plagiarism-view.png"
            alt="Checkmark report view for high school assignments"
            width={2000}
            height={1312}
            caption="Checkmark's multi-layered report view gives high school teachers undeniable evidence before holding student meetings."
          />
        </div>
      </section>

      {/* Testimonial */}
      <div className="container mx-auto px-4">
        <TestimonialCard
          quote="The edit playback feature resolved three separate AI flag disputes in my AP Literature class this semester. Students who actually wrote their papers could easily prove their work, while those who used AI were caught without guesswork."
          author="Marcus Vance"
          role="Department Chair, English Language Arts"
          school="Lincoln High School"
        />
      </div>

      {/* Supported Integrations */}
      <LmsIntegrationsSection />

      {/* 6. Relevant Resources */}
      <ResourcesGrid resources={resources} />

      {/* 7. CTA / Contact Form */}
      <ContactFormSection
        title="See Checkmark for Your High School"
        subtitle="Request a demo tailored to high school English, Social Studies, and AP departments."
      />
    </main>
  );
}
