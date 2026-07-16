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
import { Card, CardContent } from "@/components/ui/card";
import FeatureHero from "@/sections/features/feature-hero";
import {
  Screenshot,
  IconFeature,
  RelatedLink,
  ServiceCta,
} from "@/sections/services/shared";

export const metadata: Metadata = {
  title: "AI Writing Detection — Checkmark Plagiarism",
  description:
    "Passage-level AI detection with calibrated confidence sliders, honest guardrails for short texts, and writing-process evidence to back the score up — built to start fair conversations.",
  openGraph: { images: ["/images/services/report-breakdown-sidebar.png"] },
};

export default function AiDetectionServicePage() {
  return (
    <main>
      <FeatureHero bgTint="bg-rose-200">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          AI detection that respects how high the stakes are
        </h1>
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          An accusation built on a single number isn&apos;t fair to anyone. Checkmark shows
          which passages look AI-written, how confident the model is, and — uniquely — how the
          text was actually typed, so the score never has to stand alone.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LinkButton href="#passage-level" size="sm">
            See what teachers get
          </LinkButton>
          <LinkButton href="/demo" size="sm" variant="outline">
            Test it yourself
          </LinkButton>
        </div>
      </FeatureHero>

      {/* Highlights */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
            <IconFeature
              icon={Sparkles}
              title="Passage-level, not paper-level"
              text="AI-flagged passages are underlined in the essay itself, each with its own evidence card — you see which parts, not just how much."
              accent="from-red-600/25 via-red-500/10"
            />
            <IconFeature
              icon={SlidersHorizontal}
              title="Calibrated confidence"
              text="Each finding shows a confidence gradient from human-like to AI-like instead of a false-precision decimal."
              accent="from-amber-600/25 via-amber-500/10"
            />
            <IconFeature
              icon={History}
              title="Backed by process evidence"
              text="The same report shows paste events and typing patterns, so an AI signal can be confirmed — or cleared — by how the text was written."
              accent="from-blue-600/25 via-blue-500/10"
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
              ring="ring-rose-300/60"
              caption="AI Detection cards sit alongside paste and plagiarism findings — one integrated picture."
            />
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                A slider, not a verdict
              </h2>
              <p className="mt-3 text-muted-foreground">
                Every AI finding renders as a gradient slider between typical human writing
                patterns and typical AI patterns. The report keeps a permanent reminder next to
                the score:
              </p>
              <Card className="mt-4 ring-1 ring-border bg-muted/50">
                <CardContent className="p-4">
                  <p className="text-sm italic text-muted-foreground">
                    &ldquo;Typical AI writing pattern versus typical human writing styles. Do not
                    solely rely on this score to determine AI authorship.&rdquo;
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    — the disclaimer shown on every AI Detection card, verbatim
                  </p>
                </CardContent>
              </Card>
              <p className="mt-4 text-muted-foreground">
                We put that in the product because it&apos;s true — of every AI detector,
                including ours. What makes the score usable is the evidence around it.
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
                text="Below ~150 words there isn't enough signal for a trustworthy AI score, so the report says N/A instead of guessing."
                accent="from-cyan-600/25 via-cyan-500/10"
              />
              <IconFeature
                icon={Scale}
                title="Findings start conversations"
                text="Flag statuses (Flagged, Resolved, Not Flagged) are teacher-only. Nothing is shown to a student as an accusation."
                accent="from-emerald-600/25 via-emerald-500/10"
              />
              <IconFeature
                icon={ShieldCheck}
                title="Cross-checked by process"
                text="An 'AI-like' passage that was visibly drafted, revised, and typo-corrected over 40 minutes tells a different story than one pasted in at once. The report shows both signals."
                accent="from-blue-600/25 via-blue-500/10"
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
              AI detectors — all of them — work on the finished text. Humanizer tools exist
              specifically to launder that text. But no tool can launder the writing session
              itself: a 900-word essay that appeared in one paste event, or was transcribed
              line-by-line at machine-steady speed, looks nothing like authentic drafting. That&apos;s
              why every Checkmark AI score ships inside a report that also reconstructs the
              writing process.
            </p>
            <div className="mt-8">
              <Screenshot
                src="/images/services/report-originality-tiles.png"
                alt="Report tiles: Overall, Total Pasted, Total Transcribed, Total Uncited, Total AI, with the Playback button"
                width={2000}
                height={123}
                caption="One glance: pasted, transcribed, uncited, and AI percentages side by side — plus Playback to see the session replayed."
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
