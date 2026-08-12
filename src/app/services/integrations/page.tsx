import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  KeyRound,
  Users,
  FileUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import {
  ServiceHero,
  IconFeature,
  RelatedLink,
  ServiceCta,
} from "@/sections/services/shared";

export const metadata: Metadata = {
  title: "LMS & Educational Integrations - Checkmark Plagiarism",
  description:
    "Connect Checkmark with Google Classroom, Canvas LMS, Buzz LMS, ClassLink, and Clever. Assignments sync, reports open in context, and grades push back to your gradebook.",
  alternates: {
    canonical: "https://checkmarkplagiarism.com/services/integrations",
  },
  openGraph: {
    title: "LMS & Educational Integrations - Checkmark Plagiarism",
    description:
      "Connect Checkmark with Google Classroom, Canvas LMS, Buzz LMS, ClassLink, and Clever.",
    url: "https://checkmarkplagiarism.com/services/integrations",
    siteName: "Checkmark Plagiarism",
    images: ["/images/services/report-plagiarism-view.png"],
  },
};

type LmsCardData = {
  name: string;
  href: string;
  linkText: string;
  logo: string;
  logoW: number;
  logoH: number;
  description: string;
  highlights: string[];
  studentNote: string;
  guide?: { href: string; label: string };
};

const lmsCards: LmsCardData[] = [
  {
    name: "Google Classroom",
    href: "/services/integrations/google-classroom",
    linkText: "Explore the Google Classroom integration",
    logo: "/images/Google-Classroom-Logo-700x394.png",
    logoW: 96,
    logoH: 54,
    description:
      "Official Google Classroom Add-On that connects assignments, Google Docs revision history, and student submissions directly to Checkmark.",
    highlights: [
      "Attach Checkmark to coursework directly from Google Classroom",
      "Analyze Google Docs revision history, typing speed, and external paste events",
      "Automatic Google Classroom course and roster synchronization",
      "Return grades and rubric feedback directly to the Google Classroom gradebook",
    ],
    studentNote:
      "Students work in Google Docs as usual - revision history comes along for full writing-process analysis.",
    guide: {
      href: "/teacher-support/google-classroom-support",
      label: "Google Classroom setup guide",
    },
  },
  {
    name: "Canvas LMS",
    href: "/services/integrations/canvas-lms",
    linkText: "Explore the Canvas LMS integration",
    logo: "/images/Canvas_Bug_Color_RGB.png",
    logoW: 64,
    logoH: 64,
    description:
      "Certified LTI 1.3 integration that embeds originality reports, AI indicators, and writing playback into Canvas SpeedGrader.",
    highlights: [
      "Launch Checkmark reports directly from Canvas assignments and SpeedGrader",
      "Early access to Canvas Document Processor for native score badges on file submissions",
      "Automatic Grade Passback and Canvas rubric conversion for autograding",
      "Account-level and sub-account level administration for schools and universities",
    ],
    studentNote:
      "Students submit natively through Canvas - including a typed essay editor that captures writing process telemetry.",
    guide: {
      href: "/teacher-support/canvas-integration",
      label: "Canvas LMS setup guide",
    },
  },
  {
    name: "Buzz LMS",
    href: "/services/integrations/buzz-lms",
    linkText: "Explore the Buzz LMS integration",
    logo: "/images/services/buzz_icon.png",
    logoW: 64,
    logoH: 64,
    description:
      "LTI 1.3 integration featuring an embedded essay question tool for Buzz LMS assessments and activities.",
    highlights: [
      "Deep-link Checkmark into Buzz LMS activities and online assessments",
      "Custom essay box inside Buzz assessments captures the writing process as students type",
      "Buzz LMS rubrics convert automatically for automated autograding and comments",
      "Grades and evaluation feedback flow back directly into Buzz LMS grading",
    ],
    studentNote:
      "A Checkmark essay box can live inside a Buzz LMS assessment - students type, and the writing process is recorded.",
  },
];

const rosterIntegrations = [
  {
    name: "ClassLink",
    logo: "/images/services/classlink-logo.png",
    logoW: 56,
    logoH: 56,
    tagline: "Single sign-on + OneRoster rostering",
    teacher: [
      "Teachers and students sign in with their ClassLink launchpad",
      "Classes import from OneRoster with students already enrolled",
    ],
    student: "One click from the LaunchPad - no new passwords.",
  },
  {
    name: "Clever",
    logo: "/images/services/clever-c.png",
    logoW: 56,
    logoH: 56,
    tagline: "Single sign-on + section rostering",
    teacher: [
      "Sign in with Clever accounts district-wide",
      "Sections sync to Checkmark courses with enrollment handled",
    ],
    student: "Works even for students without email addresses.",
  },
];

export default function IntegrationsServicePage() {
  return (
    <main>
      <ServiceHero
        title="Checkmark works where your classes already live"
        sub="Assignments sync in from your LMS, reports open in context, and grades push back to the gradebook. Teachers keep their workflow; Checkmark does its work underneath it."
      >
        <LinkButton href="#lms" variant="hero">
          LMS integrations
        </LinkButton>
        <LinkButton href="#sso" variant="outline-white">
          Rostering &amp; SSO
        </LinkButton>
        <LinkButton href="/teacher-support" variant="outline-white">
          Setup guides
        </LinkButton>
      </ServiceHero>

      {/* Contextual Link Intro Banner */}
      <section className="bg-brand-50 border-b border-border py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm md:text-base text-foreground font-medium max-w-4xl mx-auto leading-relaxed">
            Checkmark integrates natively with{" "}
            <Link
              href="/services/integrations/google-classroom"
              className="text-primary font-semibold underline hover:text-brand-700 transition-colors"
            >
              Google Classroom
            </Link>
            ,{" "}
            <Link
              href="/services/integrations/canvas-lms"
              className="text-primary font-semibold underline hover:text-brand-700 transition-colors"
            >
              Canvas LMS
            </Link>
            , and{" "}
            <Link
              href="/services/integrations/buzz-lms"
              className="text-primary font-semibold underline hover:text-brand-700 transition-colors"
            >
              Buzz LMS
            </Link>{" "}
            so teachers can review plagiarism, AI writing indicators, and writing evidence directly within their existing course workflows.
          </p>
        </div>
      </section>

      {/* LMS Integrations Section */}
      <section id="lms" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Learning Management Systems
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-1">LMS integrations</h2>
              <p className="mt-2 text-muted-foreground text-sm max-w-2xl">
                Dedicated integrations for leading Learning Management Systems, designed to keep academic integrity inside your school&apos;s daily routines.
              </p>
            </div>

            <div className="space-y-8">
              {lmsCards.map((integ) => (
                <div
                  key={integ.name}
                  className="rounded-3xl bg-white border border-border p-6 md:p-8 shadow-soft hover:shadow-medium transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex flex-col items-start gap-4 md:w-64 shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-2xl bg-muted/30 border border-border flex items-center justify-center overflow-hidden p-2">
                          <Image
                            src={integ.logo}
                            alt={`${integ.name} logo`}
                            width={integ.logoW}
                            height={integ.logoH}
                            className="object-contain max-h-12 w-auto"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            <Link href={integ.href} className="hover:text-primary transition-colors">
                              {integ.name}
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {integ.description}
                      </p>
                      <Link
                        href={integ.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-brand-700 transition-colors"
                      >
                        <span>{integ.linkText}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                          Supported Capability Highlights
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                          {integ.highlights.map((h) => (
                            <li key={h} className="leading-snug">
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                            For Students
                          </h4>
                          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                            {integ.studentNote}
                          </p>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <Link
                            href={integ.href}
                            className="inline-flex items-center justify-center rounded-xl bg-brand-900 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700 transition-colors shadow-sm"
                          >
                            {integ.linkText}
                          </Link>
                          {integ.guide && (
                            <RelatedLink href={integ.guide.href} label={integ.guide.label} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Canvas Asset Processor early access note */}
            <div className="mt-8 flex items-start gap-3 rounded-3xl bg-brand-100 p-6 border border-brand-200">
              <Sparkles className="h-5 w-5 mt-0.5 text-brand-700 shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Early access - originality &amp; AI results inside SpeedGrader.
                </span>{" "}
                Built on Canvas&apos;s new Document Processor standard: students submit natively in
                Canvas, and Checkmark&apos;s originality and AI chips appear right on each file in
                SpeedGrader, with the full report one click away.{" "}
                <Link href="/contact" className="text-primary underline font-medium">
                  Contact us
                </Link>{" "}
                to join the pilot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Sign-on & Rostering Integrations */}
      <section id="sso" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Authentication &amp; Provisioning
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-1">
                Single sign-on and rostering
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">
                District-wide identity and class roster provisioning without district-wide headaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rosterIntegrations.map((integ) => (
                <div key={integ.name} className="rounded-3xl bg-white border border-border p-6 sm:p-8 shadow-soft">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center overflow-hidden p-2">
                      <Image
                        src={integ.logo}
                        alt={`${integ.name} logo`}
                        width={integ.logoW}
                        height={integ.logoH}
                        className="object-contain max-h-10 w-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{integ.name}</h3>
                      <p className="text-xs text-muted-foreground">{integ.tagline}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    {integ.teacher.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                    <li>{integ.student}</li>
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Google and Microsoft sign-in are built in for everyone else - no passwords to manage either way.
            </p>
          </div>
        </div>
      </section>

      {/* Standalone Web App / Storage Path */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Standalone &amp; Cloud Storage
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-1">
                Document, storage &amp; web app access
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">
                No LMS? No problem. The Checkmark web app stands alone: create courses, share an enrollment code, and collect submissions directly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={FileUp}
                title="Document &amp; Cloud Storage"
                text="Students upload Word documents, import straight from Google Drive, or pull files in from OneDrive."
                tone="blue"
              />
              <IconFeature
                icon={Users}
                title="Simple Class Rosters"
                text="Enroll students by email or share a class code - bulk roster upload and OneRoster files included."
                tone="emerald"
              />
              <IconFeature
                icon={KeyRound}
                title="Google &amp; Microsoft SSO"
                text="Students sign in securely with the Google or Microsoft school accounts they already use daily."
                tone="amber"
              />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <RelatedLink href="/teacher-support/web-app-support" label="Web app guide" />
              <RelatedLink
                href="/student-support/submitting-your-work"
                label="Student guide: submitting work"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceCta
        title="Get Checkmark into your LMS"
        text="Most integrations are a one-time, 15-minute admin setup. Our guides walk through every step - or we'll do it with you on a call."
      />
    </main>
  );
}
