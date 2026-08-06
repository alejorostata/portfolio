'use client';

import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-950 text-slate-100">
      {/* Sticky Header Navigation */}
      <Header onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
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
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
