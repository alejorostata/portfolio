'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/cvData';
import { FolderGit2, ExternalLink, ShieldAlert, CheckCircle2, Layers, Cpu, Server, Smartphone, Wrench } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web & Cloud', 'Mobile App', 'Enterprise & Automation', 'DevOps & Tooling'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web & Cloud':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Mobile App':
        return <Smartphone className="w-4 h-4 text-purple-400" />;
      case 'Enterprise & Automation':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'DevOps & Tooling':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <FolderGit2 className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Architecture & Key Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Systems & Enterprise Solutions
          </h2>
          <p className="text-slate-400 text-base">
            Representative software applications, mobile platforms, and infrastructure solutions engineered for high scalability, security, and performance.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Project Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
              role="tab"
              aria-selected={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 text-xs font-medium">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  {project.company && (
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                      {project.company}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Architectural Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-950 border border-slate-800/80 text-slate-300"
                    >
                      {tech}
                    </span>
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
