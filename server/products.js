'use strict'; // eslint-disable-line semi

const db = require('APP/db')
//const User = db.model('users')
const Products = db.model('products')


//const {mustBeLoggedIn, forbidden} = require('./auth.filters')

const express = require('express')
const router = new express.Router()
module.exports = router


router.get('/', function( req, res, next) {
  Products.findAll()
  .then(function(products) {
    res.send(products) // switch it to jSON??

  })
  .catch(next)
})


router.get('/:id', function(req, res, next) {
    Products.findById(req.params.id)
    .then(function(product){
      res.send(product) // res.json or send, why?
    })
    .catch(next)
})

//Decrement the quantity in inventory by 1
router.put('/:id', function(req, res, next) {
    Products.findById(req.params.id)
    .then(function(product){
      return product.update({quantity: product.quantity - 1})
        .then(updatedProduct =>{
          res.send(updatedProduct)
        })
    })
    .catch(next)
})
