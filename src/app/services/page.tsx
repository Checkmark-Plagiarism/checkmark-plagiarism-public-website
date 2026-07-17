import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileSearch,
  Sparkles,
  History,
  GraduationCap,
  Plug,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link";
import FeatureHero from "@/sections/features/feature-hero";
import { ServiceCta } from "@/sections/services/shared";

export const metadata: Metadata = {
  title: "Services — Checkmark Plagiarism",
  description:
    "Everything Checkmark does for your classroom: plagiarism detection, AI writing detection, writing process analysis, an AI autograder, LMS integrations, and school analytics.",
  openGraph: { images: ["/images/services/report-plagiarism-view.png"] },
};

const services = [
  {
    href: "/services/plagiarism-detection",
    icon: FileSearch,
    title: "Plagiarism Detection",
    text: "Web-source matching with side-by-side quotes, links to the original source, and copies caught between classmates.",
    accent: "from-fuchsia-600/25 via-fuchsia-500/10",
  },
  {
    href: "/services/ai-detection",
    icon: Sparkles,
    title: "AI Writing Detection",
    text: "Passage-level AI signals with calibrated confidence — designed to start a fair conversation, not end one.",
    accent: "from-red-600/25 via-red-500/10",
  },
  {
    href: "/services/writing-process",
    icon: History,
    title: "Writing Process Analysis",
    text: "Replay how the essay was written. Paste events, transcription patterns, and a keystroke-level Playback.",
    accent: "from-blue-600/25 via-blue-500/10",
  },
  {
    href: "/services/autograder",
    icon: GraduationCap,
    title: "AI Autograder & Rubrics",
    text: "Rubric-based scores with written justifications and per-criterion feedback — teachers edit and publish on their terms.",
    accent: "from-emerald-600/25 via-emerald-500/10",
  },
  {
    href: "/services/integrations",
    icon: Plug,
    title: "LMS Integrations",
    text: "Canvas, Google Classroom, Buzz, ClassLink, and Clever — reports and grades where your classes already live.",
    accent: "from-amber-600/25 via-amber-500/10",
  },
  {
    href: "/services/analytics",
    icon: BarChart3,
    title: "School & District Analytics",
    text: "Integrity trends, writing metrics, and seat management across teachers, schools, and districts.",
    accent: "from-cyan-600/25 via-cyan-500/10",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <FeatureHero bgTint="bg-brand-300/60">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          One submission. Every answer a teacher needs.
        </h1>
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          A student turns in an essay once — Checkmark checks it against the web, screens for AI,
          reconstructs how it was written, and drafts rubric-based grades. Here is everything that
          happens, and how each piece works.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LinkButton href="/demo" size="sm">
            Try the live demo
          </LinkButton>
          <LinkButton href="/teacher-support" size="sm" variant="outline">
            Browse setup guides
          </LinkButton>
        </div>
      </FeatureHero>

      {/* Report screenshot intro */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Card className="overflow-hidden p-0 ring-1 ring-border shadow-medium">
              <CardContent className="p-0">
                <Image
                  src="/images/services/report-plagiarism-view.png"
                  alt="A real Checkmark report: originality tiles, autograder scores, highlighted essay, and the Plagiarism Breakdown sidebar"
                  width={2000}
                  height={1312}
                  priority
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              A real Checkmark report — originality tiles, autograder scores, the highlighted essay,
              and evidence cards, all on one page.{" "}
              <a
                href="https://teach.checkmarkplagiarism.com/example-report"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Explore the interactive example
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">Our services</h2>
            <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
              Each service works on its own — together they give you the full picture of every
              submission.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="group">
                  <Card className="h-full overflow-hidden ring-1 ring-border transition-smooth group-hover:ring-brand-400 group-hover:shadow-medium">
                    <div className={`h-2 bg-gradient-to-r ${s.accent} to-transparent`} />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                          <s.icon className="h-5 w-5 text-foreground/80" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-700 transition-smooth">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
                        Learn more
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCta
        title="Not sure where to start?"
        text="Paste an essay into the live demo and get the full report — plagiarism, AI, writing process, and autograder feedback — in about a minute."
      />
    </main>
  );
}
