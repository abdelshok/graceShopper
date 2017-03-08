'use strict'; // eslint-disable-line semi

const db = require('APP/db')
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

//Return all orders and products lines associated with a given user
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
      res.send(orders)
  })
  .catch(next)
})

//return an individual order
router.get('/order/:orderId', function(req, res, next){
  console.log("Inside return individual order")
  Orders.findById(req.params.orderId,{
   where: {user_id: req.params.userId},
    include: [{
        model: ProductLines, as: 'productLines',
        include: [{
          model: Product, as: 'product'
        }]
    }]
  })
  .then(order => {
      res.send(order);
  })
  .catch(next)
 })

router.put('/order/:orderId/:productId', function(req, res, next){
  //Updates the quantity of a given product line by one
    ProductLines.findOne({ where: {
      order_id: req.params.orderId,
      product_id: req.params.productId
     }
    })
    .then(productLine => {
      return productLine.update({ //update the quantity and total cost by one unit
        quantity: productLine.quantity + 1,
        totalCost: productLine.totalCost + productLine.unitCost
      })
      .then(updatedLine => {
        res.send(updatedLine)
      })
      .catch(next)
    })
    .catch(next)
})


router.post('/addCart', function (req, res, next){
  Orders.create(req.body)
  .then(createdOrder => res.send(createdOrder))
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
        model: Product, as: 'product'
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
  let affectedR
  Orders.update({
    status: 'order',
    otherDetails: req.body.details
  }, {
    where: {
      id: req.body.cartId
    }
  })
  .then(affectedRows => {
    affectedR = affectedRows
    return Orders.findById(req.body.cartId)
  })
  .then((affectedOrder) => {
    return affectedOrder.setTotalCost()
  })
  .then(() => {
    return Orders.create({
      date: new Date(),
      status: 'cart',
      totalCost: 0,
      user_id: req.body.userId
    })
  })
  .then((newCart) => {
    res.json([affectedR, newCart])
  })
  .catch(next)
})

router.put('/checkoutGuest', function(req, res, next){
  let order
  const orderLines = req.body.cart.productLines
  const linesPromises = []

  Orders.create({
    date: new Date(),
    status: 'order',
    totalCost: 0,
    user_id: null,
    otherDetails: req.body.details
  })
  .then((newOrder) =>{
      order = newOrder
      orderLines.forEach((line) => {
        console.log(line)
        const aLinePromise = ProductLines.create({
          quantity: line.quantity,
          unitCost: line.unitCost,
          totalCost: line.totalCost,
          order_id: order.id,
          product_id: line.product.id
        })
      linesPromises.push(aLinePromise)
      })
      console.log('linesPromises.length',linesPromises.length)
      return Promise.all(linesPromises)
  })
  .then((values) => {
    return order.setTotalCost()
  })
  .then(() => {
    res.json(order)
  })
  .catch(next)
})



