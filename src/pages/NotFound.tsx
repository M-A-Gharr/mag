// 404 page, in the site's look and in the visitor's language. On GitHub Pages it is reached
// through dist/404.html (generated in vite.config.ts), which loads the app for any unknown
// address; the app then renders this page for routes it does not know.
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';
import '@/i18n/config';
import { pathFor } from '@/i18n/paths';
import Logo from '@/components/Logo';
import GlitchText from '@/components/GlitchText';
import { EASE_OUT } from '@/components/motion';

const NotFound = () => {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === 'ar';
  const home = pathFor(i18n.language);

  useEffect(() => {
    // The theme switcher lives in the header, which this page does not render: apply the
    // saved theme (or the system one) here too.
    let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    try {
      const stored = localStorage.getItem('theme');
      if (stored) dark = stored === 'dark';
    } catch {
      /* storage blocked: keep the system theme */
    }
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.title = `404 · ${t('notFound.title')} · M.A.G`;
  }, [i18n.language, rtl, t]);

  return (
    <main
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative flex min-h-screen flex-col overflow-hidden bg-background px-4 text-foreground"
    >
      {/* Brand glows */}
      <div aria-hidden className="pointer-events-none absolute -top-32 start-1/4 h-96 w-96 rounded-full bg-[#483dfb]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 end-1/4 h-96 w-96 rounded-full bg-[#9b87f5]/20 blur-3xl" />

      <header className="relative mx-auto flex w-full max-w-5xl items-center py-6">
        <a href={home} aria-label="M.A.G">
          <Logo className="text-2xl" />
        </a>
      </header>

      <section className="relative flex flex-1 flex-col items-center justify-center pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="bg-gradient-to-br from-[#261bfb] to-[#9b87f5] bg-clip-text text-[7rem] font-bold leading-none tracking-tight text-transparent sm:text-[10rem]"
          style={{ fontFamily: '"Space Grotesk", Inter, system-ui, sans-serif' }}
          dir="ltr"
        >
          <GlitchText>404</GlitchText>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.15 }}
          className="mt-4 text-2xl font-semibold sm:text-3xl"
        >
          {t('notFound.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.25 }}
          className="mt-3 max-w-md text-muted-foreground"
        >
          {t('notFound.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.35 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href={home}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#261bfb] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgb(38_27_251_/_0.7)] transition-colors hover:bg-[#3e30fb]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 rtl:rotate-180 rtl:group-hover:translate-x-0.5" />
            {t('notFound.back')}
          </a>
          <a
            href="mailto:contact.maminegh@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-[#483dfb]/50 hover:text-[#483dfb]"
          >
            <Mail className="h-4 w-4" />
            {t('notFound.contact')}
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default NotFound;
