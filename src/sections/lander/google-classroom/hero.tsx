import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Computer } from "lucide-react";
const heroImg = "/images/lander/canvas/report-demo.jpg";

export const GoogleClassroomHero = () => {
    return (
        <section className="bg-background">
            <div className="bg-blue-300 h-18"></div>
            <div className="pt-32 pb-20 container mx-auto px-6 max-w-5xl text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-semibold text-primary">Google Classroom Integration</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
                    Academic integrity, built into{" "}
                    <span className="text-primary">Google Classroom.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    Checkmark brings plagiarism detection, AI writing detection, and autograding directly into Google Classroom — seamless for educators and invisible to students.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Button size="xl" asChild>
                        <a href="#signup">
                            Get Started Free
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="outline" size="xl" asChild>
                        <a href="#demo">
                            <Computer className="mr-2 h-5 w-5" />
                            Try Demo
                        </a>
                    </Button>
                </div>

                {/* Hero image */}
                <div className="relative rounded-2xl overflow-hidden shadow-strong border border-border max-w-4xl mx-auto">
                    <Image
                        src={heroImg}
                        alt="Checkmark integrated within Google Classroom showing plagiarism and AI detection results"
                        className="w-full h-auto"
                        width={1000}
                        height={1000}
                    />
                </div>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm">
                    {["Free for educators", "2-minute setup", "FERPA compliant", "Works with Google Workspace"].map((item) => (
                        <span key={item} className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
