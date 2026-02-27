"use client";
export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 500, height: 400, background: "rgba(139,92,246,0.04)", top: "15%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.2] mb-8 r-up">
            <svg className="w-3 h-3 text-violet-600/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
            <span className="text-violet-600/80 text-[11px] font-light tracking-[0.25em] uppercase">Architecture</span>
          </div>
          <h2 className="display-section r-up" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
            Where Mentis AgentOS <span style={{ background: "linear-gradient(135deg,#8b5cf6,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Sits</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Between AI models, enterprise data, execution environments, and security controls.
          </p>
        </div>

        <div className="card p-10 r-scale" style={{ borderRadius: 24 }}>
          <svg className="w-full h-[500px]" viewBox="0 0 800 500">
            <defs>
              <linearGradient id="archGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <g transform="translate(400, 60)">
              <rect x="-300" y="-40" width="600" height="80" rx="12" fill="rgba(139,92,246,0.06)" stroke="#8b5cf6" strokeWidth="1.5"/>
              <text x="0" y="-10" textAnchor="middle" fill="#7c3aed" fontSize="14" fontWeight="600" fontFamily="Urbanist">GENOVATION PRODUCTS</text>
              <text x="-180" y="15" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontFamily="Urbanist" opacity="0.6">Knowledge Intelligence</text>
              <text x="-20" y="15" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontFamily="Urbanist" opacity="0.6">Analytics Intelligence</text>
              <text x="140" y="15" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontFamily="Urbanist" opacity="0.6">CX Intelligence</text>
            </g>
            <line x1="400" y1="100" x2="400" y2="140" stroke="#8b5cf6" strokeWidth="2"/>
            <g transform="translate(400, 200)">
              <rect x="-320" y="-50" width="640" height="100" rx="16" fill="url(#archGrad)" stroke="#10b981" strokeWidth="3"/>
              <text x="0" y="-15" textAnchor="middle" fill="#059669" fontSize="18" fontWeight="700" fontFamily="Urbanist">MENTIS AGENTOS</text>
              <text x="0" y="15" textAnchor="middle" fill="#10b981" fontSize="11" fontFamily="Urbanist" opacity="0.7">Orchestration · Governance · Execution · Monitoring · Audit</text>
              <rect x="-320" y="-50" width="640" height="100" rx="16" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite"/>
              </rect>
            </g>
            <line x1="200" y1="250" x2="200" y2="290" stroke="#10b981" strokeWidth="2"/>
            <line x1="400" y1="250" x2="400" y2="290" stroke="#10b981" strokeWidth="2"/>
            <line x1="600" y1="250" x2="600" y2="290" stroke="#10b981" strokeWidth="2"/>
            <g transform="translate(200, 350)">
              <rect x="-120" y="-50" width="240" height="100" rx="12" fill="rgba(6,182,212,0.06)" stroke="#06b6d4" strokeWidth="1.5"/>
              <text x="0" y="-20" textAnchor="middle" fill="#0891b2" fontSize="12" fontWeight="600" fontFamily="Urbanist">AI MODELS</text>
              <text x="0" y="5" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="Urbanist" opacity="0.6">SLMs · LLMs</text>
              <text x="0" y="25" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="Urbanist" opacity="0.6">Efficient Inference</text>
            </g>
            <g transform="translate(400, 350)">
              <rect x="-100" y="-50" width="200" height="100" rx="12" fill="rgba(251,191,36,0.08)" stroke="#f59e0b" strokeWidth="1.5"/>
              <text x="0" y="-20" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="600" fontFamily="Urbanist">ENTERPRISE DATA</text>
              <text x="0" y="5" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="Urbanist" opacity="0.6">Data Backbone</text>
              <text x="0" y="25" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="Urbanist" opacity="0.6">Knowledge Bases</text>
            </g>
            <g transform="translate(600, 350)">
              <rect x="-100" y="-50" width="200" height="100" rx="12" fill="rgba(251,113,133,0.06)" stroke="#fb7185" strokeWidth="1.5"/>
              <text x="0" y="-20" textAnchor="middle" fill="#e11d48" fontSize="12" fontWeight="600" fontFamily="Urbanist">SECURITY</text>
              <text x="0" y="5" textAnchor="middle" fill="#fb7185" fontSize="10" fontFamily="Urbanist" opacity="0.6">CipherVault</text>
              <text x="0" y="25" textAnchor="middle" fill="#fb7185" fontSize="10" fontFamily="Urbanist" opacity="0.6">Post-Quantum</text>
            </g>
            <g transform="translate(400, 470)">
              <rect x="-300" y="-30" width="600" height="60" rx="8" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="4,2"/>
              <text x="0" y="5" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="11" fontFamily="Urbanist">ENTERPRISE INFRASTRUCTURE (On-Premise · Private Cloud · Air-Gapped)</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
