"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProductsPanel from "./panels/ProductsPanel";
import PlatformPanel from "./panels/PlatformPanel";
import SecurityPanel from "./panels/SecurityPanel";
import IndustriesPanel from "./panels/IndustriesPanel";
import CompanyPanel from "./panels/CompanyPanel";
import Icon from "./ui/Icon";
import TalkToSales from "../common/TalkToSales";
import Button from "../common/Button";


const toPublicPath = (href = "/") => href.replace(/^\/a-/, "/");


const NAV_ITEMS = [
  { key: "products", label: "Products" },
  { key: "platform", label: "Platform" },
  { key: "security", label: "Security" },
  { key: "industries", label: "Industries" },
  { key: "company", label: "Company" },
];


const PANEL_COMPONENTS = {
  products: ProductsPanel,
  platform: PlatformPanel,
  security: SecurityPanel,
  industries: IndustriesPanel,
  company: CompanyPanel,
};


export default function Header() {
  const pathname = usePathname();
  const [activePanel, setActivePanel] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    setActivePanel("");
    setMobileMenuOpen(false);
  }, [pathname]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };


  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setActivePanel("");
      closeTimerRef.current = null;
    }, 150);
  };


  const openPanel = (panelKey) => {
    clearCloseTimer();
    setActivePanel(panelKey);
  };


  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
            fixed top-0 left-0 right-0 z-50 
            bg-[#f5f3f0]/85 border-b border-black/[0.08] 
            backdrop-blur-[20px] backdrop-saturate-[1.4]
            transition-all duration-300
            ${scrolled ? "py-3 shadow-sm" : "py-5"}
        `}
        id="mainNav"
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 relative z-10">
            <img
              src="/logo-black.svg"
              alt="Genovation"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-7" : "h-8"}`}
            />
          </Link>


          <div
            className="hidden md:flex items-center gap-9"
            onMouseLeave={scheduleClose}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className={`
                  relative py-2 cursor-pointer text-[13px] font-medium tracking-wide uppercase transition-colors
                  ${activePanel === item.key ? "text-emerald-700" : "text-gray-600 hover:text-gray-900"}
                `}
                data-panel={item.key}
                key={item.key}
                onMouseEnter={() => openPanel(item.key)}
              >
                <span className="flex items-center gap-1">
                  {item.label}
                  <Icon name="chevron-right" className={`w-2.5 h-2.5 transition-transform duration-200 ${activePanel === item.key ? "rotate-90 text-emerald-600" : "rotate-0 text-gray-400 group-hover:text-gray-600"}`} />
                </span>


                {activePanel === item.key && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-emerald-700 max-w-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>


          {/* ✅ Wrapped with Link for /talk-to-sales redirect */}
          <div className="hidden md:block">
            <Link href="/talk-to-sales">
              <Button variant="primary" icon="arrow" className="text-white cursor-pointer">Talk to Sales</Button>
            </Link>
          </div>


          <button
            type="button"
            className="md:hidden p-2 text-gray-600 z-10"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <Icon
              name={mobileMenuOpen ? "close" : "menu"}
              className="w-6 h-6"
            />
          </button>
        </div>
      </motion.nav>


      {/* Mega overlay */}
      <AnimatePresence>
        {activePanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/5 z-40"
            style={{ top: scrolled ? "60px" : "82px" }}
            onMouseEnter={scheduleClose}
          />
        )}
      </AnimatePresence>


      {/* Mega panels */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <AnimatePresence>
          {activePanel && (
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 bg-[#fbf9f6] shadow-xl border-b border-black/[0.05] origin-top pointer-events-auto overflow-hidden no-scrollbar"
              style={{ top: scrolled ? "60px" : "82px", maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}
              onMouseEnter={() => openPanel(activePanel)}
              onMouseLeave={scheduleClose}
            >
              <div className="max-w-7xl mx-auto px-8 relative">
                {(() => {
                  const Component = PANEL_COMPONENTS[activePanel];
                  return Component ? <Component /> : null;
                })()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#fbf9f6] pt-[82px] px-6 overflow-y-auto md:hidden"
          >
            <div className="flex flex-col gap-4 py-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link href="#" className="flex items-center justify-between text-lg font-medium text-gray-900 border-b border-gray-100 pb-3">
                    {item.label}
                    <Icon name="chevron-right" className="w-4 h-4 text-gray-400" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <TalkToSales className="w-full" size="lg" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
