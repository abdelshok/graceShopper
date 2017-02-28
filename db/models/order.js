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
    }
},
{
  hooks: {
    afterCreate: function(){
        this.getProductLines()
        .then(function(lines){
          let sum = 0
          lines.forEach(function(line){
            sum +=line.totalCost
          })
          this.totalCost = sum
        })
    },
    afterUpdate: function(){
        this.getProductLines()
        .then(function(lines){
          let sum = 0
          lines.forEach(function(line){
            sum +=line.totalCost
          })
          this.totalCost = sum
        })
    }
  }
})

module.exports = Order


