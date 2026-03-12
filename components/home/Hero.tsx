"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6"
          >
            <span className="mr-2">🚀</span> Product Manager × Builder × Strategist
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Product Manager
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Who Builds and Ships
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            I design and launch data-driven digital products across fintech, growth, and AI.
            I run experiments, optimize funnels, and build real products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/work">
              <Button variant="primary" size="lg">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="secondary" size="lg">
                View Projects
              </Button>
            </Link>
            <Link href="/resume">
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            <div>
              <div className="text-3xl font-bold text-gray-900">4+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">$4.2M+</div>
              <div className="text-sm text-gray-600 mt-1">Revenue Impact</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">30+</div>
              <div className="text-sm text-gray-600 mt-1">Experiments Run</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600 mt-1">Products Built</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
          <div className="aspect-square w-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
        </div>
      </div>
    </section>
  );
}
