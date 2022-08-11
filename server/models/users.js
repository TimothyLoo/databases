var db = require('../db');

module.exports = {
  getAll: function () {
    db.connection.query('SELECT * FROM `users`');
  }, // get all users
  create: function (email) {
    db.connection.query(
      'INSERT INTO `users` (`email`) VALUES (?)',
      [email]);
  } // create new user
};
