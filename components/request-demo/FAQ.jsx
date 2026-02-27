"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long is the demo?",
    a: "Live walkthroughs are 30 minutes. Team presentations run 45 minutes. Both include time for Q&A — we keep things efficient and focused on your specific questions.",
  },
  {
    q: "Will I see the actual platform or a recording?",
    a: "The live platform. Every demo runs on a working instance of Mentis with real agents and real-time JUDGE verification. No recordings, no simulations.",
  },
  {
    q: "Can I bring my team?",
    a: "Absolutely. Select \"Team presentation\" in the form and we'll adjust the format. We can cover both executive-level value and deep technical architecture in a single session.",
  },
  {
    q: "Is there any commitment after the demo?",
    a: "None. The demo is entirely free with no obligation. If there's a fit, we'll discuss next steps. If not, we'll tell you honestly.",
  },
  {
    q: "Can I use my own data in the demo?",
    a: "For the initial demo, we use industry-relevant sample data. During a guided sandbox or proof-of-value stage, we can work with your actual data under NDA in a secure environment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-40 relative" id="faq">
      <div className="absolute inset-0 mesh-bg opacity-15" />

      <div className="relative max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="display-section text-4xl md:text-5xl r-up">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-0" id="faqList">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="r-up"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
            >
              <button
                className="w-full text-left flex items-start justify-between gap-4 py-5 group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-[15px] text-gray-800 font-light group-hover:text-emerald-600 transition-colors">
                  {faq.q}
                </span>
                <Plus
                  className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-300"
                  style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                />
              </button>
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: openIndex === i ? "200px" : "0px",
                  transition: "max-height 0.5s cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <p className="text-[14px] text-gray-500 font-light leading-relaxed pb-5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
