"use client";
import { Files, HelpCircle, AlertTriangle, ShieldAlert } from "lucide-react";

const PROBLEMS = [
  { Icon: Files,       title:"Knowledge Is Scattered",         desc:"Policies and SOPs live across document systems, shared drives, emails, and legacy tools — often duplicated and inconsistent across departments.",                                    side:"r-left"  },
  { Icon: HelpCircle,  title:"Answers Are Not Defensible",      desc:"Traditional search and AI chat tools return answers without provenance, making them unusable in audits and investigations.",                                                           side:"r-right" },
  { Icon: AlertTriangle,title:"Governance Gaps Go Undetected",  desc:"Missing, outdated, or contradictory policies are rarely identified until a failure or audit reveals them — often too late.",                                                           side:"r-left"  },
  { Icon: ShieldAlert, title:"AI Introduces New Risk",          desc:"Many AI-based knowledge tools require data to leave the enterprise or rely on opaque models that cannot be explained or audited.",                                                    side:"r-right" },
];

export default function ProblemSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden" id="problem">
      <div className="absolute inset-0 mesh-bg" style={{ opacity:0.15 }} />
      <div className="orb" style={{ width:500, height:400, background:"rgba(239,68,68,0.03)", top:"10%", right:"10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6 r-up">
            <span className="text-red-400 font-mono" style={{ fontSize:11, letterSpacing:"0.2em" }}>THE PROBLEM</span>
            <div className="w-8 h-px" style={{ background:"rgba(239,68,68,0.4)" }} />
          </div>
          <h2 className="display-section mb-8 r-up" style={{ fontSize:"clamp(2.5rem,5vw,4.5rem)" }}>
            The Problem with<br />Enterprise Knowledge <span className="text-gradient-sky">Today</span>
          </h2>
          <p className="text-gray-500 font-light leading-relaxed r-up">
            Enterprises depend on policies, SOPs, manuals, and governance documents to operate safely. Yet over time,
            this knowledge becomes fragmented — creating risk, inconsistency, and audit exposure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROBLEMS.map(({ Icon, title, desc, side }) => (
            <div key={title} className={`card-static p-8 ${side}`}
              style={{ border:"1px solid rgba(239,68,68,0.15)" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ background:"rgba(239,68,68,0.08)" }}>
                <Icon className="w-5 h-5 text-red-400" />
              </div>
              <div className="text-lg font-medium text-gray-800 mb-3">{title}</div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
