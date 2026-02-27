"use client";
import { useEffect } from "react";
import { Database, Map, Key, Check, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ThreeVaultArchitecture() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) =>
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } })
    );
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[450px] h-[450px] bg-violet-400/[0.04]" style={{ top: "-5%", right: "10%" }} />
      <div className="orb w-[300px] h-[300px] bg-amber-400/[0.04]" style={{ bottom: "10%", left: "5%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] text-violet-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Security Architecture</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">Three-Vault Security Model</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light r-up">
            Strict separation ensures no single component can compromise data. All three must be obtained simultaneously.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-5xl mx-auto mb-12 r-up">
          <div className="card-no-hover p-8">
            <svg viewBox="0 0 900 280" className="w-full">
              <rect x="30" y="40" width="250" height="180" rx="16" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
              <rect x="325" y="40" width="250" height="180" rx="16" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.15)" strokeWidth="1" />
              <rect x="620" y="40" width="250" height="180" rx="16" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              <line x1="280" y1="130" x2="325" y2="130" stroke="rgba(139,92,246,0.2)" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="575" y1="130" x2="620" y2="130" stroke="rgba(139,92,246,0.2)" strokeWidth="2" strokeDasharray="6 4" />

              {/* Shared Vault */}
              <text x="155" y="68" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="500">Shared Vault</text>
              <rect x="95" y="85" width="120" height="80" rx="10" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
              <g transform="translate(155,110)">
                <ellipse cx="0" cy="-8" rx="10" ry="4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
                <path d="M-10,-8 L-10,4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
                <path d="M10,-8 L10,4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
                <ellipse cx="0" cy="4" rx="10" ry="4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
              </g>
              <text x="155" y="140" textAnchor="middle" fill="#7c3aed" fontSize="9">Encrypted Data</text>
              <text x="155" y="155" textAnchor="middle" fill="#9ca3af" fontSize="8">Anonymized</text>
              <rect x="80" y="180" width="150" height="24" rx="6" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" />
              <text x="155" y="196" textAnchor="middle" fill="#059669" fontSize="10">✓ Safe to Share</text>

              {/* Map Vault */}
              <text x="450" y="68" textAnchor="middle" fill="#d97706" fontSize="13" fontWeight="500">Map Vault</text>
              <rect x="390" y="85" width="120" height="80" rx="10" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5" />
              <g transform="translate(450,108)">
                <path d="M-10,-6 L-4,-10 L4,-6 L10,-10 L10,8 L4,4 L-4,8 L-10,4Z" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
              </g>
              <text x="450" y="140" textAnchor="middle" fill="#d97706" fontSize="9">Token → Identity</text>
              <text x="450" y="155" textAnchor="middle" fill="#9ca3af" fontSize="8">Mappings</text>
              <rect x="375" y="180" width="150" height="24" rx="6" fill="rgba(239,68,68,0.05)" stroke="rgba(239,68,68,0.15)" />
              <text x="450" y="196" textAnchor="middle" fill="#dc2626" fontSize="10">✗ Never Shared</text>

              {/* Secret Key */}
              <text x="745" y="68" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="500">Secret Key</text>
              <rect x="685" y="85" width="120" height="80" rx="10" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
              <g transform="translate(745,108)">
                <circle cx="-4" cy="-2" r="5" fill="none" stroke="#6b7280" strokeWidth="1.8" />
                <line x1="1" y1="-2" x2="10" y2="-2" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="8" y1="-2" x2="8" y2="2" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="5" y1="-2" x2="5" y2="1.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="-4" cy="-2" r="1.5" fill="#6b7280" />
              </g>
              <text x="745" y="140" textAnchor="middle" fill="#6b7280" fontSize="9">Decryption Key</text>
              <text x="745" y="155" textAnchor="middle" fill="#9ca3af" fontSize="8">Owner Only</text>
              <rect x="670" y="180" width="150" height="24" rx="6" fill="rgba(239,68,68,0.05)" stroke="rgba(239,68,68,0.15)" />
              <text x="745" y="196" textAnchor="middle" fill="#dc2626" fontSize="10">✗ Owner Only</text>

              <text x="450" y="255" textAnchor="middle" fill="#9ca3af" fontSize="10">
                No single component sufficient for compromise · Mathematical guarantee of protection
              </text>
            </svg>
          </div>
        </div>

        {/* Vault Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Shared Vault */}
          <div className="card card-violet p-6 r-up">
            <div className="w-12 h-12 rounded-xl bg-violet-500/[0.1] flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-violet-500" />
            </div>
            <h3 className="text-lg font-light text-gray-800 mb-2">Shared Vault</h3>
            <p className="text-sm text-gray-500 font-light mb-4">Encrypted, anonymized data safe for external sharing with partners, analysts, and vendors.</p>
            <div className="space-y-2 text-[13px] text-gray-500 font-light">
              {["No identity information","Computation-ready format","Automatic PII removal","k-anonymity applied"].map((t) => (
                <div key={t} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-violet-400" /><span>{t}</span></div>
              ))}
            </div>
          </div>

          {/* Map Vault */}
          <div className="card card-amber p-6 r-up">
            <div className="w-12 h-12 rounded-xl bg-amber-500/[0.1] flex items-center justify-center mb-4">
              <Map className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-lg font-light text-gray-800 mb-2">Map Vault</h3>
            <p className="text-sm text-gray-500 font-light mb-4">Token-to-identity mappings enabling owner-controlled re-identification when required.</p>
            <div className="space-y-2 text-[13px] text-gray-500 font-light">
              <div className="flex items-center gap-2"><X className="w-3.5 h-3.5 text-red-400" /><span>Never leaves owner control</span></div>
              {["Compliant re-identification","Full audit trail","Regulated workflow support"].map((t) => (
                <div key={t} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /><span>{t}</span></div>
              ))}
            </div>
          </div>

          {/* Secret Key */}
          <div className="card p-6 r-up">
            <div className="w-12 h-12 rounded-xl bg-gray-500/[0.08] flex items-center justify-center mb-4">
              <Key className="w-6 h-6 text-gray-500" />
            </div>
            <h3 className="text-lg font-light text-gray-800 mb-2">Secret Key</h3>
            <p className="text-sm text-gray-500 font-light mb-4">Required to decrypt computation results. Held exclusively by data owner at all times.</p>
            <div className="space-y-2 text-[13px] text-gray-500 font-light">
              <div className="flex items-center gap-2"><X className="w-3.5 h-3.5 text-red-400" /><span>Never transmitted</span></div>
              {["Hardware-secured option","Key rotation supported","Multi-party threshold option"].map((t) => (
                <div key={t} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gray-400" /><span>{t}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
