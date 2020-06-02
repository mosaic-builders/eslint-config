module.exports = {
  extends: 'airbnb/base',
  parserOptions: {
    ecmaVersion: '2020',
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'max-len': ['error', { code: 90 }],
  },
};
