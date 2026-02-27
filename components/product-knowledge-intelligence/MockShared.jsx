"use client";

import { Lock, Paperclip, Send, Bot } from "lucide-react";

// ─── MockHeader ───────────────────────────────────────────
export function MockHeader({
  label,
  botGradient,
  ssoLabel = "SOVEREIGN",
  ssoColor = "text-emerald-600",
}) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/[0.08] bg-black/[0.03] rounded-t-[20px]">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
      <span className="text-[9px] text-gray-500 font-mono ml-2 truncate">{label}</span>
      <div className="ml-auto flex items-center gap-2 flex-shrink-0">
        <Lock className="w-3 h-3 text-emerald-600" />
        <span className={`text-[8px] font-mono ${ssoColor}`}>{ssoLabel}</span>
      </div>
    </div>
  );
}

// ─── UserMsg ──────────────────────────────────────────────
export function UserMsg({ initials, msg }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
        <span className="text-[9px] font-semibold text-gray-500">{initials}</span>
      </div>
      <div className="px-4 py-3 rounded-xl rounded-tl-sm bg-black/[0.04] border border-black/[0.06] max-w-[80%]">
        <p className="text-[12px] text-gray-600 font-light">{msg}</p>
      </div>
    </div>
  );
}

// ─── BotAvatar ────────────────────────────────────────────
export function BotAvatar({ gradient }) {
  return (
    <div
      className={`w-7 h-7 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
    >
      <Bot className="w-3.5 h-3.5 text-white" />
    </div>
  );
}

// ─── ResultItem ───────────────────────────────────────────
// NOTE: Tailwind needs full class names — no dynamic concatenation.
// We use a lookup map for colors.
const COLOR_MAP = {
  emerald: {
    bg:   "bg-emerald-500/[0.1]",
    icon: "text-emerald-500",
    label:"text-emerald-600",
  },
  sky: {
    bg:   "bg-sky-500/[0.1]",
    icon: "text-sky-500",
    label:"text-sky-600",
  },
  violet: {
    bg:   "bg-violet-500/[0.1]",
    icon: "text-violet-500",
    label:"text-violet-600",
  },
  amber: {
    bg:   "bg-amber-500/[0.1]",
    icon: "text-amber-500",
    label:"text-amber-600",
  },
  red: {
    bg:   "bg-red-500/[0.1]",
    icon: "text-red-500",
    label:"text-red-600",
  },
  cyan: {
    bg:   "bg-cyan-500/[0.1]",
    icon: "text-cyan-500",
    label:"text-cyan-600",
  },
};

export function ResultItem({ icon: Icon, color, label, text }) {
  const c = COLOR_MAP[color] || COLOR_MAP.sky;
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 rounded-md ${c.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
        <Icon className={`w-3 h-3 ${c.icon}`} />
      </div>
      <p className="text-[12px] text-gray-600 font-light leading-relaxed">
        <span className={`${c.label} font-medium`}>{label}</span>{" "}
        {text}
      </p>
    </div>
  );
}

// ─── ActionBtn ────────────────────────────────────────────
const BTN_COLOR_MAP = {
  sky:    { text:"text-sky-700",    bg:"bg-sky-500/[0.06]",    border:"border-sky-500/[0.15]",    hover:"hover:bg-sky-500/[0.1]" },
  violet: { text:"text-violet-700", bg:"bg-violet-500/[0.06]", border:"border-violet-500/[0.15]", hover:"hover:bg-violet-500/[0.1]" },
  amber:  { text:"text-amber-700",  bg:"bg-amber-500/[0.06]",  border:"border-amber-500/[0.15]",  hover:"hover:bg-amber-500/[0.1]" },
  emerald:{ text:"text-emerald-700",bg:"bg-emerald-500/[0.06]",border:"border-emerald-500/[0.15]",hover:"hover:bg-emerald-500/[0.1]" },
  cyan:   { text:"text-cyan-700",   bg:"bg-cyan-500/[0.06]",   border:"border-cyan-500/[0.15]",   hover:"hover:bg-cyan-500/[0.1]" },
  red:    { text:"text-red-700",    bg:"bg-red-500/[0.06]",    border:"border-red-500/[0.15]",    hover:"hover:bg-red-500/[0.1]" },
};

export function ActionBtn({ color, label }) {
  const c = BTN_COLOR_MAP[color] || BTN_COLOR_MAP.sky;
  return (
    <button
      className={`px-3 py-1.5 text-[10px] ${c.text} ${c.bg} rounded-lg border ${c.border} font-light ${c.hover} transition-colors`}
    >
      {label}
    </button>
  );
}

// ─── CitationRow ──────────────────────────────────────────
const CITE_COLOR_MAP = {
  emerald:{ icon:"text-emerald-500", label:"text-emerald-600" },
  sky:    { icon:"text-sky-500",     label:"text-sky-600" },
  violet: { icon:"text-violet-500",  label:"text-violet-600" },
  amber:  { icon:"text-amber-500",   label:"text-amber-600" },
  red:    { icon:"text-red-500",     label:"text-red-600" },
  cyan:   { icon:"text-cyan-500",    label:"text-cyan-600" },
};

export function CitationRow({ icon: Icon, color, label, conflict = false }) {
  const c = CITE_COLOR_MAP[color] || CITE_COLOR_MAP.sky;
  return (
    <div
      className={`p-2.5 rounded-lg bg-white/80 border ${
        conflict ? "border-red-500/[0.15]" : "border-black/[0.06]"
      }`}
    >
      <div className="flex items-center gap-2">
        <Icon className={`w-3 h-3 ${c.icon}`} />
        <span className={`text-[10px] ${c.label} font-mono`}>{label}</span>
      </div>
    </div>
  );
}

// ─── MockFooter ───────────────────────────────────────────
export function MockFooter({ placeholder, gradient }) {
  return (
    <div className="px-5 py-3 border-t border-black/[0.06] bg-[#faf8f6] flex items-center gap-3 rounded-b-[20px]">
      <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-black/[0.02] border border-black/[0.06]">
        <Paperclip className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
        <span className="flex-1 text-xs text-gray-400 font-light truncate">{placeholder}</span>
        <button
          className={`w-7 h-7 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
        >
          <Send className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
    </div>
  );
}
