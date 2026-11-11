import type { CaseStudy } from './types';

const study: CaseStudy = {
  "slug": "vr-property-showroom-crm",
  "projectId": 10,
  "published": "2026-11-11",
  "modified": "2026-11-11",
  "text": {
    "en": {
      "title": "VR Showroom: connecting virtual property visits to sales follow-up",
      "metaTitle": "VR real estate showroom and CRM · Case study",
      "metaDescription": "A personal real estate project combining interactive plans, 3D models, 360° visits and a CRM with lead scoring, assignment and sales follow-up.",
      "sector": "Real estate · Interactive 3D · Personal project",
      "lead": "I built VR Showroom as a personal project for real estate developers: a place where buyers can explore a property online, and where the sales team can follow the interest those visits generate.",
      "brief": {
        "mission": "Design and development of a virtual property showroom with an integrated CRM",
        "result": "Property exploration and lead follow-up in the same application"
      },
      "sections": [
        {
          "heading": "The context",
          "paragraphs": [
            "A property catalogue can show images and specifications, but understanding a layout takes more exploration. At the same time, a sales team needs a way to organise enquiries and decide which prospects to follow up first.",
            "This personal project explores both sides of that journey. It combines a catalogue and interactive property views with a CRM, using React, Three.js and WebGL for the web experience."
          ]
        },
        {
          "heading": "The challenge",
          "paragraphs": [
            "The challenge was to make the visual experience useful within a wider sales workflow. The project needed to:"
          ],
          "list": [
            "connect project listings, unit types and floor plans;",
            "offer ways to inspect a property in 3D and through 360° panoramas;",
            "keep visit information connected to lead qualification and follow-up;",
            "present both individual opportunities and broader viewing trends."
          ]
        },
        {
          "heading": "What I did",
          "steps": [
            {
              "heading": "Starting with the catalogue and floor plan",
              "paragraphs": [
                "The catalogue presents real estate projects, renderings and unit types. An interactive floor plan follows the selected surface area, giving the visitor a bridge between the listing information and the space they want to explore."
              ]
            },
            {
              "heading": "Offering complementary ways to visit",
              "paragraphs": [
                "The 3D model can be rotated, rooms can be opened individually, and their dimensions can be consulted. Walkthroughs and 360° panoramas provide additional ways to explore the property.",
                "These views serve different questions: the floor plan helps explain the layout, while the model and panoramic views help the visitor understand the spaces."
              ]
            },
            {
              "heading": "Connecting visits to a CRM",
              "paragraphs": [
                "Visit information is recorded and scored within the application’s CRM. Leads can be assigned and followed through a pipeline, connecting the showroom experience to the next sales action.",
                "The score supports prioritisation; it does not establish a visitor’s buying intent with certainty. The sales team still needs to qualify each opportunity."
              ]
            },
            {
              "heading": "Making the journey visible through analytics",
              "paragraphs": [
                "Analytics cover visit paths, the lead funnel and the most viewed properties. These views complement individual lead records by showing how visitors move through the showroom and which properties attract attention."
              ]
            }
          ]
        }
      ],
      "result": "A personal project bringing the property showroom and CRM into one application, from the first visit to lead follow-up."
    },
    "fr": {
      "title": "VR Showroom : relier les visites immobilières virtuelles au suivi commercial",
      "metaTitle": "Showroom immobilier 3D et CRM · Étude de cas",
      "metaDescription": "Un projet personnel associant plans interactifs, modèles 3D, visites à 360° et CRM avec scoring, attribution des prospects et suivi commercial.",
      "sector": "Immobilier · 3D interactive · Projet personnel",
      "lead": "J’ai conçu VR Showroom comme un projet personnel destiné aux promoteurs immobiliers : un espace où les acheteurs explorent un bien en ligne et où l’équipe commerciale peut suivre l’intérêt suscité par ces visites.",
      "brief": {
        "mission": "Conception et développement d’un showroom immobilier virtuel avec CRM intégré",
        "result": "L’exploration des biens et le suivi des prospects dans une même application"
      },
      "sections": [
        {
          "heading": "Le contexte",
          "paragraphs": [
            "Un catalogue immobilier présente des images et des caractéristiques, mais comprendre un agencement demande davantage d’exploration. De son côté, l’équipe commerciale doit organiser les demandes et déterminer quels prospects recontacter en priorité.",
            "Ce projet personnel explore les deux aspects du parcours. Il associe un catalogue et des vues immobilières interactives à un CRM, avec React, Three.js et WebGL pour l’expérience web."
          ]
        },
        {
          "heading": "Le défi",
          "paragraphs": [
            "Le défi était de donner une utilité commerciale à l’expérience visuelle. Le projet devait permettre de :"
          ],
          "list": [
            "relier les programmes immobiliers, les typologies de logements et les plans ;",
            "examiner un bien en 3D et à travers des panoramas à 360° ;",
            "relier les informations de visite à la qualification et au suivi des prospects ;",
            "consulter les opportunités individuelles et les tendances de consultation."
          ]
        },
        {
          "heading": "Ce que j’ai fait",
          "steps": [
            {
              "heading": "Partir du catalogue et du plan",
              "paragraphs": [
                "Le catalogue présente les programmes immobiliers, leurs rendus et les typologies de logements. Un plan interactif suit la surface sélectionnée, pour relier les informations de l’annonce à l’espace que le visiteur souhaite explorer."
              ]
            },
            {
              "heading": "Proposer plusieurs façons de visiter",
              "paragraphs": [
                "Le modèle 3D peut être tourné, chaque pièce peut être ouverte individuellement et ses dimensions consultées. La visite intérieure et les panoramas à 360° proposent d’autres façons de découvrir le bien.",
                "Ces vues répondent à des questions différentes : le plan aide à comprendre l’agencement, tandis que le modèle et les panoramas permettent de mieux appréhender les espaces."
              ]
            },
            {
              "heading": "Relier les visites au CRM",
              "paragraphs": [
                "Les informations de visite sont enregistrées et évaluées dans le CRM de l’application. Les prospects peuvent être attribués puis suivis dans un pipeline, pour relier l’expérience du showroom à la prochaine action commerciale.",
                "Le score aide à définir les priorités ; il ne prouve pas à lui seul l’intention d’achat. L’équipe commerciale doit toujours qualifier chaque opportunité."
              ]
            },
            {
              "heading": "Rendre le parcours visible dans les statistiques",
              "paragraphs": [
                "Les statistiques couvrent les parcours de visite, l’entonnoir de conversion et les biens les plus consultés. Elles complètent les fiches individuelles en montrant comment les visiteurs parcourent le showroom et quels biens retiennent leur attention."
              ]
            }
          ]
        }
      ],
      "result": "Un projet personnel qui réunit le showroom immobilier et le CRM dans une application, de la première visite au suivi des prospects."
    },
    "ar": {
      "title": "VR Showroom: ربط الزيارات العقارية الافتراضية بالمتابعة التجارية",
      "metaTitle": "معرض عقاري ثلاثي الأبعاد مع CRM · دراسة حالة",
      "metaDescription": "مشروع شخصي يجمع المخططات التفاعلية والنماذج ثلاثية الأبعاد وزيارات 360° مع نظام لتقييم العملاء المحتملين وإسنادهم ومتابعتهم.",
      "sector": "العقارات · عرض ثلاثي الأبعاد · مشروع شخصي",
      "lead": "طوّرت VR Showroom كمشروع شخصي موجّه للمطوّرين العقاريين: مساحة يستكشف فيها المشترون العقار عبر الإنترنت، ويتابع فيها فريق المبيعات الاهتمام الناتج عن هذه الزيارات.",
      "brief": {
        "mission": "تصميم وتطوير معرض عقاري افتراضي مع نظام مدمج لإدارة علاقات العملاء",
        "result": "استكشاف العقارات ومتابعة العملاء المحتملين في تطبيق واحد"
      },
      "sections": [
        {
          "heading": "السياق",
          "paragraphs": [
            "يعرض الكتالوج العقاري الصور والمواصفات، لكن فهم توزيع المساحات يحتاج إلى استكشاف أوسع. وفي المقابل، يحتاج فريق المبيعات إلى تنظيم الاستفسارات وتحديد العملاء المحتملين الذين تستحق متابعتهم الأولوية.",
            "يستكشف هذا المشروع الشخصي جانبي هذا المسار. فهو يجمع الكتالوج والعرض التفاعلي للعقارات مع نظام لإدارة علاقات العملاء، باستخدام React وThree.js وWebGL لتجربة الويب."
          ]
        },
        {
          "heading": "التحدي",
          "paragraphs": [
            "كان التحدّي هو جعل التجربة البصرية جزءًا مفيدًا من مسار المبيعات. لذلك كان على المشروع أن يتيح:"
          ],
          "list": [
            "الربط بين المشاريع العقارية وأنواع الوحدات ومخططاتها؛",
            "استكشاف العقار بنماذج ثلاثية الأبعاد وصور بانورامية بزاوية 360°؛",
            "ربط معلومات الزيارة بتقييم العملاء المحتملين ومتابعتهم؛",
            "عرض الفرص الفردية والاتجاهات العامة لتصفّح العقارات."
          ]
        },
        {
          "heading": "ما قمت به",
          "steps": [
            {
              "heading": "البدء بالكتالوج والمخطط",
              "paragraphs": [
                "يعرض الكتالوج المشاريع العقارية وصورها وأنواع الوحدات. ويتغيّر المخطط التفاعلي بحسب المساحة المختارة، ليربط معلومات العقار بالحيّز الذي يريد الزائر استكشافه."
              ]
            },
            {
              "heading": "تقديم طرق متكاملة للزيارة",
              "paragraphs": [
                "يمكن تدوير النموذج ثلاثي الأبعاد وفتح كل غرفة على حدة والاطّلاع على أبعادها. وتوفّر الجولة الداخلية والصور البانورامية بزاوية 360° طرقًا إضافية لاكتشاف العقار.",
                "تخدم هذه العروض أسئلة مختلفة: يوضّح المخطط توزيع الغرف، بينما يساعد النموذج والعرض البانورامي على فهم المساحات."
              ]
            },
            {
              "heading": "ربط الزيارات بنظام إدارة العملاء",
              "paragraphs": [
                "تُسجَّل معلومات الزيارة وتُقيَّم داخل نظام إدارة علاقات العملاء في التطبيق. ويمكن إسناد العملاء المحتملين ومتابعتهم عبر مراحل المبيعات، لربط تجربة المعرض بالإجراء التجاري التالي.",
                "يساعد التقييم في ترتيب الأولويات، لكنه لا يثبت نية الشراء بصورة قاطعة. ويبقى على فريق المبيعات التحقّق من جدّية كل فرصة."
              ]
            },
            {
              "heading": "إظهار مسار الزيارة في التحليلات",
              "paragraphs": [
                "تشمل التحليلات مسارات الزيارة ومراحل تحوّل الزوار إلى عملاء محتملين والعقارات الأكثر مشاهدة. وتكمّل هذه البيانات السجلات الفردية بإظهار طريقة تنقّل الزوار داخل المعرض والعقارات التي تجذب اهتمامهم."
              ]
            }
          ]
        }
      ],
      "result": "مشروع شخصي يجمع المعرض العقاري ونظام إدارة العملاء في تطبيق واحد، من الزيارة الأولى إلى متابعة العملاء المحتملين."
    }
  }
};

export default study;
