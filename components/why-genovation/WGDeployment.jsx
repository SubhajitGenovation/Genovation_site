"use client";
import {
  Globe,
  Cloud,
  Server,
  ShieldOff,
  Check,
  Brain,
  Database,
  Shield,
  Building2,
  Box,
  HardDrive,
  Cpu,
  Key,
  WifiOff,
} from "lucide-react";

/* ─── shared accent-bar top strip ─── */
function AccentBar({ gradient }) {
  return (
    <div
      style={{
        height: "3px",
        borderRadius: "16px 16px 0 0",
        background: gradient,
        margin: "-1px -1px 0 -1px", // flush with card border
      }}
    />
  );
}

/* ─── chrome mock window wrapper ─── */
function MockWindow({ children }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden mb-8"
      style={{
        background: "rgba(248,247,245,0.7)",
        border: "1px solid rgba(0,0,0,0.06)",
        minHeight: "176px",
      }}
    >
      {children}
    </div>
  );
}

/* ─── pipe connector ─── */
function Pipe() {
  return (
    <div
      style={{
        width: 2,
        height: 20,
        background:
          "linear-gradient(to bottom, rgba(16,185,129,0.3), rgba(6,182,212,0.3))",
        margin: "0 auto",
        borderRadius: 4,
      }}
    />
  );
}

export default function WGDeployment() {
  return (
    <section id="deployment" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div
        className="orb w-[600px] h-[500px] bg-blue-500/[0.04]"
        style={{ top: "5%", right: "10%" }}
      />
      <div
        className="orb w-[400px] h-[300px] bg-emerald-500/[0.05]"
        style={{ bottom: "10%", left: "20%" }}
      />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* ── Heading ─────────────────────────────────────── */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/[0.1] border border-blue-500/[0.15] mb-8 r-up">
            <Globe className="w-3 h-3 text-blue-500" />
            <span className="text-blue-500 text-[11px] font-light tracking-[0.25em] uppercase">
              Deployment Options
            </span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Deploy <span className="text-gradient">Your Way</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto r-up">
            Same platform. Same capabilities. Your infrastructure choice.
          </p>
        </div>

        {/* ── Three Cards ──────────────────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20" id="deployCards">

          {/* ── Card 1: Cloud Managed ── */}
          <div
            className="card overflow-hidden r-up"
            style={{ padding: 0 }}
          >
            <AccentBar gradient="linear-gradient(90deg, #60a5fa, #a78bfa)" />
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/[0.1] flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-normal text-gray-800">
                    Cloud Managed
                  </h3>
                  <span className="text-[11px] text-gray-400 font-mono tracking-wider">
                    FASTEST_DEPLOY
                  </span>
                </div>
              </div>

              {/* Mock diagram */}
              <MockWindow>
                <div className="flex flex-col items-center justify-center gap-3 py-6 px-4">
                  {/* Genovation Cloud node */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-black/[0.06] shadow-sm">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/[0.1] flex items-center justify-center border border-blue-500/[0.12]">
                      <Cloud className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">
                      Genovation Cloud
                    </span>
                  </div>
                  <Pipe />
                  {/* Services row */}
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/[0.1] border border-violet-500/[0.12] flex items-center justify-center">
                      <Brain className="w-3.5 h-3.5 text-violet-500" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/[0.1] border border-cyan-500/[0.12] flex items-center justify-center">
                      <Database className="w-3.5 h-3.5 text-cyan-500" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.1] border border-emerald-500/[0.12] flex items-center justify-center">
                      <Shield className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                  </div>
                  <Pipe />
                  {/* Your Org node */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-black/[0.06] shadow-sm">
                    <div className="w-7 h-7 rounded-lg bg-gray-500/[0.08] border border-black/[0.06] flex items-center justify-center">
                      <Building2 className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">
                      Your Org
                    </span>
                  </div>
                </div>
              </MockWindow>

              {/* Checklist */}
              <div className="space-y-3 mb-6">
                {[
                  "Fully managed infrastructure",
                  "Auto-scaling & updates",
                  "Privacy-first by default",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-3 text-[14px] text-gray-500 font-light"
                  >
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>

              {/* Setup time */}
              <div className="flex items-center justify-between text-xs pt-4 border-t border-black/[0.05]">
                <span className="text-gray-400 font-light">Setup time</span>
                <span className="font-mono text-blue-500">~2 hours</span>
              </div>
            </div>
          </div>

          {/* ── Card 2: On-Premise ── */}
          <div
            className="card overflow-hidden r-up"
            style={{ padding: 0, transitionDelay: "0.1s" }}
          >
            <AccentBar gradient="linear-gradient(90deg, #34d399, #22d3ee)" />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/[0.1] flex items-center justify-center">
                  <Server className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-lg font-normal text-gray-800">
                    On-Premise
                  </h3>
                  <span className="text-[11px] text-gray-400 font-mono tracking-wider">
                    FULL_CONTROL
                  </span>
                </div>
              </div>

              <MockWindow>
                <div className="flex flex-col items-center justify-center gap-3 py-6 px-4">
                  {/* Datacenter label */}
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-500/[0.1] border border-emerald-500/[0.15] text-xs font-mono text-emerald-600">
                    YOUR_DATACENTER
                  </div>
                  <div
                    style={{
                      width: 2,
                      height: 12,
                      background: "rgba(16,185,129,0.2)",
                      borderRadius: 4,
                    }}
                  />
                  {/* Runtime box */}
                  <div className="p-4 rounded-xl border-2 border-dashed border-emerald-500/20 bg-emerald-500/[0.03]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded bg-emerald-500/[0.1] flex items-center justify-center">
                        <Box className="w-3 h-3 text-emerald-500" />
                      </div>
                      <span className="text-xs font-mono text-emerald-600">
                        Runtime
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-6 h-6 rounded bg-violet-500/[0.1] flex items-center justify-center">
                        <Brain className="w-3 h-3 text-violet-500" />
                      </div>
                      <div className="w-6 h-6 rounded bg-cyan-500/[0.1] flex items-center justify-center">
                        <Database className="w-3 h-3 text-cyan-500" />
                      </div>
                      <div className="w-6 h-6 rounded bg-blue-500/[0.1] flex items-center justify-center">
                        <Shield className="w-3 h-3 text-blue-500" />
                      </div>
                    </div>
                  </div>
                  {/* Storage / Compute */}
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <HardDrive className="w-3 h-3" />
                      Storage
                    </span>
                    <span className="flex items-center gap-1">
                      <Cpu className="w-3 h-3" />
                      Compute
                    </span>
                  </div>
                </div>
              </MockWindow>

              <div className="space-y-3 mb-6">
                {[
                  "Data never leaves network",
                  "Kubernetes or bare metal",
                  "Compliance-ready architecture",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-3 text-[14px] text-gray-500 font-light"
                  >
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs pt-4 border-t border-black/[0.05]">
                <span className="text-gray-400 font-light">Setup time</span>
                <span className="font-mono text-emerald-500">~2-4 weeks</span>
              </div>
            </div>
          </div>

          {/* ── Card 3: Air-Gapped ── */}
          <div
            className="card overflow-hidden r-up"
            style={{ padding: 0, transitionDelay: "0.2s" }}
          >
            <AccentBar gradient="linear-gradient(90deg, #fbbf24, #f87171)" />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/[0.1] flex items-center justify-center">
                  <ShieldOff className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-normal text-gray-800">
                    Air-Gapped
                  </h3>
                  <span className="text-[11px] text-gray-400 font-mono tracking-wider">
                    ZERO_EXTERNAL
                  </span>
                </div>
              </div>

              <MockWindow>
                <div className="relative flex flex-col items-center justify-center gap-3 py-6 px-4">
                  {/* NO_NET badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-red-500/[0.08] border border-red-500/[0.15]">
                    <WifiOff className="w-2.5 h-2.5 text-red-500" />
                    <span className="text-[9px] font-mono text-red-500">
                      NO_NET
                    </span>
                  </div>

                  {/* Secure enclave box */}
                  <div className="p-4 rounded-xl border-2 border-amber-500/25 bg-amber-500/[0.03] relative mt-2">
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-amber-500/[0.1] text-[10px] font-mono text-amber-600 whitespace-nowrap">
                      SECURE_ENCLAVE
                    </div>
                    <div className="flex flex-col items-center gap-2 mt-2">
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded bg-violet-500/[0.1] border border-violet-500/[0.15] flex items-center justify-center">
                          <Brain className="w-3.5 h-3.5 text-violet-500" />
                        </div>
                        <div className="w-8 h-8 rounded bg-cyan-500/[0.1] border border-cyan-500/[0.15] flex items-center justify-center">
                          <Database className="w-3.5 h-3.5 text-cyan-500" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded bg-emerald-500/[0.1] border border-emerald-500/[0.15] flex items-center justify-center">
                          <Shield className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        <div className="w-8 h-8 rounded bg-blue-500/[0.1] border border-blue-500/[0.15] flex items-center justify-center">
                          <Key className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs text-gray-400 font-mono">
                    Offline updates only
                  </span>
                </div>
              </MockWindow>

              <div className="space-y-3 mb-6">
                {[
                  "Zero network connectivity",
                  "Maximum security posture",
                  "Manual update packages",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-3 text-[14px] text-gray-500 font-light"
                  >
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs pt-4 border-t border-black/[0.05]">
                <span className="text-gray-400 font-light">Setup time</span>
                <span className="font-mono text-amber-500">~4-8 weeks</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Comparison Table ─────────────────────────────── */}
        <div className="max-w-4xl mx-auto r-up">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 20px 60px -20px rgba(0,0,0,0.06)",
            }}
          >
            {/* Chrome bar */}
            <div
              style={{
                background: "rgba(248,247,245,0.6)",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#fb5c4c",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#fbbd2e",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#28c840",
                }}
              />
              <span
                style={{
                  marginLeft: 8,
                  fontSize: 12,
                  fontFamily: "'Space Mono',monospace",
                  color: "rgba(0,0,0,0.4)",
                  fontWeight: 300,
                }}
              >
                deployment_comparison.view
              </span>
            </div>

            <div className="p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/[0.05]">
                    <th className="text-left pb-3 text-gray-400 font-light text-xs">
                      Feature
                    </th>
                    <th className="pb-3 text-blue-500 font-light text-center text-xs font-mono">
                      Cloud
                    </th>
                    <th className="pb-3 text-emerald-500 font-light text-center text-xs font-mono">
                      On-Prem
                    </th>
                    <th className="pb-3 text-amber-500 font-light text-center text-xs font-mono">
                      Air-Gap
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Data Residency",
                      cloud: { label: "Regional", bg: "rgba(59,130,246,0.08)", color: "#3b82f6" },
                      onprem: { label: "On-Site", bg: "rgba(16,185,129,0.08)", color: "#10b981" },
                      airgap: { label: "Isolated", bg: "rgba(245,158,11,0.08)", color: "#f59e0b" },
                    },
                    {
                      feature: "Network Required",
                      cloud: { check: true, color: "#3b82f6" },
                      onprem: { check: true, color: "#10b981" },
                      airgap: { cross: true, color: "#f59e0b" },
                    },
                    {
                      feature: "Compliance Path",
                      cloud: { label: "Standard", color: "#3b82f6" },
                      onprem: { label: "Regulated", color: "#10b981" },
                      airgap: { label: "Classified", color: "#f59e0b" },
                    },
                    {
                      feature: "GPU Support",
                      cloud: { label: "A100/H100", color: "#3b82f6" },
                      onprem: { label: "Any CUDA", color: "#10b981" },
                      airgap: { label: "Any CUDA", color: "#f59e0b" },
                    },
                  ].map(({ feature, cloud, onprem, airgap }, i) => (
                    <tr
                      key={feature}
                      className={
                        i < 3 ? "border-b border-black/[0.04]" : ""
                      }
                    >
                      <td className="py-3 text-gray-500 font-light text-[14px]">
                        {feature}
                      </td>
                      {[cloud, onprem, airgap].map((cell, ci) => (
                        <td key={ci} className="py-3 text-center">
                          {cell.label && cell.bg ? (
                            <span
                              className="px-3 py-1 rounded-lg text-xs font-mono"
                              style={{
                                background: cell.bg,
                                color: cell.color,
                              }}
                            >
                              {cell.label}
                            </span>
                          ) : cell.label ? (
                            <span
                              className="text-xs font-mono"
                              style={{ color: cell.color }}
                            >
                              {cell.label}
                            </span>
                          ) : cell.check ? (
                            <Check
                              className="w-4 h-4 inline"
                              style={{ color: cell.color }}
                            />
                          ) : (
                            <svg
                              className="w-4 h-4 inline"
                              style={{ color: cell.color }}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
