'use strict';

const path = require('path');

const pkg = require('../../package.json');

module.exports = function getConfigFiles() {
  const isConfigFileRegExp = /^[a-zA-Z0-9-]+\.js$/u;

  return pkg.files
    .filter(filePath => isConfigFileRegExp.test(filePath))
    .map(configFilePath => path.resolve(__dirname, '../../', configFilePath));
};
