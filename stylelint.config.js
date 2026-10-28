module.exports = {
  // stylelint-config-recommended-vue sets the postcss-html syntax for .vue files
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // Tailwind directives
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
  },
}
