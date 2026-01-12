import { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  Users,
  FileText,
  HelpCircle,
  ExternalLink,
  MessageSquare,
  Settings,
  Download,
  Globe,
  UserPlus,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Student Support — Checkmark Plagiarism",
  description:
    "Student guide for using Checkmark Plagiarism. Learn how to install the Google Classroom add-on, enroll in classes, and submit assignments.",
  openGraph: { images: [""] },
};

export default function StudentSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Student Support
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            Everything you need to know about using Checkmark Plagiarism as a student. 
            Install the add-on, join your classes, and submit assignments with confidence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-900 hover:bg-white/90"
            >
              <a href="#getting-started">
                Get Started <BookOpen className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <a href="/contact">Need Help?</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto pb-16">
          {/* Quick Navigation */}
          <section className="mb-16" id="getting-started">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Quick Navigation
              </h2>
              <p className="mt-3 text-muted-foreground">
                Find help for common student tasks and questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Getting Started Guide</CardTitle>
                  <CardDescription>
                    Install the Google Classroom add-on and learn the basics of using Checkmark Plagiarism.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href="#installation-guide">View Guide</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <UserPlus className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>How to Enroll in Classes</CardTitle>
                  <CardDescription>
                    Learn how to join your teacher&apos;s class using enrollment codes and manage your class memberships.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href="/student-support/enrollment-guide">
                      View Guide
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Installation and Setup Guide */}
          <section className="mb-16" id="installation-guide">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Getting Started with Checkmark Plagiarism
              </h2>
              <p className="mt-3 text-muted-foreground">
                Follow these steps to install and use the Checkmark Plagiarism add-on in Google Docs.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Step-by-Step Instructions</CardTitle>
                <CardDescription>
                  Everything you need to get started with Checkmark Plagiarism as a student.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <Image 
                    src="/images/student-support/student1.png"
                    alt="Student guide for using Checkmark Plagiarism Google Docs add-on"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-medium w-full h-auto"
                  />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-700 mb-1">Install the Add-on</h4>
                          <p className="text-sm text-muted-foreground">
                            The Checkmark Plagiarism - Students add-on should already be installed on your school Google Workspace™ account, but you can also install it{" "}
                            <a href="https://workspace.google.com/marketplace/app/checkmark_plagiarism_students/457452153850" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="text-brand-600 underline hover:text-brand-700">
                              here
                            </a>.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-700 mb-1">Access the Add-on</h4>
                          <p className="text-sm text-muted-foreground">
                            To access the add-on, open a Google Doc™ and go to Extensions → Checkmark Plagiarism.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-700 mb-1">Join Your Classes</h4>
                          <p className="text-sm text-muted-foreground">
                            You must use a teacher provided enrollment code to be added to your classes and view your assignments.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-700 mb-1">Manage Your Classes</h4>
                          <p className="text-sm text-muted-foreground">
                            You can unenroll from a class by clicking the gear icon, then clicking the trash icon for the class you wish to leave. Note that you may not recover any of your submissions if you re-join that class.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Important Information */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Important Information
              </h2>
              <p className="mt-3 text-muted-foreground">
                What you need to know about data privacy and submissions.
              </p>
            </div>

            <Card className="shadow-soft bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-blue-900">Data Privacy & Submissions</CardTitle>
                    <CardDescription className="text-blue-700 mt-2">
                      Understanding how your data is handled when using Checkmark Plagiarism.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-blue-800">
                  <p>
                    <strong>What data is collected:</strong> Submitting an assignment will only upload data from the Google Doc™ you are currently accessing with our add-on. Our servers only receive data from the Google Docs™ you submit.
                  </p>
                  <p>
                    <strong>Data deletion:</strong> Deleting your submission will erase your data from our servers forever.
                  </p>
                  <p>
                    <strong>Privacy assurance:</strong> We only access the specific documents you choose to submit through the add-on.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Browser Compatibility */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Browser Compatibility
              </h2>
              <p className="mt-3 text-muted-foreground">
                Checkmark Plagiarism works with all modern web browsers.
              </p>
            </div>

            <Card className="shadow-soft max-w-4xl mx-auto bg-green-50 border-green-200">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-green-900">Supported Browsers</CardTitle>
                    <CardDescription className="text-green-700 mt-2">
                      Use Checkmark Plagiarism with your preferred web browser.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-green-800">
                  <p>
                    <strong>Modern Browser Support:</strong> Checkmark Plagiarism is designed to work seamlessly with all modern web browsers, including Safari, Chrome, Firefox, and Microsoft Edge.
                  </p>
                  <p>
                    <strong>Safari Users:</strong> Checkmark Plagiarism fully supports Safari on both macOS and iOS devices. Whether you&apos;re using a Mac, iPad, or iPhone, you can access all features of our platform.
                  </p>
                  <p>
                    <strong>For the Best Experience:</strong> We recommend keeping your browser updated to the latest version to ensure optimal performance and access to the newest features.
                  </p>
                  <p className="text-sm pt-2 border-t border-green-300">
                    <strong>Experiencing issues?</strong> Please{" "}
                    <a href="/contact" className="underline hover:text-green-900 font-medium">
                      contact our support team
                    </a>{" "}
                    with your browser version and device information so we can help you quickly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Additional Support */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Additional Support
              </h2>
              <p className="mt-3 text-muted-foreground">
                More resources and help options for students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Common questions students have about using Checkmark Plagiarism.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href="#faq">View FAQ</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Troubleshooting</CardTitle>
                  <CardDescription>
                    Having technical issues? Find solutions to common problems.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href="#troubleshooting">Get Help</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Contact Your Teacher</CardTitle>
                  <CardDescription>
                    For class-specific questions, reach out to your teacher directly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href="#teacher-contact">Learn How</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Support */}
          <section>
            <Card className="shadow-soft bg-brand-900">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl text-white">Still Need Help?</CardTitle>
                  <CardDescription className="text-white/90 mt-2">
                    Can&apos;t find what you&apos;re looking for? Our support team is here to help students succeed.
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
                      Contact Support <MessageSquare className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    <a
                      href="mailto:support@checkmarkplagiarism.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Email Us <ExternalLink className="ml-2 h-4 w-4" />
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
