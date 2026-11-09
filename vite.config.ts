import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";

const SITE_URL = "https://www.maminegh.com/";

/**
 * Writes dist/fr/index.html and dist/ar/index.html from the built English page, with the
 * title, description, share tags, language and canonical address of each language, so that
 * Google, LinkedIn and WhatsApp (which do not run JavaScript) see each page in its language.
 * Fails the build if a tag it must change is missing, rather than publish a half-translated page.
 */
function localizedPages(): Plugin {
  const pages = {
    fr: { ogLocale: "fr_FR", dir: "ltr" },
    ar: { ogLocale: "ar_MA", dir: "rtl" },
  };
  let outDir = "dist";
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  return {
    name: "localized-pages",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const source = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
      for (const [lng, { ogLocale, dir }] of Object.entries(pages)) {
        const locale = JSON.parse(fs.readFileSync(path.resolve(__dirname, `src/i18n/locales/${lng}.json`), "utf8"));
        const { title, description } = locale.hero.meta as { title: string; description: string };
        const url = `${SITE_URL}${lng}/`;
        let html = source;
        const set = (pattern: RegExp, value: string) => {
          if (!pattern.test(html)) throw new Error(`localized-pages (${lng}): no match for ${pattern}`);
          html = html.replace(pattern, value);
        };
        set(/<html lang="[^"]*"[^>]*>/, `<html lang="${lng}" dir="${dir}">`);
        set(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
        set(/(<link rel="canonical" href=")[^"]*/, `$1${url}`);
        set(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`);
        set(/(<meta property="og:url" content=")[^"]*/, `$1${url}`);
        set(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`);
        set(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`);
        set(/(<meta property="og:image:alt" content=")[^"]*/, `$1${esc(title)}`);
        set(/(<meta property="og:locale" content=")[^"]*/, `$1${ogLocale}`);
        set(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(title)}`);
        set(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(description)}`);
        fs.mkdirSync(path.join(outDir, lng), { recursive: true });
        fs.writeFileSync(path.join(outDir, lng, "index.html"), html);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/", 
  plugins: [
    react(),
    localizedPages(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          ui: ['lucide-react', '@/components/ui/index.ts'],
          animation: ['framer-motion'],
          i18n: ['i18next', 'react-i18next']
        }
      }
    }
  }
}));
