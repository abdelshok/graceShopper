'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

// bcrypt docs: https://www.npmjs.com/package/bcrypt

const Sequelize = require('sequelize')
const db = require('APP/db')

const ProductLine = db.define('productLines', {
  quantity: {
    type: Sequelize.INTEGER,
     defaultValue: 1
  },
  unitCost: {
    type: Sequelize.FLOAT,
    validate: {
      notEmpty: true
    }
  },
  totalCost: {
    type: Sequelize.FLOAT
  }
},
{
  hooks: {
    afterCreate: function(){
      this.totalCost = this.unitCost*this.quantity;
    },
    afterUpdate: function(){
      this.totalCost = this.unitCost*this.quantity;
    }
  }
})

module.exports = ProductLine

