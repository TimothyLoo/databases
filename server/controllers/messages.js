var models = require('../models');
// var express = require('express');

//using models functions

module.exports = {
  get: function (req, res) {
    console.log('req.body:', req.body);
    console.log('please be string:', models.messages.getAll());
    models.messages.getAll((err, results)=>{
      if (err) { throw err; }
      else {
        let data = JSON.stringify(results);
        res.send(data);
      }
    });
  }, // a function which handles a get request for all messages, just needs some basic error handling
  post: function (req, res) {
    console.log(req.body);
    models.messages.create(req.body.username, req.body.message, req.body.roomname, 1);
    res.end();
  } // a function which handles posting a message to the database sends post request to models
};