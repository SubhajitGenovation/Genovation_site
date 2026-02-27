"use client";
import { BookOpen, MessageSquare, Sparkles, ShieldCheck, Search, FileText, GitCompare, Lock } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden section-sky" id="solution">
      <div className="absolute inset-0 mesh-bg" style={{ opacity:0.15 }} />
      <div className="orb" style={{ width:700, height:500, background:"rgba(14,165,233,0.06)", top:"10%", left:"20%" }} />
      <div className="orb" style={{ width:400, height:350, background:"rgba(6,182,212,0.04)", bottom:"10%", right:"15%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <span className="text-sky-600 font-mono" style={{ fontSize:11, letterSpacing:"0.2em" }}>RAG IN ACTION</span>
            <div className="w-8 h-px" style={{ background:"rgba(14,165,233,0.4)" }} />
          </div>
          <h2 className="display-section mb-8 r-up" style={{ fontSize:"clamp(2.5rem,5vw,4.5rem)" }}>
            Retrieve. Augment.<br /><span className="text-gradient-sky">Generate.</span>
          </h2>
          <p className="text-gray-500 font-light leading-relaxed r-up">
            See how your query flows through the RAG pipeline — from semantic search to grounded response
            with full source attribution.
          </p>
        </div>

        {/* Full product mockup */}
        <div className="r-scale">
          <div className="terminal" style={{ borderRadius:24 }}>
            {/* Header */}
            <div className="terminal-header">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(255,95,87,0.6)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(254,188,46,0.6)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(40,200,64,0.6)" }} />
                  </div>
                  <div className="flex items-center gap-2 pl-3" style={{ borderLeft:"1px solid rgba(0,0,0,0.06)" }}>
                    <div className="w-5 h-5 rounded bg-sky-500 flex items-center justify-center">
                      <BookOpen className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">knowledge_intelligence</span>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-1">
                  {["Query","Knowledge Base","Gap Analysis","Conflicts","Audit Log"].map((tab, i) => (
                    <span key={tab} className={`px-2.5 py-1 text-[10px] rounded-md font-mono ${i === 0 ? "text-sky-600 bg-sky-500/[0.08]" : "text-gray-400"}`}>
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{ background:"rgba(16,185,129,0.08)", border:"1px solid rgba(16,185,129,0.15)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" />
                <span className="font-mono text-emerald-500" style={{ fontSize:10 }}>2,847 Documents</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="hidden md:block w-56 border-r p-4"
                style={{ borderColor:"rgba(0,0,0,0.04)", background:"rgba(0,0,0,0.015)" }}>
                <div className="text-gray-400 font-mono uppercase mb-3" style={{ fontSize:9, letterSpacing:"0.1em" }}>
                  RECENT_QUERIES
                </div>
                <div className="space-y-1 mb-6">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg"
                    style={{ background:"rgba(14,165,233,0.06)", border:"1px solid rgba(14,165,233,0.12)" }}>
                    <MessageSquare className="w-3.5 h-3.5 text-sky-500" />
                    <span className="text-gray-700 truncate" style={{ fontSize:10 }}>GDPR data retention policy?</span>
                  </div>
                  {["Vendor approval thresholds","HR onboarding SOP","Q3 audit checklist"].map(q => (
                    <div key={q} className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-black/[0.02]">
                      <MessageSquare className="w-3.5 h-3.5 text-gray-300" />
                      <span className="text-gray-400 truncate" style={{ fontSize:10 }}>{q}</span>
                    </div>
                  ))}
                </div>

                <div className="text-gray-400 font-mono uppercase mb-3" style={{ fontSize:9, letterSpacing:"0.1em" }}>
                  KNOWLEDGE_STATS
                </div>
                <div className="space-y-2">
                  {[
                    { label:"Documents", val:"2,847", color:"text-gray-700" },
                    { label:"Chunks",    val:"94,210",color:"text-sky-500" },
                    { label:"Gaps Found",val:"7",     color:"text-amber-500" },
                    { label:"Conflicts", val:"3",     color:"text-red-500" },
                  ].map(({ label, val, color }) => (
                    <div key={label} className="flex items-center justify-between p-2 rounded-lg"
                      style={{ background:"rgba(0,0,0,0.02)" }}>
                      <span className="text-gray-400 font-light" style={{ fontSize:10 }}>{label}</span>
                      <span className={`font-mono font-medium ${color}`} style={{ fontSize:11 }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-6">
                {/* Query result */}
                <div className="mb-6 p-4 rounded-2xl"
                  style={{ background:"rgba(14,165,233,0.03)", border:"1px solid rgba(14,165,233,0.08)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="w-4 h-4 text-sky-500" />
                    <span className="text-sm text-gray-600 font-light">
                      "What is our GDPR data retention policy for EU customers?"
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 rounded text-emerald-600 font-mono"
                      style={{ fontSize:9, background:"rgba(16,185,129,0.06)", border:"1px solid rgba(16,185,129,0.12)" }}>
                      98% confidence
                    </span>
                    <span className="px-2 py-0.5 rounded text-sky-600 font-mono"
                      style={{ fontSize:9, background:"rgba(14,165,233,0.06)", border:"1px solid rgba(14,165,233,0.12)" }}>
                      4 sources
                    </span>
                    <span className="px-2 py-0.5 rounded text-gray-400 font-mono"
                      style={{ fontSize:9, background:"rgba(0,0,0,0.02)" }}>
                      1.2s
                    </span>
                  </div>
                  <div className="p-4 rounded-xl mb-4"
                    style={{ background:"rgba(16,185,129,0.04)", border:"1px solid rgba(16,185,129,0.1)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-emerald-500" />
                      <span className="font-mono text-emerald-500" style={{ fontSize:10 }}>GENERATED_ANSWER</span>
                    </div>
                    <p className="text-sm text-gray-700 font-light leading-relaxed mb-3">
                      Per <span className="text-sky-600 underline decoration-dotted cursor-pointer">GDPR-Policy-v4.2 §4.2.1</span>,
                      EU customer personal data must be retained for a maximum of{" "}
                      <strong className="text-gray-900">3 years</strong> after last interaction.
                      Consent records require <strong className="text-gray-900">7 years</strong> per Article 17.
                    </p>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="font-mono text-emerald-600" style={{ fontSize:9 }}>GROUNDED • CITED • AUDIT-READY</span>
                    </div>
                  </div>

                  {/* Citation chips */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label:"GDPR-Policy-v4.2 §4.2.1", color:"text-sky-600",    bg:"rgba(14,165,233,0.06)",  border:"rgba(14,165,233,0.15)" },
                      { label:"Data-Retention-SOP §2.1",  color:"text-violet-600", bg:"rgba(139,92,246,0.06)", border:"rgba(139,92,246,0.15)" },
                      { label:"EU-Compliance-Guide §7",   color:"text-gray-500",   bg:"rgba(0,0,0,0.02)",      border:"rgba(0,0,0,0.06)" },
                    ].map(({ label, color, bg, border }) => (
                      <span key={label} className={`px-3 py-1.5 rounded-full font-mono ${color}`}
                        style={{ fontSize:9, background:bg, border:`1px solid ${border}` }}>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gap + conflict row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl" style={{ background:"rgba(245,158,11,0.04)", border:"1px solid rgba(245,158,11,0.12)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-4 h-4 text-amber-500" />
                      <span className="font-mono text-amber-600" style={{ fontSize:10 }}>GAP_DETECTED</span>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed" style={{ fontSize:11 }}>
                      No documented SOP for <strong className="text-gray-800">Third-Party Data Breach Response</strong>.
                      Critical gap for GDPR Article 33 compliance.
                    </p>
                    <button className="mt-3 px-3 py-1.5 rounded-lg text-amber-700 font-light w-full text-center"
                      style={{ fontSize:10, background:"rgba(245,158,11,0.06)", border:"1px solid rgba(245,158,11,0.15)" }}>
                      Generate SOP Template
                    </button>
                  </div>
                  <div className="p-4 rounded-xl" style={{ background:"rgba(239,68,68,0.04)", border:"1px solid rgba(239,68,68,0.12)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <GitCompare className="w-4 h-4 text-red-400" />
                      <span className="font-mono text-red-500" style={{ fontSize:10 }}>CONFLICT_DETECTED</span>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed" style={{ fontSize:11 }}>
                      <strong className="text-gray-800">GDPR Policy §4.2.1</strong> says 3 years.{" "}
                      <strong className="text-gray-800">HR Data Policy §2.1.4</strong> says 5 years for employee records.
                    </p>
                    <button className="mt-3 px-3 py-1.5 rounded-lg text-red-700 font-light w-full text-center"
                      style={{ fontSize:10, background:"rgba(239,68,68,0.06)", border:"1px solid rgba(239,68,68,0.15)" }}>
                      View Conflict Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer input */}
            <div className="px-6 py-4 flex items-center gap-3"
              style={{ borderTop:"1px solid rgba(0,0,0,0.06)", background:"rgba(248,247,245,0.6)" }}>
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
                <Lock className="w-3.5 h-3.5 text-gray-300" />
                <span className="flex-1 text-gray-400 font-light text-sm">
                  Ask anything about your enterprise knowledge base...
                </span>
                <button className="px-4 py-1.5 rounded-lg text-white font-light text-xs hero-cta-primary">
                  Ask
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
