"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Target, Repeat } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "AI isn't a feature, it's a platform shift",
    description:
      "Every product category will be rebuilt with AI-first UX. I'm not building chatbots—I'm rethinking workflows from first principles with LLMs as primitive infrastructure. I've shipped 3 AI products to prove it.",
  },
  {
    icon: Zap,
    title: "The best PMs build, not just spec",
    description:
      "In 2026, I stopped writing specs and started shipping products. I've launched 3 web apps because building makes you a 10x better PM—you understand constraints, feasibility, and tradeoffs in ways spec writers never will.",
  },
  {
    icon: Target,
    title: "Experimentation over opinions",
    description:
      "I've run 30+ properly powered A/B tests generating $4.2M in revenue. Perfect specs are fiction—I ship MVPs, instrument everything, and let data decide what to build next.",
  },
  {
    icon: Repeat,
    title: "Growth compounds, features don't",
    description:
      "A 2% weekly improvement beats a 10-feature roadmap. I obsess over activation funnels, retention cohorts, and finding the one metric that actually predicts LTV.",
  },
];

export default function HowIThink() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How I think about product
          </h2>
          <p className="text-xl text-gray-600">
            Strong opinions, loosely held. Shaped by shipping real products and learning from what actually works.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gray-900 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
