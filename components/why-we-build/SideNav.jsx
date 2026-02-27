"use client";
import { useState, useEffect, useRef } from "react";

const NAV_SECTIONS = [
  { id: "why",          label: "Why" },
  { id: "ecosystem",   label: "Ecosystem" },
  { id: "origin",      label: "Origin" },
  { id: "journey",     label: "Journey" },
  { id: "problem",     label: "Challenge" },
  { id: "wedge",       label: "Wedge" },
  { id: "architecture",label: "Architecture" },
  { id: "how-it-works",label: "How It Works" },
  { id: "economics",   label: "Economics" },
  { id: "products",    label: "Products" },
  { id: "mentis",      label: "Mentis OS" },
  { id: "landscape",   label: "Landscape" },
  { id: "moat",        label: "Moat" },
  { id: "thesis",      label: "Thesis" },
];

export default function SideNav() {
  const [visible, setVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const trackRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    const hero = document.getElementById("hero");
    let ticking = false;

    function update() {
      const scrollY = window.scrollY;
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight - 200 : 600;

      setVisible(scrollY > heroBottom);

      let idx = 0;
      NAV_SECTIONS.forEach((sec, i) => {
        const el = document.getElementById(sec.id);
        if (el && scrollY >= el.offsetTop - 200) idx = i;
      });
      setActiveIdx(idx);

      // Progress height calculation
      if (trackRef.current && linkRefs.current.length > 1) {
        const first = linkRefs.current[0];
        const last = linkRefs.current[NAV_SECTIONS.length - 1];
        if (first && last) {
          const totalHeight = last.getBoundingClientRect().top - first.getBoundingClientRect().top;
          setProgressHeight((idx / (NAV_SECTIONS.length - 1)) * totalHeight);
        }
      }
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  }

  return (
    <div
      id="sidenav"
      className={`sidenav${visible ? " visible" : ""}`}
    >
      <div className="sidenav-track" id="sidenavTrack" ref={trackRef}>
        {NAV_SECTIONS.map((sec, i) => (
          <a
            key={sec.id}
            ref={(el) => (linkRefs.current[i] = el)}
            href={`#${sec.id}`}
            className={`sidenav-link${activeIdx === i ? " active" : ""}`}
            data-section={sec.id}
            onClick={(e) => { e.preventDefault(); scrollTo(sec.id); }}
          >
            <span className="sidenav-dot" />
            <span className="sidenav-text">{sec.label}</span>
          </a>
        ))}
      </div>
      <div
        className="sidenav-progress"
        id="sidenavProgress"
        style={{ height: progressHeight + "px" }}
      />
    </div>
  );
}
