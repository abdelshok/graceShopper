import axios from 'axios'

//CONSTANTS
const SET_CART = 'SET_CART'
const ADD_PRODUCTLINE = 'ADD_PRODUCTLINE'
const UPDATE_QUANTITY = 'UPDATE_PRODUCTLINE'
const DELETE_PRODUCTLINE = 'DELETE_PRODUCTLINE'
const CHECKOUT = 'CHECKOUT'
const UPDATE_TOTAL_COST = 'UPDATE_TOTAL_COST'


//ACTION CREATORS
export const setCart = cart => ({
  type: SET_CART,
  cart
})

export const addProductLine = productLine => ({
  type: ADD_PRODUCTLINE,
  productLine: [productLine]
})

export const updateQuantity = (productLine, quantity) => ({
  type: UPDATE_QUANTITY,
  productLine,
  quantity
})

export const deleteProductLine = id => ({
  type: DELETE_PRODUCTLINE,
  id
})

export const checkout = status => ({
  type: CHECKOUT,
  status
})

export const updateTotalCost = totalCost => ({
  type: UPDATE_TOTAL_COST,
  totalCost
})


//DO NOT DELETE ME!!!!!
const initialState = {
  id: null,
  productLines: [],
  status: 'cart',
  totalCost: 0
}

//THUNK FUNCTIONS
export const setCurrentCart = (userId) =>
  dispatch =>
    axios.get(`/api/orders/${userId}/cart`)
        .then(res => res.data)
        .then(cart => dispatch(setCart({id: cart.id, productLines: cart.productLines, status: 'cart', totalCost: 0 })))
        .catch(() => dispatch(setCart(initialState)))

export const addProductToCart = (productId) =>
  (dispatch, getState) =>
    axios.get(`/api/products/${productId}`)
        .then(res => res.data)
        .then(product => {
          let currentOrderId = getState().cart.id
          axios.post('/api/orders/addProduct', {
            quantity: product.quantity,
            unitCost: product.price,
            product_Id: product.id,
            order_Id: currentOrderId
            })
            .then(createdProductLine => dispatch(addProductLine(createdProductLine)))
            .then(() => dispatch(setCurrentCart(getState().auth.id))) 
            .catch(error => console.error(error.message))
          })

export const deleteProductLineFromCart = (id) =>
    dispatch =>
    axios.delete(`/api/orders/${id}`)
    .then(() => dispatch(deleteProductLine(id)))
    .catch(error => console.error('could not delete product', error))

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
     return action.cart

    case ADD_PRODUCTLINE:
      return  Object.assign({}, state, {productLines: state.productLines.concat(action.productLine)})

    case UPDATE_QUANTITY:
      return ///???

    case DELETE_PRODUCTLINE:
      return Object.assign({}, state, {productLines: state.productLines.filter(el => el.id !== action.id)})

    case CHECKOUT:
      return ///???

    case UPDATE_TOTAL_COST:
      return

    default:
      return state
  }
}

export default reducer

