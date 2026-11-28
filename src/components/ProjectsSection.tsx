import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useNavigationType, Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRightLeft, Box, Cpu, FileScan, Globe, GraduationCap, Handshake, Landmark, ShoppingBag, ShoppingCart, Stethoscope, Store, Target, Wand2 } from 'lucide-react';
import { SectionHeading } from './motion';
import { caseStudyForProject } from '@/content/caseStudies';
import { caseStudyPath } from '@/i18n/paths';
import { SHOW_PROJECT_EVENT } from '@/lib/events';
import { FEATURED_PROJECTS, PROJECT_FILTERS, projectMatchesFilter, type ProjectFilter } from '@/content/projectCategories';
import { readProjectNavigation, saveProjectNavigation } from '@/lib/projectNavigation';

type Project = {
  id: number;
  icon: JSX.Element;
  link?: string;
  demo?: string;
  images: string[]; // tableau pour les url des images
  captions?: string[]; // tableau pour les légendes des images
  /** Presentation video, shown instead of the screenshot stack. */
  video?: {
    src: string;
    poster: string;
    cardPosterSrcSet?: string;
    cardPosterSizes?: string;
    portrait?: boolean;
  };
};

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigationType = useNavigationType();
  const navigate = useNavigate();
  const saved = useRef(readProjectNavigation());
  const [filter, setFilter] = useState<ProjectFilter>(saved.current?.filter ?? 'featured');
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (navigationType !== 'POP' && location.hash !== '#projects') return;
    const id = saved.current?.projectId;
    if (!id || (navigationType === 'POP' && location.key === 'default' && location.hash !== '#projects')) return;
    const frame = requestAnimationFrame(() => {
      const card = sectionRef.current?.querySelector<HTMLElement>(`[data-project-id="${id}"]`);
      card?.scrollIntoView({ block: 'center', behavior: 'instant' });
      card?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [navigationType, location.key, location.hash]);

  useEffect(() => {
    const onShow = (event: Event) => {
      const entry = caseStudyForProject((event as CustomEvent<{ id: number }>).detail?.id);
      if (entry) navigate(caseStudyPath(i18n.language, entry.slug));
    };
    window.addEventListener(SHOW_PROJECT_EVENT, onShow);
    return () => window.removeEventListener(SHOW_PROJECT_EVENT, onShow);
  }, [navigate, i18n.language]);

  const projects: Project[] = [
    {
      id: 6,
      icon: <Target className="h-8 w-8 text-[#483dfb]" />,
      images: [],
      video: {
        src: '/videos/projects/lead-intelligence.mp4',
        poster: '/videos/projects/lead-intelligence-poster.webp',
        cardPosterSrcSet: '/videos/projects/lead-intelligence-poster-400.webp 400w, /videos/projects/lead-intelligence-poster-800.webp 800w, /videos/projects/lead-intelligence-poster.webp 1280w',
        cardPosterSizes: '(min-width: 768px) 50vw, 100vw',
      }
    },
    {
      id: 11,
      icon: <Wand2 className="h-8 w-8 text-[#483dfb]" />,
      images: [],
      video: {
        src: '/videos/projects/ai-fashion-studio.mp4',
        poster: '/videos/projects/ai-fashion-studio-poster.webp',
        cardPosterSrcSet: '/videos/projects/ai-fashion-studio-poster-300.webp 300w, /videos/projects/ai-fashion-studio-poster-600.webp 600w, /videos/projects/ai-fashion-studio-poster.webp 720w',
        cardPosterSizes: '300px',
        portrait: true,
      }
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
      images: [],
      video: { src: '/videos/projects/prestashop-redesign.mp4', poster: '/videos/projects/prestashop-redesign-poster.webp' }
    },
    {
      id: 13,
      icon: <ArrowRightLeft className="h-8 w-8 text-[#483dfb]" />,
      images: [],
      video: {
        src: '/videos/projects/migration-ecommerce.mp4',
        poster: '/videos/projects/migration-ecommerce-poster.webp',
        cardPosterSrcSet: '/videos/projects/migration-ecommerce-poster-400.webp 400w, /videos/projects/migration-ecommerce-poster-800.webp 800w, /videos/projects/migration-ecommerce-poster.webp 1280w',
        cardPosterSizes: '(min-width: 768px) 50vw, 100vw',
      }
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

  const filteredProjects = filter === 'featured'
    ? FEATURED_PROJECTS.flatMap((id) => projects.filter((project) => project.id === id))
    : projects.filter((project) => projectMatchesFilter(project.id, filter));

  return (
    <section ref={sectionRef} id="projects" className="section-container">
      <SectionHeading title={t('projects.featuredTitle')} subtitle={t('projects.featuredSubtitle')} />
      <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label={t('projects.filterLabel')}>
        {PROJECT_FILTERS.map((category) => (
          <button key={category} type="button" aria-pressed={filter === category} aria-controls="filtered-projects"
            onClick={() => { setFilter(category); saveProjectNavigation({ filter: category }); }}
            className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#483dfb] focus-visible:ring-offset-2 focus-visible:ring-offset-background ${filter === category ? 'border-[#483dfb] bg-[#483dfb] text-white' : 'border-border bg-background hover:bg-secondary'}`}>
            {t(`projects.filters.${category}`)}
            <span className="ms-2 tabular-nums opacity-75" aria-hidden>{projects.filter((project) => projectMatchesFilter(project.id, category)).length}</span>
          </button>
        ))}
      </div>
      <p className="mb-6 text-sm text-muted-foreground" role="status" aria-live="polite">{t('projects.filterCount', { count: filteredProjects.length })}</p>
      <div id="filtered-projects" className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => {
          const study = caseStudyForProject(project.id);
          if (!study) return null;
          const summaryKey = `projects.featuredSummaries.${project.id}`;
          const summary = i18n.exists(summaryKey) ? t(summaryKey) : t(`projects.items.${project.id}.description`);
          return (
            <RouterLink key={project.id} data-project-id={project.id} to={caseStudyPath(i18n.language, study.slug)}
              onClick={() => saveProjectNavigation({ filter, projectId: project.id })}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-secondary/20 transition-[border-color,box-shadow] hover:border-[#483dfb]/60 hover:shadow-lg hover:shadow-[#483dfb]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#483dfb] focus-visible:ring-offset-4 focus-visible:ring-offset-background">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-[#483dfb]/15 to-[#9b87f5]/5">
                {project.video ? <img src={project.video.poster} srcSet={project.video.cardPosterSrcSet} sizes={project.video.cardPosterSizes} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.02]" /> :
                  <div className="flex flex-col items-center gap-4 p-6 text-center"><div className="rounded-2xl bg-background/80 p-5" aria-hidden>{project.icon}</div><span className="text-xl font-semibold">{t(`projects.items.${project.id}.technologies.0`)}</span></div>}
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold leading-snug">{t(`projects.items.${project.id}.title`)}</h3>
                <p className="mb-5 line-clamp-3 text-base leading-relaxed text-muted-foreground">{summary}</p>
                <span className="mt-auto border-t border-border/60 pt-4 text-sm font-medium text-[#483dfb] dark:text-[#9b87f5]">{t('caseStudyPage.readFull')}</span>
              </div>
            </RouterLink>
          );
        })}
      </div>
    </section>
  );
};
export default ProjectsSection;
