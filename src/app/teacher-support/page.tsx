import { Metadata } from "next";
import {
  BookOpen,
  Users,
  Monitor,
  HelpCircle,
  ExternalLink,
  MessageSquare,
  Settings,
  FileText,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Teacher Support — Checkmark Plagiarism",
  description:
    "Comprehensive support for teachers using Checkmark Plagiarism. Setup guides, LMS integration help, troubleshooting, and frequently asked questions.",
  openGraph: { images: [""] },
};

export default function TeacherSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Teacher Support Center
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            Everything you need to get started with Checkmark Plagiarism. 
            From setup guides to advanced features, we&apos;re here to help you succeed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-900 hover:bg-white/90"
            >
              <a href="#quick-navigation">
                Get Started <BookOpen className="ml-2 h-4 w-4" />
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
          {/* Quick Navigation */}
          <section className="mb-16" id="quick-navigation">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Quick Navigation
              </h2>
              <p className="mt-3 text-muted-foreground">
                Choose your platform or browse general support topics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Google Classroom™ Support Guide</CardTitle>
                  <CardDescription>
                    Step-by-step instructions for installing and using the Checkmark Plagiarism add-on in Google Classroom™. Learn how to attach it to assignments and read reports.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href="/teacher-support/google-classroom-support">
                      View Guide <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Canvas Integration Guide</CardTitle>
                  <CardDescription>
                    Complete setup guide for integrating Checkmark Plagiarism with Canvas LMS. Installation, configuration, and usage instructions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href="/teacher-support/canvas-integration">
                      View Guide <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Canvas Teacher Support Guide</CardTitle>
                  <CardDescription>
                    Advanced Canvas features, troubleshooting common issues, and best practices for using Checkmark Plagiarism effectively in Canvas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href="/teacher-support/canvas-support">
                      View Guide <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Web App (no integrations) Support</CardTitle>
                  <CardDescription>
                    Using Checkmark Plagiarism as a standalone web application without LMS integration. Direct upload and report analysis.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href="/teacher-support/web-app-support">
                      View Guide <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* General Support */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                General Support
              </h2>
              <p className="mt-3 text-muted-foreground">
                Common questions and troubleshooting help for all users.
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
                    Find answers to the most common questions about Checkmark Plagiarism.
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
                    Common issues and step-by-step solutions for technical problems.
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
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Getting Started Guide</CardTitle>
                  <CardDescription>
                    New to Checkmark Plagiarism? Start here for a complete overview.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href="#getting-started">Read Guide</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
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

          {/* Contact Support */}
          <section>
            <Card className="shadow-soft bg-brand-900">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl text-white">Need More Help?</CardTitle>
                  <CardDescription className="text-white/90 mt-2">
                    Can&apos;t find what you&apos;re looking for? Our support team is here to help you succeed.
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