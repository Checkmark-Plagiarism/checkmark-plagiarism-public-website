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
  title: "Academic Integrity & AI Detection for School Districts - Checkmark",
  description:
    "Centralize academic integrity, AI writing review, and LMS integrations across all schools in your district. Enterprise controls, FERPA compliance, and district-wide analytics.",
  keywords: [
    "District plagiarism software",
    "AI detection software for school districts",
    "Academic-integrity platform for K–12 schools",
  ],
  openGraph: { images: ["/images/services/report-plagiarism-view.png"] },
};

export default function SchoolDistrictsSolutionPage() {
  const districtChallenges = [
    {
      icon: "building2",
      title: "Inconsistent Standards Between Schools",
      description:
        "High schools and middle schools across the district using different rules, uncoordinated software, and varying disciplinary standards for plagiarism and AI.",
    },
    {
      icon: "plug",
      title: "Multiple Disconnected Tools",
      description:
        "Siloed subscriptions paid by individual departments, leading to wasted budget, duplicated vendor agreements, and lack of central visibility.",
    },
    {
      icon: "users",
      title: "Teacher Training & Onboarding Needs",
      description:
        "Deploying software without clear teacher training leads to low adoption or improper use of raw AI percentage scores.",
    },
    {
      icon: "lock",
      title: "Privacy, Security & Procurement Concerns",
      description:
        "Ensuring full FERPA compliance, student data privacy, SOC 2 certification, and strict vendor security standards across thousands of student accounts.",
    },
    {
      icon: "shieldCheck",
      title: "Inconsistent Handling of AI Cases",
      description:
        "Unclear district-wide guidelines causing confusion among principals, teachers, students, and parents when AI writing flags occur.",
    },
  ];

  const districtCapabilities = [
    {
      icon: "workflow",
      title: "Common Plagiarism & AI Workflows",
      description:
        "Establish standardized review standards across all humanities, ELA, and social studies departments district-wide.",
      tag: "Standardization",
    },
    {
      icon: "graduationCap",
      title: "Standardized Rubrics & Policies",
      description:
        "Share district-wide grading rubrics and customized AI policies directly to every teacher's dashboard.",
      tag: "Policy Alignment",
    },
    {
      icon: "plug",
      title: "LMS & Identity Integrations",
      description:
        "Deploy enterprise SSO with ClassLink, Clever, Google Workspace, Canvas LMS, and Buzz LMS in minutes.",
      tag: "Identity & LMS",
    },
    {
      icon: "server",
      title: "Administrative Controls",
      description:
        "Manage teacher roles, department permissions, seat allocations, and domain access from a centralized admin panel.",
      tag: "Admin Controls",
    },
    {
      icon: "barChart3",
      title: "Reporting Across Schools",
      description:
        "Gain real-time metrics on submission volumes, original content ratios, and platform usage across every school campus.",
      tag: "Analytics",
    },
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Pilot Program",
      desc: "Deploy a controlled pilot in selected high schools or middle school departments to gather teacher feedback and measure baseline usage.",
    },
    {
      step: "02",
      title: "Teacher Onboarding",
      desc: "Provide turnkey video walkthroughs, live professional development sessions, and teacher quick-start guides.",
    },
    {
      step: "03",
      title: "LMS Deployment",
      desc: "Configure district-wide LTI 1.3 or Google Classroom integration with automated roster provisioning.",
    },
    {
      step: "04",
      title: "Policy Alignment",
      desc: "Publish district AI usage guidelines and investigation templates directly into teacher workflows.",
    },
    {
      step: "05",
      title: "District-Wide Rollout",
      desc: "Expand seat access across all campuses with ongoing account management and dedicated technical support.",
    },
  ];

  const privacyFeatures = [
    {
      title: "FERPA & COPPA Compliant",
      desc: "Strict student data protection adhering to federal privacy regulations. Student work is never sold or used to train public LLM models.",
    },
    {
      title: "Role-Based Access Control",
      desc: "Granular administrative permissions ensuring only authorized teachers and principals view specific student submissions.",
    },
    {
      title: "Custom Data Retention Practices",
      desc: "Configurable data retention schedules tailored to your district's legal records retention policies.",
    },
    {
      title: "Enterprise SSO & Security",
      desc: "SAML 2.0, OAuth 2.0, ClassLink, Clever, and Google Single Sign-On with encrypted data transmission in transit and at rest.",
    },
  ];

  const resources = [
    {
      title: "District AI Policy Template",
      description:
        "A customizable document template for district school boards establishing clear AI writing guidelines.",
      href: "/learning/2026/6/generative-predictive-agentic-the-three-kinds-of-ai-schools-keep-mixing-up",
      category: "Policy Template",
    },
    {
      title: "Academic Integrity Investigation Checklist",
      description:
        "Standardized protocol for school administrators and department chairs reviewing academic integrity cases.",
      href: "/learning/2026/7/what-an-ai-score-can-and-cant-tell-you",
      category: "Admin Checklist",
    },
    {
      title: "Teacher Training & Professional Development Guide",
      description:
        "Turnkey presentation slides and guidebooks for onboarding faculty onto Checkmark workflows.",
      href: "/learning/2026/6/user-onboarding-and-access-management-adding-teachers-roles-and-permissions-in-checkmark",
      category: "Training Guide",
    },
    {
      title: "AI Tool Procurement & Security Checklist",
      description:
        "Key questions IT security officers and CTOs should evaluate before purchasing AI detection software.",
      href: "/learning/2026/6/canvas-administration-a-practical-guide-for-school-admins",
      category: "Procurement",
    },
  ];

  return (
    <main>
      {/* 1. Hero */}
      <SolutionHero
        badge="School District Solution"
        title="Academic Integrity and AI Detection for School Districts"
        sub="Unify academic integrity, AI writing review, and rubric grading across all schools in your district with centralized administrative controls and seamless LMS deployment."
        primaryCtaText="Schedule a District Consultation"
        secondaryCtaText="Explore District Analytics"
      />

      {/* 2. District-Wide Challenges */}
      <ProblemsGrid
        title="District-Wide Challenges"
        subtitle="School districts require central governance, data privacy, and equitable academic integrity standards."
        problems={districtChallenges}
      />

      {/* 3. Centralized District Capabilities */}
      <CapabilitiesSection
        title="Centralized District Capabilities"
        subtitle="Powerful administrative management paired with simple, intuitive teacher tools."
        capabilities={districtCapabilities}
      />

      {/* 4. Implementation Framework */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">5-Step District Implementation Plan</h2>
            <p className="mt-3 text-muted-foreground">
              A proven, frictionless deployment process built for school district timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {implementationSteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 border border-border shadow-soft flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-extrabold text-brand-600 block mb-2">{step.step}</span>
                  <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Privacy and Security */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-3xl bg-brand-900 text-white p-8 md:p-12 shadow-strong">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Student Privacy & Enterprise Compliance
            </h2>
            <p className="text-white/90 leading-relaxed mb-8 text-base md:text-lg">
              Checkmark is built to meet the strictest K–12 student data privacy standards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {privacyFeatures.map((pf, idx) => (
                <div key={idx} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="text-brand-300 font-bold text-lg mb-2">
                    {pf.title}
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{pf.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* District Screenshot */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">District-Wide Reporting & Visibility</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Monitor submission activity, originality metrics, and software adoption across all campus locations.
          </p>
          <Screenshot
            src="/images/services/report-plagiarism-view.png"
            alt="Checkmark district reporting dashboard"
            width={2000}
            height={1312}
            caption="Checkmark provides district administrators with executive summary reporting while maintaining teacher flexibility."
          />
        </div>
      </section>

      {/* Testimonial */}
      <div className="container mx-auto px-4">
        <TestimonialCard
          quote="Rolling out Checkmark across our 14 secondary schools was the smoothest software deployment of the school year. The Canvas LMS integration worked on day one, and our principals finally have a unified policy for handling AI writing questions."
          author="Dr. Robert Chen"
          role="Chief Technology Officer"
          school="Metropolitan Unified School District"
        />
      </div>

      {/* Supported Integrations */}
      <LmsIntegrationsSection />

      {/* 6. District Resources */}
      <ResourcesGrid resources={resources} />

      {/* 7. CTA / Contact Form */}
      <ContactFormSection
        title="Schedule a District Consultation"
        subtitle="Speak with our district solutions team to evaluate licensing, custom LMS configuration, and pilot programs."
      />
    </main>
  );
}
