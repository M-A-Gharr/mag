import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { EASE_OUT } from './motion';
import LetterSwapTitle from './LetterSwapTitle';

const intro: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

// Each title line rises out of its own mask.
const line: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 1, ease: EASE_OUT } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE_OUT } },
};

// The subtitle is the page's largest text (what Google times as "largest contentful paint"):
// it is visible from the first frame and only sharpens and slides into place.
const settleIn: Variants = {
  hidden: { y: 12, filter: 'blur(4px)' },
  show: { y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE_OUT } },
};

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef<HTMLElement>(null);

  // As the hero scrolls away, its content drifts up and fades out.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const titleLines = t('hero.title').split('\n');

  // Same breakpoint as Tailwind's "sm": phones get the still image instead of the video.
  const [wideScreen, setWideScreen] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches
  );
  const [videoReady, setVideoReady] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    const onChange = () => setWideScreen(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!wideScreen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timeout: number | undefined;
    const startVideoAfterLoad = () => {
      timeout = window.setTimeout(() => setVideoReady(true), 2500);
    };

    if (document.readyState === 'complete') startVideoAfterLoad();
    else window.addEventListener('load', startVideoAfterLoad, { once: true });

    return () => {
      window.removeEventListener('load', startVideoAfterLoad);
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, [wideScreen]);

  return (
    <header ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: mediaScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/profile/fallback.webp")' }}
        />

        {/* The static background keeps the first render light; the decorative video is nonessential. */}
        {wideScreen && videoReady && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/intro.webm" type="video/webm" />
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/70 to-background/90 z-10"></div>

      {/* Slowly drifting glows */}
      <motion.div
        aria-hidden
        className="absolute top-40 left-20 w-72 h-72 bg-[#483dfb]/20 rounded-full blur-3xl z-10"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-40 right-20 w-72 h-72 bg-[#9b87f5]/20 rounded-full blur-3xl z-10"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        style={{ y: contentY, opacity: contentOpacity }}
        variants={intro}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={fadeUp} className="text-xl md:text-2xl font-semibold text-foreground mb-3">
          Mohamed Amine Gharrab
        </motion.p>
        <motion.p variants={fadeUp} className="text-sm md:text-base font-medium text-foreground/70 mb-7">
          {t('hero.eyebrow')}
        </motion.p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
          <LetterSwapTitle
            lines={titleLines}
            lineVariants={line}
            unit={['ar', 'hi'].includes(i18n.language) ? 'word' : 'letter'}
          />
        </h1>

        <motion.p
          variants={settleIn}
          className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl mx-auto mb-10 whitespace-pre-line"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="contact"
            href="#contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="relative cursor-pointer inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white rounded-md bg-[#261bfb] shadow-lg shadow-[#261bfb]/25 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#3e30fb] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#261bfb]/35"
          >
            {t('hero.cta.discover')}
          </Link>

          <Link
            to="projects"
            href="#projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="relative cursor-pointer inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-md border border-[#261bfb] text-[#261bfb] bg-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white hover:bg-[#261bfb] hover:-translate-y-0.5"
          >
            {t('hero.cta.projects')}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <Link
          to="about"
          href="#about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          aria-label={t('nav.about')}
          className="flex cursor-pointer flex-col items-center text-foreground/70 hover:text-[#483dfb] transition-colors"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={28} />
          </motion.span>
        </Link>
      </motion.div>
    </header>
  );
};

export default HeroSection;
