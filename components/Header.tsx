'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenResume?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy for active section highlight
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md py-3 shadow-xs dark:shadow-slate-900/40 border-b-0'
          : 'bg-transparent py-4 sm:py-5 border-b-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group shrink-0 focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl p-1"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-slate-900 border border-slate-800 shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/logo.svg"
                alt="Alejo Rostata Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-tight tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Alejo Rostata
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-600 dark:text-slate-400 leading-tight">
                Software Engineer & Team Lead
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Desktop Navigation"
            className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/90 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle />

            {/* Contact CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs shadow-xs transition-all cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile / Tablet Drawer Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 flex items-center justify-center shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Drawer Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 mt-1">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full h-11 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};
