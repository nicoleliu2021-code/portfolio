export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  category: "Product" | "Growth" | "Strategy" | "Builder";
  thumbnail: string;
  problem: string;
  opportunity: string;
  hypothesis: string;
  strategy: string;
  execution: string;
  metrics: Metric[];
  learnings: string[];
  tags: string[];
  link?: string;
  github?: string;
}

export interface Metric {
  label: string;
  value: string;
  change?: string;
}

export interface Experiment {
  id: string;
  name: string;
  category: "Growth" | "CRO" | "Acquisition" | "Personalization" | "Product Discovery";
  problem: string;
  hypothesis: string;
  userSegment: string;
  testVariant: string;
  kpi: string;
  result: string;
  decision: "Launch" | "Iterate" | "Retest" | "Stop";
  lift?: string;
  confidence?: string;
}

export interface ProductTeardown {
  id: string;
  title: string;
  product: string;
  category: "Marketplace" | "Fintech" | "SaaS" | "AI" | "Consumer";
  date: string;
  thumbnail: string;
  overview: string;
  targetUser: string;
  strengths: string[];
  frictionPoints: string[];
  opportunities: string[];
  experiments: TeardownExperiment[];
  businessImpact: string;
}

export interface TeardownExperiment {
  title: string;
  description: string;
  hypothesis: string;
  effort: "Low" | "Medium" | "High";
  impact: "Low" | "Medium" | "High";
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export interface BuildLogEntry {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "In Progress" | "Completed" | "Experiment";
  tags: string[];
  link?: string;
  github?: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
}
