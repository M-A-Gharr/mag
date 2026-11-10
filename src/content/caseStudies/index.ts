// Case study pages known to the app: their slug, the project card they belong to, and how to
// load their text. Kept light so the home page can link to them without loading the texts.
import type { CaseStudy, CaseStudyLang } from './types';

export type { CaseStudy, CaseStudyLang } from './types';

/** Same order as the case studies on the home page. */
export const CASE_STUDY_PAGES: { slug: string; projectId: number; load: () => Promise<{ default: CaseStudy }> }[] = [
  { slug: 'ai-fashion-visuals-studio', projectId: 11, load: () => import('./ai-fashion-visuals-studio') },
  { slug: 'prestashop-redesign-multilingual-seo', projectId: 8, load: () => import('./prestashop-redesign-multilingual-seo') },
  { slug: 'b2b-lead-intelligence-platform', projectId: 6, load: () => import('./b2b-lead-intelligence-platform') },
  { slug: 'export-showcase-site-b2b-crm', projectId: 12, load: () => import('./export-showcase-site-b2b-crm') },
  { slug: 'migration-woocommerce-prestashop-9', projectId: 13, load: () => import('./migration-woocommerce-prestashop-9') },
];

/** The other case studies to suggest at the end of one: the next two, in home-page order. */
export const relatedCaseStudies = (slug: string, count = 2) => {
  const i = CASE_STUDY_PAGES.findIndex((p) => p.slug === slug);
  return Array.from({ length: Math.min(count, CASE_STUDY_PAGES.length - 1) }, (_, k) => CASE_STUDY_PAGES[(i + 1 + k) % CASE_STUDY_PAGES.length]);
};

/** Languages that have their own version of each case study; the others read the English one. */
export const caseStudyLang = (lng: string): CaseStudyLang => (lng === 'fr' || lng === 'ar' ? lng : 'en');

export const caseStudyForProject = (projectId: number) => CASE_STUDY_PAGES.find((p) => p.projectId === projectId);
