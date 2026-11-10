// Build step that writes every page of the site as its own HTML file, from the built English
// home page, so that Google, LinkedIn and WhatsApp (which may not run JavaScript) read each
// page in its language with its own title, description, canonical address and structured data:
//
//   dist/fr/index.html, dist/ar/index.html          home pages in French and Arabic
//   dist/<case study path>/index.html               each case study, in English, French, Arabic
//   dist/sitemap.xml                                every page, with its language versions
//   dist/404.html                                   the app, not indexed (GitHub Pages 404)
//
// It fails the build if a tag it must change is missing, rather than publish a half-done page.
import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';
import { CASE_STUDIES } from '../src/content/caseStudies/all';
import type { CaseStudy, CaseStudyLang, CaseStudyText } from '../src/content/caseStudies/types';
import { caseStudyPath, pathFor, SITE_URL } from '../src/i18n/paths';

const LANGS: { lng: CaseStudyLang; ogLocale: string; dir: 'ltr' | 'rtl' }[] = [
  { lng: 'en', ogLocale: 'en_US', dir: 'ltr' },
  { lng: 'fr', ogLocale: 'fr_FR', dir: 'ltr' },
  { lng: 'ar', ogLocale: 'ar_MA', dir: 'rtl' },
];
const SHARE_IMAGE = `${SITE_URL}images/share/og-image.jpg`;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const abs = (p: string) => `${SITE_URL}${p.replace(/^\//, '')}`;
const homeUrl = (lng: string) => abs(pathFor(lng));
const studyUrl = (lng: string, slug: string) => abs(caseStudyPath(lng, slug));

type Alternate = { hreflang: string; href: string };

type PageOptions = {
  lng: CaseStudyLang;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
  url: string;
  title: string;
  description: string;
  alternates?: Alternate[];
  ogType?: 'website' | 'article';
  jsonLd?: object;
  /** Static content placed in #root (replaced by the app once it renders). */
  body?: string;
};

/** Builds one page from the English home page by replacing its language-specific tags. */
const renderPage = (source: string, o: PageOptions) => {
  let html = source;
  const set = (pattern: RegExp, value: string) => {
    if (!pattern.test(html)) throw new Error(`pages (${o.url}): no match for ${pattern}`);
    html = html.replace(pattern, value);
  };
  set(/<html lang="[^"]*"[^>]*>/, `<html lang="${o.lng}" dir="${o.dir}">`);
  set(/<title>[^<]*<\/title>/, `<title>${esc(o.title)}</title>`);
  set(/(<link rel="canonical" href=")[^"]*/, `$1${o.url}`);
  set(/(<meta name="description" content=")[^"]*/, `$1${esc(o.description)}`);
  set(/(<meta property="og:url" content=")[^"]*/, `$1${o.url}`);
  set(/(<meta property="og:title" content=")[^"]*/, `$1${esc(o.title)}`);
  set(/(<meta property="og:description" content=")[^"]*/, `$1${esc(o.description)}`);
  set(/(<meta property="og:image:alt" content=")[^"]*/, `$1${esc(o.title)}`);
  set(/(<meta property="og:locale" content=")[^"]*/, `$1${o.ogLocale}`);
  set(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(o.title)}`);
  set(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(o.description)}`);
  if (o.ogType) set(/(<meta property="og:type" content=")[^"]*/, `$1${o.ogType}`);
  if (o.alternates) {
    // Replace the home page's language links with this page's own.
    const block = /(?:[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>\n)+/;
    set(block, o.alternates.map((a) => `    <link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />\n`).join(''));
  }
  if (o.jsonLd) {
    set(/<\/head>/, `    <script type="application/ld+json">${JSON.stringify(o.jsonLd)}</script>\n  </head>`);
  }
  if (o.body) set(/<div id="root"><\/div>/, `<div id="root">${o.body}</div>`);
  return html;
};

const write = (outDir: string, urlPath: string, html: string) => {
  const dir = path.join(outDir, urlPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
};

/** The article as plain HTML, for crawlers that do not run JavaScript. */
const articleHtml = (t: CaseStudyText) => {
  const parts = [`<main><article>`, `<p>${esc(t.sector)}</p>`, `<h1>${esc(t.title)}</h1>`, `<p>${esc(t.lead)}</p>`];
  for (const s of t.sections) {
    parts.push(`<h2>${esc(s.heading)}</h2>`);
    s.paragraphs?.forEach((p) => parts.push(`<p>${esc(p)}</p>`));
    if (s.list) parts.push(`<ul>${s.list.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`);
    if (s.steps) {
      parts.push(
        `<ol>${s.steps.map((st) => `<li><h3>${esc(st.heading)}</h3>${st.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}</li>`).join('')}</ol>`
      );
    }
  }
  parts.push(`<p>${esc(t.result)}</p>`, `</article></main>`);
  return parts.join('');
};

const studyAlternates = (slug: string): Alternate[] => [
  ...LANGS.map(({ lng }) => ({ hreflang: lng, href: studyUrl(lng, slug) })),
  { hreflang: 'x-default', href: studyUrl('en', slug) },
];

const studyJsonLd = (study: CaseStudy, lng: CaseStudyLang, sectionName: string, homeName: string) => {
  const t = study.text[lng];
  const url = studyUrl(lng, study.slug);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: t.title,
        description: t.metaDescription,
        inLanguage: lng,
        datePublished: study.published,
        dateModified: study.modified,
        image: SHARE_IMAGE,
        mainEntityOfPage: url,
        author: { '@id': `${SITE_URL}#person` },
        publisher: { '@id': `${SITE_URL}#person` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: homeName, item: homeUrl(lng) },
          { '@type': 'ListItem', position: 2, name: sectionName, item: `${homeUrl(lng)}#projects` },
          { '@type': 'ListItem', position: 3, name: t.title, item: url },
        ],
      },
    ],
  };
};

const sitemap = (entries: { url: string; alternates: Alternate[]; lastmod: string }[]) =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    '  <!-- Generated at build time by build/pagesPlugin.ts -->',
    ...entries.map((e) =>
      [
        '  <url>',
        `    <loc>${e.url}</loc>`,
        `    <lastmod>${e.lastmod}</lastmod>`,
        ...e.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`),
        '  </url>',
      ].join('\n')
    ),
    '</urlset>',
    '',
  ].join('\n');

export function pagesPlugin(): Plugin {
  let outDir = 'dist';
  return {
    name: 'site-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const source = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
      const locales = Object.fromEntries(
        LANGS.map(({ lng }) => [lng, JSON.parse(fs.readFileSync(path.resolve(__dirname, `../src/i18n/locales/${lng}.json`), 'utf8'))])
      );
      const today = new Date().toISOString().slice(0, 10);

      // Home pages in French and Arabic (the English one is the built index.html itself).
      for (const { lng, ogLocale, dir } of LANGS.filter((l) => l.lng !== 'en')) {
        const { title, description } = locales[lng].hero.meta as { title: string; description: string };
        write(outDir, pathFor(lng), renderPage(source, { lng, dir, ogLocale, url: homeUrl(lng), title, description }));
      }
      const homeAlternates: Alternate[] = [
        ...LANGS.map(({ lng }) => ({ hreflang: lng, href: homeUrl(lng) })),
        { hreflang: 'x-default', href: homeUrl('en') },
      ];
      const entries = LANGS.map(({ lng }) => ({ url: homeUrl(lng), alternates: homeAlternates, lastmod: today }));

      // Case studies, one page per language.
      for (const study of CASE_STUDIES) {
        for (const { lng, ogLocale, dir } of LANGS) {
          const t = study.text[lng];
          const url = studyUrl(lng, study.slug);
          write(
            outDir,
            caseStudyPath(lng, study.slug),
            renderPage(source, {
              lng,
              dir,
              ogLocale,
              url,
              title: t.metaTitle,
              description: t.metaDescription,
              alternates: studyAlternates(study.slug),
              ogType: 'article',
              jsonLd: studyJsonLd(study, lng, locales[lng].bonus.caseStudies.title, locales[lng].caseStudyPage.home),
              body: articleHtml(t),
            })
          );
          entries.push({ url, alternates: studyAlternates(study.slug), lastmod: study.modified });
        }
      }

      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap(entries));

      // GitHub Pages serves 404.html (with a 404 status) for unknown addresses: give it the app,
      // which renders its own 404 page in the visitor's language. Kept out of search results.
      const notFound = source.replace('<head>', '<head>\n    <meta name="robots" content="noindex" />');
      if (notFound === source) throw new Error('pages: no <head> in index.html');
      fs.writeFileSync(path.join(outDir, '404.html'), notFound);
    },
  };
}
