module.exports = {
  // stylelint-config-recommended-vue sets the postcss-html syntax for .vue files
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // Tailwind CSS 4 directives
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'theme',
          'custom-variant',
          'utility',
          'variant',
          'apply',
          'source',
          'plugin',
          'reference',
        ],
      },
    ],
    // Tailwind resolves @import 'tailwindcss' only in string form
    'import-notation': 'string',
  },
}
