module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 2,
        '@typescript-eslint/consistent-type-imports': [
          2,
          { disallowTypeAnnotations: false },
        ],
      },
    },
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['./**/*.{ts,tsx}'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: { 'prettier/prettier': 'error' },
  settings: {
    react: { version: '^18.2.0' },
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
}
