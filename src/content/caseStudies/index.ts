// Case study pages known to the app: their slug, the project card they belong to, and how to
// load their text. Kept light so the home page can link to them without loading the texts.
import type { CaseStudy, CaseStudyLang } from './types';

export type { CaseStudy, CaseStudyLang } from './types';

export const CASE_STUDY_PAGES: { slug: string; projectId: number; load: () => Promise<{ default: CaseStudy }> }[] = [
  { slug: 'migration-woocommerce-prestashop-9', projectId: 13, load: () => import('./migration-woocommerce-prestashop-9') },
];

/** Languages that have their own version of each case study; the others read the English one. */
export const caseStudyLang = (lng: string): CaseStudyLang => (lng === 'fr' || lng === 'ar' ? lng : 'en');

export const caseStudyForProject = (projectId: number) => CASE_STUDY_PAGES.find((p) => p.projectId === projectId);
