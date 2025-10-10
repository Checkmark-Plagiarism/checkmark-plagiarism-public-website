"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";

type FormData = { name: string; email: string; message: string };

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

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
      reset();
      window.turnstile?.reset?.("#cf-turnstile");
    } else {
      setStatus("error");
    }
  };

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

      {status === "ok" && (
        <p className="text-green-700">Thanks! Your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-red-700">Sorry—something went wrong. Please try again.</p>
      )}
    </form>
  );
}
