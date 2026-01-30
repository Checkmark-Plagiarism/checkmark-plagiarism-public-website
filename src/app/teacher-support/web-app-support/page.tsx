import { Metadata } from "next";
import Image from "next/image";
import {
  Users,
  FileText,
  BarChart3,
  Globe,
  UserPlus,
  ExternalLink,
  CheckCircle2,
  Plus,
  FilePlus,
  Settings,
  Laptop,
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

          {/* Step 1: Create Course */}
          <section className="mb-16" id="step-1">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 1: Create Course
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Get started by clicking the &quot;New Course&quot; button. This creates a dedicated dashboard for your class where you can organize assignments and manage students.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Start a New Course</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/teacher-support/web-app/wa-create-course.png"
                  alt="Clicking New Course button in Checkmark Plagiarism web app"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Step 2: Student Enrollment */}
          <section className="mb-16" id="step-2">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 2: Student Enrollment
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Streamline the onboarding process by enrolling students individually via email, or upload a full roster file to add your entire class at once.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Enroll Your Students</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/teacher-support/web-app/wa-enrollment.png"
                  alt="Enrolling students via email or roster upload"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Step 3: Create Assignment */}
          <section className="mb-16" id="step-3">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 3: Create Assignment
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Ready to assign work? Locate the &quot;New Assignment&quot; button in the left-hand navigation menu to start distributing tasks to your enrolled students.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <FilePlus className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Add New Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/teacher-support/web-app/wa-create-assignment.png"
                  alt="Creating a new assignment from the left navigation menu"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Step 4: Create Assignment Modal */}
          <section className="mb-16" id="step-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 4: Customize Details
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Customize assignment details, set deadlines, and attach existing rubrics (PDF, Word, or TXT) to provide clear grading criteria for your students.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Assignment Details & Rubrics</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/teacher-support/web-app/wa-upload-rubric.png"
                  alt="Entering assignment details and uploading rubric files"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Step 5: Student View */}
          <section className="mb-16" id="step-5">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 5: Student View
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Students can seamlessly access the portal using their Google accounts to upload work, review instructions, and check their submission status without any complex setup.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Student Submission Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/teacher-support/web-app/wa-student-submit.png"
                  alt="Student view of the submission portal"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
              </CardContent>
            </Card>
          </section>

          {/* Step 6: Track Assignments */}
          <section className="mb-16" id="step-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 6: Track Assignments
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Monitor class progress in real-time. Use the teacher dashboard to access student submissions and view detailed plagiarism analysis reports instantly.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Track Progress & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/teacher-support/web-app/3.png"
                  alt="Tracking student submissions and plagiarism reports on the dashboard"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-medium w-full h-auto"
                />
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
