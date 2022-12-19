

'use strict';

const vueSyntax = require('postcss-html')();

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: vueSyntax,
    },
  ],
};
