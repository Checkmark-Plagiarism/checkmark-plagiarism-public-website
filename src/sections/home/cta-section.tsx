import { LinkButton } from "@/components/ui/link";
import Image from "next/image";
import Link from "next/link";

const heroImage = '/images/home/example_screen.jpg';

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Try{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Checkmark Plagiarism?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get started today — fully integrated with Google Classroom & Canvas.
              </p>
              <p className="text-lg text-foreground">
                No extra logins. No intrusive monitoring. Just clear, transparent plagiarism detection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LinkButton href="/contact" variant="hero" size="lg" className="text-lg px-8 py-6 h-auto hover:cursor-pointer">
                Contact Us
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                Schedule Demo
              </LinkButton>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>No setup required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Free trial available</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-large">
              <Image
                src={heroImage}
                height="500"
                width="500"
                alt="Friendly teacher in classroom"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-2xl overflow-hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
