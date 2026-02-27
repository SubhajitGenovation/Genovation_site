"use client";
export default function DeploymentSection() {
  return (
    <section className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 500, height: 400, background: "rgba(251,113,133,0.04)", top: "10%", left: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/[0.1] border border-rose-500/[0.2] mb-8 r-up">
            <svg className="w-3 h-3 text-rose-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            <span className="text-rose-500/80 text-[11px] font-light tracking-[0.25em] uppercase">Deployment</span>
          </div>
          <h2 className="display-section r-up" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
            Security & Sovereignty{" "}
            <span style={{ background: "linear-gradient(135deg,#8b5cf6,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>by Design</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Data remains inside enterprise boundaries—by architecture, not policy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {[
            { bg: "bg-emerald-500/[0.1]", ic: "text-emerald-600/60", title: "On-Premise",      desc: "Full deployment on your infrastructure within your datacenter." },
            { bg: "bg-cyan-500/[0.1]",    ic: "text-cyan-600/60",    title: "Private Network", desc: "Deploy within your VPC with complete network isolation." },
            { bg: "bg-amber-500/[0.1]",   ic: "text-amber-600/60",   title: "Air-Gapped",      desc: "Complete network isolation with zero external connectivity." },
          ].map((d) => (
            <div key={d.title} className="card p-8 text-center r-up">
              <div className={`w-14 h-14 rounded-2xl ${d.bg} flex items-center justify-center mx-auto mb-5`}>
                <svg className={`w-7 h-7 ${d.ic}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">{d.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto r-up">
          <div className="card p-8" style={{ borderRadius: 24 }}>
            <h3 className="text-lg font-light text-gray-900 mb-6 text-center">Does Not Depend On</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {["External APIs", "Hyperscaler Services", "Third-Party Execution"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-rose-500/[0.04] border border-rose-500/[0.1]">
                  <svg className="w-4 h-4 text-rose-400/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  <span className="text-gray-500 text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
