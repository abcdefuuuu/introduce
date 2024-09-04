
const { rules } = require('ocard-eslint');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    root: true,
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/eslint-config-airbnb',
        'plugin:vue/vue-recommended',
        'plugin:tailwindcss/recommended',
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
