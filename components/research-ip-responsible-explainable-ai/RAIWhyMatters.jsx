"use client";

import {
  HelpCircle, Database, Shield, UserCheck, History, AlertTriangle,
} from "lucide-react";

const questions = [
  { icon: <HelpCircle className="w-5 h-5 text-teal-500" />, text: "Why was this conclusion reached?" },
  { icon: <Database  className="w-5 h-5 text-teal-500" />, text: "What data influenced this decision?" },
  { icon: <Shield    className="w-5 h-5 text-teal-500" />, text: "Which rules or constraints were applied?" },
  { icon: <UserCheck className="w-5 h-5 text-teal-500" />, text: "Who or what executed the action?" },
  { icon: <History   className="w-5 h-5 text-teal-500" />, text: "Can this be audited months or years later?" },
];

export default function RAIWhyMatters() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-teal opacity-15" />
      <div className="orb w-[400px] h-[400px] bg-teal-400/[0.04]" style={{ top: "10%", right: "-5%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div className="r-left">
            <p className="text-[10px] text-teal-500/80 tracking-[0.3em] uppercase mb-4 font-mono">
              The Challenge
            </p>
            <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-6">
              Why Explainability Matters
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed mb-5">
              In regulated and mission-critical environments, an AI system must answer more than{" "}
              <span className="text-gray-800 font-medium">"What is the output?"</span>
            </p>
            <p className="text-gray-400 mb-8 font-light text-sm leading-relaxed">
              It must also answer fundamental questions about its reasoning, data, constraints, and accountability.
              AI systems that cannot answer these questions cannot be safely deployed—regardless of accuracy.
            </p>

            {/* Alert card */}
            <div className="p-5 rounded-xl bg-red-500/[0.04] border border-red-500/[0.12]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/[0.08] flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-red-500 font-medium text-sm mb-1">The Reality</p>
                  <p className="text-sm text-gray-500 font-light">
                    An AI that can't explain itself can't be trusted in environments where decisions
                    have legal, financial, or safety consequences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="r-right">
            <p className="text-[10px] text-teal-500/80 tracking-[0.2em] uppercase mb-6 font-mono">
              Questions AI Must Answer
            </p>
            <div className="space-y-3">
              {questions.map((q, i) => (
                <div key={i} className="question-card p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/[0.08] flex items-center justify-center flex-shrink-0">
                      {q.icon}
                    </div>
                    <p className="text-gray-800 font-medium text-sm">{q.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
