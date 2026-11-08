
import { useTranslation } from 'react-i18next';
import { Briefcase, CalendarIcon, Code, Bot, ShoppingCart, Star, Quote, Database, Search, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { EASE_OUT, ImageReveal, Reveal, SectionHeading, Stagger, StaggerItem } from './motion';


const bookBadges = [
  { label: 'React', icon: Code },
  { label: 'Node.js', icon: Database },
  { label: 'AI Automation', icon: Bot },
  { label: 'Claude', icon: Sparkles },
  { label: 'CRM Integration', icon: Database },
  { label: 'PrestaShop', icon: ShoppingCart },
  { label: 'Shopify', icon: ShoppingCart },
  { label: 'SEO', icon: Search },
];

type ResumeItem = {
  period: string;
  role: string;
  company: string;
  desc: string;
};

const AboutSection = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);
  const [pendingBook, setPendingBook] = useState(false);

  const services = [
    {
      icon: <Code className="h-10 w-10 text-[#483dfb]" />,
      title: t('about.services.webapps.title'),
      description: t('about.services.webapps.desc')
    },
    {
      icon: <Bot className="h-10 w-10 text-[#483dfb]" />,
      title: t('about.services.ai.title'),
      description: t('about.services.ai.desc')
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-[#483dfb]" />,
      title: t('about.services.ecommerce.title'),
      description: t('about.services.ecommerce.desc')
    }
  ];

  const resumeItems = t('about.resume.items', { returnObjects: true }) as ResumeItem[];
  const safeResumeItems = Array.isArray(resumeItems) ? resumeItems : [];

  const handleBookNow = () => {
    if (date) {
      // In a real implementation, this would send the booking request
      console.log(`Booking requested for: ${format(date, 'PPP')}`);
      window.open('mailto:contact.maminegh@gmail.com?subject=' + t('about.book.emailsubject') + '&body=' + t('about.book.emailbody') +
        (date ? ` on ${format(date, 'PPP')}` : ''), '_blank');
    } else {
      setShowCalendar(true);
    }
  };

  return (
    <section id="about" className="section-container">
      <SectionHeading title={t('about.title')} />
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3 flex flex-col items-center text-center">
          <ImageReveal className="relative w-60 h-60 rounded-full border-4 border-[#483dfb] mb-6 shadow-xl shadow-[#483dfb]/20">
            <div className="group relative h-full w-full overflow-hidden rounded-full">
              <img
                src="/images/profile/tripleprofile.png"
                alt="Mohamed Amine Gharrab"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </ImageReveal>

          <Reveal delay={0.2} className="w-full max-w-md">
            <div className="card-lift p-6 bg-secondary/20 border border-secondary/20 rounded-xl">
              <div className="flex items-center justify-center mb-3">
                <Quote className="text-[#483dfb] h-8 w-8" />
              </div>
              <p className="text-xl italic text-center font-medium">
                {t('hero.quote')}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:w-2/3 space-y-8">
          {/* Resume */}
          <Reveal className="bg-secondary/20 rounded-xl p-6 border border-secondary/20">
            <div className="flex items-center mb-6">
              <Briefcase className="me-3 text-[#483dfb]" size={28} />
              <h3 className="text-2xl font-semibold">{t('about.resume.title')}</h3>
            </div>

            <div className="relative ps-8">
              {/* Timeline rail draws itself from the top */}
              <motion.span
                aria-hidden
                className="absolute start-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[#483dfb] via-[#483dfb]/50 to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.6, ease: EASE_OUT }}
              />
              <Stagger className="space-y-8" stagger={0.15} delay={0.2}>
                {safeResumeItems.map((item, index) => (
                  <StaggerItem key={index} className="relative">
                    <span
                      aria-hidden
                      className={cn(
                        'absolute -start-8 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-[#483dfb] bg-background',
                        index === 0 && 'bg-[#483dfb] shadow-[0_0_0_4px_rgb(72_61_251_/_0.2)]'
                      )}
                    />
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                    <h4 className="text-lg font-medium">{item.role}</h4>
                    <span className="text-sm font-medium text-[#483dfb]">{item.company}</span>
                    <p className="text-foreground/80 mt-1">{item.desc}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          {/* Objectifs */}
          <Reveal className="bg-secondary/20 rounded-xl p-6 md:p-8 border border-secondary/20">
            <div className="flex items-center mb-6">
              <Star className="me-3 text-[#483dfb]" size={28} />
              <h3 className="text-2xl font-semibold">{t('about.goals.title')}</h3>
            </div>

            <Stagger className="space-y-4" stagger={0.12} delay={0.15}>
              {(['expertise', 'innovation', 'impact'] as const).map((key) => (
                <StaggerItem key={key}>
                  <div className="card-lift bg-secondary/10 p-4 rounded-lg border border-transparent border-s-2 border-s-[#483dfb]/60">
                    <h4 className="text-lg font-medium text-[#483dfb] mb-2">{t(`about.goals.${key}.title`)}</h4>
                    <p className="text-foreground/80">{t(`about.goals.${key}.desc`)}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>

      {/* services I offer */}
      <Reveal className="mt-12 bg-secondary/20 rounded-xl p-6 md:p-8 border border-secondary/20">
        <div className="flex items-center justify-center mb-8">
          <Briefcase className="text-[#483dfb] me-3" size={38} />
          <h3 className="text-2xl font-semibold">{t('about.services.title')}</h3>
        </div>
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
          {services.map((service, index) => (
            <StaggerItem key={index} className="h-full">
              <Card className="card-lift group h-full border border-border bg-card/50 backdrop-blur-sm hover:bg-card">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-fit p-3 rounded-full bg-primary/10 mb-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
        <Element name="book" className='w-full flex justify-center mt-12'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            <Reveal>
              <h3 className="text-2xl font-bold mb-4">{t('about.book.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('about.book.desc')}
              </p>

              <Stagger className="flex flex-wrap gap-3 mb-6" stagger={0.05}>
                {bookBadges.map(({ label, icon: Icon }) => (
                  <StaggerItem as="span" key={label}>
                    <Badge variant="outline" className="bg-blue-950/30 hover:bg-blue-900/30 border-blue-800/30 transition-colors duration-300">
                      <Icon className="me-1 h-3 w-3" /> {label}
                    </Badge>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="flex flex-col sm:flex-row gap-4">
                <Popover
                  open={showCalendar}
                  onOpenChange={(open) => {
                    setShowCalendar(open);

                    // Si on attendait la fermeture pour Book Now
                    if (!open && pendingBook) {
                      handleBookNow();
                      setPendingBook(false);
                    }
                  }}
                >
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn(
                      "w-full sm:w-auto justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : t('about.book.date')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(newDate) => {
                        setDate(newDate);
                        setShowCalendar(false);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <Button
                  className="bg-[#261bfb] hover:bg-[#3e30fb] dark:hover:bg-[#3e30fb] text-white w-full sm:w-auto"
                  onClick={() => {
                    if (!date) {
                      setShowCalendar(true);
                      return;
                    }

                    if (showCalendar) {
                      setPendingBook(true);
                      setShowCalendar(false);
                    } else {
                      handleBookNow();
                    }
                  }}
                >
                  {t('about.book.button')}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="block md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
                <div className="relative bg-indigo-950/40 border border-indigo-800/30 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-medium mb-4">{t('about.book.availability')}</h4>
                  <Separator className="my-3 bg-indigo-800/30" />
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>{t('about.book.consultation')}</span>
                      <Badge>{t('about.book.consultdesc')}</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>{t('about.book.dev')}</span>
                      <Badge>{t('about.book.devdesc')}</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>{t('about.book.techreview')}</span>
                      <Badge>{t('about.book.techreviewtime')}</Badge>
                    </li>
                  </ul>
                  <Separator className="my-3 bg-blue-800/30" />
                  <p className="text-sm text-muted-foreground">
                    {t('about.book.responsetime')}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Element>
      </Reveal>
    </section>
  );
};

export default AboutSection;
