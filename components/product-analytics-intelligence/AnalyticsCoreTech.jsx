"use client";
import { XCircle, CheckCircle, Sparkles, ShieldCheck } from "lucide-react";

export default function AnalyticsCoreTech() {
  return (
    <section
      className="py-32 md:py-40 section-warm relative overflow-hidden"
      id="coreTech"
    >
      <div
        className="orb w-[600px] h-[500px] bg-amber-500/[0.04]"
        style={{ top: "5%", left: "10%" }}
      />
      <div
        className="orb w-[400px] h-[350px] bg-orange-500/[0.03]"
        style={{ bottom: "10%", right: "15%" }}
      />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <span className="text-[11px] text-amber-600 font-mono tracking-[0.2em]">01</span>
            <div className="w-8 h-px bg-amber-500/40" />
            <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">
              Core Technology
            </span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl mb-6 r-up">
            Explanation-First{" "}
            <span className="text-gradient-amber">Architecture</span>
          </h2>
          <p className="text-xl text-gray-500 font-light r-up">
            Traditional BI shows <em>what</em> happened. We explain{" "}
            <em>why</em> — with traceable reasoning and evidence.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 r-up">
          {/* Traditional BI */}
          <div className="rounded-2xl border border-red-500/[0.15] overflow-hidden bg-white/60">
            <div
              className="px-6 py-4 border-b border-red-500/[0.1] flex items-center gap-3"
              style={{ background: "rgba(239,68,68,0.05)" }}
            >
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="text-[11px] font-mono text-red-500 tracking-wider">
                TRADITIONAL BI OUTPUT
              </span>
            </div>
            <div className="p-6">
              <div className="p-4 rounded-xl bg-gray-100/80 border border-gray-200/50 mb-4">
                <div className="flex items-end gap-2 h-20 mb-3">
                  <div
                    className="flex-1 bg-gray-300 rounded-t"
                    style={{ height: "60%" }}
                  />
                  <div
                    className="flex-1 bg-gray-300 rounded-t"
                    style={{ height: "80%" }}
                  />
                  <div
                    className="flex-1 bg-red-400 rounded-t"
                    style={{ height: "45%" }}
                  />
                  <div
                    className="flex-1 bg-gray-300 rounded-t"
                    style={{ height: "70%" }}
                  />
                </div>
                <div className="text-[11px] text-gray-500 text-center">
                  Q3 Revenue:{" "}
                  <span className="text-red-500 font-medium">-12% vs target</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-red-50 border border-red-200/50">
                <p className="text-[11px] text-red-600 font-light">
                  → Shows WHAT happened. You figure out WHY. Schedule 3 meetings.
                </p>
              </div>
            </div>
          </div>

          {/* Explanation-First */}
          <div className="rounded-2xl border border-emerald-500/[0.2] overflow-hidden bg-white/60">
            <div
              className="px-6 py-4 border-b border-emerald-200/50 flex items-center gap-3"
              style={{ background: "rgba(16,185,129,0.05)" }}
            >
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-[11px] font-mono text-emerald-600 tracking-wider">
                EXPLANATION-FIRST OUTPUT
              </span>
            </div>
            <div className="p-6">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/50">
                <p className="text-[12px] text-gray-700 leading-relaxed mb-3">
                  <strong className="text-gray-900">
                    Q3 revenue missed target by 12%
                  </strong>{" "}
                  due to three factors:
                </p>
                <div className="space-y-1.5 text-[11px] text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-mono font-bold">1.</span>
                    <span>
                      Enterprise deal slippage (
                      <strong className="text-gray-800">$2.1M</strong>) — 3 deals
                      pushed to Q4
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-mono font-bold">2.</span>
                    <span>
                      APAC underperformance (
                      <strong className="text-gray-800">-18%</strong>) — new
                      competitor pressure
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-mono font-bold">3.</span>
                    <span>
                      SMB churn spike (
                      <strong className="text-gray-800">+4.2%</strong>) — pricing
                      sensitivity
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-amber-200/50">
                  <span className="px-2 py-0.5 text-[9px] text-gray-500 bg-gray-100 rounded font-mono">
                    4 sources
                  </span>
                  <span className="px-2 py-0.5 text-[9px] text-emerald-600 bg-emerald-100 rounded font-mono">
                    98% confidence
                  </span>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200/50">
                <p className="text-[11px] text-emerald-700 font-light">
                  → Explains WHY with evidence and reasoning path. Board-ready.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-3 gap-6 r-up">
          {[
            { val: "10x",  label: "faster root-cause", cls: "text-gradient-amber" },
            { val: "100%", label: "traceable logic",   cls: "text-gradient-amber" },
            { val: "Zero", label: "black-box outputs", cls: "text-gradient-emerald" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-xl bg-white/60 border border-black/[0.06]"
            >
              <div className={`text-3xl font-light ${s.cls}`}>{s.val}</div>
              <div className="text-xs text-gray-500 font-mono mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
