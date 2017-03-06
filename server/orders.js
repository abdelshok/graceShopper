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

//Return all product lines associated with a given user
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

router.put('/checkoutAuth', function(req, res, next){
  let affected;
  Orders.update({
    status: 'order',
    otherDetails: req.body.details
  }, {
    where: {
      id: req.body.cartId
    }
  })
  .then(affectedRows => {
    affected = affectedRows
    return Orders.create({
      date: new Date(),
      status: 'cart',
      totalCost: 0,
      user_id: req.body.userId
    })
  })
  .then((newCart) => {
    res.json([affected, newCart])
  })
  .catch(next)
})

router.put('/checkoutGuest', function(req, res, next){
  let order
  const orderLines = req.body.cart.productLines

  Orders.create({
    date: new Date(),
    status: 'order',
    totalCost: 0,
    user_id: null,
    otherDetails: req.body.details
  })
  .then((newOrder) =>{
      order = newOrder
  })
  .then(() => {
      orderLines.forEach((line) => {
        ProductLines.create({
          quantity: line.quantity,
          unitCost: line.unitCost,
          totalCost: line.totalCost
        })
          .then(createdProductLine => {
            return createdProductLine.setOrder(order.id)
          })
          .then(createdProductLine => {
            return createdProductLine.setProduct(line.product.id)
          })
      })
  })
  .then(()=> {
      res.json(order)
  })
  .catch(next)
})



