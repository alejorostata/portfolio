'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/cvData';
import { Briefcase, MapPin, ArrowRight, FileText, CheckCircle2, ShieldCheck, GraduationCap, Code2, Layers, Users, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeConsoleTab, setActiveConsoleTab] = useState<'overview' | 'stack' | 'leadership' | 'ai'>('overview');

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-36 sm:pb-24 overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900">
      {/* Absolute Ambient Gradient Background - moved here to satisfy accessibility contrast checkers */}
      <div className="absolute inset-0 z-0 bg-ambient-slate pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bio, Metrics & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Availability Status Badge */}
            <div>
              <div className="inline-flex max-w-full items-start sm:items-center gap-2 px-3.5 py-2 sm:px-3 sm:py-1.5 rounded-xl sm:rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-[11px] sm:text-xs font-semibold tracking-wide shadow-xs">
                <span className="relative flex h-2 w-2 shrink-0 mt-1 sm:mt-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                </span>
                <span className="leading-snug text-left">{t('hero.availabilityBadge')}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15]">
                {t('hero.greeting')} <span className="text-blue-600 dark:text-blue-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-base sm:text-2xl font-bold text-slate-700 dark:text-slate-300 leading-snug">
                {t('hero.role')}
              </p>
            </div>

            {/* Metric Cards Grid - Side-by-Side 2 Columns on Mobile for Clean Symmetry */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 py-3 border-y border-slate-200 dark:border-slate-800/80">
              <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-0.5 sm:space-y-1 shadow-xs">
                <div className="text-lg sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400">{t('hero.metric1Val')}</div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium leading-tight">{t('hero.metric1Label')}</p>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-0.5 sm:space-y-1 shadow-xs">
                <div className="text-lg sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400">{t('hero.metric2Val')}</div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium leading-tight">{t('hero.metric2Label')}</p>
              </div>
            </div>

            {/* Summary Bio */}
            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-base leading-relaxed">
              {t('hero.tagline')}
            </p>

            {/* Meta Role Details */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{t('hero.location')}</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{t('hero.company')}</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{t('hero.degree')}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#experience"
                className="h-11 sm:h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              >
                <span>{t('hero.btnExploreExperience')}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#cv"
                className="h-11 sm:h-12 px-3 rounded-xl text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-2 transition-colors cursor-pointer group focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span>{t('hero.btnReviewCV')}</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Console (Responsive Height to prevent mobile content clipping) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden min-h-[440px] sm:h-[400px] flex flex-col justify-between">
              
              {/* Console Header Bar */}
              <div className="bg-slate-950 border-b border-slate-800 p-3 shrink-0">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-300 font-mono text-[11px]">{t('hero.consoleFilename')}</span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> {t('hero.consoleInteractive')}
                  </span>
                </div>

                {/* Tab Controls */}
                <div className="flex items-center gap-1.5 pt-2.5 pb-1 px-1 overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setActiveConsoleTab('overview')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                      activeConsoleTab === 'overview'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{t('hero.consoleOverviewTab')}</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('stack')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                      activeConsoleTab === 'stack'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{t('hero.consoleStackTab')}</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('leadership')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                      activeConsoleTab === 'leadership'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>{t('hero.consoleLeadershipTab')}</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('ai')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                      activeConsoleTab === 'ai'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t('hero.consoleAiTab')}</span>
                  </button>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-300 bg-slate-950 leading-relaxed flex-1 flex flex-col justify-between overflow-hidden">
                
                <div className="space-y-2 overflow-hidden">
                  {activeConsoleTab === 'overview' && (
                    <div className="space-y-2 animate-in fade-in duration-200">
                      <p className="text-slate-400">{t('hero.consoleOverviewHeader')}</p>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5 font-sans">
                        <p className="text-blue-400 font-bold text-xs">{t('hero.consolePrimaryRoleLabel')}</p>
                        <p className="text-slate-200 text-[11px] sm:text-xs">{t('hero.consolePrimaryRoleVal')}</p>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5 font-sans">
                        <p className="text-emerald-400 font-bold text-xs">{t('hero.consoleCoreSpecLabel')}</p>
                        <p className="text-slate-200 text-[11px] sm:text-xs">{t('hero.consoleCoreSpecVal')}</p>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5 font-sans">
                        <p className="text-amber-400 font-bold text-xs">{t('hero.consoleLeadershipLabel')}</p>
                        <p className="text-slate-200 text-[11px] sm:text-xs">{t('hero.consoleLeadershipVal')}</p>
                      </div>
                    </div>
                  )}

                  {activeConsoleTab === 'stack' && (
                    <div className="space-y-2 animate-in fade-in duration-200">
                      <p className="text-slate-400">{t('hero.consoleStackHeader')}</p>
                      <p><span className="text-blue-400">const</span> <span className="text-amber-300">backend</span> = [<span className="text-blue-300">'Java (Spring Boot)'</span>, <span className="text-blue-300">'Node.js'</span>, <span className="text-blue-300">'APIs'</span>];</p>
                      <p><span className="text-blue-400">const</span> <span className="text-amber-300">frontend</span> = [<span className="text-blue-300">'Next.js'</span>, <span className="text-blue-300">'Vue.js'</span>, <span className="text-blue-300">'React'</span>, <span className="text-blue-300">'Shadcn'</span>, <span className="text-blue-300">'Tailwind'</span>];</p>
                      <p><span className="text-blue-400">const</span> <span className="text-amber-300">mobile</span> = [<span className="text-blue-300">'Flutter (iOS & Android)'</span>, <span className="text-blue-300">'React Native'</span>];</p>
                      <p><span className="text-blue-400">const</span> <span className="text-amber-300">databases</span> = [<span className="text-blue-300">'Supabase (PostgreSQL)'</span>, <span className="text-blue-300">'MariaDB'</span>, <span className="text-blue-300">'MySQL'</span>];</p>
                      <p><span className="text-blue-400">const</span> <span className="text-amber-300">cloudDevops</span> = [<span className="text-blue-300">'Vercel'</span>, <span className="text-blue-300">'Docker'</span>, <span className="text-blue-300">'Jenkins'</span>, <span className="text-blue-300">'AWS'</span>];</p>
                    </div>
                  )}

                  {activeConsoleTab === 'leadership' && (
                    <div className="space-y-2 animate-in fade-in duration-200">
                      <p className="text-slate-400">{t('hero.consoleLeadershipHeader')}</p>
                      <p><span className="text-blue-400">class</span> <span className="text-amber-300">TeamLeadership</span> &#123;</p>
                      <p className="pl-4"><span className="text-blue-300">evaluations</span>: '{t('hero.consoleEvalVal')}';</p>
                      <p className="pl-4"><span className="text-blue-300">mentorship</span>: '{t('hero.consoleMentorshipVal')}';</p>
                      <p className="pl-4"><span className="text-blue-300">agileProcess</span>: '{t('hero.consoleAgileVal')}';</p>
                      <p>&#125;</p>
                    </div>
                  )}

                  {activeConsoleTab === 'ai' && (
                    <div className="space-y-2 animate-in fade-in duration-200">
                      <p className="text-slate-400">{t('hero.consoleAiHeader')}</p>
                      <p><span className="text-blue-400">const</span> <span className="text-amber-300">aiTools</span> = &#123;</p>
                      <p className="pl-4"><span className="text-blue-300">agenticAI</span>: 'Gemini Antigravity',</p>
                      <p className="pl-4"><span className="text-blue-300">codingAssistants</span>: ['Claude Code AI', 'GitHub Copilot'],</p>
                      <p className="pl-4"><span className="text-blue-300">impact</span>: '{t('hero.consoleImpactVal')}'</p>
                      <p>&#125;;</p>
                    </div>
                  )}
                </div>

                {/* Console Footer Status */}
                <div className="pt-2 sm:pt-2.5 mt-2 border-t border-slate-900 flex items-center justify-between text-slate-400 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-[11px] font-sans font-semibold text-blue-400">{t('hero.consoleStatus')}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
