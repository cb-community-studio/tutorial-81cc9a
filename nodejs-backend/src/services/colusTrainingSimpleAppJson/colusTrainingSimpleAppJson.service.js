const { ColusTrainingSimpleAppJson } = require('./colusTrainingSimpleAppJson.class');
const createModel = require('../../models/colusTrainingSimpleAppJson.model');
const hooks = require('./colusTrainingSimpleAppJson.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/colusTrainingSimpleAppJson', new ColusTrainingSimpleAppJson(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('colusTrainingSimpleAppJson');

  service.hooks(hooks);
};