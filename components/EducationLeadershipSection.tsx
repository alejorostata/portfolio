'use client';

import React from 'react';
import { EDUCATION, ACHIEVEMENTS } from '@/data/cvData';
import { GraduationCap, Award, Trophy, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const EducationLeadershipSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-16 sm:py-20 relative bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t('education.badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {t('education.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Formal Education</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm dark:shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400">
                      {edu.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-slate-200 font-semibold">{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  {edu.details && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Competitive Honors Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>Honors & Competitions</span>
            </h3>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3 hover:border-amber-400 transition-all shadow-sm dark:shadow-xl relative overflow-hidden group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-600 dark:text-amber-400 shrink-0">
                      {ach.iconName === 'Trophy' ? <Trophy className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                          {ach.title}
                        </h4>
                        <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                          {ach.year}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {ach.organization}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
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
