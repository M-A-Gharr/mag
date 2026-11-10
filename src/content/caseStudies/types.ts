// Shape of a case study page. Pure data, no imports: the build plugin in vite.config.ts reads
// these files directly to write each page's HTML, meta tags and structured data.

export type CaseStudyLang = 'en' | 'fr' | 'ar';

export type CaseStudySection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Numbered steps, each with its own heading (used for "What I did"). */
  steps?: { heading: string; paragraphs: string[] }[];
};

export type CaseStudyText = {
  /** Page title (h1). */
  title: string;
  /** <title> tag, about 60 characters at most. */
  metaTitle: string;
  /** Meta description, about 155 characters at most. */
  metaDescription: string;
  sector: string;
  lead: string;
  brief: { mission: string; result: string };
  sections: CaseStudySection[];
  result: string;
};

export type CaseStudy = {
  slug: string;
  /** Matching card in the projects section (its technologies are shown on the page). */
  projectId: number;
  /** ISO dates for the structured data. */
  published: string;
  modified: string;
  text: Record<CaseStudyLang, CaseStudyText>;
};
