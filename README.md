## Introduction
This is meant to be Mosaic's living style guide for writing consistent javascript.
It extends [Airbnb's eslint configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
If you have any suggestions, [submit an issue](https://github.com/mosaic-builders/eslint-config/issues)!

## Installation
1. Install our shareable eslint config

```
$ yarn add --dev @mosaic-builders/eslint-config
```

2. Extend the eslintrc configuration

```
module.exports = {
  extends: '@mosaic-builders/eslint-config/node',
}
```

## Rulesets

#### Node
We have a node / server side javascript linting ruleset accessible at:
`@mosaic-builders/eslint-config/node`

#### React
We have a react / client side javascript linting ruleset accessible at:
`@mosaic-builders/eslint-config/react`

## Editor Integration
Visit ESLint's [integration guide](http://eslint.org/docs/user-guide/integrations) to enable ESLint in your editor of choice.
