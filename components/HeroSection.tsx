'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/cvData';
import { Briefcase, Award, GraduationCap, MapPin, ArrowRight, FileText, CheckCircle2, Code2, Layers, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Team Lead @ Kryterion, Inc.</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>MS IT Candidate</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-semibold text-sm hover:bg-slate-800 hover:border-emerald-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View Full CV</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">10+</p>
                <p className="text-xs text-slate-400 font-medium">Years Experience</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-100">ACM-ICPC</p>
                <p className="text-xs text-slate-400 font-medium">2014 National Contestant</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">Full-Stack</p>
                <p className="text-xs text-slate-400 font-medium">Web, Mobile & DevOps</p>
              </div>
            </div>

          </div>

          {/* Right Column: Code & Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden group">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-slate-300 font-sans font-medium text-xs">architect_profile.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[11px]">Production Verified</span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-3 bg-slate-950/90 leading-relaxed overflow-x-auto">
                <div>
                  <span className="text-purple-400">interface</span> <span className="text-amber-300">EngineeringLead</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-300">'Alejo Rostata'</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">currentRole:</span> <span className="text-emerald-300">'Software Engineering Team Lead'</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreCapabilities:</span> [
                </div>
                <div className="pl-8 text-cyan-300">
                  'System Architecture', 'Team Mentorship',<br />
                  'Agile Delivery', 'Cross-Platform Scaling'
                </div>
                <div className="pl-4">
                  ];
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span> &#123;
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">backend:</span> [<span className="text-emerald-300">'Java (Spring Boot)'</span>, <span className="text-emerald-300">'Node.js'</span>, <span className="text-emerald-300">'PHP'</span>],
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">frontend:</span> [<span className="text-emerald-300">'Next.js'</span>, <span className="text-emerald-300">'Vue.js'</span>, <span className="text-emerald-300">'Tailwind'</span>],
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">mobile:</span> [<span className="text-emerald-300">'Flutter'</span>, <span className="text-emerald-300">'React Native'</span>],
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">devops:</span> [<span className="text-emerald-300">'Docker'</span>, <span className="text-emerald-300">'Jenkins'</span>, <span className="text-emerald-300">'AWS'</span>]
                </div>
                <div className="pl-4">
                  &#125;;
                </div>
                <div>&#125;</div>

                {/* Live Status Output */}
                <div className="pt-3 border-t border-slate-900 text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-sans text-[11px] font-semibold">Active Leadership & Architecture</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[10px]">v10.0.0</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
