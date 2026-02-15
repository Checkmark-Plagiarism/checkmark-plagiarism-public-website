import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const GoogleClassroomCTA = () => {
    return (
        <section className="py-28 bg-hero">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                    Ready to protect academic integrity?
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                    Join thousands of educators using Checkmark in Google Classroom. Start your free pilot today — no credit card, no commitment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="xl" asChild>
                        <a href="#signup">
                            Get Started Free
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="outline-white" size="xl" asChild>
                        <a href="/demo">Schedule a Demo</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
