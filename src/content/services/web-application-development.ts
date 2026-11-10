// Service page: custom web applications (internal tools, CRMs, business platforms).
import type { Service } from './types';

const service: Service = {
  slug: 'web-application-development',
  key: 'webapps',
  caseStudies: ['b2b-lead-intelligence-platform', 'export-showcase-site-b2b-crm'],
  modified: '2026-11-10',
  text: {
    fr: {
      title: "Développement d'applications web sur mesure",
      metaTitle: "Développeur d'applications web à Casablanca · M.A.G",
      metaDescription:
        'Développeur full-stack à Casablanca : outils internes, CRM et plateformes métier en React et Node.js, reliés à vos données et pensés pour votre équipe.',
      lead:
        "Je conçois des applications web qui épousent la façon dont votre équipe travaille vraiment : outils internes, CRM, portails clients, plateformes de prospection. Basé à Casablanca, je travaille avec des entreprises au Maroc et à l'étranger, sur place ou à distance.",
      audience: {
        heading: 'Pour qui ?',
        items: [
          'les équipes commerciales qui suivent leurs prospects dans des tableurs ou des boîtes mail ;',
          "les entreprises qui ont besoin d'un outil interne que le marché ne propose pas ;",
          'les groupes à plusieurs magasins ou activités, qui veulent une vue commune ;',
          'les projets qui doivent fonctionner en plusieurs langues, arabe compris.',
        ],
      },
      offer: {
        heading: 'Ce que je réalise',
        items: [
          'applications web et plateformes métier en React, Node.js et TypeScript ;',
          'CRM et outils de prospection, avec pipeline, relances et rapports ;',
          'intégration à vos données et à vos outils existants : API, fichiers, ERP, services externes ;',
          'automatisation des tâches répétitives de votre équipe ;',
          "interfaces en français, en anglais et en arabe, de droite à gauche quand il le faut.",
        ],
      },
      process: {
        heading: 'Comment je travaille',
        steps: [
          { heading: 'Comprendre votre travail', text: "J'observe d'abord comment votre équipe travaille aujourd'hui, et ce qui la ralentit. L'outil suit ce travail, pas l'inverse." },
          { heading: 'Un périmètre clair et un devis', text: 'Je vous propose un périmètre écrit, découpé en étapes, avec un devis et un délai.' },
          { heading: 'Des livraisons régulières', text: "Je développe par étapes courtes, avec une démonstration à chaque fois, pour ajuster avant qu'il ne soit trop tard." },
          { heading: 'Tests, mise en ligne et formation', text: "L'outil est testé avant sa mise en ligne. J'écris les guides et je forme les personnes qui l'utiliseront." },
          { heading: 'Maintenance', text: 'Après la livraison, je peux assurer la maintenance et les évolutions.' },
        ],
      },
      faq: {
        heading: 'Questions fréquentes',
        items: [
          { q: 'Combien coûte une application web ?', a: 'Chaque projet est chiffré selon son périmètre. Décrivez-moi votre besoin : je vous réponds dans la journée et je reviens vers vous avec un devis.' },
          { q: 'En combien de temps ?', a: "Une application web ou une plateforme métier prend généralement de 1 à 3 semaines, selon son ampleur. Les projets plus importants sont livrés par étapes." },
          { q: 'Travaillez-vous à distance ?', a: "Oui. Je suis basé à Casablanca et je travaille avec des clients au Maroc et à l'étranger, à distance ou sur place." },
        ],
      },
    },
    en: {
      title: 'Custom web application development',
      metaTitle: 'Web application developer in Casablanca · M.A.G',
      metaDescription:
        'Full-stack developer in Casablanca: internal tools, CRMs and business platforms in React and Node.js, connected to your data and built around your team.',
      lead:
        'I build web applications around the way your team actually works: internal tools, CRMs, client portals, prospecting platforms. Based in Casablanca, I work with companies in Morocco and abroad, on site or remotely.',
      audience: {
        heading: 'Who it is for',
        items: [
          'sales teams that track prospects in spreadsheets or inboxes;',
          'companies that need an internal tool nothing on the market provides;',
          'groups with several stores or business units that want one shared view;',
          'projects that must work in several languages, Arabic included.',
        ],
      },
      offer: {
        heading: 'What I build',
        items: [
          'web applications and business platforms in React, Node.js and TypeScript;',
          'CRMs and prospecting tools, with a pipeline, follow-ups and reports;',
          'integration with your existing data and tools: APIs, files, ERPs, external services;',
          'automation of your team’s repetitive tasks;',
          'interfaces in French, English and Arabic, right to left where needed.',
        ],
      },
      process: {
        heading: 'How I work',
        steps: [
          { heading: 'Understanding your work', text: 'I first look at how your team works today and what slows it down. The tool follows that work, not the other way round.' },
          { heading: 'A clear scope and a quote', text: 'I send you a written scope, split into stages, with a quote and a timeline.' },
          { heading: 'Regular deliveries', text: 'I build in short stages with a demo each time, so we can adjust before it is too late.' },
          { heading: 'Testing, go-live and training', text: 'The tool is tested before it goes live. I write the guides and train the people who will use it.' },
          { heading: 'Maintenance', text: 'After delivery, I can look after maintenance and new features.' },
        ],
      },
      faq: {
        heading: 'Frequently asked questions',
        items: [
          { q: 'How much does a web application cost?', a: 'Each project is quoted on its scope. Tell me what you need: I reply within a day and come back to you with a quote.' },
          { q: 'How long does it take?', a: 'A web application or business platform usually takes 1 to 3 weeks, depending on its size. Larger projects are delivered in stages.' },
          { q: 'Do you work remotely?', a: 'Yes. I am based in Casablanca and work with clients in Morocco and abroad, remotely or on site.' },
        ],
      },
    },
    ar: {
      title: 'تطوير تطبيقات ويب مخصصة',
      metaTitle: 'مطوّر تطبيقات ويب في الدار البيضاء · M.A.G',
      metaDescription:
        'مطوّر full-stack في الدار البيضاء: أدوات داخلية وأنظمة CRM ومنصات أعمال بـ React وNode.js، مرتبطة ببياناتكم ومصممة حول فريقكم.',
      lead:
        'أصمّم تطبيقات ويب تلائم طريقة عمل فريقكم الفعلية: أدوات داخلية، وأنظمة CRM، وبوابات للعملاء، ومنصات للتنقيب. أعمل من الدار البيضاء مع شركات في المغرب والخارج، حضورياً أو عن بُعد.',
      audience: {
        heading: 'لمن هذه الخدمة؟',
        items: [
          'فرق المبيعات التي تتابع عملاءها المحتملين في الجداول أو البريد الإلكتروني؛',
          'الشركات التي تحتاج أداة داخلية لا يوفرها السوق؛',
          'المجموعات ذات المتاجر أو الأنشطة المتعددة التي تريد رؤية مشتركة؛',
          'المشاريع التي يجب أن تعمل بعدة لغات، منها العربية.',
        ],
      },
      offer: {
        heading: 'ما أنجزه',
        items: [
          'تطبيقات ويب ومنصات أعمال بـ React وNode.js وTypeScript؛',
          'أنظمة CRM وأدوات تنقيب، مع مسار مبيعات ومتابعات وتقارير؛',
          'ربط ببياناتكم وأدواتكم الحالية: واجهات برمجية، وملفات، وأنظمة ERP، وخدمات خارجية؛',
          'أتمتة المهام المتكررة لفريقكم؛',
          'واجهات بالفرنسية والإنجليزية والعربية، من اليمين إلى اليسار عند الحاجة.',
        ],
      },
      process: {
        heading: 'طريقتي في العمل',
        steps: [
          { heading: 'فهم عملكم', text: 'أبدأ بملاحظة طريقة عمل فريقكم اليوم وما يبطئه. الأداة تتبع هذا العمل، لا العكس.' },
          { heading: 'نطاق واضح وعرض سعر', text: 'أقترح عليكم نطاقاً مكتوباً مقسماً إلى مراحل، مع عرض سعر ومدة.' },
          { heading: 'تسليمات منتظمة', text: 'أطوّر على مراحل قصيرة، مع عرض توضيحي في كل مرة، للتعديل قبل فوات الأوان.' },
          { heading: 'الاختبار والإطلاق والتكوين', text: 'تُختبر الأداة قبل إطلاقها. وأكتب الأدلة وأكوّن من سيستخدمونها.' },
          { heading: 'الصيانة', text: 'بعد التسليم، يمكنني التكفل بالصيانة والتطويرات.' },
        ],
      },
      faq: {
        heading: 'أسئلة شائعة',
        items: [
          { q: 'كم تبلغ تكلفة تطبيق ويب؟', a: 'يُسعَّر كل مشروع حسب نطاقه. صِفوا لي حاجتكم: أردّ في اليوم نفسه وأعود إليكم بعرض سعر.' },
          { q: 'كم من الوقت يستغرق ذلك؟', a: 'يستغرق تطبيق ويب أو منصة أعمال عادة من أسبوع إلى ثلاثة أسابيع حسب حجمها. وتُسلَّم المشاريع الأكبر على مراحل.' },
          { q: 'هل تعمل عن بُعد؟', a: 'نعم. أعمل من الدار البيضاء مع عملاء في المغرب والخارج، عن بُعد أو حضورياً.' },
        ],
      },
    },
  },
};

export default service;
