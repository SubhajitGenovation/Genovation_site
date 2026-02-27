"use client";

export default function GovCTA() {
  return (
    <section className="py-32 relative overflow-hidden" id="cta">
      <div className="orb" style={{ width: 600, height: 400, background: "rgba(59,130,246,0.05)", bottom: "10%", left: "20%" }} />
      <div className="relative max-w-3xl mx-auto px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 r-up"
          style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)" }}
        >
          <svg className="w-3 h-3 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="22" x2="21" y2="22" /><line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" />
            <line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" /><polygon points="12 2 20 7 4 7" />
          </svg>
          <span className="text-blue-600 text-[11px] font-light tracking-[0.25em] uppercase">Get Started</span>
        </div>

        <h2 className="display-section text-5xl md:text-7xl mb-6 r-up">
          Engage with <span className="text-gradient-blue">Us</span>
        </h2>

        <p className="text-lg text-gray-500 font-light mb-12 r-up">
          If your agency is exploring AI adoption while maintaining public trust, sovereignty, and accountability, we welcome a discussion.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16 r-up">
          <div className="mag-btn">
            <button
              className="btn-inner inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-normal hero-cta"
            >
              <span>Government Inquiries</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
          <div className="mag-btn">
            <button
              className="btn-inner px-8 py-4 rounded-full text-gray-600 font-light transition-all"
              style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)" }}
            >
              Schedule Briefing
            </button>
          </div>
        </div>

        <div
          className="p-8 rounded-3xl r-scale"
          style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.15)" }}
        >
          <p className="text-xl text-gray-900 font-light leading-relaxed">
            &ldquo;In government, intelligence must{" "}
            <span className="text-gradient-blue font-normal">
              serve the public interest with full accountability
            </span>
            . Genovation is built for that responsibility.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}