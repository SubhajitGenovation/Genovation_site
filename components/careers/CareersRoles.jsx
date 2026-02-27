"use client";

import { useState } from 'react';
import { ChevronDown, FlaskConical, Layers, Terminal, Star, Compass, Crown, Sprout, ArrowRight } from 'lucide-react';

export default function CareersRoles() {
  const [activeRole, setActiveRole] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const roles = [
    {
      id: 1,
      title: "Research Intern",
      category: ["research", "internship"],
      type: "INTERNSHIP",
      typeColor: "emerald",
      salary: "₹5K–15K",
      icon: FlaskConical,
      description: "Work on cutting-edge AI research — neural architectures, language models, autonomous systems.",
      skills: ["AI/ML", "Python", "Curiosity"],
      skillColors: ["emerald", "cyan", "blue"],
      note: "UG: ₹5K · PG: ₹15K"
    },
    {
      id: 2,
      title: "MERN Stack Developer",
      category: ["engineering"],
      type: "FULL-TIME",
      typeColor: "cyan",
      salary: "₹15K–20K",
      icon: Layers,
      description: "Build user interfaces for AI products. Create intuitive experiences for complex AI systems.",
      skills: ["MongoDB", "React", "Node.js", "Express"],
      skillColors: ["cyan", "blue", "emerald", "violet"]
    },
    {
      id: 3,
      title: "Python Developer",
      category: ["engineering"],
      type: "FULL-TIME",
      typeColor: "blue",
      salary: "₹15K–20K",
      icon: Terminal,
      description: "Backend systems, ML pipelines, data processing, model deployment.",
      skills: ["Python", "Flask/Django", "APIs", "ML Pipelines"],
      skillColors: ["blue", "emerald", "cyan", "violet"]
    },
    {
      id: 4,
      title: "Experienced Developer",
      category: ["engineering"],
      type: "FULL-TIME",
      typeColor: "violet",
      salary: "₹30K–40K",
      experience: "2-3 YRS",
      icon: Star,
      description: "Lead technical initiatives, mentor juniors, drive architecture and technical excellence.",
      skills: ["Architecture", "Mentoring", "Production"],
      skillColors: ["violet", "rose", "blue"]
    },
    {
      id: 5,
      title: "Founders Office — Junior",
      category: ["business"],
      type: "FULL-TIME",
      typeColor: "amber",
      salary: "₹15K–20K",
      icon: Compass,
      description: "Work directly with leadership on strategy, research, analysis, and operations.",
      skills: ["Strategy", "Analysis", "Operations"],
      skillColors: ["amber", "orange", "emerald"]
    },
    {
      id: 6,
      title: "Founders Office — Senior",
      category: ["business"],
      type: "FULL-TIME",
      typeColor: "rose",
      salary: "₹25K–30K",
      experience: "2+ YRS",
      icon: Crown,
      description: "Lead strategic projects — partnerships, market analysis, product strategy.",
      skills: ["Partnerships", "Strategy", "Leadership"],
      skillColors: ["rose", "violet", "blue"]
    },
    {
      id: 7,
      title: "General Intern",
      category: ["internship"],
      type: "INTERNSHIP",
      typeColor: "emerald",
      salary: "₹5K",
      experience: "ANY LEVEL",
      icon: Sprout,
      description: "Cross-functional: research support, basic dev, content, operations. Discover your strengths.",
      skills: ["Any Level", "Cross-functional"],
      skillColors: ["emerald", "cyan"]
    }
  ];

  const filteredRoles = activeFilter === 'all' 
    ? roles 
    : roles.filter(role => role.category.includes(activeFilter));

  const toggleRole = (id) => {
    setActiveRole(activeRole === id ? null : id);
  };

  const colorMap = {
    emerald: { bg: 'bg-emerald-500/[0.08]', text: 'text-emerald-600', border: 'border-emerald-500/15', iconBg: 'from-emerald-500/15 to-cyan-500/15' },
    cyan: { bg: 'bg-cyan-500/[0.08]', text: 'text-cyan-600', border: 'border-cyan-500/15', iconBg: 'from-cyan-500/15 to-blue-500/15' },
    blue: { bg: 'bg-blue-500/[0.08]', text: 'text-blue-600', border: 'border-blue-500/15', iconBg: 'from-blue-500/15 to-violet-500/15' },
    violet: { bg: 'bg-violet-500/[0.08]', text: 'text-violet-600', border: 'border-violet-500/15', iconBg: 'from-violet-500/15 to-rose-500/15' },
    amber: { bg: 'bg-amber-500/[0.08]', text: 'text-amber-600', border: 'border-amber-500/15', iconBg: 'from-amber-500/15 to-orange-500/15' },
    rose: { bg: 'bg-rose-500/[0.08]', text: 'text-rose-500', border: 'border-rose-500/15', iconBg: 'from-rose-500/15 to-red-500/15' },
    orange: { bg: 'bg-orange-500/[0.08]', text: 'text-orange-600' }
  };

  return (
    <section className="py-32 relative" id="roles">
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="mb-12">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-emerald-600 block mb-4 r-fade">
            Open Positions
          </span>
          <h2 className="display-section text-5xl md:text-7xl mb-6 r-up">
            Join the <span className="text-gradient">team</span>
          </h2>
          <div className="flex items-center gap-3 flex-wrap r-fade">
            <button 
              className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Roles
            </button>
            <button 
              className={`filter-pill ${activeFilter === 'research' ? 'active' : ''}`}
              onClick={() => setActiveFilter('research')}
            >
              Research
            </button>
            <button 
              className={`filter-pill ${activeFilter === 'engineering' ? 'active' : ''}`}
              onClick={() => setActiveFilter('engineering')}
            >
              Engineering
            </button>
            <button 
              className={`filter-pill ${activeFilter === 'business' ? 'active' : ''}`}
              onClick={() => setActiveFilter('business')}
            >
              Business
            </button>
            <button 
              className={`filter-pill ${activeFilter === 'internship' ? 'active' : ''}`}
              onClick={() => setActiveFilter('internship')}
            >
              Internship
            </button>
          </div>
        </div>

        <p className="text-[13px] text-gray-400 font-light mb-8 r-fade">
          All positions based in Kolkata. Remote flexible, in-person preferred. Salary shown per month.
        </p>

        <div className="border-t border-black/[0.06]">
          {filteredRoles.map((role) => {
            const Icon = role.icon;
            const colors = colorMap[role.typeColor];
            const isActive = activeRole === role.id;

            return (
              <div
                key={role.id}
                className={`role-row r-up ${isActive ? 'active' : ''}`}
              >
                <div
                  className="flex items-center justify-between py-6 px-4 cursor-pointer"
                  onClick={() => toggleRole(role.id)}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-light text-gray-900 tracking-tight">
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className={`font-mono text-[10px] ${colors.text}`}>
                          {role.type}
                        </span>
                        <span className="text-gray-300">·</span>
                        <span className="font-mono text-[10px] text-gray-400">
                          {role.salary}
                        </span>
                        {role.experience && (
                          <>
                            <span className="text-gray-300">·</span>
                            <span className="font-mono text-[10px] text-gray-400">
                              {role.experience}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 role-arrow flex-shrink-0" />
                </div>

                <div className="role-detail">
                  <div className="px-4 pb-6" style={{ paddingLeft: '76px' }}>
                    <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
                      {role.description}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      {role.skills.map((skill, idx) => {
                        const skillColor = role.skillColors[idx] || 'gray';
                        const skillColors = colorMap[skillColor];
                        return (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full ${skillColors.bg} text-[10px] ${skillColors.text} font-mono`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                    {role.note && (
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[11px] text-gray-400 font-light">
                          {role.note}
                        </span>
                      </div>
                    )}
                    <a
                      href="mailto:careers@genovation.ai"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-white text-[11px] font-light hover:bg-emerald-600 transition-all"
                    >
                      Apply <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 r-fade">
          <p className="text-[13px] text-gray-400 font-light">
            Questions?{' '}
            <a href="mailto:careers@genovation.ai" className="text-emerald-600 hover:underline">
              careers@genovation.ai
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}