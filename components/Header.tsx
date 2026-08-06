'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsScrolled(window.scrollY > 20);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-sm dark:shadow-xl'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Custom SVG Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group rounded-xl p-1 shrink-0 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 transition-all"
          aria-label="Alejo Rostata Portfolio Homepage"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-sm shrink-0 flex items-center justify-center bg-slate-950 border border-slate-800 group-hover:border-blue-500 transition-colors">
            <Image
              src="/logo.svg"
              alt="Alejo Rostata Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="font-bold text-slate-900 dark:text-slate-100 text-base sm:text-lg tracking-tight block group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
              Alejo Rostata
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono hidden sm:block">
              Software Engineer & Team Lead
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 shadow-sm" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/30 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 shadow-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Header Bar: Theme Toggle + Menu Icon ONLY */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 cursor-pointer shadow-sm"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : <Menu className="w-5 h-5 text-slate-700 dark:text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 py-6 shadow-xl space-y-4 animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
