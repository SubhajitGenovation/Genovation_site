"use client";

import { Database, Scale, AlertTriangle, Cloud, EyeOff, FileX, UsersRound, Server, Eye, ScrollText, ShieldCheck } from "lucide-react";

const problems = [
  { icon: <Database className="w-6 h-6 text-red-400" />,       bg: "bg-red-50 border-red-100",    title: "Data Cannot Leave",              body: "Customer data, transaction records, and risk models are governed by strict residency and confidentiality rules." },
  { icon: <Scale className="w-6 h-6 text-amber-500" />,         bg: "bg-amber-50 border-amber-100", title: "Decisions Must Be Defensible",   body: "From credit to procurement, every decision must be explainable to regulators, auditors, and oversight committees." },
  { icon: <AlertTriangle className="w-6 h-6 text-rose-400" />,  bg: "bg-rose-50 border-rose-100",   title: "Black-Box AI Is a Liability",    body: "Untraceable outputs introduce regulatory risk and governance failures — often worse than manual processes." },
];

const badItems = [
  { icon: <Cloud className="w-4 h-4 text-red-400" />,    title: "Data leaves your infrastructure", sub: "Sent to external APIs" },
  { icon: <EyeOff className="w-4 h-4 text-red-400" />,  title: "Black-box responses",             sub: "No visibility into reasoning" },
  { icon: <FileX className="w-4 h-4 text-red-400" />,   title: "No audit trail",                  sub: "Cannot reconstruct decisions" },
  { icon: <UsersRound className="w-4 h-4 text-red-400" />, title: "No access controls",            sub: "Everyone sees everything" },
];

const goodItems = [
  { icon: <Server className="w-4 h-4 text-emerald-600" />,     title: "Data stays on-premise",    sub: "Zero external data movement" },
  { icon: <Eye className="w-4 h-4 text-emerald-600" />,        title: "Full explainability",      sub: "Every answer linked to sources" },
  { icon: <ScrollText className="w-4 h-4 text-emerald-600" />, title: "Complete audit trail",     sub: "Every query and response logged" },
  { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, title: "Role-based access",       sub: "Segregation of duties enforced" },
];

export default function FinancialServicesChallenge() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 mesh-bg opacity-[0.08]" />
      <div className="relative max-w-6xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] text-gray-400 tracking-[0.25em] uppercase">The Challenge</span>
          <h2 className="display-section text-4xl md:text-5xl text-gray-900 mt-4 mb-4">
            The Reality of AI in Financial Services
          </h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto">Why most AI initiatives stall after pilots.</p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {problems.map((p) => (
            <div key={p.title} className="card p-8 r-up">
              <div className={`w-12 h-12 rounded-xl ${p.bg} border flex items-center justify-center mb-5`}>
                {p.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Warning callout */}
        <div className="card-warn p-5 text-center max-w-3xl mx-auto mb-20 r-up">
          <p className="text-amber-800/80 font-normal text-[15px]">
            Many AI initiatives stall after pilots — unable to meet governance requirements for production deployment.
          </p>
        </div>

        {/* Comparison */}
        <div className="card p-8 md:p-10 r-up">
          <h3 className="text-center text-xl font-medium text-gray-900 mb-10">
            Traditional AI vs. Genovation Approach
          </h3>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Bad */}
            <div className="compare-bad p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center">
                  <span className="text-red-500 font-medium">✕</span>
                </div>
                <h4 className="text-base font-medium text-red-800">Traditional AI</h4>
              </div>
              <div className="space-y-3">
                {badItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/60">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-sm text-gray-700 font-light">{item.title}</p>
                      <p className="text-[11px] text-gray-400 font-light">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-3 rounded-xl bg-red-50 border border-red-100 text-center">
                <p className="text-xs text-red-600 font-medium">✕ Fails compliance review</p>
              </div>
            </div>

            {/* Good */}
            <div className="compare-good p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-700 font-medium">✓</span>
                </div>
                <h4 className="text-base font-medium text-emerald-800">Genovation</h4>
              </div>
              <div className="space-y-3">
                {goodItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/60">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-sm text-gray-700 font-light">{item.title}</p>
                      <p className="text-[11px] text-gray-400 font-light">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                <p className="text-xs text-emerald-700 font-medium">✓ Production-ready for regulated environments</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
