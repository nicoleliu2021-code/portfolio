"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BarChart3, Database, TrendingUp, ArrowRight } from "lucide-react";

const skills = [
  {
    icon: Database,
    title: "SQL & Data Analysis",
    description: "Wrote 50+ SQL queries for cohort analysis, funnel tracking, and retention curves. Moved from basic queries to complex joins, window functions, and user segmentation through hands-on practice and real implementations.",
    tools: ["PostgreSQL", "Mode Analytics", "Looker"],
  },
  {
    icon: BarChart3,
    title: "Analytics Infrastructure",
    description: "Designed event tracking schemas for B2B SaaS onboarding (15 events) and mobile app engagement (20+ events). Built dashboard mockups in Looker and Amplitude showing activation funnels, retention cohorts, and engagement scoring.",
    tools: ["Looker", "Amplitude", "Tableau"],
  },
  {
    icon: TrendingUp,
    title: "Experimentation Frameworks",
    description: "Created A/B testing playbooks, experiment brief templates, and sample size calculators. Documented statistical significance approaches and trained non-technical teams on hypothesis testing and power analysis.",
    tools: ["Experiment Design", "Stats", "Power Analysis"],
  },
];

const projects = [
  {
    title: "B2B SaaS Analytics Foundation",
    company: "Volunteer • Seed-stage startup",
    description: "Built analytics infrastructure from scratch—event schema, SQL analyses, dashboard mockups, experimentation framework",
    link: "/work/b2b-saas-analytics",
  },
  {
    title: "Mobile App Engagement Study",
    company: "Volunteer • Consumer app",
    description: "Set up Amplitude taxonomy, built retention dashboards, created mobile experimentation guidelines",
    link: "/work/mobile-app-analytics",
  },
];

export default function AnalyticsDepth() {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Analytics & technical depth
          </h2>
          <p className="text-xl text-gray-600">
            In 2023, I intentionally leveled up my analytics capabilities through volunteer work with early-stage startups. This hands-on experience gave me the technical foundation to be a credible, data-driven PM.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <div className="h-12 w-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 rounded bg-white text-gray-700 text-xs font-medium border border-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Projects */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Analytics Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 mb-1">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{project.company}</p>
                <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                <Link href={project.link}>
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                    View case study
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            These unpaid projects gave me hands-on experience that courses never could—real stakeholders, real constraints, real learning.
          </p>
        </div>
      </div>
    </section>
  );
}
