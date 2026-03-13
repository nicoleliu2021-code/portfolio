"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-gray-900 text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4 text-blue-600" />
            Product Manager • Builder • Data-Driven
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]"
          >
            AI-first PM who builds products, not just specs
          </motion.h1>

          {/* Value Prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed"
          >
            I drive product strategy, run experiments, and ship code. Former PM at <span className="text-gray-900 font-semibold">Rocket Mortgage</span> and <span className="text-gray-900 font-semibold">Upstart</span>. In 2026, I became a builder—launching 3 AI-powered web apps and mastering the full product development cycle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/work">
              <Button variant="primary" size="lg">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" size="lg">
                My Builder Journey
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-40">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 blur-3xl" />
      </div>
    </section>
  );
}
