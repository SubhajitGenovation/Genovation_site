"use client";

import ScrollProgress from "@/components/why-we-build/ScrollProgress";
import WhyNav from "@/components/why-we-build/WhyNav";
import SideNav from "@/components/why-we-build/SideNav";
import HeroSection from "@/components/why-we-build/HeroSection";
import WhyExistSection from "@/components/why-we-build/WhyExistSection";
import EcosystemSection from "@/components/why-we-build/EcosystemSection";
import OriginSection from "@/components/why-we-build/OriginSection";
import JourneySection from "@/components/why-we-build/JourneySection";
import ConvictionSection from "@/components/why-we-build/ConvictionSection";
import ChallengeSection from "@/components/why-we-build/ChallengeSection";
import WedgeSection from "@/components/why-we-build/WedgeSection";
import ArchitectureSection from "@/components/why-we-build/ArchitectureSection";
import HowItWorksSection from "@/components/why-we-build/HowItWorksSection";
import EconomicsSection from "@/components/why-we-build/EconomicsSection";
import ProductsSection from "@/components/why-we-build/ProductsSection";
import MentisSection from "@/components/why-we-build/MentisSection";
import LandscapeSection from "@/components/why-we-build/LandscapeSection";
import MoatSection from "@/components/why-we-build/MoatSection";
import ThesisSection from "@/components/why-we-build/ThesisSection";
import CTASection from "@/components/why-we-build/CTASection";
import WhyFooter from "@/components/why-we-build/WhyFooter";
import GSAPRevealProvider from "@/components/why-we-build/GSAPRevealProvider";

export default function WhyWeBuildPage() {
  return (
    <div className="antialiased" style={{ background: "var(--bg)", color: "#1a1a2e", overflowX: "hidden" }}>
      <ScrollProgress />
      {/* <WhyNav /> */}
      <SideNav />
      <GSAPRevealProvider />
      <HeroSection />
      <div className="divider-enhanced" />
      <WhyExistSection />
      <div className="divider-enhanced" />
      <EcosystemSection />
      <div className="divider-enhanced" />
      <OriginSection />
      <div className="divider-enhanced" />
      <JourneySection />
      <div className="divider-enhanced" />
      <ConvictionSection />
      <div className="divider-enhanced" />
      <ChallengeSection />
      <div className="divider-enhanced" />
      <WedgeSection />
      <div className="divider-enhanced" />
      <ArchitectureSection />
      <div className="divider-enhanced" />
      <HowItWorksSection />
      <div className="divider-enhanced" />
      <EconomicsSection />
      <div className="divider-enhanced" />
      <ProductsSection />
      <div className="divider-enhanced" />
      <MentisSection />
      <div className="divider-enhanced" />
      <LandscapeSection />
      <div className="divider-enhanced" />
      <MoatSection />
      <div className="divider-enhanced" />
      <ThesisSection />
      <div className="divider-enhanced" />
      <CTASection />
      <div className="divider-enhanced" />
      {/* <WhyFooter /> */}
    </div>
  );
}
