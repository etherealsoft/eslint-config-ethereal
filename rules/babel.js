'use strict';

module.exports = {

  // An eslint plugin companion to babel-eslint. babel-eslint does a great job at adapting eslint for use with Babel,
  // but it can't change the built in rules to support experimental features. eslint-plugin-babel re-implements
  // problematic rules so they do not give false positives or negatives.
  // https://github.com/yannickcr/eslint-plugin-react
  rules: {

    // Disable eslint rules broken by babel-eslint
    'new-cap': 'off',
    'no-invalid-this': 'off',
    'object-curly-spacing': 'off',
    'quotes': 'off',
    'semi': 'off',
    'no-unused-expressions': 'off',

    // Ignores capitalized decorators
    'babel/new-cap': 'warn',

    // Disallow `this` keywords outside of classes or class-like objects
    'babel/no-invalid-this': 'error',

    // Doesn't complain about export x from "mod"; or export * as x from "mod"
    'babel/object-curly-spacing': ['warn', 'always'],

    // Doesn't complain about JSX fragment shorthand syntax (<>foo</>;)
    'babel/quotes': ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],

    // Includes class properties
    'babel/semi': 'error',

    // Doesn't fail when using do expressions
    'babel/no-unused-expressions': 'error'
  }
};
