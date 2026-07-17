import { Metadata } from "next";
import Image from "next/image";
import {
  PencilRuler,
  Upload,
  Library,
  ClipboardCheck,
  MessageSquareText,
  Send,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Autograder & Rubrics — Teacher Support",
  description:
    "How to attach a rubric to an assignment, review the autograder's scores and justifications, edit feedback, and publish grades to Canvas, Buzz, or Google Classroom.",
  openGraph: { images: ["/images/services/report-grading-view.png"] },
};

export default function AutograderRubricsSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Using the Autograder &amp; Rubrics
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            Attach a rubric to an assignment and every submission arrives pre-graded — per-criterion
            scores, written justifications, and feedback tied to the student&apos;s own sentences.
            This guide covers setup through publishing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-white/90">
              <a href="#attach">
                Get Started <ClipboardCheck className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <a
                href="https://teach.checkmarkplagiarism.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Web App <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto pb-16">
          {/* Step 1: Attach rubric */}
          <section className="mb-16" id="attach">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 1: Attach a Rubric to the Assignment
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                When you create or edit an assignment, add your grading criteria. Any rubric works —
                you don&apos;t have to rebuild what you already use.
              </p>
            </div>
            <Card className="shadow-soft max-w-4xl mx-auto mb-8">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Assignment Details &amp; Rubric Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/teacher-support/web-app/wa-upload-rubric.png"
                  alt="Creating an assignment and attaching a rubric file"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <PencilRuler className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Build It</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Use the rubric builder to define criteria and rating levels with live point
                    totals — the same structure Canvas rubrics use.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Upload It</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Drop in the rubric you already have — a document or even a photo of a paper
                    rubric. Checkmark turns it into gradable criteria.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Library className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Reuse It</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your Rubrics Library keeps every rubric you&apos;ve made — duplicate, edit, and
                    attach across courses and assignments.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="shadow-soft bg-blue-50 border-blue-200 max-w-4xl mx-auto mt-8">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-900">Using Canvas, Buzz, or Google Classroom?</CardTitle>
                    <CardDescription className="text-blue-700 mt-2">
                      Rubrics attached to synced assignments come along automatically — Buzz rubrics
                      are even converted from their native format. You usually don&apos;t need to do
                      anything here.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </section>

          {/* Step 2: Review */}
          <section className="mb-16" id="review">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 2: Review Scores &amp; Justifications
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Open any analyzed submission and select the grading row of tiles. Each rubric
                category shows its score — expand it to read the justification, written against
                what the student actually wrote.
              </p>
            </div>
            <Card className="shadow-soft max-w-5xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquareText className="w-6 h-6 text-white" />
                </div>
                <CardTitle>The Grading View</CardTitle>
                <CardDescription>
                  Pencil icons edit scores and justifications inline. Feedback cards highlight the
                  exact quotes they refer to — select any text in the essay and click{" "}
                  <strong>Add Feedback</strong> to leave your own.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/services/report-grading-view.png"
                  alt="Grading view with per-criterion scores, justifications, and quote-anchored feedback"
                  width={2000}
                  height={1250}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Step 3: Publish */}
          <section className="mb-16" id="publish">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 3: Publish — On Your Terms
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Nothing is visible to students until you publish. When you&apos;re ready, the
                report&apos;s action button matches where the assignment lives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Push to Canvas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sends the score into SpeedGrader and publishes the feedback to the student.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Push to Buzz / Classroom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Buzz and Google Classroom assignments sync scores back to their gradebooks the
                    same way.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <ClipboardCheck className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Publish in Checkmark</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    For web-app assignments, Publish Scores snapshots exactly what you approved for
                    students. Bulk-publish a whole assignment from its page.
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
                  <CardTitle className="text-2xl text-white">
                    See the Autograder in Action
                  </CardTitle>
                  <CardDescription className="text-white/90 mt-2">
                    The live demo grades a sample essay against a rubric — watch the justifications
                    write themselves.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-white/90">
                    <a href="/demo">
                      Try the Demo <ExternalLink className="ml-2 h-4 w-4" />
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
