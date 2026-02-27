"use client";

export default function CTASection() {
  return (
    <section className="py-48 relative" id="cta">
      <div
        className="orb"
        style={{
          width: 800,
          height: 800,
          background:
            "linear-gradient(135deg,rgba(16,185,129,0.06),rgba(6,182,212,0.04),rgba(139,92,246,0.06))",
          top: "10%",
          left: "20%",
        }}
      />
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2
          className="display-hero mb-12 r-up"
          style={{ fontSize: "clamp(3.5rem,9vw,9rem)", lineHeight: 1 }}
        >
          Ready to Deploy
          <br />
          <span className="text-gradient">
            Governed
            <br />
            Intelligence?
          </span>
        </h2>

        <p className="text-lg text-gray-500 font-light mb-16 leading-relaxed r-up max-w-xl mx-auto">
          Mentis AgentOS powers Genovation's intelligence products. Learn how it
          can transform your enterprise AI deployment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
          <button className="px-8 py-3.5 rounded-full hero-cta-primary text-black text-[15px] font-normal flex items-center gap-3 group">
            Request Technical Briefing
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[15px] font-light flex items-center gap-3 hover:bg-black/[0.08] transition-all">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Download Architecture Guide
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12 r-up">
          {[
            { label: "Knowledge Intelligence", color: "emerald" },
            { label: "Analytics Intelligence", color: "cyan" },
            { label: "Strategy & Research",    color: "blue" },
            { label: "CX Intelligence",        color: "violet" },
          ].map((tag) => (
            <span
              key={tag.label}
              className={`px-4 py-2 rounded-full bg-${tag.color}-500/[0.08] border border-${tag.color}-500/[0.15] text-${tag.color}-600 text-[11px] font-light`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
