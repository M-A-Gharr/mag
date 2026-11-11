import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowRightLeft, BookOpenCheck, Box, ChevronLeft, ChevronRight, Code, Cpu, FileScan, Globe, GraduationCap, Handshake, Landmark, ShoppingBag, ShoppingCart, Stethoscope, Store, Target, Wand2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import SwipeCardStack from './SwipeCardStack';
import { BlockTitle, EASE_OUT, Reveal, SectionHeading, Stagger, StaggerItem } from './motion';
import type { CrumpleCarouselHandle } from './CrumpleCardCarousel';
import { useProjectCovers, type CoverInput } from './projectCovers';
import ProjectVideo, { type ProjectVideoHandle } from './ProjectVideo';
import { scroller } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { caseStudyForProject } from '@/content/caseStudies';
import { caseStudyPath } from '@/i18n/paths';
import { SHOW_PROJECT_EVENT } from '@/lib/events';

// three.js is only downloaded when the projects section renders.
const CrumpleCardCarousel = lazy(() => import('./CrumpleCardCarousel'));
const CaseStudies = lazy(() => import('./CaseStudies'));

const STAGE_HEIGHT = 'h-[320px] sm:h-[400px] md:h-[440px] lg:h-[520px]';

const isRealLink = (href?: string): href is string => !!href && href !== '#';

const asList = (value: unknown): string[] => (Array.isArray(value) ? (value as string[]) : []);

type Project = {
  id: number;
  icon: JSX.Element;
  link?: string;
  demo?: string;
  images: string[]; // tableau pour les url des images
  captions?: string[]; // tableau pour les légendes des images
  /** Presentation video, shown instead of the screenshot stack. */
  video?: { src: string; poster: string; portrait?: boolean };
};

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [topCards, setTopCards] = useState<Record<number, number>>({});
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [webglOk, setWebglOk] = useState(true);
  const carouselRef = useRef<CrumpleCarouselHandle>(null);

  const go = (step: 1 | -1) => {
    setInteracted(true);
    if (webglOk) {
      if (step === 1) carouselRef.current?.next();
      else carouselRef.current?.prev();
    } else {
      setActive((i) => (i + step + projects.length) % projects.length);
    }
  };
  const goTo = (index: number) => {
    setInteracted(true);
    if (webglOk) carouselRef.current?.goTo(index);
    else setActive(index);
  };
  const handleStageKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'Enter' && projects[active].video) {
      e.preventDefault();
      playVideo();
    } else if (e.key === 'Enter' && projects[active].images.length > 0) {
      e.preventDefault();
      openModal(projects[active], 0);
    }
  };

  const detailsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<ProjectVideoHandle>(null);
  // Clicking the centred card of a project with a video brings the player into view and starts it.
  const playVideo = () => {
    setInteracted(true);
    detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    videoRef.current?.play();
  };

  const openModal = (project: Project, imageIndex: number) => {
    setSelectedProject(project);
    setStartIndex(imageIndex);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const projects: Project[] = [
    {
      id: 6,
      icon: <Target className="h-8 w-8 text-[#483dfb]" />,
      images: [],
      video: { src: '/videos/projects/lead-intelligence.mp4', poster: '/videos/projects/lead-intelligence-poster.webp' }
    },
    {
      id: 11,
      icon: <Wand2 className="h-8 w-8 text-[#483dfb]" />,
      images: [],
      video: { src: '/videos/projects/ai-fashion-studio.mp4', poster: '/videos/projects/ai-fashion-studio-poster.webp', portrait: true }
    },
    {
      id: 2,
      icon: <ShoppingBag className="h-8 w-8 text-[#483dfb]" />,
      video: { src: '/videos/projects/bakery-saas.mp4', poster: '/videos/projects/bakery-saas-poster.webp' },
      link: "#",
      demo: "#",
      images: ["/images/bakerysaas/login.webp", "/images/bakerysaas/stock-reception.webp", "/images/bakerysaas/recipes.webp", "/images/bakerysaas/products.webp", "/images/bakerysaas/pos.webp", "/images/bakerysaas/inventory.webp"],
      captions: [t("projects.items.2.captions.0"), t("projects.items.2.captions.1"), t("projects.items.2.captions.2"), t("projects.items.2.captions.3"), t("projects.items.2.captions.4"), t("projects.items.2.captions.5")]
    },
    {
      id: 12,
      icon: <Handshake className="h-8 w-8 text-[#483dfb]" />,
      images: [],
      video: { src: '/videos/projects/export-showroom-crm.mp4', poster: '/videos/projects/export-showroom-crm-poster.webp' }
    },
    {
      id: 8,
      icon: <ShoppingCart className="h-8 w-8 text-[#483dfb]" />,
      images: []
    },
    {
      id: 13,
      icon: <ArrowRightLeft className="h-8 w-8 text-[#483dfb]" />,
      images: [],
      video: { src: '/videos/projects/migration-ecommerce.mp4', poster: '/videos/projects/migration-ecommerce-poster.webp' }
    },
    {
      id: 10,
      icon: <Box className="h-8 w-8 text-[#483dfb]" />,
      images: [],
      video: { src: '/videos/projects/vr-showroom.mp4', poster: '/videos/projects/vr-showroom-poster.webp' }
    },
    {
      id: 15,
      icon: <Wand2 className="h-8 w-8 text-[#483dfb]" />,
      images: [],
      video: { src: '/videos/projects/linkedin-post-generator.mp4', poster: '/videos/projects/linkedin-post-generator-poster.webp' }
    },
    {
      id: 14,
      icon: <Globe className="h-8 w-8 text-[#483dfb]" />,
      images: [],
      video: { src: '/videos/projects/wordpress-store-redesign.mp4', poster: '/videos/projects/wordpress-store-redesign-poster.webp' }
    },
    {
      id: 1,
      icon: <Cpu className="h-8 w-8 text-[#483dfb]" />,
      link: "https://github.com/M-A-Gharr/visualforce-ai-doc-generator-ts",
      demo: "https://github.com/M-A-Gharr/visualforce-ai-doc-generator-ts",
      images: []
    },
    {
      id: 7,
      icon: <GraduationCap className="h-8 w-8 text-[#483dfb]" />,
      images: []
    },
    {
      id: 9,
      icon: <Store className="h-8 w-8 text-[#483dfb]" />,
      images: []
    },
    {
      id: 16,
      icon: <FileScan className="h-8 w-8 text-[#483dfb]" />,
      images: []
    },
    {
      id: 17,
      icon: <Stethoscope className="h-8 w-8 text-[#483dfb]" />,
      images: []
    },
    {
      id: 18,
      icon: <Landmark className="h-8 w-8 text-[#483dfb]" />,
      images: []
    }
  ];

  const current = projects[active] ?? projects[0];

  const coverInputs: CoverInput[] = projects.map((project) => {
    const technologies = asList(t(`projects.items.${project.id}.technologies`, { returnObjects: true }));
    return {
      title: t(`projects.items.${project.id}.title`),
      category: technologies[0] ?? '',
      stack: technologies.slice(1),
      image: project.video?.poster ?? project.images[0],
    };
  });
  // The 3D carousel (three.js) and its cover drawings only start when the visitor gets close
  // to this section, so they never compete with the first paint of the page.
  const sectionRef = useRef<HTMLElement>(null);
  const near = useInView(sectionRef, { once: true, margin: '800px 0px 800px 0px' });
  const covers = useProjectCovers(near ? coverInputs : [], i18n.language);

  // "See the project" in a case study: scroll up here and bring that project to the front.
  const goToRef = useRef(goTo);
  goToRef.current = goTo;
  useEffect(() => {
    const onShow = (e: Event) => {
      const id = (e as CustomEvent<{ id: number }>).detail?.id;
      const i = projects.findIndex((p) => p.id === id);
      if (i < 0) return;
      scroller.scrollTo('projects', { smooth: 'easeInOutQuart', duration: 900, offset: -70 });
      goToRef.current(i);
    };
    window.addEventListener(SHOW_PROJECT_EVENT, onShow);
    return () => window.removeEventListener(SHOW_PROJECT_EVENT, onShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-container">
      <SectionHeading title={t('projects.title')} subtitle={t('projects.subtitle')} />

      <Reveal y={40}>
        <div
          onPointerEnter={(e) => e.pointerType === 'mouse' && setHovering(true)}
          onPointerLeave={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
        >
          {/* Stage */}
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={t('projects.title')}
            tabIndex={0}
            onKeyDown={handleStageKey}
            className="relative -mx-4 sm:mx-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#483dfb]"
          >
            {!near ? (
              <div className={STAGE_HEIGHT} />
            ) : webglOk ? (
              <Suspense fallback={<div className={STAGE_HEIGHT} />}>
                <CrumpleCardCarousel
                  ref={carouselRef}
                  images={covers}
                  itemWidth={620}
                  itemHeight={490}
                  speed={15}
                  hold={2500}
                  paused={hovering || interacted || isOpen}
                  onIndexChange={setActive}
                  onInteract={() => setInteracted(true)}
                  onCardClick={(i) => {
                    const project = projects[i];
                    if (project.video) playVideo();
                    else if (project.images.length > 0) openModal(project, 0);
                  }}
                  onUnsupported={() => setWebglOk(false)}
                  className={`w-full ${STAGE_HEIGHT}`}
                />
              </Suspense>
            ) : (
              // Flat fallback when WebGL is unavailable.
              <div className={`relative w-full ${STAGE_HEIGHT} flex items-center justify-center`}>
                <AnimatePresence mode="wait">
                  {covers[active] && (
                    <motion.img
                      key={active}
                      src={covers[active]}
                      alt=""
                      className="h-[80%] max-w-[86%] rounded-xl object-contain shadow-2xl"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5, ease: EASE_OUT }}
                    />
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => go(-1)}
              aria-label={t('projects.prev')}
              className="h-11 w-11 shrink-0 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-x-0.5 hover:border-[#483dfb]/60 hover:text-[#483dfb]"
            >
              <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
            </Button>

            <div className="flex flex-col items-center gap-2">
              <span className="text-sm tabular-nums text-muted-foreground" aria-live="polite">
                {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-1.5">
                {projects.map((project, i) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={t('projects.goTo', { n: i + 1, title: t(`projects.items.${project.id}.title`) })}
                    aria-current={i === active}
                    className="group flex h-6 items-center justify-center px-0.5"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        i === active ? 'w-6 bg-[#483dfb]' : 'w-1.5 bg-foreground/25 group-hover:bg-foreground/50'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => go(1)}
              aria-label={t('projects.next')}
              className="h-11 w-11 shrink-0 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-0.5 hover:border-[#483dfb]/60 hover:text-[#483dfb]"
            >
              <ChevronRight className="h-5 w-5 rtl:rotate-180" />
            </Button>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">{t('projects.carouselHint')}</p>

          {/* Details of the centred project */}
          <div ref={detailsRef} className="mt-8 md:mt-10 scroll-mt-24">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={current.id}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.55, ease: EASE_OUT }}
                className={`grid gap-8 rounded-2xl border border-secondary/20 bg-secondary/20 p-6 md:p-8 lg:p-10 ${
                  current.images.length > 0 || current.video ? 'lg:grid-cols-[1.15fr_1fr] lg:items-center' : ''
                }`}
              >
                <div className="min-w-0">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="shrink-0 rounded-xl bg-[#483dfb]/10 p-3">{current.icon}</div>
                      <div className="min-w-0">
                        <span className="text-xs font-medium uppercase tracking-widest text-[#483dfb]">
                          {String(active + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                          {t(`projects.items.${current.id}.title`)}
                        </h3>
                      </div>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      {isRealLink(current.link) && (
                        <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                          <a href={current.link} target="_blank" rel="noopener noreferrer" aria-label={t('projects.code')}>
                            <Code className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {isRealLink(current.demo) && current.demo !== current.link && (
                        <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                          <a href={current.demo} target="_blank" rel="noopener noreferrer" aria-label={t('projects.demo')}>
                            <Globe className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <p className="mb-6 text-foreground/80 md:text-lg">{t(`projects.items.${current.id}.description`)}</p>
                  {caseStudyForProject(current.id) && (
                    <RouterLink
                      to={caseStudyPath(i18n.language, caseStudyForProject(current.id)!.slug)}
                      className="group -mt-2 mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#483dfb] underline-offset-4 hover:underline dark:text-[#9b87f5]"
                    >
                      {t('caseStudyPage.readFull')}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" aria-hidden />
                    </RouterLink>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-sm font-medium text-foreground/70">{t('projects.technologies')}</h4>
                      <Stagger className="flex flex-wrap gap-2" stagger={0.04} delay={0.15}>
                        {asList(t(`projects.items.${current.id}.technologies`, { returnObjects: true })).map((tech, i) => (
                          // Position key: some technology names are translated (see ContactSection).
                          <StaggerItem as="span" key={i}>
                            <Badge variant="outline" className="bg-secondary/30 transition-colors duration-300 hover:bg-[#483dfb]/10 hover:border-[#483dfb]/40">
                              {tech}
                            </Badge>
                          </StaggerItem>
                        ))}
                      </Stagger>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-medium text-foreground/70">{t('projects.features')}</h4>
                      <Stagger as="ul" className="space-y-1.5 text-sm text-foreground/80" stagger={0.06} delay={0.2}>
                        {asList(t(`projects.items.${current.id}.features`, { returnObjects: true })).map((feature, i) => (
                          <StaggerItem as="li" key={i} className="flex gap-2">
                            <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#483dfb]" />
                            <span>{feature}</span>
                          </StaggerItem>
                        ))}
                      </Stagger>
                    </div>
                  </div>
                </div>

                {current.video ? (
                  <div className="min-w-0">
                    <ProjectVideo
                      ref={videoRef}
                      src={current.video.src}
                      poster={current.video.poster}
                      portrait={current.video.portrait}
                      label={t('projects.videoOf', { title: t(`projects.items.${current.id}.title`) })}
                      playLabel={t('projects.playVideo')}
                    />
                  </div>
                ) : current.images.length > 0 && (
                  <div className="min-w-0">
                    <SwipeCardStack
                      images={current.images.map((src, i) => ({
                        src,
                        alt: current.captions?.[i] ?? `${t(`projects.items.${current.id}.title`)} ${i + 1}`,
                      }))}
                      ariaLabel={t('projects.viewScreenshots')}
                      onCardClick={(i) => openModal(current, i)}
                      onTopCardChange={(i) => setTopCards((prev) => (prev[current.id] === i ? prev : { ...prev, [current.id]: i }))}
                    />
                    <p className="mt-2 min-h-[2.5rem] text-center text-sm text-foreground/80" aria-live="polite">
                      {current.captions?.[topCards[current.id] ?? 0]}
                    </p>
                    <p className="text-center text-xs text-muted-foreground">{t('projects.swipeHint')}</p>
                  </div>
                )}
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>

      {/* Case studies of these projects, right under them */}
      <Reveal className="panel mx-auto mt-10 max-w-3xl p-6 sm:p-8 md:mt-14">
        <BlockTitle icon={BookOpenCheck} title={t('bonus.caseStudies.title')} subtitle={t('projects.caseStudiesSubtitle')} />
        <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-secondary/20" />}>
          <CaseStudies />
        </Suspense>
      </Reveal>
      {/* Popup Modal for slideshow */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40 p-4"
          >
            <motion.div
              initial={{ scale: 0.94, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.97, y: 12, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white dark:bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                aria-label={t('nav.close')}
                className="absolute top-4 right-4 z-50 text-gray-600 hover:text-black text-3xl font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
              >
                ×
              </button>

              <Swiper
                modules={[Navigation, Keyboard]}
                navigation
                keyboard={{ enabled: true }}
                initialSlide={startIndex}
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-lg overflow-hidden"
                tabIndex={0}
              >
                {selectedProject?.images.map((img, i) => {
                  const caption = selectedProject.captions?.[i];

                  return (
                    <SwiperSlide key={i}>
                      <div className="relative">
                        <img
                          src={img}
                          alt={caption ?? `${t(`projects.items.${selectedProject.id}.title`)} ${i + 1}`}
                          className="w-full h-[70vh] max-h-[500px] object-contain"
                        />
                        {caption && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 text-center w-fit max-w-full rounded-md">
                            {caption}
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ProjectsSection;
