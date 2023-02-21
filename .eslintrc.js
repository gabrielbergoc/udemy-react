module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    'no-unused-vars': 'warn',
  },
};
