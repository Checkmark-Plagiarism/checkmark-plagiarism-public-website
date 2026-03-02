"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";

export interface CloudflareTurnstile {
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

export type FormData = {
    name: string;
    email: string;
    company: string;
    role: string;
    message?: string;
};

export const Form = () => {
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

        const win = window as unknown as { turnstile?: CloudflareTurnstile };
        const turnstile = win.turnstile;
        const token = widgetId.current
            ? turnstile?.getResponse(widgetId.current)
            : turnstile?.getResponse("#cf-turnstile");

        if (!token) {
            alert("Please complete the captcha.");
            return;
        }

        const payload = {
            ...values,
            company: values.company,
            inquiryType: "MSP Partner Inquiry",
            message: values.message || `MSP Partner Inquiry from ${values.name} at ${values.company}`,
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
            <div className="bg-white rounded-2xl shadow-strong p-8 text-center py-10">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground mb-3">You&apos;re all set!</h3>
                <p className="text-muted-foreground">We&apos;ll reach out with next steps to explore a Checkmark partnership.</p>
            </div>
        );
    }

    return (
        <>
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
            <div className="bg-white rounded-2xl shadow-strong p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Become a Checkmark partner</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="John Davis"
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
                            placeholder="john@yourmsp.com"
                            className="mt-1.5"
                            {...register("email", { required: "Work Email is required" })}
                        />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                            id="company"
                            placeholder="Acme Technology Solutions"
                            className="mt-1.5"
                            {...register("company", { required: "Company is required" })}
                        />
                        {errors.company && <p className="text-sm text-destructive mt-1">{errors.company.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="role">Your Role</Label>
                        <select
                            id="role"
                            className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...register("role", { required: "Role is required" })}
                        >
                            <option value="">Select your role</option>
                            <option value="owner">Owner / CEO</option>
                            <option value="sales">Sales / Account Manager</option>
                            <option value="technical">Technical Lead / Engineer</option>
                            <option value="operations">Operations Manager</option>
                        </select>
                        {errors.role && <p className="text-sm text-destructive mt-1">{errors.role.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="message">Message (optional)</Label>
                        <Textarea
                            id="message"
                            placeholder="How many schools do you manage? Tell us about your needs..."
                            className="mt-1.5"
                            rows={3}
                            {...register("message")}
                        />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Request Partner Info"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                    <div ref={turnstileRef} id="cf-turnstile" className="flex justify-center" />
                    {status === "error" && (
                        <p className="text-destructive text-center text-sm">Sorry—something went wrong. Please try again.</p>
                    )}
                    <p className="text-xs text-center text-muted-foreground">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </form>
            </div>
        </>
    );
};
