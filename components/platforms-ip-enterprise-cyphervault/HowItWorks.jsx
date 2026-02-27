"use client";
import { useEffect } from "react";
import { Lock, Cpu, Layers, UserCheck, ShieldCheck, Users, BarChart3 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "1", color: "violet", title: "Ingest", sub: "Source data", content: ["PostgreSQL", "CSV, API"], contentStyle: "bg-[#f5f3f0]" },
  { num: "2", color: "violet", title: "Encrypt", sub: "Transform", contentStyle: "bg-violet-500/[0.04] border border-violet-500/[0.1]",
    items: ["CKKS Encryption", "PII Detection", "k-Anonymization"], icon: <Lock className="w-5 h-5 text-violet-500 mx-auto mt-1" /> },
  { num: "3", color: "violet", title: "Store", sub: "Vault creation", contentStyle: "bg-violet-500/[0.06] border border-violet-500/[0.15]",
    vaultIcon: true },
  { num: "4", color: "emerald", title: "Share", sub: "Grant access", contentStyle: "bg-emerald-500/[0.04] border border-emerald-500/[0.1]",
    shareIcon: true },
  { num: "5", color: "violet", title: "Compute", sub: "Analytics", contentStyle: "bg-violet-500/[0.04] border border-violet-500/[0.1]",
    computeIcon: true },
];

const CAPS = [
  { icon: <Lock className="w-5 h-5 text-violet-500" />, title: "Encrypted Sharing", desc: "No plaintext. No raw exports. Public-key encryption." },
  { icon: <Cpu className="w-5 h-5 text-violet-500" />, title: "Protected Compute", desc: "Aggregations, statistics, queries on ciphertext." },
  { icon: <Layers className="w-5 h-5 text-violet-500" />, title: "Defense in Depth", desc: "Multiple layers must fail for re-identification." },
  { icon: <UserCheck className="w-5 h-5 text-violet-500" />, title: "Identity Remapping", desc: "Owner-controlled re-identification when needed." },
];

export default function HowItWorks() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) =>
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } })
    );
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[400px] h-[400px] bg-violet-400/[0.05]" style={{ top: "20%", left: "-8%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] text-violet-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Workflow</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 r-up">How CipherVault Works</h2>
        </div>

        {/* 5-step grid */}
        <div className="max-w-5xl mx-auto mb-16 r-up">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="rounded-2xl p-5 bg-white/70 border border-violet-500/[0.12] text-center">
              <div className="w-10 h-10 rounded-full bg-violet-500/[0.1] flex items-center justify-center mx-auto mb-3">
                <span className="text-violet-600 font-medium text-sm">1</span>
              </div>
              <h4 className="text-sm font-medium text-violet-600 mb-1">Ingest</h4>
              <p className="text-[11px] text-gray-400 font-light mb-3">Source data</p>
              <div className="p-3 rounded-xl bg-[#f5f3f0] text-center">
                <p className="text-[11px] text-gray-500 font-light">PostgreSQL</p>
                <p className="text-[11px] text-gray-500 font-light">CSV, API</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl p-5 bg-white/70 border border-violet-500/[0.12] text-center">
              <div className="w-10 h-10 rounded-full bg-violet-500/[0.1] flex items-center justify-center mx-auto mb-3">
                <span className="text-violet-600 font-medium text-sm">2</span>
              </div>
              <h4 className="text-sm font-medium text-violet-600 mb-1">Encrypt</h4>
              <p className="text-[11px] text-gray-400 font-light mb-3">Transform</p>
              <div className="p-3 rounded-xl bg-violet-500/[0.04] border border-violet-500/[0.1] text-center">
                <p className="text-[11px] text-violet-600 font-light">CKKS Encryption</p>
                <p className="text-[10px] text-gray-400 font-light">PII Detection</p>
                <p className="text-[10px] text-gray-400 font-light">k-Anonymization</p>
                <Lock className="w-5 h-5 text-violet-500 mx-auto mt-1" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl p-5 bg-white/70 border border-violet-500/[0.15] text-center">
              <div className="w-10 h-10 rounded-full bg-violet-500/[0.12] flex items-center justify-center mx-auto mb-3">
                <span className="text-violet-600 font-medium text-sm">3</span>
              </div>
              <h4 className="text-sm font-medium text-violet-600 mb-1">Store</h4>
              <p className="text-[11px] text-gray-400 font-light mb-3">Vault creation</p>
              <div className="p-3 rounded-xl bg-violet-500/[0.06] border border-violet-500/[0.15] text-center">
                <ShieldCheck className="w-6 h-6 text-violet-500 mx-auto" />
                <p className="text-[11px] text-violet-600 font-light">CipherVault</p>
                <p className="text-[10px] text-emerald-600 font-light">Protected</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl p-5 bg-white/70 border border-emerald-500/[0.12] text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/[0.1] flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-600 font-medium text-sm">4</span>
              </div>
              <h4 className="text-sm font-medium text-emerald-600 mb-1">Share</h4>
              <p className="text-[11px] text-gray-400 font-light mb-3">Grant access</p>
              <div className="p-3 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/[0.1] text-center">
                <Users className="w-6 h-6 text-emerald-500 mx-auto" />
                <p className="text-[11px] text-emerald-600 font-light">Partners</p>
                <p className="text-[10px] text-gray-400 font-light">Secure access</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="rounded-2xl p-5 bg-white/70 border border-violet-500/[0.12] text-center">
              <div className="w-10 h-10 rounded-full bg-violet-500/[0.1] flex items-center justify-center mx-auto mb-3">
                <span className="text-violet-600 font-medium text-sm">5</span>
              </div>
              <h4 className="text-sm font-medium text-violet-600 mb-1">Compute</h4>
              <p className="text-[11px] text-gray-400 font-light mb-3">Analytics</p>
              <div className="p-3 rounded-xl bg-violet-500/[0.04] border border-violet-500/[0.1] text-center">
                <BarChart3 className="w-6 h-6 text-violet-500 mx-auto" />
                <p className="text-[11px] text-violet-600 font-light">Encrypted Query</p>
                <p className="text-[10px] text-emerald-600 font-light">Zero exposure</p>
              </div>
            </div>
          </div>
          <p className="text-center text-[10px] text-gray-400 font-light mt-6">
            Data remains encrypted throughout the entire workflow · Only owner can decrypt final results
          </p>
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-4 gap-4">
          {CAPS.map((c) => (
            <div key={c.title} className="card p-5 r-up">
              <div className="w-10 h-10 rounded-xl bg-violet-500/[0.08] flex items-center justify-center mb-3">
                {c.icon}
              </div>
              <h4 className="text-gray-800 font-medium mb-1 text-sm">{c.title}</h4>
              <p className="text-[12px] text-gray-500 font-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
