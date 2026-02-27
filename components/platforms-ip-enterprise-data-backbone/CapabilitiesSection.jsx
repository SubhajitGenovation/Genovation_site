"use client";
import { useEffect } from "react";
import { Layers, Download, Cog, Zap, GitBranch, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CapabilitiesSection() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });

    const hTrack = document.getElementById("hScrollTrack");
    const hPin   = document.getElementById("hScrollPin");
    if (!hTrack || !hPin) return;
    gsap.to(hTrack, {
      x: () => -(hTrack.scrollWidth - window.innerWidth + 60),
      ease: "none",
      scrollTrigger: { trigger: hPin, start: "top top", end: () => `+=${hTrack.scrollWidth - window.innerWidth}`, pin: true, scrub: 1.2, anticipatePin: 1, invalidateOnRefresh: true },
    });
  }, []);

  const panels = [
    {
      icon: <Download className="w-5 h-5 text-emerald-600" />,
      iconBg: "bg-emerald-500/[0.1]",
      title: "Multi-Source Ingestion",
      sub: "Streaming & Batch",
      desc: "Ingests data from diverse enterprise and IoT sources with support for both streaming and batch ingestion.",
      items: [
        { label: "Enterprise Systems", val: "12.4K/s", color: "text-emerald-600" },
        { label: "IoT & Sensor Networks", val: "89.2K/s", color: "text-cyan-600" },
        { label: "Logs, Events & Docs", val: "Batch", color: "text-amber-600" },
      ],
    },
    {
      icon: <Cog className="w-5 h-5 text-cyan-600" />,
      iconBg: "bg-cyan-500/[0.12]",
      title: "Orchestrated Processing",
      sub: "Governed Jobs",
      desc: "Data pipelines are executed as governed jobs, not ad-hoc scripts. Ensuring reliability in production environments.",
      items: null,
    },
    {
      icon: <Zap className="w-5 h-5 text-violet-600" />,
      iconBg: "bg-violet-500/[0.12]",
      title: "Real-Time & Historical",
      sub: "Past, Present, Emerging",
      desc: "Enables intelligence systems to reason across past, present, and emerging signals seamlessly.",
      metrics: [
        { val: "<50ms", label: "Stream Latency", color: "cyan" },
        { val: "24h",   label: "Batch Window",   color: "violet" },
        { val: "3yr",   label: "History Depth",  color: "emerald" },
      ],
    },
    {
      icon: <GitBranch className="w-5 h-5 text-emerald-600" />,
      iconBg: "bg-emerald-500/[0.1]",
      title: "Data Lineage",
      sub: "Full Traceability",
      desc: "Every transformation is traceable. Critical for audits, investigations, and building trust.",
      lineage: true,
    },
    {
      icon: <Shield className="w-5 h-5 text-violet-600" />,
      iconBg: "bg-violet-500/[0.12]",
      title: "Governed Access",
      sub: "Policy-Controlled",
      desc: "Only authorized agents and systems can consume specific datasets.",
      access: true,
    },
  ];

  return (
    <section id="hScrollSection" className="relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="py-32 px-8 max-w-7xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
          <Layers className="w-3 h-3 text-emerald-600" />
          <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Core Capabilities</span>
        </div>
        <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
          What the Backbone <span className="text-gradient">Does</span>
        </h2>
      </div>

      <div id="hScrollPin" style={{ height: "200vh", position: "relative" }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="h-scroll-track pl-8" id="hScrollTrack">
            {panels.map((p) => (
              <div key={p.title} className="h-panel">
                <div className="card p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl ${p.iconBg} flex items-center justify-center`}>{p.icon}</div>
                    <div>
                      <h3 className="text-lg font-light text-gray-900 tracking-tight">{p.title}</h3>
                      <p className="text-[11px] text-gray-600 font-light">{p.sub}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-5">{p.desc}</p>

                  {p.items && (
                    <div className="space-y-3 flex-1">
                      {p.items.map((r) => (
                        <div key={r.label} className="flex items-center gap-3 p-3 rounded-lg bg-black/[0.03] border border-black/[0.06]">
                          <span className="text-xs text-gray-600 font-light">{r.label}</span>
                          <span className={`ml-auto text-[10px] font-mono ${r.color}`}>{r.val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {p.metrics && (
                    <div className="grid grid-cols-3 gap-3 flex-1">
                      {p.metrics.map((m) => (
                        <div key={m.label} className={`text-center p-5 rounded-xl bg-${m.color}-500/[0.08] border border-${m.color}-500/[0.15] flex flex-col justify-center`}>
                          <div className={`text-2xl font-light text-${m.color}-600 mb-1`}>{m.val}</div>
                          <div className="text-[9px] text-gray-500 font-light">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {p.lineage && (
                    <div className="space-y-2 font-mono text-xs flex-1">
                      <div className="p-2.5 rounded-lg bg-emerald-500/[0.08] text-emerald-600"><span className="text-gray-500">source:</span> orders_db.transactions</div>
                      <div className="flex justify-center">↓</div>
                      <div className="p-2.5 rounded-lg bg-cyan-500/[0.08] text-cyan-600"><span className="text-gray-500">transform:</span> aggregate_daily_v2.3</div>
                      <div className="flex justify-center">↓</div>
                      <div className="p-2.5 rounded-lg bg-violet-500/[0.08] text-violet-600"><span className="text-gray-500">output:</span> analytics.daily_summary</div>
                      <div className="mt-3 p-2.5 rounded-lg bg-black/[0.04] text-gray-500"><span className="text-gray-400">executed:</span> 2024-01-15T14:32:01Z</div>
                    </div>
                  )}

                  {p.access && (
                    <div className="space-y-2.5 flex-1">
                      {[
                        { name: "analytics_agent",  access: "READ",   allowed: true },
                        { name: "reporting_service", access: "READ",   allowed: true },
                        { name: "external_api",      access: "DENIED", allowed: false },
                      ].map((row) => (
                        <div key={row.name} className={`flex items-center justify-between p-3 rounded-lg ${row.allowed ? "bg-emerald-500/[0.06] border border-emerald-500/[0.15]" : "bg-red-500/[0.05] border border-red-500/[0.12]"}`}>
                          <span className="text-xs text-gray-600 font-light">{row.name}</span>
                          <span className={`text-[9px] font-mono ${row.allowed ? "text-emerald-600" : "text-red-600"}`}>{row.access}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div style={{ minWidth: 100, flexShrink: 0 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
