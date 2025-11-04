"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Configure iframe URL based on environment
const DEMO_IFRAME_URL = process.env.NEXT_PUBLIC_DEMO_URL || 'https://dev.checkmarkplagiarism.com/demo';

// Extract origin from the full URL
const DEMO_IFRAME_ORIGIN = new URL(DEMO_IFRAME_URL).origin;

const Demo = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(600);

  useEffect(() => {
    // Listen for explicit height change requests from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Verify the origin for security
      const allowedIframeOrigins = [
        "https://dev.checkmarkplagiarism.com",  // Dev iframe
        "https://teach.checkmarkplagiarism.com", // Production iframe
        "http://localhost:5173", // Local dev (Vite)
        "http://localhost:3000", // Local dev (other)
      ];

      if (!allowedIframeOrigins.includes(event.origin)) return;

      // Simple message: { type: "setHeight", height: 600 | 1200 }
      if (event.data.type === "setHeight" && typeof event.data.height === "number") {
        const clampedHeight = Math.min(Math.max(event.data.height, 600), 1200);
        setIframeHeight(clampedHeight);
      }
    };

    window.addEventListener("message", handleMessage);

    // Send parent origin to iframe when it loads
    const iframe = iframeRef.current;
    if (iframe) {
      const sendOriginToIframe = () => {
        iframe.contentWindow?.postMessage({
          type: 'parentOrigin',
          origin: window.location.origin
        }, DEMO_IFRAME_ORIGIN);
      };

      iframe.addEventListener('load', sendOriginToIframe);

      // Also send immediately if already loaded
      if (iframe.contentWindow) {
        setTimeout(sendOriginToIframe, 100);
        setTimeout(sendOriginToIframe, 500);
        setTimeout(sendOriginToIframe, 1000);
      }

      return () => {
        window.removeEventListener("message", handleMessage);
        iframe.removeEventListener('load', sendOriginToIframe);
      };
    }

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      {/* Header Section with Two Columns */}
      <div className="bg-brand-900 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Try Checkmark Demo
            </h1>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Column 1: How it works */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">How it works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Submit a Google Doc and Checkmark will detect AI-generated content and provide feedback from our autograder.
                  </p>

                  <p>
                    When selecting a document from Google Drive, a Google popup will appear asking for permission to access your document.
                  </p>

                  <p>
                    After submitting your document, you&apos;ll need to wait about a minute to receive your report.
                  </p>

                  <div className="pt-4 border-t">
                    <p className="font-semibold">
                      To create your own rubric and submit Microsoft Word documents, please create an account. It&apos;s free!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Column 2: Privacy Guarantee */}
              <Card className="shadow-soft bg-brand-900">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lock className="w-6 h-6 text-white" />
                    <CardTitle className="text-2xl text-white">Privacy Guarantee</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <p className="text-white">
                      You retain full ownership and control of your documents
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <p className="text-white">
                      Your essays are automatically deleted after 7 days
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <p className="text-white">
                      Your essays will not be used to train generative AI models or sold to any 3rd party vendors
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <p className="text-white">
                      Content is encrypted at rest and never read by us
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <p className="text-white">
                      Data is processed securely and anonymously
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <p className="text-white">
                      Your email or name is never stored.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Demo iframe Section */}
      <main className="container mx-auto px-2 pt-16 pb-4">
        <div className="max-w-6xl mx-auto overflow-hidden">
          <iframe
            ref={iframeRef}
            src={DEMO_IFRAME_URL}
            title="Checkmark Demo"
            className="border-0"
            style={{
              height: `${iframeHeight}px`,
              minHeight: "600px",
              maxHeight: "1200px",
              width: "105%",
              marginLeft: "-2.5%",
              transform: "scale(0.95)",
              transformOrigin: "top center",
              transition: "height 0.3s ease-in-out",
              background: "transparent"
            }}
            allowFullScreen
          />
        </div>
      </main>
    </>
  );
};

export default Demo;
