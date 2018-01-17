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
    './rules/style',
    './rules/variables',
    './rules/es2015',
    './rules/babel'
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: { impliedStrict: true }
  },
  plugins: [
    'babel',
    'import'
  ],
  settings: {
    'import/ignore': [
      'node_modules'
    ],
    'import/resolver': { node: { extensions: ['.js', '.jsx'] } }
  }
};
