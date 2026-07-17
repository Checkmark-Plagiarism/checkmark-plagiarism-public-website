import { Metadata } from "next";
import {
  Globe,
  Quote,
  Users,
  ClipboardPaste,
  Link2,
  MessageSquare,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import {
  ServiceHero,
  Screenshot,
  IconFeature,
  NumberedStep,
  RelatedLink,
  ServiceCta,
} from "@/sections/services/shared";

export const metadata: Metadata = {
  title: "Plagiarism Detection — Checkmark Plagiarism",
  description:
    "Web-source matching with side-by-side quotes and links to the original, uncited-source flags, and copies caught between classmates — evidence teachers can actually defend.",
  openGraph: { images: ["/images/services/report-plagiarism-view.png"] },
};

export default function PlagiarismDetectionServicePage() {
  return (
    <main>
      <ServiceHero
        title="Plagiarism detection with evidence you can defend"
        sub="Every match comes with the receipt: the exact passage, the source it matches, and a link to the original. No mystery percentages — just evidence a teacher can put in front of a student, a parent, or an administrator."
      >
        <LinkButton href="#how-it-works" variant="hero">
          See how it works
        </LinkButton>
        <LinkButton href="/demo" variant="outline-white">
          Try it on a real essay
        </LinkButton>
      </ServiceHero>

      {/* What it catches */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
            <IconFeature
              icon={Globe}
              title="Web-source matches"
              text="Passages that match published web sources are flagged with a similarity score and a clickable link to the original page."
              tone="fuchsia"
            />
            <IconFeature
              icon={Quote}
              title="Uncited references"
              text="Text that leans on a source without citing it gets its own tile and underline style, so citation coaching is easy to target."
              tone="purple"
            />
            <IconFeature
              icon={Users}
              title="Copies between students"
              text="When a passage matches another student's submission, the evidence card says so directly — peer copying doesn't hide."
              tone="blue"
            />
          </div>
        </div>
      </section>

      {/* Big screenshot */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Screenshot
              src="/images/services/report-plagiarism-view.png"
              alt="Checkmark plagiarism report with highlighted passages and the Plagiarism Breakdown sidebar"
              width={2000}
              height={1312}
              priority
              caption="The report highlights each finding directly in the essay. Click a highlight and the matching evidence card scrolls into view — and vice versa."
            />
          </div>
        </div>
      </section>

      {/* Evidence cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Every match shows its source
              </h2>
              <p className="mt-3 text-muted-foreground">
                The Plagiarism Breakdown sidebar holds one card per finding. Expand{" "}
                <em>Show quote</em> on a plagiarism card and you get the matched passage in full,
                the similarity score, and the source link — a Wikipedia article, a news story, an
                essay mill page, or another student&apos;s submission.
              </p>
              <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Side-by-side quote with the original source</li>
                <li>Clickable source URLs for instant verification</li>
                <li>
                  Peer matches labeled as student submissions — no source URL games, just the fact
                </li>
                <li>Similarity score per finding, not one blended number</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <RelatedLink
                  href="/teacher-support/reading-the-report"
                  label="Guide: reading the report"
                />
              </div>
            </div>
            <Screenshot
              src="/images/services/report-source-quote.png"
              alt="Plagiarism evidence card expanded to show the matched quote and its source link"
              width={864}
              height={1484}
              caption="A plagiarism card with the quote expanded and the matching source linked."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center">How it works</h2>
            <div className="mt-10 space-y-8">
              <NumberedStep
                n="1"
                title="Students submit once"
                text="Word docs, Google Docs, or typed submissions arrive through your LMS, a shared link, or the Checkmark web app."
              />
              <NumberedStep
                n="2"
                title="We check the web — and the class"
                text="Each passage is compared against web sources and against other submissions, so both internet copying and peer copying surface."
              />
              <NumberedStep
                n="3"
                title="Findings become evidence cards"
                text="Matches show up as highlights in the essay and cards in the sidebar: quote, score, and source link together."
              />
              <NumberedStep
                n="4"
                title="Teachers act with confidence"
                text="Flag the submission, resolve it, or clear it — the flag status stays private to teachers, so nothing reaches a student before you decide."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beyond text matching */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Matching text is only half the story
            </h2>
            <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
              Paraphrasing tools and retyping can beat a text matcher. That&apos;s why the same
              report also reconstructs <em>how</em> the essay was written.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={ClipboardPaste}
                title="External Paste events"
                text="Text pasted in from outside the document is captured with the full original paste — even if it was edited afterward."
                tone="amber"
              />
              <IconFeature
                icon={Link2}
                title="Transcription patterns"
                text="Typing that mirrors an existing source — retyped from a phone, a second screen, or dictation — shows up as a Transcribed finding."
                tone="sky"
              />
              <IconFeature
                icon={MessageSquare}
                title="Playback for the conversation"
                text="Replay the writing session keystroke by keystroke when you need to see exactly what happened before talking with the student."
                tone="emerald"
              />
            </div>
            <div className="mt-8 text-center">
              <LinkButton href="/services/writing-process" variant="outline">
                Explore Writing Process Analysis
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <ServiceCta />
    </main>
  );
}
