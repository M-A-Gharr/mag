// Everything the current page needs before React's first render: the translations, the page's
// code and its text. Until then the prerendered HTML (build/pagesPlugin.ts) stays on screen, so
// visitors never see a loading spinner or an empty frame in between.
import { i18nReady } from '@/i18n/config';
import { caseStudySlugAt, serviceSlugAt } from '@/i18n/paths';
import { loadCaseStudy } from '@/content/caseStudies';
import { loadService } from '@/content/services';
import { CaseStudyPage, ServicePage } from '@/routes';

export const preloadCurrentPage = () => {
  const { pathname } = window.location;
  const study = caseStudySlugAt(pathname);
  const service = serviceSlugAt(pathname);
  return Promise.all([
    i18nReady,
    ...(study ? [CaseStudyPage.preload(), loadCaseStudy(study)] : []),
    ...(service ? [ServicePage.preload(), loadService(service)] : []),
  ]).catch(() => {
    // A failed download is retried by the page itself; render anyway.
  });
};
