// Every case study, imported statically. Used by the build (build/pagesPlugin.ts) to write the
// pages, their meta tags and the sitemap. The app loads them one by one instead (see ./index.ts).
import aiStudio from './ai-fashion-visuals-studio';
import prestashop from './prestashop-redesign-multilingual-seo';
import leadPlatform from './b2b-lead-intelligence-platform';
import exportSite from './export-showcase-site-b2b-crm';
import migration from './migration-woocommerce-prestashop-9';
import bakery from './bakery-management-saas';
import vrShowroom from './vr-property-showroom-crm';
import invoiceOcr from './configurable-invoice-ocr';
import medicalMvp from './medical-practice-management-mvp';
import bankingAgency from './banking-agency-java-jee';
import type { CaseStudy } from './types';

/** Same order as the case studies on the home page. */
export const CASE_STUDIES: CaseStudy[] = [aiStudio, prestashop, leadPlatform, exportSite, migration, bakery, vrShowroom, invoiceOcr, medicalMvp, bankingAgency];
