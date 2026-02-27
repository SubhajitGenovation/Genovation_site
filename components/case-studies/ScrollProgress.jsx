// components/ScrollProgress.jsx
"use client";

import { forwardRef } from "react";

export const ScrollProgress = forwardRef((props, ref) => {
  return (
    <div
      id="scrollProgress"
      ref={ref}
      className="fixed top-0 left-0 h-[2px] z-200 origin-left bg-gradient-to-r from-emerald-400 via-cyan-400 via-blue-400 to-violet-400"
      style={{ transform: "scaleX(0)" }}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";