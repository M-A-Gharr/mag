
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Layout, Lightbulb, ShoppingCart, Bot } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import SkillConstellation from './SkillConstellation';
import { EASE_OUT, Reveal, SectionHeading, Stagger, StaggerItem } from './motion';

type Skill = {
  id: string;
  name: string;
  level: number;
};

type SkillCategory = {
  id: string;
  name: string;
  icon: JSX.Element;
  skills: Skill[];
};

// Links between related skills across categories, drawn in the constellation.
const CROSS_LINKS: [string, string][] = [
  ['js', 'react'], ['ts', 'react'], ['js', 'node'], ['ts', 'node'], ['react', 'vite'], ['react', 'tailwind'],
  ['php', 'prestashop'], ['php', 'wordpress'], ['csharp', 'aspnet'], ['aspnet', 'mssql'], ['node', 'postgres'],
  ['node', 'restapi'], ['python', 'workflow'], ['claude', 'contentgen'], ['workflow', 'processauto'],
  ['crm', 'restapi'], ['leadintel', 'react'], ['seo', 'multilingual'], ['i18n', 'multilingual'],
  ['shopify', 'seo'], ['contentgen', 'seo'], ['aitraining', 'multilingual'],
];

/** One skill row: the bar fills as it scrolls into view while the percentage counts up. */
const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const delay = 0.2 + index * 0.08;

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCount(skill.level);
      setDone(true);
      return;
    }
    const controls = animate(0, skill.level, {
      duration: 1.4,
      delay,
      ease: EASE_OUT,
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className={`text-xs tabular-nums transition-colors duration-500 ${done ? 'text-[#483dfb]' : 'text-muted-foreground'}`}>
          {count}%
        </span>
      </div>
      <div
        className="relative h-2 rounded-full bg-secondary/50"
        role="progressbar"
        aria-label={skill.name}
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#483dfb] to-[#9b87f5] origin-left rtl:origin-right"
          style={{ width: `${skill.level}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          transition={{ duration: 1.4, ease: EASE_OUT, delay: inView ? delay : 0 }}
        />
        {/* Glow that pulses once at the tip when the bar lands */}
        {done && !reduce && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(155,135,245,0.9)]"
            style={{ insetInlineStart: `calc(${skill.level}% - 6px)` }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, 1.3, 1] }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />
        )}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { t } = useTranslation();

  const skillCategories: SkillCategory[] = [
    {
      id: 'cat-languages',
      name: t('skills.languages'),
      icon: <Code className="h-6 w-6 text-[#483dfb]" aria-label='Languages Icon'/>,
      skills: [
        { id: 'js', name: 'JavaScript', level: 90 },
        { id: 'ts', name: 'TypeScript', level: 85 },
        { id: 'python', name: 'Python', level: 75 },
        { id: 'php', name: 'PHP', level: 80 },
        { id: 'csharp', name: 'C#', level: 70 },
        { id: 'java', name: 'Java', level: 70 },
        { id: 'htmlcss', name: 'HTML / CSS', level: 95 },
      ]
    },
    {
      id: 'cat-frontend',
      name: t('skills.frontend'),
      icon: <Layout className="h-6 w-6 text-[#483dfb]" aria-label='Frontend Icon'/>,
      skills: [
        { id: 'react', name: 'React.js', level: 90 },
        { id: 'vite', name: 'Vite', level: 85 },
        { id: 'tailwind', name: 'Tailwind CSS', level: 90 },
        { id: 'responsive', name: t('skills.responsive'), level: 90 },
        { id: 'i18n', name: 'i18n', level: 95 },
        { id: 'git', name: 'Git & GitHub', level: 90 },
      ]
    },
    {
      id: 'cat-backend',
      name: t('skills.backend'),
      icon: <Database className="h-6 w-6 text-[#483dfb]" aria-label='Backend Icon'/>,
      skills: [
        { id: 'node', name: 'Node.js', level: 85 },
        { id: 'aspnet', name: 'ASP.NET', level: 70 },
        { id: 'postgres', name: 'PostgreSQL', level: 85 },
        { id: 'mssql', name: 'MSSQL', level: 75 },
        { id: 'mysql', name: 'MySQL', level: 85 },
      ]
    },
    {
      id: 'cat-ecommerce',
      name: t('skills.ecommerce'),
      icon: <ShoppingCart className="h-6 w-6 text-[#483dfb]" aria-label='E-commerce Icon'/>,
      skills: [
        { id: 'prestashop', name: 'PrestaShop', level: 85 },
        { id: 'wordpress', name: 'WordPress', level: 85 },
        { id: 'shopify', name: 'Shopify', level: 85 },
        { id: 'seo', name: t('skills.seo'), level: 85 },
      ]
    },
    {
      id: 'cat-ai',
      name: t('skills.ai'),
      icon: <Bot className="h-6 w-6 text-[#483dfb]" aria-label='AI Icon'/>,
      skills: [
        { id: 'claude', name: 'Claude (Skills)', level: 90 },
        { id: 'make', name: 'Make', level: 85 },
        { id: 'workflow', name: t('skills.workflow'), level: 85 },
        { id: 'contentgen', name: t('skills.contentGen'), level: 85 },
        { id: 'aitraining', name: t('skills.aiTraining'), level: 90 },
      ]
    },
    {
      id: 'cat-professional',
      name: t('skills.professional'),
      icon: <Lightbulb className="h-6 w-6 text-[#483dfb]" />,
      skills: [
        { id: 'crm', name: t('skills.crm'), level: 85 },
        { id: 'leadintel', name: t('skills.leadIntel'), level: 85 },
        { id: 'processauto', name: t('skills.processAutomation'), level: 85 },
        { id: 'restapi', name: t('skills.restApi'), level: 85 },
        { id: 'curiosity', name: t('skills.curiosity'), level: 100 },
        { id: 'multilingual', name: t('skills.multilingual'), level: 95 },
      ]
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('skills.meta.title')}</title>
        <meta name="description" content={t('skills.meta.description')} />
        <meta property="og:title" content={t('skills.meta.title')} />
        <meta property="og:description" content={t('skills.meta.description')} />
        <meta property="og:image" content="https://maminegh.com/images/profile/magprofile.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://maminegh.com/skills" />
      </Helmet>
      <section id="skills" className="section-container">
        <SectionHeading title={t('skills.title')} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <Reveal key={category.name} delay={(index % 2) * 0.12} className="h-full">
              <div className="card-lift group h-full bg-secondary/20 rounded-xl p-6 border border-secondary/20">
                <div className="flex items-center mb-6">
                  <span className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:-rotate-6">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-semibold ms-3">{category.name}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <SkillBar key={skill.id} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tablet and up: interactive constellation */}
        <Reveal className="mt-16 hidden md:block">
          <SkillConstellation
            centerLabel="M.A.G"
            categories={skillCategories.map(({ id, name, skills }) => ({ id, name, skills: skills.map(({ id, name }) => ({ id, name })) }))}
            crossLinks={CROSS_LINKS}
            className="h-[560px] lg:h-[620px]"
          />
          <p className="mt-4 text-center text-sm text-muted-foreground">{t('skills.constellationHint')}</p>
        </Reveal>

        {/* Phones: the same skills as a badge cloud */}
        <Stagger className="mt-12 flex flex-wrap justify-center gap-3 md:hidden" stagger={0.03}>
          {skillCategories.flatMap((cat) => cat.skills).map((skill) => (
            <StaggerItem as="span" key={skill.id}>
              <Badge
                variant="outline"
                className="bg-secondary/30 text-foreground px-3 py-1 text-sm transition-colors duration-300 hover:bg-[#483dfb]/10 hover:border-[#483dfb]/40"
              >
                {skill.name}
              </Badge>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>

  );
};

export default SkillsSection;
