import { Locale, TranslationSchema } from '@/types/i18n';
import { en } from './en';
import { es } from './es';
import { fil } from './fil';
import { de } from './de';
import { ja } from './ja';
import { ko } from './ko';
import { zh } from './zh';

export const translations: Record<Locale, TranslationSchema> = {
  en,
  es,
  fil,
  de,
  ja,
  ko,
  zh,
};

export { en, es, fil, de, ja, ko, zh };
