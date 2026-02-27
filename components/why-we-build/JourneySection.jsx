"use client";
import { Route, Layers, Bot, Brain, Shield, Plug } from "lucide-react";

const timelineLeft = [
  { color: "var(--blue)", textColor: "text-blue-600", date: "December 2020", title: "Founded & Incorporated", desc: "Conviction: democratize access to intelligence for regulated enterprises" },
  { color: "var(--blue)", textColor: "text-blue-600", date: "2021–2022", title: "Deep Research Phase", desc: "NLP research, building libraries to streamline IoT data & enabling ML models on top" },
  { color: "var(--amber)", textColor: "text-amber-600", date: "2023", title: "First Deployments", desc: "Initial deployments of end-to-end pipelines for understanding sensor & process data with NLP for interpretation" },
  { color: "var(--emerald)", textColor: "text-emerald-600", date: "2024", title: "Expertus Library", desc: "Expertus library researched and developed for the creation of deep agents and enable agent orchestration" },
];

const timelineRight = [
  { color: "var(--emerald)", textColor: "text-emerald-600", date: "2025", title: "Mentis OS & Production", desc: "Agentic AI platform built, agent SKUs developed, live deployments in financial services, defense, healthcare" },
  { color: "var(--violet)", textColor: "text-violet-600", date: "2026+", title: "Physical-World Agents", desc: "Deep physical world agents to build agents with deep capabilities within physical constraints" },
];

const shipsToday = [
  { icon: <Layers className="w-4 h-4 text-emerald-600" />, label: "Mentis OS", sub: "Core agentic AI platform" },
  { icon: <Bot className="w-4 h-4 text-blue-600" />, label: "Agent SKUs", sub: "Purpose-built agents" },
  { icon: <Brain className="w-4 h-4 text-amber-600" />, label: "SLMs", sub: "Domain-specific models" },
  { icon: <Shield className="w-4 h-4 text-violet-600" />, label: "Security Libraries", sub: "Post-quantum crypto" },
  { icon: <Plug className="w-4 h-4 text-cyan-600" />, label: "Extension Libraries", sub: "Physical world" },
];

const techDepth = [
  { color: "bg-blue-500/60", label: "NLP Research Foundation" },
  { color: "bg-amber-500/60", label: "SLMs + SDCA + Cryptographic Libraries" },
  { color: "bg-emerald-500/60", label: "Mentis OS + Products + Live Deployments" },
  { color: "bg-violet-500/60", label: "Physical-World Libraries + Simulation" },
];

export default function JourneySection() {
  return (
    <section className="py-32 relative" id="journey">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[500px] bg-violet-500/[0.04]" style={{ top: "10%", left: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/[0.08] border border-violet-500/[0.15] mb-6 r-up">
            <Route className="w-3 h-3 text-violet-600" />
            <span className="text-violet-600 text-[10px] font-mono tracking-[0.2em] uppercase">Company Journey</span>
          </div>
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl r-up">
            From First Principles to<br /><span className="text-gradient-violet">Production Deployments</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left timeline */}
          <div className="space-y-8">
            {timelineLeft.map((t) => (
              <div key={t.date} className="timeline-step r-up">
                <div className="timeline-dot" style={{ borderColor: t.color }} />
                <div className={`text-[10px] ${t.textColor} font-mono tracking-wider uppercase mb-1`}>{t.date}</div>
                <div className="text-xl font-light text-gray-800 mb-2">{t.title}</div>
                <p className="text-gray-600 font-light">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Right timeline + cards */}
          <div className="space-y-8">
            {timelineRight.map((t) => (
              <div key={t.date} className="timeline-step r-up">
                <div className="timeline-dot" style={{ borderColor: t.color }} />
                <div className={`text-[10px] ${t.textColor} font-mono tracking-wider uppercase mb-1`}>{t.date}</div>
                <div className="text-xl font-light text-gray-800 mb-2">{t.title}</div>
                <p className="text-gray-600 font-light">{t.desc}</p>
              </div>
            ))}

            {/* What We Ship Today */}
            <div className="card-static p-6 r-up">
              <h4 className="text-sm font-medium text-gray-700 mb-4">What We Ship Today</h4>
              <div className="space-y-3">
                {shipsToday.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    {s.icon}
                    <div>
                      <span className="text-sm text-gray-700 font-medium">{s.label}</span>
                      <span className="text-xs text-gray-500 ml-2">— {s.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Depth */}
            <div className="card-static p-6 r-up">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Technology Depth Compounds</h4>
              <div className="space-y-2">
                {techDepth.map((t) => (
                  <div key={t.label} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${t.color}`} />
                    <span className="text-sm text-gray-600 font-light">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
