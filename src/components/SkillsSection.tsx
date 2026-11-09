
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Layout, Lightbulb, ShoppingCart, Bot } from 'lucide-react';
import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import SkillConstellation from './SkillConstellation';
import { EASE_OUT, Reveal, SectionHeading, Stagger, StaggerItem } from './motion';

type Level = 'expert' | 'advanced' | 'intermediate';

type Skill = {
  id: string;
  name: string;
  level: Level;
};

// Filled segments out of 3 for each level.
const LEVEL_STEPS: Record<Level, number> = { intermediate: 1, advanced: 2, expert: 3 };

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

/** One skill row: its level as a word and a 3-segment meter that fills as it scrolls into view. */
const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const steps = LEVEL_STEPS[skill.level];
  const delay = 0.15 + index * 0.07;
  const label = t(`skills.levels.${skill.level}`);

  return (
    <div ref={ref} className="flex items-center justify-between gap-4">
      <span className="min-w-0 text-sm font-medium">{skill.name}</span>
      <div className="flex shrink-0 items-center gap-3" role="img" aria-label={`${skill.name}: ${label}`}>
        <motion.span
          aria-hidden
          className={`text-xs font-medium ${skill.level === 'expert' ? 'text-[#483dfb] dark:text-[#9b87f5]' : 'text-muted-foreground'}`}
          initial={{ opacity: 0, x: -6 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: reduce ? 0 : 0.5, ease: EASE_OUT, delay: reduce ? 0 : delay + 0.35 }}
        >
          {label}
        </motion.span>
        <span aria-hidden className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="relative h-2 w-5 overflow-hidden rounded-full bg-secondary/60 sm:w-6">
              {i < steps && (
                <motion.span
                  className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-[#483dfb] to-[#9b87f5] rtl:origin-right"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: inView ? 1 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.45, ease: EASE_OUT, delay: reduce ? 0 : delay + i * 0.14 }}
                />
              )}
            </span>
          ))}
        </span>
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
        { id: 'js', name: 'JavaScript', level: 'expert' },
        { id: 'ts', name: 'TypeScript', level: 'advanced' },
        { id: 'python', name: 'Python', level: 'advanced' },
        { id: 'php', name: 'PHP', level: 'advanced' },
        { id: 'csharp', name: 'C#', level: 'advanced' },
        { id: 'java', name: 'Java', level: 'advanced' },
        { id: 'htmlcss', name: 'HTML / CSS', level: 'expert' },
      ]
    },
    {
      id: 'cat-frontend',
      name: t('skills.frontend'),
      icon: <Layout className="h-6 w-6 text-[#483dfb]" aria-label='Frontend Icon'/>,
      skills: [
        { id: 'react', name: 'React.js', level: 'expert' },
        { id: 'vite', name: 'Vite', level: 'advanced' },
        { id: 'tailwind', name: 'Tailwind CSS', level: 'expert' },
        { id: 'responsive', name: t('skills.responsive'), level: 'expert' },
        { id: 'i18n', name: 'i18n', level: 'expert' },
        { id: 'git', name: 'Git & GitHub', level: 'expert' },
      ]
    },
    {
      id: 'cat-backend',
      name: t('skills.backend'),
      icon: <Database className="h-6 w-6 text-[#483dfb]" aria-label='Backend Icon'/>,
      skills: [
        { id: 'node', name: 'Node.js', level: 'advanced' },
        { id: 'aspnet', name: 'ASP.NET', level: 'advanced' },
        { id: 'postgres', name: 'PostgreSQL', level: 'advanced' },
        { id: 'mssql', name: 'MSSQL', level: 'advanced' },
        { id: 'mysql', name: 'MySQL', level: 'advanced' },
      ]
    },
    {
      id: 'cat-ecommerce',
      name: t('skills.ecommerce'),
      icon: <ShoppingCart className="h-6 w-6 text-[#483dfb]" aria-label='E-commerce Icon'/>,
      skills: [
        { id: 'prestashop', name: 'PrestaShop', level: 'expert' },
        { id: 'wordpress', name: 'WordPress', level: 'advanced' },
        { id: 'shopify', name: 'Shopify', level: 'advanced' },
        { id: 'seo', name: t('skills.seo'), level: 'advanced' },
      ]
    },
    {
      id: 'cat-ai',
      name: t('skills.ai'),
      icon: <Bot className="h-6 w-6 text-[#483dfb]" aria-label='AI Icon'/>,
      skills: [
        { id: 'claude', name: 'Claude (Skills)', level: 'expert' },
        { id: 'make', name: 'Make', level: 'advanced' },
        { id: 'workflow', name: t('skills.workflow'), level: 'advanced' },
        { id: 'contentgen', name: t('skills.contentGen'), level: 'advanced' },
        { id: 'aitraining', name: t('skills.aiTraining'), level: 'expert' },
      ]
    },
    {
      id: 'cat-professional',
      name: t('skills.professional'),
      icon: <Lightbulb className="h-6 w-6 text-[#483dfb]" />,
      skills: [
        { id: 'crm', name: t('skills.crm'), level: 'advanced' },
        { id: 'leadintel', name: t('skills.leadIntel'), level: 'advanced' },
        { id: 'processauto', name: t('skills.processAutomation'), level: 'advanced' },
        { id: 'restapi', name: t('skills.restApi'), level: 'advanced' },
        { id: 'curiosity', name: t('skills.curiosity'), level: 'expert' },
        { id: 'multilingual', name: t('skills.multilingual'), level: 'expert' },
      ]
    },
  ];

  return (
    <>
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

                <div className="space-y-4">
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
