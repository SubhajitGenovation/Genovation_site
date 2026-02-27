"use client";

import { BookOpen, Check, Lock } from "lucide-react";

const steps = [
  { num: "1", title: "Enterprise Safety First",          sub: "We only publish when disclosure doesn't compromise security or compliance." },
  { num: "2", title: "Foundations Over Implementations", sub: "We share frameworks and insights — not exploitable implementation details." },
  { num: "3", title: "Peer Review Over Publicity",       sub: "Technical rigor and real-world relevance, not marketing announcements." },
];

const shareItems    = ["Problem definitions", "Architectural patterns", "Evaluation frameworks", "Design principles"];
const protectItems  = ["Implementation code", "Training procedures",   "Security mechanisms",  "Optimization details"];

export default function ResearchHowPublish() {
  return (
    <section className="py-48 relative" id="howPublish">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-amber-500/[0.04]" style={{ top: "20%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="r-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.1] border border-amber-400/[0.15] mb-8">
              <BookOpen className="w-3 h-3 text-amber-600" />
              <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight mb-6">
              How We <span className="text-gradient-amber">Publish</span>
            </h2>
            <p className="text-lg text-gray-600 font-light mb-10 leading-relaxed">
              Not all deep technology should be published. We follow a selective model — sharing what advances the field while protecting what makes our systems defensible.
            </p>
            <div className="space-y-5 mb-10">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/[0.1] flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">{s.num}</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">{s.title}</h4>
                    <p className="text-sm text-gray-500 font-light">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-xl bg-emerald-500/[0.06] border border-emerald-400/[0.15]">
              <p className="text-emerald-700 font-light text-sm">
                <span className="font-medium">Key Principle:</span> Publications establish credibility and direction — they don't replicate our systems.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="r-right">
            <div className="card p-10" style={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.06)" }}>
              <h3 className="text-xl font-light text-gray-900 mb-8 text-center tracking-tight">
                What We <span className="text-gradient-emerald font-medium">Share</span> vs{" "}
                <span className="text-gradient-rose font-medium">Protect</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Share */}
                <div className="share-card p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.15] flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="font-medium text-emerald-700 text-sm">We Share</span>
                  </div>
                  <div className="space-y-3">
                    {shareItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        <span className="text-sm text-gray-600 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Protect */}
                <div className="protect-card p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/[0.12] flex items-center justify-center">
                      <Lock className="w-4 h-4 text-rose-500" />
                    </div>
                    <span className="font-medium text-rose-600 text-sm">We Protect</span>
                  </div>
                  <div className="space-y-3">
                    {protectItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-rose-400" />
                        <span className="text-sm text-gray-600 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
