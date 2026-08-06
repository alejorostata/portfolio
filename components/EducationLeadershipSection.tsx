'use client';

import React from 'react';
import { EDUCATION, ACHIEVEMENTS } from '@/data/cvData';
import { GraduationCap, Award, Trophy, BookOpen } from 'lucide-react';

export const EducationLeadershipSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education, ACM-ICPC & Achievements
          </h2>
          <p className="text-slate-400 text-base">
            Rooted in strong computer science fundamentals, continuous graduate education, and competitive algorithmic problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>Formal Education</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-slate-700 transition-all shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-lg font-bold text-slate-100">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                      {edu.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400">
                    <span className="text-slate-200 font-semibold">{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  {edu.details && (
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Competitive Honors Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Honors & Competitions</span>
            </h3>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/40 transition-all shadow-xl relative overflow-hidden group"
                >
                  {/* Subtle Accent Light */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-xl rounded-full pointer-events-none" />

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                      {ach.iconName === 'Trophy' ? <Trophy className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-slate-100 text-base group-hover:text-amber-300 transition-colors">
                          {ach.title}
                        </h4>
                        <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                          {ach.year}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-400">
                        {ach.organization}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed pt-1">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
