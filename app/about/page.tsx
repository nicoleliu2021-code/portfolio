import { Target, Zap, Code2, TrendingUp, Sparkles, Brain, Rocket } from "lucide-react";
import { workExperience } from "@/data/content";
import Link from "next/link";

export const metadata = {
  title: "My Builder Journey | Product Manager Portfolio",
  description: "From PM and growth to hands-on builder. My approach to AI-first products, experimentation, and shipping MVPs.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-gray-900 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 text-blue-600" />
              My Journey
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              From PM to Builder: Why I started shipping products myself
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              After years of defining roadmaps and running experiments at Rocket Mortgage and Upstart,
              I realized the best PMs don't just specify—they build. In 2026, I became a builder.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* The Builder Turn */}
        <section className="mb-20">
          <div className="flex gap-6 mb-12">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2026: The builder turn</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Most PMs talk about being technical. I decided to actually become one. In 2026, I stopped
                  writing specs and started writing code.
                </p>
                <p>
                  I launched <strong>3 production web applications</strong>: an AI resume optimizer,
                  a tutor marketplace MVP, and this portfolio platform. Each one taught me something
                  different about product discovery, technical tradeoffs, and what it really takes to ship.
                </p>
                <p>
                  I didn't do this to become an engineer. I did it to become a <strong>10x better PM</strong>—
                  someone who can prototype MVPs in weekends, have high-resolution technical discussions,
                  and understand exactly what's feasible before asking engineers to build it.
                </p>
              </div>
            </div>
          </div>

          {/* What I Built */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6">
            <h3 className="text-xl font-bold text-gray-900">What I built and why</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">AI Resume Optimizer</p>
                  <p className="text-sm text-gray-600">
                    Parses job descriptions using GPT-4, extracts requirements, and tailors resume content.
                    Taught me prompt engineering, LLM integration, and AI product UX patterns.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Tutor Marketplace MVP</p>
                  <p className="text-sm text-gray-600">
                    Two-sided platform with real-time messaging, payment flows (Stripe), and review systems.
                    Taught me marketplace dynamics, cold-start problems, and complex state management.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">PM Portfolio Platform</p>
                  <p className="text-sm text-gray-600">
                    This site. Built with Next.js, deployed on Vercel, showcases product case studies.
                    Taught me content strategy, information architecture, and recruiter-focused UX.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-300">
              <p className="text-sm text-gray-600">
                <strong>Stack:</strong> Next.js, React, TypeScript, Tailwind, Vercel, GPT-4 API, Stripe, Claude Code
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How I work</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-gray-900 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-first product thinking</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I don't bolt AI onto existing workflows. I rethink problems from first principles:
                  What's possible when users describe intent in natural language? When systems reason
                  over unstructured data? When interfaces adapt to individuals?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I've shipped AI products that parse complex inputs, make decisions under uncertainty,
                  and improve through feedback loops. Not chatbots—actual product experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-gray-900 flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experimentation over opinions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I've run 30+ A/B tests across Rocket Mortgage and Upstart with proper power analysis,
                  pre-registered hypotheses, and statistical significance calculations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  $4.2M in revenue came from this discipline: testing personalization strategies,
                  funnel optimizations, and messaging variants. Data decides, not HiPPOs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-gray-900 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Building as a PM superpower</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I write Next.js, integrate APIs, and deploy to production. Not because I want to
                  be an engineer—because it makes me a dramatically better PM.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I can prototype MVPs in weekends, have technical discussions without handwaving,
                  and spot feasibility issues before they become 3-sprint rabbit holes.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-gray-900 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ship to learn, iterate to win</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I don't spend 6 months perfecting specs. I ship MVPs in weeks, instrument everything,
                  and iterate based on actual user behavior.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My AI Resume Builder went live in 4 weeks. The marketplace launched with 10 features,
                  not 100—real users taught me which 5 actually mattered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Foundation */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical foundation</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              In 2023, I intentionally leveled up my analytics and technical skills to move from
              growth marketing into product management. I didn't take courses—I did the work.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Analytics mastery</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>SQL proficiency through 50+ practice queries and real implementations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Hands-on analytics work with 2 startups (volunteer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Self-taught Looker, Tableau, Mode, Amplitude</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Frameworks built</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Experiment methodology templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Metric definition standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Dashboard design patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Progression */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career progression</h2>
          <div className="space-y-6">
            {workExperience.slice(0, 4).map((job, idx) => (
              <div key={idx} className="border-l-2 border-gray-200 pl-6 pb-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {job.duration}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.achievements.slice(0, 3).map((achievement, aidx) => (
                    <span key={aidx} className="text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                      {achievement.split(' ').slice(0, 8).join(' ')}...
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/resume" className="inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors mt-4">
            View full resume →
          </Link>
        </section>

        {/* What I look for */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What I look for in roles</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-gray-900 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>AI-first products:</strong> Companies rethinking categories with LLMs as infrastructure, not chatbot wrappers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-gray-900 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Experimentation culture:</strong> Teams that ship, measure, iterate—not build-and-pray
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-gray-900 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Builder-friendly environment:</strong> Where PMs can prototype, engineers respect product thinking, and collaboration is real
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-gray-900 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Measurable impact:</strong> Product decisions tied to revenue, retention, or market share—not feature factories
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Let's build something</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              If you're building AI-first products and value PMs who actually ship—let's talk.
            </p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get in touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
