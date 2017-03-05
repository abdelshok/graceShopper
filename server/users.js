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
    .catch(() => res.status(500).json('error')))
  // transformed the catch above from next so that it sends back an error to
  // our action creator, which is going to catch that error
  // and dispatch and action which is going to change the state and let the 
  // person trying to create an account know that a user already exists with 
  // this account. TLDR: this helps so that we can let the action know there 
  // is an error and the user know that the account w the email exists
    .get('/:id', mustBeLoggedIn, (req, res, next) =>
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next))
