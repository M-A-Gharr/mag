import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { pagesPlugin } from "./build/pagesPlugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/", 
  plugins: [
    react(),
    pagesPlugin(),
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
          animation: ['framer-motion'],
          i18n: ['i18next', 'react-i18next']
        }
      }
    }
  }
}));
