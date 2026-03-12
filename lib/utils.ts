import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function parseJobDescription(jd: string): string[] {
  const themes = [
    { keyword: ["strategy", "strategic", "roadmap", "vision", "planning"], theme: "Product Strategy" },
    { keyword: ["growth", "acquisition", "retention", "funnel", "conversion"], theme: "Growth" },
    { keyword: ["experiment", "a/b test", "testing", "optimization", "cro"], theme: "Experimentation" },
    { keyword: ["gtm", "go-to-market", "launch", "positioning", "marketing"], theme: "GTM" },
    { keyword: ["analytics", "data", "metrics", "kpi", "measurement"], theme: "Analytics" },
    { keyword: ["ai", "machine learning", "ml", "artificial intelligence", "llm"], theme: "AI" },
    { keyword: ["leadership", "team", "cross-functional", "stakeholder"], theme: "Leadership" },
    { keyword: ["user research", "ux", "design", "user experience", "prototype"], theme: "UX/Design" },
    { keyword: ["technical", "engineering", "api", "sql", "code"], theme: "Technical" },
  ];

  const jdLower = jd.toLowerCase();
  const matchedThemes: string[] = [];

  themes.forEach(({ keyword, theme }) => {
    const matches = keyword.some(kw => jdLower.includes(kw));
    if (matches && !matchedThemes.includes(theme)) {
      matchedThemes.push(theme);
    }
  });

  return matchedThemes;
}
