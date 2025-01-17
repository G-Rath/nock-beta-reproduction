const { default: JSDOMEnvironment } = require('jest-environment-jsdom');

/**
 * Provides an extended JSDOM-based environment that includes additional globals
 * that are not yet supported by JSDOM out of the box, using Node native equivalents
 */
class ExtendedJSDOMEnvironment extends JSDOMEnvironment {
  constructor(...args) {
    super(...args);

    // see https://github.com/jsdom/jsdom/issues/1724
    this.global.fetch = fetch;
    this.global.Request = Request;
    this.global.Response = Response;

    this.global.ReadableStream = ReadableStream;
    this.global.TextEncoder = TextEncoder;
  }
}

module.exports = ExtendedJSDOMEnvironment;
