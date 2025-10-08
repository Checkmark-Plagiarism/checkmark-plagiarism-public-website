"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";

type FormData = { name: string; email: string; message: string; token?: string };

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const tokenRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

  useEffect(() => {
    // Load Turnstile script
    const id = "turnstile-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  useEffect(() => {
    // Render Turnstile once script is available
    const interval = setInterval(() => {
      // @ts-ignore
      if (window.turnstile && document.getElementById("cf-turnstile")) {
        // @ts-ignore
        window.turnstile.render("#cf-turnstile", {
          sitekey: siteKey,
          callback: (token: string) => (tokenRef.current = token),
          "error-callback": () => (tokenRef.current = null),
          "expired-callback": () => (tokenRef.current = null),
        });
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [siteKey]);

  const onSubmit = async (values: FormData) => {
    setStatus("idle");
    const token = tokenRef.current;
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
      // @ts-ignore reset captcha
      window.turnstile?.reset?.("#cf-turnstile");
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">

      {/* Turnstile auto-render */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      {/* The magic: Turnstile auto-renders any .cf-turnstile element */}
      <div
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        data-theme="auto"
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

      {/* Turnstile mounts here */}
      <div id="cf-turnstile" className="mt-2" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>

      {status === "ok" && (
        <p className="text-green-700">Thanks! Your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-red-700">Sorry—something went wrong. Please try again.</p>
      )}
    </form>
  );
}
