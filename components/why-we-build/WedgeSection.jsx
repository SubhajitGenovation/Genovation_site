"use client";
import { Zap, ChevronDown } from "lucide-react";

const linuxSteps = [
  { num: "1", bg: "bg-emerald-500/20", textColor: "text-emerald-600", borderColor: "border-emerald-500/[0.12]", rowBg: "bg-emerald-500/[0.06]", text: "Build for environments where failure is unacceptable" },
  { num: "2", bg: "bg-cyan-500/20", textColor: "text-cyan-600", borderColor: "border-cyan-500/[0.12]", rowBg: "bg-cyan-500/[0.06]", text: "Stress-test under the tightest constraints" },
  { num: "3", bg: "bg-blue-500/20", textColor: "text-blue-600", borderColor: "border-blue-500/[0.12]", rowBg: "bg-blue-500/[0.06]", text: "Deploy everywhere — what survives the hardest conditions is the most reliable option in every condition" },
];

const funnelLayers = [
  { num: "1", width: "100%", bg: "rgba(59,130,246,0.06)", border: "rgba(59,130,246,0.15)", numBg: "rgba(59,130,246,0.12)", numColor: "var(--blue)", title: "Air-Gapped Defense", desc: "Stress-tested in the harshest conditions" },
  { num: "2", width: "92%", bg: "rgba(139,92,246,0.05)", border: "rgba(139,92,246,0.12)", numBg: "rgba(139,92,246,0.1)", numColor: "var(--violet)", title: "Financial Services & Healthcare", desc: "Trusted because it survived defense-grade scrutiny" },
  { num: "3", width: "84%", bg: "rgba(6,182,212,0.05)", border: "rgba(6,182,212,0.12)", numBg: "rgba(6,182,212,0.1)", numColor: "var(--cyan)", title: "Manufacturing & Government", desc: "Proven reliable across regulated environments" },
  { num: "4", width: "76%", bg: "rgba(16,185,129,0.05)", border: "rgba(16,185,129,0.12)", numBg: "rgba(16,185,129,0.1)", numColor: "var(--emerald)", title: "Every Enterprise", desc: "The most trusted option at every level" },
];

export default function WedgeSection() {
  return (
    <section className="py-32 relative" id="wedge">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[500px] bg-emerald-500/[0.05]" style={{ top: "15%", left: "20%" }} />

      <div className="relative max-w-5xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-6 r-up">
            <Zap className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[10px] font-mono tracking-[0.2em] uppercase">Our Wedge</span>
          </div>
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl r-up">
            Built for the Hardest.<br /><span className="text-gradient">Adopted Everywhere.</span>
          </h2>
        </div>

        {/* Linux analogy */}
        <div className="card-static p-8 mb-12 r-up">
          <p className="text-gray-600 leading-relaxed font-light text-center mb-8">
            The logic is the same logic that made Linux the foundation of the modern internet:
          </p>
          <div className="space-y-4 max-w-2xl mx-auto">
            {linuxSteps.map((s) => (
              <div key={s.num} className={`flex items-center gap-4 p-4 rounded-xl ${s.rowBg} border ${s.borderColor}`}>
                <div className={`w-10 h-10 rounded-full ${s.bg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-lg font-medium ${s.textColor}`}>{s.num}</span>
                </div>
                <p className="text-gray-700 font-light">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Funnel */}
        <div className="r-up">
          <p className="text-center text-xs text-gray-400 font-mono tracking-widest uppercase mb-8">
            The rigor travels downward — the trust travels outward
          </p>
          <div className="max-w-xl mx-auto space-y-0">
            {funnelLayers.map((f, i) => (
              <div key={f.num}>
                <div
                  className="funnel-layer"
                  style={{ width: f.width, background: f.bg, borderColor: f.border }}
                >
                  <div className="funnel-num" style={{ background: f.numBg, color: f.numColor }}>{f.num}</div>
                  <div className="funnel-content">
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                  </div>
                </div>
                {i < funnelLayers.length - 1 && (
                  <div className="funnel-arrow">
                    <ChevronDown className="w-5 h-5 mx-auto text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
