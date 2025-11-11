import { Metadata } from "next";
import Image from "next/image";
import {
  Plus,
  Puzzle,
  CheckCircle2,
  LayoutDashboard,
  FileText,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Google Classroom Support — Checkmark Plagiarism",
  description:
    "Step-by-step guide for installing and using the Checkmark Plagiarism add-on in Google Classroom. Learn how teachers and students access reports.",
  openGraph: { images: [""] },
};

export default function GoogleClassroomSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Google Classroom Support
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            Step-by-step guide for installing and using the Checkmark Plagiarism add-on
            in Google Classroom™. Get started in minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-900 hover:bg-white/90"
            >
              <a
                href="https://workspace.google.com/marketplace/app/checkmark_plagiarism/457452153850?flow_type=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Add-on <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto pb-16">
          {/* Adding the Add-on */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Adding the Add-on to an Assignment
              </h2>
              <p className="mt-3 text-muted-foreground">
                Follow these simple steps to attach Checkmark Plagiarism to your Google Classroom™ assignments.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>1. Create or Edit an Assignment</CardTitle>
                  <CardDescription>
                    In Google Classroom™, either create a new assignment or open an existing one you wish to add plagiarism detection to.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image 
                    src="/images/teacher-support/google-classroom/step1.png"
                    alt="Creating or editing an assignment in Google Classroom"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Puzzle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>2. Find the Add-on</CardTitle>
                  <CardDescription>
                    Look for the &quot;Add-ons&quot; section or button when creating/editing the assignment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image 
                    src="/images/teacher-support/google-classroom/step2.png"
                    alt="Finding the Add-ons section in Google Classroom"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>3. Select Checkmark Plagiarism</CardTitle>
                  <CardDescription>
                    Choose &quot;Checkmark Plagiarism - Teachers&quot; from your list of available add-ons.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image 
                    src="/images/teacher-support/google-classroom/step3.png"
                    alt="Selecting Checkmark Plagiarism from the add-ons list"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                How the Classroom Add-on Works
              </h2>
              <p className="mt-3 text-muted-foreground">
                Once Checkmark Plagiarism is attached to an assignment, here&apos;s what happens.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <LayoutDashboard className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Accessing the Dashboard</CardTitle>
                  <CardDescription>
                    When you, the teacher, click on the Checkmark Plagiarism add-on link from your Google Classroom assignment (even an add-on link visible on a student&apos;s submitted work), you will be taken to the Assignment Dashboard, all within Google Classroom™.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image 
                    src="/images/teacher-support/google-classroom/accessing-dashboard.png"
                    alt="Checkmark Plagiarism Assignment Dashboard in Google Classroom"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Viewing the Report</CardTitle>
                  <CardDescription>
                    This detailed analysis highlights potential issues in a student&apos;s submission and provides tools for investigation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image 
                    src="/images/teacher-support/google-classroom/viewing-report.png"
                    alt="Detailed plagiarism report showing analysis and investigation tools"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Requirements */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Requirements
              </h2>
              <p className="mt-3 text-muted-foreground">
                Important information about file types and submission requirements.
              </p>
            </div>

            <Card className="shadow-soft bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-blue-900">Google Docs Required</CardTitle>
                    <CardDescription className="text-blue-700 mt-2">
                      Currently, Checkmark Plagiarism requires submissions to be Google Docs to generate a report.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800">
                  The &quot;Copied %&quot; and &quot;View Report&quot; link may show &quot;N/A&quot; or an error for non-Google Doc™ submissions. 
                  Please advise students to submit their work as Google Docs™ for this assignment.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Troubleshooting */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Troubleshooting
              </h2>
              <p className="mt-3 text-muted-foreground">
                Common issues and solutions when using the Google Classroom add-on.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Report Shows &quot;N/A&quot; or Error</CardTitle>
                  <CardDescription>
                    This usually means either:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• The student hasn&apos;t submitted their assignment yet</li>
                    <li>• The student submitted a file type other than Google Docs™</li>
                    <li>• The plagiarism report is still processing (this can take a few minutes after submission, especially for longer documents or during peak times)</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Please refresh the dashboard after a short wait.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Dashboard Not Loading</CardTitle>
                  <CardDescription>
                    Try the following steps:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Refresh the page</li>
                    <li>• Ensure you have a stable internet connection</li>
                    <li>• Log out of your Google account and log back in</li>
                    <li>• Clear your browser&apos;s cache and cookies</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    If the issue persists, please contact us at support@checkmarkplagiarism.com.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Can students flag submissions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, the &quot;Flag Submission&quot; feature is only visible and usable by teachers on the Assignment Dashboard.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Important Note */}
          <section>
            <Card className="shadow-soft bg-brand-900">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Student vs. Teacher Experience</CardTitle>
                    <CardDescription className="text-white/90 mt-2">
                      When students click on the add-on, this is the page they see, <strong>NOT the assignment dashboard</strong>. The report they see does not have the &quot;Flagged&quot; status.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Teachers have full access to detailed analysis, flagging tools, and investigation features. Students only see their submission status and basic feedback.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}
