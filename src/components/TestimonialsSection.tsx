// Testimonials, as their own section right after the projects: what people say comes as
// proof just after the work it is about.
import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, SectionHeading } from './motion';

const TestimonialsCarousel = lazy(() => import('./testimonials/TestimonialsCarousel'));

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="section-container">
      <SectionHeading title={t('bonus.testimonials')} subtitle={t('testimonials.subtitle')} />
      <Reveal className="panel mx-auto max-w-3xl p-6 sm:p-10">
        <Suspense fallback={<div className="h-72 animate-pulse rounded-xl bg-secondary/20" />}>
          <TestimonialsCarousel />
        </Suspense>
      </Reveal>
    </section>
  );
};

export default TestimonialsSection;
