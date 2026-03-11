import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const gcLogo = "/images/google-classroom-icon.png";

export const GoogleClassroomHero = () => {
    return (
        <section className="bg-background">
            <div className="bg-blue-300 h-18"></div>
            <div className="pt-32 pb-20 container mx-auto px-6 max-w-5xl text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-8">
                    <Image src="/images/android-chrome-192x192.png" alt="Checkmark" width={20} height={20} />
                    <span className="text-sm font-semibold text-primary">Google Classroom Integration</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
                    Academic integrity, built into{" "}
                    <span className="inline-flex items-center gap-2 text-primary">
                        Google Classroom
                        <Image
                            src={gcLogo}
                            alt="Google Classroom Logo"
                            width={60}
                            height={60}
                            className="inline-block"
                        />
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    Checkmark helps educators uphold fairness in the classroom with plagiarism detection, AI writing analysis, and unbiased autograding — all built into Google Classroom.
                </p>

                {/* CTAs + Hero sticker images */}
                <div className="relative mb-64 md:mb-72">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="xl" asChild>
                            <a href="#signup">
                                Get Started Free
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>

                    {/* Left sticker */}
                    <Image
                        src="/images/classroom.png"
                        alt="Students in a classroom"
                        width={440}
                        height={440}
                        className="absolute -left-16 md:-left-12 top-1/2 -translate-y-1/4 -rotate-3 pointer-events-none hidden sm:block"
                    />

                    {/* Right sticker */}
                    <Image
                        src="/images/group-homework.png"
                        alt="Students working together on homework"
                        width={440}
                        height={440}
                        className="absolute -right-16 md:-right-12 top-1/2 -translate-y-1/4 rotate-3 pointer-events-none hidden sm:block"
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
