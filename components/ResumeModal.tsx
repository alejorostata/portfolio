'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Download, ShieldCheck, FileText, Share2, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

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

    // Save previous active focus element to restore on close
    previousActiveElementRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';

    // Focus initial close button inside modal
    setTimeout(() => closeButtonRef.current?.focus(), 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close modal on Escape
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Strictly trap Tab & Shift+Tab within modal elements
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab: If on first element, wrap to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: If on last element, wrap to first
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

      // Restore focus back to trigger button when modal closes
      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  const handleShareCV = async () => {
    const cvShareUrl = typeof window !== 'undefined'
      ? `${window.location.origin}/?view=cv#cv`
      : 'https://alejorostata.com/?view=cv#cv';
    
    // Attempt native Web Share API
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Alejo Rostata — CV (Software Engineer & Team Lead)',
          text: 'View Alejo Rostata\'s Curriculum Vitae on his official portfolio',
          url: cvShareUrl,
        });
        return;
      } catch (err) {
        // Fallback to copy link if user cancelled share sheet
      }
    }

    // Fallback: Copy sharable portfolio link to clipboard
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(cvShareUrl);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-[0] z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400">
              <FileText className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100">
                {t('cvModal.title')} — Alejo Rostata
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <span>Verified PDF Resume</span>
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body: Embedded PDF Viewer */}
        <div className="flex-1 min-h-[350px] sm:min-h-[500px] bg-slate-100 dark:bg-slate-950 p-2 relative">
          <iframe
            src="/alejo_rostata_cv.pdf#toolbar=1&navpanes=0&view=FitH"
            title="Alejo Rostata PDF Resume"
            className="w-full h-full min-h-[350px] sm:min-h-[500px] rounded-xl border border-slate-200 dark:border-slate-800"
          />
        </div>

        {/* Modal Footer: Standardized Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-2.5 p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shrink-0">
          {/* Share CV Link Button */}
          <button
            onClick={handleShareCV}
            type="button"
            className="h-11 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer hover:border-blue-400"
            title="Share or Copy Direct Link to Auto-Opening Portfolio Resume"
          >
            {copiedShare ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                <span className="text-emerald-600 dark:text-emerald-400">{t('cvModal.copyLinkSuccess')}</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <span>{t('cvModal.shareBtn')}</span>
              </>
            )}
          </button>

          {/* Download PDF Button */}
          <a
            href="/alejo_rostata_cv.pdf"
            download="CV (Software Engineer) - Alejo Rostata.pdf"
            className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>{t('cvModal.downloadBtn')}</span>
          </a>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            type="button"
            className="h-11 px-5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
          >
            <span>{t('cvModal.closeBtn')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
