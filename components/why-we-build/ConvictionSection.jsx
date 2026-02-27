"use client";
import { Target } from "lucide-react";

const problems = [
  { title: "Data too sensitive", desc: "Cannot send to external clouds or third-party APIs" },
  { title: "Compliance too strict", desc: "Cannot accept opaque, unauditable AI decisions" },
  { title: "Accountability too high", desc: "Every decision must be defensible and traceable" },
  { title: "Budgets cannot absorb hyperscale costs", desc: "Mid-market enterprises priced out of enterprise AI" },
];

export default function ConvictionSection() {
  return (
    <section className="py-32 relative" id="conviction">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[400px] bg-rose-500/[0.04]" style={{ top: "20%", right: "5%" }} />

      <div className="relative max-w-4xl mx-auto px-8">
        <div className="mb-8 r-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/[0.08] border border-rose-500/[0.15]">
            <Target className="w-3 h-3 text-rose-600" />
            <span className="text-rose-600 text-[10px] font-mono tracking-[0.2em] uppercase">From Conviction to Company</span>
          </div>
        </div>

        <h2 className="display-section text-4xl md:text-5xl lg:text-6xl mb-10 r-up">
          Building for the<br /><span className="text-gradient-warm">Hardest Environments First</span>
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed font-light mb-10 r-up">
          The organizations with the most to gain from AI — regulated enterprises, governments, defense
          organizations, healthcare systems — are precisely the ones that cannot adopt most AI solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {problems.map((p) => (
            <div key={p.title} className="problem-card r-up">
              <p className="text-sm text-rose-700 font-medium mb-1">{p.title}</p>
              <p className="text-xs text-gray-600 font-light">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="pullquote py-4 mb-10 r-up">
          <p className="text-xl text-gray-700 font-light leading-relaxed">
            The AI industry was building for Silicon Valley. Nobody was building for the institutions that actually run the world.
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed font-light r-up">
          So we made a decision: build intelligence infrastructure from the ground up for the hardest
          environments first. Sovereign. Explainable. Secure. Economically viable.{" "}
          <span className="text-gray-800 font-medium">If it works where the constraints are tightest, it works everywhere.</span>
        </p>
      </div>
    </section>
  );
}
