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
  Quote,
  TrendingDown,
  Percent,
  Clock,
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

      {/* Business Context - Redesigned */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              In consumer banking, switching behavior is one of the hardest actions to drive. Despite aggressive marketing, most users never change their primary bank.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The friction is real: updating direct deposit, moving automatic payments, overcoming inertia. Cash incentives can break through—but only if designed correctly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The wrong approach attracts bonus hunters who churn after payout, destroying unit economics. The right approach drives genuine switching and creates lasting customer relationships.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <TrendingDown className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">73%</div>
                  <div className="text-sm text-gray-700">of users never switch primary banks despite dissatisfaction</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <DollarSign className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">$150-300</div>
                  <div className="text-sm text-gray-700">typical CAC for fintech acquisition campaigns</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <Percent className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-3xl font-bold text-yellow-600 mb-1">40-60%</div>
                  <div className="text-sm text-gray-700">of sign-ups never complete direct deposit setup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem - Story Format */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The problem most fintechs face</h2>

            {/* Scenario */}
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <p className="text-xl text-gray-800 italic leading-relaxed">
                  "We're spending $200 per signup. Half never set up direct deposit. Of those who do, 40% churn within 90 days. Our LTV/CAC is underwater."
                </p>
              </div>
              <div className="text-sm text-gray-600 border-t pt-4">
                — Scenario facing many growth teams in consumer fintech
              </div>
            </div>

            {/* The core tensions */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Switching friction is high</h3>
                  <p className="text-gray-700">Users resist changing direct deposit. It requires employer coordination, feels risky, and breaks comfortable routines. The default is inertia.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Incentives attract the wrong users</h3>
                  <p className="text-gray-700">Generic "$200 bonus" offers drive volume but pull in bonus hunters—users who game the system, grab cash, and churn immediately.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Unit economics break</h3>
                  <p className="text-gray-700">When CAC is $250 but 60% of users never activate or churn within 3 months, payback periods extend to 18+ months—or never arrive at all.</p>
                </div>
              </div>
            </div>

            {/* The strategic question */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">The Strategic Question</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                How do we design an incentive program that drives genuine behavior change—activating high-quality users while protecting unit economics and minimizing abuse?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Insight - Visual Break */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <div className="inline-block p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
            <Lightbulb className="h-10 w-10 text-yellow-300" />
          </div>

          <h2 className="text-2xl font-bold text-blue-200 mb-6 tracking-wide uppercase text-sm">Core Insight</h2>

          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Cash incentives aren't promotional hooks—
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              they're behavior-change levers
            </span>
          </p>

          <div className="max-w-3xl mx-auto space-y-6 text-lg text-blue-100">
            <p className="leading-relaxed">
              The signup means nothing. What matters is <strong className="text-white">direct deposit setup</strong> and <strong className="text-white">recurring usage</strong>—the behaviors that predict long-term value.
            </p>
            <p className="leading-relaxed">
              Great incentive programs reward commitment, not attention. They're designed around <strong className="text-white">behavior shaping</strong>, not just acquisition volume.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">Wrong</div>
              <div className="text-sm text-blue-200">"Get 10,000 signups"</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-green-400">
              <div className="text-3xl font-bold text-green-300 mb-2">Right</div>
              <div className="text-sm text-green-200">"Get 3,000 activated users"</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-400">
              <div className="text-3xl font-bold text-purple-300 mb-2">Better</div>
              <div className="text-sm text-purple-200">"Get 2,000 retained users"</div>
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

      {/* Audience Segmentation - Persona Format */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Not all users are equal</h2>
            <p className="text-xl text-gray-600">
              Each segment requires a different approach. Blanket offers waste money. Targeted strategies win.
            </p>
          </div>

          <div className="space-y-6">
            {/* High-Intent Switchers */}
            <div className="bg-white border-2 border-green-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 border-b-2 border-green-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">High-Intent Switchers</h3>
                    <p className="text-gray-700">Already searching for better banking options</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Segment size</div>
                    <div className="text-2xl font-bold text-green-600">~20%</div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 p-6">
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Mindset</div>
                  <p className="text-gray-800">Frustrated with current bank. Actively comparing alternatives. Ready to switch.</p>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Strategy</div>
                  <p className="text-gray-800">Moderate incentive ($100-150). Focus messaging on <strong>trust, speed, ease</strong>. Lead with product benefits.</p>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Expected Behavior</div>
                  <p className="text-gray-800">High activation rate (60-70%). Strong retention. Lower abuse risk. Best LTV/CAC.</p>
                </div>
              </div>
            </div>

            {/* Incentive Seekers */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 border-b-2 border-orange-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Incentive Seekers</h3>
                    <p className="text-gray-700">Motivated primarily by bonus offers</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Segment size</div>
                    <div className="text-2xl font-bold text-orange-600">~35%</div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 p-6">
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Mindset</div>
                  <p className="text-gray-800">Hunting for bonuses. Will sign up anywhere offering cash. Limited brand loyalty.</p>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Strategy</div>
                  <p className="text-gray-800">Lead with offer but add <strong>strong qualification rules</strong>. Use tiered payouts. Monitor for abuse patterns.</p>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Expected Behavior</div>
                  <p className="text-gray-800">Medium activation (40-50%). Higher churn risk. Requires fraud monitoring. Profitable if retention &gt; 60 days.</p>
                </div>
              </div>
            </div>

            {/* Passive Prospects */}
            <div className="bg-white border-2 border-purple-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-b-2 border-purple-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Passive Prospects</h3>
                    <p className="text-gray-700">Not actively looking to switch</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Segment size</div>
                    <div className="text-2xl font-bold text-purple-600">~35%</div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 p-6">
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Mindset</div>
                  <p className="text-gray-800">Satisfied enough with current bank. Inertia is strong. Needs compelling reason to act.</p>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Strategy</div>
                  <p className="text-gray-800">Higher incentive ($200-250). <strong>Emotional/lifestyle creative</strong>. Show transformation story. Simplify switching narrative.</p>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Expected Behavior</div>
                  <p className="text-gray-800">Lower activation (30-40%). But if activated, strong retention. Worth the CAC if LTV &gt; $800.</p>
                </div>
              </div>
            </div>

            {/* Unactivated Users */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-b-2 border-blue-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Unactivated Users</h3>
                    <p className="text-gray-700">Already signed up but haven't completed setup</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Segment size</div>
                    <div className="text-2xl font-bold text-blue-600">~10%</div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 p-6">
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Mindset</div>
                  <p className="text-gray-800">Started journey but got stuck or distracted. May need nudge or clarification.</p>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Strategy</div>
                  <p className="text-gray-800"><strong>Reminder + urgency messaging</strong>. Show progress ("You're 80% done"). Offer support. Extend deadline if needed.</p>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-600 uppercase mb-2">Expected Behavior</div>
                  <p className="text-gray-800">High recovery potential (50-60%). Low incremental CAC. Strong ROI on lifecycle campaigns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key insight callout */}
          <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Target className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-3">Why segmentation matters</h4>
                <p className="text-gray-300 leading-relaxed">
                  A $200 blanket offer wastes money on high-intent users who'd convert for $100, while underinvesting in passive prospects who need $250. Segmentation allows dynamic allocation: <strong className="text-white">spend more on high-LTV segments, less on high-risk segments, and optimize recovery for warm leads</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Design Framework - Interactive Style */}
      <div className="bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How we'd test the offer
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Every element is a variable. Each variable changes economics. Test systematically.
            </p>

            {/* Example Offer - Large Format */}
            <div className="relative bg-gradient-to-br from-green-50 to-blue-50 border-4 border-green-500 rounded-2xl p-10 mb-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

              <div className="relative">
                <div className="text-sm font-bold text-green-700 uppercase tracking-wide mb-4">Example Offer Structure</div>
                <div className="text-3xl font-bold text-gray-900 leading-relaxed">
                  Get <span className="text-green-600 underline decoration-4 decoration-green-300">$200</span> when you set up direct deposit of{" "}
                  <span className="text-blue-600 underline decoration-4 decoration-blue-300">$500+</span> within{" "}
                  <span className="text-purple-600 underline decoration-4 decoration-purple-300">45 days</span>
                </div>
              </div>
            </div>

            {/* Test Variables - Comparison Table Style */}
            <div className="space-y-8">
              {/* Amount */}
              <div className="border-l-4 border-green-500 bg-gray-50 rounded-r-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">💰 Incentive Amount</h3>
                    <p className="text-sm text-gray-600 mt-1">The cash reward users receive</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-green-500 transition-colors cursor-pointer">
                    <div className="text-2xl font-bold text-gray-900">$100</div>
                    <div className="text-xs text-gray-600 mt-1">Conservative</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-green-500 transition-colors cursor-pointer">
                    <div className="text-2xl font-bold text-gray-900">$150</div>
                    <div className="text-xs text-gray-600 mt-1">Moderate</div>
                  </div>
                  <div className="bg-white border-2 border-green-500 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">$200</div>
                    <div className="text-xs text-green-600 mt-1 font-semibold">Baseline</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-green-500 transition-colors cursor-pointer">
                    <div className="text-2xl font-bold text-gray-900">$250</div>
                    <div className="text-xs text-gray-600 mt-1">Aggressive</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 bg-white rounded-lg p-4">
                  <strong className="text-gray-900">Hypothesis:</strong> Higher amounts drive volume but reduce margin. Test to find elasticity curve—where does incremental cost stop delivering incremental activation?
                </p>
              </div>

              {/* Threshold */}
              <div className="border-l-4 border-blue-500 bg-gray-50 rounded-r-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">🎯 Qualification Threshold</h3>
                    <p className="text-sm text-gray-600 mt-1">Minimum direct deposit required</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="text-2xl font-bold text-gray-900">$200</div>
                    <div className="text-xs text-gray-600 mt-1">Low bar</div>
                  </div>
                  <div className="bg-white border-2 border-blue-500 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">$500</div>
                    <div className="text-xs text-blue-600 mt-1 font-semibold">Baseline</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="text-2xl font-bold text-gray-900">$1,000</div>
                    <div className="text-xs text-gray-600 mt-1">Quality filter</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 bg-white rounded-lg p-4">
                  <strong className="text-gray-900">Hypothesis:</strong> Higher thresholds filter for quality but reduce conversion. Find the sweet spot where we maximize valuable activations without excluding high-intent users.
                </p>
              </div>

              {/* Timing */}
              <div className="border-l-4 border-purple-500 bg-gray-50 rounded-r-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">⏱️ Time Window</h3>
                    <p className="text-sm text-gray-600 mt-1">Days to complete qualification</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-purple-500 transition-colors cursor-pointer">
                    <div className="text-2xl font-bold text-gray-900">15d</div>
                    <div className="text-xs text-gray-600 mt-1">Urgent</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-purple-500 transition-colors cursor-pointer">
                    <div className="text-2xl font-bold text-gray-900">30d</div>
                    <div className="text-xs text-gray-600 mt-1">Standard</div>
                  </div>
                  <div className="bg-white border-2 border-purple-500 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">45d</div>
                    <div className="text-xs text-purple-600 mt-1 font-semibold">Baseline</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-purple-500 transition-colors cursor-pointer">
                    <div className="text-2xl font-bold text-gray-900">60d</div>
                    <div className="text-xs text-gray-600 mt-1">Flexible</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 bg-white rounded-lg p-4">
                  <strong className="text-gray-900">Hypothesis:</strong> Longer windows improve completion but delay insights and may increase abuse. Test to balance activation rate with learning velocity.
                </p>
              </div>

              {/* Payout Structure */}
              <div className="border-l-4 border-orange-500 bg-gray-50 rounded-r-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">💳 Payout Structure</h3>
                    <p className="text-sm text-gray-600 mt-1">How and when reward is distributed</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white border-2 border-orange-500 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="text-lg font-bold text-gray-900 mb-1">Full</div>
                    <div className="text-2xl font-bold text-orange-600">$200</div>
                    <div className="text-xs text-gray-600 mt-2">One-time after DD</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer">
                    <div className="text-lg font-bold text-gray-900 mb-1">Split</div>
                    <div className="text-2xl font-bold text-gray-900">$50 + $150</div>
                    <div className="text-xs text-gray-600 mt-2">Early + completion</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer">
                    <div className="text-lg font-bold text-gray-900 mb-1">Tiered</div>
                    <div className="text-2xl font-bold text-gray-900">Up to $200</div>
                    <div className="text-xs text-gray-600 mt-2">Based on behavior</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 bg-white rounded-lg p-4">
                  <strong className="text-gray-900">Hypothesis:</strong> Split payouts encourage early engagement and reduce churn risk. Tiered rewards can drive multiple valuable behaviors. Test impact on activation and 90-day retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Funnel & Lifecycle Design */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          The Conversion Journey
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Seven critical moments where incentive messaging, product UX, and lifecycle triggers drive behavior
        </p>

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

      {/* Real-World Scenario - Visual Break */}
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white border-y border-purple-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/30 rounded-full text-sm font-bold mb-6">
              <Activity className="h-4 w-4 mr-2" />
              Real-World Scenario
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What success looks like in practice</h2>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-sm font-bold text-purple-300 uppercase mb-3">Before Optimization</div>
                  <div className="space-y-3 text-purple-100">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong className="text-white">Blanket $200 offer</strong> to all users
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingDown className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong className="text-white">45% activation rate</strong> (55% never completed DD)
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingDown className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong className="text-white">35% 90-day retention</strong> (65% churned)
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingDown className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong className="text-white">$320 CAC,</strong> $240 LTV → negative unit economics
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold text-green-300 uppercase mb-3">After Optimization</div>
                  <div className="space-y-3 text-green-100">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong className="text-white">Segmented offers</strong> ($100-250 by intent)
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong className="text-white">62% activation rate</strong> (+17pp lift)
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong className="text-white">58% 90-day retention</strong> (+23pp improvement)
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong className="text-white">$185 CAC,</strong> $420 LTV → 2.3x LTV/CAC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">-42%</div>
                <div className="text-sm text-purple-200">CAC reduction</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">+75%</div>
                <div className="text-sm text-purple-200">LTV improvement</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">3.8x</div>
                <div className="text-sm text-purple-200">ROI on optimization</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl">
              <p className="text-purple-100 leading-relaxed text-sm">
                <strong className="text-white">Key drivers:</strong> Segmented offers reduced wasted spend on high-intent users. Split payouts ($50 + $150) improved early engagement and reduced churn. Lifecycle nudges recovered 18% of drop-offs. Fraud detection blocked 4% of abusive signups before payout.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experimentation Roadmap - Timeline Style */}
      <div className="bg-gray-100 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              3-Phase Testing Roadmap
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Move from baseline validation → segment optimization → predictive intelligence
            </p>

            {/* Timeline visualization */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"></div>

              <div className="space-y-12">
                {/* Phase 1 */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold flex items-center justify-center text-2xl shadow-lg border-4 border-white">
                    1
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border-2 border-blue-200 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">Months 1-2</div>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Baseline Optimization</h3>
                    <p className="text-gray-700 mb-6">
                      <strong>Goal:</strong> Establish fundamental conversion economics and elasticity curves
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: Incentive Amount</div>
                        <div className="text-sm text-gray-700">$100 vs $150 vs $200 vs $250</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: Qualification Threshold</div>
                        <div className="text-sm text-gray-700">DD $200 vs $500 vs $1,000</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: Messaging Angle</div>
                        <div className="text-sm text-gray-700">Benefit vs urgency vs social proof</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: Landing Page Format</div>
                        <div className="text-sm text-gray-700">Long-form vs short-form</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4">
                      <Lightbulb className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong>Expected Learning:</strong> Baseline elasticity curve, optimal offer structure, CAC benchmarks
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white font-bold flex items-center justify-center text-2xl shadow-lg border-4 border-white">
                    2
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border-2 border-purple-200 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">Months 3-5</div>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Segment-Based Personalization</h3>
                    <p className="text-gray-700 mb-6">
                      <strong>Goal:</strong> Tailor offers and messaging by user segment and channel
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: Channel-Specific Offers</div>
                        <div className="text-sm text-gray-700">Meta vs TikTok vs Paid Search</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: Intent-Based Allocation</div>
                        <div className="text-sm text-gray-700">High-intent vs passive prospects</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: Activation Sequences</div>
                        <div className="text-sm text-gray-700">Personalized email/SMS by segment</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: Creative Matching</div>
                        <div className="text-sm text-gray-700">Segment-specific value props</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-4">
                      <Lightbulb className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong>Expected Learning:</strong> Which segments respond to which levers, optimal offer by channel, personalization lift
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white font-bold flex items-center justify-center text-2xl shadow-lg border-4 border-white">
                    3
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border-2 border-green-200 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">Months 6+</div>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Optimization</h3>
                    <p className="text-gray-700 mb-6">
                      <strong>Goal:</strong> Scale with predictive models and dynamic systems
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: ML-Powered Allocation</div>
                        <div className="text-sm text-gray-700">Incentive by predicted LTV</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: Dynamic Offers</div>
                        <div className="text-sm text-gray-700">Multi-armed bandit optimization</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: AI Lifecycle Triggers</div>
                        <div className="text-sm text-gray-700">Predictive nudge timing</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2 text-sm">Test: Cross-Sell Timing</div>
                        <div className="text-sm text-gray-700">Post-activation upsell optimization</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-4">
                      <Lightbulb className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong>Expected Learning:</strong> Maximize efficiency through intelligent automation, optimal budget allocation, real-time optimization
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary callout */}
            <div className="mt-12 bg-white border-2 border-gray-300 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <BarChart3 className="h-6 w-6 text-gray-600 flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Sequential learning approach:</strong> Each phase builds on insights from the previous. Phase 1 establishes baseline metrics. Phase 2 adds segmentation to improve efficiency. Phase 3 layers in predictive intelligence for scale.
                </div>
              </div>
            </div>
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

      {/* Key Takeaways - Grid Format */}
      <div className="bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What makes this work</h2>
            <p className="text-xl text-gray-600 mb-12">Four principles that separate strategic growth from campaign tactics</p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-400 transition-colors">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Behavior over volume</h3>
                <p className="text-gray-700 leading-relaxed">
                  Signups are vanity metrics. Direct deposit setup and recurring usage are what matter. Tie incentives to actions that predict LTV, not attention.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-400 transition-colors">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Economics discipline</h3>
                <p className="text-gray-700 leading-relaxed">
                  Acquisition without activation destroys unit economics. Monitor LTV/CAC relentlessly. Set guardrails. Know when to pause spending.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 transition-colors">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Segmentation wins</h3>
                <p className="text-gray-700 leading-relaxed">
                  Blanket offers waste money. High-intent users need less. Passive prospects need more. Optimize spend by predicted value, not averages.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 transition-colors">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Test everything</h3>
                <p className="text-gray-700 leading-relaxed">
                  Don't guess. Test amount, threshold, timing, payout structure. Build elasticity curves. Learn what works, double down on winners.
                </p>
              </div>
            </div>

            {/* Final thought */}
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-10 text-center text-white">
              <Quote className="h-10 w-10 text-blue-300 mx-auto mb-6" />
              <p className="text-2xl font-bold mb-4 leading-relaxed">
                "Growth strategy isn't about finding clever hacks. It's about understanding behavior, respecting economics, and designing systems that scale."
              </p>
              <div className="h-px bg-white/20 max-w-xs mx-auto my-6"></div>
              <p className="text-blue-200 text-sm">
                This is how you turn incentives into a sustainable acquisition engine—not just a one-time campaign.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
