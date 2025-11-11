import { Metadata } from "next";
import Image from "next/image";
import {
  Settings,
  Plus,
  Users,
  LayoutDashboard,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Canvas Teacher Support — Checkmark Plagiarism",
  description:
    "Learn how to use Checkmark Plagiarism within Canvas. Step-by-step guide for teachers to enable plagiarism detection on Canvas assignments and view reports.",
  openGraph: { images: [""] },
};

export default function CanvasTeacherSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Canvas Teacher Support
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            Learn how to use Checkmark Plagiarism within Canvas. Add plagiarism detection to your 
            assignments and view detailed reports directly in your Canvas course.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-900 hover:bg-white/90"
            >
              <a href="#step-1">
                Get Started <Settings className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <a href="/teacher-support/canvas-integration">Canvas Integration Setup</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto pb-16">
          {/* Prerequisites */}
          <section className="mb-16">
            <Card className="shadow-soft bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-blue-900">Before You Start</CardTitle>
                    <CardDescription className="text-blue-700 mt-2">
                      Make sure your Canvas Administrator has completed the LTI 1.3 integration setup and provided you with the Client ID.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800">
                  If you haven&apos;t set up the Canvas integration yet, visit our{" "}
                  <a href="/teacher-support/canvas-integration" className="font-semibold underline">
                    Canvas Integration Guide
                  </a>{" "}
                  for complete setup instructions.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Step 1: Add Checkmark Plagiarism to Course */}
          <section className="mb-16" id="step-1">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 1: Add Checkmark Plagiarism as an External App
              </h2>
              <p className="mt-3 text-muted-foreground">
                Add Checkmark Plagiarism to your Canvas course to enable plagiarism detection on assignments.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Step 1a */}
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>1a. Navigate to Course Settings</CardTitle>
                  <CardDescription>
                    Access the Apps configuration section in your Canvas course settings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image 
                      src="/images/teacher-support/canvas/support/1a.png"
                      alt="Navigating to Apps tab in Canvas course settings"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-medium w-full h-auto mb-4"
                    />
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Log in to Canvas and enter your course</li>
                      <li>• Navigate to &quot;Settings&quot;</li>
                      <li>• Click on the &quot;Apps&quot; tab</li>
                      <li>• Click &quot;View App Configurations&quot;</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Step 1b */}
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>1b. Add New App</CardTitle>
                  <CardDescription>
                    Configure Checkmark Plagiarism using the Client ID from your Canvas Administrator.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image 
                      src="/images/teacher-support/canvas/support/1b.png"
                      alt="Adding Checkmark Plagiarism app with Client ID in Canvas"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-medium w-full h-auto mb-4"
                    />
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Click &quot;+ App&quot;</li>
                      <li>• Change &quot;Configuration Type&quot; to &quot;By Client ID&quot;</li>
                      <li>• Enter the Client ID provided by your Canvas Administrator</li>
                      <li>• Save the configuration</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Step 2: How It Works */}
          <section className="mb-16" id="step-2">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                How Checkmark Plagiarism Canvas Integration Works
              </h2>
              <p className="mt-3 text-muted-foreground">
                Once configured, Checkmark Plagiarism automatically enhances your Canvas assignments.
              </p>
            </div>

            {/* How It Works Info */}
            <div className="mb-8">
              <Card className="shadow-soft bg-green-50 border-green-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-green-900">Automatic Integration</CardTitle>
                      <CardDescription className="text-green-700 mt-2">
                        Checkmark Plagiarism is automatically added to new assignments with &quot;File Upload&quot; submission type.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800">
                    When students submit through the Checkmark Plagiarism submission view, their submissions will automatically 
                    appear in both the Canvas SpeedGrader™ and the Checkmark Plagiarism dashboard.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Teacher vs Student Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <LayoutDashboard className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Teacher Experience</CardTitle>
                  <CardDescription>
                    Full access to plagiarism detection results, detailed reports, and grading tools within Canvas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image 
                    src="/images/teacher-support/canvas/support/2-teacher.png"
                    alt="Teacher view of Checkmark Plagiarism in Canvas with full dashboard access"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-medium w-full h-auto mb-4"
                  />
                  <div className="text-sm text-muted-foreground">
                    <p>Teachers see detailed plagiarism analysis, can flag submissions, and access comprehensive reports directly in Canvas SpeedGrader.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Student Experience</CardTitle>
                  <CardDescription>
                    Students submit assignments through Canvas and receive basic feedback about their submission status.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image 
                    src="/images/teacher-support/canvas/support/2-student.png"
                    alt="Student view of Checkmark Plagiarism submission interface in Canvas"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-medium w-full h-auto mb-4"
                  />
                  <div className="text-sm text-muted-foreground">
                    <p>Students see a simplified submission interface and basic feedback, without access to detailed plagiarism analysis or flagging features.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Key Features
              </h2>
              <p className="mt-3 text-muted-foreground">
                What you can expect from the Canvas integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Seamless Workflow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Submissions appear in both Canvas SpeedGrader and Checkmark Plagiarism dashboard automatically.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">File Upload Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automatically enabled for all new Canvas assignments with &quot;File Upload&quot; submission type.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Integrated Grading</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    View plagiarism reports and grade submissions directly within your familiar Canvas interface.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Support */}
          <section>
            <Card className="shadow-soft bg-brand-900">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl text-white">Need Help?</CardTitle>
                  <CardDescription className="text-white/90 mt-2">
                    Having trouble with the Canvas integration? Our support team is here to help.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-brand-900 hover:bg-white/90"
                  >
                    <a href="/contact">
                      Contact Support <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    <a href="/teacher-support/canvas-integration">
                      Integration Setup Guide <ExternalLink className="ml-2 h-4 w-4" />
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
