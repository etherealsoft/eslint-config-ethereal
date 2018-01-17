'use strict';

module.exports = {
  env: {
    'es6': true,
    'shared-node-browser': true
  },
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/import',
    './rules/strict',
    './rules/style',
    './rules/variables',
    './rules/es2015'
  ].map(require.resolve),
  parserOptions: { ecmaVersion: 8 },
  plugins: [
    'import'
  ],
  settings: {
    'import/ignore': [
      'node_modules'
    ]
  }
};
