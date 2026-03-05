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
  const [mobileActivePanel, setMobileActivePanel] = useState(""); // Track which panel is open in mobile
  const closeTimerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActivePanel("");
    setMobileMenuOpen(false);
    setMobileActivePanel(""); // Reset mobile panel on route change
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

  // Handle mobile nav item click
  const handleMobileNavClick = (itemKey) => {
    if (mobileActivePanel === itemKey) {
      // If same panel is already open, close it
      setMobileActivePanel("");
    } else {
      // Open the selected panel
      setMobileActivePanel(itemKey);
    }
  };

  // Go back to main mobile menu
  const handleMobileBack = () => {
    setMobileActivePanel("");
  };

  // Get the component for mobile panel
  const MobilePanelComponent = mobileActivePanel ? PANEL_COMPONENTS[mobileActivePanel] : null;

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

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/talk-to-sales">
              <Button variant="primary" icon="arrow" className="text-white cursor-pointer">Talk to Sales</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600 z-10"
            onClick={() => {
              setMobileMenuOpen((open) => !open);
              setMobileActivePanel(""); // Reset mobile panel when toggling menu
            }}
          >
            <Icon
              name={mobileMenuOpen ? "close" : "menu"}
              className="w-6 h-6"
            />
          </button>
        </div>
      </motion.nav>

      {/* Desktop Mega overlay */}
      <AnimatePresence>
        {activePanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/5 z-40 hidden md:block"
            style={{ top: scrolled ? "60px" : "82px" }}
            onMouseEnter={scheduleClose}
          />
        )}
      </AnimatePresence>

      {/* Desktop Mega panels */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none hidden md:block">
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
            className="fixed inset-0 z-50 bg-[#fbf9f6] pt-[82px] overflow-y-auto md:hidden"
          >
            {/* Mobile Header with Back button when in panel view */}
            {mobileActivePanel ? (
              <div className="sticky top-0 bg-[#fbf9f6] border-b border-gray-100 px-6 py-4 flex items-center gap-3 z-10">
                <button
                  onClick={handleMobileBack}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Icon name="chevron-left" className="w-5 h-5 text-gray-600" />
                </button>
                <span className="text-sm font-medium text-emerald-700 uppercase tracking-widest">
                  {NAV_ITEMS.find(item => item.key === mobileActivePanel)?.label}
                </span>
              </div>
            ) : null}

            {/* Mobile Content */}
            <div className="px-6 py-4">
              {!mobileActivePanel ? (
                /* Main Mobile Menu */
                <div className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <button
                        onClick={() => handleMobileNavClick(item.key)}
                        className="w-full flex items-center justify-between text-left text-lg font-medium text-gray-900 border-b border-gray-100 py-4 hover:text-emerald-700 transition-colors"
                      >
                        {item.label}
                        <Icon name="chevron-right" className="w-4 h-4 text-gray-400" />
                      </button>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6"
                  >
                    <Link href="/talk-to-sales" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="primary" icon="arrow" className="w-full text-white">
                        Talk to Sales
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              ) : (
                /* Mobile Panel View */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pb-8"
                >
                  {MobilePanelComponent && <MobilePanelComponent />}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}