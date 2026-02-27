"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ShieldAlert } from 'lucide-react';
import AcceptableUseTOC from './AcceptableUseTOC';
import AcceptableUseContent from './AcceptableUseContent';

gsap.registerPlugin(ScrollTrigger);

export default function AcceptableUsePage() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(() => {
    if (typeof document === 'undefined') return;

    // Scroll progress bar animation
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });

    // Fade in content on scroll
    const fadeElements = containerRef.current?.querySelectorAll('.legal-body h2, .legal-body p, .legal-body ul, .legal-body table, .legal-body .callout');
    
    if (fadeElements) {
      gsap.fromTo(
        fadeElements,
        { 
          opacity: 0, 
          y: 20 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

  }, { scope: containerRef });

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        ref={progressRef}
        id="scrollProgress" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          width: '100%',
          zIndex: 200,
          transformOrigin: 'left',
          transform: 'scaleX(0)',
          background: 'linear-gradient(90deg, var(--emerald), var(--cyan), var(--blue), var(--violet))'
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-gray-500">
              Legal
            </span>
          </div>
          <h1 className="text-[2.75rem] md:text-[3.5rem] font-light tracking-[-0.03em] text-gray-900 mb-6 leading-[1.1]">
            Acceptable Use Policy
          </h1>
          <p className="text-[15px] text-gray-700 font-light max-w-2xl leading-relaxed">
            This policy defines what constitutes acceptable and prohibited use of the Genovation platform. 
            All Authorized Users and Customers are bound by these terms.
          </p>
          <div className="flex items-center gap-6 mt-6 text-[12px] text-gray-500 font-mono">
            <span>Last updated: February 1, 2026</span>
            <span className="text-gray-300">|</span>
            <span>Effective: February 1, 2026</span>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div 
        style={{
          height: '1px',
          background: 'linear-gradient(90deg,transparent,rgba(16,185,129,0.15),transparent)'
        }} 
        className="max-w-5xl mx-auto"
      />

      {/* Main Content */}
      <section className="py-16 relative" ref={containerRef}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-16">
            {/* TOC Sidebar */}
            <AcceptableUseTOC />

            {/* Legal Content */}
            <AcceptableUseContent />
          </div>
        </div>
      </section>
    </>
  );
}