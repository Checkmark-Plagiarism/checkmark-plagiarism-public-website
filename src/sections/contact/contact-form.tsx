"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";

type FormData = {
  name: string;
  email: string;
  school?: string;
  role: string;
  inquiryType: string;
  message: string;
};

export default function ContactForm() {
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
    const token = window.turnstile?.getResponse?.("#cf-turnstile") ?? null;
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
      window.turnstile?.reset?.("#cf-turnstile");
    } else {
      setStatus("error");
    }
  };

  // If successful, show ONLY the success message (replace entire form)
  if (status === "ok" && submittedData) {
    return (
      <div className="space-y-4 max-w-lg">
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
    );
  }

  // Otherwise, show the form
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
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
          placeholder="jane@example.com"
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
          <option value="Teacher">Teacher</option>
          <option value="Administrator">Administrator</option>
          <option value="IT Staff">IT Staff</option>
          <option value="District Official">District Official</option>
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
          <option value="Pricing Information">Pricing Information</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Partnership Opportunity">Partnership Opportunity</option>
          <option value="General Question">General Question</option>
          <option value="Other">Other</option>
        </select>
        {errors.inquiryType && <p className="text-sm text-red-600">Please select an inquiry type.</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          className="mt-1 w-full rounded border p-2"
          rows={6}
          placeholder="How can we help?"
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
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
        {/* Auto-rendered widget. Give it a stable id so we can getResponse/reset */}
        <div
          id="cf-turnstile"
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
  );
}
