import Hero from "@/components/home/Hero";
import CredibilityStrip from "@/components/home/CredibilityStrip";
import WhatIDo from "@/components/home/WhatIDo";
import BuilderStory from "@/components/home/BuilderStory";
import FeaturedWork from "@/components/home/FeaturedWork";
import AnalyticsDepth from "@/components/home/AnalyticsDepth";
import HowIThink from "@/components/home/HowIThink";
import ExperienceSnapshot from "@/components/home/ExperienceSnapshot";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "Xuejing Liu | AI-First Product Manager & Builder",
  description: "Product Manager who ships AI products, runs experiments, and writes code. Former PM at Rocket Mortgage and Upstart. Built 3 production web apps in 2026.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <WhatIDo />
      <BuilderStory />
      <FeaturedWork />
      <AnalyticsDepth />
      <HowIThink />
      <ExperienceSnapshot />
      <FinalCTA />
    </>
  );
}
