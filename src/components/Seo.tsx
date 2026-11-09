// The page's SEO tags live in index.html, where crawlers that do not run JavaScript
// (LinkedIn, WhatsApp…) read them. This component only translates them in place when
// the language changes. It never adds tags: react-helmet would duplicate the static ones.
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Open Graph locale codes for the site's languages.
const OG_LOCALES: Record<string, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  ar: 'ar_MA',
  es: 'es_ES',
  it: 'it_IT',
  ru: 'ru_RU',
  hi: 'hi_IN',
};

const setContent = (selector: string, value: string) => {
  document.head.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', value);
};

const Seo = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || 'en').slice(0, 2);

  useEffect(() => {
    const title = t('hero.meta.title');
    const description = t('hero.meta.description');
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = title;
    setContent('meta[name="description"]', description);
    setContent('meta[property="og:title"]', title);
    setContent('meta[property="og:description"]', description);
    setContent('meta[property="og:locale"]', OG_LOCALES[lang] ?? 'en_US');
    setContent('meta[name="twitter:title"]', title);
    setContent('meta[name="twitter:description"]', description);
  }, [t, lang]);

  return null;
};

export default Seo;
