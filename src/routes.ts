// Pages loaded on demand. The home page is in the entry bundle (no second round trip before
// the first paint).
import { lazyPage } from '@/lib/lazyPage';

export const NotFound = lazyPage(() => import('./pages/NotFound'));
export const CaseStudyPage = lazyPage(() => import('./pages/CaseStudyPage'));
export const ServicePage = lazyPage(() => import('./pages/ServicePage'));
