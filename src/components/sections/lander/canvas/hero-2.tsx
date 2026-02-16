"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100),
    email: z.string().trim().email("Please enter a valid email").max(255),
    institution: z.string().trim().min(1, "Institution is required").max(200),
    role: z.string().trim().min(1, "Please select a role"),
    message: z.string().trim().max(1000).optional(),
});

export const Canvas2Hero = () => {
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [form, setForm] = useState({ name: "", email: "", institution: "", role: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = contactSchema.safeParse(form);
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.issues.forEach((err) => {
                if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }
        setErrors({});
        setSubmitted(true);
    };

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    };

    return (
        <section id="contact" className="relative pt-32 pb-20 overflow-hidden" style={{ background: "hsl(218, 70%, 16%)" }}>
            {/* Decorative dots */}
            <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
                <div className="grid grid-cols-4 gap-3">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-20 right-10 w-32 h-32 opacity-10">
                <div className="grid grid-cols-4 gap-3">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-accent" />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Copy */}
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-sm font-medium text-white/90">Official Canvas LTI Integration</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-display font-extrabold text-white mb-6 leading-tight">
                            Academic integrity,{" "}
                            <span className="text-accent">built right into Canvas.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                            Checkmark brings AI detection, plagiarism checking, and autograding directly into your Canvas workflow — no tab-switching, no extra logins, just results.
                        </p>

                        <div className="flex items-center gap-6 text-white/60 text-sm">
                            {["Free for educators", "5-minute setup", "LTI 1.3 certified"].map((item) => (
                                <span key={item} className="flex items-center gap-2">
                                    <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Contact form */}
                    <div className="bg-white rounded-2xl shadow-strong p-8">
                        {submitted ? (
                            <div className="text-center py-10">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-foreground mb-3">You're all set!</h3>
                                <p className="text-muted-foreground">We'll reach out with next steps to get Checkmark into your Canvas instance.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-bold text-foreground mb-6">Get in touch</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <Label htmlFor="c2-name">Full Name</Label>
                                        <Input id="c2-name" placeholder="Dr. Jane Smith" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="mt-1.5" />
                                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="c2-email">Work Email</Label>
                                        <Input id="c2-email" type="email" placeholder="jane@university.edu" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="mt-1.5" />
                                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="c2-institution">Institution</Label>
                                        <Input id="c2-institution" placeholder="State University" value={form.institution} onChange={(e) => handleChange("institution", e.target.value)} className="mt-1.5" />
                                        {errors.institution && <p className="text-sm text-destructive mt-1">{errors.institution}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="c2-role">Your Role</Label>
                                        <select
                                            id="c2-role"
                                            value={form.role}
                                            onChange={(e) => handleChange("role", e.target.value)}
                                            className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        >
                                            <option value="">Select your role</option>
                                            <option value="faculty">Faculty</option>
                                            <option value="admin">Administrator</option>
                                            <option value="department_head">Department Head</option>
                                            <option value="it">IT / LMS Admin</option>
                                        </select>
                                        {errors.role && <p className="text-sm text-destructive mt-1">{errors.role}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="c2-message">Message (optional)</Label>
                                        <Textarea id="c2-message" placeholder="Tell us about your needs..." value={form.message} onChange={(e) => handleChange("message", e.target.value)} className="mt-1.5" rows={3} />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full">
                                        Request Free Pilot
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                    <p className="text-xs text-center text-muted-foreground">
                                        By signing up, you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
