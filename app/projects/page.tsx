import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { Code, ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Builder Projects | Product Manager Portfolio",
  description: "Web applications and products I've built from scratch to demonstrate technical depth and builder mindset.",
};

export default function ProjectsPage() {
  // Filter for builder projects only
  const builderProjects = caseStudies.filter((cs) => cs.category === "Builder");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-indigo-100">
              <Code className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Builder Projects</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Products I've built from scratch. I believe the best product managers understand
            technology by building, not just directing. Each project demonstrates product
            thinking, technical execution, and learning.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {builderProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code className="h-16 w-16 text-white opacity-50" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">{project.duration}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h2>

                {/* Company */}
                <p className="text-gray-600 mb-4">{project.company}</p>

                {/* Problem */}
                <p className="text-gray-700 mb-6 line-clamp-3">
                  {project.problem}
                </p>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <Link href={`/work/${project.id}`}>
                    <div className="flex items-center text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                      Read case study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Builder Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <Code className="h-12 w-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Why I Build</h2>
            <p className="text-lg text-indigo-100 mb-6">
              The best product managers deeply understand how products are built. Building
              side projects helps me stay technical, experiment with new technologies, and
              better collaborate with engineering teams.
            </p>
            <p className="text-lg text-indigo-100">
              Each project teaches me something new—whether it's AI integration, marketplace
              dynamics, or just shipping fast. The goal isn't perfection; it's learning and
              demonstrating a builder mindset.
            </p>
          </div>
        </div>

        {/* See All Work */}
        <div className="mt-12 text-center">
          <Link href="/work">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
