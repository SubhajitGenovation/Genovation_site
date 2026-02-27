"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Play, ArrowRight, ArrowLeft, Video, Terminal,
  Users, Lock, Clock, User, Send, Shield, EyeOff,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted,   setSubmitted]   = useState(false);
  const [submitting,  setSubmitting]  = useState(false);
  const [selectedDemo, setSelectedDemo] = useState("live");
  const [errors,   setErrors]   = useState({});
  const [formData, setFormData] = useState({
    firstName: "", lastName: "",  email: "",
    company: "",  title: "",      industry: "",
    product: "",  companySize: "", notes: "",
  });

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl
      .to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".hero-line-1 .char", {
        opacity: 1, y: 0, rotateX: 0, skewX: 0,
        stagger: 0.04, duration: 1, ease: "power4.out",
      }, "-=0.4")
      .to(".hero-line-2 .char", {
        opacity: 1, y: 0, rotateX: 0, skewX: 0,
        stagger: 0.03, duration: 1, ease: "power4.out",
      }, "-=0.5")
      .to("#heroSub p",   { y: 0, duration: 1,   ease: "power3.out" }, "-=0.5")
      .to("#mockUI",      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.4")
      .to("#mockCaption", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");
  }, { scope: sectionRef });

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.id]: e.target.value }));
    if (errors[e.target.id]) setErrors((p) => ({ ...p, [e.target.id]: false }));
  };

  const validateStep = (step) => {
    const errs = {};
    if (step === 1) {
      if (!formData.firstName.trim()) errs.firstName = true;
      if (!formData.lastName.trim())  errs.lastName  = true;
      if (!formData.email.trim() ||
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = true;
      if (!formData.company.trim()) errs.company = true;
    }
    if (step === 2) {
      if (!formData.industry) errs.industry = true;
    }
    setErrors(errs);
    Object.keys(errs).forEach((key) => {
      const el = document.getElementById(key);
      if (el) gsap.fromTo(el, { x: -6 }, { x: 0, duration: 0.5, ease: "elastic.out(1,0.3)" });
    });
    return Object.keys(errs).length === 0;
  };

  const goToStep = (n) => {
    if (n > currentStep && !validateStep(currentStep)) return;
    setCurrentStep(n);
  };

  const handleSubmit = () => {
    if (!validateStep(3)) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1500);
  };

  const dotCls = (s) =>
    s < currentStep ? "step-dot done" :
    s === currentStep ? "step-dot active" : "step-dot inactive";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden"
      id="hero"
    >
      <div className="orb w-[700px] h-[500px] bg-cyan-500/[0.05]"    style={{ top:"5%",    right:"10%" }} />
      <div className="orb w-[400px] h-[300px] bg-emerald-500/[0.04]" style={{ bottom:"10%", left:"5%"  }} />

      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center hero-split">

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div className="mb-8 opacity-0" id="heroBadge">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.2]">
                <Play className="w-3 h-3 text-cyan-600" />
                <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Live Demo</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="display-hero text-5xl md:text-6xl lg:text-7xl mb-8" style={{ perspective:"1000px" }}>
              <span className="hero-line hero-line-1 block">
                {"See It Run.".split("").map((c, i) => (
                  <span key={i} className="char">{c === " " ? "\u00A0" : c}</span>
                ))}
              </span>
              <span className="hero-line hero-line-2 block" style={{
                background: "linear-gradient(90deg,#06b6d4,#0891b2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {"On Your Terms.".split("").map((c, i) => (
                  <span key={i} className="char">{c === " " ? "\u00A0" : c}</span>
                ))}
              </span>
            </h1>

            {/* Subtitle */}
            <div className="overflow-hidden mb-10" id="heroSub">
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed translate-y-full">
                A 30-minute walkthrough tailored to your industry, your data
                constraints, and your hardest questions. No slides. Real
                platform. Live agents.
              </p>
            </div>

            {/* Mock UI — dark terminal */}
            <div className="mock-ui" id="mockUI">
              <div className="mock-titlebar">
                <div className="mock-dot" style={{ background:"rgba(239,68,68,0.7)"  }} />
                <div className="mock-dot" style={{ background:"rgba(234,179,8,0.7)"  }} />
                <div className="mock-dot" style={{ background:"rgba(34,197,94,0.7)"  }} />
                <span className="text-[10px] font-mono text-white/30 ml-3">mentis.genovation.ai</span>
              </div>
              <div className="mock-body">
                <div className="flex gap-4 mb-5">
                  <div className="flex-1">
                    <div className="text-[9px] font-mono text-emerald-400/60 mb-2 tracking-wider">AGENT: AEGIS — KNOWLEDGE</div>
                    <div className="mock-line w-full"  style={{ background:"rgba(16,185,129,0.15)" }} />
                    <div className="mock-line w-4/5"   style={{ background:"rgba(16,185,129,0.1)"  }} />
                    <div className="mock-line w-11/12" style={{ background:"rgba(16,185,129,0.08)" }} />
                    <div className="mock-line w-3/5"   style={{ background:"rgba(16,185,129,0.06)" }} />
                  </div>
                  <div className="w-px bg-white/[0.06]" />
                  <div className="w-44">
                    <div className="text-[9px] font-mono text-cyan-400/60 mb-2 tracking-wider">JUDGE VERDICT</div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 soft-pulse" />
                      <span className="text-[10px] font-mono text-emerald-400">VERIFIED</span>
                    </div>
                    <div className="text-[9px] font-mono text-white/20 mb-1">Confidence: 97.3%</div>
                    <div className="text-[9px] font-mono text-white/20 mb-1">Sources: 4 linked</div>
                    <div className="text-[9px] font-mono text-white/20">Latency: 142ms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                  <div className="flex-1 h-9 rounded-lg border border-white/[0.08] flex items-center px-3">
                    <span className="text-[11px] text-white/20 font-light">Ask your enterprise knowledge base...</span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Send className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="flex items-center gap-6 mt-8 opacity-0" id="mockCaption">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 soft-pulse" />
                <span className="text-[11px] text-gray-500 font-light">Live platform preview</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-[11px] text-gray-500 font-light">30-minute session</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-3 h-3 text-gray-400" />
                <span className="text-[11px] text-gray-500 font-light">Engineer-led</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Form Card ── */}
          <div className="r-right" id="formCard">
            <div className="form-card p-9 md:p-10">

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 soft-pulse" />
                  <span className="text-[10px] text-gray-400 font-mono tracking-[0.2em] uppercase">Demo Request</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3" style={{ color:"rgba(0,0,0,0.2)" }} />
                  <span className="text-[10px]" style={{ color:"rgba(0,0,0,0.2)", fontWeight:300 }}>Private</span>
                </div>
              </div>

              {/* Step progress */}
              <div className="step-progress" id="stepProgress">
                <div className={dotCls(1)} data-step="1">
                  {currentStep > 1
                    ? <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : "1"}
                  <span className="step-label">You</span>
                </div>
                <div className={`step-connector${currentStep > 1 ? " filled" : ""}`}>
                  <div className="step-connector-fill" />
                </div>
                <div className={dotCls(2)} data-step="2">
                  {currentStep > 2
                    ? <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : "2"}
                  <span className="step-label">Context</span>
                </div>
                <div className={`step-connector${currentStep > 2 ? " filled" : ""}`}>
                  <div className="step-connector-fill" />
                </div>
                <div className={dotCls(3)} data-step="3">
                  3<span className="step-label">Preferences</span>
                </div>
              </div>

              {!submitted && (
                <form onSubmit={(e) => e.preventDefault()} autoComplete="off">

                  {/* ── STEP 1 ── */}
                  <div className={`form-step${currentStep === 1 ? " active" : ""}`}>
                    <div className="mb-8">
                      <h3 className="text-xl font-light text-gray-900 tracking-tight">About you</h3>
                      <p className="text-[13px] text-gray-400 font-light mt-1">So we can tailor the demo to your world.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8">
                      <FF id="firstName" label="First Name"  value={formData.firstName} onChange={handleChange} error={errors.firstName} required />
                      <FF id="lastName"  label="Last Name"   value={formData.lastName}  onChange={handleChange} error={errors.lastName}  required />
                    </div>
                    <FF id="email"   label="Work Email" type="email" value={formData.email}   onChange={handleChange} error={errors.email}   required />
                    <div className="grid grid-cols-2 gap-x-8">
                      <FF id="company" label="Company"   value={formData.company} onChange={handleChange} error={errors.company} required />
                      <FF id="title"   label="Job Title" value={formData.title}   onChange={handleChange} />
                    </div>
                    <div className="flex justify-end mt-6">
                      <button type="button" className="btn-primary" onClick={() => goToStep(2)}>
                        <span>Continue</span><ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* ── STEP 2 ── */}
                  <div className={`form-step${currentStep === 2 ? " active" : ""}`}>
                    <div className="mb-8">
                      <h3 className="text-xl font-light text-gray-900 tracking-tight">Your environment</h3>
                      <p className="text-[13px] text-gray-400 font-light mt-1">Helps us prepare a relevant walkthrough.</p>
                    </div>
                    <FS id="industry" label="Industry" value={formData.industry} onChange={handleChange} error={errors.industry} required
                      options={["Financial Services","Aerospace & Defense","Manufacturing","Healthcare & Life Sciences","Government & Public Sector","Energy & Utilities","Technology","Other"]} />
                    <FS id="product" label="Product Interest" value={formData.product} onChange={handleChange}
                      options={["Knowledge Intelligence (Aegis)","Analytics & Decision Intelligence (Analytica)","Strategy & Research Intelligence (Sophia)","CX Intelligence","Mentis AgentOS — Full Platform","JUDGE Governance Layer","Not sure yet — show me everything"]} />
                    <FS id="companySize" label="Company Size" value={formData.companySize} onChange={handleChange}
                      options={["1 – 50 employees","51 – 500 employees","501 – 5,000 employees","5,001 – 50,000 employees","50,000+ employees"]} />
                    <div className="flex items-center justify-between mt-6">
                      <button type="button" className="btn-back" onClick={() => goToStep(1)}>
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                      </button>
                      <button type="button" className="btn-primary" onClick={() => goToStep(3)}>
                        <span>Continue</span><ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* ── STEP 3 ── */}
                  <div className={`form-step${currentStep === 3 ? " active" : ""}`}>
                    <div className="mb-8">
                      <h3 className="text-xl font-light text-gray-900 tracking-tight">Demo preferences</h3>
                      <p className="text-[13px] text-gray-400 font-light mt-1">Choose how you'd like to experience the platform.</p>
                    </div>
                    <div className="space-y-3 mb-6">
                      {[
                        { value:"live",   icon:<Video    className="w-4 h-4 text-gray-400"/>, title:"Live walkthrough",  desc:"30 min, 1-on-1 with an engineer on your use case" },
                        { value:"guided", icon:<Terminal className="w-4 h-4 text-gray-400"/>, title:"Guided sandbox",    desc:"Hands-on access with sample data in a controlled environment" },
                        { value:"group",  icon:<Users    className="w-4 h-4 text-gray-400"/>, title:"Team presentation", desc:"45 min for multiple stakeholders — technical + executive overview" },
                      ].map((opt) => (
                        <div
                          key={opt.value}
                          className={`demo-option${selectedDemo === opt.value ? " selected" : ""}`}
                          onClick={() => setSelectedDemo(opt.value)}
                        >
                          <div className="flex items-center gap-4">
                            <div className="radio-dot" />
                            <div className="flex-1">
                              <div className="text-[14px] text-gray-800 font-light">{opt.title}</div>
                              <div className="text-[12px] text-gray-500 font-light mt-0.5">{opt.desc}</div>
                            </div>
                            {opt.icon}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="ff mb-6">
                      <textarea
                        className={`ff-input${formData.notes ? " has-value" : ""}`}
                        id="notes" placeholder=" " rows={3}
                        value={formData.notes} onChange={handleChange}
                      />
                      <label className="ff-label" htmlFor="notes">
                        Anything specific you want to see?{" "}
                        <span style={{ fontSize:"10px", opacity:0.5, textTransform:"none", letterSpacing:0, fontWeight:300 }}>— optional</span>
                      </label>
                      <div className="ff-line" />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <button type="button" className="btn-back" onClick={() => goToStep(2)}>
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                      </button>
                      <button
                        type="submit" className="btn-submit flex-1"
                        onClick={handleSubmit} disabled={submitting}
                        style={{ opacity:submitting ? 0.7:1, pointerEvents:submitting ? "none":"auto" }}
                      >
                        <span>{submitting ? "Scheduling..." : "Request Demo"}</span>
                        {!submitting && <ArrowRight className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-[11px] text-center mt-6 leading-relaxed" style={{ color:"rgba(0,0,0,0.28)" }}>
                      By submitting, you agree to Genovation's{" "}
                      <a href="#" className="underline hover:text-emerald-600 transition-colors" style={{ color:"rgba(0,0,0,0.38)" }}>Privacy Policy</a>.
                      {" "}Your data is never shared.
                    </p>
                  </div>
                </form>
              )}

              {/* Success */}
              {submitted && (
                <div className="text-center py-10">
                  <div className="mx-auto mb-7" style={{ width:72, height:72 }}>
                    <svg viewBox="0 0 72 72" fill="none">
                      <circle cx="36" cy="36" r="34" stroke="rgba(16,185,129,0.15)" strokeWidth="1.5"/>
                      <circle cx="36" cy="36" r="34" stroke="#10b981" strokeWidth="1.5" strokeDasharray="214" strokeDashoffset="214" className="success-check" style={{ animationDuration:"1s" }}/>
                      <polyline points="22,38 31,47 50,26" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="success-check" style={{ animationDelay:"0.8s" }}/>
                    </svg>
                  </div>
                  <h3 className="text-[22px] font-light text-gray-900 mb-3 tracking-tight success-fade" style={{ animationDelay:"0.5s" }}>Demo Requested</h3>
                  <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-1 success-fade" style={{ animationDelay:"0.7s" }}>We'll reach out within 24 hours to confirm your session.</p>
                  <p className="text-[12px] font-light success-fade" style={{ animationDelay:"0.9s", color:"rgba(0,0,0,0.3)" }}>Check your inbox for a calendar invite.</p>
                  <div className="mt-8 success-fade" style={{ animationDelay:"1.1s" }}>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/[0.06] border border-cyan-500/[0.12]">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      <span className="text-[10px] text-cyan-600 font-mono tracking-[0.12em]">DEMO SCHEDULED</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Trust strip */}
              {!submitted && (
                <div className="encrypted-strip">
                  <div className="encrypted-item"><Shield className="w-3 h-3" /> Encrypted</div>
                  <div className="encrypted-item"><EyeOff className="w-3 h-3" /> Never shared</div>
                  <div className="encrypted-item"><Lock   className="w-3 h-3" /> Confidential</div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Floating Input ── */
function FF({ id, label, type = "text", value, onChange, error, required }) {
  return (
    <div className="ff">
      <input
        type={type} id={id}
        className={["ff-input", error ? "error" : "", value ? "has-value" : ""].filter(Boolean).join(" ")}
        placeholder=" "
        value={value} onChange={onChange}
        required={required} autoComplete="off"
      />
      <label className="ff-label" htmlFor={id}>{label}</label>
      <div className="ff-line" />
    </div>
  );
}

/* ── Floating Select ── */
function FS({ id, label, value, onChange, options, error, required }) {
  return (
    <div className="ff">
      <select
        id={id}
        className={["ff-input", error ? "error" : "", value ? "has-value" : ""].filter(Boolean).join(" ")}
        value={value} onChange={onChange} required={required}
      >
        <option value="" disabled />
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <label className="ff-label" htmlFor={id}>{label}</label>
      <div className="ff-line" />
    </div>
  );
}
