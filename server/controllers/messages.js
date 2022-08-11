var models = require('../models');
var express = require('express');

//using models functions

module.exports = {
  get: function (req, res) {
    console.log('req:', req);
    console.log('res:', res);
    res.send(models.messages.getAll('messages'));
  }, // a function which handles a get request for all messages, just needs some basic error handling
  post: function (req, res) {} // a function which handles posting a message to the database sends post request to models
};


// app.get("/page/:id",function(request, response){
//   var id = request.params.id;
//   // do something with id
//   // send a response to user based on id
//   var obj = { id : id, Content : "content " +id };

//   response.writeHead(200, {"Content-Type": "application/json"});
//   response.write(JSON.stringify(obj));
// });

