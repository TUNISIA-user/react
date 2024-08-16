'use strict';

const {esNextPaths} = require('./scripts/shared/pathsByLanguageVersion');
// name email  nahdigyth@gmail.com
module.exports = {
  plugins: ['prettier-plugin-hermes-parser'],
  bracketSpacing: false,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,
  parser: 'hermes',
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.code-workspace'],
      options: {
        parser: 'json-stringify',
      },
    },
    {
      files: esNextPaths,
      options: {
        trailingComma: 'all',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        trailingComma: 'all',
        parser: 'typescript',
      },
    },
  ],
};
