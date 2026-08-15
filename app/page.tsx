'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import dynamic from 'next/dynamic';

const DynamicExperienceSection = dynamic(() => import('@/components/ExperienceSection').then(m => m.ExperienceSection));
const DynamicSkillsSection = dynamic(() => import('@/components/SkillsSection').then(m => m.SkillsSection));
const DynamicProjectsSection = dynamic(() => import('@/components/ProjectsSection').then(m => m.ProjectsSection));
const DynamicEducationLeadershipSection = dynamic(() => import('@/components/EducationLeadershipSection').then(m => m.EducationLeadershipSection));
const DynamicContactSection = dynamic(() => import('@/components/ContactSection').then(m => m.ContactSection));
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
            <DynamicExperienceSection />
            <DynamicSkillsSection />
            <DynamicProjectsSection />
            <DynamicEducationLeadershipSection />
            <DynamicContactSection />
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
