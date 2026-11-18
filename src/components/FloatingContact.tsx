// One floating button for both ways to reach me: the AI assistant (Chatbase) and WhatsApp.
// At rest it shows both icons split along a diagonal; a click turns it into a cross and fans
// out the two choices. Chatbase's own bubble is hidden (index.css) and its chat is opened
// through its API. Bottom right, or bottom left in Arabic (logical "end").
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, X } from 'lucide-react';
import { EASE_OUT } from './motion';
import WhatsAppDialog from './contact/WhatsAppDialog';
import WhatsAppIcon from './contact/WhatsAppIcon';

type Chatbase = (command: 'open' | 'close') => void;
// Called through a plain variable: the production build turns `window.chatbase?.(x)` into
// `window.chatbase.call(window, x)`, and Chatbase's proxy reads any property, `call`
// included, as an (unknown) command, so the chat never opened.
const chatbase = (command: 'open' | 'close') => {
  const run = (window as unknown as { chatbase?: Chatbase }).chatbase;
  if (typeof run === 'function') run(command);
};

const VIOLET = 'linear-gradient(135deg, #483dfb, #9b87f5)';
const GREEN = 'linear-gradient(135deg, #25D366, #128C4A)';

const FloatingContact = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close the choices on Escape or on a click elsewhere.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const onDown = (e: PointerEvent) => !rootRef.current?.contains(e.target as Node) && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
    };
  }, [menuOpen]);

  // The chat can also be closed from inside it: its frame then posts { type: 'close' }.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (/(^|\.)chatbase\.co$/.test(new URL(e.origin, location.href).hostname) && e.data?.type === 'close') setChatOpen(false);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const onMain = () => {
    if (chatOpen) {
      chatbase('close');
      setChatOpen(false);
      return;
    }
    setMenuOpen((open) => !open);
  };

  const openAssistant = () => {
    setMenuOpen(false);
    chatbase('open');
    setChatOpen(true);
  };

  const openWhatsApp = () => {
    setMenuOpen(false);
    setWhatsAppOpen(true);
  };

  const crossed = menuOpen || chatOpen;
  const options = [
    { key: 'assistant', onClick: openAssistant, bg: VIOLET, icon: <Bot className="h-5 w-5" aria-hidden />, label: t('contact.floating.assistant'), hint: t('contact.floating.assistantHint') },
    { key: 'whatsapp', onClick: openWhatsApp, bg: GREEN, icon: <WhatsAppIcon size={20} />, label: 'WhatsApp', hint: t('contact.floating.whatsappHint') },
  ];

  return (
    <>
      <div ref={rootRef} className="fixed bottom-4 end-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:end-6">
        <AnimatePresence>
          {menuOpen &&
            options.map((option, i) => (
              <motion.button
                key={option.key}
                type="button"
                onClick={option.onClick}
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: EASE_OUT, delay: (options.length - 1 - i) * 0.06 } }}
                exit={{ opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.18 } }}
                className="group flex items-center gap-3 rounded-full border border-border bg-background/95 py-1.5 pe-1.5 ps-4 text-start shadow-lg shadow-black/10 backdrop-blur-md transition-colors duration-300 hover:border-[#483dfb]/40"
              >
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-foreground">{option.label}</span>
                  <span className="text-xs text-muted-foreground">{option.hint}</span>
                </span>
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-105"
                  style={{ background: option.bg }}
                >
                  {option.icon}
                </span>
              </motion.button>
            ))}
        </AnimatePresence>

        <button
          type="button"
          onClick={onMain}
          aria-expanded={menuOpen}
          aria-label={crossed ? t('contact.floating.close') : t('contact.floating.open')}
          className="group relative h-14 w-14 overflow-hidden rounded-full shadow-lg shadow-[#483dfb]/30 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2"
        >
          {/* Two halves cut along the diagonal, each holding its icon; they slide apart into the cross */}
          <motion.span
            aria-hidden
            className="absolute inset-0 text-white"
            style={{ background: VIOLET, clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
            animate={{ x: crossed ? '-30%' : '0%', y: crossed ? '-30%' : '0%', opacity: crossed ? 0 : 1 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <Bot className="absolute left-[19%] top-[19%] h-[18px] w-[18px] transition-transform duration-500 group-hover:-rotate-12" />
          </motion.span>
          <motion.span
            aria-hidden
            className="absolute inset-0 text-white"
            style={{ background: GREEN, clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
            animate={{ x: crossed ? '30%' : '0%', y: crossed ? '30%' : '0%', opacity: crossed ? 0 : 1 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <WhatsAppIcon size={18} className="absolute bottom-[19%] right-[19%] transition-transform duration-500 group-hover:rotate-12" />
          </motion.span>
          {/* Fine light seam along the cut */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[1.5px] w-[150%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/70"
            animate={{ opacity: crossed ? 0 : 1 }}
            transition={{ duration: 0.25 }}
          />
          {/* Cross shown while the choices or the chat are open */}
          <motion.span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center bg-foreground text-background"
            initial={false}
            animate={{ opacity: crossed ? 1 : 0, rotate: crossed ? 0 : -90, scale: crossed ? 1 : 0.6 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
          >
            <X className="h-6 w-6" />
          </motion.span>
        </button>
      </div>

      <WhatsAppDialog open={whatsAppOpen} onOpenChange={setWhatsAppOpen} />
    </>
  );
};

export default FloatingContact;
