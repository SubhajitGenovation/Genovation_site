"use client";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CipherVaultHero() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      });
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden" id="hero">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="orb w-[500px] h-[500px] bg-violet-400/[0.06]" style={{ top: "-10%", left: "10%" }} />
      <div className="orb w-[400px] h-[400px] bg-purple-400/[0.05]" style={{ bottom: "10%", right: "5%" }} />
      <div className="orb w-[300px] h-[300px] bg-blue-400/[0.04]" style={{ top: "40%", left: "60%" }} />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="text-[10px] text-violet-500/80 tracking-[0.3em] uppercase mb-8 font-mono r-up">
          Platform &amp; Foundational IP
        </p>

        <h1 className="text-6xl md:text-8xl display-hero text-gradient-violet mb-8 r-up">
          CipherVault
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto mb-4 r-up">
          Trustless Analytics Through Cryptographically Enforced Privacy
        </p>

        <p className="text-sm text-gray-400 max-w-lg mx-auto mb-12 font-light r-up">
          Share encrypted vaults that can be computed on—while plaintext data is never revealed. Replace trust with mathematics.
        </p>

        <div className="flex items-center justify-center gap-4 mb-20 r-up">
          <button className="group px-6 py-3 rounded-full hero-cta-primary text-white text-sm font-light tracking-wide flex items-center gap-2">
            Explore Architecture
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="px-6 py-3 rounded-full border border-black/[0.1] text-gray-600 text-sm font-light tracking-wide hover:border-violet-500/30 hover:text-violet-600 transition-all">
            Documentation
          </button>
        </div>

        {/* Hero Flow Diagram */}
        <div className="max-w-3xl mx-auto relative r-up">
          <div className="card-no-hover p-8">
            <svg viewBox="0 0 700 140" className="w-full">
              <line x1="100" y1="70" x2="180" y2="70" stroke="rgba(139,92,246,0.3)" strokeWidth="2" className="flow-line" />
              <line x1="280" y1="70" x2="420" y2="70" stroke="rgba(139,92,246,0.4)" strokeWidth="2" className="flow-line" />
              <line x1="520" y1="70" x2="600" y2="70" stroke="rgba(139,92,246,0.3)" strokeWidth="2" className="flow-line" />

              {/* Raw Data */}
              <g>
                <rect x="20" y="40" width="80" height="60" rx="10" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.2)" strokeWidth="1.5" />
                <text x="60" y="65" textAnchor="middle" fill="#dc2626" fontSize="10">Raw Data</text>
                <text x="60" y="80" textAnchor="middle" fill="#9ca3af" fontSize="8">Exposed</text>
              </g>

              {/* Encrypt */}
              <g>
                <rect x="180" y="30" width="100" height="80" rx="12" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
                <text x="230" y="55" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="500">ENCRYPT</text>
                <g transform="translate(230,75)">
                  <rect x="-10" y="-10" width="20" height="20" rx="4" fill="rgba(139,92,246,0.15)" />
                  <path d="M-4,-5 L-4,-7 a4,4 0 0,1 8,0 L4,-5" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="-5" y="-5" width="10" height="8" rx="1.5" fill="#8b5cf6" />
                  <circle cx="0" cy="-1" r="1.2" fill="rgba(255,255,255,0.8)" />
                </g>
                <text x="230" y="98" textAnchor="middle" fill="#9ca3af" fontSize="8">CKKS + k-anon</text>
              </g>

              {/* Vault */}
              <g className="float">
                <rect x="420" y="25" width="100" height="90" rx="12" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.35)" strokeWidth="2" />
                <text x="470" y="52" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="500">VAULT</text>
                <g transform="translate(470,74)">
                  <path d="M-6,-8 L-6,-12 a6,6 0 0,1 12,0 L6,-8" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
                  <rect x="-8" y="-8" width="16" height="13" rx="2.5" fill="#8b5cf6" />
                  <circle cx="0" cy="-2" r="1.8" fill="rgba(255,255,255,0.8)" />
                  <line x1="0" y1="-0.5" x2="0" y2="2" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" />
                </g>
                <text x="470" y="100" textAnchor="middle" fill="#059669" fontSize="8">Protected</text>
              </g>

              {/* Results */}
              <g>
                <rect x="600" y="40" width="80" height="60" rx="10" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5" />
                <text x="640" y="65" textAnchor="middle" fill="#059669" fontSize="10">Analytics</text>
                <text x="640" y="80" textAnchor="middle" fill="#059669" fontSize="8">Zero exposure</text>
              </g>

              <text x="140" y="128" textAnchor="middle" fill="#9ca3af" fontSize="9">Source</text>
              <text x="350" y="128" textAnchor="middle" fill="#9ca3af" fontSize="9">Compute on encrypted</text>
              <text x="560" y="128" textAnchor="middle" fill="#9ca3af" fontSize="9">Insights</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-5 h-8 rounded-full border border-gray-300 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-violet-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
