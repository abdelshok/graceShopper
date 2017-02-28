'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

// bcrypt docs: https://www.npmjs.com/package/bcrypt

const Sequelize = require('sequelize')
const db = require('APP/db')

const Artist = db.define('artists', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
    },
  bio: {
    type: Sequelize.TEXT,
  },
})

module.exports = Artist
