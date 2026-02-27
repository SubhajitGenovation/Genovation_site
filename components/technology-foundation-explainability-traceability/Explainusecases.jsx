"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Layers, Search, TrendingUp, Lightbulb, Headphones, Scale, UserCheck, ClipboardList, Shield, Building } from "lucide-react";

export default function ExplainUseCases() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".r-left", containerRef.current).forEach((el) => {
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-right", containerRef.current).forEach((el) => {
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    });
  }, { scope: containerRef });

  return (
    <section className="py-48 relative" id="useCasesSection" ref={containerRef}>
      <div className="absolute inset-0 mesh-bg opacity-15"></div>
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.05]" style={{ top: "10%", left: "20%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Use Cases */}
          <div className="r-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8">
              <Layers className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Applications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mb-4">Explainability Across <span className="text-gradient">All Use Cases</span></h2>
            <p className="text-[15px] text-gray-500 font-light mb-10 leading-relaxed">The mechanism is consistent across all Genovation products — even as use cases differ.</p>
            <div className="space-y-4">
              {[
                { icon: <Search className="w-6 h-6 text-cyan-600" />, bg: "bg-cyan-500/[0.12]", title: "Enterprise Knowledge Intelligence", desc: "Why an answer was given and which sources were used" },
                { icon: <TrendingUp className="w-6 h-6 text-emerald-600" />, bg: "bg-emerald-500/[0.12]", title: "Analytics & Decision Intelligence", desc: "Why a variance or anomaly was identified" },
                { icon: <Lightbulb className="w-6 h-6 text-violet-600" />, bg: "bg-violet-500/[0.12]", title: "Strategy & Research Intelligence", desc: "How conclusions were synthesized from multiple sources" },
                { icon: <Headphones className="w-6 h-6 text-rose-600/80" />, bg: "bg-rose-500/[0.12]", title: "CX Intelligence", desc: "Why an action was taken on behalf of a customer" },
              ].map((item, i) => (
                <div key={i} className="card p-6 flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>{item.icon}</div>
                  <div><h4 className="text-[15px] text-gray-900 font-light mb-1">{item.title}</h4><p className="text-[13px] text-gray-500 font-light">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory */}
          <div className="r-right">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8">
              <Scale className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Compliance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mb-4">Regulatory <span className="text-gradient">Alignment</span></h2>
            <p className="text-[15px] text-gray-500 font-light mb-10 leading-relaxed">Designed to align with regulatory expectations across jurisdictions — suitable for long-term enterprise deployment, not experimental pilots.</p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: <UserCheck className="w-6 h-6 text-emerald-600" />, title: "Accountability", desc: "Clear ownership and responsibility assignment" },
                { icon: <ClipboardList className="w-6 h-6 text-emerald-600" />, title: "Auditability", desc: "Complete records for regulatory inspection" },
                { icon: <Shield className="w-6 h-6 text-emerald-600" />, title: "Risk Management", desc: "Framework-aligned controls and monitoring" },
                { icon: <Building className="w-6 h-6 text-emerald-600" />, title: "Governance", desc: "Policy enforcement and oversight capabilities" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/[0.12]">
                  {item.icon}
                  <h4 className="text-[15px] text-gray-900 font-light mb-1 mt-3">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-xl bg-black/[0.03] border border-black/[0.06]">
              <p className="text-[11px] text-gray-400 font-light mb-3 tracking-wider uppercase">Aligned with:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "SOX", color: "emerald" }, { label: "GDPR", color: "emerald" }, { label: "HIPAA", color: "emerald" },
                  { label: "SEC", color: "cyan" }, { label: "FedRAMP", color: "cyan" },
                  { label: "Basel III", color: "blue" }, { label: "EU AI Act", color: "violet" },
                ].map((tag) => (
                  <span key={tag.label} className={`px-3 py-1.5 rounded-full bg-${tag.color}-500/[0.08] text-[11px] text-${tag.color}-600 border border-${tag.color}-500/15`}>{tag.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}