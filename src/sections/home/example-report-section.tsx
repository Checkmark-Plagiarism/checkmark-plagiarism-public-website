import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://teach.checkmarkplagiarism.com/';

export const ExampleReport = () => {
  return (
    <section className="pt-16 pb-30 bg-brand-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-heading-3 text-white mb-4">
            Our report detects these typing patterns and more...
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between ml-6 mb-4">
            <p className="text-body-lg text-white/90">
              Click around the interactive report below
            </p>
            <Link
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold transition-smooth h-10 px-6 bg-white text-brand-900 hover:bg-white/90 shadow-medium hover:shadow-strong mr-3"
            >
              Submit Your Own
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-strong border-4 border-white/10 h-[600px] bg-white">
            <iframe
              src="https://dev.checkmarkplagiarism.com/example-report"
              title="Example Report"
              className="w-full bg-white"
              style={{
                border: 0,
                transform: 'scale(0.8)',
                transformOrigin: 'top center',
                width: '133.33%',
                height: '800px',
                marginLeft: '-16.67%',
                marginTop: '-40px'
              }}
              allow="clipboard-write"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleReport;
