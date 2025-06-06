eslint config

# Usage

1. `pnpm install git+https://github.com/specdest-company/tool_config_eslint.git -D`
2. add this to `eslint.config.js`

   ```js
   import customConfig from "@matart15/eslint-config-specdest";

   export default [
     ...customConfig,
     {
       languageOptions: {
         parserOptions: {
           tsconfigRootDir: import.meta.dirname,
         },
       },
     },
   ];
   ```

# Contribution

- `pnpm i`
- `git add .`
- `git cz`
- `pnpm release` this increments git tag and push to github
