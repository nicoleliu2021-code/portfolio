# Advanced Product Manager Portfolio

A modern, high-quality personal portfolio website showcasing product work, strategy thinking, and builder mindset. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### Core Pages
- **Home**: Hero section with stats and featured work cards
- **Work/Case Studies**: Interactive case studies with tabs (Problem, Strategy, Execution, Results)
- **About**: Professional bio, experience timeline, and product philosophy
- **Resume**: Downloadable resume with full work history
- **Projects**: Builder projects showcase
- **Product Thinking**: Blog-style essays
- **Build Log**: Documentation of side projects
- **Contact**: Multiple ways to connect

### Standout Interactive Features

#### 1. AI Resume Tailor
- Paste any job description
- AI analyzes and extracts key themes (Product Strategy, Growth, Experimentation, etc.)
- Generates tailored professional summary
- Creates customized resume bullets matching job requirements
- Recommends relevant case studies
- Copy-to-clipboard functionality
- Saves recent analyses in browser

#### 2. Experiment Lab
- Dashboard of real experiments with filters (Growth, CRO, Acquisition, etc.)
- Each experiment shows: problem, hypothesis, results, and decision
- **Interactive Simulator**: Select audience type, message strategy, funnel stage, and metric
- Get mock PM recommendations (Launch, Iterate, Retest, Stop)
- Shows reasoning and next steps

#### 3. Product Teardowns
- Editorial-style product analyses
- Structured sections: Overview, Target User, Strengths, Friction Points, Opportunities
- Recommended experiments with effort/impact ratings
- Business impact assessment
- Category filters (Marketplace, Fintech, SaaS, AI, Consumer)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization Guide

### 1. Personal Information

**Navigation & Footer**
- Update `/components/layout/Navigation.tsx` - Replace "Your Name"
- Update `/components/layout/Footer.tsx` - Update social links and bio

**Contact Details**
- `/app/contact/page.tsx` - Update email, LinkedIn, GitHub, Twitter
- `/app/resume/page.tsx` - Update contact information

### 2. Case Studies

Edit `/data/case-studies.ts`:

```typescript
export const caseStudies: CaseStudy[] = [
  {
    id: "unique-slug",
    title: "Project Title",
    company: "Company Name",
    role: "Your Role",
    duration: "2021-2023",
    category: "Product" | "Growth" | "Strategy" | "Builder",
    problem: "Problem statement...",
    opportunity: "Opportunity description...",
    hypothesis: "If we... then...",
    strategy: "Your strategy...",
    execution: "How you executed...",
    metrics: [
      { label: "Metric", value: "18%", change: "+3pp" }
    ],
    learnings: ["Learning 1", "Learning 2"],
    tags: ["Tag1", "Tag2"]
  }
];
```

### 3. Work Experience

Edit `/data/content.ts`:

```typescript
export const workExperience: WorkExperience[] = [
  {
    company: "Company Name",
    role: "Your Role",
    duration: "2021 - 2023",
    description: "Role description",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
];
```

### 4. Experiments & Teardowns

- **Experiments**: `/data/experiments.ts`
- **Teardowns**: `/data/teardowns.ts`
- **Blog Posts**: `/data/content.ts` (blogPosts array)
- **Build Log**: `/data/content.ts` (buildLog array)

### 5. About Page Content

Edit `/app/about/page.tsx` to update:
- Personal story
- Product philosophy
- Skills and industries

## 🌐 Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Settings > Domains in Vercel dashboard
   - Add your domain
   - Update DNS records

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📂 Project Structure

```
pm-portfolio/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home
│   ├── work/              # Case studies
│   ├── experiments/       # Experiment Lab
│   ├── teardowns/         # Product Teardowns
│   ├── ai-resume-tailor/  # AI Resume Tailor
│   ├── thinking/          # Blog
│   ├── build-log/         # Build log
│   ├── about/             # About page
│   ├── resume/            # Resume
│   └── contact/           # Contact
├── components/            # React components
├── data/                  # Content data
├── lib/                   # Utilities
├── types/                 # TypeScript types
└── public/               # Static assets
```

## 🎨 Design Principles

- **Minimal & Clean**: Focus on content
- **Product-Focused**: Showcase real work
- **Data-Driven**: Highlight metrics
- **Interactive**: Engage visitors
- **Professional**: Modern and polished

## 🔧 Development Commands

```bash
npm run dev        # Development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Lint code
```

## 📈 Next Steps

After customization:
1. Replace all "Your Name" references
2. Update case studies with your work
3. Add your experiments and teardowns
4. Update contact information
5. Add your images to `/public/images/`
6. Deploy to Vercel
7. Add custom domain

## 📄 License

This is a portfolio template. Customize with your own content.

## ✨ Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Ready to launch?** Start by customizing the data files, then deploy to Vercel!
