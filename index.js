import globals from "globals";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tsEslint from "typescript-eslint";

import turboPlugin from "eslint-plugin-turbo";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupPluginRules } from "@eslint/compat";
import path from "path";
import { fileURLToPath } from "url";
// import boundariesPlugin from "eslint-plugin-boundaries"; // disallows some imports in other folder
import sortKeysFixPlugin from "eslint-plugin-sort-keys-fix";

import pluginReact from "eslint-plugin-react";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 
const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: js.configs.recommended, // optional unless using "eslint:recommended"
  allConfig: js.configs.all, // optional unless using "eslint:all"
});
/** @type {import("eslint").Linter.Config} */
const mainRules = {
  // "arrow-parens": ["error", "as-needed"],
  "no-implicit-coercion": ["error", { boolean: false }],
  "object-shorthand": ["error", "always"],

  // js
  semi: ["error", "always"],
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
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "react/jsx-pascal-case": ["error", { allowNamespace: true }],
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
  "@typescript-eslint/no-unsafe-assignment": "error",
  "@typescript-eslint/no-unused-expressions": ["error"],
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/ban-ts-comment": "error",
  "@typescript-eslint/explicit-module-boundary-types": "off",
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

  "@typescript-eslint/consistent-type-imports": [
    "warn",
    {
      fixStyle: "separate-type-imports",
      prefer: "type-imports",
    },
  ],

  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-misused-promises": [
    2,
    { checksVoidReturn: { attributes: false } },
  ],
  // "@typescript-eslint/no-unused-vars": [
  //   "error",
  //   { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
  // ],
  "no-unused-vars": "off", // turn off for "unused-imports/no-unused-vars"
  "@typescript-eslint/no-unused-vars": "off", // turn off for "unused-imports/no-unused-vars"
  "unused-imports/no-unused-imports": "error",
  "unused-imports/no-unused-vars": [
    "warn",
    {
      vars: "all",
      varsIgnorePattern: "^_",
      args: "after-used",
      argsIgnorePattern: "^_",
    },
  ],
  // TODO:
  "sort-keys-fix/sort-keys-fix": "warn",
  "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    {
      allowNumber: true,
      allowBoolean: true,
    },
  ],

  // turbo
  "turbo/no-undeclared-env-vars": "error",
};
const mainSettings = {
  react: {
    version: "detect",
  },

  "import/resolver": {
    typescript: {
      alwaysTryTypes: true,
      project: ["apps/*/tsconfig.json", "./tsconfig.json"],
    },
  },
};

/**
 * @param {string} name the pugin name
 * @param {string} alias the plugin alias
 * @returns {import("eslint").ESLint.Plugin}
 */
function legacyPlugin(name, alias = name) {
  const plugin = compat.plugins(name)[0]?.plugins?.[alias];

  if (!plugin) {
    throw new Error(`Unable to resolve plugin ${name} and/or alias ${alias}`);
  }

  return fixupPluginRules(plugin);
}
/** @type {import("eslint").Linter.Config} */
const baseConfig = {
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
  settings: mainSettings,
  plugins: {
    "react-hooks": legacyPlugin("eslint-plugin-react-hooks", "react-hooks"),
    "unused-imports": legacyPlugin(
      "eslint-plugin-unused-imports",
      "unused-imports",
    ),
    // boundariesPlugin,
    "sort-keys-fix": sortKeysFixPlugin,
    turbo: turboPlugin,
  },
  rules: mainRules,
};

export default tsEslint.config(
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    ignores: ["src/router.ts", "src/__generated__/**"],
  },
  { languageOptions: { globals: globals.browser } },
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

   
  prettier,
  baseConfig,
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
