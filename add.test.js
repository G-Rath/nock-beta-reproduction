const { add } = require('./add');
const nock = require('nock');

// Nock configuration
// eslint-disable-next-line jest/require-hook
nock.disableNetConnect();

const unexpectedNetworkRequest = jest.fn();

// eslint-disable-next-line jest/require-hook
nock.emitter.on('no match', () => {
  unexpectedNetworkRequest();
});

it('adds', () => {
  expect(add(1, 2)).toBe(3);
});
