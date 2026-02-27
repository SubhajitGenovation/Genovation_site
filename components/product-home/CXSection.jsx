"use client";

import {
  ShieldAlert, MessageCircle, Key, PlayCircle, Check,
  ShieldCheck, TrendingUp, Lock, Paperclip, Send,
  ShoppingBag, ArrowDownLeft, Utensils, Bot, FileText, Shield, CheckCircle,
} from "lucide-react";

export default function CXSection() {
  return (
    <section id="cx" className="py-32 md:py-48 relative overflow-hidden section-amber">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-amber-500/[0.05]" style={{ bottom: "5%", left: "10%" }} />
      <div className="orb w-[400px] h-[350px] bg-orange-500/[0.04]" style={{ top: "10%", right: "20%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 pb-10 border-b border-black/[0.06]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 r-up">
              <span className="text-[11px] text-amber-600 font-mono tracking-[0.2em]">04</span>
              <div className="w-8 h-px bg-amber-500/40" />
              <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">CX Intelligence</span>
            </div>
            <h2 className="display-section text-5xl md:text-7xl r-up">
              Secure <span className="text-gradient-amber">Conversational</span><br />Intelligence
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2 r-up">
            <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">Primary Buyers</span>
            <div className="flex flex-wrap gap-2">
              {["Product Leaders", "CX Teams", "Digital"].map((b) => (
                <span key={b} className="px-3 py-1.5 text-[11px] text-gray-500 rounded-full bg-white/60 border border-black/[0.06]">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Terminal */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 order-2 lg:order-1 r-left">
            <div className="terminal">
              <div className="terminal-header">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex items-center gap-2 pl-3 border-l border-black/[0.06]">
                    <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)" }}>
                      <MessageCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">secure_assist</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-mono">
                  <Lock className="w-3 h-3" /><span>E2EE</span>
                </div>
              </div>

              {/* Chat */}
              <div className="p-5 space-y-4" style={{ minHeight: "400px" }}>
                <div className="text-center">
                  <span className="px-3 py-1 text-[10px] text-gray-400 font-mono bg-black/[0.02] border border-black/[0.04] rounded-full">session: 7f3a9b2c</span>
                </div>

                {/* User Message */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-[9px] font-semibold text-gray-500">JM</span>
                  </div>
                  <div className="px-4 py-3 rounded-xl rounded-tl-sm bg-black/[0.03] max-w-[80%]">
                    <p className="text-xs text-gray-600 font-light">Hi, I'd like to check my account balance and recent transactions.</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="px-4 py-4 rounded-xl rounded-tr-sm bg-amber-500/[0.05] border border-amber-500/[0.12] max-w-[85%]">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[10px] text-emerald-600 font-mono">IDENTITY_VERIFIED • MFA_PASSED</span>
                    </div>
                    <p className="text-xs text-gray-600 font-light mb-4">Good afternoon, James! Here's your account summary:</p>

                    {/* Account Card */}
                    <div className="p-4 rounded-xl bg-white/80 border border-black/[0.06] mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-gray-400 font-mono">Primary Checking ••4521</span>
                        <span className="text-[9px] text-gray-400 font-mono">Updated now</span>
                      </div>
                      <div className="text-2xl font-light text-gray-800 mb-1">$24,580<span className="text-lg">.43</span></div>
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-600">
                        <TrendingUp className="w-3 h-3" /><span className="font-light">+$2,340.00 this month</span>
                      </div>
                    </div>

                    {/* Transactions */}
                    <div className="text-[9px] font-mono text-gray-400 tracking-wider mb-2">RECENT</div>
                    <div className="space-y-0 mb-3">
                      {[
                        { icon: <ShoppingBag className="w-2.5 h-2.5 text-blue-500" />, bg: "bg-blue-500/[0.1]", label: "Amazon", amount: "-$142.99", amtClass: "text-gray-800" },
                        { icon: <ArrowDownLeft className="w-2.5 h-2.5 text-emerald-500" />, bg: "bg-emerald-500/[0.1]", label: "Direct Deposit", amount: "+$4,250.00", amtClass: "text-emerald-600" },
                        { icon: <Utensils className="w-2.5 h-2.5 text-amber-500" />, bg: "bg-amber-500/[0.1]", label: "Whole Foods", amount: "-$87.52", amtClass: "text-gray-800" },
                      ].map((t, i) => (
                        <div key={i} className={`flex items-center justify-between py-2 ${i < 2 ? "border-b border-black/[0.04]" : ""}`}>
                          <div className="flex items-center gap-2">
                            <div className={`w-5 h-5 rounded ${t.bg} flex items-center justify-center`}>{t.icon}</div>
                            <span className="text-[11px] text-gray-600 font-light">{t.label}</span>
                          </div>
                          <span className={`text-[11px] font-mono ${t.amtClass}`}>{t.amount}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button className="px-3 py-1.5 text-[10px] text-amber-700 bg-amber-500/[0.06] rounded-lg border border-amber-500/[0.15] font-light">Transfer funds</button>
                      <button className="px-3 py-1.5 text-[10px] text-amber-700 bg-amber-500/[0.06] rounded-lg border border-amber-500/[0.15] font-light">View statements</button>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)" }}>
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Security Indicators */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1 text-[9px] text-gray-400 font-mono"><FileText className="w-3 h-3" />Audit logged</div>
                  <div className="flex items-center gap-1 text-[9px] text-gray-400 font-mono"><Shield className="w-3 h-3" />RBAC enforced</div>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-600 font-mono"><CheckCircle className="w-3 h-3" />Compliant</div>
                </div>
              </div>

              {/* Input */}
              <div className="px-5 py-4 border-t border-black/[0.04]" style={{ background: "#faf8f6" }}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/[0.02] border border-black/[0.06]">
                  <Paperclip className="w-4 h-4 text-gray-400" />
                  <span className="flex-1 text-xs text-gray-400 font-light">Type a message...</span>
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)" }}>
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="card-static p-6 r-right">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-red-500/[0.08] flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-xs font-mono text-gray-400">THE_CHALLENGE</span>
              </div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Customer-facing AI often introduces security and governance risks — especially when connected to enterprise data and actions. Traditional chatbots lack proper controls.
              </p>
            </div>

            <div className="r-right" style={{ animationDelay: "0.1s" }}>
              <div className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase mb-4">CORE_CAPABILITIES</div>
              <div className="space-y-3">
                {[
                  { icon: <MessageCircle className="w-4 h-4 text-amber-500" />, title: "Conversational AI Interface", desc: "Natural language interactions with enterprise data" },
                  { icon: <Key className="w-4 h-4 text-amber-500" />, title: "Role-Based Access Control", desc: "Secure data retrieval based on user permissions" },
                  { icon: <PlayCircle className="w-4 h-4 text-amber-500" />, title: "Action Execution", desc: "Perform transactions with complete audit trails" },
                ].map((item, i) => (
                  <div key={i} className="card-static p-4 hover:border-amber-500/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/[0.08] flex items-center justify-center flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-sm font-normal text-gray-800 mb-0.5">{item.title}</div>
                        <div className="text-xs text-gray-400 font-light">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-amber-500/[0.04] border border-amber-500/[0.12] r-right" style={{ animationDelay: "0.2s" }}>
              <div className="text-[10px] font-mono text-amber-600 tracking-[0.2em] uppercase mb-4">WHY_IT_MATTERS</div>
              <div className="space-y-3">
                {["Improves CX without increasing risk", "Enables automation with accountability", "Maintains governance across interactions"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-light text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
