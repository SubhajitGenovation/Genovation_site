"use client";

import {
  AlertTriangle, MessageSquare, Link, Search,
  Check, BookOpen, Sparkles, ShieldCheck,
  FileText, AlertCircle, Brain,
} from "lucide-react";

export default function KnowledgeSection() {
  return (
    <section id="knowledge" className="py-32 md:py-48 relative overflow-hidden section-sky">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-sky-500/[0.05]" style={{ top: "5%", left: "10%" }} />
      <div className="orb w-[400px] h-[350px] bg-cyan-500/[0.04]" style={{ bottom: "10%", right: "15%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 pb-10 border-b border-black/[0.06]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 r-up">
              <span className="text-[11px] text-sky-600 font-mono tracking-[0.2em]">01</span>
              <div className="w-8 h-px bg-sky-500/40" />
              <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">Knowledge Intelligence</span>
            </div>
            <h2 className="display-section text-5xl md:text-7xl r-up">
              A Single Source of<br /><span className="text-gradient-sky">Truth</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2 r-up">
            <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">Primary Buyers</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-[11px] text-gray-500 rounded-full bg-white/60 border border-black/[0.06]">Compliance Heads</span>
              <span className="px-3 py-1.5 text-[11px] text-gray-500 rounded-full bg-white/60 border border-black/[0.06]">Legal & Risk</span>
              <span className="px-3 py-1.5 text-[11px] text-gray-500 rounded-full bg-white/60 border border-black/[0.06]">CIOs</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Features */}
          <div className="lg:col-span-5 space-y-6">
            {/* Challenge */}
            <div className="card-static p-6 r-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-red-500/[0.08] flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-xs font-mono text-gray-400">THE_CHALLENGE</span>
              </div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Enterprises accumulate thousands of policies, SOPs, and governance documents — fragmented across systems. Over time, this knowledge becomes inconsistent, outdated, and impossible to trust.
              </p>
            </div>

            {/* Capabilities */}
            <div className="r-left" style={{ animationDelay: "0.1s" }}>
              <div className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase mb-4">CORE_CAPABILITIES</div>
              <div className="space-y-3">
                {[
                  { icon: <MessageSquare className="w-4 h-4 text-sky-500" />, title: "Natural-language Q&A", desc: "Query across all policies and SOPs in plain English" },
                  { icon: <Link className="w-4 h-4 text-sky-500" />, title: "Source-linked Citations", desc: "Every answer includes traceable references" },
                  { icon: <Search className="w-4 h-4 text-sky-500" />, title: "Gap Detection", desc: "Identify conflicting or outdated policies automatically" },
                ].map((item, i) => (
                  <div key={i} className="card-static p-4 hover:border-sky-500/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/[0.08] flex items-center justify-center flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-sm font-normal text-gray-800 mb-0.5">{item.title}</div>
                        <div className="text-xs text-gray-400 font-light">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why It Matters */}
            <div className="rounded-2xl p-6 bg-sky-500/[0.04] border border-sky-500/[0.12] r-left" style={{ animationDelay: "0.2s" }}>
              <div className="text-[10px] font-mono text-sky-600 tracking-[0.2em] uppercase mb-4">WHY_IT_MATTERS</div>
              <div className="space-y-3">
                {["Improves audit and compliance readiness", "Reduces operational and regulatory risk", "Eliminates dependence on tribal knowledge"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-light text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Terminal Demo */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 r-right">
            <div className="terminal">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex items-center gap-2 pl-3 border-l border-black/[0.06]">
                    <div className="w-5 h-5 rounded bg-sky-500 flex items-center justify-center">
                      <BookOpen className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">knowledge_intelligence</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" />
                  <span className="text-[10px] font-mono text-emerald-500">LIVE</span>
                </div>
              </div>

              {/* Search */}
              <div className="px-5 py-4 border-b border-black/[0.04]">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/[0.02] border border-black/[0.06]">
                  <Search className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500 font-light" id="knowledgeQuery">What is our GDPR data retention policy?</span>
                  <kbd className="ml-auto px-2 py-0.5 text-[9px] text-gray-400 bg-black/[0.03] rounded border border-black/[0.06] font-mono">↵</kbd>
                </div>
              </div>

              <div className="p-5">
                {/* Processing */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Brain className="w-4 h-4 text-sky-500 animate-pulse" />
                    <span>Analyzing 2,847 documents</span>
                  </div>
                  <div className="flex-1 h-1.5 bg-black/[0.03] rounded-full overflow-hidden">
                    <div className="h-full w-full rounded-full pipe-flow" />
                  </div>
                </div>

                {/* Answer */}
                <div className="p-5 rounded-xl bg-sky-500/[0.04] border border-sky-500/[0.12] mb-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-sky-600 mb-2">SYNTHESIZED_ANSWER</div>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        According to <span className="text-sky-600 underline decoration-dotted cursor-pointer">GDPR Compliance Policy v4.2</span>, personal data must be retained for a maximum of <span className="font-medium text-gray-800">3 years</span> after the last interaction. Customer consent records must be kept for <span className="font-medium text-gray-800">7 years</span>.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-sky-500/[0.1]">
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-600">
                      <ShieldCheck className="w-3.5 h-3.5" /><span className="font-mono">JUDGE_VERIFIED</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">98% confidence</span>
                    <span className="text-[10px] text-gray-400 font-mono">0.8s</span>
                  </div>
                </div>

                {/* Sources */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-gray-400 tracking-wider">SOURCE_DOCUMENTS</span>
                    <span className="text-[11px] text-sky-600 font-light cursor-pointer hover:underline">View all 4 →</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-black/[0.06] hover:border-sky-500/20 transition-colors cursor-pointer">
                      <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-normal text-gray-800 truncate">GDPR-Compliance-Policy-v4.2.pdf</div>
                        <div className="text-[10px] text-gray-400 font-light">Section 3.2 • Page 12-14</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-emerald-500">98%</div>
                        <div className="text-[9px] text-gray-400">match</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-black/[0.06] hover:border-sky-500/20 transition-colors cursor-pointer">
                      <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-normal text-gray-800 truncate">Data-Retention-SOP-2024.docx</div>
                        <div className="text-[10px] text-gray-400 font-light">Full Document • 24 pages</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-gray-400">84%</div>
                        <div className="text-[9px] text-gray-400">match</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alert */}
                <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/[0.15]">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-amber-700 mb-1">Policy Gap Detected</div>
                      <p className="text-[11px] text-amber-600/80 font-light">
                        HR Data Policy (v2.1) specifies a 5-year retention period, conflicting with GDPR policy. <span className="underline cursor-pointer">Review →</span>
                      </p>
                    </div>
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
