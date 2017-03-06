'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

// bcrypt docs: https://www.npmjs.com/package/bcrypt

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
    date: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.ENUM('cart', 'order')
    },
    totalCost: {
      type: Sequelize.FLOAT
    },
    otherDetails: {
      type: Sequelize.JSON
    }

},
{
  setterMethods: {
    setTotalCost: function(orders){
        orders.getProductLines()
        .then(function(lines){
          let sum = 0
          lines.forEach(function(line){
            sum +=line.totalCost
          })
          orders.totalCost = sum
        })
     }
    }
  })

module.exports = Order


