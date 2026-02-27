"use client";
import { Heart, Sparkles, Landmark, HeartPulse, Banknote, Factory, Zap, Building2 } from "lucide-react";

const nodes = [
  { cls: "why-n1 r-up", lineCls: "why-line-1", icon: <Landmark className="w-6 h-6" />, nc: "var(--blue)", ncBg: "rgba(59,130,246,0.08)", title: "National Security", desc: "Defending critical infrastructure with autonomous intelligence that never phones home" },
  { cls: "why-n2 r-up", lineCls: "why-line-2", icon: <HeartPulse className="w-6 h-6" />, nc: "var(--rose)", ncBg: "rgba(251,113,133,0.08)", title: "Healthcare", desc: "Accelerating diagnosis, research, and care delivery at population scale" },
  { cls: "why-n3 r-up", lineCls: "why-line-3", icon: <Banknote className="w-6 h-6" />, nc: "var(--amber)", ncBg: "rgba(245,158,11,0.08)", title: "Financial Systems", desc: "Governing risk, fraud detection, and compliance across global markets" },
  { cls: "why-n4 r-up", lineCls: "why-line-4", icon: <Factory className="w-6 h-6" />, nc: "var(--cyan)", ncBg: "rgba(6,182,212,0.08)", title: "Manufacturing", desc: "Bringing governed autonomy to production lines, supply chains, and quality systems" },
  { cls: "why-n5 r-up", lineCls: "why-line-5", icon: <Zap className="w-6 h-6" />, nc: "var(--violet)", ncBg: "rgba(139,92,246,0.08)", title: "Energy & Climate", desc: "Optimizing grids, reducing waste, and modeling environmental systems at scale" },
  { cls: "why-n6 r-up", lineCls: "why-line-6", icon: <Building2 className="w-6 h-6" />, nc: "var(--emerald)", ncBg: "rgba(16,185,129,0.08)", title: "Government", desc: "Enabling sovereign intelligence for public services and civic infrastructure" },
];

export default function WhyExistSection() {
  return (
    <section className="py-36 relative overflow-hidden" id="why">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, rgba(6,182,212,0.03) 40%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.15] mb-8 r-up">
            <Heart className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[10px] font-mono tracking-[0.2em] uppercase">Why We Exist</span>
          </div>
          <h2 className="display-hero text-5xl md:text-6xl lg:text-7xl mb-6 r-up leading-[1.1]">
            The world&apos;s hardest problems<br />
            <span className="text-gradient">deserve intelligence that works.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto r-up">
            We exist to help organizations solve problems that matter — with AI they can trust, control, and deploy where it counts.
          </p>
        </div>

        {/* Radial layout */}
        <div className="why-radial r-scale">
          {/* Center */}
          <div className="why-center">
            <div className="why-center-inner">
              <Sparkles className="w-7 h-7 text-white/80 mb-2" />
              <span className="text-white text-sm font-medium block leading-snug">Scalable<br />Intelligence</span>
            </div>
            <div className="why-pulse why-pulse-1" />
            <div className="why-pulse why-pulse-2" />
            <div className="why-pulse why-pulse-3" />
          </div>

          {/* Nodes */}
          {nodes.map((n) => (
            <div key={n.title} className={`why-node ${n.cls}`}>
              <div className="why-node-icon" style={{ "--nc": n.nc, "--nc-bg": n.ncBg }}>
                <div style={{ color: n.nc }}>{n.icon}</div>
              </div>
              <div className={`why-node-line ${n.lineCls}`} />
              <h4>{n.title}</h4>
              <p>{n.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 r-up">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-3">
              These aren&apos;t hypothetical use cases. They are the environments we build for every day.
            </p>
            <p className="text-sm text-gray-400 font-light">
              When intelligence can be explained, defended, and controlled — it scales to the problems that matter most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
