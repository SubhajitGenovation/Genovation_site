"use client";

import { Brain, Route, CheckCircle2 } from "lucide-react";

const features = [
  { icon: <Brain        className="w-7 h-7 text-teal-500" />,   bg: "bg-teal-500/[0.08] border-teal-500/[0.15]",   title: "Governed Reasoning",      sub: "Every reasoning step constrained by explicit policy" },
  { icon: <Route        className="w-7 h-7 text-violet-500" />, bg: "bg-violet-500/[0.08] border-violet-500/[0.12]", title: "Traceable Execution",     sub: "Full visibility into every action and decision" },
  { icon: <CheckCircle2 className="w-7 h-7 text-blue-500" />,   bg: "bg-blue-500/[0.08] border-blue-500/[0.12]",    title: "Continuous Validation",   sub: "Real-time verification of agent behavior" },
];

export default function RAIMentisOS() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-teal opacity-10" />
      <div className="orb w-[400px] h-[400px] bg-teal-400/[0.04]" style={{ top: "5%", left: "15%" }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] text-teal-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">
            Platform Integration
          </p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">
            Powered by Mentis OS
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light r-up">
            Our responsible and explainable AI research directly informs the design of Mentis OS,
            Genovation's enterprise agentic operating system.
          </p>
        </div>

        <div className="card-no-hover p-10 r-up">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {features.map((f, i) => (
              <div key={i} className="text-center">
                <div className={`w-14 h-14 rounded-2xl ${f.bg} border flex items-center justify-center mx-auto mb-4`}>
                  {f.icon}
                </div>
                <h3 className="text-gray-800 font-medium mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 font-light">{f.sub}</p>
              </div>
            ))}
          </div>
          <div className="p-5 rounded-xl bg-teal-500/[0.04] border border-teal-500/[0.12] text-center">
            <p className="text-teal-700 font-medium text-sm">
              Every intelligence product built on Mentis OS inherits these properties by default.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
