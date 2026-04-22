import stylistic from '@stylistic/eslint-plugin'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: [
      '.nuxt/**',
      '.output/**',
      'node_modules/**',
      'dist/**',
    ],
  },
  ...vue.configs['flat/recommended'],
  {
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: {
          ts: tsParser,
          js: vueParser,
        },
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]