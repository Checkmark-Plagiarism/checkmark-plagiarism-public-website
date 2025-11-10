import { Metadata } from "next";
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </Card>
            </div>
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
