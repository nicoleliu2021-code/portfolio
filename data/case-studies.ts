import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "rocket-mortgage-cro",
    title: "CRO & Funnel Optimization",
    company: "Rocket Mortgage",
    role: "Digital Product Manager",
    duration: "2024-Present",
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
    duration: "2021-2023",
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
    id: "analytics-consulting",
    title: "Analytics Deep Dive: Career Transition Research",
    company: "Independent Research",
    role: "Career Transition / Skill Building",
    duration: "2023",
    category: "Product",
    thumbnail: "/images/analytics-consulting.jpg",
    problem: "After three years in growth marketing at Upstart, I wanted to transition deeper into product analytics and experimentation. Rather than immediately jumping into another role, I took time to deepen my technical analytics skills, study best practices, and create work samples that demonstrated capabilities beyond marketing attribution.",
    opportunity: "Use this transition period to master SQL, build analytics frameworks from scratch, study experimentation methodology in depth, and create portfolio pieces showing product analytics thinking—not just marketing analytics.",
    hypothesis: "By spending focused time building analytics systems, documenting methodologies, and creating reusable frameworks, I could transition from growth marketing into more technical product management roles with strong data foundations.",
    strategy: `**Technical Skill Development:**
- Master advanced SQL for product analytics (cohorts, funnels, retention)
- Learn data visualization tools (Looker, Tableau) beyond basic dashboards
- Study statistical methods for experimentation (Bayesian, sequential testing)
- Understand data warehouse architecture and ETL concepts

**Framework Creation:**
- Build reusable experimentation framework and decision trees
- Create product metrics templates for different business models
- Document analytics best practices and common pitfalls
- Design sample dashboards for various use cases

**Hands-On Projects:**
- Volunteer analytics work with 2 early-stage startups (unpaid)
- Analyze public datasets to practice SQL and visualization
- Build sample analytics infrastructure as portfolio pieces
- Write documentation as if setting up analytics for a new company`,
    execution: `**Project 1: B2B SaaS Analytics Framework (Volunteer)**
- Volunteered with seed-stage SaaS startup to build analytics foundations
- Designed event tracking schema for their onboarding flow (15 key events)
- Wrote SQL queries analyzing activation patterns (cohort analysis, drop-off points)
- Created Looker dashboard mockups for signup → activation → retention
- Documented A/B testing methodology for their first experiments
- **Learning:** Hands-on experience with product activation metrics and SQL implementation

**Project 2: Mobile App Analytics Study (Volunteer)**
- Helped early-stage consumer app map their user journey
- Set up basic event tracking taxonomy in Amplitude (learning the tool)
- Built sample dashboards for MAU, retention curves, and engagement metrics
- Wrote experimentation guidelines document based on their use cases
- Practiced explaining statistical concepts to non-technical team
- **Learning:** Mobile app metrics are different from web; engagement patterns vary by use case

**Self-Directed Learning:**
- Completed 20+ SQL exercises on Mode Analytics and DataCamp
- Built sample dashboards in Tableau using public datasets
- Read research papers on experimentation (Kohavi, Netflix tech blog)
- Created reusable templates: sample size calculator, experiment brief, metric definition doc
- Studied bayesian methods and sequential testing approaches`,
    metrics: [
      { label: "Volunteer Projects", value: "2", change: "unpaid experience" },
      { label: "SQL Queries Written", value: "50+", change: "practice & real work" },
      { label: "Frameworks Created", value: "5", change: "reusable templates" },
      { label: "Tools Learned", value: "4", change: "Looker, Tableau, Mode, Amplitude" },
    ],
    learnings: [
      "Volunteer work provides real learning—even unpaid projects teach you more than courses because constraints are real",
      "SQL proficiency takes practice—moved from basic queries to complex cohort analysis over 6 months of daily practice",
      "Analytics frameworks are transferable—the same funnel analysis approach works across B2B, B2C, marketplace models",
      "Documentation is a skill—writing clear metric definitions and experiment guidelines is harder than it looks",
      "Statistical knowledge is essential—can't be a credible analytics PM without understanding sample sizes, p-values, and power",
      "Career transitions require proof—volunteer work and frameworks became talking points in interviews for Rocket Mortgage role",
    ],
    tags: ["Analytics", "Career Transition", "SQL", "Experimentation", "Self-Directed Learning"],
  },
  {
    id: "web-app-1",
    title: "AI-Powered Resume Builder",
    company: "Personal Project",
    role: "Product Builder",
    duration: "2025",
    category: "Builder",
    thumbnail: "/images/resume-builder.jpg",
    link: "https://resume-tailor-ai-nine.vercel.app",
    problem: "As a PM, I wanted to deeply understand AI integration, LLM prompting, and building consumer products. Rather than just reading about it, I decided to build a real product that solves a problem I personally experienced: tailoring resumes for different roles.",
    opportunity: "This project was an opportunity to master the full product development lifecycle—from idea to shipped product—while learning AI/ML integration, modern web development, and user-centric design.",
    hypothesis: "By building an AI-powered tool from scratch, I can demonstrate technical depth, product thinking, and the ability to ship quickly—skills that make me a better PM and collaborator with engineering teams.",
    strategy: `**Learning Goals:**
- Master GPT-4 API integration and prompt engineering
- Build production-ready Next.js application
- Learn PDF generation and client-side data handling
- Practice rapid prototyping and user feedback loops

**Technical Stack Chosen:**
- Next.js 14 (App Router) for modern React patterns
- OpenAI GPT-4 API for intelligent content analysis
- TypeScript for type safety and better DX
- Tailwind CSS for rapid UI development
- jsPDF for client-side PDF generation
- localStorage for privacy-first data persistence

**Product Principles:**
- Ship fast: MVP in 2 weeks
- Solve one problem exceptionally well
- Free to use, no monetization complexity
- Privacy-first: all data stays in browser`,
    execution: `**Week 1: Learning & Setup**
- Deep dive into OpenAI API documentation
- Prototyped 10+ prompt variations for JD analysis
- Set up Next.js project with TypeScript
- Designed component architecture and data flow

**Week 2: Core Feature Development**
- Built job description parser with GPT-4
- Implemented theme extraction algorithm
- Created resume template system with customization
- Added real-time preview functionality

**Week 3: Polish & Testing**
- Built PDF export with professional formatting
- Added copy-to-clipboard for each section
- Implemented browser storage for user data
- Beta tested with 10 friends in job search

**Week 4: Launch & Iteration**
- Deployed to Vercel (learned CI/CD)
- Soft launched on LinkedIn for feedback
- Iterated on prompts based on edge cases
- Added skill matching based on user requests`,
    metrics: [
      { label: "Development Time", value: "4 weeks", change: "idea to launch" },
      { label: "Technologies Learned", value: "6+", change: "new skills" },
      { label: "Code Commits", value: "127", change: "" },
      { label: "API Integrations", value: "3", change: "OpenAI, Vercel, Analytics" },
    ],
    learnings: [
      "AI prompt engineering is an art—took 20+ iterations to get GPT-4 outputs consistent and useful",
      "Shipping early reveals assumptions—initial design was over-engineered; users wanted simple and fast",
      "Technical understanding improves PM skills—can now have deeper conversations with engineers about APIs, state management, and performance",
      "Building forces product decisions—every feature requires tradeoffs that become visceral when you're the one implementing",
      "Modern web development moves fast—Next.js 14 App Router, Server Components, and Vercel deployment were all new concepts I mastered",
      "User feedback is humbling—my initial UI was confusing; real users showed me what 'intuitive' actually means",
    ],
    tags: ["Builder", "AI/LLM", "Next.js", "TypeScript", "Full-Stack", "Product Development"],
  },
  {
    id: "web-app-2",
    title: "Tutor Marketplace Platform",
    company: "Personal Project",
    role: "Product Builder",
    duration: "December 2025",
    category: "Builder",
    thumbnail: "/images/tutor-marketplace.jpg",
    problem: "I wanted to understand marketplace dynamics firsthand—the cold start problem, two-sided liquidity, trust mechanisms, and payment flows. Reading case studies isn't the same as building, so I chose to create a real marketplace and experience the challenges myself.",
    opportunity: "Build a functional two-sided marketplace to learn: authentication systems, real-time messaging, payment integration (Stripe), review systems, and the product decisions required to balance supply and demand.",
    hypothesis: "By building a marketplace end-to-end, I'll gain hands-on experience with complex product challenges that will make me a better PM for platform products. The goal is learning, not revenue.",
    strategy: `**Learning Objectives:**
- Master two-sided marketplace dynamics (supply/demand balance)
- Implement secure authentication and user roles
- Integrate payment processing (Stripe API)
- Build real-time messaging system
- Create review and rating mechanisms
- Learn database design for relational data

**Technical Challenges to Solve:**
- User authentication with different roles (tutor vs. parent)
- Search and filtering with multiple parameters
- Real-time chat with message persistence
- Payment flow with platform fee calculation
- Review system with verification
- Profile management with image uploads

**Tech Stack:**
- Next.js with API routes for backend
- PostgreSQL for relational data
- Stripe for payment processing
- Pusher for real-time messaging
- Cloudinary for image hosting
- NextAuth for authentication`,
    execution: `**Month 1: Foundation & Core Features**
- Designed database schema (users, profiles, bookings, messages, reviews)
- Built authentication system with role-based access
- Created profile pages for tutors and parents
- Implemented search with filters (subject, rate, availability)
- Set up basic UI with responsive design

**Month 2: Marketplace Mechanics**
- Integrated Stripe Connect for payments
- Built booking flow with calendar availability
- Created in-app messaging system using Pusher
- Implemented notification system (email + in-app)
- Added profile verification process

**Month 3: Trust & Quality**
- Built review and rating system
- Added tutor credential verification
- Created onboarding flows for both sides
- Implemented dispute resolution workflow
- Added profile completion prompts

**Month 4: Polish & Real-World Testing**
- Soft launched with 10 tutors and 5 families
- Fixed edge cases discovered in production
- Improved search algorithm based on usage
- Added analytics tracking for key flows
- Iterated on UI based on user feedback`,
    metrics: [
      { label: "Features Built", value: "25+", change: "end-to-end" },
      { label: "API Endpoints", value: "18", change: "RESTful" },
      { label: "Database Tables", value: "12", change: "normalized design" },
      { label: "Integrations", value: "5", change: "Stripe, Auth, Storage, etc." },
    ],
    learnings: [
      "Marketplace dynamics are harder than expected—chicken-and-egg problem is real; spent more time on supply recruitment than building",
      "Payment processing is complex—Stripe integration taught me about webhooks, idempotency, and handling edge cases like refunds and disputes",
      "Database design matters—poor initial schema required costly migration; learned importance of thinking through relationships upfront",
      "Trust mechanisms are critical—without reviews and verification, both sides hesitated; trust features should be built early, not later",
      "Real-time features are expensive—messaging system worked but required ongoing infrastructure costs; learned to evaluate feature ROI vs. complexity",
      "Two-sided products require different strategies per side—tutors needed credibility signals, parents needed selection and quality guarantees",
      "Building != scaling—getting 10 users taught me product; getting to 100 would require entirely different skills (marketing, ops)",
    ],
    tags: ["Builder", "Marketplace", "Full-Stack", "Stripe", "Real-Time", "Database Design"],
  },
];
