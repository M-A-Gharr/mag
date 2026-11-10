// Shape of a service page. Pure data, no imports: the build plugin (build/pagesPlugin.ts) reads
// these files directly to write each page's HTML, meta tags and structured data.

export type ServiceLang = 'en' | 'fr' | 'ar';

export type ServiceText = {
  /** Page title (h1). */
  title: string;
  /** <title> tag, about 60 characters at most. */
  metaTitle: string;
  /** Meta description, about 160 characters at most. */
  metaDescription: string;
  lead: string;
  audience: { heading: string; items: string[] };
  offer: { heading: string; items: string[] };
  process: { heading: string; steps: { heading: string; text: string }[] };
  faq: { heading: string; items: { q: string; a: string }[] };
};

export type Service = {
  slug: string;
  /** Matching card in the home page's services section (about.services.<key>). */
  key: 'webapps' | 'ai' | 'ecommerce';
  /** Case studies that prove this service, by slug (shown as examples). */
  caseStudies: string[];
  modified: string;
  text: Record<ServiceLang, ServiceText>;
};
