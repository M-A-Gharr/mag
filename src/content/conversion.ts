export const conversionCopy = {
  fr: {
    title: 'Un besoin similaire dans votre équipe ?',
    description: 'Décrivez votre contexte, vos outils actuels et le résultat recherché. Nous pourrons préciser le périmètre et une première étape utile.',
    project: 'Discuter d’un projet similaire',
    services: { webapps: 'Parlons de votre application', ai: 'Identifions votre cas d’usage IA', ecommerce: 'Parlons de votre boutique' },
    book: 'Planifier un échange',
    related: 'Expertises mobilisées',
    example: 'Voir un projet concret',
    context: 'Votre demande concerne',
    prompt: (subject: string) => `Bonjour, je souhaite échanger au sujet de : ${subject}.\n\nMon contexte :\nMes outils actuels :\nLe résultat recherché :`,
  },
  en: {
    title: 'Does your team have a similar need?',
    description: 'Describe your context, current tools and desired outcome. We can clarify the scope and identify a useful first step.',
    project: 'Discuss a similar project',
    services: { webapps: 'Let’s discuss your application', ai: 'Explore your AI use case', ecommerce: 'Let’s discuss your store' },
    book: 'Schedule a conversation',
    related: 'Related expertise',
    example: 'See a real project',
    context: 'Your enquiry concerns',
    prompt: (subject: string) => `Hello, I would like to discuss: ${subject}.\n\nMy context:\nMy current tools:\nThe outcome I’m looking for:`,
  },
  ar: {
    title: 'هل لدى فريقكم احتياج مشابه؟',
    description: 'صفوا سياق عملكم وأدواتكم الحالية والنتيجة المطلوبة، لنحدّد النطاق وخطوة أولى مفيدة.',
    project: 'مناقشة مشروع مشابه',
    services: { webapps: 'لنتحدث عن تطبيقكم', ai: 'لنحدّد استخدام الذكاء الاصطناعي المناسب', ecommerce: 'لنتحدث عن متجركم' },
    book: 'تحديد موعد للتواصل',
    related: 'الخبرات المرتبطة',
    example: 'مشاهدة مشروع فعلي',
    context: 'موضوع طلبكم',
    prompt: (subject: string) => `مرحبًا، أود مناقشة: ${subject}.\n\nسياق عملي:\nأدواتي الحالية:\nالنتيجة المطلوبة:`,
  },
};

/** Shared by the interactive pages and their static HTML. */
export const projectContactLabel = (lang: keyof typeof conversionCopy, projectId: number) => {
  const kind = projectId === 7 ? 'training' : projectId === 14 ? 'website'
    : [6, 10, 12].includes(projectId) ? 'crm'
    : [8, 9, 13].includes(projectId) ? 'store'
    : [1, 11, 15, 16].includes(projectId) ? 'ai' : 'app';
  const labels = {
    fr: { training: 'Discuter de votre formation IA', website: 'Discuter de votre site vitrine', crm: 'Discuter de votre projet CRM', store: 'Discuter de votre boutique', ai: 'Discuter de votre projet IA', app: 'Discuter de votre application' },
    en: { training: 'Discuss your AI training', website: 'Discuss your business website', crm: 'Discuss your CRM project', store: 'Discuss your online store', ai: 'Discuss your AI project', app: 'Discuss your application' },
    ar: { training: 'مناقشة تدريب فريقكم على الذكاء الاصطناعي', website: 'مناقشة موقعكم التعريفي', crm: 'مناقشة مشروع إدارة علاقات العملاء', store: 'مناقشة متجركم الإلكتروني', ai: 'مناقشة مشروعكم للذكاء الاصطناعي', app: 'مناقشة تطبيقكم' },
  };
  return labels[lang][kind];
};
