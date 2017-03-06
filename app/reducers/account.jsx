import axios from 'axios'

//ACTION
const LOAD_ACCOUNT = 'LOAD_ACCOUNT'


//Load Account Action Creator
//The state will contain the user and all of the product lines associated with that user
export const loadAccount = (user, productLines) => {
  return {
    type: LOAD_ACCOUNT,
    user,
    productLines}
  }

//Load Account Thunk Dispatcher
export const loadAccountOrders = userId => {
  return dispatch => {
		axios.get(`/api/users/${userId}`)
		.then(user => {
      axios.get(`/api/orders/${userId}`)
			.then(productLines =>{
			  dispatch(loadAccount(user.data, productLines.data))
	  	})
  })
  }
}

const initialProductState = {
  user: {},
  productLines: []
}

//Load Account Reducer
const accountReducer = ( state = initialProductState, action) => {

  const newState = Object.assign({}, state)

	switch (action.type) {

		case LOAD_ACCOUNT:
      newState.user = action.user
      newState.productLines = action.productLines
			return newState
		default:
			return state
	}
}

export default accountReducer
