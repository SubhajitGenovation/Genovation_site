"use client";
import { ArrowRight } from "lucide-react";

export default function ResearchCTA() {
  return (
    <section className="py-40 relative overflow-hidden" id="cta">
      <div className="orb w-[800px] h-[600px] bg-indigo-500/[0.05]" style={{ top: "0", left: "20%" }}></div>
      <div className="orb w-[500px] h-[400px] bg-violet-500/[0.04]" style={{ bottom: "0", right: "20%" }}></div>

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        {/* h2 has its own scale animation via ResearchScrollSetup — NOT r-up */}
        <h2
          className="display-hero text-6xl md:text-8xl lg:text-[9rem] mb-12"
          style={{ opacity: 0 }}
        >
          Engage<br /><span className="text-gradient">Research.</span>
        </h2>

        <p className="text-lg text-gray-500 font-light mb-16 leading-relaxed r-up max-w-xl mx-auto">
          We collaborate selectively with enterprises, government bodies, and research institutions exploring regulated AI deployment, cryptographic analytics, or explainable intelligence systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
          <div className="mag-btn">
            <a href="#" className="btn-inner inline-flex items-center gap-2 px-8 py-4 rounded-full hero-cta-primary text-white text-[15px] font-normal">
              <span>Contact Research Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mag-btn">
            <a href="#" className="btn-inner px-8 py-4 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[15px] font-light hover:bg-black/[0.08] transition-all">
              Collaboration Inquiries
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12 r-up">
          <span className="px-4 py-2 rounded-full bg-indigo-500/[0.08] border border-indigo-500/[0.15] text-indigo-600 text-[11px] font-light">Patent-Pending SDCA</span>
          <span className="px-4 py-2 rounded-full bg-violet-500/[0.08] border border-violet-500/[0.15] text-violet-600 text-[11px] font-light">Mentis OS</span>
          <span className="px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.15] text-emerald-600 text-[11px] font-light">CipherVault</span>
          <span className="px-4 py-2 rounded-full bg-cyan-500/[0.08] border border-cyan-500/[0.15] text-cyan-600 text-[11px] font-light">4 Research Areas</span>
        </div>
      </div>
    </section>
  );
}