"use client";

import { Activity, Users, FileSearch, TrendingUp, Shield, Clock, Database, Stethoscope } from 'lucide-react';

export default function HealthcareUseCases() {
  const useCases = [
    {
      icon: Activity,
      title: "Clinical Decision Support",
      description: "Real-time evidence-based recommendations with full source citations and Judge verification at the point of care."
    },
    {
      icon: FileSearch,
      title: "Automated Chart Review",
      description: "Extract insights from unstructured clinical notes, discharge summaries, and radiology reports with HIPAA compliance."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Identify high-risk patients, predict readmissions, and optimize resource allocation using de-identified data."
    },
    {
      icon: Users,
      title: "Population Health Management",
      description: "Analyze cohorts, track outcomes, and identify intervention opportunities across your patient population."
    },
    {
      icon: Database,
      title: "Research Data Integration",
      description: "Synthesize literature, clinical trial data, and real-world evidence for drug discovery and repurposing."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Automated audit trails, consent management, and compliance reporting for HIPAA, GDPR, and IRB requirements."
    },
    {
      icon: Clock,
      title: "Operational Efficiency",
      description: "Reduce documentation burden, streamline workflows, and identify bottlenecks in hospital operations."
    },
    {
      icon: Stethoscope,
      title: "Diagnostic Support",
      description: "Multi-modal analysis of imaging, labs, and clinical history with differential diagnosis generation."
    }
  ];

  return (
    <>
      <div className="divider-enhanced"></div>
      
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-10"></div>
        <div className="orb w-[400px] h-[400px] bg-teal-400/[0.04] top-[10%] left-[50%]"></div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] text-teal-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Use Cases</p>
            <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">
              Built for Healthcare Workflows
            </h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto r-up">
              From bedside to boardroom, Genovation delivers intelligence that respects patient privacy and clinical rigor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="card p-6 r-up">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/[0.08] border border-teal-500/[0.12] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-gray-800 font-medium text-base mb-2">{useCase.title}</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}