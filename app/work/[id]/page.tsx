import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import CaseStudyDetail from "@/components/case-studies/CaseStudyDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | ${caseStudy.company}`,
    description: caseStudy.problem.substring(0, 160),
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}
