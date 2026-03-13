import { Target, Zap, Code2, TrendingUp, Sparkles, Brain } from "lucide-react";
import { workExperience } from "@/data/content";
import Link from "next/link";

export const metadata = {
  title: "How I Work | Product Manager Portfolio",
  description: "My approach to building AI-first products, running experiments, and shipping fast.",
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
              My Approach
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              I believe PMs should build, experiment, and ship—not just specify
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The best product managers don't hide behind Jira tickets. They prototype MVPs in weekends,
              run A/B tests with proper statistics, and understand their stack well enough to debug alongside engineers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                  I don't bolt AI onto existing workflows. I rethink the problem from first principles:
                  What's possible when users can describe intent in natural language? When systems
                  can reason over unstructured data? When interfaces adapt to individual users?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I've shipped AI products that do more than complete text—they parse complex inputs,
                  make decisions under uncertainty, and learn from user feedback loops.
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
                  I've run 30+ A/B tests across Rocket Mortgage and Upstart. Not "let's try this" tests—
                  properly powered experiments with pre-registered hypotheses, minimum detectable effects,
                  and statistical significance calculations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  $4.2M in revenue came from this discipline: testing personalization strategies,
                  funnel optimizations, and messaging variants. Data decided, not HiPPOs.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical depth as leverage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I write Next.js, debug API responses, and understand ML model limitations. Not because
                  I want to be an engineer—because it makes me a 10x better PM.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I can prototype an MVP in a weekend, have high-resolution technical discussions,
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
                  watch how users actually behave, and iterate based on cohort retention curves—not roadmap theater.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My AI Resume Builder went from idea to live product in 4 weeks. The Tutor Marketplace
                  launched with 10 features, not 100—and real users taught me which 5 actually mattered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I look for */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What I look for in roles</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-gray-900 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>AI-first products:</strong> Not AI wrappers—products rethinking categories with LLMs as infrastructure
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-gray-900 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Experimentation culture:</strong> Teams that ship, measure, and iterate—not build-and-pray
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-gray-900 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Builder-friendly:</strong> Where PMs can prototype, engineers respect product thinking, and cross-functional collaboration is real
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-gray-900 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Measurable impact:</strong> Where product decisions tie directly to revenue, retention, or market share
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Experience (condensed) */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career highlights</h2>
          <div className="space-y-6">
            {workExperience.slice(0, 3).map((job, idx) => (
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
                <p className="text-gray-700 text-sm">{job.description}</p>
              </div>
            ))}
          </div>
          <Link href="/resume" className="inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors mt-4">
            View full resume →
          </Link>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Let's build something</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              If you're building AI-first products and value PMs who ship—let's talk.
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
