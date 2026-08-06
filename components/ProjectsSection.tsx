'use client';

import React from 'react';
import { PROJECTS } from '@/data/cvData';
import { FolderGit2, ExternalLink, CheckCircle2, Server, Smartphone, Cpu, Wrench, Globe, Database } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web & Cloud':
        return <Server className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'Mobile App':
        return <Smartphone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'Enterprise & Automation':
        return <Cpu className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case 'DevOps & Tooling':
        return <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      default:
        return <FolderGit2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Projects & Systems I've Built
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A showcase of SaaS products, mobile apps, and enterprise systems I've architected, built, or currently maintain.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm dark:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] sm:text-xs font-medium shadow-sm">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>

                    {/* SaaS / B2C / B2B Type Badge */}
                    <span className="px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-[11px] sm:text-xs font-semibold">
                      {project.projectType}
                    </span>
                  </div>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-[11px] sm:text-xs font-semibold hover:bg-emerald-600 hover:text-white transition-all"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : project.company ? (
                    <span className="text-[11px] sm:text-xs font-semibold text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 px-2.5 py-1 rounded-md">
                      {project.company}
                    </span>
                  ) : null}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Database Badge */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <Database className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>Database: <strong className="text-slate-900 dark:text-slate-200">{project.database}</strong></span>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Architectural & Engineering Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack & Links */}
              <div className="pt-5 border-t border-slate-200 dark:border-slate-800/80 space-y-3 sm:space-y-4">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-medium bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/50 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
