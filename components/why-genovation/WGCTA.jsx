"use client";
import { ArrowRight, BookOpen } from "lucide-react";

export default function WGCTA() {
  return (
    <section id="cta" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div
        className="orb w-[800px] h-[600px] bg-emerald-500/[0.06]"
        style={{ top: "20%", left: "30%" }}
      />
      <div
        className="orb w-[400px] h-[400px] bg-violet-500/[0.05]"
        style={{ top: "10%", right: "20%" }}
      />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.12] border border-emerald-500/[0.2] mb-8 r-up">
          <span className="w-2 h-2 rounded-full bg-emerald-500 soft-pulse" />
          <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">
            Get Started
          </span>
        </div>

        {/* Heading */}
        <h2
          className="display-section text-5xl md:text-7xl lg:text-8xl mb-8"
          id="ctaHeading"
        >
          Ready for{" "}
          <span className="text-gradient">Trusted Intelligence</span>?
        </h2>

        {/* Sub */}
        <p className="text-xl text-gray-500 font-light mb-14 max-w-2xl mx-auto r-up">
          Join enterprises building AI they can actually deploy. Book a
          technical deep-dive with our team.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 r-up">
          <div className="mag-btn">
            <a
              href="#"
              className="btn-inner hero-cta-primary px-8 py-4 rounded-full text-white font-light flex items-center gap-3 text-[15px]"
            >
              Enterprise Inquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mag-btn">
            <a
              href="#"
              className="btn-inner px-8 py-4 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 font-light flex items-center gap-3 text-[15px] hover:border-emerald-500/30 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              View Documentation
            </a>
          </div>
        </div>

        {/* Quote */}
        <p className="mt-16 text-lg text-gray-400 font-light italic r-up">
          &quot;Intelligence is only valuable if it can be trusted.&quot;
        </p>
      </div>
    </section>
  );
}
