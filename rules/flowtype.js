'use strict';

module.exports = {

  // Flow type linting rules for ESLint.
  rules: {

    // Enforces a particular annotation style of complex types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-array-style-complex-type
    'flowtype/array-style-complex-type': 'warn',

    // Enforces a particular array type annotation style of simple types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-array-style-simple-type
    'flowtype/array-style-simple-type': 'warn',

    // Enforces a particular style for boolean type annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
    'flowtype/boolean-style': 'warn',

    // Marks Flow type identifiers as defined. Used to suppress no-undef reporting of type identifiers.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
    'flowtype/define-flow-type': 1,

    // Enforces consistent use of trailing commas in Object and Tuple annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-delimiter-dangle
    'flowtype/delimiter-dangle': 'warn',

    // Enforces consistent spacing within generic type annotation parameters.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-generic-spacing
    'flowtype/generic-spacing': 'warn',

    // This rule requires an empty line after the Flow annotation.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-newline-after-flow-annotation
    'flowtype/newline-after-flow-annotation': 'warn',

    // Checks for duplicate properties in Object annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-dupe-keys
    'flowtype/no-dupe-keys': 'error',

    // Disallows use of the existential type (*).
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-existential-type
    'flowtype/no-existential-type': 'error',

    // Disallows $FlowFixMe comment suppressions.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-flow-fix-me-comments
    'flowtype/no-flow-fix-me-comments': 'warn',

    // Requires use of $ReadOnlyArray instead of just Array or array shorthand notation.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-mutable-array
    'flowtype/no-mutable-array': 'off',

    // Disallows use of primitive constructors as types, such as Boolean, Number and String.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-primitive-constructor-types
    'flowtype/no-primitive-constructor-types': 'error',

    // Disallows Flow type imports, aliases, and annotations in files missing a valid Flow file declaration.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-types-missing-file-annotation
    'flowtype/no-types-missing-file-annotation': 'error',

    // An extension of ESLint's no-unused-expressions.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-unused-expressions
    'flowtype/no-unused-expressions': 'error',

    // Warns against weak type annotations any, Object and Function.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-weak-types
    'flowtype/no-weak-types': 'off',

    // Enforces consistent separators between properties in Flow object types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-object-type-delimiter
    'flowtype/object-type-delimiter': 'error',

    // This rule enforces exact object types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-exact-type
    'flowtype/require-exact-type': 'off',

    // Requires that all function parameters have type annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-parameter-type
    'flowtype/require-parameter-type': 'off',

    // Requires that functions have return type annotation.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type
    'flowtype/require-return-type': 'off',

    // Requires all type declarations to be at the top of the file, after any import declarations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-types-at-top
    'flowtype/require-types-at-top': 'warn',

    // This rule validates Flow file annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-valid-file-annotation
    'flowtype/require-valid-file-annotation': ['error', 'never', { annotationStyle: 'line' }],

    // Requires that all variable declarators have type annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-variable-type
    'flowtype/require-variable-type': 'off',

    // Enforces consistent use of semicolons after type aliases.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-semi
    'flowtype/semi': 'error',

    // Enforces sorting of Object annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-sort-keys
    'flowtype/sort-keys': 'warn',

    // Enforces consistent spacing after the type annotation colon.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-after-type-colon
    'flowtype/space-after-type-colon': 'warn',

    // Enforces consistent spacing before the opening < of generic type annotation parameters.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-generic-bracket
    'flowtype/space-before-generic-bracket': 'warn',

    // Enforces consistent spacing before the type annotation colon.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-type-colon
    'flowtype/space-before-type-colon': 'warn',

    // Enforces a consistent naming pattern for type aliases.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-id-match
    'flowtype/type-id-match': 'off',

    // Enforces a particular style for type imports.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-type-import-style
    'flowtype/type-import-style': ['warn', 'identifier'],

    // Enforces consistent spacing around union and intersection type separators (| and &).
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-union-intersection-spacing
    'flowtype/union-intersection-spacing': 'warn',

    // Marks Flow type alias declarations as used.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-use-flow-type
    'flowtype/use-flow-type': 1
  }
};
