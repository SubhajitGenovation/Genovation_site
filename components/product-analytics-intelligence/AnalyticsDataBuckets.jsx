"use client";
import {
  Folder, Database, RefreshCw, Search, Plus,
  Lock, Wallet, Factory, Users, TrendingUp, Loader2,
  ChevronLeft, ChevronRight,
} from "lucide-react";

const tableRows = [
  {
    icon: <Wallet className="w-4 h-4 text-amber-500" />,
    iconBg: "bg-amber-500/[0.12]",
    name: "Finance",
    desc: "Financial data & reporting",
    tags: [
      { label: "NetSuite",   cls: "text-blue-600 bg-blue-100 border border-blue-200/60" },
      { label: "SAP",        cls: "text-emerald-600 bg-emerald-100 border border-emerald-200/60" },
      { label: "+10",        cls: "text-gray-400 bg-gray-100 border border-gray-200/60" },
    ],
    status: "synced",
    updated: "2 min ago",
  },
  {
    icon: <Factory className="w-4 h-4 text-cyan-500" />,
    iconBg: "bg-cyan-500/[0.12]",
    name: "Manufacturing",
    desc: "Production & operations",
    tags: [
      { label: "MES",   cls: "text-cyan-600 bg-cyan-100 border border-cyan-200/60" },
      { label: "SCADA", cls: "text-sky-600 bg-sky-100 border border-sky-200/60" },
      { label: "+13",   cls: "text-gray-400 bg-gray-100 border border-gray-200/60" },
    ],
    status: "syncing",
    updated: "Syncing...",
  },
  {
    icon: <Users className="w-4 h-4 text-violet-500" />,
    iconBg: "bg-violet-500/[0.12]",
    name: "HR & People",
    desc: "Workforce analytics",
    tags: [
      { label: "Workday", cls: "text-violet-600 bg-violet-100 border border-violet-200/60" },
      { label: "ADP",     cls: "text-rose-600 bg-rose-100 border border-rose-200/60" },
      { label: "+6",      cls: "text-gray-400 bg-gray-100 border border-gray-200/60" },
    ],
    status: "synced",
    updated: "15 min ago",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
    iconBg: "bg-emerald-500/[0.12]",
    name: "Sales",
    desc: "CRM & pipeline data",
    tags: [
      { label: "Salesforce", cls: "text-blue-600 bg-blue-100 border border-blue-200/60" },
      { label: "HubSpot",    cls: "text-orange-600 bg-orange-100 border border-orange-200/60" },
      { label: "+4",         cls: "text-gray-400 bg-gray-100 border border-gray-200/60" },
    ],
    status: "synced",
    updated: "5 min ago",
  },
];

export default function AnalyticsDataBuckets() {
  return (
    <section
      className="py-32 md:py-48 relative overflow-hidden"
      id="dataBuckets"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[500px] bg-amber-500/[0.04]" style={{ top: "5%", left: "10%" }} />
      <div className="orb w-[400px] h-[350px] bg-orange-500/[0.03]" style={{ bottom: "10%", right: "15%" }} />

      <div className="relative max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <span className="text-[11px] text-amber-600 font-mono tracking-[0.2em]">02</span>
            <div className="w-8 h-px bg-amber-500/40" />
            <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">Data Organization</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl mb-6 r-up">
            Your Data.{" "}
            <span className="text-gradient-amber">Your Buckets.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed r-up">
            Create data buckets that match how your organization thinks. Finance, Manufacturing,
            <br />HR — or whatever structure makes sense for you.
          </p>
        </div>

        {/* Browser Window — light theme matching screenshot */}
        <div className="r-scale rounded-2xl overflow-hidden shadow-xl"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
          }}
        >
          {/* macOS Chrome bar */}
          <div className="flex items-center gap-4 px-5 py-3 border-b border-black/[0.06]"
            style={{ background: "linear-gradient(180deg,#f9f8f7,#f5f4f2)" }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/90" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/90" />
              <div className="w-3 h-3 rounded-full bg-green-400/90" />
            </div>
            {/* URL bar */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-black/[0.08] flex-1 max-w-sm">
              <Lock className="w-3 h-3 text-emerald-500 flex-shrink-0" />
              <span className="text-[10px] font-mono text-gray-500">app.genovation.ai</span>
              <span className="text-[10px] font-mono text-gray-400">/settings/data-buckets</span>
            </div>
          </div>

          {/* App content — white bg */}
          <div className="p-6 bg-white">
            {/* Top bar */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Data Buckets</h3>
                <p className="text-sm text-gray-400 font-light">Organize your data sources into logical groups</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search buckets..."
                    className="w-44 pl-8 pr-3 py-2 text-[11px] bg-gray-50 border border-gray-200 rounded-lg text-gray-600 placeholder-gray-300 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                  <Search className="w-3.5 h-3.5 text-gray-300 absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-[11px] font-semibold"
                  style={{ background: "linear-gradient(135deg,#d97706,#f59e0b)" }}
                >
                  <Plus className="w-3.5 h-3.5" />Create Bucket
                </button>
              </div>
            </div>

            {/* Stats row — matches screenshot layout */}
            <div className="flex items-center gap-8 mb-6 p-4 rounded-xl border border-gray-100 bg-gray-50/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Folder className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 leading-tight">7</div>
                  <div className="text-[10px] text-gray-400">Total Buckets</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Database className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 leading-tight">57</div>
                  <div className="text-[10px] text-gray-400">Data Sources</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-100 flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 text-cyan-500" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 leading-tight">12</div>
                  <div className="text-[10px] text-gray-400">Syncing Now</div>
                </div>
              </div>
              <div className="ml-auto text-[11px] text-gray-400">
                Last sync: <span className="text-gray-600 font-medium">2 min ago</span>
              </div>
            </div>

            {/* Table — matching screenshot exactly */}
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left py-3 px-4 text-[10px] text-gray-400 font-semibold tracking-wide">Bucket Name</th>
                    <th className="text-left py-3 px-4 text-[10px] text-gray-400 font-semibold tracking-wide">Sources</th>
                    <th className="text-left py-3 px-4 text-[10px] text-gray-400 font-semibold tracking-wide">Status</th>
                    <th className="text-left py-3 px-4 text-[10px] text-gray-400 font-semibold tracking-wide">Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`hover:bg-amber-50/40 transition-colors${
                        i < tableRows.length - 1 ? " border-b border-gray-50" : ""
                      }`}
                    >
                      {/* Name */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${row.iconBg} flex items-center justify-center flex-shrink-0`}>
                            {row.icon}
                          </div>
                          <div>
                            <div className="text-[12px] text-gray-800 font-semibold">{row.name}</div>
                            <div className="text-[10px] text-gray-400">{row.desc}</div>
                          </div>
                        </div>
                      </td>
                      {/* Tags */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5">
                          {row.tags.map((tag) => (
                            <span key={tag.label}
                              className={`px-2 py-0.5 text-[9px] rounded-md font-medium ${tag.cls}`}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      </td>
                      {/* Status */}
                      <td className="py-3.5 px-4">
                        {row.status === "synced" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-600 text-[9px] font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 soft-pulse" />
                            Synced
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-600 text-[9px] font-medium">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            Syncing
                          </span>
                        )}
                      </td>
                      {/* Updated */}
                      <td className="py-3.5 px-4 text-[11px] text-gray-400">{row.updated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination footer — matches screenshot */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50/50">
                <span className="text-[10px] text-gray-400">Showing 4 of 7 buckets</span>
                <div className="flex items-center gap-1">
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-semibold"
                    style={{ background: "linear-gradient(135deg,#d97706,#f59e0b)" }}
                  >
                    1
                  </button>
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 text-[10px] transition-colors">
                    2
                  </button>
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
