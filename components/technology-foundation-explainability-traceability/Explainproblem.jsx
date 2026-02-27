"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AlertTriangle, ShieldOff, SearchX, UserX, Bug, Box, ScanSearch, X, Check } from "lucide-react";

export default function ExplainProblem() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".r-up", containerRef.current).forEach((el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-left", containerRef.current).forEach((el) => {
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-right", containerRef.current).forEach((el) => {
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    });
  }, { scope: containerRef });

  return (
    <section className="py-48 relative" id="problemSection" ref={containerRef}>
      <div className="absolute inset-0 mesh-bg opacity-15"></div>
      <div className="orb w-[600px] h-[400px] bg-rose-500/[0.05]" style={{ top: "10%", right: "15%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/[0.1] border border-rose-500/[0.2] mb-8 r-up">
            <AlertTriangle className="w-3 h-3 text-rose-600/80" />
            <span className="text-rose-600/80 text-[11px] font-light tracking-[0.25em] uppercase">The Problem</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">The Problem with<br /><span className="text-gradient-rose">Black-Box AI</span></h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">Most AI systems explain outcomes after the fact, if at all. This creates unacceptable risk in high-consequence environments.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: <ShieldOff className="w-6 h-6 text-rose-600/70" />, title: "Can't Justify to Regulators", desc: "Decisions cannot be explained or defended when questioned by compliance or oversight bodies." },
            { icon: <SearchX className="w-6 h-6 text-rose-600/70" />, title: "Can't Identify Root Causes", desc: "When things go wrong, there's no way to trace back and understand what happened." },
            { icon: <UserX className="w-6 h-6 text-rose-600/70" />, title: "Can't Assign Responsibility", desc: "Accountability becomes impossible when the decision-making process is opaque." },
            { icon: <Bug className="w-6 h-6 text-rose-600/70" />, title: "Can't Correct Errors", desc: "Errors cannot be reliably corrected without understanding how they occurred." },
          ].map((item, i) => (
            <div className="card p-8 r-up" key={i}>
              <div className="w-12 h-12 rounded-xl bg-rose-500/[0.1] flex items-center justify-center mb-5">{item.icon}</div>
              <h3 className="text-[15px] font-light text-gray-900 mb-2">{item.title}</h3>
              <p className="text-[13px] text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Black Box */}
          <div className="r-left">
            <div className="relative rounded-2xl border border-black/[0.1] overflow-hidden" style={{ background: "rgba(255,255,255,0.7)" }}>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center"><Box className="w-6 h-6 text-gray-500" /></div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900">Black-Box AI</h3>
                    <p className="text-[11px] text-gray-400 font-light">Post-hoc interpretation attempts</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/[0.03] border border-black/[0.06] mb-6">
                  <svg viewBox="0 0 340 100" className="w-full">
                    <g transform="translate(40, 50)"><rect x="-30" y="-20" width="60" height="40" rx="6" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/><text x="0" y="5" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="Urbanist">Input</text></g>
                    <line x1="70" y1="50" x2="110" y2="50" stroke="rgba(0,0,0,0.15)" strokeWidth="2"/>
                    <g transform="translate(170, 50)"><rect x="-50" y="-30" width="100" height="60" rx="8" fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.2)" strokeWidth="2"/><text x="0" y="-5" textAnchor="middle" fill="#6b7280" fontSize="10" fontWeight="400" fontFamily="Urbanist">BLACK BOX</text><text x="0" y="12" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Urbanist">No visibility</text></g>
                    <line x1="230" y1="50" x2="270" y2="50" stroke="rgba(0,0,0,0.15)" strokeWidth="2"/>
                    <g transform="translate(300, 50)"><rect x="-30" y="-20" width="60" height="40" rx="6" fill="rgba(251,113,133,0.08)" stroke="rgba(251,113,133,0.3)" strokeWidth="1"/><text x="0" y="5" textAnchor="middle" fill="#fb7185" fontSize="9" fontFamily="Urbanist">Output ⚠</text></g>
                  </svg>
                </div>
                <div className="space-y-2.5">
                  {["Reasoning hidden in neural weights", "Explanations generated after the fact", "No guarantee explanation matches reality"].map((t, i) => (
                    <div key={i} className="flex items-center gap-3 text-[13px] text-gray-500 font-light"><X className="w-4 h-4 text-rose-400/70" /><span>{t}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Genovation */}
          <div className="r-right">
            <div className="relative rounded-2xl border border-emerald-500/[0.2] overflow-hidden" style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 25px 80px -20px rgba(16,185,129,0.12)" }}>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/[0.15] flex items-center justify-center"><ScanSearch className="w-6 h-6 text-emerald-600" /></div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900">Genovation Approach</h3>
                    <p className="text-[11px] text-emerald-600/60 font-light">Explainability by design</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/[0.1] mb-6">
                  <svg viewBox="0 0 340 100" className="w-full">
                    <g transform="translate(40, 50)"><rect x="-30" y="-20" width="60" height="40" rx="6" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" strokeWidth="1"/><text x="0" y="5" textAnchor="middle" fill="#059669" fontSize="9" fontFamily="Urbanist">Input</text></g>
                    <line x1="70" y1="50" x2="100" y2="50" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3"/>
                    <g transform="translate(170, 50)">
                      <rect x="-60" y="-30" width="120" height="60" rx="8" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.3)" strokeWidth="2"/>
                      <text x="0" y="-12" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="400" fontFamily="Urbanist">TRACED REASONING</text>
                      <circle cx="-30" cy="8" r="7" fill="#10b981" opacity="0.8"/><text x="-30" y="11" textAnchor="middle" fill="white" fontSize="8" fontFamily="Urbanist">1</text>
                      <line x1="-23" y1="8" x2="-12" y2="8" stroke="#10b981" strokeWidth="1.5"/>
                      <circle cx="-5" cy="8" r="7" fill="#06b6d4" opacity="0.8"/><text x="-5" y="11" textAnchor="middle" fill="white" fontSize="8" fontFamily="Urbanist">2</text>
                      <line x1="2" y1="8" x2="13" y2="8" stroke="#06b6d4" strokeWidth="1.5"/>
                      <circle cx="20" cy="8" r="7" fill="#3b82f6" opacity="0.8"/><text x="20" y="11" textAnchor="middle" fill="white" fontSize="8" fontFamily="Urbanist">3</text>
                      <text x="0" y="28" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Space Mono">Every step logged</text>
                    </g>
                    <line x1="240" y1="50" x2="270" y2="50" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3"/>
                    <g transform="translate(300, 50)"><rect x="-30" y="-20" width="60" height="40" rx="6" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" strokeWidth="1"/><text x="0" y="5" textAnchor="middle" fill="#059669" fontSize="9" fontFamily="Urbanist">Output ✓</text></g>
                  </svg>
                </div>
                <div className="space-y-2.5">
                  {["Bounded reasoning with explicit paths", "Structured execution logged in real-time", "Explanation is the process, not a summary"].map((t, i) => (
                    <div key={i} className="flex items-center gap-3 text-[13px] text-gray-600 font-light"><Check className="w-4 h-4 text-emerald-500" /><span>{t}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto r-up">
          <div className="p-8 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/[0.15] text-center">
            <p className="text-xl md:text-2xl text-gray-900 font-light mb-3">"Explainability is not an add-on. It is a <span className="text-gradient">design constraint</span>."</p>
            <p className="text-[13px] text-gray-500 font-light">We engineer systems where explainability is intrinsic — achieved through bounded reasoning, structured execution, explicit decision paths, and enforced governance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}