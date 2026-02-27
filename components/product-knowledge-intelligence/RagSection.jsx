"use client";
import { Cpu, MessageSquare, Binary, Search, Layers, Sparkles, ShieldCheck } from "lucide-react";

export default function RagSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden section-cyan" id="rag">
      <div className="absolute inset-0 mesh-bg" style={{ opacity:0.15 }} />
      <div className="orb" style={{ width:500, height:400, background:"rgba(6,182,212,0.04)", top:"10%", right:"15%" }} />
      <div className="orb" style={{ width:400, height:350, background:"rgba(14,165,233,0.05)", bottom:"10%", left:"10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background:"rgba(6,182,212,0.1)" }}>
              <Cpu className="w-4 h-4 text-cyan-500" />
            </div>
            <span className="text-gray-400 font-light uppercase" style={{ fontSize:11, letterSpacing:"0.2em" }}>Core Technology</span>
          </div>
          <h2 className="display-section mb-8 r-up" style={{ fontSize:"clamp(2.5rem,5vw,4.5rem)" }}>
            Retrieval-Augmented<br /><span className="text-gradient-sky">Generation</span>
          </h2>
          <p className="text-gray-500 font-light leading-relaxed r-up">
            At its core, Enterprise Knowledge Intelligence is a governed RAG system — retrieving relevant content from your document corpus and using it to generate accurate, grounded responses with full traceability.
          </p>
        </div>

        {/* Pipeline */}
        <div className="r-up">
          <div className="dark-terminal">
            <div className="dark-terminal-header">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(255,95,87,0.6)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(254,188,46,0.6)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background:"rgba(40,200,64,0.6)" }} />
                </div>
                <div className="flex items-center gap-2 pl-3" style={{ borderLeft:"1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-5 h-5 rounded bg-cyan-500 flex items-center justify-center">
                    <Cpu className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs font-mono text-gray-400">rag_pipeline</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" />
                <span className="font-mono text-emerald-400" style={{ fontSize:10 }}>ACTIVE</span>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-5 gap-3 mb-6">
                {[
                  { Icon: MessageSquare, bg:"bg-gray-600",          step:"Step 1", title:"User Query",   desc:"Natural language question about policies or SOPs",                border:"border-white/[0.08]",           label:"", bg2:"bg-white/[0.03]" },
                  { Icon: Binary,        bg:"bg-cyan-500",           step:"Step 2", title:"Embed Query",  desc:"Convert to vector embedding for semantic search",                border:"border-cyan-500/[0.15]",        label:"text-cyan-400", bg2:"bg-cyan-500/[0.08]" },
                  { Icon: Search,        bg:"bg-sky-500",            step:"Step 3", title:"Retrieve",     desc:"Find most relevant chunks from vector database",                 border:"border-sky-500/[0.15]",         label:"text-sky-400",  bg2:"bg-sky-500/[0.08]" },
                  { Icon: Layers,        bg:"bg-violet-500",         step:"Step 4", title:"Augment",      desc:"Combine query + context into grounded prompt",                   border:"border-violet-500/[0.15]",      label:"text-violet-400",bg2:"bg-violet-500/[0.08]" },
                  { Icon: Sparkles,      bg:"bg-emerald-500",        step:"Step 5", title:"Generate",     desc:"LLM produces answer grounded in retrieved sources",              border:"border-emerald-500/[0.15]",     label:"text-emerald-400",bg2:"bg-emerald-500/[0.08]" },
                ].map(({ Icon, bg, step, title, desc, border, label, bg2 }) => (
                  <div key={step} className={`p-4 rounded-xl ${bg2} border ${border}`}>
                    <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className={`font-mono uppercase mb-1 ${label || "text-gray-500"}`} style={{ fontSize:9, letterSpacing:"0.1em" }}>{step}</div>
                    <div className="text-xs font-medium text-white mb-1">{title}</div>
                    <p className="text-gray-500 font-light leading-relaxed" style={{ fontSize:10 }}>{desc}</p>
                  </div>
                ))}
              </div>

              {/* Live demo */}
              <div className="p-5 rounded-xl" style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" />
                  <span className="text-gray-400 font-mono" style={{ fontSize:10 }}>LIVE_RAG_PIPELINE</span>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <div className="text-gray-500 font-mono uppercase mb-2" style={{ fontSize:9, letterSpacing:"0.1em" }}>Query</div>
                    <div className="p-3 rounded-lg mb-2" style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.05)" }}>
                      <p className="text-gray-300 font-light" style={{ fontSize:11 }}>"What is our data retention policy for EU customers?"</p>
                    </div>
                    <div className="p-3 rounded-lg" style={{ background:"rgba(6,182,212,0.06)", border:"1px solid rgba(6,182,212,0.1)" }}>
                      <div className="text-cyan-400 font-mono mb-1" style={{ fontSize:8 }}>QUERY_EMBEDDING</div>
                      <code className="text-gray-500 font-mono" style={{ fontSize:9 }}>[0.023, -0.847, 0.156, 0.923, ...]</code>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-mono uppercase mb-2" style={{ fontSize:9, letterSpacing:"0.1em" }}>Retrieved Chunks (Top 4)</div>
                    <div className="space-y-1.5">
                      {[
                        { score:"0.94", label:"GDPR-Policy.pdf § 4.2.1",       bg:"bg-sky-500/[0.1]", border:"border-sky-500/[0.2]",   sc:"text-sky-400" },
                        { score:"0.87", label:"Data-Retention-SOP.docx § 2.1", bg:"bg-white/[0.03]",  border:"border-white/[0.05]",   sc:"text-gray-400" },
                        { score:"0.81", label:"EU-Compliance-Guide.pdf § 7",   bg:"bg-white/[0.03]",  border:"border-white/[0.05]",   sc:"text-gray-500" },
                        { score:"0.76", label:"Privacy-Policy-Internal.docx",  bg:"bg-white/[0.03]",  border:"border-white/[0.05]",   sc:"text-gray-600" },
                      ].map(({ score, label, bg, border, sc }) => (
                        <div key={score} className={`flex items-center gap-2 p-2 rounded-lg ${bg} border ${border}`}>
                          <span className={`font-mono font-bold ${sc}`} style={{ fontSize:10 }}>{score}</span>
                          <span className="text-gray-300 truncate" style={{ fontSize:10 }}>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-mono uppercase mb-2" style={{ fontSize:9, letterSpacing:"0.1em" }}>Generated Response</div>
                    <div className="p-3 rounded-lg" style={{ background:"rgba(16,185,129,0.08)", border:"1px solid rgba(16,185,129,0.15)" }}>
                      <p className="text-gray-200 font-light leading-relaxed" style={{ fontSize:11 }}>
                        Per <span className="text-emerald-400">[GDPR-Policy.pdf § 4.2.1]</span>, EU customer data must be retained for a maximum of{" "}
                        <strong className="text-white">3 years</strong> after last interaction...
                      </p>
                      <div className="flex items-center gap-2 mt-3 pt-2" style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}>
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-mono" style={{ fontSize:9 }}>GROUNDED • CITED • VERIFIED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { Icon:"dna",  color:"violet", title:"Semantic Boundary Chunking",  desc:"Chunks split on subject/object transitions, not arbitrary token counts. Each chunk metatagged with full context — dramatically reducing hallucination." },
            { Icon:"link", color:"sky",    title:"Citation-First Architecture", desc:"Every generated answer links back to source chunks. No hallucination — if it's not in your documents, it's not in the response." },
            { Icon:"shield",color:"emerald",title:"Governed Generation",        desc:"JUDGE framework validates outputs before delivery. Role-based access controls which documents can be retrieved per user." },
          ].map(({ color, title, desc }) => (
            <div key={title} className="card-static p-6 r-up">
              <div className={`w-9 h-9 rounded-lg bg-${color}-500/[0.1] flex items-center justify-center mb-4`}>
                <span className={`text-${color}-500 text-lg`}>✦</span>
              </div>
              <div className="text-sm font-medium text-gray-800 mb-2">{title}</div>
              <p className="text-xs text-gray-500 font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
