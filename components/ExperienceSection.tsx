'use client';

import React, { useState } from 'react';
import { EXPERIENCES } from '@/data/cvData';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, Layers } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);

  const selectedExperience = EXPERIENCES.find((exp) => exp.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 bg-slate-950/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Work Experience & Technical Leadership
          </h2>
          <p className="text-slate-400 text-base">
            Nearly a decade of progression from system development to full-stack engineering and team leadership across international and enterprise environments.
          </p>
        </div>

        {/* Experience Layout: Left Tabs / Timeline & Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  type="button"
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 outline-none focus:outline-none relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/5'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  {/* Selected Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500" />
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`font-bold text-base transition-colors ${isSelected ? 'text-indigo-400' : 'text-slate-200 group-hover:text-slate-100'}`}>
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            Present
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-slate-300">{exp.company}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'text-indigo-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed View */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative">
              
              {/* Role Header */}
              <div className="border-b border-slate-800 pb-6 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl font-bold text-slate-100">
                    {selectedExperience.role}
                  </h3>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-slate-800 text-indigo-400 border border-slate-700">
                    {selectedExperience.company}
                  </span>
                </div>
                <p className="text-slate-300 text-sm italic">
                  "{selectedExperience.summary}"
                </p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-400" />
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-3">
                  {selectedExperience.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-400" />
                  Technologies & Ecosystem
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 text-slate-300 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
