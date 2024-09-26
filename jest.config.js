const testEnvironment =
  process.env.JEST_TEST_ENVIRONMENT === 'jsdom'
    ? 'jsdom'
    : process.env.JEST_TEST_ENVIRONMENT === 'extended'
      ? './ExtendedJSDomEnvironment.js'
      : null;

console.log('using', testEnvironment, 'as the test environment');

module.exports = { testEnvironment };
