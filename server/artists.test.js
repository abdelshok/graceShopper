'use strict' // eslint-disable-line semi

const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const app = require('./start')
const Artist = require('../db/models/artist')

describe('api/artists', () => {

	before('Await database sync', () => db.didSync)
	afterEach('Clear the tables', () => db.truncate({cascade: true}))

	describe('GET /', () => {

		it('serves up all artists in the right format', ()=> {

			Artist.create({
				name: 'Picasso',
				bio: 'Cut off his ear'
			})
			.then(() => {
				request(app)
				.get('/api/artists')
				.expect(200)
				.then(res => {
					expect(res.body).to.be.an('array')
					expect(res.body.length).to.be.equal(1)
					expect(res.body[0].id).to.equal(1)
				})
			})

		})

	})

	describe('GET /:id', () => {


		it ('returns specific artist', () => {

			Artist.create({
				name: 'Dali',
				bio: 'Moustache'
			})
			.then(() => {
				request(app)
				.get('/api/artists/2')
				.expect(200)
				.then(res => {
					expect(res.body).to.be.an('object')
					expect(res.body.id).to.be.equal(2)
					expect(res.body.name).to.equal('Dali')
				})
			})

		})

	})
})