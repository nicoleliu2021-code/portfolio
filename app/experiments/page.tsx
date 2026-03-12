"use client";

import { useState } from "react";
import { experiments } from "@/data/experiments";
import ExperimentCard from "@/components/experiment-lab/ExperimentCard";
import ExperimentSimulator from "@/components/experiment-lab/ExperimentSimulator";
import { FlaskConical, Filter } from "lucide-react";

const categories = ["All", "Growth", "CRO", "Acquisition", "Personalization", "Product Discovery"];

export default function ExperimentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredExperiments = selectedCategory === "All"
    ? experiments
    : experiments.filter((exp) => exp.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-blue-100">
              <FlaskConical className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Experiment Lab</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Real experiments I've run, showing hypothesis, test design, results, and decisions.
            Plus an interactive simulator to explore experiment thinking.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Simulator Section */}
        <div className="mb-16">
          <ExperimentSimulator />
        </div>

        {/* Experiments Dashboard */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Experiment Dashboard
            </h2>
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="h-5 w-5" />
              <span className="text-sm font-medium">
                {filteredExperiments.length} experiments
              </span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
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

          {/* Experiments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredExperiments.map((experiment) => (
              <ExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </div>

          {filteredExperiments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No experiments found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
