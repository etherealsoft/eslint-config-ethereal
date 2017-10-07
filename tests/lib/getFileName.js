const path = require('path');

module.exports = function getConfigFileName(filePath) {
  return path.basename(filePath);
};
