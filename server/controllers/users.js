var models = require('../models');

module.exports = {
  get: function (req, res) {
    // models.users.getAll();
    models.ormUsers.Users.sync()
      .then(()=>{
        return models.ormUsers.Users.findAll();
      })
      .then((dataObj)=>{
        res.send(JSON.stringify(dataObj));
        models.ormUsers.Users.close();
      })
      .catch((err)=>{
        throw err;
        models.ormUsers.Users.close();
      });
  },
  post: function (req, res) {
    console.log(req.body);
    console.log(models.ormUsers);
    models.ormUsers.Users.create( {email: req.body.username} );
    // models.users.create(req.body.username);
    res.end();
  }
};
