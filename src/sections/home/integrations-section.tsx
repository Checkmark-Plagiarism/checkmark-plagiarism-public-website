import Link from "next/link";
import Image from "next/image";

export const Integrations = () => {
  const integrations = [
    {
      name: "Google Classroom",
      icon: "/images/48x48_yellow_stroke_icon@1x.png",
      alt: "Google Classroom Logo"
    },
    {
      name: "Canvas",
      icon: "/images/Canvas_Bug_Color_RGB.png",
      alt: "Canvas LMS Logo"
    }
    // TODO: Additional platforms temporarily removed - add back if needed
    // "Moodle", "Blackboard", "Schoology", "Microsoft Teams",
  ];

  return (
    <section id="integrations" className="pb-30 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 text-brand-700 mb-4">
            Integrate With Your LMS
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Add cutting-edge plagiarism detection and autograding directly into your existing workflow
          </p>
        </div>

        {/* Centered flex layout for 2 items */}
        <div className="flex justify-center gap-8 flex-wrap">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-8 pt-8 pb-5 shadow-soft flex items-center justify-center min-w-[180px]"
            >
              <div className="text-center">
                <div className="mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src={integration.icon}
                    alt={integration.alt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {integration.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don&apos;t see your platform?{" "}
            <Link
              href="/contact"
              className="text-brand-500 font-semibold hover:text-brand-700 transition-smooth"
            >
              Contact us
            </Link>
            {" "}for custom integration options!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
