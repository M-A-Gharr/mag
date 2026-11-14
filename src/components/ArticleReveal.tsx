import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from './motion';

type Props = {
  children: ReactNode;
  as?: 'div' | 'section' | 'li' | 'p' | 'h1' | 'h2';
  className?: string;
  id?: string;
  delay?: number;
};

/** Short, once-only reveals for reading pages; reduced motion shows content immediately. */
export default function ArticleReveal({ children, as = 'div', className, id, delay = 0 }: Props) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];
  return (
    <Component
      id={id}
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reducedMotion ? 0 : 0.65, ease: EASE_OUT, delay: reducedMotion ? 0 : delay }}
    >
      {children}
    </Component>
  );
}
