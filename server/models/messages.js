var db = require('../db');

module.exports = {
  getAll: function () { /*SELECT * FROM messages;*/ }, // a function which produces all the messages
  create: function () { /*INSERT INTO messages (...columns) VALUES (...rows)*/ } // a function which can be used to insert a message into the database
};
