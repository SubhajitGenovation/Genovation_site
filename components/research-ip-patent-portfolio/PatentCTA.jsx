"use client";

import { ArrowRight } from "lucide-react";

export default function PatentCTA() {
  return (
    <section className="py-40 relative overflow-hidden" id="cta">
      <div className="orb w-[800px] h-[600px] bg-amber-500/[0.05]"  style={{ top: 0,    left: "20%" }} />
      <div className="orb w-[500px] h-[400px] bg-orange-500/[0.03]" style={{ bottom: 0, right: "20%" }} />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="display-hero text-6xl md:text-8xl lg:text-[9rem] mb-12 r-scale">
          Inquiries &<br /><span className="text-gradient-amber">Diligence.</span>
        </h2>
        <p className="text-lg text-gray-500 font-light mb-16 leading-relaxed r-up max-w-xl mx-auto">
          Detailed patent documentation, filing jurisdictions, and claim summaries are available under NDA.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-full hero-cta-primary text-white text-[15px] font-normal">
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="px-8 py-4 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[15px] font-light hover:bg-black/[0.08] transition-all">
            Investor Inquiries
          </a>
        </div>
        <div className="mt-16 p-8 rounded-3xl bg-amber-500/[0.06] border border-amber-500/[0.15] r-up">
          <p className="text-xl text-gray-700 font-light leading-relaxed">
            "Our patents protect the mechanisms that make sovereign, explainable intelligence possible —{" "}
            <span className="text-gradient-amber font-medium" style={{ WebkitTextFillColor: "transparent" }}>
              not just the products you see today.
            </span>"
          </p>
        </div>
      </div>
    </section>
  );
}
