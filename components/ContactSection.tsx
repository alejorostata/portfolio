'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/cvData';
import { Mail, MapPin, Copy, Check, Send, MessageSquare, PhoneCall, ExternalLink, Loader2, Paperclip, X, FileText, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { RichTextEditor } from './RichTextEditor';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GitHubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ALLOWED_EXTS = ['.pdf', '.docx', '.doc', '.png', '.jpg', '.jpeg', '.txt'];
const MAX_SINGLE_FILE_BYTES = 5 * 1024 * 1024; // 5 MB per file
const MAX_TOTAL_BYTES = 10 * 1024 * 1024; // 10 MB total cumulative
const MAX_FILES_COUNT = 5;

interface AttachmentItem {
  id: string;
  name: string;
  sizeBytes: number;
  sizeMB: string;
  content: string;
}

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedViber, setCopiedViber] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [attachments, setAttachments] = useState<AttachmentItem[]>([]);
  const [attachmentError, setAttachmentError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyViber = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.viberPhone);
    setCopiedViber(true);
    setTimeout(() => setCopiedViber(false), 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttachmentError('');
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    if (attachments.length + files.length > MAX_FILES_COUNT) {
      setAttachmentError(`Maximum ${MAX_FILES_COUNT} files allowed in total.`);
      return;
    }

    const newItems: AttachmentItem[] = [];
    let currentTotalBytes = attachments.reduce((sum, item) => sum + item.sizeBytes, 0);

    for (const file of files) {
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!ALLOWED_EXTS.includes(ext)) {
        setAttachmentError(`"${file.name}" has an unsupported file type. Please upload PDF, DOCX, PNG, JPG, or TXT.`);
        return;
      }

      if (file.size > MAX_SINGLE_FILE_BYTES) {
        setAttachmentError(`"${file.name}" (${(file.size / (1024 * 1024)).toFixed(2)} MB) exceeds the 5MB single file limit.`);
        return;
      }

      currentTotalBytes += file.size;
      if (currentTotalBytes > MAX_TOTAL_BYTES) {
        setAttachmentError(`Total attachments size exceeds the 10MB limit.`);
        return;
      }
    }

    // Read files as Base64
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        setAttachments((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
            name: file.name,
            sizeBytes: file.size,
            sizeMB: (file.size / (1024 * 1024)).toFixed(2),
            content: base64,
          },
        ]);
      };
      reader.readAsDataURL(file);
    });

    // Reset input
    e.target.value = '';
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((item) => item.id !== id));
    setAttachmentError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const plainMessage = formData.message.replace(/<[^>]*>/g, '').trim();
    if (!formData.name || !formData.email || !plainMessage) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          attachments,
        }),
      });

      if (!res.ok) {
        throw new Error('Direct send unavailable');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setAttachments([]);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    } catch {
      // Fallback: If API key is not configured yet or network fails, open mailto link
      const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${plainMessage}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setAttachments([]);
        setIsSubmitted(false);
      }, 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Email Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm dark:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('contact.emailLabel')}</p>
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Copy email address"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold text-right animate-in fade-in duration-200">
                  {t('contact.copiedClipboard')}
                </p>
              )}
            </div>

            {/* Viber / Mobile Phone Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm dark:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('contact.mobileLabel')}</p>
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 shrink-0">
                        {t('contact.viberActive')}
                      </span>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base truncate block">
                      {PERSONAL_INFO.viberPhone}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyViber}
                  type="button"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Copy Viber number"
                  title="Copy Viber Number"
                >
                  {copiedViber ? <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedViber && (
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold text-right animate-in fade-in duration-200">
                  {t('contact.copiedViber')}
                </p>
              )}
            </div>

            {/* Location Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 flex items-center gap-3 shadow-sm dark:shadow-lg">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('contact.locationLabel')}</p>
                <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">{t('contact.locationValue')}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <GitHubIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-sm dark:shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                {t('contact.formTitle')}
              </h3>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">{t('contact.successMessage')}</h4>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-all focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span>{t('contact.sendEmailTo')} {PERSONAL_INFO.email}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {t('contact.nameField')} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t('contact.namePlaceholder')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {t('contact.emailField')} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t('contact.emailPlaceholder')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t('contact.subjectField')}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t('contact.subjectPlaceholder')}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Rich Text Editor Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t('contact.messageField')} <span className="text-rose-500">*</span>
                    </label>
                    <RichTextEditor
                      key={t('contact.messagePlaceholder')}
                      content={formData.message}
                      onChange={(html) => setFormData({ ...formData, message: html })}
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  {/* File Attachments Zone (Up to 5 files, 10MB total max) */}
                  <div className="space-y-2 pt-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-start sm:items-center gap-1.5">
                        <Paperclip className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 sm:mt-0" />
                        <span>{t('contact.attachmentLabel')}</span>
                      </label>
                      <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0 self-start sm:self-auto">
                        {t('contact.attachmentMax')}
                      </span>
                    </div>

                    {/* Multi-file List */}
                    {attachments.length > 0 && (
                      <div className="space-y-2">
                        {attachments.map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-xs">
                            <div className="flex items-center gap-2.5 overflow-hidden">
                              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                              <span className="font-semibold text-slate-900 dark:text-slate-100 truncate">{item.name}</span>
                              <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">({item.sizeMB} MB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeAttachment(item.id)}
                              className="p-1 rounded-md hover:bg-blue-100 dark:hover:bg-blue-500/20 text-slate-500 hover:text-rose-500 transition-colors cursor-pointer"
                              title="Remove attachment"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {attachments.length < MAX_FILES_COUNT && (
                      <label className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/50 bg-slate-50/50 dark:bg-slate-950/50 cursor-pointer transition-all group">
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.docx,.doc,.png,.jpg,.jpeg,.txt"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium">
                          <Paperclip className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110 transition-all" />
                          <span>{t('contact.attachmentPlaceholder')}</span>
                        </div>
                      </label>
                    )}

                    {attachmentError && (
                      <div className="flex items-center gap-1.5 text-xs text-rose-500 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{attachmentError}</span>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    <span>{isSubmitting ? 'Sending...' : t('contact.btnSend')}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
