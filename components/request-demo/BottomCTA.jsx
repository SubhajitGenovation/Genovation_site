"use client";

import { ArrowUp, MessageSquare } from "lucide-react";

export default function BottomCTA() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      id="bottomCta"
      style={{ background: "var(--bg)" }}
    >
      {/* Subtle scroll lines visible in screenshot */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px opacity-20"
        style={{ background: "linear-gradient(180deg,transparent,#10b981 30%,#06b6d4 70%,transparent)" }}
      />
      <div
        className="absolute right-48 top-0 bottom-0 w-px opacity-10"
        style={{ background: "linear-gradient(180deg,transparent,#10b981 40%,transparent)" }}
      />

      <div className="relative max-w-3xl mx-auto px-8 text-center">

        {/* Heading */}
        <h2 className="display-section text-4xl md:text-5xl text-gray-900 mb-5 r-up">
          Still Deciding?
        </h2>

        {/* Subtext */}
        <p className="text-[15px] text-gray-500 font-light mb-10 leading-relaxed r-up">
          If you're not ready for a demo, we're happy to start with a
          conversation. No pressure, no pitch — just answers.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
          {/* Primary — dark, rounded pill-ish, matches screenshot */}
          <a
            href="#hero"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-white text-[14px] font-medium transition-all hover:opacity-90"
            style={{
              background: "#111827",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              textDecoration: "none",
            }}
          >
            <span>Request a Demo</span>
            <ArrowUp className="w-4 h-4" />
          </a>

          {/* Secondary — outlined, light */}
          <a
            href="#"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-[14px] text-gray-600 font-light transition-all hover:border-black/[0.2]"
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              textDecoration: "none",
              background: "transparent",
            }}
          >
            <MessageSquare className="w-4 h-4 text-gray-400" />
            Talk to Sales Instead
          </a>
        </div>

        {/* Company tag pill */}
        <div className="mt-14 r-up">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 soft-pulse" />
            <span className="text-[12px] text-gray-600 font-light">
              Genovation Technological Solutions Pvt. Ltd.
            </span>
            <span className="text-gray-300 font-mono">·</span>
            <span className="text-[12px] text-gray-400 font-light">
              Enterprise Intelligence. Sovereign by Design.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
