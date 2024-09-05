const { rules } = require('ocard-eslint');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  root: true,
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/eslint-config-airbnb',
    'plugin:vue/recommended',
    // 'plugin:tailwindcss/recommended',
  ],
  settings: {
    ...createAliasSetting({
      '@': __dirname,
    }),
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
  plugins: ['vue'],
  rules,
};
