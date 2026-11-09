
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, Book, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, type Variants } from 'framer-motion';
import type { PointerEvent } from 'react';
import { EASE_OUT, Reveal, SectionHeading } from './motion';

// Education cards start as a slightly fanned pile of sheets stacked on the first one,
// then spread down to their places and straighten.
const FAN_TILT = [-4, 3.5, -2.5];
const FAN: Variants = {
  stacked: (i: number) => ({ opacity: 0, y: 36 - i * 150, rotate: FAN_TILT[i] ?? 0, scale: 0.97 }),
  spread: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      opacity: { duration: 0.4, delay: i * 0.08 },
      default: { type: 'spring', stiffness: 110, damping: 17, mass: 0.9, delay: 0.15 + i * 0.12 },
    },
  }),
};

// Each badge lands like a seal being pressed: too big and tilted, squashes, settles.
const STAMP: Variants = {
  hidden: (i: number) => ({ opacity: 0, scale: 1.7, rotate: i % 2 ? 14 : -14 }),
  stamped: (i: number) => ({
    opacity: [0, 1, 1, 1],
    scale: [1.7, 0.9, 1.04, 1],
    rotate: [i % 2 ? 14 : -14, 0, 0, 0],
    transition: { duration: 0.55, times: [0, 0.55, 0.8, 1], ease: 'easeOut' },
  }),
};

// Ring that spreads from the badge as it lands.
const RIPPLE: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  stamped: { opacity: [0, 0.4, 0], scale: [0.6, 1.2, 2.2], transition: { delay: 0.28, duration: 0.8, ease: EASE_OUT } },
};

// Holographic sheen that sweeps across once, right after the stamp.
const SWEEP: Variants = {
  hidden: { backgroundPosition: '160% 0' },
  stamped: { backgroundPosition: ['160% 0', '-60% 0'], transition: { delay: 0.6, duration: 1.1, ease: 'easeInOut' } },
};

const HOLO_GRADIENT =
  'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.55) 44%, rgba(155,135,245,0.35) 50%, rgba(110,210,255,0.3) 56%, transparent 70%)';

const CertificateTile = ({ name, color, index }: { name: string; color: string; index: number }) => {
  // On hover the sheen follows the pointer, like tilting a foil card in the light.
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const pct = ((e.clientX - r.left) / r.width) * 100;
    e.currentTarget.style.setProperty('--shine', `${120 - pct * 1.4}%`);
  };

  return (
    <motion.div custom={index} variants={STAMP} className="h-full">
      <div
        onPointerMove={onMove}
        className="card-lift group relative h-full overflow-hidden rounded-lg border border-transparent bg-secondary/20 p-4 flex flex-col items-center justify-center text-center hover:bg-secondary/30"
      >
        <div className="relative mb-3">
          <motion.span
            aria-hidden
            variants={RIPPLE}
            className={`pointer-events-none absolute inset-0 rounded-full ${color}`}
          />
          <div className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 ${color}`}>
            <Award className="text-white" size={24} />
          </div>
        </div>
        <h4 className="font-medium">{name}</h4>
        <Badge variant="outline" className="mt-2">Certified</Badge>

        {/* One-off sweep after the stamp */}
        <motion.span
          aria-hidden
          variants={SWEEP}
          className="pointer-events-none absolute inset-0 mix-blend-normal dark:mix-blend-overlay"
          style={{ backgroundImage: HOLO_GRADIENT, backgroundSize: '250% 100%', backgroundRepeat: 'no-repeat' }}
        />
        {/* Pointer-following sheen on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-normal dark:mix-blend-overlay"
          style={{
            backgroundImage: HOLO_GRADIENT,
            backgroundSize: '250% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'var(--shine, 50%) 0',
            transition: 'opacity 0.5s, background-position 0.25s ease-out',
          }}
        />
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  const { t } = useTranslation();

  const certificates = [
    { name: 'Salesforce Admin', color: 'bg-blue-500' },
    { name: 'Platform Developer I', color: 'bg-cyan-500' },
    { name: 'Sales Cloud', color: 'bg-green-500' },
    { name: 'Service Cloud', color: 'bg-teal-500' },
    { name: 'React', color: 'bg-blue-600' },
    { name: 'SQL', color: 'bg-orange-500' },
    { name: 'Cisco', color: 'bg-green-600' },
    { name: 'Python', color: 'bg-yellow-500' },
    { name: 'HTML/CSS', color: 'bg-red-500' },
    { name: 'JavaScript', color: 'bg-purple-500' },
  ];

  return (
    <>
      <Helmet>
        <title>{t('certificates.meta.title')}</title>
        <meta name="description" content={t('certificates.meta.description')} />
        <meta property="og:title" content={t('certificates.meta.title')} />
        <meta property="og:description" content={t('certificates.meta.description')} />
        <meta property="og:image" content="https://maminegh.com/images/profile/magprofile.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://maminegh.com/certificates" />
      </Helmet>
      <section id="certificates" className="section-container overflow-x-clip">
        <SectionHeading title={t('certificates.title')} subtitle={t('certificates.subtitle')} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section with 3 subsections */}
          <motion.div
            className="space-y-8"
            initial="stacked"
            whileInView="spread"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Main education */}
            <motion.div custom={0} variants={FAN} className="relative z-30">
            <Card className="card-lift overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 ">
                  <GraduationCap className="text-[#483dfb] me-3" size={28} />
                  <h3 className="text-xl font-semibold">{t('certificates.education.title')}</h3>
                </div>

                <div className="mb-4 border-s-2 border-[#483dfb] ps-4 transition-colors duration-500 hover:border-[#9b87f5]">
                  <h4 className="text-lg font-medium">{t('certificates.education.degree')}</h4>
                  <p className="text-muted-foreground">{t('certificates.education.university')}, {t('certificates.education.years')}</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>{t('certificates.education.specialization')}</li>
                    <li>{t('certificates.education.projects')}</li>
                    <li>{t('certificates.education.internship')}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            </motion.div>

            {/* Academic Background */}
            <motion.div custom={1} variants={FAN} className="relative z-20">
            <Card className="card-lift overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Book className="text-[#483dfb] me-3" size={28} />
                  <h3 className="text-xl font-semibold">{t('certificates.academic.title')}</h3>
                </div>

                <div className="mb-4 border-s-2 border-[#483dfb] ps-4 transition-colors duration-500 hover:border-[#9b87f5]">
                  <h4 className="text-lg font-medium">{t('certificates.academic.bachelor')}</h4>
                  <p className="text-muted-foreground">{t('certificates.academic.bachelorYears')}</p>
                  <p className="mt-1 text-sm">{t('certificates.academic.bachelorDesc')}</p>
                </div>

                <div className="mb-4 border-s-2 border-[#483dfb] ps-4 transition-colors duration-500 hover:border-[#9b87f5]">
                  <h4 className="text-lg font-medium">{t('certificates.academic.hnd')}</h4>
                  <p className="text-muted-foreground">{t('certificates.academic.hndYears')}</p>
                  <p className="mt-1 text-sm">{t('certificates.academic.hndDesc')}</p>
                </div>
              </CardContent>
            </Card>

            </motion.div>

            {/* Continuous Learning */}
            <motion.div custom={2} variants={FAN} className="relative z-10">
            <Card className="card-lift overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-[#483dfb] me-3" size={28} />
                  <h3 className="text-xl font-semibold">{t('certificates.continuous.title')}</h3>
                </div>

                <div className="border-s-2 border-[#483dfb] ps-4 transition-colors duration-500 hover:border-[#9b87f5]">
                  <h4 className="text-lg font-medium">{t('certificates.continuous.online')}</h4>
                  <p className="text-muted-foreground">{t('certificates.continuous.onlineYears')}</p>
                  <p className="mt-1 text-sm">{t('certificates.continuous.onlineDesc')}</p>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>

          {/* Certificates */}
          <Reveal delay={0.15}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Award className="text-[#483dfb] me-3" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold">{t('certificates.sub')}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t('certificates.salesforceCerts')}</p>
                  </div>
                </div>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                  initial="hidden"
                  whileInView="stamped"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={{ hidden: {}, stamped: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } } }}
                >
                  {certificates.map((cert, index) => (
                    <CertificateTile key={cert.name} name={cert.name} color={cert.color} index={index} />
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </>

  );
};

export default CertificatesSection;