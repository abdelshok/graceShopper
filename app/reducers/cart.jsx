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
  totalCost: 0,
  otherDetails: {}
}

//THUNK FUNCTIONS

export const setCurrentCart = (userId) =>
  (dispatch, getState) => {
    axios.get(`/api/orders/${userId}/cart`)
        .then(res => res.data)
        .then(cart => dispatch(setCart({id: cart.id, productLines: cart.productLines, status: 'cart', totalCost: 0, otherDetails: {} })))
        .catch(() => dispatch(setCart(initialState)))
  }

export const convertCartToOrderAuth = (cartId, details) =>
    (dispatch, getState) => {
      axios.put(`/api/orders/checkoutAuth`, {
        cartId: cartId,
        userId: getState().auth.id,
        details: details
      })
      .then(res => {
        if (res.data.length>1){
          dispatch(setCart(initialState))
          }
        }
      )
      .catch(error => console.error('Order failed', error))
}

export const convertCartToOrderGuest = (cart, details) =>
    (dispatch) => {
      axios.put(`/api/orders/checkoutGuest`, {
        cart,
        details
      })
      .then(res => {
        dispatch(setCart(initialState))
        window.localStorage.setItem('guest-cart-productLines', JSON.stringify([]))
        }
      )
      .catch(error => console.error('Order failed', error))
}

export const addProductToCart = (productId) =>
  (dispatch, getState) =>
  //fetch item from db using product id
    axios.get(`/api/products/${productId}`)
        .then(res => res.data)
        .then(product => {
          //check if anyone is logged in if they are continue with lines 82-96
          if (getState().auth !== '') {
          let currentOrderId = getState().cart.id
          axios.post('/api/orders/addProduct', {
            quantity: product.quantity,
            unitCost: product.price,
            product_Id: product.id,
            order_Id: currentOrderId
            })
            .then(res => res.data)
            .then(createdProductLine => dispatch(addProductLine(createdProductLine)))
            .then(() => {
              if (getState().auth !== ''){
                dispatch(setCurrentCart(getState().auth.id))
            }
          })
          //if not logged in, but instead a guest user
          } else {
            //create product line object from the product instance pulled from db
            let productLine = {
              id: product.id,
              quantity: 1,
              unitCost: product.price,
              totlCost: product.price * product.quantity,
              product: product
            }
            //add that product to the store/state
            dispatch(addProductLine(productLine))
            //then add save record of that product in browser localstorage
            //first create array to hold productLine obj
            let productLineArr = []
            productLineArr.push(productLine)
            //check if guest user already has productLines saved
            if (window.localStorage.getItem('guest-cart-productLines')){
              //if they do, fetch them and parse them back into their original non-JSON state
              let pastProductLines = JSON.parse(window.localStorage.getItem('guest-cart-productLines'))
              //concat productLineArr and pastProductLineArr into a single array
              let allProductLines = pastProductLines.concat(productLineArr)
              //reset the local storage with this new group of productLines by turning into JSON
              window.localStorage.setItem('guest-cart-productLines', JSON.stringify(allProductLines))
            } else {
              //if no productLines current exist in localStorage, turn it into JSON and add it
              window.localStorage.setItem('guest-cart-productLines', JSON.stringify(productLineArr))
            }
          }})
        .catch(error => console.error(error.message))


export const deleteProductLineFromCart = (id) =>
    (dispatch, getState) => {
      if (getState.auth !== ''){ // not sure why this expression is working. . .
        let currentProductLines = JSON.parse(window.localStorage.getItem('guest-cart-productLines'))
        currentProductLines = currentProductLines.filter(el => el.id !== id)
        window.localStorage.setItem('guest-cart-productLines', JSON.stringify(currentProductLines))
        dispatch(deleteProductLine(id))
      } else {
        axios.delete(`/api/orders/${id}`)
        .then(() => dispatch(deleteProductLine(id)))
        .catch(error => console.error('could not delete product', error))
      }
    }


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

