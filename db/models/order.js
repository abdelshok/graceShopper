'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

// bcrypt docs: https://www.npmjs.com/package/bcrypt

const Sequelize = require('sequelize')
const db = require('APP/db')
const ProductLines = db.model('productLines')

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
  instanceMethods: {
    setTotalCost: function(){
      console.log("this in setTotalCost", this);
        const that = this
        ProductLines.findAll({
          where: {
            order_id: this.id
          }
        })
        .then(function(lines){
          let sum = 0
          lines.forEach(function(line){
            sum +=line.totalCost
          })
          that.update({
            totalCost: sum
          })
        })
     }
  }
})

module.exports = Order


