const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    mode: 'jit',
    purge: ['./**/*.{js,jsx,ts,tsx,vue}'],
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        90: '90vh',
      },
    },
  },
}
