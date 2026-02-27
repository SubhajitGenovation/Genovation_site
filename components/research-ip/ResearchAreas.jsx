"use client";
import { Microscope, ScanSearch, Cpu, Lock, Shield } from "lucide-react";

export default function ResearchAreas() {
  return (
    <section className="py-32 relative overflow-hidden" id="areas">
      <div className="orb w-[700px] h-[500px] bg-violet-500/[0.04]" style={{ top: "5%", right: "10%" }}></div>
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.04]" style={{ bottom: "20%", left: "5%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.15] mb-8 r-up">
            <Microscope className="w-3 h-3 text-violet-500" />
            <span className="text-violet-500 text-[11px] font-light tracking-[0.25em] uppercase">Focus Areas</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Core Research<br /><span className="text-gradient-violet">Areas</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Our research directly informs product development — every advance feeds into enterprise intelligence systems.
          </p>
        </div>

        {/* Area 1: Explainable Intelligence */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 r-left">
            <div className="diagram-card p-8">
              <svg viewBox="0 0 440 300" className="w-full">
                <text x="220" y="20" textAnchor="middle" fill="#0891b2" fontSize="10" fontWeight="600" letterSpacing="0.12em" fontFamily="Space Mono">TRACEABILITY FLOW</text>
                {/* Stage 1: Source Data */}
                <g transform="translate(30,50)">
                  <rect x="0" y="0" width="100" height="85" rx="10" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.25)" strokeWidth="1.5"/>
                  <rect x="12" y="18" width="76" height="7" rx="2" fill="rgba(6,182,212,0.15)"/>
                  <rect x="12" y="30" width="55" height="5" rx="2" fill="rgba(6,182,212,0.1)"/>
                  <rect x="12" y="40" width="65" height="5" rx="2" fill="rgba(6,182,212,0.1)"/>
                  <rect x="12" y="50" width="48" height="5" rx="2" fill="rgba(6,182,212,0.1)"/>
                  <rect x="12" y="60" width="60" height="5" rx="2" fill="rgba(6,182,212,0.1)"/>
                  <text x="50" y="-8" textAnchor="middle" fill="#0891b2" fontSize="8.5" fontWeight="600" fontFamily="Urbanist">SOURCE</text>
                  <text x="50" y="80" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Raw Data</text>
                </g>
                {/* Arrow 1 */}
                <g transform="translate(140, 87)">
                  <path d="M 0 0 L 30 0" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="36" cy="0" r="3.5" fill="#06b6d4"/>
                </g>
                {/* Stage 2: Processing */}
                <g transform="translate(170,50)">
                  <rect x="0" y="0" width="100" height="85" rx="10" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5"/>
                  <circle cx="50" cy="40" r="16" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
                  <circle cx="50" cy="40" r="6" fill="#8b5cf6"/>
                  <rect x="47" y="20" width="6" height="7" rx="1" fill="#a78bfa"/>
                  <rect x="47" y="53" width="6" height="7" rx="1" fill="#a78bfa"/>
                  <rect x="30" y="37" width="7" height="6" rx="1" fill="#a78bfa"/>
                  <rect x="63" y="37" width="7" height="6" rx="1" fill="#a78bfa"/>
                  <text x="50" y="-8" textAnchor="middle" fill="#7c3aed" fontSize="8.5" fontWeight="600" fontFamily="Urbanist">PROCESS</text>
                  <text x="50" y="80" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Logged Steps</text>
                </g>
                {/* Arrow 2 */}
                <g transform="translate(280, 87)">
                  <path d="M 0 0 L 30 0" fill="none" stroke="rgba(139,92,246,0.4)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="36" cy="0" r="3.5" fill="#8b5cf6"/>
                </g>
                {/* Stage 3: Output */}
                <g transform="translate(310,50)">
                  <rect x="0" y="0" width="100" height="85" rx="10" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5"/>
                  <circle cx="50" cy="38" r="18" fill="none" stroke="#10b981" strokeWidth="1.5"/>
                  <path d="M 40 38 L 47 45 L 60 31" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="50" y="-8" textAnchor="middle" fill="#059669" fontSize="8.5" fontWeight="600" fontFamily="Urbanist">OUTPUT</text>
                  <text x="50" y="80" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Verified Result</text>
                </g>
                {/* Audit trail connectors */}
                <g transform="translate(20, 165)">
                  <path d="M 60 0 L 60 22" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
                  <path d="M 200 0 L 200 22" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
                  <path d="M 340 0 L 340 22" fill="none" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
                </g>
                <g transform="translate(20, 195)">
                  <rect x="0" y="0" width="400" height="55" rx="10" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.2)" strokeWidth="1"/>
                  <text x="20" y="18" fill="#d97706" fontSize="8.5" fontWeight="600" fontFamily="Urbanist">AUDIT TRAIL</text>
                  <g transform="translate(20, 28)">
                    <rect x="0" y="0" width="65" height="14" rx="4" fill="rgba(6,182,212,0.1)"/>
                    <text x="8" y="10" fill="#0891b2" fontSize="6.5" fontFamily="Space Mono">src_001</text>
                  </g>
                  <g transform="translate(95, 28)">
                    <rect x="0" y="0" width="65" height="14" rx="4" fill="rgba(139,92,246,0.1)"/>
                    <text x="8" y="10" fill="#7c3aed" fontSize="6.5" fontFamily="Space Mono">proc_042</text>
                  </g>
                  <g transform="translate(170, 28)">
                    <rect x="0" y="0" width="65" height="14" rx="4" fill="rgba(16,185,129,0.1)"/>
                    <text x="8" y="10" fill="#059669" fontSize="6.5" fontFamily="Space Mono">out_789</text>
                  </g>
                  <g transform="translate(245, 28)">
                    <rect x="0" y="0" width="75" height="14" rx="4" fill="rgba(245,158,11,0.1)"/>
                    <text x="8" y="10" fill="#d97706" fontSize="6.5" fontFamily="Space Mono">verified ✓</text>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="order-1 lg:order-2 r-right">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/[0.1] border border-cyan-500/[0.2] flex items-center justify-center">
                <ScanSearch className="w-5 h-5 text-cyan-500" />
              </div>
              <span className="font-mono text-[11px] text-cyan-600 tracking-wider">RESEARCH AREA 01</span>
            </div>
            <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">Explainable &amp; Governed Intelligence</h3>
            <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-6">We design intelligence systems where every output can be traced to source data, every action is logged and validated, and every decision can be explained to auditors.</p>
            <div className="space-y-3 mb-6">
              {["Complete decision traceability", "Immutable audit logging", "Regulatory compliance built-in", "Human-readable explanations"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-[15px] text-gray-600 font-light">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-gray-400 font-light italic">This work underpins Mentis OS, ensuring enterprise intelligence is a governed system — not a black box.</p>
          </div>
        </div>

        {/* Area 2: Efficient LMs */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="r-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-violet-500/[0.1] border border-violet-500/[0.2] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-violet-500" />
              </div>
              <span className="font-mono text-[11px] text-violet-600 tracking-wider">RESEARCH AREA 02</span>
            </div>
            <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">Efficient Language Models &amp; Reasoning</h3>
            <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-6">Rather than relying exclusively on large, resource-intensive models, our research emphasizes small efficient models, task-specialized reasoning, and modular architectures.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-violet-500/[0.06] border border-violet-500/[0.15]">
                <div className="text-2xl font-semibold text-gray-900">10x</div>
                <div className="text-[11px] text-gray-500 font-light">Lower Compute</div>
              </div>
              <div className="p-4 rounded-xl bg-violet-500/[0.06] border border-violet-500/[0.15]">
                <div className="text-2xl font-semibold text-gray-900">On-Prem</div>
                <div className="text-[11px] text-gray-500 font-light">Deployable</div>
              </div>
            </div>
            <p className="text-[13px] text-gray-400 font-light italic">Efficiency is not a compromise — it is a prerequisite for enterprise adoption.</p>
          </div>
          <div className="r-right">
            <div className="diagram-card p-8">
              <svg viewBox="0 0 440 310" className="w-full">
                <text x="220" y="20" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="600" letterSpacing="0.12em" fontFamily="Space Mono">MODEL EFFICIENCY</text>
                {/* Legend */}
                <g transform="translate(105, 38)">
                  <rect x="0" y="0" width="12" height="12" rx="3" fill="rgba(251,113,133,0.6)"/>
                  <text x="18" y="10" fill="#9f1239" fontSize="8.5" fontFamily="Urbanist">Traditional Large Models</text>
                  <rect x="170" y="0" width="12" height="12" rx="3" fill="rgba(139,92,246,0.6)"/>
                  <text x="188" y="10" fill="#6d28d9" fontSize="8.5" fontFamily="Urbanist">Genovation SLMs</text>
                </g>
                {/* Compute Cost */}
                <g transform="translate(25, 70)">
                  <text x="0" y="12" fill="#6b7280" fontSize="9" fontFamily="Urbanist">Compute Cost</text>
                  <rect x="95" y="0" width="300" height="18" rx="5" fill="rgba(0,0,0,0.03)"/>
                  <rect x="95" y="0" width="265" height="18" rx="5" fill="rgba(251,113,133,0.25)"/>
                  <rect x="95" y="24" width="300" height="18" rx="5" fill="rgba(0,0,0,0.03)"/>
                  <rect x="95" y="24" width="65" height="18" rx="5" fill="rgba(139,92,246,0.3)"/>
                  <text x="370" y="13" fill="#9f1239" fontSize="7.5" fontFamily="Urbanist">$$$$$</text>
                  <text x="370" y="37" fill="#6d28d9" fontSize="7.5" fontFamily="Urbanist">$</text>
                </g>
                {/* Latency */}
                <g transform="translate(25, 125)">
                  <text x="0" y="12" fill="#6b7280" fontSize="9" fontFamily="Urbanist">Latency</text>
                  <rect x="95" y="0" width="300" height="18" rx="5" fill="rgba(0,0,0,0.03)"/>
                  <rect x="95" y="0" width="225" height="18" rx="5" fill="rgba(251,113,133,0.25)"/>
                  <rect x="95" y="24" width="300" height="18" rx="5" fill="rgba(0,0,0,0.03)"/>
                  <rect x="95" y="24" width="55" height="18" rx="5" fill="rgba(139,92,246,0.3)"/>
                  <text x="370" y="13" fill="#9f1239" fontSize="7.5" fontFamily="Urbanist">500ms</text>
                  <text x="370" y="37" fill="#6d28d9" fontSize="7.5" fontFamily="Urbanist">&lt;50ms</text>
                </g>
                {/* Memory */}
                <g transform="translate(25, 180)">
                  <text x="0" y="12" fill="#6b7280" fontSize="9" fontFamily="Urbanist">Memory</text>
                  <rect x="95" y="0" width="300" height="18" rx="5" fill="rgba(0,0,0,0.03)"/>
                  <rect x="95" y="0" width="240" height="18" rx="5" fill="rgba(251,113,133,0.25)"/>
                  <rect x="95" y="24" width="300" height="18" rx="5" fill="rgba(0,0,0,0.03)"/>
                  <rect x="95" y="24" width="48" height="18" rx="5" fill="rgba(139,92,246,0.3)"/>
                  <text x="370" y="13" fill="#9f1239" fontSize="7.5" fontFamily="Urbanist">80GB+</text>
                  <text x="370" y="37" fill="#6d28d9" fontSize="7.5" fontFamily="Urbanist">8GB</text>
                </g>
                {/* Deployment */}
                <g transform="translate(25, 235)">
                  <text x="0" y="12" fill="#6b7280" fontSize="9" fontFamily="Urbanist">Deployment</text>
                  <rect x="95" y="0" width="300" height="18" rx="5" fill="rgba(0,0,0,0.03)"/>
                  <g transform="translate(100, 2)">
                    <rect x="0" y="0" width="62" height="14" rx="4" fill="rgba(251,113,133,0.15)" stroke="rgba(251,113,133,0.3)" strokeWidth="0.8"/>
                    <text x="31" y="10" textAnchor="middle" fill="#9f1239" fontSize="7" fontFamily="Urbanist">CLOUD ONLY</text>
                  </g>
                  <rect x="95" y="24" width="300" height="18" rx="5" fill="rgba(0,0,0,0.03)"/>
                  <g transform="translate(100, 26)">
                    <rect x="0" y="0" width="52" height="14" rx="4" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.25)" strokeWidth="0.8"/>
                    <text x="26" y="10" textAnchor="middle" fill="#6d28d9" fontSize="7" fontFamily="Urbanist">ON-PREM</text>
                    <rect x="57" y="0" width="52" height="14" rx="4" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.25)" strokeWidth="0.8"/>
                    <text x="83" y="10" textAnchor="middle" fill="#6d28d9" fontSize="7" fontFamily="Urbanist">AIR-GAP</text>
                    <rect x="114" y="0" width="48" height="14" rx="4" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.25)" strokeWidth="0.8"/>
                    <text x="138" y="10" textAnchor="middle" fill="#6d28d9" fontSize="7" fontFamily="Urbanist">CLOUD</text>
                  </g>
                </g>
                <text x="220" y="300" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Task-specialized models outperform generalist models on enterprise workloads</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Area 3: Privacy-Preserving Analytics */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 r-left">
            <div className="diagram-card p-8">
              <svg viewBox="0 0 440 340" className="w-full">
                <text x="220" y="20" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="600" letterSpacing="0.12em" fontFamily="Space Mono">PRIVACY-PRESERVING COMPUTATION</text>
                {/* Org A */}
                <g transform="translate(30, 50)">
                  <rect x="0" y="0" width="115" height="100" rx="12" fill="rgba(6,182,212,0.05)" stroke="rgba(6,182,212,0.25)" strokeWidth="1.5"/>
                  <text x="57" y="20" textAnchor="middle" fill="#0891b2" fontSize="9" fontWeight="600" fontFamily="Urbanist">ORG A</text>
                  <g transform="translate(10, 32)">
                    <rect x="0" y="0" width="95" height="12" rx="3" fill="rgba(6,182,212,0.1)"/>
                    <text x="8" y="9" fill="#0891b2" fontSize="6.5" fontFamily="Space Mono">customer_data</text>
                    <rect x="0" y="16" width="95" height="12" rx="3" fill="rgba(6,182,212,0.1)"/>
                    <text x="8" y="25" fill="#0891b2" fontSize="6.5" fontFamily="Space Mono">transactions</text>
                    <rect x="0" y="32" width="95" height="12" rx="3" fill="rgba(6,182,212,0.1)"/>
                    <text x="8" y="41" fill="#0891b2" fontSize="6.5" fontFamily="Space Mono">preferences</text>
                  </g>
                  <text x="57" y="93" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">Raw Data</text>
                </g>
                {/* Org B */}
                <g transform="translate(295, 50)">
                  <rect x="0" y="0" width="115" height="100" rx="12" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5"/>
                  <text x="57" y="20" textAnchor="middle" fill="#d97706" fontSize="9" fontWeight="600" fontFamily="Urbanist">ORG B</text>
                  <g transform="translate(10, 32)">
                    <rect x="0" y="0" width="95" height="12" rx="3" fill="rgba(245,158,11,0.1)"/>
                    <text x="8" y="9" fill="#d97706" fontSize="6.5" fontFamily="Space Mono">market_data</text>
                    <rect x="0" y="16" width="95" height="12" rx="3" fill="rgba(245,158,11,0.1)"/>
                    <text x="8" y="25" fill="#d97706" fontSize="6.5" fontFamily="Space Mono">analytics</text>
                    <rect x="0" y="32" width="95" height="12" rx="3" fill="rgba(245,158,11,0.1)"/>
                    <text x="8" y="41" fill="#d97706" fontSize="6.5" fontFamily="Space Mono">models</text>
                  </g>
                  <text x="57" y="93" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">Raw Data</text>
                </g>
                {/* Encrypt arrows */}
                <g transform="translate(87, 155)">
                  <path d="M 0 0 L 0 20" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <rect x="-22" y="6" width="44" height="14" rx="4" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.2)" strokeWidth="0.8"/>
                  <text x="0" y="16" textAnchor="middle" fill="#0891b2" fontSize="6" fontFamily="Space Mono">ENCRYPT</text>
                </g>
                <g transform="translate(352, 155)">
                  <path d="M 0 0 L 0 20" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <rect x="-22" y="6" width="44" height="14" rx="4" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.2)" strokeWidth="0.8"/>
                  <text x="0" y="16" textAnchor="middle" fill="#d97706" fontSize="6" fontFamily="Space Mono">ENCRYPT</text>
                </g>
                {/* Central Secure Zone */}
                <g transform="translate(110, 190)">
                  <rect x="0" y="0" width="220" height="85" rx="14" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/>
                  <g transform="translate(110, 20)">
                    <rect x="-10" y="2" width="20" height="14" rx="3" fill="#10b981"/>
                    <path d="M -6 2 L -6 -4 A 6 6 0 0 1 6 -4 L 6 2" fill="none" stroke="#10b981" strokeWidth="2.5"/>
                    <circle cx="0" cy="9" r="2.5" fill="#f5f3f0"/>
                  </g>
                  <text x="110" y="50" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="600" fontFamily="Urbanist">SECURE COMPUTATION</text>
                  <text x="110" y="64" textAnchor="middle" fill="#10b981" fontSize="7.5" fontFamily="Urbanist">No plaintext exposed</text>
                  <text x="110" y="78" textAnchor="middle" fill="#9ca3af" fontSize="6.5" fontFamily="Urbanist">Encrypted computation · Identity remapping</text>
                </g>
                <path d="M 87 180 Q 140 200 145 215" fill="none" stroke="rgba(6,182,212,0.35)" strokeWidth="1.5"/>
                <path d="M 352 180 Q 300 200 295 215" fill="none" stroke="rgba(245,158,11,0.35)" strokeWidth="1.5"/>
                {/* Output */}
                <g transform="translate(220, 280)">
                  <path d="M 0 0 L 0 18" fill="none" stroke="#10b981" strokeWidth="1.5"/>
                  <polygon points="0,22 -4,14 4,14" fill="#10b981"/>
                </g>
                <g transform="translate(150, 305)">
                  <rect x="0" y="0" width="140" height="25" rx="8" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.25)" strokeWidth="1"/>
                  <text x="70" y="16" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600" fontFamily="Urbanist">INSIGHTS WITHOUT EXPOSURE</text>
                </g>
              </svg>
            </div>
          </div>
          <div className="order-1 lg:order-2 r-right">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/[0.1] border border-emerald-500/[0.2] flex items-center justify-center">
                <Lock className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="font-mono text-[11px] text-emerald-600 tracking-wider">RESEARCH AREA 03</span>
            </div>
            <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">Secure &amp; Privacy-Preserving Analytics</h3>
            <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-6">Research mechanisms that allow organizations to share data without exposing raw information, compute insights without transferring trust, and collaborate without surrendering control.</p>
            <div className="space-y-3 mb-6">
              {["Encrypted data sharing", "Computation without plaintext", "Identity remapping control", "Zero-trust collaboration"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-[15px] text-gray-600 font-light">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-gray-400 font-light italic">This work directly informs CipherVault, our cryptographically secure data-sharing framework.</p>
          </div>
        </div>

        {/* Area 4: Long-Horizon Security */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="r-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-rose-500/[0.1] border border-rose-500/[0.2] flex items-center justify-center">
                <Shield className="w-5 h-5 text-rose-500" />
              </div>
              <span className="font-mono text-[11px] text-rose-600 tracking-wider">RESEARCH AREA 04</span>
            </div>
            <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">Long-Horizon Security &amp; Cryptography</h3>
            <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-6">Enterprise intelligence systems must remain secure not just today, but against future threat models as computational and adversarial capabilities evolve.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-rose-500/[0.06] border border-rose-500/[0.15]">
                <div className="text-lg font-semibold text-gray-900">Post-Quantum</div>
                <div className="text-[11px] text-gray-500 font-light">Cryptographic Primitives</div>
              </div>
              <div className="p-4 rounded-xl bg-rose-500/[0.06] border border-rose-500/[0.15]">
                <div className="text-lg font-semibold text-gray-900">Trust-Minimized</div>
                <div className="text-[11px] text-gray-500 font-light">System Design</div>
              </div>
            </div>
            <div className="space-y-3">
              {["Quantum-resistant algorithms", "Secure agent-to-agent communication", "Cryptographic identity verification"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-[15px] text-gray-600 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="r-right">
            <div className="diagram-card p-8">
              <svg viewBox="0 0 440 300" className="w-full">
                <text x="220" y="20" textAnchor="middle" fill="#9f1239" fontSize="10" fontWeight="600" letterSpacing="0.12em" fontFamily="Space Mono">SECURITY TIMELINE</text>
                <g transform="translate(35, 55)">
                  <rect x="0" y="0" width="370" height="5" rx="2.5" fill="rgba(0,0,0,0.04)"/>
                  <defs>
                    <linearGradient id="tlGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981"/>
                      <stop offset="50%" stopColor="#f59e0b"/>
                      <stop offset="100%" stopColor="#f43f5e"/>
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="370" height="5" rx="2.5" fill="url(#tlGrad)" opacity="0.35"/>
                  <g transform="translate(0, -6)">
                    <circle cx="0" cy="8" r="8" fill="#10b981"/>
                    <text x="0" y="30" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600" fontFamily="Urbanist">TODAY</text>
                    <text x="0" y="42" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">Classical</text>
                  </g>
                  <g transform="translate(185, -6)">
                    <circle cx="0" cy="8" r="8" fill="#f59e0b"/>
                    <text x="0" y="30" textAnchor="middle" fill="#d97706" fontSize="8" fontWeight="600" fontFamily="Urbanist">2030</text>
                    <text x="0" y="42" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">Transitional</text>
                  </g>
                  <g transform="translate(370, -6)">
                    <circle cx="0" cy="8" r="8" fill="#f43f5e"/>
                    <text x="0" y="30" textAnchor="middle" fill="#e11d48" fontSize="8" fontWeight="600" fontFamily="Urbanist">2040+</text>
                    <text x="0" y="42" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">Post-Quantum</text>
                  </g>
                </g>
                {/* Security Layers */}
                <g transform="translate(55, 120)">
                  <rect x="0" y="0" width="330" height="42" rx="10" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5"/>
                  <text x="15" y="17" fill="#059669" fontSize="8.5" fontWeight="600" fontFamily="Urbanist">LAYER 1: Classical Cryptography</text>
                  <text x="15" y="30" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">AES-256 · RSA-4096 · ECDSA · SHA-3</text>
                  <rect x="275" y="10" width="42" height="18" rx="5" fill="rgba(16,185,129,0.1)"/>
                  <text x="296" y="22" textAnchor="middle" fill="#059669" fontSize="6.5" fontFamily="Urbanist">ACTIVE</text>
                </g>
                <g transform="translate(55, 172)">
                  <rect x="0" y="0" width="330" height="42" rx="10" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5"/>
                  <text x="15" y="17" fill="#d97706" fontSize="8.5" fontWeight="600" fontFamily="Urbanist">LAYER 2: Hybrid Schemes</text>
                  <text x="15" y="30" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">Classical + PQ combinations · Crypto-agility</text>
                  <rect x="275" y="10" width="42" height="18" rx="5" fill="rgba(245,158,11,0.1)"/>
                  <text x="296" y="22" textAnchor="middle" fill="#d97706" fontSize="6.5" fontFamily="Urbanist">READY</text>
                </g>
                <g transform="translate(55, 224)">
                  <rect x="0" y="0" width="330" height="42" rx="10" fill="rgba(244,63,94,0.05)" stroke="rgba(244,63,94,0.25)" strokeWidth="1.5"/>
                  <text x="15" y="17" fill="#e11d48" fontSize="8.5" fontWeight="600" fontFamily="Urbanist">LAYER 3: Post-Quantum Primitives</text>
                  <text x="15" y="30" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">CRYSTALS-Kyber · CRYSTALS-Dilithium · SPHINCS+</text>
                  <rect x="256" y="10" width="60" height="18" rx="5" fill="rgba(244,63,94,0.1)"/>
                  <text x="286" y="22" textAnchor="middle" fill="#e11d48" fontSize="6.5" fontFamily="Urbanist">INTEGRATED</text>
                </g>
                <text x="220" y="290" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Building security that survives the quantum transition</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}