"use client";

import { Calendar, FileText } from "lucide-react";

export default function DeploymentCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div className="orb" style={{ width: 500, height: 500, background: "rgba(99,102,241,0.05)", top: "-20%", left: "20%" }} />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-[10px] text-indigo-500/80 tracking-[0.3em] uppercase mb-6 font-mono r-up">The Principle</p>

        <blockquote className="text-3xl md:text-4xl display-section text-gray-800 mb-6 r-up">
          "Intelligence should adapt to the enterprise —{" "}
          <span className="text-gradient-indigo">not force the enterprise to adapt to intelligence.</span>"
        </blockquote>

        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-10 font-light r-up">
          This defines Genovation's deployment philosophy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 r-up">
          <button className="hero-cta-primary px-6 py-3 rounded-full text-white text-sm font-light tracking-wider flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Schedule Review
          </button>
          <button
            className="px-6 py-3 rounded-full text-gray-700 hover:text-indigo-600 text-sm font-light tracking-wider transition-all flex items-center gap-2"
            style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)" }}
          >
            <FileText className="w-4 h-4" />
            Documentation
          </button>
        </div>
      </div>
    </section>
  );
}