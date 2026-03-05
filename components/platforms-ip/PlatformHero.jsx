"use client";

import { useState } from "react";
import { Layers, ChevronRight, Package, Cpu, ShieldCheck, Database, Lock, Bot, BarChart3, Workflow, GitBranch, Eye, FileSearch, Scale, UserCheck, ScrollText, ArrowRightLeft, Combine, Vault, Atom, Key } from "lucide-react";

const layers = [
  {
    id: "products", num: 5,
    color: "emerald", border: "border-emerald-500/[0.2] hover:border-emerald-500/[0.4]",
    bg: "bg-emerald-500/[0.06]", iconBg: "bg-emerald-500/[0.15]", numColor: "text-emerald-600/70",
    icon: <Package className="w-4 h-4 text-emerald-600" />, label: "Products & Applications",
    chevron: "text-emerald-500/40",
  },
  {
    id: "mentis", num: 4,
    color: "cyan", border: "border-cyan-500/[0.2] hover:border-cyan-500/[0.4]",
    bg: "bg-cyan-500/[0.06]", iconBg: "bg-cyan-500/[0.15]", numColor: "text-cyan-600/70",
    icon: <Cpu className="w-4 h-4 text-cyan-600" />, label: "Mentis OS",
    chevron: "text-cyan-500/40",
  },
  {
    id: "governance", num: 3,
    color: "violet", border: "border-violet-500/[0.2] hover:border-violet-500/[0.4]",
    bg: "bg-violet-500/[0.06]", iconBg: "bg-violet-500/[0.15]", numColor: "text-violet-600/70",
    icon: <ShieldCheck className="w-4 h-4 text-violet-600" />, label: "Governance & Policy Engine",
    chevron: "text-violet-500/40",
  },
  {
    id: "data", num: 2,
    color: "amber", border: "border-amber-500/[0.2] hover:border-amber-500/[0.4]",
    bg: "bg-amber-500/[0.06]", iconBg: "bg-amber-500/[0.15]", numColor: "text-amber-600/70",
    icon: <Database className="w-4 h-4 text-amber-600" />, label: "Data & Intelligence Backbone",
    chevron: "text-amber-500/40",
  },
  {
    id: "cipher", num: 1,
    color: "rose", border: "border-rose-500/[0.2] hover:border-rose-500/[0.4]",
    bg: "bg-rose-500/[0.06]", iconBg: "bg-rose-500/[0.15]", numColor: "text-rose-600/70",
    icon: <Lock className="w-4 h-4 text-rose-600" />, label: "CipherVault & Security",
    chevron: "text-rose-500/40",
  },
];

const details = {
  products: {
    iconBg: "bg-emerald-500/[0.15]", icon: <Package className="w-5 h-5 text-emerald-600" />,
    title: "Products & Applications", tag: "USER_FACING_LAYER", tagColor: "text-emerald-600",
    body: "The visible layer where enterprise users interact with Genovation intelligence. All complexity is abstracted away, but every action is governed by the layers below.",
    itemBg: "bg-emerald-500/[0.05] border-emerald-500/[0.1]",
    items: [
      { icon: <Bot className="w-4 h-4 text-emerald-600" />, label: "Agentic Intelligence Products" },
      { icon: <BarChart3 className="w-4 h-4 text-emerald-600" />, label: "Decision Analytics Dashboards" },
      { icon: <Workflow className="w-4 h-4 text-emerald-600" />, label: "Process Automation Workflows" },
    ],
  },
  mentis: {
    iconBg: "bg-cyan-500/[0.15]", icon: <Cpu className="w-5 h-5 text-cyan-600" />,
    title: "Mentis OS", tag: "AGENTIC_OPERATING_SYSTEM", tagColor: "text-cyan-600",
    body: "The enterprise agentic operating system that orchestrates all intelligence operations. Every agent, every decision, every action flows through Mentis OS.",
    itemBg: "bg-cyan-500/[0.05] border-cyan-500/[0.1]",
    items: [
      { icon: <GitBranch className="w-4 h-4 text-cyan-600" />, label: "Multi-Agent Orchestration" },
      { icon: <Eye className="w-4 h-4 text-cyan-600" />, label: "Real-time Execution Monitoring" },
      { icon: <FileSearch className="w-4 h-4 text-cyan-600" />, label: "Complete Reasoning Traces" },
    ],
  },
  governance: {
    iconBg: "bg-violet-500/[0.15]", icon: <ShieldCheck className="w-5 h-5 text-violet-600" />,
    title: "Governance & Policy Engine", tag: "JUDGE_FRAMEWORK", tagColor: "text-violet-600",
    body: "The policy enforcement layer that validates every operation against enterprise rules, permissions, and compliance requirements before execution.",
    itemBg: "bg-violet-500/[0.05] border-violet-500/[0.1]",
    items: [
      { icon: <Scale className="w-4 h-4 text-violet-600" />, label: "Policy Evaluation Engine" },
      { icon: <UserCheck className="w-4 h-4 text-violet-600" />, label: "Human-in-the-Loop Controls" },
      { icon: <ScrollText className="w-4 h-4 text-violet-600" />, label: "Immutable Audit Logging" },
    ],
  },
  data: {
    iconBg: "bg-amber-500/[0.15]", icon: <Database className="w-5 h-5 text-amber-600" />,
    title: "Data & Intelligence Backbone", tag: "ENTERPRISE_DATA_LAYER", tagColor: "text-amber-600",
    body: "The data processing infrastructure that transforms raw enterprise data into intelligence-ready formats while maintaining sovereignty and security.",
    itemBg: "bg-amber-500/[0.05] border-amber-500/[0.1]",
    items: [
      { icon: <ArrowRightLeft className="w-4 h-4 text-amber-600" />, label: "Real-time & Batch Ingestion" },
      { icon: <Combine className="w-4 h-4 text-amber-600" />, label: "ETL & Transformation Pipelines" },
      { icon: <Layers className="w-4 h-4 text-amber-600" />, label: "Analytics-Ready Data Layers" },
    ],
  },
  cipher: {
    iconBg: "bg-rose-500/[0.15]", icon: <Lock className="w-5 h-5 text-rose-600" />,
    title: "CipherVault & Security", tag: "CRYPTOGRAPHIC_FOUNDATION", tagColor: "text-rose-600",
    body: "The cryptographic foundation enabling trustless analytics, post-quantum security, and secure agent communication across all layers.",
    itemBg: "bg-rose-500/[0.05] border-rose-500/[0.1]",
    items: [
      { icon: <Vault className="w-4 h-4 text-rose-600" />, label: "Homomorphic Encryption" },
      { icon: <Atom className="w-4 h-4 text-rose-600" />, label: "Post-Quantum Primitives" },
      { icon: <Key className="w-4 h-4 text-rose-600" />, label: "Hardware Security Integration" },
    ],
  },
};

export default function PlatformHero() {
  const [activeLayer, setActiveLayer] = useState("products");
  const detail = details[activeLayer];

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="hero">


      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[700px] h-[500px] bg-violet-500/[0.06]" style={{ top: "-10%", right: "10%" }} />
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.05]" style={{ bottom: "10%", left: "20%" }} />

      <div className="relative max-w-7xl mx-auto px-8 py-20 w-full">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* <div className="flex items-center justify-center gap-2 mb-2">
            <a href="#" className="text-[11px] text-gray-500 hover:text-gray-700 font-light tracking-wider transition-colors">Technology</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
          </div> */}
          {/* <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.08] border border-violet-500/[0.15] mb-8 r-up">
            <Layers className="w-3 h-3 text-violet-600" />
            <span className="text-violet-600 text-[11px] font-light tracking-[0.25em] uppercase">Platforms & Foundational IP</span>
          </div> */}
          <h1 className="display-hero text-5xl md:text-6xl lg:text-[5.5rem] mb-8 r-up">
            The Engineering<br />
            <span className="text-gradient">Foundations</span> Behind<br />
            Trusted Intelligence
          </h1>
          <p className="text-[17px] text-gray-500 font-light leading-relaxed max-w-2xl mx-auto mb-5 r-up">
            Genovation products are not assembled from generic AI components. They are built on foundational platforms engineered for{" "}
            <span className="text-gray-800 font-normal">regulated, high-consequence environments</span>.
          </p>
          <p className="text-[15px] text-gray-400 font-light mb-10 r-up">
            These foundations exist to solve one problem:
          </p>
          <div className="p-8 rounded-2xl bg-white/60 border border-emerald-500/[0.15] max-w-2xl mx-auto mb-12 r-up"
            style={{ boxShadow: "0 30px 80px -20px rgba(16,185,129,0.08)" }}>
            <p className="display-inter text-2xl md:text-[1.7rem] text-gray-800">
              How do you deploy intelligence that is{" "}
              <span className="text-gradient-emerald">sovereign</span>,{" "}
              <span className="text-gradient-cyan">explainable</span>, and{" "}
              <span className="text-gradient-violet">secure</span>—at enterprise scale?
            </p>
          </div>
        </div>

        {/* Interactive Stack */}
        <div className="max-w-5xl mx-auto r-up">
          <p className="text-center text-[12px] text-gray-400 font-light tracking-wider mb-6">CLICK ANY LAYER TO EXPLORE</p>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Stack */}
            <div className="card p-6 !rounded-2xl">
              <div className="space-y-2.5">
                {layers.map((layer) => (
                  <div
                    key={layer.id}
                    className={`arch-layer p-4 rounded-xl ${layer.bg} border ${layer.border} cursor-pointer transition-all duration-300`}
                    style={{ transform: activeLayer === layer.id ? "translateX(12px) scale(1.01)" : "" }}
                    onClick={() => setActiveLayer(layer.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg ${layer.iconBg} flex items-center justify-center`}>
                          {layer.icon}
                        </div>
                        <div>
                          <div className={`text-[10px] font-mono ${layer.numColor}`}>LAYER {layer.num}</div>
                          <h3 className="text-[14px] font-medium text-gray-800">{layer.label}</h3>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${layer.chevron}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detail Panel */}
            <div className="card p-8 !rounded-2xl min-h-[400px]">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl ${detail.iconBg} flex items-center justify-center`}>
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{detail.title}</h3>
                  <span className={`text-[10px] font-mono ${detail.tagColor}`}>{detail.tag}</span>
                </div>
              </div>
              <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-5">{detail.body}</p>
              <div className="space-y-2.5">
                {detail.items.map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${detail.itemBg} border`}>
                    {item.icon}
                    <span className="text-[13px] text-gray-600 font-light">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-[10px] tracking-[0.3em] font-light uppercase">Explore Foundations</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
      </div>
    </section>
  );
}
