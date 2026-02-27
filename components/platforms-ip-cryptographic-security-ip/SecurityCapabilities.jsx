"use client";

import {
  Lock, Atom, Key, PenTool, RefreshCw,
  LockKeyhole, Database, Send, Cpu,
  Check, Network, Brain, CircleDot, Play,
} from "lucide-react";

const pqcCards = [
  { icon: <Key className="w-4 h-4 text-violet-500" />, title: "Key Encapsulation", mono: "ML-KEM (KYBER-1024)", desc: "256-bit security using module-lattice-based key encapsulation. Resistant to quantum cryptanalysis." },
  { icon: <PenTool className="w-4 h-4 text-violet-500" />, title: "Digital Signatures", mono: "ML-DSA (DILITHIUM-5)", desc: "256-bit security using module-lattice digital signature algorithm for authenticity and non-repudiation." },
  { icon: <Lock className="w-4 h-4 text-violet-500" />, title: "Symmetric Encryption", mono: "AES-256-GCM", desc: "Authenticated encryption providing 128-bit quantum security. Hardware-accelerated on modern CPUs." },
  { icon: <RefreshCw className="w-4 h-4 text-violet-500" />, title: "Cryptographic Agility", mono: "HOT-SWAP ALGORITHMS", desc: "Architecture supports algorithm replacement without system redesign as standards evolve." },
];

const e2eChecks = [
  "Customer-managed keys (BYOK)", "HSM integration (FIPS 140-3)",
  "Automatic key rotation", "Perfect forward secrecy",
];

const agentChecks = [
  "Mutual TLS authentication", "Message signing & verification",
  "Policy-based access control", "Complete audit trail",
];

export default function SecurityCapabilities() {
  return (
    <section className="py-32 relative overflow-hidden" id="capabilities">
      <div className="orb w-[700px] h-[500px] bg-violet-500/[0.05]" style={{ top: "5%", left: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.15] mb-8 r-up">
            <Lock className="w-3 h-3 text-violet-600" />
            <span className="text-violet-600 text-[11px] font-light tracking-[0.25em] uppercase">Core Capabilities</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Cryptographic<br /><span className="text-gradient-violet">Foundations</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Military-grade cryptography combined with zero-trust architecture provides mathematically provable
            security against current and future quantum threats.
          </p>
        </div>

        {/* Post-Quantum Card */}
        <div className="card p-10 mb-10 r-up" style={{ borderColor: "rgba(139,92,246,0.2)", borderRadius: "24px" }}>
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/[0.12] flex items-center justify-center">
                  <Atom className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 font-light">Post-Quantum Cryptography</h3>
                  <p className="text-[11px] text-violet-500 font-mono tracking-wider">NIST FIPS 203 / 204 / 205 COMPLIANT</p>
                </div>
              </div>
              <p className="text-[14px] text-gray-500 font-light mb-6 leading-relaxed">
                Quantum computers capable of breaking RSA and ECC encryption are expected within the decade. Data
                encrypted today with classical algorithms can be harvested now and decrypted later. Our cryptographic
                foundation uses NIST-standardized post-quantum algorithms to ensure data encrypted today remains
                secure for decades.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {pqcCards.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-violet-500/[0.04] border border-violet-500/[0.1]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/[0.1] flex items-center justify-center">{c.icon}</div>
                      <div>
                        <p className="text-[13px] text-gray-800 font-normal">{c.title}</p>
                        <p className="text-[10px] text-violet-500 font-mono">{c.mono}</p>
                      </div>
                    </div>
                    <p className="text-[12px] text-gray-400 font-light">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantum Bloch Sphere */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 280 280" className="w-full max-w-[280px] relative">
                  <ellipse cx="140" cy="140" rx="100" ry="30" fill="none" stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
                  <ellipse cx="140" cy="140" rx="100" ry="100" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
                  <ellipse cx="140" cy="140" rx="30" ry="100" fill="none" stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
                  <line x1="140" y1="30" x2="140" y2="250" stroke="rgba(139,92,246,0.12)" strokeWidth="0.5" />
                  <line x1="30" y1="140" x2="250" y2="140" stroke="rgba(139,92,246,0.12)" strokeWidth="0.5" />
                  <line x1="140" y1="140" x2="200" y2="70" stroke="rgba(6,182,212,0.5)" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="200" cy="70" r="6" fill="rgba(6,182,212,0.3)" stroke="rgba(6,182,212,0.6)" strokeWidth="1.5" />
                  <circle cx="140" cy="140" r="5" fill="rgba(139,92,246,0.3)" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" />
                  <circle cx="140" cy="140" r="2" fill="#7c3aed" />
                  <text x="140" y="18" textAnchor="middle" fill="#7c3aed" fontSize="11" fontFamily="Urbanist">|0⟩</text>
                  <text x="140" y="268" textAnchor="middle" fill="#7c3aed" fontSize="11" fontFamily="Urbanist">|1⟩</text>
                  <text x="260" y="144" textAnchor="start" fill="rgba(139,92,246,0.5)" fontSize="10" fontFamily="Urbanist">|+⟩</text>
                  <text x="10" y="144" textAnchor="start" fill="rgba(139,92,246,0.5)" fontSize="10" fontFamily="Urbanist">|−⟩</text>
                </svg>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-violet-500/[0.08] border border-violet-500/[0.15]">
                  <span className="text-[10px] text-violet-600 font-light">Quantum State Space</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* E2E + Agent Communication */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* E2E Encryption */}
          <div className="card p-8 r-left" style={{ borderRadius: "24px" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/[0.12] flex items-center justify-center">
                <LockKeyhole className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 font-light">End-to-End Encryption</h3>
                <p className="text-[11px] text-cyan-500 font-mono tracking-wider">FULL LIFECYCLE PROTECTION</p>
              </div>
            </div>
            <p className="text-[14px] text-gray-500 font-light mb-6 leading-relaxed">
              Data remains encrypted across its entire lifecycle—at rest, in transit, and during processing—with
              strict cryptographic key separation.
            </p>

            {/* Encryption Flow */}
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 mb-6">
              <div className="flex items-center justify-between gap-2">
                <div className="text-center flex-1 p-3 rounded-lg bg-cyan-500/[0.06] border border-cyan-500/[0.12]">
                  <Database className="w-5 h-5 text-cyan-600 mx-auto mb-1" />
                  <p className="text-[10px] text-gray-600 font-light">AT REST</p>
                  <p className="text-[9px] text-cyan-600 font-mono">AES-256</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
                <div className="text-center flex-1 p-3 rounded-lg bg-blue-500/[0.06] border border-blue-500/[0.12]">
                  <Send className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-[10px] text-gray-600 font-light">IN TRANSIT</p>
                  <p className="text-[9px] text-blue-600 font-mono">mTLS + PQC</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
                <div className="text-center flex-1 p-3 rounded-lg bg-violet-500/[0.06] border border-violet-500/[0.12]">
                  <Cpu className="w-5 h-5 text-violet-600 mx-auto mb-1" />
                  <p className="text-[10px] text-gray-600 font-light">PROCESSING</p>
                  <p className="text-[9px] text-violet-600 font-mono">TEE / FHE</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {e2eChecks.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px] text-gray-500 font-light">
                  <Check className="w-3.5 h-3.5 text-cyan-500" /><span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secure Agent Communication */}
          <div className="card p-8 r-right" style={{ borderRadius: "24px" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/[0.12] flex items-center justify-center">
                <Network className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 font-light">Secure Agent Communication</h3>
                <p className="text-[11px] text-blue-500 font-mono tracking-wider">ZERO IMPLICIT TRUST</p>
              </div>
            </div>
            <p className="text-[14px] text-gray-500 font-light mb-6 leading-relaxed">
              In multi-agent AI systems, every communication channel represents a potential attack vector. We treat
              all agent-to-agent communication as untrusted by default.
            </p>

            {/* Agent Network */}
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 mb-6">
              <div className="flex items-center justify-between gap-4">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-blue-500/[0.1] border border-blue-500/[0.2] flex items-center justify-center mx-auto mb-2">
                    <Brain className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-[9px] text-gray-500 font-light">REASONING</p>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded bg-cyan-500/[0.1] border border-cyan-500/[0.2] flex items-center justify-center">
                    <Lock className="w-3 h-3 text-cyan-500" />
                  </div>
                  <div className="w-8 h-px bg-cyan-500/30" />
                </div>
                <div className="text-center flex-1">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/[0.1] border-2 border-cyan-500/[0.25] flex items-center justify-center mx-auto mb-2">
                    <CircleDot className="w-6 h-6 text-cyan-600" />
                  </div>
                  <p className="text-[9px] text-gray-500 font-light">ORCHESTRATOR</p>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded bg-cyan-500/[0.1] border border-cyan-500/[0.2] flex items-center justify-center">
                    <Lock className="w-3 h-3 text-cyan-500" />
                  </div>
                  <div className="w-8 h-px bg-cyan-500/30" />
                </div>
                <div className="text-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.2] flex items-center justify-center mx-auto mb-2">
                    <Play className="w-5 h-5 text-violet-500" />
                  </div>
                  <p className="text-[9px] text-gray-500 font-light">EXECUTOR</p>
                </div>
              </div>
              <div className="mt-3 p-2 rounded-lg bg-emerald-500/[0.05] border border-emerald-500/[0.1] text-center">
                <p className="text-[9px] text-emerald-600 font-light tracking-wider uppercase">
                  Policy layer — enforced at every hop
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {agentChecks.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px] text-gray-500 font-light">
                  <Check className="w-3.5 h-3.5 text-blue-500" /><span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
