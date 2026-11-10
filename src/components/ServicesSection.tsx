// What I do for clients, right after the hero: the three services, each with the work it
// covers, then the usual timelines and a way to book a call. This replaces the two service
// lists the site used to have (in About and in the old "References" availability card).
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { serviceForKey } from '@/content/services';
import { servicePath } from '@/i18n/paths';
import { ArrowRight, ArrowUpRight, Bot, Check, Clock, Code, ShoppingCart } from 'lucide-react';
import { Reveal, SectionHeading, Stagger, StaggerItem } from './motion';

// Which items of `bonus.freelance.servicesList` belong to each service.
const SERVICES = [
  { key: 'webapps', icon: Code, items: [0, 1, 8] },
  { key: 'ai', icon: Bot, items: [2, 3] },
  { key: 'ecommerce', icon: ShoppingCart, items: [4, 5, 6, 7] },
] as const;

const TIMELINES = [
  ['consultation', 'consultdesc'],
  ['dev', 'devdesc'],
  ['techreview', 'techreviewtime'],
] as const;

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const raw = t('bonus.freelance.servicesList', { returnObjects: true });
  const list = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <section id="services" className="section-container">
      <SectionHeading title={t('services.title')} subtitle={t('services.subtitle')} />

      <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.12}>
        {SERVICES.map(({ key, icon: Icon, items }) => (
          <StaggerItem key={key} className="h-full">
            <article className="panel card-lift group flex h-full flex-col p-6">
              <span className="mb-5 w-fit rounded-xl bg-[#483dfb]/10 p-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                <Icon className="h-7 w-7 text-[#483dfb] dark:text-[#9b87f5]" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold">{t(`about.services.${key}.title`)}</h3>
              <p className="mt-2 text-muted-foreground">{t(`about.services.${key}.desc`)}</p>
              <ul className="mt-5 space-y-2 border-t border-border/60 pt-5 text-sm">
                {items.map((i) =>
                  list[i] ? (
                    <li key={i} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#483dfb] dark:text-[#9b87f5]" aria-hidden />
                      <span>{list[i]}</span>
                    </li>
                  ) : null
                )}
              </ul>
              {serviceForKey(key) && (
                <RouterLink
                  to={servicePath(i18n.language, serviceForKey(key)!.slug)}
                  className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-[#483dfb] underline-offset-4 hover:underline dark:text-[#9b87f5]"
                >
                  {t('servicePage.discover')}
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
                </RouterLink>
              )}
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Usual timelines and the way to book */}
      <Reveal delay={0.1} className="panel mt-6 flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <Clock className="h-4 w-4 text-[#483dfb] dark:text-[#9b87f5]" aria-hidden />
            {t('about.book.availability')}
          </span>
          {TIMELINES.map(([label, value]) => (
            <span key={label} className="text-sm text-muted-foreground">
              {t(`about.book.${label}`)}
              <span className="ms-2 rounded-full bg-[#483dfb]/10 px-2.5 py-0.5 text-xs font-medium text-foreground">
                {t(`about.book.${value}`)}
              </span>
            </span>
          ))}
        </div>
        <Link
          to="book"
          href="#book"
          smooth
          offset={-70}
          duration={800}
          className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#261bfb] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3e30fb]"
        >
          {t('services.cta')}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden />
        </Link>
      </Reveal>
    </section>
  );
};

export default ServicesSection;
