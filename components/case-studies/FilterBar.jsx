// components/FilterBar.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Filter, ChevronDown, X } from "lucide-react";
import { caseStudies } from "@/lib/dataForCaseStudies";
import { industryIcons, industryColors, indClass } from "@/lib/industry";

export const FilterBar = ({
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
  resultCount,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const industries = [...new Set(caseStudies.map((c) => c.industry))].sort();
  const counts = caseStudies.reduce((acc, c) => {
    acc[c.industry] = (acc[c.industry] || 0) + 1;
    return acc;
  }, {});

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const selectFilter = (industry) => {
    setActiveFilter(industry);
    setDropdownOpen(false);
  };

  const clearFilter = () => {
    setActiveFilter("all");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      className="sticky top-0 bg-[#f5f3f0]/92 backdrop-blur-2xl border-b border-black/[0.04] transition-[top] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
      id="filterBar"
    >
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <div className="search-wrap">
            <Search className="w-[18px] h-[18px] text-gray-400/70 absolute left-[16px] top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              className="search-input"
              id="searchInput"
              placeholder="Search by title, industry, technology, location..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              className={`search-clear ${searchQuery ? "visible" : ""}`}
              id="searchClear"
              onClick={clearSearch}
            >
              <X className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </div>

          <div className="dropdown-wrap" ref={dropdownRef}>
            <div
              className={`dropdown-trigger ${dropdownOpen ? "open" : ""}`}
              id="dropdownTrigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className={`dd-label ${activeFilter === "all" ? "placeholder" : ""}`} id="ddLabel">
                {activeFilter === "all" ? "All Industries" : activeFilter}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400 dd-chevron" />
            </div>
            <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`} id="dropdownMenu">
              <div
                className={`dd-option ${activeFilter === "all" ? "active" : ""}`}
                data-filter="all"
                onClick={() => selectFilter("all")}
              >
                <div className="dd-icon" style={{ background: "rgba(0,0,0,0.03)" }}>
                  <Filter className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <span>All Industries</span>
                <span className="dd-count">{caseStudies.length}</span>
              </div>
              {industries.map((ind) => {
                const Icon = industryIcons[ind] || Filter;
                const color = industryColors[ind] || "#6b7280";
                return (
                  <div
                    key={ind}
                    className={`dd-option ${indClass(ind)} ${activeFilter === ind ? "active" : ""}`}
                    data-filter={ind}
                    onClick={() => selectFilter(ind)}
                  >
                    <div
                      className="dd-icon"
                      style={{ background: `${color}10`, border: `1px solid ${color}20` }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color }} />
                    </div>
                    <span>{ind}</span>
                    <span className="dd-count">{counts[ind]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3 ml-0 md:ml-2">
            <span
              className={`active-tag ${activeFilter !== "all" ? "visible" : ""} ${indClass(activeFilter)}`}
              id="activeTag"
              onClick={clearFilter}
            >
              <X className="w-3 h-3" />
              <span id="activeTagLabel">{activeFilter}</span>
            </span>
            <span className="result-count" id="resultCount">
              {resultCount > 0 ? `${resultCount} result${resultCount !== 1 ? "s" : ""}` : ""}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};