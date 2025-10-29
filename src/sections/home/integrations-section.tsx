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
    <section id="integrations" className="py-30 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 text-foreground mb-4">
            Works with Your Existing Tools
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate with your LMS and grading workflows
          </p>
        </div>

        {/* Centered flex layout for 2 items */}
        <div className="flex justify-center gap-8 flex-wrap">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth flex items-center justify-center group cursor-pointer border-2 border-transparent hover:border-brand-500/30 min-w-[180px]"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-brand-500/10 group-hover:bg-brand-500 transition-smooth flex items-center justify-center">
                  <Image
                    src={integration.icon}
                    alt={integration.alt}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-lg"
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
          <p className="text-muted-foreground mb-6">
            Don&apos;t see your platform? Contact us for custom integration options!
          </p>
          <Link 
            href="/contact" 
            className="text-brand-500 font-semibold hover:text-brand-700 transition-smooth"
          >
            Request Integration →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
