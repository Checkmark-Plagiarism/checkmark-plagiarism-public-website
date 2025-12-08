"use client";

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingDown, Clock, TrendingUp, PenTool } from "lucide-react";

export default function CTODataInfographic() {
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
    { month: 'Nov', minutes: 50 },
    { month: 'Dec', minutes: 48 },
    { month: 'Jan', minutes: 46 },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Curved top decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-white" style={{
        clipPath: 'ellipse(100% 100% at 50% 0%)'
      }} />

      <div className="container mx-auto px-12 md:px-20 lg:px-32 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            Comprehensive Plagiarism Detection & Autograding Solution
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real insights to inform policy decisions, measure program effectiveness, and optimize teacher workflows
          </p>
        </div>

        {/* Main Visual Section - Infographic style with use cases */}
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Use Case 1: Track AI Usage - Text Left, Chart Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Use Case Description */}
            <div>
              <div className="text-sm font-bold text-red-600 uppercase tracking-wide mb-3">Use Case #1</div>
              <h3 className="text-3xl font-bold text-brand-900 mb-4">Track AI Usage to Make Informed AI Policies</h3>
              <p className="text-lg text-gray-600">Monitor plagiarism trends district-wide to guide policy decisions and measure the impact of academic integrity initiatives.</p>
            </div>

            {/* Right: Example Chart */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-red-100">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-brand-900">Example</h4>
                  <p className="text-sm text-gray-600">AI Detection Trends - Plagiarism Rate Over Time</p>
                </div>

                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={plagiarismTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fee2e2" />
                    <XAxis dataKey="month" stroke="#991b1b" style={{ fontSize: '14px', fontWeight: 600 }} />
                    <YAxis stroke="#991b1b" style={{ fontSize: '14px', fontWeight: 600 }} domain={[0, 20]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '2px solid #fecaca',
                        borderRadius: '12px',
                        padding: '12px',
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                      formatter={(value: number) => [`${value}%`, 'Plagiarism Rate']}
                    />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="#dc2626"
                      strokeWidth={4}
                      dot={{ fill: '#dc2626', r: 6, strokeWidth: 2, stroke: '#fff' }}
                    />
                  </LineChart>
                </ResponsiveContainer>

                <div className="mt-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-4 border-2 border-red-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-red-700">20% Reduction</div>
                      <div className="text-sm text-gray-700 font-medium">in plagiarism over 6 months</div>
                    </div>
                    <TrendingDown className="w-12 h-12 text-red-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case 2: Measure Teacher Efficiency - Chart Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Example Chart */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-purple-100">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-brand-900">Example</h4>
                  <p className="text-sm text-gray-600">Teacher Time Saved - Minutes Per Week</p>
                </div>

                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={teacherEfficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ede9fe" />
                    <XAxis dataKey="name" stroke="#581c87" style={{ fontSize: '14px', fontWeight: 600 }} />
                    <YAxis stroke="#581c87" style={{ fontSize: '14px', fontWeight: 600 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '2px solid #ddd6fe',
                        borderRadius: '12px',
                        padding: '12px',
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                      formatter={(value: number) => [`${value} min`, 'Time Saved']}
                    />
                    <Bar dataKey="minutes" fill="#8b5cf6" radius={[12, 12, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>

                <div className="mt-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-4 border-2 border-purple-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-purple-700">480+ Hours Saved</div>
                      <div className="text-sm text-gray-700 font-medium">across district this semester</div>
                    </div>
                    <Clock className="w-12 h-12 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Use Case Description */}
            <div>
              <div className="text-sm font-bold text-purple-600 uppercase tracking-wide mb-3">Use Case #2</div>
              <h3 className="text-3xl font-bold text-brand-900 mb-4">Measure Teacher Efficiency Gains</h3>
              <p className="text-lg text-gray-600">Quantify time savings to justify tool investments and demonstrate ROI to stakeholders.</p>
            </div>
          </div>

          {/* Use Case 3: Verify AI Writing Feedback - Text Left, Chart Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Use Case Description */}
            <div>
              <div className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-3">Use Case #3</div>
              <h3 className="text-3xl font-bold text-brand-900 mb-4">Verify If AI Writing Feedback Is Working</h3>
              <p className="text-lg text-gray-600">Track student writing improvement over time to measure the effectiveness of AI-powered feedback tools.</p>
            </div>

            {/* Right: Example Chart */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-100">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-brand-900">Example</h4>
                  <p className="text-sm text-gray-600">Student Writing Quality - Essay Scores Over Time</p>
                </div>

                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={essayQualityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#dbeafe" />
                    <XAxis dataKey="month" stroke="#1e3a8a" style={{ fontSize: '14px', fontWeight: 600 }} />
                    <YAxis stroke="#1e3a8a" style={{ fontSize: '14px', fontWeight: 600 }} domain={[60, 100]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '2px solid #bfdbfe',
                        borderRadius: '12px',
                        padding: '12px',
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                      formatter={(value: number) => [`${value}%`, 'Quality Score']}
                    />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#2563eb"
                      strokeWidth={4}
                      dot={{ fill: '#2563eb', r: 6, strokeWidth: 2, stroke: '#fff' }}
                    />
                  </LineChart>
                </ResponsiveContainer>

                <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border-2 border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-blue-700">21% Improvement</div>
                      <div className="text-sm text-gray-700 font-medium">in writing quality scores</div>
                    </div>
                    <TrendingUp className="w-12 h-12 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case 4: Monitor Student Engagement - Chart Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Example Chart */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-orange-100">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-brand-900">Example</h4>
                  <p className="text-sm text-gray-600">Student Time Writing - Average Minutes Per Assignment</p>
                </div>

                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={studentTimeWritingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fed7aa" />
                    <XAxis dataKey="month" stroke="#9a3412" style={{ fontSize: '14px', fontWeight: 600 }} />
                    <YAxis stroke="#9a3412" style={{ fontSize: '14px', fontWeight: 600 }} domain={[30, 60]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '2px solid #fed7aa',
                        borderRadius: '12px',
                        padding: '12px',
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                      formatter={(value: number) => [`${value} min`, 'Time Writing']}
                    />
                    <Line
                      type="monotone"
                      dataKey="minutes"
                      stroke="#ea580c"
                      strokeWidth={4}
                      dot={{ fill: '#ea580c', r: 6, strokeWidth: 2, stroke: '#fff' }}
                    />
                  </LineChart>
                </ResponsiveContainer>

                <div className="mt-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-4 border-2 border-orange-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-orange-700">46 min Average</div>
                      <div className="text-sm text-gray-700 font-medium">stable engagement over time</div>
                    </div>
                    <PenTool className="w-12 h-12 text-orange-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Use Case Description */}
            <div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-3">Use Case #4</div>
              <h3 className="text-3xl font-bold text-brand-900 mb-4">Monitor Student Engagement Patterns</h3>
              <p className="text-lg text-gray-600">Track writing time to identify engagement trends and ensure students are spending meaningful time on assignments.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{
        clipPath: 'ellipse(100% 100% at 50% 100%)'
      }} />
    </section>
  );
}
