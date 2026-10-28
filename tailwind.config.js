const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Source Sans Pro',
          'source-sans-pro-fallback',
          ...defaultTheme.fontFamily.sans,
        ],
        big: ['Prompt', 'prompt-fallback', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
