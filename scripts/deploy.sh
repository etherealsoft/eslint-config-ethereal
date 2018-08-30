#!/bin/bash

set -e

echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > .npmrc
npm publish --access public
