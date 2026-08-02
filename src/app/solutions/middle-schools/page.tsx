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
  title: "Plagiarism and AI Detection for Middle Schools — Checkmark",
  description:
    "Help middle school students build strong academic integrity habits early. Plagiarism checking, age-appropriate writing playback, and rubric feedback designed for 6th-8th grade classrooms.",
  keywords: [
    "Plagiarism checker for middle school",
    "AI detection for middle-school teachers",
    "Teaching plagiarism to middle-school students",
  ],
  openGraph: { images: ["/images/services/report-plagiarism-view.png"] },
};

export default function MiddleSchoolsSolutionPage() {
  const habitBuilding = [
    {
      icon: "bookMarked",
      title: "Proper Paraphrasing",
      description:
        "Help middle school students learn how to rephrase research in their own words rather than changing just a few words of copied text.",
    },
    {
      icon: "lightbulb",
      title: "Citation Fundamentals",
      description:
        "Teach basic source attribution, author credits, and link references before students enter high school research environments.",
    },
    {
      icon: "sparkles",
      title: "Responsible AI Use",
      description:
        "Establish age-appropriate boundaries so middle schoolers understand why AI should assist brainstorming—not write their papers.",
    },
    {
      icon: "penTool",
      title: "Drafting & Revision Habits",
      description:
        "Encourage multi-step drafting, outline creation, and thoughtful revision using visual edit history.",
    },
  ];

  const teacherWorkflows = [
    {
      icon: "history",
      title: "Review Writing History",
      description:
        "Check how long a student spent typing and revising their assignment in Google Docs or your LMS.",
      tag: "Writing History",
    },
    {
      icon: "fileSearch",
      title: "Identify Copied Passages",
      description:
        "Spot uncredited text from online encyclopedias, homework sites, or peer submissions with clear highlights.",
      tag: "Plagiarism Match",
    },
    {
      icon: "graduationCap",
      title: "Provide Rubric-Based Feedback",
      description:
        "Deliver clear, age-appropriate rubric comments so students understand where to improve their mechanics and structure.",
      tag: "Rubric Comments",
    },
    {
      icon: "messageSquare",
      title: "Discuss Evidence with Students",
      description:
        "Use interactive visual reports as constructive teaching moments during one-on-one student conferences.",
      tag: "Teachable Moments",
    },
  ];

  const commonAssignments = [
    {
      title: "Short Essays & Personal Narratives",
      desc: "Ensure 6th-8th grade personal essays and reflection papers represent true student voice and original expression.",
    },
    {
      title: "Book Reports & Novel Summaries",
      desc: "Prevent students from copying online chapter summaries or AI-generated summaries for required reading books.",
    },
    {
      title: "Science & Social Studies Research",
      desc: "Guide introductory research projects on historical figures, scientific topics, and geographic reports.",
    },
    {
      title: "Explanatory & Informational Writing",
      desc: "Teach proper structure for 'how-to' essays, cause-and-effect writing, and informational paragraphs.",
    },
    {
      title: "Document-Based Responses",
      desc: "Build foundational skills in analyzing historical quotes and incorporating text evidence properly.",
    },
  ];

  const resources = [
    {
      title: "Types of Plagiarism Middle Schoolers Should Know",
      description:
        "A student-friendly guide explaining direct copying, mosaic plagiarism, and uncredited paraphrasing.",
      href: "/learning/2026/6/student-plagiarism-explained-causes-detection-prevention-and-consequences",
      category: "Student Guide",
    },
    {
      title: "Plagiarism vs. Poor Paraphrasing in Middle School",
      description:
        "How teachers can distinguish between intentional cheating and underdeveloped research skills in younger writers.",
      href: "/learning/2026/6/paraphrasing-done-right-a-practical-guide-to-restating-ideas-without-stealing-them",
      category: "Teaching Tips",
    },
    {
      title: "How Students Can Show They Wrote an Assignment",
      description:
        "Simple habits middle schoolers can practice in Google Docs to document their authentic drafting steps.",
      href: "/learning/2026/7/how-checkmark-writing-process-analysis-works",
      category: "Student Habits",
    },
    {
      title: "Responsible AI Use for Middle School Students",
      description:
        "A clear explanation of when AI tools help learning and when using them violates academic honesty.",
      href: "/learning/2026/6/the-plain-english-ai-glossary-for-teachers-and-parents",
      category: "AI Ethics",
    },
  ];

  return (
    <main>
      {/* 1. Hero */}
      <SolutionHero
        badge="Middle School Solution"
        title="Plagiarism and AI Detection for Middle Schools"
        sub="Build positive writing habits early. Checkmark gives 6th-8th grade teachers age-appropriate plagiarism detection, writing process tools, and teachable feedback workflows."
        primaryCtaText="Explore Checkmark for Middle Schools"
        secondaryCtaText="See Interactive Report"
      />

      {/* 2. Building Good Writing Habits Early */}
      <ProblemsGrid
        title="Building Good Writing Habits Early"
        subtitle="Middle school is the critical window where students transition from short responses to structured research essays."
        problems={habitBuilding}
      />

      {/* 3. Age-Appropriate Academic Integrity */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-3xl bg-brand-900 text-white p-8 md:p-12 shadow-strong">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Age-Appropriate Academic Integrity
            </h2>
            <p className="text-white/90 leading-relaxed mb-8 text-base md:text-lg">
              In middle school, writing mistakes are often learning opportunities. Checkmark empowers teachers to guide students constructively without jump-starting punitive actions:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="text-brand-300 font-bold text-lg mb-2">Reports as Teaching Tools</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Show students side-by-side matches so they see exactly where they forgot quotation marks or citations.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="text-brand-300 font-bold text-lg mb-2">Help Students Understand Mistakes</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Differentiate between intentional plagiarism and honest confusion about paraphrasing and research.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="text-brand-300 font-bold text-lg mb-2">Avoid Misguided Misconduct Flags</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Use full document revision history so young writers can easily prove their authentic work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Teacher Workflows */}
      <CapabilitiesSection
        title="Middle School Teacher Workflows"
        subtitle="Designed for fast review during busy middle school class schedules."
        capabilities={teacherWorkflows}
      />

      {/* 5. Common Assignments */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Common Middle School Assignments</h2>
            <p className="mt-3 text-muted-foreground">
              Checkmark supports integrity checks across the full spectrum of 6th-8th grade writing tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonAssignments.map((ca, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 border border-border shadow-soft hover:shadow-medium transition-smooth"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{ca.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ca.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Clear Reports Students & Parents Can Understand</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Simple visual indicators make student conferences productive and transparent.
          </p>
          <Screenshot
            src="/images/services/report-plagiarism-view.png"
            alt="Checkmark report view for middle school assignments"
            width={2000}
            height={1312}
            caption="Checkmark reports show highlighted sources and edit timelines that make teacher-student reviews clear and encouraging."
          />
        </div>
      </section>

      {/* Testimonial */}
      <div className="container mx-auto px-4">
        <TestimonialCard
          quote="Middle schoolers often don't understand that copying sentences from Wikipedia is plagiarism. Checkmark's visual reports turn what used to be uncomfortable confrontations into positive teaching sessions on proper citation."
          author="Elena Rostova"
          role="7th Grade Humanities Teacher"
          school="Westlake Middle School"
        />
      </div>

      {/* Supported Integrations */}
      <LmsIntegrationsSection />

      {/* 6. Relevant Resources */}
      <ResourcesGrid resources={resources} />

      {/* 7. CTA / Contact Form */}
      <ContactFormSection
        title="Explore Checkmark for Middle Schools"
        subtitle="Schedule a consultation to see how Checkmark helps 6th-8th grade teachers foster original writing and academic growth."
      />
    </main>
  );
}
