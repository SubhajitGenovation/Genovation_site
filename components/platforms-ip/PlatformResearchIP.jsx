"use client";

import { FlaskConical, Brain, FileSearch, EyeOff, ShieldCheck, Check } from "lucide-react";

const researchCards = [
  { icon: <Brain className="w-5 h-5 text-emerald-600" />,     iconBg: "bg-emerald-500/[0.12]", cardClass: "card-emerald", title: "Efficient Reasoning",    body: "Advanced architectures for enterprise-scale inference" },
  { icon: <FileSearch className="w-5 h-5 text-cyan-600" />,   iconBg: "bg-cyan-500/[0.12]",    cardClass: "card-cyan",    title: "Explainable Systems",   body: "Transparent decision paths for regulatory compliance" },
  { icon: <EyeOff className="w-5 h-5 text-violet-600" />,     iconBg: "bg-violet-500/[0.12]",  cardClass: "card-violet",  title: "Privacy-Preserving",    body: "Analytics without data exposure" },
  { icon: <ShieldCheck className="w-5 h-5 text-amber-600" />, iconBg: "bg-amber-500/[0.12]",   cardClass: "card-amber",   title: "Secure Execution",      body: "Controlled autonomous operation" },
];

const outcomes = [
  { color: "emerald", label: "inside your environment" },
  { color: "cyan",    label: "explained and audited" },
  { color: "violet",  label: "scale without losing control" },
  { color: "amber",   label: "hidden security debt", negative: true },
];

export default function PlatformResearchIP() {
  return (
    <section className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-violet-500/[0.04]" style={{ top: "15%", right: "15%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/[0.08] border border-rose-500/[0.15] mb-8 r-up">
            <FlaskConical className="w-3 h-3 text-rose-600" />
            <span className="text-rose-600 text-[11px] font-light tracking-[0.25em] uppercase">Research & IP</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Research-Driven,<br /><span className="text-gradient-violet">IP-Backed</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-16">
          {researchCards.map((c, i) => (
            <div key={i} className={`card ${c.cardClass} p-6 text-center r-up`}>
              <div className={`w-11 h-11 rounded-xl ${c.iconBg} flex items-center justify-center mx-auto mb-4`}>{c.icon}</div>
              <h4 className="text-[14px] font-medium text-gray-800 mb-1">{c.title}</h4>
              <p className="text-[12px] text-gray-500 font-light">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-10 !rounded-2xl r-up">
            <h3 className="display-inter text-2xl md:text-3xl text-gray-800 text-center mb-6">
              What This Means for Customers
            </h3>
            <p className="text-[15px] text-gray-500 font-light text-center mb-8 leading-relaxed">
              These platforms are not exposed as tools. They exist to ensure that when you deploy Genovation intelligence:
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/[0.12] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <p className="text-[14px] text-gray-600 font-light">
                    {o.negative
                      ? <>It does not create <span className={`text-${o.color}-600 font-medium`}>no {o.label}</span></>
                      : <>It {i === 0 ? "remains" : i === 1 ? "can be" : "can"} <span className={`text-${o.color}-600 font-medium`}>{o.label}</span></>
                    }
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center pt-6 border-t border-black/[0.04]">
              <p className="text-[14px] text-gray-400 font-light">
                Customers experience products. These foundations ensure those products can survive{" "}
                <span className="text-emerald-600">real-world scrutiny</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
