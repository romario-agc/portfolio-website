import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
  ),
  {
    rules: {
      // Accessibility — matches DS V35 §10
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/no-redundant-roles': 'warn',
      'jsx-a11y/heading-has-content': 'error',

      // TypeScript strictness
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // React best practices
      'react/no-unescaped-entities': 'off', // We handle this with &apos;
      'react/self-closing-comp': 'warn',

      // Import ordering
      'import/order': ['warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      }],
    },
  },
];

export default eslintConfig;
