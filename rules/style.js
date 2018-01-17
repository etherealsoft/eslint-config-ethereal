'use strict';

const constants = require('../lib/constants');

module.exports = {

  // These rules relate to style guidelines, and are therefore quite subjective
  rules: {

    // Enforce line breaks after opening and before closing array brackets
    // http://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': 'off',

    // Enforce consistent spacing inside array brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': 'warn',

    // Enforce line breaks between array elements
    // http://eslint.org/docs/rules/array-element-newline
    'array-element-newline': 'off',

    // Enforce consistent spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': 'warn',

    // Enforce consistent brace style for blocks
    // http://eslint.org/docs/rules/brace-style
    'brace-style': 'warn',

    // Enforce camelcase naming convention
    // http://eslint.org/docs/rules/camelcase
    'camelcase': 'warn',

    // Enforce or disallow capitalization of the first letter of a comment
    // http://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['warn', 'always', { ignoreConsecutiveComments: true }],

    // Require or disallow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 'warn',

    // Enforce consistent spacing before and after commas
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': 'warn',

    // Enforce consistent comma style
    // http://eslint.org/docs/rules/comma-style
    'comma-style': 'warn',

    // Enforce consistent spacing inside computed property brackets
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': 'warn',

    // Enforce consistent naming when capturing the current execution contex
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': ['warn', 'self'],

    // Require or disallow newline at the end of files
    // http://eslint.org/docs/rules/eol-last
    'eol-last': 'warn',

    // Require or disallow spacing between function identifiers and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'warn',

    // Require function names to match the name of the variable or property to which they are assigned
    // http://eslint.org/docs/rules/func-name-matching
    'func-name-matching': 'error',

    // Require or disallow named function expressions
    // http://eslint.org/docs/rules/func-names
    'func-names': 'off',

    // Enforce the consistent use of either function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    'func-style': 'off',

    // Enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': 'warn',

    // Disallow specified identifiers
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // Enforce minimum and maximum identifier lengths
    // http://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    // http://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // Enforce consistent indentation
    // http://eslint.org/docs/rules/indent
    'indent': ['warn', constants.NUM_INDENT_CHARACTERS, { SwitchCase: 1 }],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': 'off',

    // Enforce consistent spacing between keys and values in object literal properties
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': 'warn',

    // Enforce consistent spacing before and after keywords
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 'warn',

    // Enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 'off',

    // Enforce consistent linebreak style
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',

    // Require empty lines around comments
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // Enforce a maximum depth that blocks can be nested
    // http://eslint.org/docs/rules/max-depth
    'max-depth': ['warn', constants.MAX_NESTING_DEPTH],

    // Enforce a maximum line length
    // http://eslint.org/docs/rules/max-len
    'max-len': ['warn', constants.MAX_LINE_LENGTH],

    // Enforce a maximum number of lines per file
    // http://eslint.org/docs/rules/max-lines
    'max-lines': 'off',

    // Enforce a maximum depth that callbacks can be nested
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['warn', constants.MAX_NESTING_DEPTH],

    // Enforce a maximum number of parameters in function definitions
    // http://eslint.org/docs/rules/max-params
    'max-params': 'off',

    // Enforce a maximum number of statements allowed in function blocks
    // http://eslint.org/docs/rules/max-statements
    'max-statements': 'off',

    // Enforce a maximum number of statements allowed per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 'off',

    // Enforce newlines between operands of ternary expressions
    // http://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',

    // Require constructor names to begin with a capital letter
    // http://eslint.org/docs/rules/new-cap
    'new-cap': 'warn',

    // Require parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'warn',

    // Require a newline after each call in a method chain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': 'warn',

    // Disallow Array constructors
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'warn',

    // Disallow bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'warn',

    // Disallow continue statements
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'warn',

    // Disallow inline comments after code
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // Disallow if statements as the only statement in else blocks
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'warn',

    // Disallow mixed binary operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'off',

    // Disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'warn',

    // Disallow Use of Chained Assignment Expressions
    // http://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'warn',

    // Disallow multiple empty lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['warn', { max: 1 }],

    // Disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'warn',

    // Disallow nested ternary expressions
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'warn',

    // Disallow Object constructors
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 'warn',

    // Disallow the unary operators ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // Disallow specified syntax
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 'off',

    // Disallow tabs in file
    // http://eslint.org/docs/rules/no-tabs
    'no-tabs': 'warn',

    // Disallow ternary operators
    // http://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines,
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'warn',

    // Disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'warn',

    // Disallow ternary operators when simpler alternatives exist
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 'warn',

    // Disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'warn',

    // Enforce the location of single-line statements
    // http://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': 'off',

    // Enforce consistent line breaks inside braces
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': 'warn',

    // Enforce consistent spacing inside braces
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['warn', 'always'],

    // Enforce placing object properties on separate lines
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['warn', { allowMultiplePropertiesPerLine: true }],

    // Enforce variables to be declared either together or separately in functions
    // http://eslint.org/docs/rules/one-var
    'one-var': ['warn', 'never'],

    // Require or disallow newlines around variable declarations
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': 'off',

    // Require or disallow assignment operator shorthand where possible
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': 'off',

    // Enforce consistent linebreak style for operators
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['warn', 'after', {
      overrides: {
        '?': 'after',
        ':': 'after'
      }
    }],

    // Require or disallow padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['warn', 'never'],

    // Require or disallow padding lines between statements
    // http://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': ['warn', {
      blankLine: 'always',
      prev: '*',
      next: 'return'
    }, {
      blankLine: 'always',
      prev: 'directive',
      next: '*'
    }],

    // Require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props
    'quote-props': ['warn', 'consistent-as-needed'],

    // Enforce the consistent use of either backticks, double, or single quotes
    // http://eslint.org/docs/rules/quotes
    'quotes': ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],

    // Require JSDoc comments
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // Require or disallow semicolons instead of ASI
    // http://eslint.org/docs/rules/semi
    'semi': 'error',

    // Enforce consistent spacing before and after semicolons
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': 'warn',

    // Enforce location of semicolons
    // http://eslint.org/docs/rules/semi-style
    'semi-style': 'error',

    // Require object keys to be sorted
    // http://eslint.org/docs/rules/sort-keys
    'sort-keys': 'warn',

    // Require variables within the same declaration block to be sorted
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': 'warn',

    // Enforce consistent spacing before blocks
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'warn',

    // Enforce consistent spacing before function definition opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['warn', {
      anonymous: 'always',
      named: 'never'
    }],

    // Enforce consistent spacing inside parentheses
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': 'warn',

    // Require spacing around infix operators
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'warn',

    // Enforce consistent spacing before or after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': 'warn',

    // Enforce consistent spacing after the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': 'warn',

    // Enforce spacing around colons of switch statements
    // http://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': 'warn',

    // This rule aims to maintain consistency around the spacing between
    // template tag functions and their template literals.
    // http://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': 'warn',

    // Require or disallow Unicode byte order mark (BOM)
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': 'off',

    // Require parenthesis around regex literals
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'warn'
  }
};
