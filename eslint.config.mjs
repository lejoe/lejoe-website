// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

// Prettier handles formatting: turn off ESLint rules that conflict with it
export default withNuxt(eslintConfigPrettier)
