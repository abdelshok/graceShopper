import { combineReducers } from 'redux'
import auth from './auth'
import guest from './guest'
import cart from './cart'
import products from './product'
import product from './singleProduct'
import user from './user'
import order from './order'

import account from './account'


const rootReducer = combineReducers({
  auth: auth,
  guest: guest,
  cart: cart,
  products: products,
  product: product,
  user: user,
  account: account,
  order: order
})

export default rootReducer
