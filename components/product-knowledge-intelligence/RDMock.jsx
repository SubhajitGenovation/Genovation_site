"use client";
import { FlaskConical, Thermometer, GitCompare, Microscope, AlertTriangle, ShieldCheck, Paperclip, Send, Bot } from "lucide-react";

export default function RDMock() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4 space-y-4">
        <div className="rounded-2xl p-6" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-emerald-400 font-mono uppercase mb-3" style={{ fontSize:10, letterSpacing:"0.2em" }}>KNOWLEDGE_SCOPE</div>
          <div className="text-white/90 mb-2" style={{ fontSize:15 }}>R&amp;D Lab Intelligence</div>
          <p className="text-gray-400 font-light leading-relaxed" style={{ fontSize:13 }}>
            Lab reports, research papers, supplier specs, test data — with automatic discrepancy detection across sources.
          </p>
        </div>
        <div className="rounded-2xl p-6" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-gray-500 font-mono uppercase mb-3" style={{ fontSize:10, letterSpacing:"0.2em" }}>CONNECTED_SOURCES</div>
          <div className="space-y-2.5">
            {[
              { color:"bg-emerald-500", label:"Lab Reports (2,400+)" },
              { color:"bg-emerald-500", label:"Supplier Datasheets" },
              { color:"bg-emerald-500", label:"Internal Research Papers" },
              { color:"bg-sky-500",     label:"Test Protocol Library" },
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
        <div className="industry-mock" style={{ boxShadow:"0 40px 120px -30px rgba(16,185,129,0.1)" }}>
          <div className="im-header">
            <div className="im-dot r" /><div className="im-dot y" /><div className="im-dot g" />
            <span className="text-gray-500 font-mono ml-2" style={{ fontSize:9 }}>knowledge_lab — research</span>
            <div className="ml-auto flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 font-mono" style={{ fontSize:8 }}>SOVEREIGN</span>
            </div>
          </div>
          <div className="p-5 space-y-4" style={{ minHeight:420 }}>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-gray-500" style={{ fontSize:9 }}>DC</span>
              </div>
              <div className="px-4 py-3 rounded-xl rounded-tl-sm max-w-[80%]"
                style={{ background:"rgba(0,0,0,0.04)", border:"1px solid rgba(0,0,0,0.06)" }}>
                <p className="text-gray-600 font-light" style={{ fontSize:12 }}>
                  What were the findings from our Q4 thermal conductivity tests on the new polymer composite? Any conflicts with the supplier spec sheets?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="px-4 py-4 rounded-xl rounded-tr-sm max-w-[88%]"
                style={{ background:"rgba(16,185,129,0.04)", border:"1px solid rgba(16,185,129,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 font-mono" style={{ fontSize:10 }}>5 SOURCES • 1 CONFLICT</span>
                </div>
                <p className="text-gray-600 font-light mb-4" style={{ fontSize:12 }}>
                  Synthesized from <strong className="text-gray-800">3 lab reports and 2 supplier datasheets</strong>:
                </p>
                <div className="p-4 rounded-xl mb-3" style={{ background:"rgba(255,255,255,0.8)", border:"1px solid rgba(0,0,0,0.06)" }}>
                  <div className="space-y-3">
                    {[
                      { Icon: Thermometer, bg:"bg-emerald-500/[0.1]", ic:"text-emerald-500", lc:"text-emerald-600", label:"Measured TC:", text:"0.38 W/m·K across 3 test batches (±0.02). Consistent with internal targets for thermal management layer." },
                      { Icon: Microscope,  bg:"bg-sky-500/[0.1]",     ic:"text-sky-500",     lc:"text-sky-600",     label:"Structural Integrity:", text:"No delamination detected up to 180°C. Passed ISO 22007-2 protocol." },
                      { Icon: GitCompare, bg:"bg-red-500/[0.1]",     ic:"text-red-500",     lc:"text-red-600",     label:"Spec Conflict:", text:"Supplier datasheet claims 0.45 W/m·K — 18% higher than measured. Flag for renegotiation." },
                    ].map(({ Icon, bg, ic, lc, label, text }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-md ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Icon className={`w-3 h-3 ${ic}`} />
                        </div>
                        <p className="text-gray-600 font-light leading-relaxed" style={{ fontSize:12 }}>
                          <span className={`${lc} font-medium`}>{label}</span> {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-xl" style={{ background:"rgba(245,158,11,0.04)", border:"1px solid rgba(245,158,11,0.1)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-amber-600 font-mono uppercase" style={{ fontSize:10 }}>RECOMMENDATION</span>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed" style={{ fontSize:11 }}>
                    Initiate supplier data audit. Cross-reference with batch QC-2024-112 through QC-2024-118. Escalate discrepancy to procurement.
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  {["View lab reports","Flag supplier"].map(label => (
                    <button key={label} className="px-3 py-1.5 text-emerald-700 rounded-lg font-light"
                      style={{ fontSize:10, background:"rgba(16,185,129,0.06)", border:"1px solid rgba(16,185,129,0.15)" }}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#10b981,#059669)" }}>
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
          <div className="px-5 py-3 flex items-center gap-3"
            style={{ borderTop:"1px solid rgba(0,0,0,0.06)", background:"#faf8f6" }}>
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl"
              style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
              <Paperclip className="w-3.5 h-3.5 text-gray-400" />
              <span className="flex-1 text-gray-400 font-light text-xs">Ask about lab results, specs, protocols...</span>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background:"linear-gradient(135deg,#10b981,#059669)" }}>
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
