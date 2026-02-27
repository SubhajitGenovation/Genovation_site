"use client";
import { XCircle, CheckCircle, Search, MessageSquare, Sparkles, AlertTriangle, Check,
         Building2, Cloud, Database, Cpu, Brain, ArrowRight } from "lucide-react";

export default function ComparisonsSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden" id="comparisons">
      <div className="absolute inset-0 mesh-bg" style={{ opacity:0.15 }} />
      <div className="orb" style={{ width:500, height:400, background:"rgba(14,165,233,0.04)", top:"5%", right:"10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="display-section mb-8 r-up" style={{ fontSize:"clamp(2.5rem,5vw,4.5rem)" }}>
            How This Is<br /><span className="text-gradient">Different</span>
          </h2>
          <p className="text-gray-500 font-light leading-relaxed r-up">
            This is not "AI on top of documents." It is governed intelligence over enterprise knowledge.
          </p>
        </div>

        <div className="space-y-8">
          {/* Comparison 1 — Search vs Reasoned */}
          <div className="grid md:grid-cols-2 gap-6 r-up">
            <div className="compare-bad p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="font-mono text-red-400 uppercase" style={{ fontSize:10, letterSpacing:"0.1em" }}>Traditional Tools</span>
              </div>
              <div className="p-3 rounded-xl mb-3" style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500">data retention policy GDPR</span>
                </div>
              </div>
              <div className="text-gray-400 mb-2" style={{ fontSize:9 }}>12,847 results (0.34 seconds)</div>
              <div className="space-y-1.5">
                {[
                  { file:"GDPR-Policy-v2.pdf",              snippet:"...the data retention requirements under GDPR Article 17 specify that personal data..." },
                  { file:"Data-Governance-Manual.docx",     snippet:"...policy framework for data management including retention schedules..." },
                ].map(({ file, snippet }) => (
                  <div key={file} className="p-2.5 rounded-lg" style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.04)" }}>
                    <div className="text-blue-500 truncate mb-1" style={{ fontSize:10 }}>{file}</div>
                    <p className="text-gray-400 line-clamp-2" style={{ fontSize:9 }}>{snippet}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-3 rounded-lg" style={{ background:"rgba(239,68,68,0.04)", border:"1px solid rgba(239,68,68,0.1)" }}>
                <p className="text-red-500 font-light" style={{ fontSize:10 }}>
                  ⚠ User must read multiple documents to find the answer
                </p>
              </div>
            </div>

            <div className="compare-good p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-emerald-500 uppercase" style={{ fontSize:10, letterSpacing:"0.1em" }}>Knowledge Intelligence</span>
              </div>
              <div className="p-3 rounded-xl mb-3" style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-sky-500" />
                  <span className="text-xs text-gray-600">What is our GDPR data retention policy?</span>
                </div>
              </div>
              <div className="p-4 rounded-xl" style={{ background:"rgba(16,185,129,0.04)", border:"1px solid rgba(16,185,129,0.12)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span className="font-mono text-emerald-500" style={{ fontSize:10 }}>REASONED_ANSWER</span>
                  <span className="text-gray-400 font-mono ml-auto" style={{ fontSize:9 }}>1.2s</span>
                </div>
                <p className="text-xs text-gray-600 font-light leading-relaxed mb-3">
                  Under GDPR, personal data must be retained for{" "}
                  <span className="font-medium text-gray-800">3 years</span> maximum after last interaction.
                  Consent records require <span className="font-medium text-gray-800">7 years</span> retention per Article 17.
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-sky-600 rounded font-mono"
                    style={{ fontSize:9, background:"rgba(14,165,233,0.06)" }}>GDPR-Policy-v4.2 §4.2.1</span>
                  <span className="px-2 py-0.5 text-gray-400 rounded font-mono"
                    style={{ fontSize:9, background:"rgba(0,0,0,0.02)" }}>98% confidence</span>
                </div>
              </div>
              <div className="mt-3 p-3 rounded-lg" style={{ background:"rgba(16,185,129,0.04)", border:"1px solid rgba(16,185,129,0.1)" }}>
                <p className="text-emerald-600 font-light" style={{ fontSize:10 }}>
                  ⚡ Direct answer with source citation — no document hunting
                </p>
              </div>
            </div>
          </div>

          {/* Comparison 2 — Cloud vs Sovereign */}
          <div className="grid md:grid-cols-2 gap-6 r-up">
            <div className="compare-bad p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="font-mono text-red-400 uppercase" style={{ fontSize:10, letterSpacing:"0.1em" }}>Cloud-Dependent</span>
              </div>
              <div className="p-4 rounded-xl" style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-gray-100 flex items-center justify-center mb-2">
                      <Building2 className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="text-gray-400" style={{ fontSize:9 }}>Your Data</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-px" style={{ background:"rgba(239,68,68,0.5)" }} />
                    <ArrowRight className="w-4 h-4 text-red-400" />
                    <div className="w-6 h-px" style={{ background:"rgba(239,68,68,0.5)" }} />
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-2"
                      style={{ background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.2)" }}>
                      <Cloud className="w-6 h-6 text-red-400" />
                    </div>
                    <span className="text-red-400" style={{ fontSize:9 }}>3rd Party Cloud</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-gray-400 font-light" style={{ fontSize:10 }}>
                  {["Data leaves your network","External API dependencies","Compliance risk exposure"].map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-red-400" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="compare-good p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-emerald-500 uppercase" style={{ fontSize:10, letterSpacing:"0.1em" }}>Sovereign Deployment</span>
              </div>
              <div className="p-4 rounded-xl" style={{ border:"2px dashed rgba(16,185,129,0.3)", background:"rgba(16,185,129,0.02)" }}>
                <div className="text-emerald-600 font-mono text-center mb-3" style={{ fontSize:9 }}>YOUR_INFRASTRUCTURE</div>
                <div className="flex items-center justify-around mb-3">
                  {[
                    { Icon: Database, bg:"bg-gray-100",              color:"text-gray-500", label:"Vector DB" },
                    { Icon: Cpu,      bg:"bg-sky-500/[0.1]",         color:"text-sky-500",  label:"RAG Engine" },
                    { Icon: Brain,    bg:"bg-violet-500/[0.1]",      color:"text-violet-500",label:"LLM" },
                  ].map(({ Icon, bg, color, label }) => (
                    <div key={label} className="text-center">
                      <div className={`w-10 h-10 mx-auto rounded-lg ${bg} flex items-center justify-center mb-1`}>
                        <Icon className={`w-5 h-5 ${color}`} />
                      </div>
                      <span className="text-gray-400" style={{ fontSize:8 }}>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1 text-gray-500 font-light" style={{ fontSize:10 }}>
                  {["On-premise / Private cloud / Air-gapped","Zero external API calls","Full data sovereignty"].map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-emerald-400" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
