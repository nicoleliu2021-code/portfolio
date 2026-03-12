"use client";

import { useState } from "react";
import { CaseStudy } from "@/types";
import { ArrowLeft, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

const tabs = [
  { id: "problem", label: "Problem & Opportunity" },
  { id: "strategy", label: "Strategy" },
  { id: "execution", label: "Execution" },
  { id: "results", label: "Results & Learnings" },
];

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const [activeTab, setActiveTab] = useState("problem");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/work"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Work
          </Link>

          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                  {caseStudy.category}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{caseStudy.duration}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {caseStudy.title}
              </h1>

              <p className="text-xl text-gray-600">
                {caseStudy.company} • {caseStudy.role}
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-gray-600" />
                  <div className="text-xs text-gray-600 uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                {metric.change && (
                  <div className="text-sm text-green-600 font-medium mt-1">
                    {metric.change}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors",
                  activeTab === tab.id
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "problem" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {caseStudy.problem}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Opportunity</h2>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {caseStudy.opportunity}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hypothesis</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">
                    {caseStudy.hypothesis}
                  </p>
                </div>
              </section>
            </div>
          )}

          {activeTab === "strategy" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Strategy</h2>
                <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
                  {caseStudy.strategy}
                </div>
              </section>
            </div>
          )}

          {activeTab === "execution" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Execution</h2>
                <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
                  {caseStudy.execution}
                </div>
              </section>
            </div>
          )}

          {activeTab === "results" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                      {metric.change && (
                        <div className="text-sm text-green-600 font-medium">
                          {metric.change}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Learnings</h2>
                <ul className="space-y-4">
                  {caseStudy.learnings.map((learning, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-sm flex items-center justify-center font-medium">
                        {idx + 1}
                      </span>
                      <p className="text-gray-700 leading-relaxed">{learning}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
