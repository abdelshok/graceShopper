'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const User = db.model('users')
const Orders = db.model('orders')
const ProductLines = db.model('productLines')
const Product = db.model('products')

//const {mustBeLoggedIn, forbidden} = require('./auth.filters')

const express = require('express')
const router = new express.Router()
module.exports = router

router.get('/:id', function(req, res, next){
  console.log("Account route API")
  User.findById(req.params.id)
  .then((user) =>{
    res.sendStatus(200).send(user)
  })
  .catch(next)
})
