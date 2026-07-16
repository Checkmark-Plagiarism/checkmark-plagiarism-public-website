import { Metadata } from "next";
import Image from "next/image";
import {
  Gauge,
  Highlighter,
  Quote,
  ClipboardPaste,
  PlayCircle,
  GraduationCap,
  Flag,
  ExternalLink,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Reading the Checkmark Report — Teacher Support",
  description:
    "A teacher's guide to the Checkmark report: originality tiles, highlighted passages, evidence cards, Playback, the grading view, and flag statuses.",
  openGraph: { images: ["/images/services/report-plagiarism-view.png"] },
};

export default function ReadingTheReportPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Reading the Checkmark Report
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            Every submission gets one report that answers four questions: what was pasted, what was
            transcribed, what matches a source, and what looks AI-written. Here&apos;s how to read
            it in under a minute — and how to dig in when something needs a closer look.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-white/90">
              <a href="#tiles">
                Start Reading <Gauge className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <a
                href="https://teach.checkmarkplagiarism.com/example-report"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the Interactive Example <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto pb-16">
          {/* Step 1: Tiles */}
          <section className="mb-16" id="tiles">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">Step 1: Read the Tiles</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                The top of every report shows an Overall score plus four totals — <strong>Pasted</strong>{" "}
                (content pasted from outside the document), <strong>Transcribed</strong> (typed while
                copying another source), <strong>Uncited</strong> (referenced text with no citation),
                and <strong>AI</strong> (text that patterns like AI writing). Hover any tile for its
                definition.
              </p>
            </div>
            <Card className="shadow-soft max-w-5xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <CardTitle>The Originality Tiles</CardTitle>
                <CardDescription>
                  A tile reading <strong>N/A</strong> means the text was too short for that detector
                  to run reliably — the report says so instead of guessing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/services/report-originality-tiles.png"
                  alt="Report tiles showing Overall, Total Pasted, Total Transcribed, Total Uncited, and Total AI percentages, with the Playback button"
                  width={2000}
                  height={123}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Step 2: Highlights */}
          <section className="mb-16" id="highlights">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 2: Follow the Highlights
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Findings are marked directly in the essay — pasted text, transcription, uncited
                references, and AI-flagged passages each get their own color. Click any highlight
                and its evidence card scrolls into view in the Plagiarism Breakdown sidebar; click
                a card and the essay scrolls to the passage.
              </p>
            </div>
            <Card className="shadow-soft max-w-5xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Highlighter className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Highlights ↔ Evidence Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/services/report-plagiarism-view.png"
                  alt="The Checkmark report with highlighted essay passages connected to evidence cards in the sidebar"
                  width={2000}
                  height={1312}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Step 3: Sources */}
          <section className="mb-16" id="sources">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">Step 3: Check the Source</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                On a Plagiarism card, click <strong>Show quote</strong> to see the matched passage
                in full with a link to the source it matches. If the match is against another
                student&apos;s work, the card says <em>Student Submission</em> instead of a URL.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Matched Quote + Source Link</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/services/report-source-quote.png"
                    alt="A Plagiarism card expanded with Show quote, displaying the matched passage and source URL"
                    width={864}
                    height={1484}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <ClipboardPaste className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Step 4: See What Was Pasted</CardTitle>
                  <CardDescription>
                    External Paste cards keep the complete original pasted text — expand{" "}
                    <strong>See full original paste</strong> to view it, even if the student edited
                    it afterward.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/services/report-paste-evidence.png"
                    alt="An External Paste card expanded to show the full original pasted text"
                    width={864}
                    height={1484}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Step 5: Playback */}
          <section className="mb-16" id="playback">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">Step 5: Replay the Session</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                The <strong>Playback</strong> button (top right of the report) replays the writing
                session keystroke by keystroke, with 1x–8x speed, ten-second skips, and a scrubber.
                The play button on any paste card jumps Playback to just before that paste landed —
                the fastest way to see an event in context.
              </p>
            </div>
            <Card className="shadow-soft bg-blue-50 border-blue-200 max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-900">
                      When is Playback available?
                    </CardTitle>
                    <CardDescription className="text-blue-700 mt-2">
                      Playback needs writing-process data, which comes with Google Docs submissions
                      (revision history), typed-in essay editors (Canvas and Buzz), and Word
                      documents written with Checkmark&apos;s editor tooling. Plain uploaded files
                      still get full plagiarism and AI analysis — the Pasted and Transcribed tiles
                      just read N/A.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </section>

          {/* Step 6: Grading view */}
          <section className="mb-16" id="grading">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 6: Switch to the Grading View
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                The second row of tiles holds the autograder&apos;s per-criterion scores. Select it
                to see written justifications for each score and quote-anchored feedback cards next
                to the essay. Everything is editable, and students see nothing until you publish.
              </p>
            </div>
            <Card className="shadow-soft max-w-5xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Scores, Justifications & Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/services/report-grading-view.png"
                  alt="The grading view with per-criterion justifications and feedback cards"
                  width={2000}
                  height={1250}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Flags + AI note */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                    <Flag className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Flag It — Privately</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every submission carries a status: <strong>Not Reviewed</strong>,{" "}
                    <strong>Flagged</strong>, <strong>Resolved</strong>, or{" "}
                    <strong>Not Flagged</strong>. Statuses are visible to teachers only — students
                    never see a flag — so you can track follow-ups without making accusations.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>A Note on AI Scores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI cards show a confidence gradient, not a verdict, and the report says it
                    plainly: don&apos;t rely on the score alone. Pair an AI signal with the writing
                    process — paste events and typing patterns — before starting a conversation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section>
            <Card className="shadow-soft bg-brand-900">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl text-white">Try It on a Real Report</CardTitle>
                  <CardDescription className="text-white/90 mt-2">
                    The interactive example report is live — click every card, expand every quote.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-white/90">
                    <a
                      href="https://teach.checkmarkplagiarism.com/example-report"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Example Report <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <a href="/contact">
                      Contact Support <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}
