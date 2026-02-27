"use client";

import { HeartHandshake, TrendingUp, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: <HeartHandshake className="w-5 h-5 text-emerald-500" />,
    iconBg: "bg-emerald-500/[0.08] border-emerald-500/[0.12]",
    cardClass: "card-teal",
    title: "Explainability improves trust",
    body: "Stakeholders adopt systems they understand. Transparency accelerates buy-in.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
    iconBg: "bg-blue-500/[0.08] border-blue-500/[0.12]",
    cardClass: "card-blue",
    title: "Governance improves adoption",
    body: "Clear boundaries reduce deployment risk. Compliance unlocks regulated markets.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-violet-500" />,
    iconBg: "bg-violet-500/[0.08] border-violet-500/[0.12]",
    cardClass: "card-violet",
    title: "Constrained autonomy improves reliability",
    body: "Bounded systems fail gracefully. Predictable behavior enables production use.",
  },
];

export default function RAIResponsibility() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-teal opacity-15" />
      <div className="orb w-[350px] h-[350px] bg-emerald-400/[0.04]" style={{ top: "10%", right: "-3%" }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="r-left">
            <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase mb-4 font-mono">The Truth</p>
            <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-6">
              Responsibility<br />Enables Capability
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed mb-5">
              A common misconception is that responsible AI limits performance.{" "}
              <span className="text-gray-800 font-medium">Our research demonstrates the opposite.</span>
            </p>
            <p className="text-gray-400 mb-8 font-light text-sm leading-relaxed">
              Responsible AI is not a restriction—it is what makes enterprise deployment possible.
            </p>
            {/* Quote bar */}
            <div className="quote-bar p-5 rounded-r-xl bg-white/60 border border-black/[0.06] border-l-0">
              <p className="text-gray-600 italic font-light text-sm leading-relaxed">
                "Enterprises adopt Genovation systems because they can be explained, audited, governed, and defended.
                This is the standard we hold ourselves to."
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4 r-right">
            {cards.map((c, i) => (
              <div key={i} className={`card ${c.cardClass} p-5`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-11 h-11 rounded-xl ${c.iconBg} border flex items-center justify-center`}>
                    {c.icon}
                  </div>
                  <h3 className="text-gray-800 font-medium text-sm">{c.title}</h3>
                </div>
                <p className="text-sm text-gray-400 font-light">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
