"use client";

import { useState } from "react";
import { Smartphone, Binary, Terminal, Cpu, Search } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = PORTFOLIO_DATA.skills;

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Smartphone: Smartphone,
    Binary: Binary,
    Terminal: Terminal,
    Cpu: Cpu,
  };

  const filteredCategories = categories
    .filter((cat) => (activeTab === "all" ? true : cat.category.toLowerCase().includes(activeTab)))
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const q = searchQuery.toLowerCase();
      const matchedItems = cat.items.filter(
        (item) => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
      );
      return { ...cat, items: matchedItems };
    })
    .filter((cat) => cat.items.length > 0);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-800/60 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold mb-3">
              <span>{"// 02. TECHNICAL PROFICIENCY"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical <span className="text-emerald-400">Skill Matrix</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Proven proficiency across cross-platform mobile frameworks, systems programming, 
              scalable databases, and automated build pipelines.
            </p>
          </div>

          {/* Search Filter Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Flutter, SQL)..."
              className="w-full pl-10 pr-4 py-2 text-xs font-mono bg-slate-900/80 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800/80">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all ${
              activeTab === "all"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            All Categories ({categories.length})
          </button>
          <button
            onClick={() => setActiveTab("programming")}
            className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all ${
              activeTab === "programming"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            Programming Languages
          </button>
          <button
            onClick={() => setActiveTab("frameworks")}
            className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all ${
              activeTab === "frameworks"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            Mobile & Web Frameworks
          </button>
          <button
            onClick={() => setActiveTab("databases")}
            className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all ${
              activeTab === "databases"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            Databases & Cloud
          </button>
          <button
            onClick={() => setActiveTab("tooling")}
            className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all ${
              activeTab === "tooling"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            Developer Tooling
          </button>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category, catIdx) => {
            const Icon = iconMap[category.iconName] || Smartphone;
            return (
              <div
                key={catIdx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/90 relative overflow-hidden group hover:border-slate-700 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/60 text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Chips List */}
                <div className="mt-5 space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-200 group/item"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-sm font-semibold text-slate-200 group-hover/item:text-emerald-300 transition-colors">
                            {item.name}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                            item.level === "Advanced"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : item.level === "Specialized"
                              ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                              : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                          }`}
                        >
                          {item.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pl-3.5">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
