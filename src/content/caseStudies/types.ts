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
  technical?: {
    heading: string;
    groups: { heading: string; text: string }[];
  };
  sections: CaseStudySection[];
  result: string;
};

/** Presentation video, shown at the top of the page and declared to search engines. */
export type CaseStudyVideo = {
  /** Path under public/, e.g. /videos/projects/x.mp4 */
  src: string;
  poster: string;
  width: number;
  height: number;
  /** Length in seconds. */
  duration: number;
  /** ISO date the video was first published. */
  uploadDate: string;
};

export type CaseStudy = {
  slug: string;
  /** Matching card in the projects section (its technologies are shown on the page). */
  projectId: number;
  /** ISO date for the structured data. The modification date comes from git (build/lastModified.ts). */
  published: string;
  video?: CaseStudyVideo;
  text: Record<CaseStudyLang, CaseStudyText>;
};
