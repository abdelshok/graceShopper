import axios from 'axios'
import { browserHistory } from 'react-router'

import {login} from './auth'
import {setCurrentCart, addProductLine} from './cart'

const USER_EXISTS = 'USER_EXISTS'

const initialState = {
	userExists: false
}

export const userAlreadyExists = () => ({
	type: USER_EXISTS
})

export const createUser = (newUser) => 
(dispatch, getState) => {
	axios.post('/api/users', newUser)
	.then(response => {
		dispatch(login(response.data.email, response.data.password))
		console.log('new user created', response.data)
		return response
	})
	.then(response => {
		axios.post('/api/orders/addCart', {user_id: response.data.id, status: 'cart'})
		.then(cartForUser => {
			let guestCartProductLines = JSON.parse(window.localStorage.getItem('guest-cart-productLines'))
				guestCartProductLines.map(productLine => {
					axios.post('/api/orders/addProduct', {
						quantity: productLine.product.quanity,
						unitCost: productLine.product.price,
						product_id: productLine.product.id,
						order_id: cartForUser.data.id
					})
					.then(res => res.data)
					.then(createdProductLine => {
						dispatch(addProductLine(createdProductLine))
					})
				})
	})
	})
	.catch(response => {
			// here, if the user already exists, it will catch the error
			// sent by our express route and dispatch this action creator
			// which will change the state and show a message in our view
			console.log('user exists')
			if (response.data === undefined) {
				dispatch(userAlreadyExists())
			}
		})
}

const reducer = (state = initialState, action) => {

	const userStatus = initialState.userExists

	switch (action.type) {

		case USER_EXISTS:
		return Object.assign({}, state, {userExists: !userStatus })

		default:
		return state
	}

}

export default reducer