"use client";

import Link from "next/link";
import ScheduleDemoButton from "@/components/schedule-demo-button";

export const ExampleReport = () => {
  return (
    <section className="pt-16 pb-8 bg-brand-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-heading-3 text-white mb-2">
            Our report detects these typing patterns and more...
          </h2>
          <p className="text-white/70">
            Powered by patent-pending keystroke analysis
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="ml-6 mb-4">
            <p className="text-body-lg text-white/90">
              Click around the interactive report below
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-strong border-4 border-white/10 h-[600px] bg-white max-w-4xl mx-auto">
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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 mb-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-lg font-bold transition-smooth h-14 px-10 bg-brand-300 text-white hover:bg-brand-400 shadow-medium hover:shadow-strong"
            >
              Submit Your Own
            </Link>
            <ScheduleDemoButton variant="secondary" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleReport;
