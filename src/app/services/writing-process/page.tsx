import { Metadata } from "next";
import {
  PlayCircle,
  ClipboardPaste,
  Keyboard,
  FileText,
  Timer,
  ShieldCheck,
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
  title: "Writing Process Analysis — Checkmark Plagiarism",
  description:
    "Replay how an essay was written: keystroke-level Playback, External Paste evidence with the full original text, and transcription patterns. The signal no paraphraser can fake.",
  openGraph: { images: ["/images/services/report-paste-evidence.png"] },
};

export default function WritingProcessServicePage() {
  return (
    <main>
      <ServiceHero
        title="Don't just scan the essay. Watch it being written."
        sub="Paraphrasers beat text matchers. Humanizers beat AI detectors. Nothing beats the writing session itself. Checkmark reconstructs how each submission came together — what was typed, what was pasted, and when — and lets you replay it."
      >
        <LinkButton href="#playback" variant="hero">
          See Playback
        </LinkButton>
        <LinkButton href="/demo" variant="outline-white">
          Try the demo
        </LinkButton>
      </ServiceHero>

      {/* Signals */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
            <IconFeature
              icon={ClipboardPaste}
              title="External Paste"
              text="Text pasted from outside the document is captured with a timestamp and the full original paste — even if the student edited it afterward."
              tone="amber"
            />
            <IconFeature
              icon={Keyboard}
              title="Transcribed"
              text="Steady, unnatural typing that mirrors an existing source — retyping from a second screen or dictation — is flagged as transcription."
              tone="blue"
            />
            <IconFeature
              icon={PlayCircle}
              title="Playback"
              text="Replay the entire session keystroke by keystroke at 1x–8x speed, with a scrubber to jump straight to any moment."
              tone="emerald"
            />
          </div>
        </div>
      </section>

      {/* Paste evidence detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                The paste, preserved in full
              </h2>
              <p className="mt-3 text-muted-foreground">
                When content enters the document in one jump, the report keeps the receipt. Each
                External Paste card records when it happened and stores the complete original
                text. A student can rewrite every sentence afterward — the card still shows
                exactly what arrived and when.
              </p>
              <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Timestamped paste events, in order</li>
                <li>The full original pasted text, expandable on the card</li>
                <li>
                  A play button on every card that rewinds Playback to just before the paste
                  landed
                </li>
                <li>Total Pasted percentage summarized at the top of the report</li>
              </ul>
            </div>
            <Screenshot
              src="/images/services/report-paste-evidence.png"
              alt="External Paste card expanded to show the full original pasted text"
              width={864}
              height={1484}
              caption="An External Paste card with the original pasted text expanded."
            />
          </div>
        </div>
      </section>

      {/* Playback */}
      <section id="playback" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Playback: the writing session, replayed
            </h2>
            <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
              One button on every report opens a player that re-types the essay in front of you —
              pauses, deletions, rewrites, and pastes included.
            </p>
            <div className="mt-8">
              <Screenshot
                src="/images/services/report-originality-tiles.png"
                alt="The report's originality tiles with the Playback button on the right"
                width={2000}
                height={123}
                caption="Pasted, Transcribed, Uncited, and AI tiles — with Playback one click away."
              />
            </div>
            <div className="mt-10 space-y-8">
              <NumberedStep
                n="1"
                title="Play at 1x to 8x"
                text="Watch the full session or skim it at 8x. Skip forward and back ten seconds at a time."
              />
              <NumberedStep
                n="2"
                title="Scrub to the moment that matters"
                text="The timeline slider marks each step of the session, so you can jump straight to a paste event or a suspicious stretch."
              />
              <NumberedStep
                n="3"
                title="Jump from evidence to replay"
                text="Every paste card links into Playback a few edits before the event — context first, judgment second."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where it works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Where the writing process is captured
            </h2>
            <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
              Process signals come from how students write, so coverage depends on the submission
              path — and Checkmark supports the ones classrooms actually use.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={FileText}
                title="Google Docs"
                text="Submissions imported from Google Drive bring their revision history with them — drafting over days, not just the final text."
                tone="emerald"
              />
              <IconFeature
                icon={Keyboard}
                title="Typed-in editors"
                text="Essay editors embedded in Canvas and Buzz assessments capture the session as students type — no setup for students at all."
                tone="blue"
              />
              <IconFeature
                icon={Timer}
                title="Word documents"
                text="DOCX submissions carry process data when written with Checkmark's editor tooling; standard DOCX files still get full plagiarism and AI analysis."
                tone="amber"
              />
            </div>
            <div className="mt-10 mx-auto max-w-3xl text-center">
              <div className="inline-flex items-start gap-3 rounded-2xl bg-brand-100 p-5 text-left">
                <ShieldCheck className="h-5 w-5 mt-0.5 text-brand-700 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Process evidence protects honest students.
                  </span>{" "}
                  A visible drafting history is the strongest possible answer to a false AI
                  flag — which is exactly why we show authentic effort as clearly as we show
                  shortcuts.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <RelatedLink href="/services/plagiarism-detection" label="Plagiarism Detection" />
              <RelatedLink href="/services/ai-detection" label="AI Writing Detection" />
              <RelatedLink
                href="/teacher-support/reading-the-report"
                label="Guide: reading the report"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceCta
        title="Watch a session for yourself"
        text="The live demo analyzes a real submission end to end — paste something in and open the report."
      />
    </main>
  );
}
