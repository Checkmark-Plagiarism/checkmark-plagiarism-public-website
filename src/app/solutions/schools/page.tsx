import { Metadata } from "next";
import { Screenshot } from "@/sections/services/shared";
import {
  SolutionHero,
  ProblemsGrid,
  CapabilitiesSection,
  SchoolTypesGrid,
  LmsIntegrationsSection,
  ResourcesGrid,
  TestimonialCard,
  ContactFormSection,
} from "@/sections/solutions/shared";

export const metadata: Metadata = {
  title: "Plagiarism and AI Detection for Schools — Checkmark",
  description:
    "Plagiarism detection, AI writing review, authorship evidence, and grading tools for K–12 schools, districts, and private academies.",
  openGraph: { images: ["/images/services/report-plagiarism-view.png"] },
};

export default function SchoolsOverviewPage() {
  const problems = [
    {
      icon: "sparkles",
      title: "AI-Generated Assignments",
      description:
        "Students using ChatGPT, Claude, or AI paraphrasers to generate entire essays or paragraphs without developing authentic writing skills.",
    },
    {
      icon: "copy",
      title: "Copied or Improperly Cited Work",
      description:
        "Passages pasted directly from websites, online study guides, or classmates without proper quotation marks and attribution.",
    },
    {
      icon: "alertCircle",
      title: "Unclear AI-Detector Results",
      description:
        "Vague percentage scores that accuse students without showing evidence, causing unfair accusations and stressed parent conversations.",
    },
    {
      icon: "clock",
      title: "Time-Consuming Essay Grading",
      description:
        "Teachers spending dozens of hours each week reading, checking sources, writing repetitive rubric comments, and recording grades.",
    },
    {
      icon: "shieldCheck",
      title: "Inconsistent Academic Integrity",
      description:
        "Varying enforcement standards across different departments, grade levels, and classrooms within the same school.",
    },
  ];

  const capabilities = [
    {
      icon: "fileSearch",
      title: "Plagiarism Detection",
      description:
        "Match text against billions of web pages, journals, and peer submissions with side-by-side quote comparison.",
      tag: "Originality",
    },
    {
      icon: "sparkles",
      title: "AI Writing Indicators",
      description:
        "Sentence-level AI confidence metrics that highlight suspicious structure without making unproven accusations.",
      tag: "AI Review",
    },
    {
      icon: "history",
      title: "Writing-Process Playback",
      description:
        "Keystroke-by-keystroke edit history playback showing how an essay evolved line by line over time.",
      tag: "Authorship",
    },
    {
      icon: "copy",
      title: "Copy-Paste & Transcription Evidence",
      description:
        "Detect massive external paste events and rapid manual transcription patterns from external screens.",
      tag: "Evidence",
    },
    {
      icon: "graduationCap",
      title: "Rubric-Based Grading",
      description:
        "AI-assisted autograding based on teacher rubrics with customizable feedback drafts ready for instructor approval.",
      tag: "Autograder",
    },
    {
      icon: "plug",
      title: "LMS Integration",
      description:
        "Seamless workflow integration with Google Classroom, Canvas LMS, Buzz LMS, and LTI 1.3 standards.",
      tag: "Integrations",
    },
  ];

  const resources = [
    {
      title: "K–12 AI Policy Guide for School Leaders",
      description:
        "A practical framework for drafting clear classroom rules around acceptable, disclosed, and prohibited AI usage.",
      href: "/learning/2026/6/generative-predictive-agentic-the-three-kinds-of-ai-schools-keep-mixing-up",
      category: "Policy Guide",
    },
    {
      title: "Academic Integrity Investigation Checklist",
      description:
        "Step-by-step checklist for teachers and administrators reviewing suspected plagiarism or AI-generated work.",
      href: "/learning/2026/7/what-an-ai-score-can-and-cant-tell-you",
      category: "Checklist",
    },
    {
      title: "Teacher Conversation Guide for AI Flags",
      description:
        "How to conduct supportive, evidence-based conversations with students when AI detection signals arise.",
      href: "/learning/2026/7/how-checkmark-writing-process-analysis-works",
      category: "Teacher Guide",
    },
    {
      title: "Connecting Plagiarism Checks to Google Classroom",
      description:
        "Setup guide and workflow tips for automatically checking student assignments directly in Google Workspace.",
      href: "/learning/2026/6/connecting-a-plagiarism-checker-to-google-classroom-a-workflow-guide-that-actually-saves-you-time",
      category: "Workflow",
    },
  ];

  return (
    <main>
      {/* 1. Hero */}
      <SolutionHero
        badge="Schools Overview"
        title="Plagiarism & AI Detection Built for K–12 Schools"
        sub="Plagiarism detection, AI writing review, authorship evidence, and rubric grading tools — all in one transparent platform designed for teachers, schools, and districts."
        primaryCtaText="Request a School Demo"
        secondaryCtaText="Explore Sample Report"
      />

      {/* 2. Problems Checkmark Helps Solve */}
      <ProblemsGrid problems={problems} />

      {/* 3. Core Capabilities */}
      <CapabilitiesSection capabilities={capabilities} />

      {/* Interactive Screenshot Showcase */}
      <section className="py-16 bg-brand-50/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Transparent Evidence, Not Black-Box Guesswork
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Checkmark combines plagiarism matching, passage-level AI signals, and full edit playback on a single report screen so teachers can make informed, fair decisions.
          </p>
          <Screenshot
            src="/images/services/report-plagiarism-view.png"
            alt="Checkmark assignment report showing originality tiles, autograder scores, highlighted essay, and side-by-side evidence"
            width={2000}
            height={1312}
            caption="A real Checkmark assignment report — originality tiles, AI confidence indicators, and writing playback."
            priority
          />
        </div>
      </section>

      {/* 4. Solutions by School Type */}
      <SchoolTypesGrid />

      {/* 5. Supported Integrations */}
      <LmsIntegrationsSection />

      {/* Testimonial */}
      <div className="container mx-auto px-4">
        <TestimonialCard
          quote="Checkmark transformed how our teachers handle writing submissions. Instead of arguing about AI percentage numbers, our staff and students review actual writing process evidence together."
          author="Dr. Sarah Jenkins"
          role="Director of Curriculum & Instruction"
          school="Oakridge Academy & School District"
        />
      </div>

      {/* 6. Academic Integrity Resources */}
      <ResourcesGrid resources={resources} />

      {/* 7. Final CTA / Contact Form */}
      <ContactFormSection
        title="Request a School Demonstration"
        subtitle="Schedule a personalized demo or consultation to see how Checkmark supports academic integrity and saves grading time for your school."
      />
    </main>
  );
}
