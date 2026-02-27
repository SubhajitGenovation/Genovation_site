"use client";
import { useEffect } from "react";
import { GitBranch, Database, Radio, Activity, FileText, Download, Cog, Shield, ArrowDown, Brain } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function FlowConnector() {
  return (
    <div className="flow-connector r-up">
      <div className="flow-connector-line" />
      <div className="flow-connector-dot" />
      <div className="flow-connector-line" />
    </div>
  );
}

export default function ArchitectureSection() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
  }, []);

  return (
    <section id="architecture" className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[700px] h-[500px] bg-cyan-500/[0.05]" style={{ top: "10%", left: "20%" }} />
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.12] border border-cyan-500/[0.2] mb-8 r-up">
            <GitBranch className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Architecture</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Data Flow <span className="text-gradient">Architecture</span>
          </h2>
        </div>

        {/* Tier 1 */}
        <div className="flow-stage r-up">
          <div className="flow-stage-header bg-black/[0.04]">
            <div className="w-6 h-6 rounded-full bg-black/[0.06] flex items-center justify-center">
              <span className="text-[10px] text-gray-500 font-semibold">1</span>
            </div>
            <span className="text-[11px] text-gray-500 font-light tracking-wider uppercase">Data Sources</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: <Database className="w-4 h-4" />, label: "Enterprise", cls: "border-emerald-500/25 bg-emerald-500/[0.06] text-emerald-600" },
              { icon: <Radio className="w-4 h-4" />,    label: "IoT & Sensors", cls: "border-cyan-500/25 bg-cyan-500/[0.06] text-cyan-600" },
              { icon: <Activity className="w-4 h-4" />, label: "Logs & Events", cls: "border-violet-500/25 bg-violet-500/[0.06] text-violet-600" },
              { icon: <FileText className="w-4 h-4" />, label: "Files & Docs", cls: "border-amber-500/25 bg-amber-500/[0.06] text-amber-600" },
            ].map((s) => (
              <div key={s.label} className={`flow-src-pill border ${s.cls}`}>{s.icon}<span>{s.label}</span></div>
            ))}
          </div>
        </div>

        <FlowConnector />

        {/* Tier 2 */}
        <div className="flow-stage r-up">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flow-stage-header bg-emerald-500/[0.08]">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                  <Download className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-emerald-600 font-medium tracking-wide">INGESTION ENGINE</span>
              </div>
              <p className="text-[15px] text-gray-600 font-light leading-relaxed mb-5">
                Unified entry point for all enterprise data — streaming, batch, and hybrid ingestion with automatic schema detection.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Kafka Streams", "REST / gRPC", "MQTT / OPC-UA", "File Drops"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/[0.15] text-[11px] text-emerald-600 font-light">{tag}</span>
                ))}
              </div>
            </div>
            <div className="md:w-48 flex-shrink-0 p-5 rounded-2xl bg-[#edeae6] border border-emerald-500/[0.12]">
              <div className="text-[9px] text-gray-500 font-mono uppercase tracking-wider mb-3">Live Status</div>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-3xl font-light text-emerald-600">89.2K</span>
                <span className="text-[10px] text-emerald-600/50 mb-1">/sec</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-emerald-600 font-mono">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flow-connector r-up">
          <div className="flow-connector-line" style={{ background: "linear-gradient(180deg,#10b981 0%,#06b6d4 100%)" }} />
          <div className="flow-connector-dot" style={{ borderColor: "#06b6d4" }} />
          <div className="flow-connector-line" style={{ background: "linear-gradient(180deg,rgba(6,182,212,0.25) 0%,#06b6d4 100%)" }} />
        </div>

        {/* Tier 3 */}
        <div className="flow-stage r-up">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flow-stage-header bg-cyan-500/[0.08]">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center">
                  <Cog className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-cyan-600 font-medium tracking-wide">PROCESSING & ORCHESTRATION</span>
              </div>
              <p className="text-[15px] text-gray-600 font-light leading-relaxed mb-5">
                Deterministic, dependency-aware job execution with full lineage tracking. Every transformation is governed and auditable.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {["Lineage", "Orchestration", "Retry Logic"].map((f) => (
                  <div key={f} className="p-3 rounded-xl bg-black/[0.03] border border-black/[0.06] text-center">
                    <div className="text-[10px] text-gray-600 font-light">{f}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flow-connector r-up">
          <div className="flow-connector-line" style={{ background: "linear-gradient(180deg,#06b6d4 0%,#10b981 100%)" }} />
          <div className="flow-connector-dot" />
          <div className="flow-connector-line" />
        </div>

        {/* Tier 4 — Governance */}
        <div className="flow-stage r-up relative" style={{ borderColor: "rgba(16,185,129,0.15)" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.03] to-cyan-500/[0.03] rounded-[20px]" />
          <div className="relative flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flow-stage-header bg-gradient-to-r from-emerald-500/[0.1] to-cyan-500/[0.08]">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-emerald-600 font-medium tracking-wide">GOVERNANCE LAYER</span>
              </div>
              <p className="text-[15px] text-gray-600 font-light leading-relaxed mb-5">
                Policy-controlled access, role-based permissions, and complete audit trails.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Access Control", "Policy Engine", "Audit Logs", "Encryption"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/[0.12]">
                    <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-[11px] text-gray-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-48 flex-shrink-0 space-y-2">
              {[
                { name: "analytics_agent", access: "READ",   allowed: true },
                { name: "reporting_svc",   access: "READ",   allowed: true },
                { name: "external_api",    access: "DENIED", allowed: false },
              ].map((row) => (
                <div key={row.name} className={`flex items-center justify-between p-3 rounded-xl ${row.allowed ? "bg-emerald-500/[0.06] border border-emerald-500/[0.15]" : "bg-red-500/[0.05] border border-red-500/[0.15]"}`}>
                  <span className="text-[11px] text-gray-600 font-light">{row.name}</span>
                  <span className={`text-[9px] font-mono font-bold ${row.allowed ? "text-emerald-600" : "text-red-600"}`}>{row.access}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FlowConnector />

        {/* Tier 5 — Consumers */}
        <div className="flow-stage r-up">
          <div className="flow-stage-header bg-black/[0.04]">
            <div className="w-6 h-6 rounded-full bg-black/[0.06] flex items-center justify-center">
              <ArrowDown className="w-3 h-3 text-gray-500" />
            </div>
            <span className="text-[11px] text-gray-500 font-light tracking-wider uppercase">Governed Data Consumers</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/[0.15]">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" /></svg>
              </div>
              <div>
                <div className="text-sm text-emerald-600 font-light">Mentis AgentOS</div>
                <div className="text-[11px] text-gray-500 font-light">Governed intelligence execution</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-cyan-500/[0.06] border border-cyan-500/[0.15]">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-cyan-600 font-light">Intelligence Systems</div>
                <div className="text-[11px] text-gray-500 font-light">Analytics & decision engines</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
