import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n/config';
import Header from '@/components/Header';
import Hero from '@/pages/Hero';
import Seo from '@/components/Seo';

// The sections under the hero load in a second chunk, so the first paint only waits for the
// header and the hero.
const BelowFold = lazy(() => import('@/pages/BelowFold'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  const { i18n } = useTranslation();

  return (
    <div className="relative min-h-screen bg-background text-foreground" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Seo />

      <Header />
      <main>
        <Hero />
        {/* Reserve space while the rest arrives, so nothing jumps */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <BelowFold />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
