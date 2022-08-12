const Sequelize = require('sequelize');
const ormDb = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});



module.exports = {
// users table
  Users: ormDb.define('users', {
    email: Sequelize.STRING
  }),

  // messages table
  Messages: ormDb.define('messages', {
    username: Sequelize.STRING,
    text: Sequelize.STRING,
    roomname: Sequelize.STRING,
    id_users: Sequelize.INTEGER
  })
};

// Use promises to asynchronously add a user to the users table,
// then get all users back
// models
// Users.sync()
//   .then(()=>{
//     return Users.create({email: 'email@HR.com'});
//   })
//   .then(()=>{
//     return Users.findAll();
//     ormDb.close();
//   })
//   .catch((err)=>{
//     console.log(err);
//     ormDb.close();
//   });

