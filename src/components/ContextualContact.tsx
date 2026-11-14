import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { caseStudyLang } from '@/content/caseStudies';
import { conversionCopy } from '@/content/conversion';
import { pathFor } from '@/i18n/paths';
import type { Service } from '@/content/services';
import SectionLink from './SectionLink';
import ArticleReveal from './ArticleReveal';

type Props = { topic: string; serviceKey?: Service['key']; compact?: boolean };

export default function ContextualContact({ topic, serviceKey, compact = false }: Props) {
  const { i18n } = useTranslation();
  const copy = conversionCopy[caseStudyLang(i18n.language)];
  const label = serviceKey ? copy.services[serviceKey] : copy.project;
  const href = `${pathFor(i18n.language)}?topic=${encodeURIComponent(topic)}#contact`;
  const action = (
    <Link to={href} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#261bfb] px-5 py-3 text-sm font-medium text-white transition-[background-color,box-shadow,transform] duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#261bfb]/20 motion-reduce:transition-none hover:bg-[#3e30fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2">
      {label}<ArrowRight aria-hidden className="h-4 w-4 shrink-0 rtl:rotate-180" />
    </Link>
  );
  if (compact) return <div className="mt-6">{action}</div>;
  return (
    <ArticleReveal as="section" className="mt-10 rounded-2xl border border-[#483dfb]/25 bg-gradient-to-br from-[#483dfb]/10 to-[#9b87f5]/5 p-6 md:p-8">
      <h2 className="text-xl font-semibold">{copy.title}</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">{copy.description}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {action}
        <SectionLink to="book" className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:border-[#483dfb]/60">{copy.book}</SectionLink>
      </div>
    </ArticleReveal>
  );
}
