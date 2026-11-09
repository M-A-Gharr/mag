// M.A.G wordmark: geometric letters with the two dots as brand-gradient pills.
// Letters rise out of a mask once on arrival, the dots pop in after them; on hover the
// letters turn violet one after another and the dots hop in a small wave.
import { Fragment } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EASE_OUT } from './motion';

const LETTERS = ['M', 'A', 'G'];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const letter: Variants = {
  hidden: { y: '105%' },
  show: { y: '0%', transition: { duration: 0.7, ease: EASE_OUT } },
};

const dot = (i: number): Variants => ({
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 520, damping: 16, delay: 0.35 + i * 0.08 } },
  hover: { y: [0, -6, 0], transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.07 } },
});

type LogoProps = {
  className?: string;
  /** Play the arrival animation when scrolled into view instead of on mount (e.g. in the footer). */
  playInView?: boolean;
};

const Logo = ({ className, playInView = false }: LogoProps) => (
  <motion.span
    aria-label="M.A.G"
    role="img"
    // A wordmark always reads left to right, even inside the Arabic (RTL) layout.
    dir="ltr"
    className={cn('group inline-flex select-none items-end leading-none tracking-[-0.02em] text-foreground', className)}
    style={{ fontFamily: '"Space Grotesk", Inter, system-ui, sans-serif', fontWeight: 700 }}
    variants={container}
    initial="hidden"
    {...(playInView ? { whileInView: 'show', viewport: { once: true } } : { animate: 'show' })}
    whileHover="hover"
  >
    {LETTERS.map((l, i) => (
      <Fragment key={l}>
        <span aria-hidden className="inline-block overflow-hidden pb-[0.06em]">
          <motion.span
            className="inline-block transition-colors duration-300 group-hover:text-[#483dfb] dark:group-hover:text-[#8b7bff]"
            style={{ transitionDelay: `${i * 60}ms` }}
            variants={letter}
          >
            {l}
          </motion.span>
        </span>
        {i < LETTERS.length - 1 && (
          <motion.span
            aria-hidden
            className="mx-[0.1em] mb-[0.56em] inline-block h-[0.2em] w-[0.2em] rounded-full bg-gradient-to-br from-[#261bfb] to-[#9b87f5] shadow-[0_0_10px_rgb(72_61_251_/_0.45)]"
            variants={dot(i)}
          />
        )}
      </Fragment>
    ))}
  </motion.span>
);

export default Logo;
