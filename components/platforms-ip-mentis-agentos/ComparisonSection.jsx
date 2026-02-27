"use client";

const rows = [
  { icon: "box",        label: "Architecture",   old: "Model-centric",       next: "Execution-centric" },
  { icon: "brain",      label: "Reasoning",      old: "Opaque",              next: "Explainable processes" },
  { icon: "server",     label: "Deployment",     old: "Cloud-dependent",     next: "Sovereign deployment" },
  { icon: "shield",     label: "Governance",     old: "Post-hoc monitoring", next: "Real-time governance" },
  { icon: "git-branch", label: "Orchestration",  old: "Tool chaining",       next: "Governed orchestration" },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.1] border border-amber-500/[0.2] mb-8 r-up">
            <svg className="w-3 h-3 text-amber-600/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            <span className="text-amber-600/80 text-[11px] font-light tracking-[0.25em] uppercase">Comparison</span>
          </div>
          <h2 className="display-section r-up" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
            What Makes Mentis AgentOS{" "}
            <span style={{ background: "linear-gradient(135deg,#fbbf24,#f87171)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Different</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto r-up">
          <div className="card overflow-hidden" style={{ borderRadius: 24 }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="p-5" />
              <div className="p-5 text-center"><span className="text-[13px] text-gray-400 font-light">Traditional AI Platforms</span></div>
              <div className="p-5 text-center"><span className="text-[13px] text-emerald-600 font-normal">Mentis AgentOS</span></div>
            </div>
            {rows.map((row, i) => (
              <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none" }}>
                <div className="p-5 flex items-center gap-3 text-[14px] text-gray-700 font-normal">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2"/></svg>
                  {row.label}
                </div>
                <div className="p-5 flex items-center justify-center text-[14px] text-gray-400 font-light">{row.old}</div>
                <div className="p-5 flex items-center justify-center text-[14px] text-emerald-700 font-medium" style={{ background: "rgba(16,185,129,0.06)" }}>
                  <svg className="w-4 h-4 text-emerald-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  {row.next}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 font-light text-sm mt-8">
            Mentis AgentOS is built for <span className="text-emerald-600 font-normal">enterprise consequence</span>, not experimentation.
          </p>
        </div>
      </div>
    </section>
  );
}
