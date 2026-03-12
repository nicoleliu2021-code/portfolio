import { Experiment } from "@/types";
import { TrendingUp, TrendingDown, Minus, ArrowRight } from "lucide-react";

interface ExperimentCardProps {
  experiment: Experiment;
}

const decisionColors = {
  Launch: "bg-green-100 text-green-700 border-green-200",
  Iterate: "bg-blue-100 text-blue-700 border-blue-200",
  Retest: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Stop: "bg-red-100 text-red-700 border-red-200",
};

const categoryColors = {
  Growth: "bg-purple-100 text-purple-700",
  CRO: "bg-blue-100 text-blue-700",
  Acquisition: "bg-green-100 text-green-700",
  Personalization: "bg-pink-100 text-pink-700",
  "Product Discovery": "bg-orange-100 text-orange-700",
};

export default function ExperimentCard({ experiment }: ExperimentCardProps) {
  const getLiftIcon = () => {
    if (!experiment.lift) return <Minus className="h-4 w-4" />;
    const liftValue = parseInt(experiment.lift);
    if (liftValue > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (liftValue < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-600" />;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[experiment.category]}`}>
              {experiment.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${decisionColors[experiment.decision]}`}>
              {experiment.decision}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900">{experiment.name}</h3>
        </div>
      </div>

      {/* Problem */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-1">Problem</p>
        <p className="text-sm text-gray-600">{experiment.problem}</p>
      </div>

      {/* Hypothesis */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-1">Hypothesis</p>
        <p className="text-sm text-gray-600">{experiment.hypothesis}</p>
      </div>

      {/* Test Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Segment</p>
          <p className="text-sm font-medium text-gray-900">{experiment.userSegment}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">KPI</p>
          <p className="text-sm font-medium text-gray-900">{experiment.kpi}</p>
        </div>
      </div>

      {/* Result */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Result</p>
        <p className="text-sm text-gray-600 mb-2">{experiment.result}</p>
        <div className="flex items-center gap-4">
          {experiment.lift && (
            <div className="flex items-center gap-1">
              {getLiftIcon()}
              <span className="text-sm font-bold text-gray-900">{experiment.lift}</span>
            </div>
          )}
          {experiment.confidence && (
            <div className="text-sm text-gray-600">
              {experiment.confidence} confidence
            </div>
          )}
        </div>
      </div>

      {/* Variant */}
      <div className="text-sm text-gray-600">
        <span className="font-medium">Variant:</span> {experiment.testVariant}
      </div>
    </div>
  );
}
