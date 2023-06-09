module.exports = {
  ignorePatterns: ['/*', '!/src', '/src/**/*.js'],
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
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/display-name': 'off',
  },
  settings: {
    react: { version: '^18.2.0' },
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
}
