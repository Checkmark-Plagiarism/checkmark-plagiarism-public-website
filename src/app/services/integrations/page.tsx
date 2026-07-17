import { Metadata } from "next";
import Image from "next/image";
import {
  KeyRound,
  Users,
  FileUp,
  Sparkles,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import { Card, CardContent } from "@/components/ui/card";
import FeatureHero from "@/sections/features/feature-hero";
import { IconFeature, RelatedLink, ServiceCta } from "@/sections/services/shared";

export const metadata: Metadata = {
  title: "LMS Integrations — Checkmark Plagiarism",
  description:
    "Canvas LTI 1.3, Google Classroom Add-On, Buzz, ClassLink, and Clever. Assignments sync in, reports open in context, and grades push back to your gradebook.",
  openGraph: { images: ["/images/services/report-plagiarism-view.png"] },
};

type Integration = {
  name: string;
  logo: string;
  logoW: number;
  logoH: number;
  tagline: string;
  teacher: string[];
  student: string;
  guide?: { href: string; label: string };
  badge?: string;
};

const lmsIntegrations: Integration[] = [
  {
    name: "Canvas LMS",
    logo: "/images/Canvas_Bug_Color_RGB.png",
    logoW: 64,
    logoH: 64,
    tagline: "LTI 1.3 — installed once by an admin, live for every course",
    teacher: [
      "Sync any Canvas assignment into Checkmark with one click",
      "Turn tracking on per assignment; process past submissions retroactively",
      "Open full reports from Canvas, no separate login",
      "Push autograder scores to SpeedGrader and publish to students",
    ],
    student:
      "Students submit through Canvas — including a typed essay editor that captures the writing process for Playback.",
    guide: { href: "/teacher-support/canvas-integration", label: "Canvas setup guide" },
  },
  {
    name: "Google Classroom",
    logo: "/images/Google-Classroom-Logo-700x394.png",
    logoW: 96,
    logoH: 54,
    tagline: "Official Classroom Add-On",
    teacher: [
      "Attach Checkmark to coursework directly from Classroom",
      "Rosters, assignments, and rubrics sync automatically",
      "Reports open inside Classroom in the add-on view",
      "Sync autograder scores back to Classroom",
    ],
    student:
      "Students work in Google Docs as usual — revision history comes along for full writing-process analysis.",
    guide: {
      href: "/teacher-support/google-classroom-support",
      label: "Google Classroom guide",
    },
  },
  {
    name: "Buzz LMS",
    logo: "/images/services/buzz_icon.png",
    logoW: 64,
    logoH: 64,
    tagline: "LTI 1.3 plus an embedded essay question for assessments",
    teacher: [
      "Deep-link Checkmark into Buzz activities",
      "Buzz rubrics convert automatically for the autograder",
      "Review typed-essay responses with full Playback",
      "Grades flow back into Buzz grading",
    ],
    student:
      "A Checkmark essay box can live inside a Buzz assessment — students just type, and the writing process is captured.",
  },
];

const rosterIntegrations: Integration[] = [
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
    student: "One click from the LaunchPad — no new passwords.",
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
      <FeatureHero bgTint="bg-amber-200">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Checkmark works where your classes already live
        </h1>
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Assignments sync in from your LMS, reports open in context, and grades push back to the
          gradebook. Teachers keep their workflow; Checkmark does its work underneath it.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LinkButton href="#lms" size="sm">
            LMS integrations
          </LinkButton>
          <LinkButton href="/teacher-support" size="sm" variant="outline">
            Setup guides
          </LinkButton>
        </div>
      </FeatureHero>

      {/* LMS cards */}
      <section id="lms" className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-8">
            {lmsIntegrations.map((integ) => (
              <Card key={integ.name} className="ring-1 ring-border overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                      <div className="h-16 w-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                        <Image
                          src={integ.logo}
                          alt={`${integ.name} logo`}
                          width={integ.logoW}
                          height={integ.logoH}
                          className="object-contain max-h-12 w-auto"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{integ.name}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{integ.tagline}</p>
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          For teachers
                        </h4>
                        <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
                          {integ.teacher.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          For students
                        </h4>
                        <p className="mt-2 text-sm text-muted-foreground">{integ.student}</p>
                        {integ.guide && (
                          <div className="mt-4">
                            <RelatedLink href={integ.guide.href} label={integ.guide.label} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Canvas Asset Processor early access note */}
            <div className="flex items-start gap-3 rounded-xl border border-dashed border-brand-400/60 bg-brand-50/50 p-5">
              <Sparkles className="h-5 w-5 mt-0.5 text-brand-700 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Early access — originality &amp; AI results inside SpeedGrader.
                </span>{" "}
                Built on Canvas&apos;s new Document Processor standard: students submit natively in
                Canvas, and Checkmark&apos;s originality and AI chips appear right on each file in
                SpeedGrader, with the full report one click away.{" "}
                <a href="/contact" className="text-primary underline">
                  Contact us
                </a>{" "}
                to join the pilot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rostering & SSO */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Rostering &amp; single sign-on
            </h2>
            <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
              District-wide identity without district-wide headaches.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {rosterIntegrations.map((integ) => (
                <Card key={integ.name} className="ring-1 ring-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-xl bg-background ring-1 ring-border flex items-center justify-center overflow-hidden">
                        <Image
                          src={integ.logo}
                          alt={`${integ.name} logo`}
                          width={integ.logoW}
                          height={integ.logoH}
                          className="object-contain max-h-10 w-auto"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{integ.name}</h3>
                        <p className="text-xs text-muted-foreground">{integ.tagline}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
                      {integ.teacher.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                      <li>{integ.student}</li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Google and Microsoft sign-in are built in for everyone else — no passwords to manage
              either way.
            </p>
          </div>
        </div>
      </section>

      {/* No-LMS path */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">No LMS? No problem.</h2>
            <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
              The Checkmark web app stands alone: create courses, share an enrollment code, and
              collect submissions directly.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={FileUp}
                title="Flexible submissions"
                text="Students upload Word documents, import straight from Google Drive, or pull files in from OneDrive."
                accent="from-blue-600/25 via-blue-500/10"
              />
              <IconFeature
                icon={Users}
                title="Simple rosters"
                text="Enroll students by email or share a class code — bulk roster upload included."
                accent="from-emerald-600/25 via-emerald-500/10"
              />
              <IconFeature
                icon={KeyRound}
                title="Google & Microsoft sign-in"
                text="Students sign in with the school account they already have."
                accent="from-amber-600/25 via-amber-500/10"
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
        text="Most integrations are a one-time, 15-minute admin setup. Our guides walk through every step — or we'll do it with you on a call."
      />
    </main>
  );
}
