// Certifications earned on Trailhead (Salesforce) and freeCodeCamp, shown at the end of the
// Skills section. Each badge lands like a pressed seal, then a holographic sheen sweeps across.
import type { PointerEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import { Award } from 'lucide-react';
import { BlockTitle, EASE_OUT, Reveal } from './motion';

const CERTIFICATIONS = [
  'Salesforce Admin', 'Platform Developer I', 'Sales Cloud', 'Service Cloud',
  'React', 'JavaScript', 'HTML/CSS', 'Python', 'SQL', 'Cisco',
];

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

const CertificateTile = ({ name, index }: { name: string; index: number }) => {
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
        className="card-lift group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-background/40 p-4 text-center"
      >
        <div className="relative mb-3">
          <motion.span
            aria-hidden
            variants={RIPPLE}
            className="pointer-events-none absolute inset-0 rounded-full bg-[#483dfb]"
          />
          <div className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 bg-gradient-to-br from-[#261bfb] to-[#9b87f5]`}>
            <Award className="text-white" size={24} />
          </div>
        </div>
        <h4 className="text-sm font-medium">{name}</h4>

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

// overflow-hidden: before landing, each badge is scaled up to 170% and would widen the page.
const Certifications = () => {
  const { t } = useTranslation();
  return (
    <Reveal className="panel mt-6 overflow-hidden p-6 md:p-8">
      <BlockTitle icon={Award} title={t('skills.certifications.title')} subtitle={t('skills.certifications.subtitle')} />
      <motion.div
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        initial="hidden"
        whileInView="stamped"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, stamped: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
      >
        {CERTIFICATIONS.map((name, index) => (
          <CertificateTile key={name} name={name} index={index} />
        ))}
      </motion.div>
    </Reveal>
  );
};

export default Certifications;
