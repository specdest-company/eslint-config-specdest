import globals from "globals";
import js from "@eslint/js";
// import turbo from "eslint-config-turbo";
import airbnb from "eslint-config-airbnb";
import airbnbTypescript from "eslint-config-airbnb-typescript";
import prettier from "eslint-config-prettier";
// import tsParser from "@typescript-eslint/parser";
import tsEslint from "typescript-eslint";
import tsParser1 from "typescript-eslint";

import importPlugin from "eslint-plugin-import";
// import turboPlugin from "eslint-plugin-turbo";

import simpleImportPlugin from "eslint-plugin-simple-import-sort";
// import typescriptEslintPlugin from "@typescript-eslint";
// import tslintPlugin from "@typescript-eslint/tslint";
import importPlugin1 from "eslint-plugin-import";
import boundariesPlugin from "eslint-plugin-boundaries";
import sortKeysFixPlugin from "eslint-plugin-sort-keys-fix";
import reactHooksPlugin from "eslint-plugin-react-hooks";

import pluginReact from "eslint-plugin-react";

/** @type {import("eslint").Linter.Config} */
const mainRules = {
  // "arrow-parens": ["error", "as-needed"],
  "no-implicit-coercion": ["error", { boolean: false }],
  "object-shorthand": ["error", "always"],
  // "simple-import-sort/imports": "error",
  // "simple-import-sort/exports": "error",

  // // js
  eqeqeq: ["error", "always"],
  "no-console": ["error", { allow: ["warn", "error"] }],
  "no-undef": "error",
  "max-lines": ["error", 300],
  "no-debugger": "error",
  "no-plusplus": "error",
  complexity: ["error", 10],
  "max-lines-per-function": ["error", 120],
  "max-nested-callbacks": ["error", 3],
  "max-params": ["error", 4],
  "max-depth": ["error", 4],
  // TODO:
  // "import/no-extraneous-dependencies": [
  //   "error",
  //   {
  //     devDependencies: ["**/*.test.js", "**/*.spec.js", "**/*.test.ts"],
  //     // packageDir: [".", "../..", "../../packages/ui"], // <--- the key addition
  //   },
  // ],
  "no-await-in-loop": "error",
  "no-cond-assign": "error",
  "no-irregular-whitespace": "error",
  "no-loss-of-precision": "error",
  "no-unsafe-negation": "error",
  "func-style": ["error", "expression"],
  "no-alert": "error",
  "no-confusing-arrow": "error",
  "no-else-return": "error",
  "no-empty": "error",
  "no-eval": "error",
  "no-extra-boolean-cast": "error",
  "no-floating-decimal": "error",
  "no-nested-ternary": "error",
  "no-new": "error",
  "no-plusplus": "error",
  // 'import/no-default-export': ['error'],
  // TODO:
  // "import/prefer-default-export": "off",
  // "import/extensions": ["error", "never", { svg: "always" }],
  // "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
  // "import/order": [
  //   "error",
  //   {
  //     groups: [
  //       "builtin",
  //       "external",
  //       "parent",
  //       "sibling",
  //       "index",
  //       "object",
  //       "type",
  //     ],
  //     pathGroups: [
  //       {
  //         pattern: "{react,react-dom/**,react-router-dom}",
  //         group: "builtin",
  //         position: "before",
  //       },
  //       {
  //         pattern: "@src/**",
  //         group: "parent",
  //         position: "before",
  //       },
  //     ],
  //     pathGroupsExcludedImportTypes: ["builtin"],
  //     alphabetize: {
  //       order: "asc",
  //     },
  //     "newlines-between": "ignore",
  //   },
  // ],
  "no-multiple-empty-lines": "error",

  // react
  "react/function-component-definition": [
    2,
    {
      namedComponents: "arrow-function",
    },
  ],
  "react/react-in-jsx-scope": "off",
  "react/require-default-props": "off",
  "react/prop-types": "warn",
  "react/jsx-props-no-spreading": "off",
  // TODO:
  // "jsx-a11y/control-has-associated-label": "warn",
  // "jsx-a11y/no-static-element-interactions": "warn",
  // "jsx-a11y/click-events-have-key-events": "warn",
  // "jsx-a11y/img-redundant-alt": "warn",
  // "react-hooks/rules-of-hooks": "error",
  // "react-hooks/exhaustive-deps": "warn",
  "react/jsx-pascal-case": ["error", { allowNamespace: true }],
  "@typescript-eslint/no-unsafe-assignment": "off",
  // "react/forbid-elements": [
  //   "error",
  //   {
  //     forbid: [
  //       { element: "button", message: "use <Button> instead" },
  //       "input",
  //       "h1",
  //       "label",
  //       "div",
  //       "span",
  //       "main",
  //     ],
  //   },
  // ],
  "react/no-unescaped-entities": "off",

  // typescript
  "@typescript-eslint/no-unused-expressions": ["error"],
  // "@typescript-eslint/explicit-function-return-type": ["error"],
  "@typescript-eslint/ban-ts-comment": "error",
  // "@typescript-eslint/explicit-module-boundary-types": "error",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "parameter",
      format: ["PascalCase", "camelCase"],
      leadingUnderscore: "allow",
    },

    {
      selector: "memberLike",
      modifiers: ["private"],
      format: ["camelCase"],
      leadingUnderscore: "allow",
    },
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
  ],
  "@typescript-eslint/no-explicit-any": "error", // 'off' is acceptable for existing project.
  "@typescript-eslint/no-empty-function": [
    "error",
    { allow: ["arrowFunctions"] },
  ],
  "@typescript-eslint/no-use-before-define": "error", // 'off' is acceptable for existing project.
  "class-methods-use-this": "off",
  "no-void": ["error", { allowAsStatement: true }],

  // @deprecated https://github.com/palantir/tslint/
  // '@typescript-eslint/tslint/config': [
  //   'error',
  //   {
  //     rules: {
  //       // deprecation: true,
  //       'no-duplicate-imports': true,
  //       'no-duplicate-variable': [true, 'check-parameters'],
  //       'no-floating-promises': true,
  //       'no-implicit-dependencies': [true, ['node:child_process']],
  //       // 'no-import-side-effect': true,
  //       'no-shadowed-variable': true,
  //       'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
  //       'trailing-comma': true,
  //       'triple-equals': true,
  //     },
  //   },
  // ],
  "@typescript-eslint/consistent-type-imports": [
    "warn",
    {
      fixStyle: "separate-type-imports",
      prefer: "type-imports",
    },
  ],

  "@typescript-eslint/no-floating-promises": "error",
  // "@typescript-eslint/no-misused-promises": [
  //   2,
  //   { checksVoidReturn: { attributes: false } },
  // ],
  "@typescript-eslint/no-unused-vars": [
    "error",
    { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
  ],
  // TODO:
  // "sort-keys-fix/sort-keys-fix": "warn",
  // "turbo/no-undeclared-env-vars": "off",
  "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
};
const mainSettings = {
  react: {
    version: "detect",
  },
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"],
  },
  "import/resolver": {
    typescript: {
      alwaysTryTypes: true,
      project: ["apps/*/tsconfig.json", "./tsconfig.json"],
    },
  },
};
/** @type {import("eslint").Linter.Config} */
const baseConfig = {
  // extends: [
  //   "turbo",
  //   "eslint:recommended",
  //   "plugin:@typescript-eslint/recommended-type-checked",
  //   "plugin:@typescript-eslint/stylistic-type-checked",
  //   "plugin:@typescript-eslint/recommended",
  //   "airbnb",
  //   "airbnb-typescript",
  //   "plugin:import/recommended",
  //   "plugin:import/typescript",
  //   "prettier",
  // ],
  // ...turbo,
  // ...js.configs.recommended,
  // ...pluginReact.configs.flat.recommended,
  // ...tsEslint.configs.recommendedTypeChecked,
  // ...tsEslint.configs.strictTypeChecked,
  // ...tsEslint.configs.stylisticTypeChecked,
  // ...airbnbTypescript,
  // ...importPlugin.configs.recommended,
  // ...importPlugin.configs.typescript,
  // ...prettier,

  // files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

  // env: {
  //   es2022: true,
  //   browser: true,
  //   node: true,
  //   jest: true,
  // },
  // globals: {
  //   React: true,
  //   google: true,
  //   mount: true,
  //   mountWithRouter: true,
  //   shallow: true,
  //   shallowWithRouter: true,
  //   context: true,
  //   expect: true,
  //   jsdom: true,
  //   JSX: true,
  // },

  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
    globals: {
      ...globals.browser,
      myCustomGlobal: "readonly",
    },
    parser: tsEslint.parser,
  },

  // ignorePatterns: [
  //   "**/.eslintrc.cjs",
  //   "**/*.config.js",
  //   "**/*.config.cjs",
  //   "**/*.test.ts",
  //   "**/*.test.tsx",
  //   ".next",
  //   "dist",
  //   "pnpm-lock.yaml",
  //   "**/*.js",
  //   "**/*.json",
  //   "node_modules",
  //   "public",
  //   "styles",
  //   "coverage",
  //   ".turbo",
  // ],
  ignores: [
    "**/.eslintrc.cjs",
    "**/*.config.js",
    "**/*.config.cjs",
    "**/*.test.ts",
    "**/*.test.tsx",
    ".next",
    "dist",
    "pnpm-lock.yaml",
    "**/*.js",
    "**/*.json",
    "node_modules",
    "public",
    "styles",
    "coverage",
    ".turbo",
  ],
  // parser: "@typescript-eslint/parser",
  settings: mainSettings,
  // plugins: [
  //   "simple-import-sort",
  //   "@typescript-eslint",
  //   "@typescript-eslint/tslint",
  //   "import",
  //   "boundaries",
  //   "sort-keys-fix",
  //   "react-hooks",
  // ],
  plugins: {
    simpleImportPlugin,
    // typescriptEslintPlugin,
    // tslintPlugin,
    importPlugin,
    boundariesPlugin,
    sortKeysFixPlugin,
    reactHooksPlugin,
    turboPlugin,
  },
  rules: mainRules,
  // overrides: [
  //   {
  //     files: [
  //       "**/app/**/route.ts",
  //       "**/app/**/page.tsx",
  //       "**/app/**/layout.tsx",
  //       "**/src/**/middleware.ts",
  //     ],
  //     rules: {
  //       ...mainRules,
  //       "react/function-component-definition": [0],
  //       "func-style": [0],
  //     },
  //   },
  // ],
};

export default tsEslint.config(
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  baseConfig,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  ...tsEslint.configs.recommendedTypeChecked,
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  // airbnbTypescript,
  // importPlugin.configs.recommended,
  // importPlugin.configs.typescript,
  // prettier,
  {
    files: [
      "**/app/**/route.ts",
      "**/app/**/page.tsx",
      "**/app/**/layout.tsx",
      "**/src/**/middleware.ts",
    ],
    rules: {
      ...mainRules,
      "react/function-component-definition": [0],
      "func-style": [0],
    },
  },
);
