"use client";

import { ProductTeardown } from "@/types";
import { ArrowLeft, Target, ThumbsUp, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

interface TeardownDetailProps {
  teardown: ProductTeardown;
}

const categoryColors = {
  Marketplace: "bg-purple-100 text-purple-700",
  Fintech: "bg-blue-100 text-blue-700",
  SaaS: "bg-green-100 text-green-700",
  AI: "bg-pink-100 text-pink-700",
  Consumer: "bg-orange-100 text-orange-700",
};

const effortColors = {
  Low: "text-green-600",
  Medium: "text-yellow-600",
  High: "text-red-600",
};

const impactColors = {
  Low: "text-gray-600",
  Medium: "text-blue-600",
  High: "text-purple-600",
};

export default function TeardownDetail({ teardown }: TeardownDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/teardowns"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Teardowns
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[teardown.category]}`}>
              {teardown.category}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">{new Date(teardown.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {teardown.title}
          </h1>

          <p className="text-xl text-gray-600">
            {teardown.product}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {teardown.overview}
          </p>
        </section>

        {/* Target User */}
        <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Target className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Target User</h3>
              <p className="text-gray-700 leading-relaxed">{teardown.targetUser}</p>
            </div>
          </div>
        </section>

        {/* What Works Well */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-green-100">
              <ThumbsUp className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What Works Well</h2>
          </div>
          <div className="space-y-4">
            {teardown.strengths.map((strength, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{strength}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Friction Points */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Friction Points</h2>
          </div>
          <div className="space-y-4">
            {teardown.frictionPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Opportunities */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-purple-100">
              <Lightbulb className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Opportunity Areas</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {teardown.opportunities.map((opportunity, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed">{opportunity}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Experiments */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-100">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Recommended Experiments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teardown.experiments.map((experiment, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {experiment.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {experiment.description}
                </p>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">Hypothesis</p>
                  <p className="text-sm text-gray-600">{experiment.hypothesis}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500">Effort: </span>
                    <span className={`text-xs font-bold ${effortColors[experiment.effort]}`}>
                      {experiment.effort}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Impact: </span>
                    <span className={`text-xs font-bold ${impactColors[experiment.impact]}`}>
                      {experiment.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business Impact */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Business Impact Potential</h2>
          <p className="text-gray-100 leading-relaxed text-lg">
            {teardown.businessImpact}
          </p>
        </section>
      </div>
    </div>
  );
}
