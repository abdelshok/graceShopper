'use strict'; // eslint-disable-line semi

const db = require('APP/db')
//const User = db.model('users')
const Artists = db.model('artists')

//const {mustBeLoggedIn, forbidden} = require('./auth.filters')

const express = require('express')
const router = new express.Router()
module.exports = router


router.get('/', function( req, res, next) {
  Artists.findAll()
  .then(function(artists) {
    res.send(artists)
  }
  )
  .catch(next)
})

router.get('/:id', function(req, res, next) {
    Artists.findById(req.params.id)
    .then(function(artist){
      res.send(artist)
    })
    .catch(next)
})
