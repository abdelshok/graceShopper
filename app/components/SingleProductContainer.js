
import React, { Component } from 'react'
import SingleProductComponent from './SingleProductComponent'
import {connect} from 'react-redux'
import { addProductToCart, addProductToCartGuest } from '../reducers/cart'
import {browserHistory} from 'react-router'


const mapStateToProps = ({product, auth}) => {
	return {
		product,
    auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (productId) => {
			dispatch(addProductToCart(productId))
		},
    addToCartGuest: (product) => {
      dispatch(addProductToCartGuest(product, dispatch))
    }
	}
}

class SingleProductContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			open: false,
			}
		this.handleClick = this.handleClick.bind(this)
		this.handleCloseCheckout = this.handleCloseCheckout.bind(this)
		this.handleCloseShop = this.handleCloseShop.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
	}

	handleClick(productId) {
    if(this.props.auth === ''){
      this.props.addToCartGuest(this.props.product.product)
    } else {
		  this.props.addToCart(this.props.product.product)
    }
	}

	handleCloseShop (){
		this.setState({
			open: false,
		})
		browserHistory.goBack()
	}

	handleCloseCheckout (){
		this.setState({
			open: false,
		})
		browserHistory.push('/cart')
	}

	handleOpen (){
    this.setState({open: true})
  }

	render() {

		return (
			<div>
			<SingleProductComponent
			{...this.props}
			open={this.state.open}
			action={this.state.action}
			handleClick={this.handleClick}
			handleOpen={this.handleOpen}
			handleCloseCheckout={this.handleCloseCheckout}
			handleCloseShop={this.handleCloseShop} />
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(SingleProductContainer)



