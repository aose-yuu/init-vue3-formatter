const PACKAGES_TO_INSTALL = [
  'eslint',
  'eslint-plugin-vue',
  'eslint-plugin-import',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'prettier',
  '@vue/eslint-config-prettier',
  'stylelint',
  'stylelint-config-recess-order',
  'stylelint-config-recommended',
  'stylelint-config-recommended-scss',
];

const CONFIG_FILES = [
  '.eslintrc.json',
  '.prettierrc.json',
  '.stylelintrc.json',
  'shims.d.ts',
];

module.exports = { PACKAGES_TO_INSTALL, CONFIG_FILES };
