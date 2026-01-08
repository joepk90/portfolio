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
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'simple-import-sort', 'import'],
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
    'plugin:storybook/recommended',
  ],
  rules: {
    // Next.js + React 17+
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // Use a single import sorter (simple-import-sort) and disable import/order
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Style imports first (keep .scss at top)
          ['^.+\\.scss$'],
          // Keep react first, then external packages
          ['^react', '^@?\\w'],
          // Internal aliases (project scope)
          ['^@components', '^@lib', '^@pages', '^@styles'],
          // Parent, sibling and index
          ['^\.\./', '^\./'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // Prevent duplicate imports
    'import/no-duplicates': 'warn',

    // Disable conflicting rules
    // 'import/order': 'off',

    'import/named': 'off',

    // Optional: tighten rules here if desired
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // Prevent circular imports
    'import/no-cycle': ['error', { maxDepth: 1 }],
  },
};
