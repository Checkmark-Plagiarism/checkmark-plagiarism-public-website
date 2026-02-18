"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle } from "lucide-react";

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
    institution: string;
    role: string;
};

export const CanvasSignupForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>();

    const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);
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

        // Map data to match what the API might expect or just send as is
        // Adding inquiryType and message to fit the general contact form structure if needed, 
        // or just sending these fields. We'll send what we have plus a specific subject/type.
        const payload = {
            ...values,
            // Mapping institution to school if that's what backend prefers, or sending both
            school: values.institution,
            inquiryType: "Canvas Pilot Request",
            message: `Canvas Pilot Request from ${values.name} at ${values.institution}`,
            token
        };

        try {
            const res = await fetch("/api/resend", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (data.ok) {
                setStatus("ok");
                setSubmittedData(values);
                reset();
                // Reset the widget
                if (widgetId.current && turnstile) {
                    turnstile.reset(widgetId.current);
                }
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.warn("Submission error", error);
            setStatus("error");
        }
    };

    if (status === "ok" && submittedData) {
        return (
            <section id="signup" className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-2xl text-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-heading-2 text-foreground mb-4">You're all set!</h2>
                    <p className="text-body-lg text-muted-foreground">
                        We've received your information and will reach out with next steps to get Checkmark integrated into your Canvas instance.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="signup" className="py-24 bg-background">
            {/* Turnstile script with explicit render mode */}
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onLoad={() => {
                    const win = window as unknown as { turnstile?: CloudflareTurnstile };
                    if (win.turnstile && turnstileRef.current && !widgetId.current) {
                        widgetId.current = win.turnstile.render(turnstileRef.current, {
                            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
                            theme: "auto",
                        });
                    }
                }}
            />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Left: Value props */}
                    <div>
                        <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get Started</p>
                        <h2 className="text-heading-2 text-foreground mb-6">
                            Bring Checkmark to your Canvas instance
                        </h2>
                        <p className="text-body-lg text-muted-foreground mb-8">
                            Sign up and our team will help you get set up with a free pilot. No contracts, no credit card required.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Free pilot for your department or institution",
                                "Dedicated onboarding support",
                                "Full LTI 1.3 integration in under 5 minutes",
                                "FERPA & COPPA compliant",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground">
                                    <span className="shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                                        <svg className="h-3.5 w-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-card rounded-2xl border border-border shadow-medium p-8">
                        <h3 className="text-xl font-bold text-foreground mb-6">Request access</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div>
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Dr. Jane Smith"
                                    className="mt-1.5"
                                    {...register("name", { required: "Full Name is required" })}
                                />
                                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="email">Work Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="jane@university.edu"
                                    className="mt-1.5"
                                    {...register("email", { required: "Work Email is required" })}
                                />
                                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="institution">Institution</Label>
                                <Input
                                    id="institution"
                                    placeholder="University of Example"
                                    className="mt-1.5"
                                    {...register("institution", { required: "Institution is required" })}
                                />
                                {errors.institution && <p className="text-sm text-destructive mt-1">{errors.institution.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="role">Your Role</Label>
                                <select
                                    id="role"
                                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    {...register("role", { required: "Role is required" })}
                                >
                                    <option value="">Select your role</option>
                                    <option value="instructor">Instructor / Professor</option>
                                    <option value="admin">Canvas Administrator</option>
                                    <option value="department_head">Department Head</option>
                                    <option value="it">IT / EdTech</option>
                                </select>
                                {errors.role && <p className="text-sm text-destructive mt-1">{errors.role.message}</p>}
                            </div>

                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Contact Us"}
                                {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                            </Button>

                            <div ref={turnstileRef} id="cf-turnstile" className="flex justify-center" />

                            {status === "error" && (
                                <p className="text-red-700 text-center">Sorry—something went wrong. Please try again.</p>
                            )}

                            <p className="text-xs text-center text-muted-foreground">
                                By signing up, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
