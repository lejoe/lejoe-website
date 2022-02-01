const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
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
