"use client";

import ScrollProgress from "@/components/security-sovereignty/ScrollProgress";
import SecurityNav from "@/components/security-sovereignty/SecurityNav";
import HeroSection from "@/components/security-sovereignty/HeroSection";
import RiskSection from "@/components/security-sovereignty/RiskSection";
import PQCVaultSection from "@/components/security-sovereignty/PQCVaultSection";
import CipherVaultSection from "@/components/security-sovereignty/CipherVaultSection";
import ArchitectureSection from "@/components/security-sovereignty/ArchitectureSection";
import DeploymentSection from "@/components/security-sovereignty/DeploymentSection";
import CTASection from "@/components/security-sovereignty/CTASection";
import SecurityFooter from "@/components/security-sovereignty/SecurityFooter";
import ScrollLines from "@/components/security-sovereignty/ScrollLines";

export default function SecurityPage() {
  return (
    <div className="antialiased" style={{ background: "var(--bg)", color: "#1a1a2e", overflowX: "hidden" }}>
      <ScrollProgress />
      <ScrollLines />
      {/* <SecurityNav /> */}
      <HeroSection />
      <div className="divider-enhanced" />
      <RiskSection />
      <div className="divider-enhanced" />
      <PQCVaultSection />
      <div className="divider-enhanced" />
      <CipherVaultSection />
      <div className="divider-enhanced" />
      <ArchitectureSection />
      <div className="divider-enhanced" />
      <DeploymentSection />
      <div className="divider-enhanced" />
      <CTASection />
      <div className="divider-enhanced" />
      {/* <SecurityFooter /> */}
    </div>
  );
}
