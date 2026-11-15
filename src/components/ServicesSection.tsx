// Expertise, right after the hero: the three areas I work in, each with what it covers and a
// link to its own page (where the case studies that prove it are listed).
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { serviceForKey } from '@/content/services';
import { servicePath, caseStudyPath } from '@/i18n/paths';
import { caseStudyLang } from '@/content/caseStudies';
import { conversionCopy } from '@/content/conversion';
import { ArrowUpRight, Bot, Check, Code, ShoppingCart } from 'lucide-react';
import { SectionHeading, Stagger, StaggerItem } from './motion';

// Which items of `bonus.freelance.servicesList` belong to each service.
const SERVICES = [
  { key: 'webapps', icon: Code, items: [0, 1, 8] },
  { key: 'ai', icon: Bot, items: [2, 3] },
  { key: 'ecommerce', icon: ShoppingCart, items: [4, 5, 6, 7] },
] as const;

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const raw = t('bonus.freelance.servicesList', { returnObjects: true });
  const list = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <section id="services" className="section-container">
      <SectionHeading title={t('services.needsTitle')} subtitle={t('services.needsSubtitle')} />

      <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.12}>
        {SERVICES.map(({ key, icon: Icon, items }) => (
          <StaggerItem key={key} className="h-full">
            <article className="panel card-lift group flex h-full flex-col p-6">
              <span className="mb-5 w-fit rounded-xl bg-[#483dfb]/10 p-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                <Icon className="h-7 w-7 text-[#483dfb] dark:text-[#9b87f5]" aria-hidden />
              </span>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{t(`about.services.${key}.title`)}</p>
              <h3 className="text-xl font-semibold">{t(`services.needs.${key}.title`)}</h3>
              <p className="mt-2 text-muted-foreground">{t(`services.needs.${key}.description`)}</p>
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
                <div className="mt-auto flex flex-col gap-3 pt-6">
                <RouterLink
                  to={servicePath(i18n.language, serviceForKey(key)!.slug)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#483dfb] underline-offset-4 hover:underline dark:text-[#9b87f5]"
                >
                  {t('services.needsCta')}
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
                </RouterLink>
                <RouterLink to={caseStudyPath(i18n.language, serviceForKey(key)!.caseStudies[0])} className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline">
                  {conversionCopy[caseStudyLang(i18n.language)].example}
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
                </RouterLink>
                </div>
              )}
            </article>
          </StaggerItem>
        ))}
      </Stagger>

    </section>
  );
};

export default ServicesSection;
