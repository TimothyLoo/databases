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

connection.connect((err)=>{
  if (err) { throw new Error ('This is a connection error'); }
});

//move this to models
// This query gets all messages (gets used in models/messages)
// connection.query(SELECT * from messages);
//   function(err, results, fields) {
//     console.log('fields:', fields); // fields contains extra meta data about results, if available
//     console.log('results:', results); // results contains rows returned by server
//   }
// );
module.exports = connection;
// // This query gets all messages (gets used in models/messages)
// connection.query(
//   'SELECT * FROM `messages`',
//   function(err, results, fields) {
//     console.log('fields:', fields); // fields contains extra meta data about results, if available
//     console.log('results:', results); // results contains rows returned by server
//   }
// );