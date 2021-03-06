module.exports = {
  parserOptions: {
    ecmaVersion: '2018',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'no-prototype-builtins': ['off'],

    'use-isnan': ['error'],

    'array-bracket-spacing': ['warn', 'never'],
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['warn', 'always-multiline'],
    'dot-location': ['warn', 'property'],
    'dot-notation': ['warn'],
    'eol-last': ['warn', 'always'],
    'func-call-spacing': ['warn', 'never'],
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'new-parens': ['warn', 'never'],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],
    'no-extra-boolean-cast': ['warn'],
    'no-extra-semi': ['warn'],
    'no-trailing-spaces': ['warn', { skipBlankLines: false, ignoreComments: true }],
    'object-curly-spacing': ['warn', 'always',  { arraysInObjects: false, objectsInObjects: true }],
    'prefer-regex-literals': ['warn'],
    'quotes': ['warn', 'single'],
    'semi-spacing': ['warn', { before: false, after: true }],
    'semi': ['warn', 'always'],
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': ['warn', 'always'],
    'switch-colon-spacing': ['warn', { after: true, before: false }],
    'wrap-iife': ['warn', 'inside'],
    'wrap-regex': ['warn'],
  },
};
