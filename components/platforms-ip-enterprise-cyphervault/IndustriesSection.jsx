"use client";
import { useEffect, useState } from "react";
import {
  HeartPulse, Landmark, Shield, Globe, ChevronRight,
  FileText, LockKeyhole, ShieldCheck, Microscope, BarChart3,
  CreditCard, ScanSearch, ShieldAlert, FileLock2, Search,
  Radar, Database, GitMerge, Lock
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ── Plain data only — NO JSX here ──
const TABS = [
  { id: "healthcare", iconBg: "bg-red-500/[0.08]",     title: "Healthcare & Life Sciences",  sub: "HIPAA, clinical trials, PHI protection" },
  { id: "finance",    iconBg: "bg-emerald-500/[0.08]", title: "Financial Services",           sub: "PCI-DSS, SOX, GDPR compliance" },
  { id: "government", iconBg: "bg-violet-500/[0.08]",  title: "Government & Defense",         sub: "FedRAMP, ITAR, classified data" },
  { id: "crossborder",iconBg: "bg-cyan-500/[0.08]",    title: "Cross-Border Collaboration",   sub: "GDPR, data residency requirements" },
];

const PANELS = {
  healthcare: {
    iconBg: "bg-red-500/[0.1]",
    title: "Multi-Site Clinical Trials",
    sub: "How CipherVault enables collaborative research without exposing PHI",
    steps: [
      { iconName: "FileText",    iconColor: "text-red-500",    bg: "bg-red-500/[0.04] border-red-500/[0.1]",       iconBg: "bg-red-500/[0.1]",     label: "Patient Records",  sub: "Site A, B, C" },
      { iconName: "LockKeyhole", iconColor: "text-violet-500", bg: "bg-violet-500/[0.04] border-violet-500/[0.1]", iconBg: "bg-violet-500/[0.1]",  label: "Encrypt & Strip",  sub: "De-identify PHI" },
      { iconName: "ShieldCheck", iconColor: "text-violet-500", bg: "bg-violet-500/[0.06] border-violet-500/[0.15]",iconBg: "bg-violet-500/[0.12]", label: "CipherVault",      sub: "HIPAA compliant", violet: true },
      { iconName: "Microscope",  iconColor: "text-emerald-500",bg: "bg-emerald-500/[0.04] border-emerald-500/[0.1]",iconBg:"bg-emerald-500/[0.1]", label: "Research Query",   sub: "Encrypted compute" },
      { iconName: "BarChart3",   iconColor: "text-emerald-500",bg: "bg-emerald-500/[0.04] border-emerald-500/[0.1]",iconBg:"bg-emerald-500/[0.1]", label: "Trial Insights",   sub: "Zero PHI exposure", emerald: true },
    ],
    info: [
      { label: "Compliance", val: "HIPAA, 21 CFR Part 11, IRB protocols" },
      { label: "Use Case",   val: "Aggregate outcomes across trial sites without sharing patient data" },
      { label: "Protection", val: "Names, SSNs, diagnoses never leave originating hospital" },
    ],
  },
  finance: {
    iconBg: "bg-emerald-500/[0.1]",
    title: "Cross-Institution Risk Analysis",
    sub: "Collaborative fraud detection without exposing transaction records",
    steps: [
      { iconName: "CreditCard",  iconColor: "text-emerald-500",bg: "bg-emerald-500/[0.04] border-emerald-500/[0.1]",iconBg:"bg-emerald-500/[0.1]", label: "Transactions",      sub: "Multi-bank feeds" },
      { iconName: "LockKeyhole", iconColor: "text-violet-500", bg: "bg-violet-500/[0.04] border-violet-500/[0.1]", iconBg:"bg-violet-500/[0.1]",  label: "Tokenize & Encrypt",sub: "PCI-DSS stripped" },
      { iconName: "ShieldCheck", iconColor: "text-violet-500", bg: "bg-violet-500/[0.06] border-violet-500/[0.15]",iconBg:"bg-violet-500/[0.12]", label: "CipherVault",       sub: "SOX audit-ready", violet: true },
      { iconName: "ScanSearch",  iconColor: "text-amber-500",  bg: "bg-amber-500/[0.04] border-amber-500/[0.1]",   iconBg:"bg-amber-500/[0.1]",   label: "Fraud Detection",   sub: "Pattern matching" },
      { iconName: "ShieldAlert", iconColor: "text-emerald-500",bg: "bg-emerald-500/[0.04] border-emerald-500/[0.1]",iconBg:"bg-emerald-500/[0.1]",label: "Risk Scores",       sub: "No data leaked", emerald: true },
    ],
    info: [
      { label: "Compliance", val: "PCI-DSS, SOX, GDPR, Basel III reporting" },
      { label: "Use Case",   val: "Detect cross-bank fraud rings without sharing customer accounts" },
      { label: "Protection", val: "Account numbers, balances, PII never visible to partner banks" },
    ],
  },
  government: {
    iconBg: "bg-violet-500/[0.1]",
    title: "Inter-Agency Intelligence Sharing",
    sub: "Collaborative threat analysis across classified boundaries",
    steps: [
      { iconName: "FileLock2",   iconColor: "text-violet-500", bg: "bg-violet-500/[0.04] border-violet-500/[0.1]", iconBg:"bg-violet-500/[0.1]",  label: "Classified Intel",  sub: "Agency datasets" },
      { iconName: "LockKeyhole", iconColor: "text-violet-500", bg: "bg-violet-500/[0.04] border-violet-500/[0.1]", iconBg:"bg-violet-500/[0.1]",  label: "Encrypt & Classify",sub: "Level-aware vaults" },
      { iconName: "ShieldCheck", iconColor: "text-violet-500", bg: "bg-violet-500/[0.06] border-violet-500/[0.15]",iconBg:"bg-violet-500/[0.12]", label: "CipherVault",       sub: "FedRAMP High", violet: true },
      { iconName: "Search",      iconColor: "text-blue-500",   bg: "bg-blue-500/[0.04] border-blue-500/[0.1]",     iconBg:"bg-blue-500/[0.1]",    label: "Cross-Ref Query",   sub: "Threat matching" },
      { iconName: "Radar",       iconColor: "text-emerald-500",bg: "bg-emerald-500/[0.04] border-emerald-500/[0.1]",iconBg:"bg-emerald-500/[0.1]",label: "Threat Intel",      sub: "Sources protected", emerald: true },
    ],
    info: [
      { label: "Compliance", val: "FedRAMP, ITAR, CJIS, IL4/IL5 boundaries" },
      { label: "Use Case",   val: "Cross-reference threat patterns without merging classified databases" },
      { label: "Protection", val: "Sources, methods, and operational details remain compartmentalized" },
    ],
  },
  crossborder: {
    iconBg: "bg-cyan-500/[0.1]",
    title: "Global Analytics, Local Sovereignty",
    sub: "Run worldwide analytics while data never leaves its jurisdiction",
    steps: [
      { iconName: "Database",    iconColor: "text-cyan-500",   bg: "bg-cyan-500/[0.04] border-cyan-500/[0.1]",     iconBg:"bg-cyan-500/[0.1]",    label: "Regional Data",     sub: "EU, APAC, AMER" },
      { iconName: "LockKeyhole", iconColor: "text-violet-500", bg: "bg-violet-500/[0.04] border-violet-500/[0.1]", iconBg:"bg-violet-500/[0.1]",  label: "Local Encryption",  sub: "In-jurisdiction" },
      { iconName: "ShieldCheck", iconColor: "text-violet-500", bg: "bg-violet-500/[0.06] border-violet-500/[0.15]",iconBg:"bg-violet-500/[0.12]", label: "CipherVault",       sub: "GDPR Art. 46", violet: true },
      { iconName: "GitMerge",    iconColor: "text-cyan-500",   bg: "bg-cyan-500/[0.04] border-cyan-500/[0.1]",     iconBg:"bg-cyan-500/[0.1]",    label: "Federated Query",   sub: "Cross-region join" },
      { iconName: "BarChart3",   iconColor: "text-emerald-500",bg: "bg-emerald-500/[0.04] border-emerald-500/[0.1]",iconBg:"bg-emerald-500/[0.1]",label: "Global Insights",   sub: "No data transfers", emerald: true },
    ],
    info: [
      { label: "Compliance", val: "GDPR, CCPA, LGPD, PIPL — all simultaneously" },
      { label: "Use Case",   val: "Global customer analytics without moving personal data across borders" },
      { label: "Protection", val: "PII stays in origin region — only encrypted aggregates cross borders" },
    ],
  },
};

// ── Icon renderer — called inside JSX, not at module level ──
const ICON_MAP = {
  HeartPulse, Landmark, Shield, Globe,
  FileText, LockKeyhole, ShieldCheck, Microscope, BarChart3,
  CreditCard, ScanSearch, ShieldAlert, FileLock2, Search,
  Radar, Database, GitMerge, Lock,
};

function Icon({ name, className }) {
  const Component = ICON_MAP[name];
  if (!Component) return null;
  return <Component className={className} />;
}

function TabIcon({ id }) {
  const map = {
    healthcare:  <HeartPulse className="w-5 h-5 text-red-500" />,
    finance:     <Landmark   className="w-5 h-5 text-emerald-500" />,
    government:  <Shield     className="w-5 h-5 text-violet-500" />,
    crossborder: <Globe      className="w-5 h-5 text-cyan-500" />,
  };
  return map[id] || null;
}

function PanelHeaderIcon({ id }) {
  const map = {
    healthcare:  <HeartPulse className="w-4 h-4 text-red-500" />,
    finance:     <Landmark   className="w-4 h-4 text-emerald-500" />,
    government:  <Shield     className="w-4 h-4 text-violet-500" />,
    crossborder: <Globe      className="w-4 h-4 text-cyan-500" />,
  };
  return map[id] || null;
}

export default function IndustriesSection() {
  const [active, setActive] = useState("healthcare");
  const panel = PANELS[active];

  useEffect(() => {
    ["r-left","r-right","r-up"].forEach((cls) => {
      gsap.utils.toArray(`.${cls}`).forEach((el) =>
        gsap.to(el, {
          x: 0, y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        })
      );
    });
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[400px] h-[400px] bg-violet-400/[0.04]" style={{ top: "10%", right: "-5%" }} />
      <div className="orb w-[300px] h-[300px] bg-emerald-400/[0.03]" style={{ bottom: "15%", left: "-3%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] text-violet-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Industries</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">Regulated Domains</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light r-up">
            Where privacy violations are not just costly—but unacceptable. Select an industry to see CipherVault in action.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 mb-20">
          {/* Tab selector */}
          <div className="md:col-span-4 space-y-3 r-left">
            {TABS.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`cursor-pointer flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                  active === tab.id
                    ? "bg-white/90 border-violet-500/[0.25] shadow-lg shadow-violet-500/[0.1] translate-x-1.5"
                    : "bg-white/60 border-black/[0.06] hover:translate-x-1"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl ${tab.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <TabIcon id={tab.id} />
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-sm">{tab.title}</p>
                  <p className="text-[11px] text-gray-400 font-light">{tab.sub}</p>
                </div>
                <ChevronRight className={`w-4 h-4 ml-auto flex-shrink-0 transition-colors ${active === tab.id ? "text-violet-500" : "text-gray-300"}`} />
              </div>
            ))}
          </div>

          {/* Panel */}
          <div className="md:col-span-8 r-right">
            <div className="card-no-hover p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-8 rounded-lg ${panel.iconBg} flex items-center justify-center`}>
                  <PanelHeaderIcon id={active} />
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-800">{panel.title}</h3>
                  <p className="text-[11px] text-gray-400 font-light">{panel.sub}</p>
                </div>
              </div>

              {/* 5-step flow */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {panel.steps.map((step) => (
                  <div key={step.label} className={`text-center p-3 rounded-xl border ${step.bg}`}>
                    <div className={`w-8 h-8 rounded-lg ${step.iconBg} flex items-center justify-center mx-auto mb-2`}>
                      <Icon name={step.iconName} className={`w-4 h-4 ${step.iconColor}`} />
                    </div>
                    <p className={`text-[10px] font-medium ${step.violet ? "text-violet-600" : "text-gray-600"}`}>
                      {step.label}
                    </p>
                    <p className={`text-[9px] font-light ${step.emerald ? "text-emerald-600" : "text-gray-400"}`}>
                      {step.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Info boxes */}
              <div className="grid grid-cols-3 gap-3">
                {panel.info.map((i) => (
                  <div key={i.label} className="p-3 rounded-lg bg-[#f5f3f0]">
                    <p className="text-[10px] text-gray-400 font-mono mb-0.5">{i.label}</p>
                    <p className="text-[12px] text-gray-700 font-light">{i.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sovereign Stack */}
        <div className="max-w-3xl mx-auto r-up">
          <div className="text-center mb-8">
            <p className="text-[10px] text-violet-500/80 tracking-[0.3em] uppercase mb-4 font-mono">Ecosystem</p>
            <h2 className="text-2xl display-inter text-gray-800 mb-2">Sovereign Stack</h2>
            <p className="text-sm text-gray-500 font-light">Part of Genovation's foundational IP for secure intelligence.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Mentis AgentOS */}
            <div className="p-5 rounded-xl bg-white/60 border border-black/[0.06] hover:border-cyan-500/[0.2] transition-all text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/[0.08] flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>
                </svg>
              </div>
              <p className="text-gray-800 font-medium text-sm">Mentis AgentOS</p>
              <p className="text-[11px] text-gray-400 font-light">Governed intelligence</p>
            </div>

            {/* CipherVault — Current */}
            <div className="p-5 rounded-xl bg-violet-500/[0.04] border border-violet-500/[0.2] shadow-lg shadow-violet-500/[0.04] text-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-800 font-medium text-sm">CipherVault</p>
              <p className="text-[11px] text-violet-600 font-light">Cryptographic protection</p>
              <span className="inline-block text-[9px] text-violet-600 px-2 py-0.5 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.15] mt-1.5">
                Current
              </span>
            </div>

            {/* Data Backbone */}
            <div className="p-5 rounded-xl bg-white/60 border border-black/[0.06] hover:border-amber-500/[0.2] transition-all text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-500/[0.08] flex items-center justify-center mx-auto mb-3">
                <Database className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-gray-800 font-medium text-sm">Data Backbone</p>
              <p className="text-[11px] text-gray-400 font-light">Governed pipelines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
