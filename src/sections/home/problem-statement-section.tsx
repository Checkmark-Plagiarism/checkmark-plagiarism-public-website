import Image from "next/image";

export const ProblemStatement = () => {
  return (
    <section className="pt-20 pb-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading-1 text-brand-700 mb-6">
            How It Works
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Teachers can tell when students are copying, just by replaying their typing patterns and copy-pastes via Essay Playback™.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-heading-3 text-brand-700 mb-6">
              Authentic Writing
            </h3>
            <div className="rounded-xl overflow-hidden shadow-medium border-2 border-border">
              <Image
                src="/images/features/authentic-writing.gif"
                alt="Authentic Writing Example"
                width={600}
                height={450}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-heading-3 text-brand-700 mb-6">
              Copied Writing
            </h3>
            <div className="rounded-xl overflow-hidden shadow-medium border-2 border-border">
              <Image
                src="/images/features/copied-writing.gif"
                alt="Copied Writing Example"
                width={600}
                height={450}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProblemStatement;
