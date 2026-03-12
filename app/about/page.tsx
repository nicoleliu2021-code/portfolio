import { User, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { workExperience } from "@/data/content";

export const metadata = {
  title: "About | Product Manager Portfolio",
  description: "Learn about my background, experience, and product philosophy.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gray-900">
              <User className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">About</h1>
          </div>
          <p className="text-xl text-gray-600">
            Product Manager who builds and ships products across fintech, growth, and AI.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bio */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              I'm a Product Manager who combines strategic thinking with hands-on building.
              I believe the best PMs don't just define requirements—they deeply understand
              the technology, run experiments, and ship products that drive measurable impact.
            </p>
            <p>
              My career has spanned fintech (Rocket Mortgage, Upstart), semiconductor GTM
              (Infineon), and mobility strategy (DENSO). Across these roles, I've focused
              on growth, experimentation, and data-driven product development.
            </p>
            <p>
              What sets me apart is my builder mindset. I've shipped two web applications
              from scratch, run 30+ experiments with rigorous statistical analysis, and
              generated $4.2M+ in revenue impact through product strategy and execution.
            </p>
            <p>
              I believe in learning by doing, shipping fast, and iterating based on data.
              This portfolio itself is an example—it's not just a resume, it's a product
              experience designed to showcase my work and thinking.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-blue-100">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
                    <p className="text-lg text-gray-600">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {job.duration}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <div className="space-y-2">
                  {job.achievements.map((achievement, aidx) => (
                    <div key={aidx} className="flex items-start gap-3">
                      <span className="text-gray-400 mt-1.5">•</span>
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Industries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Fintech", "Growth", "B2B SaaS", "Semiconductors", "Mobility", "AI/ML", "Marketplace", "Consumer"].map((industry) => (
              <div
                key={industry}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center"
              >
                <span className="font-medium text-gray-900">{industry}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Product Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ship Fast, Learn Faster</h3>
              <p className="text-gray-700">
                Perfect is the enemy of done. Ship MVPs, gather data, iterate based on what
                users actually do—not what they say they'll do.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Let Data Decide</h3>
              <p className="text-gray-700">
                Opinions are cheap. Run experiments with proper statistical rigor. Trust the
                data, even when it contradicts your intuition.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build to Understand</h3>
              <p className="text-gray-700">
                The best PMs stay technical. Build side projects, write code, understand
                constraints. It makes you a better PM and collaborator.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Solve Real Problems</h3>
              <p className="text-gray-700">
                Fall in love with the problem, not your solution. Talk to users, understand
                their pain, then build the simplest thing that works.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-purple-100">
              <Code2 className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Product</h3>
              <div className="flex flex-wrap gap-2">
                {["Product Strategy", "Roadmapping", "User Research", "A/B Testing", "Analytics", "PRDs"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Growth</h3>
              <div className="flex flex-wrap gap-2">
                {["Acquisition", "Conversion", "Retention", "Funnel Optimization", "Experimentation", "Performance Marketing"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "SQL", "APIs", "AI/LLMs"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
