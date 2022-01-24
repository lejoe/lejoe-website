const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    mode: 'jit',
    purge: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        big: ['Raleway', ...defaultTheme.fontFamily.serif],
      },
      minHeight: {
        90: '90vh',
      },
    },
  },
}
