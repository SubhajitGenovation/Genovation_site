"use client";

export default function OutcomeSection() {
  return (
    <section className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />

      <div className="relative max-w-4xl mx-auto px-8">
        <div
          className="card p-12 text-center r-scale"
          style={{ borderRadius: 24 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8">
            <svg
              className="w-3 h-3 text-emerald-600/80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="text-emerald-600/80 text-[11px] font-light tracking-[0.25em] uppercase">
              The Outcome
            </span>
          </div>

          <h2
            className="display-section mb-10"
            style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
          >
            With Mentis AgentOS
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto text-left">
            {[
              {
                bg: "bg-emerald-500/[0.1]",
                ic: "text-emerald-600/70",
                text: (
                  <>
                    AI systems can{" "}
                    <span className="text-emerald-600 font-normal">act</span>{" "}
                    without losing control
                  </>
                ),
              },
              {
                bg: "bg-cyan-500/[0.1]",
                ic: "text-cyan-600/70",
                text: (
                  <>
                    Intelligence can{" "}
                    <span className="text-cyan-600 font-normal">scale</span>{" "}
                    without increasing risk
                  </>
                ),
              },
              {
                bg: "bg-violet-500/[0.1]",
                ic: "text-violet-600/70",
                text: (
                  <>
                    Enterprises can{" "}
                    <span className="text-violet-600 font-normal">adopt AI</span>{" "}
                    without regulatory exposure
                  </>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 mt-1`}
                >
                  <svg
                    className={`w-5 h-5 ${item.ic}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-xl text-gray-700 font-light">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-black/[0.08]">
            <p className="text-xl text-gray-400 font-light italic">
              "AI becomes enterprise-ready not when it is powerful—
              <br />
              <span className="text-gray-900 font-normal">
                but when it is governed.
              </span>
              "
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
