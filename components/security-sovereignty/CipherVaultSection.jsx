"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScanEye, Database, Scissors, Lock, Brain, GitMerge, Sparkles, Cpu, Home, Send, CheckCircle, AlertCircle, Scan, Binary } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    label: "STAGE 1", color: "blue", icon: <Database className="w-5 h-5 text-blue-500" />,
    iconBg: "bg-blue-500/10", border: "border-blue-200/40 bg-blue-50/20",
    badge: "bg-blue-100/80 text-blue-600", title: "Raw Data",
    code: (
      <div className="font-mono text-[10px] leading-relaxed text-left bg-white/60 rounded-lg p-3 border border-blue-100/30">
        <div className="text-blue-500">name: <span className="text-gray-600">"John Doe"</span></div>
        <div className="text-blue-500">ssn: <span className="text-gray-600">"123-45-6789"</span></div>
        <div className="text-blue-500">salary: <span className="text-gray-600">$85,000</span></div>
        <div className="text-blue-500">dept: <span className="text-gray-600">"Engineering"</span></div>
      </div>
    ),
    footer: <div className="mt-3 text-[10px] text-red-400 font-light flex items-center justify-center gap-1"><AlertCircle className="w-3 h-3" /> Contains PII</div>,
  },
  {
    label: "STAGE 2", color: "rose", icon: <Scissors className="w-5 h-5 text-rose-500" />,
    iconBg: "bg-rose-500/10", border: "border-rose-200/40 bg-rose-50/20",
    badge: "bg-rose-100/80 text-rose-600", title: "PII Extraction",
    code: (
      <div className="font-mono text-[10px] leading-relaxed text-left bg-white/60 rounded-lg p-3 border border-rose-100/30">
        <div className="text-rose-500 font-semibold mb-1">→ Local Vault:</div>
        <div className="text-gray-500">"John Doe" → <span className="text-violet-500">tk_001</span></div>
        <div className="text-gray-500">"123-45-6789" → <span className="text-violet-500">tk_002</span></div>
      </div>
    ),
    footer: <div className="mt-3 text-[10px] text-rose-500 font-light flex items-center justify-center gap-1"><Lock className="w-3 h-3" /> PII stays local</div>,
  },
  {
    label: "STAGE 3", color: "violet", icon: <Lock className="w-5 h-5 text-violet-500" />,
    iconBg: "bg-violet-500/10", border: "border-violet-200/40 bg-violet-50/20",
    badge: "bg-violet-100/80 text-violet-600", title: "HE Encrypt",
    code: (
      <div className="font-mono text-[10px] leading-relaxed text-left bg-white/60 rounded-lg p-3 border border-violet-100/30">
        <div className="text-violet-500">name: <span className="text-gray-400">tk_001</span></div>
        <div className="text-violet-500">ssn: <span className="text-gray-400">tk_002</span></div>
        <div className="text-violet-500">salary: <span className="text-emerald-500">Enc(85000)</span></div>
        <div className="text-violet-500">dept: <span className="text-emerald-500">Enc("Eng")</span></div>
      </div>
    ),
    footer: <div className="mt-3 text-[10px] text-violet-500 font-light flex items-center justify-center gap-1"><Sparkles className="w-3 h-3" /> FHE ciphertext</div>,
  },
  {
    label: "STAGE 4", color: "cyan", icon: <Brain className="w-5 h-5 text-cyan-500" />,
    iconBg: "bg-cyan-500/10", border: "border-cyan-200/40 bg-cyan-50/20",
    badge: "bg-cyan-100/80 text-cyan-600", title: "ML on Ciphertext",
    code: (
      <div className="font-mono text-[10px] leading-relaxed text-left bg-white/60 rounded-lg p-3 border border-cyan-100/30">
        <div className="text-cyan-500">TEE Enclave:</div>
        <div className="text-gray-500">f(Enc(x)) →</div>
        <div className="text-gray-500">{"  "}Enc(f(x))</div>
        <div className="text-gray-400 mt-1 text-[9px">{"// Compute without decryption"}</div>
      </div>
    ),
    footer: <div className="mt-3 text-[10px] text-cyan-500 font-light flex items-center justify-center gap-1"><Cpu className="w-3 h-3" /> Zero plaintext</div>,
  },
  {
    label: "STAGE 5", color: "emerald", icon: <GitMerge className="w-5 h-5 text-emerald-500" />,
    iconBg: "bg-emerald-500/10", border: "border-emerald-300/40 bg-emerald-50/20",
    badge: "bg-emerald-100/80 text-emerald-600", title: "Decrypt & Remap",
    code: (
      <div className="font-mono text-[10px] leading-relaxed text-left bg-white/60 rounded-lg p-3 border border-emerald-100/30">
        <div className="text-emerald-500 font-semibold mb-1">→ Results:</div>
        <div className="text-gray-500">avg_salary: <span className="text-emerald-600">$78,250</span></div>
        <div className="text-gray-500">risk_score: <span className="text-emerald-600">0.12</span></div>
        <div className="text-gray-400 text-[9px] mt-1">{"// Tokens resolved locally"}</div>
      </div>
    ),
    footer: <div className="mt-3 text-[10px] text-emerald-500 font-light flex items-center justify-center gap-1"><CheckCircle className="w-3 h-3" /> Full fidelity</div>,
  },
];

const detailCards = [
  { icon: <Scan className="w-5 h-5 text-cyan-500" />, iconBg: "bg-cyan-500/10", title: "Smart PII Detection", desc: "NER-powered entity recognition identifies names, SSNs, addresses, financial data, health records, and custom-defined sensitive fields before any data leaves your perimeter." },
  { icon: <Binary className="w-5 h-5 text-violet-500" />, iconBg: "bg-violet-500/10", title: "Full Homomorphic Encryption", desc: "Non-sensitive fields encrypted with FHE (CKKS/BFV schemes) so ML models can run aggregations, classifications, and analytics directly on ciphertext — without ever seeing plaintext.", delay: "0.1s" },
  { icon: <GitMerge className="w-5 h-5 text-emerald-500" />, iconBg: "bg-emerald-500/10", title: "Deterministic Remapping", desc: "When encrypted results return, tokens are resolved against the local vault and values mapped back — fully reconstructing insights with zero data leakage during the entire pipeline.", delay: "0.2s" },
];

export default function CipherVaultSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".r-up", containerRef.current).forEach((el) => {
        gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });
      gsap.utils.toArray(".r-scale", containerRef.current).forEach((el) => {
        gsap.to(el, { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });
      containerRef.current.querySelectorAll(".orb").forEach((orb) => {
        gsap.to(orb, { y: (Math.random() - 0.5) * 250, x: (Math.random() - 0.5) * 120, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: 2.5 } });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="ciphervault" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 cv-grid-bg" />
      <div className="orb w-[700px] h-[600px] bg-cyan-500/[0.05]" style={{ top: "0%", left: "20%" }} />
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.06]" style={{ bottom: "5%", right: "10%" }} />
      <div className="orb w-[400px] h-[300px] bg-teal-500/[0.04]" style={{ top: "40%", right: "30%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.15] mb-8 r-up">
            <ScanEye className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">CipherVault Protocol</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Trustless<br /><span className="text-gradient">Data Transit</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-3xl mx-auto r-up">
            CipherVault isn't just a vault — it's a complete secure transfer protocol. PII is extracted and kept local, remaining data travels encrypted with placeholders, and ML runs on ciphertext. No secret ever leaves your perimeter.
          </p>
        </div>

        {/* Protocol flow diagram */}
        <div className="max-w-6xl mx-auto r-scale">
          <div className="rounded-3xl overflow-hidden bg-white/[0.92] border border-cyan-200/30 shadow-lg shadow-cyan-100/10">
            {/* Chrome bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-100/20 bg-[#fafdfb]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider">ciphervault.protocol — Secure Transfer Pipeline</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" />
                <span className="text-[10px] font-mono text-emerald-500">E2EE ACTIVE</span>
              </div>
            </div>

            <div className="p-8">
              {/* 5-stage grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {stages.map((s) => (
                  <div key={s.label} className={`rounded-2xl border p-5 text-center relative ${s.border}`}>
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[9px] font-mono tracking-wider ${s.badge}`}>{s.label}</div>
                    <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center mx-auto mb-3 mt-2`}>{s.icon}</div>
                    <h4 className="text-sm font-medium text-gray-800 mb-2">{s.title}</h4>
                    {s.code}
                    {s.footer}
                  </div>
                ))}
              </div>

              {/* Flow pipe */}
              <div className="hidden md:flex items-center gap-0 mx-4 -mt-4 mb-6">
                <div className="flex-1 h-[3px] rounded-full pipe-flow" />
              </div>

              {/* Zones */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border-2 border-dashed border-emerald-300/30 bg-emerald-50/20 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-mono text-emerald-600 tracking-wider">LOCAL_PERIMETER</span>
                  </div>
                  <div className="space-y-2">
                    {["PII & secrets stored in PQC-encrypted local vault", "Token-to-value mapping never transmitted", "Decryption & remapping happens here only"].map((t) => (
                      <div key={t} className="flex items-center gap-2 text-xs text-gray-500 font-light">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />{t}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border-2 border-dashed border-violet-300/30 bg-violet-50/20 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Send className="w-4 h-4 text-violet-500" />
                    <span className="text-xs font-mono text-violet-600 tracking-wider">TRANSIT_ZONE</span>
                  </div>
                  <div className="space-y-2">
                    {["Only tokenized + FHE-encrypted data leaves", "ML models operate on encrypted ciphertext", "Compromised transit reveals zero usable data"].map((t) => (
                      <div key={t} className="flex items-center gap-2 text-xs text-gray-500 font-light">
                        <span className="w-1 h-1 rounded-full bg-violet-400" />{t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          {detailCards.map((c) => (
            <div key={c.title} className="card p-6 r-up" style={c.delay ? { animationDelay: c.delay } : {}}>
              <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center mb-4`}>{c.icon}</div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2">{c.title}</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
