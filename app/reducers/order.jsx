import axios from 'axios'

//ACTION
const LOAD_ORDER = 'LOAD_ORDER'


//Load Order Action Creator
//The state will contain the user and all of the product lines associated with that user
export const loadOrder = (order) => {
  return {
    type: LOAD_ORDER,
    order}
  }

//Load Order Thunk Dispatcher
export const loadCurrentOrder = orderId => {
  return dispatch => {
		axios.get(`/api/orders/order/${orderId}`)
		.then(order => {
			  dispatch(loadOrder(order.data))
	  	})
  }
}

const initialState = {
  productLines: []
}

//Load Order Reducer
const orderReducer = ( state = initialState, action) => {

  const newState = Object.assign({}, state)

	switch (action.type) {

		case LOAD_ORDER:
      newState.order = action.order
			return newState
		default:
			return state
	}
}

export default orderReducer
