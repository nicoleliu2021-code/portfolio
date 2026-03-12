"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Beaker, ArrowRight, Lightbulb, CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";

interface SimulationResult {
  recommendation: "Launch" | "Iterate" | "Retest" | "Stop";
  reasoning: string;
  nextSteps: string[];
  confidence: string;
}

export default function ExperimentSimulator() {
  const [audience, setAudience] = useState("");
  const [message, setMessage] = useState("");
  const [stage, setStage] = useState("");
  const [metric, setMetric] = useState("");
  const [result, setResult] = useState<SimulationResult | null>(null);

  const runSimulation = () => {
    // Simulate PM decision logic
    const simulation = generateRecommendation(audience, message, stage, metric);
    setResult(simulation);
  };

  const generateRecommendation = (
    audience: string,
    message: string,
    stage: string,
    metric: string
  ): SimulationResult => {
    // Simple decision logic for demo
    const score = Math.random();

    if (score > 0.7) {
      return {
        recommendation: "Launch",
        reasoning: `Strong alignment between ${audience} audience and ${message} messaging at ${stage} stage. Expected to improve ${metric} significantly based on historical patterns.`,
        nextSteps: [
          "Roll out to 100% of traffic",
          "Monitor key metrics for 2 weeks",
          "Document learnings in experiment log",
          "Consider expanding to other segments",
        ],
        confidence: "High (85-95%)",
      };
    } else if (score > 0.4) {
      return {
        recommendation: "Iterate",
        reasoning: `Moderate potential, but ${message} messaging may need refinement for ${audience} segment. ${metric} shows promise but hasn't reached statistical significance.`,
        nextSteps: [
          "Test 2-3 message variations",
          "Refine targeting criteria",
          "Extend test duration to reach significance",
          "Analyze qualitative feedback from users",
        ],
        confidence: "Medium (60-75%)",
      };
    } else if (score > 0.2) {
      return {
        recommendation: "Retest",
        reasoning: `Results are inconclusive. Sample size may be too small, or external factors could be influencing ${metric} at ${stage} stage.`,
        nextSteps: [
          "Increase sample size by 50%",
          "Check for data quality issues",
          "Verify tracking implementation",
          "Consider seasonal or external factors",
        ],
        confidence: "Low (40-60%)",
      };
    } else {
      return {
        recommendation: "Stop",
        reasoning: `${message} messaging is not resonating with ${audience} audience. Negative or neutral impact on ${metric} suggests this approach won't achieve goals.`,
        nextSteps: [
          "Document learnings from failure",
          "Pivot to alternative hypothesis",
          "Conduct user research to understand why",
          "Reallocate resources to higher-potential tests",
        ],
        confidence: "High (80-90%)",
      };
    }
  };

  const reset = () => {
    setAudience("");
    setMessage("");
    setStage("");
    setMetric("");
    setResult(null);
  };

  const getRecommendationIcon = () => {
    if (!result) return null;
    switch (result.recommendation) {
      case "Launch":
        return <CheckCircle className="h-8 w-8 text-green-600" />;
      case "Iterate":
        return <RefreshCw className="h-8 w-8 text-blue-600" />;
      case "Retest":
        return <AlertCircle className="h-8 w-8 text-yellow-600" />;
      case "Stop":
        return <XCircle className="h-8 w-8 text-red-600" />;
    }
  };

  const getRecommendationColor = () => {
    if (!result) return "";
    switch (result.recommendation) {
      case "Launch":
        return "bg-green-50 border-green-200";
      case "Iterate":
        return "bg-blue-50 border-blue-200";
      case "Retest":
        return "bg-yellow-50 border-yellow-200";
      case "Stop":
        return "bg-red-50 border-red-200";
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-purple-100">
          <Beaker className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Experiment Simulator</h2>
          <p className="text-gray-600">
            Select parameters and get a mock PM recommendation
          </p>
        </div>
      </div>

      {!result ? (
        <div className="space-y-6">
          {/* Audience Type */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Audience Type
            </label>
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select audience...</option>
              <option value="First-time buyers">First-time buyers</option>
              <option value="Refinancers">Refinancers</option>
              <option value="Rate shoppers">Rate shoppers</option>
              <option value="All users">All users</option>
              <option value="High-intent users">High-intent users</option>
            </select>
          </div>

          {/* Message Strategy */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Message Strategy
            </label>
            <select
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select message strategy...</option>
              <option value="Pain point focused">Pain point focused</option>
              <option value="Benefit focused">Benefit focused</option>
              <option value="Social proof">Social proof</option>
              <option value="Urgency/scarcity">Urgency/scarcity</option>
              <option value="Trust/security">Trust/security</option>
            </select>
          </div>

          {/* Funnel Stage */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Funnel Stage
            </label>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select funnel stage...</option>
              <option value="Awareness">Awareness (Top of funnel)</option>
              <option value="Consideration">Consideration (Mid funnel)</option>
              <option value="Conversion">Conversion (Bottom of funnel)</option>
              <option value="Retention">Retention (Post-conversion)</option>
            </select>
          </div>

          {/* Metric to Optimize */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Metric to Optimize
            </label>
            <select
              value={metric}
              onChange={(e) => setMetric(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select metric...</option>
              <option value="Click-through rate">Click-through rate</option>
              <option value="Conversion rate">Conversion rate</option>
              <option value="Form completion">Form completion</option>
              <option value="Time on page">Time on page</option>
              <option value="Bounce rate">Bounce rate</option>
              <option value="Revenue per user">Revenue per user</option>
            </select>
          </div>

          <Button
            onClick={runSimulation}
            disabled={!audience || !message || !stage || !metric}
            variant="primary"
            className="w-full"
          >
            Generate Recommendation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Recommendation */}
          <div className={`border-2 rounded-xl p-6 ${getRecommendationColor()}`}>
            <div className="flex items-center gap-4 mb-4">
              {getRecommendationIcon()}
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Recommendation: {result.recommendation}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Confidence: {result.confidence}
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{result.reasoning}</p>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-gray-700" />
              <h4 className="font-bold text-gray-900">Recommended Next Steps</h4>
            </div>
            <ul className="space-y-2">
              {result.nextSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center font-medium mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Parameters Used */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-4">Parameters Used</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Audience</p>
                <p className="text-sm font-medium text-gray-900">{audience}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Message</p>
                <p className="text-sm font-medium text-gray-900">{message}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Stage</p>
                <p className="text-sm font-medium text-gray-900">{stage}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Metric</p>
                <p className="text-sm font-medium text-gray-900">{metric}</p>
              </div>
            </div>
          </div>

          <Button onClick={reset} variant="secondary" className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            Run Another Simulation
          </Button>
        </motion.div>
      )}
    </div>
  );
}
