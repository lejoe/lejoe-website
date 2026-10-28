// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Claude Code worktrees are full copies of the repo: don't lint them
  { ignores: ['.claude/worktrees/'] },
  // Prettier handles formatting: turn off ESLint rules that conflict with it
  eslintConfigPrettier,
)
