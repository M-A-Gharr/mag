// Case study: Simtis Studio, the in-house AI studio for model shots. No store, person or
// internal figure is named.
import type { CaseStudy } from './types';

const study: CaseStudy = {
  slug: 'ai-fashion-visuals-studio',
  projectId: 11,
  published: '2026-11-10',
  modified: '2026-11-10',
  text: {
    fr: {
      title: "Simtis Studio : des visuels portés par mannequin, créés par IA à partir d'une photo produit",
      metaTitle: 'Studio IA de visuels mode · Étude de cas',
      metaDescription:
        "Un studio IA interne qui transforme la photo d'un châle en visuels portés par mannequin, avec validation, quotas par magasin et fiches produit en trois langues.",
      sector: 'Mode & retail · IA générative',
      lead:
        "Pour montrer un nouveau châle porté, un groupe de magasins devait organiser une séance photo. J'ai conçu un studio interne qui produit ces visuels en quelques clics, à partir d'une simple photo du produit, sans perdre le contrôle de l'image de marque.",
      brief: {
        mission: "Conception et développement d'un studio IA interne, de la génération d'images à la fiche produit",
        result: "Des visuels portés en quelques clics au lieu d'une séance photo",
      },
      sections: [
        {
          heading: 'Le contexte',
          paragraphs: [
            "Le groupe vend des châles et des foulards dans un réseau de magasins, sur son site et sur les réseaux sociaux. Chaque nouveau motif a besoin d'images où il est porté : ce sont elles qui font vendre. Mais une séance photo par collection coûte cher et prend du temps, si bien que beaucoup de produits partaient en ligne avec une simple photo à plat.",
            "Les commerciaux des magasins, eux, voulaient pouvoir envoyer rapidement à un client un visuel soigné du produit qu'il demande.",
          ],
        },
        {
          heading: 'Le défi',
          paragraphs: [
            "Générer une image par IA est devenu facile. En faire un outil fiable pour toute une équipe l'est beaucoup moins. Il fallait :",
          ],
          list: [
            'des visuels fidèles au produit : le motif, les couleurs et les bordures ne doivent jamais être inventés ;',
            "une image de marque cohérente d'un magasin à l'autre ;",
            'des coûts maîtrisés, puisque chaque génération est payante ;',
            'un outil que des commerciaux utilisent sans formation technique.',
          ],
        },
        {
          heading: "Ce que j'ai fait",
          steps: [
            {
              heading: 'Partir du travail réel des magasins',
              paragraphs: [
                "Avant de développer, j'ai observé comment le marketing et les commerciaux préparent leurs visuels, et ce qui les bloquait. Le parcours de l'outil suit ce travail : le tableau de bord signale les produits du magasin qui n'ont pas encore d'image portée, les plus en stock d'abord, et un clic ouvre le studio déjà rempli.",
              ],
            },
            {
              heading: "Deux moteurs d'IA, chacun pour son usage",
              paragraphs: [
                "Le studio propose deux moteurs : l'un pour les mises en scène vivantes, les affiches et les demandes libres, l'autre pour un essayage virtuel fidèle sur la photo d'un mannequin. Le commercial choisit la façon de porter le châle, la pose, le décor (riad, médina, terrasse, studio…) et le style photo, puis enregistre ses combinaisons préférées pour garder une série homogène.",
                "Le produit vient du catalogue numérique interne ou d'une photo déposée directement. Plusieurs coloris se lancent en une fois, avec la même mise en scène.",
              ],
            },
            {
              heading: 'Une file partagée et des quotas par magasin',
              paragraphs: [
                "Les générations passent par une file d'attente commune, traitée sur le serveur : on peut fermer la page, le résultat attend dans l'historique. Chaque magasin dispose d'un crédit journalier et mensuel par moteur, et une génération annulée avant son départ n'est pas décomptée.",
              ],
            },
            {
              heading: 'Une validation avant toute publication',
              paragraphs: [
                "Chaque visuel est d'abord « à valider ». Le chef de zone l'approuve, ou le renvoie avec un commentaire précis, par exemple un motif déformé sur l'épaule, et le commercial le régénère en un clic. Un visuel reste privé tant qu'il n'est pas ajouté à la fiche produit.",
              ],
            },
            {
              heading: 'Des fiches produit partagées, en trois langues',
              paragraphs: [
                "Chaque motif a une fiche unique, commune à tous les magasins : noms et descriptions en français, en anglais et en arabe, caractéristiques, coloris et visuels. Avant de générer, un commercial voit si un autre magasin a déjà publié un bon visuel, ce qui évite de payer deux fois la même image. La fiche s'exporte en PDF ou en image, prête à envoyer à un client, et un visuel peut devenir un court clip vidéo.",
                "L'interface elle-même existe en français, en anglais et en arabe, avec une mise en page de droite à gauche.",
              ],
            },
          ],
        },
      ],
      result:
        "Les magasins obtiennent en quelques clics des visuels portés, fidèles au produit et à la marque, au lieu d'attendre une séance photo. Chaque image est validée avant d'être publiée, les coûts restent sous contrôle grâce aux quotas, et le catalogue se complète au fil de l'eau, avec des fiches prêtes à partager en trois langues.",
    },
    en: {
      title: 'Simtis Studio: AI-generated model shots from a single product photo',
      metaTitle: 'AI fashion visuals studio · Case study',
      metaDescription:
        'An in-house AI studio that turns a photo of a shawl into model shots, with an approval step, quotas per store and product sheets in three languages.',
      sector: 'Fashion retail · Generative AI',
      lead:
        'To show a new shawl being worn, a group of stores had to organise a photo shoot. I designed an in-house studio that produces these shots in a few clicks from a simple product photo, without losing control of the brand image.',
      brief: {
        mission: 'Design and development of an in-house AI studio, from image generation to the product sheet',
        result: 'Model shots in a few clicks instead of a photo shoot',
      },
      sections: [
        {
          heading: 'The context',
          paragraphs: [
            'The group sells shawls and scarves through a network of stores, on its website and on social media. Every new pattern needs pictures of it being worn: those are what sell. But a photo shoot for each collection is expensive and slow, so many products went online with a flat photo only.',
            'Sales staff in the stores also wanted to send a customer a polished picture of the product they were asking about, quickly.',
          ],
        },
        {
          heading: 'The challenge',
          paragraphs: ['Generating an image with AI has become easy. Turning it into a reliable tool for a whole team is much harder. It had to deliver:'],
          list: [
            'images faithful to the product: the pattern, colours and borders must never be made up;',
            'a consistent brand image from one store to the next;',
            'controlled costs, since every generation is paid for;',
            'a tool that sales staff use without any technical training.',
          ],
        },
        {
          heading: 'What I did',
          steps: [
            {
              heading: 'Starting from how the stores actually work',
              paragraphs: [
                'Before building anything, I watched how marketing and sales staff prepare their visuals and what held them back. The tool follows that work: the dashboard flags the store’s products that have no model shot yet, best-stocked first, and one click opens the studio already filled in.',
              ],
            },
            {
              heading: 'Two AI engines, each for its own job',
              paragraphs: [
                'The studio offers two engines: one for lively scenes, posters and free requests, the other for a faithful virtual try-on on a photo of a model. Staff choose how the shawl is worn, the pose, the setting (riad, medina, terrace, studio and more) and the photo style, then save their favourite combinations to keep a series consistent.',
                'The product comes from the internal digital catalogue or from a photo uploaded directly. Several colourways can be launched at once with the same setting.',
              ],
            },
            {
              heading: 'A shared queue and quotas per store',
              paragraphs: [
                'Generations go through a shared queue processed on the server: you can close the page and the result waits in your history. Each store has a daily and monthly allowance per engine, and a generation cancelled before it starts is not counted.',
              ],
            },
            {
              heading: 'Approval before anything is published',
              paragraphs: [
                'Every image starts as “to review”. The area manager approves it, or sends it back with a precise comment, such as a pattern distorted on the shoulder, and the salesperson regenerates it in one click. An image stays private until it is added to the product sheet.',
              ],
            },
            {
              heading: 'Shared product sheets in three languages',
              paragraphs: [
                'Each pattern has a single sheet shared by every store: names and descriptions in French, English and Arabic, specifications, colourways and images. Before generating, a salesperson can see whether another store has already published a good image, which avoids paying twice for the same picture. The sheet exports as a PDF or an image ready to send to a customer, and an image can be turned into a short video clip.',
                'The interface itself is available in French, English and Arabic, with a right-to-left layout.',
              ],
            },
          ],
        },
      ],
      result:
        'Stores get model shots in a few clicks, faithful to the product and the brand, instead of waiting for a photo shoot. Every image is approved before it is published, quotas keep costs under control, and the catalogue fills up as they go, with sheets ready to share in three languages.',
    },
    ar: {
      title: 'Simtis Studio: صور ملبوسة على عارضات يُنشئها الذكاء الاصطناعي من صورة منتج واحدة',
      metaTitle: 'استوديو ذكاء اصطناعي لصور الأزياء · دراسة حالة',
      metaDescription:
        'استوديو ذكاء اصطناعي داخلي يحوّل صورة شال إلى صور ملبوسة على عارضات، مع خطوة موافقة وحصص لكل متجر وبطاقات منتجات بثلاث لغات.',
      sector: 'الأزياء والتجزئة · الذكاء الاصطناعي التوليدي',
      lead:
        'لعرض شال جديد ملبوساً، كان على مجموعة من المتاجر تنظيم جلسة تصوير. صمّمت استوديو داخلياً ينتج هذه الصور ببضع نقرات انطلاقاً من صورة بسيطة للمنتج، دون فقدان السيطرة على صورة العلامة.',
      brief: {
        mission: 'تصميم وتطوير استوديو ذكاء اصطناعي داخلي، من توليد الصور إلى بطاقة المنتج',
        result: 'صور ملبوسة ببضع نقرات بدل جلسة تصوير',
      },
      sections: [
        {
          heading: 'السياق',
          paragraphs: [
            'تبيع المجموعة الشالات والوشاحات عبر شبكة من المتاجر وعلى موقعها ووسائل التواصل. كل تصميم جديد يحتاج إلى صور يظهر فيها ملبوساً، فهي التي تبيع. لكن جلسة تصوير لكل مجموعة مكلفة وبطيئة، لذلك كانت منتجات كثيرة تُنشر بصورة مسطحة فقط.',
            'أما مستشارو المبيعات في المتاجر، فكانوا يريدون إرسال صورة أنيقة للمنتج الذي يسأل عنه الزبون، بسرعة.',
          ],
        },
        {
          heading: 'التحدي',
          paragraphs: ['أصبح توليد صورة بالذكاء الاصطناعي أمراً سهلاً، لكن تحويله إلى أداة موثوقة لفريق كامل أصعب بكثير. كان المطلوب:'],
          list: [
            'صوراً وفية للمنتج: لا يُخترع أبداً التصميم ولا الألوان ولا الحواف؛',
            'صورة علامة متناسقة من متجر إلى آخر؛',
            'تكاليف متحكَّماً فيها، لأن كل عملية توليد مدفوعة؛',
            'أداة يستخدمها فريق المبيعات دون أي تكوين تقني.',
          ],
        },
        {
          heading: 'ما قمت به',
          steps: [
            {
              heading: 'الانطلاق من العمل الفعلي للمتاجر',
              paragraphs: [
                'قبل التطوير، لاحظت كيف يُعدّ فريق التسويق والمبيعات صورهم وما الذي يعيقهم. وتتبع الأداة هذا العمل: تشير لوحة المتابعة إلى منتجات المتجر التي لا صورة ملبوسة لها بعد، بدءاً بالأكثر توفراً في المخزون، ونقرة واحدة تفتح الاستوديو معبأً مسبقاً.',
              ],
            },
            {
              heading: 'محرّكان للذكاء الاصطناعي، لكل منهما دوره',
              paragraphs: [
                'يقدم الاستوديو محرّكين: أحدهما للمشاهد الحية والملصقات والطلبات الحرة، والآخر لتجربة افتراضية وفية على صورة عارضة. يختار المستشار طريقة ارتداء الشال والوضعية والخلفية (رياض، مدينة قديمة، شرفة، استوديو...) وأسلوب التصوير، ثم يحفظ تركيباته المفضلة للحفاظ على سلسلة متناسقة.',
                'يأتي المنتج من الكتالوج الرقمي الداخلي أو من صورة تُرفع مباشرة، ويمكن إطلاق عدة ألوان دفعة واحدة بالإخراج نفسه.',
              ],
            },
            {
              heading: 'طابور مشترك وحصص لكل متجر',
              paragraphs: [
                'تمر عمليات التوليد عبر طابور مشترك يُعالَج على الخادم: يمكن إغلاق الصفحة، فالنتيجة تنتظر في السجل. ولكل متجر رصيد يومي وشهري لكل محرّك، ولا تُحتسب عملية أُلغيت قبل انطلاقها.',
              ],
            },
            {
              heading: 'موافقة قبل أي نشر',
              paragraphs: [
                'تبدأ كل صورة بحالة «قيد المراجعة». يوافق عليها مسؤول المنطقة، أو يعيدها مع ملاحظة دقيقة، مثل تصميم مشوّه على الكتف، فيعيد المستشار توليدها بنقرة. وتبقى الصورة خاصة ما لم تُضف إلى بطاقة المنتج.',
              ],
            },
            {
              heading: 'بطاقات منتجات مشتركة بثلاث لغات',
              paragraphs: [
                'لكل تصميم بطاقة واحدة مشتركة بين جميع المتاجر: الأسماء والأوصاف بالفرنسية والإنجليزية والعربية، والخصائص، والألوان، والصور. وقبل التوليد، يرى المستشار إن كان متجر آخر قد نشر صورة جيدة، فيتجنب دفع ثمن الصورة نفسها مرتين. وتُصدَّر البطاقة بصيغة PDF أو صورة جاهزة لإرسالها إلى زبون، ويمكن تحويل صورة إلى مقطع فيديو قصير.',
                'والواجهة نفسها متوفرة بالفرنسية والإنجليزية والعربية، مع تخطيط من اليمين إلى اليسار.',
              ],
            },
          ],
        },
      ],
      result:
        'تحصل المتاجر ببضع نقرات على صور ملبوسة وفية للمنتج وللعلامة، بدل انتظار جلسة تصوير. تُعتمد كل صورة قبل نشرها، وتبقى التكاليف تحت السيطرة بفضل الحصص، ويكتمل الكتالوج تدريجياً ببطاقات جاهزة للمشاركة بثلاث لغات.',
    },
  },
};

export default study;
