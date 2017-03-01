import React, { Component } from 'react'
import ShoppingCartComponent from './ShoppingCartComponent'
import {connect} from 'react-redux'


const MapStateToProps = (state) => {
	const cart = state.cart
	return {
		productLines: cart.productLines
	}
}

// const MapDispatchToProps = (dispatch) => {

// }




class ShoppingCartContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {

		}}



	render() {
		if (this.props.productLines.length) {
			return (
				<div>
					<ShoppingCartComponent {...this.props} />
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


export default connect(MapStateToProps)(ShoppingCartContainer)

