"use client";

import { motion } from "framer-motion";
import { Target, Code2, BarChart3, Rocket, TrendingUp, Zap } from "lucide-react";

const credentials = [
  { icon: TrendingUp, label: "$4.2M Revenue Impact", sublabel: "Through A/B testing" },
  { icon: Code2, label: "3 Products Shipped", sublabel: "Full-stack AI apps" },
  { icon: BarChart3, label: "SQL & Analytics", sublabel: "Cohort, funnel, retention" },
  { icon: Target, label: "30+ Experiments", sublabel: "Properly powered tests" },
  { icon: Rocket, label: "PM at Scale", sublabel: "Rocket Mortgage, Upstart" },
  { icon: Zap, label: "AI-First Builder", sublabel: "GPT-4, Next.js, Vercel" },
];

export default function CredibilityStrip() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-gray-900 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-900 mb-1">{item.label}</div>
                <div className="text-xs text-gray-600">{item.sublabel}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
