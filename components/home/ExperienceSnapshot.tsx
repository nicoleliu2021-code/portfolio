"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "Rocket Mortgage",
    role: "Digital Product Manager",
    period: "March 2024 - Present",
    highlights: ["$4.2M revenue impact", "18% conversion increase", "12+ A/B tests"],
  },
  {
    company: "Upstart",
    role: "Growth Marketing Manager",
    period: "2021-2023",
    highlights: ["28% CAC reduction", "42% volume growth", "$8M budget managed"],
  },
  {
    company: "Independent",
    role: "Builder / Founder",
    period: "2026",
    highlights: ["3 products shipped", "AI + marketplace apps", "Full-stack execution"],
  },
  {
    company: "Skill Development",
    role: "Analytics & Foundations",
    period: "2023",
    highlights: ["SQL mastery", "2 volunteer projects", "Analytics frameworks"],
  },
];

export default function ExperienceSnapshot() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Career progression
          </h2>
          <p className="text-xl text-gray-600">
            From growth marketing to product management to hands-on builder—each step built on the last.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-300 hidden md:block" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 items-start pt-1">
                    <div className="h-12 w-12 rounded-full bg-gray-900 flex items-center justify-center relative z-10">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/resume">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium">
              View full resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
