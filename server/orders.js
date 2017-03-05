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
      }, include: [{
        model: ProductLines, as: 'productLines',
        include: [{
          model: Product, as: 'product'
        }]
      }]
    })
    .then(order => res.send(order))
    .catch(next)
})

//Route to retrieve all productLines from a given user
// router.get('/:userId', function(req, res, next){
//   Orders.findAll({where: {user_id: req.params.userId}})
//   .then(orders => {
//     console.log(orders.length)
//     var ordersArray = orders.map(function(order){
//       console.log(order.id)
//       return ProductLines.findAll({where: {order_id: order.id}})
//     })
//     Promise.all(ordersArray)
//     .then(values =>{
//       res.send(values);
//     })

//   })
//   .catch(next)
// })

router.get('/:userId', function(req, res, next){
  Orders.findAll({
    where: {user_id: req.params.userId},
    include: [{
        model: ProductLines, as: 'productLines',
        include: [{
          model: Product, as: 'product'
        }]
    }]
  })
  .then(orders => {
      res.send(orders);
  })
  .catch(next)
})




router.post('/addProduct', function(req, res, next){
  ProductLines.create(req.body)
  .then(createdProductLine => {
    return createdProductLine.setOrder(req.body.order_Id)
  })
  .then(createdProductLine => {
    return createdProductLine.setProduct(req.body.product_Id)
  })
  .then(createdProductLine =>
    ProductLines.findOne({
      where: {
        id: createdProductLine.id
      }, include: [{
        model: Product, as:'product'
      }]
    }))
  .then(finalCreatedProductLine => res.send(finalCreatedProductLine))
  .catch(next)
})

router.delete('/:id', function(req, res, next){
  ProductLines.findById(req.params.id)
  .then(productLine => productLine.destroy())
  .then(res.sendStatus(200))
  .catch(next)
})

router.put('/checkout/:cartId', function(req, res, next){
  Orders.update({
    status: 'order',
  }, {
    where: {
      id: req.params.cartId
    }
  })
  .then(affectedRows => res.json(affectedRows))
  .catch(next)
})


