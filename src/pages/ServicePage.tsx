// An area of expertise on its own page: the problems I solve, what I build, how I work, the
// case studies that prove it, a call to action and the other areas. Its HTML, meta tags
// and structured data are also written at build time (build/pagesPlugin.ts).
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import '@/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionLink from '@/components/SectionLink';
import ArticleReveal from '@/components/ArticleReveal';
import { CASE_STUDY_PAGES, caseStudyLang } from '@/content/caseStudies';
import { SERVICE_PAGES, type Service } from '@/content/services';
import { caseStudyPath, pathFor, servicePath, SITE_URL } from '@/i18n/paths';
import NotFound from './NotFound';
import ContextualContact from '@/components/ContextualContact';

const OG_LOCALES: Record<string, string> = { en: 'en_US', fr: 'fr_FR', ar: 'ar_MA' };

const setMeta = (selector: string, value: string) =>
  document.head.querySelector(selector)?.setAttribute(selector.startsWith('link') ? 'href' : 'content', value);

const ServicePage = () => {
  const { slug = '' } = useParams();
  const { t, i18n } = useTranslation();
  const entry = SERVICE_PAGES.find((p) => p.slug === slug);
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    let cancelled = false;
    setService(null);
    entry?.load().then((m) => { if (!cancelled) setService(m.default); });
    return () => { cancelled = true; };
  }, [entry]);

  const lang = caseStudyLang(i18n.language);
  const text = service?.text[lang];
  const rtl = lang === 'ar';

  // Title, description, canonical and share tags of this page, in the current language.
  useEffect(() => {
    if (!text) return;
    const url = `${SITE_URL}${servicePath(lang, slug).slice(1)}`;
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.title = text.metaTitle;
    setMeta('meta[name="description"]', text.metaDescription);
    setMeta('link[rel="canonical"]', url);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:title"]', text.metaTitle);
    setMeta('meta[property="og:description"]', text.metaDescription);
    setMeta('meta[property="og:locale"]', OG_LOCALES[lang]);
    setMeta('meta[name="twitter:title"]', text.metaTitle);
    setMeta('meta[name="twitter:description"]', text.metaDescription);
  }, [text, lang, rtl, slug]);

  if (!entry) return <NotFound />;

  // Short sector and result of each case study, from the home page cards (all 7 languages).
  const cardsRaw = t('bonus.caseStudies.items', { returnObjects: true });
  const cards = Array.isArray(cardsRaw) ? (cardsRaw as { projectId: number; sector: string; result: string }[]) : [];
  const examples = entry.caseStudies.map((s) => CASE_STUDY_PAGES.find((p) => p.slug === s)).filter((p) => p !== undefined);
  const others = SERVICE_PAGES.filter((s) => s.slug !== slug);

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
                    <SectionLink to="services" className="hover:text-[#483dfb]">
                      {t('services.title')}
                    </SectionLink>
                  </li>
                  <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden />
                  <li aria-current="page" className="text-foreground/80">
                    {t(`about.services.${entry.key}.title`)}
                  </li>
                </ol>
              </nav>

              <ArticleReveal>
                <span className="rounded-full bg-[#483dfb]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#483dfb] dark:text-[#9b87f5]">
                  {t('services.title')}
                </span>
                <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">{text.title}</h1>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80 md:text-xl">{text.lead}</p>
                <ContextualContact topic={`service:${slug}`} serviceKey={entry.key} compact />
              </ArticleReveal>

              {/* At a glance */}
              <ArticleReveal delay={0.1} className="panel mt-10 grid gap-6 p-6 sm:grid-cols-2 md:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('servicePage.tools')}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {(service?.tools ?? []).map((tool) => (
                      <li key={tool} className="rounded-full border border-border bg-background/60 px-3 py-1 text-sm">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('servicePage.where')}</p>
                  <p className="mt-1.5 font-medium">{t('servicePage.whereValue')}</p>
                </div>
              </ArticleReveal>

              {/* Each heading and card reveals independently as the reader scrolls. */}
              <div className="mt-14 space-y-12">
                <section>
                  <ArticleReveal as="h2" className="text-2xl font-semibold md:text-3xl">{text.audience.heading}</ArticleReveal>
                  <ul className="mt-4 space-y-2">
                    {text.audience.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#483dfb]" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <ArticleReveal as="h2" className="text-2xl font-semibold md:text-3xl">{text.offer.heading}</ArticleReveal>
                  {text.offer.levels && (
                    <div className="mt-6 space-y-5">
                      {text.offer.levels.map((level, index) => (
                        <ArticleReveal key={level.heading} className="panel p-6 md:p-8">
                          <div className="flex items-center gap-3">
                            <span aria-hidden className="text-sm font-semibold tabular-nums text-[#483dfb] dark:text-[#9b87f5]">0{index + 1}</span>
                            <h3 className="text-xl font-semibold">{level.heading}</h3>
                          </div>
                          <p className="mt-3 leading-relaxed text-foreground/85">{level.description}</p>
                          <ul className="mt-4 space-y-2">
                            {level.items.map((item) => (
                              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-[#483dfb] dark:text-[#9b87f5]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </ArticleReveal>
                      ))}
                    </div>
                  )}
                  {text.offer.support && (
                    <div className="mt-6 border-s-2 border-[#483dfb]/50 ps-5">
                      <h3 className="text-xl font-semibold">{text.offer.support.heading}</h3>
                      <p className="mt-2 leading-relaxed text-foreground/85">{text.offer.support.text}</p>
                    </div>
                  )}
                  <ul className="mt-4 space-y-2">
                    {text.offer.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
                        <Check className="mt-1.5 h-5 w-5 shrink-0 text-[#483dfb] dark:text-[#9b87f5]" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                {text.deliverables && (
                  <section aria-labelledby="deliverables-title">
                    <ArticleReveal as="h2" id="deliverables-title" className="text-2xl font-semibold md:text-3xl">{text.deliverables.heading}</ArticleReveal>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{text.deliverables.intro}</p>
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                      {text.deliverables.items.map((item, index) => (
                        <ArticleReveal as="li" key={item} delay={(index % 2) * 0.08} className="panel p-5">
                          <Check aria-hidden className="mb-3 h-5 w-5 text-[#483dfb] dark:text-[#9b87f5]" />
                          <p className="leading-relaxed">{item}</p>
                        </ArticleReveal>
                      ))}
                    </ul>
                    <ArticleReveal className="mt-6 border-s-2 border-[#483dfb]/50 ps-5">
                      <h3 className="text-xl font-semibold">{text.deliverables.nextStep.heading}</h3>
                      <p className="mt-2 leading-relaxed text-foreground/85">{text.deliverables.nextStep.text}</p>
                      <ContextualContact topic={`service:${slug}`} serviceKey={entry.key} compact />
                    </ArticleReveal>
                  </section>
                )}

                {text.technicalCapabilities && (
                  <section aria-labelledby="technical-capabilities-title">
                    <ArticleReveal as="h2" id="technical-capabilities-title" className="text-2xl font-semibold md:text-3xl">{text.technicalCapabilities.heading}</ArticleReveal>
                    <p className="mt-4 text-lg leading-relaxed text-foreground/80">{text.technicalCapabilities.intro}</p>
                    <div className="mt-6 space-y-4">
                      {text.technicalCapabilities.groups.map((group) => (
                        <ArticleReveal key={group.heading} className="panel p-6 md:p-8">
                          <h3 className="text-xl font-semibold">{group.heading}</h3>
                          <ul className="mt-4 space-y-3">
                            {group.items.map((item) => (
                              <li key={item} className="flex gap-3 leading-relaxed text-foreground/85">
                                <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-[#483dfb] dark:text-[#9b87f5]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </ArticleReveal>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <ArticleReveal as="h2" className="text-2xl font-semibold md:text-3xl">{text.process.heading}</ArticleReveal>
                  <ol className="mt-6 space-y-6">
                    {text.process.steps.map((step, i) => (
                      <ArticleReveal as="li" key={i} className="relative ps-14">
                        <span
                          aria-hidden
                          className="absolute start-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#261bfb] to-[#9b87f5] text-sm font-semibold text-white"
                        >
                          {i + 1}
                        </span>
                        <h3 className="text-xl font-semibold leading-snug">{step.heading}</h3>
                        <p className="mt-2 text-lg leading-relaxed text-foreground/85">{step.text}</p>
                      </ArticleReveal>
                    ))}
                  </ol>
                </section>

                {/* Case studies that prove this service */}
                {examples.length > 0 && (
                  <section aria-labelledby="examples-title">
                    <ArticleReveal as="h2" id="examples-title" className="text-2xl font-semibold md:text-3xl">
                      {t('servicePage.examples')}
                    </ArticleReveal>
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                      {examples.map((page, index) => {
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
                  </section>
                )}

              </div>

              <ContextualContact topic={`service:${slug}`} serviceKey={entry.key} />
              {/* The other services */}
              <nav aria-labelledby="other-services-title" className="mt-16">
                <ArticleReveal as="h2" id="other-services-title" className="mb-5 text-xl font-semibold">
                  {t('servicePage.otherServices')}
                </ArticleReveal>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {others.map((s) => (
                    <ArticleReveal as="li" key={s.slug}>
                      <Link
                        to={servicePath(i18n.language, s.slug)}
                        className="panel card-lift group flex h-full flex-col p-5 transition-[border-color,box-shadow,transform] duration-300 motion-reduce:transition-none hover:shadow-lg hover:shadow-[#483dfb]/5 hover:border-[#483dfb]/40"
                      >
                        <span className="font-semibold">{t(`about.services.${s.key}.title`)}</span>
                        <span className="mt-2 line-clamp-3 text-sm text-muted-foreground">{t(`about.services.${s.key}.desc`)}</span>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#483dfb] dark:text-[#9b87f5]">
                          {t('servicePage.discover')}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" aria-hidden />
                        </span>
                      </Link>
                    </ArticleReveal>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </article>
      </main>
      {/* Footer only once the content is in: shown under the short skeleton, it would jump down (layout shift) */}
      {text && <Footer />}
    </div>
  );
};

export default ServicePage;
