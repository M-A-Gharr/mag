// A case study on its own page: breadcrumb, summary, the story section by section, the result
// and a call to action. Its HTML, meta tags and structured data are also written at build time
// (vite.config.ts), so crawlers that do not run JavaScript read the same text.
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ChevronRight, Trophy } from 'lucide-react';
import '@/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionLink from '@/components/SectionLink';
import ArticleReveal from '@/components/ArticleReveal';
import { CASE_STUDY_PAGES, caseStudyLang, relatedCaseStudies, type CaseStudy } from '@/content/caseStudies';
import { caseStudyPath, pathFor, servicePath, SITE_URL } from '@/i18n/paths';
import { servicesForCaseStudy } from '@/content/services';
import NotFound from './NotFound';
import { conversionCopy } from '@/content/conversion';
import ContextualContact from '@/components/ContextualContact';

const OG_LOCALES: Record<string, string> = { en: 'en_US', fr: 'fr_FR', ar: 'ar_MA' };

const setMeta = (selector: string, value: string) =>
  document.head.querySelector(selector)?.setAttribute(selector.startsWith('link') ? 'href' : 'content', value);

const CaseStudyPage = () => {
  const { slug = '' } = useParams();
  const { t, i18n } = useTranslation();
  const entry = CASE_STUDY_PAGES.find((p) => p.slug === slug);
  const [study, setStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    let cancelled = false;
    setStudy(null);
    entry?.load().then((m) => { if (!cancelled) setStudy(m.default); });
    return () => { cancelled = true; };
  }, [entry]);

  const lang = caseStudyLang(i18n.language);
  const text = study?.text[lang];
  const rtl = lang === 'ar';

  // Title, description, canonical and share tags of this page, in the current language.
  useEffect(() => {
    if (!text) return;
    const url = `${SITE_URL}${caseStudyPath(lang, slug).slice(1)}`;
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.title = text.metaTitle;
    setMeta('meta[name="description"]', text.metaDescription);
    setMeta('link[rel="canonical"]', url);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:title"]', text.metaTitle);
    setMeta('meta[property="og:description"]', text.metaDescription);
    setMeta('meta[property="og:locale"]', OG_LOCALES[lang]);
    setMeta('meta[property="og:type"]', 'article');
    setMeta('meta[name="twitter:title"]', text.metaTitle);
    setMeta('meta[name="twitter:description"]', text.metaDescription);
  }, [text, lang, rtl, slug]);

  if (!entry) return <NotFound />;

  // Short sector and result of every case study, from the home page cards (all 7 languages).
  const cardsRaw = t('bonus.caseStudies.items', { returnObjects: true });
  const cards = Array.isArray(cardsRaw) ? (cardsRaw as { projectId: number; sector: string; result: string }[]) : [];
  const relevantServices = servicesForCaseStudy(slug);
  const relevantSlugs = new Set(relevantServices.flatMap((service) => service.caseStudies));
  const related = [...CASE_STUDY_PAGES.filter((page) => page.slug !== slug && relevantSlugs.has(page.slug)), ...relatedCaseStudies(slug)]
    .filter((page, index, pages) => pages.findIndex((candidate) => candidate.slug === page.slug) === index).slice(0, 2);

  const raw = study ? t(`projects.items.${study.projectId}.technologies`, { returnObjects: true }) : [];
  const technologies = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <div className="relative min-h-screen bg-background text-foreground" dir={rtl ? 'rtl' : 'ltr'}>
      <Header />
      <main>
        <article key={`${slug}:${lang}`} className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-32">
          {!text ? (
            <div className="space-y-4" aria-busy="true">
              <div className="h-4 w-48 animate-pulse rounded bg-secondary/40" />
              <div className="h-12 w-3/4 animate-pulse rounded bg-secondary/40" />
              <div className="h-24 animate-pulse rounded-2xl bg-secondary/30" />
            </div>
          ) : (
            <>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li>
                    <a href={pathFor(i18n.language)} className="hover:text-[#483dfb]">
                      {t('caseStudyPage.home')}
                    </a>
                  </li>
                  <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden />
                  <li>
                    <SectionLink to="projects" className="hover:text-[#483dfb]">
                      {t('bonus.caseStudies.title')}
                    </SectionLink>
                  </li>
                  <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden />
                  <li aria-current="page" className="text-foreground/80">
                    {t(`projects.items.${entry.projectId}.title`)}
                  </li>
                </ol>
              </nav>

              <ArticleReveal>
                <span className="rounded-full bg-[#483dfb]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#483dfb] dark:text-[#9b87f5]">
                  {text.sector}
                </span>
                <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">{text.title}</h1>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80 md:text-xl">{text.lead}</p>
                <ContextualContact topic={`project:${slug}`} compact />
              </ArticleReveal>

              {/* At a glance */}
              <ArticleReveal delay={0.1} className="panel mt-10 grid gap-6 p-6 md:grid-cols-3 md:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('caseStudyPage.sector')}</p>
                  <p className="mt-1.5 font-medium">{text.sector}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('caseStudyPage.mission')}</p>
                  <p className="mt-1.5 font-medium">{text.brief.mission}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('caseStudyPage.result')}</p>
                  <p className="mt-1.5 font-medium text-[#483dfb] dark:text-[#9b87f5]">{text.brief.result}</p>
                </div>
                {relevantServices.length > 0 && (
                  <div className="md:col-span-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{conversionCopy[lang].related}</p>
                    <div className="mt-2 flex flex-wrap gap-4">
                      {relevantServices.map((service) => (
                        <Link key={service.slug} to={servicePath(i18n.language, service.slug)} className="inline-flex items-center gap-1 font-medium text-[#483dfb] underline-offset-4 hover:underline dark:text-[#9b87f5]">
                          {t(`about.services.${service.key}.title`)}
                          <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {technologies.length > 0 && (
                  <div className="md:col-span-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('projects.technologies')}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {technologies.map((tech, i) => (
                        <li key={i} className="rounded-full border border-border bg-background/60 px-3 py-1 text-sm">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </ArticleReveal>

              {/* Short reveals keep the reading pace independent of section length. */}
              <div className="mt-14 space-y-12">
                {text.technical && (
                  <section aria-labelledby="project-technical-title">
                    <ArticleReveal as="h2" id="project-technical-title" className="text-2xl font-semibold md:text-3xl">{text.technical.heading}</ArticleReveal>
                    <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                      {text.technical.groups.map((group, index) => (
                        <ArticleReveal key={group.heading} delay={(index % 2) * 0.08} className="panel p-5 md:p-6">
                          <dt className="font-semibold text-[#483dfb] dark:text-[#9b87f5]">{group.heading}</dt>
                          <dd className="mt-3 leading-relaxed text-foreground/85">{group.text}</dd>
                        </ArticleReveal>
                      ))}
                    </dl>
                  </section>
                )}
                {text.sections.map((section, s) => (
                  <section key={s}>
                    <ArticleReveal as="h2" className="text-2xl font-semibold md:text-3xl">{section.heading}</ArticleReveal>
                    {section.paragraphs?.map((p, i) => (
                      <ArticleReveal as="p" key={i} className="mt-4 text-lg leading-relaxed text-foreground/85">
                        {p}
                      </ArticleReveal>
                    ))}
                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#483dfb]" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.steps && (
                      <ol className="mt-6 space-y-8">
                        {section.steps.map((step, i) => (
                          <ArticleReveal as="li" key={i} className="relative ps-14">
                            <span
                              aria-hidden
                              className="absolute start-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#261bfb] to-[#9b87f5] text-sm font-semibold text-white"
                            >
                              {i + 1}
                            </span>
                            <h3 className="text-xl font-semibold leading-snug">{step.heading}</h3>
                            {step.paragraphs.map((p, j) => (
                              <p key={j} className="mt-3 text-lg leading-relaxed text-foreground/85">
                                {p}
                              </p>
                            ))}
                          </ArticleReveal>
                        ))}
                      </ol>
                    )}
                  </section>
                ))}
              </div>

              {/* Result */}
              <ArticleReveal className="mt-14 rounded-2xl border border-[#483dfb]/25 bg-gradient-to-br from-[#483dfb]/10 to-[#9b87f5]/5 p-6 md:p-8">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#483dfb] dark:text-[#9b87f5]">
                  <Trophy className="h-4 w-4" aria-hidden />
                  {t('bonus.caseStudies.result')}
                </div>
                <p className="text-lg font-medium leading-relaxed md:text-xl">{text.result}</p>
              </ArticleReveal>

              <ContextualContact topic={`project:${slug}`} />
              {/* Other case studies: the internal links between the case study pages */}
              <nav aria-labelledby="related-title" className="mt-16">
                <ArticleReveal as="h2" id="related-title" className="mb-5 text-xl font-semibold">
                  {t('caseStudyPage.related')}
                </ArticleReveal>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {related.map((page, index) => {
                    const card = cards.find((c) => c.projectId === page.projectId);
                    return (
                      <ArticleReveal as="li" key={page.slug} delay={(index % 2) * 0.08}>
                        <Link
                          to={caseStudyPath(i18n.language, page.slug)}
                          className="panel card-lift group flex h-full flex-col p-5 transition-[border-color,box-shadow,transform] duration-300 motion-reduce:transition-none hover:shadow-lg hover:shadow-[#483dfb]/5 hover:border-[#483dfb]/40"
                        >
                          {card && (
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#483dfb] dark:text-[#9b87f5]">
                              {card.sector}
                            </span>
                          )}
                          <span className="mt-2 font-semibold leading-snug">{t(`projects.items.${page.projectId}.title`)}</span>
                          {card && <span className="mt-2 line-clamp-3 text-sm text-muted-foreground">{card.result}</span>}
                          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#483dfb] dark:text-[#9b87f5]">
                            {t('caseStudyPage.readFull')}
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" aria-hidden />
                          </span>
                        </Link>
                      </ArticleReveal>
                    );
                  })}
                </ul>
              </nav>
            </>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
