import { defineConfig } from "eslint/config";

import css from "@eslint/css";
import html from "@html-eslint/eslint-plugin";

export default defineConfig([
  // ...other configs
  // Lint CSS files for Baseline:
  {
    files: ["**/*.css"],
    plugins: {
      css,
    },
    language: "css/css",
    rules: {
      // Lint CSS files to make sure they are using
      // only Baseline Widely available features:
      "css/use-baseline": [
        "warn",
        {
          available: "widely",
        },
      ],
    },
  },
  // Lint HTML and JSX files for Baseline:
  {
    files: ["**/*.html"],
    ...html.configs["flat/recommended"],
    rules: {
      // Lint HTML files to make sure they are using
      // only Baseline Widely available features:
      "@html-eslint/use-baseline": [
        "warn",
        {
          available: "widely",
        },
      ],
    },
  },
]);
