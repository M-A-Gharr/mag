// Testimonials: one quote at a time under a large brand quote mark, with the author's initials,
// name and role. Story-style progress bars advance on their own (paused on hover or focus,
// off with reduced motion); tap a bar, use the arrows or swipe to change.
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion, useInView, useReducedMotion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { EASE_OUT } from '../motion';

type Testimonial = { id: number; author: string; role: string; quote: string };

const DURATION_S = 7; // seconds per testimonial
const SWIPE = 50;

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const TestimonialsCarousel = () => {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === 'ar';
  const reduce = useReducedMotion();
  const raw = t('bonus.testimonialsData', { returnObjects: true });
  const items: Testimonial[] = Array.isArray(raw) ? (raw as Testimonial[]) : [];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  // Autoplay only runs while the block is on screen, so visitors start on the first quote.
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.4 });

  if (items.length === 0) return null;
  const current = items[index % items.length];

  const go = (step: 1 | -1) => {
    setDirection(step);
    setIndex((i) => (i + step + items.length) % items.length);
  };
  const jump = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };
  const onDragEnd = (_: unknown, info: PanInfo) => {
    const dx = rtl ? -info.offset.x : info.offset.x;
    if (dx < -SWIPE) go(1);
    else if (dx > SWIPE) go(-1);
  };
  const shift = (d: number) => (rtl ? -d : d) * 30;

  return (
    <div
      ref={rootRef}
      className="relative flex h-full flex-col"
      onPointerEnter={(e) => e.pointerType === 'mouse' && setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Story-style progress: the active bar fills, then the next testimonial comes in */}
      <div className="mb-6 flex gap-1.5">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => jump(i)}
            aria-label={item.author}
            aria-current={i === index}
            className="group relative h-6 flex-1"
          >
            <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-foreground/10 transition-colors group-hover:bg-foreground/20">
              {i < index && <span className="absolute inset-0 rounded-full bg-[#9b87f5]/60" />}
              {i === index && (
                <span
                  key={`${index}-${reduce}`}
                  className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-[#483dfb] to-[#9b87f5] rtl:origin-right"
                  style={
                    reduce
                      ? undefined
                      : {
                          animation: `testimonial-progress ${DURATION_S}s linear forwards`,
                          animationPlayState: paused || !inView ? 'paused' : 'running',
                        }
                  }
                  onAnimationEnd={() => go(1)}
                />
              )}
            </span>
          </button>
        ))}
      </div>

      <div className="relative flex-1">
        {/* Large brand quote mark */}
        <Quote
          aria-hidden
          className="pointer-events-none absolute -top-1 start-0 h-10 w-10 -scale-x-100 text-[#483dfb]/15 dark:text-[#9b87f5]/20 rtl:scale-x-100"
          strokeWidth={1.25}
          fill="currentColor"
        />

        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.figure
            key={current.id}
            initial={{ opacity: 0, x: shift(direction), filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: shift(-direction), filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
            className="relative flex min-h-[220px] cursor-grab touch-pan-y select-none flex-col justify-between pt-12 active:cursor-grabbing"
          >
            <blockquote className="text-lg font-medium leading-relaxed text-foreground md:text-xl">
              {current.quote}
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-3">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#261bfb] to-[#9b87f5] text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgb(72_61_251_/_0.6)]">
                {initials(current.author)}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-semibold">{current.author}</span>
                <span className="block truncate text-sm text-muted-foreground">{current.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Arrows and counter */}
      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="text-xs tabular-nums text-muted-foreground" dir="ltr">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={t('bonus.prev')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-[#483dfb]/50 hover:text-[#483dfb]"
          >
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={t('bonus.next')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-[#483dfb]/50 hover:text-[#483dfb]"
          >
            <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
