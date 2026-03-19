"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Code,
  Brain,
  Zap,
  Users,
  TrendingUp,
  FileText,
  Target,
  Lightbulb,
  GitBranch,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AIResumeOptimizerContent() {
  const metrics = [
    { label: "Users (Month 1)", value: "500+", icon: Users },
    { label: "Free-to-Paid CVR", value: "12%", icon: TrendingUp },
    { label: "Avg. Time Saved", value: "45 min", icon: Zap },
    { label: "ATS Score Improvement", value: "+28%", icon: Target },
  ];

  const features = [
    {
      title: "Intelligent Job Analysis",
      description: "GPT-4 powered parsing extracts key requirements, skills, and themes from any job description",
      icon: Brain,
    },
    {
      title: "Resume Parsing",
      description: "Support for PDF and DOCX files with automatic text extraction and structure detection",
      icon: FileText,
    },
    {
      title: "AI Rewriting Engine",
      description: "Semantic analysis rewrites experience bullets to align with target role while maintaining authenticity",
      icon: Sparkles,
    },
    {
      title: "6 Professional Templates",
      description: "ATS-friendly templates optimized for different industries and experience levels",
      icon: GitBranch,
    },
    {
      title: "Keyword Gap Analysis",
      description: "Identifies missing keywords from job description to improve ATS matching",
      icon: Target,
    },
    {
      title: "Real-time Preview",
      description: "Live preview with inline editing before exporting to PDF, DOCX, or ATS text",
      icon: Code,
    },
  ];

  const iterations = [
    {
      version: "V1: Prototype",
      focus: "Proof of Concept",
      changes: [
        "Basic keyword matching",
        "Single template",
        "Manual copy-paste workflow",
        "Frontend-only implementation",
      ],
      learnings: [
        "Keyword matching alone wasn't intelligent enough",
        "Users needed more template variety",
        "Export functionality was critical, not nice-to-have",
      ],
    },
    {
      version: "V2: MVP with AI",
      focus: "Core Product",
      changes: [
        "Integrated GPT-4 for semantic analysis",
        "Built FastAPI backend for secure API key management",
        "Added PDF/DOCX parsing",
        "Implemented 3-panel dashboard",
        "Created 6 professional templates",
      ],
      learnings: [
        "Backend security critical—can't expose API keys to frontend",
        "Users confused by too many entry points—needed guided flow",
        "Template previews must be accurate or users lose trust",
      ],
    },
    {
      version: "V3: Product-Led Growth",
      focus: "Monetization & Scale",
      changes: [
        "Added freemium model (3 free resumes/month)",
        "Built referral system (5 bonus credits per referral)",
        "Implemented exit-intent modal (18% capture rate)",
        "Integrated Mixpanel for analytics",
        "Added Stripe for subscription payments",
      ],
      learnings: [
        "Freemium works when free tier delivers real value",
        "Referral credits drove 30% of signups",
        "Exit-intent must offer value (PDF checklist), not just desperation",
      ],
    },
  ];

  const decisions = [
    {
      title: "Guided Flow vs. Free-Form Dashboard",
      decision: "Chose Guided Flow",
      rationale: "User research showed confusion with too many options. Linear flow (upload → analyze → edit → export) reduced drop-off by 40%.",
    },
    {
      title: "Template-Based vs. Fully Custom Design",
      decision: "Chose Template-Based",
      rationale: "Custom design requires design skills most users lack. Templates ensure ATS-friendly formatting while allowing content customization.",
    },
    {
      title: "Real-time AI vs. Generate-then-Edit",
      decision: "Chose Generate-then-Edit",
      rationale: "Real-time AI creates latency and costs per keystroke. Generate-once-then-edit balances speed, cost, and user control.",
    },
    {
      title: "Freemium vs. Paid-Only",
      decision: "Chose Freemium",
      rationale: "Job seekers test multiple tools. Free tier builds trust and drives word-of-mouth. 3 resumes/month offers real value without cannibalizing paid conversions.",
    },
  ];

  const techStack = [
    { category: "Frontend", tech: "React, TypeScript, Tailwind CSS v4" },
    { category: "Backend", tech: "FastAPI (Python), Uvicorn" },
    { category: "AI", tech: "OpenAI GPT-4, Prompt Engineering" },
    { category: "Storage", tech: "LocalStorage (client), PostgreSQL (prod planned)" },
    { category: "Deployment", tech: "Railway (backend), Vercel (frontend)" },
    { category: "Analytics", tech: "Mixpanel, Custom Event Tracking" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Product • Full-Stack Build • 0→1 Launch
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              ResumeFit: AI Resume Optimization Platform
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Automating job-specific resume tailoring using LLMs, semantic analysis, and ATS-friendly templates
            </p>

            <div className="text-gray-700 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
              Built and launched a production SaaS that analyzes job descriptions, maps them to candidate experience,
              and generates ATS-optimized, role-specific resume outputs. Reached 500+ users and 12% free-to-paid conversion in Month 1.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Link href="https://resume-tailor-ai-production-1944.up.railway.app" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">
                  Try Live Product
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/ai-resume-tailor">
                <Button variant="secondary" size="lg">
                  View Demo
                </Button>
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all"
                  >
                    <Icon className="h-8 w-8 text-purple-600 mb-3 mx-auto" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Problem */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Problem</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Job seekers spend hours manually tailoring resumes for each application with no guarantee of ATS
                optimization. The process is exhausting, repetitive, and error-prone.
              </p>
              <p>
                Existing tools either lack AI capabilities or charge $40+/month for basic features. Most are glorified
                template builders—not intelligent optimizers.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mt-6">
                <h3 className="font-bold text-gray-900 mb-2">Key Pain Points</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>ATS Filtering:</strong> 75% of resumes never reach human eyes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Manual Tailoring:</strong> 2-3 hours per application to customize resume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Keyword Guesswork:</strong> Unclear which skills to emphasize for each role</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Generic Resumes Underperform:</strong> One-size-fits-all approach fails</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Opportunity</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Build a production SaaS with viral growth mechanics: generous free tier (3 resumes/month), GPT-4 powered
                optimization, referral system for user acquisition, and exit-intent modals to capture abandoning users.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mt-6">
                <h3 className="font-bold text-gray-900 mb-2">Target Users</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Career Changers:</strong> Need to reframe experience for new industries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Tech Professionals:</strong> Applying to 20-50 roles, need speed + customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Recent Graduates:</strong> Uncertain how to position limited experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hypothesis */}
      <div className="bg-blue-50 border-y border-blue-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-start gap-6">
            <Lightbulb className="h-12 w-12 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Hypothesis</h2>
              <p className="text-xl text-gray-800 leading-relaxed">
                By offering a genuinely useful free tier with viral referral mechanics and transparent ATS scoring, we can
                achieve <strong>&lt;$15 CAC</strong> and <strong>10%+ free-to-paid conversion</strong> through product-led growth,
                proving viability of freemium AI tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Architecture */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Solution Architecture</h2>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 sm:p-12 mb-12">
          <div className="space-y-8">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 font-bold text-lg mb-2">
                  1
                </div>
                <div className="font-semibold">User Resume + Job Description</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-gray-400 rotate-90" />
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 font-bold text-lg mb-2">
                  2
                </div>
                <div className="font-semibold">Parsing Layer</div>
                <div className="text-sm text-gray-600 mt-1">PDF/DOCX extraction, text cleaning</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-gray-400 rotate-90" />
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 font-bold text-lg mb-2">
                  3
                </div>
                <div className="font-semibold">Matching & Alignment Engine</div>
                <div className="text-sm text-gray-600 mt-1">Semantic analysis, keyword extraction</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-gray-400 rotate-90" />
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 font-bold text-lg mb-2">
                  4
                </div>
                <div className="font-semibold">LLM Rewrite Layer</div>
                <div className="text-sm text-gray-600 mt-1">GPT-4 with guardrails, authenticity checks</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-gray-400 rotate-90" />
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-600 font-bold text-lg mb-2">
                  5
                </div>
                <div className="font-semibold">Structured Resume Output</div>
                <div className="text-sm text-gray-600 mt-1">Template rendering, PDF/DOCX/ATS export</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((item) => (
            <div key={item.category} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-sm font-bold text-purple-600 mb-2">{item.category}</div>
              <div className="text-gray-800">{item.tech}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Core Features</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            End-to-end resume optimization workflow powered by AI
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <Icon className="h-10 w-10 text-purple-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Decisions */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Key Product Decisions
        </h2>

        <div className="space-y-6">
          {decisions.map((decision, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 text-purple-600 font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{decision.title}</h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-3">
                    ✓ {decision.decision}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Rationale:</strong> {decision.rationale}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Iterations */}
      <div className="bg-gray-100 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Iterations & Learnings
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            How the product evolved from concept to scalable SaaS
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {iterations.map((iteration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{iteration.version}</div>
                    <div className="text-sm text-gray-600">{iteration.focus}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Changes</h4>
                  <ul className="space-y-1">
                    {iteration.changes.map((change, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">→</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Learnings</h4>
                  <ul className="space-y-1">
                    {iteration.learnings.map((learning, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Impact & Results</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8">
            <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Metrics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Users (Month 1)</span>
                <span className="text-2xl font-bold text-gray-900">500+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Free-to-Paid CVR</span>
                <span className="text-2xl font-bold text-green-600">12%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Referral Share Rate</span>
                <span className="text-2xl font-bold text-gray-900">30%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Exit Modal Capture</span>
                <span className="text-2xl font-bold text-gray-900">18%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">User Impact</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Avg. Time Saved</span>
                <span className="text-2xl font-bold text-gray-900">45 min</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">ATS Score Improvement</span>
                <span className="text-2xl font-bold text-purple-600">+28%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Resumes Generated</span>
                <span className="text-2xl font-bold text-gray-900">1,200+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">User Satisfaction</span>
                <span className="text-2xl font-bold text-gray-900">4.6/5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Key Learnings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Backend security is critical—</strong>API keys must NEVER hit frontend; learned proper
                  environment variable management and server-side API calls
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Freemium works when free tier delivers real value—</strong>12% conversion exceeded 10% target
                  because users genuinely benefited from free tier
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Exit-intent modals effective but must offer value—</strong>resume checklist PDF (not just
                  "wait, come back!") captured 18% of abandoners
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Referral credits drive virality—</strong>30% of signups came from referrals; gamification (5
                  credits = 1 month free) created sharing incentive
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Template quality &gt; quantity—</strong>users preferred 3 great templates over 10 mediocre
                  ones; learned to focus on polish not variety
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>GPT-4 prompt engineering requires iteration—</strong>took 15+ versions to balance helpfulness
                  with authenticity (prevent fabrication)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Role */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">My Role: End-to-End Owner</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Product Strategy", desc: "Problem definition, user research, roadmap" },
              { title: "UX Design", desc: "User flows, wireframes, interaction design" },
              { title: "Full-Stack Development", desc: "React, TypeScript, Python, FastAPI" },
              { title: "AI Engineering", desc: "GPT-4 integration, prompt engineering" },
              { title: "Go-to-Market", desc: "Freemium model, referral system, pricing" },
              { title: "Analytics", desc: "Event tracking, funnel analysis, optimization" },
              { title: "Launch & Iteration", desc: "User feedback loops, A/B testing" },
              { title: "Growth", desc: "Acquisition strategy, conversion optimization" },
            ].map((role, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">{role.title}</h3>
                <p className="text-gray-300 text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Future Roadmap</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Job Match Scoring",
              desc: "0-100 fit score showing how well user matches each job before applying",
              priority: "High",
            },
            {
              title: "Recruiter Feedback Loop",
              desc: "Collect data on what got interviews vs. rejections to improve recommendations",
              priority: "High",
            },
            {
              title: "Auto-Apply Assistant",
              desc: "One-click apply to multiple jobs with tailored resumes and cover letters",
              priority: "Medium",
            },
            {
              title: "Interview Prep Integration",
              desc: "Generate interview questions based on resume claims and practice answers",
              priority: "Medium",
            },
            {
              title: "Performance Analytics",
              desc: "Dashboard tracking application → interview → offer conversion rates",
              priority: "Medium",
            },
            {
              title: "LinkedIn Integration",
              desc: "Import LinkedIn profile and auto-sync resume updates",
              priority: "Low",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : item.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.priority}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Experience the Product</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            See how AI-powered resume optimization works in practice
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="https://resume-tailor-ai-production-1944.up.railway.app" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Try Live Product
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/ai-resume-tailor">
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
                View Interactive Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
