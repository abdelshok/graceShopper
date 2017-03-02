'use strict'; // eslint-disable-line semi

const db = require('APP/db')
//const User = db.model('users')
const Orders = db.model('orders')
const ProductLines = db.model('productLines')

//const {mustBeLoggedIn, forbidden} = require('./auth.filters')

const express = require('express')
const router = new express.Router()
module.exports = router

router.get('/Hello', function (req, res, next) {
  res.send('Here');
})

router.get('/', function( req, res, next) {
  Orders.findAll()
  .then(function(orders) {
    res.send(orders)
  }
  )
  .catch(next)
})


router.get('/:userId/cart', function(req, res, next) {
    Orders.findOne({
      where: {
        user_id: req.params.userId,
        status: 'cart'
      }, include: [{model: ProductLines, as:'productLines'}]
    })
    .then(order => res.send(order))
    .catch(next)
})

router.post('/addProduct', function(req, res, next){
  ProductLines.create(req.body)
  .then(createdProductLine => res.send(createdProductLine))
  .catch(next)
})

router.delete('/delete/:id', function(req, res, next){
  console.log('I made it to the route:', req.params.id)
  ProductLines.findById(req.params.id)
  .then(productLine => productLine.destroy())
  .then(res.sendStatus(200))
  .catch(next)
})
