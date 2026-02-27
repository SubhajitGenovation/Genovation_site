"use client";

import { FlaskConical, BrainCircuit, Network, Users, EyeOff, FileBadge, BarChart3, BookOpen } from "lucide-react";

const researchCards = [
  { icon: <BrainCircuit className="w-7 h-7 text-cyan-500" />, bg: "bg-cyan-500/[0.08]", title: "Explainable AI", desc: "Systems that justify reasoning" },
  { icon: <Network className="w-7 h-7 text-violet-500" />, bg: "bg-violet-500/[0.08]", title: "Efficient Reasoning", desc: "Optimized for enterprise" },
  { icon: <Users className="w-7 h-7 text-emerald-500" />, bg: "bg-emerald-500/[0.08]", title: "Multi-Agent Security", desc: "Secure agent coordination" },
  { icon: <EyeOff className="w-7 h-7 text-amber-500" />, bg: "bg-amber-500/[0.08]", title: "Privacy Analytics", desc: "Computation without exposure" },
];

const rdBadges = [
  { icon: <FileBadge className="w-5 h-5 text-rose-400" />, title: "Patent-Pending", desc: "Novel mechanisms protected" },
  { icon: <BarChart3 className="w-5 h-5 text-rose-400" />, title: "Benchmark-Validated", desc: "Performance verified" },
  { icon: <BookOpen className="w-5 h-5 text-rose-400" />, title: "Active Research", desc: "Continuous contributions" },
];

export default function TechResearch() {
  return (
    <section className="py-48 relative section-bg-cool" id="research">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[400px] bg-rose-500/[0.03]" style={{ top: "15%", right: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="section-badge bg-rose-500/[0.06] border border-rose-500/[0.12] mb-10 r-up inline-flex">
            <FlaskConical className="w-3 h-3 text-rose-400" />
            <span className="text-rose-600 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">R&D</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-[5.5rem] r-up">
            Research-Driven <span className="text-gradient-violet">Engineering</span>
          </h2>
          <p className="text-[15px] text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Systems that are difficult to replicate and easy to defend.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {researchCards.map((c, i) => (
            <div key={i} className="card p-8 text-center r-up">
              <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center mx-auto mb-5`}>
                {c.icon}
              </div>
              <h4 className="text-[15px] text-gray-800 mb-2">{c.title}</h4>
              <p className="text-[12px] text-gray-400 font-light">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 r-up">
          {rdBadges.map((b, i) => (
            <div key={i} className="card-accent p-6 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-rose-500/[0.08] flex items-center justify-center flex-shrink-0">
                {b.icon}
              </div>
              <div>
                <p className="text-[14px] text-gray-700 font-medium">{b.title}</p>
                <p className="text-[11px] text-gray-400 font-light">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
