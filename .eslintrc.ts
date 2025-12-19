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

    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',

    // Prevent duplicate imports
    'import/no-duplicates': 'warn',

    // Disable conflicting rules
    'import/order': 'off',

    'import/named': 'off',

    // Optional: tighten rules here if desired
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
