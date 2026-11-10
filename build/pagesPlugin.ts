// Build step that writes every page of the site as its own HTML file, from the built English
// home page, so that Google, LinkedIn and WhatsApp (which may not run JavaScript) read each
// page in its language with its own title, description, canonical address and structured data:
//
//   dist/fr/index.html, dist/ar/index.html          home pages in French and Arabic
//   dist/<case study path>/index.html               each case study, in English, French, Arabic
//   dist/<expertise path>/index.html                each area of expertise, in English, French, Arabic
//   dist/<old /services/ path>/index.html            redirects to the expertise pages (renamed)
//   dist/sitemap.xml                                every page, with its language versions
//   dist/404.html                                   the app, not indexed (GitHub Pages 404)
//
// It fails the build if a tag it must change is missing, rather than publish a half-done page.
import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';
import { CASE_STUDIES } from '../src/content/caseStudies/all';
import type { CaseStudy, CaseStudyLang, CaseStudyText } from '../src/content/caseStudies/types';
import { SERVICES } from '../src/content/services/all';
import type { Service, ServiceText } from '../src/content/services/types';
import { caseStudyPath, pathFor, servicePath, SITE_URL } from '../src/i18n/paths';

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
const serviceUrl = (lng: string, slug: string) => abs(servicePath(lng, slug));

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
const articleHtml = (t: CaseStudyText, related: { href: string; title: string }[], relatedHeading: string) => {
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
  parts.push(`<p>${esc(t.result)}</p>`);
  if (related.length) {
    parts.push(`<nav><h2>${esc(relatedHeading)}</h2><ul>${related.map((r) => `<li><a href="${r.href}">${esc(r.title)}</a></li>`).join('')}</ul></nav>`);
  }
  parts.push(`</article></main>`);
  return parts.join('');
};

/** An expertise page as plain HTML, for crawlers that do not run JavaScript. */
const serviceHtml = (t: ServiceText, examples: { href: string; title: string }[], examplesHeading: string) => {
  const list = (items: string[]) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
  const parts = [`<main><article>`, `<h1>${esc(t.title)}</h1>`, `<p>${esc(t.lead)}</p>`];
  parts.push(`<h2>${esc(t.audience.heading)}</h2>`, list(t.audience.items));
  parts.push(`<h2>${esc(t.offer.heading)}</h2>`, list(t.offer.items));
  parts.push(
    `<h2>${esc(t.process.heading)}</h2>`,
    `<ol>${t.process.steps.map((st) => `<li><h3>${esc(st.heading)}</h3><p>${esc(st.text)}</p></li>`).join('')}</ol>`
  );
  if (examples.length) {
    parts.push(`<h2>${esc(examplesHeading)}</h2><ul>${examples.map((e) => `<li><a href="${e.href}">${esc(e.title)}</a></li>`).join('')}</ul>`);
  }
  parts.push(`</article></main>`);
  return parts.join('');
};

const serviceAlternates = (slug: string): Alternate[] => [
  ...LANGS.map(({ lng }) => ({ hreflang: lng, href: serviceUrl(lng, slug) })),
  { hreflang: 'x-default', href: serviceUrl('en', slug) },
];

const serviceJsonLd = (service: Service, lng: CaseStudyLang, sectionName: string, homeName: string) => {
  const t = service.text[lng];
  const url = serviceUrl(lng, service.slug);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: t.title,
        description: t.metaDescription,
        url,
        inLanguage: lng,
        about: { '@id': `${SITE_URL}#person` },
        keywords: service.tools.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: homeName, item: homeUrl(lng) },
          { '@type': 'ListItem', position: 2, name: sectionName, item: `${homeUrl(lng)}#services` },
          { '@type': 'ListItem', position: 3, name: t.title, item: url },
        ],
      },
    ],
  };
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

/** The next two case studies, in home-page order (same rule as relatedCaseStudies in the app). */
const relatedOf = (slug: string) => {
  const i = CASE_STUDIES.findIndex((c) => c.slug === slug);
  return [1, 2].filter((k) => k < CASE_STUDIES.length).map((k) => CASE_STUDIES[(i + k) % CASE_STUDIES.length]);
};

/**
 * Old addresses of the expertise pages (they were published under /services/ before being
 * renamed): a tiny page that sends visitors and search engines straight to the new address.
 * GitHub Pages has no server-side redirects; Google treats an immediate meta refresh with a
 * canonical link as a permanent redirect.
 */
const oldServicePath = (lng: string, slug: string) => (lng === 'fr' || lng === 'ar' ? `/${lng}/services/${slug}/` : `/services/${slug}/`);
const redirectHtml = (lng: string, target: string) =>
  [
    '<!doctype html>',
    `<html lang="${lng}">`,
    '<head>',
    '<meta charset="utf-8" />',
    '<meta name="robots" content="noindex" />',
    `<link rel="canonical" href="${target}" />`,
    `<meta http-equiv="refresh" content="0; url=${target}" />`,
    `<title>${target}</title>`,
    '</head>',
    `<body><a href="${target}">${target}</a></body>`,
    '</html>',
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
              body: articleHtml(
                t,
                relatedOf(study.slug).map((r) => ({ href: caseStudyPath(lng, r.slug), title: r.text[lng].title })),
                locales[lng].caseStudyPage.related
              ),
            })
          );
          entries.push({ url, alternates: studyAlternates(study.slug), lastmod: study.modified });
        }
      }

      // Services, one page per language.
      for (const service of SERVICES) {
        for (const { lng, ogLocale, dir } of LANGS) {
          const t = service.text[lng];
          const url = serviceUrl(lng, service.slug);
          const examples = service.caseStudies
            .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
            .filter((c): c is CaseStudy => Boolean(c))
            .map((c) => ({ href: caseStudyPath(lng, c.slug), title: c.text[lng].title }));
          write(
            outDir,
            servicePath(lng, service.slug),
            renderPage(source, {
              lng,
              dir,
              ogLocale,
              url,
              title: t.metaTitle,
              description: t.metaDescription,
              alternates: serviceAlternates(service.slug),
              jsonLd: serviceJsonLd(service, lng, locales[lng].services.title, locales[lng].caseStudyPage.home),
              body: serviceHtml(t, examples, locales[lng].servicePage.examples),
            })
          );
          entries.push({ url, alternates: serviceAlternates(service.slug), lastmod: service.modified });
        }
      }

      // Redirects from the old /services/ addresses.
      for (const service of SERVICES) {
        for (const { lng } of LANGS) write(outDir, oldServicePath(lng, service.slug), redirectHtml(lng, serviceUrl(lng, service.slug)));
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
