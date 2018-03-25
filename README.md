![npm](https://img.shields.io/npm/v/@ethereal-soft/eslint-config-ethereal.svg?style=flat-square)
![license](https://img.shields.io/npm/l/@ethereal-soft/eslint-config-ethereal.svg?style=flat-square)
![build](https://img.shields.io/travis/etherealsoft/eslint-config-ethereal/master.svg?style=flat-square)

![dependencies](https://img.shields.io/david/etherealsoft/eslint-config-ethereal.svg?style=flat-square)
![dev dependencies](https://img.shields.io/david/dev/etherealsoft/eslint-config-ethereal.svg?style=flat-square)
![peer dependencies](https://img.shields.io/david/peer/etherealsoft/eslint-config-ethereal.svg?style=flat-square)

## Synopsis

Recommended standards for coding in the JavaScript programming language represented as a set of ESLint configurations.

## Motivation

These configurations represent a set of standards that when followed are intended to increase the consistency, readability and correctness of software written in the JavaScript language.

## Installation

    npm install --save-dev @ethereal-soft/eslint-config-ethereal

## Usage

This package exports the following ESLint configurations.

* [@ethereal-soft/eslint-config-ethereal](#ethereal) - default config, ECMAScript 5
* [@ethereal-soft/eslint-config-ethereal/es2015](#ethereales2015) - ECMAScript 2015
* [@ethereal-soft/eslint-config-ethereal/es2016](#ethereales2016) - ECMAScript 2016
* [@ethereal-soft/eslint-config-ethereal/es2017](#ethereales2017) - ECMAScript 2017
* [@ethereal-soft/eslint-config-ethereal/babel-es2015](#etherealbabel-es2015) - Babel ECMAScript 2015
* [@ethereal-soft/eslint-config-ethereal/babel-es2016](#etherealbabel-es2016) - Babel ECMAScript 2016
* [@ethereal-soft/eslint-config-ethereal/babel-es2017](#etherealbabel-es2017) - Babel ECMAScript 2017
* [@ethereal-soft/eslint-config-ethereal/babel-stage-2](#etherealbabel-stage-2) - Babel ECMAScript Stage 2
* [@ethereal-soft/eslint-config-ethereal/node](#etherealnode) - Node.js
* [@ethereal-soft/eslint-config-ethereal/react](#etherealreact) - React.js/JSX
* [@ethereal-soft/eslint-config-ethereal/flowtype](#etherealflowtype) - Flow
* [@ethereal-soft/eslint-config-ethereal/jsdoc](#etherealjsdoc) - JSDoc

### ethereal

ESLint rules for ECMAScript 5.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal"]` to your `.eslintrc.json` config.

### ethereal/es2015

ESLint rules for ECMAScript 2015.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/es2015"]` to your `.eslintrc.json` config.

### ethereal/es2016

ESLint rules for ECMAScript 2016.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/es2016"]` to your `.eslintrc.json` config.

### ethereal/es2017

ESLint rules for ECMAScript 2017.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/es2017"]` to your `.eslintrc.json` config.

### ethereal/babel-es2015

ESLint rules for Babel ECMAScript 2015.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/babel-es2015"]` to your `.eslintrc.json` config.

### ethereal/babel-es2016

ESLint rules for Babel ECMAScript 2016.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/babel-es2016"]` to your `.eslintrc.json` config.

### ethereal/babel-es2017

ESLint rules for Babel ECMAScript 2017.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/babel-es2017"]` to your `.eslintrc.json` config.

### ethereal/babel-stage-2

ESLint rules for Babel ECMAScript Stage 2.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/babel-stage-2"]` to your `.eslintrc.json` config.

### ethereal/node

ESLint rules for NodeJS.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/node"]` to your `.eslintrc.json` config.

### ethereal/react

ESLint rules for ReactJS.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/react"]` to your `.eslintrc.json` config.

### ethereal/flowtype

ESLint rules for Flow.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/flowtype"]` to your `.eslintrc.json` config.

### ethereal/jsdoc

ESLint rules for JSDoc comments.

Configuration:

* add `"extends": ["@ethereal-soft/eslint-config-ethereal/jsdoc"]` to your `.eslintrc.json` config.

## Contributors

Stephen M. Senesac <stephen.senesac@ethereal-soft.com>

## License

MIT
