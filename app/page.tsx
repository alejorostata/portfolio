'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import { LazySection } from '@/components/LazySection';
import dynamic from 'next/dynamic';

const DynamicExperienceSection = dynamic(() => import('@/components/ExperienceSection').then(m => m.ExperienceSection), { ssr: false });
const DynamicSkillsSection = dynamic(() => import('@/components/SkillsSection').then(m => m.SkillsSection), { ssr: false });
const DynamicProjectsSection = dynamic(() => import('@/components/ProjectsSection').then(m => m.ProjectsSection), { ssr: false });
const DynamicEducationLeadershipSection = dynamic(() => import('@/components/EducationLeadershipSection').then(m => m.EducationLeadershipSection), { ssr: false });
const DynamicContactSection = dynamic(() => import('@/components/ContactSection').then(m => m.ContactSection), { ssr: false });
const DynamicResumeModal = dynamic(() => import('@/components/ResumeModal').then(m => m.ResumeModal), { ssr: false });

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash;
        const search = window.location.search;
        if (hash === '#cv' || search.includes('view=cv') || search.includes('modal=cv')) {
          setIsResumeModalOpen(true);
        }
      }
    };

    // Check on mount
    checkHash();

    // Listen to hash changes (for anchor link clicks)
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col relative bg-slate-950 text-slate-100">
          {/* Sticky Header Navigation */}
          <Header />

          {/* Main Content Area */}
          <main id="main-content" className="flex-grow" tabIndex={-1}>
            <HeroSection />
            <LazySection minHeight="800px">
              <DynamicExperienceSection />
            </LazySection>
            <LazySection minHeight="800px">
              <DynamicSkillsSection />
            </LazySection>
            <LazySection minHeight="1200px">
              <DynamicProjectsSection />
            </LazySection>
            <LazySection minHeight="600px">
              <DynamicEducationLeadershipSection />
            </LazySection>
            <LazySection minHeight="600px">
              <DynamicContactSection />
            </LazySection>
          </main>

          {/* Footer */}
          <Footer />

          {/* CV Modal */}
          <DynamicResumeModal
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
    </LanguageProvider>
  );
}
