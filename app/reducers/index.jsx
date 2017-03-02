import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  cart: require('./cart').default,
  products: require('./product').default,
  product: require('./singleProduct').default
})

export default rootReducer
