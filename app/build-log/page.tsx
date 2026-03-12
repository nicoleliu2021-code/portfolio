import Link from "next/link";
import { buildLog } from "@/data/content";
import { Hammer, ExternalLink, Github } from "lucide-react";

export const metadata = {
  title: "Build Log | Product Manager Portfolio",
  description: "Side projects and experiments I've built to learn and explore new technologies.",
};

const statusColors = {
  "Completed": "bg-green-100 text-green-700 border-green-200",
  "In Progress": "bg-blue-100 text-blue-700 border-blue-200",
  "Experiment": "bg-purple-100 text-purple-700 border-purple-200",
};

export default function BuildLogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-orange-100">
              <Hammer className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Build Log</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Side projects and experiments I've built. I believe the best product managers
            understand technology by building, not just directing.
          </p>
        </div>
      </div>

      {/* Build Log */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {buildLog.map((entry) => (
            <div
              key={entry.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left: Content */}
                <div className="flex-1">
                  {/* Status & Date */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[entry.status as keyof typeof statusColors]}`}>
                      {entry.status}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">
                      {new Date(entry.date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {entry.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {entry.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Links */}
                {(entry.link || entry.github) && (
                  <div className="lg:w-48 flex flex-col gap-3">
                    {entry.link && (
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </a>
                    )}
                    {entry.github && (
                      <a
                        href={entry.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Builder Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Why I Build</h2>
          <p className="text-gray-100 leading-relaxed text-lg mb-6">
            The best product managers deeply understand how products are built. Building
            side projects helps me stay technical, experiment with new technologies, and
            better collaborate with engineering teams.
          </p>
          <p className="text-gray-100 leading-relaxed text-lg">
            Each project teaches me something new - whether it's AI integration, marketplace
            dynamics, or just shipping fast. The goal isn't perfection; it's learning and
            demonstrating a builder mindset.
          </p>
        </div>
      </div>
    </div>
  );
}
