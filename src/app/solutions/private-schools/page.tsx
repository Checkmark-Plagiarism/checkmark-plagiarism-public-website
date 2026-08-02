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
  title: "Academic Integrity Tools for Private & Independent Schools — Checkmark",
  description:
    "Protect rigorous academic standards and support honor codes with flexible, policy-aligned plagiarism detection, AI writing analysis, and essay playback for college-preparatory academies.",
  keywords: [
    "Plagiarism checker for private schools",
    "AI detection for independent schools",
    "Academic-integrity software for college-preparatory schools",
  ],
  openGraph: { images: ["/images/services/report-plagiarism-view.png"] },
};

export default function PrivateSchoolsSolutionPage() {
  const standardsProtection = [
    {
      icon: "award",
      title: "Maintain Rigorous Writing Expectations",
      description:
        "Uphold high college-preparatory academic standards across all humanities, STEM, and AP writing assignments.",
    },
    {
      icon: "shieldCheck",
      title: "Support School Honor Codes",
      description:
        "Align detection workflows with your academy's honor system, encouraging student self-reflection and accountability.",
    },
    {
      icon: "graduationCap",
      title: "Prepare Students for College-Level Work",
      description:
        "Instill rigorous citation habits, deep research skills, and authentic drafting practices before students enter university.",
    },
  ];

  const flexiblePolicies = [
    {
      icon: "sliders",
      title: "Configure Workflows Around AI Policy",
      description:
        "Customize Checkmark threshold indicators to reflect your school's unique academic honor code and AI guidelines.",
      tag: "Policy Customization",
    },
    {
      icon: "sparkles",
      title: "Support Permitted, Disclosed & Prohibited Use",
      description:
        "Differentiate between AI used for permitted brainstorming versus unpermitted full essay generation.",
      tag: "Usage Tiers",
    },
    {
      icon: "history",
      title: "Review Evidence Before Disciplinary Action",
      description:
        "Examine process playback, paste history, and source quotes before taking cases to an Honor Council or Academic Dean.",
      tag: "Honor Council Review",
    },
  ];

  const writingSupport = [
    {
      title: "Essay Authorship Review",
      desc: "Replay keystroke history to verify that senior thesis projects and college admissions essays represent authentic student work.",
    },
    {
      title: "Research-Paper Plagiarism Checks",
      desc: "Scan long-form research papers against academic databases, web sources, and internal school archives.",
    },
    {
      title: "Rubric-Based Grading & Feedback",
      desc: "Deliver personalized, high-detail rubric feedback aligned with your school's proprietary grading scales.",
    },
    {
      title: "AP & College-Preparatory Writing",
      desc: "Ensure AP Literature, AP Capstone, and IB Extended Essay submissions meet international academic standards.",
    },
  ];

  const implementationSupport = [
    {
      step: "01",
      title: "Department-Level Deployment",
      desc: "Start with English, Humanities, or History departments to test workflows and customize rubrics.",
    },
    {
      step: "02",
      title: "Teacher Onboarding",
      desc: "Personalized training sessions for faculty on interpreting process playback and conducting constructive student reviews.",
    },
    {
      step: "03",
      title: "LMS Integration",
      desc: "Connect seamlessly with Canvas LMS, Google Classroom, Buzz, or custom independent school portals.",
    },
    {
      step: "04",
      title: "School-Wide Adoption",
      desc: "Full academy deployment backed by priority support and dedicated account consultation.",
    },
  ];

  const resources = [
    {
      title: "Integrating AI Rules into Private School Honor Codes",
      description:
        "A guide for Headmasters and Academic Deans adapting traditional honor codes to modern AI writing tools.",
      href: "/learning/2026/6/generative-predictive-agentic-the-three-kinds-of-ai-schools-keep-mixing-up",
      category: "Honor Code Guide",
    },
    {
      title: "College-Prep Writing & Authorship Verification",
      description:
        "How independent college-preparatory schools verify authentic student voice in long-form senior projects.",
      href: "/learning/2026/7/how-checkmark-writing-process-analysis-works",
      category: "College Prep",
    },
    {
      title: "How Teachers Check for Plagiarism in Capstone Papers",
      description:
        "Methods for catching complex paraphrasing plagiarism and uncredited sources in advanced research papers.",
      href: "/learning/2026/6/student-plagiarism-explained-causes-detection-prevention-and-consequences",
      category: "Research Integrity",
    },
    {
      title: "What an AI Score Can and Can't Tell You",
      description:
        "Crucial guidance for Honor Councils evaluating AI detection reports during academic discipline reviews.",
      href: "/learning/2026/7/what-an-ai-score-can-and-cant-tell-you",
      category: "Honor Council Review",
    },
  ];

  return (
    <main>
      {/* 1. Hero */}
      <SolutionHero
        badge="Private & Independent School Solution"
        title="Academic Integrity Tools for Private & Independent Schools"
        sub="Uphold academic rigor and honor code standards with transparent plagiarism detection, AI writing analysis, and essay revision playback built for college-preparatory academies."
        primaryCtaText="Request a Private-School Demo"
        secondaryCtaText="See Sample Report"
      />

      {/* 2. Protecting Academic Standards */}
      <ProblemsGrid
        title="Protecting Academic Standards"
        subtitle="Independent schools require sophisticated tools that align with high academic expectations and honor codes."
        problems={standardsProtection}
      />

      {/* 3. Flexible School Policies */}
      <CapabilitiesSection
        title="Flexible School Policy Alignment"
        subtitle="Configure workflows to match your school's specific AI guidelines and honor council procedures."
        capabilities={flexiblePolicies}
      />

      {/* 4. Writing & Assessment Support */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Writing and Assessment Support</h2>
            <p className="mt-3 text-muted-foreground">
              Comprehensive support for high-stakes college-prep coursework and senior capstone projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {writingSupport.map((ws, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 border border-border shadow-soft hover:shadow-medium transition-smooth"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{ws.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Implementation & Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Implementation & Support</h2>
            <p className="mt-3 text-muted-foreground">
              A smooth adoption path tailored to independent school structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSupport.map((step, idx) => (
              <div key={idx} className="rounded-2xl bg-brand-50/50 p-6 border border-border shadow-soft">
                <span className="text-xl font-bold text-brand-700 block mb-2">{step.step}</span>
                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Complete Authorship & Integrity Evidence</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Provide Honor Councils with clear, empirical writing history data when reviewing student work.
          </p>
          <Screenshot
            src="/images/services/report-plagiarism-view.png"
            alt="Checkmark report view for independent schools"
            width={2000}
            height={1312}
            caption="Checkmark's detailed process evidence supports transparent, fair honor code proceedings."
          />
        </div>
      </section>

      {/* Testimonial */}
      <div className="container mx-auto px-4">
        <TestimonialCard
          quote="At St. Jude Academy, maintaining our honor code is central to our mission. Checkmark gives our Honor Committee concrete, step-by-step editing evidence instead of relying on subjective opinions about AI text."
          author="Elizabeth Montgomery"
          role="Dean of Academics"
          school="St. Jude Preparatory Academy"
        />
      </div>

      {/* Supported Integrations */}
      <LmsIntegrationsSection />

      {/* Resources */}
      <ResourcesGrid resources={resources} />

      {/* CTA / Contact Form */}
      <ContactFormSection
        title="Request a Private-School Demonstration"
        subtitle="Schedule a consultation to explore custom honor code alignment, faculty training, and pricing for your academy."
      />
    </main>
  );
}
