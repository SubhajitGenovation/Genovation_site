"use client";

import { NAV_ITEMS } from "./config";
import { ChevronDown } from "lucide-react";

export default function NavBar({ active, setActive }) {
  return (
    <div className="hidden md:flex items-center gap-10">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.key}
          onMouseEnter={() => setActive(item.key)}
          className={`group uppercase text-xs tracking-widest flex items-center gap-1 transition ${
            active === item.key
              ? "text-emerald-700"
              : "text-gray-500"
          }`}
        >
          {item.label}
          <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition" />
        </button>
      ))}
    </div>
  );
}
