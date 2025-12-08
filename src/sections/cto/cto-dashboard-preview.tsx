"use client";

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar } from "lucide-react";

export default function CTODashboardPreview() {
  // Chart data
  const plagiarismTrendData = [
    { month: 'Aug', rate: 15.0 },
    { month: 'Sep', rate: 14.5 },
    { month: 'Oct', rate: 14.0 },
    { month: 'Nov', rate: 13.2 },
    { month: 'Dec', rate: 12.5 },
    { month: 'Jan', rate: 12.0 },
  ];

  const teacherEfficiencyData = [
    { name: 'Week 1', minutes: 8.5 },
    { name: 'Week 2', minutes: 7.8 },
    { name: 'Week 3', minutes: 6.9 },
    { name: 'Week 4', minutes: 6.2 },
  ];

  const essayQualityData = [
    { month: 'Aug', score: 74 },
    { month: 'Sep', score: 77 },
    { month: 'Oct', score: 81 },
    { month: 'Nov', score: 84 },
    { month: 'Dec', score: 87 },
    { month: 'Jan', score: 89 },
  ];

  const studentTimeWritingData = [
    { month: 'Aug', minutes: 42 },
    { month: 'Sep', minutes: 45 },
    { month: 'Oct', minutes: 48 },
    { month: 'Nov', minutes: 52 },
    { month: 'Dec', minutes: 54 },
    { month: 'Jan', minutes: 56 },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-heading-2 text-brand-900 mb-4">
            Your District Intelligence Layer
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just check for plagiarism. Get comprehensive insights into how AI is being used across your schools.
          </p>
        </div>

        {/* Mock Dashboard UI */}
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Container - styled to look like a real app */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">

            {/* Dashboard Header (Fake UI) */}
            <div className="bg-brand-900 px-6 py-4 flex items-center justify-between border-b border-brand-800">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-brand-500 rounded-lg" />
                <div>
                  <h3 className="text-white font-semibold">Lincoln Unified School District</h3>
                  <p className="text-white/70 text-xs">District Analytics Dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-white/80 hover:text-white text-sm px-3 py-1.5 rounded border border-white/20 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Last 90 Days
                </button>
                <div className="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  DA
                </div>
              </div>
            </div>


            {/* Dashboard Content */}
            <div className="p-6 bg-gray-50">

              {/* Summary Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-brand-900">12,500</div>
                  <div className="text-sm text-gray-600">Submissions Analyzed</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-brand-900">94</div>
                  <div className="text-sm text-gray-600">Teachers Active</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-green-600">6.2 min</div>
                  <div className="text-sm text-gray-600">Avg Time Saved</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-red-600">12.0%</div>
                  <div className="text-sm text-gray-600">Plagiarism Rate</div>
                </div>
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Chart 1: AI Detection Trends */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-900">AI Detection Trends</h4>
                    <p className="text-sm text-gray-600">Plagiarism rate declining over time</p>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={plagiarismTrendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} domain={[0, 20]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '12px'
                        }}
                        formatter={(value: number) => [`${value}%`, 'Plagiarism Rate']}
                      />
                      <Line
                        type="monotone"
                        dataKey="rate"
                        stroke="#ef4444"
                        strokeWidth={2}
                        dot={{ fill: '#ef4444', r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="mt-3 px-3 py-2 bg-green-50 rounded text-sm text-green-800">
                    <strong>15.0% → 12.0%</strong> plagiarism rate reduction (20%)
                  </div>
                </div>

                {/* Chart 2: Teacher Workflow Efficiency */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-900">Teacher Time Saved</h4>
                    <p className="text-sm text-gray-600">Minutes saved per teacher per week</p>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={teacherEfficiencyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '12px'
                        }}
                        formatter={(value: number) => [`${value} min`, 'Time Saved']}
                      />
                      <Bar dataKey="minutes" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-3 px-3 py-2 bg-blue-50 rounded text-sm text-blue-800">
                    <strong>480+ hours</strong> saved district-wide this semester
                  </div>
                </div>

                {/* Chart 3: Student Writing Quality */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-900">Student Writing Quality Improvement</h4>
                    <p className="text-sm text-gray-600">Essay quality scores trending upward</p>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={essayQualityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} domain={[60, 100]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '12px'
                        }}
                        formatter={(value: number) => [`${value}%`, 'Quality Score']}
                      />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6', r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="mt-3 px-3 py-2 bg-purple-50 rounded text-sm text-purple-800">
                    <strong>21% improvement</strong> in writing quality scores
                  </div>
                </div>

                {/* Chart 4: Student Time Writing */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-900">Student Time Writing</h4>
                    <p className="text-sm text-gray-600">Average minutes spent per assignment</p>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={studentTimeWritingData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} domain={[30, 60]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '12px'
                        }}
                        formatter={(value: number) => [`${value} min`, 'Time Writing']}
                      />
                      <Line
                        type="monotone"
                        dataKey="minutes"
                        stroke="#f97316"
                        strokeWidth={2}
                        dot={{ fill: '#f97316', r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="mt-3 px-3 py-2 bg-orange-50 rounded text-sm text-orange-800">
                    <strong>33% increase</strong> in time spent writing (42 → 56 min)
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Callout Below Dashboard */}
          <div className="mt-12 bg-brand-900 rounded-2xl p-8 text-center shadow-strong">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Make adoption decisions using real evidence.
              </h3>
              <p className="text-body text-white/90">
                Track AI usage patterns, identify curriculum gaps, inform PD initiatives, and justify tool budgets with concrete data — not vendor promises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
