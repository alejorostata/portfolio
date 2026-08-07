'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationLeadershipSection } from '@/components/EducationLeadershipSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Auto-open CV modal if URL contains #cv or ?view=cv
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const search = window.location.search;
      if (hash === '#cv' || search.includes('view=cv') || search.includes('modal=cv')) {
        setIsResumeModalOpen(true);
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative bg-slate-950 text-slate-100">
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] px-4 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs shadow-lg outline-none focus:ring-2 focus:ring-blue-400"
        >
          Skip to main content
        </a>

        {/* Sticky Header Navigation */}
        <Header onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Main Content Area */}
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationLeadershipSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* CV Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => {
            setIsResumeModalOpen(false);
            // Clean up URL hash if closing modal
            if (typeof window !== 'undefined' && window.location.hash === '#cv') {
              window.history.replaceState(null, '', window.location.pathname);
            }
          }}
        />
      </div>
    </ThemeProvider>
  );
}
