module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/alt-text': 'off',
    'no-unused-vars': 'off',
    'max-len': 'off',
    'react/no-unescaped-entities': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/button-has-type': 'off',
  },
};
