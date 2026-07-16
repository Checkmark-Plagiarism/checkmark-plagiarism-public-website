import { Metadata } from "next";
import Image from "next/image";
import {
  FileUp,
  CloudUpload,
  Keyboard,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Submitting Your Work — Student Support",
  description:
    "How students submit to Checkmark: Word document upload, Google Drive, OneDrive, and typed essay editors — plus why your drafting history works in your favor.",
  openGraph: { images: ["/images/services/submit-assignment-card.png"] },
};

export default function SubmittingYourWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Submitting Your Work
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            Turning in an assignment takes about a minute: open the assignment, pick your file (or
            type right in the editor), and submit. Here&apos;s each option — and why your drafting
            history is a good thing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-white/90">
              <a href="#options">
                See Your Options <FileUp className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <a href="/student-support/enrollment-guide">
                Need to Enroll First? <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto pb-16">
          {/* Step 1: Open the assignment */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">Step 1: Open the Assignment</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Sign in with your school Google or Microsoft account and open the assignment from
                your course page. If your class runs through Canvas, Google Classroom, or Buzz,
                you&apos;ll reach Checkmark from the assignment there — same steps either way.
              </p>
            </div>
            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Your Assignment Page</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/teacher-support/web-app/wa-student-submit.png"
                  alt="The student view of an assignment with the submission area"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Step 2: Options */}
          <section className="mb-16" id="options">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">Step 2: Pick How You Submit</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Depending on how your teacher set up the assignment, you&apos;ll have up to three
                ways to hand in your work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <FileUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Upload a Word Doc</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your <strong>.docx</strong> file (up to 10&nbsp;MB), or click to
                    browse. That&apos;s it.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <CloudUpload className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Google Drive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Pick a Google Doc from your own Drive. Submit the doc you actually wrote in —
                    its revision history shows your drafting work.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-4">
                    <CloudUpload className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">OneDrive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Working in Microsoft 365? Connect OneDrive and pick your document from there.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="shadow-soft max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>The Submission Box</CardTitle>
                <CardDescription>
                  Choose one source, hit <strong>Submit</strong>, and you&apos;re done — you&apos;ll
                  see a confirmation and your submission status on the assignment page.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/services/submit-assignment-card.png"
                  alt="The Submit Assignment box with Word doc upload, Google Drive, and OneDrive options"
                  width={1088}
                  height={1016}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Typed editors */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Typing Directly? Even Easier.
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Some assignments — especially in Canvas and Buzz — give you a Checkmark essay box
                right inside the assignment. Just write. Your work saves as you type, and there&apos;s
                nothing to upload.
              </p>
            </div>
            <Card className="shadow-soft bg-blue-50 border-blue-200 max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Keyboard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-900">
                      Why the editor is your friend
                    </CardTitle>
                    <CardDescription className="text-blue-700 mt-2">
                      When you type in the editor (or write in Google Docs), Checkmark can see your
                      real writing process — drafts, edits, and time spent. That history is the
                      strongest proof that your work is your own.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </section>

          {/* What happens next */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">What Happens After You Submit</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Analysis Runs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your submission shows as Processing while Checkmark analyzes it — usually just
                    a few minutes.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Your Teacher Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Teachers see the full report. Grades and feedback only reach you after your
                    teacher reviews and publishes them.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Your Work Stays Yours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your essays aren&apos;t used to train AI models or sold — see our{" "}
                    <a href="/security" className="text-primary underline">
                      security page
                    </a>{" "}
                    for the details.
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
                  <CardTitle className="text-2xl text-white">Stuck on Something?</CardTitle>
                  <CardDescription className="text-white/90 mt-2">
                    Check the enrollment guide, or ask your teacher to reach out to us.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-white/90">
                    <a href="/student-support/enrollment-guide">
                      Enrollment Guide <ExternalLink className="ml-2 h-4 w-4" />
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
