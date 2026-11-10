// Every case study, imported statically. Used by the build (vite.config.ts) to write the pages,
// their meta tags and the sitemap. The app loads them one by one instead (see ./index.ts).
import migration from './migration-woocommerce-prestashop-9';
import type { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [migration];
