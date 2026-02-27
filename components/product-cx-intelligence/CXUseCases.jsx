"use client";

import { useState } from "react";
import {
  Sparkles, Landmark, ShoppingCart, Search, Users,
  HeartPulse, Plane, Lock, ShieldCheck, Package,
  FileSearch, FileText, Paperclip, Send, Bot, Radar,
} from "lucide-react";

const TABS = [
  { id: "banking",  Icon: Landmark,     label: "Banking" },
  { id: "shopping", Icon: ShoppingCart,  label: "Shopping" },
  { id: "search",   Icon: Search,        label: "Search" },
  { id: "hr",       Icon: Users,         label: "HR & Employee" },
  { id: "health",   Icon: HeartPulse,    label: "Healthcare" },
  { id: "travel",   Icon: Plane,         label: "Travel" },
];

// ── Shared sub-components ───────────────────────────────────────────────────

function MockFrame({ title, badge, inputPlaceholder, sendBg, children }) {
  return (
    <div className="industry-mock">
      <div className="mock-header">
        <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
        <span className="text-[9px] text-gray-500 font-mono ml-2">{title}</span>
        <div className="ml-auto flex items-center gap-2">{badge}</div>
      </div>
      <div className="p-5 space-y-4" style={{ minHeight: 420 }}>{children}</div>
      <div className="px-5 py-3 border-t flex items-center gap-3" style={{ borderColor: "rgba(0,0,0,0.06)", background: "#faf8f6" }}>
        <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl border"
          style={{ background: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.06)" }}>
          <Paperclip className="w-3.5 h-3.5 text-gray-400" />
          <span className="flex-1 text-xs text-gray-400 font-light">{inputPlaceholder}</span>
          <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: sendBg }}>
            <Send className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

function UserBubble({ initials, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
        <span className="text-[9px] font-semibold text-gray-500">{initials}</span>
      </div>
      <div className="px-4 py-3 rounded-xl rounded-tl-sm border max-w-[80%]"
        style={{ background: "rgba(0,0,0,0.04)", borderColor: "rgba(0,0,0,0.06)" }}>
        <p className="text-[12px] text-gray-600 font-light">{children}</p>
      </div>
    </div>
  );
}

function BotAvatar({ gradient }) {
  return (
    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: gradient }}>
      <Bot className="w-3.5 h-3.5 text-white" />
    </div>
  );
}

// ── Tab Panels ──────────────────────────────────────────────────────────────

function BankingPanel() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4 space-y-4">
        <div className="card-static p-6">
          <div className="text-[10px] font-mono text-amber-600 tracking-[0.2em] uppercase mb-3">USE_CASE</div>
          <div className="text-[15px] font-normal text-gray-800 mb-2">Secure Financial Services</div>
          <p className="text-[13px] text-gray-500 font-light leading-relaxed">
            Authenticated account access, balance checks, transaction history, fund transfers — with RBAC and complete audit trails.
          </p>
        </div>
        <div className="card-static p-6">
          <div className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase mb-3">CONNECTED_APIS</div>
          <div className="space-y-2.5">
            {["Core Banking API", "Identity & MFA Service", "Transaction Engine"].map((api) => (
              <div key={api} className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-[13px] text-gray-600 font-light">{api}</span>
              </div>
            ))}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-[13px] text-gray-600 font-light">Fraud Detection</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8">
        <MockFrame
          title="banking_assistant — session"
          badge={<><Lock className="w-3 h-3 text-emerald-600" /><span className="text-[8px] text-emerald-600 font-mono">E2EE</span></>}
          inputPlaceholder="Transfer $500 to savings..."
          sendBg="linear-gradient(135deg,#f59e0b,#ea580c)"
        >
          <UserBubble initials="JM">Show me my checking account balance and recent transactions.</UserBubble>
          <div className="flex items-start gap-3 justify-end">
            <div className="px-4 py-4 rounded-xl rounded-tr-sm border max-w-[88%]"
              style={{ background: "rgba(245,158,11,0.04)", borderColor: "rgba(245,158,11,0.12)" }}>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[10px] text-emerald-600 font-mono">IDENTITY_VERIFIED • MFA_PASSED</span>
              </div>
              <div className="p-4 rounded-xl border mb-3" style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider">CHECKING ••4827</span>
                  <span className="text-[10px] text-emerald-600 px-2 py-0.5 rounded font-mono" style={{ background: "rgba(16,185,129,0.08)" }}>Active</span>
                </div>
                <div className="text-2xl font-light text-gray-800 mb-4">$24,580.43</div>
                <div className="text-[10px] font-mono text-gray-400 tracking-wider mb-2">RECENT</div>
                <div className="space-y-2">
                  {[["Amazon.com", "-$142.99", "text-red-500"], ["Direct Deposit", "+$4,250.00", "text-emerald-600"], ["Whole Foods", "-$87.52", "text-red-500"]].map(([name, amt, color]) => (
                    <div key={name} className="flex justify-between text-[11px]">
                      <span className="text-gray-600 font-light">{name}</span>
                      <span className={`${color} font-mono`}>{amt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-[10px] text-amber-700 rounded-lg border font-light" style={{ background: "rgba(245,158,11,0.06)", borderColor: "rgba(245,158,11,0.15)" }}>Transfer funds</button>
                <button className="px-3 py-1.5 text-[10px] text-amber-700 rounded-lg border font-light" style={{ background: "rgba(245,158,11,0.06)", borderColor: "rgba(245,158,11,0.15)" }}>View statements</button>
              </div>
            </div>
            <BotAvatar gradient="linear-gradient(135deg,#f59e0b,#ea580c)" />
          </div>
        </MockFrame>
      </div>
    </div>
  );
}

function ShoppingPanel() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4">
        <div className="card-static p-6">
          <div className="text-[10px] font-mono text-violet-600 tracking-[0.2em] uppercase mb-3">USE_CASE</div>
          <div className="text-[15px] font-normal text-gray-800 mb-2">Shopping Assistant</div>
          <p className="text-[13px] text-gray-500 font-light leading-relaxed">Product discovery, inventory checks, pricing, cart management — connected to your entire catalog in real-time.</p>
        </div>
      </div>
      <div className="lg:col-span-8">
        <MockFrame
          title="shopping_assistant"
          badge={<span className="text-[8px] text-violet-600 font-mono">Live Catalog</span>}
          inputPlaceholder="Compare the Salomon and HOKA..."
          sendBg="linear-gradient(135deg,#8b5cf6,#7c3aed)"
        >
          <UserBubble initials="SK">Running shoes for trail running, budget $150</UserBubble>
          <div className="flex items-start gap-3 justify-end">
            <div className="px-4 py-4 rounded-xl rounded-tr-sm border max-w-[88%]"
              style={{ background: "rgba(139,92,246,0.04)", borderColor: "rgba(139,92,246,0.12)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-[10px] text-violet-600 font-mono">3 MATCHES • REAL-TIME STOCK</span>
              </div>
              <div className="space-y-2.5 mb-3">
                {[
                  { letter: "S", bg: "rgba(59,130,246,0.15)", tc: "#2563eb", name: "Salomon Speedcross 6", price: "$139.99", stock: "In Stock", sc: "text-emerald-600", sb: "rgba(16,185,129,0.08)", rating: "4.8★" },
                  { letter: "H", bg: "rgba(16,185,129,0.15)", tc: "#059669", name: "HOKA Speedgoat 5",    price: "$149.95", stock: "3 Left",   sc: "text-amber-600",  sb: "rgba(245,158,11,0.08)", rating: "4.7★" },
                  { letter: "N", bg: "rgba(249,115,22,0.15)", tc: "#ea580c", name: "Nike Wildhorse 8",    price: "$129.99", stock: "In Stock", sc: "text-emerald-600", sb: "rgba(16,185,129,0.08)", rating: "4.5★" },
                ].map(({ letter, bg, tc, name, price, stock, sc, sb, rating }) => (
                  <div key={name} className="p-3 rounded-xl border flex items-center gap-3" style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(139,92,246,0.12)" }}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
                      style={{ background: bg, color: tc }}>{letter}</div>
                    <div className="flex-1">
                      <div className="text-[12px] text-gray-800 font-light">{name}</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] font-medium text-gray-800">{price}</span>
                        <span className={`text-[9px] ${sc} px-1.5 py-0.5 rounded`} style={{ background: sb }}>{stock}</span>
                        <span className="text-[9px] text-amber-600">{rating}</span>
                      </div>
                    </div>
                    <button className="px-2.5 py-1.5 text-[9px] text-violet-700 rounded-lg border"
                      style={{ background: "rgba(139,92,246,0.08)", borderColor: "rgba(139,92,246,0.15)" }}>Add</button>
                  </div>
                ))}
              </div>
            </div>
            <BotAvatar gradient="linear-gradient(135deg,#8b5cf6,#7c3aed)" />
          </div>
        </MockFrame>
      </div>
    </div>
  );
}

function SearchPanel() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4">
        <div className="card-static p-6">
          <div className="text-[10px] font-mono text-cyan-600 tracking-[0.2em] uppercase mb-3">USE_CASE</div>
          <div className="text-[15px] font-normal text-gray-800 mb-2">Conversational Search</div>
          <p className="text-[13px] text-gray-500 font-light leading-relaxed">Natural language queries over knowledge base, documents, catalogs — with citations and deep filtering.</p>
        </div>
      </div>
      <div className="lg:col-span-8">
        <MockFrame
          title="knowledge_search"
          badge={<span className="text-[8px] text-cyan-600 font-mono">12.4M docs</span>}
          inputPlaceholder="Ask anything..."
          sendBg="linear-gradient(135deg,#06b6d4,#3b82f6)"
        >
          <UserBubble initials="AR">What&apos;s our return policy for electronics with a corporate discount?</UserBubble>
          <div className="flex items-start gap-3 justify-end">
            <div className="px-4 py-4 rounded-xl rounded-tr-sm border max-w-[88%]"
              style={{ background: "rgba(6,182,212,0.04)", borderColor: "rgba(6,182,212,0.12)" }}>
              <div className="flex items-center gap-2 mb-3">
                <FileSearch className="w-3.5 h-3.5 text-cyan-500" />
                <span className="text-[10px] text-cyan-600 font-mono">3 SOURCES • 0.4s</span>
              </div>
              <p className="text-[12px] text-gray-600 font-light mb-4">
                Corporate discount electronics have a <strong className="text-gray-800">30-day return window</strong> (vs standard 60-day):
              </p>
              <div className="space-y-2.5">
                {[
                  { ref: "return-policy-v4.2.pdf — §3.4",    body: "Items under corporate discount (CD-*) must be returned within 30 days. Original packaging required." },
                  { ref: "corporate-guidelines.pdf — §7.1", body: "Exception: Laptops/tablets have 14-day window with mandatory data wipe verification." },
                ].map(({ ref: r, body }) => (
                  <div key={r} className="p-3 rounded-xl border" style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(0,0,0,0.06)" }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <FileText className="w-3 h-3 text-cyan-500" />
                      <span className="text-[10px] text-cyan-600 font-mono">{r}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 font-light">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <BotAvatar gradient="linear-gradient(135deg,#06b6d4,#3b82f6)" />
          </div>
        </MockFrame>
      </div>
    </div>
  );
}

function HRPanel() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4">
        <div className="card-static p-6">
          <div className="text-[10px] font-mono text-emerald-600 tracking-[0.2em] uppercase mb-3">USE_CASE</div>
          <div className="text-[15px] font-normal text-gray-800 mb-2">HR &amp; Employee Portal</div>
          <p className="text-[13px] text-gray-500 font-light leading-relaxed">PTO requests, benefits, payroll queries, onboarding — all through natural conversation.</p>
        </div>
      </div>
      <div className="lg:col-span-8">
        <MockFrame
          title="hr_assistant"
          badge={<><ShieldCheck className="w-3 h-3 text-emerald-600" /><span className="text-[8px] text-emerald-600 font-mono">SSO</span></>}
          inputPlaceholder="Type a message..."
          sendBg="linear-gradient(135deg,#10b981,#14b8a6)"
        >
          <UserBubble initials="LP">Request PTO for March 10-14. How many days left?</UserBubble>
          <div className="flex items-start gap-3 justify-end">
            <div className="px-4 py-4 rounded-xl rounded-tr-sm border max-w-[88%]"
              style={{ background: "rgba(16,185,129,0.04)", borderColor: "rgba(16,185,129,0.12)" }}>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[10px] text-emerald-600 font-mono">EMPLOYEE_VERIFIED</span>
              </div>
              <p className="text-[12px] text-gray-600 font-light mb-3">Hi Lisa! Here&apos;s your PTO overview:</p>
              <div className="p-4 rounded-xl border mb-3" style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="grid grid-cols-3 gap-3 text-center mb-3">
                  <div><div className="text-xl font-light text-emerald-600">12</div><div className="text-[10px] text-gray-400">Remaining</div></div>
                  <div><div className="text-xl font-light text-blue-600">8</div><div className="text-[10px] text-gray-400">Used</div></div>
                  <div><div className="text-xl font-light text-gray-500">20</div><div className="text-[10px] text-gray-400">Total</div></div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "60%", background: "linear-gradient(to right,#34d399,#10b981)" }} />
                </div>
              </div>
              <div className="p-4 rounded-xl border" style={{ background: "rgba(16,185,129,0.04)", borderColor: "rgba(16,185,129,0.1)" }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-medium text-gray-800">PTO: Mar 10–14</span>
                  <span className="text-[10px] text-amber-600 px-2 py-0.5 rounded font-mono" style={{ background: "rgba(245,158,11,0.08)" }}>5 days</span>
                </div>
                <p className="text-[11px] text-gray-500 font-light mb-3">No conflicts. Manager: David Chen.</p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-[11px] text-white rounded-lg font-light" style={{ background: "linear-gradient(to right,#10b981,#14b8a6)" }}>Submit</button>
                  <button className="px-4 py-2 text-[11px] text-gray-500 rounded-lg border font-light" style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(0,0,0,0.06)" }}>Edit</button>
                </div>
              </div>
            </div>
            <BotAvatar gradient="linear-gradient(135deg,#10b981,#14b8a6)" />
          </div>
        </MockFrame>
      </div>
    </div>
  );
}

function HealthPanel() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4">
        <div className="card-static p-6">
          <div className="text-[10px] font-mono text-red-500 tracking-[0.2em] uppercase mb-3">USE_CASE</div>
          <div className="text-[15px] font-normal text-gray-800 mb-2">Patient Engagement</div>
          <p className="text-[13px] text-gray-500 font-light leading-relaxed">Appointments, medication, symptom triage, lab results — HIPAA-compliant with full PHI governance.</p>
        </div>
      </div>
      <div className="lg:col-span-8">
        <MockFrame
          title="care_navigator"
          badge={<><ShieldCheck className="w-3 h-3 text-emerald-600" /><span className="text-[8px] text-emerald-600 font-mono">HIPAA</span></>}
          inputPlaceholder="Book Wednesday slot..."
          sendBg="linear-gradient(135deg,#f87171,#fb7185)"
        >
          <UserBubble initials="MR">Schedule follow-up with Dr. Patel and check my blood work.</UserBubble>
          <div className="flex items-start gap-3 justify-end">
            <div className="px-4 py-4 rounded-xl rounded-tr-sm border max-w-[88%]"
              style={{ background: "rgba(239,68,68,0.04)", borderColor: "rgba(248,113,113,0.12)" }}>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[10px] text-emerald-600 font-mono">PATIENT_VERIFIED • PHI_ENCRYPTED</span>
              </div>
              <div className="p-4 rounded-xl border mb-3" style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="text-[10px] font-mono text-gray-400 tracking-wider mb-2">LAB_RESULTS</div>
                <div className="space-y-2">
                  {[
                    { name: "HbA1c",       val: "5.8%",   status: "Normal",     sc: "emerald" },
                    { name: "Cholesterol", val: "215",    status: "Borderline", sc: "amber" },
                    { name: "BP",          val: "128/82", status: "Normal",     sc: "emerald" },
                  ].map(({ name, val, status, sc }) => (
                    <div key={name} className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-600">{name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] font-medium text-gray-800">{val}</span>
                        <span className={`text-[9px] text-${sc}-600 px-1.5 py-0.5 rounded`}
                          style={{ background: sc === "emerald" ? "rgba(16,185,129,0.08)" : "rgba(245,158,11,0.08)" }}>{status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl border" style={{ background: "rgba(239,68,68,0.04)", borderColor: "rgba(248,113,113,0.1)" }}>
                <div className="text-[10px] font-mono text-red-500 tracking-wider mb-2">DR. PATEL SLOTS</div>
                <div className="space-y-1.5">
                  {["Mon, Feb 10 — 2:00 PM", "Wed, Feb 12 — 10:30 AM", "Fri, Feb 14 — 3:15 PM"].map((slot) => (
                    <button key={slot} className="w-full text-left px-3 py-2 text-[11px] text-gray-700 rounded-lg border font-light transition-all"
                      style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(0,0,0,0.06)" }}>{slot}</button>
                  ))}
                </div>
              </div>
            </div>
            <BotAvatar gradient="linear-gradient(135deg,#f87171,#fb7185)" />
          </div>
        </MockFrame>
      </div>
    </div>
  );
}

function TravelPanel() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4">
        <div className="card-static p-6">
          <div className="text-[10px] font-mono text-blue-600 tracking-[0.2em] uppercase mb-3">USE_CASE</div>
          <div className="text-[15px] font-normal text-gray-800 mb-2">Travel &amp; Booking</div>
          <p className="text-[13px] text-gray-500 font-light leading-relaxed">Flights, hotels, itineraries, loyalty points, disruption handling — real-time GDS and airline API connections.</p>
        </div>
      </div>
      <div className="lg:col-span-8">
        <MockFrame
          title="travel_concierge"
          badge={<span className="text-[8px] text-blue-600 font-mono">Live Pricing</span>}
          inputPlaceholder="Book the United flight..."
          sendBg="linear-gradient(135deg,#3b82f6,#6366f1)"
        >
          <UserBubble initials="DK">Find flights SFO to Tokyo, March 20-28, business class. I have 85k miles on United.</UserBubble>
          <div className="flex items-start gap-3 justify-end">
            <div className="px-4 py-4 rounded-xl rounded-tr-sm border max-w-[88%]"
              style={{ background: "rgba(59,130,246,0.04)", borderColor: "rgba(59,130,246,0.12)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Radar className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-[10px] text-blue-600 font-mono">GDS_SEARCHED • 42 FLIGHTS • MILES CHECKED</span>
              </div>
              <p className="text-[12px] text-gray-600 font-light mb-4">You can use miles! Top options:</p>
              <div className="space-y-2.5 mb-3">
                <div className="p-3 rounded-xl border" style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(59,130,246,0.12)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded flex items-center justify-center text-[8px] font-bold text-blue-600" style={{ background: "rgba(59,130,246,0.1)" }}>UA</div>
                      <span className="text-[12px] font-medium text-gray-800">United UA 837</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 px-2 py-0.5 rounded font-mono" style={{ background: "rgba(16,185,129,0.08)" }}>Miles Eligible</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <div><span className="text-gray-800 font-medium">SFO 11:25</span><span className="text-gray-400 mx-2">→</span><span className="text-gray-800 font-medium">NRT 3:40+1</span></div>
                    <div className="text-right"><div className="text-gray-800 font-medium">75,000 mi + $86</div><div className="text-gray-400 text-[10px]">or $4,280</div></div>
                  </div>
                </div>
                <div className="p-3 rounded-xl border" style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded flex items-center justify-center text-[8px] font-bold text-red-600" style={{ background: "rgba(239,68,68,0.1)" }}>JL</div>
                      <span className="text-[12px] font-medium text-gray-800">JAL JL 001</span>
                    </div>
                    <span className="text-[10px] text-blue-600 px-2 py-0.5 rounded font-mono" style={{ background: "rgba(59,130,246,0.08)" }}>Direct</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <div><span className="text-gray-800 font-medium">SFO 1:15</span><span className="text-gray-400 mx-2">→</span><span className="text-gray-800 font-medium">HND 5:30+1</span></div>
                    <div className="text-right"><div className="text-gray-800 font-medium">$3,950</div><div className="text-gray-400 text-[10px]">Nonstop • 11h 15m</div></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-[10px] text-blue-700 rounded-lg border font-light" style={{ background: "rgba(59,130,246,0.06)", borderColor: "rgba(59,130,246,0.15)" }}>Book with miles</button>
                <button className="px-3 py-1.5 text-[10px] text-blue-700 rounded-lg border font-light" style={{ background: "rgba(59,130,246,0.06)", borderColor: "rgba(59,130,246,0.15)" }}>Find hotels</button>
              </div>
            </div>
            <BotAvatar gradient="linear-gradient(135deg,#3b82f6,#6366f1)" />
          </div>
        </MockFrame>
      </div>
    </div>
  );
}

const PANELS = { banking: BankingPanel, shopping: ShoppingPanel, search: SearchPanel, hr: HRPanel, health: HealthPanel, travel: TravelPanel };

// ── Main component ──────────────────────────────────────────────────────────

export default function CXUseCases() {
  const [active, setActive] = useState("banking");
  const Panel = PANELS[active];

  return (
    <section id="usecases" className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 600, height: 500, background: "rgba(245,158,11,0.05)", top: "5%", left: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8 r-up"
            style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.15)" }}>
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">Infinite Possibilities</span>
          </div>
          <h2 className="display-section r-up" style={{ fontSize: "clamp(2.5rem,8vw,8rem)" }}>
            One Platform.<br /><span className="text-gradient">Every Experience.</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Connect to any API. Execute any code. Build intelligent customer experiences for every industry.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 r-up" id="ucTabs">
          {TABS.map(({ id, Icon, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="uc-tab"
              style={active === id ? {
                background: "linear-gradient(135deg,#f59e0b,#ea580c)",
                color: "#fff",
                borderColor: "transparent",
                boxShadow: "0 8px 30px -8px rgba(245,158,11,0.35)",
              } : {}}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <Panel />
      </div>
    </section>
  );
}
