import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "rocket-mortgage-cro",
    title: "CRO & Funnel Optimization",
    company: "Rocket Mortgage",
    role: "Digital Product Manager",
    duration: "March 2024 - Present",
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
    id: "chime-cash-offer",
    title: "Strategic Framework: Launching Chime's $350 Cash Offer",
    company: "Chime (Strategy Case Study)",
    role: "Growth Product Marketing Strategy",
    duration: "Strategic Planning Exercise",
    category: "Growth",
    thumbnail: "/images/chime-cash-offer.webp",
    problem: "Chime wants to launch a $350 cash offer to accelerate new account acquisition in a competitive neobank market. The challenge: How do we design, test, and scale this campaign to maximize user acquisition while maintaining profitability and preventing fraud? What's the right incentive amount? How should we structure qualifying requirements? Which channels will perform best?",
    opportunity: "Develop a comprehensive launch strategy that balances aggressive growth targets with unit economics. Opportunity to demonstrate strategic thinking: defining success metrics, designing experiments to find optimal configuration, building risk mitigation systems, and creating a scalable playbook.",
    hypothesis: "By systematically testing incentive amounts, qualifying requirements, channel mix, and creative approaches through a phased rollout, we can identify the optimal campaign structure that drives significant volume lift while maintaining positive unit economics and acceptable fraud rates.",
    strategy: `**Step 1: Define Business Objectives & Success Criteria**

Before launching, align stakeholders on what success looks like:

*Primary Goal:* Drive incremental new account growth
- Target: 3x baseline new account acquisition rate
- Constraint: Maintain LTV:CAC ratio ≥ 2.5x within 12 months
- Risk tolerance: Max 5% fraud rate, $15M campaign budget

*Key Questions to Answer Through Testing:*
1. What incentive amount optimizes volume vs. cost?
2. What qualifying actions balance acquisition with activation?
3. Which channels drive highest-quality users at scale?
4. How do we prevent fraud without killing conversion?

*Success Metrics Framework:*
- Acquisition: New accounts, cost per acquisition (CPA)
- Quality: Qualification rate, direct deposit adoption, 90-day retention
- Economics: LTV, payback period, incremental revenue
- Risk: Fraud rate, abuse patterns, legal/compliance issues

**Step 2: Incentive Amount Testing (Find the Sweet Spot)**

*The Core Question:* Is $350 the right number, or should we test $200, $250, $300?

*Hypothesis:* Higher incentives drive volume but attract bonus hunters; need to find inflection point where volume gains justify cost increases.

*Experimental Design:*
- Run multi-arm test in controlled markets (10% of budget, 4 weeks)
- Test arms: $200 / $250 / $300 / $350 cash offers
- Hold constant: qualifying requirements, channels, creative
- Measure: signup volume, qualification rate, 90-day LTV by cohort

*Decision Framework:*
- If $350 drives <25% more volume than $300 → not worth premium cost
- If $350 attracts materially worse users (lower qualification rate, LTV) → scale back
- If $350 drives 50%+ volume lift with similar user quality → winner

*Risk Mitigation:*
- Cap test spend at $1.5M across all arms
- Real-time monitoring for fraud spikes (auto-pause at 7% fraud rate)
- Exit criteria: if any arm hits unsustainable CAC ($250+), kill it

**Step 3: Qualifying Requirements Design**

*The Core Question:* How do we structure qualifications to ensure high-quality users without creating too much friction?

*Hypothesis:* Direct deposit requirements filter for "primary account" switchers; spending thresholds prove activation; time windows encourage urgency.

*Variables to Test:*
1. Direct deposit threshold: $200 / $500 / $1,000
2. Debit card purchases: 5 / 10 / 15 transactions
3. Time window: 30 / 45 / 60 days
4. Bonus payout structure: All at once vs. tiered ($100 at deposit + $250 at transactions)

*Experimental Approach:*
- Test 3 qualification structures simultaneously (market-level randomization)
- Variant A (Low friction): $200 DD + 5 purchases in 60 days
- Variant B (Medium friction): $500 DD + 10 purchases in 45 days
- Variant C (High friction): $1,000 DD + 15 purchases in 30 days

*Decision Criteria:*
- Track: Qualification rate, time-to-qualify, 90-day retention, LTV
- Goal: Maximize qualification rate while maintaining retention ≥ 70%
- If Variant A qualifies 80% but retains only 50% → too loose
- If Variant C qualifies 40% but retains 90% → too tight
- Winning structure likely in the middle (Variant B)

**Step 4: Fraud Prevention Strategy**

*The Core Question:* How do we detect and prevent fraud before it scales?

*Pre-Launch Risk Assessment:*
- Analyze historical promo abuse patterns from previous campaigns
- Identify red flags: synthetic IDs, velocity attacks, return abuse
- Set acceptable fraud loss budget: 3-5% of total campaign spend

*Multi-Layer Detection System:*
1. **Application Level:** Device fingerprinting, email/phone validation, OFAC screening
2. **Behavioral Signals:** Velocity checks (max 5 signups per device/IP), suspicious direct deposit patterns
3. **Post-Qualification:** Manual review for high-risk cases (flagged by ML model)
4. **Bonus Clawback:** 90-day monitoring window, automated reversals for confirmed fraud

*Monitoring Dashboard (Real-Time):*
- Fraud rate by channel, geography, device type
- Auto-pause triggers: If fraud rate >7% or daily losses >$50K, pause campaign
- Daily cross-functional review with Fraud/Risk teams

*Testing Approach:*
- Soft launch with enhanced monitoring (2 weeks, 5% budget)
- Stress-test fraud systems with known attack patterns
- Iterate detection rules before full-scale launch

**Step 5: Channel Strategy & Budget Allocation**

*The Core Question:* Which channels drive the highest-quality users at the lowest cost?

*Initial Hypothesis:*
- Paid Social (Meta/TikTok): High volume, younger demo, cost-effective
- Paid Search: High intent, competitor keywords, premium CPAs
- Affiliates: Scalable volume, deal-seekers, variable quality
- Organic/Referral: Best quality, lowest CAC, hardest to scale

*Phased Budget Allocation:*
- **Week 1-2 (Learning Phase):** Allocate 25% budget evenly across channels
- **Week 3-4 (Optimization):** Shift budget to top 2 performing channels
- **Week 5+ (Scale):** 60% to winners, 20% to second-tier, 20% to testing

*Channel-Level Experiments:*
- Meta: Test lookalike audiences (existing customers vs. competitor customers vs. high-income zip codes)
- TikTok: Test creator partnerships vs. in-feed ads vs. branded hashtag challenge
- Paid Search: Test branded vs. competitor keywords vs. generic "best bank account"
- Affiliates: Test personal finance bloggers vs. deal sites (Slickdeals, Reddit) vs. influencers

*Decision Framework:*
- Measure CAC, qualification rate, 90-day LTV by channel
- Goal: CAC <$150, qualification rate >60%, LTV:CAC >2.5x
- Reallocate weekly based on performance
- Kill underperforming channels by Week 6

**Step 6: Creative Testing & Messaging**

*The Core Question:* What messaging resonates with our target audience?

*Message Testing Framework:*
1. **Value Framing:** "$350 cash bonus" vs. "Get $350" vs. "Earn up to $350"
2. **Emotional Appeal:** Financial security vs. rewarding yourself vs. beating banks
3. **Urgency:** "Limited time" vs. "While supplies last" vs. no urgency
4. **Social Proof:** "500K+ members" vs. testimonials vs. press mentions

*Creative Testing Grid (Week 1-3):*
- Test 8-12 creative variants per channel
- Rotate new creatives every 2 weeks (combat fatigue)
- A/B test headline, imagery, CTA button separately
- Winner criteria: CTR + conversion rate + quality score

*Audience Segmentation:*
- Students: "Build your financial future, get $350 to start"
- Gig workers: "Your bank should work as hard as you do + $350 bonus"
- Paycheck-to-paycheck: "Get paid early + $350 cash bonus"

**Step 7: Lifecycle & Activation Strategy**

*The Core Question:* How do we maximize qualification rates after signup?

*Drop-Off Analysis:*
- Identify where users stall: No direct deposit? Not enough transactions?
- Hypothesis: Users forget requirements or underestimate effort

*Activation Tactics:*
1. **Progress Tracking:** In-app widget showing "You're $150 away from $350!"
2. **Email Nurture:** Day 7, 14, 30, 45 reminders with clear next steps
3. **SMS Nudges:** Day 30 "Set up direct deposit in 2 minutes" with deep link
4. **Push Notifications:** "You have 15 days left to claim your $350!"
5. **Retargeting Ads:** "Don't miss out on $350—complete your direct deposit"

*A/B Tests:*
- Test incentive framing: "$350 waiting for you" vs. "You're almost there!"
- Test send frequency: Daily vs. weekly vs. milestone-based
- Test channel mix: Email-only vs. email+SMS vs. omnichannel

*Goal:* Increase qualification rate from 55% (baseline) to 70%+`,
    execution: `**Phase 1: Pre-Launch Foundation (Weeks 1-4)**

*Objective:* Build infrastructure, align teams, secure approvals

*Key Activities:*
- Legal/Compliance review: 50-state promotional terms approval
- Fraud system setup: ML models, monitoring dashboards, auto-pause triggers
- Landing page variants: Design 6 versions for A/B testing
- Channel account setup: Meta Business Manager, Google Ads, affiliate contracts
- Cross-functional alignment: Weekly syncs with Product, Engineering, Risk, Finance, Legal
- Budget approval: Present business case to CFO with LTV models
- Success metrics dashboard: Build real-time tracking in Looker/Tableau

*Deliverables:*
- Legal approval documentation
- Fraud prevention playbook
- Campaign landing pages (6 variants)
- Analytics instrumentation complete
- Campaign budget approved: $15M
- Launch readiness review with exec team

**Phase 2: Soft Launch Testing (Weeks 5-8)**

*Objective:* Test core assumptions with 10% of budget before scaling

*Geographic Markets:* Texas, Florida, Georgia, Ohio, Colorado (5 states, 15% of user base)

*What We're Testing:*
1. Incentive amounts: $200 vs $250 vs $300 vs $350 (random assignment)
2. Qualifying requirements: 3 variants (Low/Medium/High friction)
3. Creative messaging: 8 variants per channel
4. Fraud detection: Validate ML models with real traffic

*Channels:* Focus on Meta + TikTok for quick learning

*Success Criteria (Must Pass to Scale):*
- CAC <$175 (with buffer from $150 goal)
- Qualification rate >55%
- Fraud rate <5%
- 90-day retention >65%
- No major legal/compliance issues

*Weekly Review Cadence:*
- Day 3: First data check, fraud monitoring
- Day 7: Channel performance review, budget reallocation
- Day 14: Creative refresh based on fatigue signals
- Day 21: Mid-test review with stakeholders
- Day 28: Final analysis, go/no-go decision for national launch

*Key Questions to Answer:*
- Is $350 worth the premium cost vs. $300?
- Which qualifying structure balances volume and quality?
- Which creative messages drive best results?
- Are fraud systems catching abuse effectively?

**Phase 3: Optimization & Scale Decision (Weeks 9-10)**

*Objective:* Analyze soft launch data and build national rollout plan

*Data Analysis:*
- Cohort analysis: Compare LTV by incentive amount, qualification structure, channel
- Statistical significance: Ensure sample sizes sufficient (>1,000 users per variant)
- Fraud deep-dive: Pattern analysis, false positive review
- Channel efficiency: CAC, qualification rate, LTV by channel
- Creative performance: CTR, conversion rate, quality score

*Decision Framework:*
- If results meet success criteria → Proceed to national launch
- If mixed results → Run extended test (2 more weeks) or iterate variants
- If results fail → Redesign campaign or kill

*National Launch Plan:*
- Winning incentive amount: [TBD from test]
- Winning qualification structure: [TBD from test]
- Budget allocation: [% to each channel based on test performance]
- Creative strategy: Top 3 performing messages + 2-week refresh cadence
- Fraud thresholds: Auto-pause at 7% rate or $75K daily losses

*Stakeholder Alignment:*
- Present findings to exec team
- Get final budget approval for $13.5M (remaining 90%)
- Align on launch timeline and monitoring cadence

**Phase 4: National Launch & Monitoring (Weeks 11-20)**

*Objective:* Scale winning approach nationally while optimizing in real-time

*Launch Strategy:*
- Day 1: 25% budget deployment (cautious scale)
- Day 3: First performance check, fraud review
- Day 7: Increase to 50% budget if metrics stable
- Day 14: Full 100% budget if performance sustained

*Real-Time Optimization:*
- Daily monitoring: CAC, fraud rate, qualification rate by channel
- Weekly budget reallocation: Shift $$$ from underperformers to winners
- Bi-weekly creative refresh: New assets every 2 weeks to combat fatigue
- Monthly deep-dives: Cohort analysis, LTV modeling, retention curves

*Channel Experiments:*
- Add new channels: Podcasts, influencer partnerships, PR push
- Test channel tactics: TikTok creator collabs, Reddit AMAs, affiliate partnerships
- Geographic expansion: Test international markets (Canada, UK)

*Lifecycle Activation:*
- Deploy email/SMS nurture sequences based on qualification status
- Launch in-app progress tracker: "You're $200 away from $350!"
- Retarget incomplete qualifications with display ads
- Test "Last Chance" urgency messaging for users near deadline

*Risk Management:*
- Fraud monitoring: Daily reviews, auto-pause triggers active
- Legal compliance: Monitor for complaints, regulatory inquiries
- Budget pacing: Track spend vs. plan, adjust if needed
- Quality checks: Monitor qualification rate, retention, LTV weekly

**Phase 5: Analysis & Iteration (Weeks 21-24)**

*Objective:* Learn from campaign performance and optimize for future

*Deep-Dive Analysis:*
- Cohort LTV tracking: 30-day, 60-day, 90-day, 6-month, 12-month
- Channel attribution: Multi-touch attribution, incrementality testing
- User quality: Compare qualified vs. non-qualified cohorts
- Fraud post-mortem: Final losses, patterns missed, system improvements
- Creative insights: What messaging resonated most? Why?
- Budget efficiency: ROAS by channel, optimal allocation

*Key Learnings to Document:*
- What incentive amount hit sweet spot of volume vs. cost?
- What qualifying structure balanced acquisition and quality?
- Which channels drove best users at scale?
- How effective were fraud systems? What would we change?
- What creative messages performed best? What failed?
- What lifecycle tactics improved qualification rates?
- What would we do differently next time?

*Executive Presentation:*
- Results summary: Volume impact, CAC, LTV, fraud rate, ROI
- Learnings documented: What worked, what didn't, why
- Recommendations: Should we run again? What changes?
- Playbook creation: Document for future high-value offers

*Post-Campaign Actions:*
- Survey users: Why did they sign up? Would they have without offer?
- Analyze long-term retention: Do bonus users stick around?
- Calculate true incrementality: Would they have signed up anyway?
- Build automated reporting: Dashboard for future campaigns`,
    metrics: [
      { label: "Testing Budget", value: "$1.5M", change: "Weeks 5-8" },
      { label: "Scale Budget", value: "$13.5M", change: "Weeks 11-20" },
      { label: "Markets Tested", value: "5 states", change: "Soft launch" },
      { label: "Experiments Planned", value: "25+", change: "Across all phases" },
      { label: "Decision Timeline", value: "8 weeks", change: "Test to scale" },
      { label: "Success Threshold", value: "LTV:CAC >2.5x", change: "At 12 months" },
    ],
    learnings: [
      "Test before scaling—10% budget soft launch de-risks the $15M investment and provides data to optimize the remaining 90%; jumping straight to national could waste millions on unproven assumptions",
      "Define clear go/no-go criteria upfront—without pre-agreed success metrics (CAC, fraud rate, qualification rate), you'll face endless debates on whether to scale; alignment prevents analysis paralysis",
      "Fraud prevention is non-negotiable—building detection systems pre-launch vs. reactively saves millions; 5% fraud rate on $15M campaign = $750K in losses that could have been prevented",
      "Optimize for quality, not just volume—high signup numbers mean nothing if users don't qualify or churn immediately; qualification rate and 90-day retention predict long-term LTV better than signups",
      "Channel economics vary by incentive size—a $350 offer might perform differently than $100 across channels; younger audiences (TikTok) may respond better to premium incentives than older demos (Meta)",
      "Creative fatigue happens faster with aggressive offers—performance typically drops 15-20% after 2-3 weeks without refresh; plan creative rotation from day one, not after performance tanks",
      "Lifecycle activation is where you win—getting users to sign up is only half the battle; 30-40% might not qualify without nudges; progress trackers, email sequences, and SMS reminders can recover drop-offs and improve unit economics",
      "Strategic patience pays off—rushing to scale without learning phase would risk blowing the entire budget on suboptimal configuration; 4-week test investment yields data that improves the remaining 16 weeks",
    ],
    tags: ["Growth Strategy", "Experimentation", "Fintech", "Performance Marketing", "Fraud Prevention", "A/B Testing", "Acquisition", "Unit Economics", "Strategic Planning", "Risk Management"],
  },
  {
    id: "b2b-saas-analytics",
    title: "Product Analytics Foundation: B2B SaaS Activation",
    company: "Early-Stage SaaS Startup",
    role: "Volunteer Analytics Contributor",
    duration: "2023 (3 months)",
    category: "Product",
    thumbnail: "/images/analytics-consulting.jpg",
    problem: "Seed-stage B2B SaaS company had product-market fit but no analytics infrastructure. Team was making product decisions based on intuition, not data—couldn't answer basic questions like 'Which onboarding steps cause drop-off?' or 'What predicts activation?'",
    opportunity: "Build analytics foundation from scratch: design event tracking, implement funnel analysis, create dashboards, and establish experimentation framework—providing hands-on experience with product analytics while helping an early-stage team.",
    hypothesis: "By designing proper instrumentation and building cohort analyses, we could identify activation patterns and drop-off points, enabling data-driven product decisions and establishing foundation for future experimentation.",
    strategy: `**Event Tracking Design:**
- Map complete user journey from signup through activation
- Design event taxonomy with clear naming conventions
- Document tracking implementation for engineering
- Define key product events and user properties

**SQL Analysis Framework:**
- Build cohort analysis queries for activation patterns
- Create retention curve analysis (Day 1, 7, 30)
- Identify funnel drop-off points with SQL
- Analyze time-to-value across user segments

**Dashboard & Metrics:**
- Create Looker dashboard mockups for key funnels
- Define activation metrics and success criteria
- Build sample cohort comparison views
- Document metric definitions for team alignment

**Experimentation Methodology:**
- Write A/B testing playbook for onboarding experiments
- Document sample size calculation approach
- Create experiment brief templates
- Train team on statistical concepts`,
    execution: `**Phase 1: Discovery & Journey Mapping (Weeks 1-2)**
- Interviewed team to understand current product and user flow
- Mapped signup → activation journey with product and engineering
- Identified 15 key events to track across onboarding
- Created event tracking specification document

**Phase 2: SQL Implementation (Weeks 3-6)**
- Wrote SQL queries for activation funnel analysis
- Built cohort retention queries (weekly cohorts, Day 1/7/30 retention)
- Analyzed drop-off points: identified 40% loss between steps 2-3
- Discovered users activating <24hrs had 3x better retention
- Created time-to-value analysis by user segment

**Phase 3: Dashboard Design (Weeks 7-9)**
- Designed Looker dashboard mockups for 3 core views
- Built activation funnel dashboard with conversion rates
- Created retention curve visualization by cohort
- Developed engagement dashboard showing feature adoption
- Documented all metric definitions and calculations

**Phase 4: Experimentation Framework (Weeks 10-12)**
- Wrote experimentation playbook with hypothesis templates
- Created sample size calculator for their traffic levels
- Documented statistical significance approach
- Trained non-technical team members on A/B testing basics
- Set up experiment brief template for future tests`,
    metrics: [
      { label: "Event Schema", value: "15 events", change: "documented" },
      { label: "SQL Queries", value: "20+", change: "cohort & funnel analysis" },
      { label: "Dashboard Mockups", value: "3", change: "core product views" },
      { label: "Key Finding", value: "40% drop", change: "at step 2→3" },
    ],
    learnings: [
      "Product analytics requires instrumentation planning upfront—you can't analyze what you don't track; thoughtful event design is 80% of the work",
      "SQL proficiency unlocks insights—moving from basic queries to cohort analysis took practice, but autonomy to explore data was worth it",
      "Activation metrics vary by product—what 'activation' means for B2B SaaS differs from consumer apps; spent time understanding their value delivery moment",
      "Documentation is a PM skill—writing clear metric definitions and experiment guidelines was harder than expected but critical for team alignment",
      "Volunteer work teaches real constraints—even unpaid projects have real stakeholders, timelines, and tradeoffs; more valuable than courses",
    ],
    tags: ["Product Analytics", "SQL", "Event Tracking", "Looker", "Activation Funnel", "Cohort Analysis", "Experimentation Framework", "B2B SaaS"],
  },
  {
    id: "mobile-app-analytics",
    title: "Mobile App Engagement & Retention Study",
    company: "Seed-Stage Consumer App",
    role: "Volunteer Analytics Contributor",
    duration: "2023 (2 months)",
    category: "Product",
    thumbnail: "/images/analytics-consulting.jpg",
    problem: "Early-stage consumer mobile app (iOS/Android) had basic app store metrics but no visibility into in-app behavior, engagement patterns, or retention cohorts. Team couldn't answer: Which features drive retention? When do users churn? What behaviors predict value?",
    opportunity: "Establish analytics foundations for mobile product—set up event taxonomy in Amplitude, build retention dashboards, create experimentation guidelines, and gain hands-on experience with mobile analytics tools and metrics.",
    hypothesis: "By implementing proper event tracking and building retention analyses, we could identify engagement patterns and churn moments, enabling the team to focus product development on retention-driving features.",
    strategy: `**User Journey Mapping:**
- Map mobile user journey from install to habitual usage
- Identify key engagement moments and feature adoption milestones
- Document critical user paths and friction points
- Create visual journey maps for different personas

**Event Tracking Implementation:**
- Set up event taxonomy in Amplitude
- Define events covering app lifecycle and feature usage
- Configure user properties and event properties
- Test event firing and validate data quality

**Engagement Analytics:**
- Build dashboards for MAU/DAU and session frequency
- Create retention curves for Day 1/7/30 cohorts
- Analyze feature adoption and engagement patterns
- Design engagement scoring model

**Experimentation Guidelines:**
- Write mobile experimentation playbook
- Document testing approaches for onboarding and features
- Create decision framework for A/B testing vs. shipping fast
- Explain statistical concepts in accessible language`,
    execution: `**Phase 1: Journey Mapping & Planning (Weeks 1-2)**
- Conducted user interviews with early adopters
- Mapped install → onboarding → activation → habitual use journey
- Identified 20+ events to track across user lifecycle
- Created visual journey maps with team

**Phase 2: Amplitude Setup (Weeks 3-4)**
- Set up Amplitude event taxonomy (learning tool hands-on)
- Defined events: install, onboarding steps, feature usage, sharing
- Configured user properties (acquisition source, persona, preferences)
- Tested event implementation and validated data accuracy
- Documented event catalog with descriptions

**Phase 3: Dashboard Creation (Weeks 5-6)**
- Built MAU/DAU trend dashboard
- Created retention curve visualization (cohort-based)
- Analyzed feature adoption: which features correlate with retention?
- Designed engagement scoring based on session frequency + key actions
- Built dashboard comparing cohorts by acquisition source

**Phase 4: Experimentation Framework (Weeks 7-8)**
- Wrote mobile-first experimentation guidelines
- Documented how to test onboarding flows and feature variations
- Created framework: when to A/B test vs. iterate quickly
- Explained statistical concepts (sample size, significance) to founders
- Set up experiment tracking template`,
    metrics: [
      { label: "Event Taxonomy", value: "20+ events", change: "app lifecycle" },
      { label: "Retention Dashboards", value: "4", change: "cohort views" },
      { label: "Key Insight", value: "Day 1 retention", change: "predicts Day 30" },
      { label: "Engagement Model", value: "Built", change: "scoring framework" },
    ],
    learnings: [
      "Mobile metrics differ from web—session-based metrics matter more; load time is critical; push notifications are a retention lever",
      "Retention curves tell the story—immediate value from cohort visualization; Day 1 retention predicted Day 30 better than any other metric",
      "Tool proficiency requires hands-on use—reading Amplitude docs ≠ using Amplitude; setting up events taught data validation and troubleshooting",
      "Engagement patterns vary widely—consumer app behavior differs from B2B; daily active usage isn't always the goal; weekly habits can be sufficient",
      "Communication is core PM skill—explaining p-values and sample sizes to founders without stats backgrounds taught me to simplify without dumbing down",
    ],
    tags: ["Product Analytics", "Amplitude", "Mobile Analytics", "Retention Analysis", "Engagement Metrics", "User Journey Mapping", "Event Tracking", "Consumer Apps"],
  },
  {
    id: "resumefit-saas",
    title: "ResumeFit: AI Resume Optimizer (0→1 SaaS Build)",
    company: "Personal Project",
    role: "Solo PM/Builder",
    duration: "2026 (3 months)",
    category: "Builder",
    thumbnail: "/images/resume-builder.jpg",
    link: "https://resume-tailor-ai-production-1944.up.railway.app",
    problem: "Job seekers spend hours manually tailoring resumes for each application with no guarantee of ATS optimization. Existing tools either lack AI capabilities or charge $40+/month, creating a gap for a freemium product-led growth approach targeting career changers, tech professionals, and recent graduates.",
    opportunity: "Build production SaaS with viral growth mechanics: generous free tier (3 resumes/month), GPT-4 powered optimization, referral system for user acquisition, and exit-intent modals to capture abandoning users. Opportunity to demonstrate full-stack PM skills—product strategy, technical execution, and go-to-market.",
    hypothesis: "By offering a genuinely useful free tier with viral referral mechanics and transparent ATS scoring, we can achieve <$15 CAC and 10%+ free-to-paid conversion through product-led growth, proving viability of freemium AI tools.",
    strategy: `**Product Strategy:**
- Freemium model: 3 free optimizations/month to drive trial
- GPT-4 powered semantic analysis (not just keyword matching)
- 6 professional templates with PDF/DOCX export
- Viral referral system: 5 bonus credits per successful referral
- Backend security: API keys never exposed to frontend

**Go-to-Market Strategy:**
- SEO content targeting "tailor resume to job description" (1.2K monthly searches)
- Exit-intent modal offering resume checklist PDF (18% capture rate)
- Social proof counter showing real-time optimization count
- Reddit/LinkedIn organic community engagement
- Product-led growth: users share to unlock credits

**Monetization:**
- Free: 3 optimizations/month
- Pro ($19/month): Unlimited optimizations, priority processing
- Revenue target: $5K MRR in 6 months`,
    execution: `**Phase 1: MVP Backend (Month 1)**
- Built FastAPI Python backend with secure OpenAI integration
- Implemented resume parsing (PDF/DOCX) using pypdf2 and python-docx
- Created GPT-4 prompt engineering system with authenticity guardrails
- Deployed backend to Railway with environment-based API key management
- Added CORS handling and rate limiting

**Phase 2: Full-Stack Product (Month 2)**
- Built React + TypeScript frontend with 3-panel dashboard
- Implemented inline resume editing with AI-powered suggestions
- Created template system with 6 professional designs
- Added file upload, real-time preview, and export (PDF/DOCX/ATS text)
- Integrated before/after comparison view with ATS score calculation
- Built improvement report modal showing optimization details

**Phase 3: Growth Features (Month 3)**
- Implemented referral tracking system with localStorage + backend sync
- Built exit-intent modal capturing 18% of abandoning users
- Added social proof counter with live optimization counts
- Integrated Mixpanel for analytics instrumentation
- Created subscription flow with Stripe integration
- Launched A/B test for pricing page ($19 vs $29/month)`,
    metrics: [
      { label: "Build Time", value: "3 months", change: "Solo build" },
      { label: "Users (Month 1)", value: "500+", change: "Organic" },
      { label: "Free-to-Paid CVR", value: "12%", change: "Target: 10%" },
      { label: "Exit Modal Capture", value: "18%", change: "vs 10% baseline" },
    ],
    learnings: [
      "Backend security is critical—API keys must NEVER hit frontend; learned proper environment variable management and server-side API calls",
      "Freemium works when free tier delivers real value—12% conversion exceeded 10% target because users genuinely benefited from free tier",
      "Exit-intent modals effective but must offer value—resume checklist PDF (not just 'wait, come back!') captured 18% of abandoners",
      "Referral credits drive virality—30% of signups came from referrals; gamification (5 credits = 1 month free) created sharing incentive",
      "Template quality > quantity—users preferred 3 great templates over 10 mediocre ones; learned to focus on polish not variety",
      "GPT-4 prompt engineering requires iteration—took 15+ versions to balance helpfulness with authenticity (prevent fabrication)",
    ],
    tags: ["Builder", "AI/ML", "SaaS", "Product-Led Growth", "Full-Stack", "Freemium", "React", "Python", "FastAPI", "GPT-4"],
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
