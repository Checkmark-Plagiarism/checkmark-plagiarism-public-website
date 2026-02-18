"use client";

import { CheckCircle } from "lucide-react";
import { Form } from "./form";

export const CanvasSignupForm = () => {
    return (
        <section id="signup" className="py-24 bg-background">
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
                    <div className="w-full">
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    );
};
