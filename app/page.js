"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ScrollLines from "@/components/home/ScrollLines";
import Hero from "@/components/home/Hero";
import Interstitial1 from "@/components/home/Interstitial1";
import MentisOSReveal from "@/components/home/MentisOSReveal";
import ProductsHorizontalScroll from "@/components/home/ProductsHorizontalScroll";
import WorkflowTimeline from "@/components/home/WorkflowTimeline";
import SecuritySection from "@/components/home/SecuritySection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FinalCTA from "@/components/home/FinalCTA";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      {/* ScrollLines is position:fixed — must be outside overflow-hidden main */}
      <ScrollLines />
      <main className="min-h-screen relative bg-[#f5f3f0] overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-900">
        <Hero />
        <Interstitial1 />
        <MentisOSReveal />
        <ProductsHorizontalScroll />
        <WorkflowTimeline />
        <SecuritySection />
        <IndustriesSection />
        <ComparisonSection />
        <FinalCTA />
      </main>
    </>
  );
}
