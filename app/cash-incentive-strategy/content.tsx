"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Target,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Zap,
  Shield,
  Lightbulb,
  GitBranch,
  Filter,
  Repeat,
  Activity,
} from "lucide-react";

export default function CashIncentiveContent() {
  const initiativeSnapshot = [
    { label: "Company Type", value: "Fintech / Neobank" },
    { label: "Initiative Type", value: "Growth / Incentives / Activation" },
    { label: "Focus", value: "Acquisition + Direct Deposit Activation" },
    { label: "Core Metric", value: "Cost per Activated User" },
    { label: "Timeframe", value: "2–3 Quarter Strategic Roadmap" },
  ];

  const northStarMetrics = [
    { label: "North Star", value: "Cost per Activated User", primary: true },
    { label: "Signup Conversion", value: "Secondary KPI" },
    { label: "DD Activation Rate", value: "Secondary KPI" },
    { label: "30/60/90-Day Retention", value: "Quality Metric" },
    { label: "LTV/CAC Ratio", value: "Unit Economics" },
    { label: "Fraud / Abuse Rate", value: "Risk Metric" },
  ];

  const strategyJourney = [
    {
      stage: "Awareness",
      focus: "Use incentive to get attention",
      icon: Target,
    },
    {
      stage: "Consideration",
      focus: "Simplify value proposition",
      icon: Filter,
    },
    {
      stage: "Signup",
      focus: "Reduce hesitation",
      icon: Users,
    },
    {
      stage: "Activation",
      focus: "Reward meaningful action",
      icon: Zap,
    },
    {
      stage: "Retention",
      focus: "Reinforce ongoing usage",
      icon: Repeat,
    },
  ];

  const audiences = [
    {
      name: "High-Intent Switchers",
      mindset: "Already searching for better banking options",
      opportunity: "Less incentive-sensitive, higher base conversion",
      messaging: "Focus on trust, speed, and ease",
      strategy: "Moderate incentive, emphasize product benefits",
    },
    {
      name: "Incentive Seekers",
      mindset: "Motivated primarily by bonus offers",
      opportunity: "High acquisition potential but higher abuse risk",
      messaging: "Lead with offer, clear qualification steps",
      strategy: "Stronger qualification thresholds, fraud monitoring",
    },
    {
      name: "Passive Prospects",
      mindset: "Not actively looking to switch",
      opportunity: "Large addressable market, needs compelling reason",
      messaging: "Lifestyle framing + financial benefit",
      strategy: "Higher incentive amount, emotional creative",
    },
    {
      name: "Unactivated Users",
      mindset: "Signed up but haven't completed setup",
      opportunity: "Strong lifecycle opportunity, warm audience",
      messaging: "Completion reminder + urgency",
      strategy: "Targeted nudges, progress visibility, extended deadline",
    },
  ];

  const offerVariables = [
    {
      dimension: "Incentive Amount",
      options: ["$100", "$150", "$200", "$250"],
      tradeoff: "Higher amount drives volume but reduces margin; test elasticity",
    },
    {
      dimension: "Qualification Threshold",
      options: ["DD ≥ $200", "DD ≥ $500", "DD ≥ $1,000"],
      tradeoff: "Higher threshold filters quality but may reduce conversion",
    },
    {
      dimension: "Time Window",
      options: ["15 days", "30 days", "45 days", "60 days"],
      tradeoff: "Longer window improves completion but delays activation insights",
    },
    {
      dimension: "Payout Structure",
      options: ["Full payout", "$50 + $150 split", "Tiered by behavior"],
      tradeoff: "Split payout encourages early engagement; tiered rewards multiple actions",
    },
  ];

  const funnelSteps = [
    { step: "Ad / Channel", focus: "Clear value prop, trust signals" },
    { step: "Landing Page", focus: "Clarity, simplicity, social proof" },
    { step: "Signup", focus: "Low friction, consistent messaging" },
    { step: "Verification", focus: "Security + speed" },
    { step: "DD Setup", focus: "Urgency, reminders, progress tracking" },
    { step: "Reward Earned", focus: "Milestone celebration" },
    { step: "Habit Formation", focus: "Build usage beyond incentive" },
  ];

  const experimentPhases = [
    {
      phase: "Phase 1: Baseline Optimization",
      objective: "Establish fundamental conversion economics",
      tests: [
        "Incentive amount testing ($100 vs $150 vs $200 vs $250)",
        "Qualification threshold testing (DD $200 vs $500 vs $1K)",
        "Messaging angle testing (benefit vs urgency vs social proof)",
        "Landing page variant testing (long-form vs short-form)",
      ],
      expectedLearning: "Find baseline elasticity curve and optimal offer structure",
    },
    {
      phase: "Phase 2: Segment-Based Personalization",
      objective: "Tailor offers and messaging by user segment",
      tests: [
        "Channel-specific offers (Meta vs TikTok vs Paid Search)",
        "Predicted intent-based incentive allocation",
        "Personalized activation sequences by user behavior",
        "Segment-specific creative and value prop testing",
      ],
      expectedLearning: "Identify which segments respond to which levers",
    },
    {
      phase: "Phase 3: Advanced Optimization",
      objective: "Scale with predictive models and dynamic systems",
      tests: [
        "ML-powered incentive allocation by predicted LTV",
        "Dynamic offer testing with multi-armed bandits",
        "AI-informed lifecycle trigger optimization",
        "Cross-sell timing optimization post-activation",
      ],
      expectedLearning: "Maximize efficiency through intelligent automation",
    },
  ];

  const measurementFramework = [
    {
      category: "Acquisition",
      metrics: ["CTR", "Landing page CVR", "Signup completion rate", "CAC"],
    },
    {
      category: "Activation",
      metrics: ["DD setup rate", "Time to activation", "Completion by segment", "Activation CAC"],
    },
    {
      category: "Quality / Retention",
      metrics: ["30/60/90-day retention", "Avg balance", "Transaction frequency", "LTV"],
    },
    {
      category: "Risk / Economics",
      metrics: ["Fraud rate", "Abuse rate", "Incentive cost per user", "LTV/CAC ratio"],
    },
  ];

  const risks = [
    {
      risk: "Incentive Hunters",
      description: "Users who sign up for bonus but churn immediately after payout",
      mitigation: [
        "Tiered payout with delayed second payment",
        "Qualification actions that predict retention",
        "90-day monitoring for abuse patterns",
        "Clawback mechanisms for early churners",
      ],
    },
    {
      risk: "Fraud & Abuse",
      description: "Synthetic accounts, multiple signups, or coordinated abuse",
      mitigation: [
        "Device fingerprinting and velocity checks",
        "Manual review for high-risk patterns",
        "Identity verification requirements",
        "Real-time fraud detection with auto-pause",
      ],
    },
    {
      risk: "Rising CAC",
      description: "Market saturation or competitive response driving up costs",
      mitigation: [
        "Strict CAC ceilings with auto-pause",
        "Channel diversification strategy",
        "Continuous creative refresh",
        "Audience exclusion and frequency capping",
      ],
    },
    {
      risk: "Activation Drop-Off",
      description: "Users sign up but don't complete direct deposit setup",
      mitigation: [
        "Proactive email/SMS nudge sequences",
        "In-app progress tracking with urgency",
        "Simplified setup flow with fewer steps",
        "Human support for drop-off recovery",
      ],
    },
  ];

  const scalingTimeline = [
    {
      term: "Short Term (Q1-Q2)",
      goals: [
        "Validate baseline economics and conversion funnel",
        "Establish measurement infrastructure",
        "Test core offer variables and messaging",
        "Build fraud detection and risk management",
      ],
    },
    {
      term: "Mid Term (Q3-Q4)",
      goals: [
        "Roll out personalized offers by segment",
        "Expand to new channels and audiences",
        "Optimize lifecycle activation sequences",
        "Build predictive LTV models",
      ],
    },
    {
      term: "Long Term (Year 2+)",
      goals: [
        "Deploy AI-driven dynamic incentive allocation",
        "Build retention-linked reward programs",
        "Scale internationally with localized offers",
        "Create self-optimizing lifecycle engine",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Growth Strategy • Behavioral Economics • Unit Economics
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cash Incentive Growth Strategy
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Designing a behavior-driven acquisition engine for fintech growth
            </p>

            <div className="text-gray-700 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
              A strategic growth initiative focused on using conditional cash incentives to acquire, activate,
              and retain high-value banking customers efficiently.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
                View Strategy
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                See Experiment Plan
              </button>
            </div>

            {/* Initiative Snapshot */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Initiative Snapshot</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {initiativeSnapshot.map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                    <div className="text-base font-semibold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Business Context */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Business Context</h2>
        <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto space-y-6">
          <p>
            In consumer banking and fintech, switching behavior is one of the hardest actions to drive. Users are
            reluctant to change direct deposit or primary banking habits due to perceived setup complexity, risk
            aversion, and inertia.
          </p>
          <p>
            Cash incentives can accelerate acquisition, but poorly designed offers attract low-quality users who
            churn immediately after payout—destroying unit economics and wasting marketing spend.
          </p>
          <p>
            The strategic challenge is to balance aggressive growth with long-term retention quality and sustainable
            CAC. Success requires designing incentives that drive valuable behavior change, not just transactional signups.
          </p>
        </div>
      </div>

      {/* Problem */}
      <div className="bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">The Problem</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-4">Switching Friction</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Users hesitate because setup effort feels high and risky</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Direct deposit changes require employer coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Psychological resistance to changing primary financial relationships</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-4">Economics Risk</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Generic offers drive signups but not meaningful activation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>High risk of bonus hunters who churn immediately after payout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Fraud and abuse can destroy program ROI without proper guardrails</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gray-100 border-l-4 border-gray-400 p-6 rounded-r-lg max-w-4xl mx-auto">
            <p className="text-gray-800 leading-relaxed">
              <strong>Core Challenge:</strong> How do we design an incentive program that drives high-quality acquisition
              and activation while maintaining efficient unit economics and protecting against abuse?
            </p>
          </div>
        </div>
      </div>

      {/* Core Insight */}
      <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-start gap-6">
            <Lightbulb className="h-12 w-12 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-4">Core Insight</h2>
              <p className="text-2xl font-semibold mb-4 leading-relaxed">
                Cash incentives are not just promotional hooks — they are behavior-change levers.
              </p>
              <div className="prose prose-lg text-blue-50 space-y-3">
                <p>
                  The real value is not the signup itself. The key behavior is direct deposit setup and recurring usage—
                  actions that predict long-term customer value.
                </p>
                <p>
                  Incentives should reward actions that signal commitment, not just attention. The program must be designed
                  around behavior shaping, not acquisition volume alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goal / North Star */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Goal / North Star</h2>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Maximize high-quality customer acquisition while maintaining efficient unit economics
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {northStarMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`border-2 rounded-xl p-6 ${
                metric.primary
                  ? "bg-gradient-to-br from-blue-50 to-green-50 border-blue-300 shadow-lg"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="text-sm font-semibold text-gray-600 mb-2">{metric.label}</div>
              <div
                className={`text-2xl font-bold ${
                  metric.primary ? "text-blue-600" : "text-gray-900"
                }`}
              >
                {metric.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Strategy Overview */}
      <div className="bg-gray-100 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Strategy Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {strategyJourney.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <Icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{stage.stage}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{stage.focus}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Audience Segmentation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Audience Segmentation</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Different user mindsets require different incentive strategies and messaging approaches
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, idx) => (
            <motion.div
              key={audience.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{audience.name}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Mindset:</span>
                  <span className="text-gray-700 ml-2">{audience.mindset}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Opportunity:</span>
                  <span className="text-gray-700 ml-2">{audience.opportunity}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Messaging:</span>
                  <span className="text-gray-700 ml-2">{audience.messaging}</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <span className="font-semibold text-blue-600">Strategy:</span>
                  <span className="text-gray-700 ml-2">{audience.strategy}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Offer Design Framework */}
      <div className="bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Offer Design Framework
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Test systematically across multiple dimensions to find optimal configuration
          </p>

          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 mb-2">Example Offer:</h3>
            <p className="text-lg text-gray-800">
              "Get <strong>$200</strong> when you set up direct deposit of <strong>$500+</strong> within{" "}
              <strong>45 days</strong>"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {offerVariables.map((variable, idx) => (
              <div key={variable.dimension} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{variable.dimension}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {variable.options.map((option) => (
                    <span
                      key={option}
                      className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700"
                    >
                      {option}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Tradeoff:</strong> {variable.tradeoff}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Funnel & Lifecycle Design */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Funnel & Lifecycle Design
        </h2>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            {funnelSteps.map((step, idx) => (
              <div key={step.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{step.step}</h3>
                  <p className="text-sm text-gray-700">{step.focus}</p>
                </div>
                {idx < funnelSteps.length - 1 && (
                  <div className="absolute left-9 mt-12 h-6 w-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experimentation Roadmap */}
      <div className="bg-gray-100 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Experimentation Roadmap
          </h2>

          <div className="space-y-8">
            {experimentPhases.map((phase, idx) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white font-bold flex items-center justify-center text-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                    <p className="text-gray-700">{phase.objective}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Sample Tests:</h4>
                  <ul className="space-y-2">
                    {phase.tests.map((test) => (
                      <li key={test} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <span className="font-semibold text-gray-900">Expected Learning:</span>
                  <span className="text-gray-700 ml-2">{phase.expectedLearning}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Measurement Framework */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Measurement Framework
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {measurementFramework.map((category) => (
            <div key={category.category} className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-2 text-gray-700">
                    <Activity className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Risks & Guardrails */}
      <div className="bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Risks & Guardrails
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Disciplined risk management protects program economics
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {risks.map((risk) => (
              <div key={risk.risk} className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{risk.risk}</h3>
                    <p className="text-sm text-gray-700">{risk.description}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Mitigation:</h4>
                  <ul className="space-y-1">
                    {risk.mitigation.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scaling Plan */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Scaling Plan</h2>

        <div className="space-y-6">
          {scalingTimeline.map((phase, idx) => (
            <motion.div
              key={phase.term}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.term}</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {phase.goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-2 text-gray-700">
                    <GitBranch className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* My Role / PMM Lens */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">My Role: Growth PMM Lens</h2>
          <div className="prose prose-lg text-gray-300 max-w-4xl mx-auto space-y-4">
            <p>
              As a Growth Product Marketing Manager, I approached this initiative by defining the growth problem and
              strategic objective first—acquisition alone is not enough; we need activation and retention.
            </p>
            <p>
              I segmented user motivations and behavior patterns to understand which levers would drive different
              audiences, then designed offer logic and lifecycle positioning to maximize both volume and quality.
            </p>
            <p>
              I developed an experimentation roadmap that balances learning velocity with statistical rigor, and built
              a measurement framework that tracks the full funnel—from awareness to retention—while protecting unit
              economics.
            </p>
            <p>
              This is growth strategy, not just campaign execution: aligning incentives to behavior, economics to
              activation, and measurement to what truly matters.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Key Takeaways</h2>

        <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-800 leading-relaxed">
                <strong>Incentives should be tied to high-value behavior,</strong> not just signups. Reward actions
                that predict retention and lifetime value.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-800 leading-relaxed">
                <strong>Acquisition alone is not enough.</strong> Success depends on activation quality, retention, and
                efficient unit economics.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-800 leading-relaxed">
                <strong>Experimentation is critical to finding optimal configuration.</strong> Test systematically
                across incentive amount, qualification threshold, timing, and segmentation.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-800 leading-relaxed">
                <strong>Great growth strategy balances persuasion, economics, and user psychology.</strong> Understand
                what motivates behavior change and design incentives accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
