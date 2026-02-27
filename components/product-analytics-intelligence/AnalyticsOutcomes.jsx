"use client";

const outcomes = [
  {
    val: "10x",
    label: "Faster Decisions",
    desc: "From variance to explanation in minutes",
    cls: "text-gradient-amber",
  },
  {
    val: "80%",
    label: "Fewer Review Cycles",
    desc: "Pre-answered questions reduce meetings",
    cls: "text-gradient-amber",
  },
  {
    val: "Zero",
    label: "Black-Box Outputs",
    desc: "Every conclusion is explainable",
    cls: "text-gradient-emerald",
  },
  {
    val: "100%",
    label: "Audit Ready",
    desc: "Full reasoning trails for compliance",
    cls: "text-gradient-emerald",
  },
];

export default function AnalyticsOutcomes() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(249,115,22,0.04) 50%, rgba(245,158,11,0.06) 100%)",
      }}
    >
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {outcomes.map((o) => (
            <div key={o.label} className="r-up">
              <div className={`text-4xl font-light ${o.cls}`}>{o.val}</div>
              <div className="text-sm font-medium text-gray-700 mt-2">
                {o.label}
              </div>
              <p className="text-xs text-gray-400 font-light mt-1">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
