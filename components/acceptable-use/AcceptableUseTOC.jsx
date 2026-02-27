"use client";

export default function AcceptableUseTOC() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <div className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">
          On this page
        </div>
        <div className="toc">
          <a href="#scope">Scope</a>
          <a href="#acceptable">Acceptable Use</a>
          <a href="#prohibited">Prohibited Use</a>
          <a href="#ai-specific">AI-Specific Restrictions</a>
          <a href="#monitoring">Monitoring & Enforcement</a>
          <a href="#reporting">Reporting Violations</a>
          <a href="#consequences">Consequences</a>
          <a href="#changes">Changes</a>
        </div>
      </div>
    </aside>
  );
}