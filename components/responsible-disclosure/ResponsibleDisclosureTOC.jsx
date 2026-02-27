"use client";

export default function ResponsibleDisclosureTOC() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <div className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">
          On this page
        </div>
        <div className="toc">
          <a href="#scope">Scope</a>
          <a href="#reporting">How to Report</a>
          <a href="#expect">What to Expect</a>
          <a href="#guidelines">Guidelines</a>
          <a href="#in-scope">In-Scope Targets</a>
          <a href="#out-scope">Out of Scope</a>
          <a href="#recognition">Recognition</a>
          <a href="#legal">Legal Safe Harbor</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </aside>
  );
}