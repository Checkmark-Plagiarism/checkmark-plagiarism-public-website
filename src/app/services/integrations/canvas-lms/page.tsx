import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  GraduationCap,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  ExternalLink,
  Sparkles,
  FileCheck2,
  Sliders,
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
  title: "Canvas LMS Plagiarism Checker Integration | Checkmark",
  description:
    "Connect Checkmark with Canvas LMS to review plagiarism, AI-writing indicators, student submissions, writing evidence, rubrics, and grades.",
  alternates: {
    canonical: "https://checkmarkplagiarism.com/services/integrations/canvas-lms",
  },
  openGraph: {
    title: "Canvas LMS Plagiarism Checker Integration | Checkmark",
    description:
      "Connect Checkmark with Canvas LMS to review plagiarism, AI-writing indicators, student submissions, writing evidence, rubrics, and grades.",
    url: "https://checkmarkplagiarism.com/services/integrations/canvas-lms",
    siteName: "Checkmark Plagiarism",
    images: [{ url: "/images/Canvas_Bug_Color_RGB.png", width: 400, height: 400 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvas LMS Plagiarism Checker Integration | Checkmark",
    description:
      "Connect Checkmark with Canvas LMS to review plagiarism, AI-writing indicators, student submissions, writing evidence, rubrics, and grades.",
    images: ["/images/Canvas_Bug_Color_RGB.png"],
  },
};

const faqs = [
  {
    question: "Does Canvas automatically check for plagiarism?",
    answer:
      "Canvas LMS does not include built-in plagiarism or AI detection out of the box. Institutions connect third-party LTI 1.3 tools like Checkmark to automatically scan submissions for text similarity, AI writing patterns, and writing-process evidence directly within Canvas.",
  },
  {
    question: "What plagiarism checkers integrate with Canvas?",
    answer:
      "Checkmark provides a modern, LTI 1.3-certified integration for Canvas LMS that combines web plagiarism scanning, peer-to-peer matching, AI detection, and document revision history without requiring separate logins or file transfers.",
  },
  {
    question: "How does Checkmark connect to Canvas LMS?",
    answer:
      "Checkmark connects using LTI 1.3 (Learning Tools Interoperability) and Canvas Developer Keys. A Canvas administrator installs Checkmark once at the root or sub-account level, making it immediately available across all courses and assignments.",
  },
  {
    question: "Does Checkmark work with SpeedGrader?",
    answer:
      "Yes. Checkmark embeds directly alongside Canvas SpeedGrader. Teachers can view originality highlights, AI indicators, and writing playback side-by-side with student submissions while entering grades and rubric criteria.",
  },
  {
    question: "Can Checkmark return grades to Canvas?",
    answer:
      "Yes. Checkmark features full Grade Passback capability. Scores evaluated in Checkmark or autograded using Canvas rubric conversions flow directly into the Canvas Gradebook and SpeedGrader.",
  },
  {
    question: "Can Checkmark detect AI-generated essays?",
    answer:
      "Yes. Checkmark analyzes student submissions for AI-generated text characteristics alongside document revision signals, copy-paste events, and typing cadences to provide reliable, defensible writing insights.",
  },
  {
    question: "Does the integration require a Canvas administrator?",
    answer:
      "Initial configuration requires a Canvas administrator to add the Checkmark LTI 1.3 Developer Key and Client ID to your Canvas instance. Once configured by an admin, course teachers can enable Checkmark on any assignment with a simple toggle.",
  },
  {
    question: "Which Canvas assignment types are supported?",
    answer:
      "Checkmark supports Online Submissions in Canvas including File Uploads (.docx, Google Docs), Text Entry, and External Tool assignments.",
  },
];

export default function CanvasLMSIntegrationPage() {
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
            "name": "Canvas LMS",
            "item": "https://checkmarkplagiarism.com/services/integrations/canvas-lms",
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
                Canvas LMS
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <ServiceHero
        title="Plagiarism and AI detection inside Canvas LMS"
        sub="Connect Checkmark via LTI 1.3 to analyze student submissions, review AI-writing indicators, leverage SpeedGrader integration, convert Canvas rubrics, and publish grades without leaving Canvas."
      >
        <LinkButton href="/demo" variant="hero">
          Request a Demo
        </LinkButton>
        <LinkButton href="/teacher-support/canvas-integration" variant="outline-white">
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
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-rose-50 flex items-center justify-center p-6">
                    <Image
                      src="/images/Canvas_Bug_Color_RGB.png"
                      alt="Canvas LMS Plagiarism Checker Integration"
                      width={200}
                      height={200}
                      className="object-contain max-h-40 w-auto"
                      priority
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-800">
                    <Sparkles className="h-3.5 w-3.5" /> LTI 1.3 Advantage Certified
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    Deep integration with SpeedGrader &amp; Canvas Rubrics
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Install Checkmark once at the account level. Teachers can turn integrity tracking on for any Canvas assignment, view reports in SpeedGrader, and pass back grades automatically.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>SpeedGrader support &amp; Canvas Asset Processor early access</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Gradebook passback &amp; Canvas rubric conversion</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Writing process keystroke playback for typed submissions</span>
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
              Powerful academic integrity built into Canvas LMS
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Checkmark connects directly into your Canvas courses so educators can evaluate text similarity, AI probability, and document revision histories within their standard grading routines.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <IconFeature
              icon={Zap}
              title="Launch from Canvas"
              text="Open Checkmark reports directly within Canvas assignments, course navigation, or SpeedGrader without separate credentials."
              tone="rose"
            />
            <IconFeature
              icon={GraduationCap}
              title="SpeedGrader &amp; Rubrics"
              text="View originality chips alongside submitted student files, score assignments with converted Canvas rubrics, and publish grades."
              tone="purple"
            />
            <IconFeature
              icon={ShieldCheck}
              title="Plagiarism & AI Analysis"
              text="Identify web similarity matches, uncited quotes, peer-to-peer copies, and AI writing indicators with defensible evidence."
              tone="emerald"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              How the Canvas LMS integration works
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              A 6-step workflow that fits perfectly into your institution&apos;s Canvas ecosystem.
            </p>

            <div className="mt-10 space-y-6">
              <NumberedStep
                n="1"
                title="Admin installs Checkmark LTI 1.3 key"
                text="Your Canvas Administrator configures the Checkmark Developer Key in Canvas Root Admin once for all courses."
              />
              <NumberedStep
                n="2"
                title="Rosters and courses sync automatically"
                text="Canvas courses, sections, teacher roles, and student enrollments synchronize securely via Canvas OAuth APIs."
              />
              <NumberedStep
                n="3"
                title="Teachers create Canvas assignments"
                text="Enable Checkmark tracking on any Canvas Online Submission assignment with a single click."
              />
              <NumberedStep
                n="4"
                title="Students submit work natively"
                text="Students submit Word files, Google Docs, or text entries in Canvas as usual-no new interfaces to learn."
              />
              <NumberedStep
                n="5"
                title="Checkmark analyzes submissions"
                text="Text similarity scans run against web sources and peer repositories while capturing writing process evidence."
              />
              <NumberedStep
                n="6"
                title="Review in SpeedGrader and pass back grades"
                text="Inspect integrity reports inside SpeedGrader, grade with rubrics, and sync final scores directly to Canvas."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Canvas-Specific Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Features built specifically for Canvas LMS
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Purpose-built capabilities engineered to extend Canvas&apos;s teaching and administrative toolset.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">LTI 1.3 Advantage Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern LTI 1.3 architecture with Deep Linking, Names and Role Provisioning, and Assignment and Grade Services.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">SpeedGrader Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Originality flags and AI probability chips appear directly beside student submissions inside Canvas SpeedGrader.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Canvas Asset Processor Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Built on Canvas&apos;s latest Document Processor standard for direct in-line file inspection and score badges.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Grade Passback to Canvas</h3>
                  <p className="text-sm text-muted-foreground">
                    Send autograder scores or teacher adjustments straight into the Canvas Gradebook with zero manual export files.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Canvas Rubric Conversion</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically convert Canvas assignment rubrics into Checkmark autograding criteria for consistent evaluation.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Account &amp; Sub-Account Scope</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploy globally across an entire university system, or restrict tool access to specific Canvas sub-accounts and departments.
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
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Teacher Experience</span>
              <h2 className="text-3xl font-bold text-foreground">How teachers grade with Checkmark in Canvas</h2>
              <p className="text-muted-foreground leading-relaxed">
                When evaluating an essay in Canvas, teachers open SpeedGrader to find Checkmark&apos;s analysis ready:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li><strong className="text-foreground">Originality highlights:</strong> View exact text matches against web sources and peer essays.</li>
                <li><strong className="text-foreground">AI writing metrics:</strong> Review clear probability indicators with underlying explanations.</li>
                <li><strong className="text-foreground">Keystroke playback:</strong> Watch typing progression for submissions typed in Canvas or Google Docs.</li>
                <li><strong className="text-foreground">Automatic Grade Passback:</strong> Publish final grades directly into the Canvas gradebook.</li>
              </ul>
              <div className="pt-2">
                <RelatedLink href="/teacher-support/canvas-integration" label="Read the Canvas LMS setup guide" />
              </div>
            </div>
            <Screenshot
              src="/images/lander/canvas/canvas-hero.jpg"
              alt="Checkmark plagiarism report displayed inside Canvas LMS integration"
              width={2000}
              height={1312}
              caption="Checkmark integration panel running alongside Canvas LMS coursework."
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
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-rose-300">
                  <Lock className="h-3.5 w-3.5" /> Admin &amp; IT Security
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Administrator &amp; Setup Information
                </h2>
                <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                  Canvas Administrators deploy Checkmark by creating a Developer Key in Canvas Admin and installing the Client ID at the root or sub-account level. No server infrastructure required.
                </p>
              </div>
              <LinkButton href="/teacher-support/canvas-integration" variant="hero" className="shrink-0">
                Setup Guide <ExternalLink className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>

            <div className="mt-8 border-t border-white/15 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-white/90">
              <div>
                <h4 className="font-semibold text-white mb-1">Standard</h4>
                <p className="text-white/70 text-xs">LTI 1.3 Advantage &amp; Canvas Developer Key authorization.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Permissions Scope</h4>
                <p className="text-white/70 text-xs">Canvas Submissions (read), Users &amp; Roles (read), Gradebook (write).</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Data Security &amp; FERPA</h4>
                <p className="text-white/70 text-xs">Encrypted in transit &amp; at rest. Strict non-training privacy commitment.</p>
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
              Why institutions choose Checkmark for Canvas LMS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={CheckCircle2}
                title="Keeps review inside Canvas workflow"
                text="Faculty check student work inside SpeedGrader without opening external windows or managing passwords."
                tone="rose"
              />
              <IconFeature
                icon={FileCheck2}
                title="Eliminates manual file exports"
                text="Submissions, rubrics, and grades synchronize automatically, saving teachers hours every grading cycle."
                tone="purple"
              />
              <IconFeature
                icon={ShieldCheck}
                title="Provides defensible integrity evidence"
                text="Empower teachers with detailed text matches, AI confidence metrics, and writing process keystroke playback."
                tone="emerald"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <IntegrationFaq faqs={faqs} lmsName="Canvas LMS" />

      {/* Final Call to Action */}
      <ServiceCta
        title="Bring Checkmark into Canvas LMS"
        text="Empower your faculty with modern plagiarism, AI detection, and writing evidence inside Canvas LMS."
      />
    </main>
  );
}
