const path = require('path');

const assert = require('assert');
const _ = require('lodash');
const CLIEngine = require('eslint').CLIEngine;

const getConfigFiles = require('./lib/getConfigFiles');
const getFileName = require('./lib/getFileName');

/**
 * Returns true, if eslint threw an error
 *
 * @param {Error|Object} lintResult result of linting
 * @returns {boolean}
 */
const hasLintThrown = function hasLintThrown(lintResult) {
  if (!_.isError(lintResult)) {
    return false;
  }

  console.error(lintResult.message);

  return true;
};

/**
 * Returns true, if eslint report contains invalid rule
 *
 * @param {Object} report eslint report
 * @returns {boolean}
 */
const hasReportInvalidRule = function hasReportInvalidRule(report) {
  const messages = report.results[0].messages;
  const hasInvalid = !_.isEmpty(messages);

  if (hasInvalid) {
    console.error(JSON.stringify(messages, null, 4));
  }

  return hasInvalid;
};

describe('eslint-config-ethereal', () => {
  getConfigFiles().forEach(configFile => {
    const configFileName = getFileName(configFile);

    it(`${configFileName} should not contain invalid rules`, () => {
      const cli = new CLIEngine({
        useEslintrc: false,
        configFile
      });
      const testFile = path.resolve(__dirname, 'example.js');
      const lintResult = _.attempt(() => cli.executeOnFiles([testFile]));

      const hasInvalidRule = hasLintThrown(lintResult) || hasReportInvalidRule(lintResult);

      assert.equal(
        hasInvalidRule,
        false,
        `${configFileName} config has no invalid rules`
      );
    });
  });
});
