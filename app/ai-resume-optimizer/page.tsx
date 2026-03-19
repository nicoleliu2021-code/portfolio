import { Metadata } from "next";
import AIResumeOptimizerContent from "./content";

export const metadata: Metadata = {
  title: "ResumeFit: AI Resume Optimization Platform | Case Study",
  description: "Built and launched a production SaaS that analyzes job descriptions, maps them to candidate experience, and generates ATS-optimized resumes. Reached 500+ users and 12% free-to-paid conversion.",
  keywords: ["AI resume optimizer", "product management", "AI product", "SaaS", "GPT-4", "resume tailoring", "ATS optimization", "product case study"],
};

export default function AIResumeOptimizerPage() {
  return <AIResumeOptimizerContent />;
}
