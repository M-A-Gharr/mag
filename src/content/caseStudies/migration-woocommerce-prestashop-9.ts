// Case study: WooCommerce to PrestaShop 9 migration. The client is anonymised (no brand, no
// internal figures), as everywhere on the site.
import type { CaseStudy } from './types';

const study: CaseStudy = {
  slug: 'migration-woocommerce-prestashop-9',
  projectId: 13,
  published: '2026-11-10',
  modified: '2026-11-10',
  text: {
    fr: {
      title: "Migration d'une boutique de mode de WooCommerce vers PrestaShop 9",
      metaTitle: 'Migration WooCommerce vers PrestaShop 9 · Étude de cas',
      metaDescription:
        "Comment j'ai migré une boutique de mode de WooCommerce vers PrestaShop 9 sans perdre ses clients, son historique de commandes ni son référencement Google.",
      sector: 'Mode · E-commerce',
      lead:
        "Une boutique de mode voulait quitter WordPress et WooCommerce pour PrestaShop 9. Une seule condition : ne rien perdre en route. Ni les clients, ni l'historique des commandes, ni les positions acquises sur Google.",
      brief: {
        mission: 'Migration complète de WooCommerce vers PrestaShop 9, avec un thème et des modules sur mesure',
        result: 'Aucun client, aucune commande et aucune page perdus',
      },
      sections: [
        {
          heading: 'Le contexte',
          paragraphs: [
            "La boutique tournait sur WordPress avec WooCommerce, un constructeur de pages et plusieurs extensions ajoutées au fil du temps. Elle fonctionnait, mais devenait lourde à faire évoluer. Deux extensions SEO actives en même temps envoyaient même à Google des informations contradictoires.",
            "L'équipe voulait une boutique plus simple à gérer au quotidien, sur une plateforme pensée d'abord pour le e-commerce.",
          ],
        },
        {
          heading: 'Le défi',
          paragraphs: [
            "Une migration ratée se voit vite : des clients qui ne retrouvent plus leur historique, un chiffre d'affaires passé qui disparaît des statistiques, des pages qui chutent dans Google parce que leurs adresses ont changé. Trois choses devaient donc arriver intactes de l'autre côté :",
          ],
          list: [
            'chaque client, avec ses adresses ;',
            "tout l'historique des commandes, sans le moindre écart avec l'ancien site ;",
            'le référencement : chaque ancienne adresse devait mener à la bonne page.',
          ],
        },
        {
          heading: "Ce que j'ai fait",
          steps: [
            {
              heading: 'Un état des lieux complet, sans toucher au site',
              paragraphs: [
                "Avant d'écrire la moindre ligne d'import, j'ai inventorié tout le site public : produits, catégories, pages, articles de blog, images, menus et réglages SEO. L'extraction s'est faite en lecture seule, à un rythme qui ne ralentissait pas la boutique en ligne.",
                "Chaque incohérence repérée (deux titres SEO pour la même page, une offre formulée de deux façons, des sélections de produits faites à la main) a été documentée, avec le choix retenu, plutôt que corrigée en silence.",
              ],
            },
            {
              heading: 'Une boutique reconstruite, pas copiée',
              paragraphs: [
                "Plutôt que de reproduire un constructeur de pages, j'ai recréé la page d'accueil avec des blocs simples, modifiables depuis l'administration. Le thème part du thème officiel de PrestaShop 9, copié et renommé pour qu'aucune mise à jour ne l'écrase. Les polices sont hébergées sur la boutique, et une police dont la licence n'était pas vérifiable n'a pas été reprise.",
                "Les noms des catégories et les intitulés du menu, parfois différents, sont conservés tous les deux. Les sélections faites à la main, comme les nouveautés ou les produits les plus aimés, gardent leur ordre au lieu d'être remplacées par un tri automatique.",
              ],
            },
            {
              heading: 'Clients et commandes : une reprise qui ne casse rien',
              paragraphs: [
                "Les clients et tout l'historique des commandes ont été repris avec leurs adresses, leurs statuts et leurs paiements. Les clients qui commandaient sans e-mail, en paiement à la livraison, sont retrouvés grâce à leur téléphone. Les totaux des commandes sont identiques, au centime près, à ceux de l'ancien site.",
                "Pendant l'import, aucun e-mail ne part vers les clients, aucun stock ne bouge et aucun prix n'est recalculé. Si de nouvelles commandes arrivent sur l'ancien site avant la bascule, l'import se rejoue : il ajoute les nouvelles et ne modifie jamais celles déjà reprises.",
                "Les mots de passe, incompatibles d'une plateforme à l'autre, ne sont pas transférés : un client retrouve son historique en créant son compte avec la même adresse e-mail.",
              ],
            },
            {
              heading: 'Aucune adresse perdue pour Google',
              paragraphs: [
                "Chaque ancienne adresse (produit, catégorie, page, article) mène à sa nouvelle page par une redirection permanente (301). Les redirections sont gérées par la boutique elle-même, indépendamment du serveur, sans chaîne ni boucle. Le titre et la description SEO de chaque page sont repris.",
              ],
            },
            {
              heading: 'Tester avant de basculer',
              paragraphs: [
                "Chaque étape a d'abord tourné en essai à blanc, sans rien écrire. La nouvelle boutique a ensuite été comparée à l'ancienne, page par page, sur ordinateur et sur mobile, avec des tests automatisés dans le navigateur. L'équipe dispose enfin de guides pas à pas pour la mise en production.",
              ],
            },
          ],
        },
      ],
      result:
        "Une bascule sans perte : les clients et leur historique sont là, les totaux correspondent à l'ancien site, et chaque lien que Google connaissait mène toujours à la bonne page. L'équipe gère désormais sa boutique depuis une seule administration, sans constructeur de pages ni extensions en double.",
    },
    en: {
      title: 'Migrating a fashion store from WooCommerce to PrestaShop 9',
      metaTitle: 'WooCommerce to PrestaShop 9 migration · Case study',
      metaDescription:
        'How I moved a fashion store from WooCommerce to PrestaShop 9 without losing its customers, its order history or its Google rankings.',
      sector: 'Fashion · E-commerce',
      lead:
        'A fashion store wanted to leave WordPress and WooCommerce for PrestaShop 9, on one condition: lose nothing along the way. Not the customers, not the order history, not the rankings it had earned on Google.',
      brief: {
        mission: 'Full migration from WooCommerce to PrestaShop 9, with a custom theme and modules',
        result: 'No customer, no order and no page lost',
      },
      sections: [
        {
          heading: 'The context',
          paragraphs: [
            'The store ran on WordPress with WooCommerce, a page builder and several plugins added over the years. It worked, but it had become heavy to change. Two SEO plugins running at the same time were even sending Google contradictory information.',
            'The team wanted a store that was easier to run day to day, on a platform built for e-commerce first.',
          ],
        },
        {
          heading: 'The challenge',
          paragraphs: [
            'A failed migration shows quickly: customers who can no longer find their history, past revenue that vanishes from the statistics, pages that drop on Google because their addresses changed. Three things had to arrive intact on the other side:',
          ],
          list: [
            'every customer, with their addresses;',
            'the full order history, with no difference at all from the old site;',
            'the search rankings: every old address had to lead to the right page.',
          ],
        },
        {
          heading: 'What I did',
          steps: [
            {
              heading: 'A complete inventory, without touching the live site',
              paragraphs: [
                'Before writing a single line of import code, I inventoried the whole public site: products, categories, pages, blog posts, images, menus and SEO settings. The extraction was read-only, at a pace that never slowed the live store down.',
                'Every inconsistency I found (two SEO titles for the same page, an offer worded two different ways, product selections made by hand) was documented along with the choice made, rather than quietly fixed.',
              ],
            },
            {
              heading: 'A store rebuilt, not copied',
              paragraphs: [
                'Instead of reproducing a page builder, I rebuilt the homepage from simple blocks the team can edit in the back office. The theme starts from the official PrestaShop 9 theme, copied and renamed so that no update can overwrite it. Fonts are hosted on the store, and one font whose licence could not be verified was left out.',
                'Category names and menu labels, which sometimes differed, are both kept. Hand-picked selections such as new arrivals and favourites keep their order instead of being replaced by an automatic sort.',
              ],
            },
            {
              heading: 'Customers and orders: an import that breaks nothing',
              paragraphs: [
                'Customers and the full order history came across with their addresses, statuses and payments. Customers who ordered without an email, paying cash on delivery, are matched by their phone number. Order totals match the old site to the cent.',
                'During the import, no email goes out to customers, no stock moves and no price is recalculated. If new orders arrive on the old site before the switch, the import can run again: it adds the new ones and never changes those already imported.',
                'Passwords cannot be carried over between the two platforms, so they are not transferred: customers get their history back by creating their account with the same email address.',
              ],
            },
            {
              heading: 'No address lost for Google',
              paragraphs: [
                'Every old address (product, category, page, post) leads to its new page through a permanent 301 redirect. The store handles the redirects itself, independently of the server, with no chains and no loops. Each page keeps its SEO title and description.',
              ],
            },
            {
              heading: 'Testing before the switch',
              paragraphs: [
                'Every step first ran as a dry run that wrote nothing. The new store was then compared with the old one, page by page, on desktop and mobile, with automated browser tests. The team also has step-by-step guides for going live.',
              ],
            },
          ],
        },
      ],
      result:
        'A switch with nothing lost: customers and their history are there, totals match the old site, and every link Google knew still leads to the right page. The team now runs its store from a single back office, with no page builder and no duplicate plugins.',
    },
    ar: {
      title: 'نقل متجر أزياء من WooCommerce إلى PrestaShop 9',
      metaTitle: 'نقل متجر من WooCommerce إلى PrestaShop 9 · دراسة حالة',
      metaDescription:
        'كيف نقلت متجر أزياء من WooCommerce إلى PrestaShop 9 دون أن يفقد عملاءه أو سجل طلباته أو مراتبه في Google.',
      sector: 'الأزياء · التجارة الإلكترونية',
      lead:
        'أراد متجر أزياء مغادرة WordPress وWooCommerce والانتقال إلى PrestaShop 9، بشرط واحد: ألا يضيع أي شيء في الطريق. لا العملاء، ولا سجل الطلبات، ولا المراتب التي اكتسبها في Google.',
      brief: {
        mission: 'نقل كامل من WooCommerce إلى PrestaShop 9، مع قالب ووحدات مخصصة',
        result: 'لم يضع أي عميل أو طلب أو صفحة',
      },
      sections: [
        {
          heading: 'السياق',
          paragraphs: [
            'كان المتجر يعمل على WordPress مع WooCommerce وأداة لبناء الصفحات وعدة إضافات تراكمت مع الوقت. كان يعمل، لكن تطويره أصبح ثقيلاً، بل إن إضافتين لتحسين محركات البحث كانتا تعملان في الوقت نفسه وترسلان إلى Google معلومات متناقضة.',
            'أراد الفريق متجراً أسهل في الإدارة اليومية، على منصة مصممة أولاً للتجارة الإلكترونية.',
          ],
        },
        {
          heading: 'التحدي',
          paragraphs: [
            'الانتقال الفاشل يظهر بسرعة: عملاء لا يجدون سجلهم، ورقم معاملات سابق يختفي من الإحصاءات، وصفحات تتراجع في Google لأن عناوينها تغيّرت. لذلك كان لا بد أن تصل ثلاثة أشياء سليمة إلى الجهة الأخرى:',
          ],
          list: [
            'كل عميل، مع عناوينه؛',
            'سجل الطلبات كاملاً، دون أي فرق عن الموقع القديم؛',
            'المراتب في محركات البحث: كان على كل عنوان قديم أن يقود إلى الصفحة الصحيحة.',
          ],
        },
        {
          heading: 'ما قمت به',
          steps: [
            {
              heading: 'جرد كامل دون المساس بالموقع',
              paragraphs: [
                'قبل كتابة أي سطر للاستيراد، جردت الموقع العام كله: المنتجات والفئات والصفحات ومقالات المدونة والصور والقوائم وإعدادات SEO. تم الاستخراج بالقراءة فقط، وبوتيرة لا تُبطئ المتجر المفتوح للزبائن.',
                'كل تناقض وجدته (عنوانا SEO للصفحة نفسها، وعرض مكتوب بصيغتين، واختيارات منتجات مرتبة يدوياً) وثّقته مع الخيار المعتمد، بدل تصحيحه دون إشارة.',
              ],
            },
            {
              heading: 'متجر أُعيد بناؤه، لا نُسخ',
              paragraphs: [
                'بدل إعادة إنتاج أداة بناء الصفحات، أعدت إنشاء الصفحة الرئيسية بكتل بسيطة يعدّلها الفريق من لوحة الإدارة. ينطلق القالب من القالب الرسمي لـ PrestaShop 9، منسوخاً باسم جديد حتى لا يمحوه أي تحديث. الخطوط مستضافة على المتجر، ولم يُعتمد خط لم يكن التحقق من رخصته ممكناً.',
                'احتُفظ بأسماء الفئات وبعناوين القائمة معاً حين كانت تختلف. وتحافظ الاختيارات اليدوية، مثل المنتجات الجديدة والأكثر إعجاباً، على ترتيبها بدل أن يحل محلها ترتيب آلي.',
              ],
            },
            {
              heading: 'العملاء والطلبات: نقل لا يكسر شيئاً',
              paragraphs: [
                'نُقل العملاء وسجل الطلبات كاملاً مع العناوين والحالات والمدفوعات. ويُتعرَّف على العملاء الذين كانوا يطلبون دون بريد إلكتروني، بالدفع عند الاستلام، من خلال رقم هاتفهم. ومجاميع الطلبات مطابقة للموقع القديم حتى آخر سنتيم.',
                'أثناء الاستيراد لا يُرسل أي بريد إلى العملاء، ولا يتحرك المخزون، ولا يُعاد حساب أي سعر. وإذا وصلت طلبات جديدة إلى الموقع القديم قبل الانتقال، يُعاد تشغيل الاستيراد: يضيف الجديد ولا يعدّل أبداً ما سبق نقله.',
                'كلمات المرور غير متوافقة بين المنصتين، لذلك لا تُنقل: يستعيد العميل سجله بإنشاء حسابه بالبريد الإلكتروني نفسه.',
              ],
            },
            {
              heading: 'لا عنوان يضيع على Google',
              paragraphs: [
                'كل عنوان قديم (منتج أو فئة أو صفحة أو مقال) يقود إلى صفحته الجديدة بإعادة توجيه دائمة (301). يتولى المتجر نفسه إعادة التوجيه، بشكل مستقل عن الخادم، دون سلاسل ولا حلقات. واحتفظت كل صفحة بعنوانها ووصفها في SEO.',
              ],
            },
            {
              heading: 'الاختبار قبل الانتقال',
              paragraphs: [
                'شُغّلت كل مرحلة أولاً كتجربة مسبقة لا تكتب شيئاً. ثم قورن المتجر الجديد بالقديم صفحة بصفحة، على الحاسوب والهاتف، باختبارات آلية في المتصفح. ولدى الفريق أدلة خطوة بخطوة للإطلاق.',
              ],
            },
          ],
        },
      ],
      result:
        'انتقال دون خسارة: العملاء وسجلهم موجودون، والمجاميع مطابقة للموقع القديم، وكل رابط كان Google يعرفه ما زال يقود إلى الصفحة الصحيحة. ويدير الفريق اليوم متجره من لوحة إدارة واحدة، دون أداة لبناء الصفحات ولا إضافات مكررة.',
    },
  },
};

export default study;
