'use client';

import React, { useState } from 'react';
import { getSkillCategories } from '@/data/localizedCvData';
import { Cpu, Server, Layout, Smartphone, Cloud, Users, Check, Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const SkillsSection: React.FC = () => {
  const { t, locale } = useLanguage();
  const skillCategories = getSkillCategories(locale);
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'aitools':
        return <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />;
      case 'devops':
        return <Cloud className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />;
      case 'leadership':
        return <Users className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />;
      default:
        return <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />;
    }
  };

  const getShortName = (cat: { id: string; name: string }) => {
    return cat.name;
  };

  const displayedSkills = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-12 sm:py-20 relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2.5 sm:space-y-3 mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t('skills.badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Category Controls: Mobile Dropdown Select Menu (< sm: 640px) */}
        <div className="sm:hidden mb-6">
          <label htmlFor="mobile-category-select" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            {t('skills.filterLabel')}
          </label>
          <div className="relative">
            <select
              id="mobile-category-select"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-semibold text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
            >
              <option value="all">⚡ {t('skills.allSkills')} ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} total)</option>
              {skillCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} ({cat.skills.length} {t('skills.skillsCount')})
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Category Filter Pills Container: Desktop / Tablet Flex Wrap (>= sm: 640px) */}
        <div className="hidden sm:flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4" role="tablist" aria-label="Skill Categories">
          <button
            onClick={() => setActiveTab('all')}
            type="button"
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            role="tab"
            aria-selected={activeTab === 'all'}
          >
            {t('skills.allSkills')}
          </button>
          {skillCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
                  isActive
                    ? 'bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                role="tab"
                aria-selected={isActive}
              >
                {getCategoryIcon(cat.id)}
                <span>{getShortName(cat)}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {displayedSkills.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 rounded-2xl p-4 sm:p-6 space-y-3.5 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 shadow-xs dark:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-3 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 shrink-0">
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base truncate">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800 whitespace-nowrap shrink-0">
                    {category.skills.length} {t('skills.skillsCount')}
                  </span>
                </div>

                {/* Skill Badges: Pixel-Perfect 2-Column Equal Grid on Mobile (< 640px) */}
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2 pt-0.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-1.5 px-2.5 py-2 sm:py-1.5 rounded-lg bg-slate-100/90 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] sm:text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500/60 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-2xs truncate"
                    >
                      <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
