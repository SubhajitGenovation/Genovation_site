"use client";
import { useState } from "react";

const TABS = [
  { id: "orchestration", label: "Agent Orchestration" },
  { id: "execution",     label: "Governed Execution" },
  { id: "reasoning",     label: "Reasoning" },
  { id: "judge",         label: "JUDGE Layer" },
  { id: "audit",         label: "Explainability" },
];

export default function CapabilitiesSection() {
  const [active, setActive] = useState("orchestration");

  return (
    <section id="capabilities" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 500, height: 500, background: "rgba(16,185,129,0.05)", top: "20%", left: "5%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <svg className="w-3 h-3 text-emerald-600/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/></svg>
            <span className="text-emerald-600/80 text-[11px] font-light tracking-[0.25em] uppercase">Core Capabilities</span>
          </div>
          <h2 className="display-section r-up" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
            What Mentis AgentOS <span className="text-gradient">Does</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Orchestrates how intelligence is reasoned, executed, monitored, and recorded.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 r-up">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`tab-btn${active === tab.id ? " active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div id="capability-tabs">
          {/* ORCHESTRATION */}
          {active === "orchestration" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="card p-8 r-left" style={{ borderRadius: 24 }}>
                <svg className="w-full h-[350px]" viewBox="0 0 400 350">
                  <defs><marker id="arr-em" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#10b981"/></marker></defs>
                  <g transform="translate(200, 175)"><circle r="50" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="2"/><text x="0" y="-5" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="600" fontFamily="Urbanist">ORCHESTRATOR</text><text x="0" y="12" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="Urbanist" opacity="0.6">Coordinator</text></g>
                  <g transform="translate(200, 40)"><rect x="-60" y="-25" width="120" height="50" rx="8" fill="rgba(139,92,246,0.08)" stroke="#8b5cf6" strokeWidth="1.5"/><text x="0" y="5" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="600" fontFamily="Urbanist">COMPLEX TASK</text></g>
                  <line x1="200" y1="65" x2="200" y2="125" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#arr-em)"/>
                  <g transform="translate(80, 280)"><circle r="35" fill="rgba(6,182,212,0.08)" stroke="#06b6d4" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#0891b2" fontSize="9" fontWeight="600" fontFamily="Urbanist">REASON</text><text x="0" y="8" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="Urbanist" opacity="0.6">Agent</text></g>
                  <line x1="165" y1="210" x2="105" y2="250" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,2"/>
                  <g transform="translate(200, 310)"><circle r="35" fill="rgba(251,191,36,0.1)" stroke="#f59e0b" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#d97706" fontSize="9" fontWeight="600" fontFamily="Urbanist">RETRIEVE</text><text x="0" y="8" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="Urbanist" opacity="0.6">Agent</text></g>
                  <line x1="200" y1="225" x2="200" y2="275" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2"/>
                  <g transform="translate(320, 280)"><circle r="35" fill="rgba(251,113,133,0.08)" stroke="#fb7185" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#e11d48" fontSize="9" fontWeight="600" fontFamily="Urbanist">EXECUTE</text><text x="0" y="8" textAnchor="middle" fill="#fb7185" fontSize="8" fontFamily="Urbanist" opacity="0.6">Agent</text></g>
                  <line x1="235" y1="210" x2="295" y2="250" stroke="#fb7185" strokeWidth="1.5" strokeDasharray="4,2"/>
                  <path d="M115,280 Q200,320 285,280" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="3,3"/>
                </svg>
              </div>
              <div className="r-right">
                <h3 className="text-3xl font-light text-gray-900 mb-4">Agent Orchestration</h3>
                <p className="text-gray-500 text-[15px] font-light mb-8 leading-relaxed">Mentis AgentOS coordinates multiple specialized agents—each responsible for a bounded task—into a coherent intelligence workflow.</p>
                <div className="space-y-4">
                  {[
                    { bg: "bg-emerald-500/[0.05]", border: "border-emerald-500/[0.12]", ibg: "bg-emerald-500/[0.1]", ic: "text-emerald-600/70", title: "Task Decomposition", desc: "Complex tasks broken into manageable, bounded subtasks" },
                    { bg: "bg-cyan-500/[0.05]",    border: "border-cyan-500/[0.12]",    ibg: "bg-cyan-500/[0.1]",    ic: "text-cyan-600/70",    title: "Agent Role Specialization", desc: "Each agent optimized for specific capabilities" },
                    { bg: "bg-violet-500/[0.05]",  border: "border-violet-500/[0.12]",  ibg: "bg-violet-500/[0.1]",  ic: "text-violet-600/70",  title: "Controlled Inter-Agent Communication", desc: "Secure, monitored channels between agents" },
                  ].map((item) => (
                    <div key={item.title} className={`flex items-start gap-4 p-4 rounded-2xl ${item.bg} border ${item.border}`}>
                      <div className={`w-10 h-10 rounded-xl ${item.ibg} flex items-center justify-center flex-shrink-0`}>
                        <svg className={`w-5 h-5 ${item.ic}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
                      </div>
                      <div><h4 className="text-gray-900 font-normal text-[14px] mb-1">{item.title}</h4><p className="text-[13px] text-gray-400 font-light">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/[0.15]">
                  <p className="text-[13px] text-emerald-700 font-light"><span className="font-normal">Result:</span> Prevents uncontrolled autonomy while enabling real intelligence.</p>
                </div>
              </div>
            </div>
          )}

          {/* GOVERNED EXECUTION */}
          {active === "execution" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="card p-8" style={{ borderRadius: 24 }}>
                <svg className="w-full h-[350px]" viewBox="0 0 400 350">
                  <g transform="translate(200, 40)"><rect x="-70" y="-25" width="140" height="50" rx="8" fill="rgba(6,182,212,0.08)" stroke="#06b6d4" strokeWidth="1.5"/><text x="0" y="5" textAnchor="middle" fill="#0891b2" fontSize="10" fontWeight="600" fontFamily="Urbanist">AGENT ACTION REQUEST</text></g>
                  <line x1="200" y1="65" x2="200" y2="95" stroke="#06b6d4" strokeWidth="2"/>
                  <g transform="translate(200, 130)"><polygon points="0,-35 50,0 0,35 -50,0" fill="rgba(139,92,246,0.08)" stroke="#8b5cf6" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="600" fontFamily="Urbanist">PERMISSION</text><text x="0" y="8" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="600" fontFamily="Urbanist">CHECK</text></g>
                  <line x1="200" y1="165" x2="200" y2="195" stroke="#10b981" strokeWidth="2"/>
                  <g transform="translate(200, 230)"><polygon points="0,-35 50,0 0,35 -50,0" fill="rgba(251,191,36,0.1)" stroke="#f59e0b" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#d97706" fontSize="9" fontWeight="600" fontFamily="Urbanist">CONTEXT</text><text x="0" y="8" textAnchor="middle" fill="#d97706" fontSize="9" fontWeight="600" fontFamily="Urbanist">RESTRICT</text></g>
                  <line x1="200" y1="265" x2="200" y2="285" stroke="#10b981" strokeWidth="2"/>
                  <g transform="translate(200, 320)"><rect x="-60" y="-30" width="120" height="60" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="2"/><text x="0" y="-5" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="600" fontFamily="Urbanist">GOVERNED</text><text x="0" y="12" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="600" fontFamily="Urbanist">EXECUTION</text></g>
                  <path d="M250,130 L320,130 L320,200" fill="none" stroke="#fb7185" strokeWidth="1.5"/>
                  <g transform="translate(320, 230)"><rect x="-40" y="-25" width="80" height="50" rx="6" fill="rgba(251,113,133,0.06)" stroke="#fb7185" strokeWidth="1" strokeDasharray="4,2"/><text x="0" y="-5" textAnchor="middle" fill="#e11d48" fontSize="9" fontFamily="Urbanist">BLOCKED</text><text x="0" y="10" textAnchor="middle" fill="#fb7185" fontSize="8" fontFamily="Urbanist" opacity="0.6">+ Logged</text></g>
                  <text x="280" y="125" fill="#e11d48" fontSize="8" fontFamily="Urbanist">DENY</text>
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">Governed Execution</h3>
                <p className="text-gray-500 text-[15px] font-light mb-8 leading-relaxed">Every agent action is executed under policy constraints. Agents cannot "just act"—they operate within enterprise-defined rules.</p>
                <div className="space-y-4">
                  {[
                    { bg: "bg-violet-500/[0.05]", border: "border-violet-500/[0.12]", ibg: "bg-violet-500/[0.1]", ic: "text-violet-600/70", title: "Permission-Aware Execution", desc: "Actions validated against role-based access controls" },
                    { bg: "bg-amber-500/[0.06]",  border: "border-amber-500/[0.12]",  ibg: "bg-amber-500/[0.1]",  ic: "text-amber-600/70",  title: "Context-Restricted Actions", desc: "Operations bounded by current task context" },
                    { bg: "bg-emerald-500/[0.05]",border: "border-emerald-500/[0.12]",ibg: "bg-emerald-500/[0.1]",ic: "text-emerald-600/70",title: "Explicit Approval Boundaries", desc: "Human-in-the-loop for sensitive operations" },
                  ].map((item) => (
                    <div key={item.title} className={`flex items-start gap-4 p-4 rounded-2xl ${item.bg} border ${item.border}`}>
                      <div className={`w-10 h-10 rounded-xl ${item.ibg} flex items-center justify-center flex-shrink-0`}>
                        <svg className={`w-5 h-5 ${item.ic}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      </div>
                      <div><h4 className="text-gray-900 font-normal text-[14px] mb-1">{item.title}</h4><p className="text-[13px] text-gray-400 font-light">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* REASONING */}
          {active === "reasoning" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="card p-8" style={{ borderRadius: 24 }}>
                <h4 className="text-sm font-light text-gray-500 tracking-widest uppercase mb-6">Separated Concerns</h4>
                <svg className="w-full h-[320px]" viewBox="0 0 400 320">
                  <g transform="translate(100, 80)"><rect x="-70" y="-50" width="140" height="100" rx="12" fill="rgba(16,185,129,0.06)" stroke="#10b981" strokeWidth="2"/><text x="0" y="-20" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="600" fontFamily="Urbanist">REASONING</text><text x="0" y="0" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="Urbanist" opacity="0.6">Logic & Planning</text><text x="0" y="20" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="Urbanist" opacity="0.6">Decision Trees</text></g>
                  <g transform="translate(300, 80)"><rect x="-70" y="-50" width="140" height="100" rx="12" fill="rgba(6,182,212,0.06)" stroke="#06b6d4" strokeWidth="2"/><text x="0" y="-20" textAnchor="middle" fill="#0891b2" fontSize="12" fontWeight="600" fontFamily="Urbanist">EXECUTION</text><text x="0" y="0" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="Urbanist" opacity="0.6">Actions & Operations</text><text x="0" y="20" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="Urbanist" opacity="0.6">System Calls</text></g>
                  <g transform="translate(100, 240)"><rect x="-70" y="-50" width="140" height="100" rx="12" fill="rgba(139,92,246,0.06)" stroke="#8b5cf6" strokeWidth="2"/><text x="0" y="-20" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="600" fontFamily="Urbanist">MEMORY</text><text x="0" y="0" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="Urbanist" opacity="0.6">Context & State</text><text x="0" y="20" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="Urbanist" opacity="0.6">Knowledge Base</text></g>
                  <g transform="translate(300, 240)"><rect x="-70" y="-50" width="140" height="100" rx="12" fill="rgba(251,191,36,0.08)" stroke="#f59e0b" strokeWidth="2"/><text x="0" y="-20" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="600" fontFamily="Urbanist">VALIDATION</text><text x="0" y="0" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="Urbanist" opacity="0.6">Output Verification</text><text x="0" y="20" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="Urbanist" opacity="0.6">Quality Checks</text></g>
                  <line x1="170" y1="80" x2="230" y2="80" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeDasharray="4,2"/>
                  <line x1="100" y1="130" x2="100" y2="190" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeDasharray="4,2"/>
                  <line x1="300" y1="130" x2="300" y2="190" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeDasharray="4,2"/>
                  <line x1="170" y1="240" x2="230" y2="240" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeDasharray="4,2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">Reasoning, Not Just Generation</h3>
                <p className="text-gray-500 text-[15px] font-light mb-8 leading-relaxed">
                  Mentis AgentOS separates reasoning, execution, memory, and validation. This ensures outputs are <span className="text-gray-900 font-normal">structured, inspectable, and verifiable</span>—not just generated text.
                </p>
                <div className="space-y-5">
                  {[
                    { dot: "bg-emerald-500", label: "Reasoning",  desc: "— Logic and planning separate from action" },
                    { dot: "bg-cyan-500",    label: "Execution",  desc: "— Actions bounded and controlled" },
                    { dot: "bg-violet-500",  label: "Memory",     desc: "— Context managed explicitly" },
                    { dot: "bg-amber-500",   label: "Validation", desc: "— Outputs verified before delivery" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${item.dot}`} />
                      <div><span className="text-gray-900 font-normal text-[14px]">{item.label}</span><span className="text-gray-400 font-light text-[14px]"> {item.desc}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* JUDGE LAYER */}
          {active === "judge" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="card p-8" style={{ borderRadius: 24 }}>
                <svg className="w-full h-[350px]" viewBox="0 0 400 350">
                  <g transform="translate(120, 100)">
                    <rect x="-80" y="-60" width="160" height="120" rx="12" fill="rgba(6,182,212,0.06)" stroke="#06b6d4" strokeWidth="1.5"/>
                    <text x="0" y="-35" textAnchor="middle" fill="#0891b2" fontSize="11" fontWeight="600" fontFamily="Urbanist">AGENT ACTIVITY</text>
                    <line x1="-60" y1="-10" x2="60" y2="-10" stroke="#06b6d4" strokeWidth="1" opacity="0.25"/>
                    <line x1="-60" y1="10" x2="40" y2="10" stroke="#06b6d4" strokeWidth="1" opacity="0.25"/>
                    <line x1="-60" y1="30" x2="50" y2="30" stroke="#06b6d4" strokeWidth="1" opacity="0.25"/>
                    <circle cx="-60" cy="-10" r="4" fill="#06b6d4"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/></circle>
                    <circle cx="-60" cy="10" r="4" fill="#06b6d4"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" begin="0.3s"/></circle>
                    <circle cx="-60" cy="30" r="4" fill="#06b6d4"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" begin="0.6s"/></circle>
                  </g>
                  <g transform="translate(300, 175)">
                    <rect x="-60" y="-120" width="120" height="240" rx="12" fill="rgba(251,191,36,0.06)" stroke="#f59e0b" strokeWidth="2"/>
                    <text x="0" y="-95" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="600" fontFamily="Urbanist">JUDGE</text>
                    <text x="0" y="-80" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="Urbanist" opacity="0.6">LAYER</text>
                    {[[-40, "Behavioral"], [0, "Policy"], [40, "Anomaly"]].map(([y, label]) => (
                      <g key={label} transform={`translate(0, ${y})`}><rect x="-45" y="-15" width="90" height="30" rx="4" fill="rgba(251,191,36,0.1)"/><text x="0" y="5" textAnchor="middle" fill="#d97706" fontSize="8" fontFamily="Urbanist">{label}</text></g>
                    ))}
                    <g transform="translate(0, 80)"><rect x="-45" y="-15" width="90" height="30" rx="4" fill="rgba(251,113,133,0.1)" stroke="#fb7185" strokeWidth="1"/><text x="0" y="5" textAnchor="middle" fill="#e11d48" fontSize="8" fontFamily="Urbanist">Interrupt</text></g>
                  </g>
                  <path d="M200,100 L240,100 L240,175" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,3"/>
                  <g transform="translate(120, 280)">
                    <rect x="-70" y="-25" width="140" height="50" rx="8" fill="rgba(16,185,129,0.06)" stroke="#10b981" strokeWidth="1.5"/>
                    <circle cx="-45" cy="0" r="6" fill="#10b981"><animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/></circle>
                    <text x="10" y="5" textAnchor="middle" fill="#059669" fontSize="10" fontFamily="Urbanist">LIVE GOVERNANCE</text>
                  </g>
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">Real-Time Oversight (JUDGE Layer)</h3>
                <p className="text-gray-500 text-[15px] font-light mb-8 leading-relaxed">All agent activity is continuously monitored. This enables <span className="text-amber-600 font-normal">live governance</span>, not post-hoc review.</p>
                <div className="space-y-4">
                  {[
                    { bg: "bg-amber-500/[0.06]", border: "border-amber-500/[0.12]", ibg: "bg-amber-500/[0.1]", ic: "text-amber-600/70", title: "Behavioral Validation", desc: "Continuous monitoring of agent behavior patterns" },
                    { bg: "bg-amber-500/[0.06]", border: "border-amber-500/[0.12]", ibg: "bg-amber-500/[0.1]", ic: "text-amber-600/70", title: "Policy Enforcement", desc: "Real-time validation against enterprise rules" },
                    { bg: "bg-amber-500/[0.06]", border: "border-amber-500/[0.12]", ibg: "bg-amber-500/[0.1]", ic: "text-amber-600/70", title: "Anomaly Detection", desc: "Automatic identification of unusual patterns" },
                    { bg: "bg-rose-500/[0.05]",  border: "border-rose-500/[0.12]",  ibg: "bg-rose-500/[0.1]",  ic: "text-rose-500/70",  title: "Execution Interruption", desc: "Ability to halt operations when required" },
                  ].map((item) => (
                    <div key={item.title} className={`flex items-start gap-4 p-4 rounded-2xl ${item.bg} border ${item.border}`}>
                      <div className={`w-10 h-10 rounded-xl ${item.ibg} flex items-center justify-center flex-shrink-0`}>
                        <svg className={`w-5 h-5 ${item.ic}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                      </div>
                      <div><h4 className="text-gray-900 font-normal text-[14px] mb-1">{item.title}</h4><p className="text-[13px] text-gray-400 font-light">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* EXPLAINABILITY */}
          {active === "audit" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div style={{ background: "#fafaf9", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 20, overflow: "hidden", fontFamily: "'Space Mono',monospace" }}>
                <div style={{ background: "rgba(0,0,0,0.03)", borderBottom: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: 6, padding: "10px 14px" }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,95,87,0.8)" }} />
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(254,188,46,0.8)" }} />
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(40,200,64,0.8)" }} />
                  <span className="text-[10px] text-gray-400 font-mono ml-2">decision_trace.log</span>
                </div>
                <div className="p-6 text-[11px] space-y-1.5 font-mono">
                  <div className="text-gray-400"># Decision Trace: TASK_2025-01-15_001</div>
                  <div className="text-gray-400"># ─────────────────────────────────</div>
                  <div className="mt-3"><span className="text-cyan-600">trace_id:</span> <span className="text-gray-600">trc_8k2m4n5p7q9r</span></div>
                  <div><span className="text-cyan-600">timestamp:</span> <span className="text-gray-600">2025-01-15T14:32:18.442Z</span></div>
                  <div><span className="text-cyan-600">agent:</span> <span className="text-emerald-600">ANALYTICS_AGENT</span></div>
                  <div className="mt-3 text-gray-400"># INPUTS USED</div>
                  <div className="text-violet-600">├─ query: "Analyze Q4 revenue trends"</div>
                  <div className="text-violet-600">├─ user_role: "financial_analyst"</div>
                  <div className="text-violet-600">└─ context: regional_sales_dashboard</div>
                  <div className="mt-3 text-gray-400"># REASONING STEPS</div>
                  <div className="text-amber-600">├─ [1] Parse intent → revenue_analysis</div>
                  <div className="text-amber-600">├─ [2] Identify sources → [sales_db, forecasts]</div>
                  <div className="text-amber-600">├─ [3] Policy check → PASS (role: analyst)</div>
                  <div className="text-amber-600">├─ [4] Execute query → 847 records</div>
                  <div className="text-amber-600">└─ [5] Generate analysis → report_ready</div>
                  <div className="mt-3 text-gray-400"># DATA ACCESSED</div>
                  <div className="text-rose-500">├─ sales_db.transactions (Q4 2024)</div>
                  <div className="text-rose-500">├─ forecasts.revenue_model_v3</div>
                  <div className="text-rose-500">└─ permissions.analyst_role_matrix</div>
                  <div className="mt-3 text-gray-400"># ACTIONS EXECUTED</div>
                  <div className="text-emerald-600">└─ generate_report(format: pdf, pages: 12)</div>
                  <div className="mt-3"><span className="text-cyan-600">audit_hash:</span> <span className="text-gray-400">sha256:9f8e7d...</span></div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">Explainability & Auditability</h3>
                <p className="text-gray-500 text-[15px] font-light mb-8 leading-relaxed">Every decision produces a trace. This is critical for <span className="text-gray-900 font-normal">audits, investigations, and regulatory review</span>.</p>
                <div className="space-y-4">
                  {[
                    { bg: "bg-violet-500/[0.05]", border: "border-violet-500/[0.12]", ibg: "bg-violet-500/[0.1]", ic: "text-violet-600/70", title: "Inputs Used", desc: "Complete record of all input data and context" },
                    { bg: "bg-amber-500/[0.06]",  border: "border-amber-500/[0.12]",  ibg: "bg-amber-500/[0.1]",  ic: "text-amber-600/70",  title: "Reasoning Steps Taken", desc: "Step-by-step logic path for every decision" },
                    { bg: "bg-emerald-500/[0.05]",border: "border-emerald-500/[0.12]",ibg: "bg-emerald-500/[0.1]",ic: "text-emerald-600/70",title: "Actions Executed", desc: "Full log of all operations performed" },
                    { bg: "bg-rose-500/[0.05]",   border: "border-rose-500/[0.12]",   ibg: "bg-rose-500/[0.1]",   ic: "text-rose-500/70",   title: "Data Accessed", desc: "Complete provenance of all data sources" },
                  ].map((item) => (
                    <div key={item.title} className={`flex items-start gap-4 p-4 rounded-2xl ${item.bg} border ${item.border}`}>
                      <div className={`w-10 h-10 rounded-xl ${item.ibg} flex items-center justify-center flex-shrink-0`}>
                        <svg className={`w-5 h-5 ${item.ic}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      </div>
                      <div><h4 className="text-gray-900 font-normal text-[14px] mb-1">{item.title}</h4><p className="text-[13px] text-gray-400 font-light">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
