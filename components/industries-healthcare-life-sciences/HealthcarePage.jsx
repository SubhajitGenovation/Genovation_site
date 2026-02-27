"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import HealthcareHero from './HealthcareHero';
import HealthcareArchitecture from './HealthcareArchitecture';
import HealthcareProducts from './HealthcareProducts';
import HealthcareUseCases from './HealthcareUseCases';
import HealthcareCTA from './HealthcareCTA';

gsap.registerPlugin(ScrollTrigger);

export default function HealthcarePage() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const navRef = useRef(null);

  useGSAP(() => {
    if (typeof document === 'undefined') return;

    // Scroll progress bar
    if (progressRef.current) {
      gsap.set(progressRef.current, { scaleX: 0 });
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
    }

    // Nav hide on scroll (only if navRef exists)
    if (navRef.current) {
      ScrollTrigger.create({
        onUpdate: (self) => {
          if (self.direction === 1 && self.scroll() > 100) {
            navRef.current.style.transform = 'translateY(-100%)';
          } else {
            navRef.current.style.transform = 'translateY(0)';
          }
        }
      });
    }

    // Reveal animations
    gsap.utils.toArray('.r-up').forEach(el => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });
    });

    gsap.utils.toArray('.r-left').forEach(el => {
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    gsap.utils.toArray('.r-right').forEach(el => {
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Orb parallax
    document.querySelectorAll('.orb').forEach(o => {
      gsap.to(o, {
        y: (Math.random() - 0.5) * 250,
        x: (Math.random() - 0.5) * 120,
        ease: 'none',
        scrollTrigger: {
          trigger: o.closest('section') || 'body',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2.5
        }
      });
    });

    // Ensure ScrollTrigger refreshes after layout
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* Scroll Progress */}
      <div 
        ref={progressRef}
        id="scrollProgress"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          zIndex: 200,
          width: '100%',
          transformOrigin: 'left',
          background: 'linear-gradient(90deg, var(--teal), #0891b2, var(--cyan), var(--teal))'
        }}
      />

      <HealthcareHero />
      <HealthcareArchitecture />
      <HealthcareProducts />
      <HealthcareUseCases />
      <HealthcareCTA />
    </div>
  );
}