"use client";

import { Check, X, Minus } from "lucide-react";
import Image from "next/image";

export const CompetitiveSection = () => {
  const accuracyStats = [
    { name: "GPTZero", accuracy: 91, highlight: false },
    { name: "Turnitin", accuracy: 89, highlight: false },
    { name: "Checkmark Plagiarism", accuracy: 95, highlight: true },
  ];

  const features = [
    { name: "Web-Based Plagiarism Detection", checkmark: true, turnitin: true, gptzero: "limited", grammarly: true, rainbow: false },
    { name: "AI Detection", checkmark: true, turnitin: true, gptzero: true, grammarly: false, rainbow: false },
    { name: "Keystroke Analysis", checkmark: true, turnitin: false, gptzero: false, grammarly: "limited", patentPending: true, rainbow: false },
    { name: "Copy/Paste Detection", checkmark: true, turnitin: "limited", gptzero: "limited", grammarly: "limited", rainbow: false },
    { name: "Essay Playback™", checkmark: true, turnitin: "limited", gptzero: "limited", grammarly: "limited", rainbow: false },
    { name: "Autograding", checkmark: true, turnitin: false, gptzero: false, grammarly: "limited", rainbow: true },
    { name: "Writing Feedback", checkmark: true, turnitin: true, gptzero: false, grammarly: true, rainbow: true },
  ];

  return (
    <>
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(248, 113, 113)" />
            <stop offset="25%" stopColor="rgb(250, 204, 21)" />
            <stop offset="50%" stopColor="rgb(74, 222, 128)" />
            <stop offset="75%" stopColor="rgb(96, 165, 250)" />
            <stop offset="100%" stopColor="rgb(192, 132, 252)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Blue Section - Accuracy Comparison */}
      <section className="py-30 bg-brand-700">
        <div className="container mx-auto px-6">
          {/* Accuracy Comparison - Bar Graph */}
          <div className="max-w-5xl mx-auto mb-0">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Overall Accuracy Comparison
            </h3>
            <div className="bg-white rounded-2xl p-8 shadow-strong">
              <div className="flex items-end justify-center gap-12" style={{ height: '400px' }}>
                {accuracyStats.map((stat, index) => {
                  // Custom unit scaling: 89 = 4.5 units, 91 = 5 units, 95 = 6 units
                  const getUnits = (accuracy: number) => {
                    if (accuracy === 89) return 4.5;
                    if (accuracy === 91) return 5;
                    if (accuracy === 95) return 6;
                    return 4.5;
                  };
                  const units = getUnits(stat.accuracy);
                  const pixelsPerUnit = 50; // Height per unit
                  const barHeight = units * pixelsPerUnit;

                  return (
                    <div key={index} className="flex flex-col items-center gap-3 flex-1 max-w-[200px]">
                      {/* Bar container */}
                      <div className="relative w-full flex flex-col items-center justify-end" style={{ height: '100%' }}>
                        {/* Percentage label on top of bar */}
                        <div className={`text-3xl font-bold mb-3 ${
                          stat.highlight ? "text-brand-500" : "text-gray-600"
                        }`}>
                          {stat.accuracy}%
                        </div>
                        {/* Bar */}
                        <div
                          className={`rounded-t-lg transition-all ${
                            stat.highlight
                              ? "w-full bg-gradient-to-t from-brand-500 to-brand-400 shadow-lg scale-x-110 origin-bottom"
                              : "w-11/12 bg-gray-300"
                          }`}
                          style={{
                            height: `${barHeight}px`
                          }}
                        />
                      </div>
                      {/* Label */}
                      <div className={`flex items-center justify-center gap-2 mt-3 ${
                        stat.highlight ? "text-brand-700" : "text-gray-600"
                      }`}>
                        {stat.highlight && (
                          <Image
                            src="/images/android-chrome-192x192.png"
                            alt="Checkmark"
                            width={20}
                            height={20}
                            className="flex-shrink-0"
                          />
                        )}
                        <p className="text-sm font-semibold text-center">
                          {stat.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Impact Note */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-center text-gray-600">
                  <span className="font-semibold text-brand-700">A 6% improvement in accuracy</span> can decrease false accusations by approximately <span className="font-semibold text-brand-700">300 submissions per year</span> per 1,000 students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Section - Feature Table */}
      <section className="pt-14 pb-30 bg-background">
        <div className="container mx-auto px-6">
          {/* Feature Comparison Table */}
          <div className="max-w-5xl mx-auto mb-0">
            <h3 className="text-2xl font-bold text-center text-brand-900 mb-8">
              Feature Comparison
            </h3>
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                      Turnitin
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                      GPTZero
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                      Grammarly
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-brand-700 bg-brand-50">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src="/images/android-chrome-192x192.png"
                          alt="Checkmark"
                          width={20}
                          height={20}
                          className="flex-shrink-0"
                        />
                        <span>Checkmark Plagiarism</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 ${
                        index % 2 === 0 ? "bg-gray-50/50" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium">
                        <span className={feature.rainbow
                          ? "bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold"
                          : "text-foreground"}>
                          {feature.name}
                        </span>
                      </td>
                      {/* Turnitin Column */}
                      <td className="px-6 py-4 text-center">
                        {feature.turnitin === true ? (
                          <Check className="w-5 h-5 text-gray-400 mx-auto" />
                        ) : feature.turnitin === "limited" ? (
                          <div className="flex flex-col items-center">
                            <Minus className="w-5 h-5 text-yellow-500 mx-auto" />
                            <span className="text-xs text-gray-500 mt-1">Limited</span>
                          </div>
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      {/* GPTZero Column */}
                      <td className="px-6 py-4 text-center">
                        {feature.gptzero === true ? (
                          <Check className="w-5 h-5 text-gray-400 mx-auto" />
                        ) : feature.gptzero === "limited" ? (
                          <div className="flex flex-col items-center">
                            <Minus className="w-5 h-5 text-yellow-500 mx-auto" />
                            <span className="text-xs text-gray-500 mt-1">Limited</span>
                          </div>
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      {/* Grammarly Column */}
                      <td className="px-6 py-4 text-center">
                        {feature.grammarly === true ? (
                          <Check className="w-5 h-5 text-gray-400 mx-auto" />
                        ) : feature.grammarly === "limited" ? (
                          <div className="flex flex-col items-center">
                            <Minus className="w-5 h-5 text-yellow-500 mx-auto" />
                            <span className="text-xs text-gray-500 mt-1">Limited</span>
                          </div>
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      {/* Checkmark Column */}
                      <td className="px-6 py-4 text-center bg-brand-50">
                        {feature.checkmark && (
                          <div className="flex flex-col items-center">
                            <Check
                              className={`w-5 h-5 font-bold mx-auto ${!feature.rainbow ? "text-brand-500" : ""}`}
                              style={feature.rainbow ? { stroke: 'url(#rainbowGradient)', fill: 'none' } : undefined}
                            />
                            {feature.patentPending && (
                              <span className="text-xs text-gray-500 italic mt-1">
                                Patent Pending
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompetitiveSection;
