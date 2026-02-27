"use client";

export default function GovChallenges() {
  const challenges = [
    {
      icon: (
        <svg className="w-6 h-6" style={{ color: "#ef4444" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      iconBg: "rgba(239,68,68,0.1)",
      iconBorder: "rgba(239,68,68,0.2)",
      borderColor: "rgba(239,68,68,0.15)",
      title: "Sovereignty Is Non-Negotiable",
      body: "Citizen data and government information cannot flow to foreign servers or third-party cloud providers without explicit controls.",
      alertBg: "rgba(239,68,68,0.04)",
      alertBorder: "rgba(239,68,68,0.1)",
      alertText: "#dc2626",
      alert: "Commercial AI platforms often fail sovereignty requirements.",
    },
    {
      icon: (
        <svg className="w-6 h-6" style={{ color: "#f59e0b" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" />
        </svg>
      ),
      iconBg: "rgba(245,158,11,0.1)",
      iconBorder: "rgba(245,158,11,0.2)",
      borderColor: "rgba(245,158,11,0.15)",
      title: "Decisions Face Public Scrutiny",
      body: "Government decisions affect citizens' lives. They must be explainable to oversight bodies, auditors, and the public.",
      alertBg: "rgba(245,158,11,0.04)",
      alertBorder: "rgba(245,158,11,0.1)",
      alertText: "#b45309",
      alert: "Black-box AI creates accountability gaps.",
    },
    {
      icon: (
        <svg className="w-6 h-6" style={{ color: "#8b5cf6" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18" />
        </svg>
      ),
      iconBg: "rgba(139,92,246,0.1)",
      iconBorder: "rgba(139,92,246,0.2)",
      borderColor: "rgba(139,92,246,0.15)",
      title: "Agencies Are Siloed",
      body: "Knowledge is trapped in departments. Cross-agency collaboration is constrained by security and jurisdictional boundaries.",
      alertBg: "rgba(139,92,246,0.04)",
      alertBorder: "rgba(139,92,246,0.1)",
      alertText: "#7c3aed",
      alert: "Valuable insights remain inaccessible across agencies.",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="challenges">
      <div className="orb" style={{ width: 600, height: 400, background: "rgba(59,130,246,0.04)", top: "10%", right: "15%" }} />
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 r-up"
            style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" }}
          >
            <svg className="w-3 h-3" style={{ color: "#ef4444" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="text-red-600 text-[11px] font-light tracking-[0.25em] uppercase">The Challenge</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            The Reality of AI<br />
            <span className="text-gradient-blue">in Government</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6" id="challengeCards">
          {challenges.map((c) => (
            <div
              key={c.title}
              className="card p-8 r-up"
              style={{ borderRadius: 24, borderColor: c.borderColor }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: c.iconBg, border: `1px solid ${c.iconBorder}` }}
              >
                {c.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">{c.title}</h3>
              <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-5">{c.body}</p>
              <div className="p-4 rounded-xl" style={{ background: c.alertBg, border: `1px solid ${c.alertBorder}` }}>
                <p className="text-[12px] font-light" style={{ color: c.alertText }}>{c.alert}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}