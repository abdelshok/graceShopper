'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const User = db.model('users')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router() // eslint-disable-line new-cap
  .get('/', forbidden('only admins can list users'), (req, res, next) =>
    User.findAll()
    .then(users => res.json(users))
    .catch(next))
  .post('/', (req, res, next) =>
    User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(() => res.status(500).json('error'))) // we send this back to action creator
       // so that it handles the error and changes the state of the userExists
    // to true, so that our message can be displayed
    .get('/:id', mustBeLoggedIn, (req, res, next) =>
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next))
