const users = require("./users/users.service.js");
const colusTrainingSimpleAppJson = require("./colusTrainingSimpleAppJson/colusTrainingSimpleAppJson.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(colusTrainingSimpleAppJson);
    // ~cb-add-configure-service-name~
};
