"use client";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      color: "emerald",
      title: "You Request",
      desc: "Fill out the form above. Takes 60 seconds. We'll match you with the right engineer based on your industry and interest.",
      timing: "Today",
      connector: true,
    },
    {
      num: "02",
      color: "cyan",
      title: "We Prepare",
      desc: "Our team reviews your profile, configures a relevant demo environment, and sends a calendar invite within 24 hours.",
      timing: "Within 24h",
      connector: true,
      connectorDelay: "-1s",
    },
    {
      num: "03",
      color: "blue",
      title: "You Experience",
      desc: "Join the session. See live agents on a live platform. Ask the hardest questions you have — that's what this is for.",
      timing: "Your schedule",
      connector: false,
    },
  ];

  const colorMap = {
    emerald: { bg: "bg-emerald-500/[0.1]", border: "border-emerald-500/[0.2]", text: "text-emerald-600" },
    cyan: { bg: "bg-cyan-500/[0.1]", border: "border-cyan-500/[0.2]", text: "text-cyan-600" },
    blue: { bg: "bg-blue-500/[0.1]", border: "border-blue-500/[0.2]", text: "text-blue-600" },
  };

  return (
    <section className="py-40 relative" id="howItWorks">
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.04]" style={{ top: "15%", left: "5%" }} />

      <div className="relative max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.08] border border-cyan-500/[0.2] mb-8 r-up">
            <svg className="w-3 h-3 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">From Request to Session</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl r-up">
            Three Steps.<br />
            <span className="text-gradient">Zero Friction.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 items-start r-up">
          {steps.map((step) => {
            const c = colorMap[step.color];
            return (
              <div key={step.num} className="text-center px-8 relative">
                <div className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto mb-5 relative z-10`}>
                  <span className={`text-[15px] ${c.text} font-mono font-bold`}>{step.num}</span>
                </div>
                <h4 className="text-[15px] font-light text-gray-900 mb-2">{step.title}</h4>
                <p className="text-[13px] text-gray-600 font-light leading-relaxed">{step.desc}</p>
                <div className={`text-[10px] ${c.text} font-mono mt-3`}>{step.timing}</div>
                {step.connector && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+35px)] w-[calc(100%-70px)] h-px">
                    <div
                      className="h-full pipe-flow rounded-full"
                      style={step.connectorDelay ? { animationDelay: step.connectorDelay } : {}}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
