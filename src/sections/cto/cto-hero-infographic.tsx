"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import ScheduleDemoButton from "@/components/schedule-demo-button";

type FormData = {
  name: string;
  email: string;
  school?: string;
  role: string;
  message: string;
};

export default function CTOHeroInfographic() {
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
    const token = window.turnstile?.getResponse?.("#cf-turnstile-cto-hero") ?? null;
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
      window.turnstile?.reset?.("#cf-turnstile-cto-hero");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 pt-32 pb-20 overflow-hidden">
      {/* Turnstile auto-render script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-700 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600 rounded-full opacity-20 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: Content */}
            <div>
              <div className="mb-6">
                <Image
                  src="/images/android-chrome-384x384.png"
                  alt="Checkmark Plagiarism"
                  width={80}
                  height={80}
                  className="h-20 w-20"
                />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Make Smart Adoption Decisions with Real Data
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Stop relying on vendor promises. Get district-wide insights into AI usage, academic integrity, and teacher efficiency.
              </p>

              {/* Key benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-900" />
                  </div>
                  <span className="text-white/90 font-medium">Track AI usage patterns across all schools</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-900" />
                  </div>
                  <span className="text-white/90 font-medium">Measure real teacher time savings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-900" />
                  </div>
                  <span className="text-white/90 font-medium">SOC 2 Type II certified, FERPA compliant</span>
                </div>
              </div>

              {/* CTA Button moved here */}
              <ScheduleDemoButton
                variant="primary"
                size="lg"
                className="bg-brand-900 hover:bg-brand-800 text-white rounded-xl py-4 px-8 text-lg font-semibold shadow-lg"
              >
                Schedule 15-Minute Demo
              </ScheduleDemoButton>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-white/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-900 mb-2">
                  Send us a message
                </h3>
                <p className="text-gray-600">
                  Our team will respond within 24 hours
                </p>
              </div>

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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="Jane Doe"
                      {...register("name", { required: true, maxLength: 100 })}
                    />
                    {errors.name && <p className="text-sm text-red-600 mt-1">Name is required.</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="jane@district.edu"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">Valid email required.</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School/District (Optional)</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="Lincoln Unified School District"
                      {...register("school", { maxLength: 200 })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
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
                    {errors.role && <p className="text-sm text-red-600 mt-1">Please select your role.</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      rows={3}
                      placeholder="Tell us about your district's needs..."
                      {...register("message", { required: true, minLength: 10 })}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">Please enter at least 10 characters.</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto rounded-lg bg-brand-900 px-6 py-3 text-white font-semibold hover:bg-brand-800 disabled:opacity-50 transition-colors"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                    {/* Auto-rendered widget */}
                    <div
                      id="cf-turnstile-cto-hero"
                      className="cf-turnstile"
                      data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      data-theme="auto"
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <p className="text-red-700 text-sm">Sorry—something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
