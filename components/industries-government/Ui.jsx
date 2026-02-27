"use client";

export function AppDots() {
  return (
    <div style={{ display: "flex", gap: 7 }}>
      <span style={{ width: 11, height: 11, borderRadius: "50%", background: "rgba(239,68,68,0.45)", display: "block" }} />
      <span style={{ width: 11, height: 11, borderRadius: "50%", background: "rgba(245,158,11,0.45)", display: "block" }} />
      <span style={{ width: 11, height: 11, borderRadius: "50%", background: "rgba(16,185,129,0.45)", display: "block" }} />
    </div>
  );
}

export function AppTab({ children, active }) {
  return (
    <div
      style={{
        padding: "6px 14px",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: active ? 500 : 400,
        cursor: "default",
        background: active ? "rgba(59,130,246,0.08)" : "transparent",
        color: active ? "#1d4ed8" : "#9ca3af",
      }}
    >
      {children}
    </div>
  );
}

export function LabelMono({ children, style }) {
  return (
    <p
      style={{
        fontSize: 9,
        fontFamily: "'Space Mono', monospace",
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        color: "#9ca3af",
        ...style,
      }}
    >
      {children}
    </p>
  );
}

export function Pill({ type = "b", children }) {
  const styles = {
    g: { background: "rgba(16,185,129,0.1)", color: "#059669", border: "1px solid rgba(16,185,129,0.2)" },
    a: { background: "rgba(245,158,11,0.1)", color: "#b45309", border: "1px solid rgba(245,158,11,0.2)" },
    r: { background: "rgba(239,68,68,0.1)", color: "#dc2626", border: "1px solid rgba(239,68,68,0.2)" },
    b: { background: "rgba(59,130,246,0.1)", color: "#1d4ed8", border: "1px solid rgba(59,130,246,0.2)" },
    v: { background: "rgba(139,92,246,0.1)", color: "#6d28d9", border: "1px solid rgba(139,92,246,0.2)" },
  };
  return (
    <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 10, fontWeight: 500, ...styles[type] }}>
      {children}
    </span>
  );
}

export function Stag({ children, color = "#2563eb", borderColor = "rgba(59,130,246,0.15)", bg = "rgba(59,130,246,0.06)" }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 20,
      fontSize: 10,
      fontWeight: 500,
      margin: 2,
      background: bg,
      color,
      border: `1px solid ${borderColor}`,
    }}>
      {children}
    </span>
  );
}

export function PBar({ fill, color = "rgba(59,130,246,0.4)" }) {
  return (
    <div style={{ height: 6, borderRadius: 6, background: "rgba(0,0,0,0.04)", overflow: "hidden" }}>
      <div style={{ height: "100%", borderRadius: 6, background: color, width: fill }} />
    </div>
  );
}

export function Metric({ className = "", children }) {
  return (
    <div
      className={`metric ${className}`}
      style={{
        padding: 16,
        borderRadius: 16,
        background: "rgba(255,255,255,0.95)",
        border: "1px solid rgba(0,0,0,0.06)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

export function RRow({ children, borderColor }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 14px",
        borderRadius: 12,
        background: "rgba(255,255,255,0.85)",
        border: `1px solid ${borderColor || "rgba(0,0,0,0.05)"}`,
        transition: "all 0.15s",
      }}
    >
      {children}
    </div>
  );
}

export function GovSeal({ children, pulse }) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 14px",
      borderRadius: 8,
      background: "linear-gradient(90deg,rgba(59,130,246,0.08),rgba(59,130,246,0.03))",
      border: "1px solid rgba(59,130,246,0.12)",
    }}>
      {pulse && <div className="w-2 h-2 rounded-full bg-blue-500" style={{ animation: "pulse-soft 2s ease-in-out infinite" }} />}
      {children}
    </div>
  );
}

export function SidebarItem({ active, icon, children }) {
  return (
    <div style={{
      padding: "7px 12px",
      fontSize: 11,
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: active ? "#1d4ed8" : "#6b7280",
      fontWeight: active ? 400 : 300,
      marginBottom: 2,
      background: active ? "rgba(59,130,246,0.06)" : "transparent",
    }}>
      {icon}
      {children}
    </div>
  );
}

export const ConfRing = ({ size = 36, r = 14, stroke, offset, label }) => {
  const circumference = 2 * Math.PI * r;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={`${stroke}22`} strokeWidth="3" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={stroke} strokeWidth="3"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <span style={{ position: "absolute", fontSize: 8, fontWeight: 500, color: stroke }}>{label}</span>
    </div>
  );
};

// Icons as SVG components
export const IconCheck = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconBot = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M12 11V5m-3 0h6" /><circle cx="9" cy="16" r="1" fill={color} /><circle cx="15" cy="16" r="1" fill={color} />
  </svg>
);

export const IconFilePlus = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" />
  </svg>
);

export const IconMapPin = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconCalculator = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="12" y2="14" /><line x1="8" y1="18" x2="12" y2="18" />
  </svg>
);

export const IconPrinter = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
  </svg>
);

export const IconShieldCheck = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
);

export const IconEye = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconFileCheck = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><polyline points="9 15 11 17 15 13" />
  </svg>
);

export const IconFileWarning = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="13" x2="12" y2="17" /><line x1="12" y1="11" x2="12.01" y2="11" />
  </svg>
);

export const IconFileX = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="10" y1="13" x2="14" y2="17" /><line x1="14" y1="13" x2="10" y2="17" />
  </svg>
);

export const IconAlertTriangle = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const IconCheckCircle = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const IconXCircle = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

export const IconAlertCircle = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);