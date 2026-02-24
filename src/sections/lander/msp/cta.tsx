import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const MSPCTA = () => {
    return (
        <section className="py-24" style={{ background: "hsl(218, 70%, 16%)" }}>
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                    Ready to add academic integrity to your portfolio?
                </h2>
                <p className="text-lg text-white/80 mb-10 leading-relaxed">
                    Join our partner program and start delivering Checkmark to your school clients. Volume pricing, dedicated support, and co-marketing included.
                </p>
                <Button size="lg" variant="hero" asChild>
                    <a href="#contact">
                        Get in Touch
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
            </div>
        </section>
    );
};
