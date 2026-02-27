"use client";

import { AlertCircle, ShieldCheck } from "lucide-react";

const hardItems = [
  {
    title: "Model internals remain partially opaque",
    body: "Neural networks don't think in human-readable steps. We can trace inputs and outputs, but the exact \"reasoning\" inside a transformer remains a black box.",
  },
  {
    title: "Hallucination is not fully solved",
    body: "Language models can generate plausible-sounding content that isn't grounded in reality. This is an industry-wide challenge—not something any vendor has eliminated.",
  },
  {
    title: "Multi-agent coordination adds complexity",
    body: "When multiple agents interact, emergent behaviors can occur that weren't explicitly programmed. Full predictability remains an open research problem.",
  },
];

const addressItems = [
  {
    title: "System-level traceability over model-level interpretability",
    body: "We can't explain every neuron, but we can trace every data source, every agent invocation, and every policy check. The system is explainable even when the model isn't.",
  },
  {
    title: "Verification agents that check outputs against sources",
    body: "Our Judge agent cross-references every claim against source documents, flagging unsupported statements before they reach users. Hallucination isn't eliminated—it's caught.",
  },
  {
    title: "Bounded autonomy with explicit constraints",
    body: "Agents operate within defined boundaries. Unexpected behaviors are contained by policy enforcement, not prevented by perfect prediction.",
  },
];

export default function RAIWhatHard() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-teal opacity-15" />
      <div className="orb w-[350px] h-[350px] bg-red-400/[0.03]"  style={{ top: "10%",  left: "-3%" }} />
      <div className="orb w-[300px] h-[300px] bg-teal-400/[0.04]" style={{ bottom: "5%", right: "-3%" }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase mb-4 font-mono r-up">Honest Assessment</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">What's Still Hard</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light r-up">
            We believe trust is built through honesty. Here's what remains genuinely difficult
            in explainable AI—and how we're addressing it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Hard Truth */}
          <div className="card-no-hover p-7 r-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/[0.08] flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-gray-800 font-medium">The Hard Truth</h3>
            </div>
            <div className="space-y-3">
              {hardItems.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-red-500/[0.03] border border-red-500/[0.08]">
                  <p className="text-sm text-gray-700 font-medium mb-1.5">{item.title}</p>
                  <p className="text-[12px] text-gray-400 font-light leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How We Address It */}
          <div
            className="p-7 rounded-[20px] bg-white/90 border border-teal-500/[0.15] r-right"
            style={{ boxShadow: "0 8px 30px -10px rgba(20,184,166,0.1)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-teal-500/[0.08] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
              </div>
              <h3 className="text-gray-800 font-medium">How We Address It</h3>
            </div>
            <div className="space-y-3">
              {addressItems.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-teal-500/[0.03] border border-teal-500/[0.1]">
                  <p className="text-sm text-teal-700 font-medium mb-1.5">{item.title}</p>
                  <p className="text-[12px] text-gray-400 font-light leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Position statement */}
        <div className="card-no-hover p-5 text-center r-up">
          <p className="text-gray-500 font-light text-sm">
            <span className="text-gray-800 font-medium">Our position:</span> We don't claim to have solved explainability.
            We claim to have built systems where enterprises can trace decisions, verify outputs, and maintain
            accountability—even when underlying models remain partially opaque.
          </p>
        </div>
      </div>
    </section>
  );
}
