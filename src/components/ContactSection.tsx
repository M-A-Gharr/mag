
import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE_OUT, ImageReveal, Reveal, SectionHeading, Stagger, StaggerItem } from './motion';
import FloatingField from './contact/FloatingField';
import PaperPlaneButton, { type SendStatus } from './contact/PaperPlaneButton';
import ContactItem from './contact/ContactItem';

const MESSAGE_MAX = 1000;

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
          <Reveal className="relative z-10 bg-secondary/20 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h3>

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
            <Reveal delay={0.15} className="bg-secondary/20 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h3>

              <Stagger className="space-y-5" stagger={0.08} delay={0.25}>
                {contactInfo.map((item) => (
                  <StaggerItem key={item.label}>
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
            </Reveal>

            <ImageReveal delay={0.2} className="h-[300px] rounded-xl">
              <iframe title="Casablanca, Morocco" src="https://maps.google.com/maps?q=Casablanca%2C%20Morocco&z=12&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </ImageReveal>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;
