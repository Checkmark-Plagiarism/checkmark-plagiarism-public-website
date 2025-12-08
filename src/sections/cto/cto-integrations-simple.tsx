import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTOIntegrationsSimple() {
  const integrations = [
    {
      name: "Canvas LMS",
      icon: "/images/Canvas_Bug_Color_RGB.png",
      alt: "Canvas LMS Logo",
    },
    {
      name: "Google Classroom",
      icon: "/images/48x48_yellow_stroke_icon@1x.png",
      alt: "Google Classroom Logo",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 text-brand-900 mb-4">
            Works with Your Existing Stack
          </h2>
          <p className="text-body text-muted-foreground mb-10">
            Seamless LMS integration. Deploy district-wide in under 30 minutes.
          </p>

          {/* Integration Logos */}
          <div className="flex justify-center gap-12 mb-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-xl px-10 py-8 shadow-soft border border-gray-200 hover:shadow-medium transition-shadow"
              >
                <Image
                  src={integration.icon}
                  alt={integration.alt}
                  width={64}
                  height={64}
                  className="object-contain mx-auto mb-3"
                />
                <p className="text-sm font-semibold text-gray-700">
                  {integration.name}
                </p>
              </div>
            ))}
          </div>

          {/* Link to full integrations */}
          <Link
            href="/features/integrations"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-smooth"
          >
            View all integrations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
