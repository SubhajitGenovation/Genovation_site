"use client";

import { ArrowRight } from "lucide-react";

export default function ResearchCTA() {
  return (
    <section className="py-56 relative overflow-hidden" id="cta">
      <div className="orb w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/[0.06] via-cyan-500/[0.04] to-violet-500/[0.06]"
        style={{ top: "10%", left: "20%" }} />
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="display-hero text-6xl md:text-8xl lg:text-[9rem] mb-12 r-up">
          Research<br /><span className="text-gradient">Inquiries.</span>
        </h2>
        <p className="text-[1.15rem] text-gray-600 font-light mb-16 leading-relaxed r-up">
          For questions about publications, collaboration opportunities, or technical briefings.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
          <button className="group hero-cta-primary px-9 py-4 rounded-full text-[15px] font-medium flex items-center gap-3">
            <span className="relative z-10 text-black flex items-center gap-3">
              Research Collaboration
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
          </button>
          <button className="px-9 py-4 rounded-full bg-white/60 border border-black/[0.1] text-gray-700 hover:border-emerald-500/30 hover:text-emerald-600 text-[15px] font-light transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
