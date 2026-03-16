"use client";

import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { workExperience } from "@/data/content";
import Button from "@/components/ui/Button";

export default function ResumePage() {
  const handleDownload = () => {
    // In a real implementation, this would trigger a PDF download
    alert("In a production version, this would download a PDF resume. For now, this is a demo.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Xuejing Liu
              </h1>
              <p className="text-xl text-gray-600">
                Product Manager | Growth | Builder
              </p>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                <span>linkedin.com/in/xuejingliu</span>
                <span>•</span>
                <span>github.com/nicoleliu2021-code</span>
              </div>
            </div>
            <Button onClick={handleDownload} variant="primary">
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Product Manager with 4+ years of experience driving measurable business impact
            across fintech, growth, and AI. Proven track record of launching data-driven
            products, running rigorous experiments, and building from scratch. Generated
            $4.2M+ in annual revenue through strategic product initiatives. Strong technical
            foundation with hands-on building experience (Next.js, React, AI APIs).
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-100">
              <Briefcase className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, idx) => (
              <div key={idx} className="border-l-2 border-gray-200 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                    <p className="text-lg text-gray-600">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {job.duration}
                  </span>
                </div>

                <p className="text-gray-700 mb-3 text-sm">{job.description}</p>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple-100">
              <GraduationCap className="h-5 w-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>

          <div className="border-l-2 border-gray-200 pl-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">MBA</h3>
              <p className="text-gray-600">University of Michigan</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">BS</h3>
              <p className="text-gray-600">Yanshan University</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-green-100">
              <Award className="h-5 w-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Product & Strategy</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Product Strategy",
                  "Roadmap Planning",
                  "User Research",
                  "A/B Testing",
                  "Analytics",
                  "PRDs",
                  "Agile/Scrum",
                  "Stakeholder Management",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Growth & Analytics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Growth Strategy",
                  "Acquisition",
                  "Conversion",
                  "Retention",
                  "Funnel Optimization",
                  "Performance Marketing",
                  "SQL",
                  "Data Analysis",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "APIs",
                  "AI/LLMs",
                  "System Design",
                  "Git",
                  "Technical PM",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Jira",
                  "Figma",
                  "Google Analytics",
                  "Amplitude",
                  "Mixpanel",
                  "Optimizely",
                  "Notion",
                  "Slack",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Download Full Resume</h2>
          <p className="text-gray-200 mb-6">
            Get a PDF version of my complete resume with additional details and references.
          </p>
          <Button onClick={handleDownload} variant="secondary">
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
