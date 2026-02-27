"use client";
import { MessageSquare, Database, Search, GitCompare, Check, Sparkles, Folder, XCircle, Clock } from "lucide-react";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-32 md:py-48 relative overflow-hidden section-sky">
      <div className="absolute inset-0 mesh-bg" style={{ opacity:0.15 }} />
      <div className="orb" style={{ width:600, height:500, background:"rgba(14,165,233,0.04)", bottom:"5%", right:"10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background:"rgba(14,165,233,0.1)" }}>
              <Database className="w-4 h-4 text-sky-500" />
            </div>
            <span className="text-gray-400 font-light uppercase" style={{ fontSize:11, letterSpacing:"0.2em" }}>RAG Capabilities</span>
          </div>
          <h2 className="display-section mb-8 r-up" style={{ fontSize:"clamp(2.5rem,5vw,4.5rem)" }}>
            Beyond Basic<br /><span className="text-gradient-sky">Retrieval</span>
          </h2>
          <p className="text-gray-500 font-light leading-relaxed r-up">
            Our RAG system doesn't just retrieve and generate — it analyzes your entire knowledge corpus
            to find gaps, conflicts, and inconsistencies.
          </p>
        </div>

        {/* CAP 1 — Semantic Search */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2 r-left">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background:"rgba(14,165,233,0.1)" }}>
                <MessageSquare className="w-4 h-4 text-sky-500" />
              </div>
              <span className="text-sky-600 font-mono" style={{ fontSize:10, letterSpacing:"0.1em" }}>CAPABILITY_01</span>
            </div>
            <h3 className="display-section mb-4 r-left" style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)" }}>
              Semantic Search &amp;<br /><span className="text-gradient-sky">Generation</span>
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed r-left">
              Vector similarity search finds the most relevant chunks from your knowledge base, then the LLM
              generates precise answers grounded in those retrieved sources — with citations.
            </p>
            <div className="space-y-2 r-left">
              {["Precise answers with explicit citations","Context-aware from approved content","Nothing speculative — fully traceable"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-light text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 r-right">
            <div className="terminal" style={{ borderRadius:24 }}>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[9px] font-semibold text-gray-500">JD</div>
                  <span className="text-gray-400" style={{ fontSize:10 }}>Just now</span>
                </div>
                <div className="p-3 rounded-xl mb-4" style={{ background:"rgba(0,0,0,0.03)" }}>
                  <p className="text-xs text-gray-600 font-light">What are the approval thresholds for vendor contracts?</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-sky-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1 p-4 rounded-xl" style={{ background:"rgba(14,165,233,0.04)", border:"1px solid rgba(14,165,233,0.12)" }}>
                    <p className="text-xs text-gray-600 font-light mb-3">
                      Per <span className="text-sky-600 underline decoration-dotted">Procurement Policy v3.1</span>:
                    </p>
                    <div className="space-y-1.5 text-xs text-gray-600 font-light mb-3">
                      {["<$10K: Department Manager","$10K-$50K: Director + Finance",">$50K: VP + Legal Review"].map(line => (
                        <div key={line} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                          {line}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full text-emerald-600 font-mono"
                        style={{ fontSize:9, background:"rgba(16,185,129,0.06)", border:"1px solid rgba(16,185,129,0.12)" }}>
                        98% confidence
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-gray-400 font-mono"
                        style={{ fontSize:9, background:"rgba(0,0,0,0.02)" }}>
                        3 sources
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CAP 2 — Unified Vector Store */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-7 order-2 lg:order-1 r-left">
            <div className="terminal" style={{ borderRadius:24 }}>
              <div className="terminal-header">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(255,95,87,0.6)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(254,188,46,0.6)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(40,200,64,0.6)" }} />
                  </div>
                  <span className="text-xs font-mono text-gray-500 pl-3" style={{ borderLeft:"1px solid rgba(0,0,0,0.06)" }}>knowledge_base_overview</span>
                </div>
                <span className="text-emerald-500 font-mono" style={{ fontSize:10 }}>Last sync: 2 min ago</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { val:"2,847", label:"Documents", color:"text-gray-800" },
                    { val:"12",    label:"Repositories",color:"text-violet-500" },
                    { val:"99.2%", label:"Indexed",    color:"text-emerald-500" },
                  ].map(({ val, label, color }) => (
                    <div key={label} className="p-3 rounded-xl text-center"
                      style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
                      <div className={`text-2xl font-light ${color}`}>{val}</div>
                      <div className="text-gray-400 font-mono" style={{ fontSize:10 }}>{label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { Icon: Folder, color:"text-sky-500",    bg:"bg-sky-500/[0.1]",    name:"Compliance & Legal", sub:"847 documents • SharePoint",  bar:"w-full bg-sky-400" },
                    { Icon: Folder, color:"text-violet-500", bg:"bg-violet-500/[0.1]", name:"HR Policies",       sub:"523 documents • Confluence",   bar:"w-full bg-violet-400" },
                    { Icon: Folder, color:"text-emerald-500",bg:"bg-emerald-500/[0.1]",name:"Operations SOPs",   sub:"1,204 documents • Google Drive",bar:"w-[95%] bg-emerald-400" },
                  ].map(({ Icon, color, bg, name, sub, bar }) => (
                    <div key={name} className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background:"rgba(0,0,0,0.02)" }}>
                      <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 ${color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-700">{name}</div>
                        <div className="text-gray-400 font-light" style={{ fontSize:10 }}>{sub}</div>
                      </div>
                      <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ background:"rgba(0,0,0,0.04)" }}>
                        <div className={`h-full rounded-full ${bar}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-2 r-right">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background:"rgba(139,92,246,0.1)" }}>
                <Database className="w-4 h-4 text-violet-500" />
              </div>
              <span className="text-violet-600 font-mono" style={{ fontSize:10, letterSpacing:"0.1em" }}>CAPABILITY_02</span>
            </div>
            <h3 className="display-section mb-4 r-right" style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)" }}>
              Unified<br /><span className="text-gradient-violet">Vector Store</span>
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed r-right">
              All your documents — across repositories, formats, and departments — chunked, embedded, and indexed in a single searchable vector database.
            </p>
            <div className="space-y-2 r-right">
              {["Connect multiple repositories & formats","Cross-department unification","Preserves original ownership & structure"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-light text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CAP 3 — Gap Detection */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2 r-left">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background:"rgba(16,185,129,0.1)" }}>
                <Search className="w-4 h-4 text-emerald-500" />
              </div>
              <span className="text-emerald-600 font-mono" style={{ fontSize:10, letterSpacing:"0.1em" }}>CAPABILITY_03</span>
            </div>
            <h3 className="display-section mb-4 r-left" style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)" }}>
              SOP Discovery &amp;<br /><span className="text-gradient-emerald">Gap Detection</span>
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed r-left">
              Automatically identify missing SOPs, outdated documents, and conflicting rules — turning
              reactive maintenance into proactive governance.
            </p>
            <div className="space-y-2 r-left">
              {["Missing SOP identification","Outdated document detection","Proactive governance alerts"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-light text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 r-right">
            <div className="terminal" style={{ borderRadius:24 }}>
              <div className="terminal-header">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(255,95,87,0.6)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(254,188,46,0.6)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(40,200,64,0.6)" }} />
                  </div>
                  <span className="text-xs font-mono text-gray-500 pl-3" style={{ borderLeft:"1px solid rgba(0,0,0,0.06)" }}>gap_analysis_report</span>
                </div>
                <span className="px-2 py-0.5 text-amber-600 font-mono rounded-full"
                  style={{ fontSize:9, background:"rgba(245,158,11,0.08)", border:"1px solid rgba(245,158,11,0.15)" }}>
                  7 issues found
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="p-4 rounded-xl" style={{ background:"rgba(239,68,68,0.04)", border:"1px solid rgba(239,68,68,0.12)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-medium text-red-500">Missing SOP</span>
                    <span className="ml-auto text-red-400 font-mono px-2 py-0.5 rounded" style={{ fontSize:9, background:"rgba(239,68,68,0.08)" }}>Critical</span>
                  </div>
                  <p className="text-gray-500 font-light" style={{ fontSize:11 }}>No documented procedure for "Third-Party Data Breach Response"</p>
                </div>
                <div className="p-4 rounded-xl" style={{ background:"rgba(245,158,11,0.04)", border:"1px solid rgba(245,158,11,0.12)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-medium text-amber-600">Outdated</span>
                    <span className="ml-auto text-amber-600 font-mono px-2 py-0.5 rounded" style={{ fontSize:9, background:"rgba(245,158,11,0.08)" }}>High</span>
                  </div>
                  <p className="text-gray-500 font-light" style={{ fontSize:11 }}>IT-Security-Policy.pdf last updated 847 days ago</p>
                </div>
                <div className="p-4 rounded-xl" style={{ background:"rgba(245,158,11,0.04)", border:"1px solid rgba(245,158,11,0.12)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <GitCompare className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-medium text-amber-600">Conflict</span>
                    <span className="ml-auto text-amber-600 font-mono px-2 py-0.5 rounded" style={{ fontSize:9, background:"rgba(245,158,11,0.08)" }}>Medium</span>
                  </div>
                  <p className="text-gray-500 font-light" style={{ fontSize:11 }}>Expense Policy vs. Travel Policy: Different approval limits</p>
                </div>
                <button className="w-full p-3 rounded-xl text-white text-xs font-light flex items-center justify-center gap-2 transition-colors"
                  style={{ background:"#10b981" }}>
                  Generate Full Audit Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CAP 4 — Conflict Analysis */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 r-left">
            <div className="terminal" style={{ borderRadius:24 }}>
              <div className="terminal-header">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(255,95,87,0.6)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(254,188,46,0.6)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(40,200,64,0.6)" }} />
                  </div>
                  <div className="flex items-center gap-2 pl-3" style={{ borderLeft:"1px solid rgba(0,0,0,0.06)" }}>
                    <GitCompare className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-mono text-gray-500">policy_conflict_detected</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { Icon: GitCompare, iconColor:"text-sky-500", iconBg:"bg-sky-500/[0.1]",    name:"GDPR Policy",    section:"Section 4.2.1", textColor:"text-sky-600",  quoteBg:"rgba(14,165,233,0.06)",  quoteBorder:"rgba(14,165,233,0.12)", quote:"\"Personal data retention: 3 years max\"" },
                    { Icon: GitCompare, iconColor:"text-violet-500",iconBg:"bg-violet-500/[0.1]",name:"HR Data Policy", section:"Section 2.1.4", textColor:"text-red-500",  quoteBg:"rgba(239,68,68,0.06)",   quoteBorder:"rgba(239,68,68,0.12)",  quote:"\"Employee records: 5 years retention\"" },
                  ].map(({ Icon, iconColor, iconBg, name, section, textColor, quoteBg, quoteBorder, quote }) => (
                    <div key={name} className="p-4 rounded-xl"
                      style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-6 h-6 rounded ${iconBg} flex items-center justify-center`}>
                          <Icon className={`w-3 h-3 ${iconColor}`} />
                        </div>
                        <span className="text-gray-700 font-medium" style={{ fontSize:10 }}>{name}</span>
                      </div>
                      <p className="text-gray-400 mb-2" style={{ fontSize:10 }}>{section}</p>
                      <div className="p-2 rounded-lg" style={{ background:quoteBg, border:`1px solid ${quoteBorder}` }}>
                        <p className={`${textColor} font-mono`} style={{ fontSize:10 }}>{quote}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl" style={{ background:"rgba(245,158,11,0.06)", border:"1px solid rgba(245,158,11,0.15)" }}>
                  <div className="flex items-start gap-3">
                    <GitCompare className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-medium text-amber-700 mb-1">Recommendation</div>
                      <p className="text-amber-600/80 font-light" style={{ fontSize:11 }}>
                        HR Policy should be updated to align with GDPR requirements. Employee PII falls under GDPR scope.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-2 r-right">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background:"rgba(245,158,11,0.1)" }}>
                <GitCompare className="w-4 h-4 text-amber-500" />
              </div>
              <span className="text-amber-600 font-mono" style={{ fontSize:10, letterSpacing:"0.1em" }}>CAPABILITY_04</span>
            </div>
            <h3 className="display-section mb-4 r-right" style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)" }}>
              Conflict &amp;<br /><span className="text-gradient-amber">Consistency Analysis</span>
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed r-right">
              Detect contradictions like conflicting approval thresholds, regional vs. global policy conflicts, and rule violations — surfaced clearly.
            </p>
            <div className="space-y-2 r-right">
              {["Cross-policy conflict detection","Regional vs. global alignment","Actionable recommendations"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-light text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
