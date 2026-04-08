

'use strict';

const vueSyntax = require('postcss-html')();

module.exports = {
  plugins: ['stylelint-plugin-logical-css'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    'logical-css/require-logical-keywords': true,
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'selector-class-pattern': [
      '^[a-z0-9_-]*$',
      {},
    ],
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: vueSyntax,
    },
  ],
};
