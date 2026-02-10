"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";

interface CloudflareTurnstile {
  render: (
    element: string | HTMLElement,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      callback?: (token: string) => void;
      "error-callback"?: () => void;
      "expired-callback"?: () => void;
    }
  ) => string;
  reset: (widgetId?: string) => void;
  getResponse: (widgetId?: string) => string | undefined;
  remove: (widgetId: string) => void;
}

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
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    // If the window.turnstile object is already present (e.g. from a previous navigation),
    // we must render the widget manually because the script won't reload.
    const win = window as unknown as { turnstile?: CloudflareTurnstile };
    if (win.turnstile && turnstileRef.current && !widgetId.current) {
      try {
        widgetId.current = win.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
          theme: "auto",
        });
      } catch (e) {
        console.warn("Turnstile render error", e);
      }
    }

    // Cleanup: remove the widget when the component unmounts
    return () => {
      const win = window as unknown as { turnstile?: CloudflareTurnstile };
      if (widgetId.current && win.turnstile) {
        try {
          win.turnstile.remove(widgetId.current);
        } catch (e) {
          console.warn("Turnstile remove error", e);
        }
        widgetId.current = null;
      }
    };
  }, []);

  const onSubmit = async (values: FormData) => {
    setStatus("idle");

    // Read token from the widget using the stored ID if available
    // If for some reason widgetId is null but the user solved it (implicit flow fallback), try selector
    const win = window as unknown as { turnstile?: CloudflareTurnstile };
    const turnstile = win.turnstile;
    const token = widgetId.current
      ? turnstile?.getResponse(widgetId.current)
      : turnstile?.getResponse("#cf-turnstile");

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
      // Reset the widget
      if (widgetId.current && turnstile) {
        turnstile.reset(widgetId.current);
      }
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
      {/* Turnstile script with explicit render mode */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => {
          // Logic to render if script just loaded
          const win = window as unknown as { turnstile?: CloudflareTurnstile };
          if (win.turnstile && turnstileRef.current && !widgetId.current) {
            widgetId.current = win.turnstile.render(turnstileRef.current, {
              sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
              theme: "auto",
            });
          }
        }}
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
        {/* Render target - implicitly rendered via the hook now */}
        <div
          ref={turnstileRef}
          id="cf-turnstile"
        // Classname 'cf-turnstile' removed to prevent double-render / implicit rendering
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <p className="text-red-700">Sorry—something went wrong. Please try again.</p>
      )}
    </form>
  );
}
