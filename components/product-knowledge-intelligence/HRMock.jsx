"use client";
import { Globe, CalendarCheck, ClipboardList, Heart, AlertTriangle, ShieldCheck, Paperclip, Send, Bot } from "lucide-react";

export default function HRMock() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4 space-y-4">
        <div className="rounded-2xl p-6" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-violet-400 font-mono uppercase mb-3" style={{ fontSize:10, letterSpacing:"0.2em" }}>KNOWLEDGE_SCOPE</div>
          <div className="text-white/90 mb-2" style={{ fontSize:15 }}>HR &amp; People Ops</div>
          <p className="text-gray-400 font-light leading-relaxed" style={{ fontSize:13 }}>
            Regional policies, benefits, labor law, org charts — with automatic conflict detection across jurisdictions.
          </p>
        </div>
        <div className="rounded-2xl p-6" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-gray-500 font-mono uppercase mb-3" style={{ fontSize:10, letterSpacing:"0.2em" }}>CONNECTED_SOURCES</div>
          <div className="space-y-2.5">
            {[
              { color:"bg-emerald-500", label:"Global Handbook v3.1" },
              { color:"bg-emerald-500", label:"Regional Addendums (42)" },
              { color:"bg-emerald-500", label:"HRIS Process Guides" },
              { color:"bg-violet-500",  label:"Labor Law Database" },
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
        <div className="industry-mock" style={{ boxShadow:"0 40px 120px -30px rgba(139,92,246,0.1)" }}>
          <div className="im-header">
            <div className="im-dot r" /><div className="im-dot y" /><div className="im-dot g" />
            <span className="text-gray-500 font-mono ml-2" style={{ fontSize:9 }}>knowledge_hr — policies</span>
            <div className="ml-auto flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 font-mono" style={{ fontSize:8 }}>SSO</span>
            </div>
          </div>
          <div className="p-5 space-y-4" style={{ minHeight:420 }}>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-gray-500" style={{ fontSize:9 }}>TM</span>
              </div>
              <div className="px-4 py-3 rounded-xl rounded-tl-sm max-w-[80%]"
                style={{ background:"rgba(0,0,0,0.04)", border:"1px solid rgba(0,0,0,0.06)" }}>
                <p className="text-gray-600 font-light" style={{ fontSize:12 }}>
                  An employee in the Berlin office is requesting parental leave. What's the policy for Germany-based employees?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="px-4 py-4 rounded-xl rounded-tr-sm max-w-[88%]"
                style={{ background:"rgba(139,92,246,0.04)", border:"1px solid rgba(139,92,246,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-3.5 h-3.5 text-violet-500" />
                  <span className="text-violet-600 font-mono" style={{ fontSize:10 }}>REGION: GERMANY • 3 SOURCES</span>
                </div>
                <p className="text-gray-600 font-light mb-4" style={{ fontSize:12 }}>
                  Here's the parental leave policy for <strong className="text-gray-800">Germany-based employees</strong>:
                </p>
                <div className="p-4 rounded-xl mb-3" style={{ background:"rgba(255,255,255,0.8)", border:"1px solid rgba(0,0,0,0.06)" }}>
                  <div className="space-y-3">
                    {[
                      { Icon: CalendarCheck, bg:"bg-violet-500/[0.1]", ic:"text-violet-500", lc:"text-violet-600", label:"Entitlement:", text:"14 weeks statutory maternity + 12 months Elternzeit. Our policy extends an additional 4 weeks paid." },
                      { Icon: ClipboardList, bg:"bg-emerald-500/[0.1]", ic:"text-emerald-500", lc:"text-emerald-600", label:"Process:", text:"Employee must notify HR 7 weeks before. Form DE-PL-2024 required via the HRIS portal." },
                      { Icon: Heart,         bg:"bg-sky-500/[0.1]",     ic:"text-sky-500",     lc:"text-sky-600",     label:"Benefits:", text:"Health insurance continues. Equipment retained. Return-to-work coaching available through EAP." },
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
                <div className="p-4 rounded-xl" style={{ background:"rgba(245,158,11,0.04)", border:"1px solid rgba(245,158,11,0.12)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-amber-600 font-mono uppercase" style={{ fontSize:10, letterSpacing:"0.05em" }}>POLICY CONFLICT DETECTED</span>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed" style={{ fontSize:11 }}>
                    Global handbook <strong className="text-gray-700">(v3.1)</strong> states 8 weeks company-paid,
                    but Germany addendum <strong className="text-gray-700">(v2.4)</strong> states 4 weeks additional. Recommend confirming with Legal.
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  {["Generate form","View full policy"].map(label => (
                    <button key={label} className="px-3 py-1.5 text-violet-700 rounded-lg font-light"
                      style={{ fontSize:10, background:"rgba(139,92,246,0.06)", border:"1px solid rgba(139,92,246,0.15)" }}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#8b5cf6,#a855f7)" }}>
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
          <div className="px-5 py-3 flex items-center gap-3"
            style={{ borderTop:"1px solid rgba(0,0,0,0.06)", background:"#faf8f6" }}>
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl"
              style={{ background:"rgba(0,0,0,0.02)", border:"1px solid rgba(0,0,0,0.06)" }}>
              <Paperclip className="w-3.5 h-3.5 text-gray-400" />
              <span className="flex-1 text-gray-400 font-light text-xs">Ask about policies, benefits, processes...</span>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background:"linear-gradient(135deg,#8b5cf6,#a855f7)" }}>
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
