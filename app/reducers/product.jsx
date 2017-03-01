import axios from 'axios'

//ACTION
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'


//ACTION CREATOR
export const loadProducts = products => {
	console.log(products)
	return {
	type: LOAD_PRODUCTS,
	products} 
}

export const loadAllProducts = function() {
	return dispatch => {
		axios.get('/api/products')
		.then(response => {
			console.log("in loadAllProducts: ", response.data);
			dispatch(loadProducts(response.data));
		})
	}
}

//REDUCER
const productReducer = (products = [], action) => {


	switch (action.type) {

		case LOAD_PRODUCTS:
			console.log('loading new state')
			console.log(action.products)
			return action.products;
			break;

		default: 
			return products;
	}

}


export default productReducer
