import axios from 'axios'

const SETCART = 'FETCHCART'
const ADDPRODUCTLINE = 'ADDPRODUCTLINE'
const UPDATEQUANTITY = 'UPDATEPRODUCTLINE'
const DELETEPRODUCTLINE = 'DELETEPRODUCTLINE'
const CHECKOUT = 'CHECKOUT'

export const setCart = cart => ({
  type: SETCART,
  cart
})

export const addProductLine = productLine => ({
  type: ADDPRODUCTLINE,
  productLine
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

const hardCodedCart = {
  productLines: [],
  status: "cart",
  totalCost: 0
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case SETCART:
     return action.cart

    case ADDPRODUCTLINE:
      return ///???

    case UPDATEQUANTITY:
      return ///???

    case DELETEPRODUCTLINE:
      return ///???

    case CHECKOUT:
      return ///???

    default:
      return state
  }
}

export default reducer

/// Update Total Cost????

