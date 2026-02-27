"use client";
import { useState } from "react";
import { ChevronDown, BookOpen, BarChart3, Lightbulb, MessageCircle, Brain, Sparkles, Boxes, Lock, Atom, Radio, RadioTower, Box, Wifi, Factory, ShieldCheck, FileSearch } from "lucide-react";

const ACC_ITEMS = [
  {
    id: "mentis", dotColor: "var(--emerald)", title: "Mentis OS", badge: null,
    body: "The governed agentic operating system beneath everything. Orchestrates agents, enforces policies, provides real-time oversight, and ensures every decision is explainable and auditable. The control plane that makes autonomous AI safe for critical environments.",
    list: null,
  },
  {
    id: "agents", dotColor: "var(--blue)", title: "Agent SKUs", badge: "4 agents",
    body: "Purpose-built agents for specific enterprise functions:",
    list: [
      { key: "Knowledge", desc: "Document understanding, semantic search, knowledge graph construction" },
      { key: "Analytics", desc: "Pattern recognition, anomaly detection, trend forecasting" },
      { key: "Strategy",  desc: "Scenario modeling, risk assessment, decision support" },
      { key: "CX",        desc: "Customer interaction, sentiment analysis, intelligent routing" },
    ],
  },
  {
    id: "slms", dotColor: "var(--amber)", title: "Small Language Models", badge: "3 components",
    body: "Proprietary domain-specific models — not fine-tuned open source. Built from the ground up for accuracy, efficiency, and on-premise deployment.",
    list: [
      { key: "Core SLMs",     desc: "Run on commodity GPUs with predictable costs" },
      { key: "SDCA",          desc: "Patent-filed attention mechanism for domain expertise" },
      { key: "Domain Models", desc: "Finance, healthcare, legal, manufacturing, defense" },
    ],
  },
  {
    id: "security", dotColor: "var(--violet)", title: "Security & Cryptography", badge: "3 components",
    body: "Defense-grade security engineered from the ground up — not bolted on after the fact.",
    list: [
      { key: "CipherVault",  desc: "Computation on encrypted data, zero-knowledge proofs" },
      { key: "Post-Quantum", desc: "Lattice-based primitives resistant to quantum attacks" },
      { key: "Secure Comms", desc: "Zero-trust agent channels, mutual authentication" },
    ],
  },
  {
    id: "extensions", dotColor: "var(--cyan)", title: "Extension Libraries", badge: "4 components",
    body: "Libraries that extend agent capabilities into the physical world — enabling governed autonomy in operational environments.",
    list: [
      { key: "Sensors",     desc: "Industrial sensors, environmental monitors, equipment telemetry" },
      { key: "Simulations", desc: "Digital twins, sandboxed testing, what-if analysis" },
      { key: "IoT",         desc: "MQTT, OPC-UA, Modbus, bidirectional device communication" },
      { key: "Industrial",  desc: "PLCs, SCADA, manufacturing execution systems" },
    ],
  },
  {
    id: "governance", dotColor: "var(--rose)", title: "Governance & Audit", badge: "2 components",
    body: "The accountability layer that makes everything else enterprise-ready.",
    list: [
      { key: "Governance Engine", desc: "Policy enforcement, access control, real-time override" },
      { key: "Audit Trail",       desc: "Immutable logs, reasoning chains, decision explainability" },
    ],
  },
];

export default function EcosystemSection() {
  const [openItem, setOpenItem] = useState(null);
  const toggle = (id) => setOpenItem((prev) => (prev === id ? null : id));

  return (
    <section className="py-28 relative overflow-hidden" id="ecosystem">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[600px] bg-emerald-500/[0.03]" style={{ top: "-15%", right: "-5%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-14">
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl mb-3 r-up">
            The Genovation <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-gray-400 text-sm font-light r-up">Hover to pause</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-8">
          {/* Solar System */}
          <div className="r-scale flex-shrink-0 mx-auto lg:mx-0" style={{ width: "580px" }}>
            <div className="solar-system" id="solarSystem">
              <div className="orbit orbit-4" />
              <div className="orbit orbit-3" />
              <div className="orbit orbit-2" />
              <div className="orbit orbit-1" />

              {/* Center */}
              <div className="solar-center">
                <div className="text-center">
                  <span className="text-white text-lg font-semibold block leading-tight">Mentis OS</span>
                  <span className="text-white/60 text-[9px] tracking-widest uppercase">Platform</span>
                </div>
              </div>

              {/* Orbit 1: Blue */}
              <div className="orbit orbit-1 orbit-animate-1">
                {[
                  { cls: "p-blue w-14 h-14", style: { position:"absolute", top:"-28px", left:"50%", transform:"translateX(-50%)" }, icon: <BookOpen className="w-6 h-6" />, label: "Knowledge", labelStyle: { top:"-22px", left:"50%", transform:"translateX(-50%)" }, counterCls: "counter-rotate-1" },
                  { cls: "p-blue w-12 h-12", style: { position:"absolute", bottom:"-24px", left:"50%", transform:"translateX(-50%)" }, icon: <BarChart3 className="w-5 h-5" />, label: "Analytics", labelStyle: { bottom:"-22px", left:"50%", transform:"translateX(-50%)" }, counterCls: "counter-rotate-1" },
                  { cls: "p-blue w-11 h-11", style: { position:"absolute", top:"50%", right:"-22px", transform:"translateY(-50%)" }, icon: <Lightbulb className="w-5 h-5" />, label: "Strategy", labelStyle: { right:"-58px", top:"50%", transform:"translateY(-50%)" }, counterCls: "counter-rotate-1" },
                  { cls: "p-blue w-10 h-10", style: { position:"absolute", top:"50%", left:"-20px", transform:"translateY(-50%)" }, icon: <MessageCircle className="w-4 h-4" />, label: "CX", labelStyle: { left:"-22px", top:"50%", transform:"translateY(-50%)" }, counterCls: "counter-rotate-1" },
                ].map((p, i) => (
                  <div key={i} className={`planet ${p.cls}`} style={p.style}>
                    <div className={p.counterCls}>{p.icon}</div>
                    <div className={`planet-label ${p.counterCls}`} style={p.labelStyle}>{p.label}</div>
                  </div>
                ))}
              </div>

              {/* Orbit 2: Amber */}
              <div className="orbit orbit-2 orbit-animate-2">
                {[
                  { cls: "p-amber w-14 h-14", style: { position:"absolute", top:"-28px", left:"35%" }, icon: <Brain className="w-6 h-6" />, label: "SLMs", labelStyle: { top:"-22px", left:"50%", transform:"translateX(-50%)" } },
                  { cls: "p-amber w-12 h-12", style: { position:"absolute", bottom:"10px", right:"15px" }, icon: <Sparkles className="w-5 h-5" />, label: "SDCA", labelStyle: { right:"-42px", top:"50%", transform:"translateY(-50%)" } },
                  { cls: "p-amber w-11 h-11", style: { position:"absolute", top:"20px", left:"5px" }, icon: <Boxes className="w-5 h-5" />, label: "Domain Models", labelStyle: { left:"-82px", top:"50%", transform:"translateY(-50%)" } },
                ].map((p, i) => (
                  <div key={i} className={`planet ${p.cls}`} style={p.style}>
                    <div className="counter-rotate-2">{p.icon}</div>
                    <div className="planet-label counter-rotate-2" style={p.labelStyle}>{p.label}</div>
                  </div>
                ))}
              </div>

              {/* Orbit 3: Violet */}
              <div className="orbit orbit-3 orbit-animate-3">
                {[
                  { cls: "p-violet w-14 h-14", style: { position:"absolute", bottom:"-28px", left:"45%" }, icon: <Lock className="w-6 h-6" />, label: "CipherVault", labelStyle: { bottom:"-22px", left:"50%", transform:"translateX(-50%)" } },
                  { cls: "p-violet w-12 h-12", style: { position:"absolute", top:"40px", right:"-24px" }, icon: <Atom className="w-5 h-5" />, label: "Post-Quantum", labelStyle: { right:"-85px", top:"50%", transform:"translateY(-50%)" } },
                  { cls: "p-violet w-11 h-11", style: { position:"absolute", top:"50px", left:"15px" }, icon: <Radio className="w-5 h-5" />, label: "Secure Comms", labelStyle: { left:"-85px", top:"50%", transform:"translateY(-50%)" } },
                ].map((p, i) => (
                  <div key={i} className={`planet ${p.cls}`} style={p.style}>
                    <div className="counter-rotate-3">{p.icon}</div>
                    <div className="planet-label counter-rotate-3" style={p.labelStyle}>{p.label}</div>
                  </div>
                ))}
              </div>

              {/* Orbit 4: Cyan/Rose/Emerald */}
              <div className="orbit orbit-4 orbit-animate-4">
                {[
                  { cls: "p-cyan w-14 h-14", style: { position:"absolute", top:"50%", left:"-28px", transform:"translateY(-50%)" }, icon: <RadioTower className="w-6 h-6" />, label: "Sensors", labelStyle: { left:"-58px", top:"50%", transform:"translateY(-50%)" } },
                  { cls: "p-cyan w-12 h-12", style: { position:"absolute", top:"30px", right:"70px" }, icon: <Box className="w-5 h-5" />, label: "Simulations", labelStyle: { top:"-22px", left:"50%", transform:"translateX(-50%)" } },
                  { cls: "p-cyan w-11 h-11", style: { position:"absolute", bottom:"70px", left:"40px" }, icon: <Wifi className="w-5 h-5" />, label: "IoT", labelStyle: { left:"-32px", top:"50%", transform:"translateY(-50%)" } },
                  { cls: "p-cyan w-11 h-11", style: { position:"absolute", bottom:"20px", right:"110px" }, icon: <Factory className="w-5 h-5" />, label: "Industrial", labelStyle: { bottom:"-22px", left:"50%", transform:"translateX(-50%)" } },
                  { cls: "p-rose", style: { position:"absolute", top:"50%", right:"-26px", transform:"translateY(-50%)", width:"52px", height:"52px" }, icon: <ShieldCheck className="w-6 h-6" />, label: "Governance", labelStyle: { right:"-80px", top:"50%", transform:"translateY(-50%)" } },
                  { cls: "p-emerald w-12 h-12", style: { position:"absolute", top:"70px", left:"70px" }, icon: <FileSearch className="w-5 h-5" />, label: "Audit", labelStyle: { top:"-22px", left:"50%", transform:"translateX(-50%)" } },
                ].map((p, i) => (
                  <div key={i} className={`planet ${p.cls}`} style={p.style}>
                    <div className="counter-rotate-4">{p.icon}</div>
                    <div className="planet-label counter-rotate-4" style={p.labelStyle}>{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex-1 min-w-0 lg:pt-4">
            <div className="space-y-2" id="ecoAccordion">
              {ACC_ITEMS.map((item) => {
                const isOpen = openItem === item.id;
                return (
                  <div key={item.id} className={`acc-item${isOpen ? " acc-open" : ""}`}>
                    <button className="acc-trigger" onClick={() => toggle(item.id)}>
                      <div className="flex items-center gap-3">
                        <div className="acc-dot" style={{ background: item.dotColor }} />
                        <span className="acc-title">{item.title}</span>
                        {item.badge && <span className="acc-badge">{item.badge}</span>}
                      </div>
                      <ChevronDown className={`w-4 h-4 text-gray-400 acc-chevron${isOpen ? " rotate-180" : ""}`} style={{ transition: "transform 0.3s ease" }} />
                    </button>
                    <div className="acc-body">
                      <p>{item.body}</p>
                      {item.list && (
                        <div className="acc-list">
                          {item.list.map((l) => (
                            <div key={l.key}><strong>{l.key}</strong> — {l.desc}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
