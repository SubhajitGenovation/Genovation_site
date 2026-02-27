"use client";
import { GitBranch, MessageSquare, Cpu, ShieldCheck, Bot, Brain, FileCheck, ChevronRight, ChevronDown, Lock, Activity, ScrollText, Server, Database, Scale, Hand } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-32 relative" id="how-it-works">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[400px] bg-blue-500/[0.03]" style={{ top: "20%", right: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/[0.1] border border-blue-500/[0.2] mb-6 r-up">
            <GitBranch className="w-3 h-3 text-blue-600" />
            <span className="text-blue-600 text-[10px] font-mono tracking-[0.2em] uppercase">How It Works</span>
          </div>
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl mb-4 r-up">
            From Query to<br /><span className="text-gradient">Governed Action</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto r-up">
            Every interaction follows the same secure, explainable flow — from user request to auditable outcome
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="card-static p-8 md:p-12 r-scale mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-500/[0.1] border-2 border-blue-500/[0.2] flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-xs text-blue-600 font-mono tracking-wider uppercase mb-1">Step 1</div>
              <h4 className="text-gray-800 font-medium mb-2">User Request</h4>
              <p className="text-xs text-gray-500 font-light">Natural language query enters through secure enterprise interface</p>
            </div>

            <div className="hidden lg:flex items-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400" />
              <ChevronRight className="w-5 h-5 text-emerald-500 -ml-1" />
            </div>
            <div className="lg:hidden"><ChevronDown className="w-5 h-5 text-gray-300" /></div>

            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="relative w-20 h-20 rounded-2xl bg-emerald-500/[0.15] border-2 border-emerald-500/[0.3] flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-emerald-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-emerald-500/[0.3] flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                </div>
              </div>
              <div className="text-xs text-emerald-600 font-mono tracking-wider uppercase mb-1">Step 2</div>
              <h4 className="text-gray-800 font-medium mb-2">Mentis OS</h4>
              <p className="text-xs text-gray-500 font-light">Validates against policy, routes to appropriate agents, governs execution</p>
            </div>

            <div className="hidden lg:flex items-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-amber-400" />
              <ChevronRight className="w-5 h-5 text-amber-500 -ml-1" />
            </div>
            <div className="lg:hidden"><ChevronDown className="w-5 h-5 text-gray-300" /></div>

            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 rounded-2xl bg-amber-500/[0.1] border-2 border-amber-500/[0.2] flex items-center justify-center mx-auto mb-4">
                <div className="flex gap-1">
                  <Bot className="w-5 h-5 text-amber-600" />
                  <Brain className="w-5 h-5 text-amber-500" />
                </div>
              </div>
              <div className="text-xs text-amber-600 font-mono tracking-wider uppercase mb-1">Step 3</div>
              <h4 className="text-gray-800 font-medium mb-2">Agents + SLMs</h4>
              <p className="text-xs text-gray-500 font-light">Specialized agents reason with domain SLMs, all on-premise</p>
            </div>

            <div className="hidden lg:flex items-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-violet-400" />
              <ChevronRight className="w-5 h-5 text-violet-500 -ml-1" />
            </div>
            <div className="lg:hidden"><ChevronDown className="w-5 h-5 text-gray-300" /></div>

            {/* Step 4 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 rounded-2xl bg-violet-500/[0.1] border-2 border-violet-500/[0.2] flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-violet-600" />
              </div>
              <div className="text-xs text-violet-600 font-mono tracking-wider uppercase mb-1">Step 4</div>
              <h4 className="text-gray-800 font-medium mb-2">Auditable Output</h4>
              <p className="text-xs text-gray-500 font-light">Response with full decision trace, explainable and defensible</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-8 border-t border-black/[0.06]">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: <Lock className="w-4 h-4 text-violet-500" />, text: "End-to-end encrypted" },
                { icon: <Activity className="w-4 h-4 text-emerald-500" />, text: "Real-time monitoring" },
                { icon: <ScrollText className="w-4 h-4 text-blue-500" />, text: "Complete audit trail" },
                { icon: <Server className="w-4 h-4 text-amber-500" />, text: "100% on-premise" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03]">
                  {b.icon}
                  <span className="text-xs text-gray-600">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Three guarantees */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Database className="w-6 h-6 text-blue-600" />, title: "Data Never Leaves", desc: "Your data stays within your infrastructure. No cloud APIs, no external calls, no exceptions." },
            { icon: <Scale className="w-6 h-6 text-emerald-600" />, title: "Every Decision Explainable", desc: "Complete reasoning traces for every output. Auditors can verify any decision path." },
            { icon: <Hand className="w-6 h-6 text-violet-600" />, title: "Human in Control", desc: "Agents act within enterprise-defined boundaries. Override, interrupt, or audit at any time." },
          ].map((g) => (
            <div key={g.title} className="card p-6 r-up">
              <div className="mb-4">{g.icon}</div>
              <h4 className="text-gray-800 font-medium mb-2">{g.title}</h4>
              <p className="text-sm text-gray-600 font-light">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
