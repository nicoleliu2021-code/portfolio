"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Copy,
  Check,
  AlertCircle,
  Trash2,
  Upload,
  FileText,
  Download,
  ArrowRight,
  CheckCircle2,
  Target,
  Zap,
  Shield
} from "lucide-react";
import { parseJobDescription } from "@/lib/utils";
import { caseStudies } from "@/data/case-studies";
import { workExperience } from "@/data/content";
import Button from "@/components/ui/Button";

interface AnalysisResult {
  themes: string[];
  summary: string;
  bullets: string[];
  skills: string[];
  missingKeywords: string[];
  atsScore: number;
  recommendedCaseStudies: string[];
  timestamp: number;
}

const benefits = [
  { icon: Target, text: "Match job requirements instantly" },
  { icon: Zap, text: "Get ATS-optimized bullets" },
  { icon: CheckCircle2, text: "Identify missing keywords" },
];

export default function ResumeTailor() {
  const [step, setStep] = useState<'input' | 'preview' | 'results'>('input');
  const [jobDescription, setJobDescription] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [recentAnalyses, setRecentAnalyses] = useState<AnalysisResult[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  // Load recent analyses from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recentAnalyses");
    if (saved) {
      setRecentAnalyses(JSON.parse(saved));
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeText(event.target?.result as string || "");
      };
      reader.readAsText(file);
    }
  };

  const analyzeJobDescription = () => {
    if (jobDescription.length < 100) return;

    setIsAnalyzing(true);
    setStep('results');

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

      // Generate missing keywords
      const missingKeywords = generateMissingKeywords(themes, jobDescription);

      // Calculate ATS score
      const atsScore = calculateATSScore(themes, skills);

      const analysis: AnalysisResult = {
        themes,
        summary,
        bullets,
        skills,
        missingKeywords,
        atsScore,
        recommendedCaseStudies: matchedCaseStudies,
        timestamp: Date.now(),
      };

      setResult(analysis);

      // Save to recent analyses
      const updated = [analysis, ...recentAnalyses].slice(0, 5);
      setRecentAnalyses(updated);
      localStorage.setItem("recentAnalyses", JSON.stringify(updated));

      setIsAnalyzing(false);
    }, 2000);
  };

  const calculateATSScore = (themes: string[], skills: string[]): number => {
    // Simple scoring: more themes and skills = higher score
    const baseScore = Math.min(themes.length * 10, 50);
    const skillScore = Math.min(skills.length * 2, 40);
    return Math.min(baseScore + skillScore + 10, 100);
  };

  const generateMissingKeywords = (themes: string[], jobDesc: string): string[] => {
    const allPossibleKeywords = [
      "Product Roadmap",
      "OKRs",
      "KPIs",
      "User Stories",
      "Sprint Planning",
      "Stakeholder Management",
      "Market Research",
      "Competitive Analysis",
      "Go-to-Market Strategy",
      "Customer Discovery",
      "Wireframing",
      "Prototyping",
      "API Integration",
      "Data Visualization",
      "Machine Learning",
      "Cross-functional Collaboration",
      "Agile Methodologies",
      "Product Analytics",
    ];

    // Return keywords that appear in job description but aren't in themes/skills
    const missing = allPossibleKeywords.filter(keyword =>
      jobDesc.toLowerCase().includes(keyword.toLowerCase()) &&
      !themes.some(theme => theme.toLowerCase().includes(keyword.toLowerCase()))
    );

    return missing.slice(0, 6);
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
      bullets.push("Built 3 production web applications using modern tech stack (Next.js, React, TypeScript, AI APIs), demonstrating technical depth and ability to ship products end-to-end");
    }

    if (themes.includes("GTM") || themes.includes("Product Strategy")) {
      bullets.push("Launched 3 product lines generating $15M combined year-1 revenue, developing positioning strategy that increased product consideration by 45%");
    }

    if (themes.includes("Leadership") || themes.includes("Product Strategy")) {
      bullets.push("Led cross-functional teams of 8+ (engineering, design, data, marketing) to deliver products on time and achieve business objectives");
    }

    if (themes.includes("Analytics") || themes.includes("SQL")) {
      bullets.push("Designed analytics infrastructure including event schemas, SQL cohort analyses, and dashboards in Looker/Amplitude for 2 early-stage startups");
    }

    // Default bullets if themes don't match
    if (bullets.length < 3) {
      bullets.push("Drove product strategy and execution across multiple functions, consistently delivering measurable business impact");
      bullets.push("Established robust experimentation framework and data-driven decision making culture");
    }

    return bullets.slice(0, 6);
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

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const copyAllBullets = () => {
    if (!result) return;
    const text = result.bullets.join('\n\n');
    navigator.clipboard.writeText(text);
    setCopiedItem('all-bullets');
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const downloadResults = () => {
    if (!result) return;

    const content = `
TAILORED RESUME CONTENT
Generated: ${new Date(result.timestamp).toLocaleString()}

=== PROFESSIONAL SUMMARY ===
${result.summary}

=== TAILORED BULLETS ===
${result.bullets.map((b, i) => `${i + 1}. ${b}`).join('\n\n')}

=== SKILLS TO HIGHLIGHT ===
${result.skills.join(', ')}

=== MISSING KEYWORDS TO CONSIDER ===
${result.missingKeywords.join(', ')}

=== ATS OPTIMIZATION SCORE ===
${result.atsScore}%

=== RECOMMENDED CASE STUDIES ===
${result.recommendedCaseStudies.join(', ')}
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resume-tailored-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearAnalyses = () => {
    setRecentAnalyses([]);
    localStorage.removeItem("recentAnalyses");
  };

  const resetForm = () => {
    setStep('input');
    setResult(null);
    setJobDescription("");
    setResumeText("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4 mr-2" />
          Portfolio Demo • AI-Powered
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Tailor your resume to any job in seconds
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
          Paste a job description and get ATS-optimized bullets, keyword matches, and tailored content—instantly.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.text} className="flex items-center gap-2 text-gray-700">
                <Icon className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            );
          })}
        </div>

        {/* Trust Note */}
        <div className="inline-flex items-center gap-2 text-sm text-gray-500">
          <Shield className="h-4 w-4" />
          <span>Your data stays private • Nothing is stored on our servers</span>
        </div>
      </div>

      {/* Progress Indicator */}
      {step !== 'input' && (
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">Job Description</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300 mx-4" />
            <div className="flex items-center gap-2">
              <div className={`h-8 w-8 rounded-full ${step === 'results' ? 'bg-green-100' : 'bg-gray-200'} flex items-center justify-center`}>
                {step === 'results' ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <span className="text-sm font-medium text-gray-500">2</span>
                )}
              </div>
              <span className="text-sm font-medium text-gray-900">Analysis</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Job Description Input */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-2">
                      Step 1: Paste Job Description
                    </label>
                    <p className="text-sm text-gray-600">
                      Copy the job posting you're applying to
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste job description here...

Example: 'We're looking for a Product Manager with experience in A/B testing, growth strategy, and cross-functional leadership...'"
                  className="w-full h-64 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400 text-base"
                />

                <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
                  <div className="text-sm text-gray-500">
                    {jobDescription.length > 0 ? (
                      <span className={jobDescription.length >= 100 ? 'text-green-600 font-medium' : ''}>
                        {jobDescription.length} characters {jobDescription.length >= 100 ? '✓' : '(min. 100)'}
                      </span>
                    ) : (
                      <span>Min. 100 characters</span>
                    )}
                  </div>
                  <Button
                    onClick={analyzeJobDescription}
                    disabled={jobDescription.length < 100}
                    variant="primary"
                    size="lg"
                  >
                    Analyze & Tailor Resume
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Optional Resume Upload */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                      <Upload className="h-5 w-5 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Optional: Upload Your Resume</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      For even better results, upload your current resume (.txt format)
                    </p>
                    <label className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-white cursor-pointer transition-colors">
                      <Upload className="h-4 w-4 mr-2 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">Choose File</span>
                      <input
                        type="file"
                        accept=".txt"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    {resumeText && (
                      <div className="mt-2 text-sm text-green-600 font-medium">
                        ✓ Resume uploaded ({resumeText.length} characters)
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">How it works</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Analyzes job description for key themes and requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Matches your experience to job requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Generates ATS-optimized bullets and identifies keyword gaps</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results */}
          {step === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Loading State */}
              {isAnalyzing && (
                <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing job description...</h3>
                  <p className="text-gray-600">Matching your experience to requirements</p>
                </div>
              )}

              {/* Results Cards */}
              {result && !isAnalyzing && (
                <>
                  {/* Action Bar */}
                  <div className="flex items-center justify-between flex-wrap gap-4 bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      <span className="font-semibold text-gray-900">Analysis Complete</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={copyAllBullets}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                      >
                        {copiedItem === 'all-bullets' ? (
                          <>
                            <Check className="h-4 w-4 mr-2 text-green-600" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy All
                          </>
                        )}
                      </button>
                      <button
                        onClick={downloadResults}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                      <button
                        onClick={resetForm}
                        className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        New Analysis
                      </button>
                    </div>
                  </div>

                  {/* ATS Score */}
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">ATS Optimization Score</h2>
                        <p className="text-gray-700">How well your content matches the job requirements</p>
                      </div>
                      <div className="text-right">
                        <div className="text-5xl font-bold text-green-600">{result.atsScore}%</div>
                        <div className="text-sm text-gray-600 mt-1">
                          {result.atsScore >= 80 ? 'Excellent' : result.atsScore >= 60 ? 'Good' : 'Needs work'}
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.atsScore}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                      />
                    </div>
                  </div>

                  {/* Detected Themes */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">✓ Matched Requirements</h2>
                    <p className="text-gray-600 mb-6">Your experience aligns with these key job themes:</p>
                    <div className="flex flex-wrap gap-3">
                      {result.themes.map((theme) => (
                        <span
                          key={theme}
                          className="px-4 py-2 rounded-lg bg-green-100 text-green-700 text-sm font-medium border border-green-200"
                        >
                          ✓ {theme}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Missing Keywords */}
                  {result.missingKeywords.length > 0 && (
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Keywords to Add</h2>
                      <p className="text-gray-700 mb-6">
                        These keywords from the job description could strengthen your resume:
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {result.missingKeywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-4 py-2 rounded-lg bg-white text-yellow-900 text-sm font-medium border border-yellow-300"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tailored Summary */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Tailored Professional Summary</h2>
                      <button
                        onClick={() => copyToClipboard(result.summary, 'summary')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedItem === 'summary' ? (
                          <Check className="h-5 w-5 text-green-600" />
                        ) : (
                          <Copy className="h-5 w-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <p className="text-gray-800 leading-relaxed text-lg">{result.summary}</p>
                    </div>
                  </div>

                  {/* Tailored Bullets */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          ATS-Optimized Resume Bullets
                        </h2>
                        <p className="text-gray-600">Click any bullet to copy it individually</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {result.bullets.map((bullet, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          onClick={() => copyToClipboard(bullet, `bullet-${idx}`)}
                          className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer group border border-gray-200 hover:border-gray-300"
                        >
                          <span className="text-gray-400 mt-1 font-bold">•</span>
                          <p className="flex-1 text-gray-800 leading-relaxed">{bullet}</p>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            {copiedItem === `bullet-${idx}` ? (
                              <Check className="h-5 w-5 text-green-600" />
                            ) : (
                              <Copy className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Skills to Highlight */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills to Highlight</h2>
                    <p className="text-gray-600 mb-6">Include these skills in your resume's skills section:</p>
                    <div className="flex flex-wrap gap-3">
                      {result.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Case Studies */}
                  {result.recommendedCaseStudies.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Relevant Case Studies
                      </h2>
                      <p className="text-gray-600 mb-6">
                        These portfolio projects best demonstrate your relevant experience:
                      </p>
                      <div className="grid gap-4">
                        {result.recommendedCaseStudies.map((title) => {
                          const cs = caseStudies.find((c) => c.title === title);
                          return cs ? (
                            <a
                              key={cs.id}
                              href={`/work/${cs.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-6 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors">
                                    {cs.title}
                                  </div>
                                  <div className="text-sm text-gray-600 mt-1">{cs.company} • {cs.role}</div>
                                </div>
                                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                              </div>
                            </a>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  {/* Next Steps */}
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">Copy the bullets you want to use and paste them into your resume</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">Add missing keywords naturally throughout your experience section</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">Update your skills section with the recommended skills</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">Review the case studies and mention them in your cover letter</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Recent Analyses */}
        {recentAnalyses.length > 0 && step === 'input' && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Analyses</h2>
              <button
                onClick={clearAnalyses}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentAnalyses.map((analysis, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-gray-500">
                      {new Date(analysis.timestamp).toLocaleDateString()}
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      {analysis.atsScore}%
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {analysis.themes.slice(0, 3).map((theme) => (
                      <span
                        key={theme}
                        className="px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium"
                      >
                        {theme}
                      </span>
                    ))}
                    {analysis.themes.length > 3 && (
                      <span className="px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs">
                        +{analysis.themes.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* About This Tool */}
      {step === 'input' && (
        <div className="max-w-3xl mx-auto mt-16 bg-white border border-gray-200 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">About This Tool</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                This is a portfolio demonstration of AI-powered resume tailoring. The current version uses keyword matching and templates to generate tailored content based on my actual experience at Rocket Mortgage, Upstart, and personal projects. A production version would integrate GPT-4 or Claude for more sophisticated natural language analysis and personalization.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
