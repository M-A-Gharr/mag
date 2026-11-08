// One contact row. Its icon is drawn towards the cursor ("magnetic") and springs back on
// leave. With `copyValue`, clicking the value copies it and shows a short "Copied!" tooltip.
import { useRef, useState, type ReactNode, type PointerEvent } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { EASE_OUT } from '../motion';

type ContactItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string | null;
  copyValue?: string;
  copiedLabel?: string;
  copyHint?: string;
};

const PULL = 0.35;
const MAX_SHIFT = 10;

const ContactItem = ({ icon, label, value, href, copyValue, copiedLabel, copyHint }: ContactItemProps) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 14, mass: 0.4 });
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || !iconRef.current) return;
    const r = iconRef.current.getBoundingClientRect();
    const clamp = (v: number) => Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, v));
    x.set(clamp((e.clientX - (r.left + r.width / 2)) * PULL));
    y.set(clamp((e.clientY - (r.top + r.height / 2)) * PULL));
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const copy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked: fall back to the link.
      if (href) window.location.href = href;
    }
  };

  const valueClass = 'text-foreground transition-colors duration-300 hover:text-[#483dfb]';

  return (
    <div className="group flex items-start" onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div
        ref={iconRef}
        style={{ x: sx, y: sy }}
        className="flex-shrink-0 rounded-md bg-secondary/30 p-2 me-4 transition-colors duration-500 group-hover:bg-[#483dfb]/15"
      >
        {icon}
      </motion.div>
      <div className="relative min-w-0">
        <p className="text-sm text-foreground/70">{label}</p>
        {copyValue ? (
          <button
            type="button"
            onClick={copy}
            title={copyHint}
            aria-label={`${value}. ${copyHint ?? ''}`}
            className={`${valueClass} inline-flex max-w-full items-center gap-2 text-start`}
          >
            <span className="truncate">{value}</span>
            <span className="text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            </span>
          </button>
        ) : href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={valueClass}
          >
            {value}
          </a>
        ) : (
          <p className="text-foreground">{value}</p>
        )}

        <AnimatePresence>
          {copied && (
            <motion.span
              role="status"
              className="absolute -top-8 start-0 rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background shadow-lg"
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.95 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              {copiedLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactItem;
