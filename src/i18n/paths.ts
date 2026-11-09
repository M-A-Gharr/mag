// Languages that have their own address (/fr/, /ar/), with pages generated at build time
// (see localizedPages in vite.config.ts). The others share the root address with English.
export const SITE_URL = 'https://www.maminegh.com/';
export const PATH_LANGS = ['fr', 'ar'] as const;

const isPathLang = (lng: string): boolean => (PATH_LANGS as readonly string[]).includes(lng);

/** Path of a language's page: /fr/, /ar/, or / for the others. */
export const pathFor = (lng: string) => (isPathLang(lng) ? `/${lng}/` : '/');

/** Full canonical address of a language's page. */
export const urlFor = (lng: string) => `${SITE_URL}${pathFor(lng).slice(1)}`;

/** Keeps the address bar on the page of the current language (only on the language pages). */
export const syncUrlWithLanguage = (lng: string) => {
  const { pathname, search, hash } = window.location;
  const onLanguagePage = pathname === '/' || /^\/(fr|ar)\/?$/.test(pathname);
  const want = pathFor(lng);
  if (onLanguagePage && pathname !== want) {
    window.history.replaceState(window.history.state, '', `${want}${search}${hash}`);
  }
};
