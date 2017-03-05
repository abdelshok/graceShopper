import { combineReducers } from 'redux'
import auth from './auth'
import guest from './guest'
import cart from './cart'
import products from './product'
import product from './singleProduct'

const rootReducer = combineReducers({
  auth: auth,
  guest: guest,
  cart: cart,
  products: products,
  product: product
})

export default rootReducer
