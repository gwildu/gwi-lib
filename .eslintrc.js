module.exports = {
  extends: ['standard', 'prettier'],
  plugins: ['standard', 'promise', 'html', 'prettier'],
  settings: {
    'html/indent': '+2',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js'] }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        semi: false,
        parser: 'babylon',
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    'no-duplicate-imports': 0,
    'import/prefer-default-export': 0,
    'max-len': [
      'error',
      80,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
  },
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  globals: {},
}
