"use client";

const audience = [
  {
    bg: "bg-emerald-500/[0.1]",
    ic: "text-emerald-600/60",
    title: "CIOs & CTOs",
    desc: "Deploying AI in regulated environments",
    path: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
  },
  {
    bg: "bg-cyan-500/[0.1]",
    ic: "text-cyan-600/60",
    title: "Compliance Leaders",
    desc: "Requiring auditability",
    path: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></>,
  },
  {
    bg: "bg-violet-500/[0.1]",
    ic: "text-violet-600/60",
    title: "Government & Defense",
    desc: "Requiring sovereignty",
    path: <><line x1="3" y1="22" x2="21" y2="22" /><line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" /><line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" /><polygon points="12 2 20 7 4 7" /></>,
  },
  {
    bg: "bg-amber-500/[0.1]",
    ic: "text-amber-600/60",
    title: "Investors",
    desc: "Evaluating technical defensibility",
    path: <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>,
  },
];

export default function AudienceSection() {
  return (
    <section className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.2] mb-8 r-up">
            <svg
              className="w-3 h-3 text-violet-600/80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="text-violet-600/80 text-[11px] font-light tracking-[0.25em] uppercase">
              Audience
            </span>
          </div>
          <h2
            className="display-section r-up"
            style={{ fontSize: "clamp(3rem,7vw,6rem)" }}
          >
            Who This Is{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#8b5cf6,#fb7185)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              For
            </span>
          </h2>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          id="audienceCards"
        >
          {audience.map((item) => (
            <div key={item.title} className="card p-8 text-center r-up">
              <div
                className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-5`}
              >
                <svg
                  className={`w-7 h-7 ${item.ic}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {item.path}
                </svg>
              </div>
              <h3 className="text-gray-900 font-medium mb-2">{item.title}</h3>
              <p className="text-[12px] text-gray-400 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
