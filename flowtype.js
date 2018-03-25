'use strict';

module.exports = {
  extends: [
    './rules/flowtype'
  ].map(require.resolve),
  plugins: ['flowtype'],
  settings: { flowtype: { onlyFilesWithFlowAnnotation: true } }
};
