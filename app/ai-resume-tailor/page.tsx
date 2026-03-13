import ResumeTailor from "@/components/ai-resume-tailor/ResumeTailor";

export const metadata = {
  title: "AI Resume Tailor | Tailor Your Resume in Seconds",
  description: "Paste a job description and get ATS-optimized resume bullets, keyword matches, and tailored content instantly. Free AI-powered resume optimization tool.",
  keywords: ["resume tailor", "ATS optimization", "job application", "resume keywords", "AI resume", "resume optimizer"],
};

export default function AIResumeTailorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ResumeTailor />
    </div>
  );
}
