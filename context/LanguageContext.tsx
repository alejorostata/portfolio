'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, SUPPORTED_LANGUAGES, LanguageOption } from '@/types/i18n';
import { translations } from '@/data/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && translations[saved]) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
        return;
      }

      // Auto-detect browser language preference
      const browserLang = navigator.language.split('-')[0].toLowerCase();
      const matched = SUPPORTED_LANGUAGES.find((l) => l.code === browserLang);
      if (matched) {
        setLocaleState(matched.code);
        document.documentElement.lang = matched.code;
      }
    } catch {
      // Ignore storage read errors
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    if (!translations[newLocale]) return;
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // Ignore storage write errors
    }
  };

  // Dot-notated getter helper with fallback to English
  const t = (path: string): string => {
    const keys = path.split('.');
    
    // 1. Try active locale
    let current: any = translations[locale];
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        current = undefined;
        break;
      }
    }

    if (typeof current === 'string') return current;

    // 2. Fallback to English
    let fallback: any = translations.en;
    for (const key of keys) {
      if (fallback && typeof fallback === 'object' && key in fallback) {
        fallback = fallback[key];
      } else {
        fallback = undefined;
        break;
      }
    }

    if (typeof fallback === 'string') return fallback;

    // 3. Return key as last resort
    return path;
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        languages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
