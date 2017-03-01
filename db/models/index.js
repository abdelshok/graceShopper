'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.
//const db =  require('APP/db')
const User = require('./user')
const OAuth = require('./oauth')
const Product = require('./product')
const Artist = require('./artist')
const ProductLine = require('./product-line')
const Order = require('./order')



User.hasMany(Order)
Product.belongsTo(Artist)
ProductLine.belongsTo(Product)
ProductLine.belongsTo(Order)
Order.hasMany(ProductLine)

OAuth.belongsTo(User)
User.hasOne(OAuth)



module.exports = {User, Product, Artist, Order, ProductLine}

