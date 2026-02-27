"use client";
export default function WhySection() {
  const reqs = [
    { icon: "file-search", color: "emerald", label: "Intelligence must be", value: "Explainable" },
    { icon: "shield-check", color: "cyan",    label: "Actions must be",      value: "Authorized" },
    { icon: "lock",         color: "violet",  label: "Data must not leave",  value: "Controlled Boundaries" },
    { icon: "scroll-text",  color: "amber",   label: "Every decision must be", value: "Auditable" },
  ];

  const colorMap = {
    emerald: { bg: "bg-emerald-500/[0.1]", icon: "text-emerald-600/70", val: "text-emerald-600" },
    cyan:    { bg: "bg-cyan-500/[0.1]",    icon: "text-cyan-600/70",    val: "text-cyan-600" },
    violet:  { bg: "bg-violet-500/[0.1]",  icon: "text-violet-600/70",  val: "text-violet-600" },
    amber:   { bg: "bg-amber-500/[0.15]",  icon: "text-amber-600/70",   val: "text-amber-600" },
  };

  const iconPaths = {
    "file-search":  <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></>,
    "shield-check": <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>,
    "lock":         <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    "scroll-text":  <><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 3H4.5A2.5 2.5 0 0 0 7 5.5"/><path d="M15 8H9M15 12H9"/></>,
  };

  return (
    <section id="why" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 600, height: 400, background: "rgba(6,182,212,0.05)", top: "10%", right: "15%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.2] mb-8 r-up">
            <svg className="w-3 h-3 text-cyan-600/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <span className="text-cyan-600/80 text-[11px] font-light tracking-[0.25em] uppercase">The Problem</span>
          </div>
          <h2 className="display-section r-up" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
            Why an Agent Operating System<br /><span className="text-gradient">Is Necessary</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            AI models generate. Enterprises require intelligence that is explainable, authorized, controlled, and auditable.
          </p>
        </div>

        {/* Requirement Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-20" id="reqCards">
          {reqs.map((r) => {
            const c = colorMap[r.color];
            return (
              <div key={r.value} className="card p-8 text-center r-up">
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mx-auto mb-5`}>
                  <svg className={`w-6 h-6 ${c.icon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{iconPaths[r.icon]}</svg>
                </div>
                <p className="text-gray-500 text-sm font-light mb-1">{r.label}</p>
                <p className={`${c.val} font-semibold text-lg`}>{r.value}</p>
              </div>
            );
          })}
        </div>

        {/* Traditional vs Mentis */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-8 r-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/[0.1] flex items-center justify-center">
                <svg className="w-5 h-5 text-rose-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </div>
              <h4 className="text-xl font-light text-gray-900">Traditional AI Stacks</h4>
            </div>
            <p className="text-gray-400 text-[14px] font-light mb-6 leading-relaxed">
              Traditional AI stacks fail because they treat <span className="text-rose-500 font-normal">models as the system</span>.
            </p>
            <div className="space-y-3 text-[13px] text-gray-400 font-light">
              {["Model-centric architecture", "Governance as afterthought", "Opaque decision-making", "Cloud dependency"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-rose-400/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-8 r-right" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/[0.15] flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h4 className="text-xl font-light text-gray-900">Mentis AgentOS</h4>
            </div>
            <p className="text-gray-400 text-[14px] font-light mb-6 leading-relaxed">
              Mentis AgentOS treats <span className="text-emerald-600 font-normal">intelligence as a governed process</span>.
            </p>
            <div className="space-y-3 text-[13px] text-gray-700 font-light">
              {["Execution-centric architecture", "Governance by design", "Explainable processes", "Sovereign deployment"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
