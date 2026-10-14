"use client";

import { Award, GraduationCap, Cpu, Zap, ShieldCheck, GitBranch, CheckCircle2, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal, education, certifications, coreCompetencies } = PORTFOLIO_DATA;

  const corePillars = [
    {
      title: "Cross-Platform Mobile Engineering",
      icon: Zap,
      color: "emerald",
      desc: "Architecting responsive, 60fps Flutter mobile applications utilizing decoupled business logic, reactive state patterns, and native Android SDK bindings.",
    },
    {
      title: "Data Pipelines & Query Optimization",
      icon: ShieldCheck,
      color: "indigo",
      desc: "Optimizing Firestore database indexing structures and relational SQL schemas to minimize query overhead, latency, and redundant listeners.",
    },
    {
      title: "Full-Stack & Cloud Architecture",
      icon: GitBranch,
      color: "cyan",
      desc: "Engineering RESTful web services, MongoDB document collections with strict schema validation rules, and secure API microservices.",
    },
    {
      title: "Algorithmic Grounding & Concurrency",
      icon: Cpu,
      color: "amber",
      desc: "Strong computer science foundations in Data Structures & Algorithms (DSA), Object-Oriented Software Design (OOAD), and Operating Systems.",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-800/60 bg-[#090d15]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold mb-3">
            <span>{"// 01. ABOUT ME"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering for Scale, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
              Reliability & High-Performance Systems
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative, Education & Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span>Professional Profile & Background</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personal.bio}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personal.extendedBio}
              </p>

              {/* Education Table */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>Education & Academic Credentials</span>
                </div>

                <div className="space-y-3">
                  {education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-200">
                          {edu.degree}
                        </div>
                        <div className="text-xs text-slate-400">
                          {edu.institution} • {edu.boardUniversity}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                          {edu.score}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Certifications */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <Award className="w-4 h-4 text-indigo-400" />
                  <span>Verified Technical Certifications</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {certifications.map((cert, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/90 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200 leading-tight">
                          {cert.title}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {cert.issuer} • {cert.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <BookOpen className="w-4 h-4 text-teal-400" />
                <span>Engineering Core Competencies</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 font-bold">
                    Systems & Logic:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {coreCompetencies.systemsLogic.map((c, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-indigo-400 font-bold">
                    Specialized Foundations:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {coreCompetencies.specializedFoundations.map((c, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-indigo-400" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Core Architectural Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1">
              Architectural Pillars & Focus
            </h3>
            {corePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="glass-panel glass-panel-hover p-5 rounded-xl border border-slate-800/80 transition-all duration-300"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2.5 rounded-lg shrink-0 ${
                        pillar.color === "emerald"
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                          : pillar.color === "indigo"
                          ? "bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"
                          : pillar.color === "cyan"
                          ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                          : "bg-amber-500/10 border border-amber-500/20 text-amber-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-100">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
