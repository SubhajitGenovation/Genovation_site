// app/case-studies/page.jsx
"use client";

import { Search, Filter, ChevronDown, X, SearchX } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FilterBar } from "@/components/case-studies/FilterBar";
import { CaseCard } from "@/components/case-studies/CaseCard";
import { Overlay } from "@/components/case-studies/Overlay";
import { caseStudies } from "@/lib/dataForCaseStudies";
import { Nav } from "@/components/case-studies/Nav";
import { Footer } from "@/components/case-studies/Footer";
import { ScrollProgress } from "@/components/case-studies/ScrollProgress";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CaseStudiesPage() {
  const [filteredCases, setFilteredCases] = useState(caseStudies);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCase, setSelectedCase] = useState(null);
  const [overlayOpen, setOverlayOpen] = useState(false);

  const heroRef = useRef(null);
  const mainNavRef = useRef(null);
  const progressRef = useRef(null);
  const orbRefs = useRef([]);

  // Filtering logic
  useEffect(() => {
    let filtered = caseStudies;
    if (activeFilter !== "all") {
      filtered = filtered.filter((c) => c.industry === activeFilter);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((c) =>
        [c.title, c.industry, c.client, c.location, c.problem, c.solution, ...c.technologies, ...c.compliance]
          .join(" ")
          .toLowerCase()
          .includes(query)
      );
    }
    setFilteredCases(filtered);
  }, [activeFilter, searchQuery]);

  const openOverlay = (caseStudy) => {
    setSelectedCase(caseStudy);
    setOverlayOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
    setSelectedCase(null);
    document.body.style.overflow = "";
  };

  // GSAP animations
  useGSAP(
    () => {
      // Initial fade-ins
      gsap.to(".r-fade", {
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });
      gsap.to(".r-up", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
      });

      // Scroll progress bar
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        });
        gsap.set(progressRef.current, { scaleX: 0 });
      }

      // Nav hide/show on scroll
      let lastScroll = 0;
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (mainNavRef.current) {
          if (currentScroll > lastScroll && currentScroll > 200) {
            gsap.to(mainNavRef.current, { y: "-100%", duration: 0.3 });
          } else {
            gsap.to(mainNavRef.current, { y: "0%", duration: 0.3 });
          }
        }
        lastScroll = currentScroll;
      };
      window.addEventListener("scroll", handleScroll);

      // Orb parallax
      orbRefs.current.forEach((orb) => {
        if (orb) {
          gsap.to(orb, {
            y: () => (Math.random() - 0.5) * 200,
            scrollTrigger: {
              trigger: orb,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: heroRef }
  );

  return (
    <>
      <ScrollProgress ref={progressRef} />
      {/* <Nav ref={mainNavRef} /> */}

      {/* Hero */}
      <section ref={heroRef} className="relative pt-36 pb-12 overflow-hidden" id="hero">
        <div
          className="orb w-[600px] h-[500px] bg-emerald-500/[0.05]"
          style={{ top: "-15%", right: "5%" }}
          ref={(el) => (orbRefs.current[0] = el)}
        />
        <div
          className="orb w-[400px] h-[300px] bg-violet-500/[0.04]"
          style={{ bottom: "-10%", left: "-5%" }}
          ref={(el) => (orbRefs.current[1] = el)}
        />
        <div
          className="orb w-[350px] h-[350px] bg-cyan-500/[0.03]"
          style={{ top: "40%", left: "35%" }}
          ref={(el) => (orbRefs.current[2] = el)}
        />

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <div className="mb-6 r-fade">
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-emerald-600">
                Proven impact across industries
              </span>
            </div>
            <h1 className="hero-title text-[4rem] md:text-[5.5rem] font-extralight tracking-[-0.05em] leading-[0.92] text-gray-900 r-up">
              Real outcomes,
              <br />
              <span className="text-gradient">real scale.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 font-light max-w-xl leading-relaxed r-fade">
              Explore how AEGIS and EXPERTUS have delivered measurable transformation across healthcare, defense, aerospace, energy, and more.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-6 md:gap-10 r-fade">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extralight text-gradient" id="countStudies">
                {caseStudies.length}
              </span>
              <span className="font-mono text-[10px] text-gray-400 tracking-[0.12em]">DEPLOYMENTS</span>
            </div>
            <div className="w-px h-8 bg-black/[0.06] self-center" />
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extralight text-gradient" id="countIndustries">
                {new Set(caseStudies.map((c) => c.industry)).size}
              </span>
              <span className="font-mono text-[10px] text-gray-400 tracking-[0.12em]">INDUSTRIES</span>
            </div>
            <div className="w-px h-8 bg-black/[0.06] self-center" />
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extralight text-gradient">8</span>
              <span className="font-mono text-[10px] text-gray-400 tracking-[0.12em]">COUNTRIES</span>
            </div>
            <div className="w-px h-8 bg-black/[0.06] self-center" />
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extralight text-gradient">99.7%</span>
              <span className="font-mono text-[10px] text-gray-400 tracking-[0.12em]">AVG RELIABILITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        resultCount={filteredCases.length}
      />

      {/* Cases Grid */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="cases-grid" id="casesGrid">
            {filteredCases.map((caseStudy) => (
              <CaseCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                onClick={() => openOverlay(caseStudy)}
              />
            ))}
          </div>
          <div className={`no-results ${filteredCases.length === 0 ? "visible" : ""}`} id="noResults">
            <div className="w-16 h-16 rounded-2xl bg-white/60 border border-black/[0.06] flex items-center justify-center mx-auto mb-5">
              <SearchX className="w-7 h-7 text-gray-300" />
            </div>
            <p className="text-xl font-light text-gray-400">No case studies found</p>
            <p className="text-sm text-gray-400/50 mt-2 font-light">Try different keywords or clear filters</p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}
              className="mt-5 px-6 py-2 rounded-full border border-black/[0.08] text-sm font-light text-gray-500 hover:bg-white/50 transition-colors"
            >
              Reset all filters
            </button>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

      {/* Overlay */}
      <Overlay
        isOpen={overlayOpen}
        caseStudy={selectedCase}
        onClose={closeOverlay}
      />
    </>
  );
}