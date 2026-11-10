// Addresses of the site's pages in each language. No imports: the build plugin in
// vite.config.ts uses the same helpers to write the pages and the sitemap.
//
//   home          /            /fr/                     /ar/
//   case study    /case-studies/<slug>/   /fr/etudes-de-cas/<slug>/   /ar/case-studies/<slug>/
//   expertise     /expertise/<slug>/      /fr/expertise/<slug>/       /ar/expertise/<slug>/
//
// Spanish, Italian, Russian and Hindi share the English addresses.
export const SITE_URL = 'https://www.maminegh.com/';
export const PATH_LANGS = ['fr', 'ar'] as const;

const isPathLang = (lng: string): boolean => (PATH_LANGS as readonly string[]).includes(lng);

/** Path of a language's home page: /fr/, /ar/, or / for the others. */
export const pathFor = (lng: string) => (isPathLang(lng) ? `/${lng}/` : '/');

/** Full canonical address of a language's home page. */
export const urlFor = (lng: string) => `${SITE_URL}${pathFor(lng).slice(1)}`;

/** First path segment of the case study pages in each language. */
export const CASE_STUDY_SEGMENT: Record<string, string> = { en: 'case-studies', fr: 'etudes-de-cas', ar: 'case-studies' };

/** Path of a case study page in a language (English address for the languages without one). */
export const caseStudyPath = (lng: string, slug: string) =>
  isPathLang(lng) ? `/${lng}/${CASE_STUDY_SEGMENT[lng]}/${slug}/` : `/${CASE_STUDY_SEGMENT.en}/${slug}/`;

/** Path of an expertise page in a language (English address for the languages without one). */
export const servicePath = (lng: string, slug: string) => (isPathLang(lng) ? `/${lng}/expertise/${slug}/` : `/expertise/${slug}/`);

const SERVICE_RE = /^\/(?:(fr|ar)\/)?expertise\/([^/]+)\/?$/;

/** The slug of the expertise page at this path, or null. */
export const serviceSlugAt = (pathname: string) => pathname.match(SERVICE_RE)?.[2] ?? null;

const CASE_STUDY_RE = /^\/(?:(fr|ar)\/)?(?:case-studies|etudes-de-cas)\/([^/]+)\/?$/;

/** The slug of the case study at this path, or null. */
export const caseStudySlugAt = (pathname: string) => pathname.match(CASE_STUDY_RE)?.[2] ?? null;

/** Whether this path is one of the home pages (/, /fr/, /ar/). */
export const isHomePath = (pathname: string) => pathname === '/' || /^\/(fr|ar)\/?$/.test(pathname);
