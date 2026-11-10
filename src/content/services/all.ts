// Every service page, imported statically. Used by the build (build/pagesPlugin.ts) to write the
// pages, their meta tags and the sitemap. The app loads them one by one instead (see ./index.ts).
import webapps from './web-application-development';
import ai from './ai-automation';
import ecommerce from './ecommerce-seo';
import type { Service } from './types';

/** Same order as the services on the home page. */
export const SERVICES: Service[] = [webapps, ai, ecommerce];
