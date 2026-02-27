"use client";

import { SlidersHorizontal, Wand2, Rocket, KeyRound, CloudCog, Server, Cloud, WifiOff, Check, Cpu } from "lucide-react";

const featureCards = [
  {
    icon: <Wand2 className="w-5 h-5 text-cyan-600" />, bg: "bg-cyan-500/[0.08]",
    title: "Fine-Tuning Studio", color: "card-cyan",
    desc: "Upload datasets, configure training parameters, and fine-tune SLMs for your specific enterprise tasks.",
    checkColor: "text-cyan-600",
    checks: ["LoRA & Full Fine-Tuning", "Custom Dataset Upload", "Training Job Monitoring"],
  },
  {
    icon: <Rocket className="w-5 h-5 text-amber-600" />, bg: "bg-amber-500/[0.08]",
    title: "Inference API", color: "card-amber",
    desc: "OpenAI-compatible API endpoints for seamless integration with your existing applications.",
    checkColor: "text-amber-600",
    checks: ["OpenAI-Compatible", "Streaming Responses", "Batch Processing"],
  },
  {
    icon: <KeyRound className="w-5 h-5 text-violet-600" />, bg: "bg-violet-500/[0.08]",
    title: "Key Management", color: "card-violet",
    desc: "Secure API key generation with granular permissions, rate limits, and usage tracking.",
    checkColor: "text-violet-600",
    checks: ["Role-Based Access", "Per-Key Rate Limits", "Usage Analytics"],
  },
  {
    icon: <CloudCog className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-500/[0.08]",
    title: "Flexible Deployment", color: "card-emerald",
    desc: "Deploy anywhere — on-premise, private cloud, or fully air-gapped environments.",
    checkColor: "text-emerald-600",
    checks: ["On-Premise Support", "Private Cloud / VPC", "Air-Gapped Environments"],
  },
];

const deployOptions = [
  {
    icon: <Server className="w-7 h-7 text-emerald-600" />,
    bg: "bg-emerald-500/[0.08]", border: "border-emerald-500/[0.2]",
    title: "On-Premise",
    desc: "Full control over infrastructure, networking, and security policies.",
    tags: ["Bare Metal", "VMware", "Kubernetes"],
    tagBg: "bg-emerald-500/[0.06]", tagText: "text-emerald-600", tagBorder: "border-emerald-500/[0.15]",
  },
  {
    icon: <Cloud className="w-7 h-7 text-cyan-600" />,
    bg: "bg-cyan-500/[0.08]", border: "border-cyan-500/[0.2]",
    title: "Private Cloud",
    desc: "Deploy in your VPC on AWS, Azure, or GCP. Managed scaling with data sovereignty.",
    tags: ["AWS VPC", "Azure VNet", "GCP VPC"],
    tagBg: "bg-cyan-500/[0.06]", tagText: "text-cyan-600", tagBorder: "border-cyan-500/[0.15]",
  },
  {
    icon: <WifiOff className="w-7 h-7 text-violet-600" />,
    bg: "bg-violet-500/[0.08]", border: "border-violet-500/[0.2]",
    title: "Air-Gapped",
    desc: "Fully isolated environments with no network connectivity. Perfect for classified workloads.",
    tags: ["No Internet", "Offline Updates", "SCIF Ready"],
    tagBg: "bg-violet-500/[0.06]", tagText: "text-violet-600", tagBorder: "border-violet-500/[0.15]",
  },
];

const modelCards = [
  { name: "Test_Model", id: "model-97b923af", status: "Active", statusBg: "bg-emerald-500/[0.1]", statusText: "text-emerald-600", cardBg: "bg-cyan-500/[0.03]", cardBorder: "border-cyan-500/[0.12]" },
  { name: "Lama", id: "model-abaf85f7", status: "Error", statusBg: "bg-rose-500/[0.1]", statusText: "text-rose-600", cardBg: "bg-black/[0.02]", cardBorder: "border-black/[0.06]" },
  { name: "LLAMA_3", id: "model-08bb83fe", status: "Error", statusBg: "bg-rose-500/[0.1]", statusText: "text-rose-600", cardBg: "bg-black/[0.02]", cardBorder: "border-black/[0.06]" },
];

export default function SlmPlatform() {
  return (
    <section className="py-48 relative" id="platform">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.06]" style={{ top: "15%", right: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.2] mb-8 r-up">
            <SlidersHorizontal className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Model Operations</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Mentis<br /><span className="text-gradient">Model Management</span>
          </h2>
          <p className="text-[15px] text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Complete model lifecycle management — from training to deployment to inference. Manage, deploy, and monitor your ML models anywhere.
          </p>
        </div>

        {/* Platform Mock */}
        <div className="r-scale mb-16">
          <div className="industry-mock" style={{ boxShadow: "0 30px 80px -20px rgba(6,182,212,0.1)" }}>
            <div className="mock-header">
              <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
              <span className="text-[9px] text-gray-500 font-mono ml-2">MENTIS MODEL MANAGEMENT</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] text-emerald-600 font-mono">LIVE</span>
              </div>
            </div>
            <div className="p-6">
              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Total Models",    value: "3",     color: "emerald" },
                  { label: "Active Models",   value: "1",     color: "cyan" },
                  { label: "Predictions Today", value: "0",  color: "violet" },
                  { label: "Avg Accuracy",    value: "94.2%", color: "amber" },
                ].map((s, i) => (
                  <div key={i} className={`p-4 rounded-xl bg-${s.color}-500/[0.05] border border-${s.color}-500/[0.12]`}>
                    <div className="text-[9px] text-gray-500 font-light mb-1">{s.label}</div>
                    <div className={`text-2xl font-light text-${s.color}-600`}>{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Search */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-black/[0.03] border border-black/[0.06] mb-5">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <span className="text-[11px] text-gray-400 font-light">Search models...</span>
                <div className="ml-auto flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-black/[0.04] border border-black/[0.06] text-[10px] text-gray-500 font-light">All Types</span>
                  <span className="px-3 py-1 rounded-lg bg-black/[0.04] border border-black/[0.06] text-[10px] text-gray-500 font-light">All Status</span>
                </div>
              </div>

              <div className="text-[11px] text-gray-500 font-light mb-3">All models</div>

              {/* Model Cards */}
              <div className="grid grid-cols-3 gap-3">
                {modelCards.map((m, i) => (
                  <div key={i} className={`p-4 rounded-xl ${m.cardBg} border ${m.cardBorder}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/[0.12] flex items-center justify-center">
                        <Cpu className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-700 font-light">{m.name}</div>
                        <div className="text-[8px] text-gray-400 font-mono">{m.id}</div>
                      </div>
                      <span className={`ml-auto px-2 py-0.5 rounded-full ${m.statusBg} text-[8px] ${m.statusText}`}>{m.status}</span>
                    </div>
                    <div className="space-y-1.5 text-[9px]">
                      {[["Type","TRANSFORMERS"],["Category","LANGUAGE"],["Visibility","Private"]].map(([k,v],j) => (
                        <div key={j} className="flex justify-between">
                          <span className="text-gray-400">{k}</span>
                          <span className="text-gray-600 font-mono">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {featureCards.map((f, i) => (
            <div key={i} className={`card ${f.color} p-7 r-up`}>
              <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>{f.icon}</div>
              <h4 className="text-[15px] font-light text-gray-800 mb-2">{f.title}</h4>
              <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-3">{f.desc}</p>
              <div className="space-y-1.5">
                {f.checks.map((c, j) => (
                  <div key={j} className="flex items-center gap-2 text-[11px] text-gray-500 font-light">
                    <Check className={`w-3 h-3 ${f.checkColor}`} />{c}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Deployment Options */}
        <div className="p-10 rounded-2xl bg-[#edeae6] border border-black/[0.06] r-up">
          <h3 className="text-[15px] font-light text-gray-600 text-center mb-8 tracking-wider">Deployment Flexibility</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {deployOptions.map((d, i) => (
              <div key={i} className="text-center">
                <div className={`w-14 h-14 rounded-2xl ${d.bg} flex items-center justify-center mx-auto mb-4 border ${d.border}`}>{d.icon}</div>
                <h4 className="text-[15px] font-light text-gray-800 mb-2">{d.title}</h4>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-3">{d.desc}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {d.tags.map((tag, j) => (
                    <span key={j} className={`px-2.5 py-1 rounded-full ${d.tagBg} text-[10px] ${d.tagText} border ${d.tagBorder}`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
