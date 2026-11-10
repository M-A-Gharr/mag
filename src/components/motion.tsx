// Shared scroll-reveal animations. One easing curve and one rhythm for the whole site
// keeps motion consistent; MotionConfig in App.tsx turns it all off for reduced-motion users.
import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const VIEWPORT = { once: true, amount: 0.2 } as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel in px. */
  y?: number;
  /** Soft focus-in; reserve for headings and hero-sized elements. */
  blur?: boolean;
  as?: 'div' | 'section' | 'li' | 'p' | 'span' | 'h2' | 'h3';
};

/** Fades and lifts its content in once it scrolls into view. */
export const Reveal = ({ children, className, delay = 0, y = 24, blur = false, as = 'div' }: RevealProps) => {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, ...(blur && { filter: 'blur(8px)' }) }}
      whileInView={{ opacity: 1, y: 0, ...(blur && { filter: 'blur(0px)' }) }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  );
};

const staggerContainer = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: 'div' | 'ul' | 'ol';
};

/** Reveals its StaggerItem children one after another. */
export const Stagger = ({ children, className, stagger = 0.08, delay = 0, as = 'div' }: StaggerProps) => {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </Component>
  );
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'span';
};

export const StaggerItem = ({ children, className, as = 'div' }: StaggerItemProps) => {
  const Component = motion[as];
  return (
    <Component className={className} variants={staggerItem}>
      {children}
    </Component>
  );
};

type SectionHeadingProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
};

/** Section title with a focus-in and an accent rule that draws from the center. */
export const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => (
  <div className={cn('mb-10 flex flex-col items-center text-center md:mb-14', className)}>
    <Reveal as="h2" blur className="section-title !mb-4">
      {title}
    </Reveal>
    <motion.span
      aria-hidden
      className="block h-[3px] w-16 origin-center rounded-full bg-gradient-to-r from-[#483dfb] to-[#9b87f5]"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.25 }}
    />
    {subtitle && (
      <Reveal as="p" delay={0.15} className="section-subtitle mx-auto mt-6 max-w-3xl !mb-0">
        {subtitle}
      </Reveal>
    )}
  </div>
);

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Unmasks an image from bottom to top while it settles from a slight zoom. */
export const ImageReveal = ({ children, className, delay = 0 }: ImageRevealProps) => (
  <motion.div
    className={cn('overflow-hidden', className)}
    initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
    whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
    viewport={VIEWPORT}
    transition={{ duration: 1.1, ease: EASE_OUT, delay }}
  >
    <motion.div
      className="h-full w-full"
      initial={{ scale: 1.15 }}
      whileInView={{ scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.4, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

type BlockTitleProps = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  className?: string;
};

/** Title of a block inside a section: the same icon chip, size and spacing everywhere. */
export const BlockTitle = ({ icon: Icon, title, subtitle, className }: BlockTitleProps) => (
  <div className={cn('mb-6 flex items-start gap-3', className)}>
    <span className="shrink-0 rounded-lg bg-[#483dfb]/10 p-2">
      <Icon className="h-5 w-5 text-[#483dfb] dark:text-[#9b87f5]" aria-hidden />
    </span>
    <div className="min-w-0">
      <h3 className="text-xl font-semibold leading-tight">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  </div>
);
