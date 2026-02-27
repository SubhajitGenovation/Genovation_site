"use client";

import { Boxes, BookOpenCheck, BarChart2, Target, Headphones, Layers } from "lucide-react";

const products = [
  { icon: <BookOpenCheck className="w-7 h-7 text-emerald-500" />, bg: "bg-emerald-500/[0.08]", title: "Knowledge Intelligence", desc: "Discovery, synthesis, and retrieval" },
  { icon: <BarChart2 className="w-7 h-7 text-violet-500" />, bg: "bg-violet-500/[0.08]", title: "Analytics Intelligence", desc: "Pattern recognition, decision support" },
  { icon: <Target className="w-7 h-7 text-cyan-500" />, bg: "bg-cyan-500/[0.08]", title: "Strategy Intelligence", desc: "Research, planning, management" },
  { icon: <Headphones className="w-7 h-7 text-amber-500" />, bg: "bg-amber-500/[0.08]", title: "CX Intelligence", desc: "Customer experience optimization" },
];

export default function TechProducts() {
  return (
    <section className="py-48 relative section-bg-cool" id="products">
      <div className="absolute inset-0 mesh-bg opacity-10" />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="section-badge bg-emerald-500/[0.06] border border-emerald-500/[0.12] mb-10 r-up inline-flex">
            <Boxes className="w-3 h-3 text-emerald-500" />
            <span className="text-emerald-700 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">Product Suite</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-[5.5rem] r-up">
            From Foundation to <span className="text-gradient">Product</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {products.map((p, i) => (
            <div key={i} className="card p-8 r-up">
              <div className={`w-14 h-14 rounded-2xl ${p.bg} flex items-center justify-center mb-5`}>
                {p.icon}
              </div>
              <h3 className="text-[16px] text-gray-800 mb-2">{p.title}</h3>
              <p className="text-[12px] text-gray-400 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="card p-8 r-scale" style={{ boxShadow: "var(--shadow-emerald)" }}>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-800 font-medium">Technology Foundation</span>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <p className="text-[14px] text-gray-500 font-light">Secure · Explainable · Sovereign</p>
          </div>
        </div>
      </div>
    </section>
  );
}
