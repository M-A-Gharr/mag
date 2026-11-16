# maminegh.com

Portfolio of **Mohamed Amine Gharrab**, full-stack and AI developer based in Casablanca.

**Live site:** [www.maminegh.com](https://www.maminegh.com) · [LinkedIn](https://www.linkedin.com/in/m-amine-gharrab)

It presents my work through detailed case studies and expertise pages. Visitors can also book a meeting or send a message from the site. The interface is available in seven languages. English, French and Arabic each have their own indexed pages, and Arabic is laid out right to left.

## Stack

| Area | Tools |
| --- | --- |
| App | React 18, TypeScript (strict), React Router |
| Build | Vite 6 with SWC, plus a custom Vite plugin that generates static pages |
| Styling | Tailwind CSS, shadcn/ui on Radix primitives, dark and light themes |
| Motion and 3D | Framer Motion, three.js (WebGL carousel with a non-WebGL fallback), Swiper |
| Languages | i18next: 7 interface languages, RTL support for Arabic |
| Forms | EmailJS for the contact form and the booking requests |
| Quality | ESLint with zero warnings allowed, TypeScript checks, both run in CI before every deploy |
| Hosting | GitHub Pages, deployed by GitHub Actions |

## One HTML file per page, generated at build time

The site is a single-page React app. Search engines and link previews (LinkedIn, WhatsApp) may not run JavaScript, so after Vite builds the app, [`build/pagesPlugin.ts`](build/pagesPlugin.ts) writes a separate HTML file for each page:

- the home page, the case studies and the expertise pages, in English, French and Arabic;
- in each file: the title, meta description, canonical URL, Open Graph tags, `hreflang` links between the language versions, and the page's main content as plain HTML;
- JSON-LD structured data: `Person`, `WebSite`, `Article`, `Service`, `VideoObject` and `BreadcrumbList`;
- `sitemap.xml`, with the language versions and the videos of each page;
- `llms.txt`, a summary of the site for AI assistants;
- small redirect pages for URLs that were renamed.

The page content comes from typed data files in [`src/content/`](src/content). The React app and the build plugin read the same files, so the HTML that crawlers read matches what visitors see.

## Note on the case studies

The case studies describe client and employer projects. Client names, internal figures and identifying details have been removed or kept general.
