import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { EASE_OUT } from './motion';

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

const HeroSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);

  // As the hero scrolls away, its content drifts up and fades out.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const titleLines = t('hero.title').split('\n');

  return (
    <header ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: mediaScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        >
          <source src="/videos/intro.webm" type="video/webm" />
        </video>

        {/* Fallback image for mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{ backgroundImage: 'url("/images/profile/fallback.jpg")' }}
        />
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          {titleLines.map((text, i) => (
            <span key={i} className="block overflow-hidden pb-[0.12em]">
              <motion.span className="block" variants={line}>
                {text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 whitespace-pre-line"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="book"
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
