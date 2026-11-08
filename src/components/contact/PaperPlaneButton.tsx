// Submit button with a paper plane: it bobs while the message is sending, flies off along
// a curve when it is sent (then a check mark draws itself), and stays put with a shake on error.
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EASE_OUT } from '../motion';

export type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

type PaperPlaneButtonProps = {
  status: SendStatus;
  /** Changes on each failed attempt so the shake replays. */
  errorCount: number;
  rtl?: boolean;
  labels: { idle: string; sending: string; sent: string };
};

const PaperPlane = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    {/* Two-tone folded paper */}
    <path d="M2.5 11.2 21.5 3 17.6 20.6 11.7 15.4Z" fill="currentColor" />
    <path d="M11.7 15.4 21.5 3 9.8 13.7Z" fill="currentColor" opacity="0.55" />
    <path d="M9.8 13.7 11.7 15.4 9.6 20.2Z" fill="currentColor" opacity="0.75" />
  </svg>
);

const PaperPlaneButton = ({ status, errorCount, rtl = false, labels }: PaperPlaneButtonProps) => {
  const reduce = useReducedMotion();
  const dir = rtl ? -1 : 1;
  const busy = status === 'sending' || status === 'sent';

  const planeAnimation =
    status === 'sending'
      ? { x: 0, y: [0, -3, 0], rotate: [0, -6, 0], opacity: 1, scale: 1, color: '#ffffff' }
      : status === 'sent'
        ? {
            x: [0, 24 * dir, 140 * dir, 320 * dir],
            y: [0, 8, -70, -200],
            rotate: [0, 8 * dir, -18 * dir, -30 * dir],
            scale: [1, 1.15, 1, 0.7],
            opacity: [1, 1, 1, 0],
            // White inside the button, brand violet once it is out over the page.
            color: ['#ffffff', '#ffffff', '#6d5dfc', '#6d5dfc'],
          }
        : { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1, color: '#ffffff' };

  const planeTransition =
    status === 'sending'
      ? { duration: 0.9, repeat: Infinity, ease: 'easeInOut' as const }
      : status === 'sent'
        ? { duration: reduce ? 0 : 1.1, ease: [0.45, 0, 0.2, 1] as const, times: [0, 0.2, 0.6, 1] }
        : { type: 'spring' as const, stiffness: 260, damping: 18 };

  return (
    <motion.div
      key={errorCount}
      animate={status === 'error' && !reduce ? { x: [0, -10, 10, -7, 7, -3, 0] } : { x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative"
    >
      <button
        type="submit"
        disabled={busy}
        aria-live="polite"
        className={cn(
          'group relative flex h-12 w-full items-center justify-center rounded-lg font-medium text-white',
          'shadow-lg shadow-[#483dfb]/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#483dfb] focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          status === 'sent' ? 'bg-emerald-600' : 'bg-[#483dfb] hover:bg-[#3e30fb]',
          !busy && 'hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#483dfb]/30',
          busy && 'cursor-default'
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === 'sent' ? (
            <motion.span
              key="sent"
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: reduce ? 0 : 0.35 }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <motion.path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: EASE_OUT, delay: reduce ? 0 : 0.55 }}
                />
              </svg>
              {labels.sent}
            </motion.span>
          ) : (
            <motion.span
              key={status === 'sending' ? 'sending' : 'idle'}
              className="pe-8"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              {status === 'sending' ? labels.sending : labels.idle}
            </motion.span>
          )}
        </AnimatePresence>

        {/* The plane sits at the end of the button and leaves through its top corner */}
        <span className="pointer-events-none absolute end-5 top-1/2 -translate-y-1/2">
          <motion.span
            // A new key after the flight makes the plane fade back in at home instead of flying back.
            key={status === 'sent' ? 'flying' : 'home'}
            initial={status === 'sent' ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, color: '#ffffff' } : { opacity: 0, scale: 0.5, y: 6 }}
            className="block"
            animate={planeAnimation}
            transition={planeTransition}
          >
            {/* Hover nudge lives on an inner element so its CSS transition can't lag the flight */}
            <span
              className={cn(
                'block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                !busy && 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5'
              )}
            >
              <PaperPlane className={cn('h-5 w-5', rtl && '-scale-x-100')} />
            </span>
          </motion.span>
        </span>
      </button>
    </motion.div>
  );
};

export default PaperPlaneButton;
