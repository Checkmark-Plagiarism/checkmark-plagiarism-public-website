import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
const canvasHeroImg = "/images/assets/canvas-hero.jpg";

export const CanvasHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "hsl(218, 70%, 16%)" }}>
            {/* Decorative dots pattern - Instructure inspired */}
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

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="hero" size="xl" asChild>
                                <a href="#signup">
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline-white" size="xl" asChild>
                                <a href="/demo">
                                    <Play className="mr-2 h-5 w-5" />
                                    Watch Demo
                                </a>
                            </Button>
                        </div>

                        <div className="mt-10 flex items-center gap-6 text-white/60 text-sm">
                            <span className="flex items-center gap-2">
                                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                Free Trial Available
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                5-minute setup
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                LTI 1.3 certified
                            </span>
                        </div>
                    </div>

                    {/* Right: Hero image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-strong border border-white/10">
                            <Image
                                src={canvasHeroImg}
                                alt="Checkmark plagiarism detection integrated within Canvas LMS dashboard"
                                width={1000}
                                height={1000}
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Floating stat card */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-strong p-4 border border-border">
                            <p className="text-sm font-medium text-muted-foreground">Submissions checked</p>
                            <p className="text-2xl font-extrabold text-foreground">2.4M+</p>
                            <p className="text-xs text-accent font-semibold">this semester</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
