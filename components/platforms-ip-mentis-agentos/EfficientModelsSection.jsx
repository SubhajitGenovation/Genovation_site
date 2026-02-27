"use client";

export default function EfficientModelsSection() {
  return (
    <section className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

          {/* LEFT — Text */}
          <div className="r-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.2] mb-8">
              <svg
                className="w-3 h-3 text-cyan-600/80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span className="text-cyan-600/80 text-[11px] font-light tracking-[0.25em] uppercase">
                Efficiency
              </span>
            </div>

            <h2
              className="display-section mb-6"
              style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
            >
              Designed for <span className="text-gradient">Efficient Models</span>
            </h2>

            <p className="text-gray-500 text-[15px] font-light mb-8 leading-relaxed">
              Mentis AgentOS is optimized to run on{" "}
              <span className="text-gray-900 font-normal">
                Small Language Models (SLMs)
              </span>{" "}
              as well as larger models when required. Intelligence is achieved through{" "}
              <span className="text-emerald-600 font-normal">
                architecture and orchestration
              </span>
              , not brute force.
            </p>

            <div className="space-y-4">
              {[
                {
                  bg: "bg-emerald-500/[0.1]",
                  ic: "text-emerald-600/70",
                  label: "Predictable infrastructure cost",
                  path: (
                    <path d="M4 4h16v16H4zM9 9h6M9 12h6M9 15h4" />
                  ),
                },
                {
                  bg: "bg-cyan-500/[0.1]",
                  ic: "text-cyan-600/70",
                  label: "Deployment on modest hardware",
                  path: (
                    <>
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </>
                  ),
                },
                {
                  bg: "bg-violet-500/[0.1]",
                  ic: "text-violet-600/70",
                  label: "Reduced dependency on specialized GPUs",
                  path: (
                    <>
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <line x1="9" y1="2" x2="9" y2="4" />
                      <line x1="15" y1="2" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="22" />
                      <line x1="15" y1="20" x2="15" y2="22" />
                      <line x1="2" y1="9" x2="4" y2="9" />
                      <line x1="2" y1="15" x2="4" y2="15" />
                      <line x1="20" y1="9" x2="22" y2="9" />
                      <line x1="20" y1="15" x2="22" y2="15" />
                    </>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-2xl card"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <svg
                      className={`w-5 h-5 ${item.ic}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {item.path}
                    </svg>
                  </div>
                  <span className="text-gray-700 text-[14px] font-light">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Visual card */}
          <div className="card p-8 r-right" style={{ borderRadius: 24 }}>
            <div className="text-center mb-8">
              <span className="text-[11px] font-mono text-gray-400 tracking-widest">
                INTELLIGENCE_SOURCE
              </span>
            </div>

            <div className="space-y-6">
              {/* Brute Force — bad */}
              <div className="p-6 rounded-2xl bg-rose-500/[0.04] border border-rose-500/[0.1]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-500 text-sm font-light">
                    Brute Force (GPU Power)
                  </span>
                  <svg
                    className="w-4 h-4 text-rose-400/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </div>
                <div className="h-3 rounded-full bg-black/[0.04]">
                  <div
                    className="h-3 rounded-full bg-rose-400/30"
                    style={{ width: "33%" }}
                  />
                </div>
              </div>

              {/* Architecture — good */}
              <div className="p-6 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/[0.15]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-900 text-sm font-normal">
                    Architecture &amp; Orchestration
                  </span>
                  <svg
                    className="w-4 h-4 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="h-3 rounded-full bg-black/[0.04]">
                  <div
                    className="h-3 rounded-full w-full"
                    style={{
                      background:
                        "linear-gradient(90deg,#10b981,#06b6d4)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
