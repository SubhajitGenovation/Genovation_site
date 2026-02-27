"use client";
import { FileSearch, Check, CheckCircle, FileText, Database, Mail } from "lucide-react";

export default function WGExplainability() {
  return (
    <section id="explainability" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-blue-500/[0.04]" style={{ top: "10%", left: "30%" }} />
      <div className="orb w-[400px] h-[300px] bg-violet-500/[0.04]" style={{ bottom: "15%", right: "20%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/[0.1] border border-blue-500/[0.15] mb-8 r-up">
            <FileSearch className="w-3 h-3 text-blue-500" />
            <span className="text-blue-500 text-[11px] font-light tracking-[0.25em] uppercase">Explainability</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Every Decision.<br /><span className="text-gradient">Fully Traceable.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto r-up">
            No black boxes. Complete visibility into AI reasoning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-start gap-6 mb-8 r-up flow-step">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-cyan-500/[0.1] flex items-center justify-center border border-cyan-500/[0.15]">
              <span className="text-lg font-medium text-cyan-600">1</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-normal text-gray-800 mb-3">Input Analysis</h3>
              <div className="terminal">
                <div className="terminal-header">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#fb5c4c]"/><div className="w-3 h-3 rounded-full bg-[#fbbd2e]"/><div className="w-3 h-3 rounded-full bg-[#28c840]"/></div>
                  <span className="text-xs text-gray-400 font-mono ml-2">query_analyzer.py</span>
                </div>
                <div className="p-5 text-sm">
                  <p className="text-gray-400 mb-2 text-xs font-mono"># User Query</p>
                  <p className="text-gray-700 mb-4 font-light text-[15px]">&quot;What were our Q3 revenue drivers?&quot;</p>
                  <p className="text-gray-400 mb-2 text-xs font-mono"># Extracted Entities</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-violet-500/[0.06] border border-violet-500/[0.1] text-xs font-mono"><span className="text-violet-500">TEMPORAL:</span> <span className="text-cyan-600">Q3</span></span>
                    <span className="px-3 py-1.5 rounded-lg bg-violet-500/[0.06] border border-violet-500/[0.1] text-xs font-mono"><span className="text-violet-500">METRIC:</span> <span className="text-emerald-600">revenue</span></span>
                    <span className="px-3 py-1.5 rounded-lg bg-violet-500/[0.06] border border-violet-500/[0.1] text-xs font-mono"><span className="text-violet-500">ANALYSIS:</span> <span className="text-blue-600">drivers</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-6 mb-8 r-up flow-step" style={{ transitionDelay: "0.1s" }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-500/[0.1] flex items-center justify-center border border-blue-500/[0.15]">
              <span className="text-lg font-medium text-blue-600">2</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-normal text-gray-800 mb-3">Knowledge Retrieval</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: <FileText className="w-4 h-4 text-cyan-500" />, label: "PDF", name: "Q3_Report.pdf", pct: 92, color: "bg-cyan-500", textColor: "text-cyan-600" },
                  { icon: <Database className="w-4 h-4 text-blue-500" />, label: "DB", name: "sales_metrics", pct: 87, color: "bg-blue-500", textColor: "text-blue-600" },
                  { icon: <svg className="w-4 h-4 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.16Z"/></svg>, label: "MODEL", name: "revenue_analyzer", pct: 78, color: "bg-violet-500", textColor: "text-violet-600" },
                  { icon: <Mail className="w-4 h-4 text-emerald-500" />, label: "EMAIL", name: "exec_thread_q3", pct: 65, color: "bg-emerald-500", textColor: "text-emerald-600" },
                ].map(({ icon, label, name, pct, color, textColor }) => (
                  <div key={name} className="card !rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">{icon}<span className="text-xs font-mono text-gray-400">{label}</span></div>
                    <p className="text-xs text-gray-600 font-light">{name}</p>
                    <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className={`text-xs ${textColor} mt-1 block font-mono`}>{pct}% match</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-6 mb-8 r-up flow-step" style={{ transitionDelay: "0.2s" }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-violet-500/[0.1] flex items-center justify-center border border-violet-500/[0.15]">
              <span className="text-lg font-medium text-violet-600">3</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-normal text-gray-800 mb-3">Chain-of-Thought Reasoning</h3>
              <div className="terminal">
                <div className="terminal-header">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#fb5c4c]"/><div className="w-3 h-3 rounded-full bg-[#fbbd2e]"/><div className="w-3 h-3 rounded-full bg-[#28c840]"/></div>
                  <span className="text-xs text-gray-400 font-mono ml-2">reasoning_trace.log</span>
                </div>
                <div className="p-5 text-sm font-mono space-y-2">
                  {[
                    { step: "[STEP 1]", text: "Analyzing Q3 temporal bounds → Jul-Sep 2024", color: "text-violet-500" },
                    { step: "[STEP 2]", text: "Aggregating revenue data from sales_metrics", color: "text-violet-500" },
                    { step: "[STEP 3]", text: "Cross-referencing with Q3_Report.pdf findings", color: "text-violet-500" },
                    { step: "[STEP 4]", text: "Identifying top 3 growth contributors", color: "text-violet-500" },
                    { step: "[COMPLETE]", text: "Synthesis ready · 4 sources · 94% confidence", color: "text-emerald-500" },
                  ].map(({ step, text, color }) => (
                    <p key={step}><span className={color}>{step}</span> <span className="text-gray-500 font-light" style={{ fontFamily: "'Urbanist',sans-serif" }}>{text}</span></p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-6 r-up" style={{ transitionDelay: "0.3s" }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-500/[0.1] flex items-center justify-center border border-emerald-500/[0.15]">
              <span className="text-lg font-medium text-emerald-600">4</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-normal text-gray-800 mb-3">Verified Output</h3>
              <div className="card p-6 !rounded-2xl">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" /><span className="text-sm font-normal text-emerald-600">JUDGE Verified</span></div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>Confidence: <span className="text-emerald-500">94%</span></span>
                    <span>Sources: <span className="text-blue-500">4</span></span>
                    <span className="font-mono">Audit: <span className="text-violet-500">#7f3a9c</span></span>
                  </div>
                </div>
                <p className="text-gray-500 leading-relaxed font-light">
                  Q3 revenue growth was primarily driven by three factors:{" "}
                  <span className="text-cyan-600 font-normal">Enterprise tier expansion (42%)</span>,{" "}
                  <span className="text-blue-600 font-normal">new product line launch (31%)</span>, and{" "}
                  <span className="text-violet-600 font-normal">APAC market penetration (27%)</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
