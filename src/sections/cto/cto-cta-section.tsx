"use client";

import ScheduleDemoButton from "@/components/schedule-demo-button";

export default function CTOCTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-900 mb-6">
            Ready to See Your District&apos;s Data?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Schedule a 15-minute demo or get in touch with our team to discuss your specific needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ScheduleDemoButton
              variant="primary"
              size="lg"
              className="bg-brand-900 hover:bg-brand-800 text-white rounded-xl py-4 px-8 text-lg font-semibold shadow-lg"
            >
              Schedule 15-Minute Demo
            </ScheduleDemoButton>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-brand-900 border-2 border-brand-900 rounded-xl py-4 px-8 text-lg font-semibold shadow-lg transition-colors"
            >
              Contact Sales
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>FERPA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
