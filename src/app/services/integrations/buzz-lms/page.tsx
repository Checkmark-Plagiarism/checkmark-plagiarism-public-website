import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  History,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ExternalLink,
  Sparkles,
  Sliders,
  Cpu,
  Layers,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  ServiceHero,
  Screenshot,
  IconFeature,
  NumberedStep,
  RelatedLink,
  ServiceCta,
} from "@/sections/services/shared";
import { IntegrationFaq } from "@/components/ui/integration-faq";

export const metadata: Metadata = {
  title: "Buzz LMS Plagiarism Checker Integration | Checkmark",
  description:
    "Use Checkmark with Buzz LMS to review plagiarism, AI-writing indicators, writing-process evidence, rubrics, assignments, and grades.",
  alternates: {
    canonical: "https://checkmarkplagiarism.com/services/integrations/buzz-lms",
  },
  openGraph: {
    title: "Buzz LMS Plagiarism Checker Integration | Checkmark",
    description:
      "Use Checkmark with Buzz LMS to review plagiarism, AI-writing indicators, writing-process evidence, rubrics, assignments, and grades.",
    url: "https://checkmarkplagiarism.com/services/integrations/buzz-lms",
    siteName: "Checkmark Plagiarism",
    images: [{ url: "/images/services/buzz_icon.png", width: 400, height: 400 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzz LMS Plagiarism Checker Integration | Checkmark",
    description:
      "Use Checkmark with Buzz LMS to review plagiarism, AI-writing indicators, writing-process evidence, rubrics, assignments, and grades.",
    images: ["/images/services/buzz_icon.png"],
  },
};

const faqs = [
  {
    question: "What is the Checkmark integration for Buzz LMS?",
    answer:
      "The Checkmark integration for Buzz LMS is an academic integrity tool built on LTI 1.3 that enables educators using Buzz LMS to analyze student submissions for web plagiarism, AI-generated content, and writing-process evidence directly within Buzz activities and assessments.",
  },
  {
    question: "Does Buzz LMS include plagiarism detection?",
    answer:
      "Buzz LMS does not feature native plagiarism or AI detection out of the box. Connecting Checkmark equips Buzz LMS courses with automated similarity matching, AI indicators, and keystroke playback.",
  },
  {
    question: "How do teachers open Checkmark from Buzz LMS?",
    answer:
      "Teachers launch Checkmark directly within Buzz LMS course activities or assessment items via LTI 1.3 Deep Linking. Reports open seamlessly inside the Buzz interface without separate user logins.",
  },
  {
    question: "Can Checkmark analyze student writing history?",
    answer:
      "Yes. For typed essay questions inside Buzz LMS assessments or submitted documents, Checkmark captures writing process telemetry—including typing cadence, revision events, and external pastes—allowing teachers to replay the writing session.",
  },
  {
    question: "Can grades be returned to Buzz LMS?",
    answer:
      "Yes. Checkmark supports automated Grade Passback. Scores calculated from similarity reviews, AI evaluations, or rubrics flow directly back to the Buzz LMS gradebook.",
  },
  {
    question: "Does the integration support rubrics?",
    answer:
      "Yes. Checkmark automatically converts Buzz LMS rubric criteria into autograding structures, enabling consistent evaluation and feedback for student essays.",
  },
  {
    question: "Who installs the Buzz LMS integration?",
    answer:
      "A Buzz LMS Administrator installs Checkmark at the domain or program level using LTI 1.3 configuration parameters. Once installed, teachers can add Checkmark to any Buzz activity.",
  },
  {
    question: "Does the integration use LTI?",
    answer:
      "Yes. Checkmark connects with Buzz LMS using the LTI 1.3 Advantage standard, supporting secure Single Sign-On, Deep Linking, and Grade Passback services.",
  },
];

export default function BuzzLMSIntegrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://checkmarkplagiarism.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://checkmarkplagiarism.com/services",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Integrations",
            "item": "https://checkmarkplagiarism.com/services/integrations",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Buzz LMS",
            "item": "https://checkmarkplagiarism.com/services/integrations/buzz-lms",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer,
          },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-brand-900 border-b border-white/10 pt-24 pb-4">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-xs text-white/70">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/integrations" className="hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium" aria-current="page">
                Buzz LMS
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <ServiceHero
        title="Academic integrity tools for Buzz LMS"
        sub="Integrate Checkmark into Buzz LMS activities and assessments to review plagiarism, AI-writing indicators, writing-process evidence, rubrics, and grades."
      >
        <LinkButton href="/demo" variant="hero">
          Request a Demo
        </LinkButton>
        <LinkButton href="/teacher-support" variant="outline-white">
          View Setup Guide
        </LinkButton>
        <LinkButton href="#how-it-works" variant="outline-white">
          See How It Works
        </LinkButton>
      </ServiceHero>

      {/* Interface Preview / Graphic */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-white p-4 sm:p-6 border border-border shadow-soft">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-cyan-50 flex items-center justify-center p-6">
                    <Image
                      src="/images/services/buzz_icon.png"
                      alt="Buzz LMS Plagiarism Checker Integration"
                      width={160}
                      height={160}
                      className="object-contain max-h-36 w-auto"
                      priority
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                    <Sparkles className="h-3.5 w-3.5" /> LTI 1.3 &amp; Assessment Tool
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    Deep LTI 1.3 &amp; embedded assessment integration
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Checkmark connects with Buzz LMS activities and assessment items. A custom essay box lives inside Buzz assessments, capturing the student&apos;s full writing process during test-taking.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Embedded essay question capture for Buzz LMS assessments</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Automatic Buzz LMS rubric conversion and scoring</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Direct Grade Passback to Buzz LMS gradebook</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Complete academic integrity for Buzz LMS learning environments
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Empower teachers using Buzz LMS with web-wide plagiarism detection, AI writing probability metrics, and full typing process playback across project activities and online assessments.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <IconFeature
              icon={Layers}
              title="Embedded Buzz LMS Workflow"
              text="Access reports within Buzz LMS course activities, gradebooks, and student submission details via LTI 1.3 Deep Linking."
              tone="cyan"
            />
            <IconFeature
              icon={History}
              title="Writing-Process Capture"
              text="Reconstruct how student essays and assessment responses were written with keystroke-by-keystroke Playback technology."
              tone="emerald"
            />
            <IconFeature
              icon={ShieldCheck}
              title="Plagiarism & AI Analysis"
              text="Scan written responses against billions of web pages and student peer submissions while assessing AI writing patterns."
              tone="purple"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              How the Buzz LMS integration works
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              A streamlined process engineered for Buzz LMS courses and assessments.
            </p>

            <div className="mt-10 space-y-6">
              <NumberedStep
                n="1"
                title="Configure Checkmark in Buzz LMS"
                text="Your administrator sets up the Checkmark LTI 1.3 tool in Buzz LMS Domain Settings once."
              />
              <NumberedStep
                n="2"
                title="Add Checkmark to Buzz activities or assessments"
                text="Deep-link Checkmark into Buzz course activities or insert a Checkmark essay question item into an assessment."
              />
              <NumberedStep
                n="3"
                title="Students complete work in Buzz LMS"
                text="Students write their essay or assessment response directly inside the Buzz interface while typing telemetry is recorded."
              />
              <NumberedStep
                n="4"
                title="Automated analysis & similarity matching"
                text="Checkmark analyzes the text for web similarity, peer matches, AI signals, and external copy-pastes."
              />
              <NumberedStep
                n="5"
                title="Teachers review the integrity report"
                text="Teachers open the full report inside Buzz LMS to evaluate highlights, side-by-side quotes, and writing playback."
              />
              <NumberedStep
                n="6"
                title="Return grades and feedback to Buzz LMS"
                text="Apply rubric scores and push calculated grades directly back into the Buzz LMS gradebook."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buzz-Specific Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Features built specifically for Buzz LMS
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Tailored capabilities created to support personalized and assessment-driven Buzz LMS environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Embedded Workflow inside Buzz LMS</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep-link Checkmark directly into Buzz activities so teachers and students work inside Buzz without external tabs.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Embedded Assessment Essay Tool</h3>
                  <p className="text-sm text-muted-foreground">
                    Add a Checkmark essay box directly into Buzz LMS assessments for real-time writing process capture.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <History className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Writing-Process Telemetry</h3>
                  <p className="text-sm text-muted-foreground">
                    Evaluate writing speed, session length, and external paste events for all written responses in Buzz.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Buzz Rubric Conversion</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert existing Buzz LMS rubrics into autograding criteria for automated scoring and qualitative feedback.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Grade Return to Buzz LMS</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamlessly sync final evaluation grades back to the Buzz gradebook with zero manual export files.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Teacher &amp; Administrator Controls</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure institutional parameters, permissions, and report availability at the Buzz domain level.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Workflow */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Teacher Experience</span>
              <h2 className="text-3xl font-bold text-foreground">How teachers manage integrity in Buzz LMS</h2>
              <p className="text-muted-foreground leading-relaxed">
                Teachers open Checkmark directly within Buzz LMS gradebook entries or activity reviews:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li><strong className="text-foreground">In-context reports:</strong> Open similarity and AI flags inside Buzz activity views.</li>
                <li><strong className="text-foreground">Keystroke replay:</strong> Replay student writing sessions for essay responses typed in Buzz.</li>
                <li><strong className="text-foreground">Converted Buzz rubrics:</strong> Score criteria quickly using converted Buzz rubric structures.</li>
                <li><strong className="text-foreground">Grade passback:</strong> Post finalized grades straight back to Buzz LMS.</li>
              </ul>
              <div className="pt-2">
                <RelatedLink href="/teacher-support" label="Explore teacher support documentation" />
              </div>
            </div>
            <Screenshot
              src="/images/services/report-plagiarism-view.png"
              alt="Checkmark plagiarism report displayed inside Buzz LMS integration"
              width={2000}
              height={1312}
              caption="Checkmark report view embedded inside Buzz LMS activity grading."
            />
          </div>
        </div>
      </section>

      {/* Administrator and Setup Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-brand-900 text-white p-8 md:p-12 shadow-medium">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  <Lock className="h-3.5 w-3.5" /> Admin &amp; IT Security
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Administrator &amp; Setup Information
                </h2>
                <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                  Buzz LMS Administrators register Checkmark in Domain Settings using standard LTI 1.3 deployment keys. Domain-wide provisioning enables instant teacher access across courses.
                </p>
              </div>
              <LinkButton href="/teacher-support" variant="hero" className="shrink-0">
                Setup Guide <ExternalLink className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>

            <div className="mt-8 border-t border-white/15 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-white/90">
              <div>
                <h4 className="font-semibold text-white mb-1">Standard</h4>
                <p className="text-white/70 text-xs">LTI 1.3 Advantage &amp; Buzz LMS Domain Tool Provider.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Permissions Required</h4>
                <p className="text-white/70 text-xs">Activity read, submission retrieval, gradebook write access.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Data Security &amp; FERPA</h4>
                <p className="text-white/70 text-xs">Full FERPA compliance. Data encrypted at rest &amp; in transit; non-training policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              Why schools choose Checkmark for Buzz LMS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={CheckCircle2}
                title="Embedded inside Buzz LMS activities"
                text="Keep student activity and teacher grading consolidated inside Buzz without managing external windows."
                tone="cyan"
              />
              <IconFeature
                icon={Cpu}
                title="Captures essay assessment process"
                text="Analyze written responses in Buzz assessment items with keystroke-by-keystroke writing process replay."
                tone="purple"
              />
              <IconFeature
                icon={ShieldCheck}
                title="Simplifies domain management"
                text="One-time admin setup at the Buzz LMS domain level makes Checkmark instantly available across all courses."
                tone="emerald"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <IntegrationFaq faqs={faqs} lmsName="Buzz LMS" />

      {/* Final Call to Action */}
      <ServiceCta
        title="Bring Checkmark to Buzz LMS"
        text="Upgrade your Buzz LMS courses with automated plagiarism, AI detection, and writing-process playback."
      />
    </main>
  );
}
