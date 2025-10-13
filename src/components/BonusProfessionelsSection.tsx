import { useState, useRef, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const TestimonialsCarousel = lazy(() => import('./testimonials/TestimonialsCarousel'));
const BlogPostsCarousel = lazy(() => import('./blog/BlogPostsCarousel'));
const FreelanceAvailability = lazy(() => import('./freelance/FreelanceAvailability'));

const BonusProfessionnelsSection = () => {
  const { t } = useTranslation();
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  return (
      <section
      id="bonus-professionnels"
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-background to-background/90 overflow-hidden"
      >
        {/* Glowing background bubbles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#483dfb]/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#483dfb]-dark/20 rounded-full blur-3xl z-0" />

        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
            {t(`bonus.sectionTitle`)}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne 1 : Testimonials + Blog */}
            <div className="lg:col-span-1 flex flex-col gap-12">
              {/* Testimonials */}
              <div className="bg-secondary/20 border border-secondary/20 rounded-xl p-6 min-h-[400px] transition-all duration-300 hover:border-[#483dfb] hover:shadow-xl hover:shadow-[#483dfb]/10 animate-fade-in">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{t(`bonus.testimonials`)}</h3>
                <Suspense fallback={<div className="animate-pulse h-48 bg-secondary/20 rounded-xl" />}>
                  <TestimonialsCarousel />
                </Suspense>
              </div>

              {/* Blog */}
              <div className="bg-secondary/20 border border-secondary/20 rounded-xl p-6 min-h-[400px] transition-all duration-300 hover:border-[#483dfb] hover:shadow-xl hover:shadow-[#483dfb]/10 animate-fade-in">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{t(`bonus.blog`)}</h3>
                <Suspense fallback={<div className="animate-pulse h-48 bg-secondary/20 rounded-xl" />}>
                  <BlogPostsCarousel />
                </Suspense>
              </div>
            </div>

            {/* Colonne 2 : Freelance Availability */}
            <div className="lg:col-span-2">
              <div className="h-full min-h-[820px] bg-secondary/20 border border-secondary/20 rounded-xl p-6 transition-all duration-300 hover:border-[#483dfb] hover:shadow-xl hover:shadow-[#483dfb]/10 animate-fade-in">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{t(`bonus.availability`)}</h3>
                <Suspense fallback={<div className="animate-pulse h-48 bg-secondary/20 rounded-xl" />}>
                  <FreelanceAvailability />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default BonusProfessionnelsSection;
