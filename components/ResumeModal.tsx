'use client';

import React, { useEffect } from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, ACHIEVEMENTS } from '@/data/cvData';
import { X, Download, Mail, MapPin, Briefcase, GraduationCap, Trophy, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      {/* Modal Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-400 inline-block" />
            <h2 id="resume-modal-title" className="font-bold text-slate-100 text-lg">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              type="button"
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Print / Download PDF CV</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 transition-all outline-none focus:outline-none cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm leading-relaxed">
          
          {/* Header CV Bio */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg font-semibold text-indigo-400">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.email}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.location}</span>
            </div>
            <p className="text-slate-300 text-sm pt-2">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2 uppercase tracking-wider text-xs font-mono text-indigo-400">
              <Briefcase className="w-4 h-4" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2 border-l-2 border-slate-800 pl-4">
                  <div className="flex flex-wrap items-center justify-between">
                    <h4 className="font-bold text-slate-100 text-base">
                      {exp.role} — <span className="text-indigo-400">{exp.company}</span>
                    </h4>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </h3>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <h4 className="font-bold text-slate-100 text-sm">{edu.degree}</h4>
                  <p className="text-xs text-slate-400">{edu.institution} ({edu.period})</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-amber-400 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Honors & Competitions
              </h3>
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="space-y-1">
                  <h4 className="font-bold text-slate-100 text-sm">{ach.title} ({ach.year})</h4>
                  <p className="text-xs text-slate-400">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 font-mono">Alejo Rostata — Curriculum Vitae</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              type="button"
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Close Viewer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
