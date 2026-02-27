"use client";

export default function DSARRequestTOC() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <div className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">
          On this page
        </div>
        <div className="toc">
          <a href="#overview">Overview</a>
          <a href="#rights">Your Rights</a>
          <a href="#form">Submit a Request</a>
          <a href="#process">Our Process</a>
          <a href="#timeline">Timeline</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </aside>
  );
}