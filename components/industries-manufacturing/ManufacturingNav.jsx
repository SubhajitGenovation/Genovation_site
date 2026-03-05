"use client";

import { useRouter } from "next/navigation";

export default function ManufacturingNav() {
  const router = useRouter();

  const handleRequestDemo = () => {
    router.push("/request-demo");
  };

  return (
    <nav
      id="mainNav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(245,243,240,0.85)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <div
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "0.5rem",
              background: "linear-gradient(135deg, #34d399, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
            </svg>
          </div>
          <span style={{ fontSize: "0.875rem", fontWeight: 300, letterSpacing: "-0.02em", color: "#374151" }}>
            Genovation
          </span>
        </a>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.25rem" }}>
          {["Products", "Platform", "Security"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontSize: "0.6875rem",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b7280",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            style={{
              fontSize: "0.6875rem",
              fontWeight: 300,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#d97706",
              textDecoration: "none",
            }}
          >
            Industries
          </a>
          <a
            href="#"
            style={{
              fontSize: "0.6875rem",
              fontWeight: 300,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6b7280",
              textDecoration: "none",
            }}
          >
            Company
          </a>
        </div>

        {/* CTA Button */}
        <div className="mag-btn">
          <button
            className="btn-inner"
            onClick={handleRequestDemo}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
              background: "rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.1)",
              color: "#374151",
              fontSize: "0.6875rem",
              fontWeight: 300,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
}