const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    mode: 'jit',
    purge: ['./**/*.{js,jsx,ts,tsx,vue}'],
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
