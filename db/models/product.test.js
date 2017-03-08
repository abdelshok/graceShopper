const db = require('APP/db')
const Product = require('./product')
import chai from 'chai'
const expect = chai.expect

describe ('Product', () => {

	beforeEach('Await database sync', () => db.didSync)
	afterEach('Clear the tables', () => db.truncate({cascade: true}))

	describe ('definition', () => {

		it ('has expected title definition', () => {
			expect(Product.attributes.title).to.be.an('object')
		})

		it ('has expected year definition', () => {
			expect(Product.attributes.year).to.be.an('object')
		})

		it ('has expected price definition', () => {
			expect(Product.attributes.price).to.be.an('object')
		})

		it ('has expected url definition', () => {
			expect(Product.attributes.url).to.be.an('object')
		})

		it ('has expected tags definition', () => {
			expect(Product.attributes.tags).to.be.an('object')
		})

		it ('has expected description definition', () => {
			expect(Product.attributes.description).to.be.an('object')
		})

		it ('has expected medium definition', () => {
			expect(Product.attributes.medium).to.be.an('object')
		})

		it ('has expected dimensions definition', () => {
			expect(Product.attributes.dimensions).to.be.an('object')
		})

		it ('has expected quantity definition', () => {
			expect(Product.attributes.quantity).to.be.an('object')
		})

		it ('has expected artistName definition', () => {
			expect(Product.attributes.artistName).to.be.an('object')
		})


	})


	describe('validations', () => {

		it ('defaults quantity to 0', () => {
			const product = Product.build()
			expect(product.quantity).to.be.equal(0)
		})
		
	})	

})