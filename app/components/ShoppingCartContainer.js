import React, { Component } from 'react'
import ShoppingCartComponent from './ShoppingCartComponent'
import {connect} from 'react-redux'

import {deleteProductLineFromCart} from '../reducers/cart'


const MapStateToProps = (state) => {
	const cart = state.cart
	return {
		productLines: cart.productLines,
		totalCost: cart.totalCost
	}
}

const MapDispatchToProps = (dispatch) => {
	return {
		deleteProduct: (productLineId) => {
			dispatch(deleteProductLineFromCart(productLineId))
		}
	}
}


class ShoppingCartContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
	}
this.clickHandler = this.clickHandler.bind(this)
}


clickHandler (productLineId) {
	event.preventDefault()
	this.props.deleteProduct(productLineId)
}


	render() {
		if (this.props.productLines.length) {
			return (
				<div>
					<ShoppingCartComponent {...this.props} onClick={this.clickHandler}  />
				</div>
			)
		} else {
			return (
				<div>
				<h1>Your Cart Is Empty!</h1>
				</div>
				)
		}
	}


}


export default connect(MapStateToProps, MapDispatchToProps)(ShoppingCartContainer)

