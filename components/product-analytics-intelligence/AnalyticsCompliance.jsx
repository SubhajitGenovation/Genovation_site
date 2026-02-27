"use client";
import { Eye, Lock, Server, Check } from "lucide-react";

const cards = [
  {
    icon: <Eye className="w-6 h-6 text-emerald-500" />,
    iconBg: "bg-emerald-100",
    title: "Explainability by Design",
    checkColor: "text-emerald-500",
    items: [
      "Every explanation traceable to data",
      "Reasoning paths inspectable",
      "Outputs can be challenged",
    ],
  },
  {
    icon: <Lock className="w-6 h-6 text-amber-500" />,
    iconBg: "bg-amber-100",
    title: "Governance & Control",
    checkColor: "text-emerald-500",
    items: [
      "Role-based data access",
      "Domain isolation enforced",
      "Full audit trail",
    ],
  },
  {
    icon: <Server className="w-6 h-6 text-sky-500" />,
    iconBg: "bg-sky-100",
    title: "Data Sovereignty",
    checkColor: "text-emerald-500",
    items: [
      "On-premise deployment",
      "No external API calls",
      "Air-gapped ready",
    ],
  },
];

export default function AnalyticsCompliance() {
  return (
    <section
      className="py-32 md:py-48 relative overflow-hidden"
      id="compliance"
      style={{
        background: "linear-gradient(180deg, #eeede9 0%, #e8e6e1 100%)",
      }}
    >
      <div
        className="orb w-[500px] h-[400px] bg-emerald-500/[0.03]"
        style={{ top: "10%", right: "10%" }}
      />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <span className="text-[11px] text-emerald-600 font-mono tracking-[0.2em]">06</span>
            <div className="w-8 h-px bg-emerald-500/40" />
            <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">
              Built for Accountability
            </span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl mb-6 r-up">
            Decisions That Must Be{" "}
            <br />
            <span className="text-gradient-emerald">Defended</span>
          </h2>
          <p className="text-xl text-gray-500 font-light r-up">
            Designed for regulated and high-accountability environments.
          </p>
        </div>

        {/* Cards — white, clean, shadow matching screenshot */}
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-7 rounded-2xl r-up"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6`}
              >
                {card.icon}
              </div>
              {/* Title */}
              <h3 className="text-[15px] font-semibold text-gray-800 mb-4">
                {card.title}
              </h3>
              {/* Items */}
              <div className="space-y-2.5">
                {card.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className={`w-3.5 h-3.5 ${card.checkColor} flex-shrink-0`} />
                    <span className="text-[12px] text-gray-500 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
