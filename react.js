'use strict';

module.exports = {
  extends: [
    './rules/react'
  ].map(require.resolve),
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: '16.4',
      flowVersion: '0.79'
    }
  }
};
