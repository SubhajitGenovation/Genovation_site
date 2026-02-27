"use client";

import {
  AppDots, AppTab, LabelMono, Pill, GovSeal, SidebarItem, ConfRing,
  IconBot, IconFilePlus, IconMapPin, IconCalculator, IconPrinter, IconShieldCheck
} from "./Ui";

const benefitCards = [
  {
    title: "VA Disability Compensation",
    code: "38 U.S.C. § 1110",
    codeColor: "#059669",
    description: "Tax-free monthly payment based on disability rating",
    pill: <Pill type="g">High Confidence</Pill>,
    estimate: "Est. $1,400–3,700/mo",
    ringStroke: "#10b981",
    ringOffset: 7,
    ringLabel: "94%",
    borderColor: "rgba(16,185,129,0.15)",
  },
  {
    title: "Unemployment Insurance",
    code: "State Labor Code § 1251",
    codeColor: "#1d4ed8",
    description: "State-administered temporary income support",
    pill: <Pill type="g">High Confidence</Pill>,
    estimate: "Est. $320–550/wk",
    ringStroke: "#10b981",
    ringOffset: 12,
    ringLabel: "88%",
    borderColor: "rgba(16,185,129,0.15)",
  },
  {
    title: "SNAP Benefits",
    code: "7 U.S.C. § 2014",
    codeColor: "#1d4ed8",
    description: "Nutritional assistance based on household size and income",
    pill: <Pill type="a">Needs Verification</Pill>,
    estimate: "Est. $480–680/mo",
    ringStroke: "#f59e0b",
    ringOffset: 22,
    ringLabel: "76%",
    borderColor: "rgba(245,158,11,0.15)",
  },
  {
    title: "VA Health Care",
    code: "38 U.S.C. § 1710",
    codeColor: "#059669",
    description: "Comprehensive medical for eligible veterans",
    pill: <Pill type="g">High Confidence</Pill>,
    estimate: "Est. $1,400–3,700/mo",
    ringStroke: "#10b981",
    ringOffset: 4,
    ringLabel: "96%",
    borderColor: "rgba(16,185,129,0.15)",
  },
];

const nextSteps = [
  { icon: <IconFilePlus size={16} color="#3b82f6" />, label: "Start VA Claim" },
  { icon: <IconMapPin size={16} color="#3b82f6" />, label: "Find VA Office" },
  { icon: <IconCalculator size={16} color="#3b82f6" />, label: "Estimate Total" },
  { icon: <IconPrinter size={16} color="#3b82f6" />, label: "Print Summary" },
];

const sidebarItems = [
  { label: "Benefits Chat", active: true, icon: "💬" },
  { label: "Eligibility Check", icon: "🔍" },
  { label: "Applications", icon: "📄" },
  { label: "Office Locator", icon: "📍" },
];

const resourceItems = [
  { label: "211 Helpline", icon: "📞" },
  { label: "VA.gov", icon: "🌐" },
  { label: "Privacy Policy", icon: "🛡" },
];

export default function CitizenServicesProduct() {
  return (
    <div className="mb-36">
      <div className="flex items-center gap-4 mb-6 r-up">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
          <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-light text-gray-900 tracking-tight">Citizen Services Intelligence</h3>
          <p className="text-[13px] text-gray-400 font-light mt-0.5">Natural-language eligibility · Multi-program navigation · Statute-cited decisions · Zero PII retention</p>
        </div>
      </div>

      <div className="mock-app r-up">
        {/* Toolbar */}
        <div style={{
          background: "linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,247,245,0.98))",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          padding: "11px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div className="flex items-center gap-4">
            <AppDots />
            <div className="flex items-center gap-1 ml-3">
              {["Benefits Navigator", "Case Lookup", "Program Directory", "Appeals"].map((tab, i) => (
                <AppTab key={tab} active={i === 0}>{tab}</AppTab>
              ))}
            </div>
          </div>
          <GovSeal pulse>
            <span className="text-[10px] text-blue-600 font-medium tracking-wider">OFFICIAL GOVERNMENT SERVICE</span>
          </GovSeal>
        </div>

        {/* Body */}
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr" }}>
          {/* Sidebar */}
          <div style={{
            background: "rgba(0,0,0,0.012)",
            borderRight: "1px solid rgba(0,0,0,0.05)",
            padding: "14px 10px",
            minHeight: 580,
          }}>
            <LabelMono style={{ padding: "0 8px", marginBottom: 8 }}>Session</LabelMono>
            {sidebarItems.map((item) => (
              <SidebarItem key={item.label} active={item.active}>{item.label}</SidebarItem>
            ))}
            <LabelMono style={{ padding: "0 8px", marginBottom: 8, marginTop: 20 }}>Resources</LabelMono>
            {resourceItems.map((item) => (
              <SidebarItem key={item.label}>{item.label}</SidebarItem>
            ))}
            <div style={{ marginTop: "auto", paddingTop: 24 }}>
              <div style={{
                padding: 12,
                borderRadius: 12,
                background: "rgba(59,130,246,0.04)",
                border: "1px solid rgba(59,130,246,0.1)",
                margin: "0 4px",
              }}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" style={{ animation: "pulse-soft 2s ease-in-out infinite" }} />
                  <span className="text-[9px] text-emerald-600 font-medium">Secure Session</span>
                </div>
                <p className="text-[9px] text-gray-400 font-light">Anonymous · No PII · AES-256</p>
              </div>
            </div>
          </div>

          {/* Main chat area */}
          <div className="p-6 space-y-5">
            {/* User message */}
            <div style={{
              maxWidth: "72%",
              marginLeft: "auto",
              padding: "12px 16px",
              borderRadius: "18px 18px 4px 18px",
              background: "rgba(59,130,246,0.07)",
              border: "1px solid rgba(59,130,246,0.1)",
            }}>
              <p className="text-[13px] text-gray-700 font-light">I'm a veteran with a disability rating. I lost my job last month and I have two kids. What benefits might I qualify for?</p>
            </div>

            {/* AI response */}
            <div style={{ padding: "16px 20px", borderRadius: "20px 20px 20px 4px", background: "rgba(0,0,0,0.012)", border: "1px solid rgba(0,0,0,0.05)" }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)" }}>
                  <IconBot size={14} color="#1d4ed8" />
                </div>
                <span className="text-[12px] text-gray-500 font-light">
                  Analyzed <span className="text-blue-600 font-medium">14 federal and state programs</span>
                </span>
                <span className="text-[10px] text-gray-300 ml-2">2.1s</span>
              </div>

              {/* Benefit Cards */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {benefitCards.map((bc) => (
                  <div key={bc.title} className="p-4 rounded-2xl bg-white" style={{ border: `1px solid ${bc.borderColor}` }}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-[13px] font-medium text-gray-900">{bc.title}</p>
                        <p className="text-[10px] font-mono mt-0.5" style={{ color: bc.codeColor }}>{bc.code}</p>
                      </div>
                      <ConfRing size={36} r={14} stroke={bc.ringStroke} offset={bc.ringOffset} label={bc.ringLabel} />
                    </div>
                    <p className="text-[11px] text-gray-400 font-light">{bc.description}</p>
                    <div className="flex items-center gap-2 mt-2.5">
                      {bc.pill}
                      <span className="text-[9px] text-gray-400">{bc.estimate}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Secondary benefits */}
              <div className="flex gap-3 mb-4">
                {[
                  { title: "CHIP/Medicaid", tag: "Dependents", desc: "Children's coverage based on income level" },
                  { title: "VA Voc Rehab (Ch. 31)", tag: "Training", desc: "Job training and employment assistance" },
                ].map((item) => (
                  <div key={item.title} className="flex-1 p-3 rounded-xl" style={{ background: "rgba(139,92,246,0.03)", border: "1px solid rgba(139,92,246,0.1)" }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px] font-medium text-gray-800">{item.title}</span>
                      <Pill type="v">{item.tag}</Pill>
                    </div>
                    <p className="text-[10px] text-gray-400 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Next Steps */}
              <div className="p-4 rounded-2xl" style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.12)" }}>
                <p className="text-[11px] text-blue-700 font-medium mb-3">Recommended Next Steps</p>
                <div className="grid grid-cols-4 gap-2">
                  {nextSteps.map((step) => (
                    <div key={step.label} className="p-2.5 rounded-xl bg-white text-center" style={{ border: "1px solid rgba(59,130,246,0.1)" }}>
                      <div className="flex justify-center mb-1">{step.icon}</div>
                      <p className="text-[10px] text-blue-700">{step.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: "10px 20px",
          borderTop: "1px solid rgba(0,0,0,0.04)",
          background: "rgba(0,0,0,0.008)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div className="flex items-center gap-3">
            <IconShieldCheck size={14} color="#9ca3af" />
            <span className="text-[10px] text-gray-400 font-light">Anonymous session · No PII stored · Informational only · Not legal advice</span>
          </div>
          <span className="text-[10px] text-gray-300 font-mono">Mentis OS v3.2</span>
        </div>
      </div>
    </div>
  );
}