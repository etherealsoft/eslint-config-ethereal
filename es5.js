'use strict';

module.exports = {
  env: { 'shared-node-browser': true },
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/import',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  plugins: [
    'import'
  ],
  settings: {
    'import/ignore': [
      'node_modules'
    ]
  }
};
