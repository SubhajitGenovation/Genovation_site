"use client";
import { Coins } from "lucide-react";

const llmBars = [
  { label: "Infrastructure", note: "$$$$$", noteColor: "text-red-500", barBg: "bg-red-500/20", barFill: "bg-red-400/60", width: "95%" },
  { label: "Inference Cost", note: "Escalates", noteColor: "text-red-500", barBg: "bg-red-500/20", barFill: "bg-red-400/60", width: "80%" },
  { label: "Data Control", note: "Cloud required", noteColor: "text-red-500", barBg: "bg-red-500/20", barFill: "bg-red-400/60", width: "70%" },
  { label: "Precision", note: "Broad but shallow", noteColor: "text-amber-500", barBg: "bg-amber-500/20", barFill: "bg-amber-400/60", width: "50%" },
];

const slmBars = [
  { label: "Infrastructure", note: "$", noteColor: "text-emerald-600", barBg: "bg-emerald-500/20", barFill: "bg-emerald-400", width: "25%" },
  { label: "Inference Cost", note: "Fixed & Predictable", noteColor: "text-emerald-600", barBg: "bg-emerald-500/20", barFill: "bg-emerald-400", width: "20%" },
  { label: "Data Control", note: "Sovereign • On-prem", noteColor: "text-emerald-600", barBg: "bg-emerald-500/20", barFill: "bg-emerald-400", width: "30%" },
  { label: "Precision", note: "Deep domain expertise", noteColor: "text-emerald-600", barBg: "bg-emerald-500/20", barFill: "bg-emerald-400", width: "90%" },
];

function BarGroup({ bars }) {
  return (
    <div className="space-y-4">
      {bars.map((b) => (
        <div key={b.label}>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-600 font-light">{b.label}</span>
            <span className={`text-xs ${b.noteColor}`}>{b.note}</span>
          </div>
          <div className={`h-2 rounded-full ${b.barBg}`}>
            <div className={`h-full rounded-full ${b.barFill}`} style={{ width: b.width }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EconomicsSection() {
  return (
    <section className="py-32 relative" id="economics">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[400px] bg-amber-500/[0.04]" style={{ top: "20%", left: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/[0.1] border border-amber-500/[0.2] mb-6 r-up">
            <Coins className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[10px] font-mono tracking-[0.2em] uppercase">The Economic Unlock</span>
          </div>
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl mb-4 r-up">
            Why SLMs Change<br /><span className="text-gradient-warm">the Economics</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto r-up">
            The difference between sovereign AI as a Fortune 100 luxury and sovereign AI as a mid-market reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* LLMs */}
          <div className="card-static p-8 border-l-4 border-l-red-400 r-up">
            <h3 className="text-xl font-light text-gray-800 mb-2">General-Purpose LLMs</h3>
            <p className="text-xs text-gray-500 mb-6">OpenAI, Anthropic, Google via cloud API</p>
            <BarGroup bars={llmBars} />
            <div className="mt-6 p-4 rounded-xl bg-red-500/[0.06] border border-red-500/[0.12]">
              <p className="text-sm text-red-600 font-medium">Mid-market: Not viable</p>
              <p className="text-xs text-gray-500 font-light">Sovereignty: Not possible without significant cost</p>
            </div>
          </div>

          {/* SLMs */}
          <div className="card-static p-8 border-l-4 border-l-emerald-400 r-up">
            <h3 className="text-xl font-light text-gray-800 mb-2">Genovation Domain-Specific SLMs</h3>
            <p className="text-xs text-gray-500 mb-6">Proprietary • Patent-pending SDCA</p>
            <BarGroup bars={slmBars} />
            <div className="mt-6 p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/[0.15]">
              <p className="text-sm text-emerald-600 font-medium">Mid-market: Viable</p>
              <p className="text-xs text-gray-500 font-light">Sovereignty: Default architecture from day one</p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-amber-500/[0.06] border border-amber-500/[0.15] text-center r-up">
          <p className="text-gray-700 font-light">
            This is the economic unlock that makes sovereign AI viable for{" "}
            <span className="text-gray-900 font-medium">mid-sized enterprises</span> — not just Fortune 100 budgets.
          </p>
        </div>
      </div>
    </section>
  );
}
