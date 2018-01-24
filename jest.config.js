module.exports = {
  verbose: true,
  testMatch: ['**/*test.js'],
  collectCoverageFrom: ['/**/*.js?(x)'],
  testPathIgnorePatterns: ['/lib'],
  browser: false,
  testEnvironment: 'node',
}
