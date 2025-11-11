import { Metadata } from "next";
import Image from "next/image";
import {
  Users,
  FileText,
  BarChart3,
  Globe,
  UserPlus,
  Upload,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Web App Support — Checkmark Plagiarism",
  description:
    "Learn how to use Checkmark Plagiarism as a standalone web application without LMS integration. Create classes, manage student submissions, and track plagiarism reports.",
  openGraph: { images: [""] },
};

export default function WebAppSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Web App Support
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            Use Checkmark Plagiarism as a standalone web application without LMS integration. 
            Create classes, share enrollment codes, and track student submissions directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-900 hover:bg-white/90"
            >
              <a href="#step-1">
                Get Started <Globe className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <a 
                href="https://teach.checkmarkplagiarism.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Access Web App <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto pb-16">
          {/* Benefits */}
          <section className="mb-16">
            <Card className="shadow-soft bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-blue-900">No LMS Integration Required</CardTitle>
                    <CardDescription className="text-blue-700 mt-2">
                      Perfect for schools without Canvas or Google Classroom, or teachers who prefer a dedicated plagiarism detection platform.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
                  <div>✓ Simple class management</div>
                  <div>✓ Direct student access</div>
                  <div>✓ Comprehensive reporting</div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Step 1: Create a Class */}
          <section className="mb-16" id="step-1">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 1: Create a Class
              </h2>
              <p className="mt-3 text-muted-foreground">
                Organize your assignments into classes and share enrollment codes with students.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Create and Manage Classes</CardTitle>
                <CardDescription>
                  Set up your class structure and generate enrollment codes for easy student access.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Image 
                    src="/images/teacher-support/web-app/1.png"
                    alt="Creating a class and sharing enrollment codes in Checkmark Plagiarism web app"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-brand-700 mb-2">Class Organization:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Create separate classes for different courses</li>
                        <li>• Organize assignments by subject or semester</li>
                        <li>• Generate unique enrollment codes per class</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-700 mb-2">Student Access:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Share enrollment codes with students</li>
                        <li>• Students join using their Google accounts</li>
                        <li>• Automatic class roster management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Step 2: Student Submissions */}
          <section className="mb-16" id="step-2">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 2: Students Submit Assignments
              </h2>
              <p className="mt-3 text-muted-foreground">
                Students access the portal with their Google accounts to submit assignments and view their work.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Student Portal Experience</CardTitle>
                <CardDescription>
                  Simple, intuitive interface for students to manage their submissions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Image 
                    src="/images/teacher-support/web-app/2.png"
                    alt="Student view of submission portal in Checkmark Plagiarism web app"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-brand-700 mb-2">Easy Access:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Login with Google account</li>
                        <li>• View all assigned classes</li>
                        <li>• See assignment deadlines and requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-700 mb-2">Submission Management:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Upload documents directly</li>
                        <li>• View submission status</li>
                        <li>• Access basic feedback</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Step 3: Track Submissions */}
          <section className="mb-16" id="step-3">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 3: Track Submissions With Web App
              </h2>
              <p className="mt-3 text-muted-foreground">
                Monitor student submissions and access detailed plagiarism reports from your teacher dashboard.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Teacher Dashboard & Reports</CardTitle>
                <CardDescription>
                  Comprehensive view of all submissions with detailed plagiarism analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Image 
                    src="/images/teacher-support/web-app/3.png"
                    alt="Teacher dashboard showing student submissions and plagiarism reports"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-brand-700 mb-2">Dashboard Features:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Real-time submission tracking</li>
                        <li>• Class-wide overview</li>
                        <li>• Assignment completion status</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-700 mb-2">Plagiarism Analysis:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Detailed plagiarism reports</li>
                        <li>• Keystroke analysis</li>
                        <li>• Flagging and investigation tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Web App Advantages
              </h2>
              <p className="mt-3 text-muted-foreground">
                Why choose the standalone web application approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">No Integration Required</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Start using immediately without waiting for LMS setup or administrator approval.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <UserPlus className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Simple Enrollment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Share class codes with students for instant access - no complex setup required.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Dedicated Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Focus entirely on plagiarism detection without distractions from other LMS features.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Universal Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Works with any school system - perfect for institutions without LMS or mixed environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Full Feature Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access all Checkmark Plagiarism features including keystroke analysis and detailed reporting.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Class Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Organize multiple classes and track submissions across all your courses in one place.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Get Started */}
          <section>
            <Card className="shadow-soft bg-brand-900">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl text-white">Ready to Get Started?</CardTitle>
                  <CardDescription className="text-white/90 mt-2">
                    Access the Checkmark Plagiarism web app and create your first class today.
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
                    <a 
                      href="https://teach.checkmarkplagiarism.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Access Web App <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
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
