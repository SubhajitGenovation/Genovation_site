"use client";
import ResearchScrollSetup from "@/components/research-ip/ResearchScrollSetup";
import ResearchNav from "@/components/research-ip/ResearchNav";
import ResearchHero from "@/components/research-ip/ResearchHero";
import ResearchInterstitial from "@/components/research-ip/ResearchInterstitial";
import ResearchPhilosophy from "@/components/research-ip/ResearchPhilosophy";
import ResearchAreas from "@/components/research-ip/ResearchAreas";
import ResearchIP from "@/components/research-ip/ResearchIP";
import ResearchPublications from "@/components/research-ip/ResearchPublications";
import ResearchImpact from "@/components/research-ip/ResearchImpact";
import ResearchRoadmap from "@/components/research-ip/ResearchRoadmap";
import ResearchCTA from "@/components/research-ip/ResearchCTA";
import ResearchFooter from "@/components/research-ip/ResearchFooter";

export default function ResearchPage() {
  return (
    <>
      {/* Global scroll animations, progress bar, scroll lines */}
      <ResearchScrollSetup />

      {/* Fixed Navigation */}
      {/* <ResearchNav /> */}

      {/* Hero */}
      <ResearchHero />

      <div className="divider-enhanced"></div>

      {/* Pinned Interstitial — word-by-word scroll reveal */}
      <ResearchInterstitial />

      <div className="divider-enhanced"></div>

      {/* Research Philosophy — Venn diagram */}
      <ResearchPhilosophy />

      <div className="divider-enhanced"></div>

      {/* Core Research Areas 01–04 — alternating layout with SVG diagrams */}
      <ResearchAreas />

      <div className="divider-enhanced"></div>

      {/* Proprietary IP — SDCA, Mentis OS, CipherVault */}
      <ResearchIP />

      <div className="divider-enhanced"></div>

      {/* Publications & Responsible Disclosure */}
      <ResearchPublications />

      <div className="divider-enhanced"></div>

      {/* Why This Matters — impact cards */}
      <ResearchImpact />

      <div className="divider-enhanced"></div>

      {/* Research Roadmap — 4 future direction cards */}
      <ResearchRoadmap />

      <div className="divider-enhanced"></div>

      {/* CTA */}
      <ResearchCTA />

      {/* Footer */}
      {/* <ResearchFooter /> */}
    </>
  );
}