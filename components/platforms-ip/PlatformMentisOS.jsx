"use client";

import { useState } from "react";
import { Cpu, Brain, Search, BarChart2, Play, GitBranch, Link, ScrollText, Server, Cloud, WifiOff, Check } from "lucide-react";

const tabs = [
  { id: "orchestration", label: "Agent Orchestration" },
  { id: "execution",     label: "Governed Execution" },
  { id: "explainability",label: "Explainability" },
  { id: "deployment",    label: "Deployment Control" },
];

const agents = [
  { icon: <Brain className="w-4 h-4 text-emerald-600" />, iconBg: "bg-emerald-500/[0.12]", name: "Reasoning Agent", body: "Handles logical inference, planning, and decision-making. Evaluates options, considers constraints, and determines optimal paths forward." },
  { icon: <Search className="w-4 h-4 text-violet-600" />, iconBg: "bg-violet-500/[0.12]",  name: "Retrieval Agent", body: "Searches and retrieves relevant information from enterprise knowledge bases, documents, and data sources with appropriate access controls." },
  { icon: <BarChart2 className="w-4 h-4 text-amber-600" />, iconBg: "bg-amber-500/[0.12]", name: "Analytics Agent", body: "Performs quantitative analysis, statistical computations, and pattern recognition on enterprise data within governed boundaries." },
  { icon: <Play className="w-4 h-4 text-rose-600" />,      iconBg: "bg-rose-500/[0.12]",   name: "Action Agent",   body: "Executes approved operations in enterprise systems — always after policy validation and, when configured, human approval." },
];

const deployCards = [
  { icon: <Server className="w-6 h-6 text-emerald-600" />, iconBg: "bg-emerald-500/[0.12]", cardClass: "card-emerald", title: "On-Premise", body: "Full installation on your hardware within your datacenter. Maximum control over infrastructure.", features: ["Your hardware", "Kubernetes or bare metal", "HSM integration"], badge: "SECURITY: MAXIMUM", badgeColor: "text-emerald-600" },
  { icon: <Cloud className="w-6 h-6 text-cyan-600" />,    iconBg: "bg-cyan-500/[0.12]",    cardClass: "card-cyan",    title: "Private Cloud", body: "Deploy within your VPC with complete network isolation. Data stays in your cloud account.", features: ["Your VPC, your keys", "Zero data egress", "Cloud-native scaling"], badge: "SECURITY: HIGH", badgeColor: "text-cyan-600" },
  { icon: <WifiOff className="w-6 h-6 text-amber-600" />, iconBg: "bg-amber-500/[0.12]",   cardClass: "card-amber",   title: "Air-Gapped", body: "Complete network isolation with zero external connectivity. Maximum security posture.", features: ["Zero connectivity", "Offline operation", "Manual updates only"], badge: "SECURITY: CLASSIFIED", badgeColor: "text-amber-600" },
];

function OrchestrationDiagram() {
  return (
    <svg className="w-full h-[380px]" viewBox="0 0 400 380">
      {/* Center */}
      <g transform="translate(200,190)">
        <circle r="48" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5"/>
        <circle r="34" fill="rgba(6,182,212,0.04)" stroke="rgba(6,182,212,0.15)" strokeWidth="1"/>
        <text x="0" y="-5" textAnchor="middle" fill="#0891b2" fontSize="11" fontWeight="500">MENTIS</text>
        <text x="0" y="10" textAnchor="middle" fill="#0891b2" fontSize="9" opacity="0.6">Orchestrator</text>
      </g>
      {/* Satellites */}
      <g transform="translate(200,55)"><circle r="33" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="500">REASON</text><text x="0" y="8" textAnchor="middle" fill="#059669" fontSize="8" opacity="0.6">Agent</text></g>
      <line x1="200" y1="88" x2="200" y2="142" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="10 5" style={{animation:"data-flow 1.5s linear infinite"}}/>
      <g transform="translate(335,190)"><circle r="33" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="500">RETRIEVE</text><text x="0" y="8" textAnchor="middle" fill="#7c3aed" fontSize="8" opacity="0.6">Agent</text></g>
      <line x1="248" y1="190" x2="302" y2="190" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" strokeDasharray="10 5" style={{animation:"data-flow 1.5s linear infinite"}}/>
      <g transform="translate(200,325)"><circle r="33" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="500">ANALYZE</text><text x="0" y="8" textAnchor="middle" fill="#d97706" fontSize="8" opacity="0.6">Agent</text></g>
      <line x1="200" y1="238" x2="200" y2="292" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" strokeDasharray="10 5" style={{animation:"data-flow 1.5s linear infinite"}}/>
      <g transform="translate(65,190)"><circle r="33" fill="rgba(244,63,94,0.06)" stroke="rgba(244,63,94,0.3)" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#e11d48" fontSize="10" fontWeight="500">ACTION</text><text x="0" y="8" textAnchor="middle" fill="#e11d48" fontSize="8" opacity="0.6">Agent</text></g>
      <line x1="152" y1="190" x2="98" y2="190" stroke="rgba(244,63,94,0.3)" strokeWidth="1.5" strokeDasharray="10 5" style={{animation:"data-flow 1.5s linear infinite"}}/>
      {/* Diagonal connectors */}
      <path d="M170,70 Q100,120 80,157" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
      <path d="M230,70 Q300,120 320,157" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
      <path d="M80,223 Q100,280 170,310" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
      <path d="M320,223 Q300,280 230,310" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  );
}

function ExecutionDiagram() {
  return (
    <svg className="w-full h-[380px]" viewBox="0 0 400 380">
      <g transform="translate(200,38)"><rect x="-70" y="-22" width="140" height="44" rx="10" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5"/><text x="0" y="4" textAnchor="middle" fill="#0891b2" fontSize="11" fontWeight="500">Agent Request</text></g>
      <line x1="200" y1="60" x2="200" y2="88" stroke="#0891b2" strokeWidth="1.5"/>
      <g transform="translate(200,122)"><polygon points="0,-34 58,0 0,34 -58,0" fill="rgba(139,92,246,0.05)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="500">Policy</text><text x="0" y="8" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="500">Check</text></g>
      <line x1="258" y1="122" x2="290" y2="122" stroke="rgba(244,63,94,0.3)" strokeWidth="1.5"/>
      <line x1="290" y1="122" x2="290" y2="162" stroke="rgba(244,63,94,0.3)" strokeWidth="1.5"/>
      <text x="275" y="115" fill="#e11d48" fontSize="8">DENY</text>
      <g transform="translate(290,195)"><rect x="-45" y="-22" width="90" height="44" rx="8" fill="rgba(244,63,94,0.05)" stroke="rgba(244,63,94,0.25)" strokeWidth="1.5"/><text x="0" y="-3" textAnchor="middle" fill="#e11d48" fontSize="9">Rejected</text><text x="0" y="10" textAnchor="middle" fill="#e11d48" fontSize="7" opacity="0.6">+ Logged</text></g>
      <line x1="200" y1="156" x2="200" y2="184" stroke="#059669" strokeWidth="1.5"/>
      <text x="214" y="175" fill="#059669" fontSize="8">ALLOW</text>
      <g transform="translate(200,218)"><polygon points="0,-34 58,0 0,34 -58,0" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="500">Permission</text><text x="0" y="8" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="500">Check</text></g>
      <line x1="200" y1="252" x2="200" y2="280" stroke="#059669" strokeWidth="1.5"/>
      <g transform="translate(85,315)"><rect x="-48" y="-22" width="96" height="44" rx="8" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="4,2"/><text x="0" y="-3" textAnchor="middle" fill="#7c3aed" fontSize="9">Human</text><text x="0" y="9" textAnchor="middle" fill="#7c3aed" fontSize="9">Approval</text></g>
      <path d="M142,280 L85,280 L85,293" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="100" y="275" fill="#7c3aed" fontSize="7" opacity="0.6">if required</text>
      <g transform="translate(200,315)"><rect x="-58" y="-22" width="116" height="44" rx="10" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/><text x="0" y="-3" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="500">Execute</text><text x="0" y="10" textAnchor="middle" fill="#059669" fontSize="8" opacity="0.7">+ Audit Trail</text></g>
      <line x1="133" y1="315" x2="142" y2="315" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="4,2"/>
    </svg>
  );
}

function AccordionItem({ icon, iconBg, name, body }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between p-4 card !rounded-xl cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>{icon}</div>
          <span className="text-[14px] font-medium text-gray-800">{name}</span>
        </div>
        <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      {open && (
        <div className="px-4 pt-3 pb-1 text-[13px] text-gray-500 font-light leading-relaxed">{body}</div>
      )}
    </div>
  );
}

export default function PlatformMentisOS() {
  const [activeTab, setActiveTab] = useState("orchestration");

  return (
    <section id="mentis" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[400px] bg-emerald-500/[0.05]" style={{ top: "20%", right: "5%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.08] border border-cyan-500/[0.15] mb-8 r-up">
            <Cpu className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Core Platform</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            <span className="text-gradient">Mentis OS</span>
          </h2>
          <p className="text-[16px] text-gray-500 font-light max-w-3xl mx-auto mt-6 leading-relaxed r-up">
            Enterprise Agentic Operating System — the orchestration layer that governs how intelligence is created, executed, monitored, and audited.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 r-up">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn px-6 py-3 text-[13px] font-light transition-colors relative ${activeTab === tab.id ? "text-emerald-600" : "text-gray-500 hover:text-gray-800"}`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded bg-gradient-to-r from-emerald-500 to-cyan-500" />
                )}
              </button>
            ))}
          </div>

          {/* Tab: Orchestration */}
          {activeTab === "orchestration" && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="card p-8 !rounded-2xl r-left">
                <h4 className="text-[15px] font-medium text-gray-800 mb-6">Multi-Agent Coordination</h4>
                <OrchestrationDiagram />
              </div>
              <div className="r-right">
                <h4 className="display-inter text-2xl text-gray-800 mb-5">Coordinated Intelligence</h4>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-8">
                  Mentis OS orchestrates specialized agents across different capabilities — reasoning, retrieval, analytics, and action —
                  ensuring they work together coherently while maintaining governance boundaries.
                </p>
                <div className="space-y-3">
                  {agents.map((a, i) => <AccordionItem key={i} {...a} />)}
                </div>
              </div>
            </div>
          )}

          {/* Tab: Execution */}
          {activeTab === "execution" && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="card p-8 !rounded-2xl">
                <h4 className="text-[15px] font-medium text-gray-800 mb-6">Execution Pipeline</h4>
                <ExecutionDiagram />
              </div>
              <div>
                <h4 className="display-inter text-2xl text-gray-800 mb-5">Every Action Validated</h4>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-8">
                  No agent action executes without passing through the governance pipeline. Policy rules, permission checks, and optional human approval gates ensure complete control.
                </p>
                <div className="space-y-5">
                  {[
                    { num: "1", color: "violet", iconBg: "bg-violet-500/[0.12]", numColor: "text-violet-600", title: "Policy Evaluation", body: "Every request is evaluated against configurable policy rules. Violations are blocked and logged." },
                    { num: "2", color: "amber",  iconBg: "bg-amber-500/[0.12]",  numColor: "text-amber-600",  title: "Permission Verification", body: "Role-based access controls verify appropriate permissions for the operation and data." },
                    { num: "3", color: "violet", iconBg: "bg-violet-500/[0.12]", numColor: "text-violet-600", title: "Human-in-the-Loop", body: "Sensitive operations can require explicit human approval — configurable per action type." },
                    { num: "4", color: "emerald",iconBg: "bg-emerald-500/[0.12]",numColor: "text-emerald-600",title: "Audited Execution", body: "All actions are logged with full context — who, what, when, why, and under what authority." },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-9 h-9 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <span className={`${s.numColor} font-medium text-sm`}>{s.num}</span>
                      </div>
                      <div>
                        <h5 className="text-[14px] font-medium text-gray-800 mb-1">{s.title}</h5>
                        <p className="text-[13px] text-gray-500 font-light leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab: Explainability */}
          {activeTab === "explainability" && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Terminal */}
              <div className="terminal">
                <div className="terminal-header px-4 py-3 flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full" style={{ background: "rgba(255,95,87,0.8)" }} />
                  <div className="w-[10px] h-[10px] rounded-full" style={{ background: "rgba(254,188,46,0.8)" }} />
                  <div className="w-[10px] h-[10px] rounded-full" style={{ background: "rgba(40,200,64,0.8)" }} />
                  <span className="text-[10px] text-gray-400 ml-2 font-mono">mentis_trace.log</span>
                </div>
                <div className="p-6 text-[11px] space-y-2 font-mono">
                  <div className="text-gray-400"># Decision Trace: QUERY_001</div>
                  <div><span className="text-cyan-600">timestamp:</span> <span className="text-gray-600">2025-01-15T14:32:18.442Z</span></div>
                  <div><span className="text-cyan-600">agent:</span> <span className="text-emerald-600">REASONING_AGENT</span></div>
                  <div><span className="text-cyan-600">input:</span> <span className="text-gray-600">"Analyze Q4 revenue trends"</span></div>
                  <div className="mt-3 text-gray-400"># Reasoning Path</div>
                  {["[STEP_1] Parse intent → revenue_analysis","[STEP_2] Identify sources → [sales_db, forecasts]","[STEP_3] Policy check → ALLOWED (role: analyst)","[STEP_4] Delegate → ANALYTICS_AGENT","[STEP_5] Synthesize → report_generated"].map((s,i,a) => (
                    <div key={i} className="text-violet-600">{i < a.length-1 ? "├─" : "└─"} {s}</div>
                  ))}
                  <div className="mt-3 text-gray-400"># Sources Referenced</div>
                  {["sales_db.transactions (Q4 2024)","forecasts.revenue_model_v3","policies.data_access.analyst_role"].map((s,i,a) => (
                    <div key={i} className="text-amber-600">{i < a.length-1 ? "├─" : "└─"} {s}</div>
                  ))}
                  <div className="mt-3"><span className="text-cyan-600">confidence:</span> <span className="text-emerald-600">0.94</span></div>
                  <div><span className="text-cyan-600">audit_id:</span> <span className="text-gray-400">aud_7x9k2m4n5p</span></div>
                </div>
              </div>
              <div>
                <h4 className="display-inter text-2xl text-gray-800 mb-5">Complete Decision Transparency</h4>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-8">
                  Every decision made by Mentis OS agents is fully traceable. Reasoning paths, data sources, policy evaluations, and confidence scores are logged and inspectable.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: <GitBranch className="w-4 h-4 text-violet-600" />, title: "Reasoning Traces", body: "Step-by-step visibility into how the agent arrived at its conclusion. No black boxes." },
                    { icon: <Link className="w-4 h-4 text-amber-600" />,      title: "Source Attribution", body: "Every claim and output is linked to its source data. Full provenance for auditors." },
                    { icon: <ScrollText className="w-4 h-4 text-cyan-600" />, title: "Immutable Audit Trail", body: "Tamper-proof logs that answer: what happened, why, and under whose authority." },
                  ].map((c, i) => (
                    <div key={i} className="card !rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-2">{c.icon}<h5 className="text-[14px] font-medium text-gray-800">{c.title}</h5></div>
                      <p className="text-[13px] text-gray-500 font-light">{c.body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/[0.15]">
                  <p className="text-[13px] text-emerald-700 font-light">
                    <span className="font-medium">Result:</span> Enterprises can answer not just <em>what</em> the AI did, but <em>why</em> — without reverse-engineering.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Deployment */}
          {activeTab === "deployment" && (
            <>
              <div className="grid lg:grid-cols-3 gap-6">
                {deployCards.map((c, i) => (
                  <div key={i} className={`card ${c.cardClass} p-7`}>
                    <div className={`w-12 h-12 rounded-2xl ${c.iconBg} flex items-center justify-center mb-5`}>{c.icon}</div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">{c.title}</h4>
                    <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-5">{c.body}</p>
                    <div className="space-y-2 mb-5">
                      {c.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-[13px] text-gray-600 font-light">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />{f}
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-black/[0.06]">
                      <span className={`text-[10px] font-mono ${c.badgeColor} tracking-wider`}>{c.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-[14px] text-gray-400 font-light mt-10">
                Mentis OS is not sold independently. It exists to ensure Genovation products remain{" "}
                <span className="text-emerald-600">trustworthy at scale</span>.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
