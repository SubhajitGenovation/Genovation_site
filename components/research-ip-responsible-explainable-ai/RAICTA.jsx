"use client";

import { ArrowRight } from "lucide-react";

export default function RAICTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-teal opacity-20" />
      <div className="orb w-[500px] h-[500px] bg-teal-400/[0.05]" style={{ top: "-20%", left: "20%" }} />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-6 r-up">
          Research & Governance Inquiries
        </h2>
        <p className="text-lg text-gray-500 mb-10 font-light r-up">
          For discussions related to responsible AI deployment, explainability, or governance frameworks.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12 r-up">
          <button className="hero-cta-primary px-8 py-3.5 rounded-full text-white text-sm font-light tracking-wider flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-700 hover:border-teal-500/30 hover:text-teal-600 text-sm font-light tracking-wider transition-all">
            Research Collaboration
          </button>
        </div>

        <div className="p-8 rounded-2xl bg-teal-500/[0.04] border border-teal-500/[0.12] r-up">
          <p className="text-xl text-gray-700 font-light leading-relaxed">
            "Responsible AI in Practice: systems that can be{" "}
            <span className="text-gradient-teal font-medium">
              explained, audited, governed, and defended.
            </span>"
          </p>
        </div>
      </div>
    </section>
  );
}
