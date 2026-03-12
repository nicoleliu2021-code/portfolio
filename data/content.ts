import { BlogPost, BuildLogEntry, WorkExperience } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "experimentation-framework",
    title: "Building a Growth Experimentation Framework",
    excerpt: "How to build a systematic approach to testing that drives measurable results. Includes hypothesis development, test design, and decision frameworks.",
    date: "2024-01-15",
    readTime: "8 min",
    tags: ["Experimentation", "Growth", "Framework"],
    content: `Experimentation is the foundation of modern product development, but most teams struggle to run tests systematically...`,
  },
  {
    id: "product-discovery",
    title: "Product Discovery: Finding Problems Worth Solving",
    excerpt: "A practical guide to product discovery - from user research to problem validation to solution ideation.",
    date: "2024-02-20",
    readTime: "10 min",
    tags: ["Product Strategy", "Discovery", "User Research"],
    content: `Product discovery is about reducing risk before you build...`,
  },
  {
    id: "ai-product-management",
    title: "AI in Product Management: Hype vs. Reality",
    excerpt: "Where AI actually helps PMs today and where it falls short. Real examples from building AI-powered products.",
    date: "2024-03-10",
    readTime: "12 min",
    tags: ["AI", "Product Management", "Future"],
    content: `Everyone's talking about AI in product management, but what actually works?...`,
  },
];

export const buildLog: BuildLogEntry[] = [
  {
    id: "build-001",
    title: "AI Resume Builder",
    description: "Built an AI-powered tool that analyzes job descriptions and tailors resume content. Uses GPT-4 for analysis, Next.js for the frontend, and generates PDFs on demand.",
    date: "2024-01",
    status: "Completed",
    tags: ["AI", "Next.js", "Product"],
    link: "https://resume-builder.example.com",
    github: "https://github.com/yourusername/resume-builder",
  },
  {
    id: "build-002",
    title: "Tutor Marketplace",
    description: "Two-sided marketplace connecting tutors with students. Features include search, filtering, messaging, reviews, and payment processing. Built with Next.js and Stripe.",
    date: "2023-06",
    status: "Completed",
    tags: ["Marketplace", "Next.js", "Stripe"],
    link: "https://tutor-marketplace.example.com",
  },
  {
    id: "build-003",
    title: "Product Metrics Dashboard",
    description: "Building a real-time analytics dashboard that tracks key product metrics across funnel stages. Experimenting with data visualization and automated anomaly detection.",
    date: "2024-03",
    status: "In Progress",
    tags: ["Analytics", "Dashboard", "Data Viz"],
  },
  {
    id: "build-004",
    title: "AI Product Teardown Generator",
    description: "Experimenting with using AI to generate initial product teardown drafts. Feed it a product URL and it analyzes the experience, identifies friction points, and suggests experiments.",
    date: "2024-02",
    status: "Experiment",
    tags: ["AI", "Product Analysis", "Automation"],
  },
];

export const workExperience: WorkExperience[] = [
  {
    company: "Rocket Mortgage",
    role: "Digital Product Manager",
    duration: "2021 - 2023",
    description: "Led digital product strategy and execution for mortgage application funnel, focusing on CRO, personalization, and experimentation.",
    achievements: [
      "Increased visit-to-lead conversion by 18% through intent-based personalization and funnel optimization",
      "Drove $4.2M in annual revenue through experimentation program (12+ tests)",
      "Reduced application abandonment by 35% through form simplification and UX improvements",
      "Built segmentation framework that improved targeting accuracy by 40%",
      "Led cross-functional team of 8 (engineering, design, data, marketing)",
    ],
  },
  {
    company: "Upstart",
    role: "Growth Marketing Manager",
    duration: "2019 - 2021",
    description: "Owned acquisition strategy and execution across paid channels, focusing on reducing CAC while scaling volume and maintaining credit quality.",
    achievements: [
      "Reduced CAC by 28% while increasing qualified applications by 42% YoY",
      "Improved marketing efficiency (LTV:CAC) by 35% through channel optimization",
      "Scaled monthly applications from 12K to 28K while maintaining quality",
      "Built creative testing framework that improved ad performance by 25%",
      "Managed $8M annual marketing budget across 6 channels",
    ],
  },
  {
    company: "Infineon Technologies",
    role: "Product Marketing Manager",
    duration: "2017 - 2019",
    description: "Led product positioning and go-to-market strategy for semiconductor solutions targeting hyperscalers and enterprise customers.",
    achievements: [
      "Launched 3 product lines with combined $15M in year-1 revenue",
      "Developed positioning strategy that increased product consideration by 45%",
      "Created sales enablement materials that improved win rate by 20%",
      "Built customer advisory board with 8 Fortune 500 companies",
      "Led pricing strategy that improved margins by 12pp",
    ],
  },
  {
    company: "DENSO",
    role: "MBA Strategy Consultant",
    duration: "2016 - 2017",
    description: "Conducted strategic analysis of mobility market and robotaxi opportunity for automotive supplier.",
    achievements: [
      "Analyzed $50B+ robotaxi market opportunity and developed market entry strategy",
      "Recommended product portfolio shifts that influenced $200M+ in R&D allocation",
      "Interviewed 30+ mobility stakeholders (OEMs, tech companies, startups)",
      "Created financial models and business case for autonomous vehicle platform",
      "Presented recommendations to C-suite and board of directors",
    ],
  },
];
