// Full-screen menu for phones and tablets (below the lg breakpoint).
// Opens as a circle growing from the menu button, then the sections rise in one by one,
// numbered, with the current section highlighted. The bottom holds a call to action,
// language and theme settings, and contact links. Locks page scroll, closes on Escape.
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { isHomePath, pathFor } from '@/i18n/paths';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import { EASE_OUT } from './motion';
import { cn } from '@/lib/utils';

export type MenuLink = { name: string; to: string };

const LANGUAGES = ['fr', 'en', 'ar', 'es', 'it', 'ru', 'hi'];

const SOCIALS = [
  { href: 'mailto:contact.maminegh@gmail.com', label: 'Email', icon: Mail },
  { href: 'https://linkedin.com/in/m-amine-gharrab', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/M-A-Gharr', label: 'GitHub', icon: Github },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
};

const item: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.7, ease: EASE_OUT } },
  exit: { y: '-110%', transition: { duration: 0.35, ease: [0.7, 0, 0.84, 0] } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT, delay: 0.55 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

/** Menu button whose two bars morph into a cross. */
export const MenuButton = ({ open, onClick, controls }: { open: boolean; onClick: () => void; controls: string }) => {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? t('nav.close') : t('nav.menu')}
      className="group relative z-[60] flex h-11 items-center gap-3 rounded-full border border-border bg-background/70 ps-4 pe-3 text-sm font-medium backdrop-blur-md transition-colors duration-300 hover:border-[#483dfb]/50"
    >
      <span className="relative block h-5 overflow-hidden">
        <motion.span className="block" animate={{ y: open ? '-50%' : '0%' }} transition={{ duration: 0.4, ease: EASE_OUT }}>
          <span className="block h-5 leading-5">{t('nav.menu')}</span>
          <span className="block h-5 leading-5">{t('nav.close')}</span>
        </motion.span>
      </span>
      <span aria-hidden className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#483dfb] text-white">
        <motion.span
          className="absolute h-[2px] w-3.5 rounded-full bg-current"
          animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        />
        <motion.span
          className="absolute h-[2px] w-3.5 rounded-full bg-current"
          animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        />
      </span>
    </button>
  );
};

type MobileMenuProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  links: MenuLink[];
};

const MobileMenu = ({ id, open, onClose, links }: MobileMenuProps) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const rtl = i18n.language === 'ar';
  const firstLinkRef = useRef<HTMLButtonElement>(null);
  const [current, setCurrent] = useState<string | null>(null);

  // Lock the page behind, close on Escape, move focus into the menu.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const focus = setTimeout(() => firstLinkRef.current?.focus({ preventScroll: true }), 350);
    return () => {
      root.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
      clearTimeout(focus);
    };
  }, [open, onClose]);

  // Which section is on screen, to highlight it in the menu.
  useEffect(() => {
    if (!open) return;
    const middle = window.innerHeight / 2;
    let found: string | null = null;
    for (const link of links) {
      const el = document.getElementById(link.to);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.top <= middle && r.bottom >= middle) found = link.to;
    }
    setCurrent(found);
  }, [open, links]);

  const go = (to: string) => {
    // Lift the scroll lock right away: the effect cleanup only runs after the next paint,
    // and a locked page cannot scroll to the section.
    document.documentElement.style.overflow = '';
    onClose();
    // From another page (a case study), go to the home page at that section.
    if (!isHomePath(window.location.pathname)) {
      navigate(`${pathFor(i18n.language)}#${to}`);
      return;
    }
    requestAnimationFrame(() => scroller.scrollTo(to, { smooth: 'easeInOutQuart', duration: 700, offset: -70 }));
  };

  // The circle grows from the menu button corner (top right, or top left in Arabic).
  const origin = rtl ? '2.5rem 2.25rem' : 'calc(100% - 2.5rem) 2.25rem';

  // Rendered in <body>: the header is transformed, which would trap a fixed child inside it.
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.menu')}
          dir={rtl ? 'rtl' : 'ltr'}
          className="fixed inset-0 z-[55] flex flex-col overflow-y-auto bg-background lg:hidden"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})`, transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
          exit={{ clipPath: `circle(0% at ${origin})`, transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1], delay: 0.15 } }}
        >
          {/* Soft brand glows */}
          <div aria-hidden className="pointer-events-none absolute -top-24 end-[-6rem] h-72 w-72 rounded-full bg-[#483dfb]/20 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute bottom-0 start-[-5rem] h-64 w-64 rounded-full bg-[#9b87f5]/20 blur-3xl" />

          <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 pb-8 pt-28 sm:px-10 md:grid md:grid-cols-[1.4fr_1fr] md:gap-12 md:pt-32">
            {/* Sections */}
            <motion.ul className="flex flex-col gap-1 sm:gap-2" variants={list} initial="hidden" animate="show" exit="exit">
              {links.map((link, i) => {
                const active = current === link.to;
                return (
                  <li key={link.to} className="overflow-hidden">
                    <motion.div variants={item}>
                      <button
                        ref={i === 0 ? firstLinkRef : undefined}
                        type="button"
                        onClick={() => go(link.to)}
                        aria-current={active ? 'location' : undefined}
                        className={cn(
                          'group flex w-full items-baseline gap-4 py-1.5 text-start text-4xl font-semibold tracking-tight transition-colors duration-300 sm:text-5xl',
                          'focus-visible:outline-none focus-visible:text-[#483dfb]',
                          active ? 'text-[#483dfb]' : 'text-foreground hover:text-[#483dfb]'
                        )}
                        style={{ fontFamily: '"Space Grotesk", Inter, system-ui, sans-serif' }}
                      >
                        <span className="w-8 shrink-0 text-xs font-medium tabular-nums text-muted-foreground">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
                          {link.name}
                        </span>
                        <ArrowUpRight
                          aria-hidden
                          className={cn(
                            'h-6 w-6 shrink-0 self-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rtl:-scale-x-100',
                            active ? 'opacity-100' : 'opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100'
                          )}
                        />
                      </button>
                    </motion.div>
                  </li>
                );
              })}
            </motion.ul>

            {/* Call to action, settings and contact */}
            <motion.div
              className="mt-10 flex flex-col gap-8 border-t border-border pt-8 md:mt-2 md:border-s md:border-t-0 md:ps-10 md:pt-2"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <button
                type="button"
                onClick={() => go('contact')}
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#261bfb] px-6 py-3.5 font-medium text-white shadow-lg shadow-[#261bfb]/25 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#3e30fb]"
              >
                {t('nav.letsTalk')}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </button>

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">{t('nav.language')}</p>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((code) => {
                    const selected = i18n.language === code;
                    return (
                      <button
                        key={code}
                        type="button"
                        onClick={() => i18n.changeLanguage(code)}
                        aria-pressed={selected}
                        className={cn(
                          'h-9 min-w-[2.75rem] rounded-full border px-3 text-sm font-medium uppercase transition-colors duration-300',
                          selected
                            ? 'border-[#483dfb] bg-[#483dfb] text-white'
                            : 'border-border text-foreground hover:border-[#483dfb]/60 hover:text-[#483dfb]'
                        )}
                      >
                        {code}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">{t('nav.theme')}</p>
                <ThemeSwitcher />
              </div>

              <div className="flex gap-3">
                {SOCIALS.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[#483dfb] hover:bg-[#483dfb] hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenu;
