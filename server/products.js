'use strict'; // eslint-disable-line semi

const db = require('APP/db')
//const User = db.model('users')
const Products = db.model('products')

//const {mustBeLoggedIn, forbidden} = require('./auth.filters')

const express = require('express')
const router = new express.Router()
module.exports = router

router.get('/Hello', function (req, res, next) {
  res.send("Here");
})

router.get('/', function( req, res, next) {
  Products.findAll()
  .then(function(products) {
    res.send(products)
  }
  )
  .catch(next)
})

router.get('/:id', function(req, res, next) {
    Products.findById(req.params.id)
    .then(function(product){
      res.send(product);
    })
    .catch(next)
})
