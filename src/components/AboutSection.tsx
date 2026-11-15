// About: who I am. Photo and signature on one side; experience, education and the way I
// work on the other, all on the same timeline style. Expertise has its own section.
import { useTranslation } from 'react-i18next';
import { Briefcase, Compass, GraduationCap, Quote, Handshake, Store } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import GlitchText from './GlitchText';
import { BlockTitle, EASE_OUT, Reveal, SectionHeading, Stagger, StaggerItem } from './motion';
import ProfileCard from './ProfileCard';

type TimelineItem = {
  period: string;
  role: string;
  company?: string;
  companyUrl?: string;
  desc?: string;
  responsibilities?: string[];
};

/** Vertical timeline whose rail draws itself; the first (current) item has a filled dot. */
const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <div className="relative ps-8">
    <motion.span
      aria-hidden
      className="absolute start-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[#483dfb] via-[#483dfb]/50 to-transparent"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.6, ease: EASE_OUT }}
    />
    <Stagger className="space-y-7" stagger={0.15} delay={0.2}>
      {items.map((item, index) => (
        <StaggerItem key={index} className="relative">
          <span
            aria-hidden
            className={cn(
              'absolute -start-8 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-[#483dfb] bg-background',
              index === 0 && 'bg-[#483dfb] shadow-[0_0_0_4px_rgb(72_61_251_/_0.2)]'
            )}
          />
          <span className="text-sm text-muted-foreground">{item.period}</span>
          <h4 className="text-lg font-medium leading-snug">{item.role}</h4>
          {item.company && <span className="text-sm font-medium text-[#483dfb] dark:text-[#9b87f5]">{item.companyUrl ? <a href={item.companyUrl} className="underline decoration-current/30 underline-offset-4 hover:decoration-current">{item.company}</a> : item.company}</span>}
          {item.desc && <p className="mt-1 text-foreground/80">{item.desc}</p>}
          {item.responsibilities && (
            <ul className="mt-3 list-disc space-y-2 ps-5 text-foreground/80">
              {item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
            </ul>
          )}
        </StaggerItem>
      ))}
    </Stagger>
  </div>
);

const AboutSection = () => {
  const { t } = useTranslation();

  const resume = t('about.resume.items', { returnObjects: true });
  const experience = Array.isArray(resume) ? (resume as TimelineItem[]) : [];
  const ventures = t('about.entrepreneurial.items', { returnObjects: true });
  const entrepreneurial = Array.isArray(ventures) ? (ventures as TimelineItem[]) : [];
  const collaboration = t('about.collaboration.items', { returnObjects: true });

  // Education, newest first (the texts come from the former Certificates section).
  const education: TimelineItem[] = [
    { period: t('certificates.academic.hndYears'), role: t('certificates.academic.hnd'), desc: t('certificates.academic.hndDesc') },
    {
      period: t('certificates.education.years'),
      role: t('certificates.education.degree'),
      company: `${t('certificates.education.university')} · ${t('certificates.education.specialization')}`,
      companyUrl: 'https://uic.ac.ma/',
      desc: t('certificates.education.internship'),
    },
    { period: t('certificates.academic.bachelorYears'), role: t('certificates.academic.bachelor'), company: t('certificates.academic.bachelorSchool'), companyUrl: 'https://www.ens.uh2c.ac.ma/', desc: t('certificates.academic.bachelorDesc') },
    { period: t('certificates.continuous.onlineYears'), role: t('certificates.continuous.online'), desc: t('certificates.continuous.onlineDesc') },
  ];

  return (
    <section id="about" className="section-container">
      <SectionHeading title={t('about.title')} subtitle={t('about.subtitle')} />

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        {/* Photo and signature, kept in view while the timelines scroll on large screens */}
        <div className="flex flex-col items-center lg:w-1/3">
          <div className="flex w-full flex-col items-center lg:sticky lg:top-28">
            <ProfileCard />
            <Reveal delay={0.2} className="panel w-full max-w-md p-6 text-center">
              <Quote className="mx-auto mb-3 h-7 w-7 text-[#483dfb]" aria-hidden />
              <p className="text-xl font-medium italic">
                <GlitchText>{t('hero.quote')}</GlitchText>
              </p>
            </Reveal>
          </div>
        </div>

        <div className="space-y-6 lg:w-2/3">
          <Reveal className="panel p-6 md:p-8">
            <BlockTitle icon={Briefcase} title={t('about.resume.title')} />
            <Timeline items={experience} />
          </Reveal>

          <Reveal className="panel p-6 md:p-8">
            <BlockTitle icon={Handshake} title={t('about.collaboration.title')} />
            <ul className="list-disc space-y-3 ps-5 text-foreground/80">
              {Array.isArray(collaboration) && collaboration.map((item: string) => <li key={item}>{item}</li>)}
            </ul>
          </Reveal>

          <Reveal className="panel p-6 md:p-8">
            <BlockTitle icon={Store} title={t('about.entrepreneurial.title')} />
            <Timeline items={entrepreneurial} />
          </Reveal>

          <Reveal className="panel p-6 md:p-8">
            <BlockTitle icon={GraduationCap} title={t('about.education.title')} />
            <Timeline items={education} />
          </Reveal>

          <Reveal className="panel p-6 md:p-8">
            <BlockTitle icon={Compass} title={t('about.goals.title')} />
            <Stagger className="space-y-4" stagger={0.12} delay={0.15}>
              {(['expertise', 'innovation', 'impact'] as const).map((key) => (
                <StaggerItem key={key}>
                  <div className="rounded-lg border-s-2 border-s-[#483dfb]/60 bg-secondary/10 p-4">
                    <h4 className="mb-1.5 text-lg font-medium text-[#483dfb] dark:text-[#9b87f5]">{t(`about.goals.${key}.title`)}</h4>
                    <p className="text-foreground/80">{t(`about.goals.${key}.desc`)}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
