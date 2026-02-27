"use client";
import { Activity, Clock, BookOpen, Paperclip, Send, Bot } from "lucide-react";

export default function OpsMock() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4 space-y-4">
        <div className="rounded-2xl p-6" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-cyan-400 font-mono uppercase mb-3" style={{ fontSize:10, letterSpacing:"0.2em" }}>KNOWLEDGE_SCOPE</div>
          <div className="text-white/90 mb-2" style={{ fontSize:15 }}>Operations Intelligence</div>
          <p className="text-gray-400 font-light leading-relaxed" style={{ fontSize:13 }}>
            Runbooks, incident history, SLA dashboards, vendor SLAs — with automatic root-cause correlation across systems.
          </p>
        </div>
        <div className="rounded-2xl p-6" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-gray-500 font-mono uppercase mb-3" style={{ fontSize:10, letterSpacing:"0.2em" }}>CONNECTED_SOURCES</div>
          <div className="space-y-2.5">
            {[
              { color:"bg-emerald-500", label:"Runbook Library (340+)" },
              { color:"bg-emerald-500", label:"Incident Database" },
              { color:"bg-emerald-500", label:"Monitoring Dashboards" },
              { color:"bg-cyan-500",    label:"Vendor SLA Tracker" },
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
        <div className="industry-mock" style={{ boxShadow:"0 40px 120px -30px rgba(6,182,212,0.1)" }}>
          <div className="im-header">
            <div className="im-dot r" /><div className="im-dot y" /><div className="im-dot g" />
            <span className="text-gray-500 font-mono ml-2" style={{ fontSize:9 }}>knowledge_ops — incidents</span>
            <div className="ml-auto flex items-center gap-2">
              <Activity className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 font-mono" style={{ fontSize:8 }}>LIVE</span>
            </div>
          </div>
          <div className="p-5 space-y-4" style={{ minHeight:420 }}>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-gray-500" style={{ fontSize:9 }}>KP</span>
              </div>
              <div className="px-4 py-3 rounded-xl rounded-tl-sm max-w-[80%]"
                style={{ background:"rgba(0,0,0,0.04)", border:"1px solid rgba(0,0,0,0.06)" }}>
                <p className="text-gray-600 font-light" style={{ fontSize:12 }}>
                  The EU-West payment gateway is showing elevated latency again. What was the root cause last time and what's the runbook?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="px-4 py-4 rounded-xl rounded-tr-sm max-w-[88%]"
                style={{ background:"rgba(6,182,212,0.04)", border:"1px solid rgba(6,182,212,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-3.5 h-3.5 text-cyan-500" />
                  <span className="text-cyan-600 font-mono" style={{ fontSize:10 }}>3 INCIDENTS MATCHED • RUNBOOK FOUND</span>
                </div>
                <p className="text-gray-600 font-light mb-4" style={{ fontSize:12 }}>
                  Found <strong className="text-gray-800">3 prior incidents</strong> matching EU-West payment gateway latency:
                </p>
                <div className="p-4 rounded-xl mb-3" style={{ background:"rgba(255,255,255,0.8)", border:"1px solid rgba(0,0,0,0.06)" }}>
                  <div className="space-y-3">
                    {[
                      { bg:"bg-red-500/[0.1]",    ic:"text-red-500",    lc:"text-red-600",    label:"INC-2025-1847 (Jan 12):", text:"Root cause was connection pool exhaustion on pg-eu-west-03. MTTR: 23 min. Fixed by pool limit increase to 500." },
                      { bg:"bg-amber-500/[0.1]",  ic:"text-amber-500",  lc:"text-amber-600",  label:"INC-2024-9213 (Nov 3):",  text:"DNS resolution delays from CloudFlare edge in Frankfurt. MTTR: 41 min. Vendor-side fix." },
                      { bg:"bg-sky-500/[0.1]",    ic:"text-sky-500",    lc:"text-sky-600",    label:"INC-2024-7801 (Sep 18):", text:"Similar pattern — connection pool. Correlated with traffic spike from batch processing job." },
                    ].map(({ bg, ic, lc, label, text }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-md ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Clock className={`w-3 h-3 ${ic}`} />
                        </div>
                        <p className="text-gray-600 font-light leading-relaxed" style={{ fontSize:12 }}>
                          <span className={`${lc} font-medium`}>{label}</span> {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-xl mb-3" style={{ background:"rgba(6,182,212,0.04)", border:"1px solid rgba(6,182,212,0.1)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                    <span className="text-cyan-600 font-mono uppercase" style={{ fontSize:10 }}>RUNBOOK: RB-PAY-EU-003</span>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed" style={{ fontSize:11 }}>
                    Step 1: Check pg-eu-west pool metrics via Grafana. Step 2: If pool &gt; 80%, scale horizontally. Step 3: If DNS, escalate to vendor with ticket template VND-CF-01.
                  </p>
                </div>
                <div className="p-3 rounded-lg" style={{ background:"rgba(255,255,255,0.8)", border:"1px solid rgba(239,68,68,0.12)" }}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-red-600 font-mono" style={{ fontSize:10 }}>
                      LIVE: pg-eu-west-03 pool at 87% — matches INC-1847 pattern
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  {["Open runbook","Create incident"].map(label => (
                    <button key={label} className="px-3 py-1.5 text-cyan-700 rounded-lg font-light"
                      style={{ fontSize:10, background:"rgba(6,182,212,0.06)", border:"1px solid rgba(6,182,212,0.15)" }}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#06b6d4,#0d9488)" }}>
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
          <div className="px-5 py-3 flex items-center gap-3"
            style={{ borderTop:"1px solid rgba(0,0,0,0.06)", background:"#faf8f6" }}>
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl"
              style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
              <Paperclip className="w-3.5 h-3.5 text-gray-400" />
              <span className="flex-1 text-gray-400 font-light text-xs">Ask about incidents, runbooks, SLAs...</span>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background:"linear-gradient(135deg,#06b6d4,#0d9488)" }}>
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
