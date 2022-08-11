var db = require('../db');

//get req from controller, use that as a query to send to database for info

module.exports = {
  // a function which produces all the messages
  getAll: function (resultFromContr) { // messages
    let sqlQuery = 'SELECT * FROM ' + resultFromContr;
    console.log('sqlQuery:', sqlQuery);
    db.query(sqlQuery, (err, results)=>{
      if (err) {
        throw new Error ('This is a models error');
      } else {
        console.log (results);
      }
    });
  },

  create: function () { /*INSERT INTO messages (...columns) VALUES (...rows)*/ } // a function which can be used to insert a message into the database
};