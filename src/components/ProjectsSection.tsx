import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Globe, ShoppingBag, User, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

type Project = {
  id: number;
  icon: JSX.Element;
  link?: string;
  demo?: string;
  images: string[]; // tableau pour les url des images
  captions?: string[]; // tableau pour les légendes des images
};

const ProjectsSection = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const openModal = (images: string[]) => {
    setSelectedImages(images);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImages([]);
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
      id: 1,
      icon: <Cpu className="h-8 w-8 text-[#483dfb]" />,
      link: "https://github.com/M-A-Gharr/visualforce-ai-doc-generator",
      demo: "https://github.com/M-A-Gharr/visualforce-ai-doc-generator",
      images: []
    },
    {
      id: 2,
      icon: <ShoppingBag className="h-8 w-8 text-[#483dfb]" />,
      link: "#",
      demo: "#",
      images: ["/images/bakerysaas/Screenshot1.png", "/images/bakerysaas/Screenshot2.png", "/images/bakerysaas/Screenshot3.png", "/images/bakerysaas/Screenshot4.png", "/images/bakerysaas/Screenshot5.png", "/images/bakerysaas/Screenshot6.png"],
      captions: [t("projects.items.2.captions.0"), t("projects.items.2.captions.1"), t("projects.items.2.captions.2"), t("projects.items.2.captions.3"), t("projects.items.2.captions.4"), t("projects.items.2.captions.5")]
    },
    {
      id: 3,
      icon: <Globe className="h-8 w-8 text-[#483dfb]" />,
      link: "#",
      demo: "#",
      images: ["/images/bakerysite/Screenshot1.png", "/images/bakerysite/Screenshot2.png", "/images/bakerysite/Screenshot3.png", "/images/bakerysite/Screenshot4.png"],
      captions: [t("projects.items.3.captions.0"), t("projects.items.3.captions.1"), t("projects.items.3.captions.2"), t("projects.items.3.captions.3")]
    },
    {
      id: 4,
      icon: <User className="h-8 w-8 text-[#483dfb]" />,
      link: "https://github.com/M-A-Gharr/portfoliomag",
      demo: "#",
      images: ["/images/portfolio/Screenshot1.png", "/images/portfolio/Screenshot2.png", "/images/portfolio/Screenshot3.png", "/images/portfolio/Screenshot4.png"],
      captions: [t("projects.items.4.captions.0"), t("projects.items.4.captions.1"), t("projects.items.4.captions.2"), t("projects.items.4.captions.3")]
    },
    {
      id: 5,
      icon: <ShoppingBag className="h-8 w-8 text-[#483dfb]" />,
      link: "#",
      demo: "#",
      images: []
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-center">{t('projects.title')}</h2>
      <p className="section-subtitle text-center max-w-3xl mx-auto">
        {t('projects.subtitle')}
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group bg-secondary/20 border border-secondary/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#483dfb]/40 hover:shadow-lg hover:shadow-[#483dfb]/10 animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="mr-4 p-2 bg-secondary/30 rounded-md">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{t(`projects.items.${project.id}.title`)}</h3>
                </div>
                <div className="flex space-x-1">
                  {project.link && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Code className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-foreground/80 mb-4">{t(`projects.items.${project.id}.description`)}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground/70 mb-2">{t('projects.technologies')}</h4>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(t(`projects.items.${project.id}.technologies`, { returnObjects: true })) &&
                    (t(`projects.items.${project.id}.technologies`, { returnObjects: true }) as string[]).map((tech, i) => (
                      <Badge key={tech} variant="outline" className="bg-secondary/30 hover:bg-secondary/50 hover:border-[#483dfb]/40 hover:shadow-lg hover:shadow-[#483dfb]/10 hover:rounded-lg hover:scale-105 transition-all duration-\[2000m\s] ease-in-out">
                        {tech}
                      </Badge>
                    ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground/70 mb-2">{t('projects.features')}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                  {Array.isArray(t(`projects.items.${project.id}.features`, { returnObjects: true })) &&
                    (t(`projects.items.${project.id}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                </ul>
              </div>
              {/* Swiper Slideshow */}
              {project.images.length > 0 && (
                <div className="mt-6 cursor-pointer" onClick={() => openModal(project.images)}>
                  <Swiper
                    modules={[Navigation, Keyboard]}
                    navigation
                    keyboard={{ enabled: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    className="rounded-lg overflow-hidden"
                    tabIndex={0}
                  >
                    {project.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img} alt={`Project ${project.id} Image ${i + 1}`}
                          className="w-full h-64 object-cover transform scale-90 group-hover:scale-100 group-hover:brightness-110 transition-all duration-\[2000ms\] ease-in-out" />

                        {project.captions && project.captions[i] && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 text-center w-fit max-w-full rounded-md">
                            {project.captions[i]}
                          </div>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Popup Modal for slideshow */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-white dark:bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 text-gray-600 hover:text-black text-3xl font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
              >
                ×
              </button>

              <Swiper
                modules={[Navigation, Keyboard]}
                navigation
                keyboard={{ enabled: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-lg overflow-hidden"
                tabIndex={0}
              >
                {selectedImages.map((img, i) => {
                  // Find the project that corresponds to the current image
                  const project = projects.find(p => p.images.includes(img));

                  // Get the caption for the image
                  const caption = project ? project.captions?.[project.images.indexOf(img)] : null;

                  return (
                    <SwiperSlide key={i}>
                      <div className="relative">
                        {/* Image */}
                        <img
                          src={img}
                          alt={`Selected Image ${i + 1}`}
                          className="w-full h-[500px] object-contain"
                        />

                        {/* Caption (overlay or below image) */}
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
