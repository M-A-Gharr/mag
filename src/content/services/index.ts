// Service pages known to the app: their slug, the home page card they belong to, the case
// studies that prove them, and how to load their text. Kept light so other pages can link to
// them without loading the texts.
import type { Service } from './types';

export type { Service, ServiceLang } from './types';

type ServiceEntry = { slug: string; key: Service['key']; caseStudies: string[]; load: () => Promise<{ default: Service }> };

/** Same order as the services on the home page. */
export const SERVICE_PAGES: ServiceEntry[] = [
  {
    slug: 'web-application-development',
    key: 'webapps',
    caseStudies: ['b2b-lead-intelligence-platform', 'export-showcase-site-b2b-crm'],
    load: () => import('./web-application-development'),
  },
  {
    slug: 'ai-automation',
    key: 'ai',
    caseStudies: ['ai-fashion-visuals-studio', 'b2b-lead-intelligence-platform'],
    load: () => import('./ai-automation'),
  },
  {
    slug: 'ecommerce-seo',
    key: 'ecommerce',
    caseStudies: ['prestashop-redesign-multilingual-seo', 'migration-woocommerce-prestashop-9'],
    load: () => import('./ecommerce-seo'),
  },
];

export const serviceForKey = (key: Service['key']) => SERVICE_PAGES.find((s) => s.key === key);

/** The service a case study belongs to (the first one that lists it). */
export const serviceForCaseStudy = (slug: string) => SERVICE_PAGES.find((s) => s.caseStudies.includes(slug));
