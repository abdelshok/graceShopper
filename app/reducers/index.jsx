import { combineReducers } from 'redux'
import auth from './auth'
import guest from './guest'
import cart from './cart'
import products from './product'
import product from './singleProduct'
import account from './account'

const rootReducer = combineReducers({
  auth: auth,
  guest: guest,
  cart: cart,
  products: products,
  product: product,
  account: account
})

export default rootReducer
