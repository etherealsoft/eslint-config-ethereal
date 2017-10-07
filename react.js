module.exports = {
  extends: [
    './rules/react'
  ].map(require.resolve),
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: [
    'react'
  ]
};
