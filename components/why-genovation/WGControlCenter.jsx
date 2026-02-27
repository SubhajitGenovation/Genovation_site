"use client";
import { LayoutDashboard, Bot, GitBranch, Shield, ScrollText, Database, Settings, MessageSquare, Timer, ShieldAlert } from "lucide-react";

export default function WGControlCenter() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-violet-500/[0.04]" style={{ top: "5%", left: "20%" }} />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.04]" style={{ bottom: "10%", right: "15%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.15] mb-8 r-up">
            <LayoutDashboard className="w-3 h-3 text-violet-500" />
            <span className="text-violet-500 text-[11px] font-light tracking-[0.25em] uppercase">Control Center</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Complete <span className="text-gradient">Operational Visibility</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto r-up">
            Monitor agents, review decisions, and manage policies from a unified dashboard.
          </p>
        </div>

        <div className="r-scale">
          <div style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 60px 120px -30px rgba(0,0,0,0.10), 0 20px 60px -20px rgba(16,185,129,0.08), 0 0 0 1px rgba(255,255,255,0.8) inset" }}>
            {/* Chrome */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px", borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(248,247,245,0.6)" }}>
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fb5c4c" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fbbd2e" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 300, color: "rgba(0,0,0,0.4)", fontFamily: "'Space Mono',monospace" }}>Genovation Control Center — Production</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", animation: "softPulse 2s ease-in-out infinite", display: "inline-block" }} />
                <span style={{ fontSize: 11, color: "#059669", fontWeight: 400 }}>All Systems Operational</span>
              </div>
            </div>

            <div style={{ display: "flex", minHeight: "460px" }}>
              {/* Sidebar */}
              <div style={{ width: 180, padding: 16, background: "rgba(248,247,245,0.5)", borderRight: "1px solid rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  { icon: <LayoutDashboard size={16} />, label: "Dashboard", active: true },
                  { icon: <Bot size={16} />, label: "Agents" },
                  { icon: <GitBranch size={16} />, label: "Workflows" },
                  { icon: <Shield size={16} />, label: "JUDGE" },
                  { icon: <ScrollText size={16} />, label: "Audit Logs" },
                  { icon: <Database size={16} />, label: "Knowledge" },
                ].map(({ icon, label, active }) => (
                  <div key={label} className={`mock-sidebar-nav-item${active ? " active" : ""}`}>{icon}{label}</div>
                ))}
                <div style={{ flex: 1 }} />
                <div className="mock-sidebar-nav-item"><Settings size={16} />Settings</div>
              </div>

              {/* Main */}
              <div style={{ flex: 1, padding: 24, overflow: "auto" }}>
                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 20 }}>
                  {[
                    { label: "Active Agents", value: "24", sub: "↑ 3 from yesterday", subColor: "#059669", icon: <Bot size={16} style={{ color: "#06b6d4" }} /> },
                    { label: "Queries Today", value: "12,847", sub: "↑ 12% from avg", subColor: "#059669", icon: <MessageSquare size={16} style={{ color: "#3b82f6" }} /> },
                    { label: "Avg Response", value: "1.2s", sub: "↓ 0.3s improvement", subColor: "#059669", icon: <Timer size={16} style={{ color: "#8b5cf6" }} /> },
                    { label: "JUDGE Blocks", value: "47", sub: "0.4% of queries", subColor: "rgba(0,0,0,0.4)", icon: <ShieldAlert size={16} style={{ color: "#f59e0b" }} /> },
                  ].map(({ label, value, sub, subColor, icon }) => (
                    <div key={label} style={{ padding: 16, borderRadius: 14, background: "rgba(248,247,245,0.8)", border: "1px solid rgba(0,0,0,0.04)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <span style={{ fontSize: 11, color: "rgba(0,0,0,0.4)", fontWeight: 300 }}>{label}</span>{icon}
                      </div>
                      <div style={{ fontSize: 24, fontWeight: 500, color: "#1a1a2e", fontFamily: "'Space Mono',monospace" }}>{value}</div>
                      <div style={{ fontSize: 11, color: subColor, fontWeight: 300 }}>{sub}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {/* Agent Status */}
                  <div style={{ borderRadius: 16, border: "1px solid rgba(0,0,0,0.05)", padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <span style={{ fontSize: 14, fontWeight: 500, color: "#1a1a2e" }}>Agent Status</span>
                      <span style={{ fontSize: 11, color: "rgba(0,0,0,0.35)" }}>Live</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {[
                        { name: "Financial Analyst", id: "agent-fin-001", status: "Running", statusColor: "#059669", qhr: "847 q/hr", iconColor: "#10b981", iconBg: "rgba(16,185,129,0.1)" },
                        { name: "Legal Research", id: "agent-legal-003", status: "Running", statusColor: "#059669", qhr: "312 q/hr", iconColor: "#10b981", iconBg: "rgba(16,185,129,0.1)" },
                        { name: "Customer Support", id: "agent-cs-012", status: "Scaling", statusColor: "#b45309", qhr: "1,204 q/hr", iconColor: "#f59e0b", iconBg: "rgba(245,158,11,0.1)" },
                      ].map(({ name, id, status, statusColor, qhr, iconColor, iconBg }) => (
                        <div key={id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px", borderRadius: 12, background: "rgba(248,247,245,0.8)" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ width: 32, height: 32, borderRadius: 10, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Bot size={16} style={{ color: iconColor }} />
                            </div>
                            <div>
                              <div style={{ fontSize: 13, fontWeight: 400, color: "#1a1a2e" }}>{name}</div>
                              <div style={{ fontSize: 10, color: "rgba(0,0,0,0.35)", fontFamily: "'Space Mono',monospace" }}>{id}</div>
                            </div>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: 11, color: statusColor, fontWeight: 400 }}>{status}</div>
                            <div style={{ fontSize: 10, color: "rgba(0,0,0,0.35)", fontFamily: "'Space Mono',monospace" }}>{qhr}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Audit Events */}
                  <div style={{ borderRadius: 16, border: "1px solid rgba(0,0,0,0.05)", padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <span style={{ fontSize: 14, fontWeight: 500, color: "#1a1a2e" }}>Recent Audit Events</span>
                      <span style={{ fontSize: 11, color: "#0891b2", cursor: "pointer" }}>View All</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "'Space Mono',monospace", fontSize: 11 }}>
                      {[
                        { time: "14:32:01", type: "ALLOW", msg: "Query processed", typeBg: "rgba(16,185,129,0.1)", typeColor: "#059669" },
                        { time: "14:31:58", type: "REVIEW", msg: "Human review requested", typeBg: "rgba(245,158,11,0.1)", typeColor: "#b45309" },
                        { time: "14:31:45", type: "BLOCK", msg: "PII extraction blocked", typeBg: "rgba(239,68,68,0.1)", typeColor: "#dc2626" },
                        { time: "14:31:32", type: "ALLOW", msg: "Document retrieval OK", typeBg: "rgba(16,185,129,0.1)", typeColor: "#059669" },
                      ].map(({ time, type, msg, typeBg, typeColor }) => (
                        <div key={time} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, background: "rgba(248,247,245,0.8)" }}>
                          <span style={{ color: "rgba(0,0,0,0.3)" }}>{time}</span>
                          <span style={{ padding: "2px 8px", borderRadius: 6, background: typeBg, color: typeColor, fontSize: 10 }}>{type}</span>
                          <span style={{ color: "rgba(0,0,0,0.5)", fontFamily: "'Urbanist',sans-serif", fontWeight: 300 }}>{msg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
