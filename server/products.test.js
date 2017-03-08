'use strict' // eslint-disable-line semi

const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const app = require('./start')
const Product = require('../db/models/product')

describe('api/products', () => {

	before('Await database sync', () => db.didSync)
	afterEach('Clear the tables', () => db.truncate({cascade: true}))



	describe('GET /', () => {

		it('serves up all products ', () => {

			Product.create({
				title: 'Eternal',
				year: 2017,
				url:'www.daliMuseum.com',
				price: 9999,
				tags: ['red'],
				description: 'Ignorance is bliss',
				medium: 'Painting',
				dimensions: [108, 0, 109],
				quantity: 1,
				artistName: 'Dali'
			})
			.then(newProduct => {
				request(app)
				.get('/api/products')
				.expect(200)
				.then(res => {
					expect(res.body).to.be.an('array')
					expect(res.body.length).to.be.equal(1)
					expect(res.body[0].title).to.equal('Eternal')
				})

			})
			
		})

	})

	describe('GET /:id', () => {

		it ('serves specific product', () => {

			Product.create({
				title: 'Solitude',
				year: 2017,
				url:'www.daliMuseum.com',
				price: 9999,
				tags: ['red'],
				description: 'And Damnation',
				medium: 'Painting',
				dimensions: [108,0,109],
				quantity: 2,
				artistName: 'Dali'
			})
			.then(newProduct => {
				request(app)
				.get('/api/products/2')
				.expect(200)
				.then(res => {
					expect(res.body).to.be.an('object')
					expect(res.body.id).to.be.equal(2)
					expect(res.body.title).to.equal('Solitude')
				})
			})

			
		})

	})


	describe('PUT', () => {

		it('decrements the quantity in inventory by 1', () => {

			Product.create({
				title: 'Spotless',
				year: 2017,
				url:'www.daliMuseum.com',
				price: 9999,
				tags: ['red'],
				description: 'Mind',
				medium: 'Painting',
				dimensions: [108,0,109],
				quantity: 2,
				artistName: 'Dali'
			})
			.then(newProduct => {
				request(app)
				.put('api/products/3')
				.expect(200)
			})

		})

		it('redirects to the product it updated', () => {

			Product.create({
				title: 'Beautiful',
				year: 2017,
				url:'www.daliMuseum.com',
				price: 9999,
				tags: ['red'],
				description: 'Mind',
				medium: 'Painting',
				dimensions: [108,0,109],
				quantity: 2,
				artistName: 'Dali'
			})
			.then(newProduct => {
				request(app)
				.put('/api/products/4')
				.redirects(1)
				.then(res=> expect(res.body).to.contain({
					title: 'Beautiful'
				}))
			})

		})

	})

})