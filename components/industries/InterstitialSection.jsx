"use client";

export default function InterstitialSection() {
  return (
    <section className="relative" id="inter1" style={{ height: "250vh" }}>
      <div
        className="sticky top-0 h-screen flex items-center justify-center"
        id="inter1Pin"
      >
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p
            id="interText1"
            className="text-gray-900"
            style={{
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              fontSize: "clamp(2rem,5vw,4.5rem)",
            }}
          >
            Seven sectors. One requirement: intelligence that withstands scrutiny.
          </p>
        </div>
      </div>
    </section>
  );
}
