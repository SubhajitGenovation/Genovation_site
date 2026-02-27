"use client";
export default function PlatformUISection() {
  return (
    <section id="platform-ui" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 600, height: 600, background: "rgba(16,185,129,0.04)", top: "10%", left: "20%" }} />
      <div className="orb" style={{ width: 500, height: 500, background: "rgba(139,92,246,0.04)", bottom: "10%", right: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <svg className="w-3 h-3 text-emerald-600/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            <span className="text-emerald-600/80 text-[11px] font-light tracking-[0.25em] uppercase">Platform Interface</span>
          </div>
          <h2 className="display-section r-up" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
            The <span className="text-gradient">Control Center</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            A unified interface for orchestrating, monitoring, and governing enterprise intelligence.
          </p>
        </div>

        {/* Mock UI */}
        <div className="max-w-6xl mx-auto r-scale">
          <div className="card overflow-hidden" style={{ borderRadius: 24, borderColor: "rgba(16,185,129,0.15)", boxShadow: "0 40px 100px -20px rgba(16,185,129,0.08), 0 1px 3px rgba(0,0,0,0.04)" }}>
            {/* Browser Chrome */}
            <div className="mock-header">
              <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06] flex items-center gap-2 text-[11px] text-gray-400">
                  <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  mentis.genovation.ai
                </div>
              </div>
            </div>

            {/* Main UI */}
            <div className="flex" style={{ minHeight: 600, background: "#fafaf9" }}>
              {/* Sidebar */}
              <div className="w-64 border-r border-black/[0.06] flex flex-col bg-white/60">
                <div className="p-4 border-b border-black/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-gray-900">Mentis</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-medium">v0.9</span>
                      </div>
                      <p className="text-[10px] text-gray-400">AI Agent Platform</p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <button className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 text-white text-xs font-medium flex items-center justify-center gap-2 shadow-sm">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                    New Chat
                  </button>
                </div>
                <div className="flex-1 px-2 space-y-1 overflow-y-auto">
                  {[
                    { active: true,  label: "Q4 Revenue Analysis", sub: "Today",     dot: "emerald" },
                    { active: false, label: "What's inside this KB?", sub: "Yesterday", dot: null },
                    { active: false, label: "Contract risk analysis", sub: "Tuesday",   dot: null },
                    { active: false, label: "Debug auth module",      sub: "Jan 15",    dot: null },
                  ].map((item) => (
                    <div key={item.label} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer ${item.active ? "bg-emerald-500/[0.08] border border-emerald-500/[0.15]" : "hover:bg-black/[0.03]"}`}>
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs truncate ${item.active ? "text-gray-900 font-medium" : "text-gray-600"}`}>{item.label}</p>
                        <span className="text-[9px] text-gray-400">{item.sub}</span>
                      </div>
                      {item.active && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-black/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">JD</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-900 font-medium">John Doe</p>
                      <p className="text-[9px] text-gray-400">Enterprise Plan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                <div className="h-12 border-b border-black/[0.06] px-5 flex items-center justify-between bg-white/40">
                  <div className="flex items-center gap-1">
                    {["Data Hub", "Connectors", "Workspace", "Capabilities", "Models"].map((tab) => (
                      <span key={tab} className={`px-2.5 py-1.5 rounded-lg text-[11px] ${tab === "Workspace" ? "text-emerald-600 bg-emerald-500/[0.08] border border-emerald-500/[0.15] font-medium" : "text-gray-400"}`}>{tab}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/[0.12]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ animation: "pulse-soft 2s infinite" }} />
                    <span className="text-[10px] text-emerald-600 font-medium">All Systems Online</span>
                  </div>
                </div>
                <div className="flex-1 p-5 overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-lg font-semibold text-gray-900">Workspace</h1>
                      <p className="text-[11px] text-gray-400">Select an agent to start a new conversation</p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h2 className="text-xs font-medium text-gray-500 mb-3">Built-in Agents</h2>
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { name: "Aegis",     role: "Research Intelligence",  color: "from-emerald-400 to-cyan-400",   status: "Ready",          sdot: "bg-emerald-500", stxt: "text-emerald-600" },
                        { name: "Sophia",    role: "Knowledge Intelligence", color: "from-violet-400 to-purple-500",  status: "Ready",          sdot: "bg-emerald-500", stxt: "text-emerald-600" },
                        { name: "Clavis",    role: "Code Intelligence",      color: "from-amber-400 to-orange-500",   status: "Setup required", sdot: "bg-amber-500",   stxt: "text-amber-600" },
                        { name: "Analytica", role: "Data Intelligence",      color: "from-cyan-400 to-teal-500",      status: "Ready",          sdot: "bg-emerald-500", stxt: "text-emerald-600" },
                      ].map((agent) => (
                        <div key={agent.name} className="p-4 rounded-2xl border border-black/[0.06] bg-white/80 hover:border-emerald-500/[0.2] transition-all cursor-pointer">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-3`}>
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                          </div>
                          <h3 className="text-xs font-semibold text-gray-900 mb-0.5">{agent.name}</h3>
                          <p className="text-[10px] text-gray-400 mb-2">{agent.role}</p>
                          <div className="flex items-center gap-1">
                            <div className={`w-1.5 h-1.5 rounded-full ${agent.sdot}`} />
                            <span className={`text-[9px] ${agent.stxt}`}>{agent.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: "Active Sessions", val: "3",    sub: "All healthy",        color: "text-emerald-600" },
                      { label: "Tasks Today",     val: "47",   sub: "+12 from yesterday", color: "text-cyan-600" },
                      { label: "Tokens Used",     val: "124K", sub: "of 500K monthly",    color: "text-gray-400" },
                      { label: "Avg Response",    val: "1.2s", sub: "Within SLA",         color: "text-emerald-600" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-3 rounded-xl border border-black/[0.06] bg-white/80">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-gray-400">{stat.label}</span>
                          <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                        </div>
                        <div className="text-lg font-bold text-gray-900">{stat.val}</div>
                        <div className={`text-[9px] ${stat.color}`}>{stat.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature callouts */}
        <div className="grid grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {[
            { bg: "bg-emerald-500/[0.08]", border: "border-emerald-500/[0.12]", ic: "text-emerald-600/60", title: "Specialized Agents", desc: "Pre-built for enterprise tasks" },
            { bg: "bg-violet-500/[0.08]",  border: "border-violet-500/[0.12]",  ic: "text-violet-600/60",  title: "Custom Agents",      desc: "Build for your workflows" },
            { bg: "bg-cyan-500/[0.08]",    border: "border-cyan-500/[0.12]",    ic: "text-cyan-600/60",    title: "Governed by Default",desc: "Every action audited" },
            { bg: "bg-amber-500/[0.1]",    border: "border-amber-500/[0.12]",   ic: "text-amber-600/60",   title: "Real-Time Insights", desc: "Monitor performance live" },
          ].map((f) => (
            <div key={f.title} className="text-center r-up">
              <div className={`w-12 h-12 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mx-auto mb-3`}>
                <svg className={`w-6 h-6 ${f.ic}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <h4 className="text-sm font-normal text-gray-900 mb-1">{f.title}</h4>
              <p className="text-[12px] text-gray-400 font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
