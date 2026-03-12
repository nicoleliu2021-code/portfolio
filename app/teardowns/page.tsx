"use client";

import { useState } from "react";
import Link from "next/link";
import { teardowns } from "@/data/teardowns";
import { Eye, ArrowRight } from "lucide-react";

const categories = ["All", "Marketplace", "Fintech", "SaaS", "AI", "Consumer"];

const categoryColors = {
  Marketplace: "bg-purple-100 text-purple-700",
  Fintech: "bg-blue-100 text-blue-700",
  SaaS: "bg-green-100 text-green-700",
  AI: "bg-pink-100 text-pink-700",
  Consumer: "bg-orange-100 text-orange-700",
};

export default function TeardownsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTeardowns = selectedCategory === "All"
    ? teardowns
    : teardowns.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-green-100">
              <Eye className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Product Teardowns</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Structured analyses of digital products showing strategic thinking, UX evaluation,
            and recommended experiments. See how I break down user journeys and identify opportunities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Teardowns Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredTeardowns.map((teardown) => (
            <Link key={teardown.id} href={`/teardowns/${teardown.id}`}>
              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Content */}
                  <div className="flex-1">
                    {/* Category & Date */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[teardown.category as keyof typeof categoryColors]}`}>
                        {teardown.category}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">
                        {new Date(teardown.date).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {teardown.title}
                    </h2>

                    {/* Product */}
                    <p className="text-lg text-gray-600 mb-4 font-medium">
                      {teardown.product}
                    </p>

                    {/* Overview */}
                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {teardown.overview}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                      Read full teardown
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Right: Stats */}
                  <div className="lg:w-72 flex-shrink-0">
                    <div className="bg-gray-50 rounded-xl p-6 h-full">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                        Analysis Scope
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {teardown.strengths.length}
                          </div>
                          <div className="text-sm text-gray-600">Strengths Identified</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {teardown.frictionPoints.length}
                          </div>
                          <div className="text-sm text-gray-600">Friction Points</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {teardown.experiments.length}
                          </div>
                          <div className="text-sm text-gray-600">Experiment Ideas</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredTeardowns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No teardowns found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
