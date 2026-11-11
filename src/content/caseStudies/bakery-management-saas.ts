import type { CaseStudy } from './types';

const study: CaseStudy = {
  "slug": "bakery-management-saas",
  "projectId": 2,
  "published": "2026-11-11",
  "modified": "2026-11-11",
  "text": {
    "en": {
      "title": "Bakery SaaS: bringing stock, recipes and sales into one application",
      "metaTitle": "Bakery management SaaS · Case study",
      "metaDescription": "A bakery management application combining stock, recipes, orders and point of sale, with dashboards and an interface in English, French and Arabic.",
      "sector": "Bakery management · Full-stack application",
      "lead": "A bakery’s working day moves between ingredients, production and the counter. I built a management application that brings stock, recipes, orders and sales into one workspace, with views for desktop, tablet and mobile.",
      "brief": {
        "mission": "Design and development of a bakery management application",
        "result": "Stock, recipes, orders and sales in a shared workspace"
      },
      "sections": [
        {
          "heading": "The context",
          "paragraphs": [
            "Bakery management involves several connected activities: receiving ingredients, preparing recipes, managing products and serving customers. Each screen needs to make sense on its own, while remaining part of the same working day.",
            "The project brings these activities together in a React application, with Node.js and PostgreSQL behind it. The aim is to make operational information easier to consult and daily actions easier to follow."
          ]
        },
        {
          "heading": "The challenge",
          "paragraphs": [
            "The challenge was to organise a broad set of business functions without making routine work feel complicated. The application needed to support:"
          ],
          "list": [
            "stock reception and a clear view of available inventory;",
            "recipes linked to the ingredients they use;",
            "product management, orders and point-of-sale operations;",
            "readable dashboards and navigation across devices and languages."
          ]
        },
        {
          "heading": "What I did",
          "steps": [
            {
              "heading": "Starting with stock and ingredients",
              "paragraphs": [
                "I built views for receiving deliveries and consulting inventory, including incoming stock and alerts. This gives stock management its own place in the application instead of treating it as a secondary part of the sales screen."
              ]
            },
            {
              "heading": "Connecting recipes, products and sales",
              "paragraphs": [
                "Recipes are linked to their ingredients, alongside product management, customer records and order handling. The point-of-sale view covers the counter workflow, while online orders are also part of the platform.",
                "Keeping these functions within the same application makes their relationship visible: ingredients support recipes, recipes define what is prepared, and products are then managed and sold."
              ]
            },
            {
              "heading": "Making the daily figures readable",
              "paragraphs": [
                "The dashboard presents sales figures and product information, with dedicated views for stock and inventory. The interface gives users both an overview and a route into the details, rather than putting every operation on one screen."
              ]
            },
            {
              "heading": "Adapting the interface to the working environment",
              "paragraphs": [
                "The presentation demonstrates desktop, tablet and mobile layouts, light and dark themes, and English, French and Arabic interfaces. The Arabic version includes right-to-left layouts; the mobile views adapt navigation and controls to the smaller screen."
              ]
            }
          ]
        }
      ],
      "result": "A shared workspace for the bakery’s daily operations, with readable dashboards and interfaces adapted to different devices and languages."
    },
    "fr": {
      "title": "Bakery SaaS : réunir les stocks, les recettes et les ventes dans une seule application",
      "metaTitle": "SaaS de gestion de boulangerie · Étude de cas",
      "metaDescription": "Une application de gestion de boulangerie : stocks, recettes, commandes, caisse et tableaux de bord, avec une interface en français, anglais et arabe.",
      "sector": "Gestion de boulangerie · Application full-stack",
      "lead": "La journée d’une boulangerie se partage entre les matières premières, la préparation et le comptoir. J’ai développé une application qui réunit les stocks, les recettes, les commandes et les ventes dans un même espace, sur ordinateur, tablette et mobile.",
      "brief": {
        "mission": "Conception et développement d’une application de gestion de boulangerie",
        "result": "Les stocks, les recettes, les commandes et les ventes dans un espace commun"
      },
      "sections": [
        {
          "heading": "Le contexte",
          "paragraphs": [
            "Gérer une boulangerie implique plusieurs activités liées : réceptionner les ingrédients, préparer les recettes, gérer les produits et servir les clients. Chaque écran doit être compréhensible seul, tout en s’inscrivant dans la même journée de travail.",
            "Le projet rassemble ces activités dans une application React, avec Node.js et PostgreSQL. L’objectif est de faciliter la consultation des informations de gestion et de rendre les actions quotidiennes plus faciles à suivre."
          ]
        },
        {
          "heading": "Le défi",
          "paragraphs": [
            "Le défi était de couvrir plusieurs fonctions métier sans compliquer les tâches courantes. L’application devait permettre de :"
          ],
          "list": [
            "réceptionner les marchandises et consulter les stocks disponibles ;",
            "relier les recettes aux ingrédients qui les composent ;",
            "gérer les produits, les commandes et les opérations de caisse ;",
            "consulter des tableaux de bord lisibles sur plusieurs appareils et dans plusieurs langues."
          ]
        },
        {
          "heading": "Ce que j’ai fait",
          "steps": [
            {
              "heading": "Partir des stocks et des ingrédients",
              "paragraphs": [
                "J’ai créé des vues pour réceptionner les livraisons et consulter l’inventaire, avec les stocks entrants et les alertes. La gestion des stocks dispose ainsi de son propre espace, au lieu d’être reléguée au second plan dans un écran de vente."
              ]
            },
            {
              "heading": "Relier les recettes, les produits et les ventes",
              "paragraphs": [
                "Les recettes sont liées à leurs ingrédients, aux côtés de la gestion des produits, des fiches clients et des commandes. La caisse couvre le travail au comptoir, et les commandes en ligne font également partie de la plateforme.",
                "Réunir ces fonctions dans une même application rend leur articulation visible : les ingrédients entrent dans les recettes, les recettes définissent les préparations, et les produits sont ensuite gérés et vendus."
              ]
            },
            {
              "heading": "Rendre les chiffres du quotidien lisibles",
              "paragraphs": [
                "Le tableau de bord présente les ventes et les informations sur les produits, avec des vues dédiées aux stocks et à l’inventaire. L’interface propose une vue d’ensemble puis un accès au détail, sans concentrer toutes les opérations sur un seul écran."
              ]
            },
            {
              "heading": "Adapter l’interface aux conditions de travail",
              "paragraphs": [
                "La présentation montre des interfaces pour ordinateur, tablette et mobile, des thèmes clair et sombre, ainsi que des versions française, anglaise et arabe. La version arabe adopte une mise en page de droite à gauche ; sur mobile, la navigation et les commandes s’adaptent à l’espace disponible."
              ]
            }
          ]
        }
      ],
      "result": "Un espace commun pour les opérations quotidiennes de la boulangerie, avec des tableaux de bord lisibles et des interfaces adaptées aux appareils et aux langues."
    },
    "ar": {
      "title": "Bakery SaaS: إدارة المخزون والوصفات والمبيعات في تطبيق واحد",
      "metaTitle": "تطبيق لإدارة المخابز · دراسة حالة",
      "metaDescription": "تطبيق لإدارة المخابز يجمع المخزون والوصفات والطلبات ونقطة البيع ولوحات المتابعة، بواجهة عربية وفرنسية وإنجليزية.",
      "sector": "إدارة المخابز · تطوير تطبيق متكامل",
      "lead": "يتوزّع يوم العمل في المخبز بين المواد الأولية والتحضير وخدمة الزبائن. طوّرت تطبيقًا يجمع المخزون والوصفات والطلبات والمبيعات في مساحة عمل واحدة، بواجهات للحاسوب والجهاز اللوحي والهاتف.",
      "brief": {
        "mission": "تصميم وتطوير تطبيق لإدارة المخابز",
        "result": "المخزون والوصفات والطلبات والمبيعات في مساحة عمل مشتركة"
      },
      "sections": [
        {
          "heading": "السياق",
          "paragraphs": [
            "تشمل إدارة المخبز أنشطة مترابطة: استلام المكوّنات، وتحضير الوصفات، وإدارة المنتجات، وخدمة الزبائن. يجب أن تكون كل شاشة واضحة بذاتها، وأن تنسجم في الوقت نفسه مع بقية مهام اليوم.",
            "يجمع المشروع هذه الأنشطة في تطبيق مبني باستخدام React، مع Node.js وPostgreSQL. والهدف هو تسهيل الاطّلاع على معلومات التشغيل ومتابعة الإجراءات اليومية."
          ]
        },
        {
          "heading": "التحدي",
          "paragraphs": [
            "تمثّل التحدّي في تغطية وظائف إدارية متعدّدة دون تعقيد المهام المتكرّرة. كان على التطبيق أن يتيح:"
          ],
          "list": [
            "استلام البضائع والاطّلاع بوضوح على المخزون المتاح؛",
            "ربط الوصفات بالمكوّنات المستخدمة فيها؛",
            "إدارة المنتجات والطلبات وعمليات نقطة البيع؛",
            "قراءة لوحات المتابعة والتنقّل بسهولة بين الأجهزة واللغات."
          ]
        },
        {
          "heading": "ما قمت به",
          "steps": [
            {
              "heading": "الانطلاق من المخزون والمكوّنات",
              "paragraphs": [
                "أنشأت واجهات لاستلام التوريدات ومراجعة المخزون، تتضمّن الكميات الواردة والتنبيهات. وبذلك أصبحت إدارة المخزون جزءًا واضحًا من التطبيق، بدل أن تكون وظيفة ثانوية ضمن شاشة المبيعات."
              ]
            },
            {
              "heading": "ربط الوصفات والمنتجات بالمبيعات",
              "paragraphs": [
                "ترتبط الوصفات بمكوّناتها، إلى جانب إدارة المنتجات وسجلات العملاء والطلبات. وتغطّي واجهة نقطة البيع العمل عند الصندوق، كما تشمل المنصة الطلبات عبر الإنترنت.",
                "يوضّح جمع هذه الوظائف في تطبيق واحد العلاقة بينها: تدخل المكوّنات في الوصفات، وتحدّد الوصفات ما يُحضَّر، ثم تُدار المنتجات وتُباع."
              ]
            },
            {
              "heading": "عرض أرقام العمل اليومية بوضوح",
              "paragraphs": [
                "تعرض لوحة المتابعة أرقام المبيعات ومعلومات المنتجات، مع واجهات مخصّصة للمخزون والجرد. وتوفّر الواجهة نظرة عامة تليها إمكانية الوصول إلى التفاصيل، بدل جمع جميع العمليات في شاشة واحدة."
              ]
            },
            {
              "heading": "تكييف الواجهة مع بيئة العمل",
              "paragraphs": [
                "يعرض الفيديو واجهات للحاسوب والجهاز اللوحي والهاتف، ومظهرين فاتحًا وداكنًا، ونسخًا بالعربية والفرنسية والإنجليزية. وتستخدم النسخة العربية تخطيطًا من اليمين إلى اليسار، بينما تتكيّف عناصر التحكّم والتنقّل مع مساحة شاشة الهاتف."
              ]
            }
          ]
        }
      ],
      "result": "مساحة عمل مشتركة لعمليات المخبز اليومية، مع لوحات متابعة واضحة وواجهات ملائمة للأجهزة واللغات المختلفة."
    }
  }
};

export default study;
