const assert = require('assert');
const app = require('../../src/app');

describe('\'colusTrainingSimpleAppJson\' service', () => {
  it('registered the service', () => {
    const service = app.service('colusTrainingSimpleAppJson');

    assert.ok(service, 'Registered the service (colusTrainingSimpleAppJson)');
  });
});
