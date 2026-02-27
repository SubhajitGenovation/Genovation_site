"use client";

import { Plug, ShieldCheck, Rocket, ArrowRight, BookOpen } from "lucide-react";

export default function CXCTA() {
  return (
    <section id="cta" className="py-56 relative overflow-hidden">
      <div className="orb" style={{
        width: 800, height: 800,
        background: "linear-gradient(135deg,rgba(245,158,11,0.06),rgba(234,88,12,0.04),rgba(239,68,68,0.06))",
        top: "10%", left: "20%",
      }} />
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2
          id="ctaHeading"
          className="display-hero mb-12"
          style={{ fontSize: "clamp(3.5rem,9vw,9rem)" }}
        >
          Intelligence<br /><span className="text-gradient">That<br />Acts</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-16" id="ctaCards">
          {[
            { Icon: Plug,        color: "text-amber-600",  text: "Connect to any API, execute any code" },
            { Icon: ShieldCheck, color: "text-emerald-600",text: "Every action governed and auditable" },
            { Icon: Rocket,      color: "text-blue-600",   text: "Deploy on your infrastructure, day one" },
          ].map(({ Icon, color, text }) => (
            <div key={text} className="card p-6">
              <Icon className={`w-6 h-6 ${color} mx-auto mb-3`} />
              <p className="text-[15px] text-gray-500 font-light">{text}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 font-light mb-16 leading-relaxed r-up" style={{ fontSize: "1.15rem" }}>
          Customer intelligence should empower engagement — not introduce risk.<br />
          <span style={{ color: "rgba(245,158,11,0.9)" }}>We built the platform that delivers both.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
          <button
            className="group px-8 py-3.5 rounded-full text-white text-[15px] font-normal flex items-center gap-3 transition-all"
            style={{ background: "linear-gradient(to right,#f59e0b,#ea580c)" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(245,158,11,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          >
            Schedule Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="px-8 py-3.5 rounded-full text-gray-600 text-[15px] font-light flex items-center gap-3 transition-all"
            style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.25)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)"; }}
          >
            <BookOpen className="w-4 h-4" /> Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
