import axios from 'axios'

//ACTION
const LOAD_PRODUCT = 'LOAD_PRODUCT'


//Single Product Action Creator
export const loadProduct = (product, artist) => {
  return {
    type: LOAD_PRODUCT,
    product, artist}
  }

//Single Product Thunk Dispatcher
export const loadSingleProduct = productId => {
  return dispatch => {
		axios.get(`/api/products/${productId}`)
		.then(response => {
      axios.get(`/api/artists/${response.data.artist_id}`)
			.then(artist =>{
			  dispatch(loadProduct(response.data, artist.data))
	  	})
  })
  }
}

const initialProductState = {
  product: {},
  artist: {}
}

//Single Product Reducer
const singleProductReducer = ( state = initialProductState, action) => {

  const newState = Object.assign({}, state)

	switch (action.type) {

		case LOAD_PRODUCT:
      newState.product = action.product
      newState.artist = action.artist
			return newState

		default:
			return state
	}
}

export default singleProductReducer
