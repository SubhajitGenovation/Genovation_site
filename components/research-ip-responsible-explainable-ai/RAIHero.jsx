"use client";

import { ScanSearch, ShieldCheck, FileCheck, ChevronRight } from "lucide-react";

const stats = [
  { icon: <ScanSearch className="w-5 h-5 text-teal-500" />,   bg: "bg-teal-500/[0.08] border-teal-500/[0.15]",   title: "Explainable", sub: "By design" },
  { icon: <ShieldCheck className="w-5 h-5 text-violet-500" />, bg: "bg-violet-500/[0.08] border-violet-500/[0.12]", title: "Governed",    sub: "Autonomy" },
  { icon: <FileCheck className="w-5 h-5 text-blue-500" />,     bg: "bg-blue-500/[0.08] border-blue-500/[0.12]",    title: "Auditable",   sub: "Always" },
];

export default function RAIHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden" id="hero">
      {/* Nav */}

      <div className="absolute inset-0 mesh-bg-teal opacity-30" />
      <div className="orb w-[500px] h-[500px] bg-teal-400/[0.06]"    style={{ top: "-10%",  left: "15%" }} />
      <div className="orb w-[400px] h-[400px] bg-cyan-400/[0.05]"    style={{ bottom: "10%", right: "5%" }} />
      <div className="orb w-[300px] h-[300px] bg-emerald-400/[0.04]" style={{ top: "40%",   left: "55%" }} />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] mb-16 r-up">
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors font-light">Research & IP</a>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className="text-teal-500 font-light">Responsible & Explainable AI</span>
        </div>

        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/[0.06] border border-teal-500/[0.12] mb-8 r-up">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span className="text-teal-600 text-[10px] font-medium uppercase tracking-[0.2em]">
              Responsible AI Research
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-[5.5rem] display-hero text-gray-800 mb-8 r-up">
            AI That Can Be<br />
            <span className="text-gradient-teal">Defended</span>
          </h1>

          <p className="text-xl text-gray-500 mb-4 font-light max-w-3xl r-up">
            At Genovation, responsibility and explainability are not compliance checklists added after deployment.
            They are architectural requirements embedded into how intelligence systems are designed, executed, and governed.
          </p>

          <p className="text-gray-400 mb-10 font-light text-sm leading-relaxed max-w-2xl r-up">
            Our research focuses on making AI deployable in environments where decisions must be defended, not just generated.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-8 r-up">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-10 bg-black/[0.08]" />}
                <div className={`w-10 h-10 rounded-xl ${s.bg} border flex items-center justify-center`}>
                  {s.icon}
                </div>
                <div>
                  <p className="text-gray-800 text-sm font-medium">{s.title}</p>
                  <p className="text-gray-400 text-xs font-light">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
