
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Contact as ContactIcon, Download, MapPin, Mail, Phone, Linkedin, Send } from 'lucide-react';
import { Element } from 'react-scroll';
import { toast } from 'sonner';
import { downloadCv } from '@/lib/cv';
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { BlockTitle, EASE_OUT, Reveal, SectionHeading, Stagger, StaggerItem } from './motion';
import FloatingField from './contact/FloatingField';
import PaperPlaneButton, { type SendStatus } from './contact/PaperPlaneButton';
import ContactItem from './contact/ContactItem';

const MESSAGE_MAX = 1000;

// The calendar (slots outside working hours), its date locales and EmailJS load only when the
// contact section renders.
const BookingCalendar = lazy(() => import('./BookingCalendar'));

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });
  const [status, setStatus] = useState<SendStatus>('idle');
  const [errorCount, setErrorCount] = useState(0);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending' || status === 'sent') return;
    setStatus('sending');
    // Let the plane "taxi" for a moment even when the network is fast.
    const minDelay = new Promise((resolve) => setTimeout(resolve, 900));

    try {
      // Notification to me; this one decides success.
      await emailjs.send('service_8nsntik', 'template_ziyld0c', formData, 'vfswi8UCo__CgVoZo');
    } catch (error) {
      console.error('FAILED sending notification email...', error);
      await minDelay;
      setStatus('error');
      setErrorCount((c) => c + 1);
      return;
    }

    // Confirmation to the sender; a failure here doesn't lose the message.
    emailjs
      .send('service_8nsntik', 'template_pnyo2ld', formData, 'vfswi8UCo__CgVoZo')
      .catch((error) => console.error('FAILED sending confirmation email...', error));

    await minDelay;
    setStatus('sent');
    setFormData({ from_name: '', reply_to: '', message: '' });
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus('idle'), 6000);
  };

  const onDownloadCv = () => {
    try {
      downloadCv(i18n.language);
      toast.success(t('bonus.freelance.downloadStarted'));
    } catch (error) {
      toast.error(t('bonus.freelance.downloadError'));
      console.error('CV download error', error);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-[#483dfb]" />,
      label: t('contact.info.address'),
      value: t('contact.info.addressValue', 'Casablanca, Morocco'),
      link: null
    },
    {
      icon: <Mail className="h-5 w-5 text-[#483dfb]" />,
      label: t('contact.info.email'),
      value: "contact.maminegh@gmail.com",
      link: "mailto:contact.maminegh@gmail.com",
      copy: true
    },
    {
      icon: <Phone className="h-5 w-5 text-[#483dfb]" />,
      label: t('contact.info.phone'),
      value: "+212 6 44 58 92 07",
      link: "tel:+212644589207"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-[#483dfb]" />,
      label: t('contact.info.linkedin'),
      value: "linkedin.com/in/m-amine-gharrab",
      link: "https://linkedin.com/in/m-amine-gharrab"
    }
  ];

  return (
      <section id="contact" className="section-container overflow-x-clip">
        <SectionHeading title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Reveal className="panel relative z-10 p-6 md:p-8">
            <BlockTitle icon={Send} title={t('contact.form.title')} />

            <Stagger as="div" stagger={0.1} delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              <StaggerItem>
                <FloatingField
                  id="name"
                  name="from_name"
                  label={t('contact.form.name')}
                  value={formData.from_name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  disabled={status === 'sending'}
                />
              </StaggerItem>

              <StaggerItem>
                <FloatingField
                  id="email"
                  name="reply_to"
                  type="email"
                  label={t('contact.form.email')}
                  value={formData.reply_to}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  disabled={status === 'sending'}
                />
              </StaggerItem>

              <StaggerItem>
                <FloatingField
                  id="message"
                  name="message"
                  label={t('contact.form.message')}
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  maxLength={MESSAGE_MAX}
                  required
                  disabled={status === 'sending'}
                  counterLabel={(count, max) => t('contact.form.characters', { count, max })}
                />
              </StaggerItem>

              <StaggerItem>
                <PaperPlaneButton
                  status={status}
                  errorCount={errorCount}
                  rtl={i18n.language === 'ar'}
                  labels={{ idle: t('contact.form.submit'), sending: t('contact.form.sending'), sent: t('contact.form.sent') }}
                />
              </StaggerItem>
            </form>
            </Stagger>

            {/* Result message unfolds under the button */}
            <AnimatePresence mode="wait">
              {(status === 'sent' || status === 'error') && (
                <motion.div
                  key={status}
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.5, ease: EASE_OUT, delay: status === 'sent' ? 0.9 : 0 }}
                  className="overflow-hidden"
                  role={status === 'error' ? 'alert' : 'status'}
                >
                  <div
                    className={
                      status === 'sent'
                        ? 'rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4'
                        : 'rounded-lg border border-red-500/30 bg-red-500/10 p-4'
                    }
                  >
                    <p className="font-medium text-foreground">
                      {status === 'sent' ? t('contact.form.success') : t('contact.form.error')}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>

          {/* Contact and map */}
          <div className="space-y-8">
            <Reveal delay={0.15} className="panel p-6 md:p-8">
              <BlockTitle icon={ContactIcon} title={t('contact.info.title')} />

              <Stagger className="space-y-5" stagger={0.08} delay={0.25}>
                {/* Keyed by position, not by the translated label: a new key on a language switch
                    would mount the item after its reveal has run, and it would stay invisible. */}
                {contactInfo.map((item, index) => (
                  <StaggerItem key={index}>
                    <ContactItem
                      icon={item.icon}
                      label={item.label}
                      value={item.value}
                      href={item.link}
                      copyValue={item.copy ? item.value : undefined}
                      copiedLabel={t('contact.info.copied')}
                      copyHint={t('contact.info.copyEmail')}
                    />
                  </StaggerItem>
                ))}
              </Stagger>

              {/* Availability and CV */}
              <div className="mt-6 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  {t('about.available')}
                </span>
                <button
                  type="button"
                  onClick={onDownloadCv}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-[#483dfb]/50 hover:text-[#483dfb]"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  {t('bonus.freelance.downloadCV')}
                </button>
              </div>
            </Reveal>

            {/* Plain fade-in: a clip-path reveal hides the map from Chrome, which then never
                paints the Google frame. The card underneath shows if a blocker removes the map. */}
            <Reveal delay={0.2} className="panel relative h-[300px] overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
                <MapPin className="h-6 w-6 text-[#483dfb]" />
                <p className="font-medium">{t('contact.info.addressValue')}</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Casablanca%2C%20Morocco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#483dfb] underline-offset-4 hover:underline dark:text-[#9b87f5]"
                >
                  {t('contact.info.openMap')}
                </a>
              </div>
              <iframe
                title={t('contact.info.addressValue')}
                src="https://www.google.com/maps/embed?pb=!1m3!2m1!1sCasablanca,+Morocco!6i12"
                className="relative h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>

        {/* Scheduling a call: target of the "#book" links */}
        <Element name="book" id="book" className="mt-12 scroll-mt-24">
          <Reveal>
            <Suspense fallback={<div className="h-[520px] animate-pulse rounded-2xl bg-secondary/20" />}>
              <BookingCalendar />
            </Suspense>
          </Reveal>
        </Element>
      </section>
  );
};

export default ContactSection;
