import { Metadata } from "next";
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
import { LinkButton } from "@/components/ui/link";
import {
  ServiceHero,
  ServiceCta,
  Screenshot,
  toneClasses,
  type Tone,
} from "@/sections/services/shared";

export const metadata: Metadata = {
  title: "Services — Checkmark Plagiarism",
  description:
    "Everything Checkmark does for your classroom: plagiarism detection, AI writing detection, writing process analysis, an AI autograder, LMS integrations, and school analytics.",
  openGraph: { images: ["/images/services/report-plagiarism-view.png"] },
};

const services: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  tone: Tone;
}[] = [
  {
    href: "/services/plagiarism-detection",
    icon: FileSearch,
    title: "Plagiarism Detection",
    text: "Web-source matching with side-by-side quotes, links to the original source, and copies caught between classmates.",
    tone: "fuchsia",
  },
  {
    href: "/services/ai-detection",
    icon: Sparkles,
    title: "AI Writing Detection",
    text: "Passage-level AI signals with calibrated confidence — designed to start a fair conversation, not end one.",
    tone: "rose",
  },
  {
    href: "/services/writing-process",
    icon: History,
    title: "Writing Process Analysis",
    text: "Replay how the essay was written. Paste events, transcription patterns, and a keystroke-level Playback.",
    tone: "blue",
  },
  {
    href: "/services/autograder",
    icon: GraduationCap,
    title: "AI Autograder & Rubrics",
    text: "Rubric-based scores with written justifications and per-criterion feedback — teachers edit and publish on their terms.",
    tone: "emerald",
  },
  {
    href: "/services/integrations",
    icon: Plug,
    title: "LMS Integrations",
    text: "Canvas, Google Classroom, Buzz, ClassLink, and Clever — reports and grades where your classes already live.",
    tone: "amber",
  },
  {
    href: "/services/analytics",
    icon: BarChart3,
    title: "School & District Analytics",
    text: "Integrity trends, writing metrics, and seat management across teachers, schools, and districts.",
    tone: "cyan",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <ServiceHero
        title="One submission. Every answer a teacher needs."
        sub="A student turns in an essay once — Checkmark checks it against the web, screens for AI, reconstructs how it was written, and drafts rubric-based grades. Here is everything that happens, and how each piece works."
      >
        <LinkButton href="/demo" variant="hero">
          Try the live demo
        </LinkButton>
        <LinkButton href="/teacher-support" variant="outline-white">
          Browse setup guides
        </LinkButton>
      </ServiceHero>

      {/* Report screenshot intro */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Screenshot
              src="/images/services/report-plagiarism-view.png"
              alt="A real Checkmark report: originality tiles, autograder scores, highlighted essay, and the Plagiarism Breakdown sidebar"
              width={2000}
              height={1312}
              priority
            />
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
              {services.map((s) => {
                const t = toneClasses(s.tone);
                return (
                  <Link key={s.href} href={s.href} className="group">
                    <div
                      className={`h-full rounded-3xl p-6 ${t.box} transition-smooth group-hover:shadow-medium group-hover:-translate-y-0.5`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-11 w-11 rounded-lg ${t.chip} flex items-center justify-center flex-shrink-0`}
                        >
                          <s.icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-700 transition-smooth">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.text}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
                        Learn more
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
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
