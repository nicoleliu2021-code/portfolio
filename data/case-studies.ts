import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "rocket-mortgage-cro",
    title: "CRO & Funnel Optimization",
    company: "Rocket Mortgage",
    role: "Digital Product Manager",
    duration: "2021-2023",
    category: "Product",
    thumbnail: "/images/rocket-mortgage.jpg",
    problem: "The mortgage application funnel was experiencing significant drop-off at key stages, particularly between initial visit and lead submission. Conversion rates varied widely across different user segments, indicating opportunities for personalization.",
    opportunity: "Through analytics, we identified that different user types (first-time buyers vs. refinancers) had distinct pain points and needed different information at various stages. Intent-based personalization could significantly improve conversion rates.",
    hypothesis: "By implementing user segmentation based on intent signals and personalizing the experience for each segment, we could increase visit-to-lead conversion by 15% and visit-to-application by 10%.",
    strategy: `**Segmentation Framework:**
- Built intent classification model using behavioral signals (pages viewed, time on site, search queries)
- Created three primary segments: First-Time Buyers, Refinancers, and Rate Shoppers

**Personalization Approach:**
- Dynamic content based on user segment
- Progressive disclosure to reduce cognitive load
- Segment-specific CTAs and messaging

**Testing Infrastructure:**
- Established robust A/B testing framework
- Implemented feature flags for rapid iteration
- Created analytics dashboard for real-time monitoring`,
    execution: `**Phase 1: Research & Segmentation (Month 1-2)**
- Conducted user interviews with 30+ customers
- Analyzed funnel data across 2M+ sessions
- Built intent classification algorithm (85% accuracy)

**Phase 2: Experience Design (Month 3-4)**
- Designed personalized flows for each segment
- Created variant experiences for A/B tests
- Collaborated with UX team on wireframes and prototypes

**Phase 3: Testing & Optimization (Month 5-8)**
- Ran 12+ experiments across different funnel stages
- Iterated on winning variants
- Rolled out successful experiences to 100% of traffic

**Phase 4: Scale & Automation (Month 9-12)**
- Automated intent detection
- Built self-serve experimentation platform
- Created playbook for future optimization`,
    metrics: [
      { label: "Visit → Lead Conversion", value: "18.2%", change: "+3.4pp" },
      { label: "Visit → Application", value: "6.8%", change: "+0.9pp" },
      { label: "Qualified Leads", value: "+12%", change: "YoY" },
      { label: "Revenue Impact", value: "$4.2M", change: "Annual" },
    ],
    learnings: [
      "Intent signals are powerful predictors of conversion - simple behavioral cues can dramatically improve personalization accuracy",
      "Progressive disclosure works better than information-heavy pages - users convert better when we show them only what they need at each stage",
      "Speed matters more than we thought - every 100ms delay in page load reduced conversion by 0.5%",
      "Test velocity > test sophistication - running simple tests quickly beats perfectly designed tests that take weeks to implement",
      "Cross-functional alignment is critical - regular syncs with data, engineering, and design teams prevented bottlenecks",
    ],
    tags: ["CRO", "Experimentation", "Personalization", "Fintech", "Product Strategy"],
  },
  {
    id: "upstart-growth",
    title: "Acquisition Strategy & Growth Experiments",
    company: "Upstart",
    role: "Growth Marketing Manager",
    duration: "2019-2021",
    category: "Growth",
    thumbnail: "/images/upstart.jpg",
    problem: "Customer acquisition costs (CAC) were rising across all channels while conversion rates remained flat. The company needed to scale user acquisition profitably while maintaining credit quality standards.",
    opportunity: "Analysis revealed significant variation in channel performance by user cohort. Some channels brought high-intent users at lower CAC, while others had better conversion but higher costs. Optimization opportunity existed in channel mix, creative strategy, and landing page experience.",
    hypothesis: "By implementing a data-driven channel strategy, optimizing creative based on user intent, and improving landing page conversion, we could reduce CAC by 25% while increasing qualified applications by 30%.",
    strategy: `**Channel Optimization:**
- Built LTV:CAC model for each marketing channel
- Implemented incremental contribution analysis
- Created channel performance dashboard

**Creative Strategy:**
- Developed messaging framework for different personas
- A/B tested pain point vs. benefit-focused messaging
- Optimized creative elements (headline, CTA, imagery)

**Landing Page Optimization:**
- Simplified application flow from 8 screens to 4
- Added trust signals and social proof
- Implemented smart defaults based on user data`,
    execution: `**Channel Reallocation:**
- Reallocated budget from low-performing channels to high-ROI channels
- Increased investment in branded search by 40%
- Tested new channels: TikTok, podcasts, influencer partnerships

**Creative Testing:**
- Ran 50+ creative tests across channels
- Implemented dynamic creative optimization
- Built creative performance tracking system

**Conversion Optimization:**
- Redesigned landing pages based on user research
- Reduced form fields by 60%
- Added real-time validation and error prevention`,
    metrics: [
      { label: "CAC Reduction", value: "28%", change: "vs. baseline" },
      { label: "Qualified Applications", value: "+42%", change: "YoY" },
      { label: "Landing Page CVR", value: "31%", change: "+9pp" },
      { label: "Marketing Efficiency", value: "+35%", change: "LTV:CAC improvement" },
    ],
    learnings: [
      "Not all volume is good volume - focusing on qualified users rather than total volume improved overall efficiency",
      "Branded search is undervalued - users searching for your brand have 3x higher conversion and 2x lower CAC",
      "Creative fatigue is real - performance drops 15-20% after 2-3 weeks, requiring constant creative refresh",
      "Landing page speed is a competitive advantage - our fastest pages converted 2x better than slowest",
      "Attribution is complex but critical - multi-touch attribution revealed $2M in wasted spend on low-value touchpoints",
    ],
    tags: ["Growth", "Acquisition", "Marketing", "Fintech", "Data-Driven"],
  },
  {
    id: "web-app-1",
    title: "AI-Powered Resume Builder",
    company: "Personal Project",
    role: "Product Builder",
    duration: "2024",
    category: "Builder",
    thumbnail: "/images/resume-builder.jpg",
    problem: "Job seekers struggle to tailor their resumes for different positions, often submitting generic resumes that don't highlight relevant experience. This results in lower application success rates and wasted time.",
    opportunity: "With advances in AI and LLMs, we can automatically analyze job descriptions and suggest relevant experience, skills, and accomplishments to highlight. This could save job seekers hours of work while improving application quality.",
    hypothesis: "An AI-powered resume builder that analyzes job descriptions and automatically tailors resume content will help users create better, more targeted resumes in 1/10th the time.",
    strategy: `**Product Approach:**
- Build MVP with core functionality: JD analysis, content matching, resume generation
- Focus on simplicity - no complex resume builders, just smart tailoring
- Make it free to attract early users and gather feedback

**Technical Architecture:**
- Next.js for fast, modern web app
- OpenAI API for job description analysis
- Local storage for user data (privacy-first)
- PDF generation for downloadable resumes

**User Flow:**
1. User pastes job description
2. AI extracts key requirements and themes
3. User inputs their experience
4. AI matches experience to job requirements
5. Generate tailored resume with one click`,
    execution: `**Week 1-2: Research & Design**
- Interviewed 15 job seekers about resume pain points
- Analyzed 50+ job descriptions to identify patterns
- Designed simple, focused UI

**Week 3-4: MVP Development**
- Built JD parsing logic with GPT-4
- Created resume template system
- Implemented PDF export

**Week 5-6: Testing & Iteration**
- Beta tested with 20 users
- Gathered feedback and iterated
- Added skill matching feature based on user requests

**Week 7-8: Launch & Distribution**
- Launched on Product Hunt
- Posted in job seeker communities
- Gathered user feedback for v2`,
    metrics: [
      { label: "Users (Month 1)", value: "2,400", change: "" },
      { label: "Resumes Generated", value: "8,600", change: "" },
      { label: "Time Saved (avg)", value: "42 min", change: "per resume" },
      { label: "User Rating", value: "4.8/5", change: "" },
    ],
    learnings: [
      "Solve one problem really well - users wanted a simple tool that did one thing perfectly, not a complex platform",
      "AI works best as a copilot - users wanted suggestions they could edit, not fully automated output",
      "Distribution is harder than building - getting users was 10x harder than building the product",
      "Feedback is gold - early users provided insights that shaped the product direction",
      "Launch fast, iterate faster - waiting for perfection would have delayed learning by months",
    ],
    tags: ["Builder", "AI", "Product Development", "MVP", "User Research"],
  },
  {
    id: "web-app-2",
    title: "Tutor Marketplace Platform",
    company: "Personal Project",
    role: "Product Builder",
    duration: "2023",
    category: "Builder",
    thumbnail: "/images/tutor-marketplace.jpg",
    problem: "Parents struggle to find qualified tutors for their kids, while tutors lack a centralized platform to find students. Existing marketplaces are cluttered, expensive (30% fees), and don't facilitate quality matching.",
    opportunity: "Build a modern, low-fee marketplace that prioritizes quality matching, transparent pricing, and great user experience for both sides of the market.",
    hypothesis: "A marketplace that charges lower fees (10% vs. 30%), has simple matching, and focuses on quality will attract both tutors and students, creating a sustainable two-sided marketplace.",
    strategy: `**Marketplace Strategy:**
- Start with one city (Ann Arbor) to achieve density
- Focus on high school subjects (highest demand)
- Recruit high-quality tutors first (supply-side focus)

**Matching Approach:**
- Simple profile system (subject, rate, availability, reviews)
- Search and filter functionality
- Direct messaging for coordination

**Monetization:**
- 10% platform fee (vs. 30% competitors)
- Free for tutors to list
- Free for parents to search

**Growth Tactics:**
- Partner with local schools for tutor recruitment
- Parent referral program
- Local Facebook groups and community boards`,
    execution: `**Month 1: MVP Development**
- Built profile system for tutors and students
- Created search and messaging functionality
- Implemented basic payment processing

**Month 2: Tutor Recruitment**
- Recruited 50 tutors through university partnerships
- Verified credentials and conducted interviews
- Created tutor onboarding process

**Month 3: Parent Acquisition**
- Launched in local Facebook groups
- Partnered with 3 schools for promotion
- Ran small Google Ads test campaign

**Month 4-6: Iteration & Scale**
- Added review system based on feedback
- Improved matching algorithm with filters
- Expanded to nearby cities`,
    metrics: [
      { label: "Active Tutors", value: "180", change: "" },
      { label: "Monthly Sessions", value: "450", change: "" },
      { label: "GMV (Month 6)", value: "$18K", change: "" },
      { label: "Avg Tutor Rating", value: "4.9/5", change: "" },
    ],
    learnings: [
      "Marketplace is hard - need to balance supply and demand, which requires different strategies for each side",
      "Start hyperlocal - trying to serve multiple cities diluted efforts; focus on one market first",
      "Trust is everything - reviews, verification, and responsive support were critical to building trust",
      "Pricing power matters - lower fees attracted tutors but made unit economics challenging",
      "Retention > Acquisition - focusing on repeat bookings was more valuable than new customer acquisition",
    ],
    tags: ["Builder", "Marketplace", "Two-Sided Platform", "Product Development", "Growth"],
  },
];
