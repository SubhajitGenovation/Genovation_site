"use client";

export default function CtaSection() {
  return (
    <section
      id="demo"
      className="py-32 md:py-40 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div className="orb w-[600px] h-[400px] bg-emerald-500/[0.06]" style={{ top: "30%", left: "30%" }} />
      <div className="orb w-[400px] h-[300px] bg-cyan-500/[0.04]"    style={{ top: "20%", right: "20%" }} />

      <div className="relative max-w-3xl mx-auto px-8 text-center">
        <h2
          className="display-section text-4xl md:text-6xl mb-6"
          id="ctaHeading"
        >
          Strategy should be informed by{" "}
          <span className="text-gradient">intelligence</span>{" "}
          — not overwhelmed by information.
        </h2>

        <p className="text-xl text-gray-400 font-light mb-10 r-up">
          If your organization needs strategic intelligence that can be trusted
          at the highest levels, we should talk.
        </p>

        <div className="flex justify-center gap-4 r-up">
          <a
            href="#"
            className="px-7 py-3 rounded-full hero-cta-primary text-white text-sm font-light tracking-wide"
          >
            Request Demo
          </a>
          <a
            href="#"
            className="px-7 py-3 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-700 hover:border-emerald-500/30 hover:text-emerald-600 text-sm font-light tracking-wide transition-all"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
