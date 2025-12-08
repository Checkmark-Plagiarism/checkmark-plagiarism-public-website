"use client";

import { BarChart3, Clock, Shield, ArrowDown, CheckCircle2 } from "lucide-react";

export default function CTOValueFlow() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            Why CTOs Choose Checkmark
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Built for technical leaders who need evidence, efficiency, and enterprise-grade security.
          </p>
        </div>

        {/* Vertical Flow */}
        <div className="max-w-4xl mx-auto relative">
          {/* Connecting Line - vertical dotted line through center */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 transform -translate-x-1/2 hidden lg:block"
               style={{ height: '85%' }} />

          {/* Step 1: Data-Driven Decisions */}
          <div className="relative mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left side - Icon circle */}
              <div className="lg:w-1/2 flex justify-end">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl relative z-10 ring-8 ring-blue-100">
                    <BarChart3 className="w-16 h-16 text-white" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-brand-900 rounded-full flex items-center justify-center text-white font-bold text-lg z-20">
                    1
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-brand-900 mb-3">
                    Replace Vendor Pitches with Data
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Stop wasting time in sales demos. See exactly how AI tools impact your schools with real behavioral analytics.
                  </p>

                  {/* Stats bubbles */}
                  <div className="flex gap-3">
                    <div className="bg-white rounded-full px-4 py-2 shadow flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-800">12,500 submissions</span>
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 shadow flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-800">Real-time insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mt-8 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:mt-0 lg:bottom-[-4rem]">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <ArrowDown className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Step 2: Teacher Efficiency */}
          <div className="relative mb-16">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              {/* Right side - Icon circle */}
              <div className="lg:w-1/2 flex justify-start">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl relative z-10 ring-8 ring-purple-100">
                    <Clock className="w-16 h-16 text-white" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-brand-900 rounded-full flex items-center justify-center text-white font-bold text-lg z-20">
                    2
                  </div>
                </div>
              </div>

              {/* Left side - Content */}
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-lg border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-brand-900 mb-3">
                    Reduce Teacher Administrative Burden
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Teachers save 6+ minutes per assignment. That&apos;s 480+ hours saved across 94 teachers per semester.
                  </p>

                  {/* Stats display */}
                  <div className="bg-white rounded-2xl p-4 shadow-inner border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 font-medium">Time Saved per Teacher</span>
                      <span className="text-2xl font-bold text-purple-600">6.2 min</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" style={{ width: '73%' }} />
                    </div>
                    <div className="mt-2 text-xs text-gray-500 text-right">73% reduction in grading time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mt-8 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:mt-0 lg:bottom-[-4rem]">
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <ArrowDown className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Step 3: Security & Compliance */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left side - Icon circle */}
              <div className="lg:w-1/2 flex justify-end">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl relative z-10 ring-8 ring-green-100">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-brand-900 rounded-full flex items-center justify-center text-white font-bold text-lg z-20">
                    3
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-lg border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-brand-900 mb-3">
                    Protect Student Data
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    SOC 2 Type II certified. FERPA compliant. End-to-end encryption. Your data never trains our models.
                  </p>

                  {/* Security badges */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-3 shadow border border-green-200 text-center">
                      <div className="text-xl font-bold text-green-600">SOC 2</div>
                      <div className="text-xs text-gray-600">Type II</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow border border-green-200 text-center">
                      <div className="text-xl font-bold text-green-600">FERPA</div>
                      <div className="text-xs text-gray-600">Compliant</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow border border-green-200 text-center col-span-2">
                      <div className="text-sm font-bold text-green-600">End-to-End Encryption</div>
                      <div className="text-xs text-gray-600">Your data never trains our models</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block bg-gradient-to-r from-brand-900 to-brand-700 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="hidden md:block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white mb-1">
                  Ready to see your district&apos;s data?
                </div>
                <div className="text-white/90">
                  Schedule a 15-minute demo to see how Checkmark works for your schools.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
