'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Download, ShieldCheck, FileText, Share2, Check, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PERSONAL_INFO } from '@/data/cvData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    previousActiveElementRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';

    setTimeout(() => closeButtonRef.current?.focus(), 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);

      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  const handleShareCV = async () => {
    const cvShareUrl = typeof window !== 'undefined'
      ? `${window.location.origin}/?view=cv#cv`
      : 'https://alejorostata.com/?view=cv#cv';
    
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Alejo Rostata — CV (Software Engineer & Team Lead)',
          text: 'View Alejo Rostata\'s Curriculum Vitae on his official portfolio',
          url: cvShareUrl,
        });
        return;
      } catch (err) {
        // Fallback to copy link
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(cvShareUrl);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-[0] z-[100] flex items-center justify-center p-2.5 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between p-3.5 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 shrink-0">
              <FileText className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="truncate">
              <h2 id="resume-modal-title" className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 truncate">
                {t('cvModal.title')} — {PERSONAL_INFO.name}
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1 mt-0.5 truncate">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                <span className="truncate">{t('cvModal.verifiedPdf')}</span>
              </p>
            </div>
          </div>

          {/* Top Right Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            type="button"
            className="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors flex items-center justify-center shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Close modal dialog"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body: PDF Container & Mobile Notification Banner */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950 p-2.5 sm:p-4 flex flex-col space-y-2.5 min-h-[360px] sm:min-h-[500px]">
          
          {/* Mobile PDF Notice Banner */}
          <div className="sm:hidden p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-300 flex items-center justify-between gap-2.5 shrink-0">
            <span className="leading-tight text-[11px] font-medium">{t('cvModal.mobileNotice')}</span>
            <a
              href="/alejo_rostata_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] shrink-0 inline-flex items-center gap-1 shadow-xs"
            >
              <span>{t('cvModal.openNewTab')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Embedded PDF iframe */}
          <div className="flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white">
            <iframe
              src="/alejo_rostata_cv.pdf#toolbar=1&navpanes=0&view=FitH"
              title="Alejo Rostata PDF Resume"
              className="w-full h-full min-h-[350px] sm:min-h-[500px]"
            />
          </div>
        </div>

        {/* Modal Action Footer Bar */}
        <div className="p-3.5 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shrink-0">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            
            {/* Left Secondary Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShareCV}
                type="button"
                className="flex-1 sm:flex-initial h-10 px-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
                title="Share link to CV"
              >
                {copiedShare ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                    <span className="text-emerald-600 dark:text-emerald-400">{t('cvModal.copyLinkSuccess')}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>{t('cvModal.shareBtn')}</span>
                  </>
                )}
              </button>

              <a
                href="/alejo_rostata_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial h-10 px-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <span>{t('cvModal.openNewTab')}</span>
              </a>
            </div>

            {/* Right Primary Download CTA */}
            <div className="flex items-center gap-2">
              <a
                href="/alejo_rostata_cv.pdf"
                download="CV (Software Engineer) - Alejo Rostata.pdf"
                className="w-full sm:w-auto h-10 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>{t('cvModal.downloadBtn')}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
