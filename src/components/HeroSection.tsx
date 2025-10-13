
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
      <header id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-[#483dfb]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#483dfb]-dark/20 rounded-full blur-3xl"></div>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 hidden sm:block">
          <source src="/videos/intro.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback image for mobile or unsupported browsers */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 sm:hidden"
          style={{ backgroundImage: 'url("/images/profile/fallback.jpg")' }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/70 to-background/90 z-10"></div>

        {/* Animated bubbles */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-[#483dfb]/20 rounded-full blur-3xl z-10"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#483dfb]-dark/20 rounded-full blur-3xl z-10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground whitespace-pre-line">{t('hero.title')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-in whitespace-pre-line" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to="book"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative cursor-pointer inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#261bfb] hover:bg-[#3e30fb] dark:hover:bg-[#3e30fb] rounded-md group"
              aria-label="Scroll to About Section"
            >
              <span className="relative text-white">{t('hero.cta.discover')}</span>
            </Link>

            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-transparent border border-[#261bfb] text-[#261bfb] hover:text-white hover:bg-[#261bfb] dark:hover:bg-[#261bfb] rounded-md group"
            >
              <span className="relative">{t('hero.cta.projects')}</span>
            </Link>
          </div>


        </div>
        <div className="absolute justify-center bottom-10 left-3/2 transform -translate-x-1/2 z-30 animate-bounce">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer justify-center text-foreground/70 hover:text-[#483dfb] transition-colors"
          >
            <ArrowDown size={28} />
          </Link>
        </div>
      </header>
  );
};

export default HeroSection;