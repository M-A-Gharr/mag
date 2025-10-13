import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n/config';
import Header from '@/components/Header';
// import HeroSection from '@/components/HeroSection';
// import AboutSection from '@/components/AboutSection';
// import SkillsSection from '@/components/SkillsSection';
// import ProjectsSection from '@/components/ProjectsSection';
// import CertificatesSection from '@/components/CertificatesSection';
// import ContactSection from '@/components/ContactSection';
import Hero from '@/pages/Hero';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Project from '@/pages/Projects';
import Certificat from '@/pages/Certificates';
import Contact from '@/pages/Contact';
import Bonus from '@/pages/Bonus';
// import BonusProfessionnelsSection from '@/components/BonusProfessionelsSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';


const Index = () => {
  const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   // Update document title and meta description when language changes
  //   document.title = t('hero.title') + ' | M.A.G';
  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute('content', t('hero.subtitle'));
  //   }
  //   // Set the document dir attribute based on language
  //   document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  // }, [t, i18n.language]);

  return (
    <div className="relative min-h-screen bg-background text-foreground" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{t('hero.title')} | M.A.G</title>
        <meta name="description" content={t('hero.subtitle')} />
        <meta property="og:title" content={t('hero.title')} />
        <meta property="og:description" content={t('hero.subtitle')} />
        <meta property="og:image" content="/images/profile/magprofile.png" />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
      </Helmet>

      <Header />
      <main>
        {/* <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <BonusProfessionnelsSection/>
        <ContactSection /> */}
        <Hero/>
        <About/>
        <Project/>
        <Skills/>
        <Certificat/>
        <Bonus/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;