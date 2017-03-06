import axios from 'axios'
import {login} from './auth'

const USER_EXISTS = 'USER_EXISTS'

const initialState = {
	userExists: false
}

export const userAlreadyExists = () => ({
	type: USER_EXISTS
})

export const createUser = (newUser) => 
(dispatch) => {
	axios.post('/api/users', newUser)
	.then(response => {
		dispatch(login(response.data.email, response.data.password))
	})
	.catch(response => {
			// here, if the user already exists, it will catch the error
			// sent by our express route and dispatch this action creator
			// which will change the state and show a message in our view
			if (response.data === undefined) {
				dispatch(userAlreadyExists())
			}
		})
}


const reducer = (state = initialState, action) => {

	switch (action.type) {

		case USER_EXISTS:
		return Object.assign({}, state, {userExists: true})

		default:
		return state
	}

}

export default reducer