'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/cvData';
import { Briefcase, MapPin, ArrowRight, FileText, CheckCircle2, ShieldCheck, GraduationCap, Code2, Layers, Users, Sparkles, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'stack' | 'architecture' | 'leadership' | 'ai'>('stack');

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-indigo-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-slate-300">
                Full Stack Software Engineer & Team Lead
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-lg max-w-2xl leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Team Lead @ Kryterion</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>MS IT Candidate</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="#experience"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 text-center"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                type="button"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 font-semibold text-sm hover:bg-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer text-center"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View Full CV (Interactive & Print)</span>
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80">
              <div className="space-y-0.5">
                <p className="text-xl sm:text-3xl font-extrabold text-indigo-400">10+</p>
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">Years Experience</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-xl sm:text-3xl font-extrabold text-slate-100">ACM-ICPC</p>
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">2014 Contestant</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-xl sm:text-3xl font-extrabold text-sky-400">Full-Stack</p>
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">Web, Desktop & Mobile</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Profile Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Console Header Bar with Tabs */}
              <div className="bg-slate-950 border-b border-slate-800 p-2 sm:p-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-900 px-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-300 font-mono text-[11px]">alejo_console.ts</span>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Interactive
                  </span>
                </div>

                {/* Tab Controls */}
                <div className="flex items-center gap-1 pt-2 overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setActiveConsoleTab('stack')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                      activeConsoleTab === 'stack'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>Tech Stack</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('architecture')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                      activeConsoleTab === 'architecture'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>Architecture</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('leadership')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                      activeConsoleTab === 'leadership'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Users className="w-3 h-3" />
                    <span>KPIs & PAF</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('ai')}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                      activeConsoleTab === 'ai'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>AI Tools</span>
                  </button>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-300 bg-slate-950/80 leading-relaxed overflow-x-auto min-h-[260px]">
                
                {activeConsoleTab === 'stack' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <p className="text-slate-400">// Primary Engineering Stack</p>
                    <p><span className="text-purple-400">const</span> <span className="text-amber-300">backend</span> = [<span className="text-indigo-300">'Java (Spring Boot)'</span>, <span className="text-indigo-300">'Node.js'</span>, <span className="text-indigo-300">'C#'</span>, <span className="text-indigo-300">'PHP'</span>];</p>
                    <p><span className="text-purple-400">const</span> <span className="text-amber-300">frontend</span> = [<span className="text-indigo-300">'Next.js'</span>, <span className="text-indigo-300">'Vue.js'</span>, <span className="text-indigo-300">'React'</span>, <span className="text-indigo-300">'Tailwind'</span>];</p>
                    <p><span className="text-purple-400">const</span> <span className="text-amber-300">mobileDesktop</span> = [<span className="text-indigo-300">'Flutter'</span>, <span className="text-indigo-300">'React Native'</span>, <span className="text-indigo-300">'Electron'</span>];</p>
                    <p><span className="text-purple-400">const</span> <span className="text-amber-300">databases</span> = [<span className="text-indigo-300">'Supabase (PostgreSQL)'</span>, <span className="text-indigo-300">'MariaDB'</span>, <span className="text-indigo-300">'MySQL'</span>];</p>
                    <p><span className="text-purple-400">const</span> <span className="text-amber-300">devops</span> = [<span className="text-indigo-300">'Git'</span>, <span className="text-indigo-300">'Docker'</span>, <span className="text-indigo-300">'Jenkins'</span>, <span className="text-indigo-300">'AWS'</span>];</p>
                  </div>
                )}

                {activeConsoleTab === 'architecture' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <p className="text-slate-400">// Full-Stack Architecture Principles</p>
                    <p><span className="text-indigo-400">1. Modular Systems:</span> Scalable REST APIs & Microservices.</p>
                    <p><span className="text-indigo-400">2. Cross-Platform:</span> Web, Native Mobile (iOS/Android) & Desktop apps.</p>
                    <p><span className="text-indigo-400">3. Offline-First DB:</span> Hybrid SQL & NoSQL data syncing (Supabase/MySQL).</p>
                    <p><span className="text-indigo-400">4. Accessibility (WCAG):</span> High-contrast, keyboard-first, screen reader compliant UI.</p>
                  </div>
                )}

                {activeConsoleTab === 'leadership' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <p className="text-slate-400">// Engineering Management & Team KPIs</p>
                    <p><span className="text-purple-400">class</span> <span className="text-amber-300">TeamLeadership</span> &#123;</p>
                    <p className="pl-4"><span className="text-indigo-300">evaluations</span>: 'Team KPIs & Performance Appraisal Frameworks (PAF)';</p>
                    <p className="pl-4"><span className="text-indigo-300">mentorship</span>: 'Regular 1-on-1s & Career Development Planning';</p>
                    <p className="pl-4"><span className="text-indigo-300">agileProcess</span>: 'Sprint Planning, Daily Stand-ups & Retrospectives';</p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeConsoleTab === 'ai' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <p className="text-slate-400">// AI-Assisted Engineering Workflow</p>
                    <p><span className="text-purple-400">const</span> <span className="text-amber-300">aiTools</span> = &#123;</p>
                    <p className="pl-4"><span className="text-indigo-300">agenticAI</span>: 'Gemini Antigravity',</p>
                    <p className="pl-4"><span className="text-indigo-300">codingAssistants</span>: ['Claude Code AI', 'GitHub Copilot'],</p>
                    <p className="pl-4"><span className="text-indigo-300">impact</span>: 'Accelerated development velocity & clean refactoring'</p>
                    <p>&#125;;</p>
                  </div>
                )}

                {/* Console Footer Status */}
                <div className="pt-3 mt-4 border-t border-slate-900 flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-[11px] font-sans font-semibold text-indigo-400">Ready for Engineering Opportunities</span>
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
