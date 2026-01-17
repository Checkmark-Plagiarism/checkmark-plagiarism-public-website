"use client";

export const AutograderSection = () => {
  return (
    <section className="pt-24 pb-16 bg-brand-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-1 text-white mb-16 leading-tight">
            The future isn&apos;t banning AI.
            <br />
            <span className="text-accent">It&apos;s using it to teach.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-heading-3 text-white mb-3">
                Standardize your grading
              </h3>
              <p className="text-white/70">
                Consistent rubric-aligned scores across all submissions
              </p>
            </div>

            <div>
              <h3 className="text-heading-3 text-white mb-3">
                Personalized feedback
              </h3>
              <p className="text-white/70">
                Every student gets actionable writing feedback
              </p>
            </div>

            <div>
              <h3 className="text-heading-3 text-white mb-3">
                Never trains on essays
              </h3>
              <p className="text-white/70">
                Your data stays yours, period
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutograderSection;
