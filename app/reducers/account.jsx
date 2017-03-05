import axios from 'axios'

//ACTION
const LOAD_ACCOUNT = 'LOAD_ACCOUNT'


//Single Product Action Creator
export const loadAccount = (user, productLines) => {
  return {
    type: LOAD_ACCOUNT,
    user,
    productLines}
  }

//Single Product Thunk Dispatcher
export const loadAccountOrders = userId => {
  //console.log("IN THE THUNK, ", userId)
  return dispatch => {
		axios.get(`/api/users/${userId}`)
		.then(user => {
     // console.log("User", user.data)
      axios.get(`/api/orders/${userId}`)
			.then(productLines =>{
     //   console.log("Product Lines:", productLines.data)
			  dispatch(loadAccount(user.data, productLines.data))
	  	})
  })
  }
}

const initialProductState = {
  user: {},
  productLines: []
}

//Single Product Reducer
const accountReducer = ( state = initialProductState, action) => {

  const newState = Object.assign({}, state)

	switch (action.type) {

		case LOAD_ACCOUNT:
      newState.user = action.user
      newState.productLines = action.productLines
      //console.log("IN REDUCER, STATE= ", newState)
			return newState

		default:
			return state
	}
}

export default accountReducer
