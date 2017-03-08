const db = require('APP/db')
const Order = require('./order')
import chai from 'chai'
const expect = chai.expect


describe('Order', () => {

beforeEach('Await database sync', () => db.didSync)
afterEach('Clear the tables', () => db.truncate({cascade: true}))

	describe('definition', () => {

		it('has expected date definition', () => {
			expect(Order.attributes.date).to.be.an('object')
		})

		it('has expected status definition', () => {
			expect(Order.attributes.status).to.be.an('object')
		})

		it('has expected totalCost definition', () => {
			expect(Order.attributes.totalCost).to.be.an('object')
		})

		it('has expected otherDetails definition', () => {
			expect(Order.attributes.otherDetails).to.be.an('object')
		})

	})


	describe('instance methods', () => {

		describe('setTotalCost', () => {

			let testOrder
			beforeEach(() => {
				testOrder = Order.build({
					date: null,
					status: 'cart',
					totalCost: 1000
				})
			})

			it('exists', ()  => {
				expect(testOrder.setTotalCost).to.be.a('function')
			})

	

		})

		

	})	

})



