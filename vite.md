# Vite Setup Cheatsheet

## Install vite

```sh
npm create vite@latest project_name
cd project_name
npm install
```

## @ Paths

> vite.config.ts

```ts
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  // "@" becomes the default path for src
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
```

## ESLint & Prettier

Install:

yarn add

```sh
npm install -D \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-typescript \
  eslint-config-prettier \
  eslint-import-resolver-typescript \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-unused-imports \
  prettier
```

> .eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],

  overrides: [],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "unused-imports",
    "prettier",
  ],

  rules: {
    "react/react-in-jsx-scope": "off",
    semi: ["error"],
    "spaced-comment": "error",
    indent: "off",
    quotes: ["error", "single"],
    "prettier/prettier": 2,
    "no-duplicate-imports": "error",
    "unused-imports/no-unused-imports": "error",
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
```

> .prettierrc

```json
{
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "jsxSingleQuote": true,
  "bracketSpacing": true
}
```

## Fix \_\_dirname error

```sh
npm i -D @types/node
```
