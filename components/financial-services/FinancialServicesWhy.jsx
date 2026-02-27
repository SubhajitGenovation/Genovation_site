"use client";

import { ShieldCheck, Calendar, Eye, Target } from "lucide-react";

const reasons = [
  { icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />, title: "Built for regulators, not demos",      sub: "Designed to pass scrutiny, not just impress stakeholders"   },
  { icon: <Calendar className="w-5 h-5 text-emerald-700" />,    title: "Designed for long-term compliance",   sub: "Not short-term pilots that stall at production"            },
  { icon: <Eye className="w-5 h-5 text-emerald-700" />,         title: "Focused on explainability",           sub: "Not just automation without accountability"                },
  { icon: <Target className="w-5 h-5 text-emerald-700" />,      title: "Aligned with risk frameworks",        sub: "Integrated with institutional governance structures"       },
];

export default function FinancialServicesWhy() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 mesh-bg opacity-[0.08]" />
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] text-gray-400 tracking-[0.25em] uppercase">Why Genovation</span>
          <h2 className="display-section text-4xl md:text-5xl text-gray-900 mt-4 mb-4">
            Why Financial Institutions Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {reasons.map((r) => (
            <div key={r.title} className="flex items-start gap-4 p-6 rounded-xl bg-white/60 border border-gray-100 r-up">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                {r.icon}
              </div>
              <div>
                <p className="text-gray-800 font-normal text-[15px] mb-0.5">{r.title}</p>
                <p className="text-sm text-gray-400 font-light">{r.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card-accent p-6 rounded-xl text-center r-up">
          <p className="text-emerald-800 font-normal text-lg">
            Our systems are deployed where scrutiny is expected — not avoided.
          </p>
        </div>
      </div>
    </section>
  );
}
