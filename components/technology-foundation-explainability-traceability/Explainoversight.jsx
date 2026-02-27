"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Eye, Activity, ShieldCheck, Octagon, ClipboardCheck, Lock, Fingerprint, UserCheck, Clock } from "lucide-react";

export default function ExplainOversight() {
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
    <section className="py-48 relative" id="oversightSection" ref={containerRef}>
      <div className="absolute inset-0 mesh-bg opacity-15"></div>
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.06]" style={{ top: "20%", left: "5%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <Eye className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Governance</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">Real-Time Oversight<br /><span className="text-gradient">& Enforcement</span></h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">Explainability is meaningless if systems can act outside control. Mentis OS ensures that only explainable actions are allowed to complete.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="r-left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-emerald-500/[0.06] to-emerald-400/[0.02]"></div>
              <div className="absolute -inset-4 rounded-[32px] border border-emerald-500/[0.08]"></div>
              <div className="relative card p-10">
                <h3 className="text-2xl font-light text-gray-900 mb-8">Mentis OS Enforcement</h3>
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-black/[0.03] border border-emerald-500/[0.1]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.12] flex items-center justify-center"><Activity className="w-4 h-4 text-emerald-600" /></div>
                      <p className="text-[15px] text-gray-900 font-light">Real-Time Monitoring</p>
                    </div>
                    <p className="text-[13px] text-gray-500 font-light pl-11">Continuous observation of agent behavior with instant anomaly detection</p>
                  </div>
                  <div className="p-5 rounded-xl bg-black/[0.03] border border-emerald-500/[0.1]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.12] flex items-center justify-center"><ShieldCheck className="w-4 h-4 text-emerald-600" /></div>
                      <p className="text-[15px] text-gray-900 font-light">Policy Validation</p>
                    </div>
                    <p className="text-[13px] text-gray-500 font-light pl-11">Rules checked before and during execution — not just after</p>
                  </div>
                  <div className="p-5 rounded-xl bg-black/[0.03] border border-rose-500/[0.1]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-rose-500/[0.12] flex items-center justify-center"><Octagon className="w-4 h-4 text-rose-600/80" /></div>
                      <p className="text-[15px] text-gray-900 font-light">Automatic Halting</p>
                    </div>
                    <p className="text-[13px] text-gray-500 font-light pl-11">Non-compliant actions stopped immediately before completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="r-right">
            <div className="industry-mock" style={{ boxShadow: "0 25px 80px -20px rgba(16,185,129,0.1)" }}>
              <div className="mock-header"><div className="mock-dot r"></div><div className="mock-dot y"></div><div className="mock-dot g"></div><span className="text-[9px] text-gray-500 font-mono ml-2">ENFORCEMENT FLOW — LIVE</span></div>
              <div className="p-6">
                <svg viewBox="0 0 400 240" className="w-full">
                  <g transform="translate(70, 45)"><circle r="25" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5"/><text y="5" textAnchor="middle" fill="#8b5cf6" fontSize="18" fontFamily="Urbanist">🤖</text><text y="45" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="Urbanist">Agent Action</text></g>
                  <line x1="95" y1="45" x2="150" y2="45" stroke="rgba(139,92,246,0.4)" strokeWidth="2" strokeDasharray="4 3"/>
                  <g transform="translate(195, 45)"><rect x="-40" y="-35" width="80" height="70" rx="12" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/><text y="-10" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="400" fontFamily="Urbanist">POLICY</text><text y="4" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="400" fontFamily="Urbanist">GATE</text><text y="22" textAnchor="middle" fill="#10b981" fontSize="14">⚖️</text></g>
                  <line x1="235" y1="25" x2="280" y2="25" stroke="rgba(34,197,94,0.5)" strokeWidth="2"/><text x="290" y="29" fill="#22c55e" fontSize="9" fontFamily="Urbanist">PASS</text><line x1="312" y1="25" x2="340" y2="25" stroke="rgba(34,197,94,0.5)" strokeWidth="2"/>
                  <g transform="translate(360, 25)"><circle r="17" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.4)" strokeWidth="1.5"/><text y="5" textAnchor="middle" fill="#22c55e" fontSize="12">✓</text></g>
                  <text x="360" y="58" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Urbanist">Execute & Log</text>
                  <line x1="235" y1="65" x2="280" y2="65" stroke="rgba(239,68,68,0.5)" strokeWidth="2"/><text x="290" y="69" fill="#ef4444" fontSize="9" fontFamily="Urbanist">FAIL</text><line x1="308" y1="65" x2="340" y2="65" stroke="rgba(239,68,68,0.5)" strokeWidth="2"/>
                  <g transform="translate(360, 65)"><circle r="17" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.3)" strokeWidth="1.5"/><text y="5" textAnchor="middle" fill="#ef4444" fontSize="12">✗</text></g>
                  <text x="360" y="98" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Urbanist">Halt & Alert</text>
                  <rect x="40" y="120" width="340" height="50" rx="10" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4,4"/>
                  <text x="210" y="142" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="400" fontFamily="Urbanist">CONTINUOUS MONITORING LAYER</text>
                  <text x="210" y="158" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Urbanist">All actions observed · Anomalies flagged · Complete audit trail</text>
                  <g transform="translate(210, 210)"><rect x="-70" y="-18" width="140" height="36" rx="8" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.25)" strokeWidth="1"/><text y="5" textAnchor="middle" fill="#059669" fontSize="10" fontFamily="Urbanist">📋 Immutable Audit Log</text></g>
                  <line x1="210" y1="170" x2="210" y2="192" stroke="rgba(16,185,129,0.3)" strokeWidth="1" strokeDasharray="4,4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Ready */}
        <div className="r-up">
          <div className="card p-12">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/[0.12] flex items-center justify-center"><ClipboardCheck className="w-8 h-8 text-emerald-600" /></div>
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900">Audit-Ready by Default</h3>
                <p className="text-[15px] text-gray-500 font-light">Systems designed to support audits without retrofitting</p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <Lock className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-500/[0.06] border-emerald-500/[0.12]", iconBg: "bg-emerald-500/[0.15]", title: "Immutable Logs", desc: "Execution logs cannot be altered or deleted after creation" },
                { icon: <Fingerprint className="w-5 h-5 text-cyan-600" />, bg: "bg-cyan-500/[0.06] border-cyan-500/[0.12]", iconBg: "bg-cyan-500/[0.15]", title: "Cryptographic Verification", desc: "Records are cryptographically signed and verifiable" },
                { icon: <UserCheck className="w-5 h-5 text-blue-600" />, bg: "bg-blue-500/[0.06] border-blue-500/[0.12]", iconBg: "bg-blue-500/[0.15]", title: "Clear Attribution", desc: "Every decision linked to responsible agent and operator" },
                { icon: <Clock className="w-5 h-5 text-violet-600" />, bg: "bg-violet-500/[0.06] border-violet-500/[0.12]", iconBg: "bg-violet-500/[0.15]", title: "Time-Ordered Events", desc: "Complete event sequence with precise timestamps" },
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-xl border ${item.bg}`}>
                  <div className={`w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center mb-3`}>{item.icon}</div>
                  <h4 className="text-[15px] text-gray-900 font-light mb-1">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/[0.15] text-center">
              <p className="text-[15px] text-gray-600 font-light"><span className="text-emerald-600">Auditors do not need to "trust the AI."</span> They can verify it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}