import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Build output, and local work files that are not part of the site (see .gitignore)
  { ignores: ["dist", "compos.js", "output", "projectSimtis", "chatbase", "Video", "scripts/video"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        // Shared animation settings exported next to the motion components
        { allowConstantExport: true, allowExportNames: ["EASE_OUT", "staggerItem"] },
      ],
      // Unused code is reported by TypeScript (noUnusedLocals, noUnusedParameters)
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    // shadcn/ui components export their style variants next to the component, by design
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: { "react-refresh/only-export-components": "off" },
  }
);
