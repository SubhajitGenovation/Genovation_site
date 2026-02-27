"use client";
import { FileText, AlertTriangle, AlertCircle, Info, Bookmark, ShieldCheck, Paperclip, Send, Bot } from "lucide-react";

export default function LegalMock() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4 space-y-4">
        <div className="rounded-2xl p-6" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-amber-400 font-mono uppercase mb-3" style={{ fontSize:10, letterSpacing:"0.2em" }}>KNOWLEDGE_SCOPE</div>
          <div className="text-white/90 mb-2" style={{ fontSize:15 }}>Legal &amp; Compliance</div>
          <p className="text-gray-400 font-light leading-relaxed" style={{ fontSize:13 }}>
            Contracts, regulatory filings, compliance frameworks, precedent analysis — with automatic risk scoring across jurisdictions.
          </p>
        </div>
        <div className="rounded-2xl p-6" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-gray-500 font-mono uppercase mb-3" style={{ fontSize:10, letterSpacing:"0.2em" }}>CONNECTED_SOURCES</div>
          <div className="space-y-2.5">
            {[
              { color:"bg-emerald-500", label:"Contract Library (8,200+)" },
              { color:"bg-emerald-500", label:"Regulatory Database" },
              { color:"bg-emerald-500", label:"Compliance Frameworks" },
              { color:"bg-amber-500",   label:"Precedent Case Index" },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${color}`} />
                <span className="text-gray-300 font-light" style={{ fontSize:13 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-8">
        <div className="industry-mock" style={{ boxShadow:"0 40px 120px -30px rgba(245,158,11,0.1)" }}>
          <div className="im-header">
            <div className="im-dot r" /><div className="im-dot y" /><div className="im-dot g" />
            <span className="text-gray-500 font-mono ml-2" style={{ fontSize:9 }}>knowledge_legal — contracts</span>
            <div className="ml-auto flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 font-mono" style={{ fontSize:8 }}>SOVEREIGN</span>
            </div>
          </div>
          <div className="p-5 space-y-4" style={{ minHeight:420 }}>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-gray-500" style={{ fontSize:9 }}>RJ</span>
              </div>
              <div className="px-4 py-3 rounded-xl rounded-tl-sm max-w-[80%]"
                style={{ background:"rgba(0,0,0,0.04)", border:"1px solid rgba(0,0,0,0.06)" }}>
                <p className="text-gray-600 font-light" style={{ fontSize:12 }}>
                  We're renewing the Meridian Bank MSA. Are there any non-standard liability clauses from the original agreement I should flag?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="px-4 py-4 rounded-xl rounded-tr-sm max-w-[88%]"
                style={{ background:"rgba(245,158,11,0.04)", border:"1px solid rgba(245,158,11,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-amber-600 font-mono" style={{ fontSize:10 }}>3 CLAUSES FLAGGED • MSA-2023-0447</span>
                </div>
                <p className="text-gray-600 font-light mb-4" style={{ fontSize:12 }}>
                  Reviewed the original <strong className="text-gray-800">Meridian Bank MSA</strong> against current templates. Found 3 non-standard clauses:
                </p>
                <div className="p-4 rounded-xl mb-3" style={{ background:"rgba(255,255,255,0.8)", border:"1px solid rgba(0,0,0,0.06)" }}>
                  <div className="space-y-3">
                    {[
                      { Icon: AlertTriangle, bg:"bg-red-500/[0.1]",    ic:"text-red-500",    lc:"text-red-600",    text:"§8.3 — Unlimited Liability: Original waives cap on consequential damages. Current template caps at 2x annual fees. High risk." },
                      { Icon: AlertCircle,  bg:"bg-amber-500/[0.1]",  ic:"text-amber-500",  lc:"text-amber-600",  text:"§12.1 — IP Assignment: Broad IP assignment clause covers \"derivative works\" — exceeds standard scope. Recommend narrowing." },
                      { Icon: Info,         bg:"bg-sky-500/[0.1]",    ic:"text-sky-500",    lc:"text-sky-600",    text:"§15.2 — Governing Law: Originally set to Delaware. Client may request NY jurisdiction — 4 similar contracts defaulted to NY in 2024." },
                    ].map(({ Icon, bg, ic, lc, text }) => (
                      <div key={text.slice(0,10)} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-md ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Icon className={`w-3 h-3 ${ic}`} />
                        </div>
                        <p className={`${lc} font-light leading-relaxed`} style={{ fontSize:12 }}>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-xl" style={{ background:"rgba(245,158,11,0.04)", border:"1px solid rgba(245,158,11,0.1)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Bookmark className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-amber-600 font-mono uppercase" style={{ fontSize:10 }}>PRECEDENT MATCH</span>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed" style={{ fontSize:11 }}>
                    Similar liability waiver was renegotiated in <strong className="text-gray-700">Apex Financial MSA (2024)</strong> — settled at 3x cap after 2 rounds. Suggest using as leverage.
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  {["Generate redline","View full MSA"].map(label => (
                    <button key={label} className="px-3 py-1.5 text-amber-700 rounded-lg font-light"
                      style={{ fontSize:10, background:"rgba(245,158,11,0.06)", border:"1px solid rgba(245,158,11,0.15)" }}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#f59e0b,#ea580c)" }}>
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
          <div className="px-5 py-3 flex items-center gap-3"
            style={{ borderTop:"1px solid rgba(0,0,0,0.06)", background:"#faf8f6" }}>
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl"
              style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
              <Paperclip className="w-3.5 h-3.5 text-gray-400" />
              <span className="flex-1 text-gray-400 font-light text-xs">Ask about contracts, regulations, compliance...</span>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background:"linear-gradient(135deg,#f59e0b,#ea580c)" }}>
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
