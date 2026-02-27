"use client";
import { Cpu, Brain, Workflow, Activity, FileCheck, Lock } from "lucide-react";

const FEATURES = [
  { Icon: Workflow,   color:"text-sky-500",    label:"Agent Orchestration" },
  { Icon: Activity,  color:"text-violet-500",  label:"Execution Oversight" },
  { Icon: FileCheck, color:"text-emerald-500", label:"Built-in Auditability" },
  { Icon: Lock,      color:"text-amber-500",   label:"Sovereign Deployment" },
];

export default function MentisSection() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden" id="mentis">
      <div className="absolute inset-0 mesh-bg" style={{ opacity:0.15 }} />
      <div className="orb" style={{ width:600, height:500, background:"rgba(139,92,246,0.04)", top:"20%", left:"30%" }} />
      <div className="orb" style={{ width:400, height:350, background:"rgba(14,165,233,0.03)", bottom:"10%", right:"25%" }} />

      <div className="relative max-w-5xl mx-auto px-8 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 r-up"
          style={{ background:"rgba(139,92,246,0.08)", border:"1px solid rgba(139,92,246,0.15)" }}>
          <Cpu className="w-3 h-3 text-violet-500" />
          <span className="text-violet-600 font-light uppercase" style={{ fontSize:11, letterSpacing:"0.25em" }}>Powered By</span>
        </div>

        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl flex items-center justify-center r-scale"
          style={{ background:"linear-gradient(135deg,#a78bfa,#d946ef,#ec4899)" }}>
          <Brain className="w-8 h-8 text-white" />
        </div>

        <h2 className="display-section mb-6 r-up" style={{ fontSize:"clamp(2rem,4vw,3.5rem)" }}>
          Powered by <span className="text-gradient-violet">Mentis OS</span>
        </h2>
        <p className="text-gray-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed r-up">
          Enterprise Knowledge Intelligence runs on Mentis OS, Genovation's enterprise agentic operating system.
          Customers interact with a product. Mentis OS ensures that product remains trustworthy at scale.
        </p>

        <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto r-up">
          {FEATURES.map(({ Icon, color, label }) => (
            <div key={label} className="card-static p-5 text-center">
              <Icon className={`w-5 h-5 ${color} mx-auto mb-2`} />
              <div className="text-xs text-gray-600 font-light">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
