import React, { Component } from 'react'
import ShoppingCartComponent from './ShoppingCartComponent'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import {deleteProductLineFromCart} from '../reducers/cart'


const MapStateToProps = (state) => {
	const cart = state.cart
	return {
		cart,
		productLines: cart.productLines,
		totalCost: cart.totalCost,
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
		this.clickHandler = this.clickHandler.bind(this)

}


clickHandler (productLineId) {
	event.preventDefault()
	this.props.deleteProduct(productLineId)
}

checkoutHandler () {
  event.preventDefault()
  browserHistory.push('/checkout')
}


	render() {
	 if (this.props.productLines && this.props.productLines.length){
				return (
					<div>
						<ShoppingCartComponent {...this.props} onClick={this.clickHandler}  />

            <h3>Total Cost: ${this.props.productLines && this.props.productLines.reduce(function(acc, val) {
              return acc + val.totalCost;
            }, 0)}</h3>
						

						<RaisedButton label="CHECKOUT" primary={true} style={{margin: 12}} onClick={() => this.checkoutHandler()} />

					</div>
			)
		} else {
			return (
				<div>
				<h1>Your Cart Is Empty!</h1>
				<RaisedButton label="Let's Go Shopping!" primary={true} style={{margin: 12}} onClick={() => browserHistory.push('/products')} />
				</div>
				)
		}
	}


}


export default connect(MapStateToProps, MapDispatchToProps)(ShoppingCartContainer)
