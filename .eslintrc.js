// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    // Next.js + React 17+
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // Import order
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // e.g. fs, path
          'external', // e.g. react, next
          'internal', // e.g. @/components/*
          'parent', // e.g. ../
          'sibling', // e.g. ./Button
          'index', // e.g. ./
          'object', // e.g. import * as something from ...
          'type', // import type { Foo }
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/named': 'off',

    // Optional: tighten rules here if desired
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
