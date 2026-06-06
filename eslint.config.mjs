import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
  // 1. Глобальные игноры
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/build/**"],
  },

  // 2. Базовые рекомендации
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. React — только для приложений и UI-библиотеки
  {
    files: ["apps/**/*.{ts,tsx}", "packages/ui/**/*.{ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // новый JSX-трансформ (React 17+/19)
      "react/prop-types": "off", // типы берём из TypeScript
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },

  // 4. Node-окружение для конфигов и пакета webpack
  {
    files: ["packages/webpack/**/*.ts", "**/*.config.{ts,mjs,js}"],
    languageOptions: { globals: { ...globals.node } },
  },

  // 5. Prettier — ВСЕГДА последним, гасит конфликтующие правила
  prettier,
);
