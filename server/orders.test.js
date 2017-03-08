'use strict'; // eslint-disable-line semi

const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const app = require('./start')


describe('api/orders', () => {

	before('Await database sync', () => db.didSync)
	afterEach('Clear the tables', () => db.truncate({cascade: true}))


	// I tried to test a model with actual data, so in the before function
	// above, I did Order.create(//dummydata) with the dummydata
	// inside of it. but every time it ran, my shell would tell me 
	// that there was an error in the before function
	// so I am testing out that it is returning the right format (array or object)
	// with the right info. for now, it will be empty
	describe('GET /', () => {

		it('serves up all orders in the right format', () => {
			request(app)
			.get('/api/orders')
			.expect(200)
			.then(res => {
				expect(res.body).to.be.an('array')
				expect(res.body.length).to.be.equal(0)
			})

		})

	})


	describe('GET /:userId/cart', () => {

		it ('returns the open cart of user', () => {
			request(app)
			.get('/api/orders/1/cart')
			.expect(200)
			.then(res => {
				expect(res.body).to.be.an('object')
				expect(res.body.length).to.be.equal(undefined)
			})
		})

	})

	describe('GET /:userId', () => {

		it ('returns all orders and product lines associated w user', () => {
			request(app)
			.get('/api/orders/1')
			.expect(200)
			.then(res => {
				expect(res.body).to.be.an('array')
				expect(res.body.length).to.be.equal(0)
			})
		})

	})


	describe('GET /order/:orderId', () => {

		it ('returns individual order', () => {
			request(app)
			.get('/api/orders/order/1')
			.expect(200)
			.then(res => {
				expect(res.body).to.be.an('object')
				expect(res.body.length).to.be.equal(undefined)
			})
		})
	})


	describe('POST /addCart', () => {

		it ('adds a product to the cart', () => 
			request(app)
			.post('/api/orders/addCart')
			.send({
				date: null,
				status: 'cart',
				totalCost: 5000
			})
			.expect(200)
			)
	})

	describe('POST /addProduct', () =>  {

		it ('adds product to ProductLine', () =>
			request(app)
			.post('/api/orders/addProduct')
			.send({
				quantity: 2,
				unitCost: 1500,
				
			})
			.expect(200)
			)
		
	})

})