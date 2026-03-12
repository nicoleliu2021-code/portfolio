import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { TrendingUp, Rocket, Lightbulb, Code, ArrowRight } from "lucide-react";

const iconMap = {
  Product: TrendingUp,
  Growth: Rocket,
  Strategy: Lightbulb,
  Builder: Code,
};

export const metadata = {
  title: "Case Studies | Product Manager Portfolio",
  description: "Real product work across fintech, growth, and builder projects",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              Real product work showcasing strategy, execution, and measurable impact
              across fintech, growth, and builder projects.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8">
          {caseStudies.map((project) => {
            const Icon = iconMap[project.category];
            return (
              <Link key={project.id} href={`/work/${project.id}`}>
                <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left: Info */}
                    <div className="flex-1">
                      {/* Category Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-900 transition-colors">
                          <Icon className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          {project.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-500">{project.duration}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h2>

                      {/* Company & Role */}
                      <p className="text-lg text-gray-600 mb-4">
                        {project.company} • {project.role}
                      </p>

                      {/* Problem */}
                      <p className="text-gray-700 mb-6 line-clamp-3">
                        {project.problem}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Arrow */}
                      <div className="flex items-center text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                        Read full case study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Right: Metrics */}
                    <div className="md:w-80 flex-shrink-0">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                          Key Results
                        </h3>
                        <div className="space-y-4">
                          {project.metrics.slice(0, 3).map((metric, idx) => (
                            <div key={idx}>
                              <div className="text-2xl font-bold text-gray-900">
                                {metric.value}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                {metric.label}
                              </div>
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
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
