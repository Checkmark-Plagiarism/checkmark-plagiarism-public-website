import { Metadata } from "next";
import {
  Sparkles,
  SlidersHorizontal,
  ShieldCheck,
  Scale,
  History,
  AlertCircle,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import {
  ServiceHero,
  Screenshot,
  IconFeature,
  RelatedLink,
  ServiceCta,
} from "@/sections/services/shared";

export const metadata: Metadata = {
  title: "AI Writing Detection - Checkmark Plagiarism",
  description:
    "Passage-level AI detection with calibrated confidence sliders, honest guardrails for short texts, and writing-process evidence to back the score up - built to start fair conversations.",
  openGraph: { images: ["/images/services/report-breakdown-sidebar.png"] },
};

export default function AiDetectionServicePage() {
  return (
    <main>
      <ServiceHero
        title="AI detection that respects how high the stakes are"
        sub="AI writing detection is more than spotting one punctuation mark or a familiar phrase. Checkmark analyzes the relationships among grammar, word choice, sentence structure, and rhythm, then shows which passages strongly resemble generated writing and how the text was actually typed."
      >
        <LinkButton href="#passage-level" variant="hero">
          See what teachers get
        </LinkButton>
        <LinkButton href="/demo" variant="outline-white">
          Test it yourself
        </LinkButton>
      </ServiceHero>

      {/* Highlights */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
            <IconFeature
              icon={Sparkles}
              title="Passage-level, not paper-level"
              text="AI-flagged passages are underlined in the essay itself, each with its own evidence card - you see which parts, not just how much."
              tone="rose"
            />
            <IconFeature
              icon={SlidersHorizontal}
              title="Calibrated confidence"
              text="Each finding shows how strongly a passage resembles patterns common in AI-generated writing - a high-confidence signal, not a claim about authorship."
              tone="amber"
            />
            <IconFeature
              icon={History}
              title="Backed by process evidence"
              text="The same report shows paste events and typing patterns, so an AI signal can be confirmed - or cleared - by how the text was written."
              tone="blue"
            />
          </div>
        </div>
      </section>

      {/* Passage level detail */}
      <section id="passage-level" className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Screenshot
              src="/images/services/report-breakdown-sidebar.png"
              alt="AI Detection cards in the report sidebar with confidence sliders"
              width={864}
              height={1484}
              caption="AI Detection cards sit alongside paste and plagiarism findings - one integrated picture."
            />
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                A signal, not a verdict
              </h2>
              <p className="mt-3 text-muted-foreground">
                Every AI finding renders as a gradient slider between typical human-writing
                patterns and typical AI-writing patterns. It communicates the strength of the
                signal without pretending that a finished passage can prove who wrote it:
              </p>
              <div className="mt-4 rounded-2xl bg-muted p-5">
                <p className="text-sm text-muted-foreground">
                  Typical AI writing pattern versus typical human writing styles. Do not solely
                  rely on this score to determine AI authorship.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  This disclaimer appears on every AI Detection card.
                </p>
              </div>
              <p className="mt-4 text-muted-foreground">
                We put that in the product because it&apos;s true - of every AI detector, including
                ours. What makes the signal useful is the evidence around it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guardrails */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Guardrails we build in
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={AlertCircle}
                title="Short texts say N/A"
                text="Below ~150 words there isn't enough signal for a trustworthy AI-writing finding, so the report says N/A instead of guessing."
                tone="cyan"
              />
              <IconFeature
                icon={Scale}
                title="Findings start conversations"
                text="Flag statuses (Flagged, Resolved, Not Flagged) are teacher-only. Nothing is shown to a student as an accusation."
                tone="emerald"
              />
              <IconFeature
                icon={ShieldCheck}
                title="Cross-checked by process"
                text="A passage that strongly resembles generated writing but was visibly drafted, revised, and typo-corrected over 40 minutes tells a different story than one pasted in at once. The report shows both signals."
                tone="blue"
              />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <RelatedLink
                href="/learning"
                label="Learning Center: how AI detection works"
              />
              <RelatedLink
                href="/services/writing-process"
                label="Writing Process Analysis"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why both signals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Why detection alone was never enough
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AI detectors - all of them - work on the finished text. Humanizer tools exist
              specifically to launder that text. But no tool can launder the writing session
              itself: a 900-word essay that appeared in one paste event, or was transcribed
              line-by-line at machine-steady speed, looks nothing like authentic drafting. That&apos;s
              why every Checkmark AI-writing finding ships inside a report that also reconstructs the
              writing process.
            </p>
            <div className="mt-8">
              <Screenshot
                src="/images/services/report-originality-tiles.png"
                alt="Report tiles: Overall, Total Pasted, Total Transcribed, Total Uncited, Total AI, with the Playback button"
                width={2000}
                height={123}
                caption="One glance: pasted, transcribed, uncited, and AI percentages side by side - plus Playback to see the session replayed."
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceCta
        title="Judge it on your own essays"
        text="Paste real student writing (or ChatGPT output) into the demo and see the full report in about a minute."
      />
    </main>
  );
}
