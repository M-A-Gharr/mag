
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';

// Only English (the fallback) is in the main bundle; each other language is downloaded the
// first time it is used. The 7 files together weigh about 240 KB.
const loaders = import.meta.glob<{ default: Record<string, unknown> }>(['./locales/*.json', '!./locales/en.json']);

const lazyLocales = {
  type: 'backend' as const,
  init() {},
  read(lng: string, _ns: string, callback: (err: unknown, data: Record<string, unknown> | null) => void) {
    const load = loaders[`./locales/${lng}.json`];
    if (!load) return callback(null, {});
    load().then((m) => callback(null, m.default)).catch((err) => callback(err, null));
  },
};

i18next
  .use(lazyLocales)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // No forced language: the visitor's choice (saved when they pick one) wins, then the
    // browser's language; anything outside the 7 languages falls back to English.
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'ar', 'es', 'it', 'ru', 'hi'],
    resources: { en: { translation: en } },
    partialBundledLanguages: true,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      // New key: the old one ("i18nextLng") holds "en" for past visitors, saved while
      // English was forced, and would hide their browser language.
      lookupLocalStorage: 'mag-lang',
      // fr-FR, ar-MA… become fr, ar…: the components compare i18n.language with short codes.
      convertDetectedLanguage: (lng: string) => lng.split('-')[0],
    },
    interpolation: {
      escapeValue: false, // React already escapes variables
    }
  });

export default i18next;
