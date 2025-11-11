import { Metadata } from "next";
import Image from "next/image";
import {
  UserPlus,
  Key,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How to Enroll in Classes — Checkmark Plagiarism",
  description:
    "Step-by-step guide for students to enroll in their teacher's Checkmark Plagiarism class using enrollment codes.",
  openGraph: { images: [""] },
};

export default function StudentEnrollmentGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to Enroll in Classes
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            Learn how to join your teacher&apos;s class using enrollment codes and 
            start submitting assignments through Checkmark Plagiarism.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <a href="/student-support">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Student Support
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-white/90">
              <a href="/contact">Need Help?</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto pb-16">
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
                      Make sure you have the Checkmark Plagiarism add-on installed and an enrollment code from your teacher.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-blue-800">
                  <p className="mb-2"><strong>You&apos;ll need:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• The Checkmark Plagiarism - Students add-on installed in your Google Workspace</li>
                    <li>• An enrollment code provided by your teacher</li>
                    <li>• A Google Doc open and ready to use</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Step 1: Access the Add-on */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 1: Access the Checkmark Plagiarism Add-on
              </h2>
              <p className="mt-3 text-muted-foreground">
                Open a Google Doc and navigate to the Checkmark Plagiarism add-on.
              </p>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Access the Add-on</CardTitle>
                <CardDescription>
                  Find and open the Checkmark Plagiarism add-on from your Google Doc.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Image 
                    src="/images/student-support/enroll/access-addon.png"
                    alt="How to access Checkmark Plagiarism add-on in Google Docs"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        1
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Open any Google Doc in your browser
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        2
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Go to <strong>Extensions</strong> in the top menu
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        3
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Click on <strong>Checkmark Plagiarism</strong> from the dropdown menu
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Step 2: Enter Enrollment Code */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 2: Enter Your Enrollment Code
              </h2>
              <p className="mt-3 text-muted-foreground">
                Use the enrollment code provided by your teacher to join their class.
              </p>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Join Your Class</CardTitle>
                <CardDescription>
                  Enter the enrollment code your teacher shared with you to access class assignments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Image 
                    src="/images/student-support/enroll/enrollment.png"
                    alt="Student enrollment process using teacher-provided enrollment code"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        1
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Look for the enrollment section in the Checkmark Plagiarism add-on sidebar
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        2
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Enter the enrollment code your teacher provided
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        3
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Click the join or enroll button to complete the process
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* What Happens Next */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                What Happens After Enrollment
              </h2>
              <p className="mt-3 text-muted-foreground">
                Once enrolled, you&apos;ll have access to your class assignments and submission portal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Class Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• View all assignments for your class</li>
                    <li>• See assignment due dates and requirements</li>
                    <li>• Access your submission history</li>
                    <li>• Check your assignment status</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <UserPlus className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Submission Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Submit assignments directly from Google Docs</li>
                    <li>• Receive confirmation of successful submissions</li>
                    <li>• View basic feedback from your teacher</li>
                    <li>• Track your submission progress</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Important Notes */}
          <section className="mb-16">
            <Card className="shadow-soft bg-yellow-50 border-yellow-200">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-yellow-900">Important Notes</CardTitle>
                    <CardDescription className="text-yellow-700 mt-2">
                      Keep these important points in mind when enrolling and using Checkmark Plagiarism.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-yellow-800">
                  <p>
                    <strong>Enrollment Codes:</strong> Each class has a unique enrollment code. Make sure you enter the correct code for the right class.
                  </p>
                  <p>
                    <strong>Class Management:</strong> You can leave a class at any time, but you may lose access to your previous submissions if you rejoin later.
                  </p>
                  <p>
                    <strong>Multiple Classes:</strong> You can be enrolled in multiple classes at once using different enrollment codes from different teachers.
                  </p>
                  <p>
                    <strong>Teacher Approval:</strong> Some classes may require teacher approval after you enter the enrollment code.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Troubleshooting */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Troubleshooting Enrollment Issues
              </h2>
              <p className="mt-3 text-muted-foreground">
                Common problems and their solutions.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Enrollment Code Not Working</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Possible solutions:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Double-check the code for typos or extra spaces</li>
                      <li>• Verify you&apos;re using the correct code for the right class</li>
                      <li>• Ask your teacher to confirm the enrollment code is still active</li>
                      <li>• Make sure you have the Checkmark Plagiarism add-on installed</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Can&apos;t Find the Add-on</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Possible solutions:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Check if the add-on is installed in your Google Workspace</li>
                      <li>• Ask your teacher or IT administrator about add-on availability</li>
                      <li>• Try refreshing your Google Doc and checking Extensions again</li>
                      <li>• Ensure you&apos;re signed in to the correct Google account</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Support */}
          <section>
            <Card className="shadow-soft bg-brand-900">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl text-white">Still Having Trouble?</CardTitle>
                  <CardDescription className="text-white/90 mt-2">
                    If you&apos;re still unable to enroll in your class, we&apos;re here to help.
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
                    <a href="/student-support">
                      Back to Student Support <ArrowLeft className="ml-2 h-4 w-4" />
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
