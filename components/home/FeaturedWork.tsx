"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Rocket, Lightbulb, Code, ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

const iconMap = {
  Product: TrendingUp,
  Growth: Rocket,
  Strategy: Lightbulb,
  Builder: Code,
};

export default function FeaturedWork() {
  // Filter out analytics foundation projects from featured section
  const featuredProjects = caseStudies
    .filter(cs => !['b2b-saas-analytics', 'mobile-app-analytics'].includes(cs.id))
    .slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Selected work
          </h2>
          <p className="text-xl text-gray-600">
            Product launches, growth experiments, and side projects. Each with measurable business impact.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
            const Icon = iconMap[project.category];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/work/${project.id}`}>
                  <div className="group relative h-full border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300 bg-white">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-900 transition-colors">
                        <Icon className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{project.category}</span>
                    </div>

                    {/* Company & Role */}
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {project.company} • {project.role}
                      </p>
                    </div>

                    {/* Problem */}
                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {project.problem}
                    </p>

                    {/* Metrics */}
                    {project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {project.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-3">
                            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                            <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
                            {metric.change && (
                              <div className="text-xs text-green-600 font-medium mt-1">
                                {metric.change}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link indicator */}
                    {project.link && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <ExternalLink className="h-3 w-3" />
                        <span>Live project</span>
                      </div>
                    )}

                    {/* Arrow */}
                    <div className="flex items-center text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                      Read case study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link href="/work">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
