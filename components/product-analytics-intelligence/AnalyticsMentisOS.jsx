"use client";
import {
  GitMerge, ShieldCheck, Activity,
  FileSearch, ArrowRight,
} from "lucide-react";

const cards = [
  {
    icon: <GitMerge className="w-5 h-5 text-amber-500 mb-3" />,
    title: "Coordinated Reasoning",
    desc: "Multiple AI agents working in concert with human oversight",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500 mb-3" />,
    title: "Governed Execution",
    desc: "Policy-enforced workflows with approval gates",
  },
  {
    icon: <Activity className="w-5 h-5 text-cyan-500 mb-3" />,
    title: "Real-Time Oversight",
    desc: "Live monitoring of all agent decisions and actions",
  },
  {
    icon: <FileSearch className="w-5 h-5 text-violet-500 mb-3" />,
    title: "Enterprise Auditability",
    desc: "Complete lineage for compliance and governance",
  },
];

export default function AnalyticsMentisOS() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg,#faf9f7 0%,#f5f3f0 100%)",
      }}
    >
      <div
        className="orb w-[600px] h-[500px] bg-amber-500/[0.03]"
        style={{ top: "10%", left: "20%" }}
      />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="r-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <span className="text-[11px] text-amber-600 font-mono tracking-widest uppercase">
                Foundation Layer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
              Powered by{" "}
              <span className="text-gradient-amber font-normal">Mentis OS</span>
            </h2>
            <p className="text-base text-gray-500 font-light leading-relaxed mb-8">
              All analytics and reasoning workflows are orchestrated by Mentis OS
              — Genovation's enterprise agentic operating system. Every
              explanation is governed, auditable, and traceable.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-amber-600 font-medium hover:text-amber-700 transition-colors"
            >
              Learn about Mentis OS <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-2 gap-3 r-up">
            {cards.map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-2xl bg-white/80 border border-black/[0.06]"
              >
                {card.icon}
                <h4 className="text-sm font-medium text-gray-800 mb-1">
                  {card.title}
                </h4>
                <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
