// Service page: AI automation, custom Claude Skills and team training.
import type { Service } from './types';

const service: Service = {
  slug: 'ai-automation',
  key: 'ai',
  caseStudies: ['ai-fashion-visuals-studio', 'b2b-lead-intelligence-platform', 'configurable-invoice-ocr'],
  tools: ['Claude', 'OpenAI', 'Perplexity', 'FASHN AI', 'Make'],
  modified: '2026-11-15',
  text: {
    fr: {
      title: "Automatisation par l'IA et formation des équipes",
      metaTitle: 'Automatisation IA et formation Claude au Maroc · M.A.G',
      metaDescription:
        "Intégration IA, automatisation des processus métier et développement d’applications IA sur mesure. Formation et accompagnement des équipes à Casablanca.",
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
        "heading": "Trois niveaux de prestation",
        "items": [],
        "levels": [
          {
            "heading": "AI Integration",
            "description": "Intégrer une fonctionnalité IA dans une application que votre équipe utilise déjà.",
            "items": [
              "Connexion aux API IA et aux données utiles de votre application.",
              "Rédaction assistée, génération de visuels ou qualification de prospects depuis vos écrans existants.",
              "Intégration des résultats dans le parcours de travail, avec validation humaine."
            ]
          },
          {
            "heading": "AI Automation",
            "description": "Automatiser un processus métier en reliant ses étapes, ses données et ses outils.",
            "items": [
              "Workflows avec Make et Claude pour rédiger, trier, enrichir ou qualifier.",
              "Enchaînement des tâches et transmission des résultats entre les outils.",
              "Points de validation, suivi des actions et traitement des erreurs."
            ]
          },
          {
            "heading": "AI Product Development",
            "description": "Concevoir et développer une application complète dont l’IA est une fonctionnalité centrale.",
            "items": [
              "Cadrage du besoin, interface, logique métier, données et intégration des modèles IA.",
              "Gestion des utilisateurs, permissions, quotas et circuits de validation selon le projet.",
              "Tests, mise en ligne et suivi : par exemple, un studio de visuels comme Simtis Studio ou une plateforme comme B2B Lead Intelligence."
            ]
          }
        ],
        "support": {
          "heading": "Formation et adoption, à chaque niveau",
          "text": "J’accompagne les équipes dans la prise en main : ateliers par service, Skills Claude sur mesure et guides pratiques. L’objectif est de rendre l’outil utile au quotidien, avec des personnes qui comprennent son fonctionnement et gardent la main sur les décisions."
        }
      },
      deliverables: {
        "heading": "Ce que vous recevez",
        "intro": "Les livrables sont définis selon la prestation choisie et validés ensemble avant le développement. La maintenance et les évolutions sont cadrées séparément.",
        "items": [
          "AI Integration : une fonctionnalité IA intégrée à votre application, avec les données d’entrée, les résultats et leur validation définis.",
          "AI Automation : un workflow configuré et testé, avec déclencheurs, outils connectés et points de validation.",
          "AI Product Development : une application complète avec interface, données, accès utilisateurs et fonctions IA selon le périmètre convenu.",
          "Pour la prestation retenue : documentation, formation des utilisateurs et règles d’usage et de suivi des coûts."
        ],
        "nextStep": {
          "heading": "Le premier échange",
          "text": "Nous faisons le point sur votre fonctionnement actuel, les utilisateurs, les outils et les contraintes. Nous définissons ensuite la prochaine étape adaptée : cadrage, prototype ou proposition de réalisation."
        }
      },
      process: {
        heading: 'Comment je travaille',
        steps: [
          { heading: 'Repérer ce qui en vaut la peine', text: "Avec votre équipe, je repère les tâches où l'IA fait vraiment gagner du temps, et celles où elle n'apporte rien." },
          { heading: 'Valider une première version', text: 'Selon le périmètre, je construis une première intégration, un workflow ou un prototype applicatif pour valider son utilité avec votre équipe.' },
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
        "AI integration, business process automation and custom AI application development, with team training and adoption support in Casablanca.",
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
        "heading": "Three service levels",
        "items": [],
        "levels": [
          {
            "heading": "AI Integration",
            "description": "Add an AI feature to an application your team already uses.",
            "items": [
              "Connect AI APIs to the relevant data in your application.",
              "Assist with writing, generate visuals or qualify leads within existing screens.",
              "Bring results into the workflow, with human review."
            ]
          },
          {
            "heading": "AI Automation",
            "description": "Automate a business process by connecting its steps, data and tools.",
            "items": [
              "Workflows with Make and Claude to write, sort, enrich or qualify.",
              "Coordinate tasks and pass results between tools.",
              "Approval checkpoints, activity tracking and error handling."
            ]
          },
          {
            "heading": "AI Product Development",
            "description": "Design and build a complete application with AI at the core of its functionality.",
            "items": [
              "Scope, interface, business logic, data and AI model integration.",
              "Users, permissions, quotas and review workflows tailored to the project.",
              "Testing, launch and follow-up: for example, a visual production tool like Simtis Studio or a platform like B2B Lead Intelligence."
            ]
          }
        ],
        "support": {
          "heading": "Training and adoption at every level",
          "text": "I help teams get started through department workshops, custom Claude Skills and practical guides. The goal is an everyday tool people understand and can use while staying in control of decisions."
        }
      },
      deliverables: {
        "heading": "What you receive",
        "intro": "Deliverables depend on the selected service and are agreed before development. Maintenance and further improvements are scoped separately.",
        "items": [
          "AI Integration: an AI feature added to your application, with defined inputs, outputs and review steps.",
          "AI Automation: a configured and tested workflow with triggers, connected tools and approval checkpoints.",
          "AI Product Development: a complete application with interface, data, user access and AI features within the agreed scope.",
          "For the selected service: documentation, user training, usage guidelines and cost monitoring guidance."
        ],
        "nextStep": {
          "heading": "The first conversation",
          "text": "We review your current workflow, users, tools and constraints, then identify the appropriate next step: scoping, a prototype or a delivery proposal."
        }
      },
      process: {
        heading: 'How I work',
        steps: [
          { heading: 'Finding what is worth it', text: 'With your team, I spot the tasks where AI really saves time, and the ones where it adds nothing.' },
          { heading: 'Validate a first version', text: 'Depending on the scope, I build an initial integration, workflow or application prototype to validate its usefulness with your team.' },
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
        "دمج الذكاء الاصطناعي وأتمتة عمليات الأعمال وتطوير تطبيقات مخصصة تعتمد عليه، مع تدريب الفرق ومرافقتها في الاستخدام بالدار البيضاء.",
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
        "heading": "ثلاثة مستويات من الخدمات",
        "items": [],
        "levels": [
          {
            "heading": "AI Integration — دمج الذكاء الاصطناعي",
            "description": "إضافة وظيفة ذكاء اصطناعي إلى تطبيق يستخدمه فريقكم بالفعل.",
            "items": [
              "ربط واجهات خدمات الذكاء الاصطناعي بالبيانات المناسبة في تطبيقكم.",
              "المساعدة في الكتابة أو توليد الصور أو تأهيل العملاء المحتملين من الواجهات الحالية.",
              "إدراج النتائج ضمن سير العمل مع مراجعة بشرية."
            ]
          },
          {
            "heading": "AI Automation — أتمتة العمليات",
            "description": "أتمتة عملية عمل عبر ربط مراحلها وبياناتها وأدواتها.",
            "items": [
              "مسارات عمل باستخدام Make وClaude للكتابة والفرز والإثراء والتأهيل.",
              "تنسيق المهام ونقل النتائج بين الأدوات.",
              "نقاط اعتماد وتتبع الإجراءات ومعالجة الأخطاء."
            ]
          },
          {
            "heading": "AI Product Development — تطوير تطبيقات الذكاء الاصطناعي",
            "description": "تصميم وتطوير تطبيق كامل تكون وظائف الذكاء الاصطناعي جزءًا أساسيًا منه.",
            "items": [
              "تحديد الاحتياج والواجهة ومنطق العمل والبيانات ودمج نماذج الذكاء الاصطناعي.",
              "المستخدمون والصلاحيات والحصص ومسارات المراجعة بحسب المشروع.",
              "الاختبار والإطلاق والمتابعة: مثل أداة إنتاج الصور Simtis Studio أو منصة B2B Lead Intelligence."
            ]
          }
        ],
        "support": {
          "heading": "التكوين واعتماد الأداة في كل مستوى",
          "text": "أرافق الفرق في الاستخدام عبر ورشات لكل قسم وSkills مخصصة لـ Claude وأدلة عملية. الهدف أداة مفيدة يوميًا يفهمها المستخدمون مع بقاء القرارات بأيديهم."
        }
      },
      deliverables: {
        "heading": "ما الذي تتسلمونه؟",
        "intro": "تُحدّد المخرجات حسب الخدمة المختارة ونتفق عليها قبل التطوير. ويُحدّد نطاق الصيانة والتطويرات اللاحقة بشكل منفصل.",
        "items": [
          "AI Integration: وظيفة ذكاء اصطناعي داخل تطبيقكم مع تحديد المدخلات والمخرجات وخطوات المراجعة.",
          "AI Automation: مسار عمل مضبوط ومختبر مع محفزات وأدوات مرتبطة ونقاط اعتماد.",
          "AI Product Development: تطبيق كامل بواجهة وبيانات وصلاحيات ووظائف ذكاء اصطناعي حسب النطاق المتفق عليه.",
          "للخدمة المختارة: توثيق وتدريب المستخدمين وإرشادات الاستخدام ومتابعة التكاليف."
        ],
        "nextStep": {
          "heading": "اللقاء الأول",
          "text": "نراجع سير عملكم الحالي والمستخدمين والأدوات والقيود، ثم نحدّد الخطوة المناسبة: تحديد النطاق أو نموذج أولي أو عرض تنفيذ."
        }
      },
      process: {
        heading: 'طريقتي في العمل',
        steps: [
          { heading: 'تحديد ما يستحق العناء', text: 'أحدد مع فريقكم المهام التي يوفّر فيها الذكاء الاصطناعي الوقت فعلاً، وتلك التي لا يضيف فيها شيئاً.' },
          { heading: 'اختبار نسخة أولى', text: 'بحسب النطاق، أبني تكاملاً أوليًا أو مسار عمل أو نموذجًا لتطبيق للتحقق من فائدته مع فريقكم.' },
          { heading: 'ضوابط', text: 'حصص، وموافقة بشرية، وسجل للإجراءات: الذكاء الاصطناعي يقترح، وشخص من الفريق يقرر.' },
          { heading: 'التكوين والتوثيق', text: 'أكوّن من سيستخدمون الأداة وأكتب أدلة بسيطة.' },
          { heading: 'التحسين', text: 'نعدّل الإعدادات انطلاقاً من ملاحظات الفريق.' },
        ],
      },
    },
  },
};

export default service;
