"use client";
import { FileSearch, PlusCircle, TrendingUp, Target, Phone, Lock, Bot, Paperclip, Send } from "lucide-react";

export default function SalesMock() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4 space-y-4">
        <div className="rounded-2xl p-6" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-sky-400 font-mono uppercase mb-3" style={{ fontSize:10, letterSpacing:"0.2em" }}>KNOWLEDGE_SCOPE</div>
          <div className="text-white/90 mb-2" style={{ fontSize:15 }}>Sales Enablement</div>
          <p className="text-gray-400 font-light leading-relaxed" style={{ fontSize:13 }}>
            Product specs, pricing matrices, competitive intel, CRM history — synthesized and delivered in real-time.
          </p>
        </div>
        <div className="rounded-2xl p-6" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-gray-500 font-mono uppercase mb-3" style={{ fontSize:10, letterSpacing:"0.2em" }}>CONNECTED_SOURCES</div>
          <div className="space-y-2.5">
            {[
              { color:"bg-emerald-500", label:"Product Documentation" },
              { color:"bg-emerald-500", label:"Pricing Engine" },
              { color:"bg-emerald-500", label:"CRM Deal History" },
              { color:"bg-sky-500",     label:"Competitive Intel DB" },
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
        <div className="industry-mock" style={{ boxShadow:"0 40px 120px -30px rgba(14,165,233,0.12)" }}>
          <div className="im-header">
            <div className="im-dot r" /><div className="im-dot y" /><div className="im-dot g" />
            <span className="text-gray-500 font-mono ml-2" style={{ fontSize:9 }}>knowledge_sales — session</span>
            <div className="ml-auto flex items-center gap-2">
              <Lock className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 font-mono" style={{ fontSize:8 }}>SOVEREIGN</span>
            </div>
          </div>

          <div className="p-5 space-y-4" style={{ minHeight:420 }}>
            {/* User message */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-gray-500" style={{ fontSize:9 }}>AK</span>
              </div>
              <div className="px-4 py-3 rounded-xl rounded-tl-sm max-w-[80%]"
                style={{ background:"rgba(0,0,0,0.04)", border:"1px solid rgba(0,0,0,0.06)" }}>
                <p className="text-gray-600 font-light" style={{ fontSize:12 }}>
                  What's new with the Enterprise Shield product? I have a client call in 30 minutes.
                </p>
              </div>
            </div>

            {/* AI response */}
            <div className="flex items-start gap-3 justify-end">
              <div className="px-4 py-4 rounded-xl rounded-tr-sm max-w-[88%]"
                style={{ background:"rgba(14,165,233,0.04)", border:"1px solid rgba(14,165,233,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <FileSearch className="w-3.5 h-3.5 text-sky-500" />
                  <span className="text-sky-600 font-mono" style={{ fontSize:10 }}>4 SOURCES • 340ms</span>
                </div>
                <p className="text-gray-600 font-light mb-4" style={{ fontSize:12 }}>
                  Here's what's changed with <strong className="text-gray-800">Enterprise Shield</strong> since your last briefing:
                </p>
                <div className="p-4 rounded-xl mb-3" style={{ background:"rgba(255,255,255,0.8)", border:"1px solid rgba(0,0,0,0.06)" }}>
                  <div className="space-y-3">
                    {[
                      { Icon: PlusCircle, bg:"bg-emerald-500/[0.1]", ic:"text-emerald-500", lc:"text-emerald-600", label:"New Feature:", text:"Zero-trust data isolation now available for APAC deployments (launched Jan 28)" },
                      { Icon: TrendingUp, bg:"bg-amber-500/[0.1]",   ic:"text-amber-500",   lc:"text-amber-600",   label:"Pricing Update:", text:"Volume tier 3 discount increased from 15% → 22% for annual contracts" },
                      { Icon: Target,     bg:"bg-violet-500/[0.1]",  ic:"text-violet-500",  lc:"text-violet-600",  label:"Competitive Intel:", text:"CompetitorX dropped sovereign deployment — position us as the only sovereign option" },
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
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-amber-600 font-mono uppercase" style={{ fontSize:10, letterSpacing:"0.05em" }}>CALL GUIDANCE</span>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed" style={{ fontSize:11 }}>
                    Lead with APAC zero-trust — Meridian has 3 APAC offices. Mention CompetitorX gap. Avoid Q3 outage topic unless raised.
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  {["Export briefing","View pricing"].map(label => (
                    <button key={label} className="px-3 py-1.5 text-sky-700 rounded-lg font-light transition-colors hover:bg-sky-500/[0.1]"
                      style={{ fontSize:10, background:"rgba(14,165,233,0.06)", border:"1px solid rgba(14,165,233,0.15)" }}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#0ea5e9,#06b6d4)" }}>
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>

          <div className="px-5 py-3 flex items-center gap-3"
            style={{ borderTop:"1px solid rgba(0,0,0,0.06)", background:"#faf8f6" }}>
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl"
              style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
              <Paperclip className="w-3.5 h-3.5 text-gray-400" />
              <span className="flex-1 text-gray-400 font-light text-xs">Ask about products, pricing, competitors...</span>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background:"linear-gradient(135deg,#0ea5e9,#06b6d4)" }}>
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
