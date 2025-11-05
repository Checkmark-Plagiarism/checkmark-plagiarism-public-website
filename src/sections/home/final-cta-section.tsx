import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link";

export const FinalCTA = () => {
  return (
    <section className="py-30 bg-brand-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-1 text-white mb-6">
            Stop Guessing. Start Trusting.
          </h2>
          <p className="text-body-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of educators who are fostering trust, transparency, and responsible
            AI use in their classrooms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <LinkButton href="/contact" variant="outline-white" size="xl">
              <Mail className="mr-2" />
              Contact Sales
            </LinkButton>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-lg font-bold h-16 px-12 bg-white text-brand-900 hover:bg-white/90 shadow-medium hover:shadow-strong transition-smooth group"
            >
              Try a Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Free 30-day trial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
