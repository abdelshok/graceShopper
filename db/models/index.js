'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.
//const db =  require('APP/db')
const User = require('./user')
const OAuth = require('./oauth')
const Product = require('./product')
const Artist = require('./artist')


Product.belongsTo(Artist)


OAuth.belongsTo(User)
User.hasOne(OAuth)
module.exports = {User, Product, Artist}
