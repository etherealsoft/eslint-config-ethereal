[![npm](https://img.shields.io/npm/v/eslint-config-ethereal.svg?style=flat-square)](https://www.npmjs.com/package/@ethereal-soft/eslint-config-ethereal)
[![License](https://img.shields.io/npm/l/eslint-config-ethereal.svg?style=flat-square)](https://github.com/etherealsoft/eslint-config-ethereal/blob/master/LICENSE)
[![Travis branch](https://img.shields.io/travis/etherealsoft/eslint-config-ethereal/master.svg?style=flat-square)](https://travis-ci.org/etherealsoft/eslint-config-ethereal)

[![Dependency Status](https://img.shields.io/david/etherealsoft/eslint-config-ethereal.svg?style=flat-square)](https://david-dm.org/etherealsoft/eslint-config-ethereal)
[![devDependency Status](https://img.shields.io/david/dev/etherealsoft/eslint-config-ethereal.svg?style=flat-square)](https://david-dm.org/etherealsoft/eslint-config-ethereal#info=devDependencies)
[![peerDependency Status](https://img.shields.io/david/peer/etherealsoft/eslint-config-ethereal.svg?style=flat-square)](https://david-dm.org/etherealsoft/eslint-config-ethereal#info=peerDependencies)

## Synopsis

Recommended standards for coding in the JavaScript programming language represented as a set of ESLint configurations.

## Motivation

These configurations represent a set of standards that when followed are intended to increase the consistency, readability and correctness of software written in the JavaScript language.

## Installation

    npm install --save-dev eslint-config-ethereal eslint babel-eslint eslint-plugin-import eslint-plugin-babel eslint-plugin-react eslint-plugin-class-property

## Usage

This package exports the following ESLint configurations.

* [ethereal](#ethereal) - default config, ECMAScript 5
* [ethereal/es2015](#ethereales2015) - ECMAScript 2015
* [ethereal/es2016](#ethereales2016) - ECMAScript 2016
* [ethereal/es2017](#ethereales2017) - ECMAScript 2017
* [ethereal/babel-es2015](#etherealbabel-es2015) - Babel ECMAScript 2015
* [ethereal/babel-es2016](#etherealbabel-es2016) - Babel ECMAScript 2016
* [ethereal/babel-es2017](#etherealbabel-es2017) - Babel ECMAScript 2017
* [ethereal/babel-stage-2](#etherealbabel-stage-2) - Babel ECMAScript Stage 2
* [ethereal/node](#etherealnode) - Node.js
* [ethereal/react](#etherealreact) - React.js/JSX
* [ethereal/jsdoc](#etherealjsdoc) - JSDoc

### ethereal

ESLint rules for ECMAScript 5.

Requires:

* `eslint`
* `eslint-plugin-import`

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint-plugin-import eslint`
2. add `"extends": ["ethereal"]` to your `.eslintrc.json` config.

### ethereal/es2015

ESLint rules for ECMAScript 2015.

Requires:

* `eslint`
* `eslint-plugin-import`

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint-plugin-import eslint`
2. add `"extends": ["ethereal/es2015"]` to your `.eslintrc.json` config.

### ethereal/es2016

ESLint rules for ECMAScript 2016.

Requires:

* `eslint`
* `eslint-plugin-import`

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint-plugin-import eslint`
2. add `"extends": ["ethereal/es2016"]` to your `.eslintrc.json` config.

### ethereal/es2017

ESLint rules for ECMAScript 2017.

Requires:

* `eslint`
* `eslint-plugin-import`

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint-plugin-import eslint`
2. add `"extends": ["ethereal/es2017"]` to your `.eslintrc.json` config.

### ethereal/babel-es2015

ESLint rules for Babel ECMAScript 2015.

Requires:

* `eslint`
* `eslint-plugin-babel`
* `eslint-plugin-import`

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint-plugin-babel eslint-plugin-import eslint`
2. add `"extends": ["ethereal/babel-es2015"]` to your `.eslintrc.json` config.

### ethereal/babel-es2016

ESLint rules for Babel ECMAScript 2016.

Requires:

* `eslint`
* `eslint-plugin-babel`
* `eslint-plugin-import`

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint-plugin-babel eslint-plugin-import eslint`
2. add `"extends": ["ethereal/babel-es2016"]` to your `.eslintrc.json` config.

### ethereal/babel-es2017

ESLint rules for Babel ECMAScript 2017.

Requires:

* `eslint`
* `eslint-plugin-babel`
* `eslint-plugin-import`

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint-plugin-babel eslint-plugin-import eslint`
2. add `"extends": ["ethereal/babel-es2017"]` to your `.eslintrc.json` config.

### ethereal/babel-stage-2

ESLint rules for Babel ECMAScript Stage 2.

Requires:

* `eslint`
* `eslint-plugin-babel`
* `eslint-plugin-import`

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint-plugin-babel eslint-plugin-import eslint`
2. add `"extends": ["ethereal/babel-stage-2"]` to your `.eslintrc.json` config.

### ethereal/node

ESLint rules for NodeJS.

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint`
2. add `"extends": ["ethereal/node"]` to your `.eslintrc.json` config.

### ethereal/react

ESLint rules for ReactJS.

Requires:

* `eslint`
* `eslint-plugin-react`

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint-plugin-react eslint`
2. add `"extends": ["ethereal/react"]` to your `.eslintrc.json` config.

### ethereal/jsdoc

ESLint rules for JSDoc comments.

Requires:

* `eslint`

Installation:

1. `npm install --save-dev eslint-config-ethereal eslint`
2. add `"extends": ["ethereal/jsdoc"]` to your `.eslintrc.json` config.

## Contributors

Stephen M. Senesac <stephen.senesac@ethereal-soft.com>

## License

MIT
