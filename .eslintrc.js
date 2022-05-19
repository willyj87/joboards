module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:jest/recommended'],
  rules: {
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [0, { allow: 'as-needed' }],
    'no-param-reassign': ['error', { props: false }],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  settings: {
    jest: {
      version: 27,
    },
  },
};
