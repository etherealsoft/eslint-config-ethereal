'use strict';

module.exports = {
  extends: [
    './rules/jsdoc'
  ].map(require.resolve)
};
