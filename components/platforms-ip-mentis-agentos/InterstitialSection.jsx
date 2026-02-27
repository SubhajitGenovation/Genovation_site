"use client";
export default function InterstitialSection() {
  return (
    <section className="relative" id="interProblem" style={{ height: "300vh" }}>
      <div className="h-screen flex items-center justify-center" id="interProblemPin">
        <div className="max-w-5xl mx-auto px-8 text-center" style={{ perspective: 1200 }}>
          <p
            className="display-inter text-gray-900"
            id="interProblemText"
            style={{ fontSize: "clamp(2rem,5vw,4.5rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.15, transformStyle: "preserve-3d" }}
          >
            Modern AI can generate answers. Enterprises require systems that act responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}
