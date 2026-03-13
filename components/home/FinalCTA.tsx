"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's build something together
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Looking for an AI-first PM who can drive strategy, run experiments, and ship products? Let's talk about how I can help your team move faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors font-semibold text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <a
              href="https://www.linkedin.com/in/xuejing-nicole-liu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors font-semibold text-lg border border-gray-700"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              Currently open to Product Manager roles at AI-first companies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
