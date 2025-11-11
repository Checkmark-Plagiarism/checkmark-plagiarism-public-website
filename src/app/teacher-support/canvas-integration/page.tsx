import { Metadata } from "next";
import Image from "next/image";
import {
  Settings,
  Key,
  Code,
  Shield,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Canvas Integration Support — Checkmark Plagiarism",
  description:
    "Complete setup guide for integrating Checkmark Plagiarism with Canvas LMS. Step-by-step instructions for LTI 1.3 and API key configuration.",
  openGraph: { images: [""] },
};

export default function CanvasIntegrationSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Canvas Integration Support
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            Complete setup guide for integrating Checkmark Plagiarism with Canvas LMS. 
            Follow these steps to enable plagiarism detection in your Canvas assignments.
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
              <a href="/contact">Contact Support</a>
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
                    <CardTitle className="text-2xl text-blue-900">Administrator Access Required</CardTitle>
                    <CardDescription className="text-blue-700 mt-2">
                      This integration requires Canvas Administrator privileges to configure Developer Keys.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </section>

          {/* Step 1: LTI 1.3 Configuration */}
          <section className="mb-16" id="step-1">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 1: LTI 1.3 Configuration
              </h2>
              <p className="mt-3 text-muted-foreground">
                Configure the LTI 1.3 integration to enable Checkmark Plagiarism in Canvas assignments.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Step 1a */}
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>1a. Navigate to Developer Keys</CardTitle>
                  <CardDescription>
                    Access the Developer Keys section in your Canvas Admin panel.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image 
                      src="/images/teacher-support/canvas/integration/1a.png"
                      alt="Navigating to Developer Keys in Canvas Admin"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-medium w-full h-auto mb-4"
                    />
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Log in to Canvas as an Administrator</li>
                      <li>• Navigate to &quot;Developer Keys&quot;</li>
                      <li>• Click &quot;+ Developer Key&quot;</li>
                      <li>• Choose &quot;+ LTI Key&quot; from the dropdown menu</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Step 1b */}
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>1b. Paste LTI 1.3 JSON Configuration</CardTitle>
                  <CardDescription>
                    Configure the LTI settings using our provided JSON configuration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image 
                      src="/images/teacher-support/canvas/integration/1b.png"
                      alt="Pasting LTI 1.3 JSON configuration in Canvas"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-medium w-full h-auto mb-4"
                    />
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Change &quot;Method&quot; to &quot;Paste JSON&quot;</p>
                      <p>• In &quot;Redirect URIs&quot; enter:</p>
                      <div className="bg-gray-100 p-3 rounded font-mono text-xs break-all">
                        https://canvas-launch-457452153850.us-west2.run.app,https://app.checkmarkplagiarism.com/oauth-callback
                      </div>
                      <p>• Paste the provided JSON configuration in the text area</p>
                      <Button asChild variant="outline" size="sm">
                        <a href="/contact">Get JSON Configuration</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Step 2: API Key Configuration */}
          <section className="mb-16" id="step-2">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Step 2: API Key Configuration
              </h2>
              <p className="mt-3 text-muted-foreground">
                Create and configure the API key to enable data access between Canvas and Checkmark Plagiarism.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Step 2a */}
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Key className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>2a. Create New API Key</CardTitle>
                  <CardDescription>
                    Add a new API key for Checkmark Plagiarism integration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image 
                      src="/images/teacher-support/canvas/integration/2a.png"
                      alt="Creating a new API key in Canvas Developer Keys"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-medium w-full h-auto mb-4"
                    />
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Click &quot;+ Developer Key&quot;</li>
                      <li>• Choose &quot;+ API Key&quot; from dropdown</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2b */}
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>2b. Configure API Scopes</CardTitle>
                  <CardDescription>
                    Set up the required API permissions and scopes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image 
                      src="/images/teacher-support/canvas/integration/2b.png"
                      alt="Configuring API scopes and permissions in Canvas"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-medium w-full h-auto mb-4"
                    />
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2">• Add Redirect URI and enable required scopes:</p>
                      <div className="bg-gray-100 p-2 rounded text-xs">
                        <strong>Redirect URI:</strong><br/>
                        https://app.checkmarkplagiarism.com/oauth-callback
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2c */}
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>2c. Complete Integration</CardTitle>
                  <CardDescription>
                    Share your keys with our support team to finalize setup.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image 
                      src="/images/teacher-support/canvas/integration/2c.png"
                      alt="Sharing LTI and API keys to complete Canvas integration"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-medium w-full h-auto mb-4"
                    />
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>• Copy your Key ID and Key Secret</p>
                      <p>• Contact support for Registration Code</p>
                      <p>• Complete the integration form</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Required API Scopes Details */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">
                Required API Scopes
              </h2>
              <p className="mt-3 text-muted-foreground">
                Enable these specific API scopes for full functionality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Core Scopes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-brand-700">Assignments:</strong>
                      <ul className="mt-1 space-y-1 text-muted-foreground font-mono text-xs">
                        <li>• GET /api/v1/courses/:course_id/assignments</li>
                        <li>• GET /api/v1/courses/:course_id/assignments/:id</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-brand-700">Courses:</strong>
                      <ul className="mt-1 space-y-1 text-muted-foreground font-mono text-xs">
                        <li>• GET /api/v1/courses/:course_id/users</li>
                        <li>• GET /api/v1/users/:user_id/courses</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-brand-700">OAuth2:</strong>
                      <ul className="mt-1 space-y-1 text-muted-foreground font-mono text-xs">
                        <li>• /auth/userinfo</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Extended Scopes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-brand-700">Enrollments:</strong>
                      <ul className="mt-1 space-y-1 text-muted-foreground font-mono text-xs">
                        <li>• GET /api/v1/courses/:course_id/enrollments</li>
                        <li>• GET /api/v1/sections/:section_id/enrollments</li>
                        <li>• GET /api/v1/users/:user_id/enrollments</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-brand-700">Sections & Submissions:</strong>
                      <ul className="mt-1 space-y-1 text-muted-foreground font-mono text-xs">
                        <li>• GET /api/v1/courses/:course_id/sections</li>
                        <li>• POST|PUT submission endpoints</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <Card className="shadow-soft bg-brand-900">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl text-white">Complete Your Integration</CardTitle>
                  <CardDescription className="text-white/90 mt-2">
                    Ready to finish setting up Checkmark Plagiarism with Canvas? Contact our support team.
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
                    <a
                      href="mailto:support@checkmarkplagiarism.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Email Support <ExternalLink className="ml-2 h-4 w-4" />
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