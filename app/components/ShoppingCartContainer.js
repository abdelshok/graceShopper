import React, { Component } from 'react'
import ShoppingCartComponent from './ShoppingCartComponent'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
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
  //Future feature to implement: pass in quantity of products to delete so that value can be restored in the database
	this.props.deleteProduct(productLineId)
}

checkoutHandler () {
  event.preventDefault()
  browserHistory.push('/checkout')
}

	render() {
	 if (this.props.productLines && this.props.productLines.length){
				return (
					<div className="shopping-cart-container">
						<ShoppingCartComponent {...this.props} onClick={this.clickHandler}  />
			            <h1 className="shopping-cart-footer">Total Cost: ${this.props.productLines && this.props.productLines.reduce(function(acc, val) {
			              return acc + val.totalCost
			            }, 0)}</h1>
						<RaisedButton label="CHECKOUT" default={true} style={{margin: 12}} onClick={() => this.checkoutHandler()} />
					</div>
					)
		} else {
			return (
				<div className="shopping-cart-footer">
					<h1>Your Cart Is Empty!</h1>
					<RaisedButton label="Shop The Collection" default={true} style={{margin: 12}} onClick={() => browserHistory.push('/products')} />
				</div>
				)
		}
	}

}


export default connect(MapStateToProps, MapDispatchToProps)(ShoppingCartContainer)
