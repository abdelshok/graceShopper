import axios from 'axios'

const SETCART = 'FETCHCART'
const ADDPRODUCTLINE = 'ADDPRODUCTLINE'
const UPDATEQUANTITY = 'UPDATEPRODUCTLINE'
const DELETEPRODUCTLINE = 'DELETEPRODUCTLINE'
const CHECKOUT = 'CHECKOUT'
const UPDATETOTALCOST = 'UPDATETOTALCOST'

export const setCart = cart => ({
  type: SETCART,
  cart
})

export const addProductLine = productLine => ({
  type: ADDPRODUCTLINE,
  productLines: [productLine]
})

export const updateQuantity = (productLine, quantity) => ({
  type: UPDATEQUANTITY,
  productLine,
  quantity
})

export const deleteProductLine = productLine => ({
  type: DELETEPRODUCTLINE,
  productLine
})

export const checkout = status => ({
  type: CHECKOUT,
  status
})

export const updateTotalCost = totalCost => ({
  type: UPDATETOTALCOST,
  totalCost
})

const initialState = {
  productLines: [],
  status: 'cart',
  totalCost: 0
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETCART:
     return action.cart

    case ADDPRODUCTLINE:
      return  Object.assign({}, state, {productLines: state.productLines.concat(action.productLines)})

    case UPDATEQUANTITY:
      return ///???

    case DELETEPRODUCTLINE:
      return ///???

    case CHECKOUT:
      return ///???

    case UPDATETOTALCOST:
      return

    default:
      return state
  }
}

export default reducer


