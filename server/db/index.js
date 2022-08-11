const mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

// This query gets all messages (gets used in models/messages)
connection.query(
  'SELECT * FROM `messages`',
  function(err, results, fields) {
    console.log('results:', results); // results contains rows returned by server
    console.log('fields:', fields); // fields contains extra meta data about results, if available
  }
);

module.exports.getAll = connection.query;