"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Beaker, ArrowRight, Lightbulb, CheckCircle, XCircle, AlertCircle, RefreshCw, Calculator, TrendingUp, BarChart3, History } from "lucide-react";
import Button from "@/components/ui/Button";

interface SimulationResult {
  id: string;
  timestamp: number;
  recommendation: "Launch" | "Iterate" | "Retest" | "Stop";
  reasoning: string;
  nextSteps: string[];
  confidence: string;
  parameters: {
    audience: string;
    message: string;
    stage: string;
    metric: string;
    traffic: number;
    duration: number;
    baselineRate: number;
    expectedLift: number;
  };
  calculations: {
    sampleSizeNeeded: number;
    weeksToSignificance: number;
    statisticalPower: string;
    minimumDetectableEffect: string;
  };
}

export default function ExperimentSimulator() {
  const [audience, setAudience] = useState("");
  const [message, setMessage] = useState("");
  const [stage, setStage] = useState("");
  const [metric, setMetric] = useState("");
  const [traffic, setTraffic] = useState(50);
  const [duration, setDuration] = useState(2);
  const [baselineRate, setBaselineRate] = useState(10);
  const [expectedLift, setExpectedLift] = useState(15);

  const [result, setResult] = useState<SimulationResult | null>(null);
  const [history, setHistory] = useState<SimulationResult[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("simulationHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const calculateSampleSize = (baseline: number, lift: number): number => {
    // Simplified sample size calculation for two-proportion test
    // Real formula: n = (Z_α + Z_β)² × (p₁(1-p₁) + p₂(1-p₂)) / (p₂ - p₁)²
    const p1 = baseline / 100;
    const p2 = (baseline * (1 + lift / 100)) / 100;
    const effect = p2 - p1;

    // Simplified: rough approximation for 80% power, 95% confidence
    const samplePerVariant = Math.ceil((16 * p1 * (1 - p1)) / (effect * effect));
    return samplePerVariant * 2; // Both control and variant
  };

  const runSimulation = () => {
    // Calculate sample size and statistical measures
    const sampleSize = calculateSampleSize(baselineRate, expectedLift);
    const weeklyTraffic = traffic * 7 * 100; // Assuming traffic is percentage of 100 daily visitors (placeholder)
    const weeksNeeded = Math.ceil(sampleSize / weeklyTraffic);

    // Generate recommendation based on parameters
    const simulation = generateRecommendation(
      audience,
      message,
      stage,
      metric,
      traffic,
      duration,
      baselineRate,
      expectedLift,
      sampleSize,
      weeksNeeded
    );

    setResult(simulation);

    // Save to history
    const updated = [simulation, ...history].slice(0, 10); // Keep last 10
    setHistory(updated);
    localStorage.setItem("simulationHistory", JSON.stringify(updated));
  };

  const generateRecommendation = (
    audience: string,
    message: string,
    stage: string,
    metric: string,
    traffic: number,
    duration: number,
    baseline: number,
    lift: number,
    sampleSize: number,
    weeksNeeded: number
  ): SimulationResult => {
    let score = 0.5; // Base score

    // Adjust score based on parameters
    if (lift >= 20) score += 0.2; // High expected lift is good
    if (lift < 5) score -= 0.3; // Too small to detect

    if (traffic >= 50) score += 0.1; // Good traffic
    if (traffic < 20) score -= 0.2; // Low traffic is risky

    if (duration >= 2) score += 0.1; // Adequate duration
    if (duration < 1) score -= 0.2; // Too short

    if (weeksNeeded <= duration) score += 0.2; // Can reach significance
    if (weeksNeeded > duration * 2) score -= 0.3; // Will take too long

    // Add some randomness for demo purposes
    score += (Math.random() - 0.5) * 0.2;

    const calculations = {
      sampleSizeNeeded: sampleSize,
      weeksToSignificance: weeksNeeded,
      statisticalPower: "80%",
      minimumDetectableEffect: `${(lift * 0.7).toFixed(1)}%`,
    };

    if (score > 0.7) {
      return {
        id: Math.random().toString(36).substring(2, 11),
        timestamp: Date.now(),
        recommendation: "Launch",
        reasoning: `Strong setup with ${traffic}% traffic allocation and ${duration}-week duration. Expected ${lift}% lift on ${metric} is substantial and detectable. ${audience} segment with ${message} messaging at ${stage} stage shows high potential based on similar experiments.`,
        nextSteps: [
          `Roll out to ${traffic}% of ${audience} traffic`,
          `Monitor ${metric} daily for ${duration} weeks`,
          `Aim for ${sampleSize.toLocaleString()} total visitors to reach significance`,
          "Set up automated alerts for anomalies",
          "Document learnings regardless of outcome",
        ],
        confidence: "High (85-95%)",
        parameters: { audience, message, stage, metric, traffic, duration, baselineRate: baseline, expectedLift: lift },
        calculations,
      };
    } else if (score > 0.45) {
      return {
        id: Math.random().toString(36).substring(2, 11),
        timestamp: Date.now(),
        recommendation: "Iterate",
        reasoning: `Setup shows promise but needs refinement. With ${traffic}% traffic and ${duration}-week duration, you'll need ${weeksNeeded} weeks to reach statistical significance. ${lift}% expected lift on ${metric} is moderate. Consider testing 2-3 message variations to find the winner.`,
        nextSteps: [
          "Test 2-3 variations of the core hypothesis",
          `Increase traffic allocation to ${Math.min(traffic + 20, 100)}% if possible`,
          `Extend test duration to ${Math.max(duration + 1, weeksNeeded)} weeks`,
          "Add qualitative feedback collection (surveys, recordings)",
          "Monitor secondary metrics for unintended effects",
        ],
        confidence: "Medium (60-75%)",
        parameters: { audience, message, stage, metric, traffic, duration, baselineRate: baseline, expectedLift: lift },
        calculations,
      };
    } else if (score > 0.25) {
      return {
        id: Math.random().toString(36).substring(2, 11),
        timestamp: Date.now(),
        recommendation: "Retest",
        reasoning: `Current setup has challenges: ${weeksNeeded} weeks needed for significance exceeds ${duration}-week duration. ${lift}% lift may be too small to detect reliably with ${traffic}% traffic. Sample size of ${sampleSize.toLocaleString()} is substantial. Recommend adjusting parameters before launching.`,
        nextSteps: [
          `Increase expected lift target to 20%+ by refining ${message} messaging`,
          `Boost traffic allocation from ${traffic}% to 80-100%`,
          `Extend test duration from ${duration} to ${Math.max(weeksNeeded, 3)} weeks`,
          "Verify tracking implementation before launch",
          "Consider testing on a smaller segment first",
        ],
        confidence: "Low (40-60%)",
        parameters: { audience, message, stage, metric, traffic, duration, baselineRate: baseline, expectedLift: lift },
        calculations,
      };
    } else {
      return {
        id: Math.random().toString(36).substring(2, 11),
        timestamp: Date.now(),
        recommendation: "Stop",
        reasoning: `Setup unlikely to yield actionable results. ${lift}% lift is below minimum detectable effect of ${calculations.minimumDetectableEffect}. ${traffic}% traffic with ${duration}-week duration insufficient for ${sampleSize.toLocaleString()} sample size needed. ${message} messaging with ${audience} at ${stage} shows weak signal in similar tests.`,
        nextSteps: [
          "Revisit core hypothesis - is this the right problem to solve?",
          "Conduct qualitative research before testing",
          "Look for higher-impact opportunities with clearer signals",
          "Consider alternative metrics that might show larger effects",
          "Reallocate resources to experiments with better expected ROI",
        ],
        confidence: "High (80-90%)",
        parameters: { audience, message, stage, metric, traffic, duration, baselineRate: baseline, expectedLift: lift },
        calculations,
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

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("simulationHistory");
  };

  const loadFromHistory = (item: SimulationResult) => {
    setAudience(item.parameters.audience);
    setMessage(item.parameters.message);
    setStage(item.parameters.stage);
    setMetric(item.parameters.metric);
    setTraffic(item.parameters.traffic);
    setDuration(item.parameters.duration);
    setBaselineRate(item.parameters.baselineRate);
    setExpectedLift(item.parameters.expectedLift);
    setShowHistory(false);
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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-purple-100">
            <Beaker className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Experiment Simulator</h2>
            <p className="text-gray-600">
              Configure parameters and get a data-driven recommendation
            </p>
          </div>
        </div>
        {history.length > 0 && (
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <History className="h-4 w-4" />
            History ({history.length})
          </button>
        )}
      </div>

      {/* History Panel */}
      <AnimatePresence>
        {showHistory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 overflow-hidden"
          >
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Recent Simulations</h3>
                <button
                  onClick={clearHistory}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Clear All
                </button>
              </div>
              <div className="space-y-2">
                {history.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => loadFromHistory(item)}
                    className="w-full text-left p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.recommendation === "Launch" ? "bg-green-100 text-green-700" :
                            item.recommendation === "Iterate" ? "bg-blue-100 text-blue-700" :
                            item.recommendation === "Retest" ? "bg-yellow-100 text-yellow-700" :
                            "bg-red-100 text-red-700"
                          }`}>
                            {item.recommendation}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(item.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">
                          {item.parameters.audience} • {item.parameters.message} • {item.parameters.expectedLift}% lift
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!result ? (
        <div className="space-y-6">
          {/* Basic Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <option value="Returning users">Returning users</option>
                <option value="High-intent users">High-intent users</option>
                <option value="Price-sensitive users">Price-sensitive users</option>
                <option value="All users">All users</option>
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
                <option value="Value/price">Value/price</option>
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
                Primary Metric
              </label>
              <select
                value={metric}
                onChange={(e) => setMetric(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="">Select metric...</option>
                <option value="Click-through rate">Click-through rate</option>
                <option value="Conversion rate">Conversion rate</option>
                <option value="Sign-up rate">Sign-up rate</option>
                <option value="Add-to-cart rate">Add-to-cart rate</option>
                <option value="Purchase rate">Purchase rate</option>
                <option value="Revenue per user">Revenue per user</option>
              </select>
            </div>
          </div>

          {/* Advanced Parameters Toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <Calculator className="h-4 w-4" />
            {showAdvanced ? "Hide" : "Show"} Advanced Parameters
          </button>

          {/* Advanced Parameters */}
          <AnimatePresence>
            {showAdvanced && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Traffic Allocation */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Traffic Allocation: {traffic}%
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        step="10"
                        value={traffic}
                        onChange={(e) => setTraffic(parseInt(e.target.value))}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Percentage of traffic exposed to variant
                      </p>
                    </div>

                    {/* Test Duration */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Test Duration: {duration} weeks
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="8"
                        step="1"
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        How long to run the experiment
                      </p>
                    </div>

                    {/* Baseline Conversion Rate */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Baseline Rate: {baselineRate}%
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        step="1"
                        value={baselineRate}
                        onChange={(e) => setBaselineRate(parseInt(e.target.value))}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Current conversion rate
                      </p>
                    </div>

                    {/* Expected Lift */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Expected Lift: +{expectedLift}%
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="50"
                        step="5"
                        value={expectedLift}
                        onChange={(e) => setExpectedLift(parseInt(e.target.value))}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Anticipated improvement
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            onClick={runSimulation}
            disabled={!audience || !message || !stage || !metric}
            variant="primary"
            className="w-full"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Generate Recommendation
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

          {/* Statistical Calculations */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <h4 className="font-bold text-gray-900">Statistical Analysis</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Sample Size Needed</p>
                <p className="text-lg font-bold text-gray-900">
                  {result.calculations.sampleSizeNeeded.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Weeks to Significance</p>
                <p className="text-lg font-bold text-gray-900">
                  {result.calculations.weeksToSignificance}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Statistical Power</p>
                <p className="text-lg font-bold text-gray-900">
                  {result.calculations.statisticalPower}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Min Detectable Effect</p>
                <p className="text-lg font-bold text-gray-900">
                  {result.calculations.minimumDetectableEffect}
                </p>
              </div>
            </div>
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
            <h4 className="font-bold text-gray-900 mb-4">Experiment Parameters</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Audience</p>
                <p className="text-sm font-medium text-gray-900">{result.parameters.audience}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Message</p>
                <p className="text-sm font-medium text-gray-900">{result.parameters.message}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Stage</p>
                <p className="text-sm font-medium text-gray-900">{result.parameters.stage}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Metric</p>
                <p className="text-sm font-medium text-gray-900">{result.parameters.metric}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Traffic</p>
                <p className="text-sm font-medium text-gray-900">{result.parameters.traffic}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Duration</p>
                <p className="text-sm font-medium text-gray-900">{result.parameters.duration} weeks</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Baseline</p>
                <p className="text-sm font-medium text-gray-900">{result.parameters.baselineRate}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Expected Lift</p>
                <p className="text-sm font-medium text-gray-900">+{result.parameters.expectedLift}%</p>
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
