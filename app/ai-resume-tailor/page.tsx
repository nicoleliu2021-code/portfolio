import ResumeTailor from "@/components/ai-resume-tailor/ResumeTailor";

export const metadata = {
  title: "ResumeFit Demo | AI Resume Optimizer",
  description: "Interactive demo of ResumeFit, a production SaaS that uses GPT-4 to optimize resumes for job descriptions. Full version includes PDF/DOCX parsing, 6 templates, and inline AI editing.",
  keywords: ["resume tailor", "ATS optimization", "job application", "resume keywords", "AI resume", "resume optimizer", "ResumeFit"],
};

export default function AIResumeTailorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ResumeTailor />
    </div>
  );
}
