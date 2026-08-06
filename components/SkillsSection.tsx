'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/cvData';
import { Cpu, Server, Layout, Smartphone, Cloud, Users, Check, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'aitools':
        return <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'devops':
        return <Cloud className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'leadership':
        return <Users className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      default:
        return <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  const displayedSkills = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-16 sm:py-20 relative bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Skills, Languages & Frameworks
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Comprehensive skill set built across backend APIs, modern frontend web apps, mobile & desktop, AI-assisted tools (Claude Code AI, Copilot, Antigravity), Supabase, and team leadership.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-3 overflow-x-auto no-scrollbar whitespace-nowrap" role="tablist" aria-label="Skill Categories">
          <button
            onClick={() => setActiveTab('all')}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all outline-none focus:outline-none shrink-0 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            role="tab"
            aria-selected={activeTab === 'all'}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all outline-none focus:outline-none shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/40 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                role="tab"
                aria-selected={isActive}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedSkills.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/90 rounded-2xl p-5 sm:p-6 space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm dark:shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                    {category.name}
                  </h3>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
