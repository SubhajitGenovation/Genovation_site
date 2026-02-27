"use client";
import { FileText, ShieldCheck, SlidersHorizontal, ArrowRight, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
    iconBg: "rgba(16,185,129,0.08)",
    hoverBorder: "hover:border-emerald-500/20",
    title: "Explained",
    desc: "Every decision traceable. Every reasoning chain visible. Built for regulators and boards.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
    iconBg: "rgba(6,182,212,0.08)",
    hoverBorder: "hover:border-cyan-500/20",
    title: "Defended",
    desc: "Post-quantum cryptography. Sovereign infrastructure. Zero-trust throughout.",
  },
  {
    icon: <SlidersHorizontal className="w-6 h-6 text-violet-600" />,
    iconBg: "rgba(139,92,246,0.08)",
    hoverBorder: "hover:border-violet-500/20",
    title: "Controlled",
    desc: "Enterprise-defined policies. Real-time governance. Human override at every layer.",
  },
];

export default function CTASection() {
  return (
    <section className="py-40 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 mesh-bg opacity-10" />

      <div className="relative max-w-5xl mx-auto px-8">
        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 r-up">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`text-center p-10 rounded-2xl border border-black/[0.06] ${p.hoverBorder} transition-colors`}
            >
              <div
                className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                style={{ background: p.iconBg }}
              >
                {p.icon}
              </div>
              <h3 className="text-2xl font-light text-gray-800 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center r-up">
          <h2 className="display-hero text-5xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]">
            Intelligence earns trust<br />when it can be
          </h2>
          <h2 className="display-hero text-5xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-gradient">explained, defended,</span>
            {" "}and{" "}
            <span className="text-gradient">controlled</span>.
          </h2>

          <p className="text-lg text-gray-500 font-light mb-4">
            That is what we build.
          </p>
          <p className="text-sm text-gray-400 font-light max-w-xl mx-auto mb-12">
            Not consumer AI. Not a model API. Not data integration.<br />
            Enterprise intelligence infrastructure — sovereign, explainable, and built to earn trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 text-black text-base font-medium flex items-center gap-3 hover:scale-[1.02] transition-all">
              Request Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full bg-black/[0.04] border border-black/[0.08] text-gray-600 text-base font-light flex items-center gap-3 hover:border-emerald-500/20 transition-all">
              <BookOpen className="w-4 h-4" />
              Read Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
