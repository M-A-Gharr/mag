import { useState, useRef, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Reveal, SectionHeading } from './motion';

const TestimonialsCarousel = lazy(() => import('./testimonials/TestimonialsCarousel'));
const CaseStudies = lazy(() => import('./CaseStudies'));
const FreelanceAvailability = lazy(() => import('./freelance/FreelanceAvailability'));

const BonusProfessionnelsSection = () => {
  const { t } = useTranslation();
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  return (
      <section
      id="bonus-professionnels"
      className="relative py-16 md:py-24 bg-gradient-to-b from-background to-background/90 overflow-hidden"
      >
        {/* Glowing background bubbles */}
        <motion.div
          aria-hidden
          className="absolute top-20 left-10 w-72 h-72 bg-[#483dfb]/20 rounded-full blur-3xl z-0"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#9b87f5]/20 rounded-full blur-3xl z-0"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Same 16px side gutter as the other sections on phones (container alone adds 32px) */}
        <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8">
          <SectionHeading title={t(`bonus.sectionTitle`)} className="md:mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Colonne 1 : Testimonials + Case studies */}
            <div className="lg:col-span-1 flex flex-col gap-8 lg:gap-12">
              {/* Testimonials */}
              <Reveal>
              <div className="card-lift bg-secondary/20 border border-secondary/20 rounded-xl p-4 sm:p-6 lg:min-h-[400px]">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{t(`bonus.testimonials`)}</h3>
                <Suspense fallback={<div className="animate-pulse h-48 bg-secondary/20 rounded-xl" />}>
                  <TestimonialsCarousel />
                </Suspense>
              </div>
              </Reveal>

              {/* Case studies of real projects */}
              <Reveal delay={0.1}>
              <div className="card-lift bg-secondary/20 border border-secondary/20 rounded-xl p-4 sm:p-6 lg:min-h-[400px]">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{t('bonus.caseStudies.title')}</h3>
                <Suspense fallback={<div className="animate-pulse h-48 bg-secondary/20 rounded-xl" />}>
                  <CaseStudies />
                </Suspense>
              </div>
              </Reveal>
            </div>

            {/* Colonne 2 : Freelance Availability */}
            <Reveal delay={0.2} className="lg:col-span-2">
              <div className="h-full lg:min-h-[820px] bg-secondary/20 border border-secondary/20 rounded-xl p-4 sm:p-6 transition-colors duration-500 hover:border-[#483dfb]/40">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{t(`bonus.availability`)}</h3>
                <Suspense fallback={<div className="animate-pulse h-48 bg-secondary/20 rounded-xl" />}>
                  <FreelanceAvailability />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
  );
};

export default BonusProfessionnelsSection;
