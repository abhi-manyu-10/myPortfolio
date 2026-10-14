"use client";

import { MapPin, Download, ArrowRight, Mail, Phone, GraduationCap, Briefcase, ShieldCheck, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import HeroMeshCanvas from "./HeroMeshCanvas";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { personal, education } = PORTFOLIO_DATA;
  const iemEdu = education[0];

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex items-center cyber-grid">
      {/* Dynamic Canvas Mesh */}
      <HeroMeshCanvas />

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] radial-glow-hero pointer-events-none -z-10 blur-3xl opacity-60" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] radial-glow-accent pointer-events-none -z-10 blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
                {personal.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
                  {personal.name}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-slate-200">
                {personal.role}
              </p>
            </div>

            {/* Location & Academic Meta Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {personal.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                IEM Kolkata • {iemEdu.score}
              </span>
            </div>

            {/* Summary Narrative */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Analytical Computer Science undergraduate with hands-on internship experience delivering 
              production-ready mobile applications and backend services. Specialized in{" "}
              <strong className="text-emerald-400 font-semibold">Flutter, Python, Android SDK, C, Dart</strong>, 
              and <strong className="text-indigo-400 font-semibold">relational SQL / Firestore query optimization</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 active:scale-95"
              >
                <span>View Engineering Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/Abhimanyu_Sur_Resume.pdf"
                download="Abhimanyu_Sur_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 active:scale-95"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-emerald-400 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800 rounded-xl transition-all duration-200"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Direct Social Links Strip */}
            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Profiles:</span>
              <a
                href={personal.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-indigo-400 border border-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personal.links.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-teal-400 border border-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
                <span>{personal.links.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Developer Spotlight Card (Replacing random console) */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/90 shadow-2xl bg-slate-950/80 backdrop-blur-xl relative overflow-hidden space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-indigo-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                    AS
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white leading-tight">
                      {personal.name}
                    </h2>
                    <p className="text-xs font-mono text-emerald-400">
                      SDE & Mobile Systems
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                  Verified Engineer
                </span>
              </div>

              {/* Core Focus Highlights */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Engineering Snapshot
                </div>
                
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">Cross-Platform Mobile:</strong> Native 60 FPS UI rendering, zero frame drops, and Kotlin DSL build automation.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">Clean Systems Design:</strong> Decoupled business logic, OOP patterns, and optimized query execution plans.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">Internships:</strong> NXTANALYTICA (Android Dev) & B3NET Technologies (Software Dev).
                  </div>
                </div>
              </div>

              {/* Core Technologies Pills */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Flutter", "Android SDK", "Python", "Dart", "C", "SQL", "ReactJS", "MongoDB", "Firestore", "Kotlin DSL"].map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Quick Contact Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  {personal.phone}
                </span>
                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <span>Connect on LinkedIn</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {personal.quickStats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-xl border border-slate-800/90"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
