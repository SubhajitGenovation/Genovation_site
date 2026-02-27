"use client";

export default function AnalyticsCTA() {
  return (
    <>
      {/* CTA Section */}
      <section
        id="demo"
        className="py-32 md:py-40 relative overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        <div className="absolute inset-0 mesh-bg opacity-20" />
        <div
          className="orb w-[600px] h-[500px] bg-amber-500/[0.06]"
          style={{ top: "20%", left: "30%" }}
        />

        <div className="relative max-w-3xl mx-auto px-8 text-center">
          <h2
            className="display-section text-5xl md:text-7xl mb-6 r-up"
            id="ctaHeading"
          >
            Ready for Analytics You Can{" "}
            <span className="text-gradient-amber">Explain?</span>
          </h2>
          <p className="text-lg text-gray-400 font-light mb-10 r-up">
            If your organization needs analytics that can be explained, audited,
            and trusted — we should talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4 r-up">
            <a
              href="#"
              className="px-7 py-3 rounded-full hero-cta-primary text-white text-sm font-light tracking-wide"
            >
              Enterprise Inquiry
            </a>
            <a
              href="#"
              className="px-7 py-3 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-700 hover:border-amber-500/30 hover:text-amber-600 text-sm font-light tracking-wide transition-all"
            >
              Request a Demo
            </a>
          </div>
          <p className="mt-14 text-base text-gray-400 font-light italic r-up">
            "Good decisions require more than data. They require explanation."
          </p>
        </div>
      </section>

      {/* Footer */}
  
    </>
  );
}
