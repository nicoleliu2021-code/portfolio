import ResumeTailor from "@/components/ai-resume-tailor/ResumeTailor";

export const metadata = {
  title: "AI Resume Tailor | Product Manager Portfolio",
  description: "Paste a job description and see how my experience aligns. Get tailored resume bullets, key skills, and recommended case studies.",
};

export default function AIResumeTailorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ResumeTailor />
    </div>
  );
}
