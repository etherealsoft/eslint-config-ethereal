'use strict';

module.exports = {

  // These rules relate to code running in Node.js, or in browsers with CommonJS
  rules: {

    // Require return statements after callbacks
    // http://eslint.org/docs/rules/callback-return
    'callback-return': 'error',

    // Require require() calls to be placed at top-level module scope
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // Require error handling in call
    // http://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': ['warn', '^(err|error)$'],

    // Disallow use of the Buffer() constructor
    // http://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // Disallow require calls to be mixed with regular variable declarations
    // http://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': 'warn',

    // Disallow new operators with calls to require
    // http://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // Disallow the use of process.env
    // http://eslint.org/docs/rules/no-process-env
    'no-process-env': 'warn',

    // Disallow the use of process.exit()
    // http://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'warn',

    // Disallow Node.js modules
    // http://eslint.org/docs/rules/no-restricted-modules
    // 'no-restricted-modules': ['error', '']

    // Disallow synchronous methods
    // http://eslint.org/docs/rules/no-sync
    'no-sync': 'warn'
  }
};
