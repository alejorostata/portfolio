'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp, Accessibility } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer role="contentinfo" className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 py-10 sm:py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col items-center md:flex-row md:items-center justify-between gap-6 text-center md:text-left border-b border-slate-800 pb-8">
          
          {/* Brand & Custom Logo */}
          <div className="flex flex-col items-center md:items-start space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-slate-950 border border-slate-800">
                <Image
                  src="/logo.svg"
                  alt="Alejo Rostata Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-slate-100 text-base sm:text-lg">
                Alejo Rostata
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Full Stack Software Engineer & Team Lead
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 text-xs font-medium" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1 rounded-md text-slate-400 hover:text-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back To Top Button */}
          <div>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

        </div>

        {/* Bottom Rights with WCAG 2.1 AAA Accessibility Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Alejo Rostata. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-[11px]">
              <Accessibility className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              <span>WCAG 2.1 AAA Compliant</span>
            </span>
            <span>Built with Next.js 16, React 19 & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
