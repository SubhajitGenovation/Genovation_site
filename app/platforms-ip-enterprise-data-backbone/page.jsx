"use client";

import ScrollProgress      from "@/components/platforms-ip-enterprise-data-backbone/ScrollProgress";
import ScrollLines         from "@/components/platforms-ip-enterprise-data-backbone/ScrollLines";
import Nav                 from "@/components/platforms-ip-enterprise-data-backbone/Nav";
import HeroSection         from "@/components/platforms-ip-enterprise-data-backbone/HeroSection";
import Interstitial1       from "@/components/platforms-ip-enterprise-data-backbone/Interstitial1";
import ProblemsSection     from "@/components/platforms-ip-enterprise-data-backbone/ProblemsSection";
import MockUISection       from "@/components/platforms-ip-enterprise-data-backbone/MockUISection";
import ArchitectureSection from "@/components/platforms-ip-enterprise-data-backbone/ArchitectureSection";
import Interstitial2       from "@/components/platforms-ip-enterprise-data-backbone/Interstitial2";
import CapabilitiesSection from "@/components/platforms-ip-enterprise-data-backbone/CapabilitiesSection";
import ComparisonSection   from "@/components/platforms-ip-enterprise-data-backbone/ComparisonSection";
import DeploymentSection   from "@/components/platforms-ip-enterprise-data-backbone/DeploymentSection";
import SecuritySection     from "@/components/platforms-ip-enterprise-data-backbone/SecuritySection";
import WhySection          from "@/components/platforms-ip-enterprise-data-backbone/WhySection";
import StackSection        from "@/components/platforms-ip-enterprise-data-backbone/StackSection";
import CTASection          from "@/components/platforms-ip-enterprise-data-backbone/CTASection";
import Footer              from "@/components/platforms-ip-enterprise-data-backbone/Footer";

export default function DataBackbonePage() {
  return (
    <main className="antialiased overflow-x-hidden" style={{ background: "#f5f3f0", color: "#1a1a2e" }}>
      <ScrollProgress />
      <ScrollLines />
      {/* <Nav /> */}
      <HeroSection />
      <Interstitial1 />
      <div className="divider-enhanced" />
      <ProblemsSection />
      <div className="divider-enhanced" />
      <MockUISection />
      <div className="divider-enhanced" />
      <ArchitectureSection />
      <div className="divider-enhanced" />
      <Interstitial2 />
      <CapabilitiesSection />
      <div className="divider-enhanced" />
      <ComparisonSection />
      <div className="divider-enhanced" />
      <DeploymentSection />
      <div className="divider-enhanced" />
      <SecuritySection />
      {/* <div className="divider-enhanced" />
      <WhySection /> */}
      <div className="divider-enhanced" />
      <StackSection />
      <div className="divider-enhanced" />
      <CTASection />
      {/* <Footer /> */}
    </main>
  );
}
