// Service page: AI automation, custom Claude Skills and team training.
import type { Service } from './types';

const service: Service = {
  slug: 'ai-automation',
  key: 'ai',
  caseStudies: ['ai-fashion-visuals-studio', 'b2b-lead-intelligence-platform'],
  tools: ['Claude', 'OpenAI', 'FASHN AI', 'Make'],
  modified: '2026-11-10',
  text: {
    fr: {
      title: "Automatisation par l'IA et formation des équipes",
      metaTitle: 'Automatisation IA et formation Claude au Maroc · M.A.G',
      metaDescription:
        'Workflows qui rédigent, trient et qualifient à votre place, Skills Claude sur mesure et formation des équipes à l’IA générative.',
      lead:
        "J'ajoute de l'IA là où elle fait vraiment gagner du temps : rédiger, trier, qualifier des prospects, produire des visuels. Et je forme les équipes à s'en servir chaque jour, en gardant toujours la main sur les décisions.",
      audience: {
        heading: 'Les problèmes que je résous',
        items: [
          'les équipes qui passent des heures sur des tâches répétitives de rédaction ou de tri ;',
          'les commerciaux qui doivent qualifier beaucoup de prospects ;',
          'les marques qui ont besoin de nombreux visuels produit ;',
          "les entreprises qui veulent adopter l'IA générative sans se perdre dans les outils.",
        ],
      },
      offer: {
        heading: 'Ce que je réalise',
        items: [
          "workflows d'automatisation avec Make et Claude ;",
          'génération de contenus et de visuels par IA, avec une étape de validation ;',
          'qualification de prospects par IA, avec une personne qui décide ;',
          'Skills Claude sur mesure, adaptées au travail de chaque service ;',
          'formation des équipes : séances communes et ateliers par service.',
        ],
      },
      process: {
        heading: 'Comment je travaille',
        steps: [
          { heading: 'Repérer ce qui en vaut la peine', text: "Avec votre équipe, je repère les tâches où l'IA fait vraiment gagner du temps, et celles où elle n'apporte rien." },
          { heading: 'Un premier workflow, vite', text: 'Je livre un premier workflow utile en quelques jours, pour le tester en conditions réelles.' },
          { heading: 'Des garde-fous', text: "Quotas, validation humaine, journal des actions : l'IA propose, une personne de l'équipe décide." },
          { heading: 'Former et documenter', text: "Je forme les personnes qui utiliseront l'outil et j'écris des guides simples." },
          { heading: 'Améliorer', text: "Nous ajustons les réglages à partir des retours de l'équipe." },
        ],
      },
    },
    en: {
      title: 'AI automation and team training',
      metaTitle: 'AI automation and Claude training in Morocco · M.A.G',
      metaDescription:
        'Workflows that write, sort and qualify for you, custom Claude Skills and generative AI training for teams.',
      lead:
        'I add AI where it really saves time: writing, sorting, qualifying leads, producing visuals. And I train teams to use it every day, while they stay in charge of every decision.',
      audience: {
        heading: 'Problems I solve',
        items: [
          'teams that spend hours on repetitive writing or sorting;',
          'sales staff who have to qualify a lot of prospects;',
          'brands that need many product visuals;',
          'companies that want to adopt generative AI without getting lost in the tools.',
        ],
      },
      offer: {
        heading: 'What I build',
        items: [
          'automation workflows with Make and Claude;',
          'AI-generated content and visuals, with an approval step;',
          'AI lead qualification, with a person making the decision;',
          'custom Claude Skills, tailored to each department’s work;',
          'team training: shared sessions and workshops per department.',
        ],
      },
      process: {
        heading: 'How I work',
        steps: [
          { heading: 'Finding what is worth it', text: 'With your team, I spot the tasks where AI really saves time, and the ones where it adds nothing.' },
          { heading: 'A first workflow, fast', text: 'I deliver a first useful workflow within a few days, so it can be tested in real conditions.' },
          { heading: 'Guardrails', text: 'Quotas, human approval, an activity log: the AI suggests, someone on the team decides.' },
          { heading: 'Training and documentation', text: 'I train the people who will use the tool and write simple guides.' },
          { heading: 'Improving', text: 'We fine-tune the settings based on the team’s feedback.' },
        ],
      },
    },
    ar: {
      title: 'الأتمتة بالذكاء الاصطناعي وتكوين الفرق',
      metaTitle: 'الأتمتة بالذكاء الاصطناعي وتكوين Claude في المغرب · M.A.G',
      metaDescription:
        'مسارات عمل تكتب وتفرز وتؤهل نيابة عنكم، وSkills مخصصة لـ Claude، وتكوين الفرق على الذكاء الاصطناعي التوليدي.',
      lead:
        'أضيف الذكاء الاصطناعي حيث يوفّر الوقت فعلاً: الكتابة والفرز وتأهيل العملاء المحتملين وإنتاج الصور. وأكوّن الفرق على استخدامه كل يوم، مع بقاء القرار دائماً بأيديها.',
      audience: {
        heading: 'المشكلات التي أحلّها',
        items: [
          'الفرق التي تقضي ساعات في مهام متكررة من الكتابة أو الفرز؛',
          'مستشارو المبيعات الذين عليهم تأهيل عدد كبير من العملاء المحتملين؛',
          'العلامات التي تحتاج إلى صور منتجات كثيرة؛',
          'الشركات التي تريد اعتماد الذكاء الاصطناعي التوليدي دون أن تضيع بين الأدوات.',
        ],
      },
      offer: {
        heading: 'ما أنجزه',
        items: [
          'مسارات عمل مؤتمتة عبر Make وClaude؛',
          'محتوى وصور يولّدها الذكاء الاصطناعي، مع خطوة موافقة؛',
          'تأهيل العملاء المحتملين بالذكاء الاصطناعي، مع شخص يتخذ القرار؛',
          'Skills مخصصة لـ Claude تلائم عمل كل قسم؛',
          'تكوين الفرق: جلسات مشتركة وورشات لكل قسم.',
        ],
      },
      process: {
        heading: 'طريقتي في العمل',
        steps: [
          { heading: 'تحديد ما يستحق العناء', text: 'أحدد مع فريقكم المهام التي يوفّر فيها الذكاء الاصطناعي الوقت فعلاً، وتلك التي لا يضيف فيها شيئاً.' },
          { heading: 'مسار عمل أول، بسرعة', text: 'أسلّم مسار عمل أولاً مفيداً في بضعة أيام، لاختباره في ظروف حقيقية.' },
          { heading: 'ضوابط', text: 'حصص، وموافقة بشرية، وسجل للإجراءات: الذكاء الاصطناعي يقترح، وشخص من الفريق يقرر.' },
          { heading: 'التكوين والتوثيق', text: 'أكوّن من سيستخدمون الأداة وأكتب أدلة بسيطة.' },
          { heading: 'التحسين', text: 'نعدّل الإعدادات انطلاقاً من ملاحظات الفريق.' },
        ],
      },
    },
  },
};

export default service;
