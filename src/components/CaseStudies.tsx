// Case studies of real projects (replaces the old placeholder blog): one card at a time with
// the challenge and the result, and a dialog with the full story (challenge → what I did →
// result) and a button that brings the matching project card into view.
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Flag, ListChecks, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SHOW_PROJECT_EVENT } from '@/lib/events';
import { EASE_OUT } from './motion';

type CaseStudy = {
  projectId: number;
  sector: string;
  challenge: string;
  approach: string[];
  result: string;
};

const asList = <T,>(value: unknown): T[] => (Array.isArray(value) ? (value as T[]) : []);

const SWIPE = 60; // px of drag needed to change case

const CaseStudies = () => {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === 'ar';
  const cases = asList<CaseStudy>(t('bonus.caseStudies.items', { returnObjects: true }));

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [open, setOpen] = useState(false);

  if (cases.length === 0) return null;
  const current = cases[index % cases.length];
  const title = (c: CaseStudy) => t(`projects.items.${c.projectId}.title`);
  const stack = asList<string>(t(`projects.items.${current.projectId}.technologies`, { returnObjects: true })).slice(0, 5);

  const go = (step: 1 | -1) => {
    setDirection(step);
    setIndex((i) => (i + step + cases.length) % cases.length);
  };
  const onDragEnd = (_: unknown, info: PanInfo) => {
    // In RTL the "next" card comes from the left, so a drag to the right moves forward.
    const dx = rtl ? -info.offset.x : info.offset.x;
    if (dx < -SWIPE) go(1);
    else if (dx > SWIPE) go(-1);
  };
  const showProject = () => {
    setOpen(false);
    window.dispatchEvent(new CustomEvent(SHOW_PROJECT_EVENT, { detail: { id: current.projectId } }));
  };

  // Slide in from the side the visitor is moving towards (mirrored in RTL).
  const offset = (d: number) => (rtl ? -d : d) * 40;

  return (
    <>
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.article
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: offset(direction) }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: offset(-direction) }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={onDragEnd}
            className="flex cursor-grab touch-pan-y select-none flex-col gap-4 active:cursor-grabbing"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#483dfb]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#483dfb] dark:text-[#9b87f5]">
                {current.sector}
              </span>
              <span className="shrink-0 text-xs tabular-nums text-muted-foreground" dir="ltr">
                {String(index + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}
              </span>
            </div>

            <h4 className="text-lg font-semibold leading-snug md:text-xl">{title(current)}</h4>

            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">{current.challenge}</p>

            <div className="rounded-xl border border-[#483dfb]/20 bg-gradient-to-br from-[#483dfb]/10 to-[#9b87f5]/5 p-4">
              <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#483dfb] dark:text-[#9b87f5]">
                <Trophy className="h-3.5 w-3.5" />
                {t('bonus.caseStudies.result')}
              </div>
              <p className="text-sm font-medium leading-relaxed">{current.result}</p>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Pagination on its own row, then the button: the card is narrow on phones and in the desktop column */}
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" onClick={() => go(-1)} aria-label={t('bonus.caseStudies.prev')}>
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
          </Button>
          <div className="flex items-center gap-1">
            {cases.map((c, i) => (
              <button
                key={c.projectId}
                type="button"
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={title(c)}
                aria-current={i === index}
                className="flex h-6 items-center px-0.5"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? 'w-5 bg-[#483dfb]' : 'w-1.5 bg-foreground/25 hover:bg-foreground/50'
                  }`}
                />
              </button>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" onClick={() => go(1)} aria-label={t('bonus.caseStudies.next')}>
            <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          </Button>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(true)}
          className="group w-full gap-1.5 hover:border-[#483dfb]/60 hover:text-[#483dfb]"
        >
          {t('bonus.caseStudies.read')}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[88vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8" dir={rtl ? 'rtl' : 'ltr'}>
          {/* pr-10 (physical): the close button sits top-right in both directions */}
          <DialogHeader className="pr-10 text-start sm:text-start">
            <span className="mb-1 w-fit rounded-full bg-[#483dfb]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#483dfb] dark:text-[#9b87f5]">
              {current.sector}
            </span>
            <DialogTitle className="text-xl leading-snug md:text-2xl">{title(current)}</DialogTitle>
            <DialogDescription className="sr-only">{current.challenge}</DialogDescription>
          </DialogHeader>

          {/* Three steps on a vertical line */}
          <ol className="relative mt-2 space-y-6 border-s border-[#483dfb]/25 ps-6">
            <Step icon={<Flag className="h-3.5 w-3.5" />} label={t('bonus.caseStudies.challenge')} delay={0.05}>
              <p className="text-sm leading-relaxed text-muted-foreground">{current.challenge}</p>
            </Step>
            <Step icon={<ListChecks className="h-3.5 w-3.5" />} label={t('bonus.caseStudies.approach')} delay={0.15}>
              <ul className="space-y-2">
                {current.approach.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b87f5]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Step>
            <Step icon={<Trophy className="h-3.5 w-3.5" />} label={t('bonus.caseStudies.result')} delay={0.25} highlight>
              <p className="text-sm font-medium leading-relaxed">{current.result}</p>
            </Step>
          </ol>

          {stack.length > 0 && (
            <div className="mt-6">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t('bonus.caseStudies.stack')}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((tech) => (
                  <span key={tech} className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <Button onClick={showProject} className="gap-1.5 bg-[#483dfb] text-white hover:bg-[#3a30d9]">
              {t('bonus.caseStudies.viewProject')}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Step = ({
  icon,
  label,
  delay,
  highlight,
  children,
}: {
  icon: JSX.Element;
  label: string;
  delay: number;
  highlight?: boolean;
  children: React.ReactNode;
}) => (
  <motion.li
    className="relative"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease: EASE_OUT, delay }}
  >
    <span
      className={`absolute -start-[2.15rem] top-0 flex h-7 w-7 items-center justify-center rounded-full border ${
        highlight ? 'border-[#483dfb] bg-[#483dfb] text-white' : 'border-[#483dfb]/30 bg-background text-[#483dfb] dark:text-[#9b87f5]'
      }`}
    >
      {icon}
    </span>
    <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/80">{label}</div>
    <div className={highlight ? 'rounded-xl border border-[#483dfb]/20 bg-[#483dfb]/5 p-3' : ''}>{children}</div>
  </motion.li>
);

export default CaseStudies;
