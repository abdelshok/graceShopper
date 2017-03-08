'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

// bcrypt docs: https://www.npmjs.com/package/bcrypt

const Sequelize = require('sequelize')
const db = require('APP/db')

const product = db.define('products', {
  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  year: {
    type: Sequelize.INTEGER
  },
  url: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      notEmpty: true
    }
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  description: {
    type: Sequelize.TEXT
  },
  medium: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  dimensions: {
    type: Sequelize.ARRAY(Sequelize.INTEGER), //ARRAY(Sequelize.INTEGER),
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }, 
  artistName: {
    type: Sequelize.STRING 
  }
})

module.exports = product // changed it from Product to product because UpperCase implies 
// constructor function