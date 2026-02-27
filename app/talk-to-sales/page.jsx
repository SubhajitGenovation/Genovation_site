"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare, ShieldCheck, Clock, Lock, Calendar, Users, FileText,
  ArrowRight, ArrowLeft, Shield, EyeOff, Building2, Handshake,
  FlaskConical, Compass, Route, Mail, Check, Brain, Target
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TalkToSalesPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', title: '', industry: '', companySize: '',
    interest: '', message: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Hero char animation
    document.querySelectorAll('.hero-line').forEach(line => {
      const text = line.textContent || '';
      line.innerHTML = '';
      text.split('').forEach(c => {
        const span = document.createElement('span');
        span.className = 'ts-char';
        span.textContent = c === ' ' ? '\u00A0' : c;
        line.appendChild(span);
      });
    });

    const heroTL = gsap.timeline({ delay: 0.2 });
    heroTL
      .to('#heroBadge', { opacity: 1, duration: 0.8, ease: 'power2.out' })
      .to('.hero-line:first-child .ts-char', { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.035, duration: 0.9, ease: 'power4.out' }, '-=0.4')
      .to('.hero-line:last-child .ts-char', { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.025, duration: 0.9, ease: 'power4.out' }, '-=0.5')
      .to('#heroSub', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
      .to('#trustBadges', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to('#sideInfo', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to('#formCard', { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' }, '-=0.6');

    gsap.utils.toArray('.ts-r-up').forEach((el) => {
      gsap.to(el, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });

    gsap.utils.toArray('.ts-r-left').forEach((el) => {
      gsap.to(el, {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });

    gsap.utils.toArray('.ts-r-right').forEach((el) => {
      gsap.to(el, {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const validateStep = (step) => {
    let valid = true;
    const newErrors = {};
    if (step === 1) {
      if (!formData.firstName.trim()) { newErrors.firstName = true; valid = false; }
      if (!formData.lastName.trim()) { newErrors.lastName = true; valid = false; }
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = true; valid = false; }
    }
    if (step === 2) {
      if (!formData.company.trim()) { newErrors.company = true; valid = false; }
      if (!formData.industry) { newErrors.industry = true; valid = false; }
    }
    setErrors(newErrors);
    if (!valid) {
      Object.keys(newErrors).forEach(key => {
        const el = document.getElementById(key);
        if (el) gsap.fromTo(el, { x: -6 }, { x: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      });
    }
    return valid;
  };

  const goToStep = (n) => {
    if (n > currentStep && !validateStep(currentStep)) return;
    setCurrentStep(n);
  };

  const handleSubmit = () => {
    if (!validateStep(3)) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <>
      <style>{`
        :root {
          --emerald: #10b981;
          --cyan: #06b6d4;
          --blue: #3b82f6;
          --violet: #8b5cf6;
          --bg: #f5f3f0;
        }

        /* Scroll lines */
        .ts-scroll-lines-wrap { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; pointer-events: none; z-index: 0; overflow: visible; }
        .ts-scroll-line { position: absolute; top: 0; left: 0; width: 100%; height: 1000vh; will-change: transform; }
        .ts-scroll-line svg { width: 100%; height: 100%; }

        /* Orb */
        .ts-orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }

        /* Mesh bg */
        .ts-mesh { background-image: linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px); background-size: 100px 100px; }

        /* Divider */
        .ts-divider { height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.2) 50%, transparent 100%); position: relative; z-index: 2; }

        /* Text gradient */
        .ts-gradient { background: linear-gradient(135deg, #059669 0%, #0891b2 50%, #2563eb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        /* Char animation */
        .ts-char { display: inline-block; opacity: 0; transform: translateY(100%) rotateX(-90deg) skewX(-8deg); transform-origin: bottom center; }

        /* Hero initial states */
        #heroBadge { opacity: 0; }
        #heroSub { opacity: 0; transform: translateY(30px); }
        #trustBadges { opacity: 0; transform: translateY(20px); }
        #sideInfo { opacity: 0; transform: translateY(20px); }
        #formCard { opacity: 0; transform: translateX(60px); }
        .ts-r-up { opacity: 0; transform: translateY(60px); }
        .ts-r-left { opacity: 0; transform: translateX(-60px); }
        .ts-r-right { opacity: 0; transform: translateX(60px); }

        /* ── FORM CARD ── */
        .ts-form-card {
          background: rgba(255,255,255,0.97);
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 28px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02), 0 12px 40px rgba(0,0,0,0.05), 0 60px 100px -40px rgba(16,185,129,0.07);
          position: relative;
          overflow: hidden;
        }
        .ts-form-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 10%, rgba(16,185,129,0.25) 30%, rgba(6,182,212,0.2) 70%, transparent 90%);
        }

        /* ── FLOATING LABEL FIELDS ── */
        .ts-ff { position: relative; }
        .ts-ff-input {
          width: 100%;
          padding: 26px 0 10px 0;
          border: none;
          border-bottom: 1.5px solid rgba(0,0,0,0.08);
          background: transparent;
          font-size: 15px;
          font-weight: 300;
          color: #1a1a2e;
          outline: none;
          transition: border-color 0.4s cubic-bezier(0.23,1,0.32,1);
          -webkit-appearance: none;
          border-radius: 0;
          font-family: inherit;
        }
        .ts-ff-input::placeholder { color: transparent; }
        .ts-ff-label {
          position: absolute;
          left: 0; top: 26px;
          font-size: 15px;
          font-weight: 300;
          color: rgba(0,0,0,0.35);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
        }
        .ts-ff-line {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 1.5px;
          background: linear-gradient(90deg, var(--emerald), var(--cyan));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.23,1,0.32,1);
        }
        .ts-ff-input:focus + .ts-ff-label,
        .ts-ff-input:not(:placeholder-shown) + .ts-ff-label {
          top: 4px; font-size: 10px; font-weight: 400;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(0,0,0,0.4);
        }
        .ts-ff-input:focus + .ts-ff-label { color: var(--emerald) !important; }
        .ts-ff-input:focus ~ .ts-ff-line { transform: scaleX(1); }
        .ts-ff-input:hover:not(:focus) { border-bottom-color: rgba(0,0,0,0.15); }

        /* Select */
        select.ts-ff-input {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 2px center;
          padding-right: 24px;
        }
        select.ts-ff-input.ts-has-value + .ts-ff-label,
        select.ts-ff-input + .ts-ff-label {
          top: 4px; font-size: 10px; font-weight: 400;
          letter-spacing: 0.1em; text-transform: uppercase;
        }

        /* Textarea */
        textarea.ts-ff-input { resize: none; min-height: 100px; padding-top: 30px; line-height: 1.7; }
        textarea.ts-ff-input + .ts-ff-label { top: 30px; }
        textarea.ts-ff-input:focus + .ts-ff-label,
        textarea.ts-ff-input:not(:placeholder-shown) + .ts-ff-label { top: 6px; }

        /* Error state */
        .ts-ff-input.ts-error { border-bottom-color: rgba(239,68,68,0.5); }
        .ts-ff-input.ts-error + .ts-ff-label { color: rgba(239,68,68,0.7) !important; }
        .ts-ff-input.ts-error ~ .ts-ff-line { background: linear-gradient(90deg,#ef4444,#f87171); transform: scaleX(1); }

        /* ── STEP PROGRESS ── */
        .ts-step-progress { display: flex; align-items: center; margin-bottom: 44px; }
        .ts-step-dot {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; flex-shrink: 0; position: relative;
          transition: all 0.5s cubic-bezier(0.23,1,0.32,1);
          font-family: 'Space Mono', monospace;
        }
        .ts-step-dot.inactive { background: rgba(0,0,0,0.04); color: rgba(0,0,0,0.25); border: 1.5px solid rgba(0,0,0,0.08); }
        .ts-step-dot.active { background: var(--emerald); color: #fff; border: 1.5px solid var(--emerald); box-shadow: 0 0 0 5px rgba(16,185,129,0.1), 0 2px 10px rgba(16,185,129,0.25); }
        .ts-step-dot.done { background: rgba(16,185,129,0.1); color: var(--emerald); border: 1.5px solid rgba(16,185,129,0.25); }
        .ts-step-label {
          font-size: 9px; font-weight: 300; letter-spacing: 0.08em;
          color: rgba(0,0,0,0.3); position: absolute;
          top: 36px; left: 50%; transform: translateX(-50%);
          white-space: nowrap; transition: color 0.4s;
          font-family: inherit;
        }
        .ts-step-dot.active .ts-step-label,
        .ts-step-dot.done .ts-step-label { color: rgba(0,0,0,0.5); }
        .ts-step-connector { flex: 1; height: 1.5px; background: rgba(0,0,0,0.07); position: relative; overflow: hidden; }
        .ts-step-connector-fill {
          position: absolute; top: 0; left: 0; height: 100%; width: 0;
          background: linear-gradient(90deg, var(--emerald), var(--cyan));
          transition: width 0.8s cubic-bezier(0.23,1,0.32,1);
        }
        .ts-step-connector.filled .ts-step-connector-fill { width: 100%; }

        /* ── BUTTONS ── */
        .ts-btn-primary {
          padding: 16px 36px; border-radius: 14px; border: none; cursor: pointer;
          font-size: 14px; font-weight: 400; letter-spacing: 0.04em;
          display: inline-flex; align-items: center; gap: 10px;
          background: #1a1a2e; color: #fff;
          transition: all 0.5s cubic-bezier(0.23,1,0.32,1);
          position: relative; overflow: hidden; font-family: inherit;
        }
        .ts-btn-primary::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--emerald), var(--cyan));
          opacity: 0; transition: opacity 0.5s;
        }
        .ts-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.15); }
        .ts-btn-primary:hover::before { opacity: 1; }
        .ts-btn-primary:hover span, .ts-btn-primary:hover svg { color: #000 !important; }
        .ts-btn-primary span, .ts-btn-primary svg { position: relative; z-index: 1; transition: color 0.5s; }

        .ts-btn-back {
          padding: 16px 24px; border-radius: 14px; border: none; cursor: pointer;
          font-size: 14px; font-weight: 300; background: transparent;
          color: rgba(0,0,0,0.4); transition: all 0.4s;
          display: inline-flex; align-items: center; gap: 6px; font-family: inherit;
        }
        .ts-btn-back:hover { color: rgba(0,0,0,0.7); }

        .ts-btn-submit {
          padding: 20px 36px; border-radius: 16px; border: none; cursor: pointer;
          font-size: 15px; font-weight: 400; letter-spacing: 0.03em;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          background: #1a1a2e; color: #fff;
          position: relative; overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23,1,0.32,1); font-family: inherit;
        }
        .ts-btn-submit::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--emerald) 0%, var(--cyan) 100%);
          opacity: 0; transition: opacity 0.6s;
        }
        .ts-btn-submit:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
        .ts-btn-submit:hover::before { opacity: 1; }
        .ts-btn-submit:hover span, .ts-btn-submit:hover svg { color: #000 !important; }
        .ts-btn-submit span, .ts-btn-submit svg { position: relative; z-index: 1; transition: color 0.6s; }
        .ts-btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        /* ── ENCRYPTED STRIP ── */
        .ts-encrypted-strip {
          display: flex; align-items: center; justify-content: center; gap: 20px;
          padding: 16px 0 0 0; border-top: 1px solid rgba(0,0,0,0.04); margin-top: 32px;
        }
        .ts-encrypted-item { display: flex; align-items: center; gap: 5px; font-size: 10px; color: rgba(0,0,0,0.28); font-weight: 300; }

        /* ── TRUST BADGE ── */
        .ts-trust-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 10px;
          background: rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.06);
          font-size: 12px; font-weight: 300; color: rgba(0,0,0,0.5);
          transition: all 0.3s;
        }
        .ts-trust-badge:hover { border-color: rgba(16,185,129,0.15); background: rgba(16,185,129,0.04); }

        /* ── INFO STRIP ── */
        .ts-info-strip {
          background: rgba(255,255,255,0.7); border: 1px solid rgba(0,0,0,0.06);
          border-radius: 16px; padding: 20px 24px;
          transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
        }
        .ts-info-strip:hover { border-color: rgba(16,185,129,0.15); transform: translateX(4px); }

        /* ── PATH CARD ── */
        .ts-path-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 20px; padding: 32px;
          transition: all 0.5s cubic-bezier(0.23,1,0.32,1);
          position: relative; overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }
        .ts-path-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: linear-gradient(90deg, var(--emerald), var(--cyan));
          opacity: 0; transition: opacity 0.4s;
        }
        .ts-path-card:hover { transform: translateY(-6px); border-color: rgba(16,185,129,0.2); box-shadow: 0 30px 60px -20px rgba(16,185,129,0.1); }
        .ts-path-card:hover::before { opacity: 1; }

        /* ── SUCCESS ANIMATION ── */
        @keyframes ts-checkDraw { 0% { stroke-dashoffset: 50; } 100% { stroke-dashoffset: 0; } }
        .ts-success-check { stroke-dasharray: 50; stroke-dashoffset: 50; animation: ts-checkDraw 0.6s ease-out 0.3s forwards; }
        @keyframes ts-successFade { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .ts-success-fade { opacity: 0; animation: ts-successFade 0.8s ease-out forwards; }

        /* ── PULSE ── */
        @keyframes ts-softPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .ts-pulse { animation: ts-softPulse 3s ease-in-out infinite; }

        /* ── PIPE FLOW ── */
        @keyframes ts-pipeFlow { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        .ts-pipe-flow {
          background: linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.3) 25%, rgba(6,182,212,0.4) 50%, rgba(16,185,129,0.3) 75%, transparent 100%);
          background-size: 200% 100%; animation: ts-pipeFlow 3s linear infinite;
        }

        /* ── HERO DISPLAY ── */
        .ts-display-hero { font-weight: 300; letter-spacing: -0.05em; line-height: 0.95; }
        .ts-display-section { font-weight: 300; letter-spacing: -0.04em; line-height: 1.0; }
      `}</style>

      {/* Scroll Lines */}
      <div className="ts-scroll-lines-wrap" aria-hidden="true">
        <div className="ts-scroll-line" id="sLine1">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="sl1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="8%" stopColor="#10b981" />
                <stop offset="35%" stopColor="#06b6d4" />
                <stop offset="60%" stopColor="#3b82f6" />
                <stop offset="85%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M180,0 C220,400 60,700 200,1200 C340,1700 80,2000 160,2600 C240,3200 40,3500 180,4100 C320,4700 60,5200 200,5800 C340,6400 100,6800 160,7500 C220,8200 60,8600 180,9200 L180,10000" stroke="url(#sl1)" strokeWidth="2" strokeOpacity="0.12" strokeLinecap="round" />
          </svg>
        </div>
        <div className="ts-scroll-line" id="sLine2">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="sl2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="12%" stopColor="#06b6d4" />
                <stop offset="45%" stopColor="#8b5cf6" />
                <stop offset="80%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M1280,0 C1240,500 1380,900 1260,1500 C1140,2100 1360,2600 1300,3200 C1240,3800 1400,4200 1280,4800 C1160,5400 1380,5900 1300,6500 C1220,7100 1400,7600 1280,8200 L1280,10000" stroke="url(#sl2)" strokeWidth="1.5" strokeOpacity="0.1" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* ═══════════════════════════════
           HERO
          ═══════════════════════════════ */}
      <section className="relative min-h-screen flex items-start pt-32 pb-24 overflow-hidden bg-[#f5f3f0]" id="hero">
        <div className="ts-orb w-[700px] h-[500px] bg-emerald-500/[0.05]" style={{ top: '5%', left: '10%' }} />
        <div className="ts-orb w-[400px] h-[300px] bg-cyan-500/[0.04]" style={{ bottom: '10%', right: '5%' }} />

        <div className="relative max-w-6xl mx-auto px-8 w-full z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:items-start">

            {/* Left */}
            <div className="flex flex-col">
              <div className="mb-8" id="heroBadge">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2]">
                  <MessageSquare className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Enterprise Inquiry</span>
                </div>
              </div>

              <h1 className="ts-display-hero text-5xl md:text-6xl lg:text-7xl mb-8" style={{ perspective: '1000px' }}>
                <span className="hero-line block">Let's Talk</span>
                <span className="hero-line block ts-gradient">Sovereign AI.</span>
              </h1>

              <div className="mb-10" id="heroSub">
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                  Whether you're evaluating enterprise AI, planning a sovereign deployment, or exploring a strategic partnership — we're ready for a serious conversation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-10" id="trustBadges">
                <div className="ts-trust-badge"><ShieldCheck className="w-3 h-3 text-emerald-600" />NDA available</div>
                <div className="ts-trust-badge"><Clock className="w-3 h-3 text-cyan-600" />Response within 24h</div>
                <div className="ts-trust-badge"><Lock className="w-3 h-3 text-blue-600" />Confidential</div>
              </div>

              <div className="space-y-3" id="sideInfo">
                {[
                  { icon: Calendar, color: 'emerald', title: 'Typical engagement starts with a 45-min discovery call', sub: 'Architecture, requirements, and deployment constraints' },
                  { icon: Users, color: 'cyan', title: "You'll speak directly with engineering leadership", sub: 'No SDRs or qualification loops' },
                  { icon: FileText, color: 'blue', title: 'Security whitepapers & architecture docs on request', sub: 'Under NDA for qualified enterprises' },
                ].map(({ icon: Icon, color, title, sub }, i) => (
                  <div key={i} className="ts-info-strip">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-${color}-500/10`}>
                        <Icon className={`w-4 h-4 text-${color}-600`} />
                      </div>
                      <div>
                        <div className="text-[13px] text-gray-700 font-light">{title}</div>
                        <div className="text-[11px] text-gray-500 font-light mt-0.5">{sub}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form Card */}
            <div id="formCard">
              <div className="ts-form-card p-9 md:p-12">

                {/* Card header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 ts-pulse" />
                    <span className="text-[10px] text-gray-400 font-mono tracking-[0.2em] uppercase">Secure Inquiry</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-gray-300" />
                    <span className="text-[10px] text-gray-300 font-light">256-bit encrypted</span>
                  </div>
                </div>

                {/* Step progress */}
                {!submitted && (
                  <div className="ts-step-progress">
                    {[1, 2, 3].map((step, i) => {
                      const labels = ['You', 'Company', 'Details'];
                      const dotClass = step < currentStep ? 'done' : step === currentStep ? 'active' : 'inactive';
                      return (
                        <React.Fragment key={step}>
                          <div className={`ts-step-dot ${dotClass}`}>
                            {step < currentStep ? <Check className="w-3 h-3" /> : step}
                            <span className="ts-step-label">{labels[i]}</span>
                          </div>
                          {i < 2 && (
                            <div className={`ts-step-connector ${currentStep > step ? 'filled' : ''}`}>
                              <div className="ts-step-connector-fill" />
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}

                {!submitted ? (
                  <form onSubmit={e => e.preventDefault()} autoComplete="off">

                    {/* ── STEP 1 ── */}
                    {currentStep === 1 && (
                      <div>
                        <div className="mb-10">
                          <h3 className="text-xl font-light text-gray-900 tracking-tight">About you</h3>
                          <p className="text-[13px] text-gray-500 font-light mt-1.5">We'll use this to personalize your experience.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mb-7">
                          <div className="ts-ff">
                            <input type="text" className={`ts-ff-input${errors.firstName ? ' ts-error' : ''}`} id="firstName" placeholder="First Name" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                            <label className="ts-ff-label" htmlFor="firstName">First Name</label>
                            <div className="ts-ff-line" />
                          </div>
                          <div className="ts-ff">
                            <input type="text" className={`ts-ff-input${errors.lastName ? ' ts-error' : ''}`} id="lastName" placeholder="Last Name" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                            <label className="ts-ff-label" htmlFor="lastName">Last Name</label>
                            <div className="ts-ff-line" />
                          </div>
                        </div>
                        <div className="ts-ff mb-7">
                          <input type="email" className={`ts-ff-input${errors.email ? ' ts-error' : ''}`} id="email" placeholder="Work Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                          <label className="ts-ff-label" htmlFor="email">Work Email</label>
                          <div className="ts-ff-line" />
                        </div>
                        <div className="ts-ff mb-10">
                          <input type="tel" className="ts-ff-input" id="phone" placeholder="Phone (optional)" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                          <label className="ts-ff-label" htmlFor="phone">Phone <span style={{ fontSize: '10px', opacity: 0.5, textTransform: 'none', letterSpacing: 0, fontWeight: 300 }}>— optional</span></label>
                          <div className="ts-ff-line" />
                        </div>
                        <div className="flex justify-end">
                          <button type="button" className="ts-btn-primary" onClick={() => goToStep(2)}>
                            <span>Continue</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* ── STEP 2 ── */}
                    {currentStep === 2 && (
                      <div>
                        <div className="mb-10">
                          <h3 className="text-xl font-light text-gray-900 tracking-tight">Your organization</h3>
                          <p className="text-[13px] text-gray-500 font-light mt-1.5">Help us understand your environment.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mb-7">
                          <div className="ts-ff">
                            <input type="text" className={`ts-ff-input${errors.company ? ' ts-error' : ''}`} id="company" placeholder="Company" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                            <label className="ts-ff-label" htmlFor="company">Company</label>
                            <div className="ts-ff-line" />
                          </div>
                          <div className="ts-ff">
                            <input type="text" className="ts-ff-input" id="title" placeholder="Job Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                            <label className="ts-ff-label" htmlFor="title">Job Title</label>
                            <div className="ts-ff-line" />
                          </div>
                        </div>
                        <div className="ts-ff mb-7">
                          <select className={`ts-ff-input${errors.industry ? ' ts-error' : ''}${formData.industry ? ' ts-has-value' : ''}`} id="industry" value={formData.industry} onChange={e => setFormData({ ...formData, industry: e.target.value })}>
                            <option value="" disabled> </option>
                            {['Financial Services', 'Aerospace & Defense', 'Manufacturing', 'Healthcare & Life Sciences', 'Government & Public Sector', 'Energy & Utilities', 'Technology', 'Other'].map(o => <option key={o}>{o}</option>)}
                          </select>
                          <label className="ts-ff-label">Industry</label>
                          <div className="ts-ff-line" />
                        </div>
                        <div className="ts-ff mb-10">
                          <select className={`ts-ff-input${formData.companySize ? ' ts-has-value' : ''}`} id="companySize" value={formData.companySize} onChange={e => setFormData({ ...formData, companySize: e.target.value })}>
                            <option value="" disabled> </option>
                            {['1 – 50 employees', '51 – 500 employees', '501 – 5,000 employees', '5,001 – 50,000 employees', '50,000+ employees'].map(o => <option key={o}>{o}</option>)}
                          </select>
                          <label className="ts-ff-label">Company Size</label>
                          <div className="ts-ff-line" />
                        </div>
                        <div className="flex items-center justify-between">
                          <button type="button" className="ts-btn-back" onClick={() => goToStep(1)}><ArrowLeft className="w-3.5 h-3.5" /> Back</button>
                          <button type="button" className="ts-btn-primary" onClick={() => goToStep(3)}><span>Continue</span><ArrowRight className="w-4 h-4" /></button>
                        </div>
                      </div>
                    )}

                    {/* ── STEP 3 ── */}
                    {currentStep === 3 && (
                      <div>
                        <div className="mb-10">
                          <h3 className="text-xl font-light text-gray-900 tracking-tight">What brings you here?</h3>
                          <p className="text-[13px] text-gray-500 font-light mt-1.5">Tell us what you're exploring — we'll match you with the right team.</p>
                        </div>
                        <div className="ts-ff mb-7">
                          <select className={`ts-ff-input${formData.interest ? ' ts-has-value' : ''}`} id="interest" value={formData.interest} onChange={e => setFormData({ ...formData, interest: e.target.value })}>
                            <option value="" disabled> </option>
                            {['Enterprise Knowledge Intelligence', 'Analytics & Decision Intelligence', 'Strategy & Research Intelligence', 'CX Intelligence', 'Mentis AgentOS / Platform', 'Security & Compliance Review', 'Strategic Partnership', 'Research Collaboration', 'General Inquiry'].map(o => <option key={o}>{o}</option>)}
                          </select>
                          <label className="ts-ff-label">Primary Interest</label>
                          <div className="ts-ff-line" />
                        </div>
                        <div className="ts-ff mb-10">
                          <textarea className="ts-ff-input" id="message" placeholder="Tell us more" rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                          <label className="ts-ff-label" htmlFor="message">Tell us more <span style={{ fontSize: '10px', opacity: 0.5, textTransform: 'none', letterSpacing: 0, fontWeight: 300 }}>— optional</span></label>
                          <div className="ts-ff-line" />
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <button type="button" className="ts-btn-back" onClick={() => goToStep(2)}><ArrowLeft className="w-3.5 h-3.5" /> Back</button>
                          <button type="button" className="ts-btn-submit flex-1" onClick={handleSubmit} disabled={loading}>
                            <span>{loading ? 'Sending...' : 'Submit Inquiry'}</span>
                            {!loading && <ArrowRight className="w-4 h-4" />}
                          </button>
                        </div>
                        <p className="text-[11px] text-center mt-6 leading-relaxed text-gray-400 font-light">
                          By submitting, you agree to Genovation's{' '}
                          <a href="#" className="underline hover:text-emerald-600 transition-colors">Privacy Policy</a>.
                          {' '}Your data is never shared.
                        </p>
                      </div>
                    )}

                  </form>
                ) : (
                  /* Success */
                  <div className="text-center py-10">
                    <div className="mx-auto mb-7" style={{ width: 72, height: 72 }}>
                      <svg viewBox="0 0 72 72" fill="none">
                        <circle cx="36" cy="36" r="34" stroke="rgba(16,185,129,0.15)" strokeWidth="1.5" />
                        <circle cx="36" cy="36" r="34" stroke="#10b981" strokeWidth="1.5" strokeDasharray="214" strokeDashoffset="214" className="ts-success-check" style={{ animationDuration: '1s' }} />
                        <polyline points="22,38 31,47 50,26" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="ts-success-check" style={{ animationDelay: '0.8s' }} />
                      </svg>
                    </div>
                    <h3 className="text-[22px] font-light text-gray-900 mb-3 tracking-tight ts-success-fade" style={{ animationDelay: '0.5s' }}>We've received your inquiry</h3>
                    <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-1 ts-success-fade" style={{ animationDelay: '0.7s' }}>A member of our team will be in touch within 24 hours.</p>
                    <p className="text-[12px] font-light text-gray-400 ts-success-fade" style={{ animationDelay: '0.9s' }}>For urgent security discussions, note it in your message.</p>
                    <div className="mt-8 ts-success-fade" style={{ animationDelay: '1.1s' }}>
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/[0.06] border border-emerald-500/[0.12]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] text-emerald-600 font-mono tracking-[0.12em]">INQUIRY LOGGED</span>
                      </div>
                    </div>
                  </div>
                )}

                {!submitted && (
                  <div className="ts-encrypted-strip">
                    <div className="ts-encrypted-item"><Shield className="w-3 h-3" /> Encrypted</div>
                    <div className="ts-encrypted-item"><EyeOff className="w-3 h-3" /> Never shared</div>
                    <div className="ts-encrypted-item"><Lock className="w-3 h-3" /> Confidential</div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="ts-divider" />

      {/* ═══════════════════════════════
           ENGAGEMENT PATHS
          ═══════════════════════════════ */}
      <section className="py-40 relative bg-[#f5f3f0]" id="paths">
        <div className="absolute inset-0 ts-mesh opacity-15 pointer-events-none" />
        <div className="ts-orb w-[500px] h-[400px] bg-violet-500/[0.05]" style={{ top: '20%', right: '10%' }} />
        <div className="relative max-w-6xl mx-auto px-8 z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.2] mb-8 ts-r-up">
              <Compass className="w-3 h-3 text-cyan-600" />
              <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">How We Engage</span>
            </div>
            <h2 className="ts-display-section text-5xl md:text-7xl ts-r-up">
              Multiple Paths.<br />
              <span className="ts-gradient">One Standard of Seriousness.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2, color: 'emerald',
                title: 'Enterprise Deployment',
                desc: 'Evaluating sovereign AI for your regulated environment. We begin with architecture review, security alignment, and a scoped pilot.',
                bullets: ['45-min discovery call', 'Architecture & security review', 'Scoped proof-of-value', 'Production deployment'],
                footerLabel: 'Typical timeline', footerValue: '4 – 12 weeks to production'
              },
              {
                icon: Handshake, color: 'cyan',
                title: 'Strategic Partnership',
                desc: 'System integrators, consultancies, and technology partners building sovereign AI practices with Genovation at the core.',
                bullets: ['Joint go-to-market', 'Technical enablement', 'Co-development programs', 'Referral & reseller models'],
                footerLabel: 'Point of contact', footerValue: 'partnerships@genovation.ai'
              },
              {
                icon: FlaskConical, color: 'violet',
                title: 'Research Collaboration',
                desc: 'Academic institutions, government labs, and R&D teams exploring explainable AI, cryptographic analytics, or agentic governance.',
                bullets: ['Joint research programs', 'Technical briefings', 'Invited workshops', 'Publication collaboration'],
                footerLabel: 'Point of contact', footerValue: 'research@genovation.ai'
              }
            ].map(({ icon: Icon, color, title, desc, bullets, footerLabel, footerValue }, i) => (
              <div key={i} className="ts-path-card ts-r-up">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${color}-500/10`}>
                  <Icon className={`w-6 h-6 text-${color}-600`} />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3">{title}</h3>
                <p className="text-[15px] text-gray-600 font-light leading-relaxed mb-6">{desc}</p>
                <div className="space-y-2.5">
                  {bullets.map((b, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${color}-400`} />
                      <span className="text-[13px] text-gray-600 font-light">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-5 border-t border-black/[0.06]">
                  <span className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">{footerLabel}</span>
                  <div className="text-[15px] text-gray-700 font-light mt-1">{footerValue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ts-divider" />

      {/* ═══════════════════════════════
           WHAT TO EXPECT
          ═══════════════════════════════ */}
      <section className="py-40 relative bg-[#f5f3f0]" id="expect">
        <div className="absolute inset-0 ts-mesh opacity-15 pointer-events-none" />
        <div className="ts-orb w-[500px] h-[400px] bg-emerald-500/[0.05]" style={{ top: '15%', left: '5%' }} />
        <div className="relative max-w-5xl mx-auto px-8 z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.2] mb-8 ts-r-up">
              <Route className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">What Happens Next</span>
            </div>
            <h2 className="ts-display-section text-5xl md:text-7xl ts-r-up">
              From Inquiry<br /><span className="ts-gradient">to Intelligence.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0 items-start ts-r-up">
            {[
              { n: '01', color: 'emerald', title: 'Discovery', desc: '45-min call. Understand your environment, constraints, and objectives.', time: 'Day 1 – 3' },
              { n: '02', color: 'cyan', title: 'Architecture Review', desc: 'Technical deep-dive into deployment model, security, and integration.', time: 'Week 1 – 2' },
              { n: '03', color: 'blue', title: 'Proof of Value', desc: 'Scoped pilot on your data, in your environment. Real results, not demos.', time: 'Week 2 – 6' },
              { n: '04', color: 'violet', title: 'Production', desc: 'Full deployment, governance activation, and ongoing operational support.', time: 'Week 4 – 12', last: true }
            ].map(({ n, color, title, desc, time, last }, i) => (
              <div key={i} className="text-center px-6 relative">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10 bg-${color}-500/10 border border-${color}-500/20`}>
                  <span className={`text-[15px] text-${color}-600 font-mono font-bold`}>{n}</span>
                </div>
                <h4 className="text-[15px] font-light text-gray-900 mb-2">{title}</h4>
                <p className="text-[13px] text-gray-600 font-light leading-relaxed">{desc}</p>
                <div className={`text-[10px] text-${color}-600 font-mono mt-3`}>{time}</div>
                {!last && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+35px)] w-[calc(100%-70px)] h-px">
                    <div className="h-full ts-pipe-flow rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ts-divider" />

      {/* ═══════════════════════════════
           TRUST
          ═══════════════════════════════ */}
      <section className="py-40 relative bg-[#f5f3f0]" id="trust">
        <div className="absolute inset-0 ts-mesh opacity-15 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-8 z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="ts-r-left">
              <h2 className="ts-display-section text-4xl md:text-5xl mb-8">
                Built for Enterprises<br /><span className="ts-gradient">That Don't Cut Corners.</span>
              </h2>
              <p className="text-[15px] text-gray-600 font-light leading-relaxed mb-10">
                We work with organizations where AI adoption is blocked by real constraints — not ambition.
              </p>
              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, color: 'emerald', title: 'Confidential by default', sub: 'All discussions are confidential. NDA available before first call.' },
                  { icon: Brain, color: 'cyan', title: 'Technical depth from day one', sub: 'No sales scripts. Direct access to architects and engineers.' },
                  { icon: Target, color: 'blue', title: 'Honest about fit', sub: "If we're not the right solution, we'll say so. No wasted time." }
                ].map(({ icon: Icon, color, title, sub }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-${color}-500/10`}>
                      <Icon className={`w-4 h-4 text-${color}-600`} />
                    </div>
                    <div>
                      <div className="text-[15px] text-gray-700 font-light">{title}</div>
                      <div className="text-[13px] text-gray-500 font-light mt-0.5">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ts-r-right">
              <div className="ts-form-card p-8">
                <div className="text-center mb-6">
                  <span className="text-[10px] text-gray-500 font-mono tracking-[0.15em] uppercase">Sovereign Architecture</span>
                </div>
                <div className="space-y-3">
                  {['100% On-Premise Deployment', 'Zero External API Calls', 'Air-Gapped Environment Support', 'Post-Quantum Cryptography', 'JUDGE-Verified Every Output', 'Immutable Audit Trails', "Your Data Never Leaves Your Infra"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-black/[0.03]">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span className="text-[13px] text-gray-600 font-light flex-1">{item}</span>
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ts-divider" />

      {/* ═══════════════════════════════
           DIRECT CONTACTS
          ═══════════════════════════════ */}
      <section className="py-40 relative bg-[#f5f3f0]" id="contacts">
        <div className="relative max-w-4xl mx-auto px-8 text-center z-10">
          <h2 className="ts-display-section text-4xl md:text-5xl mb-6 ts-r-up">
            Prefer a <span className="ts-gradient">Direct Line?</span>
          </h2>
          <p className="text-[15px] text-gray-600 font-light mb-16 ts-r-up">For specific inquiries, reach the right team directly.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { color: 'emerald', label: 'Enterprise Sales', email: 'enterprise@genovation.ai' },
              { color: 'cyan', label: 'Partnerships', email: 'partnerships@genovation.ai' },
              { color: 'violet', label: 'Research', email: 'research@genovation.ai' }
            ].map(({ color, label, email }, i) => (
              <div key={i} className="ts-path-card text-center ts-r-up">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 bg-${color}-500/10`}>
                  <Mail className={`w-5 h-5 text-${color}-600`} />
                </div>
                <div className="text-[10px] text-gray-500 font-mono tracking-wider uppercase mb-2">{label}</div>
                <a href={`mailto:${email}`} className="text-[15px] text-gray-700 font-light hover:text-emerald-600 transition-colors">{email}</a>
              </div>
            ))}
          </div>
          <div className="mt-20 ts-r-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/[0.03] border border-black/[0.06]">
              <div className="w-2 h-2 rounded-full bg-emerald-500 ts-pulse" />
              <span className="text-[12px] text-gray-600 font-light">Genovation Technological Solutions Pvt. Ltd.</span>
              <span className="text-[10px] text-gray-400 font-mono">·</span>
              <span className="text-[12px] text-gray-500 font-light">Enterprise Intelligence. Sovereign by Design.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-black/[0.06] bg-[#f5f3f0]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                  </svg>
                </div>
                <span className="text-sm font-light text-gray-600">Genovation</span>
              </div>
              <p className="text-[13px] text-gray-600 font-light leading-relaxed max-w-xs">
                Sovereign enterprise intelligence. Your data, your infrastructure, your AI.
              </p>
            </div>
            {[
              { label: 'Platform', links: ['Mentis AgentOS', 'JUDGE', 'CipherVault', 'Data Backbone'] },
              { label: 'Products', links: ['Knowledge', 'Analytics', 'Strategy', 'CX'] },
              { label: 'Company', links: ['About', 'Careers', 'Security', 'Contact'] }
            ].map(({ label, links }) => (
              <div key={label}>
                <div className="text-[11px] text-gray-600 font-mono tracking-wider uppercase mb-4">{label}</div>
                <div className="space-y-2.5">
                  {links.map(link => (
                    <Link key={link} href="#" className="block text-[13px] text-gray-600 hover:text-emerald-600 font-light transition-colors">{link}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-black/[0.04] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600 font-light">© 2026 Genovation. All rights reserved.</p>
            <div className="flex gap-8">
              {['Privacy', 'Terms', 'Security'].map(item => (
                <Link key={item} href="#" className="text-xs text-gray-600 hover:text-emerald-600 font-light transition-colors">{item}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
