
import { lazy, Suspense, useEffect, useState } from 'react';
import { Contact as ContactIcon, Download, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { Element } from 'react-scroll';
import { toast } from 'sonner';
import { downloadCv } from '@/lib/cv';
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next';
import { BlockTitle, Reveal, SectionHeading, Stagger, StaggerItem } from './motion';
import TerminalContactForm from './contact/TerminalContactForm';
import { type SendStatus } from './contact/PaperPlaneButton';
import ContactItem from './contact/ContactItem';
import WhatsAppDialog from './contact/WhatsAppDialog';
import WhatsAppIcon from './contact/WhatsAppIcon';
import { useLocation } from 'react-router-dom';
import { CASE_STUDY_PAGES, caseStudyLang } from '@/content/caseStudies';
import { SERVICE_PAGES, servicesForProject } from '@/content/services';
import { conversionCopy } from '@/content/conversion';


// The calendar (slots outside working hours), its date locales and EmailJS load only when the
// contact section renders.
const BookingCalendar = lazy(() => import('./BookingCalendar'));

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const { search } = useLocation();
  const topic = new URLSearchParams(search).get('topic') ?? '';
  const project = topic.startsWith('project:') ? CASE_STUDY_PAGES.find((p) => p.slug === topic.slice(8)) : undefined;
  const service = topic.startsWith('service:') ? SERVICE_PAGES.find((s) => s.slug === topic.slice(8)) : undefined;
  const subject = project ? t(`projects.items.${project.projectId}.title`) : service ? t(`about.services.${service.key}.title`) : '';
  const copy = conversionCopy[caseStudyLang(i18n.language)];
  const suggestedNeed = service?.key ?? (project ? servicesForProject(project.projectId)[0]?.key : '') ?? '';
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
    need: suggestedNeed,
    timeframe: ''
  });
  const [status, setStatus] = useState<SendStatus>('idle');
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);

  useEffect(() => {
    if (subject) setFormData((previous) => previous.message ? previous : { ...previous, message: copy.prompt(subject) });
  }, [subject, copy]);

  useEffect(() => {
    if (suggestedNeed) setFormData((previous) => previous.need ? previous : { ...previous, need: suggestedNeed });
  }, [suggestedNeed]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending' || status === 'sent') return;
    setStatus('sending');
    // Include qualification in the existing message field: no EmailJS template change needed.
    const payload = {
      ...formData,
      message: [
        `${t('contact.form.need')}: ${t(`contact.form.needOptions.${formData.need}`)}`,
        ...(formData.timeframe ? [`${t('contact.form.timeframe')}: ${t(`contact.form.timeframeOptions.${formData.timeframe}`)}`] : []),
        ...(subject ? [`${copy.context}: ${subject}`] : []),
        '',
        formData.message,
      ].join('\n'),
    };
    // Keep the sending state readable even on a fast connection.
    const minDelay = new Promise((resolve) => setTimeout(resolve, 900));

    try {
      // Notification to me; this one decides success.
      await emailjs.send('service_8nsntik', 'template_ziyld0c', payload, 'vfswi8UCo__CgVoZo');
    } catch (error) {
      console.error('FAILED sending notification email...', error);
      await minDelay;
      setStatus('error');
      return;
    }

    // Confirmation to the sender; a failure here doesn't lose the message.
    emailjs
      .send('service_8nsntik', 'template_pnyo2ld', payload, 'vfswi8UCo__CgVoZo')
      .catch((error) => console.error('FAILED sending confirmation email...', error));

    await minDelay;
    setStatus('sent');

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
      icon: <WhatsAppIcon size={20} className="text-[#25D366]" />,
      label: "WhatsApp",
      value: t('contact.whatsapp.label'),
      link: null,
      onClick: () => setWhatsAppOpen(true)
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
          <Reveal className="relative z-10 min-w-0">
            <TerminalContactForm
              data={formData}
              status={status}
              onChange={handleChange}
              onSubmit={handleSubmit}
              context={subject ? `${copy.context} : ${subject}` : undefined}
              onRestart={() => {
                setFormData({ from_name: '', reply_to: '', message: '', need: suggestedNeed, timeframe: '' });
                setStatus('idle');
              }}
            />
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
                      onClick={item.onClick}
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

        <WhatsAppDialog open={whatsAppOpen} onOpenChange={setWhatsAppOpen} />

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
