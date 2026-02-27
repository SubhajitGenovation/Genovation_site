"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CareersHero from './CareersHero';
import CareersWhy from './CareersWhy';
import CareersValues from './CareersValues';
import CareersRoles from './CareersRoles';
import CareersProcess from './CareersProcess';
import CareersLife from './CareersLife';
import CareersCTA from './CareersCTA';

gsap.registerPlugin(ScrollTrigger);

export default function CareersPage() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const navRef = useRef(null);

  useGSAP(() => {
    if (typeof document === 'undefined') return;

    // Scroll progress bar
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

    // Nav hide on scroll down
    ScrollTrigger.create({
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 100) {
          navRef.current.style.transform = 'translateY(-100%)';
        } else {
          navRef.current.style.transform = 'translateY(0)';
        }
      }
    });

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
          start: 'top 88%',
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
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });
    });

    gsap.utils.toArray('.r-scale').forEach(el => {
      gsap.to(el, {
        scale: 1,
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

    gsap.utils.toArray('.r-fade').forEach(el => {
      gsap.to(el, {
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

    // SVG node animations
    const nodes = document.querySelectorAll('.node-circle');
    nodes.forEach((node, i) => {
      gsap.to(node, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '#heroDiagram',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    });

    // SVG path animations
    const paths = document.querySelectorAll('.flow-path');
    paths.forEach((path, i) => {
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        delay: 0.8 + i * 0.1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#heroDiagram',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Flow dots
    const dots = document.querySelectorAll('.flow-dot');
    dots.forEach((dot, i) => {
      gsap.to(dot, {
        opacity: 1,
        duration: 0.5,
        delay: 2 + i * 0.1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '#heroDiagram',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Orb parallax
    document.querySelectorAll('.orb').forEach(orb => {
      gsap.to(orb, {
        y: (Math.random() - 0.5) * 200,
        x: (Math.random() - 0.5) * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: orb.closest('section') || 'body',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* Scroll Progress */}
      <div 
        ref={progressRef}
        id="scrollProgress"
      />


      <CareersHero />
      <CareersWhy />
      <CareersValues />
      <CareersRoles />
      <CareersProcess />
      <CareersLife />
      <CareersCTA />
    </div>
  );
}