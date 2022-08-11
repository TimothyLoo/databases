var db = require('../db');

//get req from controller, use that as a query to send to database for info

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) { // messages
    db.connection.query('SELECT * FROM `messages`', [], (err, results)=>{
      console.log(results);
      callback(err, results);
    });
  },

  create: function (username, text, roomname, idUsers) {
    db.connection.query('INSERT INTO `messages` (`username`, `text`, `roomname`, `id_users`) VALUES (?, ?, ?, ?)',
      [username, text, roomname, idUsers]
    );
  } // a function which can be used to insert a message into the database
};