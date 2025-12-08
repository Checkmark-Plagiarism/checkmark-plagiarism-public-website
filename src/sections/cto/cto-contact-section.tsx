"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScheduleDemoButton from "@/components/schedule-demo-button";
import { Mail, Phone } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  school?: string;
  role: string;
  inquiryType: string;
  message: string;
};

export default function CTOContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [emailFrom, setEmailFrom] = useState<string>("");

  const onSubmit = async (values: FormData) => {
    setStatus("idle");

    // Read token from the auto-rendered widget
    const token = window.turnstile?.getResponse?.("#cf-turnstile-cto") ?? null;
    if (!token) {
      alert("Please complete the captcha.");
      return;
    }

    const res = await fetch("/api/resend", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...values, token }),
    });
    const data = await res.json();

    if (data.ok) {
      setStatus("ok");
      setSubmittedData(values);
      setEmailFrom(data.emailFrom || "");
      reset();
      window.turnstile?.reset?.("#cf-turnstile-cto");
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-2 text-brand-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a personalized demo or reach out to discuss your institution&apos;s specific needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Our team will respond within 24 hours to discuss how Checkmark can support your institution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {status === "ok" && submittedData ? (
                  <div className="space-y-4">
                    <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Message Sent Successfully!</h3>
                      <p className="text-sm text-green-800 mb-4">
                        Thank you for contacting us. We&apos;ve received your message and will get back to you soon.
                      </p>
                      <div className="border-t border-green-200 pt-4 mt-4">
                        <p className="text-sm text-green-800">
                          We&apos;ve sent a confirmation to <strong>{submittedData.email}</strong>.
                        </p>
                        <p className="text-sm text-green-700 mt-2">
                          Please check your spam folder and whitelist <strong>{emailFrom}</strong> to ensure you receive our response.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Turnstile auto-render script */}
                    <Script
                      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                      strategy="afterInteractive"
                    />

                    <div>
                      <label className="block text-sm font-medium">Name</label>
                      <input
                        className="mt-1 w-full rounded border p-2"
                        placeholder="Jane Doe"
                        {...register("name", { required: true, maxLength: 100 })}
                      />
                      {errors.name && <p className="text-sm text-red-600">Name is required.</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="mt-1 w-full rounded border p-2"
                        placeholder="jane@university.edu"
                        {...register("email", { required: true })}
                      />
                      {errors.email && <p className="text-sm text-red-600">Valid email required.</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium">School (Optional)</label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded border p-2"
                        placeholder="Your school or institution"
                        {...register("school", { maxLength: 200 })}
                      />
                      {errors.school && <p className="text-sm text-red-600">Please enter a valid school name.</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium">Role</label>
                      <select
                        className="mt-1 w-full rounded border p-2"
                        {...register("role", { required: true })}
                      >
                        <option value="">Select your role...</option>
                        <option value="CTO">CTO</option>
                        <option value="CIO">CIO</option>
                        <option value="VP of Technology">VP of Technology</option>
                        <option value="IT Director">IT Director</option>
                        <option value="Administrator">Administrator</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.role && <p className="text-sm text-red-600">Please select your role.</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium">Inquiry Type</label>
                      <select
                        className="mt-1 w-full rounded border p-2"
                        {...register("inquiryType", { required: true })}
                      >
                        <option value="">What can we help with?</option>
                        <option value="Enterprise Pricing">Enterprise Pricing</option>
                        <option value="Custom Integration">Custom Integration</option>
                        <option value="Security & Compliance">Security & Compliance</option>
                        <option value="Technical Evaluation">Technical Evaluation</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.inquiryType && <p className="text-sm text-red-600">Please select an inquiry type.</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium">Message</label>
                      <textarea
                        className="mt-1 w-full rounded border p-2"
                        rows={4}
                        placeholder="Tell us about your institution&apos;s needs..."
                        {...register("message", { required: true, minLength: 10 })}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600">Please enter at least 10 characters.</p>
                      )}
                    </div>

                    <div className="flex flex-row justify-between">
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                      {/* Auto-rendered widget */}
                      <div
                        id="cf-turnstile-cto"
                        className="cf-turnstile"
                        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        data-theme="auto"
                      />
                    </div>

                    {/* Error message */}
                    {status === "error" && (
                      <p className="text-red-700">Sorry—something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Right Column - Schedule Demo & Contact Info */}
            <div className="space-y-8">
              {/* Schedule Demo Card */}
              <Card className="shadow-soft bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Prefer a live demo?</CardTitle>
                  <CardDescription className="text-gray-700">
                    See Checkmark in action with a personalized 30-minute demo tailored to your institution&apos;s workflow.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScheduleDemoButton variant="secondary" size="lg" className="w-full" />
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-sm text-gray-600">
                      <strong>What you&apos;ll see:</strong>
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Live Essay Playback™ demonstration</li>
                      <li>• Custom integration walkthrough</li>
                      <li>• ROI analysis for your institution</li>
                      <li>• Q&A with technical experts</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info Card */}
              <Card className="shadow-soft bg-brand-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Direct Contact</CardTitle>
                  <CardDescription className="text-white/90">
                    Need immediate assistance? Reach out to our team directly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Enterprise Sales</h3>
                      <a
                        href="mailto:sales@checkmarkplagiarism.com"
                        className="text-white underline"
                      >
                        sales@checkmarkplagiarism.com
                      </a>
                      <p className="text-sm text-white/80 mt-1">
                        For pricing and custom solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Technical Support</h3>
                      <a
                        href="mailto:support@checkmarkplagiarism.com"
                        className="text-white underline"
                      >
                        support@checkmarkplagiarism.com
                      </a>
                      <p className="text-sm text-white/80 mt-1">
                        24-hour response time for enterprise customers
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
