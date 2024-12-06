/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  ignorePatterns: ['postcss.config.js'],
}
