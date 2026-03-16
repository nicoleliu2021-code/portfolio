"use client";

import { motion } from "framer-motion";
import { Target, Code2, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "Product Strategy & Growth",
    description: "Leading CRO and personalization at Rocket Mortgage, driving $4.2M in revenue through 30+ experiments. Built intent-based segmentation that improved conversion by 18%. Previously scaled Upstart's acquisition, reducing CAC 28% while growing volume 42%.",
    proof: [
      "18.2% visit→lead conversion (Rocket Mortgage)",
      "28% CAC reduction (Upstart)",
      "30+ properly powered A/B tests",
    ],
  },
  {
    icon: Code2,
    title: "AI-First Product Builder",
    description: "In 2026, I stopped writing specs and started shipping. Built 3 production web apps: AI resume optimizer (GPT-4 integration), tutor marketplace (Stripe, real-time messaging), and this portfolio. Modern stack: Next.js, TypeScript, Vercel, Claude Code.",
    proof: [
      "3 apps shipped in 2026",
      "AI Resume Tailor (live product)",
      "Full-stack marketplace with payments",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Technical Foundation",
    description: "Designed event schemas, wrote SQL cohort analyses, built dashboards in Looker & Amplitude. Volunteer analytics work with 2 startups in 2023 deepened my technical foundation—from basic queries to complex funnel analysis and experimentation frameworks.",
    proof: [
      "SQL proficiency (50+ queries written)",
      "Event tracking & dashboard design",
      "Experimentation methodology",
    ],
  },
];

export default function WhatIDo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What I bring to the table
          </h2>
          <p className="text-xl text-gray-600">
            I'm not just a strategist or just a builder—I bridge product thinking, technical execution, and data-driven decision-making.
          </p>
        </div>

        {/* Capabilities */}
        <div className="space-y-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-xl bg-gray-900 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {capability.description}
                    </p>

                    {/* Proof Points */}
                    <div className="flex flex-wrap gap-2">
                      {capability.proof.map((point) => (
                        <span
                          key={point}
                          className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
