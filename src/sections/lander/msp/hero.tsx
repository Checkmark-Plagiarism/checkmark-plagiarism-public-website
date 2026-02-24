"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { Form } from "./form";

export const MSPHero = () => {
    return (
        <section id="contact" className="relative pt-32 pb-20 overflow-hidden" style={{ background: "hsla(218, 59%, 24%, 1.00)" }}>
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
                            <span className="text-sm font-medium text-white/90">Built for Managed Service Providers</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-display font-extrabold text-white mb-6 leading-tight">
                            Add academic integrity to{" "}
                            <span className="text-accent">every school you manage.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                            Checkmark gives MSPs a powerful, white-glove solution to deploy AI detection, plagiarism checking, and autograding across all your K-12 and higher-ed clients — with one dashboard, one integration, and zero friction.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button variant="outline-white" size="xl" asChild>
                                <a href="#demo">
                                    <ShieldCheck className="mr-2 h-5 w-5" />
                                    Try Demo
                                </a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
                            {["Multi-tenant dashboard", "LTI & API ready", "Volume partner pricing", "Dedicated support"].map((item) => (
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
                    <Form />
                </div>
            </div>
        </section>
    );
};

