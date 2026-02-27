"use client";
import { Gem, GitBranch, CheckCircle, ScrollText, Shield, Vault } from "lucide-react";

export default function ResearchIP() {
  return (
    <section className="py-32 relative overflow-hidden" id="ip">
      <div className="orb w-[600px] h-[400px] bg-amber-500/[0.04]" style={{ top: "5%", right: "20%" }}></div>
      <div className="orb w-[500px] h-[400px] bg-indigo-500/[0.04]" style={{ bottom: "30%", left: "10%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.1] border border-amber-500/[0.15] mb-8 r-up">
            <Gem className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">Defensible Technology</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Proprietary<br /><span className="text-gradient-amber">Intellectual Property</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Multiple proprietary systems form the foundation of our products and platforms.
          </p>
        </div>

        {/* SDCA */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="r-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/[0.1] border border-amber-500/[0.2] mb-5">
                <div className="w-2 h-2 rounded-full bg-amber-500" style={{ animation: "pulse-soft 2s ease-in-out infinite" }}></div>
                <span className="font-mono text-[10px] text-amber-600 tracking-wider">PATENT-PENDING</span>
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">Semantic Distance-Based Compression Attention</h3>
              <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-6">SDCA improves reasoning efficiency and context handling in language models while dramatically reducing computational overhead.</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/[0.15] text-center">
                  <div className="text-2xl font-semibold text-gray-900">4x</div>
                  <div className="text-[10px] text-gray-500 font-light">Context Window</div>
                </div>
                <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/[0.15] text-center">
                  <div className="text-2xl font-semibold text-gray-900">60%</div>
                  <div className="text-[10px] text-gray-500 font-light">Less Compute</div>
                </div>
                <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/[0.15] text-center">
                  <div className="text-2xl font-semibold text-gray-900">Edge</div>
                  <div className="text-[10px] text-gray-500 font-light">Deployable</div>
                </div>
              </div>
            </div>

            <div className="r-right">
              <div className="diagram-card p-8">
                <svg viewBox="0 0 440 280" className="w-full">
                  <text x="220" y="20" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="600" letterSpacing="0.12em" fontFamily="Space Mono">SDCA MECHANISM</text>
                  {/* Traditional Attention */}
                  <g transform="translate(30, 45)">
                    <text x="80" y="0" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="Urbanist">Traditional Attention</text>
                    <rect x="20" y="14" width="120" height="120" rx="8" fill="rgba(251,113,133,0.1)" stroke="rgba(251,113,133,0.2)" strokeWidth="1"/>
                    <g opacity="0.4">
                      {[40,60,80,100,120].map(x => <line key={x} x1={x} y1="14" x2={x} y2="134" stroke="rgba(251,113,133,0.2)" strokeWidth="0.5"/>)}
                      {[34,54,74,94,114].map(y => <line key={y} x1="20" y1={y} x2="140" y2={y} stroke="rgba(251,113,133,0.2)" strokeWidth="0.5"/>)}
                    </g>
                    <text x="80" y="152" textAnchor="middle" fill="#e11d48" fontSize="7.5" fontFamily="Urbanist">O(n²) computation</text>
                    <text x="80" y="165" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">All tokens attend to all</text>
                  </g>
                  {/* Arrow */}
                  <g transform="translate(195, 105)">
                    <path d="M 0 0 L 35 0" fill="none" stroke="#fbbf24" strokeWidth="2"/>
                    <polygon points="40,0 32,-4 32,4" fill="#fbbf24"/>
                    <text x="20" y="18" textAnchor="middle" fill="#d97706" fontSize="7" fontWeight="600" fontFamily="Urbanist">SDCA</text>
                  </g>
                  {/* SDCA Attention */}
                  <g transform="translate(240, 45)">
                    <text x="85" y="0" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="Urbanist">SDCA Attention</text>
                    <rect x="25" y="14" width="120" height="120" rx="8" fill="rgba(251,191,36,0.04)" stroke="rgba(251,191,36,0.2)" strokeWidth="1"/>
                    <g opacity="0.7">
                      <rect x="25" y="14" width="24" height="24" rx="3" fill="rgba(251,191,36,0.25)"/>
                      <rect x="49" y="38" width="24" height="24" rx="3" fill="rgba(251,191,36,0.25)"/>
                      <rect x="73" y="62" width="24" height="24" rx="3" fill="rgba(251,191,36,0.25)"/>
                      <rect x="97" y="86" width="24" height="24" rx="3" fill="rgba(251,191,36,0.25)"/>
                      <rect x="121" y="110" width="24" height="24" rx="3" fill="rgba(251,191,36,0.25)"/>
                      <rect x="25" y="62" width="14" height="14" rx="2" fill="rgba(251,191,36,0.45)"/>
                      <rect x="73" y="14" width="14" height="14" rx="2" fill="rgba(251,191,36,0.45)"/>
                      <rect x="121" y="38" width="14" height="14" rx="2" fill="rgba(251,191,36,0.45)"/>
                      <rect x="49" y="98" width="14" height="14" rx="2" fill="rgba(251,191,36,0.45)"/>
                    </g>
                    <text x="85" y="152" textAnchor="middle" fill="#d97706" fontSize="7.5" fontFamily="Urbanist">O(n·k) computation</text>
                    <text x="85" y="165" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">Semantic distance routing</text>
                  </g>
                  {/* Benefits */}
                  <g transform="translate(30, 215)">
                    <rect x="0" y="0" width="380" height="45" rx="10" fill="rgba(251,191,36,0.05)" stroke="rgba(251,191,36,0.15)" strokeWidth="1"/>
                    {[["20", "Longer context"], ["140", "Reduced memory"], ["275", "Edge deploy"]].map(([x, label]) => (
                      <g key={label} transform={`translate(${x}, 14)`}>
                        <circle cx="0" cy="6" r="3.5" fill="#fbbf24"/>
                        <text x="12" y="10" fill="#d97706" fontSize="8" fontFamily="Urbanist">{label}</text>
                      </g>
                    ))}
                    <text x="190" y="38" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">Maintains reasoning quality while reducing compute</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mentis OS + CipherVault */}
        <div className="grid md:grid-cols-2 gap-8" id="ipCards">
          <div className="card p-8 r-up" style={{ borderColor: "rgba(99,102,241,0.2)", borderRadius: "24px" }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/[0.08] border border-indigo-500/[0.15] mb-5">
              <span className="font-mono text-[10px] text-indigo-600 tracking-wider">PROPRIETARY PLATFORM</span>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">Mentis OS</h3>
            <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-6">Genovation's internal enterprise agentic operating system responsible for agent orchestration, governed execution, auditability, and security enforcement.</p>
            <div className="space-y-3">
              {[
                { icon: <GitBranch className="w-4 h-4 text-violet-500" />, bg: "bg-violet-500/[0.08] border-violet-500/[0.15]", title: "Agent Orchestration", desc: "Multi-agent coordination with bounded execution" },
                { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, bg: "bg-emerald-500/[0.08] border-emerald-500/[0.15]", title: "Governed Execution", desc: "Policy enforcement at every step" },
                { icon: <ScrollText className="w-4 h-4 text-cyan-500" />, bg: "bg-cyan-500/[0.08] border-cyan-500/[0.15]", title: "Complete Auditability", desc: "Every decision logged and traceable" },
                { icon: <Shield className="w-4 h-4 text-rose-500" />, bg: "bg-rose-500/[0.08] border-rose-500/[0.15]", title: "Security Enforcement", desc: "Cryptographic controls at every layer" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg ${item.bg} border flex items-center justify-center flex-shrink-0 mt-0.5`}>{item.icon}</div>
                  <div>
                    <div className="text-gray-900 font-medium text-[14px]">{item.title}</div>
                    <div className="text-[12px] text-gray-400 font-light">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card card-emerald p-8 r-up" style={{ borderColor: "rgba(16,185,129,0.2)", borderRadius: "24px" }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.15] mb-5">
              <span className="font-mono text-[10px] text-emerald-600 tracking-wider">PROPRIETARY FRAMEWORK</span>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">CipherVault</h3>
            <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-6">A cryptographically secure framework that enables trustless analytics — data is shared in encrypted vaults, computation occurs without exposing plaintext, identity remapping remains under data owner control.</p>
            <div className="p-4 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/[0.15] mb-5">
              <div className="flex items-center gap-3 mb-1.5">
                <Vault className="w-5 h-5 text-emerald-500" />
                <span className="text-emerald-600 font-medium text-[14px]">Enterprise-Grade Security</span>
              </div>
              <p className="text-[12px] text-gray-400 font-light">Proprietary cryptographic framework with enterprise deployment options and dedicated support.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Encrypted Vaults", "Zero-Knowledge", "Identity Control"].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-full bg-black/[0.03] border border-black/[0.06] text-gray-500 text-[12px] font-light">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}