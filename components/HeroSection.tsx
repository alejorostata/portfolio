'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/cvData';
import { Briefcase, MapPin, ArrowRight, FileText, CheckCircle2, ShieldCheck, GraduationCap, Code2, Layers, Users, Sparkles, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'overview' | 'stack' | 'leadership' | 'ai'>('overview');

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-ambient-slate bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bio, Metrics & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Status Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wide shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                </span>
                <span>{PERSONAL_INFO.availability}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                Full Stack Software Engineer & Team Lead
              </p>
            </div>

            {/* Metric Cards Grid - Clean Equal Sizing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-3 border-y border-slate-200 dark:border-slate-800/80">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-1 shadow-xs">
                <p className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400">~10 Years</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Software Development Experience</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-1 shadow-xs">
                <p className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400">Full-Stack</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Frontend, Backend, Web, Mobile & Desktop</p>
              </div>
            </div>

            {/* Summary Bio */}
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Seasoned Full Stack Software Engineer & Team Lead with nearly a decade of experience architecting and delivering web, desktop, and mobile systems. Proven leader driving engineering team performance (KPIs & PAF) while delivering modern scalable applications.
            </p>

            {/* Meta Role Details */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Team Lead @ Kryterion</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>MS IT Candidate</span>
              </div>
            </div>

            {/* Borderless Text CTA with Arrow for "Review Full CV" */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#experience"
                className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm shrink-0 cursor-pointer"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <button
                onClick={onOpenResume}
                type="button"
                className="h-12 px-3 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-sm flex items-center justify-center sm:justify-start gap-2 transition-colors cursor-pointer group"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Review Full CV</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Profile Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
              
              {/* Console Header Bar */}
              <div className="bg-slate-950 border-b border-slate-800 p-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-300 font-mono text-[11px]">alejo_console.ts</span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Interactive
                  </span>
                </div>

                {/* Tab Controls */}
                <div className="flex items-center gap-1 pt-2 overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setActiveConsoleTab('overview')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                      activeConsoleTab === 'overview'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Overview</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('stack')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                      activeConsoleTab === 'stack'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Tech Matrix</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('leadership')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                      activeConsoleTab === 'leadership'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>KPIs & PAF</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('ai')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                      activeConsoleTab === 'ai'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Tools</span>
                  </button>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-300 bg-slate-950 leading-relaxed overflow-x-auto min-h-[250px]">
                
                {activeConsoleTab === 'overview' && (
                  <div className="space-y-2.5 animate-in fade-in duration-200">
                    <p className="text-slate-400">// Software Engineering Lead Overview</p>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 font-sans">
                      <p className="text-blue-400 font-bold text-xs">Role Focus</p>
                      <p className="text-slate-200 text-xs">Full Stack Software Engineering & Team Leadership</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 font-sans">
                      <p className="text-amber-400 font-bold text-xs">Competitive Achievement</p>
                      <p className="text-slate-200 text-xs">ACM-ICPC 2014 Philippine National Contestant</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 font-sans">
                      <p className="text-sky-400 font-bold text-xs">Graduate Study</p>
                      <p className="text-slate-200 text-xs">Master's in Information Technology @ Ateneo de Naga</p>
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'stack' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <p className="text-slate-400">// Primary Engineering Stack</p>
                    <p><span className="text-blue-400">const</span> <span className="text-amber-300">backend</span> = [<span className="text-blue-300">'Java (Spring Boot)'</span>, <span className="text-blue-300">'Node.js'</span>, <span className="text-blue-300">'C#'</span>, <span className="text-blue-300">'PHP'</span>];</p>
                    <p><span className="text-blue-400">const</span> <span className="text-amber-300">frontend</span> = [<span className="text-blue-300">'Next.js'</span>, <span className="text-blue-300">'Vue.js'</span>, <span className="text-blue-300">'React'</span>, <span className="text-blue-300">'Tailwind'</span>];</p>
                    <p><span className="text-blue-400">const</span> <span className="text-amber-300">mobileDesktop</span> = [<span className="text-blue-300">'Flutter'</span>, <span className="text-blue-300">'React Native'</span>, <span className="text-blue-300">'Electron'</span>];</p>
                    <p><span className="text-blue-400">const</span> <span className="text-amber-300">databases</span> = [<span className="text-blue-300">'Supabase (PostgreSQL)'</span>, <span className="text-blue-300">'MariaDB'</span>, <span className="text-blue-300">'MySQL'</span>];</p>
                    <p><span className="text-blue-400">const</span> <span className="text-amber-300">devops</span> = [<span className="text-blue-300">'Git'</span>, <span className="text-blue-300">'Docker'</span>, <span className="text-blue-300">'Jenkins'</span>, <span className="text-blue-300">'AWS'</span>];</p>
                  </div>
                )}

                {activeConsoleTab === 'leadership' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <p className="text-slate-400">// Engineering Management & Team KPIs</p>
                    <p><span className="text-blue-400">class</span> <span className="text-amber-300">TeamLeadership</span> &#123;</p>
                    <p className="pl-4"><span className="text-blue-300">evaluations</span>: 'Team KPIs & Performance Appraisal Frameworks (PAF)';</p>
                    <p className="pl-4"><span className="text-blue-300">mentorship</span>: 'Regular 1-on-1s & Career Development Planning';</p>
                    <p className="pl-4"><span className="text-blue-300">agileProcess</span>: 'Sprint Planning, Daily Stand-ups & Retrospectives';</p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeConsoleTab === 'ai' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <p className="text-slate-400">// AI-Assisted Engineering Workflow</p>
                    <p><span className="text-blue-400">const</span> <span className="text-amber-300">aiTools</span> = &#123;</p>
                    <p className="pl-4"><span className="text-blue-300">agenticAI</span>: 'Gemini Antigravity',</p>
                    <p className="pl-4"><span className="text-blue-300">codingAssistants</span>: ['Claude Code AI', 'GitHub Copilot'],</p>
                    <p className="pl-4"><span className="text-blue-300">impact</span>: 'Accelerated development velocity & clean refactoring'</p>
                    <p>&#125;;</p>
                  </div>
                )}

                {/* Console Footer Status */}
                <div className="pt-3 mt-4 border-t border-slate-900 flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-[11px] font-sans font-semibold text-blue-400">Ready for Engineering Opportunities</span>
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
