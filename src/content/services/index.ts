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
    caseStudies: ['b2b-lead-intelligence-platform', 'export-showcase-site-b2b-crm', 'bakery-management-saas', 'vr-property-showroom-crm', 'medical-practice-management-mvp', 'banking-agency-java-jee'],
    load: () => import('./web-application-development'),
  },
  {
    slug: 'ai-automation',
    key: 'ai',
    caseStudies: ['ai-fashion-visuals-studio', 'b2b-lead-intelligence-platform', 'configurable-invoice-ocr'],
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

/** All relevant services, including projects that span several areas. */
export const servicesForCaseStudy = (slug: string) => SERVICE_PAGES.filter((s) => s.caseStudies.includes(slug));

/** Expertise links for every portfolio item, including those without a case-study page. */
export const servicesForProject = (projectId: number) => {
  const keys: Record<number, Service['key'][]> = {
    1: ['webapps', 'ai'], 2: ['webapps'], 6: ['webapps', 'ai'], 7: ['ai'],
    8: ['ecommerce'], 9: ['ecommerce'], 10: ['webapps'], 11: ['ai'],
    12: ['webapps'], 13: ['ecommerce'], 14: ['ecommerce'], 15: ['ai'],
    16: ['ai'], 17: ['webapps'], 18: ['webapps'],
  };
  return SERVICE_PAGES.filter((service) => keys[projectId]?.includes(service.key));
};
