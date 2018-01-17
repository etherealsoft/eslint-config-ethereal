'use strict';

module.exports = {

  // JSDoc related rules for eslint
  rules: {

    // Require JSDoc comments
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': ['warn', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true
      }
    }],

    // Enforce valid JSDoc comments
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': ['warn', {
      prefer: { return: 'returns' },
      requireReturn: false,
      requireReturnType: true
    }]
  }
};
