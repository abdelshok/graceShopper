import axios from 'axios'

//ACTION
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

//ACTION CREATOR
export const loadProducts = products => {
	return {
		type: LOAD_PRODUCTS,
		products}
	}

export const loadAllProducts = function() {
	return dispatch => {
		axios.get('/api/products')
		.then(response => {
		dispatch(loadProducts(response.data))
			})
		}
	}

//REDUCER
const productReducer = (products = [], action) => {

	switch (action.type) {

		case LOAD_PRODUCTS:
		return action.products

		default:
		return products
	}
}

export default productReducer
