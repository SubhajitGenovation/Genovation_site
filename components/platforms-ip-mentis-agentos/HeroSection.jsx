"use client";
export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" id="hero" style={{ minHeight: "120vh" }}>
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 700, height: 500, background: "rgba(16,185,129,0.07)", top: "-10%", left: "30%" }} />
      <div className="orb" style={{ width: 500, height: 400, background: "rgba(6,182,212,0.05)", bottom: "10%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8" id="heroContent">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            {/* <div className="mb-8 opacity-0" id="heroBadge">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2]">
                <div className="w-2 h-2 rounded-full bg-emerald-500" style={{ animation: "pulse-soft 2s ease-in-out infinite" }} />
                <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Core Platform</span>
              </div>
            </div> */}

            {/* Heading */}
            <h1 className="display-hero mb-6" style={{ fontSize: "clamp(3.5rem,8vw,7rem)", perspective: 1000 }} id="heroTitle">
              <span className="hero-line text-gradient" style={{ display: "block" }}>Mentis</span>
              <span className="hero-line" style={{ display: "block", color: "#111827" }}>AgentOS</span>
            </h1>

            {/* Sub 1 */}
            <div className="overflow-hidden mb-4" id="heroSub1">
              <p className="text-xl text-gray-500 font-light" style={{ transform: "translateY(100%)" }}>
                The Operating System for<br />Governed Enterprise Intelligence
              </p>
            </div>

            {/* Sub 2 */}
            <div className="overflow-hidden mb-8" id="heroSub2">
              <p className="text-[15px] text-gray-400 font-light leading-relaxed max-w-lg" style={{ transform: "translateY(100%)" }}>
                Mentis AgentOS is the foundational layer that powers every Genovation intelligence product. Designed for one purpose: to make AI systems{" "}
                <span className="text-emerald-600 font-normal">deployable</span>,{" "}
                <span className="text-cyan-600 font-normal">governable</span>, and{" "}
                <span className="text-violet-600 font-normal">trustworthy</span> inside regulated enterprises.
              </p>
            </div>

            {/* Negations */}
            <div className="opacity-0 mb-10" id="heroNegations">
              <div className="space-y-3 mb-6">
                {["Not a chatbot framework", "Not a workflow engine", "Not a collection of prompts"].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-[13px] text-gray-400 font-light">
                    <svg className="w-4 h-4 text-rose-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-[14px] text-gray-900 font-normal">
                <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>An execution and governance layer for autonomous intelligence</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 opacity-0" id="heroButtons" style={{ transform: "translateY(30px)" }}>
              <a href="#capabilities" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full hero-cta-primary text-black text-[14px] font-normal">
                <span>Explore Capabilities</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#architecture" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-700 hover:border-emerald-500/30 text-[14px] font-light transition-all">
                View Architecture
              </a>
            </div>
          </div>

          {/* Hero Visualization */}
          <div className="r-up">
            <div className="card p-8 relative" style={{ borderRadius: 24 }}>
              <svg className="w-full" viewBox="0 0 500 500">
                <polygon points="250,175 305,205 305,255 250,285 195,255 195,205" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="2" />
                <text x="250" y="228" textAnchor="middle" fill="#059669" fontSize="14" fontWeight="600" fontFamily="Urbanist">MENTIS</text>
                <text x="250" y="248" textAnchor="middle" fill="#059669" fontSize="11" fontFamily="Urbanist" opacity="0.7">AgentOS</text>
                <line x1="250" y1="175" x2="250" y2="125" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
                <line x1="305" y1="230" x2="330" y2="230" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
                <line x1="250" y1="285" x2="250" y2="375" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
                <line x1="195" y1="230" x2="170" y2="230" stroke="#fb7185" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
                <g transform="translate(250, 80)">
                  <rect x="-55" y="-28" width="110" height="56" rx="10" fill="rgba(139,92,246,0.06)" stroke="#8b5cf6" strokeWidth="1.5" />
                  <text x="0" y="-5" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="600" fontFamily="Urbanist">AI MODELS</text>
                  <text x="0" y="12" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontFamily="Urbanist" opacity="0.6">SLMs / LLMs</text>
                </g>
                <g transform="translate(395, 230)">
                  <rect x="-55" y="-28" width="110" height="56" rx="10" fill="rgba(6,182,212,0.06)" stroke="#06b6d4" strokeWidth="1.5" />
                  <text x="0" y="-5" textAnchor="middle" fill="#0891b2" fontSize="10" fontWeight="600" fontFamily="Urbanist">ENTERPRISE</text>
                  <text x="0" y="12" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="Urbanist" opacity="0.6">Data Systems</text>
                </g>
                <g transform="translate(250, 410)">
                  <rect x="-55" y="-28" width="110" height="56" rx="10" fill="rgba(251,191,36,0.08)" stroke="#f59e0b" strokeWidth="1.5" />
                  <text x="0" y="-5" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="600" fontFamily="Urbanist">EXECUTION</text>
                  <text x="0" y="12" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="Urbanist" opacity="0.6">Environments</text>
                </g>
                <g transform="translate(105, 230)">
                  <rect x="-55" y="-28" width="110" height="56" rx="10" fill="rgba(251,113,133,0.06)" stroke="#fb7185" strokeWidth="1.5" />
                  <text x="0" y="-5" textAnchor="middle" fill="#e11d48" fontSize="10" fontWeight="600" fontFamily="Urbanist">SECURITY</text>
                  <text x="0" y="12" textAnchor="middle" fill="#fb7185" fontSize="8" fontFamily="Urbanist" opacity="0.6">Compliance</text>
                </g>
                <circle cx="250" cy="148" r="3" fill="#8b5cf6" opacity="0.6" />
                <circle cx="318" cy="230" r="3" fill="#06b6d4" opacity="0.6" />
                <circle cx="250" cy="330" r="3" fill="#f59e0b" opacity="0.6" />
                <circle cx="182" cy="230" r="3" fill="#fb7185" opacity="0.6" />
              </svg>
              <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.15]">
                <span className="text-[10px] font-mono text-emerald-600">GOVERNED_EXECUTION</span>
              </div>
              <div className="absolute bottom-6 left-6 px-3 py-1.5 rounded-full bg-cyan-500/[0.08] border border-cyan-500/[0.15]">
                <span className="text-[10px] font-mono text-cyan-600">REAL_TIME_OVERSIGHT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0" id="scrollCue">
        <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-light">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400/50 to-transparent" />
      </div>
    </section>
  );
}
