var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll();
    res.end();
  },
  post: function (req, res) {
    console.log(req.body);
    models.users.create(req.body.username);
    res.end();
  }
};
