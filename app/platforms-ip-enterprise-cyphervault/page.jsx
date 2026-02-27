"use client";
import CipherVaultHero from "@/components/platforms-ip-enterprise-cyphervault/CipherVaultHero";
import ProblemSolution from "@/components/platforms-ip-enterprise-cyphervault/ProblemSolution";
import ThreeVaultArchitecture from "@/components/platforms-ip-enterprise-cyphervault/ThreeVaultArchitecture";
import HowItWorks from "@/components/platforms-ip-enterprise-cyphervault/HowItWorks";
import VaultConsole from "@/components/platforms-ip-enterprise-cyphervault/VaultConsole";
import ComparisonTable from "@/components/platforms-ip-enterprise-cyphervault/ComparisonTable";
import IndustriesSection from "@/components/platforms-ip-enterprise-cyphervault/IndustriesSection";
// import SovereignStack from "@/components/platforms-ip-enterprise-cyphervault/SovereignStack";
import CipherVaultCTA from "@/components/platforms-ip-enterprise-cyphervault/CipherVaultCTA";

export default function CipherVaultPage() {
  return (
    <>
      <CipherVaultHero />
      <div className="divider-enhanced" />
      <ProblemSolution />
      <div className="divider-enhanced" />
      <ThreeVaultArchitecture />
      <div className="divider-enhanced" />
      <HowItWorks />
      <div className="divider-enhanced" />
      <VaultConsole />
      <div className="divider-enhanced" />
      <ComparisonTable />
      <div className="divider-enhanced" />
      <IndustriesSection />
      <div className="divider-enhanced" />
      <CipherVaultCTA />
    </>
  );
}
