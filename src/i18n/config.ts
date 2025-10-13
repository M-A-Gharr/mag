
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './locales/fr.json';
import en from './locales/en.json';
import ar from './locales/ar.json';
import ru from './locales/ru.json';
import es from './locales/es.json';
import hi from './locales/hi.json';
import it from './locales/it.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en', // Set English as the default language
    resources: {
      fr: {
        translation: fr,
      },
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
      ru: {
        translation: ru,
      },
      hi: {
        translation: hi,
      },
      es: {
        translation: es,
      },
      it: {
        translation: it,
      }
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes variables
    }
  });

export default i18next;
