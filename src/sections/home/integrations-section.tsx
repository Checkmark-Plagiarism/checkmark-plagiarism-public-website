export const Integrations = () => {
  const integrations = [
    "Google Classroom",
    "Canvas",
    "Moodle",
    "Blackboard",
    "Schoology",
    "Microsoft Teams",
  ];

  return (
    <section className="py-30 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 text-foreground mb-4">
            Works with Your Existing Tools
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate with your LMS and grading workflows
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth flex items-center justify-center group cursor-pointer border-2 border-transparent hover:border-brand-500/30"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-brand-500/10 group-hover:bg-brand-500 transition-smooth flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-500 group-hover:text-white transition-smooth">
                    {integration.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {integration}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Don't see your platform? We offer custom integrations for districts and institutions.
          </p>
          <button className="text-brand-500 font-semibold hover:text-brand-700 transition-smooth">
            Request Integration →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
