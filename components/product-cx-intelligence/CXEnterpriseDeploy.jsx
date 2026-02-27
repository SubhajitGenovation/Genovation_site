"use client";

import { useState } from "react";
import { Server, Building, Cloud, Lock, Cpu, Database, ShieldCheck, ArrowDownUp, Users, FileText, Headphones, Network, Key, Eye, Link, WifiOff, HardDrive, Usb } from "lucide-react";

const TABS = [
  { id: "onprem",  Icon: Building, title: "On-Premise",    sub: "Your data center",   iconBg: "rgba(245,158,11,0.1)" },
  { id: "vpc",     Icon: Cloud,    title: "Private Cloud",  sub: "Isolated VPC",       iconBg: "rgba(59,130,246,0.1)" },
  { id: "airgap",  Icon: Lock,     title: "Air-Gapped",     sub: "Network isolation",  iconBg: "rgba(139,92,246,0.1)" },
];

function MockWin({ title, badge, children }) {
  return (
    <div className="industry-mock" style={{ maxWidth: 900, margin: "0 auto" }}>
      <div className="mock-header">
        <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
        <span className="text-[9px] text-gray-500 font-mono ml-2">{title}</span>
        <div className="ml-auto flex items-center gap-2">{badge}</div>
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
}

function OnPrem() {
  return (
    <MockWin
      title="ON-PREMISE ARCHITECTURE"
      badge={<><div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /><span className="text-[8px] text-amber-600 font-mono">YOUR NETWORK</span></>}
    >
      <div className="rounded-2xl p-6 relative" style={{ border: "2px dashed rgba(245,158,11,0.3)" }}>
        <div className="absolute px-3 py-0.5 bg-white text-[9px] font-mono text-amber-600 tracking-widest uppercase rounded"
          style={{ top: -12, left: 24 }}>Corporate Network Perimeter</div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { Icon: Cpu,        title: "Mentis AgentOS",   sub: "GPU Cluster / Bare Metal" },
            { Icon: Database,   title: "Knowledge Store",  sub: "Vector DB + Document Index" },
            { Icon: ShieldCheck,title: "JUDGE Layer",      sub: "Governance + Audit Trail" },
          ].map(({ Icon, title, sub }) => (
            <div key={title} className="text-center p-5 rounded-xl" style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.1)" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(245,158,11,0.12)" }}>
                <Icon className="w-5 h-5 text-amber-600" />
              </div>
              <div className="text-[12px] font-medium text-gray-800">{title}</div>
              <div className="text-[10px] text-gray-400 font-light mt-1">{sub}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right,transparent,rgba(245,158,11,0.4),transparent)" }} />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.1)" }}>
            <ArrowDownUp className="w-3 h-3 text-amber-500" />
            <span className="text-[9px] font-mono text-amber-600 tracking-wider">INTERNAL APIs + SSO</span>
          </div>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right,transparent,rgba(245,158,11,0.4),transparent)" }} />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[{ Icon: Users, label: "CRM" }, { Icon: FileText, label: "ERP" }, { Icon: Headphones, label: "Contact Center" }, { Icon: Database, label: "Data Lake" }].map(({ Icon, label }) => (
            <div key={label} className="text-center p-3 rounded-lg" style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.04)" }}>
              <Icon className="w-4 h-4 text-gray-400 mx-auto mb-1.5" />
              <div className="text-[9px] text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-5 px-2">
        {[{ color: "bg-amber-500", label: "Zero data egress" }, { color: "bg-emerald-500", label: "Full RBAC + SSO" }, { color: "bg-blue-500", label: "Your hardware, your keys" }].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${color}`} />
            <span className="text-[9px] text-gray-400 font-mono">{label}</span>
          </div>
        ))}
      </div>
    </MockWin>
  );
}

function VPCDeploy() {
  return (
    <MockWin
      title="PRIVATE CLOUD (VPC) ARCHITECTURE"
      badge={<><div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /><span className="text-[8px] text-blue-600 font-mono">ISOLATED</span></>}
    >
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="rounded-2xl p-5 relative" style={{ border: "2px dashed rgba(59,130,246,0.3)" }}>
          <div className="absolute px-3 py-0.5 bg-white text-[9px] font-mono text-blue-600 tracking-widest uppercase rounded"
            style={{ top: -12, left: 20 }}>Your VPC</div>
          <div className="space-y-3">
            <div className="p-4 rounded-xl text-center" style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.1)" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-2" style={{ background: "rgba(59,130,246,0.12)" }}>
                <Cpu className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-[11px] font-medium text-gray-800">Mentis AgentOS</div>
              <div className="text-[9px] text-gray-400 font-light mt-0.5">Dedicated GPU instances</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[{ Icon: Database, label: "Knowledge DB" }, { Icon: ShieldCheck, label: "JUDGE Layer" }].map(({ Icon, label }) => (
                <div key={label} className="p-3 rounded-lg text-center" style={{ background: "rgba(59,130,246,0.03)", border: "1px solid rgba(59,130,246,0.08)" }}>
                  <Icon className="w-3.5 h-3.5 text-blue-500 mx-auto mb-1" />
                  <div className="text-[9px] text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl p-5" style={{ background: "rgba(59,130,246,0.02)", border: "1px solid rgba(59,130,246,0.15)" }}>
            <div className="text-[10px] font-mono text-blue-600 tracking-wider uppercase mb-4">Isolation Controls</div>
            <div className="space-y-2.5">
              {[
                { Icon: Network,    title: "Private Subnet",  sub: "No public IP allocation" },
                { Icon: Key,        title: "CMK Encryption",  sub: "Customer-managed keys" },
                { Icon: Eye,        title: "VPC Flow Logs",   sub: "Full network visibility" },
              ].map(({ Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)" }}>
                    <Icon className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-700">{title}</div>
                    <div className="text-[9px] text-gray-400">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.1)" }}>
            <Link className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[10px] text-emerald-600 font-mono">VPC Peering to your infra</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2">
        {[{ color: "bg-blue-500", label: "Single-tenant isolation" }, { color: "bg-emerald-500", label: "Scales with demand" }, { color: "bg-violet-500", label: "AWS / Azure / GCP" }].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${color}`} />
            <span className="text-[9px] text-gray-400 font-mono">{label}</span>
          </div>
        ))}
      </div>
    </MockWin>
  );
}

function AirGap() {
  return (
    <MockWin
      title="AIR-GAPPED ARCHITECTURE"
      badge={<><div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" /><span className="text-[8px] text-violet-600 font-mono">CLASSIFIED</span></>}
    >
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right,transparent,rgba(248,113,113,0.5))" }} />
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
          <WifiOff className="w-3 h-3 text-red-400" />
          <span className="text-[9px] font-mono text-red-500 tracking-wider">NO EXTERNAL CONNECTIVITY</span>
        </div>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to left,transparent,rgba(248,113,113,0.5))" }} />
      </div>
      <div className="rounded-2xl p-6 relative mb-5" style={{ border: "2px dashed rgba(139,92,246,0.3)" }}>
        <div className="absolute px-3 py-0.5 bg-white text-[9px] font-mono text-violet-600 tracking-widest uppercase rounded"
          style={{ top: -12, left: 24 }}>Secure Enclave — SCIF / Classified</div>
        <div className="grid grid-cols-3 gap-4 mb-5">
          {[
            { Icon: Cpu,        title: "Mentis AgentOS",     sub: "Offline-packaged models" },
            { Icon: HardDrive,  title: "Local Artifact Store",sub: "All assets pre-loaded" },
            { Icon: ShieldCheck,title: "JUDGE Layer",         sub: "Audit + immutable logs" },
          ].map(({ Icon, title, sub }) => (
            <div key={title} className="p-4 rounded-xl text-center" style={{ background: "rgba(139,92,246,0.04)", border: "1px solid rgba(139,92,246,0.1)" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-2" style={{ background: "rgba(139,92,246,0.12)" }}>
                <Icon className="w-4 h-4 text-violet-600" />
              </div>
              <div className="text-[11px] font-medium text-gray-800">{title}</div>
              <div className="text-[9px] text-gray-400 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "rgba(139,92,246,0.03)", border: "1px solid rgba(139,92,246,0.08)" }}>
          <Usb className="w-4 h-4 text-violet-500" />
          <div>
            <div className="text-[11px] font-medium text-gray-700">Sneakernet Updates</div>
            <div className="text-[9px] text-gray-400">Model updates via signed, encrypted media transfer — verified before deployment</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2">
        {[{ color: "bg-violet-500", label: "ITAR / IL5+ compliant" }, { color: "bg-red-400", label: "Zero network surface" }, { color: "bg-emerald-500", label: "Tamper-evident logging" }].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${color}`} />
            <span className="text-[9px] text-gray-400 font-mono">{label}</span>
          </div>
        ))}
      </div>
    </MockWin>
  );
}

const DIAGRAMS = { onprem: OnPrem, vpc: VPCDeploy, airgap: AirGap };

export default function CXEnterpriseDeploy() {
  const [active, setActive] = useState("onprem");
  const Diagram = DIAGRAMS[active];

  return (
    <section className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 600, height: 500, background: "rgba(16,185,129,0.05)", top: "5%", right: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8 r-up"
            style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.15)" }}>
            <Server className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Enterprise Deployment</span>
          </div>
          <h2 className="display-section mb-8 r-up" style={{ fontSize: "clamp(2.5rem,7vw,7rem)" }}>
            Your Infrastructure.<br />
            <span style={{ background: "linear-gradient(135deg,#059669,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Your Rules.
            </span>
          </h2>
          <p className="text-lg text-gray-500 font-light mb-12 leading-relaxed r-up max-w-2xl mx-auto">
            Deploy within your security perimeter with complete control over data, models, and infrastructure.
          </p>
        </div>

        <div className="r-up">
          {/* Tab switcher */}
          <div className="flex items-center justify-center gap-3 mb-12">
            {TABS.map(({ id, Icon, title, sub, iconBg }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className="deploy-tab"
                style={active === id ? { borderColor: "rgba(0,0,0,0.15)", background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" } : {}}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: iconBg }}>
                  <Icon className="w-5 h-5" style={{ color: id === "onprem" ? "#d97706" : id === "vpc" ? "#2563eb" : "#7c3aed" }} />
                </div>
                <div className="text-left">
                  <div className="text-[14px] font-normal text-gray-800">{title}</div>
                  <div className="text-[11px] text-gray-400 font-light">{sub}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Diagram */}
          <div style={{ minHeight: 480 }}>
            <Diagram />
          </div>
        </div>
      </div>
    </section>
  );
}
