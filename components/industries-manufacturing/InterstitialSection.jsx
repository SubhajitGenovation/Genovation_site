"use client";

export default function InterstitialSection() {
  return (
    <section
      id="inter1"
      style={{ position: "relative", height: "280vh" }}
    >
      <div
        id="inter1Pin"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            padding: "0 2rem",
            textAlign: "center",
            perspective: "1200px",
          }}
        >
          <p
            id="interText1"
            style={{
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              color: "#111827",
              transformStyle: "preserve-3d",
            }}
          >
            Intelligence must earn the trust of the floor before it reaches the boardroom.
          </p>
        </div>
      </div>
    </section>
  );
}