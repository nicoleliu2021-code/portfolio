"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Copy, Check, AlertCircle, Trash2 } from "lucide-react";
import { parseJobDescription } from "@/lib/utils";
import { caseStudies } from "@/data/case-studies";
import { workExperience } from "@/data/content";
import Button from "@/components/ui/Button";

interface AnalysisResult {
  themes: string[];
  summary: string;
  bullets: string[];
  skills: string[];
  recommendedCaseStudies: string[];
  timestamp: number;
}

export default function ResumeTailor() {
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [recentAnalyses, setRecentAnalyses] = useState<AnalysisResult[]>([]);

  // Load recent analyses from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recentAnalyses");
    if (saved) {
      setRecentAnalyses(JSON.parse(saved));
    }
  }, []);

  const analyzeJobDescription = () => {
    setIsAnalyzing(true);

    // Simulate analysis delay
    setTimeout(() => {
      const themes = parseJobDescription(jobDescription);

      // Match themes to case studies
      const matchedCaseStudies = caseStudies
        .filter((cs) => themes.some((theme) => cs.tags.some((tag) => tag.toLowerCase().includes(theme.toLowerCase()))))
        .slice(0, 3)
        .map((cs) => cs.title);

      // Generate tailored summary
      const summary = generateSummary(themes);

      // Generate bullet points
      const bullets = generateBullets(themes);

      // Generate skills
      const skills = generateSkills(themes);

      const analysis: AnalysisResult = {
        themes,
        summary,
        bullets,
        skills,
        recommendedCaseStudies: matchedCaseStudies,
        timestamp: Date.now(),
      };

      setResult(analysis);

      // Save to recent analyses
      const updated = [analysis, ...recentAnalyses].slice(0, 5);
      setRecentAnalyses(updated);
      localStorage.setItem("recentAnalyses", JSON.stringify(updated));

      setIsAnalyzing(false);
    }, 1500);
  };

  const generateSummary = (themes: string[]): string => {
    const parts = [];

    if (themes.includes("Product Strategy")) {
      parts.push("strategic product leader");
    }
    if (themes.includes("Growth")) {
      parts.push("growth-focused PM");
    }
    if (themes.includes("Experimentation")) {
      parts.push("data-driven experimenter");
    }
    if (themes.includes("Technical")) {
      parts.push("technical product manager");
    }
    if (themes.includes("AI")) {
      parts.push("AI product builder");
    }

    const descriptor = parts.length > 0 ? parts.join(" and ") : "experienced product manager";

    return `${descriptor.charAt(0).toUpperCase() + descriptor.slice(1)} with 4+ years of experience across fintech, growth, and AI. Proven track record of driving measurable business impact through ${themes.slice(0, 2).map(t => t.toLowerCase()).join(" and ")}. Led products that generated $4.2M+ in revenue impact and scaled user acquisition by 42% YoY.`;
  };

  const generateBullets = (themes: string[]): string[] => {
    const bullets = [];

    if (themes.includes("Product Strategy") || themes.includes("Growth")) {
      bullets.push("Led digital product strategy for mortgage funnel, increasing visit-to-lead conversion by 18% (+$4.2M annual revenue) through intent-based personalization and experimentation");
    }

    if (themes.includes("Experimentation") || themes.includes("Analytics")) {
      bullets.push("Designed and executed 30+ A/B tests with 95%+ confidence, optimizing funnel performance and reducing CAC by 28% while increasing qualified applications by 42% YoY");
    }

    if (themes.includes("Growth") || themes.includes("Acquisition")) {
      bullets.push("Scaled user acquisition from 12K to 28K monthly applications while improving marketing efficiency (LTV:CAC) by 35% through channel optimization and creative testing");
    }

    if (themes.includes("Technical") || themes.includes("AI")) {
      bullets.push("Built 2 web applications using modern tech stack (Next.js, React, AI APIs), demonstrating technical depth and ability to ship products end-to-end");
    }

    if (themes.includes("GTM") || themes.includes("Product Strategy")) {
      bullets.push("Launched 3 product lines generating $15M combined year-1 revenue, developing positioning strategy that increased product consideration by 45%");
    }

    if (themes.includes("Leadership") || themes.includes("Product Strategy")) {
      bullets.push("Led cross-functional teams of 8+ (engineering, design, data, marketing) to deliver products on time and achieve business objectives");
    }

    // Default bullets if themes don't match
    if (bullets.length < 3) {
      bullets.push("Drove product strategy and execution across multiple functions, consistently delivering measurable business impact");
      bullets.push("Established robust experimentation framework and data-driven decision making culture");
    }

    return bullets.slice(0, 5);
  };

  const generateSkills = (themes: string[]): string[] => {
    const skills = new Set<string>();

    if (themes.includes("Product Strategy")) {
      skills.add("Product Strategy");
      skills.add("Roadmap Planning");
      skills.add("Stakeholder Management");
    }
    if (themes.includes("Experimentation")) {
      skills.add("A/B Testing");
      skills.add("Experimentation");
      skills.add("Statistical Analysis");
    }
    if (themes.includes("Growth")) {
      skills.add("Growth Strategy");
      skills.add("Acquisition");
      skills.add("Funnel Optimization");
    }
    if (themes.includes("Analytics")) {
      skills.add("Analytics");
      skills.add("SQL");
      skills.add("Data Analysis");
    }
    if (themes.includes("Technical")) {
      skills.add("Technical PM");
      skills.add("APIs");
      skills.add("System Design");
    }
    if (themes.includes("AI")) {
      skills.add("AI/ML Products");
      skills.add("LLMs");
      skills.add("AI Product Development");
    }
    if (themes.includes("UX/Design")) {
      skills.add("UX Design");
      skills.add("User Research");
      skills.add("Wireframing");
    }

    // Add core skills
    skills.add("Product Management");
    skills.add("Agile/Scrum");
    skills.add("Cross-functional Leadership");

    return Array.from(skills);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const clearAnalyses = () => {
    setRecentAnalyses([]);
    localStorage.removeItem("recentAnalyses");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Feature
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Resume Tailor
        </h1>
        <p className="text-xl text-gray-600">
          Paste a job description and instantly see how my experience aligns with the role.
          Get tailored resume bullets, key skills, and recommended case studies.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-900">
            <strong>Demo Feature:</strong> This is a portfolio demonstration of AI-powered resume tailoring.
            The analysis uses keyword matching and predefined templates. A production version would use GPT-4 or Claude for more sophisticated analysis.
          </p>
        </div>
      </div>

      {/* Input Section */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none text-gray-900 placeholder-gray-400"
          />

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              {jobDescription.length > 0 && `${jobDescription.length} characters`}
            </div>
            <Button
              onClick={analyzeJobDescription}
              disabled={jobDescription.length < 50 || isAnalyzing}
              variant="primary"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Analyze & Tailor
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 space-y-6"
          >
            {/* Detected Themes */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Detected Themes</h2>
              <div className="flex flex-wrap gap-2">
                {result.themes.map((theme) => (
                  <span
                    key={theme}
                    className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium"
                  >
                    ✓ {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Tailored Summary */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Tailored Professional Summary</h2>
                <button
                  onClick={() => copyToClipboard(result.summary, -1)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {copiedIndex === -1 ? (
                    <Check className="h-5 w-5 text-green-600" />
                  ) : (
                    <Copy className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed">{result.summary}</p>
            </div>

            {/* Tailored Bullets */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Tailored Resume Bullets
              </h2>
              <div className="space-y-3">
                {result.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <span className="text-gray-400 mt-1">•</span>
                    <p className="flex-1 text-gray-700">{bullet}</p>
                    <button
                      onClick={() => copyToClipboard(bullet, idx)}
                      className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white rounded transition-all"
                    >
                      {copiedIndex === idx ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-600" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills to Highlight */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Skills to Highlight</h2>
              <div className="flex flex-wrap gap-2">
                {result.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended Case Studies */}
            {result.recommendedCaseStudies.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Recommended Case Studies
                </h2>
                <p className="text-gray-600 mb-4">
                  These case studies best demonstrate my relevant experience:
                </p>
                <div className="space-y-2">
                  {result.recommendedCaseStudies.map((title) => {
                    const cs = caseStudies.find((c) => c.title === title);
                    return cs ? (
                      <a
                        key={cs.id}
                        href={`/work/${cs.id}`}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all"
                      >
                        <div className="font-medium text-gray-900">{cs.title}</div>
                        <div className="text-sm text-gray-600">{cs.company}</div>
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Recent Analyses */}
        {recentAnalyses.length > 0 && !result && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recent Analyses</h2>
              <button
                onClick={clearAnalyses}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <Trash2 className="h-4 w-4" />
                Clear
              </button>
            </div>
            <div className="space-y-3">
              {recentAnalyses.map((analysis, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-500">
                      {new Date(analysis.timestamp).toLocaleDateString()}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {analysis.themes.slice(0, 3).map((theme) => (
                        <span
                          key={theme}
                          className="px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
