import axios from 'axios'

const CREATE_USER = 'CREATE_USER'
const USER_EXISTS = 'USER_EXISTS'

const initialState = {
	newUserCreated: false,
	userExists: false
}

export const createNewUser = () => ({
	type: CREATE_USER
})

export const userAlreadyExists = () => ({
	type: USER_EXISTS
})

export const createUser = (newUser) => 
(dispatch) => {
	axios.post('/api/users', newUser)
	.then(response => {
		dispatch(createNewUser())
	})
	.catch(response => {
			// now here i catch the error if the user email already exissts
			// and it will dispatch an action creator which is going to change
			// the state from userExists: false to true
			// which is going to be used in the container
			// it works 
			if (response.data === undefined) {
				dispatch(userAlreadyExists())
			}
		})
}

const reducer = (state = initialState, action) => {

	switch (action.type) {

		case CREATE_USER:
		return Object.assign({}, state, {newUserCreated: true})

		case USER_EXISTS:
		return Object.assign({}, state, {userExists: true})

		default:
		return state
	}

}

export default reducer