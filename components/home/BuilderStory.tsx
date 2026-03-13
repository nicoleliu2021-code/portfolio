"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Code2, Rocket, ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AI Resume Optimizer",
    description: "Parses job descriptions with GPT-4, extracts requirements, tailors resume content",
    tech: ["Next.js", "GPT-4 API", "TypeScript"],
    link: "https://resume-tailor-nu-six.vercel.app",
    learning: "Prompt engineering, LLM integration, AI product UX",
  },
  {
    name: "LearnWell Marketplace",
    description: "Two-sided platform with real-time messaging, payment flows, review systems",
    tech: ["Next.js", "Stripe", "Pusher", "PostgreSQL"],
    link: null,
    learning: "Marketplace dynamics, payment integration, complex state",
  },
  {
    name: "PM Portfolio",
    description: "This site—showcases product case studies with Next.js and modern deployment",
    tech: ["Next.js", "Vercel", "Tailwind"],
    link: null,
    learning: "Content strategy, information architecture, recruiter UX",
  },
];

export default function BuilderStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-gray-900 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 text-blue-600" />
            2026: The Builder Turn
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            From PM to builder
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            In 2026, I stopped writing specs and started shipping products. I built and launched 3 AI-powered web applications—not to become an engineer, but to become a <strong className="text-gray-900">10x better PM</strong> who understands constraints, feasibility, and tradeoffs from hands-on execution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="h-12 w-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                {project.link ? (
                  <ExternalLink className="h-6 w-6 text-white" />
                ) : (
                  <Code2 className="h-6 w-6 text-white" />
                )}
              </div>

              {/* Project Name */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Learning */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong className="text-gray-900">Learned:</strong> {project.learning}
                </p>
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View live product
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Rocket className="h-8 w-8 text-gray-900 mx-auto mb-4" />
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong className="text-gray-900">Why this matters:</strong> Building products myself made me a dramatically better PM. I can prototype MVPs in weekends, have high-resolution technical discussions, and understand exactly what's feasible before asking engineers to build it.
            </p>
            <Link href="/about">
              <button className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium">
                Read my builder journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
