const db = require('APP/db')
const ProductLine = require('./product-line')
import chai from 'chai'
const expect = chai.expect


describe('Product Line', () => {

  beforeEach('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({cascade: true}))

  describe('definition', () => {

    it('has expected quantity definition', () => {
      expect(ProductLine.attributes.quantity).to.be.an('object')
    })

    it('has expected unitCost definition', () => {
      expect(ProductLine.attributes.unitCost).to.be.an('object')
    })

    it('has expected totalCost definition', () => {
      expect(ProductLine.attributes.totalCost).to.be.an('object')
    })


  })

  describe('hooks', () => {

    describe('total Cost field', () => {


      it('is set to the right amount before the instance is created ', () => {

        ProductLine.create({
          quantity: 2,
          unitCost: 500
        })
        .then(productCreated => {
        expect(productCreated.totalCost).to.equal(1000)

        })
      })
    })
  })
})  